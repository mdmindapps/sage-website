import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn about the cookies Sage uses and how to manage your preferences.",
};

const LAST_UPDATED = "June 3, 2026";

const cookies = [
  {
    name: "sage_session",
    type: "Essential",
    provider: "Sage (Supabase)",
    purpose: "Keeps you logged in to your account across sessions.",
    duration: "Session / 30 days",
    canOptOut: false,
  },
  {
    name: "sage_cookie_consent",
    type: "Essential",
    provider: "Sage",
    purpose: "Remembers your cookie consent preferences so we don't ask every visit.",
    duration: "1 year",
    canOptOut: false,
  },
  {
    name: "ph_*",
    type: "Analytics",
    provider: "PostHog (self-hosted, EU)",
    purpose: "Anonymous usage analytics — helps us understand how people use Sage so we can improve it.",
    duration: "1 year",
    canOptOut: true,
  },
];

export default function CookiesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <Link href="/" className="text-sm text-primary font-medium hover:underline mb-6 inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4" style={{ letterSpacing: "-0.02em" }}>
            Cookie Policy
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website or use a web-based service. They are widely used to make websites work, improve performance, and provide reporting information.
            </p>
            <p className="mt-3">
              Sage uses cookies and similar tracking technologies (such as local storage) on the sage.app website. The Sage mobile app does not use browser cookies, but may use equivalent device storage mechanisms for session management.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              Cookies We Use
            </h2>
            <p className="mb-6">
              We use two categories of cookies: <strong className="text-ink">essential</strong> (required for the site to function) and <strong className="text-ink">analytics</strong> (optional, to improve our service).
            </p>

            {/* Cookie table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink hidden sm:table-cell">Provider</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink hidden md:table-cell">Duration</th>
                    <th className="text-left px-4 py-3 font-semibold text-ink">Opt-out?</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.name} className="border-t border-border">
                      <td className="px-4 py-3">
                        <code className="font-mono text-xs bg-surface px-1.5 py-0.5 rounded">{c.name}</code>
                        <p className="text-xs text-muted mt-1 hidden sm:block">{c.purpose}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
                            c.type === "Essential"
                              ? "bg-primary/10 text-primary"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {c.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted hidden sm:table-cell">{c.provider}</td>
                      <td className="px-4 py-3 text-muted hidden md:table-cell">{c.duration}</td>
                      <td className="px-4 py-3">
                        {c.canOptOut ? (
                          <span className="text-emerald-600 font-medium text-xs">Yes</span>
                        ) : (
                          <span className="text-muted text-xs">No (required)</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              Essential Cookies
            </h2>
            <p>
              Essential cookies are necessary for the website to function and cannot be switched off. They are typically only set in response to actions you take, such as logging in, setting your preferences, or filling in forms.
            </p>
            <p className="mt-3">
              You can configure your browser to block or alert you about these cookies, but some parts of the site may not work correctly if you do.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              Analytics Cookies (PostHog)
            </h2>
            <p>
              We use <a href="https://posthog.com" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">PostHog</a>, a self-hosted, EU-based analytics platform, to understand how visitors interact with our website. PostHog collects anonymised data about:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Pages visited and features used</li>
              <li>Session duration</li>
              <li>Referral source (how you found sage.app)</li>
              <li>Device type and browser (anonymised)</li>
            </ul>
            <p className="mt-3">
              PostHog does <strong className="text-ink">not</strong> collect personally identifiable information and all data is stored within the EU. There is no cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              How to Opt Out
            </h2>

            <div className="space-y-4">
              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Cookie banner</h3>
                <p className="text-sm">
                  When you first visit sage.app, a cookie banner will appear at the bottom of the screen. You can choose to &quot;Accept all&quot;, &quot;Reject&quot; non-essential cookies, or &quot;Manage&quot; your preferences individually.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Change your preferences anytime</h3>
                <p className="text-sm">
                  To change your preferences after dismissing the banner, clear your browser&apos;s local storage for sage.app (the key is <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-border">sage_cookie_consent</code>). The banner will reappear on your next visit.
                </p>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-ink mb-2">Browser settings</h3>
                <p className="text-sm">
                  Most browsers allow you to refuse cookies or delete existing ones. Note that blocking all cookies may affect website functionality. Guidance for common browsers:
                </p>
                <ul className="list-disc pl-4 space-y-1 mt-2 text-sm">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">Safari</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-ink mb-4 pb-3 border-b border-border" style={{ letterSpacing: "-0.01em" }}>
              Contact
            </h2>
            <p>
              For questions about our use of cookies, contact us at{" "}
              <a href="mailto:privacy@sage.app" className="text-primary underline underline-offset-2">
                privacy@sage.app
              </a>
              . For our full privacy practices, see our{" "}
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
