import type { Metadata } from "next";
import Link from "next/link";
import QRCode from "qrcode";
import SageLogo from "@/components/ui/SageLogo";

export const metadata: Metadata = {
  title: "You're all set",
  robots: { index: false, follow: false },
};

const GET_URL = "https://sageacademy.app/get";

/**
 * Checkout success page. The coach checkout (stripe-checkout) success_url is
 * /mentor?purchased=1. Payment is done + the webhook creates the Premium + coach
 * subscriptions — now the visitor installs the app via /get (auto-routes to the
 * right store) and logs in with the same account. QR is for desktop payers.
 */
export default async function MentorSuccess() {
  const qrSvg = await QRCode.toString(GET_URL, {
    type: "svg",
    margin: 0,
    color: { dark: "#11181C", light: "#0000" },
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-cream px-6 py-16 text-center">
      <SageLogo size="md" />

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/12">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="var(--color-success)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-md">
        <h1 className="text-3xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
          You&apos;re all set!
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Payment complete. Get the app and log in with the same account — your
          coach is ready to meet you.
        </p>
      </div>

      <Link
        href="/get"
        className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-ink px-8 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        Get the app
      </Link>

      {/* desktop: scan to open /get on the phone */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4">
        <div
          className="h-20 w-20 shrink-0 [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: qrSvg }}
        />
        <div className="max-w-[200px] text-left">
          <p className="text-sm font-semibold text-ink">On a computer?</p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted">
            Scan this with your phone to install Sage from your app store.
          </p>
        </div>
      </div>

      <p className="max-w-sm text-xs text-subtle">
        Already have the app? Just open it and log in — your coach and Premium are
        active.
      </p>
    </div>
  );
}
