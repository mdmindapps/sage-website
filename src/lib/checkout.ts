"use client";

import { getSupabase } from "./supabase-client";

/**
 * Funnel checkout — reuses the SAME edge functions as the app, so the web funnel and
 * the in-app flow behave identically (both pay by card on Stripe, no IAP):
 *
 *   1. stripe-premium-checkout → Sage Premium (the app). success_url continues to
 *      /creator-profile?...&nextCoach=<plan> (handled by app/checkout/continue on the site).
 *   2. stripe-checkout        → the coach subscription. success_url → /mentor?purchased=1.
 *
 * Both require an authenticated Supabase session (functions.invoke attaches the JWT),
 * so the funnel creates/logs in a Sage account first.
 */

const PLAN = "monthly" as const;

/** Is the logged-in user already actively subscribed to this creator? Guards the
 *  funnel from creating a duplicate coach subscription (double charge). */
export async function isSubscribedTo(creatorId: string): Promise<boolean> {
  const supabase = getSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("coach_subscriptions")
    .select("id")
    .eq("fan_id", user.id)
    .eq("creator_id", creatorId)
    .eq("status", "active")
    .maybeSingle();
  return !!data;
}

/** Screen 1 — Sage Premium. Returns {ready} if the user already has Premium, else {url}. */
export async function startPremiumCheckout(
  creatorId: string,
  share: boolean,
): Promise<{ ready?: boolean; url?: string }> {
  const supabase = getSupabase();
  const { data, error } = await supabase.functions.invoke(
    "stripe-premium-checkout",
    { body: { plan: PLAN, creatorId, share, baseUrl: window.location.origin } },
  );
  if (error) throw error;
  if (data?.error) throw new Error(data.detail || data.error);
  return data as { ready?: boolean; url?: string };
}

/** Screen 2 — the coach subscription. Returns the Stripe-hosted checkout URL. */
export async function startCoachCheckout(
  creatorId: string,
  share: boolean,
  alreadyPremium: boolean,
): Promise<string> {
  const supabase = getSupabase();
  const { data, error } = await supabase.functions.invoke("stripe-checkout", {
    body: {
      creatorId,
      plan: PLAN,
      share,
      alreadyPremium,
      baseUrl: window.location.origin,
    },
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.detail || data.error);
  return data.url as string;
}

/**
 * Full funnel entry: from a logged-in session, kick off checkout.
 * Runs Premium first; if already Premium, jumps straight to the coach.
 */
export async function beginCheckout(creatorId: string, share: boolean) {
  const premium = await startPremiumCheckout(creatorId, share);
  if (premium.url) {
    window.location.href = premium.url; // → Stripe (Premium), then /creator-profile continue
    return;
  }
  // already Premium → straight to the coach
  const coachUrl = await startCoachCheckout(creatorId, share, true);
  window.location.href = coachUrl;
}

// ---------- community membership (same rules as 1:1: bundle Premium, skip if owned, dup-guard) ----------

/** The membership billing cycle. Sage Premium follows the SAME cycle (annual community → annual Premium). */
export type CommunityPlan = "monthly" | "yearly";

/** Sage Premium before a COMMUNITY join, on the same cycle as the membership.
 *  success_url continues to /creator-profile?community=…&nextCommunity=<plan>. */
export async function startPremiumForCommunity(
  communityId: string,
  plan: CommunityPlan = "monthly",
): Promise<{ ready?: boolean; url?: string }> {
  const supabase = getSupabase();
  const { data, error } = await supabase.functions.invoke("stripe-premium-checkout", {
    body: { plan, communityId, baseUrl: window.location.origin },
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.detail || data.error);
  return data as { ready?: boolean; url?: string };
}

/** The community membership checkout (monthly or yearly). Returns the Stripe-hosted URL. */
export async function startCommunityCheckout(
  communityId: string,
  plan: CommunityPlan = "monthly",
): Promise<string> {
  const supabase = getSupabase();
  const { data, error } = await supabase.functions.invoke("stripe-community-checkout", {
    body: { communityId, plan, baseUrl: window.location.origin },
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.detail || data.error);
  return data.url as string;
}

/** Is the logged-in user already an active member of this community? Guards duplicate joins. */
export async function isMemberOf(communityId: string): Promise<boolean> {
  const supabase = getSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase
    .from("community_members")
    .select("id")
    .eq("member_id", user.id)
    .eq("community_id", communityId)
    .eq("status", "active")
    .maybeSingle();
  return !!data;
}

/** Full community-join entry: Premium first (skipped if owned), then the membership checkout —
 *  both on the chosen cycle (annual community → annual Premium). */
export async function beginCommunityCheckout(
  communityId: string,
  plan: CommunityPlan = "monthly",
) {
  const premium = await startPremiumForCommunity(communityId, plan);
  if (premium.url) {
    window.location.href = premium.url; // → Stripe (Premium), then continues to the community checkout
    return;
  }
  const url = await startCommunityCheckout(communityId, plan);
  window.location.href = url;
}
