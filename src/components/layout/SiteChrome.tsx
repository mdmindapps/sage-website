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
  "/become-a-coach",
  "/join",
  "/creator-profile",
  "/mentor",
];

// First path segments that are real site routes (NOT creator handles). Anything else with 1–2
// segments — /andreiy (coach funnel) or /andreiy/fat-loss-crew (community funnel) — is a creator
// funnel that renders its own focused chrome, so we treat it as standalone (no doubled header).
const KNOWN_FIRST = new Set([
  "privacy", "terms", "cookies", "support", "reset", "delete-account", "get",
  "download", "creators", "creator-terms", "become-a-coach", "join", "creator-profile", "mentor", "c", "api",
]);

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segs = pathname.split("/").filter(Boolean);
  const isFunnel =
    pathname !== "/" && segs.length >= 1 && segs.length <= 2 && !KNOWN_FIRST.has(segs[0]);
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
