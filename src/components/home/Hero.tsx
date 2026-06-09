"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";

function AppStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6L4.6 21.3c-.66.5-1.6.03-1.6-.8zM5 6.49v11.02L14.01 12 5 6.49z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-8 pb-0 md:pt-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now available on iOS &amp; Android
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.07}
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] mb-5 max-w-3xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            Your AI fitness coach.{" "}
            <span className="text-primary">In your pocket.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.14}
            variants={fadeUp}
            className="text-lg md:text-xl text-muted max-w-xl mb-9 leading-relaxed"
          >
            Track meals from a photo. Chat with Sage. Build habits that stick.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.21}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3 mb-14 w-full justify-center"
          >
            <Button
              href="#"
              variant="secondary"
              size="lg"
              className="gap-3 w-full sm:w-auto"
              external
            >
              <AppStoreIcon />
              Download on App Store
            </Button>
            <Button
              href="#"
              variant="outline"
              size="lg"
              className="gap-3 w-full sm:w-auto"
              external
            >
              <PlayStoreIcon />
              Get it on Google Play
            </Button>
          </motion.div>

          {/* Social proof numbers */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={fadeUp}
            className="flex items-center gap-8 mb-16 text-center"
          >
            {[
              { stat: "1,000+", label: "Active users" },
              { stat: "Free", label: "3-day trial" },
              { stat: "50K+", label: "Meals logged" },
            ].map((s) => (
              <div key={s.stat}>
                <p className="text-2xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
                  {s.stat}
                </p>
                <p className="text-xs text-subtle mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex justify-center items-end gap-6 pb-0"
        >
          {/* Center phone — main */}
          <PhoneMockup size="lg" label="Sage home screen" className="z-10 -mb-2 shadow-2xl" />

          {/* Left phone — slightly smaller, tilted */}
          <div className="hidden sm:block" style={{ transform: "translateY(40px) rotate(-5deg)", opacity: 0.85 }}>
            <PhoneMockup size="md" label="Meal photo logging" />
          </div>

          {/* Right phone */}
          <div className="hidden sm:block" style={{ transform: "translateY(40px) rotate(5deg)", opacity: 0.85 }}>
            <PhoneMockup size="md" label="AI coach chat" />
          </div>
        </motion.div>
      </div>

      {/* Fade out bottom */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
