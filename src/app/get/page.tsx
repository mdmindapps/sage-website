"use client";

import { useEffect, useState } from "react";
import StoreButton from "@/components/ui/StoreButton";

/* Sage — single shareable bio link.
   Hosted at /get (alias: /download). Auto-routes by device:
   - iOS → redirect to App Store
   - Android → redirect to Google Play
   - Desktop → both store buttons + "open on your phone" prompt */

const ANDROID_LIVE = true;
const APPSTORE_URL = "https://apps.apple.com/app/id6777168646";
const PLAY_URL = "https://play.google.com/store/apps/details?id=app.sageacademy";

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
      capture("get_page_android_redirect");
      window.location.replace(PLAY_URL);
    }
  }, []);

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

        {device === "android" && (
          <div>
            <h1
              className="text-xl font-bold text-ink mb-2"
              style={{ letterSpacing: "-0.01em" }}
            >
              Opening Google Play…
            </h1>
            <p className="text-sm text-muted mb-6">
              If it doesn&apos;t open automatically, tap below.
            </p>
            <a
              href={PLAY_URL}
              className="inline-flex w-full items-center justify-center bg-ink text-white font-semibold rounded-xl h-12 hover:bg-ink/90 transition-colors"
            >
              Open Google Play
            </a>
          </div>
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
              <StoreButton
                platform="play"
                theme="dark"
                href={PLAY_URL}
                className="w-full justify-center"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
