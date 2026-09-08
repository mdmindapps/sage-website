import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  colorScheme: "light",
};

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
  metadataBase: new URL("https://www.sageacademy.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sageacademy.app",
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
  },
  verification: {
    other: { "msvalidate.01": "C56A505C9E8EAE4B6DF9AC56ABD0460B" },
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

// Site-wide structured data: who we are (Organization) and what Sage Academy is (the app, with
// its store listings). Tells search engines and AI models unambiguously that "Sage Academy" =
// the fitness app by Friday Technologies, available on the App Store and Google Play.
const SITE_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.sageacademy.app/#org",
    name: "Sage Academy",
    legalName: "Friday Technologies SRL",
    url: "https://www.sageacademy.app",
    logo: "https://www.sageacademy.app/android-chrome-512x512.png",
    sameAs: [
      "https://apps.apple.com/app/id6777168646",
      "https://play.google.com/store/apps/details?id=app.sageacademy",
      "https://www.instagram.com/sage_academyy",
    ],
    contactPoint: { "@type": "ContactPoint", contactType: "customer support", url: "https://www.sageacademy.app/support" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.sageacademy.app/#app",
    name: "Sage Academy",
    alternateName: "Sage",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "Nutrition and fitness app: log meals from a photo, track calories, macros, weight, habits and progress, with a coach in your corner. Fitness coaches and creators run their own coaching business inside the app — a page, a subscription club, 1:1 coaching, programs and challenges — and keep 80%.",
    url: "https://www.sageacademy.app",
    installUrl: "https://www.sageacademy.app/get",
    downloadUrl: [
      "https://apps.apple.com/app/id6777168646",
      "https://play.google.com/store/apps/details?id=app.sageacademy",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to download; Premium subscription in-app. Free for coaches to launch." },
    publisher: { "@id": "https://www.sageacademy.app/#org" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteChrome>{children}</SiteChrome>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSONLD) }} />
      </body>
    </html>
  );
}
