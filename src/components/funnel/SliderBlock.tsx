"use client";

import { useState } from "react";
import type { SliderImage } from "@/lib/funnel";

/** A swipeable image carousel authored in-app (before/after, progress, anything). */
export default function SliderBlock({ images }: { images: SliderImage[] }) {
  const [i, setI] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  if (!images?.length) return null;
  const n = images.length;
  const go = (d: number) => setI((prev) => (prev + d + n) % n);
  const cur = images[i];

  return (
    <div className="select-none">
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: "4 / 5", maxHeight: 560 }}
        onTouchStart={(e) => setStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (startX == null) return;
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          setStartX(null);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cur.url}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "blur(24px)", transform: "scale(1.2)" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cur.url}
          alt={cur.caption || ""}
          className="absolute inset-0 m-auto max-h-full max-w-full object-contain"
        />

        {cur.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-3 pt-8">
            <p className="text-sm font-semibold text-white">{cur.caption}</p>
          </div>
        )}

        <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-ink">
          {i + 1} / {n}
        </span>

        {n > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-sm transition hover:bg-white active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-sm transition hover:bg-white active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, j) => (
            <button
              key={j}
              type="button"
              aria-label={`Go to image ${j + 1}`}
              onClick={() => setI(j)}
              className={`h-2 rounded-full transition-all ${j === i ? "w-5 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
