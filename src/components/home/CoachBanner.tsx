"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CoachBanner() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-ink px-7 py-10 md:px-12 md:py-12"
        >
          {/* teal glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 120% at 85% -10%, color-mix(in srgb, var(--color-teal) 26%, transparent), transparent 60%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal mb-3">
                For coaches, nutritionists &amp; trainers
              </p>
              <h2
                className="text-2xl md:text-[32px] font-extrabold text-white leading-tight"
                style={{ letterSpacing: "-0.025em" }}
              >
                Coach, nutritionist, trainer? Launch your programs on Sage.
              </h2>
              <p className="text-white/70 text-base md:text-lg mt-3 max-w-xl">
                Coach on real data, earn five ways, keep 80% — payments, taxes
                and invoices handled for you.
              </p>
            </div>
            <Link
              href="/become-a-coach"
              className="inline-flex items-center justify-center gap-2 shrink-0 h-13 px-8 rounded-full bg-white text-ink font-semibold text-base shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Launch on Sage
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
