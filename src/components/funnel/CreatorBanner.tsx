import Link from "next/link";

/**
 * The fixed "Are you a creator? Launch on Sage" strip at the bottom of every creator sales page (club + 1:1).
 * Added by Sage, not editable by the creator. ?ref=<handle> only records which creator page the visitor came
 * from (analytics — no payouts implied).
 */
export default function CreatorBanner({ handle }: { handle: string }) {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#101416] via-[#3a3f43] to-[#101416]">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-5 px-6 py-7 sm:flex-row sm:gap-8 sm:px-8">
        {/* two 3D phones with the real Classroom + Discover screens */}
        <div className="relative h-[170px] w-[190px] shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/funnel/banner-phone-classroom.png" alt="" loading="lazy" className="absolute left-0 top-2 h-[158px] w-auto" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/funnel/banner-phone-discover.png"
            alt=""
            loading="lazy"
            className="absolute right-0 top-0 h-[170px] w-auto"
            style={{ filter: "drop-shadow(-10px 14px 18px rgba(0,0,0,0.45))" }}
          />
        </div>
        <div className="flex flex-1 flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <span className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/brand/logo-mark.svg" alt="" width={24} height={24} className="block h-6 w-6" />
            <span className="text-base font-bold text-white" style={{ letterSpacing: "-0.02em" }}>Sage</span>
          </span>
          <p className="text-xl font-bold text-white">Are you a creator?</p>
          <p className="text-[13.5px] leading-snug text-white/65">Create your offer. Free to start.</p>
        </div>
        <Link
          href={`/become-a-coach?ref=${encodeURIComponent(handle)}`}
          className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-ink shadow-lg transition hover:bg-cream"
        >
          Launch on Sage
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 19l3.5-1 8-8a2.8 2.8 0 0 0-4-4l-8 8L3.5 17.5 5 19zM14 6l4 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
