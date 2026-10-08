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

  .cmon .ways{list-style:none;margin:0 0 18px;padding:0}
  .cmon .ways li{background:var(--white);border:1px solid var(--border);border-radius:14px;padding:15px 18px;margin:0 0 9px;font-size:15.5px;color:var(--muted);line-height:1.6}
  .cmon .ways li b{color:var(--ink)}
  .cmon .ways li.hi{background:var(--tealWash);border-color:color-mix(in srgb,var(--teal) 28%,var(--border))}
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
  .cmon .stack.one{grid-template-columns:1fr;max-width:640px}
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
  .cmon .ctabtns{display:flex;flex-wrap:wrap;gap:10px}
  /* Secondary action on the dark card — the teal fill would read as a second primary. */
  .cmon .btn.ghost{background:transparent;color:#fff;box-shadow:inset 0 0 0 1px rgba(255,255,255,.35)}
  .cmon .btn.ghost:hover{background:rgba(255,255,255,.08)}
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
    <p>Six ways an audience turns into income that comes back every month &mdash; what people actually pay for, what it costs to run, and what to expect at your size. Written for a coach with 5K to 500K followers who is tired of brand codes.</p>
    <p class="meta">Updated September 2026 · 8 min read</p>
  </div>
</header>

<div class="wrap"><figure class="gbanner"><img src="/images/coach/creator-content.jpg" alt="A fitness creator filming content" width="1600" height="720" loading="eager"><span class="tint"></span></figure></div>

<div class="wrap">
  <div class="layout">
    <aside class="toc">
      <p>On this page</p>
      <a href="#problem">Why codes and 1:1 cap out</a>
      <a href="#options">The six ways you earn on Sage</a>
      <a href="#numbers">How many people actually buy</a>
      <a href="#math">What that looks like at your size</a>
      <a href="#stack">What it costs on Sage</a>
      <a href="#sage">How it actually works</a>
      <a href="#faq">Questions coaches ask</a>
    </aside>

    <main class="main">
      <section id="problem">
        <p class="snum">01</p>
        <h2>Why brand codes and 1:1 coaching cap out</h2>
        <p class="slead">Most fitness creators earn through two things: discount codes for other people's products, and a handful of 1:1 clients. Both have a ceiling, and neither grows with the audience.</p>
        <ul class="l">
          <li><b>Codes pay a few percent of someone else's sale</b>, only when someone happens to buy. A 50K account with three codes typically earns hundreds a month, not thousands.</li>
          <li><b>1:1 coaching is capped by hours.</b> A solo online coach carries 20 to 50 clients; past that, there is no more week. <span class="src">Source: <a href="https://www.mypthub.net/blog/how-many-clients-personal-trainer/" rel="nofollow">My PT Hub, client capacity</a>.</span></li>
          <li><b>Everyone who can't afford 1:1 walks away.</b> Between "I follow this coach" and "I'm this coach's client" there is usually nothing to join at an accessible price.</li>
          <li><b>The DMs asking "what do you eat?" earn nothing.</b> That demand is real, it just has nowhere to go.</li>
        </ul>
        <p class="note">That last line is the whole page. You are not short of people &mdash; you are
        short of a door they can walk through at a price they can say yes to. What follows is what is
        behind that door, and what it is worth.</p>
      </section>

      <section id="options">
        <p class="snum">02</p>
        <h2>The six ways you earn on Sage</h2>
        <p class="slead">A club is not one product. Once there is a room of people training with you,
        money comes in through six separate doors &mdash; and most creators end up with four or five of
        them open at the same time. Every one of these already exists; none of it is something you have
        to build.</p>

        <ul class="ways">
          <li><b>1. The club, monthly.</b> One price, every month, for everyone inside. This is the part
          that grows with your audience instead of with your hours &mdash; a hundred members at $19 is
          the same amount of work as forty.</li>
          <li><b>2. The same club, paid for the year.</b> You can offer a yearly price next to the
          monthly one. People who pay for a year stay for a year, and the money is in your account now
          rather than in twelve pieces.</li>
          <li><b>3. One-to-one, for the few who want you.</b> Private, monthly, at your price. It is the
          top of your range and it is limited by your week &mdash; which is exactly why it works best
          sitting above a club instead of being the only thing you sell.</li>
          <li><b>4. Programs sold on their own.</b> A program can be included in the club, or sold as a
          one-time unlock on top of it &mdash; a twelve-week plan, a course, a video series. The same
          program, sold twice: once inside the membership, once to people who only want that one thing.
          You can sell them to your 1:1 clients too.</li>
          <li><b>5. Challenges.</b> You start one whenever you decide, for a week or for a season, with
          a leaderboard on kg lost and percentage of bodyweight. A challenge has a start date, and a
          start date is what makes people finally join &mdash; it is the single best reason for someone
          to stop following you and start paying you.</li>
          <li><b>6. Tips.</b> Members can tip you inside a channel or in a private chat, with a message
          attached. Small on its own, and it tells you who your next 1:1 client is.</li>
        </ul>

        <p class="note"><b>And the alternative, honestly.</b> You could build the app yourself. Founders
        who have done it for fitness creators report nine to twelve months and tens to hundreds of
        thousands of dollars before a single member can pay them &mdash; and the app stores still take
        15&ndash;30% when it ships. <b>Sage is that app, already built.</b> Opening a club inside it
        costs nothing, takes no developer, and the six doors above are open on day one.</p>

        <p class="slead" style="margin-top:22px">What none of that decides is how many people walk
        through. That number is smaller than most coaches expect, and it is the one thing worth being
        honest about before you price anything.</p>
      </section>

      <section id="numbers">
        <p class="snum">03</p>
        <h2>How many people actually buy</h2>
        <p class="slead">Nobody will tell you this honestly, so: a small fraction of an audience ever
        pays. That is normal, it is true for everyone, and it is still enough &mdash; because the
        fraction is paying you every month instead of once.</p>

        <ul class="ways">
          <li><b>The ceiling, after ten years.</b> Sweat, the biggest fitness creator business ever
          built, reached 450,000 paying subscribers from 16 million Instagram followers. <b>2.8%.</b>
          That is the top of the sport, and it took a decade. <span class="src"><a
          href="https://www.builtbyfoundry.io/blog/kayla-itsines-sweat-app-400m-exit"
          rel="nofollow">Source</a></span></li>
          <li><b>A realistic number to plan with: 0.5%.</b> Half a percent of your followers, paying
          monthly. If that sounds low, it is because it is: at 50K followers it is 250 people, and at
          $19 a month that is $4,750 coming back every month.</li>
          <li><b>Where the link is decides more than the price.</b> A link sent in a conversation
          converts many times better than a link sitting in your bio. Most fitness creators sell only
          from the bio, which is why most fitness creators are at the bottom of the range.</li>
          <li><b>People leave, and that is normal too.</b> Paid communities lose a meaningful share of
          members every month. Two things slow it down: a yearly price, and being seen individually
          &mdash; a check-in, a live, a reply with your name on it.</li>
        </ul>
      </section>

      <section id="math">
        <p class="snum">04</p>
        <h2>What that looks like at your size</h2>
        <p class="slead">Half a percent of your followers in a $19 club. These are projections, not
        promises &mdash; and they are what members pay you, before payment costs and our 5%.</p>
        <div class="tbl"><table>
          <thead><tr><th>Followers</th><th>Club members (0.5%)</th><th>Club / month</th><th>Club range (0.15% &ndash; 1.5%)</th></tr></thead>
          <tbody>
            <tr><td class="num">5,000</td><td class="num">25</td><td class="num">$475</td><td class="num">$140 &ndash; $1,425</td></tr>
            <tr><td class="num">10,000</td><td class="num">50</td><td class="num">$950</td><td class="num">$285 &ndash; $2,850</td></tr>
            <tr><td class="num">25,000</td><td class="num">125</td><td class="num">$2,375</td><td class="num">$710 &ndash; $7,125</td></tr>
            <tr><td class="num">50,000</td><td class="num">250</td><td class="num">$4,750</td><td class="num">$1,425 &ndash; $14,250</td></tr>
            <tr><td class="num">100,000</td><td class="num">500</td><td class="num">$9,500</td><td class="num">$2,850 &ndash; $28,500</td></tr>
            <tr><td class="num">250,000</td><td class="num">1,250</td><td class="num">$23,750</td><td class="num">$7,125 &ndash; $71,250</td></tr>
          </tbody>
        </table></div>
        <p class="note"><b>Fifteen 1:1 clients at $199 add $2,985 a month &mdash; and that number is the
        same on every row</b>, because it is limited by your week, not by your audience. That is the
        whole argument for a club: it is the only column that moves when you grow. And the club is where
        your next 1:1 clients come from &mdash; people who finished a challenge with you and want
        more.</p>
      </section>

      <section id="stack">
        <p class="snum">05</p>
        <h2>What it costs to run a club on Sage</h2>
        <p class="slead">A club is a page, payments, subscriptions, a community, programs, check-ins and progress tracking, and it has to run every day. On Sage all of it is included, and there is nothing to pay until you earn.</p>
        <div class="stack one">
          <div class="card sage"><h4>A club inside Sage Academy</h4><ul>
            <li><span>Your page, club, 1:1, programs, challenges</span><span>$0</span></li>
            <li><span>Payments, subscriptions, invoices, refunds</span><span>included</span></li>
            <li><span>Members log meals from a photo, weigh in, track progress</span><span>included</span></li>
            <li><span>Your 1:1 clients can share their food and weight with you</span><span>included</span></li>
            <li><span>Chat, announcements, challenge leaderboard</span><span>included</span></li>
            <li><span>Setup fee, monthly fee</span><span>none</span></li>
            <li><span>Payouts to your bank</span><span>every Monday, where Stripe operates</span></li>
            <li><span>Platform fee, founding creators</span><span>5%, after payment fees</span></li>
          </ul><div class="tot">$0 to launch. Our first 100 creators keep 95%. Our 5% only comes out of what you earn.</div></div>
        </div>
        <p class="note">We do it the other way round. <b>Sage Premium is our product</b> &mdash; it is on
        the App Store at <b>$7.99 a month</b> with no coach, no club and no page attached. Your members
        pay <b>$4.99</b> for the same app because they came in through you. A member who already subscribes is not charged again; she just joins. It is her
        subscription, on her card, and it never touches your side.</p>
        <p class="note">The honest half: your member sees two lines instead of one, and both are shown
        before she buys. In exchange, nothing about running the app comes out of your price &mdash;
        which is exactly why your share can be what it is.</p>
      </section>

      <section id="sage">
        <p class="snum">06</p>
        <h2>How it actually works</h2>
        <p class="slead">Sage Academy is a nutrition and fitness app on the App Store and Google Play,
        where people log their meals by taking a photo of them. Since 2026 it is also where coaches run
        their own business &mdash; your page, your offers, your prices &mdash; inside the app your
        members already open every day.</p>
        <ul class="l">
          <li><b>Your page:</b> sageacademy.app/yourname, with your photos, your offers and your prices. It
          is a sales page: what you sell, and what it costs, in your words.</li>
          <li><b>Two kinds of offers:</b> a club (monthly or yearly, as many members as you want) and
          one-to-one coaching (private, monthly, at a price you set). Run one, or
          both.</li>
          <li><b>Inside a club:</b> channels you post in, a classroom for your programs, PDFs and
          videos, and challenges you start whenever you decide &mdash; a week, six weeks, a season
          &mdash; with a leaderboard on kg lost and percentage of bodyweight.</li>
          <li><b>Inside one-to-one:</b> private chat, a program written for that one client, and
          &mdash; only when she turns sharing on &mdash; her meals, her weigh-ins and her progress, day
          by day. That is the only place private data is ever shown.</li>
          <li><b>Members pay on your page.</b> Card, Apple Pay, Google Pay. Recurring billing, invoices,
          refunds and tax are handled for you.</li>
          <li><b>You get paid</b> every Monday where Stripe operates in your country, and monthly by
          bank transfer against an invoice everywhere else.</li>
          <li><b>What it costs you:</b> nothing to set up, nothing per month, nothing per member. Our
          first 100 founding creators keep 95% of what they earn after payment fees, and that rate stays
          with the account.</li>
        </ul>
        <p class="note">None of this asks you to leave what you already use. If you coach inside another
        app, or sell a program somewhere else, that stays exactly as it is &mdash; a club on Sage is the
        tier underneath it, at a price a follower can say yes to without booking a call.</p>
      </section>

      <section id="faq" class="faq">
        <p class="snum">07</p>
        <h2>Questions coaches ask</h2>
        <details open><summary>How much can a fitness coach make from a paid community?</summary><p>It depends on audience size and how the club is sold. At 0.5% of followers paying $19/month, a 50K account is about 250 members and $4,750/month recurring; at 1% it doubles. Creators who sell only from a bio link sit at the bottom of that range; a link sent in a conversation, and a challenge with a start date, push it up.</p></details>
        <details><summary>What percentage of followers convert to paying members?</summary><p>A small one. The most successful fitness creator business ever built reached 2.8% of its Instagram following after a decade &mdash; that is the ceiling, not the norm. A reasonable number to plan with is 0.5%, and where you sell matters more than the price you pick.</p></details>
        <details><summary>Is a club better than selling a one-time program?</summary><p>A one-time program earns once per person. A club earns every month and is where people actually do the work. Many creators keep the program as the front door and move the ongoing part (tracking, accountability, check-ins) into the club. On Sage, programs live inside the club as included content or one-time unlocks.</p></details>
        <details><summary>What makes a club inside a fitness app different?</summary><p>A general community tool gives you a feed: your members are names and posts. A per-client coaching tool gives you programming, but no audience and no community. Sage is a fitness app people already use every day &mdash; they log their meals from a photo, their training and their weigh-ins &mdash; and your club lives inside it: your programs, your channels, and challenges scored on kg lost and percentage of bodyweight. In 1:1, when a client turns sharing on, you see their food and weight day by day. You pay nothing until you earn.</p></details>
        <p class="note" style="margin-top:14px">Everything else a creator asks &mdash; how the 95% is calculated, whether you get your members&rsquo; email addresses, what happens if you leave, what is expected of you &mdash; is answered in the <a href="/become-a-coach/faq"><b>creator FAQ</b></a>, with the clause each answer comes from.</p>
      </section>

      <div class="cta" id="apply">
        <div><h3>See what your page and your numbers would look like.</h3><p>Apply as a creator in the Sage Academy app, or send us your Instagram handle and we'll build a preview of your page with an income estimate for your audience, free.</p></div>
        <div class="ctabtns">
          <a class="btn big" href="/become-a-coach#apply">Become a creator →</a>
          <a class="btn big ghost" href="/book">Book a call</a>
        </div>
      </div>
    </main>
  </div>
</div>

<div class="foot"><div class="wrap">Sage Academy · Friday Technologies SRL · Projections are estimates, not promises. · <a href="/become-a-coach">Launch on Sage</a> · <a href="/become-a-coach/guide">Creator Guide</a></div></div>
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
        text: "At 0.5% of followers paying $19/month, a 50K account is about 250 members and $4,750/month recurring; at 1% it doubles. Creators who sell only from a bio link sit at the bottom of that range.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of followers convert to paying members?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small one. The most successful fitness creator business ever built reached 2.8% of its Instagram following after a decade — that is the ceiling, not the norm. A reasonable number to plan with is 0.5%, and where you sell matters more than the price you pick.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a club inside a fitness app different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A general community tool gives the coach a feed where members are names and posts; a per-client coaching tool gives programming but no audience. Sage is a fitness app people use daily, logging meals from a photo, training and weigh-ins, and the coach's club lives inside it, with challenges scored on kg lost and percentage of bodyweight. In 1:1, when the client turns sharing on, the coach sees their food and weight day by day. The coach pays nothing until they earn.",
      },
    },
  ],
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How fitness coaches and creators monetize their audience in 2026",
  datePublished: "2026-09-08",
  dateModified: "2026-09-28",
  author: { "@type": "Organization", name: "Sage Academy" },
  publisher: { "@type": "Organization", name: "Friday Technologies SRL" },
  mainEntityOfPage: "https://www.sageacademy.app/become-a-coach/monetize",
  about: {
    "@type": "SoftwareApplication",
    name: "Sage Academy",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    offers: { "@type": "Offer", price: "7.99", priceCurrency: "USD", description: "Sage Premium is $7.99 a month, or $4.99 for members who join through a creator. Free for coaches to launch; founding creators keep 95% of their earnings after payment fees." },
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
