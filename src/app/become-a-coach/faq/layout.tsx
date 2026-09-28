import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator FAQ — the questions creators actually ask | Sage",
  description:
    "Straight answers for fitness creators considering Sage: how the 95% is calculated, whether you get your members' email addresses, what happens if you leave, what is expected of you, who owns your content, and what it costs to start.",
  keywords: [
    "Sage Academy creators",
    "fitness creator platform fees",
    "do I get my members email addresses",
    "creator agreement questions",
    "paid fitness community platform",
  ],
  alternates: { canonical: "https://www.sageacademy.app/become-a-coach/faq" },
  openGraph: {
    title: "The questions creators actually ask",
    description:
      "How the money works, who owns your members, what happens if you leave. Every answer names the clause it comes from.",
    url: "https://www.sageacademy.app/become-a-coach/faq",
    type: "article",
  },
};

export default function CreatorFaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
