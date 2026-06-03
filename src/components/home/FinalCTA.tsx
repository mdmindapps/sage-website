"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-white/5" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            Your best nutrition year starts today.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Join 10,000+ people who&apos;ve swapped food guilt for food knowledge. Start your free trial — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="#"
              variant="secondary"
              size="lg"
              className="bg-white text-ink hover:bg-white/90 w-full sm:w-auto"
              external
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </Button>
            <Button
              href="#"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 w-full sm:w-auto"
              external
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6L4.6 21.3c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              Get it on Google Play
            </Button>
          </div>

          <p className="text-white/50 text-sm mt-8">
            3-day free trial · Cancel anytime · iOS & Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
