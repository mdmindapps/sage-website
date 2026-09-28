/* Sage — Community Guidelines. The Creator Agreement binds creators to this document in ss.4, 14
   and 21, so it has to exist and it has to say something. Deliberately short: it restates the
   health-and-safety rules already in s.14 in plain language, adds the rules for how people behave
   inside a club, and says how a decision is appealed. Same scaffold as /privacy and /terms. */
import Link from "next/link";

const LAST_UPDATED = "September 28, 2026";

export default function CommunityGuidelinesPage() {
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
            Community Guidelines
          </h1>
          <p className="text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-lg max-w-none text-ink">
          <LegalSection title="1. What Sage is">
            <p>
              Sage is where people track what they eat and how they train, and where coaches run
              clubs and one-to-one coaching around that. Real people are working on their bodies
              here, often after years of failing at it. That is the whole context for everything
              below.
            </p>
            <p>
              These Guidelines apply to everyone: creators, the members of their clubs, and anyone
              using the app. Creators agree to them in the{" "}
              <Link href="/creator-agreement">Sage Creator Agreement</Link>; members agree to them
              in the <Link href="/terms">Terms of Service</Link>.
            </p>
          </LegalSection>

          <LegalSection title="2. Coaching: where the line is">
            <p>
              Coaches on Sage share how they train and eat, and build programs around it. That is
              not the same as practising medicine, and the difference matters.
            </p>
            <p>You may not:</p>
            <ul>
              <li>diagnose, treat, or claim to cure any medical condition;</li>
              <li>prescribe or recommend prescription medication;</li>
              <li>promise a specific medical outcome;</li>
              <li>
                promote extreme calorie restriction, rapid weight-loss claims such as &ldquo;X kg in
                Y days&rdquo;, or fasting protocols for anyone under 18;
              </li>
              <li>
                publish anything that encourages disordered eating, purging, or compensating for
                food with exercise.
              </li>
            </ul>
            <p>
              Your offers must carry a clear notice that your content is general fitness and
              nutrition guidance rather than medical advice, and that members should speak to a
              doctor before starting &mdash; in particular if they are pregnant, recovering from
              illness or injury, or living with a medical condition.
            </p>
            <p>
              If a member tells you about a condition, do not build a program around it. Tell them
              to see a doctor.
            </p>
          </LegalSection>

          <LegalSection title="3. Age">
            <p>
              Sage is for people aged 13 and over. If you are under 18, you should have your
              parent&apos;s or guardian&apos;s permission to use it.
            </p>
            <p>
              <strong>Purchases are for adults.</strong> Paid clubs and one-to-one coaching are sold
              to users aged 18 and over. If you coach someone younger, that arrangement stays
              between you, them and their parent &mdash; it does not run through a Sage account.
            </p>
          </LegalSection>

          <LegalSection title="4. How people behave in a club">
            <p>
              A club is someone&apos;s room. The creator sets its tone, and Sage sets the floor.
              Nobody may:
            </p>
            <ul>
              <li>
                harass, threaten, or demean another member &mdash; including comments about
                someone&apos;s body, weight, or progress photos;
              </li>
              <li>post sexual content, or anything involving a minor in any sexual context;</li>
              <li>
                post hateful content targeting anyone for who they are, or content promoting
                violence or self-harm;
              </li>
              <li>
                sell, promote, or recruit for anything that is not the club&apos;s own offer &mdash;
                including supplements, other coaches, and other platforms;
              </li>
              <li>share another member&apos;s photos, messages, or data outside the club;</li>
              <li>spam, scam, impersonate anyone, or scrape the platform.</li>
            </ul>
            <p>
              Content you post in a club belongs to you, and the club is not a public feed. Treat
              what other people share there as theirs.
            </p>
          </LegalSection>

          <LegalSection title="5. Reporting, and what we do about it">
            <p>
              Any member can report a post or a person from inside the club. Reports go to the
              creator who runs it, and creators can remove posts and remove members from their own
              club. Serious reports come to Sage as well.
            </p>
            <p>
              Sage may remove content, suspend a club, or close an account where these Guidelines
              are broken. We act faster, and without warning, where there is a risk of immediate
              harm &mdash; content involving minors, credible threats, fraud, or anything putting
              someone&apos;s health in danger.
            </p>
            <p>
              Creators are responsible for their own clubs. A club that is repeatedly reported and
              not moderated is a club we will step into.
            </p>
          </LegalSection>

          <LegalSection title="6. If you think we got it wrong">
            <p>
              Write to <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>. Tell us
              what was removed and why you think the decision was wrong. We will give you the reason
              for the decision in writing, and a person will look at it again.
            </p>
            <p>
              Where a creator&apos;s account is restricted or suspended, the Creator Agreement
              (Section 12) sets out the notice and the reasons you are entitled to.
            </p>
          </LegalSection>

          <LegalSection title="7. Changes">
            <p>
              We may update these Guidelines. Where a change affects creators, the notice period in
              Section 18 of the Creator Agreement applies.
            </p>
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
      <div className="space-y-4 text-muted leading-relaxed [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
