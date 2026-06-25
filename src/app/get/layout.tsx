import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Sage — your AI fitness coach",
  description:
    "Download Sage, your AI fitness coach. Available on App Store and Google Play.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Get Sage — your AI fitness coach",
    description:
      "Download Sage, your AI fitness coach. Available on App Store and Google Play.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sage" }],
  },
};

export default function GetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
