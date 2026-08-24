"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const STANDALONE_ROUTES = [
  "/reset",
  "/delete-account",
  "/get",
  "/download",
  "/creators",
  "/creator-terms",
  "/join",
  "/creator-profile",
  "/mentor",
];

// Single-segment static pages that KEEP the global site header/footer.
// Any OTHER single-segment path (e.g. /andreiy) is a creator funnel — it renders
// its own focused chrome, so we treat it as standalone here to avoid a doubled header.
const CHROME_PATHS = new Set(["/", "/privacy", "/terms", "/cookies", "/support"]);

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSingleSegment = /^\/[^/]+$/.test(pathname);
  const isFunnel = isSingleSegment && !CHROME_PATHS.has(pathname);
  const isStandalone =
    isFunnel ||
    STANDALONE_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
