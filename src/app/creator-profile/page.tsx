"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { startCoachCheckout } from "@/lib/checkout";
import SageLogo from "@/components/ui/SageLogo";

/**
 * Checkout continue page. Stripe returns here after the Sage Premium checkout
 * (stripe-premium-checkout success_url = /creator-profile?id=…&nextCoach=<plan>&share=…).
 * We kick off the coach checkout (Screen 2), which redirects to Stripe again;
 * its success_url is /mentor?purchased=1. Mirrors the app's creator-profile useEffect.
 */
function Continue() {
  const params = useSearchParams();
  const id = params.get("id") || "";
  const nextCoach = params.get("nextCoach");
  const share = params.get("share") === "1";
  const started = useRef(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (started.current || !id || !nextCoach) return;
    started.current = true;
    startCoachCheckout(id, share, true)
      .then((url) => {
        window.location.href = url;
      })
      .catch((e) =>
        setErr(e instanceof Error ? e.message : "Could not continue to checkout."),
      );
  }, [id, nextCoach, share]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-cream px-6 text-center">
      <SageLogo size="md" />
      {err ? (
        <>
          <p className="text-lg font-semibold text-ink">Something went wrong</p>
          <p className="max-w-sm text-sm text-muted">{err}</p>
        </>
      ) : (
        <>
          <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-border border-t-primary" />
          <p className="text-sm font-medium text-muted">
            Setting up your coaching…
          </p>
        </>
      )}
    </div>
  );
}

export default function CreatorProfileContinue() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-cream">
          <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-border border-t-primary" />
        </div>
      }
    >
      <Continue />
    </Suspense>
  );
}
