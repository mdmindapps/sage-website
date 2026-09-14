import Link from "next/link";
import type { FunnelCommunity } from "@/lib/funnel";

/**
 * "More from <creator>" — the creator's other live offers, cross-sold on a funnel, drawn like the
 * app's Discovery cards: banner, type, title, card text, then "by <creator>" and the price.
 * Community cards link to /<handle>/<slug>; the optional coaching card links to /<handle>.
 */
function ByLine({ creatorName, avatarUrl, price, members }: { creatorName: string; avatarUrl?: string | null; price: number | null; members?: number }) {
  return (
    <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-subtle">
      {members != null && members > 0 && (
        <>
          <span>{members} members</span>
          <span aria-hidden="true">·</span>
        </>
      )}
      <span className="inline-flex items-center gap-1.5">
        {avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="" className="h-5 w-5 rounded-full object-cover" />
        )}
        by {creatorName}
      </span>
      {price != null && (
        <>
          <span aria-hidden="true">·</span>
          <span className="font-semibold text-primary">${price}/mo</span>
        </>
      )}
    </div>
  );
}

export default function OtherOffers({
  communities,
  creatorName,
  handle,
  coaching,
  creatorAvatar,
}: {
  communities: FunnelCommunity[];
  creatorName: string;
  handle: string;
  coaching?: { price_monthly: number | null; title: string | null; card_banner_url?: string | null; card_text?: string | null; avatar_url?: string | null } | null;
  creatorAvatar?: string | null;
}) {
  const hasCoaching = !!coaching;
  if (!communities?.length && !hasCoaching) return null;
  const avatar = creatorAvatar ?? coaching?.avatar_url ?? null;

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
            {coaching!.card_banner_url && (
              <div className="relative aspect-[16/10] w-full bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coaching!.card_banner_url} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            )}
            <div className="flex flex-col p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">1:1 Coaching</p>
              <p className="mt-1 text-base font-bold text-ink">{coaching!.title || "1:1 Coaching"}</p>
              <p className="mt-0.5 line-clamp-3 text-sm text-muted">{coaching!.card_text || "Personal plan + check-ins"}</p>
              <ByLine creatorName={creatorName} avatarUrl={avatar} price={coaching!.price_monthly} />
            </div>
          </Link>
        )}

        {communities.map((cm) => (
          <Link
            key={cm.slug || cm.id}
            href={`/${handle}/${cm.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:border-primary/40"
          >
            <div className="relative aspect-[16/10] w-full bg-ink/5">
              {cm.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cm.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              )}
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Community</p>
              <p className="mt-1 text-base font-bold text-ink">{cm.title || "Community"}</p>
              {cm.tagline && <p className="mt-0.5 line-clamp-2 text-sm text-muted">{cm.tagline}</p>}
              <ByLine creatorName={creatorName} avatarUrl={avatar} price={cm.price_monthly} members={cm.member_count} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
