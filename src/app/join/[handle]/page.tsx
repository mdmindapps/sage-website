import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SageLogo from "@/components/ui/SageLogo";
import JoinFlow from "@/components/funnel/JoinFlow";
import { getCreatorFunnel } from "@/lib/funnel";

export const metadata: Metadata = {
  title: "Create your account",
  robots: { index: false, follow: false },
};

/** Account + checkout step for a creator's funnel (reached from /<handle>). */
export default async function JoinPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const creator = await getCreatorFunnel(handle);
  if (!creator) notFound();

  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-[1080px] items-center px-5 py-3.5 md:px-8">
          <SageLogo size="sm" />
        </div>
      </header>
      <main className="mx-auto flex max-w-[1080px] justify-center px-5 py-10 md:py-16">
        <JoinFlow
          creatorId={creator.id}
          creatorName={creator.display_name}
          priceMonthly={creator.price_monthly}
          handle={creator.handle}
        />
      </main>
    </div>
  );
}
