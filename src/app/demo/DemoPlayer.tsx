"use client";

import { useRef, useState } from "react";

export type Chapter = { at: number; label: string };
export type Group = { id: string; title: string };
export type Clip = {
  id: string;
  group: string;
  title: string;
  lead: string;
  duration: string;
  src: string;
  poster: string;
  chapters: Chapter[];
};

function stamp(sec: number) {
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

/* One player at the top, a library underneath. A new recording is an entry in the list — the page
   gains a card, never a section, so it reads the same at one clip or twenty. The library only
   appears from the second clip: a grid of one card is a row of empty space that says so. */
export default function DemoPlayer({ clips, groups }: { clips: Clip[]; groups: Group[] }) {
  const [active, setActive] = useState(0);
  const [playingFrom, setPlayingFrom] = useState<number | null>(null);
  const video = useRef<HTMLVideoElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  // Falls back rather than throwing: a clip removed from the list while somebody is watching it
  // would otherwise leave them on a blank page.
  const clip = clips[active] ?? clips[0];

  const jump = (at: number) => {
    const v = video.current;
    if (!v) return;
    v.currentTime = at;
    setPlayingFrom(at);
    void v.play().catch(() => {}); // a blocked autoplay must still leave the seek in place
  };

  const open = (i: number) => {
    setActive(i);
    setPlayingFrom(null);
    stage.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div ref={stage} className="scroll-mt-24 grid gap-10 md:gap-14 md:grid-cols-[minmax(0,400px)_1fr] md:items-start">
        {/* The phone body and its glow are part of the video, so the panel behind it is black —
            against the section's ink the baked glow would end on a visible rectangle. */}
        <div className="rounded-[28px] overflow-hidden bg-black mx-auto w-full max-w-[400px]">
          <video
            ref={video}
            key={clip.id}
            className="w-full block"
            src={clip.src}
            poster={clip.poster}
            controls
            playsInline
            preload="metadata"
          />
        </div>

        <div className="min-w-0">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            {clip.title}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-[60ch]">{clip.lead}</p>

          {clip.chapters.length > 0 && (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                Jump to
              </p>
              <ul className="flex flex-col border-b border-white/10">
                {clip.chapters.map((ch) => (
                  <li key={ch.at}>
                    <button
                      onClick={() => jump(ch.at)}
                      className={`w-full flex items-baseline gap-4 text-left py-3 border-t border-white/10 transition-colors ${
                        playingFrom === ch.at ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      <span
                        className={`tabular-nums text-sm font-semibold shrink-0 w-11 ${
                          playingFrom === ch.at ? "text-primary" : "text-white/40"
                        }`}
                      >
                        {stamp(ch.at)}
                      </span>
                      <span className="text-base font-medium">{ch.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {clips.length > 1 && (
        <div className="mt-20 md:mt-24 space-y-14">
          {groups.map((g) => {
            const inGroup = clips
              .map((c, i) => ({ c, i }))
              .filter(({ c }) => c.group === g.id);
            if (inGroup.length === 0) return null;
            return (
              <div key={g.id}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                  {g.title}
                </h3>
                <ul className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {inGroup.map(({ c, i }) => (
                    <li key={c.id}>
                      <button
                        onClick={() => open(i)}
                        aria-current={i === active}
                        className="w-full text-left group"
                      >
                        <div
                          className={`rounded-2xl overflow-hidden bg-black mb-3 ring-2 transition-colors ${
                            i === active ? "ring-primary" : "ring-transparent group-hover:ring-white/25"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={c.poster}
                            alt=""
                            loading="lazy"
                            className="w-full aspect-[3/4] object-cover"
                          />
                        </div>
                        <p
                          className={`text-sm font-semibold leading-snug ${
                            i === active ? "text-white" : "text-white/80 group-hover:text-white"
                          }`}
                        >
                          {c.title}
                        </p>
                        <p className="text-xs text-white/40 mt-1 tabular-nums">{c.duration}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
