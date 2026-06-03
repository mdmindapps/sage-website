import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shrink-0";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark active:scale-[0.98] shadow-sm",
  secondary:
    "bg-ink text-white hover:bg-ink/90 active:scale-[0.98] shadow-sm",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
  ghost:
    "text-ink hover:bg-ink/5 active:scale-[0.98]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  external = false,
  disabled = false,
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
