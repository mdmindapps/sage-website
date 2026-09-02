import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch on Sage",
  description:
    "Coaches, nutritionists and trainers: launch your programs on Sage. Coach on real data, earn five ways, keep 80% — payments, taxes and invoices handled.",
  openGraph: {
    title: "Launch on Sage",
    description:
      "Coaches, nutritionists and trainers: launch your programs on Sage. Coach on real data, earn five ways, keep 80%.",
    url: "https://sageacademy.app/become-a-coach",
    type: "website",
  },
};

export default function BecomeACoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
