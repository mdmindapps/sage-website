/* The only door into the waitlist tables.
 *
 * The browser does not talk to the database here: the table has no policies and no grants, so a
 * bot that finds the endpoint cannot skip the checks by posting straight at Supabase. Everything
 * the form needs — shape, throwaway domains, a real mail server, rate limit — happens once, here,
 * and the row goes in with the service role.
 *
 * Deliberately NOT double opt-in. A confirmation step costs 20-40% of the list, and the number's
 * job is to convince a creator to open her club, not to be a perfect forecast. Liviu's call,
 * 2026-10-04, and the right one.
 */
import { NextResponse } from "next/server";
import { promises as dns } from "node:dns";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Throwaway inboxes: the person gets the launch email and never sees it. */
const DISPOSABLE = new Set([
  "mailinator.com", "10minutemail.com", "guerrillamail.com", "tempmail.com", "temp-mail.org",
  "yopmail.com", "trashmail.com", "sharklasers.com", "getnada.com", "dispostable.com",
  "maildrop.cc", "fakeinbox.com", "throwawaymail.com", "mohmal.com", "emailondeck.com",
]);

/** Crude per-IP limit. Resets with the serverless instance, which is fine for this volume. */
const seen = new Map<string, { n: number; first: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const hit = seen.get(ip);
  if (!hit || now - hit.first > WINDOW_MS) {
    seen.set(ip, { n: 1, first: now });
    return false;
  }
  hit.n += 1;
  return hit.n > MAX_PER_WINDOW;
}

async function domainTakesMail(domain: string) {
  try {
    const mx = await dns.resolveMx(domain);
    return mx.length > 0;
  } catch {
    // Some domains answer on A only. Treat a DNS failure as "cannot confirm" rather than "fake",
    // because turning away a real address costs more than keeping a dead one.
    try {
      await dns.resolve(domain);
      return true;
    } catch {
      return false;
    }
  }
}

export async function POST(req: Request) {
  let body: { handle?: string; email?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a field no human sees and every careless bot fills in. Answer 200 so it learns nothing.
  if (body.website) return NextResponse.json({ ok: true, position: null });

  const handle = (body.handle || "").trim().toLowerCase();
  const email = (body.email || "").trim().toLowerCase();

  if (!/^[a-z0-9-]{1,40}$/.test(handle)) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (!SHAPE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "too_many" }, { status: 429 });
  }

  const domain = email.split("@")[1];
  if (DISPOSABLE.has(domain)) {
    return NextResponse.json({ error: "disposable" }, { status: 400 });
  }
  if (!(await domainTakesMail(domain))) {
    return NextResponse.json({ error: "no_such_domain" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[waitlist] SUPABASE_SERVICE_ROLE_KEY missing — nothing is being saved");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }
  const db = createClient(url, key, { auth: { persistSession: false } });

  const { data, error } = await db
    .from("waitlist_signups")
    .insert({ creator_slug: handle, email, consent_at: new Date().toISOString(), source: "page" })
    .select("position")
    .single();

  // 23505 = already on this creator's list. From their side that is the same as success, and we
  // give back the place they already hold.
  if (error?.code === "23505") {
    const { data: existing } = await db
      .from("waitlist_signups")
      .select("position")
      .eq("creator_slug", handle)
      .ilike("email", email)
      .single();
    return NextResponse.json({ ok: true, position: existing?.position ?? null, already: true });
  }
  if (error) {
    console.error("[waitlist] insert failed", { handle, code: error.code, message: error.message });
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, position: data?.position ?? null });
}
