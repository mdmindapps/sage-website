import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Guide",
  description:
    "The complete Sage creator guide — from your first client to mastering every tool. Quick-Start plus the full feature reference.",
  openGraph: {
    title: "Sage Creator Guide",
    description:
      "From your first client to mastering every tool — the complete reference for coaching on Sage.",
    url: "https://sageacademy.app/become-a-coach/guide",
    type: "website",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
