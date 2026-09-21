import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch on Sage Academy — for coaches & creators",
  description:
    "Coaches, nutritionists and trainers: launch your programs on Sage. Coach on real data, earn five ways — founding creators keep 95%. Payments, taxes and invoices handled.",
  openGraph: {
    title: "Launch on Sage Academy — for coaches & creators",
    description:
      "Coaches, nutritionists and trainers: launch your programs on Sage. Coach on real data, earn five ways — founding creators keep 95%.",
    url: "https://www.sageacademy.app/become-a-coach",
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
