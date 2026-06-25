"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import StoreButton from "@/components/ui/StoreButton";

/* Sage — single shareable bio link.
   Hosted at /get (alias: /download). Auto-routes by device:
   - iOS → redirect to App Store
   - Android → email waitlist (until ANDROID_LIVE = true)
   - Desktop → both options + "open on your phone" prompt */

const ANDROID_LIVE = false;
const APPSTORE_URL = "https://apps.apple.com/app/id6777168646";
const PLAY_URL = "https://play.google.com/store/apps/details?id=app.sageacademy";

// Same Supabase project as src/app/reset/page.tsx — publishable key, safe to ship.
const SUPABASE_URL = "https://flchqdspfidwcljtuttq.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_6JflakxdG19uLJfGXvIotA_kLFroJKC";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type Device = "loading" | "ios" | "android" | "desktop";

// Lightweight PostHog wrapper — no-ops if the SDK isn't loaded site-wide yet,
// so capture calls start firing automatically once PostHog is wired in.
type PosthogLike = { capture?: (event: string, props?: Record<string, unknown>) => void };
function capture(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const ph = (window as unknown as { posthog?: PosthogLike }).posthog;
  if (ph && typeof ph.capture === "function") ph.capture(event, props);
}

function detectDevice(): Device {
  if (typeof window === "undefined") return "loading";
  const ua = window.navigator.userAgent;
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

export default function GetPage() {
  const [device, setDevice] = useState<Device>("loading");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const d = detectDevice();
    setDevice(d);
    capture("get_page_viewed", { device: d });

    if (d === "ios") {
      capture("get_page_ios_redirect");
      window.location.replace(APPSTORE_URL);
      return;
    }

    if (d === "android" && ANDROID_LIVE) {
      window.location.replace(PLAY_URL);
    }
  }, []);

  const handleSubmit = async () => {
    setError(null);
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    let duplicate = false;
    const { error: insertError } = await supabase
      .from("android_waitlist")
      .insert({ email: trimmed });

    if (insertError) {
      // Postgres unique-violation = "duplicate" → friendly UX, no error state.
      const isDuplicate =
        insertError.code === "23505" ||
        /duplicate/i.test(insertError.message ?? "");
      if (isDuplicate) {
        duplicate = true;
      } else {
        // Transient/other error — log for debugging, but never block the user.
        console.error("android_waitlist insert failed", insertError);
      }
    }

    capture("get_page_android_waitlist_signup", {
      email_domain: trimmed.split("@")[1],
      already_subscribed: duplicate,
    });
    setAlreadySubscribed(duplicate);
    setSubmitted(true);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream via-cream to-teal/10 px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_10px_40px_rgba(12,36,43,0.08)] p-8 text-center">
        {/* Brand */}
        <div className="flex flex-col items-center mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/logo-mark.svg"
            alt="Sage"
            width={64}
            height={64}
            style={{ width: 64, height: 64 }}
            className="block mb-4"
          />
          <p
            className="text-3xl font-bold text-teal"
            style={{ letterSpacing: "-0.02em" }}
          >
            Sage
          </p>
          <p className="text-sm text-muted mt-1">Your AI fitness coach</p>
        </div>

        {device === "loading" && (
          <p className="text-sm text-subtle">Loading…</p>
        )}

        {device === "ios" && (
          <div>
            <h1
              className="text-xl font-bold text-ink mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Opening the App Store…
            </h1>
            <p className="text-sm text-muted mb-6">
              If it doesn&apos;t open automatically, tap below.
            </p>
            <a
              href={APPSTORE_URL}
              className="inline-flex w-full items-center justify-center bg-ink text-white font-semibold rounded-xl h-12 hover:bg-ink/90 transition-colors"
            >
              Open the App Store
            </a>
          </div>
        )}

        {device === "android" && !submitted && (
          <div>
            <h1
              className="text-xl font-bold text-ink mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Android launching very soon
            </h1>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Enter your email and we&apos;ll let you know the moment Sage is live on Google
              Play.
            </p>
            <div className="text-left">
              <label htmlFor="waitlist-email" className="sr-only">
                Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !submitting) handleSubmit();
                }}
                disabled={submitting}
                className="w-full h-12 px-4 rounded-xl border border-border focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15 text-ink placeholder:text-subtle transition-colors"
              />
              {error && (
                <p className="text-danger text-xs mt-2">{error}</p>
              )}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="mt-3 w-full h-12 rounded-xl bg-teal text-white font-semibold hover:bg-teal-dark active:bg-teal-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Submitting…" : "Notify me at launch"}
              </button>
            </div>
            <p className="text-[11px] text-subtle mt-4 leading-relaxed">
              We&apos;ll only email you about the Android launch. No spam, no marketing list.
            </p>
          </div>
        )}

        {device === "android" && submitted && (
          <SuccessCard alreadySubscribed={alreadySubscribed} />
        )}

        {device === "desktop" && (
          <div>
            <h1
              className="text-xl font-bold text-ink mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Open this page on your phone
            </h1>
            <p className="text-sm text-muted mb-6">Or download directly:</p>
            <div className="flex flex-col gap-3 items-stretch">
              <StoreButton
                platform="appstore"
                theme="dark"
                href={APPSTORE_URL}
                className="w-full justify-center"
              />
              <div
                aria-disabled="true"
                className="inline-flex w-full justify-center items-center gap-3 h-14 px-6 rounded-full font-semibold bg-surface text-subtle border border-border cursor-not-allowed select-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden
                  className="shrink-0 opacity-60"
                >
                  <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zM16.81 15.12L6.05 21.34l8.49-8.49 2.27 2.27zM20.16 10.81c.5.29.84.83.84 1.42 0 .59-.34 1.13-.84 1.42l-2.41 1.4-2.5-2.5 2.5-2.5 2.41 1.76zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                <span className="flex flex-col items-start leading-none text-left">
                  <span className="text-[10px] uppercase tracking-[0.14em] font-semibold">
                    Coming soon on
                  </span>
                  <span
                    className="text-[17px] font-bold leading-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Google Play
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SuccessCard({ alreadySubscribed }: { alreadySubscribed: boolean }) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-success/15 text-success flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      </div>
      <h1
        className="text-xl font-bold text-ink mb-2"
        style={{ letterSpacing: "-0.01em" }}
      >
        You&apos;re on the list
      </h1>
      <p className="text-sm text-muted leading-relaxed">
        {alreadySubscribed
          ? "You\u2019re already on the list \u2014 we\u2019ll email you the moment Android is live."
          : "Thanks \u2014 we\u2019ll email you the moment Android is live."}
      </p>
    </div>
  );
}
