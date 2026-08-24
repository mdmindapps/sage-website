import type { FunnelReview } from "@/lib/funnel";

function Stars({ n, size = 14 }: { n: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i <= Math.round(n) ? "var(--color-warning)" : "var(--color-border)"}
          />
        </svg>
      ))}
    </span>
  );
}

function initials(name?: string | null) {
  return (name || "?").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export default function Reviews({
  reviews,
  avg,
  count,
}: {
  reviews: FunnelReview[];
  avg: number | null;
  count: number;
}) {
  if (!reviews?.length) return null;
  return (
    <section className="mt-12">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-ink" style={{ letterSpacing: "-0.02em" }}>
          Reviews
        </h2>
        {avg != null && (
          <div className="flex items-center gap-1.5">
            <Stars n={avg} />
            <span className="text-sm font-semibold text-ink">{avg}</span>
            <span className="text-sm text-subtle">({count})</span>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-border bg-white p-4">
            <div className="flex items-center gap-3">
              {r.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={r.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary">
                  {initials(r.name)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{r.name || "Client"}</p>
                <p className="text-xs text-subtle">{fmtDate(r.created_at)}</p>
              </div>
              <Stars n={r.stars} size={13} />
            </div>
            {r.body && (
              <p className="mt-2.5 text-sm leading-relaxed text-ink/85">{r.body}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
