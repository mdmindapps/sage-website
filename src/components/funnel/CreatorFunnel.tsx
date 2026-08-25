import Link from "next/link";
import SageLogo from "@/components/ui/SageLogo";
import Gallery from "./Gallery";
import PitchBlocks from "./PitchBlocks";
import Reviews from "./Reviews";
import OtherOffers from "./OtherOffers";
import SubscribeFlow from "./SubscribeFlow";
import CoachCTAMobile from "./CoachCTAMobile";
import type { CreatorFunnel as Creator } from "@/lib/funnel";

export default function CreatorFunnel({ creator }: { creator: Creator }) {
  const cats = (creator.categories || []).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      {/* slim brand bar */}
      <header className="sticky top-0 z-20 border-b border-border/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3.5 md:px-8">
          <SageLogo size="sm" />
          <Link
            href="/get"
            className="text-sm font-semibold text-muted transition hover:text-ink"
          >
            Get the app
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1080px] px-5 pb-24 pt-6 md:px-8 md:pt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* ── main column ── */}
          <div className="min-w-0">
            {/* header: title + tagline + rating, above the media (Skool-style) */}
            <h1
              className="text-3xl font-extrabold leading-tight text-ink md:text-4xl"
              style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
            >
              {creator.sales_title || "1:1 Coaching"}
            </h1>
            {creator.sales_tagline && (
              <p className="mt-2.5 text-lg leading-relaxed text-muted">
                {creator.sales_tagline}
              </p>
            )}
            {creator.review_count > 0 && creator.review_avg != null && (
              <div className="mt-3 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < Math.round(creator.review_avg!) ? "#EF9F27" : "none"} stroke="#EF9F27" strokeWidth="1.6" aria-hidden="true">
                      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9L12 2.5z" strokeLinejoin="round" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-ink">
                  {creator.review_avg.toFixed(1)}
                  <span className="font-medium text-muted"> · {creator.review_count} review{creator.review_count === 1 ? "" : "s"}</span>
                </span>
              </div>
            )}

            {/* media */}
            {creator.gallery && creator.gallery.length > 0 && (
              <div className="mt-5">
                <Gallery items={creator.gallery} />
              </div>
            )}

            {/* meta chips: category · type */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {cats.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border"
                >
                  {cat}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.8" /><path d="M5.5 20c0-3.4 2.9-5.6 6.5-5.6s6.5 2.2 6.5 5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                1:1 Coaching
              </span>
            </div>

            {/* creator + price row, and the sticky mobile CTA (full breakdown is on /join) */}
            <CoachCTAMobile
              handle={creator.handle}
              creatorName={creator.display_name}
              avatarUrl={creator.avatar_url}
              priceMonthly={creator.price_monthly}
            />

            {/* pitch */}
            {creator.blocks.length > 0 && (
              <div className="mt-10">
                <PitchBlocks blocks={creator.blocks} />
              </div>
            )}

            {/* reviews (public when the coach turns them on) */}
            <Reviews
              reviews={creator.reviews}
              avg={creator.review_avg}
              count={creator.review_count}
            />

            {/* the creator's other offers (their communities) */}
            <OtherOffers
              communities={creator.communities}
              creatorName={creator.display_name}
              handle={creator.handle}
            />
          </div>

          {/* ── sticky sidebar (desktop) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <SubscribeFlow
                handle={creator.handle}
                creatorName={creator.display_name}
                priceMonthly={creator.price_monthly}
              />
            </div>
          </aside>
        </div>
      </main>

      {/* keeps the footer clear of the sticky mobile Join bar */}
      <div className="h-16 lg:hidden" />

      {/* footer */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-3 px-5 py-10 text-center md:px-8">
          <SageLogo size="sm" />
          <p className="max-w-md text-sm text-muted">
            Sage is your AI fitness coach — track meals by photo, build habits,
            and train 1:1 with real coaches.
          </p>
          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs font-medium text-subtle">
            <Link href="/terms" className="transition hover:text-ink">
              Terms
            </Link>
            <Link href="/privacy" className="transition hover:text-ink">
              Privacy
            </Link>
            <Link href="/support" className="transition hover:text-ink">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
