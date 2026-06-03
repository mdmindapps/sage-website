import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the Sage AI nutrition coach app and website.",
};

const LAST_UPDATED = "June 3, 2026";

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
      <div className="space-y-4 text-muted leading-relaxed [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted leading-relaxed text-lg mb-8">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Sage mobile application and the sage.app website (collectively, the &quot;Service&quot;) operated by Friday Technologies SRL (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). Please read these Terms carefully before using the Service.
          </p>

          <LegalSection title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using the Sage app, or by accessing the sage.app website, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
            </p>
            <p>
              You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you are 18 or older and have the legal capacity to enter into a binding agreement.
            </p>
          </LegalSection>

          <LegalSection title="2. Description of Service">
            <p>
              Sage is an AI-powered nutrition coaching mobile application that provides:
            </p>
            <ul>
              <li>Photo-based meal logging and nutritional analysis using AI vision technology</li>
              <li>Personalised nutrition coaching via AI chat interface</li>
              <li>Habit tracking, daily check-ins, and progress monitoring</li>
              <li>Progress photo storage and comparison</li>
              <li>Nutritional insights and recommendations</li>
            </ul>
            <p>
              The Service is provided &quot;as is&quot; and is subject to change. We reserve the right to modify, suspend, or discontinue any part of the Service at any time.
            </p>
          </LegalSection>

          <LegalSection title="3. User Accounts">
            <p>
              To use Sage, you must create an account. You are responsible for:
            </p>
            <ul>
              <li>Providing accurate and complete information when creating your account</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Notifying us immediately of any unauthorised access to your account</li>
            </ul>
            <p>
              We reserve the right to terminate accounts that violate these Terms, contain false information, or are used for abusive purposes.
            </p>
          </LegalSection>

          <LegalSection title="4. Subscription and Payment">
            <h3>4.1 Subscription Plans</h3>
            <p>
              Sage is available via a paid subscription. We offer:
            </p>
            <ul>
              <li><strong>Monthly Plan:</strong> Billed monthly at $9.99/month</li>
              <li><strong>Annual Plan:</strong> Billed annually at $59.99/year</li>
            </ul>
            <p>
              All new users receive a 3-day free trial with full access to all features. You will not be charged during the trial period.
            </p>

            <h3>4.2 Auto-Renewal</h3>
            <p>
              Subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date. You authorise us (through Apple or Google) to charge your payment method on file for the applicable subscription fee.
            </p>

            <h3>4.3 Cancellation</h3>
            <p>
              You may cancel your subscription at any time through your device&apos;s App Store or Google Play subscription settings. Cancellation takes effect at the end of the current billing period — you retain access to the Service until that date.
            </p>
            <ul>
              <li><strong>iOS:</strong> Settings &gt; Your Name &gt; Subscriptions &gt; Sage</li>
              <li><strong>Android:</strong> Google Play Store &gt; Menu &gt; Subscriptions &gt; Sage</li>
            </ul>

            <h3>4.4 Refunds</h3>
            <p>
              Subscription payments are processed by Apple (App Store) or Google (Play Store). Refund requests are subject to their respective refund policies:
            </p>
            <ul>
              <li>Apple: <a href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noopener noreferrer">Apple Refund Policy</a></li>
              <li>Google: <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Google Play Refund Policy</a></li>
            </ul>
            <p>
              We generally do not offer refunds for partial subscription periods, but may make exceptions in cases of service failure at our sole discretion.
            </p>

            <h3>4.5 Price Changes</h3>
            <p>
              We reserve the right to change subscription prices. We will provide at least 30 days&apos; notice before any price increase takes effect. Continued use after the notice period constitutes acceptance of the new pricing.
            </p>
          </LegalSection>

          <LegalSection title="5. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Upload harmful, offensive, or inappropriate content</li>
              <li>Attempt to reverse-engineer, hack, or disrupt the Service</li>
              <li>Share your account credentials with others</li>
              <li>Use automated tools to scrape or extract data from the Service</li>
              <li>Misrepresent your identity or impersonate others</li>
              <li>Circumvent subscription requirements (e.g., creating multiple free trial accounts)</li>
            </ul>
            <p>
              Violation of these rules may result in immediate account suspension or termination.
            </p>
          </LegalSection>

          <LegalSection title="6. Health Disclaimer">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-semibold text-ink mb-2">Important Health Notice</p>
              <p>
                <strong>Sage is not a substitute for professional medical advice, diagnosis, or treatment.</strong> The nutritional information, coaching responses, and recommendations provided by Sage are for informational and educational purposes only.
              </p>
              <p className="mt-3">
                Always consult a qualified healthcare professional, doctor, or registered dietitian before making significant changes to your diet, exercise routine, or nutrition plan — especially if you have a medical condition, are pregnant, or are taking medications.
              </p>
            </div>
            <p>
              The AI models powering Sage can make errors in food recognition or nutritional calculations. All information should be treated as estimates and verified independently for medical or clinical purposes.
            </p>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              All content within the Service — including but not limited to the Sage name, logo, app design, AI responses, text, graphics, and software — is owned by or licensed to Friday Technologies SRL and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable licence to use the Service for your personal, non-commercial use. You may not reproduce, modify, distribute, or create derivative works from any part of the Service without our express written permission.
            </p>
            <p>
              You retain ownership of any content you submit to the Service (e.g., food photos, check-in responses). By submitting content, you grant us a limited licence to process it for the purpose of providing the Service to you.
            </p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Friday Technologies SRL and its directors, employees, and partners shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, goodwill, or other intangible losses</li>
              <li>Any health outcomes resulting from following advice provided by the Service</li>
              <li>Inaccurate nutritional information produced by AI analysis</li>
              <li>Service interruptions, outages, or data loss</li>
            </ul>
            <p>
              Our total liability to you for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid to us in the 12 months preceding the claim.
            </p>
          </LegalSection>

          <LegalSection title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Friday Technologies SRL and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Content you submit to the Service</li>
              <li>Your violation of any rights of a third party</li>
            </ul>
          </LegalSection>

          <LegalSection title="10. Termination">
            <p>
              We may suspend or terminate your account and access to the Service at any time, with or without notice, if we believe you have violated these Terms or if required by law.
            </p>
            <p>
              You may terminate your account at any time by deleting the app and contacting us at <a href="mailto:support@sage.app">support@sage.app</a> to request account deletion.
            </p>
            <p>
              Upon termination, your right to use the Service ceases immediately. Sections 7, 8, 9, and 11 of these Terms shall survive termination.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of Romania and the European Union, without regard to conflict of law provisions.
            </p>
            <p>
              Any disputes arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of Romania.
            </p>
            <p>
              If you are a consumer in the EU, you may also have the right to use the European Commission&apos;s Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
            </p>
          </LegalSection>

          <LegalSection title="12. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or in-app notification at least 14 days before the changes take effect. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact">
            <p>For questions about these Terms, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@sage.app">support@sage.app</a></li>
              <li><strong>Company:</strong> Friday Technologies SRL, Romania, EU</li>
              <li><strong>Support:</strong> <a href="/support">sage.app/support</a></li>
            </ul>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
