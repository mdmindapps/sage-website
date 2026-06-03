import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sage collects, uses, and protects your personal and health data. GDPR and CCPA compliant.",
};

const LAST_UPDATED = "June 3, 2026";

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-sm text-primary font-medium hover:underline mb-6 inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 3L4.5 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4" style={{ letterSpacing: "-0.02em" }}>
            Privacy Policy
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-lg max-w-none text-ink">
          <LegalSection title="1. Introduction">
            <p>
              Friday Technologies SRL (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Sage mobile application and the sage.app website (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our Service.
            </p>
            <p>
              We are committed to protecting your privacy and complying with the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). By using Sage, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p>
              <strong>Data Controller:</strong> Friday Technologies SRL, Romania, EU. Contact: <a href="mailto:privacy@sage.app">privacy@sage.app</a>
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <h3>2.1 Account Information</h3>
            <ul>
              <li>Email address (required to create and manage your account)</li>
              <li>Password (stored as a hashed value — we never see your plaintext password)</li>
              <li>Display name (optional)</li>
            </ul>

            <h3>2.2 Health and Fitness Data</h3>
            <p>To provide our AI nutrition coaching service, we collect:</p>
            <ul>
              <li>Weight and height</li>
              <li>Age and biological sex</li>
              <li>Dietary preferences and restrictions (e.g., vegan, gluten-free)</li>
              <li>Health goals (e.g., weight loss, muscle gain, maintenance)</li>
              <li>Meals logged, including food photos you submit</li>
              <li>Calorie and macro nutritional data derived from your meals</li>
              <li>Progress photos (if you choose to use this feature)</li>
              <li>Daily check-in responses and habit data</li>
            </ul>
            <p>
              <strong>Important:</strong> Health data is classified as a special category of personal data under GDPR Article 9. We process this data based on your explicit consent, which you provide when setting up your account and using the app.
            </p>

            <h3>2.3 Device Information</h3>
            <ul>
              <li>Device model and manufacturer</li>
              <li>Operating system version (iOS or Android)</li>
              <li>App version</li>
              <li>Device language and locale settings</li>
              <li>Push notification token (if you enable notifications)</li>
            </ul>

            <h3>2.4 Usage Analytics</h3>
            <p>
              We collect anonymous usage analytics via PostHog (self-hosted, EU region) to understand how users interact with the app and improve the Service. This includes:
            </p>
            <ul>
              <li>Feature usage patterns (e.g., which screens are visited)</li>
              <li>Session duration and frequency</li>
              <li>Crash reports and error logs</li>
              <li>Performance metrics</li>
            </ul>
            <p>
              PostHog analytics are anonymised and do not include personally identifiable information. You can opt out of analytics in your account settings.
            </p>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>
                <strong>To provide the AI coaching service:</strong> Your meal photos are sent to OpenAI (GPT-4o Vision) for food recognition and nutritional analysis. Your goals, preferences, and context are used by Anthropic&apos;s Claude model to generate personalised coaching responses.
              </li>
              <li>
                <strong>To personalise your experience:</strong> We use your profile data, goals, and history to tailor coaching advice, meal suggestions, and habit recommendations to you specifically.
              </li>
              <li>
                <strong>To improve the Service:</strong> Anonymised usage data helps us understand what features are working well and what needs improvement.
              </li>
              <li>
                <strong>To send important account notifications:</strong> We send transactional emails related to your account (e.g., subscription confirmations, password resets). We will only send marketing emails with your explicit consent.
              </li>
              <li>
                <strong>To manage your subscription:</strong> We use RevenueCat to process and manage in-app subscriptions via Apple App Store and Google Play Store.
              </li>
              <li>
                <strong>To comply with legal obligations:</strong> We may process your data to comply with applicable laws and regulations.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. How We Share Your Information">
            <p>
              We do <strong>not sell your personal data</strong> to third parties. We share data only with trusted service providers necessary to operate the Service:
            </p>

            <h3>4.1 Service Providers</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Supabase", "Database and user authentication", "EU (Frankfurt)"],
                    ["OpenAI", "GPT-4o Vision for meal photo analysis", "USA"],
                    ["Anthropic", "Claude for AI coaching responses", "USA"],
                    ["RevenueCat", "Subscription management and billing", "USA"],
                    ["PostHog", "Anonymous usage analytics", "EU (self-hosted)"],
                    ["Apple / Google", "App distribution and payment processing", "USA"],
                  ].map(([provider, purpose, location]) => (
                    <tr key={provider} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium">{provider}</td>
                      <td className="py-2 pr-4 text-muted">{purpose}</td>
                      <td className="py-2 text-muted">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Each service provider is bound by a Data Processing Agreement (DPA) and is only permitted to process your data for the specified purpose.
            </p>

            <h3>4.2 Legal Requirements</h3>
            <p>
              We may disclose your information where required by law, such as to comply with a subpoena, legal proceedings, or governmental request. We will notify you of such requests where legally permitted.
            </p>

            <h3>4.3 Business Transfers</h3>
            <p>
              If Friday Technologies SRL is acquired or merges with another company, your information may be transferred as part of that transaction. You will be notified before this occurs.
            </p>
          </LegalSection>

          <LegalSection title="5. Data Security">
            <p>We implement strong technical and organisational measures to protect your data:</p>
            <ul>
              <li>All data is encrypted in transit using TLS 1.3</li>
              <li>Data at rest is encrypted using AES-256</li>
              <li>User authentication data is handled by Supabase with bcrypt password hashing</li>
              <li>Food photos are processed by AI models and are not permanently stored beyond your account history</li>
              <li>Access to production systems is restricted to authorised personnel only, with MFA required</li>
              <li>Regular security audits and vulnerability assessments</li>
            </ul>
            <p>
              No method of electronic transmission or storage is 100% secure. While we use commercially reasonable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </LegalSection>

          <LegalSection title="6. Your Rights Under GDPR" id="gdpr">
            <p>
              If you are located in the European Economic Area (EEA), you have the following rights under GDPR:
            </p>

            <h3>Right of Access</h3>
            <p>You have the right to request a copy of all personal data we hold about you. We will provide this within 30 days.</p>

            <h3>Right to Rectification</h3>
            <p>You can correct inaccurate personal data or complete incomplete data at any time via your account settings.</p>

            <h3>Right to Erasure (&quot;Right to be Forgotten&quot;)</h3>
            <p>
              You can request deletion of all your personal data. We will delete your account and all associated data within 30 days of receiving your request, subject to legal retention obligations.
            </p>

            <h3>Right to Data Portability</h3>
            <p>
              You can request an export of your data in a structured, machine-readable format (JSON or CSV). Contact us at <a href="mailto:privacy@sage.app">privacy@sage.app</a>.
            </p>

            <h3>Right to Object</h3>
            <p>
              You can object to the processing of your personal data for direct marketing purposes or where we rely on legitimate interests as our legal basis.
            </p>

            <h3>Right to Withdraw Consent</h3>
            <p>
              Where we process your data based on your consent (e.g., health data), you can withdraw that consent at any time. This will not affect the lawfulness of processing before withdrawal.
            </p>

            <h3>Right to Lodge a Complaint</h3>
            <p>
              You have the right to lodge a complaint with your local Data Protection Authority. In Romania, this is the National Supervisory Authority for Personal Data Processing (ANSPDCP): <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>.
            </p>

            <p>To exercise any of these rights, contact us at <a href="mailto:privacy@sage.app">privacy@sage.app</a>.</p>
          </LegalSection>

          <LegalSection title="7. International Data Transfers">
            <p>
              Some of our service providers (OpenAI, Anthropic, RevenueCat, Apple, Google) are based in the United States. When we transfer your personal data to the US, we ensure appropriate safeguards are in place:
            </p>
            <ul>
              <li>
                <strong>EU-US Data Privacy Framework (DPF):</strong> Where service providers are certified under the DPF, we rely on this framework for transfers.
              </li>
              <li>
                <strong>Standard Contractual Clauses (SCCs):</strong> For providers not certified under the DPF, we use EU Commission-approved SCCs as the legal mechanism for data transfer.
              </li>
            </ul>
            <p>
              You can obtain a copy of the applicable SCCs by contacting us at <a href="mailto:privacy@sage.app">privacy@sage.app</a>.
            </p>
          </LegalSection>

          <LegalSection title="8. Data Retention">
            <ul>
              <li>
                <strong>Account data:</strong> Retained for as long as you maintain an active account.
              </li>
              <li>
                <strong>Meal logs and health data:</strong> Retained for the duration of your account. You can delete individual logs at any time within the app.
              </li>
              <li>
                <strong>Account deletion:</strong> When you delete your account, all personal data is permanently deleted within 30 days.
              </li>
              <li>
                <strong>Backup retention:</strong> Encrypted backups may retain data for up to 90 days after deletion, after which they are overwritten.
              </li>
              <li>
                <strong>Legal retention:</strong> Some data (e.g., transaction records) may be retained for up to 7 years to comply with financial record-keeping laws.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="9. Children's Privacy">
            <p>
              Sage is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:privacy@sage.app">privacy@sage.app</a> and we will delete such information promptly.
            </p>
          </LegalSection>

          <LegalSection title="10. California Privacy Rights (CCPA)">
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>The right to know what personal information we collect, use, and share</li>
              <li>The right to delete personal information we have collected</li>
              <li>The right to opt-out of the sale of personal information (we do <strong>not</strong> sell personal information)</li>
              <li>The right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:privacy@sage.app">privacy@sage.app</a>.</p>
          </LegalSection>

          <LegalSection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by sending an email to your registered address and/or displaying a prominent notice in the app at least 14 days before the changes take effect. Your continued use of the Service after the changes take effect constitutes your acceptance of the revised policy.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@sage.app">privacy@sage.app</a>
              </li>
              <li>
                <strong>Company:</strong> Friday Technologies SRL, Romania, EU
              </li>
              <li>
                <strong>Data Protection Officer:</strong> Available on request at{" "}
                <a href="mailto:privacy@sage.app">privacy@sage.app</a>
              </li>
            </ul>
            <p>We aim to respond to all privacy-related requests within 30 days.</p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}

function LegalSection({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mb-10">
      <h2
        className="text-xl md:text-2xl font-bold text-ink mt-12 mb-4 pb-3 border-b border-border"
        style={{ letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-muted leading-relaxed [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink [&_table]:my-4">
        {children}
      </div>
    </section>
  );
}
