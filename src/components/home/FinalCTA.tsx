"use client";

import { motion } from "framer-motion";
import StoreButton from "@/components/ui/StoreButton";

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
            Start tracking smarter today. No credit card required to start your free trial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <StoreButton platform="appstore" theme="dark" />
            <StoreButton platform="play" theme="dark" />
          </div>

          <p className="text-white/50 text-sm mt-8">
            3-day free trial · Cancel anytime · iOS &amp; Android
          </p>
        </motion.div>
      </div>
    </section>
  );
}
