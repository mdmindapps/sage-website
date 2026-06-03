interface PhoneMockupProps {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const sizeMap = {
  sm: { w: 200, h: 420 },
  md: { w: 260, h: 540 },
  lg: { w: 300, h: 620 },
};

export default function PhoneMockup({
  label = "Screenshot placeholder",
  className = "",
  size = "md",
  children,
}: PhoneMockupProps) {
  const { w, h } = sizeMap[size];

  return (
    <div
      className={`phone-mockup relative shrink-0 ${className}`}
      style={{ width: w, height: h }}
    >
      {/* Phone shell */}
      <div
        className="absolute inset-0 rounded-[2.5rem] bg-ink shadow-2xl border-4 border-ink/90"
        style={{ borderRadius: "2.5rem" }}
      />

      {/* Dynamic island / notch */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
        style={{ width: 80, height: 22 }}
      />

      {/* Screen */}
      <div
        className="phone-mockup-screen absolute flex flex-col items-center justify-center overflow-hidden z-10"
        style={{
          inset: 8,
          borderRadius: "2.1rem",
        }}
      >
        {children ?? (
          <div className="flex flex-col items-center gap-2 text-center p-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-1">
              <span className="text-primary font-bold text-lg">S</span>
            </div>
            <p className="text-subtle text-xs font-medium">{label}</p>
          </div>
        )}
      </div>

      {/* Home indicator */}
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-ink/30 rounded-full z-20"
        style={{ width: 88, height: 4 }}
      />
    </div>
  );
}
