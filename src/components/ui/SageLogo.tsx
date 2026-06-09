import Link from "next/link";

interface SageLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

const sizeMap = {
  sm: { mark: 28, text: "text-lg" },
  md: { mark: 36, text: "text-xl" },
  lg: { mark: 48, text: "text-2xl" },
};

export default function SageLogo({
  variant = "dark",
  size = "md",
  showWordmark = true,
}: SageLogoProps) {
  const { mark, text } = sizeMap[size];
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";

  // light variant = white ring on transparent bg (for dark surfaces e.g. footer)
  // dark variant  = white ring on teal bg       (for light surfaces e.g. header)
  const src =
    variant === "light"
      ? "/images/brand/logo-mark-white.svg"
      : "/images/brand/logo-mark.svg";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Sage"
        width={mark}
        height={mark}
        style={{ width: mark, height: mark }}
        className="block shrink-0"
      />
      {showWordmark && (
        <span
          className={`font-bold tracking-tight ${text} ${wordmarkColor}`}
          style={{ letterSpacing: "-0.02em" }}
        >
          Sage
        </span>
      )}
    </Link>
  );
}
