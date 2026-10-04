/* The creator's own view of her list, opened with a private key in the link.
 *
 * Its real job is not to show addresses — it is to show the number moving. A creator who posts
 * once and then hears nothing goes quiet; a creator who watches 23 become 58 posts again without
 * being asked. So the count is the page, and everything else supports it.
 *
 * Addresses are masked here on purpose: if she forwards the link to someone, nothing leaks. The
 * full list only comes out through the CSV download.
 *
 * MOCK until the tables exist — renders sample rows so the layout can be judged.
 */
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export const metadata = { title: "Your list", robots: { index: false, follow: false } };

type Row = { position: number; email: string; created_at: string };

/** She does not need to read 200 addresses on a phone — the number and the trend are the page. */
const SHOWN = 20;

/** Deterministic sample so the page can be reviewed before any table exists. ?n= sets the size. */
function mask(email: string) {
  const [user, domain] = email.split("@");
  const head = user.slice(0, 1);
  return `${head}${"*".repeat(Math.max(user.length - 1, 2))}@${domain}`;
}


export default async function LiveList({
  params,
  searchParams,
}: {
  params: Promise<{ handle: string }>;
  searchParams: Promise<{ k?: string; n?: string }>; // n = row count, for previewing the layout
}) {
  const { handle } = await params;
  const sp = await searchParams; // the key is checked here once the tables exist

  const file = path.join(process.cwd(), "waitlist-data", `${handle}.json`);
  if (!/^[a-z0-9-]+$/.test(handle) || !fs.existsSync(file)) notFound();
  const creator = JSON.parse(fs.readFileSync(file, "utf8")) as {
    name: string;
    clubName: string;
    price: { founding: string };
  };

  // The key in the link is the whole gate. If the database cannot be reached we show nothing —
  // never a fallback, because a fallback renders this page without ever checking the key.
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const srk = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !srk) notFound();
  const db = createClient(url, srk, { auth: { persistSession: false } });

  // Looked up BY THE SLUG IN THE URL, then compared — never "find the creator who owns this key".
  // That direction is what makes one creator's key useless on another creator's page.
  const { data: cr } = await db
    .from("waitlist_creators")
    .select("view_key")
    .eq("slug", handle)
    .single();
  if (!cr?.view_key || cr.view_key !== sp.k) notFound();

  const { data } = await db
    .from("waitlist_signups")
    .select("position, email, created_at")
    .eq("creator_slug", handle)
    .order("position", { ascending: false });
  const rows = (data ?? []) as Row[];

  const total = rows.length;
  const first = creator.price?.founding ?? "$24.99";
  const firstNum = Number(first.replace(/[^0-9.]/g, "")) || 0;

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[900px] mx-auto px-5 md:px-8">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
          {creator.clubName}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
          Your list
        </h1>
        <p className="text-muted mt-2">
          Only you have this link. Nobody else can see these names.
        </p>

        {/* The number is the page. */}
        <div className="mt-8 bg-ink text-white rounded-3xl p-8 md:p-10">
          <p className="text-6xl md:text-7xl font-bold leading-none" style={{ letterSpacing: "-0.03em" }}>
            {total}
          </p>
          <p className="text-white/70 mt-3 text-lg">people waiting for you to open the doors</p>
          {/* The ceiling, not a forecast. A conversion rate here would be a number we invented. */}
          <p className="text-white/45 text-sm mt-5 max-w-lg leading-relaxed">
            That&apos;s <b className="text-white/80">${(total * firstNum).toLocaleString("en-US", { maximumFractionDigits: 0 })}</b> a month if
            they all join at {first}. Every post you make moves this number.
          </p>
          {/* Sits with the number, not with the list: it answers "and if I never open the club?" at
              the moment she is looking at what the list is worth. */}
          <p className="text-white/45 text-sm mt-3 max-w-lg leading-relaxed">
            The list is yours to keep whatever you decide about the club.
          </p>
        </div>

        {/* The list itself, masked. */}
        <div className="mt-12">
          {/* Stacked on a phone: side by side, both the heading and the button broke onto two lines. */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-4">
            <h2 className="text-lg font-bold text-ink" style={{ letterSpacing: "-0.01em" }}>
              Everyone on it
            </h2>
            <a
              href={`/api/waitlist/${handle}/csv?k=${encodeURIComponent(sp.k ?? "")}`}
              className="inline-flex shrink-0 items-center gap-2 h-11 px-5 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap hover:bg-primary-dark transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download the full list
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {rows.slice(0, SHOWN).map((r, i) => (
              <div
                key={r.position}
                className={`flex items-center gap-4 px-5 py-3.5 ${
                  i ? "border-t border-border" : ""
                }`}
              >
                <span className="w-10 text-sm font-bold text-subtle tabular-nums">#{r.position}</span>
                <span className="flex-1 text-ink text-[15px] truncate">{mask(r.email)}</span>
                <span className="text-sm text-subtle whitespace-nowrap">
                  {new Date(r.created_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
            ))}
          </div>

          {rows.length > SHOWN && (
            <p className="mt-3 text-sm text-muted">
              Showing the {SHOWN} most recent. The other{" "}
              <b className="text-ink">{rows.length - SHOWN}</b> are in the download.
            </p>
          )}

          {/* Masking does NOT protect a leaked link — the same key downloads the full list. What it
              protects is the screenshot: she will photograph this page for a story the day the
              number looks good, and that must not publish other people's addresses. */}
          <p className="mt-4 text-sm text-subtle leading-relaxed">
            Addresses are hidden here so you can screenshot this page without putting {total}{" "}
            people&apos;s emails in a story. The full ones are in the download.
          </p>
        </div>
      </div>
    </div>
  );
}
