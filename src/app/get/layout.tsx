import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Sage — your AI fitness coach",
  description:
    "Download Sage, your AI fitness coach. iOS available now, Android coming soon.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Get Sage — your AI fitness coach",
    description:
      "Download Sage, your AI fitness coach. iOS available now, Android coming soon.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sage" }],
  },
};

export default function GetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
