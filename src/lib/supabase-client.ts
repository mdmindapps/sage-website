"use client";

import {
  createClient,
  type SupabaseClient,
} from "@supabase/supabase-js";

/**
 * Browser Supabase client for the funnel checkout flow — auth (create/login a Sage
 * account) + functions.invoke (the same stripe-premium-checkout / stripe-checkout
 * edge functions the app uses). Session persists to localStorage so it survives the
 * Stripe redirect round-trip. Anon/publishable key is safe in client code.
 */
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (_client) return _client;
  // DEV defaults so Vercel previews work without env config (publishable/anon key —
  // safe to ship). Override with NEXT_PUBLIC_SUPABASE_* on Vercel for prod.
  _client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://dhmfsxkukfdjaiznvoex.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobWZzeGt1a2ZkamFpem52b2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDcyNzEsImV4cCI6MjEwMjE4MzI3MX0.pdpv5vSP8e2mE-Kfpg48kL_O92o5tR76i3-8ETg1WwE",
    // detectSessionInUrl: true so the OAuth (Google) redirect back to /join/<handle>
    // gets its code/token exchanged into a session automatically.
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
  );
  return _client;
}
