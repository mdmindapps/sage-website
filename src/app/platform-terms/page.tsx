/* Sage Platform Terms — selling & buying on Sage (the creator marketplace: coaches sell 1:1 coaching +
   communities, 80/20). Separate from the affiliate Creator Program terms (/creator-terms) and the app
   terms (/terms). Same design tokens as /creator-terms, rendered via dangerouslySetInnerHTML. */

const CSS = `
  :root {
    --paper:#F1F6F6; --card:#FFFFFF; --ink:#0C1618; --ink-soft:#46585B;
    --line:#D8E4E4; --line-soft:#E6EEEE; --teal:#0E93A4; --teal-deep:#0A6E7B; --teal-wash:#E4F1F2;
    --gold:#B67E23; --gold-wash:#F6ECD8; --radius:16px;
    --shadow:0 1px 2px rgba(12,22,24,.04),0 12px 32px -18px rgba(12,22,24,.18);
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  }
  @media (prefers-color-scheme: dark){:root{--paper:#08110F;--card:#0F1D1C;--ink:#E8F1F0;--ink-soft:#90A4A5;--line:#1D2E2D;--line-soft:#172625;--teal:#1FB4C6;--teal-deep:#7FD6DF;--teal-wash:#102B2E;--gold:#E0B356;--gold-wash:#241E12;--shadow:0 1px 2px rgba(0,0,0,.3),0 16px 40px -22px rgba(0,0,0,.6);}}
  :root[data-theme="light"]{--paper:#F1F6F6;--card:#FFFFFF;--ink:#0C1618;--ink-soft:#46585B;--line:#D8E4E4;--line-soft:#E6EEEE;--teal:#0E93A4;--teal-deep:#0A6E7B;--teal-wash:#E4F1F2;--gold:#B67E23;--gold-wash:#F6ECD8;}
  :root[data-theme="dark"]{--paper:#08110F;--card:#0F1D1C;--ink:#E8F1F0;--ink-soft:#90A4A5;--line:#1D2E2D;--line-soft:#172625;--teal:#1FB4C6;--teal-deep:#7FD6DF;--teal-wash:#102B2E;--gold:#E0B356;--gold-wash:#241E12;}
  *{box-sizing:border-box;}
  body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.65;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:760px;margin:0 auto;padding:0 24px;}
  .top{display:flex;align-items:center;justify-content:space-between;padding:22px 0;}
  .brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.25rem;letter-spacing:-.02em;}
  .brand .mark{width:27px;height:27px;display:block;}
  .tag-pill{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--teal-deep);background:var(--teal-wash);padding:5px 10px;border-radius:999px;}
  .head{padding:32px 0 8px;}
  h1{font-size:clamp(1.9rem,4.5vw,2.6rem);line-height:1.08;font-weight:800;letter-spacing:-.03em;margin:0 0 12px;}
  .lead{font-size:1.05rem;color:var(--ink-soft);margin:0 0 8px;}
  .sec{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--teal-deep);margin:34px 4px 0;}
  .card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);padding:8px 28px;margin:12px 0 4px;}
  .term{padding:22px 0;border-top:1px solid var(--line-soft);}
  .term:first-child{border-top:0;}
  .term h2{font-size:1.05rem;font-weight:750;margin:0 0 6px;display:flex;align-items:baseline;gap:10px;letter-spacing:-.01em;}
  .term h2 .n{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;border-radius:8px;background:var(--teal-wash);color:var(--teal-deep);font-weight:800;font-size:.85rem;font-variant-numeric:tabular-nums;}
  .term p{margin:0;color:var(--ink-soft);font-size:.98rem;}
  .term strong{color:var(--ink);}
  .note{font-size:.85rem;color:var(--ink-soft);background:var(--gold-wash);border:1px solid color-mix(in srgb,var(--gold) 30%,var(--line));border-radius:12px;padding:14px 18px;margin:24px 0;}
  footer{padding:28px 0 60px;color:var(--ink-soft);font-size:.85rem;display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:space-between;border-top:1px solid var(--line-soft);margin-top:8px;}
  footer a{color:var(--teal-deep);}
`;

const BODY_HTML = `
<div class="wrap">
  <header class="top">
    <div class="brand">
      <svg class="mark" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="sageGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6FD8DE"/><stop offset="0.5" stop-color="#16B5BE"/><stop offset="1" stop-color="#0B7C8C"/></linearGradient></defs><g transform="rotate(-32 50 50)"><circle cx="50" cy="50" r="36" fill="none" stroke="url(#sageGrad)" stroke-width="9" stroke-linecap="round" stroke-dasharray="205 32"/></g></svg>
      Sage
    </div>
    <span class="tag-pill">Platform Terms</span>
  </header>

  <div class="head">
    <h1>Selling &amp; Buying on Sage</h1>
    <p class="lead">Sage lets creators — coaches, trainers, nutritionists, and other experts — sell 1-on-1 coaching and communities directly to their audience. Sage provides the tools, the app, and the payments; the creator provides the coaching. By selling on Sage, or by subscribing to a creator, you agree to these terms.</p>
  </div>

  <p class="sec">For creators (selling on Sage)</p>
  <div class="card">
    <div class="term"><h2><span class="n">1</span>What Sage is for you</h2><p>Sage is a platform to run and sell your own coaching (1-on-1) and communities. You deliver the service and set your own prices; we handle the software, the storefront, and the payments.</p></div>
    <div class="term"><h2><span class="n">2</span>Your earnings and our fee</h2><p>You keep <strong>80% of every payment</strong> from your subscribers. Sage keeps a <strong>20% platform fee</strong> (which also covers payment processing). This applies to subscriptions, memberships, tips, and any paid content.</p></div>
    <div class="term"><h2><span class="n">3</span>Getting paid</h2><p>Payouts run through Stripe to your connected account, <strong>weekly</strong>, after a short clearing window (about 7 days) that protects against fraud and chargebacks. You must complete Stripe's payout setup before you can be paid.</p></div>
    <div class="term"><h2><span class="n">4</span>Chargebacks and refunds</h2><p>If a payment you've received is later refunded or charged back, that amount (your share) is <strong>deducted from your current or upcoming earnings</strong>. If your balance goes negative, we may recover the difference, including from your connected payout account. This is why we hold each payout for a few days before releasing it.</p></div>
    <div class="term"><h2><span class="n">5</span>Refund policy</h2><p>Payments are <strong>non-refundable by default</strong>. You may choose to grant a refund to your own subscriber at your discretion. Sage may issue a refund where the law requires it, or in cases of fraud or abuse.</p></div>
    <div class="term"><h2><span class="n">6</span>Invoicing (self-billing)</h2><p>To keep things simple, <strong>you authorise Sage to issue invoices on your behalf</strong> (self-billing) for the amounts you earn, and you agree not to issue your own invoices for those same amounts. You can view and download these invoices in the app.</p></div>
    <div class="term"><h2><span class="n">7</span>Taxes</h2><p>You are an <strong>independent business, responsible for declaring and paying your own taxes</strong> (income tax, and VAT/GST if you're registered) in your own country. Sage handles the sales tax/VAT charged to the end customer as the merchant of record.</p></div>
    <div class="term"><h2><span class="n">8</span>Your responsibilities</h2><p>Deliver what you promise to your subscribers. Don't make medical claims or guarantee specific results. Keep your content and conduct legal, honest, and respectful. Your content stays yours — you keep full ownership and creative control.</p></div>
    <div class="term"><h2><span class="n">9</span>Moderation and removal</h2><p>Sage may remove content, restrict features, suspend, or remove a creator who breaks these terms, commits fraud, or abuses the platform or its members.</p></div>
    <div class="term"><h2><span class="n">10</span>Independent relationship</h2><p>You are an independent creator — not an employee, partner, or agent of Sage.</p></div>
    <div class="term"><h2><span class="n">11</span>Ending</h2><p>Either side can end this at any time. Earnings that have already cleared will still be paid. If we end it because of a breach (for example, fraud), pending unconfirmed earnings may be voided.</p></div>
  </div>

  <p class="sec">For members (subscribing to a creator)</p>
  <div class="card">
    <div class="term"><h2><span class="n">1</span>What you're getting</h2><p>You're subscribing to a specific creator's coaching or community. <strong>The creator — not Sage — provides that service.</strong> Sage is the platform and the merchant of record for the payment.</p></div>
    <div class="term"><h2><span class="n">2</span>Billing</h2><p>Subscriptions renew automatically until you cancel. You can cancel anytime; your access continues until the end of the period you've paid for.</p></div>
    <div class="term"><h2><span class="n">3</span>Refunds</h2><p>Payments are <strong>non-refundable by default</strong>. A creator may grant a refund at their discretion, and we'll issue one where the law requires it.</p></div>
    <div class="term"><h2><span class="n">4</span>No guarantees</h2><p>Fitness and health results are never guaranteed, and nothing here is medical advice. Talk to a doctor before making major changes.</p></div>
    <div class="term"><h2><span class="n">5</span>Conduct</h2><p>Follow each community's rules. We may remove members who are abusive or break the rules.</p></div>
    <div class="term"><h2><span class="n">6</span>Changes</h2><p>We may update these terms and will let active creators and members know of anything material.</p></div>
  </div>

  <p class="note">Questions about anything here? Reach out any time — we're happy to walk you through it.</p>

  <footer>
    <span>©️ Sage · AI Fitness Coach</span>
    <span><a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a></span>
  </footer>
</div>
`;

export default function PlatformTermsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
