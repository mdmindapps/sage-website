import { redirect, notFound } from "next/navigation";
import type { Metadata } from "next";
import { CREATOR_LINKS } from "@/lib/creator-links";
import { getCreatorFunnel } from "@/lib/funnel";
import CreatorFunnel from "@/components/funnel/CreatorFunnel";

/**
 * Reserved top-level path segments — never treated as a creator handle (404 rather
 * than redirect/funnel). Next.js already gives static routes priority over this
 * dynamic one; this set is defense-in-depth.
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
  "creator-profile",
  "mentor",
  "api",
  "_next",
  "favicon.ico",
  "og-image.png",
  "sitemap.xml",
  "robots.txt",
]);

/**
 * Resolution order for /<handle>:
 *   1. Reserved segment            → 404
 *   2. Affiliate redirect (legacy) → 302 to Insert Affiliate (isabella_grae, vitoria_machado).
 *      Kept working, checked BEFORE the funnel so those bio links never break.
 *   3. Approved Sage creator       → render their web funnel (sales page).
 *   4. Otherwise                   → 404
 */
async function resolve(handleRaw: string) {
  const handle = handleRaw.toLowerCase();
  if (RESERVED_HANDLES.has(handle)) return { kind: "notfound" as const };
  if (CREATOR_LINKS[handle])
    return { kind: "redirect" as const, url: CREATOR_LINKS[handle] };
  const creator = await getCreatorFunnel(handle);
  if (creator) return { kind: "funnel" as const, creator };
  return { kind: "notfound" as const };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const r = await resolve(handle);
  if (r.kind !== "funnel") {
    return { title: "Sage Creator", robots: { index: false, follow: false } };
  }
  const c = r.creator;
  const title = `${c.sales_title || "1:1 Coaching"} · ${c.display_name}`;
  const description =
    c.sales_tagline || c.bio || `Train 1:1 with ${c.display_name} on Sage.`;
  const image = c.gallery?.find((g) => g.type === "image")?.url || c.avatar_url;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function HandlePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const r = await resolve(handle);
  if (r.kind === "redirect") redirect(r.url);
  if (r.kind === "funnel") return <CreatorFunnel creator={r.creator} />;
  notFound();
}
