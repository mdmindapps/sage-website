"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/Section";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Photo meal logging",
    description: "Snap and track in seconds. No barcodes, no food database — just a photo.",
    color: "from-teal/10 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7v1m0 8v1M7 12H6m12 0h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Coach 24/7",
    description: "Personalised nutrition advice anytime, anywhere. Like having a nutritionist in your pocket.",
    color: "from-ink/8 to-ink/4",
    iconColor: "text-ink",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Habit building",
    description: "Tiny wins, every day. Streaks, check-ins, and gentle nudges that build lasting change.",
    color: "from-warning/15 to-warning/5",
    iconColor: "text-warning",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Progress photos",
    description: "See your transformation with side-by-side photo comparisons. Visual proof of your journey.",
    color: "from-success/15 to-success/5",
    iconColor: "text-success",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Smart reminders",
    description: "Mentor-style check-ins, never spam. Sage knows when to nudge and when to let you be.",
    color: "from-danger/10 to-danger/5",
    iconColor: "text-danger",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Privacy-first",
    description: "Your health data stays yours. Encrypted, stored in the EU, never sold. You're not the product.",
    color: "from-muted/10 to-muted/5",
    iconColor: "text-muted",
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

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need. Nothing you don't."
          description="Sage is designed to be the last nutrition app you'll ever need."
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={card}
              className="group relative bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} ${feature.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-base font-bold text-ink mb-2" style={{ letterSpacing: "-0.01em" }}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
