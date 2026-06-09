import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sage collects, uses, and protects your personal and health data. GDPR and CCPA compliant.",
};

const LAST_UPDATED = "June 9, 2026";

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Header */}
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
            Privacy Policy
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-lg max-w-none text-ink">
          <LegalSection title="1. Introduction">
            <p>
              Friday Technologies SRL (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates
              the Sage mobile application and the sageacademy.app website (collectively, the
              &quot;Service&quot;). This Privacy Policy explains how we collect, use, share, and
              protect your personal information when you use our Service.
            </p>
            <p>
              We are committed to protecting your privacy and complying with the EU General Data
              Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). By using
              Sage, you agree to the collection and use of information in accordance with this
              policy.
            </p>
            <p>
              <strong>Data Controller:</strong> Friday Technologies SRL, Romania, EU.{" "}
              Contact:{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <h3>2.1 Account Information</h3>
            <p>
              The following information is collected when you create and manage your account:
            </p>
            <ul>
              <li>Email address (required)</li>
              <li>
                Password (stored as a cryptographic hash — we never see your plaintext password)
              </li>
              <li>Display name (required)</li>
            </ul>

            <h3>2.2 Health and Fitness Data</h3>
            <p>
              To provide our AI fitness coaching service, we collect the following data that you
              provide during onboarding and ongoing use:
            </p>
            <ul>
              <li>Weight and height</li>
              <li>Age and biological sex</li>
              <li>Fitness and body-composition goals (e.g., weight loss, muscle gain, maintenance)</li>
              <li>
                Food photos and text meal descriptions you submit for AI analysis
              </li>
              <li>Calorie and macronutrient data derived from logged meals</li>
              <li>Progress photos (if you choose to use this feature)</li>
              <li>Daily check-in responses and habit-tracking data</li>
              <li>
                &ldquo;My Why&rdquo; voice recording — an optional voice note captured during
                onboarding. This audio is sent to OpenAI for transcription; the resulting text is
                stored and used to personalise your coaching experience.
              </li>
            </ul>
            <p>
              <strong>Important:</strong> Health-related data is classified as a special category
              of personal data under GDPR Article 9. We process this data on the basis of your
              explicit consent, which you provide when setting up your account and using the app.
            </p>

            <h3>2.3 Device Information</h3>
            <p>
              The following device-level information is collected to operate and improve the app:
            </p>
            <ul>
              <li>Device model and manufacturer</li>
              <li>Operating system and version (iOS or Android)</li>
              <li>App version</li>
              <li>Device language and locale settings</li>
              <li>Push notification token (only if you enable notifications)</li>
            </ul>

            <h3>2.4 What We Do Not Collect</h3>
            <p>
              We do <strong>not</strong> collect the following:
            </p>
            <ul>
              <li>Dietary preferences or restrictions — these are not part of the app&apos;s onboarding or data model</li>
              <li>Location data</li>
              <li>Contacts or calendar data</li>
              <li>Advertising identifiers or ad-targeting data</li>
            </ul>

            <h3>2.5 Product Analytics</h3>
            <p>
              We use <strong>PostHog (EU-hosted)</strong> to understand how the app is used so we
              can improve it. We collect behavioural events on an anonymised basis — for example,
              which features and screens are used, and onboarding and paywall funnel steps.
            </p>
            <p>
              We do <strong>not</strong> send any of the following to analytics:
            </p>
            <ul>
              <li>Your health values (e.g., your weight, calorie counts, macro intake)</li>
              <li>Your meal photos or progress photos</li>
              <li>Your chat content with the AI coach or your &ldquo;My Why&rdquo; recording</li>
            </ul>
            <p>
              We also do <strong>not</strong> record your screen — there is no session replay.
              PostHog acts as our processor under a Data Processing Agreement (DPA) and is hosted
              in the EU, so this data does not leave the European Economic Area.
            </p>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use the information we collect solely for the following purposes:</p>
            <ul>
              <li>
                <strong>To provide the AI fitness coaching service:</strong> Food photos and text
                meal descriptions are sent to OpenAI&apos;s vision models for nutritional analysis.
                Your goals, check-in responses, and conversation history are processed by OpenAI
                to generate personalised coaching replies. OpenAI also transcribes your
                &ldquo;My Why&rdquo; voice recording and maintains durable memory of key facts
                about you so that Sage remains contextually aware across sessions.
              </li>
              <li>
                <strong>To personalise your experience:</strong> Your profile data, goals, and
                history are used to tailor coaching advice, meal feedback, and habit
                recommendations to you specifically.
              </li>
              <li>
                <strong>To send important account notifications:</strong> We send transactional
                emails related to your account (e.g., subscription confirmations, password
                resets). We will only send marketing communications with your explicit consent.
              </li>
              <li>
                <strong>To manage your subscription:</strong> RevenueCat manages in-app
                subscriptions processed through Apple App Store or Google Play Store. We receive
                subscription status and entitlement data; we do not receive or store full payment
                card details.
              </li>
              <li>
                <strong>To deliver push notifications:</strong> If you opt in, your device push
                token is used via Expo&apos;s notification infrastructure to send reminders and
                check-in prompts.
              </li>
              <li>
                <strong>To comply with legal obligations:</strong> We may process your data where
                required by applicable law or regulation.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="4. How We Share Your Information">
            <p>
              We do <strong>not sell your personal data</strong> to any third party. We share data
              only with the following processors, each bound by a Data Processing Agreement (DPA)
              and permitted to process your data solely for the stated purpose:
            </p>

            <h3>4.1 Data Processors</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold">Processor</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Supabase",
                      "Database storage and user authentication",
                      "EU (Frankfurt, Germany)",
                    ],
                    [
                      "OpenAI",
                      "Meal photo & text analysis, AI coaching replies, durable user memory, and \"My Why\" voice transcription",
                      "USA",
                    ],
                    [
                      "RevenueCat",
                      "Subscription management and entitlement tracking",
                      "USA",
                    ],
                    [
                      "Apple",
                      "App Store distribution and payment processing (iOS)",
                      "USA",
                    ],
                    [
                      "Google",
                      "Play Store distribution and payment processing (Android)",
                      "USA",
                    ],
                    [
                      "Expo",
                      "App build infrastructure and push notification delivery",
                      "USA",
                    ],
                    [
                      "PostHog",
                      "Anonymised behavioural product analytics — screens viewed, features used, onboarding and paywall funnel steps. No health values, no photos, no chat content, no session replay.",
                      "EU",
                    ],
                  ].map(([processor, purpose, location]) => (
                    <tr key={processor} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium">{processor}</td>
                      <td className="py-2 pr-4 text-muted">{purpose}</td>
                      <td className="py-2 text-muted">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>4.2 Legal Requirements</h3>
            <p>
              We may disclose your information where required by applicable law, a court order,
              subpoena, or governmental request. We will notify you of such requirements where
              legally permitted.
            </p>

            <h3>4.3 Business Transfers</h3>
            <p>
              If Friday Technologies SRL is acquired or merges with another company, your
              information may be transferred as part of that transaction. You will be notified
              before this occurs and your rights under this policy will continue to apply.
            </p>
          </LegalSection>

          <LegalSection title="5. Data Security">
            <p>
              We implement appropriate technical and organisational measures to protect your data:
            </p>
            <ul>
              <li>All data is encrypted in transit using TLS 1.3</li>
              <li>Data at rest is encrypted using AES-256</li>
              <li>
                User authentication is handled by Supabase, which stores passwords using bcrypt
                hashing — we never have access to your plaintext password
              </li>
              <li>
                Food photos and voice recordings are transmitted to OpenAI for processing and are
                not stored beyond the retention terms of our agreement with OpenAI
              </li>
              <li>
                Access to production systems is restricted to authorised personnel and requires
                multi-factor authentication
              </li>
            </ul>
            <p>
              No method of electronic transmission or storage is 100% secure. While we use
              commercially reasonable means to protect your information, we cannot guarantee
              absolute security.
            </p>
          </LegalSection>

          <LegalSection title="6. Your Rights Under GDPR" id="gdpr">
            <p>
              If you are located in the European Economic Area (EEA), you have the following rights
              under the GDPR:
            </p>

            <h3>Right of Access</h3>
            <p>
              You may request a copy of all personal data we hold about you. We will respond within
              30 days.
            </p>

            <h3>Right to Rectification</h3>
            <p>
              You may correct inaccurate or incomplete personal data at any time via your account
              settings or by contacting us.
            </p>

            <h3>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)</h3>
            <p>
              You may request deletion of all your personal data. We will delete your account and
              all associated data within 30 days of receiving a valid request, subject to legal
              retention obligations.
            </p>

            <h3>Right to Data Portability</h3>
            <p>
              You may request an export of your data in a structured, machine-readable format (JSON
              or CSV). Contact us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>.
            </p>

            <h3>Right to Object</h3>
            <p>
              You may object to the processing of your personal data for direct marketing purposes
              or where we rely on legitimate interests as the legal basis for processing.
            </p>

            <h3>Right to Withdraw Consent</h3>
            <p>
              Where we process your data based on consent (e.g., health and fitness data), you may
              withdraw that consent at any time. Withdrawal does not affect the lawfulness of
              processing carried out before withdrawal.
            </p>

            <h3>Right to Lodge a Complaint</h3>
            <p>
              You have the right to lodge a complaint with your national Data Protection Authority.
              As Friday Technologies SRL is established in Romania, the competent supervisory
              authority is:
            </p>
            <p>
              <strong>ANSPDCP</strong> — National Supervisory Authority for Personal Data
              Processing:{" "}
              <a
                href="https://www.dataprotection.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dataprotection.ro
              </a>
            </p>

            <p>
              To exercise any of the above rights, contact us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>.
            </p>
          </LegalSection>

          <LegalSection title="7. International Data Transfers">
            <p>
              Our processors OpenAI, RevenueCat, Apple, Google, and Expo are based in the United
              States. When we transfer personal data to the US, we rely on one or more of the
              following safeguards:
            </p>
            <ul>
              <li>
                <strong>EU–US Data Privacy Framework (DPF):</strong> Where a processor is
                certified under the DPF, we rely on this framework for the transfer.
              </li>
              <li>
                <strong>Standard Contractual Clauses (SCCs):</strong> Where DPF certification is
                not in place, we execute EU Commission-approved SCCs with the processor.
              </li>
            </ul>
            <p>
              Supabase stores all primary data within the EU (Frankfurt, Germany) and does not
              transfer your data outside the EEA.
            </p>
            <p>
              You may request a copy of the applicable SCCs by contacting us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>.
            </p>
          </LegalSection>

          <LegalSection title="8. Data Retention">
            <ul>
              <li>
                <strong>Account data:</strong> Retained for as long as your account is active.
              </li>
              <li>
                <strong>Meal logs, progress photos, and health data:</strong> Retained for the
                duration of your account. You may delete individual entries at any time within
                the app.
              </li>
              <li>
                <strong>Upon account deletion:</strong> All personal data is permanently deleted
                from our systems within 30 days of your request.
              </li>
              <li>
                <strong>Encrypted backups:</strong> Backup snapshots may retain data for up to
                90 days after deletion, after which they are overwritten.
              </li>
              <li>
                <strong>Financial records:</strong> Transaction and subscription records may be
                retained for up to 7 years to comply with Romanian and EU accounting laws.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="9. Children&apos;s Privacy">
            <p>
              Sage is intended for users aged 18 and over. We do not knowingly collect personal
              data from anyone under 18. If you are a parent or guardian and believe your child
              has created an account or submitted personal data, please contact us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a> and we will
              delete the relevant data promptly.
            </p>
          </LegalSection>

          <LegalSection title="10. California Privacy Rights (CCPA)">
            <p>
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>
                The right to know what personal information we collect, use, and disclose
              </li>
              <li>The right to request deletion of your personal information</li>
              <li>
                The right to opt out of the sale of personal information — we do{" "}
                <strong>not</strong> sell personal information
              </li>
              <li>
                The right to non-discrimination for exercising your CCPA rights
              </li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by email to your registered address and/or via a prominent in-app notice at
              least 14 days before the changes take effect. Your continued use of the Service
              after the effective date constitutes acceptance of the revised policy.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <p>For any questions or requests relating to this Privacy Policy:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>
              </li>
              <li>
                <strong>Company:</strong> Friday Technologies SRL, Romania, EU
              </li>
              <li>
                <strong>Data Protection contact:</strong> Available on request at{" "}
                <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>
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
