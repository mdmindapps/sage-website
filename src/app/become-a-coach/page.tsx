import Footer from "@/components/layout/Footer";

/* Sage — Become a Coach. Standalone recruitment landing (own chrome, like /creators).
   Ported from the approved mockup; scoped CSS injected so the design tokens render
   exactly as authored. Uses the site's Inter (var(--font-inter)) and photos in
   /public/images/coach. Registered as standalone in SiteChrome. */

const CSS = `
  .bcoach{
    --cream:#FBF7EE; --surface:#F5F1EA; --white:#FFFFFF;
    --ink:#11181C; --muted:#5A6672; --subtle:#98A2AC; --border:#ECEEF0;
    --teal:#0E9AAE; --tealD:#0B8296; --success:#2BB573;
    --tealWash:#E4F2F3;
    --shadow:0 1px 2px rgba(17,24,28,.04),0 12px 30px -16px rgba(17,24,28,.16);
    --shadowLg:0 2px 8px rgba(17,24,28,.05),0 34px 70px -34px rgba(11,130,150,.30);
    --font:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    background:var(--cream);color:var(--ink);font-family:var(--font);font-weight:500;line-height:1.6;
    -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
  }
  .bcoach *{box-sizing:border-box}
  .bcoach img{max-width:100%;display:block}
  .bcoach h1,.bcoach h2,.bcoach h3,.bcoach h4{color:var(--ink);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0}
  .bcoach .wrap{max-width:1120px;margin:0 auto;padding:0 clamp(20px,4vw,40px)}

  .bcoach .nav{position:sticky;top:0;z-index:30;background:color-mix(in srgb,var(--cream) 92%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
  .bcoach .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
  .bcoach .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
  .bcoach .brand .mark{width:30px;height:30px;flex:none}
  .bcoach .brand span{font-weight:800;font-size:20px;letter-spacing:-.02em}

  .bcoach .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font);font-weight:600;border-radius:999px;text-decoration:none;cursor:pointer;border:2px solid transparent;transition:transform .18s ease,background .18s ease;white-space:nowrap}
  .bcoach .btn.sm{height:40px;padding:0 20px;font-size:14px}
  .bcoach .btn.md{height:52px;padding:0 26px;font-size:15px}
  .bcoach .btn.primary{background:var(--teal);color:#fff;box-shadow:var(--shadow)}
  .bcoach .btn.primary:hover{background:var(--tealD);transform:translateY(-1px)}
  .bcoach .btn.outline{background:transparent;color:var(--teal);border-color:var(--teal)}
  .bcoach .btn.outline:hover{background:var(--teal);color:#fff}

  .bcoach .hero{position:relative;overflow:hidden}
  .bcoach .hero::before{content:"";position:absolute;inset:0;z-index:0;background:
     radial-gradient(ellipse at 62% 0%,color-mix(in srgb,var(--teal) 9%,transparent) 0%,transparent 58%),
     linear-gradient(180deg,var(--cream) 0%,var(--white) 100%)}
  .bcoach .hero .wrap{position:relative;z-index:1;display:grid;grid-template-columns:1fr;gap:clamp(30px,5vw,54px);align-items:center;padding-top:clamp(38px,6vw,72px);padding-bottom:clamp(34px,5vw,60px)}
  @media(min-width:900px){.bcoach .hero .wrap{grid-template-columns:1.04fr .96fr}}
  .bcoach .pill{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700;color:var(--tealD);background:color-mix(in srgb,var(--teal) 13%,var(--cream));border:1px solid color-mix(in srgb,var(--teal) 22%,transparent);padding:6px 13px;border-radius:999px;margin-bottom:22px}
  .bcoach .pill i{width:7px;height:7px;border-radius:50%;background:var(--teal);display:inline-block}
  .bcoach h1{font-size:clamp(40px,6.6vw,66px);line-height:1.0;letter-spacing:-.03em;text-wrap:balance}
  .bcoach h1 .em{color:var(--teal)}
  .bcoach .sub{font-size:clamp(16px,2vw,18.5px);color:var(--muted);max-width:35ch;margin:22px 0 0;font-weight:500}
  .bcoach .sub b{color:var(--ink);font-weight:700}
  .bcoach .heroCtas{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
  .bcoach .trust{display:flex;align-items:center;gap:13px;margin-top:26px;font-size:13.5px;color:var(--subtle);flex-wrap:wrap;font-weight:600}
  .bcoach .trust .dot{width:4px;height:4px;border-radius:50%;background:var(--border)}
  .bcoach .trust b{color:var(--muted);font-weight:700}

  .bcoach .artwrap{position:relative;display:flex;justify-content:center}
  .bcoach .glow{position:absolute;inset:-6% -4% -10% -4%;background:radial-gradient(56% 52% at 62% 34%,color-mix(in srgb,var(--teal) 22%,transparent),transparent 72%);filter:blur(10px);z-index:0}
  .bcoach .shot{position:relative;z-index:1;margin:0;border-radius:24px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadowLg);width:100%}
  .bcoach .shot img{width:100%;height:100%;object-fit:cover}
  .bcoach .heroShot img{height:min(540px,64vh)}
  .bcoach .shot .tint{position:absolute;inset:0;background:linear-gradient(155deg,color-mix(in srgb,var(--teal) 14%,transparent),transparent 46%);mix-blend-mode:multiply;pointer-events:none}

  .bcoach .banner{position:relative;margin:32px 0 0;border-radius:20px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadowLg)}
  .bcoach .banner img{width:100%;height:min(340px,40vh);object-fit:cover;display:block}
  .bcoach .banner .tint{position:absolute;inset:0;background:linear-gradient(150deg,color-mix(in srgb,var(--teal) 12%,transparent),transparent 52%);mix-blend-mode:multiply;pointer-events:none}

  .bcoach .ew{padding:clamp(40px,6vw,72px) 0;background:var(--cream);border-top:1px solid var(--border)}
  .bcoach .lead b{color:var(--ink);font-weight:700}
  .bcoach .ewgrid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:34px}
  @media(min-width:760px){.bcoach .ewgrid{grid-template-columns:1fr 1fr}}
  .bcoach .ewcard{background:var(--white);border:1px solid var(--border);border-radius:20px;padding:26px;box-shadow:var(--shadow);position:relative;overflow:hidden}
  .bcoach .ewcard::before{content:"";position:absolute;left:0;top:0;right:0;height:4px}
  .bcoach .ewcard.you::before{background:var(--teal)}
  .bcoach .ewcard.aud::before{background:var(--ink)}
  .bcoach .ewhead{display:flex;align-items:center;gap:12px;margin-bottom:18px}
  .bcoach .ewic{width:44px;height:44px;border-radius:13px;display:grid;place-items:center;flex:none;color:#fff}
  .bcoach .you .ewic{background:var(--teal)}
  .bcoach .aud .ewic{background:var(--ink)}
  .bcoach .ewlabel{font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
  .bcoach .ewhead h3{font-size:19px;font-weight:800;letter-spacing:-.02em;margin-top:2px}
  .bcoach .ewhead .col{display:flex;flex-direction:column;gap:1px}
  .bcoach ul.list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
  .bcoach ul.list li{display:flex;gap:12px;align-items:flex-start;font-size:14.5px;color:var(--muted);font-weight:500;line-height:1.5}
  .bcoach ul.list li b{color:var(--ink);font-weight:700}
  .bcoach .chk{width:22px;height:22px;border-radius:7px;display:grid;place-items:center;flex:none;margin-top:1px}
  .bcoach .you .chk{background:var(--tealWash);color:var(--tealD)}
  .bcoach .aud .chk{background:#EAECEE;color:var(--ink)}

  .bcoach section.blk{padding:clamp(44px,6vw,76px) 0;border-top:1px solid var(--border)}
  .bcoach .khead{font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--tealD);font-weight:700;margin:0 0 14px}
  .bcoach h2{font-size:clamp(28px,4vw,40px);line-height:1.08;letter-spacing:-.025em;text-wrap:balance}
  .bcoach .lead{font-size:17px;color:var(--muted);max-width:56ch;margin:14px 0 0;font-weight:500}

  .bcoach .vgrid{display:grid;grid-template-columns:1fr;gap:14px;margin-top:36px}
  @media(min-width:680px){.bcoach .vgrid{grid-template-columns:repeat(2,1fr)}}
  .bcoach .vcard{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:24px;box-shadow:var(--shadow)}
  .bcoach .vcard .ic{width:42px;height:42px;border-radius:12px;background:var(--tealWash);color:var(--teal);display:grid;place-items:center;margin-bottom:15px}
  .bcoach .vcard h3{font-size:18px;font-weight:800;letter-spacing:-.02em}
  .bcoach .vcard p{margin:8px 0 0;font-size:14.5px;color:var(--muted);font-weight:500;line-height:1.55}
  .bcoach .vcard .tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px}
  .bcoach .vcard .tags span{font-size:11.5px;font-weight:700;color:var(--tealD);background:var(--tealWash);border-radius:999px;padding:4px 10px}

  .bcoach .streams{display:grid;grid-template-columns:1fr;gap:13px;margin-top:34px}
  @media(min-width:560px){.bcoach .streams{grid-template-columns:repeat(2,1fr)}}
  @media(min-width:900px){.bcoach .streams{grid-template-columns:repeat(3,1fr)}}
  .bcoach .stream{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:20px;box-shadow:var(--shadow)}
  .bcoach .stream .n{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;background:var(--tealWash);color:var(--tealD);font-weight:800;font-size:14px;font-variant-numeric:tabular-nums}
  .bcoach .stream h4{margin:14px 0 0;font-size:16.5px;font-weight:800;letter-spacing:-.01em}
  .bcoach .stream p{margin:6px 0 0;font-size:14px;color:var(--muted);font-weight:500;line-height:1.5}
  .bcoach .stream.hl{background:var(--tealWash);border-color:color-mix(in srgb,var(--teal) 28%,var(--border))}
  .bcoach .stream.hl .n{background:#fff;color:var(--teal)}

  .bcoach .moneyWrap{padding:clamp(20px,3vw,30px) 0}
  .bcoach .money{background:var(--ink);color:#EAF1F0;border-radius:28px;padding:clamp(34px,5vw,60px);text-align:center;position:relative;overflow:hidden;box-shadow:var(--shadowLg)}
  .bcoach .money::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 80% at 50% -10%,color-mix(in srgb,var(--teal) 22%,transparent),transparent 60%)}
  .bcoach .money>*{position:relative}
  .bcoach .money .k{font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--teal);font-weight:700;margin:0 0 16px}
  .bcoach .money .big{font-size:clamp(66px,13vw,128px);font-weight:800;line-height:.9;letter-spacing:-.04em;color:#fff}
  .bcoach .money .big span{color:var(--teal)}
  .bcoach .money .cap{font-size:clamp(17px,2.4vw,22px);font-weight:700;margin-top:8px;color:#fff;letter-spacing:-.01em}
  .bcoach .money .fine{font-size:15px;color:#9FB0AF;max-width:50ch;margin:14px auto 0;font-weight:500}
  .bcoach .handled{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;margin-top:26px}
  .bcoach .handled span{font-size:13px;font-weight:600;color:#DCEBE9;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);border-radius:999px;padding:7px 14px}
  .bcoach .handled span::before{content:"✓";color:var(--teal);font-weight:800;margin-right:6px}
  .bcoach .money .paid{font-size:13px;color:#8FA3A1;margin:18px 0 0;font-weight:600}

  .bcoach .badges{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
  .bcoach .badge{display:inline-flex;align-items:center;gap:9px;font-size:14.5px;font-weight:700;color:var(--ink);background:var(--white);border:1px solid var(--border);border-radius:999px;padding:10px 18px;box-shadow:var(--shadow)}
  .bcoach .badge b{color:var(--teal);font-size:15px}

  .bcoach .cmp{margin-top:32px;overflow-x:auto;border:1px solid var(--border);border-radius:18px;background:var(--white);box-shadow:var(--shadow)}
  .bcoach table{border-collapse:collapse;width:100%;min-width:540px}
  .bcoach th,.bcoach td{padding:15px 18px;text-align:left;font-size:14px;border-bottom:1px solid var(--border);font-weight:500}
  .bcoach thead th{font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:var(--subtle);font-weight:700}
  .bcoach thead th.sage{color:var(--teal)}
  .bcoach tbody td:first-child{font-weight:700;color:var(--muted)}
  .bcoach td.sage{background:var(--tealWash)}
  .bcoach tbody tr:last-child td{border-bottom:none}
  .bcoach .yes{color:var(--success);font-weight:700}
  .bcoach .no{color:var(--subtle)}
  .bcoach col.sagecol{width:34%}

  .bcoach .steps{display:grid;grid-template-columns:1fr;gap:14px;margin-top:34px;counter-reset:s}
  @media(min-width:760px){.bcoach .steps{grid-template-columns:repeat(3,1fr)}}
  .bcoach .step{background:var(--white);border:1px solid var(--border);border-radius:18px;padding:24px;box-shadow:var(--shadow)}
  .bcoach .step .sn{counter-increment:s;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:var(--tealWash);color:var(--tealD);font-weight:800;font-size:15px}
  .bcoach .step .sn::before{content:counter(s)}
  .bcoach .step h4{margin:16px 0 0;font-size:17.5px;font-weight:800;letter-spacing:-.02em}
  .bcoach .step p{margin:7px 0 0;font-size:14.5px;color:var(--muted);font-weight:500;line-height:1.55}

  .bcoach .final{padding:clamp(44px,6vw,80px) 0;border-top:1px solid var(--border)}
  .bcoach .ctacard{position:relative;overflow:hidden;background:var(--teal);border-radius:28px;padding:clamp(44px,6vw,72px) clamp(24px,4vw,48px);text-align:center;box-shadow:0 2px 8px rgba(17,24,28,.06),0 40px 80px -44px rgba(11,130,150,.4)}
  .bcoach .ctacard .c1,.bcoach .ctacard .c2{position:absolute;border-radius:50%;background:rgba(255,255,255,.06);pointer-events:none}
  .bcoach .ctacard .c1{width:380px;height:380px;top:-150px;right:-110px}
  .bcoach .ctacard .c2{width:300px;height:300px;bottom:-160px;left:-90px}
  .bcoach .ctacard>*{position:relative}
  .bcoach .ctacard .ceyebrow{font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.85);font-weight:700;margin:0 0 16px}
  .bcoach .ctacard h2{color:var(--ink);font-size:clamp(28px,4.4vw,42px);line-height:1.06;letter-spacing:-.025em;max-width:18ch;margin:0 auto}
  .bcoach .ctacard .csub{color:rgba(255,255,255,.85);font-size:17px;max-width:46ch;margin:16px auto 0;font-weight:500}
  .bcoach .ctacard .stores{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:30px}
  .bcoach .ctacard .store{display:inline-flex;align-items:center;gap:12px;height:56px;padding:0 22px;background:var(--ink);color:#fff;border-radius:999px;text-decoration:none;transition:transform .18s ease}
  .bcoach .ctacard .store:hover{transform:scale(1.02)}
  .bcoach .ctacard .store svg{flex:none}
  .bcoach .ctacard .store .col{display:flex;flex-direction:column;align-items:flex-start;line-height:1}
  .bcoach .ctacard .store .sm{font-size:10px;opacity:.8}
  .bcoach .ctacard .store .sm.up{text-transform:uppercase;letter-spacing:.14em;font-weight:600}
  .bcoach .ctacard .store .lg{font-size:17px;font-weight:800;letter-spacing:-.01em;margin-top:2px}
  .bcoach .ctaGrid{display:grid;grid-template-columns:1fr;gap:clamp(28px,4vw,48px);align-items:center}
  @media(min-width:820px){.bcoach .ctaGrid{grid-template-columns:.82fr 1fr}}
  .bcoach .ctaShot img{height:min(420px,56vh)}
  .bcoach .ctaText h2{max-width:18ch}
  .bcoach .stores{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
  .bcoach .store{display:inline-flex;align-items:center;gap:12px;height:56px;padding:0 22px;background:var(--white);color:var(--ink);border:1px solid var(--border);border-radius:999px;text-decoration:none;box-shadow:0 2px 14px rgba(17,24,28,.06);transition:transform .18s ease}
  .bcoach .store:hover{transform:scale(1.02)}
  .bcoach .store svg{flex:none}
  .bcoach .store .sm{font-size:10px;opacity:.8;line-height:1}
  .bcoach .store .sm.up{text-transform:uppercase;letter-spacing:.14em;font-weight:600}
  .bcoach .store .lg{font-size:17px;font-weight:800;line-height:1.2;letter-spacing:-.01em;margin-top:2px}

  .bcoach .foot{border-top:1px solid var(--border);padding:28px 0 44px}
  .bcoach .foot .wrap{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;font-size:13.5px;color:var(--subtle);font-weight:500}
  .bcoach .foot b{color:var(--muted);font-weight:700}
`;

const HTML = `
<nav class="nav">
  <div class="wrap">
    <a class="brand" href="/">
      <svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#0E9AAE"/><path d="M 51.07 25.99 A 20 20 0 1 1 38.01 12.93" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/></svg>
      <span>Sage</span>
    </a>
    <a href="#apply" class="btn primary sm">Launch on Sage</a>
  </div>
</nav>

<header class="hero">
  <div class="wrap">
    <div>
      <span class="pill"><i></i>For coaches, nutritionists &amp; trainers</span>
      <h1>Monetize your audience. <span class="em">Do what you do best.</span></h1>
      <p class="sub"><b>Turn your following into a real coaching business on Sage.</b> Get paid for your expertise — while your audience gets direct access to you, on real data, with an AI keeping them on track between sessions.</p>
      <div class="heroCtas">
        <a href="#apply" class="btn primary md">Launch on Sage</a>
        <a href="/become-a-coach/guide" class="btn outline md">See how it works</a>
      </div>
    </div>
    <div class="artwrap">
      <div class="glow"></div>
      <figure class="shot heroShot">
        <img src="/images/coach/hero.jpg" alt="A coach training a client during a session" width="1000" height="1240" loading="eager">
        <span class="tint"></span>
      </figure>
    </div>
  </div>
</header>

<section class="blk" id="studio" style="background:var(--cream)">
  <div class="wrap">
    <p class="khead">Your studio</p>
    <h2>Everything to run the business — in one place.</h2>
    <p class="lead">The <b>Academy</b> tab is your command center: a pro sales page, a real revenue dashboard, and a full coaching toolkit — no extra tools, no subscriptions to stitch together.</p>
    <div class="vgrid">
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2.5" stroke="currentColor" stroke-width="1.9"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></div>
        <h3>Your own sales page</h3>
        <p>Build a page from blocks — heading, text, checklist, gallery, video — and share it on your own link, <b>sageacademy.app/@you</b>.</p>
        <div class="tags"><span>Pitch editor</span><span>Your @handle</span></div>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></div>
        <h3>Revenue &amp; analytics</h3>
        <p>Run it on real numbers — <b>MRR, churn, LTV</b>, revenue by source, top supporters and your fastest-growing offer.</p>
        <div class="tags"><span>MRR</span><span>Churn</span><span>LTV</span><span>Top supporters</span></div>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h13a2 2 0 012 2v10z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg></div>
        <h3>A full coaching toolkit</h3>
        <p>1:1 chat with <b>voice notes, files and in-chat payments</b> — everything you need to deliver, in one thread.</p>
        <div class="tags"><span>Voice notes</span><span>Files</span><span>Request payment</span></div>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 11l2 2 4-4M4 6h16M4 12h5M4 18h9" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <h3>Programs &amp; challenges</h3>
        <p>Package lessons with <b>action blocks tied to real tracking</b> — plus community challenges and leaderboards. Progress that's actually real.</p>
        <div class="tags"><span>Action blocks</span><span>Challenges</span><span>Leaderboards</span></div>
      </div>
    </div>
  </div>
</section>

<section class="blk" id="earn" style="background:var(--surface)">
  <div class="wrap">
    <p class="khead">The upside</p>
    <h2>Five ways to earn on Sage.</h2>
    <p class="lead">Build one offer or all five. Set your own prices — Sage collects, converts and pays you out.</p>
    <figure class="banner"><img src="/images/coach/creator-content.jpg" alt="A fitness creator filming content" width="1600" height="820" loading="lazy"><span class="tint"></span></figure>
    <div class="streams">
      <div class="stream"><div class="n">1</div><h4>1:1 Coaching</h4><p>Private and high-touch — chat, files, voice notes and their live data. Priced per month.</p></div>
      <div class="stream"><div class="n">2</div><h4>Communities</h4><p>Scale beyond your hours — channels, challenges and a leaderboard. Monthly or annual.</p></div>
      <div class="stream"><div class="n">3</div><h4>Programs</h4><p>Package your method into lessons once — include it, or sell it as a one-time unlock.</p></div>
      <div class="stream"><div class="n">4</div><h4>Tips</h4><p>Let clients say thank you — small amounts, straight to you.</p></div>
      <div class="stream"><div class="n">5</div><h4>Payment requests</h4><p>Bill for anything extra — the client pays in a tap.</p></div>
      <div class="stream hl"><div class="n">→</div><h4>One audience, one app</h4><p>Every offer runs through the same Sage profile your clients already use.</p></div>
    </div>
  </div>
</section>

<section class="blk" id="what" style="background:var(--white)">
  <div class="wrap">
    <p class="khead">The difference</p>
    <h2>Coach where the work actually happens.</h2>
    <p class="lead">On other platforms you coach blind — a chat window and a guess. On Sage, every client's day flows in automatically, so you walk in already knowing what happened. That's the difference between advice and coaching.</p>
    <figure class="banner"><img src="/images/coach/coach-consult.jpg" alt="A coach reviewing a plan with a client" width="1600" height="820" loading="lazy"><span class="tint"></span></figure>
    <div class="vgrid">
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" stroke-width="1.9"/><path d="M3 9h18M8 4v16" stroke="currentColor" stroke-width="1.9"/></svg></div>
        <h3>Everything in one client view</h3>
        <p>Meals, macros, weight trend, adherence and progress photos — live, per client. Open the app and see exactly where each person stands.</p>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3a9 9 0 100 18 9 9 0 000-18z" stroke="currentColor" stroke-width="1.9"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></div>
        <h3>An AI that works between sessions</h3>
        <p>Your Sage AI answers the small questions and keeps clients logging 24/7 — so retention doesn't depend on you being online at midnight.</p>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></div>
        <h3>Progress you can actually show</h3>
        <p>Weekly reports and before/after compare turn results into proof — the content that fills your next intake.</p>
      </div>
      <div class="vcard">
        <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.9 7.2 17.4l.9-5.4L4.2 8.2l5.4-.8L12 2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg></div>
        <h3>Your brand, your clients</h3>
        <p>Clients see you — your name, your coaching. Sage is the engine underneath, never the face in front.</p>
      </div>
    </div>
  </div>
</section>

<section class="blk" id="discover" style="background:var(--cream)">
  <div class="wrap">
    <p class="khead">Get discovered</p>
    <h2>Found on reputation, not ad budget.</h2>
    <p class="lead">Sage's discovery ranks coaches by quality — and every badge is earned, from real reviews and real members. You can't buy your way up: do great work and it compounds.</p>
    <div class="badges">
      <span class="badge"><b>&#9733;</b> Top rated</span>
      <span class="badge"><b>&#9650;</b> Popular</span>
      <span class="badge"><b>&#10022;</b> New</span>
    </div>
  </div>
</section>

<div class="moneyWrap"><div class="wrap">
  <div class="money">
    <p class="k">The economics</p>
    <div class="big"><span>80%</span></div>
    <div class="cap">You keep 80% of everything you earn.</div>
    <p class="fine">The other 20% covers your entire back office — no setup fee, no monthly fee. <b style="color:#fff">We only earn when you do.</b> Nothing to build, no one to hire; you just create your offer and coach.</p>
    <div class="handled">
      <span>Card payments</span><span>Currency conversion</span><span>Weekly payouts</span>
      <span>VAT &amp; sales tax</span><span>Invoices</span><span>Refunds &amp; disputes</span>
      <span>Platform &amp; updates</span><span>Human support</span>
    </div>
    <p class="paid">Paid weekly, every Monday — straight to your bank.</p>
  </div>
</div></div>

<section class="blk" id="how" style="background:var(--surface)">
  <div class="wrap">
    <p class="khead">Getting started</p>
    <h2>Live in three steps.</h2>
    <div class="steps">
      <div class="step"><div class="sn"></div><h4>Download the app</h4><p>Get Sage on iOS or Android and create your account — the same app your clients will use.</p></div>
      <div class="step"><div class="sn"></div><h4>Apply to launch</h4><p>Tell us what you do and who you help. Every creator is reviewed by hand — we keep the bar high on purpose.</p></div>
      <div class="step"><div class="sn"></div><h4>Go live &amp; get paid</h4><p>Set your offer and price, connect payouts, and go live. Most creators land their first client in about 20 minutes.</p></div>
    </div>
    <p class="lead" style="margin-top:26px">Want the full walkthrough? <a href="/become-a-coach/guide" style="color:var(--tealD);font-weight:700;text-decoration:none">Read the complete creator guide →</a></p>
  </div>
</section>

<section class="final" id="apply" style="background:var(--cream)">
  <div class="wrap">
    <div class="ctacard">
      <span class="c1"></span><span class="c2"></span>
      <p class="ceyebrow">Ready when you are</p>
      <h2>Your coaching, finally running like a business.</h2>
      <p class="csub">Download Sage, create your account, and apply to become a creator. We'll take it from there.</p>
      <div class="stores">
        <a class="store" href="https://apps.apple.com/app/id6777168646" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
          <span class="col"><span class="sm">Download on the</span><span class="lg">App Store</span></span>
        </a>
        <a class="store" href="https://play.google.com/store/apps/details?id=app.sageacademy" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zM16.81 15.12L6.05 21.34l8.49-8.49 2.27 2.27zM20.16 10.81c.5.29.84.83.84 1.42 0 .59-.34 1.13-.84 1.42l-2.41 1.4-2.5-2.5 2.5-2.5 2.41 1.76zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
          <span class="col"><span class="sm up">Get it on</span><span class="lg">Google Play</span></span>
        </a>
      </div>
    </div>
  </div>
</section>
`;

export default function BecomeACoachPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bcoach" dangerouslySetInnerHTML={{ __html: HTML }} />
      <Footer />
    </>
  );
}
