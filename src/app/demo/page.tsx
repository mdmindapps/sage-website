import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import DemoPlayer, { type Clip, type Group } from "./DemoPlayer";

const BUCKET =
  "https://flchqdspfidwcljtuttq.supabase.co/storage/v1/object/public/site-media/demo";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Watch Sage from the inside — a member's day in the app, narrated, start to finish.",
  openGraph: {
    title: "See Sage from the inside",
    description: "A member's day in the app, narrated, start to finish.",
    images: [`${BUCKET}/1-a-day-in-the-app.jpg`],
  },
};

/* Adding a recording means adding an object below — the page grows a card, never a section.
   Order inside a group is the order here, chosen rather than dated: the clip that explains the
   whole thing comes first and the detail ones follow it. A clip goes in once it exists, so the
   library appears by itself at the second one.
   Files live in the public `site-media` bucket (prod Supabase) — 50 MB per file, which is the
   project's global storage ceiling, so anything much past ten minutes has to be compressed. */
const GROUPS: Group[] = [
  { id: "app", title: "Inside the app" },
  { id: "club", title: "Inside a club" },
];

const CLIPS: Clip[] = [
  {
    id: "a-day-in-the-app",
    group: "app",
    duration: "2:27",
    title: "A day in the app",
    lead:
      "Weigh in and watch the trend line pick it up. Take your measurements. Log a meal from the ones you've saved, add a training session, and the day's balance moves every time. Then set a habit and start the streak.",
    src: `${BUCKET}/1-a-day-in-the-app.mp4`,
    poster: `${BUCKET}/1-a-day-in-the-app.jpg`,
    chapters: [
      { at: 12, label: "Your weight, and the trend line" },
      { at: 30, label: "Measurements" },
      { at: 42, label: "A meal from the ones you've saved" },
      { at: 60, label: "A training session" },
      { at: 84, label: "What made up the burn" },
      { at: 126, label: "A habit, and the streak" },
    ],
  },
];

export default function DemoPage() {
  return (
    <>
      <div className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Demo
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-5 max-w-[16ch]"
            style={{ letterSpacing: "-0.03em" }}
          >
            See Sage from the inside
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[52ch]">
            A member&apos;s day in the app, start to finish, with the sound on.
          </p>
        </div>
      </div>

      {/* The video carries its own narration, so it waits for a tap rather than autoplaying muted. */}
      <section className="dark-section py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <DemoPlayer clips={CLIPS} groups={GROUPS} />
        </div>
      </section>

      {/* Two kinds of visitor land here, so the page ends with both doors. */}
      <div className="py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-ink mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Start where you are
          </h2>
          <p className="text-lg text-muted mb-10 max-w-[46ch] mx-auto">
            Track your own days, or bring the people who already listen to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/download" variant="primary" size="lg">
              Get the app
            </Button>
            <Button href="/become-a-coach" variant="outline" size="lg">
              Launch your club on Sage
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
