"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { SectionHeader } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M10 4H6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 6v4M18 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16l4-4 3 3 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Photo your meal",
    description:
      "Snap a photo of anything you eat. Sage's AI vision instantly breaks down calories, macros, and nutrients — no barcode scanning, no manual entry.",
    mockupLabel: "Meal photo scan",
    screenshotSrc: "/images/screenshots/screenshot-meal-scan.png",
    screenshotAlt:
      "Step 1 — snap a photo of your meal and Sage scans calories and macros instantly",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20a1 1 0 011 1v10a1 1 0 01-1 1H14l-4 4v-4H4a1 1 0 01-1-1V7a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11h12M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Chat with your coach",
    description:
      "Ask Sage anything about your nutrition — from \"how many calories are in this?\" to \"what should I eat to hit my protein goal today?\". Personalised, always available.",
    mockupLabel: "AI coach chat",
    screenshotSrc: "/images/screenshots/screenshot-coach-reply.png",
    screenshotAlt:
      "Step 2 — chat with your AI fitness coach for personalised, in-context replies",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20l4-6 4 3 4-8 4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4v20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Build lasting habits",
    description:
      "Daily check-ins, streak tracking, and progress photo comparisons help you see how far you've come and stay motivated to keep going.",
    mockupLabel: "Habit tracker",
    screenshotSrc: "/images/screenshots/screenshot-habit-checkin.png",
    screenshotAlt:
      "Step 3 — daily habit check-ins and streak tracking to build lasting routines",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps to better nutrition"
          description="No complicated setup. No food databases to browse. Just snap, chat, and build a habit."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="flex flex-col items-center text-center group"
            >
              {/* Step number */}
              <div className="relative mb-8">
                <PhoneMockup
                  size="md"
                  label={step.mockupLabel}
                  screenshotSrc={step.screenshotSrc}
                  screenshotAlt={step.screenshotAlt}
                />
                {/* Step badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              <h3
                className="text-xl font-bold text-ink mb-3"
                style={{ letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
