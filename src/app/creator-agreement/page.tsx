import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Agreement",
  description:
    "The terms under which creators offer coaching and communities on Sage and get paid.",
};

const LAST_UPDATED = "September 28, 2026";
const VERSION = "1.4";
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

          <LegalSection title="Preamble">
            <p>This version of the Creator Agreement is offered to Sage&apos;s first 100 creators, the <strong>Founding Creators</strong>. When you accept it, Sage records the version number, the date and the exact text you accepted, and keeps that record for as long as your account exists.</p>
          </LegalSection>

          <LegalSection title="1. Definitions">
            <ul>
              <li><strong>Platform</strong> &mdash; the Sage mobile applications, website and related services.</li>
              <li><strong>Offer</strong> &mdash; a paid product you publish on the Platform: one-to-one coaching, a community/membership, or another format Sage enables.</li>
              <li><strong>Subscriber</strong> &mdash; a user who purchases access to one of your Offers.</li>
              <li><strong>Content</strong> &mdash; any material, coaching, messages, programs, media or services you provide through the Platform.</li>
              <li><strong>Sales Revenue</strong> &mdash; the amount paid by a Subscriber for an Offer, excluding taxes (VAT/sales tax) and before any platform fee.</li>
              <li><strong>Payment Costs</strong> &mdash; the costs of taking and paying out the money for your sales: card and payment processing fees, currency conversion, payout fees, and the payment provider&apos;s fee for keeping your payout account active.</li>
              <li><strong>Net Revenue</strong> &mdash; Sales Revenue minus Payment Costs.</li>
              <li><strong>Founding Creator</strong> &mdash; one of the first 100 creators approved on the Platform, who accepted this version of the Agreement.</li>
              <li><strong>Creator Earnings</strong> &mdash; your share, as defined in Section 6.</li>
              <li><strong>Sage Premium</strong> &mdash; Sage&apos;s own subscription to the Sage app, sold by Sage to any user on its own terms, with or without a Creator, at Sage&apos;s published standalone price. Members who subscribe through a Creator receive it at a reduced price; a member who already holds Sage Premium is not charged again when joining your Offer, and keeps it if they leave. It is a separate contract between Sage and that member, for a separate product. Sage Premium is Sage&apos;s product and Sage&apos;s revenue: it is not part of Sales Revenue or Net Revenue, no Creator Earnings arise from it, and nothing is deducted from your side for it.</li>
            </ul>
          </LegalSection>

          <LegalSection title="2. Eligibility &amp; account">
            <ul>
              <li>You must be at least 18 years old and able to enter into a binding contract.</li>
              <li>You must provide accurate identifying and tax information and keep it current.</li>
              <li>You must complete payment onboarding and identity verification (KYC) through our payments provider, Stripe, including Stripe&apos;s Connected Account Agreement. We may not pay you until this is complete.</li>
              <li>Creator accounts are subject to <strong>review and approval by Sage</strong>. We may approve, decline, suspend or remove any Creator or Offer at our discretion.</li>
              <li>One Creator account per person or entity, unless we agree otherwise in writing.</li>
              <li><strong>Founding Creator status.</strong> Founding Creator status is granted when Sage approves your creator account, to the first 100 approved creators, and it is the reason you were offered this version of the Agreement. We confirm it in writing when we approve you.</li>
            </ul>
          </LegalSection>

          <LegalSection title="3. Relationship of the parties">
            <p>You act as an <strong>independent business</strong>. Nothing in this Agreement creates an employment, partnership, joint venture or agency relationship between you and Sage. You are solely responsible for the way you deliver your Content, for your own equipment, staff and costs, and for your own taxes and social contributions. You may not represent yourself as an employee or agent of Sage.</p>
          </LegalSection>

          <LegalSection title="4. Your Offers &amp; Content">
            <ul>
              <li>You decide what Offers to publish and set their price within the ranges the Platform allows.</li>
              <li>You are solely responsible for delivering the coaching, community and other services you promise to Subscribers, to a professional standard and in line with your published description.</li>
              <li>You are responsible for the accuracy, legality and safety of your Content, including any fitness, nutrition or health guidance. You will include appropriate disclaimers and will not provide medical advice unless you are qualified and licensed to do so.</li>
              <li>You will comply with the <a href="/community-guidelines" className="underline">Sage Community Guidelines</a> and the prohibited-content rules in Section 11.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Intellectual property &amp; licence">
            <p>You <strong>retain ownership</strong> of your Content. You grant Sage a worldwide, non-exclusive, royalty-free licence, for the duration of this Agreement, to host, store, reproduce, display, distribute, market and make your Content and Offers available to Subscribers through the Platform, and to use your name, handle and likeness to promote your Offers. This licence ends when the relevant Content is removed, except as needed to complete transactions already in progress, to comply with law, or for reasonable back-ups. You represent that you own or have all rights necessary to grant this licence and that your Content does not infringe any third party&apos;s rights.</p>
          </LegalSection>

          <LegalSection title="6. Fees, pricing &amp; payment">
            <p><strong>Sage is the Merchant of Record.</strong> Sage sells access to your Offers to Subscribers in its own name, collects payment, and is responsible for charging and remitting the consumer sales tax/VAT due on those sales. Your relationship for tax purposes is with Sage, not with the individual Subscriber.</p>
            <ul>
              <li><strong>Creator Earnings.</strong> You receive <strong>95%</strong> of Net Revenue and Sage retains a platform fee of <strong>5%</strong> of Net Revenue. This applies to <strong>every Subscriber</strong>, including Subscribers who find you through Sage&apos;s own discovery feed, in-app search or advertising paid for by Sage. Payment Costs are deducted before the split, so both shares carry them in proportion.</li>
              <li><strong>What your members pay.</strong> A member who joins your club pays two separate things: the price you set for your Offer, which is what your Creator Earnings are calculated from, and Sage Premium, which gives them the app and the AI that powers it. Sage Premium belongs to Sage. You earn nothing from it, and nothing is deducted from your side for it. You are free to set and change the price of your own Offer at any time.</li>
              <li><strong>Taxes.</strong> Consumption taxes charged to Subscribers on the sale of your Offer, such as VAT in the EU and the UK, sales tax in the United States and GST elsewhere, are added on top of your price at checkout. They are never part of Sales Revenue or Net Revenue, and no part of them is yours: Sage collects them and pays them to the tax authority of the Subscriber&apos;s country.</li>
              <li><strong>Payouts.</strong> Where Stripe Connect is available in your country, Creator Earnings are paid to you through Stripe Connect <strong>every Monday</strong>, covering every sale whose funds have cleared with our payment provider by then &mdash; typically 2–7 days from the sale, depending on your country and the payment method. Payment is made in your Stripe settlement currency; any payout-side currency conversion is applied by Stripe at its own rates.</li>
              <li><strong>If Stripe is not available where you live.</strong> Some countries are not supported by our payment provider. In that case we pay you by <strong>bank transfer</strong>, <strong>monthly</strong>, against an invoice you issue to Friday Technologies SRL (or that we issue on your behalf under Section 10), for the Creator Earnings accumulated in the previous month. You provide accurate bank details in your own name, and any bank or intermediary transfer fees charged by your bank are yours. We may apply a <strong>minimum payout amount of $50</strong> for these transfers, carrying anything below it into the next month, because transfer costs would otherwise take most of the payment. Where the law requires us to withhold tax on a payment to a non-resident, we withhold it, remit it, and give you the documents you need to claim or offset it at home.</li>
              <li><strong>Refunds &amp; chargebacks.</strong> If a sale is refunded, reversed or charged back, the corresponding amount (including your share) is deducted from your balance or clawed back from future Creator Earnings.</li>
              <li><strong>Refunds required by law.</strong> As Merchant of Record, Sage must honour the refund and withdrawal rights a Subscriber has under the law of their country, for example the 14-day withdrawal right for digital services in the EU. Where such a refund is made, the corresponding Creator Earnings are deducted from your balance or set off against future Creator Earnings, in the same way as any other refund.</li>
              <li><strong>App store fees.</strong> Subscriptions to your Offers are sold and paid on the web, so no app store commission applies to them today. If Apple or Google ever require these purchases to go through their in-app payment systems, their commission becomes part of Payment Costs from the moment it applies. App stores can impose such changes with little or no notice, so we will tell you as soon as we know and give you as much warning as they give us. You can close your account at any time, and nothing in this Agreement locks you in.</li>
              <li><strong>Adjustments.</strong> We may withhold or offset amounts to correct errors, recover refunds/chargebacks, or where required by law.</li>
              <li><strong>Reserves &amp; negative balances.</strong> Sage (or its payment providers) may hold, delay or reserve part or all of a payout where reasonably needed to cover refunds, chargebacks, disputes or suspected fraud. If refunds or chargebacks exceed your balance, it goes negative; you must repay the shortfall, and Sage may recover it from future Creator Earnings or by other lawful means. This repayment obligation survives the closing, suspension or termination of your Creator account.</li>
            </ul>
          </LegalSection>

          <LegalSection title="7. How Offers are ranked and promoted">
            <p>Sage shows Offers in a discovery feed and in search. The main parameters are: how well an Offer matches what the user is looking for (categories, keywords, language); activity and quality signals inside Sage, such as member numbers, reviews and ratings, and how recently the creator has been active; how complete the Offer&apos;s page is; and any promotion or placement the creator has purchased or that Sage has granted.</p>
            <p><strong>Paid and granted placement.</strong> Sage may promote Offers in the app, on the website and in its own marketing, including placements a creator pays for and placements Sage gives at no charge, for example to new creators or as part of a campaign. Paid placements are labelled as promoted. Being listed in Sage does not entitle any creator to a particular position, to promotion, or to any level of visibility.</p>
            <p>Sage may change how ranking works at any time as the product develops, and will update this section when the main parameters change.</p>
          </LegalSection>

          <LegalSection title="8. Where creators are treated differently">
            <p>Sage treats some creators differently from others, and this section sets out how:</p>
            <ul>
              <li><strong>Fees.</strong> Founding Creators keep 95% of Net Revenue. All other creators keep 80% of Sales Revenue. <strong>Your Founding Creator rate stays with your account for as long as it remains active and in good standing, and does not change if Sage later changes its fees for new creators.</strong></li>
              <li><strong>Sage&apos;s own products.</strong> Sage may promote its own products, such as Sage Premium, inside the app, including in places where creator Offers appear.</li>
              <li><strong>Promotion.</strong> Sage may feature individual creators in its own marketing, newsletters or social channels at its discretion and at no charge, with no obligation to feature all creators equally.</li>
            </ul>
            <p>Sage does not give any creator access to data about another creator&apos;s Subscribers, and does not use one creator&apos;s data to give another creator an advantage.</p>
          </LegalSection>

          <LegalSection title="9. Subscriber data">
            <p><strong>What you receive.</strong> While this Agreement is in force you have access, through the Platform, to the following, and you can export it: your Subscribers and the date each joined; the name and email address of each Subscriber; what each Subscriber purchased, when, and the amounts they have paid; the messages posted in your channels; the results of challenges you run; and your revenue, payouts and refunds. For 1:1 clients only, and only where that client has enabled sharing, you also see their meals, weigh-ins and progress.</p>
            <p><strong>What you do not receive.</strong> Payment or card details. Any Subscriber&apos;s weigh-ins, meals, habits, progress photos or conversations with Sage, except as set out above. Any data concerning users who are not your Subscribers, or concerning another creator&apos;s Subscribers.</p>
            <p><strong>Your responsibility.</strong> You are the controller of the Subscriber contact details you receive and are responsible for complying with applicable data-protection law in respect of them. You will: use them only in connection with your own Offers; include a functioning unsubscribe mechanism in every marketing communication and give effect to opt-outs without delay; respond to a Subscriber&apos;s access, correction or deletion request; keep the data secure; and maintain your own privacy notice where required. You will not sell, rent, license or otherwise disclose Subscriber contact details to any third party.</p>
            <p><strong>Indemnity.</strong> You indemnify Sage under Section 15 against any claim, penalty, fine or loss arising from your use of Subscriber data.</p>
            <p><strong>After this Agreement ends.</strong> You retain the Subscriber contact details you received, subject to the obligations in this Section. Sage retains transaction records for the period required by tax and accounting law.</p>
          </LegalSection>

          <LegalSection title="10. Self-billing (invoicing on your behalf)">
            <p><strong>Self-billing agreement.</strong> Because Sage is the Merchant of Record and settles funds to you, you <strong>appoint and authorise Sage to issue invoices on your behalf</strong> (self-billing / autofacturare) for the Creator Earnings payable to you, for the duration of this Agreement.</p>
            <ul>
              <li>You agree <strong>not to issue your own invoices</strong> to Sage for amounts covered by a self-billed invoice.</li>
              <li>You will <strong>accept</strong> each self-billed invoice we issue for the Creator Earnings shown, and will notify us promptly if any detail is incorrect.</li>
              <li>You will notify Sage promptly of any change to your name, address, business/tax status, or VAT registration, as these affect how invoices are issued.</li>
              <li><strong>VAT / reverse charge.</strong> If you are a business registered for VAT in the EU, your supply of services to Sage is generally subject to the <strong>reverse-charge</strong> mechanism (VAT accounted for by Sage in Romania; 0% charged by you). If you are not VAT-registered, no VAT is added. You remain responsible for confirming your own VAT obligations.</li>
              <li>This self-billing arrangement runs for the term of this Agreement and will be reviewed if either party&apos;s VAT status changes.</li>
            </ul>
          </LegalSection>

          <LegalSection title="11. Taxes">
            <ul>
              <li><strong>Consumer tax.</strong> Sage, as Merchant of Record, is responsible for calculating, collecting and remitting the VAT/sales tax due from Subscribers on sales of your Offers.</li>
              <li><strong>Your taxes.</strong> You are solely responsible for declaring and paying all income tax, social contributions and any other taxes due on your Creator Earnings in your own country of residence.</li>
              <li><strong>Information we are required to collect.</strong> As an EU platform operator, Sage must report certain creators to the Romanian tax authority each year under Council Directive (EU) 2021/514 (&quot;DAC7&quot;). We therefore collect and keep up to date: your full legal name and address, your date of birth or company registration number, your tax identification number and the state that issued it, your VAT number where you have one, and your payout account details. Creators in the United States must also provide a valid W-9 or W-8 form. If you do not provide this information after two reminders, we must suspend your payouts and may close your creator account. This is a legal obligation, not a choice.</li>
              <li><strong>Withholding.</strong> Where the law requires Sage to withhold tax from your payouts, we will do so and remit it to the relevant authority.</li>
            </ul>
          </LegalSection>

          <LegalSection title="12. Term &amp; termination">
            <ul>
              <li>This Agreement starts when you accept it and continues until terminated.</li>
              <li><strong>If you want to leave.</strong> You may stop selling new subscriptions at any time. To close your Creator account you give us <strong>30 days&apos; notice</strong>, and during that period, and until the end of every period your Subscribers have already paid for, you remain responsible for delivering what they paid for. There is no penalty and no minimum term.</li>
              <li><strong>If we restrict or suspend your account.</strong> We will give you the reasons, in a form you can keep, at the latest when the restriction or suspension takes effect, and tell you what you can do about it.</li>
              <li><strong>If we end this Agreement.</strong> We will give you <strong>at least 30 days&apos; notice</strong>, with the reasons, in a form you can keep. During that period your existing Subscribers keep their access and your Creator Earnings continue to be paid.</li>
              <li><strong>Immediate exception.</strong> We may suspend or terminate immediately, giving reasons as soon as possible, where you have repeatedly breached this Agreement, where we are required to by law or by our payment providers, or where keeping your Offers live would expose users, Sage or third parties to immediate harm, for example fraud, illegal content, or content that puts someone&apos;s health at risk.</li>
              <li>On termination, active Subscriptions are handled as set out on the Platform. Sage does not transfer or reassign your Subscribers to another creator. Earned but unpaid Creator Earnings are paid out on the normal weekly cycle, subject to any offsets.</li>
              <li>Sections that by their nature should survive (IP warranties, fees owed, taxes, indemnity, liability, governing law) survive termination.</li>
            </ul>
          </LegalSection>

          <LegalSection title="13. Warranties">
            <p>You represent and warrant that: you have the authority to enter into this Agreement; all information you provide is accurate; your Content is lawful and does not infringe third-party rights; you hold any qualifications, licences or insurance required to deliver your Offers; and you will comply with all laws applicable to you, including consumer-protection and health/fitness regulations.</p>
            <ul>
              <li><strong>Your qualifications.</strong> Any qualification, certification or professional title you display on Sage must be real, current and yours, and you will provide proof if we ask. If you are not a qualified professional, you will not present yourself as one.</li>
              <li><strong>Insurance.</strong> You are responsible for meeting the requirements that apply where you live and work, including any insurance or registration your local law requires for coaching. We strongly recommend professional liability insurance if you sell 1:1 coaching, and we may require proof of it before you can continue selling 1:1, in particular where the volume or nature of your coaching makes it necessary.</li>
            </ul>
          </LegalSection>

          <LegalSection title="14. Prohibited content &amp; conduct">
            <p>You will not publish or deliver Content that is illegal, sexually explicit, hateful, harassing, dangerous, misleading, or that promotes disordered eating, unsafe practices or unlicensed medical claims; that infringes intellectual property; or that violates the Sage Community Guidelines or the rules of Apple&apos;s App Store or Google Play. You will not use the Platform to defraud users.</p>
            <ul>
              <li><strong>Health and safety.</strong> You will not diagnose, treat or claim to cure any medical condition, prescribe or recommend prescription medication, or promise specific medical results. You will not promote extreme calorie restriction, rapid weight-loss claims, fasting protocols for minors, or content that encourages disordered eating. Your Offers must carry a clear notice that your content is for general fitness and nutrition purposes, is not medical advice, and that members should consult a doctor before starting, especially if they are pregnant, recovering from illness or injury, or have a medical condition. Your Offers are for adults; you will not knowingly coach anyone under 18.</li>
              <li><strong>No circumvention.</strong> Inside the Platform, you will not (a) direct or encourage Subscribers to buy, outside the Platform, an Offer you are at the same time selling on the Platform, in order to avoid Sage&apos;s fees, or (b) advertise, link to, or name a competing platform. <strong>Your other products are your own business.</strong> If you sell programs, guides or anything else from your own shop or your own site, you may keep selling them and you may tell your members about them; this Section is about the Offers you sell here, not about everything you sell. What you do with your own contact list outside the Platform is likewise your own business. Deliberate or repeated circumvention is a material breach and may lead to suspension, termination, and withholding of the affected earnings.</li>
            </ul>
          </LegalSection>

          <LegalSection title="14b. What Sage does not promise, and what you must keep doing">
            <ul>
              <li><strong>No guarantee of income, traffic or visibility.</strong> Sage does not promise you any number of Subscribers, any level of earnings, any position in the discovery feed, or any promotion. Anything we show you as an example or an estimate is illustrative, not a forecast.</li>
              <li><strong>We can change the product.</strong> Sage may add, change, price, or remove features, including the discovery feed and the tools available to creators. Your Creator Earnings share is set in Section 8.</li>
              <li><strong>Keep your Offer alive.</strong> If you sell a subscription, members expect you to be there. You will respond to member messages within a reasonable time and keep your Offer&apos;s content and channels active.</li>
              <li><strong>Inactive or abandoned Offers.</strong> If you stop delivering what you promised, for example by not posting and not answering members for 30 days, we may pause new sales, tell your members, refund or cancel active subscriptions, and remove the Offer. Where we refund members because you stopped delivering, the refunded Creator Earnings are recovered from you in the usual way.</li>
              <li><strong>Quality and removal from discovery.</strong> We may remove an Offer from the discovery feed, or decline to feature it, where it is incomplete, inactive, receives repeated member complaints, or does not meet the standards in this Agreement. This does not affect your existing Subscribers.</li>
              <li><strong>Proof of qualifications.</strong> We may ask you at any time to prove a qualification, certification or claim you display. If you do not provide it within 14 days, we may remove the claim, the Offer, or both.</li>
              <li><strong>Pricing.</strong> You set your own prices. Sage may apply a technical minimum price where a lower price would not cover the payment processing costs of the transaction, and may set the currencies available.</li>
              <li><strong>Public statements.</strong> After this Agreement ends, neither of us will make false or misleading public statements about the other. Honest opinion is fine; invented facts are not.</li>
            </ul>
          </LegalSection>

          <LegalSection title="15. Indemnification">
            <p>You will indemnify and hold Sage harmless against any claims, losses, damages and reasonable costs (including legal fees) arising from your Content, your Offers, your breach of this Agreement, your breach of law, or your dealings with Subscribers.</p>
          </LegalSection>

          <LegalSection title="16. Limitation of liability">
            <p>To the maximum extent permitted by law, Sage is not liable for indirect or consequential losses, or for lost profits or lost earnings. Sage&apos;s total liability to you under this Agreement is limited to <strong>the greater of $500 and</strong> the total platform fees Sage retained from your sales in the three (3) months before the event giving rise to the claim.</p>
            <ul>
              <li>Nothing in this Agreement limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited or excluded by law.</li>
            </ul>
          </LegalSection>

          <LegalSection title="17. Data protection">
            <p>Each party will comply with applicable data-protection law, including the GDPR, in handling personal data. Sage processes Subscriber and Creator data in accordance with the Sage Privacy Policy. Your obligations in respect of Subscriber contact details are set out in Section 9.</p>
          </LegalSection>

          <LegalSection title="18. Changes to this Agreement">
            <ul>
              <li><strong>Notice.</strong> We may change this Agreement. We will give you <strong>at least 15 days&apos; notice</strong> before a change takes effect, by email and in the app, in a form you can keep. Where a change would require you to make technical or commercial adaptations, the notice period will be longer and proportionate. You may terminate this Agreement at any time before the change takes effect, free of charge. Continuing to use Sage after it takes effect means you accept it.</li>
              <li><strong>No retroactive changes.</strong> Changes apply only from the date they take effect. They do not change the fees, terms or rights that applied to transactions completed before that date.</li>
              <li><strong>Shorter notice.</strong> A shorter notice period may apply only where a change is required by law, or to address an immediate danger to users, Sage or third parties, such as fraud, malware or a security incident.</li>
              <li>Each version is identified by a version number and effective date; we keep a record of the version you accepted.</li>
            </ul>
          </LegalSection>

          <LegalSection title="19. Complaints">
            <p>If you have a complaint, write to us at contact@sageacademy.app and we will answer within 15 working days. Sage is a small business (fewer than 50 staff and under €10 million turnover), so under Regulation (EU) 2019/1150 it is not required to operate a formal internal complaint-handling system or to name mediators. We will still try, in good faith, to resolve any dispute with you directly before either of us goes to court.</p>
          </LegalSection>

          <LegalSection title="20. Governing law &amp; disputes">
            <p>This Agreement is governed by the laws of <strong>Romania</strong>. The courts of <strong>Bucharest, Romania</strong> have exclusive jurisdiction over any dispute, without prejudice to any mandatory consumer-protection rights you may have where you live. <strong>Talk to us first.</strong> Before starting any formal proceeding, you agree to raise the issue with Sage in writing (at contact@sageacademy.app) and allow 30 days to resolve it in good faith.</p>
          </LegalSection>

          <LegalSection title="21. General">
            <p>This Agreement, together with the documents it refers to (the Sage Terms of Service, the Privacy Policy, the Community Guidelines and Stripe&apos;s Connected Account Agreement), is the entire agreement between us on this subject. If any provision is unenforceable, the rest remains in force. You may not assign this Agreement without our consent; we may assign it to a group company or successor. Notices to you may be given in-app or by email.</p>
          </LegalSection>

          <LegalSection title="Acceptance">
            <p>You accept this Agreement electronically when you tick <strong>&quot;I have read and agree to the Sage Creator Agreement&quot;</strong> and submit your creator application. Sage records the version accepted, the date and time, and your account identity as evidence of acceptance. This electronic acceptance has the same effect as a signature.</p>
            <p>On behalf of Sage: <strong>Friday Technologies SRL</strong> (Bucharest, Romania; J40/11353/2022; CUI 46304555).</p>
            <p>---</p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
