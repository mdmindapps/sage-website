import Link from "next/link";
import SageLogo from "@/components/ui/SageLogo";
import Gallery from "./Gallery";
import PitchBlocks from "./PitchBlocks";
import Reviews from "./Reviews";
import OtherOffers from "./OtherOffers";
import CommunityJoinCard from "./CommunityJoinCard";
import CommunityCTAMobile from "./CommunityCTAMobile";
import type { CommunityFunnel as Community } from "@/lib/funnel";

function JoinCard({ community }: { community: Community }) {
  return (
    <CommunityJoinCard
      title={community.title || "Community"}
      priceMonthly={community.price_monthly}
      priceAnnual={community.price_annual}
      handle={community.creator.handle}
      slug={community.slug}
    />
  );
}

export default function CommunityFunnel({ community }: { community: Community }) {
  const cr = community.creator;
  const cats = (community.categories || []).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3.5 md:px-8">
          <SageLogo size="sm" />
          <Link href="/get" className="text-sm font-semibold text-muted transition hover:text-ink">
            Get the app
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-6 md:px-8 md:pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* main column */}
          <div className="min-w-0">
            {/* header: title + tagline + rating, above the media (Skool-style) */}
            <h1
              className="text-3xl font-extrabold leading-tight text-ink md:text-4xl"
              style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
            >
              {community.title || "Community"}
            </h1>
            {community.tagline && (
              <p className="mt-2.5 text-lg leading-relaxed text-muted">{community.tagline}</p>
            )}
            {community.review_count > 0 && community.review_avg != null && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < Math.round(community.review_avg!) ? "#EF9F27" : "none"} stroke="#EF9F27" strokeWidth="1.6" aria-hidden="true">
                      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" strokeLinejoin="round" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink">
                  {community.review_avg.toFixed(1)}
                  <span className="font-medium text-muted"> · {community.review_count} review{community.review_count === 1 ? "" : "s"}</span>
                </span>
              </div>
            )}

            {/* media */}
            {community.gallery && community.gallery.length > 0 && (
              <div className="mt-5">
                <Gallery items={community.gallery} />
              </div>
            )}

            {/* meta chips: members · category · type */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {community.member_count > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17.5" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.6" /><path d="M16 14.2c2.4.2 4 2 4 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  {community.member_count} member{community.member_count === 1 ? "" : "s"}
                </span>
              )}
              {cats.map((cat) => (
                <span key={cat} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border">
                  {cat}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="8" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.7" /><circle cx="16" cy="9" r="2.6" stroke="currentColor" strokeWidth="1.7" /><path d="M4 18c0-2.2 1.8-3.6 4-3.6s4 1.4 4 3.6M12.5 14.6c1.9.2 3.5 1.6 3.5 3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                Community
              </span>
            </div>

            {/* creator + price row, toggle, and the sticky mobile CTA (full breakdown is on /join) */}
            <CommunityCTAMobile
              title={community.title || "Community"}
              creatorName={cr.display_name}
              avatarUrl={cr.avatar_url}
              priceMonthly={community.price_monthly}
              priceAnnual={community.price_annual}
              handle={community.creator.handle}
              slug={community.slug}
            />

            {community.blocks.length > 0 && (
              <div className="mt-10">
                <PitchBlocks blocks={community.blocks} />
              </div>
            )}

            <Reviews reviews={community.reviews} avg={community.review_avg} count={community.review_count} />

            <OtherOffers
              communities={community.other_communities}
              creatorName={cr.display_name}
              handle={cr.handle}
              coaching={community.coaching}
            />
          </div>

          {/* sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <JoinCard community={community} />
            </div>
          </aside>
        </div>
      </main>

      {/* keeps the footer clear of the sticky mobile Join bar */}
      <div className="h-16 lg:hidden" />

      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-3 px-5 py-10 text-center md:px-8">
          <SageLogo size="sm" />
          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs font-medium text-subtle">
            <Link href="/terms" className="transition hover:text-ink">Terms</Link>
            <Link href="/privacy" className="transition hover:text-ink">Privacy</Link>
            <Link href="/support" className="transition hover:text-ink">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
