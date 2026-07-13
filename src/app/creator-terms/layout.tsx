import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage Creator Program — Terms",
  description: "Terms of the Sage Creator Program.",
  robots: { index: false, follow: false },
};

export default function CreatorTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
