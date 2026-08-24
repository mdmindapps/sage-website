import Link from "next/link";

// The app-shown Sage Premium price. Stripe shows the real total at checkout.
const PREMIUM_PRICE = "$4.99";

/**
 * Funnel price card — the CLEAN sales-page card: price summary + one CTA.
 * The account + payment steps live on their own screen (/join/<handle>), so the
 * sales page stays uncluttered (no inline signup form).
 */
export default function SubscribeFlow({
  handle,
  creatorName,
  priceMonthly,
}: {
  handle: string;
  creatorName: string;
  priceMonthly: number | null;
}) {
  const coachPrice = priceMonthly != null ? `$${priceMonthly}` : "—";
  const firstName = creatorName.split(" ")[0];

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_2px_20px_rgba(17,24,28,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-widest text-subtle">
        You&apos;ll sign up for
      </p>

      {/* two-line breakdown — mirrors the app's coach sales page */}
      <div className="mt-3 overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">
              Coaching · {firstName}
            </p>
            <p className="text-xs font-medium text-subtle">by card</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {coachPrice}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">
              Sage Premium · the app
            </p>
            <p className="text-xs font-medium text-subtle">by card</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {PREMIUM_PRICE}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </p>
        </div>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-subtle">
        Your coach works through Sage — two separate subscriptions, cancel either
        anytime.
      </p>

      <Link
        href={`/join/${handle}`}
        className="mt-4 flex h-13 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
      >
        Start with {firstName}
      </Link>
      <p className="mt-3 text-center text-xs font-medium text-subtle">
        Secure card payment · Cancel anytime
      </p>

      {/* privacy / trust */}
      <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-surface p-3.5">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 shrink-0"
        >
          <path
            d="M12 2l7 4v6c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-4z"
            stroke="var(--color-muted)"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-xs leading-relaxed text-muted">
          Your coach sees the tracking data you choose to share — never your chats
          or progress photos.
        </p>
      </div>
    </div>
  );
}
