import { redirect, notFound } from "next/navigation";
import { CREATOR_LINKS } from "@/lib/creator-links";

/**
 * Reserved top-level path segments. Anything in this set must never be treated
 * as a creator handle, so we 404 (rather than redirect) if a caller lands on
 * `/<reserved>` via this dynamic segment.
 *
 * In practice, Next.js already gives static routes priority over dynamic ones,
 * so /privacy → src/app/privacy/page.tsx wins over this file. This set is
 * defense-in-depth in case:
 *   - A static route file is accidentally deleted
 *   - A new top-level route is added to the codebase but not yet to this set
 *     (in which case falling through here would 404 rather than misredirect)
 *   - Someone registers a creator handle that collides with a real page name
 *
 * Includes both current app routes and asset-adjacent paths (favicon.ico,
 * sitemap.xml, robots.txt, og-image.png) that live at the root but may not be
 * intercepted by Next's static handling in every deployment topology.
 */
const RESERVED_HANDLES = new Set([
  "privacy",
  "terms",
  "cookies",
  "support",
  "reset",
  "delete-account",
  "get",
  "download",
  "creators",
  "creator-terms",
  "api",
  "_next",
  "favicon.ico",
  "og-image.png",
  "sitemap.xml",
  "robots.txt",
]);

export default async function CreatorRedirect({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const normalized = handle.toLowerCase();

  if (RESERVED_HANDLES.has(normalized)) {
    notFound();
  }

  const target = CREATOR_LINKS[normalized];
  if (!target) {
    notFound();
  }

  redirect(target);
}
