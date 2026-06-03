"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  light?: boolean;
}

export default function FaqItem({ question, answer, light = false }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b ${light ? "border-white/10" : "border-border"} last:border-0`}
    >
      <button
        className={`flex items-center justify-between w-full py-5 text-left gap-4 group ${
          light ? "text-white" : "text-ink"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-base md:text-lg leading-snug">{question}</span>
        <span
          className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 ${
            open
              ? "bg-primary border-primary text-white rotate-45"
              : light
              ? "border-white/20 text-white/60 group-hover:border-white/40"
              : "border-border text-muted group-hover:border-primary group-hover:text-primary"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className={`pb-5 text-base leading-relaxed ${
                light ? "text-white/65" : "text-muted"
              }`}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
