"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Button from "@/components/ui/Button";

/* ─── Designed iOS-style chat mock that lives inside the phone screen ─── */
function ChatMockup() {
  return (
    <div className="absolute inset-0 flex flex-col bg-cream">
      {/* Header — pt-10 clears the dynamic island */}
      <div className="flex items-center gap-2.5 px-4 pt-10 pb-3 bg-cream/95 backdrop-blur-sm border-b border-border/60">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-mark.svg"
          alt=""
          width={30}
          height={30}
          style={{ width: 30, height: 30 }}
          className="rounded-lg shrink-0"
          draggable={false}
        />
        <div className="flex-1 min-w-0 leading-tight">
          <p className="font-bold text-[14px] text-ink">Sage</p>
          <p className="text-[11px] text-muted">Your coach</p>
        </div>
        {/* Subtle online dot */}
        <span className="w-2 h-2 rounded-full bg-success shrink-0" />
      </div>

      {/* Chat area */}
      <div className="flex-1 px-3 py-3.5 space-y-2 overflow-hidden">
        {/* Day separator */}
        <p className="text-center text-[10px] text-subtle font-medium pb-1">
          Today, 12:31 PM
        </p>

        {/* User msg 1 */}
        <div className="flex justify-end">
          <div className="bg-ink text-white text-[12.5px] leading-snug rounded-2xl rounded-tr-md px-3 py-2 max-w-[75%] shadow-sm">
            what did I have for lunch?
          </div>
        </div>

        {/* Sage reply 1 */}
        <div className="flex justify-start">
          <div className="bg-white text-ink text-[12.5px] leading-snug rounded-2xl rounded-tl-md px-3 py-2 max-w-[82%] shadow-sm border border-border/60">
            About <span className="font-semibold">620 kcal</span> — chicken,
            rice, and a small salad. You&apos;ve got{" "}
            <span className="font-semibold text-primary">740 kcal</span> left
            for dinner.
          </div>
        </div>

        {/* User msg 2 */}
        <div className="flex justify-end pt-1">
          <div className="bg-ink text-white text-[12.5px] leading-snug rounded-2xl rounded-tr-md px-3 py-2 max-w-[75%] shadow-sm">
            am I on track?
          </div>
        </div>

        {/* Sage reply 2 */}
        <div className="flex justify-start">
          <div className="bg-white text-ink text-[12.5px] leading-snug rounded-2xl rounded-tl-md px-3 py-2 max-w-[82%] shadow-sm border border-border/60">
            Yes —{" "}
            <span className="font-semibold">75% of your protein target</span>{" "}
            and right on calories. Solid day. 💪
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 pt-2 pb-4 bg-cream border-t border-border/40">
        <div className="flex items-center gap-2 bg-white rounded-full pl-4 pr-1 py-1 border border-border shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <span className="text-subtle text-[12px] font-medium flex-1 truncate">
            Message Sage…
          </span>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2.5 6.5h8M10.5 6.5L7 3M10.5 6.5L7 10"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


const aiFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "GPT-4o Vision analyses every meal photo — calories, macros, ingredients",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "OpenAI powers every coaching reply — honest, personal, and context-aware",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Durable memory of your goals, patterns, and preferences — stored and used by OpenAI",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Your \"My Why\" voice note is transcribed by OpenAI and kept as your north star",
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
              The smartest fitness coach.{" "}
              <span className="text-primary">Period.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Sage is built entirely on OpenAI — from the moment you snap a photo to the coaching
              reply you read a second later. One world-class AI, doing four distinct jobs so you
              never have to think about any of it.
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
              <PhoneMockup size="lg" className="relative z-10">
                <ChatMockup />
              </PhoneMockup>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
