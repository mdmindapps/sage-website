import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCommunityFunnel } from "@/lib/funnel";
import CommunityFunnel from "@/components/funnel/CommunityFunnel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string; slug: string }>;
}): Promise<Metadata> {
  const { handle, slug } = await params;
  const cm = await getCommunityFunnel(handle, slug);
  if (!cm) return { title: "Sage", robots: { index: false, follow: false } };
  const title = `${cm.title} · ${cm.creator.display_name}`;
  const description = cm.tagline || `Join ${cm.title} on Sage.`;
  const image = cm.gallery?.find((g) => g.type === "image")?.url || cm.card_banner_url || cm.cover_url;
  return {
    title,
    description,
    openGraph: { title, description, images: image ? [{ url: image }] : undefined },
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ handle: string; slug: string }>;
}) {
  const { handle, slug } = await params;
  const community = await getCommunityFunnel(handle, slug);
  if (!community) notFound();
  return <CommunityFunnel community={community} />;
}
