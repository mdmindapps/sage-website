"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/Section";

const features = [
  "Unlimited photo meal logging",
  "AI nutrition coach (24/7)",
  "Habit tracking & streaks",
  "Progress photo comparisons",
  "Smart reminders",
  "All future updates included",
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-teal">
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.12" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Start your 3-day free trial"
          description="No credit card required to start. Cancel anytime, no questions asked."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Monthly */}
          <div className="bg-white rounded-2xl p-7 border border-border flex flex-col">
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Monthly</p>
              <div className="flex items-end gap-1.5">
                <span
                  className="text-4xl font-bold text-ink"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  $9.99
                </span>
                <span className="text-muted text-sm pb-1.5">/ month</span>
              </div>
              <p className="text-sm text-subtle mt-1.5">Billed monthly, cancel anytime.</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <Button href="#" variant="outline" size="lg" fullWidth>
              Start free trial
            </Button>
          </div>

          {/* Annual — featured */}
          <div className="relative bg-white rounded-2xl p-7 border-2 border-primary flex flex-col shadow-xl shadow-primary/10">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wide shadow">
                SAVE 50% — BEST VALUE
              </span>
            </div>

            <div className="mb-6 mt-2">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Annual</p>
              <div className="flex items-end gap-1.5">
                <span
                  className="text-4xl font-bold text-ink"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  $59.99
                </span>
                <span className="text-muted text-sm pb-1.5">/ year</span>
              </div>
              <p className="text-sm text-subtle mt-1.5">
                That&apos;s{" "}
                <span className="text-primary font-semibold">$5.00/month</span>. Billed annually.
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <Button href="#" variant="primary" size="lg" fullWidth>
              Start free trial
            </Button>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-sm text-subtle mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Cancel anytime. No charge for the first 3 days. Available on iOS and Android.
        </motion.p>
      </div>
    </section>
  );
}
