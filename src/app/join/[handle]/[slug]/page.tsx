import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SageLogo from "@/components/ui/SageLogo";
import JoinFlow from "@/components/funnel/JoinFlow";
import { getCommunityFunnel } from "@/lib/funnel";

export const metadata: Metadata = {
  title: "Join the community",
  robots: { index: false, follow: false },
};

/** Account + checkout step for a community funnel (reached from /<handle>/<slug>). */
export default async function JoinCommunityPage({
  params,
  searchParams,
}: {
  params: Promise<{ handle: string; slug: string }>;
  searchParams: Promise<{ plan?: string }>;
}) {
  const { handle, slug } = await params;
  const { plan: planParam } = await searchParams;
  const plan = planParam === "yearly" ? "yearly" : "monthly";
  const community = await getCommunityFunnel(handle, slug);
  if (!community) notFound();

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-[1080px] items-center px-5 py-3.5 md:px-8">
          <SageLogo size="sm" />
        </div>
      </header>
      <main className="mx-auto flex max-w-[1080px] justify-center px-5 py-10 md:py-16">
        <JoinFlow
          creatorId={community.creator.id}
          creatorName={community.creator.display_name}
          priceMonthly={community.price_monthly}
          handle={community.creator.handle}
          plan={plan}
          community={{
            id: community.id,
            slug: community.slug,
            title: community.title || "Community",
            priceMonthly: community.price_monthly,
            priceAnnual: community.price_annual,
          }}
        />
      </main>
    </div>
  );
}
