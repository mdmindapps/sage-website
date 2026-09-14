/**
 * The fixed "Your tracking app" block on every creator sales page (club + 1:1). Added by Sage, not an editor
 * block, so creators can't remove it. Separates what the Sage app does (tracking) from what the coach offers,
 * and says upfront that Sage Premium is added at checkout. Visual: a 3D phone with the real Nutrition screen,
 * the meal photo behind it (scanner corners) and the real logged-meal card in front.
 */
const ITEMS = [
  { icon: "balance", title: "Calories in vs calories out", text: "What you ate against what you burned, and your deficit for the day" },
  { icon: "camera", title: "Meals from a photo", text: "Calories and macros for every item, in seconds" },
  { icon: "steps", title: "Steps & workouts", text: "Synced with Apple Health / Health Connect" },
  { icon: "progress", title: "Weight & progress photos", text: "Measurements, before/after comparisons and a weekly report" },
] as const;

function Icon({ name }: { name: (typeof ITEMS)[number]["icon"] }) {
  const paths = {
    balance: <path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 6a3 3 0 0 0 5 0L5 8zm14 0-2.5 6a3 3 0 0 0 5 0L19 8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    camera: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.5 7l1.5-2.5h4L15.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="12" cy="13.5" r="3.3" stroke="currentColor" strokeWidth="1.7" />
      </>
    ),
    steps: <path d="M8.5 3.5c1.7 0 2.6 2.2 2.6 5s-1 4.5-2.6 4.5S6 11.3 6 8.5s.8-5 2.5-5zM6.3 15.5h4.4c0 2.5-.9 4-2.2 4s-2.2-1.5-2.2-4zM15.5 7c1.7 0 2.5 2.2 2.5 5s-.9 4.5-2.5 4.5S13 14.8 13 12s.8-5 2.5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
    progress: <path d="M4 19h16M6 15l4-4 3 3 5-6M15 8h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function SageAppBlock({ offer }: { offer: "club" | "coaching" }) {
  return (
    <section className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[300px_1fr] md:gap-12">
      <div className="relative mx-auto w-[300px]">
        <div
          className="absolute left-[-8px] top-[4%] z-0 h-[165px] w-[138px] overflow-hidden rounded-2xl shadow-[0_18px_36px_-12px_rgba(16,20,22,0.4)]"
          style={{ transform: "rotate(-7deg)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/funnel/sage-meal-photo.jpg" alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-[3px] border-t-[3px] border-white" />
          <span className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-[3px] border-t-[3px] border-white" />
          <span className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-[3px] border-l-[3px] border-white" />
          <span className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-[3px] border-r-[3px] border-white" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/funnel/sage-phone.png"
          alt="The Nutrition screen in the Sage app"
          loading="lazy"
          className="relative z-10 ml-auto block h-auto w-[250px]"
          style={{ filter: "drop-shadow(0 30px 40px rgba(16,20,22,0.28))" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/funnel/sage-meal-card.png"
          alt="A meal logged from a photo in the Sage app"
          loading="lazy"
          className="absolute bottom-[26%] left-0 z-20 w-[250px] rounded-2xl bg-white shadow-[0_18px_40px_-12px_rgba(16,20,22,0.35)] ring-1 ring-black/5"
          style={{ transform: "rotate(-3deg)" }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/logo-mark.svg" alt="" width={24} height={24} className="block h-6 w-6" />
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Your tracking app</span>
        </div>
        <h2 className="text-2xl font-extrabold leading-tight text-ink md:text-[28px]" style={{ letterSpacing: "-0.025em", textWrap: "balance" }}>
          Everything is tracked in the Sage app
        </h2>
        <ul className="flex flex-col gap-3.5">
          {ITEMS.map((it) => (
            <li key={it.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon name={it.icon} />
              </span>
              <span className="flex flex-col">
                <span className="text-[15px] font-bold text-ink">{it.title}</span>
                <span className="text-[13.5px] leading-snug text-muted">{it.text}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="border-t border-border pt-3.5 text-[12.5px] font-medium leading-snug text-subtle">
          {offer === "club" ? "Your club" : "Your coaching"} runs inside the Sage app. Sage Premium ($4.99/mo) is added at checkout, or skipped if you already have it.
        </p>
      </div>
    </section>
  );
}
