import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Fitness Coaches Monetize Their Audience (2026, With Numbers)",
  description:
    "Six ways fitness coaches and creators turn followers into income — brand codes, 1:1, courses, Patreon, Skool, a custom app, or a club inside a fitness app — with costs, platform cuts and the real follower-to-paid conversion rates, sourced.",
  keywords: [
    "how to monetize fitness audience",
    "fitness coach monetization",
    "sell fitness programs online",
    "paid fitness community",
    "online fitness coaching income",
    "app for fitness coaches",
    "Sage Academy creators",
  ],
  alternates: { canonical: "https://sageacademy.app/become-a-coach/monetize" },
  openGraph: {
    title: "How fitness coaches monetize their audience in 2026",
    description:
      "Six options compared, what % of followers actually pay, and the math on a 5K–250K audience. Every number sourced.",
    url: "https://sageacademy.app/become-a-coach/monetize",
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
