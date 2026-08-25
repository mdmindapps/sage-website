"use client";

import { useState } from "react";
import Link from "next/link";

// Display-only Premium prices (the real charge comes from Stripe). DEV values — update the
// monthly to the prod price ($12.99) at cutover; annual ($39.99) matches prod.
const PREMIUM = { monthly: "$4.99", yearly: "$39.99" } as const;

type Plan = "monthly" | "yearly";

export default function CommunityJoinCard({
  title,
  priceMonthly,
  priceAnnual,
  handle,
  slug,
}: {
  title: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  handle: string;
  slug: string;
}) {
  const hasMonthly = (priceMonthly ?? 0) > 0;
  const hasAnnual = (priceAnnual ?? 0) > 0;
  const bothPlans = hasMonthly && hasAnnual;
  const [plan, setPlan] = useState<Plan>(hasMonthly ? "monthly" : "yearly");
  const effPlan: Plan = bothPlans ? plan : hasAnnual ? "yearly" : "monthly";

  const communityPrice =
    effPlan === "yearly" ? `$${priceAnnual}` : `$${priceMonthly}`;
  const per = effPlan === "yearly" ? "/yr" : "/mo";
  const monthlyEquiv =
    effPlan === "yearly" && hasAnnual
      ? `$${(Number(priceAnnual) / 12).toFixed(2)}/mo · billed yearly`
      : null;

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_2px_20px_rgba(17,24,28,0.05)]">
      {bothPlans && (
        <div className="mb-4 flex rounded-full border border-border bg-cream p-1">
          {(["monthly", "yearly"] as Plan[]).map((p) => {
            const on = plan === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setPlan(p)}
                className={`flex-1 rounded-full py-2 text-sm transition-all ${
                  on
                    ? "bg-white font-semibold text-ink shadow-sm"
                    : "font-medium text-muted"
                }`}
              >
                {p === "monthly" ? "Monthly" : "Annual"}
              </button>
            );
          })}
        </div>
      )}

      <p className="text-xs font-semibold uppercase tracking-widest text-subtle">
        You&apos;ll sign up for
      </p>
      <div className="mt-3 overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">Membership · {title}</p>
            <p className="text-xs font-medium text-subtle">
              {monthlyEquiv || "by card"}
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {communityPrice}
            <span className="text-xs font-medium text-subtle"> {per}</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">Sage Premium · the app</p>
            <p className="text-xs font-medium text-subtle">
              by card · skipped if you already have it
            </p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {PREMIUM[effPlan]}
            <span className="text-xs font-medium text-subtle"> {per}</span>
          </p>
        </div>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-subtle">
        {effPlan === "yearly"
          ? "Both billed once for the year — the community and the app. Cancel either anytime."
          : "The community lives in Sage — two separate subscriptions, cancel either anytime."}
      </p>
      <Link
        href={`/join/${handle}/${slug}?plan=${effPlan}`}
        className="mt-4 flex h-13 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
      >
        Join {title}
      </Link>
      <p className="mt-3 text-center text-xs font-medium text-subtle">
        Secure card payment · Cancel anytime
      </p>
    </div>
  );
}
