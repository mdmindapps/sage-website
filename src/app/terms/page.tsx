import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Sage AI fitness coach app and website.",
};

const LAST_UPDATED = "June 11, 2026";

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
            Terms of Service
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted leading-relaxed text-lg mb-8">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Sage mobile
            application and the sageacademy.app website (collectively, the &quot;Service&quot;)
            operated by Friday Technologies SRL (&quot;Company&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). Please read these Terms carefully before using the
            Service.
          </p>

          <LegalSection title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using the Sage app, or by accessing the
              sageacademy.app website, you agree to be bound by these Terms. If you do not agree,
              do not use the Service.
            </p>
            <p>
              You must be at least 18 years of age to use the Service. By using the Service, you
              represent and warrant that you are 18 or older and have the legal capacity to enter
              into a binding agreement.
            </p>
          </LegalSection>

          <LegalSection title="2. Description of Service">
            <p>Sage is an AI-powered fitness coaching mobile application that provides:</p>
            <ul>
              <li>
                Photo-based and text-based meal logging with nutritional analysis powered by
                OpenAI
              </li>
              <li>Personalised fitness coaching via an AI chat interface powered by OpenAI</li>
              <li>Habit tracking, daily check-ins, and progress monitoring</li>
              <li>Progress photo storage and comparison</li>
              <li>
                &ldquo;My Why&rdquo; voice recording — an onboarding voice note transcribed by
                OpenAI to anchor your coaching experience
              </li>
              <li>Push notifications and check-in reminders (if enabled)</li>
            </ul>
            <p>
              The Service is provided &quot;as is&quot; and is subject to change. We reserve the
              right to modify, suspend, or discontinue any part of the Service at any time, with
              reasonable notice where possible.
            </p>
          </LegalSection>

          <LegalSection title="3. User Accounts">
            <p>To use Sage, you must create an account by providing:</p>
            <ul>
              <li>A valid email address</li>
              <li>A display name (required)</li>
              <li>A password</li>
            </ul>
            <p>You are responsible for:</p>
            <ul>
              <li>Providing accurate and truthful information when creating your account</li>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activity that occurs under your account</li>
              <li>
                Notifying us immediately at{" "}
                <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a> of any
                unauthorised access to your account
              </li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms,
              contain false information, or are used for abusive or fraudulent purposes.
            </p>
          </LegalSection>

          <LegalSection title="4. Subscription and Payment">
            <h3>4.1 Subscription Plans</h3>
            <p>
              Access to Sage requires a paid subscription. We currently offer two plans:
            </p>
            <ul>
              <li>
                <strong>Monthly Plan:</strong> $12.99 per month, billed monthly
              </li>
              <li>
                <strong>Annual Plan:</strong> $89.99 per year, billed annually (equivalent to
                approximately $7.50 per month)
              </li>
            </ul>
            <p>
              All new users receive a <strong>3-day free trial</strong> with full access to all
              features. You will not be charged during the trial period.
            </p>
            <p>
              Subscriptions are processed by Apple (App Store) or Google (Play Store) and managed
              via RevenueCat. We do not directly store or process payment card information.
            </p>

            <h3>4.2 Auto-Renewal</h3>
            <p>
              Subscriptions renew automatically at the end of each billing period unless you
              cancel before the renewal date. By starting a subscription, you authorise Apple or
              Google to charge your payment method on file for the applicable fee at each renewal.
            </p>

            <h3>4.3 Cancellation</h3>
            <p>
              You may cancel at any time through your device&apos;s subscription settings.
              Cancellation takes effect at the end of the current billing period — you retain
              access to the Service until that date.
            </p>
            <ul>
              <li>
                <strong>iOS:</strong> Settings &gt; [Your Name] &gt; Subscriptions &gt; Sage
              </li>
              <li>
                <strong>Android:</strong> Google Play Store &gt; Menu &gt; Subscriptions &gt; Sage
              </li>
            </ul>

            <h3>4.4 Refunds</h3>
            <p>
              All payments are processed by Apple or Google. Refund requests are governed by their
              respective policies:
            </p>
            <ul>
              <li>
                Apple:{" "}
                <a
                  href="https://support.apple.com/en-us/HT204084"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Refund Policy
                </a>
              </li>
              <li>
                Google:{" "}
                <a
                  href="https://support.google.com/googleplay/answer/2479637"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Refund Policy
                </a>
              </li>
            </ul>
            <p>
              Friday Technologies SRL does not independently issue refunds for subscription
              periods already billed, but may make exceptions at our sole discretion in cases of
              demonstrated service failure.
            </p>

            <h3>4.5 Price Changes</h3>
            <p>
              We reserve the right to change subscription prices. We will give at least 30
              days&apos; notice of any price increase. Continued use after the notice period
              constitutes acceptance of the new pricing.
            </p>
          </LegalSection>

          <LegalSection title="5. Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Upload harmful, abusive, offensive, or illegal content</li>
              <li>Attempt to reverse-engineer, decompile, hack, or disrupt the Service</li>
              <li>Share your account credentials with any third party</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Service</li>
              <li>Misrepresent your identity or impersonate any person or entity</li>
              <li>
                Circumvent subscription requirements (e.g., by creating multiple accounts to
                exploit free trials)
              </li>
            </ul>
            <p>
              Violation of these rules may result in immediate suspension or permanent termination
              of your account.
            </p>
          </LegalSection>

          <LegalSection title="6. Health, AI &amp; Risk Disclaimers">
            <div className="bg-warning/10 border border-warning/30 rounded-xl p-5">
              <p className="font-semibold text-ink mb-2">Important Health Notice</p>
              <p>
                <strong>
                  Sage is a general health and fitness application. It is not a medical device and
                  does not provide medical advice, diagnosis, or treatment.
                </strong>{" "}
                The content, plans, calorie and macro targets, and coaching are for general
                informational and motivational purposes only and are not a substitute for advice
                from a physician, registered dietitian, or other qualified healthcare
                professional.
              </p>
              <p className="mt-3">
                Always consult your doctor before beginning, changing, or stopping any diet,
                exercise, fasting, or weight-management program, especially if you have a medical
                condition, take medication, are pregnant or breastfeeding, or are under 18.
                Individual results vary and are not guaranteed.
              </p>
            </div>

            <h3>6.1 AI-Generated Content</h3>
            <p>
              Sage uses artificial intelligence (including third-party AI models) to generate
              coaching responses, meal and photo analysis, and other content. AI output can be
              inaccurate, incomplete, outdated, or wrong, and may occasionally produce content
              that sounds confident but is not correct (&ldquo;hallucinations&rdquo;). AI
              responses are provided for general informational purposes only and do not constitute
              professional, medical, nutritional, psychological, or fitness advice. You are solely
              responsible for any decisions or actions you take based on AI-generated content, and
              you should independently verify important information and consult a qualified
              professional before relying on it.
            </p>

            <h3>6.2 Assumption of Risk</h3>
            <p>
              Physical exercise, dietary changes, fasting, and weight management carry inherent
              risks, including injury or adverse health effects. By using Sage, you voluntarily
              assume all such risks. You are responsible for exercising and eating within your own
              limits and abilities and for stopping and seeking medical attention if you
              experience pain, dizziness, or any other symptom. Sage is intended for healthy
              adults; if you have any doubt about your fitness to participate, consult a physician
              first.
            </p>

            <h3>6.3 Not for Medical Conditions, Eating Disorders, or Emergencies</h3>
            <p>
              Sage is not intended for, and should not be used by, individuals with eating
              disorders or a history of disordered eating, individuals who are pregnant or
              breastfeeding, minors, or individuals with medical conditions requiring supervised
              nutrition or exercise, in each case without prior approval and ongoing supervision
              from a qualified healthcare professional. Sage&apos;s calorie, weight, and tracking
              features, and its motivational/&ldquo;panic&rdquo;/support features, are not
              therapy, counseling, crisis intervention, or a substitute for professional
              mental-health care. If you are experiencing a medical or mental-health emergency, or
              thoughts of self-harm, stop using the app and contact your local emergency services
              or a crisis helpline immediately.
            </p>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              All content within the Service — including the Sage name, logo, app design, AI
              responses, text, graphics, and software — is owned by or licensed to Friday
              Technologies SRL and is protected by applicable copyright, trademark, and
              intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable, revocable licence to use
              the Service for your personal, non-commercial purposes. You may not reproduce,
              modify, distribute, sublicense, or create derivative works from any part of the
              Service without our prior written consent.
            </p>
            <p>
              You retain ownership of content you submit (e.g., food photos, voice recordings,
              check-in responses). By submitting content, you grant Friday Technologies SRL a
              limited, royalty-free licence to process it for the purpose of delivering the
              Service to you.
            </p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability &amp; No Warranty">
            <p>
              Sage is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without
              warranties of any kind, express or implied, including implied warranties of
              merchantability, fitness for a particular purpose, accuracy, or non-infringement.
            </p>
            <p>
              To the maximum extent permitted by applicable law, Friday Technologies SRL and its
              directors, owners, employees, and partners shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or for any loss of health,
              profits, or data, arising out of or relating to your use of (or inability to use)
              Sage or any content or AI output it provides, even if advised of the possibility of
              such damages. In particular, we are not liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, goodwill, or other intangible losses</li>
              <li>
                Any health outcomes or physical harm resulting from following advice provided by
                the Service
              </li>
              <li>Inaccuracies in nutritional information produced by AI analysis</li>
              <li>Service interruptions, downtime, or data loss</li>
            </ul>
            <p>
              Our total aggregate liability for any claims arising from or relating to these Terms
              shall not exceed the total amount you paid to us in the 12 months preceding the
              claim.
            </p>
            <p>
              Nothing in these Terms excludes or limits liability that cannot be excluded or
              limited under applicable law (including liability for death or personal injury
              caused by gross negligence or fraud, or non-waivable consumer rights).
            </p>
          </LegalSection>

          <LegalSection title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Friday Technologies SRL and its
              affiliates, officers, directors, employees, and agents from any claims, liabilities,
              damages, losses, and expenses (including reasonable legal fees) arising from:
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
              We may suspend or terminate your access to the Service at any time, with or without
              notice, if we believe you have violated these Terms or if required by law.
            </p>
            <p>
              You may terminate your account at any time by contacting us at{" "}
              <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a> to request
              account deletion.
            </p>
            <p>
              Upon termination, your right to use the Service ceases immediately. Sections 7, 8,
              9, and 11 survive termination.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of Romania and
              the European Union, without regard to conflict-of-law provisions.
            </p>
            <p>
              Any disputes arising from or relating to these Terms or the Service shall be subject
              to the exclusive jurisdiction of the courts of Romania.
            </p>
            <p>
              If you are an EU consumer, you may also use the European Commission&apos;s Online
              Dispute Resolution platform:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="12. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of
              material changes via email and/or in-app notice at least 14 days before the changes
              take effect. Your continued use of the Service after the effective date constitutes
              acceptance of the revised Terms.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact">
            <p>For questions about these Terms, please contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>
              </li>
              <li>
                <strong>Company:</strong> Friday Technologies SRL, Romania, EU
              </li>
              <li>
                <strong>Support centre:</strong>{" "}
                <a href="/support">sageacademy.app/support</a>
              </li>
            </ul>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
