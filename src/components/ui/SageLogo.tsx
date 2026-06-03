import Link from "next/link";

interface SageLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export default function SageLogo({
  variant = "dark",
  size = "md",
  showWordmark = true,
}: SageLogoProps) {
  const sizeMap = {
    sm: { mark: 28, text: "text-lg" },
    md: { mark: 36, text: "text-xl" },
    lg: { mark: 48, text: "text-2xl" },
  };

  const { mark, text } = sizeMap[size];
  const wordmarkColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <div
        className="flex items-center justify-center rounded-xl bg-primary text-white font-bold shrink-0"
        style={{ width: mark, height: mark, fontSize: mark * 0.52 }}
      >
        S
      </div>
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
