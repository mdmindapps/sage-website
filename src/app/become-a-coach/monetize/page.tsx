/* Sage — How fitness coaches monetize their audience (2026). Standalone reference
   page under /become-a-coach (own chrome, like /guide). Ported from the approved
   mockup (Creator Funnel/site-mockups/monetize.html); scoped under .cmon, Inter via
   var(--font-inter). Every figure links to a public source. */

const CSS = `
  .cmon{
    --cream:#FBF7EE; --surface:#F5F1EA; --white:#FFFFFF;
    --ink:#11181C; --muted:#5A6672; --subtle:#98A2AC; --border:#ECEEF0;
    --teal:#0E9AAE; --tealD:#0B8296; --tealWash:#E4F2F3;
    --shadow:0 1px 2px rgba(17,24,28,.04),0 12px 30px -16px rgba(17,24,28,.16);
    --font:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    background:var(--cream);color:var(--ink);font-family:var(--font);font-weight:500;line-height:1.6;
    -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
  }
  .cmon *{box-sizing:border-box}
  .cmon img{max-width:100%;display:block}
  .cmon h1,.cmon h2,.cmon h3,.cmon h4{color:var(--ink);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0}
  .cmon a{color:var(--tealD)}
  .cmon .wrap{max-width:1160px;margin:0 auto;padding:0 clamp(20px,4vw,40px)}

  .cmon .nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--cream) 92%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
  .cmon .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
  .cmon .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
  .cmon .brand .mark{width:28px;height:28px}
  .cmon .brand span{font-weight:800;font-size:19px;letter-spacing:-.02em}
  .cmon .btn{display:inline-flex;align-items:center;height:38px;padding:0 18px;border-radius:999px;background:var(--teal);color:#fff;font-weight:600;font-size:14px;text-decoration:none}
  .cmon .btn.big{height:48px;padding:0 26px;font-size:15px}

  .cmon .ghead{padding:clamp(40px,6vw,68px) 0 clamp(24px,3vw,34px);border-bottom:1px solid var(--border)}
  .cmon .eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--tealD);font-weight:700;margin:0 0 16px}
  .cmon .ghead h1{font-size:clamp(34px,5.4vw,52px);line-height:1.02;letter-spacing:-.03em;max-width:20ch}
  .cmon .ghead p{font-size:18px;color:var(--muted);max-width:62ch;margin:16px 0 0}
  .cmon .ghead .meta{font-size:13px;color:var(--subtle);margin-top:18px}

  .cmon .gbanner{position:relative;margin:22px 0 0;border-radius:20px;overflow:hidden;border:1px solid var(--border);box-shadow:var(--shadow)}
  .cmon .gbanner img{width:100%;height:min(330px,40vh);object-fit:cover}
  .cmon .gbanner .tint{position:absolute;inset:0;background:linear-gradient(150deg,color-mix(in srgb,var(--teal) 12%,transparent),transparent 52%);mix-blend-mode:multiply;pointer-events:none}

  .cmon .layout{display:grid;grid-template-columns:1fr;gap:clamp(28px,4vw,52px);padding:clamp(30px,4vw,48px) 0 80px}
  @media(min-width:900px){.cmon .layout{grid-template-columns:230px 1fr}}
  .cmon .toc{display:none}
  @media(min-width:900px){.cmon .toc{display:block;align-self:start;position:sticky;top:86px}}
  .cmon .toc p{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--subtle);font-weight:700;margin:0 0 12px}
  .cmon .toc a{display:block;font-size:14px;font-weight:600;color:var(--muted);text-decoration:none;padding:7px 0;border-left:2px solid var(--border);padding-left:14px;transition:color .15s,border-color .15s}
  .cmon .toc a:hover{color:var(--ink);border-color:var(--teal)}

  .cmon .main{min-width:0}
  .cmon section{padding-top:14px;margin-top:34px;border-top:1px solid var(--border);scroll-margin-top:80px}
  .cmon section:first-child{border-top:0;margin-top:0}
  .cmon .snum{font-size:13px;font-weight:800;color:var(--teal);letter-spacing:.06em}
  .cmon h2{font-size:clamp(24px,3.3vw,32px);letter-spacing:-.025em;margin:6px 0 0}
  .cmon .slead{font-size:16.5px;color:var(--muted);margin:12px 0 0;max-width:64ch}
  .cmon h3{font-size:17px;font-weight:800;margin:26px 0 0;letter-spacing:-.01em}
  .cmon .sub p{font-size:15px;color:var(--muted);margin:8px 0 0;max-width:64ch}
  .cmon ul.l{margin:12px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px}
  .cmon ul.l li{position:relative;padding-left:24px;font-size:15px;color:var(--muted);line-height:1.5}
  .cmon ul.l li::before{content:"";position:absolute;left:2px;top:9px;width:7px;height:7px;border-radius:2px;background:var(--teal)}
  .cmon ul.l li b{color:var(--ink);font-weight:700}

  .cmon .tbl{margin-top:18px;overflow-x:auto;border:1px solid var(--border);border-radius:16px;background:var(--white);box-shadow:var(--shadow)}
  .cmon table{width:100%;border-collapse:collapse;font-size:14px;min-width:640px}
  .cmon th,.cmon td{text-align:left;padding:12px 14px;border-bottom:1px solid var(--border);vertical-align:top}
  .cmon th{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--subtle);font-weight:700;background:var(--surface)}
  .cmon tr:last-child td{border-bottom:0}
  .cmon td b{color:var(--ink)}
  .cmon td.num{font-variant-numeric:tabular-nums;font-weight:700;color:var(--ink);white-space:nowrap}
  .cmon tr.hi td{background:var(--tealWash)}
  .cmon .yes{color:var(--tealD);font-weight:700}.cmon .no{color:#B4462B;font-weight:700}

  .cmon .note{margin:20px 0 0;background:var(--tealWash);border:1px solid color-mix(in srgb,var(--teal) 22%,transparent);border-radius:14px;padding:15px 18px;font-size:15px;color:var(--ink);font-weight:600}
  .cmon .note b{color:var(--tealD)}
  .cmon .src{font-size:12.5px;color:var(--subtle);margin-top:10px;line-height:1.5;font-weight:500}
  .cmon .src a{color:var(--subtle)}

  .cmon .stat{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px;margin-top:18px}
  .cmon .stat div{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:var(--shadow)}
  .cmon .stat .n{font-size:26px;font-weight:800;color:var(--ink);letter-spacing:-.02em;font-variant-numeric:tabular-nums}
  .cmon .stat .t{font-size:13px;color:var(--muted);margin-top:4px}
  .cmon .stat .s{font-size:11.5px;color:var(--subtle);margin-top:8px}

  .cmon .stack{display:grid;grid-template-columns:1fr;gap:14px;margin-top:18px}
  @media(min-width:760px){.cmon .stack{grid-template-columns:1fr 1fr}}
  .cmon .card{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:18px 20px;box-shadow:var(--shadow)}
  .cmon .card h4{font-size:15px;margin:0 0 10px}
  .cmon .card ul{margin:0;padding:0;list-style:none;font-size:14px;color:var(--muted)}
  .cmon .card li{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px dashed var(--border)}
  .cmon .card li:last-child{border-bottom:0}
  .cmon .card li span:last-child{font-variant-numeric:tabular-nums;color:var(--ink);font-weight:700;white-space:nowrap}
  .cmon .card.sage{border-color:color-mix(in srgb,var(--teal) 40%,transparent);background:var(--tealWash)}
  .cmon .card .tot{margin-top:10px;font-weight:800;color:var(--ink);font-size:16px}

  .cmon .faq details{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:0 18px;margin-top:10px;box-shadow:var(--shadow)}
  .cmon .faq summary{cursor:pointer;font-weight:700;font-size:15.5px;padding:15px 0;list-style:none}
  .cmon .faq summary::-webkit-details-marker{display:none}
  .cmon .faq details p{font-size:14.5px;color:var(--muted);margin:0 0 15px;max-width:70ch}

  .cmon .cta{margin-top:44px;background:var(--ink);color:#fff;border-radius:22px;padding:clamp(26px,4vw,40px);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:18px}
  .cmon .cta h3{color:#fff;font-size:clamp(20px,2.6vw,26px);margin:0}
  .cmon .cta p{color:#B8C2CB;margin:6px 0 0;font-size:15px;max-width:52ch}
  .cmon .foot{border-top:1px solid var(--border);padding:26px 0 40px;font-size:13px;color:var(--subtle)}
  .cmon .foot a{color:var(--subtle)}
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
    <p class="eyebrow">Sage · For fitness coaches &amp; creators</p>
    <h1>How fitness coaches and creators monetize their audience in 2026</h1>
    <p>Six ways to turn followers into income, with what each one costs, what it pays, and the real conversion numbers from Patreon, OnlyFans, Skool and the coaching industry. Written for a coach with 5K to 500K followers who is tired of brand codes.</p>
    <p class="meta">Updated September 2026 · 9 min read · Every number links to its source</p>
  </div>
</header>

<div class="wrap"><figure class="gbanner"><img src="/images/coach/creator-content.jpg" alt="A fitness creator filming content" width="1600" height="720" loading="eager"><span class="tint"></span></figure></div>

<div class="wrap">
  <div class="layout">
    <aside class="toc">
      <p>On this page</p>
      <a href="#problem">Why codes and 1:1 cap out</a>
      <a href="#options">The six options, compared</a>
      <a href="#numbers">What % of followers actually pay</a>
      <a href="#math">The math on your audience</a>
      <a href="#stack">What it costs to run a club</a>
      <a href="#sage">How a club on Sage works</a>
      <a href="#faq">Questions coaches ask</a>
    </aside>

    <main class="main">
      <section id="problem">
        <p class="snum">01</p>
        <h2>Why brand codes and 1:1 coaching cap out</h2>
        <p class="slead">Most fitness creators earn through two things: discount codes for other people's products, and a handful of 1:1 clients. Both have a ceiling, and neither grows with the audience.</p>
        <ul class="l">
          <li><b>Codes pay a few percent of someone else's sale</b>, only when someone happens to buy. A 50K account with three codes typically earns hundreds a month, not thousands.</li>
          <li><b>1:1 coaching is capped by hours.</b> A solo online coach carries 20 to 50 clients at $100 to $500 a month; past that, there is no more week. <span class="src">Source: <a href="https://www.theptdc.com/articles/how-big-is-online-personal-training-industry" rel="nofollow">PTDC, online personal training industry report</a>; <a href="https://www.mypthub.net/blog/how-many-clients-personal-trainer/" rel="nofollow">My PT Hub, client capacity</a>.</span></li>
          <li><b>Everyone who can't afford 1:1 walks away.</b> Between "I follow this coach" and "I'm this coach's client" there is usually nothing to join at an accessible price.</li>
          <li><b>The DMs asking "what do you eat?" earn nothing.</b> That demand is real, it just has nowhere to go.</li>
        </ul>
      </section>

      <section id="options">
        <p class="snum">02</p>
        <h2>The six ways to monetize a fitness audience, compared</h2>
        <p class="slead">Honest comparison. Every option here works for someone; the question is what it costs you to start, whether the income recurs, and whether you can actually see what your members do.</p>
        <div class="tbl"><table>
          <thead><tr><th>Option</th><th>Cost to start</th><th>Platform cut</th><th>Recurring?</th><th>See members' food &amp; weight?</th><th>Best for</th></tr></thead>
          <tbody>
            <tr><td><b>1:1 online coaching</b> (forms, DMs, PayPal)</td><td>$0</td><td>Payment fees only</td><td class="yes">Yes</td><td class="no">No (screenshots)</td><td>Certified coaches with hours to sell</td></tr>
            <tr><td><b>One-time course / ebook</b> (Kajabi, Gumroad)</td><td>$0–$149/mo</td><td>0–10% + tool fee</td><td class="no">No</td><td class="no">No</td><td>Creators with a method to package</td></tr>
            <tr><td><b>Patreon / OnlyFans-style membership</b></td><td>$0</td><td>8–20%</td><td class="yes">Yes</td><td class="no">No</td><td>Content creators (behind-the-scenes, extras)</td></tr>
            <tr><td><b>Skool / Circle community</b></td><td>$99/mo</td><td>$99/mo + fees</td><td class="yes">Yes</td><td class="no">No</td><td>Course creators who want a forum</td></tr>
            <tr><td><b>Your own custom app</b></td><td>$50K–$200K + 9–12 months</td><td>App stores 15–30%</td><td class="yes">Yes</td><td class="yes">Yes, if you build it</td><td>Creators with 1M+ and capital</td></tr>
            <tr class="hi"><td><b>A club inside a fitness app</b> (Sage Academy)</td><td>$0</td><td>20%</td><td class="yes">Yes</td><td class="yes">Yes, live</td><td>Coaches and creators from ~5K up</td></tr>
          </tbody>
        </table></div>
        <p class="src">Custom-app cost: Solin's founders report 9–12 months and tens to hundreds of thousands of dollars per creator app before they pivoted to a platform (<a href="https://blog.solin.stream/the-solin-story/" rel="nofollow">The Solin Story</a>). Skool pricing from skool.com. Patreon fees from patreon.com/pricing.</p>
      </section>

      <section id="numbers">
        <p class="snum">03</p>
        <h2>What percentage of followers actually pay</h2>
        <p class="slead">This is the number everything depends on, and it is public. Across platforms, between 0.5% and 1.5% of a social audience will pay a creator monthly for something of their own. Fitness creators usually sit at the low end, because they sell through bio links and forms instead of inside a product.</p>
        <div class="stat">
          <div><div class="n">1–1.5%</div><div class="t">of social followers convert to paid on OnlyFans (official creator guidance)</div><div class="s"><a href="https://www.inro.social/blog/instagram-to-onlyfans-conversion-benchmarks" rel="nofollow">Instagram→OnlyFans benchmarks</a></div></div>
          <div><div class="n">0.5–2.5%</div><div class="t">of total audience become Patreon patrons</div><div class="s"><a href="https://bloggingwizard.com/patreon-statistics/" rel="nofollow">Patreon statistics</a></div></div>
          <div><div class="n">2–5%</div><div class="t">of free members upgrade to paid on Skool</div><div class="s"><a href="https://communipass.com/blog/skool-revenue-benchmarks-2026/" rel="nofollow">Skool revenue benchmarks</a></div></div>
          <div><div class="n">0.05–0.3%</div><div class="t">what fitness creators (50–150K) typically achieve with paid groups sold from a bio link</div><div class="s"><a href="https://communipass.com/blog/fitness-influencer-monetization-benchmarks-2026/" rel="nofollow">Fitness monetization benchmarks</a></div></div>
          <div><div class="n">2.8%</div><div class="t">Sweat: 16M Instagram followers → 450K paying subscribers (the ceiling, after 10 years)</div><div class="s"><a href="https://www.builtbyfoundry.io/blog/kayla-itsines-sweat-app-400m-exit" rel="nofollow">Sweat / Kayla Itsines</a></div></div>
          <div><div class="n">6–9%</div><div class="t">monthly churn for creator-led paid communities (annual plans cut it sharply)</div><div class="s"><a href="https://retentioncheck.com/churn-benchmarks/membership-communities" rel="nofollow">Membership churn benchmarks</a></div></div>
        </div>
        <h3>Why the gap between 0.1% and 1.5%?</h3>
        <div class="sub"><p>Three things, in order of impact: <b>where the link is</b> (a link delivered in a DM converts 5–8% of the people who receive it; a bio link converts 0.1–0.5% of visitors), <b>whether there is a start date</b> (a monthly challenge with a deadline sells 4–6× a "join anytime" membership), and <b>whether members get results</b> (fitness paid groups keep 47% of members at 4 months; with a weekly live or check-in, 62%). <span class="src"><a href="https://www.inro.social/blog/instagram-to-onlyfans-conversion-benchmarks" rel="nofollow">DM vs bio conversion</a> · <a href="https://communipass.com/blog/skool-upsell-strategy-2026/" rel="nofollow">Challenge funnels</a> · <a href="https://kourses.com/member-retention/" rel="nofollow">Member retention</a></span></p></div>
      </section>

      <section id="math">
        <p class="snum">04</p>
        <h2>The math on your audience</h2>
        <p class="slead">Base case: 0.5% of followers in a $19/month club, plus a capped 1:1 offer. Conservative and optimistic columns use 0.15% and 1.5%. These are projections from the benchmarks above, not promises.</p>
        <div class="tbl"><table>
          <thead><tr><th>Followers</th><th>Club members (0.5%)</th><th>Club / month</th><th>1:1 (15 spots × $199)</th><th>Base total / month</th><th>Range (0.15% – 1.5%)</th></tr></thead>
          <tbody>
            <tr><td class="num">5,000</td><td class="num">25</td><td class="num">$475</td><td class="num">$2,985</td><td class="num">$3,460</td><td>$3,100 – $4,400</td></tr>
            <tr><td class="num">10,000</td><td class="num">50</td><td class="num">$950</td><td class="num">$2,985</td><td class="num">$3,935</td><td>$3,300 – $5,800</td></tr>
            <tr><td class="num">25,000</td><td class="num">125</td><td class="num">$2,375</td><td class="num">$2,985</td><td class="num">$5,360</td><td>$3,700 – $10,100</td></tr>
            <tr><td class="num">50,000</td><td class="num">250</td><td class="num">$4,750</td><td class="num">$2,985</td><td class="num">$7,735</td><td>$4,400 – $17,200</td></tr>
            <tr><td class="num">100,000</td><td class="num">500</td><td class="num">$9,500</td><td class="num">$2,985</td><td class="num">$12,485</td><td>$5,800 – $31,500</td></tr>
            <tr><td class="num">250,000</td><td class="num">1,250</td><td class="num">$23,750</td><td class="num">$2,985</td><td class="num">$26,735</td><td>$10,100 – $74,200</td></tr>
          </tbody>
        </table></div>
        <p class="note">Notice what the table says: <b>1:1 is the same at every size</b>, because it is limited by your hours. The club is the part that grows with the audience. And the club is where your next 1:1 clients come from: about 14% of challenge finishers upgrade to coaching. <span class="src"><a href="https://gymkee.com/blog/online-personal-trainer-salary-guide/" rel="nofollow">1:1 pricing and capacity</a> · <a href="https://communipass.com/blog/skool-upsell-strategy-2026/" rel="nofollow">Challenge → 1:1 upgrade rate</a></span></p>
      </section>

      <section id="stack">
        <p class="snum">05</p>
        <h2>What it actually costs to run a paid club yourself</h2>
        <p class="slead">This is the part nobody puts in the reel. A club is a page, payments, subscriptions, a community, programs, check-ins and progress tracking, and it has to run every day.</p>
        <div class="stack">
          <div class="card"><h4>Do it yourself</h4><ul>
            <li><span>Skool or Circle (community)</span><span>$99/mo</span></li>
            <li><span>Kajabi or similar (programs, sales page)</span><span>$149/mo</span></li>
            <li><span>Stripe (payments)</span><span>2.9% + $0.30</span></li>
            <li><span>Typeform (intake, check-ins)</span><span>$29/mo</span></li>
            <li><span>Google Sheets + screenshots (food, weight)</span><span>your evenings</span></li>
            <li><span>WhatsApp group (chat)</span><span>your phone, 24/7</span></li>
            <li><span>A VA for invoices, refunds, chasing payments</span><span>$300+/mo</span></li>
          </ul><div class="tot">≈ $580/month + 6 tools, before the first member</div></div>
          <div class="card sage"><h4>A club inside Sage Academy</h4><ul>
            <li><span>Your page, club, 1:1, programs, challenges</span><span>$0</span></li>
            <li><span>Payments, subscriptions, invoices, refunds</span><span>included</span></li>
            <li><span>Members log meals from a photo, weigh in, track progress</span><span>included</span></li>
            <li><span>You see every member's food, weight and adherence</span><span>included</span></li>
            <li><span>Chat, announcements, challenge leaderboard</span><span>included</span></li>
            <li><span>Payouts to your bank</span><span>every Monday</span></li>
            <li><span>Platform fee</span><span>20% of what you earn</span></li>
          </ul><div class="tot">$0 to launch. You keep 80%.</div></div>
        </div>
      </section>

      <section id="sage">
        <p class="snum">06</p>
        <h2>How a club on Sage works</h2>
        <p class="slead">Sage Academy is a nutrition and fitness app on the App Store and Google Play where people log meals by taking a photo. In 2026 it opened to coaches and creators: you run your own coaching business inside the app.</p>
        <ul class="l">
          <li><b>Your page:</b> sageacademy.app/@you, with your photos, your offers and your prices.</li>
          <li><b>Two kinds of offers:</b> 1:1 coaching (private, monthly, limited spots) and communities (monthly or yearly, unlimited members). Programs and 30-day challenges with a live leaderboard live inside them.</li>
          <li><b>Members pay inside the app.</b> Card, Apple Pay, Google Pay. Recurring billing, invoices, refunds and taxes handled. You are paid every Monday.</li>
          <li><b>You coach on real data:</b> every member's meals and macros, weight trend, habits, progress photos and measurements, live, if they choose to share them.</li>
          <li><b>Launch in about 20 minutes:</b> profile → create your offer → turn on payouts → go live → share your link. We build the page and the first launch with you.</li>
          <li><b>Economics:</b> you keep 80%, Sage keeps 20%. No setup fee, no monthly fee. We only earn when you earn.</li>
        </ul>
        <p class="note">Members also pay a <b>$4.99/month Sage Premium</b> for the app itself (meal recognition, transaction costs). It is not where Sage makes money and it does not come out of your 80%. Creators never pay for Premium.</p>
      </section>

      <section id="faq" class="faq">
        <p class="snum">07</p>
        <h2>Questions coaches ask</h2>
        <details open><summary>How much can a fitness coach make from a paid community?</summary><p>It depends on audience size and how the club is sold. Using public benchmarks (0.5% of followers paying, $19/month), a 50K account is about 250 members and $4,750/month recurring; at 1% it doubles. Fitness creators who sell only from a bio link typically see 0.05–0.3%; a DM link and a monthly challenge with a start date push it toward 1%.</p></details>
        <details><summary>Do I need to be a certified trainer to run a club?</summary><p>For 1:1 coaching with prescriptions, certification matters and many countries require it. A club is different: it is you sharing how you train and eat, members following programs and logging their own food, and a challenge on consistency. Most transformation creators run clubs without a certification; they say so openly and avoid medical claims.</p></details>
        <details><summary>What percentage of followers convert to paying members?</summary><p>OnlyFans guidance says 1–1.5% of social followers. Patreon creators see 0.5–2.5% of total audience. Skool communities convert 2–5% of free members to paid. Fitness creators selling paid groups from a bio link are often at 0.05–0.3%. A reasonable planning number is 0.5%.</p></details>
        <details><summary>Is a club better than selling a one-time program?</summary><p>A one-time program earns once per person. A club earns every month and is where people actually do the work. Many creators keep the program as the front door and move the ongoing part (tracking, accountability, check-ins) into the club. On Sage, programs live inside the club as included content or one-time unlocks.</p></details>
        <details><summary>What does Sage cost a coach?</summary><p>Nothing to launch or run. Sage keeps 20% of what you earn through the platform; that covers payments, invoices, the app and weekly payouts. You keep 80%. There is no setup fee and no monthly fee.</p></details>
        <details><summary>How is this different from Skool, Patreon or Trainerize?</summary><p>Skool and Patreon are communities or memberships where the coach cannot see what members eat or weigh; you coach blind, and Skool costs $99/month. Trainerize is a coaching tool paid per client with no audience or community layer. Sage combines a consumer fitness app (members log meals from a photo) with your club, 1:1 and payments, so you see real data and pay nothing until you earn.</p></details>
        <details><summary>How do members pay, and how do I get paid?</summary><p>Members pay inside the app with a card, Apple Pay or Google Pay. Sage handles recurring billing, invoices and refunds. Your share is paid to your bank every Monday through Stripe, with a self-billing invoice generated for each payout.</p></details>
      </section>

      <div class="cta" id="apply">
        <div><h3>See what your page and your numbers would look like.</h3><p>Apply as a creator in the Sage Academy app, or send us your Instagram handle and we'll build a preview of your page with an income estimate for your audience, free.</p></div>
        <a class="btn big" href="/become-a-coach#apply">Become a creator →</a>
      </div>
    </main>
  </div>
</div>

<div class="foot"><div class="wrap">Sage Academy · Friday Technologies SRL · Every figure on this page links to a public source. Projections are estimates, not promises. · <a href="/become-a-coach">Launch on Sage</a> · <a href="/become-a-coach/guide">Creator Guide</a></div></div>
`;

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can a fitness coach make from a paid community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using public benchmarks (0.5% of followers paying, $19/month), a 50K account is about 250 members and $4,750/month recurring; at 1% it doubles. Fitness creators selling only from a bio link typically see 0.05–0.3%.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of followers convert to paying members?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OnlyFans guidance says 1–1.5% of social followers. Patreon creators see 0.5–2.5% of total audience. Skool converts 2–5% of free members. Fitness creators selling from a bio link are often at 0.05–0.3%. A reasonable planning number is 0.5%.",
      },
    },
    {
      "@type": "Question",
      name: "What does Sage cost a coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nothing to launch or run. Sage keeps 20% of what the coach earns through the platform, covering payments, invoices, the app and weekly payouts. The coach keeps 80%. No setup fee, no monthly fee.",
      },
    },
    {
      "@type": "Question",
      name: "How is Sage different from Skool, Patreon or Trainerize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skool and Patreon are communities where the coach cannot see members' food or weight; Trainerize is a per-client coaching tool without an audience layer. Sage combines a consumer fitness app (members log meals from a photo) with the coach's club, 1:1 and payments, so the coach sees real data and pays nothing until they earn.",
      },
    },
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How fitness coaches and creators monetize their audience in 2026",
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "Sage Academy" },
  publisher: { "@type": "Organization", name: "Friday Technologies SRL" },
  mainEntityOfPage: "https://sageacademy.app/become-a-coach/monetize",
  about: {
    "@type": "SoftwareApplication",
    name: "Sage Academy",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free for coaches to launch; Sage keeps 20% of creator earnings." },
  },
};

export default function MonetizePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cmon" dangerouslySetInnerHTML={{ __html: HTML }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }} />
    </>
  );
}
