import Link from "next/link";
import type { FunnelCommunity } from "@/lib/funnel";

/**
 * "More from <creator>" — the creator's other live offers (communities), cross-sold on a funnel,
 * mirroring the app's OtherOffersBlock. Each card links to that community's own funnel
 * (/<handle>/<slug>). Optionally a coaching card links to the coach funnel (/<handle>).
 */
export default function OtherOffers({
  communities,
  creatorName,
  handle,
  coaching,
}: {
  communities: FunnelCommunity[];
  creatorName: string;
  handle: string;
  coaching?: { price_monthly: number | null; title: string | null } | null;
}) {
  const hasCoaching = !!coaching;
  if (!communities?.length && !hasCoaching) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
        More from {creatorName.split(" ")[0]}
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {hasCoaching && (
          <Link
            href={`/${handle}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/40"
          >
            <div className="flex h-full flex-col p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">
                1:1 Coaching
              </p>
              <p className="mt-1 text-base font-bold text-ink">
                {coaching!.title || "1:1 Coaching"}
              </p>
              <p className="mt-0.5 text-sm text-muted">Personal plan + check-ins</p>
              {coaching!.price_monthly != null && (
                <p className="mt-2.5 text-sm font-semibold text-ink">
                  ${coaching!.price_monthly}/mo
                </p>
              )}
            </div>
          </Link>
        )}

        {communities.map((cm) => (
          <Link
            key={cm.slug || cm.id}
            href={`/${handle}/${cm.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/40"
          >
            <div className="relative aspect-[16/9] w-full bg-ink/5">
              {cm.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cm.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              )}
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">
                Community
              </p>
              <p className="mt-1 text-base font-bold text-ink">{cm.title || "Community"}</p>
              {cm.tagline && (
                <p className="mt-0.5 line-clamp-2 text-sm text-muted">{cm.tagline}</p>
              )}
              <div className="mt-2.5 flex items-center gap-3 text-xs font-medium text-subtle">
                {cm.member_count > 0 && <span>{cm.member_count} members</span>}
                {cm.price_monthly != null && (
                  <span className="text-ink">${cm.price_monthly}/mo</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
