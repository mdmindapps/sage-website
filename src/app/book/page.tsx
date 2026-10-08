import type { Metadata } from "next";
import CalendlyEmbed from "./CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a call",
  // Shared by link with creators who have already written back, the same way /creator-docs is.
  // Kept out of search so the five evening hours go to people we are actually talking to.
  robots: { index: false, follow: false },
  description:
    "Book thirty minutes with Liviu to go through how a paid club on Sage would work for your people.",
};

export default function BookPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Book a call
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold text-ink mb-5"
          style={{ letterSpacing: "-0.025em" }}
        >
          Thirty minutes, with me
        </h1>
        <div className="space-y-4 text-lg md:text-xl text-muted leading-relaxed">
          <p>
            Bring whatever you want to ask — how a club works, what it costs, what you&apos;d have
            to make, whether your people would pay for it.
          </p>
          <p>You&apos;ll get a Google Meet link the moment you book.</p>
        </div>
      </div>

      {/* The site's own container width, and wider than the copy above on purpose: Calendly puts the
          month and the times side by side only from about 1000px, so a narrower column would force
          it to stack on desktop too. */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mt-10 md:mt-14">
        <CalendlyEmbed />
      </div>
    </div>
  );
}
