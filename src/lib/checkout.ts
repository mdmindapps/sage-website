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
