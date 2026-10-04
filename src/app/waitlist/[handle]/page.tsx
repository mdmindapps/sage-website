/* Audience test, one screen: does this creator's audience actually want a club?
 *
 * The creator posts the link once, people leave an email, and both sides get a real number before
 * anybody builds anything. Replaces the mockup sales page as step 2 — a mockup asks a creator to
 * imagine; this hands them a count and a list that is theirs either way.
 *
 * Personalised per creator through /waitlist-data/<handle>.json — six fields, not a rebuild.
 * The page speaks to HER follower, never about the platform: Sage appears once, as the tracking
 * app the member gets, through the same block the real sales pages use.
 */
import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import CreatorBanner from "@/components/funnel/CreatorBanner";
import SageAppBlock from "@/components/funnel/SageAppBlock";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

type Price = { founding: string; regular: string; windowHours: number };
type Inside = { title: string; text: string; group?: string; pending?: boolean };
type Waitlist = {
  handle: string;
  name: string;
  photo: string;
  photoAlt?: string;
  clubName: string;
  headline: string;
  subhead: string;
  inside: Inside[];
  price: Price;
  lockedLine?: string;
  badge: string;
  instagram?: string;
};

function load(handle: string): Waitlist | null {
  if (!/^[a-z0-9-]+$/.test(handle)) return null;
  const file = path.join(process.cwd(), "waitlist-data", `${handle}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as Waitlist;
}

/** Consecutive blocks sharing a group label, in file order. No label = one unlabelled run. */
function groupInside(items: Inside[]) {
  const out: { label: string; items: Inside[] }[] = [];
  for (const b of items) {
    const label = b.group || "";
    const last = out[out.length - 1];
    if (last && last.label === label) last.items.push(b);
    else out.push({ label, items: [b] });
  }
  return out;
}

/* Below this, the number argues against us: "3 people are already on the list" reads as nobody is.
 * So it simply does not appear until there is enough of it to be proof. */
const COUNT_FLOOR = 25;

/** Re-counted at most once a minute: fresh enough on launch day, and a refresh storm hits the cache. */
export const revalidate = 60;

async function signupCount(handle: string): Promise<number> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const srk = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !srk) return 0;
  try {
    const db = createClient(url, srk, { auth: { persistSession: false } });
    const { count } = await db
      .from("waitlist_signups")
      .select("id", { count: "exact", head: true })
      .eq("creator_slug", handle);
    return count ?? 0;
  } catch {
    // The page must render with or without a number. It is decoration, not the page.
    return 0;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const data = load((await params).handle);
  if (!data) return { title: "Not found" };
  return {
    title: `${data.clubName} — ${data.name}`,
    description: data.subhead,
    // A waitlist is for the people the creator sends here, not for search.
    robots: { index: false, follow: false },
  };
}

export default async function WaitlistPage({ params }: { params: Promise<{ handle: string }> }) {
  const handle = (await params).handle;
  const data = load(handle);
  if (!data) notFound();

  const joined = await signupCount(handle);
  const showCount = joined >= COUNT_FLOOR;

  return (
    <div className="pb-20">
      {/* The same bar the real club pages carry, for the same reason: someone who arrived from a
          story is about to type their address, and the mark says this is a platform, not a form.
          What the club pages put on the right is "Get the app" — not here. That link sends them to
          the App Store, where the membership costs more and we lose the cut, and it competes with
          the one thing this page is for. The action goes there instead, and follows them down. */}
      <header className="sticky top-0 z-20 border-b border-border/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-5 py-3 md:px-8">
          {/* Her club on top, us underneath. One line could not hold both on a phone without
              cutting "Bella's Fitness ..." in half, and the club name is the thing she sends people
              to — so it gets the first line at every width, and the mark that makes a stranger
              trust the email field sits under it. Works for a long club name too: it truncates
              instead of pushing the button off the screen. */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link href="/" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brand/logo-mark.svg"
                alt="Sage"
                width={30}
                height={30}
                style={{ width: 30, height: 30 }}
                className="block shrink-0"
              />
            </Link>
            <div className="min-w-0 leading-tight">
              <p className="text-[13px] sm:text-sm font-bold text-ink truncate">{data.clubName}</p>
              <p className="text-[11px] sm:text-xs text-muted">
                on{" "}
                <span className="font-bold text-ink tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                  Sage Academy
                </span>
              </p>
            </div>
          </div>
          <a
            href="#join"
            className="inline-flex items-center justify-center h-9 px-3.5 sm:px-4 rounded-full bg-primary text-white font-semibold text-[13px] sm:text-sm shrink-0 transition-colors hover:bg-primary-dark"
          >
            Save my spot
          </a>
        </div>
      </header>

      {/* Her, first. The photo does the selling. */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-surface order-1 md:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.photo}
              alt={data.photoAlt || data.name}
              className="w-full h-[400px] md:h-[460px] object-cover object-top"
            />
          </div>

          {/* The club has a name, like every membership worth joining. No content list here —
              that is what "What's inside" is for, and repeating it twice weakens both. */}
          <div className="order-2 md:order-1">
            {/* Her handle, not the club name — that is in the bar above. Someone who just tapped
                a link in her story needs one second of "yes, this is her page", and the thing they
                recognise is the handle they were looking at, not a club they have never heard of. */}
            {data.instagram && (
              <p
                className="text-primary font-extrabold text-xl md:text-2xl mb-4"
                style={{ letterSpacing: "-0.015em" }}
              >
                @{data.instagram}
              </p>
            )}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.04] mb-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              {data.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-md">{data.subhead}</p>

            {/* No button here: the sticky bar carries "Save my spot" on every screen, and two of
                them in one eyeful makes the page look like it is begging. */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className="inline-flex items-center h-10 text-sm font-semibold text-ink bg-white border border-border rounded-full px-4">
                {data.badge}
              </p>
              {/* Only once it is proof. Under COUNT_FLOOR it says nobody is here, so it is absent. */}
              {showCount && (
                <p className="inline-flex items-center h-10 gap-1.5 text-sm font-semibold text-ink bg-white border border-border rounded-full px-4">
                  <span className="font-bold text-primary">{joined}</span>
                  already on the list
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The meat. One line per thing, written as a benefit, never as a feature. */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 mt-16 md:mt-24">
        <h2
          className="text-3xl md:text-4xl font-bold text-ink mb-9"
          style={{ letterSpacing: "-0.02em" }}
        >
          What you&apos;ll get inside the club
        </h2>
        {/* Grouped, because "what she gives me" and "who else is in there" are two different
            reasons to pay, and a flat list of eight makes them read as one. The label uses the
            same small teal caps the Sage block below already uses. */}
        {groupInside(data.inside).map(({ label, items }) => (
          <div key={label} className="mb-11 last:mb-0">
            {label && (
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary mb-5">
                {label}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {items.map((b) => (
                <div key={b.title} className="border-t border-border pt-5">
                  <p
                    className="font-bold text-ink text-[17px] mb-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {b.title}
                  </p>
                  {/* A newline in the data starts a new paragraph. Two short ones read far
                      better on a phone than one dense block, and it costs no extra words. */}
                  {b.text.split("\n").map((line) => (
                    <p key={line} className="text-muted leading-relaxed mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* The one place Sage appears, and it appears as something the member gets.
          The same container as every other section on this page: the block brings no width or
          padding of its own — on the club pages it inherits them from the column it sits in. */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 mt-16 md:mt-24">
        <SageAppBlock
          offer="club"
          intro={"Take a photo of your plate and it works out the calories and macros on its own. Your steps come from your phone without you doing anything; a workout takes a couple of taps, or lands by itself if you wear a watch. Your weight and photos build up week by week.\nBy the end of it you can see whether what you did actually added up."}
        />
      </section>

      {/* What happens next — so nobody thinks they just bought something. */}
      <section className="max-w-[1100px] mx-auto px-5 md:px-8 mt-16 md:mt-20">
        <h2 className="text-2xl font-bold text-ink mb-7" style={{ letterSpacing: "-0.01em" }}>
          What happens next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Step 2 and 3 in this order on purpose: joining happens on the web page, not inside
              the app. Through the app the stores take their cut and Premium costs the member
              $7.99 instead of $4.99 — so the link they get leads to checkout, and the download
              comes after. */}
          {[
            ["Leave your email", "That holds your place. Nothing to pay today."],
            [
              "You get the link first",
              `Before anyone else, and the founding price holds for ${data.price.windowHours} hours.`,
            ],
            ["Join there, then download the app", "Your plan, the chat and your tracking in one place."],
          ].map(([title, text], i) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-primary font-bold text-sm mb-2">0{i + 1}</p>
              <p className="font-bold text-ink mb-1.5" style={{ letterSpacing: "-0.01em" }}>
                {title}
              </p>
              <p className="text-sm text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price. The window is the reason to be early. */}
      <section id="join" className="scroll-mt-20 max-w-[1100px] mx-auto px-5 md:px-8 mt-16 md:mt-20">
        <div className="bg-surface rounded-3xl border border-border p-7 md:p-10">
          {/* One price for everyone inside the window. A rising ladder inside a single launch
              creates losers on the page itself — the person who arrives at the top tier reads that
              others paid less for being quicker, and the usual answer to that is not to pay more.
              The urgency is the door closing, not the price climbing. */}
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <p
                className="text-5xl md:text-6xl font-bold text-ink"
                style={{ letterSpacing: "-0.025em" }}
              >
                {data.price.founding}
              </p>
              <p className="text-sm text-muted mt-1">a month, founding price</p>
            </div>
            <div className="pb-1">
              {/* No strike-through: $39.99 is the future price, not a former one. Striking it would
                  show a reference price that never existed, which EU price-display rules treat as a
                  fake discount. */}
              <p className="text-2xl font-bold text-subtle">{data.price.regular}</p>
              <p className="text-sm text-subtle mt-1">after that</p>
            </div>
          </div>

          <p className="mt-6 text-[17px] text-ink leading-relaxed max-w-2xl font-medium">
            When the doors open you get {data.price.windowHours} hours at {data.price.founding}.
            After that it&apos;s {data.price.regular}.
          </p>

          {/* The $4.99 is disclosed once, in the tracking block above. Repeating it here read as a catch. */}
          <p className="mt-3 text-[15px] text-muted leading-relaxed max-w-2xl">
            {data.lockedLine} Cancel whenever you like.
          </p>

          <div className="mt-8 max-w-xl">
            <WaitlistForm handle={data.handle} name={data.name} />
          </div>
        </div>
      </section>

      {/* The same strip that closes every creator sales page. After her CTA has had its chance:
          everyone who lands here is part of a fitness audience, and some of them coach for a living. */}
      <div className="mt-12">
        <CreatorBanner handle={data.handle} />
      </div>

      {/* A page that collects an address has to say who takes it and link the notice — the consent
          line above names us, this gives them somewhere to read the rest. */}
      <footer className="max-w-[1100px] mx-auto px-5 md:px-8 mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-subtle">
        <p>
          Runs on <span className="font-semibold text-muted">Sage</span> · © Friday Technologies SRL
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-muted transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-muted transition-colors">
            Terms
          </Link>
          <Link href="/support" className="hover:text-muted transition-colors">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
