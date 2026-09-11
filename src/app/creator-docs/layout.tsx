import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Docs",
  // Shared by link with creators; kept out of search engines on purpose.
  robots: { index: false, follow: false },
  description:
    "Step-by-step docs for Sage Academy creators: set up your profile, 1:1 coaching, communities, programs, challenges and payouts, with real app screenshots.",
  openGraph: {
    title: "Sage Academy Creator Docs",
    description:
      "Every screen you'll use to launch on Sage Academy, with the exact buttons and an example for each field.",
    url: "https://www.sageacademy.app/creator-docs",
    type: "website",
  },
};

export default function CreatorDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
