import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset your Sage password",
  description: "Set a new password for your Sage account.",
  robots: { index: false, follow: false },
};

export default function ResetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
