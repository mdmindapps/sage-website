/**
 * Creator funnel data — the public storefront a logged-out visitor sees at
 * sageacademy.app/<handle>. Fetched from Supabase via the SECURITY DEFINER
 * `creator_funnel(handle)` RPC (migration 0133), which exposes ONLY the public
 * sales fields for an approved, non-suspended creator (no stripe/contact/moderation
 * columns leak). Called server-side with the anon/publishable key.
 */

// DEV Supabase defaults so Vercel previews work without env config (publishable/anon
// key — safe to ship, RLS-protected, same pattern as /reset). Set NEXT_PUBLIC_SUPABASE_*
// on Vercel to point at prod when the creator platform ships.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://dhmfsxkukfdjaiznvoex.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobWZzeGt1a2ZkamFpem52b2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDcyNzEsImV4cCI6MjEwMjE4MzI3MX0.pdpv5vSP8e2mE-Kfpg48kL_O92o5tR76i3-8ETg1WwE";

export type GalleryItem = { url: string; type: "image" | "video" };
export type SliderImage = { url: string; caption?: string | null };
export type PitchBlock = {
  kind: "heading" | "text" | "list" | "image" | "quote" | "slider" | string;
  body: string | null;
  url: string | null;
  config: {
    w?: number;
    h?: number;
    size?: "sm" | "md" | "lg";
    fit?: "fill" | "whole";
    focusX?: number;
    focusY?: number;
    images?: SliderImage[];
  } | null;
};

export type CreatorFunnel = {
  id: string;
  handle: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  specialty: string | null;
  sales_title: string | null;
  sales_tagline: string | null;
  sales_specialty: string | null;
  categories: string[] | null;
  price_monthly: number | null;
  price_weekly: number | null;
  gallery: GalleryItem[] | null;
  card_banner_url: string | null;
  banner_url: string | null;
  reviews_enabled: boolean;
  show_other_offers: boolean;
  instagram: string | null;
  social_url: string | null;
  blocks: PitchBlock[];
  review_avg: number | null;
  review_count: number;
  reviews: FunnelReview[];
  communities: FunnelCommunity[];
};

export type FunnelReview = {
  name: string | null;
  avatar: string | null;
  stars: number;
  body: string | null;
  created_at: string;
};

export type FunnelCommunity = {
  id?: string;
  slug?: string;
  title: string | null;
  tagline: string | null;
  image: string | null;
  categories: string[] | null;
  member_count: number;
  price_monthly: number | null;
};

export type CommunityFunnel = {
  id: string;
  slug: string;
  title: string | null;
  tagline: string | null;
  gallery: GalleryItem[] | null;
  cover_url: string | null;
  card_banner_url: string | null;
  categories: string[] | null;
  reviews_enabled: boolean;
  member_count: number;
  price_monthly: number | null;
  price_annual: number | null;
  creator: { id: string; handle: string; display_name: string; avatar_url: string | null };
  blocks: PitchBlock[];
  review_count: number;
  review_avg: number | null;
  reviews: FunnelReview[];
  other_communities: FunnelCommunity[];
  coaching: { handle: string; price_monthly: number | null; title: string | null } | null;
};

async function callRpc<T>(fn: string, body: object): Promise<T | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T | null;
  } catch {
    return null;
  }
}

export async function getCommunityFunnel(
  handle: string,
  slug: string,
): Promise<CommunityFunnel | null> {
  const data = await callRpc<CommunityFunnel>("community_funnel", {
    p_handle: handle,
    p_slug: slug,
  });
  return data && data.id ? data : null;
}

export async function getCreatorFunnel(
  handle: string,
): Promise<CreatorFunnel | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/creator_funnel`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_handle: handle }),
      // storefront content is public + changes rarely; revalidate so edits show within a minute
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as CreatorFunnel | null;
    if (!data || !data.id) return null;
    return data;
  } catch {
    return null;
  }
}
