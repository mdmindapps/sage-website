"use client";

import { useEffect, useRef } from "react";

/* Sage Creators Program — standalone affiliate landing page.
   Ported verbatim from docs/CREATORS_PAGE.html. HTML + inline CSS are kept
   intact via dangerouslySetInnerHTML so the original design tokens, media
   queries (prefers-color-scheme, prefers-reduced-motion), and SVG markup
   render exactly as authored. The <script>-driven reveal animation is
   re-implemented as a scoped useEffect below. */

const CSS = `
  :root {
    --paper: #F1F6F6;
    --card: #FFFFFF;
    --ink: #0C1618;
    --ink-soft: #46585B;
    --line: #D8E4E4;
    --line-soft: #E6EEEE;
    --teal: #0E93A4;
    --teal-deep: #0A6E7B;
    --teal-wash: #E4F1F2;
    --gold: #B67E23;
    --gold-wash: #F6ECD8;
    --radius: 16px;
    --shadow: 0 1px 2px rgba(12,22,24,.04), 0 12px 32px -18px rgba(12,22,24,.18);
    --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
    --mono: ui-monospace, "SF Mono", "Cascadia Code", "Roboto Mono", Menlo, monospace;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --paper: #08110F; --card: #0F1D1C; --ink: #E8F1F0; --ink-soft: #90A4A5;
      --line: #1D2E2D; --line-soft: #172625; --teal: #1FB4C6; --teal-deep: #7FD6DF;
      --teal-wash: #102B2E; --gold: #E0B356; --gold-wash: #241E12;
      --shadow: 0 1px 2px rgba(0,0,0,.3), 0 16px 40px -22px rgba(0,0,0,.6);
    }
  }
  :root[data-theme="light"] {
    --paper: #F1F6F6; --card: #FFFFFF; --ink: #0C1618; --ink-soft: #46585B;
    --line: #D8E4E4; --line-soft: #E6EEEE; --teal: #0E93A4; --teal-deep: #0A6E7B;
    --teal-wash: #E4F1F2; --gold: #B67E23; --gold-wash: #F6ECD8;
    --shadow: 0 1px 2px rgba(12,22,24,.04), 0 12px 32px -18px rgba(12,22,24,.18);
  }
  :root[data-theme="dark"] {
    --paper: #08110F; --card: #0F1D1C; --ink: #E8F1F0; --ink-soft: #90A4A5;
    --line: #1D2E2D; --line-soft: #172625; --teal: #1FB4C6; --teal-deep: #7FD6DF;
    --teal-wash: #102B2E; --gold: #E0B356; --gold-wash: #241E12;
    --shadow: 0 1px 2px rgba(0,0,0,.3), 0 16px 40px -22px rgba(0,0,0,.6);
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); line-height: 1.65; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 0 24px; }
  .top { display: flex; align-items: center; justify-content: space-between; padding: 22px 0; }
  .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.25rem; letter-spacing: -.02em; }
  .brand .mark { width: 27px; height: 27px; display: block; }
  .tag-pill { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; color: var(--teal-deep); background: var(--teal-wash); padding: 5px 10px; border-radius: 999px; }
  .hero { padding: 40px 0 30px; }
  .eyebrow { font-size: .74rem; font-weight: 700; text-transform: uppercase; letter-spacing: .16em; color: var(--teal-deep); margin: 0 0 18px; }
  h1 { font-size: clamp(2.3rem, 5.6vw, 3.75rem); line-height: 1.04; font-weight: 800; letter-spacing: -.035em; text-wrap: balance; margin: 0 0 22px; max-width: 16ch; }
  h1 .em { color: var(--teal); }
  .lead { font-size: 1.15rem; color: var(--ink-soft); max-width: 56ch; margin: 0 0 26px; }
  .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px; }
  .chip { font-size: .9rem; font-weight: 650; padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line); background: var(--card); }
  .chip.gold { color: var(--gold); border-color: color-mix(in srgb, var(--gold) 35%, var(--line)); background: var(--gold-wash); }
  .cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 16px; }
  .btn { display: inline-flex; align-items: center; gap: 8px; background: var(--teal); color: #fff; font-family: inherit; font-size: 1rem; font-weight: 700; padding: 13px 22px; border-radius: 12px; text-decoration: none; border: 0; transition: transform .15s ease, background .15s ease; }
  .btn:hover { background: var(--teal-deep); transform: translateY(-1px); }
  .btn:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }
  .trust-micro { font-size: .9rem; color: var(--ink-soft); }
  .trust-micro strong { color: var(--ink); font-weight: 700; }
  section { padding: 44px 0; border-top: 1px solid var(--line-soft); }
  h2 { font-size: clamp(1.5rem, 3.4vw, 2.05rem); font-weight: 800; letter-spacing: -.025em; text-wrap: balance; margin: 0 0 8px; }
  .sec-lead { color: var(--ink-soft); max-width: 58ch; margin: 0 0 30px; }
  .steps { display: grid; gap: 16px; grid-template-columns: repeat(2, 1fr); }
  .step { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 22px; box-shadow: var(--shadow); }
  .step .n { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 9px; background: var(--teal-wash); color: var(--teal-deep); font-weight: 800; font-size: .95rem; margin-bottom: 14px; font-variant-numeric: tabular-nums; }
  .step h3 { font-size: 1.12rem; font-weight: 750; margin: 0 0 6px; letter-spacing: -.01em; }
  .step p { margin: 0; color: var(--ink-soft); font-size: .98rem; }
  .tagline { margin-top: 14px; font-family: var(--mono); font-size: .82rem; color: var(--teal-deep); background: var(--teal-wash); border: 1px dashed color-mix(in srgb, var(--teal) 40%, var(--line)); padding: 8px 11px; border-radius: 9px; display: inline-block; }
  .tagline .k { opacity: .7; }
  .how-track { margin-top: 20px; background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 20px 24px; font-size: 1rem; color: var(--ink-soft); line-height: 1.6; }
  .how-track strong { color: var(--ink); font-weight: 750; }
  .trust-grid { display: grid; gap: 16px; grid-template-columns: repeat(3, 1fr); }
  .tcard { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); padding: 22px; }
  .tcard .ic { width: 34px; height: 34px; margin-bottom: 12px; color: var(--teal); }
  .tcard h3 { font-size: 1.05rem; font-weight: 750; margin: 0 0 6px; }
  .tcard p { margin: 0; color: var(--ink-soft); font-size: .95rem; }
  .deal { background: var(--card); border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
  .deal-row { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; padding: 18px 24px; border-top: 1px solid var(--line-soft); }
  .deal-row:first-child { border-top: 0; }
  .deal-row .lbl { font-size: .8rem; text-transform: uppercase; letter-spacing: .1em; color: var(--ink-soft); font-weight: 700; }
  .deal-row .val { font-size: 1.15rem; font-weight: 750; text-align: right; }
  .deal-row .val.big { font-size: 1.5rem; color: var(--gold); font-variant-numeric: tabular-nums; }
  .deal-note { font-size: .85rem; color: var(--ink-soft); margin: 14px 2px 0; }
  .fit p { color: var(--ink-soft); max-width: 60ch; }
  .fit-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; padding: 0; list-style: none; }
  .fit-list li { font-size: .92rem; font-weight: 600; padding: 7px 13px; border-radius: 999px; background: var(--card); border: 1px solid var(--line); }
  .close { text-align: center; background: var(--teal-wash); border: 1px solid color-mix(in srgb, var(--teal) 25%, var(--line)); border-radius: 22px; padding: 44px 24px; margin: 8px 0 0; }
  .close h2 { margin-bottom: 12px; }
  .close p { color: var(--ink-soft); max-width: 46ch; margin: 0 auto 24px; }
  footer { padding: 40px 0 60px; color: var(--ink-soft); font-size: .85rem; display: flex; flex-wrap: wrap; gap: 6px 18px; justify-content: space-between; align-items: center; border-top: 1px solid var(--line-soft); margin-top: 20px; }
  footer a { color: var(--ink-soft); }
  .reveal { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in { opacity: 1; transform: none; }
  @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } .btn:hover { transform: none; } }
  @media (max-width: 680px) { .steps, .trust-grid { grid-template-columns: 1fr; } .deal-row { flex-direction: column; gap: 4px; } .deal-row .val { text-align: left; } }
`;

const BODY_HTML = `
<h2 class="sr-only">Sage Creators Program — earn 25% recurring commission for referring subscribers, with independent, transparent tracking.</h2>
<div class="wrap">
  <header class="top">
    <div class="brand">
      <svg class="mark" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="sageGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6FD8DE"/><stop offset="0.5" stop-color="#16B5BE"/><stop offset="1" stop-color="#0B7C8C"/></linearGradient></defs><g transform="rotate(-32 50 50)"><circle cx="50" cy="50" r="36" fill="none" stroke="url(#sageGrad)" stroke-width="9" stroke-linecap="round" stroke-dasharray="205 32"/></g></svg>
      Sage
    </div>
    <span class="tag-pill">Creators Program</span>
  </header>
  <div class="hero">
    <p class="eyebrow">Partner with Sage</p>
    <h1>Coach your audience to real results — and <span class="em">earn for a full year.</span></h1>
    <p class="lead">Share Sage with the people who trust you. Every subscriber you bring earns you <strong>25% of every payment</strong> — recurring, for up to 12 months. Tracked independently, paid on confirmed subscriptions.</p>
    <div class="chips">
      <span class="chip gold">25% recurring</span>
      <span class="chip">Up to 12 months</span>
      <span class="chip">Your own live dashboard</span>
    </div>
    <div class="cta-row">
      <a class="btn" href="mailto:contact@sageacademy.app?subject=Sage%20Creators%20Program">Become a creator
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
      <span class="trust-micro">Attribution runs on <strong>RevenueCat + Insert Affiliate</strong> — not on our word.</span>
    </div>
  </div>
  <section class="reveal">
    <h2>How it works</h2>
    <p class="sec-lead">Four steps, and your audience never has to type a thing. The referral is captured automatically the moment they install.</p>
    <div class="steps">
      <div class="step"><span class="n">1</span><h3>Share your link</h3><p>You get a unique Sage link. Drop it in your bio, video description, or story.</p></div>
      <div class="step"><span class="n">2</span><h3>They install Sage</h3><p>The moment someone installs through your link, Sage quietly tags them to you.</p><span class="tagline"><span class="k">referred_by:</span> your-code</span></div>
      <div class="step"><span class="n">3</span><h3>They subscribe</h3><p>When they start a paid plan, RevenueCat — the billing system — reads that tag.</p></div>
      <div class="step"><span class="n">4</span><h3>You earn 25%</h3><p>Your commission is credited and shown live in your own dashboard. We pay out on confirmed subscriptions.</p></div>
    </div>
    <p class="how-track"><strong>How it's actually tracked</strong> — no magic, just a clean chain: your link carries a code that's uniquely yours. The moment someone installs and opens Sage, the app captures that code automatically — no cookies, nothing for them to type. They're then linked to you inside the billing system (RevenueCat), so every payment they make is reported with your code attached, and your commission is credited automatically. Captured once, it never expires — and you watch every referral live in your dashboard.</p>
  </section>
  <section class="reveal">
    <p class="eyebrow">No black boxes</p>
    <h2>Why you can trust the numbers</h2>
    <p class="sec-lead">The hardest part of any affiliate deal is knowing you'll actually get paid. So we built this on tracking you can verify yourself — not a spreadsheet you have to take on faith.</p>
    <div class="trust-grid">
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><h3>Independent tracking</h3><p>Referrals are recorded server-side by RevenueCat and Insert Affiliate — established, neutral tools. Not something we can quietly change.</p></div>
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 10h18M8 21h8"/></svg><h3>Your own dashboard</h3><p>Log in any time to see installs, subscribers, and exactly what you've earned — in real time. You watch your numbers, not ours.</p></div>
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><h3>Paid on real subscriptions</h3><p>Commission is confirmed after the refund window, so what you see is money that's truly yours — no clawbacks, no surprises.</p></div>
    </div>
  </section>
  <section class="reveal">
    <h2>The deal</h2>
    <p class="sec-lead">Simple and generous, with no discount required from your audience — they subscribe at the normal price, you still earn.</p>
    <div class="deal">
      <div class="deal-row"><span class="lbl">Commission</span><span class="val big">25%</span></div>
      <div class="deal-row"><span class="lbl">Duration per subscriber</span><span class="val">Up to 12 months</span></div>
      <div class="deal-row"><span class="lbl">Referral window</span><span class="val">No expiry — credited whenever they subscribe</span></div>
      <div class="deal-row"><span class="lbl">Paid on</span><span class="val">Confirmed subscriptions</span></div>
      <div class="deal-row"><span class="lbl">Recurring</span><span class="val">Yes — every payment, not just the first</span></div>
    </div>
    <p class="deal-note">And your 25% beats what the stores take — Apple &amp; Google keep 15% today, rising to 30% as we scale past $1M.</p>
  </section>
  <section class="reveal">
    <h2>How you get paid</h2>
    <p class="sec-lead">The payout side is as clean as the tracking side — no chasing invoices, no guessing when the money lands.</p>
    <div class="trust-grid">
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></svg><h3>Paid through Stripe</h3><p>Connect your Stripe account once, and commissions land there directly. Stripe is free to set up in most countries.</p></div>
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M13 3v6h6M9 14h6M9 17h4"/></svg><h3>Invoices handled for you</h3><p>We generate the billing paperwork automatically, so payouts stay clean on both sides — nothing for you to create.</p></div>
      <div class="tcard"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2.5"/><path d="M3 9h18M8 2v4M16 2v4"/></svg><h3>Paid weekly</h3><p>We pay every week, on commissions that have cleared a short confirmation window — so what you receive is money that's truly yours.</p></div>
    </div>
    <p class="deal-note">You're responsible for declaring your earnings in your own country, the same as any creator income — we handle the payout paperwork on our side.</p>
  </section>
  <section class="reveal fit">
    <h2>Who Sage is for</h2>
    <p>Sage is an AI fitness coach built for people who want to do the work, not chase shortcuts. It lands best with audiences who already care about training, discipline, and steady progress — so your recommendation feels like a genuine tool you'd use, not an ad.</p>
    <ul class="fit-list"><li>Fitness &amp; training</li><li>Nutrition &amp; habits</li><li>Discipline &amp; self-improvement</li><li>Wellness &amp; mindset</li></ul>
  </section>
  <div class="close reveal">
    <h2>Ready to bring Sage to your audience?</h2>
    <p>Tell us where you create and roughly the size of your audience. We'll set up your link and dashboard.</p>
    <a class="btn" href="mailto:contact@sageacademy.app?subject=Sage%20Creators%20Program">Become a creator
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  </div>
  <footer><span>©️ Sage · AI Fitness Coach</span><span>contact@sageacademy.app</span></footer>
</div>
`;

export default function CreatorsPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".reveal");

    // If IntersectionObserver isn't available or the user prefers reduced motion,
    // reveal everything immediately (matches the source page's behavior).
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div ref={rootRef} dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
