/* Sage — Creator Guide. Standalone reference page (own chrome; /become-a-coach/*
   is already standalone in SiteChrome). Ported from the approved mockup; scoped
   under .cguide, Inter via var(--font-inter), images in /public/images/coach. */

const CSS = `
  .cguide{
    --cream:#FBF7EE; --surface:#F5F1EA; --white:#FFFFFF;
    --ink:#11181C; --muted:#5A6672; --subtle:#98A2AC; --border:#ECEEF0;
    --teal:#0E9AAE; --tealD:#0B8296; --tealWash:#E4F2F3;
    --shadow:0 1px 2px rgba(17,24,28,.04),0 12px 30px -16px rgba(17,24,28,.16);
    --font:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    background:var(--cream);color:var(--ink);font-family:var(--font);font-weight:500;line-height:1.6;
    -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
  }
  .cguide *{box-sizing:border-box}
  .cguide img{max-width:100%;display:block}
  .cguide h1,.cguide h2,.cguide h3,.cguide h4{color:var(--ink);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0}
  .cguide a{color:var(--tealD)}
  .cguide .wrap{max-width:1160px;margin:0 auto;padding:0 clamp(20px,4vw,40px)}

  .cguide .nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--cream) 92%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
  .cguide .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
  .cguide .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
  .cguide .brand .mark{width:28px;height:28px}
  .cguide .brand span{font-weight:800;font-size:19px;letter-spacing:-.02em}
  .cguide .btn{display:inline-flex;align-items:center;height:38px;padding:0 18px;border-radius:999px;background:var(--teal);color:#fff;font-weight:600;font-size:14px;text-decoration:none}

  .cguide .ghead{padding:clamp(40px,6vw,68px) 0 clamp(24px,3vw,34px);border-bottom:1px solid var(--border)}
  .cguide .eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--tealD);font-weight:700;margin:0 0 16px}
  .cguide .ghead h1{font-size:clamp(34px,5.4vw,52px);line-height:1.02;letter-spacing:-.03em}
  .cguide .ghead p{font-size:18px;color:var(--muted);max-width:60ch;margin:16px 0 0}

  .cguide .gbanner{position:relative;margin:22px 0 0;border-radius:20px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
  .cguide .gbanner img{width:100%;height:min(330px,40vh);object-fit:cover}
  .cguide .gdiv{position:relative;margin:32px 0 6px;border-radius:16px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
  .cguide .gdiv img{width:100%;height:min(230px,30vh);object-fit:cover}
  .cguide .gbanner .tint,.cguide .gdiv .tint{position:absolute;inset:0;background:linear-gradient(150deg,color-mix(in srgb,var(--teal) 12%,transparent),transparent 52%);mix-blend-mode:multiply;pointer-events:none}

  .cguide .layout{display:grid;grid-template-columns:1fr;gap:clamp(28px,4vw,52px);padding:clamp(30px,4vw,48px) 0 80px}
  @media(min-width:900px){.cguide .layout{grid-template-columns:230px 1fr}}
  .cguide .toc{display:none}
  @media(min-width:900px){.cguide .toc{display:block;align-self:start;position:sticky;top:86px}}
  .cguide .toc p{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--subtle);font-weight:700;margin:0 0 12px}
  .cguide .toc a{display:block;font-size:14px;font-weight:600;color:var(--muted);text-decoration:none;padding:7px 0;border-left:2px solid var(--border);padding-left:14px;transition:color .15s,border-color .15s}
  .cguide .toc a:hover{color:var(--ink);border-color:var(--teal)}

  .cguide .main{min-width:0}
  .cguide section{padding-top:14px;margin-top:34px;border-top:1px solid var(--border);scroll-margin-top:80px}
  .cguide section:first-child{border-top:0;margin-top:0}
  .cguide .snum{font-size:13px;font-weight:800;color:var(--teal);letter-spacing:.06em}
  .cguide h2{font-size:clamp(24px,3.3vw,32px);letter-spacing:-.025em;margin:6px 0 0}
  .cguide .slead{font-size:16.5px;color:var(--muted);margin:12px 0 0;max-width:64ch}
  .cguide h3{font-size:17px;font-weight:800;margin:26px 0 0;letter-spacing:-.01em}
  .cguide .sub p{font-size:15px;color:var(--muted);margin:8px 0 0;max-width:64ch}
  .cguide ul{margin:12px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px}
  .cguide ul li{position:relative;padding-left:24px;font-size:15px;color:var(--muted);line-height:1.5}
  .cguide ul li::before{content:"";position:absolute;left:2px;top:9px;width:7px;height:7px;border-radius:2px;background:var(--teal)}
  .cguide ul li b{color:var(--ink);font-weight:700}
  .cguide .chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}
  .cguide .chips span{font-size:12.5px;font-weight:700;color:var(--tealD);background:var(--tealWash);border-radius:999px;padding:5px 11px}

  .cguide .steps{display:flex;flex-direction:column;gap:12px;margin-top:22px;counter-reset:s}
  .cguide .step{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:18px 20px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;box-shadow:var(--shadow)}
  .cguide .step .sn{counter-increment:s;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:var(--tealWash);color:var(--tealD);font-weight:800;font-size:15px;flex:none}
  .cguide .step .sn::before{content:counter(s)}
  .cguide .shead{display:flex;align-items:baseline;gap:11px;flex-wrap:wrap}
  .cguide .step h4{font-size:16.5px;font-weight:800}
  .cguide .min{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--subtle)}
  .cguide .step p{margin:5px 0 0;font-size:14.5px;color:var(--muted);line-height:1.5}
  .cguide .note{margin:20px 0 0;background:var(--tealWash);border:1px solid color-mix(in srgb,var(--teal) 22%,transparent);border-radius:14px;padding:15px 18px;font-size:15px;color:var(--ink);font-weight:600}
  .cguide .note b{color:var(--tealD)}
`;

const HTML = `
<nav class="nav">
  <div class="wrap">
    <a class="brand" href="/"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#0E9AAE"/><path d="M 51.07 25.99 A 20 20 0 1 1 38.01 12.93" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/></svg><span>Sage</span></a>
    <a class="btn" href="/become-a-coach#apply">Become a creator</a>
  </div>
</nav>

<header class="ghead">
  <div class="wrap">
    <p class="eyebrow">Sage · Creator Guide</p>
    <h1>Everything you need to run it.</h1>
    <p>From your first client to mastering every tool — the complete reference for coaching on Sage. In easy steps, always up to date.</p>
  </div>
</header>

<div class="wrap"><figure class="gbanner"><img src="/images/coach/guide-header.jpg" alt="A coach working with a client" width="1600" height="720" loading="eager"><span class="tint"></span></figure></div>

<div class="wrap">
  <div class="layout">
    <aside class="toc">
      <p>On this page</p>
      <a href="#quickstart">Quick-Start</a>
      <a href="#approved">01 · Get approved</a>
      <a href="#offer">02 · Build your offer</a>
      <a href="#paid">03 · Get paid</a>
      <a href="#deliver">04 · Coach &amp; deliver</a>
      <a href="#discovered">05 · Get discovered</a>
    </aside>

    <main class="main">
      <section id="quickstart">
        <h2>Quick-Start — your first client, fast</h2>
        <p class="slead">You're approved. Five steps to go live and land your first sale — most creators are done in about twenty minutes.</p>
        <div class="steps">
          <div class="step"><div class="sn"></div><div><div class="shead"><h4>Set up your profile</h4><span class="min">~3 min</span></div><p>Add an avatar, your name, a short bio, and pick your @handle — it lives in every link you share.</p></div></div>
          <div class="step"><div class="sn"></div><div><div class="shead"><h4>Create your offer</h4><span class="min">~7 min</span></div><p>Start with 1:1 Coaching or a Community. Give it a title, a short pitch, and set your price / month. Don't over-polish — edit anytime.</p></div></div>
          <div class="step"><div class="sn"></div><div><div class="shead"><h4>Turn on payouts</h4><span class="min">~5 min</span></div><p>Connect Stripe (identity + bank), then confirm your billing details — that switches your payouts on.</p></div></div>
          <div class="step"><div class="sn"></div><div><div class="shead"><h4>Go live</h4><span class="min">~1 min</span></div><p>Flip Go live on your offer (needs a price + connected payouts). Now you show up in Discovery.</p></div></div>
          <div class="step"><div class="sn"></div><div><div class="shead"><h4>Share your link</h4><span class="min">~2 min</span></div><p>Your first clients come from your own audience. Post your link — sageacademy.app/@you — in your bio and stories.</p></div></div>
        </div>
        <p class="note">That's it — you're open. Every sale lands in <b>Revenue</b>, you're paid <b>weekly, on Mondays</b>, and Sage issues the invoice for you.</p>
      </section>

      <figure class="gdiv"><img src="/images/coach/guide-community.jpg" alt="A coach leading a group class" width="1600" height="560" loading="lazy"><span class="tint"></span></figure>

      <section id="approved">
        <p class="snum">01</p>
        <h2>Get approved</h2>
        <div class="sub">
          <p>In the <b>Sage app</b>, open <b>Become a creator</b> and apply:</p>
          <ul>
            <li>Your name, a <b>social link</b> (IG / TikTok / YouTube — how we verify you), follower count, email.</li>
            <li>Tick the <b>Creator Agreement</b> — the contract that lets us pay you and issue your invoices.</li>
            <li>Submit. <b>Reviewed by hand</b>; you're notified of the decision — pending / approved / not approved (with a reason + re-apply).</li>
          </ul>
        </div>
      </section>

      <section id="offer">
        <p class="snum">02</p>
        <h2>Build your offer</h2>
        <h3>Creator profile</h3>
        <div class="sub"><p>Shared across every offer: avatar, name, bio (300 chars), social link, and your <b>@handle</b> (checked live — it's in all your links, so changing it breaks old ones).</p></div>
        <h3>1:1 Coaching</h3>
        <div class="sub">
          <p>Your private offer (exactly one), built in three places:</p>
          <ul>
            <li><b>Coaching</b> — channel identity: title, banner, tagline.</li>
            <li><b>Discovery card</b> — how you appear in the list: card banner, title, text.</li>
            <li><b>Sales page</b> — title + tagline, up to 2 categories, search keywords, a gallery, price / month, the pitch, reviews toggle, share link.</li>
          </ul>
          <p>To go live: set a price + connect payouts, then flip <b>Go live</b> — that's what puts you in Discovery.</p>
        </div>
        <h3>Communities</h3>
        <div class="sub"><p>Group offers (run several). Create with a name, then the same three surfaces; priced monthly + annually. Go live needs a price + payouts.</p></div>
        <h3>Pitch editor</h3>
        <div class="sub"><p>Build a page from blocks — Heading, Text, Checklist, Photo, Slider, Video: add, reorder, remove.</p>
          <div class="chips"><span>1:1 = monthly</span><span>Communities = monthly + annual</span><span>Programs = one-time unlock</span><span>+ tips &amp; payment requests</span></div>
        </div>
      </section>

      <section id="paid">
        <p class="snum">03</p>
        <h2>Get paid</h2>
        <h3>Revenue — your money HQ</h3>
        <div class="sub"><ul>
          <li>Earned this month (net of refunds) + <b>% vs last month</b>.</li>
          <li>Balance in Stripe: <b>Coming Monday · Clearing · Paid to your bank</b>.</li>
          <li>By source (Subs · Tips · Requests · PPV) and by offer.</li>
        </ul></div>
        <h3>Analytics</h3>
        <div class="sub"><p><b>MRR</b>, new vs lost clients, churn + avg stay, revenue by source, <b>LTV</b>, fastest-growing offer — over 3 / 6 / 12 months. Plus <b>Top supporters</b> (ranked) and a live <b>Recent activity</b> feed.</p></div>
        <h3>Taxes &amp; invoices</h3>
        <div class="sub"><p>Confirm billing once (that turns on payouts). Sage issues a <b>self-billing invoice per payout</b> — a PDF in Your invoices. Payouts run weekly, on Mondays, with a short fraud hold. You always receive your full 80%.</p></div>
      </section>

      <section id="deliver">
        <p class="snum">04</p>
        <h2>Coach &amp; deliver</h2>
        <h3>1:1 chat</h3>
        <div class="sub"><ul>
          <li>Text, images, <b>files up to 20 MB</b>, voice notes, replies, reactions, edit/delete.</li>
          <li><b>Request payment</b> from the "+" menu — the client pays via Stripe. Clients can also tip.</li>
          <li>Block &amp; report built in.</li>
        </ul></div>
        <h3>Your client's data</h3>
        <div class="sub"><p>When shared: goal + targets, weight trend + 90-day history, macros &amp; meals (with photos), habits + adherence %, measurements. Progress photos are a separate share.</p></div>
        <h3>Programs &amp; Classroom</h3>
        <div class="sub"><ul>
          <li>Programs → Lessons → Blocks (video, text, PDF, image, action).</li>
          <li>Per program: <b>Included</b> or <b>PPV</b> (one-time unlock). Publish when ready.</li>
          <li><b>Action blocks tie to real tracking</b> — log a meal, weigh in, complete a habit — so progress is real.</li>
        </ul></div>
        <h3>Communities</h3>
        <div class="sub"><p>Channels: chat, announcement (pushes to all), challenge. Challenges with an enrollment window + a weight-loss leaderboard. Moderation: Captains, mute, timeout, ban; handle reports.</p></div>
      </section>

      <section id="discovered">
        <p class="snum">05</p>
        <h2>Get discovered</h2>
        <h3>Discovery</h3>
        <div class="sub"><ul>
          <li>Tabs: Personal (coaches) + Communities. <b>Ranked by quality, not time.</b></li>
          <li>Category chips + search (name, title, categories, keywords, bio).</li>
          <li>Earned badges: <b>Top rated</b> (3 reviews, 4.5), <b>Popular</b> (10 active subs), <b>New</b>. No "Verified" to buy.</li>
        </ul>
        <p>To appear: be approved, flip an offer <b>Go live</b>, and set a price + payouts.</p></div>
        <h3>Public surfaces &amp; social proof</h3>
        <div class="sub"><p>Your <b>sales page</b> is what buyers see (preview it); your <b>Profile hub</b> shows the person + every live offer. Turn reviews on, share your links (sageacademy.app/@you), and cross-sell with "Show my other offers."</p></div>
      </section>
    </main>
  </div>
</div>
`;

export default function CreatorGuidePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cguide" dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
