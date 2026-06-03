"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "dark" | "surface";
  animate?: boolean;
}

const bgMap = {
  cream: "bg-cream",
  white: "bg-white",
  dark: "dark-section text-white",
  surface: "bg-surface",
};

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  animate = true,
}: SectionProps) {
  const content = (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgMap[background]} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">{children}</div>
    </section>
  );

  if (!animate) return content;

  return (
    <motion.section
      id={id}
      className={`py-20 md:py-28 ${bgMap[background]} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-ink"
        }`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
