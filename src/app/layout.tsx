import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sage — AI Fitness Coach",
    template: "%s | Sage",
  },
  description:
    "Snap a photo of your meal. Chat with your AI fitness coach. Build habits that stick. Get Sage for iOS and Android.",
  keywords: [
    "AI fitness coach",
    "calorie tracker",
    "meal photo logging",
    "diet app",
    "fitness app",
    "healthy habits",
    "food tracking",
  ],
  authors: [{ name: "Friday Technologies SRL" }],
  creator: "Friday Technologies SRL",
  publisher: "Friday Technologies SRL",
  metadataBase: new URL("https://sageacademy.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sageacademy.app",
    siteName: "Sage",
    title: "Sage — AI Fitness Coach",
    description:
      "Snap a photo of your meal. Chat with your AI fitness coach. Build habits that stick.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sage — AI Fitness Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage — AI Fitness Coach",
    description:
      "Snap a photo of your meal. Chat with your AI fitness coach. Build habits that stick.",
    images: ["/og-image.png"],
    creator: "@sagefitnesai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
