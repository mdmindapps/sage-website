import Link from "next/link";
import SageLogo from "@/components/ui/SageLogo";
import Gallery from "./Gallery";
import PitchBlocks from "./PitchBlocks";
import Reviews from "./Reviews";
import OtherOffers from "./OtherOffers";
import type { CommunityFunnel as Community } from "@/lib/funnel";

const PREMIUM_PRICE = "$4.99";

function initials(name: string) {
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function JoinCard({ community }: { community: Community }) {
  const price = community.price_monthly != null ? `$${community.price_monthly}` : "—";
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-[0_2px_20px_rgba(17,24,28,0.05)]">
      <p className="text-xs font-semibold uppercase tracking-widest text-subtle">
        You&apos;ll sign up for
      </p>
      <div className="mt-3 overflow-hidden rounded-2xl border border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">
              Membership · {community.title}
            </p>
            <p className="text-xs font-medium text-subtle">by card</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {price}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">Sage Premium · the app</p>
            <p className="text-xs font-medium text-subtle">by card · skipped if you already have it</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-ink">
            {PREMIUM_PRICE}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </p>
        </div>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-subtle">
        The community lives in Sage — two separate subscriptions, cancel either anytime.
      </p>
      <Link
        href={`/join/${community.creator.handle}/${community.slug}`}
        className="mt-4 flex h-13 w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
      >
        Join {community.title}
      </Link>
      <p className="mt-3 text-center text-xs font-medium text-subtle">
        Secure card payment · Cancel anytime
      </p>
    </div>
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
            {community.gallery && community.gallery.length > 0 && (
              <Gallery items={community.gallery} />
            )}

            <div className="mt-7">
              <div className="flex items-center gap-3.5">
                {cr.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cr.avatar_url} alt={cr.display_name} className="h-14 w-14 rounded-full object-cover" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-lg font-bold text-primary">
                    {initials(cr.display_name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-base font-bold text-ink">{cr.display_name}</p>
                  <p className="text-sm font-medium text-muted">
                    Community{community.member_count > 0 ? ` · ${community.member_count} members` : ""}
                  </p>
                </div>
              </div>

              <h1
                className="mt-6 text-3xl font-extrabold leading-tight text-ink md:text-4xl"
                style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
              >
                {community.title || "Community"}
              </h1>
              {community.tagline && (
                <p className="mt-2.5 text-lg leading-relaxed text-muted">{community.tagline}</p>
              )}

              {cats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cats.map((cat) => (
                    <span key={cat} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border">
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* mobile join card */}
            <div className="mt-8 lg:hidden">
              <JoinCard community={community} />
            </div>

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
