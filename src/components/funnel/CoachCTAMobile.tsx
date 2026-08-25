import Link from "next/link";

function initials(name: string) {
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

/** Below-media block for the 1:1 coach funnel: a tidy "Coach · Price" row (shown all sizes) plus a
   sticky bottom "Train with X" bar on mobile. The Sage Premium breakdown is shown on /join, not here. */
export default function CoachCTAMobile({
  handle,
  creatorName,
  avatarUrl,
  priceMonthly,
}: {
  handle: string;
  creatorName: string;
  avatarUrl: string | null;
  priceMonthly: number | null;
}) {
  const firstName = creatorName.split(" ")[0];
  const price = priceMonthly != null ? `$${priceMonthly}` : "—";

  return (
    <>
      {/* creator + price row */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex min-w-0 items-center gap-2.5">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt={creatorName} className="h-9 w-9 rounded-full object-cover" />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
              {initials(creatorName)}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-subtle">Coach</p>
            <p className="truncate text-sm font-semibold text-ink">{creatorName}</p>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[11px] font-medium text-subtle">Price</p>
          <p className="text-lg font-bold text-ink">
            {price}
            <span className="text-xs font-medium text-subtle">/mo</span>
          </p>
        </div>
      </div>

      {/* sticky bottom bar (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[1080px] items-center gap-3 px-5 py-3">
          <span className="shrink-0 text-base font-bold text-ink">
            {price}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </span>
          <Link
            href={`/join/${handle}`}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-primary text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
          >
            Train with {firstName}
          </Link>
        </div>
      </div>
    </>
  );
}
