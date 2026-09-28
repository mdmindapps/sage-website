import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Fitness Coaches Monetize Their Audience (2026)",
  description:
    "The six ways a fitness coach earns on Sage — a monthly club, a yearly plan, one-to-one coaching, programs sold on their own, challenges and tips — with what it costs to run and what to expect at your audience size.",
  keywords: [
    "how to monetize fitness audience",
    "fitness coach monetization",
    "sell fitness programs online",
    "paid fitness community",
    "online fitness coaching income",
    "app for fitness coaches",
    "Sage Academy creators",
  ],
  alternates: { canonical: "https://www.sageacademy.app/become-a-coach/monetize" },
  openGraph: {
    title: "How fitness coaches monetize their audience in 2026",
    description:
      "The six ways money reaches a coach on Sage, how many followers actually buy, and what that is worth on a 5K–250K audience.",
    url: "https://www.sageacademy.app/become-a-coach/monetize",
    type: "article",
  },
};

export default function MonetizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
