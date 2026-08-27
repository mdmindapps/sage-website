import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Agreement",
  description:
    "The terms under which creators offer coaching and communities on Sage and get paid.",
};

const LAST_UPDATED = "August 26, 2026";
const VERSION = "1.0";
// Flip to false at go-live (after the accountant has reviewed the tax clauses).
const DRAFT = false;

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

export default function CreatorAgreementPage() {
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
            Creator Agreement
          </h1>
          <p className="text-muted">
            Version {VERSION} &middot; Last updated: {LAST_UPDATED}
          </p>
        </div>

        {DRAFT && (
          <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <strong>Draft.</strong>{" "}This agreement is being finalized and is not
            yet in force.
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <p className="text-muted leading-relaxed text-lg mb-8">
            This Creator Agreement (&quot;Agreement&quot;) is between{" "}
            <strong>Friday Technologies SRL</strong>{" "}&mdash; a company organised
            under the laws of Romania, registered office at Șoseaua Pipera no.
            61, Parter, Camera 1, Modul A, Bloc 3, Scara 1, Ap. 4, Sector 2,
            Bucharest, Romania; Trade Register no. J40/11353/2022; sole fiscal
            code (CUI) 46304555 (VAT ID RO46304555 if/when registered for VAT);
            contact contact@sageacademy.app (operating the{" "}
            <strong>Sage</strong>{" "}platform &mdash; &quot;Sage&quot;,
            &quot;we&quot;, &quot;us&quot;) &mdash; and{" "}
            <strong>you</strong>, the person or entity registering as a creator
            (&quot;Creator&quot;, &quot;you&quot;). By ticking &quot;I have read
            and agree to the Sage Creator Agreement&quot; and submitting your
            creator application, you enter into a legally binding agreement on
            the terms below.
          </p>

          <LegalSection title="1. Definitions">
            <ul>
              <li>
                <strong>Platform</strong>{" "}&mdash; the Sage mobile applications,
                website and related services.
              </li>
              <li>
                <strong>Offer</strong>{" "}&mdash; a paid product you publish on the
                Platform: one-to-one coaching, a community/membership, or another
                format Sage enables.
              </li>
              <li>
                <strong>Subscriber</strong>{" "}&mdash; a user who purchases access
                to one of your Offers.
              </li>
              <li>
                <strong>Content</strong>{" "}&mdash; any material, coaching,
                messages, programs, media or services you provide through the
                Platform.
              </li>
              <li>
                <strong>Net Revenue</strong>{" "}&mdash; the amount paid by a
                Subscriber for an Offer, excluding taxes (VAT/sales tax) and
                before any platform fee.
              </li>
              <li>
                <strong>Creator Earnings</strong>{" "}&mdash; your 80% share of Net
                Revenue, as defined in Section 6.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="2. Eligibility & account">
            <ul>
              <li>
                You must be at least 18 years old and able to enter into a
                binding contract.
              </li>
              <li>
                You must provide accurate identifying and tax information and
                keep it current.
              </li>
              <li>
                You must complete payment onboarding and identity verification
                (KYC) through our payments provider, Stripe, including
                Stripe&apos;s Connected Account Agreement. We may not pay you
                until this is complete.
              </li>
              <li>
                Creator accounts are subject to{" "}
                <strong>review and approval by Sage</strong>. We may approve,
                decline, suspend or remove any Creator or Offer at our
                discretion.
              </li>
              <li>
                One Creator account per person or entity, unless we agree
                otherwise in writing.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Relationship of the parties">
            <p>
              You act as an <strong>independent business</strong>. Nothing in
              this Agreement creates an employment, partnership, joint venture or
              agency relationship between you and Sage. You are solely
              responsible for the way you deliver your Content, for your own
              equipment, staff and costs, and for your own taxes and social
              contributions. You may not represent yourself as an employee or
              agent of Sage.
            </p>
          </LegalSection>

          <LegalSection title="4. Your Offers & Content">
            <ul>
              <li>
                You decide what Offers to publish and set their price within the
                ranges the Platform allows.
              </li>
              <li>
                You are solely responsible for delivering the coaching, community
                and other services you promise to Subscribers, to a professional
                standard and in line with your published description.
              </li>
              <li>
                You are responsible for the accuracy, legality and safety of your
                Content, including any fitness, nutrition or health guidance. You
                will include appropriate disclaimers and will not provide medical
                advice unless you are qualified and licensed to do so.
              </li>
              <li>
                You will comply with the Sage Community Guidelines and the
                prohibited-content rules in Section 11.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Intellectual property & licence">
            <p>
              You <strong>retain ownership</strong>{" "}of your Content. You grant
              Sage a worldwide, non-exclusive, royalty-free licence, for the
              duration of this Agreement, to host, store, reproduce, display,
              distribute, market and make your Content and Offers available to
              Subscribers through the Platform, and to use your name, handle and
              likeness to promote your Offers. This licence ends when the
              relevant Content is removed, except as needed to complete
              transactions already in progress, to comply with law, or for
              reasonable back-ups.
            </p>
            <p>
              You represent that you own or have all rights necessary to grant
              this licence and that your Content does not infringe any third
              party&apos;s rights.
            </p>
          </LegalSection>

          <LegalSection title="6. Fees, pricing & payment">
            <p>
              <strong>Sage is the Merchant of Record.</strong>{" "}Sage sells access
              to your Offers to Subscribers in its own name, collects payment,
              and is responsible for charging and remitting the consumer sales
              tax/VAT due on those sales. Your relationship for tax purposes is
              with Sage, not with the individual Subscriber.
            </p>
            <ul>
              <li>
                <strong>Platform fee & split.</strong>{" "}Sage retains a platform
                fee of <strong>20%</strong>{" "}of Net Revenue. You receive{" "}
                <strong>Creator Earnings of 80%</strong>{" "}of Net Revenue. Taxes
                collected from Subscribers are not part of Net Revenue and are
                retained by Sage to remit.
              </li>
              <li>
                <strong>Payouts.</strong>{" "}Creator Earnings are paid to you
                through Stripe Connect on a <strong>weekly</strong>{" "}cadence,
                after a <strong>7-day holding period</strong>{" "}from each sale (a
                fraud/chargeback buffer), in your Stripe settlement currency.
                Stripe&apos;s fees and any currency conversion may apply as set
                by Stripe.
              </li>
              <li>
                <strong>Refunds & chargebacks.</strong>{" "}If a sale is refunded,
                reversed or charged back, the corresponding amount (including
                your share) is deducted from your balance or clawed back from
                future Creator Earnings.
              </li>
              <li>
                <strong>Adjustments.</strong>{" "}We may withhold or offset amounts
                to correct errors, recover refunds/chargebacks, or where required
                by law.
              </li>
              <li>
                <strong>Reserves & negative balances.</strong>{" "}Sage (or its
                payment providers) may hold, delay or reserve part or all of a
                payout where reasonably needed to cover refunds, chargebacks,
                disputes or suspected fraud. If refunds or chargebacks exceed your
                balance, it goes negative; you must repay the shortfall, and Sage
                may recover it from future Creator Earnings or by other lawful
                means. This repayment obligation survives the closing, suspension
                or termination of your Creator account.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="7. Self-billing (invoicing on your behalf)">
            <p>
              <strong>Self-billing agreement.</strong>{" "}Because Sage is the
              Merchant of Record and settles funds to you, you{" "}
              <strong>
                appoint and authorise Sage to issue invoices on your behalf
              </strong>{" "}
              (self-billing / autofacturare) for the Creator Earnings payable to
              you, for the duration of this Agreement.
            </p>
            <ul>
              <li>
                You agree <strong>not to issue your own invoices</strong>{" "}to Sage
                for amounts covered by a self-billed invoice.
              </li>
              <li>
                You will <strong>accept</strong>{" "}each self-billed invoice we
                issue for the Creator Earnings shown, and will notify us promptly
                if any detail is incorrect.
              </li>
              <li>
                You will notify Sage promptly of any change to your name,
                address, business/tax status, or VAT registration, as these
                affect how invoices are issued.
              </li>
              <li>
                <strong>VAT / reverse charge.</strong>{" "}If you are a business
                registered for VAT in the EU, your supply of services to Sage is
                generally subject to the <strong>reverse-charge</strong>{" "}
                mechanism (VAT accounted for by Sage in Romania; 0% charged by
                you). If you are not VAT-registered, no VAT is added. You remain
                responsible for confirming your own VAT obligations.
              </li>
              <li>
                This self-billing arrangement runs for the term of this Agreement
                and will be reviewed if either party&apos;s VAT status changes.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="8. Taxes">
            <ul>
              <li>
                <strong>Consumer tax.</strong>{" "}Sage, as Merchant of Record, is
                responsible for calculating, collecting and remitting the
                VAT/sales tax due from Subscribers on sales of your Offers.
              </li>
              <li>
                <strong>Your taxes.</strong>{" "}You are solely responsible for
                declaring and paying all income tax, social contributions and any
                other taxes due on your Creator Earnings in your own country of
                residence.
              </li>
              <li>
                <strong>Information & reporting.</strong>{" "}You will provide the tax
                information we reasonably request. Sage may be required to report
                your earnings to tax authorities (for example under{" "}
                <strong>DAC7</strong>{" "}in the EU) and you consent to such
                reporting.
              </li>
              <li>
                <strong>Withholding.</strong>{" "}Where the law requires Sage to
                withhold tax from your payouts, we will do so and remit it to the
                relevant authority.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="9. Term & termination">
            <ul>
              <li>
                This Agreement starts when you accept it and continues until
                terminated.
              </li>
              <li>
                You may stop offering and close your Creator account at any time;
                you remain responsible for delivering Offers already sold for the
                period Subscribers have paid for.
              </li>
              <li>
                Sage may suspend or terminate your Creator account or any Offer,
                with or without notice, for breach of this Agreement, legal or
                risk reasons, or where required by our payment providers or the
                app stores.
              </li>
              <li>
                On termination, active Subscriptions are handled as set out on
                the Platform (typically Subscribers keep access until the end of
                the period already paid for, then it lapses). Earned but unpaid
                Creator Earnings are paid out subject to the normal holding
                period and any offsets.
              </li>
              <li>
                Sections that by their nature should survive (IP warranties, fees
                owed, taxes, indemnity, liability, governing law) survive
                termination.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="10. Warranties">
            <p>
              You represent and warrant that: you have the authority to enter
              into this Agreement; all information you provide is accurate; your
              Content is lawful and does not infringe third-party rights; you
              hold any qualifications, licences or insurance required to deliver
              your Offers; and you will comply with all laws applicable to you,
              including consumer-protection and health/fitness regulations.
            </p>
          </LegalSection>

          <LegalSection title="11. Prohibited content & conduct">
            <p>
              You will not publish or deliver Content that is illegal, sexually
              explicit, hateful, harassing, dangerous, misleading, or that
              promotes disordered eating, unsafe practices or unlicensed medical
              claims; that infringes intellectual property; or that violates the
              Sage Community Guidelines or the rules of Apple&apos;s App Store or
              Google Play. You will not use the Platform to defraud users.
            </p>
            <p>
              <strong>No circumvention.</strong>{" "}You will not (a) direct,
              encourage or solicit Subscribers to buy your Content or transact
              with you outside the Platform in order to avoid Sage&apos;s fees;
              (b) advertise, link to, or name competing platforms inside the
              Platform or to Subscribers you reached through it; or (c) use
              Subscriber contact details obtained through the Platform to take
              that relationship off-Platform. Deliberate or repeated circumvention
              is a material breach and may lead to suspension, termination, and
              withholding of the affected earnings.
            </p>
          </LegalSection>

          <LegalSection title="12. Indemnification">
            <p>
              You will indemnify and hold Sage harmless against any claims,
              losses, damages and reasonable costs (including legal fees) arising
              from your Content, your Offers, your breach of this Agreement, your
              breach of law, or your dealings with Subscribers.
            </p>
          </LegalSection>

          <LegalSection title="13. Limitation of liability">
            <p>
              To the maximum extent permitted by law, Sage is not liable for
              indirect or consequential losses, or for lost profits or lost
              earnings. Sage&apos;s total liability to you under this Agreement is
              limited to the total platform fees Sage retained from your sales in
              the three (3) months before the event giving rise to the claim.
              Nothing limits liability that cannot be limited by law.
            </p>
          </LegalSection>

          <LegalSection title="14. Data protection">
            <p>
              Each party will comply with applicable data-protection law
              (including the GDPR) when handling personal data. Sage processes
              Subscriber and Creator data in line with the{" "}
              <Link href="/privacy">Sage Privacy Policy</Link>. You will only use
              Subscriber personal data made available to you to deliver your
              Offers, and not for unrelated marketing without a lawful basis.
            </p>
          </LegalSection>

          <LegalSection title="15. Changes to this Agreement">
            <p>
              We may update this Agreement. If a change is material, we will give
              you reasonable notice (for example, in-app or by email). Continuing
              to offer on the Platform after a change takes effect means you
              accept the updated Agreement. Each version is identified by a
              version number and effective date; we keep a record of the version
              you accepted.
            </p>
          </LegalSection>

          <LegalSection title="16. Governing law & disputes">
            <p>
              This Agreement is governed by the laws of{" "}
              <strong>Romania</strong>. The courts of{" "}
              <strong>Bucharest, Romania</strong>{" "}have exclusive jurisdiction
              over any dispute, without prejudice to any mandatory
              consumer-protection rights you may have where you live.
            </p>
            <p>
              <strong>Talk to us first.</strong>{" "}Before starting any formal
              proceeding, you agree to raise the issue with Sage in writing (at
              contact@sageacademy.app) and allow 30 days to resolve it in good
              faith.
            </p>
          </LegalSection>

          <LegalSection title="17. General">
            <p>
              This Agreement, together with the documents it refers to (the{" "}
              <Link href="/terms">Sage Terms of Service</Link>, the{" "}
              <Link href="/privacy">Privacy Policy</Link>, the Community
              Guidelines and Stripe&apos;s Connected Account Agreement), is the
              entire agreement between us on this subject. If any provision is
              unenforceable, the rest remains in force. You may not assign this
              Agreement without our consent; we may assign it to a group company
              or successor. Notices to you may be given in-app or by email.
            </p>
          </LegalSection>

          <LegalSection title="Acceptance">
            <p>
              You accept this Agreement electronically when you tick{" "}
              <strong>
                &quot;I have read and agree to the Sage Creator Agreement&quot;
              </strong>{" "}
              and submit your creator application. Sage records the version
              accepted, the date and time, and your account identity as evidence
              of acceptance. This electronic acceptance has the same effect as a
              signature.
            </p>
            <p className="text-sm">
              On behalf of Sage: <strong>Friday Technologies SRL</strong>
              (Bucharest, Romania; J40/11353/2022; CUI 46304555).
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
