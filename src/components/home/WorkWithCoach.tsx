"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "1:1 coaching",
    body: "Personal guidance from a real expert, working from your real data — meals, macros, progress.",
    icon: (
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Programs & plans",
    body: "Structured training and nutrition programs, built by a pro and ready to start today.",
    icon: (
      <>
        <path
          d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.9"
        />
        <path
          d="M9 8h6M9 12h6M9 16h4"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Communities",
    body: "Join a coach-led group that keeps you accountable — with your AI in the room too.",
    icon: (
      <path
        d="M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 20v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0116 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function WorkWithCoach() {
  return (
    <section id="coaches" className="py-20 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-bold text-xs uppercase tracking-[0.16em] mb-3">
            AI + human
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-ink leading-tight max-w-2xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Prefer a human? Work with a real coach.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl">
            Your AI coach is always on. But sometimes you want a person. Sage now
            connects you with vetted coaches, nutritionists and trainers — who run
            their 1:1 coaching, programs and communities right inside the app you
            already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center mt-10">
          {/* Photo */}
          <motion.figure
            className="relative rounded-3xl overflow-hidden border border-border shadow-[0_2px_8px_rgba(17,24,28,0.05),0_34px_70px_-34px_rgba(11,130,150,0.30)] m-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coach/coach.jpg"
              alt="A coach guiding a client through a session"
              className="w-full h-[300px] md:h-[420px] object-cover"
              loading="lazy"
            />
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(150deg, color-mix(in srgb, var(--color-teal) 14%, transparent), transparent 46%)",
                mixBlendMode: "multiply",
              }}
            />
          </motion.figure>

          {/* Features + CTA */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal grid place-items-center shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-ink" style={{ letterSpacing: "-0.01em" }}>
                    {f.title}
                  </h3>
                  <p className="text-muted text-[15px] mt-1 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-4 mt-3">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-white font-semibold text-[15px] shadow-sm transition-all duration-200 hover:bg-primary-dark active:scale-[0.98]"
              >
                Get Sage to explore coaches
              </Link>
              <span className="text-sm text-subtle font-semibold">
                New coaches join every week.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
