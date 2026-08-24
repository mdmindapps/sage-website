import Link from "next/link";
import SageLogo from "@/components/ui/SageLogo";
import Gallery from "./Gallery";
import PitchBlocks from "./PitchBlocks";
import SubscribeFlow from "./SubscribeFlow";
import type { CreatorFunnel as Creator } from "@/lib/funnel";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function CreatorFunnel({ creator }: { creator: Creator }) {
  const igHandle = creator.instagram?.replace(/^@/, "");
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
            {creator.gallery && creator.gallery.length > 0 && (
              <Gallery items={creator.gallery} />
            )}

            {/* identity */}
            <div className="mt-7">
              <div className="flex items-center gap-3.5">
                {creator.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={creator.avatar_url}
                    alt={creator.display_name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-lg font-bold text-primary">
                    {initials(creator.display_name)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-base font-bold text-ink">
                    {creator.display_name}
                  </p>
                  {igHandle && (
                    <a
                      href={`https://instagram.com/${igHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-muted transition hover:text-primary"
                    >
                      @{igHandle}
                    </a>
                  )}
                </div>
              </div>

              <h1
                className="mt-6 text-3xl font-extrabold leading-tight text-ink md:text-4xl"
                style={{ letterSpacing: "-0.025em", textWrap: "balance" }}
              >
                {creator.sales_title || "1:1 Coaching"}
              </h1>
              {creator.sales_tagline && (
                <p className="mt-2.5 text-lg leading-relaxed text-muted">
                  {creator.sales_tagline}
                </p>
              )}

              {cats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cats.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-border"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* mobile: subscribe card sits here, right under the pitch header */}
            <div className="mt-8 lg:hidden">
              <SubscribeFlow
                handle={creator.handle}
                creatorName={creator.display_name}
                priceMonthly={creator.price_monthly}
              />
            </div>

            {/* pitch */}
            {creator.blocks.length > 0 && (
              <div className="mt-10">
                <PitchBlocks blocks={creator.blocks} />
              </div>
            )}
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
