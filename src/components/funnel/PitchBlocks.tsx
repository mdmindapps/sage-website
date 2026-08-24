import type { PitchBlock } from "@/lib/funnel";

/** Renders a creator's pitch (the sales-copy blocks authored in-app: heading / text / list / image / quote). */
export default function PitchBlocks({ blocks }: { blocks: PitchBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "heading":
            return (
              <h3
                key={i}
                className="text-2xl font-bold text-ink"
                style={{ letterSpacing: "-0.02em" }}
              >
                {b.body}
              </h3>
            );
          case "list": {
            const lines = (b.body || "").split("\n").filter((l) => l.trim());
            return (
              <ul key={i} className="flex flex-col gap-3">
                {lines.map((line, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/12">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="var(--color-primary)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink/85">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-[3px] border-primary pl-4 text-lg font-medium italic text-muted"
              >
                {b.body}
              </blockquote>
            );
          case "image":
            return b.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={b.url}
                alt=""
                className="w-full rounded-2xl object-cover"
              />
            ) : null;
          default: // "text" and anything else → paragraph
            return b.body ? (
              <p
                key={i}
                className="whitespace-pre-line text-[15px] leading-relaxed text-ink/85"
              >
                {b.body}
              </p>
            ) : null;
        }
      })}
    </div>
  );
}
