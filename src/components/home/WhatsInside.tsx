"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";

/* ─── shared types ─── */
type BulletItem = string;

interface Row {
  imageLeft: boolean;
  label: string;
  headline: string;
  body: string;
  bullets: BulletItem[];
  mockupLabel: string;
  mockupScreenLabel: string;
}

/* ─── section data ─── */
const rows: Row[] = [
  {
    imageLeft: false,
    label: "MEAL LOGGING",
    headline: "Snap a photo. Done.",
    body: "Forget scrolling through endless food databases. Point your camera at your plate and Sage's AI breaks it down — calories, protein, carbs, fat — in seconds. Got a homemade dish? Just describe it in plain language. Sage handles the rest.",
    bullets: [
      "Photo recognition powered by GPT-4o vision",
      'Describe in your own words — "chicken bowl with rice and avocado"',
      "Edit any meal in seconds if Sage gets it slightly off",
    ],
    mockupLabel: "Meal logging screen — camera + meal preview",
    mockupScreenLabel: "Meal logging",
  },
  {
    imageLeft: true,
    label: "YOUR PLAN",
    headline: "Macros built around YOU. Not a template.",
    body: "After a deep onboarding, Sage builds your nutrition protocol based on your goals, body, activity level, and dietary preferences. No more guessing. No cookie-cutter plans. Your daily targets adjust as your journey evolves.",
    bullets: [
      "Daily calorie + macro targets calibrated to your goal",
      "Real-time tracking — see what's left for the day at a glance",
      "Adjust your plan anytime as your goals shift",
    ],
    mockupLabel: "Today tab — calorie ring + macros + meals list",
    mockupScreenLabel: "Today",
  },
  {
    imageLeft: false,
    label: "PROGRESS THAT STICKS",
    headline: "Tiny wins. Real results.",
    body: "Sage helps you build the habits that move the needle. Track your weight, log your daily wins, and watch your transformation through progress photos. When motivation dips, Sage is there with the right words — not generic platitudes.",
    bullets: [
      "Custom habit tracker — build the routines that work for you",
      "Weight trend graphs and progress photo comparisons",
      "Panic mode — when you're about to slip, Sage talks you through it",
    ],
    mockupLabel: "Progress tab — weight chart + photo grid",
    mockupScreenLabel: "Progress",
  },
];

/* ─── check icon ─── */
function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0 mt-0.5 text-teal"
    >
      <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M5.5 9l2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── single row ─── */
function FeatureRow({ row, index }: { row: Row; index: number }) {
  const isImageLeft = row.imageLeft;

  const phoneMotion = {
    initial: { opacity: 0, x: isImageLeft ? -36 : 36 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  const textMotion = {
    initial: { opacity: 0, x: isImageLeft ? 36 : -36 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  const phone = (
    <motion.div
      {...phoneMotion}
      className="flex justify-center w-full lg:w-auto shrink-0"
    >
      {/* The `phone-mockup` class is the swap target — replace with a real screenshot */}
      <PhoneMockup
        size="lg"
        label={row.mockupScreenLabel}
        className="phone-mockup"
      />
    </motion.div>
  );

  const text = (
    <motion.div {...textMotion} className="flex-1 min-w-0">
      {/* Eyebrow label */}
      <p
        className="text-primary font-extrabold uppercase mb-3"
        style={{ fontSize: 13, letterSpacing: "0.1em" }}
      >
        {row.label}
      </p>

      {/* Headline */}
      <h3
        className="text-ink font-extrabold leading-tight mb-5"
        style={{
          fontSize: "clamp(24px, 3vw, 32px)",
          letterSpacing: "-0.02em",
        }}
      >
        {row.headline}
      </h3>

      {/* Body */}
      <p
        className="text-muted leading-relaxed mb-7"
        style={{ fontSize: 16, lineHeight: 1.6 }}
      >
        {row.body}
      </p>

      {/* Bullets */}
      <ul className="space-y-3">
        {row.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-ink text-sm font-medium leading-snug">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-8 lg:gap-12`}
    >
      {isImageLeft ? (
        <>
          {phone}
          {text}
        </>
      ) : (
        <>
          {text}
          {phone}
        </>
      )}
    </div>
  );
}

/* ─── section ─── */
export default function WhatsInside() {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p
            className="text-primary font-extrabold uppercase mb-4"
            style={{ fontSize: 13, letterSpacing: "0.1em" }}
          >
            What&apos;s inside
          </p>
          <h2
            className="text-ink font-extrabold leading-tight mb-5 mx-auto"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              letterSpacing: "-0.02em",
              maxWidth: 720,
            }}
          >
            A coach, a tracker, and a friend that actually listens
          </h2>
          <p
            className="text-muted mx-auto"
            style={{ fontSize: 18, maxWidth: 600 }}
          >
            Sage combines an AI mentor with effortless tracking, so eating well
            finally feels personal.
          </p>
        </motion.div>

        {/* Alternating rows */}
        <div className="space-y-24 md:space-y-32">
          {rows.map((row, i) => (
            <FeatureRow key={row.label} row={row} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
