"use client";

/* SAGE - product analytics for the website (PostHog, EU-hosted).

   Deliberately the SAME PostHog project as the mobile app. That is the whole point: the app
   already sends onboarding_step -> paywall_viewed -> trial_started -> subscribed
   (sage/src/lib/analytics.native.tsx), and until now the chain broke at the website, so we could
   never see that a creator clicked a link in an email, read /become-a-coach and then installed.

   Privacy, matching the rules the app set for itself:
     - CONSENT FIRST, and literally so: the SDK is dynamically imported, so a visitor who rejects
       never even downloads it, and no request ever leaves the browser.
     - No session replay, no heatmaps, no autocapture of clicks or form inputs.
     - Pageviews plus the events we name ourselves. Behaviour, never values.

   The project key is public by design - it is write-only and ships inside every client - which is
   why the app commits the same one in app.json. It is not a secret and cannot read any data. */

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { PostHog } from "posthog-js";

const KEY = "phc_yjRiwwiXkvRS6yR9es8kdykNHP7GCS9MMyD4NLsosaqN";
const HOST = "https://eu.i.posthog.com";

export const CONSENT_KEY = "sage_cookie_consent";
/** CookieBanner fires this the moment a choice is saved, so tracking starts without a reload. */
export const CONSENT_EVENT = "sage:cookie-consent";

function hasConsent(): boolean {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "all";
  } catch {
    return false; // private mode, blocked storage - treat as no consent
  }
}

let ph: PostHog | null = null;
let starting: Promise<void> | null = null;

/** Loads and initialises PostHog. Safe to call repeatedly; only the first call does the work. */
function start(): Promise<void> {
  if (starting) return starting;
  starting = import("posthog-js").then(({ default: posthog }) => {
    posthog.init(KEY, {
      api_host: HOST,
      capture_pageview: false, // sent by <PageViews /> on every App Router navigation
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true, // on by default, and it pulls surveys.js on every load
      persistence: "localStorage+cookie",
    });
    ph = posthog;
    // /get/page.tsx already calls window.posthog.capture(...) through a wrapper written before the
    // SDK existed. Assigning it here is what switches those calls on.
    (window as unknown as { posthog?: PostHog }).posthog = posthog;
  });
  return starting;
}

/** No-ops until consent has loaded the SDK, so callers never need to check. */
export function capture(event: string, props?: Record<string, unknown>) {
  ph?.capture(event, props);
}

/** Pageviews on navigation. Needs its own Suspense boundary because of useSearchParams. */
function PageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!ph || !pathname) return;
    const qs = searchParams?.toString();
    capture("$pageview", {
      $current_url: window.location.origin + pathname + (qs ? "?" + qs : ""),
    });
  }, [pathname, searchParams]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (hasConsent()) void start();

    const onConsent = () => {
      if (!hasConsent() || starting) return;
      // First consent of the session: PageViews already ran for this page, so send it by hand.
      void start().then(() => capture("$pageview"));
    };
    // our own banner, and the same choice made in another tab
    window.addEventListener(CONSENT_EVENT, onConsent);
    window.addEventListener("storage", onConsent);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      window.removeEventListener("storage", onConsent);
    };
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PageViews />
      </Suspense>
      {children}
    </>
  );
}
