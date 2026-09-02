"use client";

import { motion } from "framer-motion";

interface PhotoBandProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function PhotoBand({ src, alt, priority = false }: PhotoBandProps) {
  return (
    <section className="py-6 md:py-8 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <motion.figure
          className="relative rounded-3xl overflow-hidden border border-border m-0 shadow-[0_2px_8px_rgba(17,24,28,0.05),0_34px_70px_-40px_rgba(11,130,150,0.28)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-[220px] md:h-[340px] object-cover"
            loading={priority ? "eager" : "lazy"}
          />
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(150deg, color-mix(in srgb, var(--color-teal) 12%, transparent), transparent 52%)",
              mixBlendMode: "multiply",
            }}
          />
        </motion.figure>
      </div>
    </section>
  );
}
