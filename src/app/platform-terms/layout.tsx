import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selling & Buying on Sage — Platform Terms",
  description: "Terms for selling coaching and communities on Sage, and for subscribing to a creator.",
  robots: { index: false, follow: false },
};

export default function PlatformTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
