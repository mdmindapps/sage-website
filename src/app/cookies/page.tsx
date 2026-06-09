import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about the cookies used on sageacademy.app and how to manage your preferences.",
};

const LAST_UPDATED = "June 9, 2026";

const cookies = [
  {
    name: "sage_session",
    type: "Essential",
    provider: "Sage (Supabase)",
    purpose:
      "Keeps you signed in to your account on the website across browser sessions.",
    duration: "Session / up to 30 days",
    canOptOut: false,
  },
  {
    name: "sage_cookie_consent",
    type: "Essential",
    provider: "Sage",
    purpose:
      "Stores your cookie acknowledgement so the notice does not reappear on every visit.",
    duration: "1 year",
    canOptOut: false,
  },
];

export default function CookiesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-primary font-medium hover:underline mb-6 inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M8.5 3L4.5 7l4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold text-ink mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Cookie Policy
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed">
          {/* What are cookies */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They
              are used to make websites function correctly and to remember your preferences between
              visits.
            </p>
            <p className="mt-3">
              This policy covers cookies used on the <strong className="text-ink">sageacademy.app website only</strong>.
              The Sage mobile app (iOS and Android) does <strong className="text-ink">not</strong> use browser
              cookies. The app uses only device-local secure storage for session tokens, which is
              not accessible to third parties and operates entirely on your device.
            </p>
          </section>

          {/* Cookies we use */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              Cookies We Use
            </h2>
            <p className="mb-6">
              sageacademy.app uses <strong className="text-ink">essential cookies only</strong>.
              We do not use advertising cookies, third-party analytics cookies, or any tracking
              pixels. The two cookies set by this website are:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink hidden sm:table-cell">
                      Provider
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink hidden md:table-cell">
                      Duration
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Opt-out?</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.name} className="border-t border-border">
                      <td className="px-4 py-3">
                        <code className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">
                          {c.name}
                        </code>
                        <p className="text-xs text-muted mt-1 hidden sm:block">{c.purpose}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                          {c.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted hidden sm:table-cell">{c.provider}</td>
                      <td className="px-4 py-3 text-muted hidden md:table-cell">{c.duration}</td>
                      <td className="px-4 py-3">
                        <span className="text-muted text-xs">No (required)</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Essential cookies */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              Why Essential Cookies Cannot Be Disabled
            </h2>
            <p>
              Essential cookies are strictly necessary for the website to function. Under the EU
              ePrivacy Directive and GDPR, essential cookies do not require your prior consent
              because they are necessary to deliver a service you have explicitly requested (such
              as staying logged in).
            </p>
            <p className="mt-3">
              You can configure your browser to block or delete all cookies, including essential
              ones — but doing so will prevent you from staying signed in on sageacademy.app.
            </p>
          </section>

          {/* No analytics */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              No Analytics or Tracking Cookies
            </h2>
            <p>
              sageacademy.app does <strong className="text-ink">not</strong> currently use any
              third-party analytics service (such as PostHog, Google Analytics, or similar) that
              would set cookies or collect behavioural data about your browsing. If this changes
              in the future, this policy will be updated and you will be notified at least 14 days
              in advance via the consent banner.
            </p>
          </section>

          {/* Managing cookies */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              Managing Cookies
            </h2>

            <div className="space-y-4">
              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Cookie notice</h3>
                <p className="text-sm">
                  When you first visit sageacademy.app, a notice appears at the bottom of the
                  screen. Since we only use essential cookies, this notice is informational — it
                  confirms what cookies are set and lets you acknowledge the policy. Your
                  acknowledgement is stored in <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-border">sage_cookie_consent</code>.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Reset the notice</h3>
                <p className="text-sm">
                  To see the notice again, clear your browser&apos;s local storage for
                  sageacademy.app (delete the key{" "}
                  <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-border">
                    sage_cookie_consent
                  </code>
                  ). The notice will reappear on your next visit.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Browser-level cookie controls</h3>
                <p className="text-sm">
                  You can block or delete cookies directly in your browser settings. Note that
                  blocking essential cookies will affect sign-in functionality on the website.
                  Browser guidance:
                </p>
                <ul className="list-disc pl-4 space-y-1 mt-2 text-sm">
                  <li>
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      className="text-primary underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chrome
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                      className="text-primary underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                      className="text-primary underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Safari
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border"
              style={{ letterSpacing: "-0.01em" }}
            >
              Contact
            </h2>
            <p>
              Questions about this policy? Contact us at{" "}
              <a
                href="mailto:contact@sageacademy.app"
                className="text-primary underline underline-offset-2"
              >
                contact@sageacademy.app
              </a>
              . For our full data practices, see the{" "}
              <Link href="/privacy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
