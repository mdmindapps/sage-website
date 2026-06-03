"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Button from "@/components/ui/Button";

const aiFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "GPT-4o Vision for instant meal recognition",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Claude for empathetic, personalised coaching",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Learns your patterns and adjusts advice over time",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Understands dietary preferences and restrictions",
  },
];

export default function PoweredByAI() {
  return (
    <section className="dark-section py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Powered by AI
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              The smartest nutrition coach.{" "}
              <span className="text-primary">Period.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Sage combines the world&apos;s most powerful AI models into one seamless experience.
              Whether you snap a plate of pasta or ask &quot;is oat milk healthy?&quot;, Sage gives
              you instant, accurate, deeply personalised answers.
            </p>

            <ul className="space-y-4 mb-10">
              {aiFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-primary">{f.icon}</span>
                  <span className="text-white/80 text-sm">{f.text}</span>
                </li>
              ))}
            </ul>

            <Button href="/#pricing" variant="primary" size="lg">
              Try free for 3 days
            </Button>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-primary"
                style={{ transform: "scale(0.8)" }}
              />
              <PhoneMockup size="lg" label="Chat with Sage" className="relative z-10" />

              {/* Floating chat bubbles */}
              <motion.div
                className="absolute -left-16 top-20 bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-lg max-w-[180px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <p className="text-xs font-medium text-ink">What did I have for lunch?</p>
                <p className="text-[10px] text-subtle mt-0.5">You · 12:30 PM</p>
              </motion.div>

              <motion.div
                className="absolute -right-14 top-48 bg-primary rounded-2xl rounded-tr-sm px-4 py-3 shadow-lg max-w-[190px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.4 }}
              >
                <p className="text-xs font-medium text-white">
                  Chicken caesar salad — 480 kcal, 38g protein 🥗
                </p>
                <p className="text-[10px] text-white/60 mt-0.5">Sage · 12:30 PM</p>
              </motion.div>

              <motion.div
                className="absolute -left-12 bottom-32 bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg max-w-[165px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <p className="text-xs font-medium text-ink">Am I on track today?</p>
                <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
                <p className="text-[10px] text-subtle mt-1">75% of daily goal</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
