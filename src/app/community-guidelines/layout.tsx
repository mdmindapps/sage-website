import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines | Sage",
  description:
    "The rules for clubs and coaching on Sage: what creators may publish, how members treat each other, what we remove, and how to appeal a decision.",
  alternates: { canonical: "https://www.sageacademy.app/community-guidelines" },
};

export default function CommunityGuidelinesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
