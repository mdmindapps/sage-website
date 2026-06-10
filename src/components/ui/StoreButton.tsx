import Link from "next/link";

type Platform = "appstore" | "play";
type Theme = "dark" | "light";

interface StoreButtonProps {
  platform: Platform;
  theme?: Theme;
  href?: string;
  className?: string;
}

const APPLE_PATH =
  "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z";

const PLAY_PATH =
  "M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zM16.81 15.12L6.05 21.34l8.49-8.49 2.27 2.27zM20.16 10.81c.5.29.84.83.84 1.42 0 .59-.34 1.13-.84 1.42l-2.41 1.4-2.5-2.5 2.5-2.5 2.41 1.76zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z";

const themeClasses: Record<Theme, string> = {
  dark: "bg-ink text-white hover:bg-ink/90",
  light:
    "bg-white text-ink hover:bg-white border border-border shadow-[0_2px_14px_rgba(17,24,28,0.06)]",
};

export default function StoreButton({
  platform,
  theme = "dark",
  href = "#pricing",
  className = "",
}: StoreButtonProps) {
  const isApp = platform === "appstore";
  const path = isApp ? APPLE_PATH : PLAY_PATH;
  const small = isApp ? "Download on the" : "GET IT ON";
  const large = isApp ? "App Store" : "Google Play";
  const smallIsUppercase = !isApp;
  const ariaLabel = isApp
    ? "Download on the App Store"
    : "Get it on Google Play";

  // Real store URLs (http...) open in a new tab; in-page anchors scroll within the page.
  const isExternal = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-3 h-14 px-6 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none ${themeClasses[theme]} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden
        className="shrink-0"
      >
        <path d={path} />
      </svg>
      <span className="flex flex-col items-start leading-none text-left">
        <span
          className={`text-[10px] opacity-80 mb-0.5 ${
            smallIsUppercase
              ? "uppercase tracking-[0.14em] font-semibold"
              : "font-medium"
          }`}
        >
          {small}
        </span>
        <span
          className="text-[17px] font-bold leading-tight"
          style={{ letterSpacing: "-0.01em" }}
        >
          {large}
        </span>
      </span>
    </Link>
  );
}
