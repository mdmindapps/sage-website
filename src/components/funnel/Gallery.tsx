"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/funnel";

/** Convert a YouTube watch/short URL to an embeddable URL. Returns null if not YouTube. */
function youtubeEmbed(url: string): string | null {
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return m ? `https://www.youtube.com/embed/${m[1]}?rel=0` : null;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState(0);
  if (!items?.length) return null;
  const current = items[active];
  const embed = current.type === "video" ? youtubeEmbed(current.url) : null;

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-3xl bg-ink/5 aspect-[4/5] sm:aspect-[16/10]">
        {embed ? (
          <iframe
            src={embed}
            title="Creator video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : current.type === "video" ? (
          <video
            src={current.url}
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {items.map((it, i) => {
            const yt = it.type === "video" ? youtubeEmbed(it.url) : null;
            const thumb = yt
              ? `https://img.youtube.com/vi/${yt.split("/embed/")[1].split("?")[0]}/mqdefault.jpg`
              : it.url;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Media ${i + 1}`}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                  i === active
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb} alt="" className="h-full w-full object-cover" />
                {it.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/55">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
