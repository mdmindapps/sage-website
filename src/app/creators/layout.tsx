import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage Creators Program",
  description:
    "Earn 25% recurring commission for referring subscribers to Sage.",
  robots: { index: false, follow: false },
};

export default function CreatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
