"use client";

import { motion } from "framer-motion";
import StoreButton from "@/components/ui/StoreButton";
import PhoneMockup from "@/components/ui/PhoneMockup";

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
            className="text-lg md:text-xl text-muted max-w-xl mb-6 leading-relaxed"
          >
            Track meals from a photo. Chat with Sage. Build habits that stick.
          </motion.p>

          {/* Human coaches accent */}
          <motion.a
            href="#coaches"
            initial="hidden"
            animate="show"
            custom={0.18}
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-9 text-sm font-semibold text-ink bg-white border border-border rounded-full px-4 py-2 shadow-sm hover:border-primary/40 transition-colors"
          >
            <span aria-hidden="true">✨</span>
            <span>
              <span className="text-primary font-bold">New</span> — now with real
              human coaches
            </span>
            <span className="text-primary" aria-hidden="true">→</span>
          </motion.a>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.21}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full justify-center"
          >
            <StoreButton platform="appstore" theme="light" />
            <StoreButton platform="play" theme="light" />
          </motion.div>

          {/* Trust signals — honest feature pills, no fabricated stats */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mb-16"
          >
            {[
              "Free 3-day trial",
              "AI-powered nutrition tracking",
              "Cancel anytime",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="text-primary shrink-0"
                >
                  <path
                    d="M3.5 8.5l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{feature}</span>
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
          <PhoneMockup
            size="lg"
            label="Sage home screen"
            screenshotSrc="/images/screenshots/screenshot-home-today.png"
            screenshotAlt="Sage home — today's calorie ring, macros, and logged meals"
            className="z-10 -mb-2 shadow-2xl"
          />

          {/* Left phone — slightly smaller, tilted */}
          <div className="hidden sm:block" style={{ transform: "translateY(40px) rotate(-5deg)", opacity: 0.85 }}>
            <PhoneMockup
              size="md"
              label="Meal photo logging"
              screenshotSrc="/images/screenshots/screenshot-meal-logging.png"
              screenshotAlt="Snap a photo of your meal — Sage analyses calories and macros instantly"
            />
          </div>

          {/* Right phone */}
          <div className="hidden sm:block" style={{ transform: "translateY(40px) rotate(5deg)", opacity: 0.85 }}>
            <PhoneMockup
              size="md"
              label="AI coach chat"
              screenshotSrc="/images/screenshots/screenshot-coach-chat.png"
              screenshotAlt="Chat with your AI fitness coach — personalised, always available"
            />
          </div>
        </motion.div>
      </div>

      {/* Fade out bottom */}
      <div className="h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
