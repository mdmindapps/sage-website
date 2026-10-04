/* The creator's list as a CSV, with the real addresses.
 *
 * Same key as her live page, because this is the one place the full addresses leave the server —
 * the page itself only ever shows them masked, so a forwarded link leaks nothing. Wrong key, 404,
 * and the response says nothing about whether that creator exists.
 */
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** A leading =, +, - or @ makes a spreadsheet treat the cell as a formula. */
function cell(value: string | number | null) {
  const s = String(value ?? "");
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  return /[",\n]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ handle: string }> },
) {
  const { handle } = await params;
  const key = new URL(req.url).searchParams.get("k");

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const srk = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !srk) return new NextResponse("Not found", { status: 404 });

  const db = createClient(url, srk, { auth: { persistSession: false } });

  const { data: creator } = await db
    .from("waitlist_creators")
    .select("view_key, display_name")
    .eq("slug", handle)
    .single();

  if (!creator?.view_key || !key || creator.view_key !== key) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { data: rows, error } = await db
    .from("waitlist_signups")
    .select("position, email, created_at")
    .eq("creator_slug", handle)
    .order("position", { ascending: true });

  if (error) {
    console.error("[waitlist csv] read failed", { handle, message: error.message });
    return new NextResponse("Try again", { status: 500 });
  }

  const lines = [
    ["#", "Email", "Joined the list"].join(","),
    ...(rows ?? []).map((r) =>
      [cell(r.position), cell(r.email), cell(new Date(r.created_at).toISOString().slice(0, 10))].join(","),
    ),
  ];
  // BOM so Excel opens UTF-8 addresses correctly instead of mangling them.
  const body = "﻿" + lines.join("\r\n") + "\r\n";
  const today = new Date().toISOString().slice(0, 10);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${handle}-waitlist-${today}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
