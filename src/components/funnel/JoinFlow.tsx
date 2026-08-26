"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase-client";
import {
  beginCheckout,
  isSubscribedTo,
  beginCommunityCheckout,
  isMemberOf,
  type CommunityPlan,
} from "@/lib/checkout";

/** When set, JoinFlow runs the COMMUNITY join instead of the 1:1 coach join. */
export type JoinCommunity = {
  id: string;
  slug: string;
  title: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
};

// Display-only Premium prices (real charge comes from Stripe). DEV values — update monthly to
// the prod price ($12.99) at cutover; annual ($39.99) matches prod.
const PREMIUM = { monthly: "$4.99", yearly: "$39.99" } as const;
// coached rate vs the standalone (solo) price — shown as a strike-through + "save" badge so the coach
// subscription visibly discounts Premium. $7.99→$4.99 = 37% ; $59.99→$39.99 = 33%.
const PREMIUM_WAS = { monthly: "$7.99", yearly: "$59.99" } as const;
const PREMIUM_SAVE = { monthly: "37%", yearly: "33%" } as const;

/**
 * Account step (/join/<handle>). The visitor creates/logs into a Sage account
 * (Google or email — Apple added once its web OAuth is configured), then we start
 * the Stripe checkout (Premium → coach). Tracking-data sharing defaults on and is
 * managed in-app afterwards, so this screen stays clean.
 *
 * Guards existing users: after auth we check if they're already subscribed to this
 * creator — if so we DON'T checkout again (no double charge), we point them to the app.
 * A user who already has Sage Premium skips the Premium charge automatically
 * (stripe-premium-checkout returns {ready}), so they only pay the coach.
 *
 * Google uses the OAuth redirect flow: it bounces to Google and back to
 * /join/<handle>?continue=1; on return we detect the session and continue.
 */
export default function JoinFlow({
  creatorId,
  creatorName,
  priceMonthly,
  handle,
  community,
  plan = "monthly",
}: {
  creatorId: string;
  creatorName: string;
  priceMonthly: number | null;
  handle: string;
  community?: JoinCommunity;
  plan?: CommunityPlan;
}) {
  const [mode, setMode] = useState<"choose" | "email">("choose");
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [already, setAlready] = useState(false);
  const [signedIn, setSignedIn] = useState<string | null>(null);

  const firstName = creatorName.split(" ")[0];
  // Community can be monthly-only, annual-only, or both; the funnel passes the chosen `plan`.
  const cHasMonthly = (community?.priceMonthly ?? 0) > 0;
  const cHasAnnual = (community?.priceAnnual ?? 0) > 0;
  const effPlan: CommunityPlan = community
    ? cHasMonthly && cHasAnnual
      ? plan
      : cHasAnnual
        ? "yearly"
        : "monthly"
    : "monthly";
  const per = community && effPlan === "yearly" ? "/yr" : "/mo";
  const offerPrice = community
    ? effPlan === "yearly"
      ? community.priceAnnual != null
        ? `$${community.priceAnnual}`
        : "—"
      : community.priceMonthly != null
        ? `$${community.priceMonthly}`
        : "—"
    : priceMonthly != null
      ? `$${priceMonthly}`
      : "—";
  const premiumPrice = community ? PREMIUM[effPlan] : PREMIUM.monthly;
  const premiumWas = community ? PREMIUM_WAS[effPlan] : PREMIUM_WAS.monthly;
  const premiumSave = community ? PREMIUM_SAVE[effPlan] : PREMIUM_SAVE.monthly;
  const offerLabel = community ? `Membership · ${community.title}` : `Coaching · ${firstName}`;
  const subhead = community
    ? `to join ${community.title}`
    : `to start coaching with ${firstName}`;
  const returnPath = community
    ? `/join/${handle}/${community.slug}`
    : `/join/${handle}`;
  const returnQuery = community ? `?continue=1&plan=${effPlan}` : `?continue=1`;

  // After any successful auth: guard against a duplicate purchase, else go to checkout.
  async function proceedAfterAuth() {
    if (community) {
      if (await isMemberOf(community.id)) {
        setAlready(true);
        setBusy(false);
        return;
      }
      await beginCommunityCheckout(community.id, effPlan); // Premium (skipped if owned) → membership, same cycle
      return;
    }
    if (await isSubscribedTo(creatorId)) {
      setAlready(true);
      setBusy(false);
      return;
    }
    await beginCheckout(creatorId, true); // redirects to Stripe (skips Premium if already owned)
  }

  // Returning from Google OAuth (?continue=1) → wait for the session, then proceed.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    // Surface an OAuth error that Supabase appended, instead of a generic timeout.
    const oauthErr = params.get("error_description") || params.get("error");
    if (oauthErr) {
      setErr(decodeURIComponent(oauthErr.replace(/\+/g, " ")));
      return;
    }
    const returning = params.get("continue") === "1";
    if (!returning) return;
    const supabase = getSupabase();
    setBusy(true);
    let done = false;
    const go = (session: unknown) => {
      if (session && !done) {
        done = true;
        proceedAfterAuth().catch((e) => {
          setErr(e instanceof Error ? e.message : "Could not continue.");
          setBusy(false);
        });
      }
    };
    supabase.auth.getSession().then(({ data }) => go(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) =>
      go(session),
    );
    const t = setTimeout(() => {
      if (!done) {
        setBusy(false);
        setErr("Sign-in didn't complete. Please try again.");
      }
    }, 9000);
    return () => {
      sub.subscription.unsubscribe();
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creatorId]);

  // Fresh visit (not an OAuth return): if a Sage session already exists, offer to
  // continue as that account instead of silently using it.
  useEffect(() => {
    const returning =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("continue") === "1";
    if (returning) return;
    getSupabase()
      .auth.getSession()
      .then(({ data }) => {
        if (data.session?.user?.email) setSignedIn(data.session.user.email);
      });
  }, []);

  async function useDifferentAccount() {
    await getSupabase().auth.signOut();
    setSignedIn(null);
    setErr("");
  }

  async function continueAsSignedIn() {
    setErr("");
    setBusy(true);
    try {
      await proceedAfterAuth();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
      setBusy(false);
    }
  }

  async function withOAuth(provider: "google" | "apple") {
    setErr("");
    setBusy(true);
    try {
      const supabase = getSupabase();
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}${returnPath}${returnQuery}`,
          // Google: always show the account chooser (don't silently auto-pick a single account).
          ...(provider === "google"
            ? { queryParams: { prompt: "select_account" } }
            : {}),
        },
      });
      if (error) throw error;
    } catch (e) {
      setErr(
        e instanceof Error
          ? e.message
          : `Could not continue with ${provider === "apple" ? "Apple" : "Google"}.`,
      );
      setBusy(false);
    }
  }

  async function withEmail() {
    setErr("");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setErr("Enter a valid email.");
      return;
    }
    if (pw.length < 6) {
      setErr("Password must be at least 6 characters.");
      return;
    }
    setBusy(true);
    try {
      const supabase = getSupabase();
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password: pw,
        });
        if (error) throw error;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password: pw,
        });
        if (error) {
          // Existing account → guide them to log in instead of erroring out.
          if (/already|registered|exists/i.test(error.message)) {
            setIsLogin(true);
            setErr("You already have a Sage account — enter your password to log in.");
            setBusy(false);
            return;
          }
          throw error;
        }
        if (!data.session) {
          setErr(
            "Check your email to confirm your account, then come back and log in.",
          );
          setBusy(false);
          return;
        }
      }
      await proceedAfterAuth();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Something went wrong.");
      setBusy(false);
    }
  }

  // ---- already subscribed to this creator ----
  if (already) {
    return (
      <div className="mx-auto w-full max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/12">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="var(--color-success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
          {community
            ? `You're already in ${community.title}`
            : `You're already training with ${firstName}`}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {community
            ? "Your membership is active — no need to pay again. Open the Sage app and log in to continue."
            : "Your subscription is active — no need to pay again. Open the Sage app and log in to continue."}
        </p>
        <Link
          href="/get"
          className="mt-6 inline-flex h-13 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white transition hover:bg-primary-dark active:scale-[0.98]"
        >
          Open the app
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <h1 className="text-2xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
        Create your account
      </h1>
      <p className="mt-1 text-sm text-muted">{subhead}</p>

      {/* price summary */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-ink">{offerLabel}</p>
            <p className="text-xs font-medium text-subtle">by card</p>
          </div>
          <p className="text-sm font-semibold text-ink">
            {offerPrice}
            <span className="text-xs font-medium text-subtle"> {per}</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-ink">Sage Premium · the app</p>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">Save {premiumSave}</span>
            </div>
            <p className="text-xs font-medium text-subtle">by card · your coach&apos;s rate · skipped if you already have it</p>
          </div>
          <p className="shrink-0 whitespace-nowrap pl-3 text-right text-sm font-semibold text-ink">
            <span className="mr-1 font-medium text-subtle line-through">{premiumWas}</span>
            {premiumPrice}
            <span className="text-xs font-medium text-subtle"> {per}</span>
          </p>
        </div>
      </div>

      {err && (
        <p className="mt-4 rounded-xl bg-danger/8 px-3 py-2.5 text-xs font-medium text-danger">
          {err}
        </p>
      )}

      {busy ? (
        <div className="mt-6 flex items-center justify-center gap-3 py-4">
          <span className="h-5 w-5 animate-spin rounded-full border-[3px] border-border border-t-primary" />
          <span className="text-sm font-medium text-muted">One moment…</span>
        </div>
      ) : mode === "choose" && signedIn ? (
        <div className="mt-5 flex flex-col gap-3">
          <div className="rounded-xl bg-surface px-4 py-3 text-center">
            <p className="text-xs font-medium text-subtle">Signed in as</p>
            <p className="text-sm font-semibold text-ink">{signedIn}</p>
          </div>
          <button
            onClick={continueAsSignedIn}
            className="flex h-13 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-white shadow-sm transition hover:bg-primary-dark active:scale-[0.98]"
          >
            Continue as {signedIn.split("@")[0]}
          </button>
          <button
            onClick={useDifferentAccount}
            className="text-center text-xs font-medium text-muted transition hover:text-ink"
          >
            Use a different account
          </button>
          <p className="mt-1 text-center text-xs font-medium text-subtle">
            Secure card payment · Cancel anytime
          </p>
        </div>
      ) : mode === "choose" ? (
        <div className="mt-5 flex flex-col gap-3">
          <button
            onClick={() => withOAuth("apple")}
            className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-ink text-base font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
          <button
            onClick={() => withOAuth("google")}
            className="flex h-13 w-full items-center justify-center gap-2.5 rounded-full border border-[#E2E4E7] bg-white text-base font-semibold text-ink transition hover:bg-surface active:scale-[0.98]"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            onClick={() => setMode("email")}
            className="flex h-13 w-full items-center justify-center gap-2.5 rounded-full border border-[#E2E4E7] bg-white text-base font-semibold text-ink transition hover:bg-surface active:scale-[0.98]"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Continue with email
          </button>
          <p className="mt-1 text-center text-xs font-medium text-subtle">
            Secure card payment · Cancel anytime
          </p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-ink outline-none focus:border-primary"
          />
          <input
            type="password"
            autoComplete={isLogin ? "current-password" : "new-password"}
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-ink outline-none focus:border-primary"
          />
          <button
            onClick={withEmail}
            className="flex h-13 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-white shadow-sm transition hover:bg-primary-dark active:scale-[0.98]"
          >
            {isLogin ? "Log in & continue" : "Continue to payment"}
          </button>
          <button
            onClick={() => {
              setIsLogin((v) => !v);
              setErr("");
            }}
            className="text-center text-xs font-medium text-muted transition hover:text-ink"
          >
            {isLogin
              ? "New to Sage? Create an account"
              : "Already have a Sage account? Log in"}
          </button>
          <button
            onClick={() => setMode("choose")}
            className="text-center text-xs font-medium text-subtle transition hover:text-ink"
          >
            ← Other options
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-xs text-subtle">
        By continuing you agree to Sage&apos;s{" "}
        <Link href="/terms" className="text-muted underline">Terms</Link> and{" "}
        <Link href="/privacy" className="text-muted underline">Privacy</Link>.
      </p>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}
