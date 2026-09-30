import type { Metadata } from "next";
import { founders } from "@/lib/founders";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built Sage: one app that carries the whole process of changing your body, and a way for coaches to get paid for the coaching itself.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About</p>
        <h1
          className="text-4xl md:text-5xl font-bold text-ink mb-5"
          style={{ letterSpacing: "-0.025em" }}
        >
          Why we built Sage
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed">
          We built Sage for two reasons. They are the two halves of the same app.
        </p>

        {/* Reason one */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-ink mb-5" style={{ letterSpacing: "-0.01em" }}>
            The first reason
          </h2>
          <div className="space-y-5 text-[17px] text-muted leading-relaxed">
            <p>
              The tools already existed, scattered across a phone. One app counts calories. One holds
              your weight. One keeps your photos. One writes a program. Each does its job, then goes
              quiet. You log a careful week, open the graph, and nothing on the other side has an
              opinion.
            </p>
            <p>
              So we built one app for the whole process. Photograph a plate and it works out the
              calories, protein, carbs and fat. Or describe the dish in words. Calories burned, from
              your workouts and the movement your phone already records, set against what you ate.
              Weight as a trend, not a number that ruins a morning. Progress photos side by side.
              Habits, streaks, check-ins.
            </p>
            <p>
              Then the part that was missing: someone there the whole way who gives you feedback. A
              coach you can ask anything, at any hour, that has seen everything you logged.
            </p>
          </div>

          {/* The stance */}
          <blockquote className="mt-8 border-l-2 border-primary pl-6">
            <p className="text-xl md:text-2xl text-ink font-semibold leading-snug">
              This industry sells shortcuts: the injection, the fat burner, the thirty-day miracle.
              There is no shortcut.
            </p>
            <p className="mt-3 text-[17px] text-muted leading-relaxed">
              Sage does not do the work for you. The work is yours. It makes sure you do it.
            </p>
          </blockquote>
        </section>

        {/* Reason two */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-ink mb-5" style={{ letterSpacing: "-0.01em" }}>
            The second reason
          </h2>
          <div className="space-y-5 text-[17px] text-muted leading-relaxed">
            <p>
              The second reason is on the other side of the same screen. There are coaches with real
              audiences who explain, for free, things people pay clinics for, and answer questions in
              the comments at midnight. They post the one thing that makes it click for somebody, a
              day later it is buried, and whoever needs it next week never finds it.
            </p>
            <p>
              The money in this industry sits somewhere else: supplement codes, discount links,
              one-off products that sell once. None of it is what they are actually good at. They are
              good at coaching people, over months, with follow-up.
            </p>
            <p>
              We built the other half of Sage so that is the part that pays. The advice stays put
              instead of expiring. The people who want more than a caption have somewhere to go. The
              coach gets paid every month for work they already do.
            </p>
          </div>
        </section>

        {/* Founders */}
        <section className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-ink mb-8" style={{ letterSpacing: "-0.01em" }}>
            Who is behind it
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {founders.map((f) => (
              <a
                key={f.name}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <img
                  src={f.photo}
                  alt={f.name}
                  width={88}
                  height={88}
                  className="h-[72px] w-[72px] rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-bold text-ink" style={{ letterSpacing: "-0.01em" }}>
                    {f.name}
                  </p>
                  <p className="text-sm text-muted">{f.role}</p>
                  <span className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold text-primary group-hover:underline underline-offset-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM2.5 21.5h5V9.5h-5v12zM10 9.5h4.8v1.64h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.1 6 7.13v7.69h-5v-6.82c0-1.63-.03-3.72-2.4-3.72-2.4 0-2.77 1.77-2.77 3.6v6.94h-5V9.5z" />
                    </svg>
                    LinkedIn
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-subtle leading-relaxed">
            Sage Academy is published by Friday Technologies SRL — Romania, EU. Trade Register no.
            J40/11353/2022, CUI/VAT RO46304555. Write to{" "}
            <a
              href="mailto:contact@sageacademy.app"
              className="text-primary font-medium hover:underline underline-offset-2"
            >
              contact@sageacademy.app
            </a>{" "}
            and we answer within 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}
