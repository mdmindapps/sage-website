import type { FunnelCommunity } from "@/lib/funnel";

/**
 * "More from <creator>" — the creator's other live offers (their communities), cross-sold on the
 * coach funnel, mirroring the app's OtherOffersBlock. Display cards for now; each community getting
 * its own web funnel + join flow is a later phase, so these aren't clickable yet.
 */
export default function OtherOffers({
  communities,
  creatorName,
}: {
  communities: FunnelCommunity[];
  creatorName: string;
}) {
  if (!communities?.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
        More from {creatorName.split(" ")[0]}
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {communities.map((cm) => (
          <div
            key={cm.id}
            className="overflow-hidden rounded-2xl border border-border bg-white"
          >
            <div className="relative aspect-[16/9] w-full bg-ink/5">
              {cm.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cm.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">
                Community
              </p>
              <p className="mt-1 text-base font-bold text-ink">
                {cm.title || "Community"}
              </p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
