import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Need help with Sage? We reply within 24 hours. Find answers to common questions or reach out directly.",
};

const topics = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.13 2 3 5.13 3 9c0 3.32 2.16 6.14 5.14 7.16.11.09.36.11.56-.01.2-.12.3-.34.3-.55V14a5 5 0 01-1-9.9V6a1 1 0 112 0v1.07A5 5 0 0115 12v1.6c0 .21.1.43.3.55.2.12.45.1.56.01C18.84 13.14 17 10.32 17 7c0-3.87-3.13-7-7-7z" fill="currentColor" opacity=".15" />
        <path d="M10 2a7 7 0 100 14A7 7 0 0010 2zM6 10a4 4 0 118 0 4 4 0 01-8 0z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Subscription & Billing",
    description: "Manage your plan, update payment info, cancel or pause your subscription.",
    items: [
      "How to start or extend the free trial",
      "Upgrading from monthly to annual",
      "Cancelling your subscription",
      "Requesting a refund (via App Store or Google Play)",
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 18c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Account & Profile",
    description: "Update your goals, dietary preferences, personal info, or delete your account.",
    items: [
      "Changing your email or password",
      "Updating dietary preferences",
      "Requesting account deletion",
      "Exporting your data (GDPR)",
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Technical Issues",
    description: "Bugs, crashes, sync issues, or something not working as expected.",
    items: [
      "App crashing or not loading",
      "Photo recognition not working",
      "Sync issues between devices",
      "Notifications not appearing",
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Support</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-ink mb-5"
            style={{ letterSpacing: "-0.025em" }}
          >
            Need help? We&apos;ve got you.
          </h1>
          <p className="text-lg text-muted max-w-lg mx-auto">
            Browse common topics below, or reach out directly. We reply within 24 hours.
          </p>
        </div>

        {/* Contact card */}
        <div className="bg-ink text-white rounded-2xl p-8 mb-14 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ letterSpacing: "-0.01em" }}>
            Email us directly
          </h2>
          <p className="text-white/60 text-sm mb-5 max-w-sm mx-auto">
            Our team is based in Romania (UTC+3) and replies Monday–Sunday within 24 hours.
          </p>
          <a
            href="mailto:contact@sageacademy.app"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            contact@sageacademy.app
          </a>
          <p className="text-white/35 text-xs mt-4">Average response time: under 4 hours</p>
        </div>

        {/* Topics */}
        <div className="mb-14">
          <h2
            className="text-2xl font-bold text-ink mb-8 text-center"
            style={{ letterSpacing: "-0.01em" }}
          >
            Common topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {topic.icon}
                </div>
                <h3 className="font-bold text-ink mb-2" style={{ letterSpacing: "-0.01em" }}>
                  {topic.title}
                </h3>
                <p className="text-sm text-muted mb-4">{topic.description}</p>
                <ul className="space-y-1.5">
                  {topic.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-primary mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ link */}
        <div className="text-center bg-surface rounded-2xl p-8 border border-border">
          <p className="text-muted mb-4 text-sm">
            Looking for quick answers? Check out our FAQ — we&apos;ve covered the most common questions in detail.
          </p>
          <Link
            href="/#faq"
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline underline-offset-2"
          >
            Go to FAQ
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
