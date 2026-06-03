"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/Section";

function Stars() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" className="text-warning" fill="currentColor">
          <path d="M8 1l1.854 3.756 4.146.603-3 2.923.708 4.129L8 10.354l-3.708 1.957.708-4.129-3-2.923 4.146-.603L8 1z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I've tried every calorie app out there. MyFitnessPal, Lose It, Cronometer. Sage actually feels like a coach, not a spreadsheet. It asks how I'm doing, not just what I ate.",
    author: "Maria K.",
    role: "Lost 12kg in 4 months",
    avatar: "MK",
    color: "bg-teal",
  },
  {
    quote:
      "The photo recognition is absolutely wild. I snapped a plate of dim sum at a restaurant and it got every single item right. I've never had to touch a barcode scanner since.",
    author: "Alex P.",
    role: "Fitness coach",
    avatar: "AP",
    color: "bg-warning",
  },
  {
    quote:
      "Finally an app that asks how I'm feeling, not just what I ate. The habit-building side of Sage is what keeps me coming back every day. Three months streak and going strong.",
    author: "Sam T.",
    role: "Running their first marathon",
    avatar: "ST",
    color: "bg-success",
  },
  {
    quote:
      "As a vegan, most nutrition apps are useless for me. Sage understands plant-based eating completely and gives me advice that actually makes sense for my lifestyle.",
    author: "Priya M.",
    role: "Plant-based athlete",
    avatar: "PM",
    color: "bg-ink",
  },
  {
    quote:
      "The AI coach corrected itself when I told it I don't eat gluten. It actually remembered for future conversations. That kind of personalisation is game-changing.",
    author: "Jake R.",
    role: "Celiac + powerlifter",
    avatar: "JR",
    color: "bg-danger",
  },
  {
    quote:
      "I love the progress photo comparison feature. Looking at before/after side by side, even small changes over a few weeks are so motivating. Sage makes the journey visual.",
    author: "Emma L.",
    role: "Postpartum fitness",
    avatar: "EL",
    color: "bg-muted",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Loved by users"
          title="People building healthier habits with Sage"
          description="Join thousands who've made Sage their daily nutrition companion."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={card}
              className="bg-cream rounded-2xl p-6 border border-border flex flex-col"
            >
              <Stars />
              <p className="text-ink text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} text-white text-xs font-bold flex items-center justify-center shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.author}</p>
                  <p className="text-xs text-subtle">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary row */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>1,000+</p>
            <p className="text-xs text-subtle mt-0.5">Active users</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div>
            <p className="text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>50K+</p>
            <p className="text-xs text-subtle mt-0.5">Meals logged</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div>
            <p className="text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>3 days</p>
            <p className="text-xs text-subtle mt-0.5">Free trial</p>
          </div>
          <div className="w-px h-12 bg-border hidden sm:block" />
          <div>
            <p className="text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>24h</p>
            <p className="text-xs text-subtle mt-0.5">Support response</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
