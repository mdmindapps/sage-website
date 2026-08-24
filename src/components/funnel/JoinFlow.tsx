"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase-client";
import { beginCheckout, isSubscribedTo } from "@/lib/checkout";

const PREMIUM_PRICE = "$4.99";

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
}: {
  creatorId: string;
  creatorName: string;
  priceMonthly: number | null;
  handle: string;
}) {
  const [mode, setMode] = useState<"choose" | "email">("choose");
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [already, setAlready] = useState(false);

  const coachPrice = priceMonthly != null ? `$${priceMonthly}` : "—";
  const firstName = creatorName.split(" ")[0];

  // After any successful auth: guard against re-subscribing, else go to checkout.
  async function proceedAfterAuth() {
    if (await isSubscribedTo(creatorId)) {
      setAlready(true);
      setBusy(false);
      return;
    }
    await beginCheckout(creatorId, true); // redirects to Stripe (skips Premium if already owned)
  }

  // Returning from Google OAuth (?continue=1) → wait for the session, then proceed.
  useEffect(() => {
    const returning =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get("continue") === "1";
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

  async function withGoogle() {
    setErr("");
    setBusy(true);
    try {
      const supabase = getSupabase();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/join/${handle}?continue=1`,
          // always show the account chooser (don't silently auto-pick a single signed-in account)
          queryParams: { prompt: "select_account" },
        },
      });
      if (error) throw error;
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not continue with Google.");
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
          You&apos;re already training with {firstName}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your subscription is active — no need to pay again. Open the Sage app and
          log in to continue.
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
      <p className="mt-1 text-sm text-muted">to start coaching with {firstName}</p>

      {/* price summary */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-ink">Coaching · {firstName}</p>
            <p className="text-xs font-medium text-subtle">by card</p>
          </div>
          <p className="text-sm font-semibold text-ink">
            {coachPrice}
            <span className="text-xs font-medium text-subtle"> /mo</span>
          </p>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-ink">Sage Premium · the app</p>
            <p className="text-xs font-medium text-subtle">by card · skipped if you already have it</p>
          </div>
          <p className="text-sm font-semibold text-ink">
            {PREMIUM_PRICE}
            <span className="text-xs font-medium text-subtle"> /mo</span>
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
      ) : mode === "choose" ? (
        <div className="mt-5 flex flex-col gap-3">
          <button
            onClick={withGoogle}
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
