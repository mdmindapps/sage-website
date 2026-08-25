"use client";

import { useState } from "react";
import Link from "next/link";

type Plan = "monthly" | "yearly";

function initials(name: string) {
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

/** Below-media block for a community funnel: a tidy "Creator · Price" row (all sizes) + a mobile
   Monthly/Annual toggle + a sticky bottom "Join" bar. The Sage Premium breakdown is on /join. */
export default function CommunityCTAMobile({
  title,
  creatorName,
  avatarUrl,
  priceMonthly,
  priceAnnual,
  handle,
  slug,
}: {
  title: string;
  creatorName: string;
  avatarUrl: string | null;
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

  const price = effPlan === "yearly" ? `$${priceAnnual}` : `$${priceMonthly}`;
  const per = effPlan === "yearly" ? "/yr" : "/mo";
  const href = `/join/${handle}/${slug}?plan=${effPlan}`;

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
            <p className="text-[11px] font-medium text-subtle">Creator</p>
            <p className="truncate text-sm font-semibold text-ink">{creatorName}</p>
          </div>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[11px] font-medium text-subtle">Price</p>
          <p className="text-lg font-bold text-ink">
            {price}
            <span className="text-xs font-medium text-subtle">{per}</span>
          </p>
        </div>
      </div>

      {/* Monthly/Annual toggle — mobile only (desktop uses the sidebar card) */}
      {bothPlans && (
        <div className="mt-3 flex rounded-full border border-border bg-cream p-1 lg:hidden">
          {(["monthly", "yearly"] as Plan[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPlan(p)}
              className={`flex-1 rounded-full py-2 text-sm transition-all ${
                plan === p ? "bg-white font-semibold text-ink shadow-sm" : "font-medium text-muted"
              }`}
            >
              {p === "monthly" ? "Monthly" : "Annual"}
            </button>
          ))}
        </div>
      )}

      {/* sticky bottom bar (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[1080px] items-center gap-3 px-5 py-3">
          <span className="shrink-0 text-base font-bold text-ink">
            {price}
            <span className="text-xs font-medium text-subtle"> {per}</span>
          </span>
          <Link
            href={href}
            className="flex h-12 flex-1 items-center justify-center rounded-full bg-primary text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
          >
            Join {title}
          </Link>
        </div>
      </div>
    </>
  );
}
