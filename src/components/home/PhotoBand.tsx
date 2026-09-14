"use client";

import { motion } from "framer-motion";

/** Optional "Sage scanner" overlay, in IMAGE coordinates (% of the photo, not of the band), like the app's Scanner:
 *  4 corner brackets around a region + a few floating food labels. Assumes a 3:1 photo. */
interface ScanOverlay {
  box: { left: number; top: number; right: number; bottom: number };
  labels: { name: string; kcal: number; x: number; y: number }[];
}

interface PhotoBandProps {
  src: string;
  alt: string;
  priority?: boolean;
  scan?: ScanOverlay;
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const side = {
    tl: "left-0 top-0 border-l-[3px] border-t-[3px] rounded-tl-xl",
    tr: "right-0 top-0 border-r-[3px] border-t-[3px] rounded-tr-xl",
    bl: "left-0 bottom-0 border-l-[3px] border-b-[3px] rounded-bl-xl",
    br: "right-0 bottom-0 border-r-[3px] border-b-[3px] rounded-br-xl",
  }[pos];
  return <span className={`absolute h-7 w-7 border-white md:h-10 md:w-10 ${side}`} style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }} />;
}

export default function PhotoBand({ src, alt, priority = false, scan }: PhotoBandProps) {
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
          {scan && (
            /* a layer with the photo's own 3:1 shape, sized like object-cover (band height 220 / 340 px), so the
               % positions below stay on the same food on phone and desktop */
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-[3/1] w-[max(100%,660px)] -translate-x-1/2 -translate-y-1/2 md:w-[max(100%,1020px)]"
            >
              <div
                className="absolute"
                style={{ left: `${scan.box.left}%`, top: `${scan.box.top}%`, right: `${100 - scan.box.right}%`, bottom: `${100 - scan.box.bottom}%` }}
              >
                <Corner pos="tl" />
                <Corner pos="tr" />
                <Corner pos="bl" />
                <Corner pos="br" />
              </div>
              {scan.labels.map((l) => (
                <span
                  key={l.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/95 px-2.5 py-1.5 text-center shadow-[0_6px_18px_-6px_rgba(17,24,28,0.45)] md:px-3.5 md:py-2"
                  style={{ left: `${l.x}%`, top: `${l.y}%` }}
                >
                  <span className="block text-[11px] font-bold leading-tight text-ink md:text-[13px]">{l.name}</span>
                  <span className="block text-[11px] font-semibold leading-tight text-ink/70 md:text-[13px]">{l.kcal} kcal</span>
                </span>
              ))}
            </div>
          )}
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
