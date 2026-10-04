/* Every waitlist we are running, in one table. Ours, not a creator's.
 *
 * The two links per creator are NOT stored anywhere: they are built here from the slug and the
 * view_key. Storing them as text would mean the same fact in two places, and the day the domain or
 * the path changes the stored copy starts lying while the built one stays right.
 *
 * Gated by WAITLIST_ADMIN_KEY, which lives in the environment — not in the database, so a leak of
 * one creator's row cannot open this, and not in git. The key arrives once in a link and is traded
 * for an httpOnly cookie by /waitlist/admin/enter, so it never sits in the address bar afterwards.
 */
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import CopyLinks from "./CopyLinks";

export const dynamic = "force-dynamic";

const SITE = "https://www.sageacademy.app";

type Creator = { slug: string; display_name: string | null; instagram: string | null; view_key: string | null };
type Signup = { creator_slug: string; created_at: string };

export const metadata = { title: "Waitlists", robots: { index: false, follow: false } };

export default async function WaitlistAdmin({
  searchParams,
}: {
  searchParams: Promise<{ k?: string }>;
}) {
  const sp = await searchParams;
  const gate = process.env.WAITLIST_ADMIN_KEY;
  if (!gate) notFound();

  // Arrived with the key in the link: hand it to the route that can set a cookie, and come back
  // to the clean address. Checked here too, so a wrong key never causes a redirect worth noticing.
  if (sp.k) {
    if (sp.k !== gate) notFound();
    redirect(`/waitlist/admin/enter?k=${encodeURIComponent(sp.k)}`);
  }

  const cookie = (await cookies()).get("wl_admin")?.value;
  if (!cookie || cookie !== gate) notFound();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const srk = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !srk) notFound();
  const db = createClient(url, srk, { auth: { persistSession: false } });

  const { data: cData } = await db
    .from("waitlist_creators")
    .select("slug, display_name, instagram, view_key")
    .order("created_at", { ascending: true });
  const creators = (cData ?? []) as Creator[];

  const { data: sData } = await db
    .from("waitlist_signups")
    .select("creator_slug, created_at");
  const signups = (sData ?? []) as Signup[];

  const todayKey = new Date().toISOString().slice(0, 10);
  const stats = new Map<string, { total: number; today: number; last: string | null }>();
  for (const s of signups) {
    const day = new Date(s.created_at).toISOString().slice(0, 10);
    const cur = stats.get(s.creator_slug) ?? { total: 0, today: 0, last: null };
    cur.total += 1;
    if (day === todayKey) cur.today += 1;
    if (!cur.last || s.created_at > cur.last) cur.last = s.created_at;
    stats.set(s.creator_slug, cur);
  }

  const grand = signups.length;
  const grandToday = signups.filter(
    (s) => new Date(s.created_at).toISOString().slice(0, 10) === todayKey,
  ).length;

  const when = (iso: string | null) =>
    iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "—";

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
          Waitlists
        </h1>
        <p className="text-muted mt-2">
          {creators.length} {creators.length === 1 ? "creator" : "creators"} · {grand} on the lists
          {grandToday > 0 && <span className="text-primary font-semibold"> · +{grandToday} today</span>}
        </p>

        {creators.length === 0 ? (
          <p className="mt-10 text-muted">
            Nothing yet. A creator appears here once her row is in{" "}
            <code className="text-ink">waitlist_creators</code>.
          </p>
        ) : (
          <div className="mt-8 flex flex-col gap-3">
            {creators.map((c) => {
              const st = stats.get(c.slug) ?? { total: 0, today: 0, last: null };
              const pub = `${SITE}/waitlist/${c.slug}`;
              const priv = c.view_key ? `${pub}/live?k=${c.view_key}` : "";
              return (
                <div
                  key={c.slug}
                  className="rounded-2xl border border-border bg-white p-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-ink text-[17px]" style={{ letterSpacing: "-0.01em" }}>
                      {c.display_name || c.slug}
                    </p>
                    <p className="text-sm text-muted mt-0.5">
                      /{c.slug}
                      {c.instagram && <span> · @{c.instagram}</span>}
                      <span> · last {when(st.last)}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-ink leading-none">{st.total}</p>
                      <p className="text-[11px] text-subtle mt-1">on the list</p>
                    </div>
                    <div className="text-right w-12">
                      <p
                        className={`text-2xl font-bold leading-none ${st.today > 0 ? "text-primary" : "text-subtle/40"}`}
                      >
                        {st.today > 0 ? `+${st.today}` : "0"}
                      </p>
                      <p className="text-[11px] text-subtle mt-1">today</p>
                    </div>
                    {priv ? (
                      <CopyLinks pub={pub} priv={priv} />
                    ) : (
                      /* Without a key her private page 404s, so it is worth shouting about. */
                      <p className="text-xs font-semibold text-danger max-w-[140px]">
                        No view_key — her private page will not open
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-10 text-xs text-subtle leading-relaxed max-w-xl">
          The private link opens one creator&apos;s list and downloads her addresses. It is hers —
          send it to her, and to nobody else.
        </p>
      </div>
    </div>
  );
}
