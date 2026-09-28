/* Sage — Creator FAQ. Public and indexable on purpose: creators paste our email and our contract
   into an AI and ask "what am I missing", so the answers have to be findable. Generated from the
   approved preview (Desktop/Sage/FAQ-creatori-v2-PREVIEW.html) by scratchpad/build_faq_page.py —
   edit the preview and re-run rather than hand-editing the strings below.
   Same shape as /become-a-coach/monetize: scoped CSS, HTML string, FAQPage JSON-LD. */

const CSS = `
  .cfaq{
    --cream:#FBF7EE; --white:#FFFFFF; --ink:#11181C; --muted:#4B5763; --subtle:#8A95A0;
    --border:#E8EBEE; --teal:#0E9AAE; --tealD:#0B8296; --wash:#E4F2F3;
    --font:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    background:var(--cream);color:var(--ink);font-family:var(--font);font-weight:450;line-height:1.62;
    -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
  }
  .cfaq *{box-sizing:border-box}
  .cfaq .wrap{max-width:820px;margin:0 auto;padding:0 clamp(18px,5vw,30px)}
  .cfaq a{color:var(--tealD)}
  .cfaq .nav{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--cream) 92%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
  .cfaq .nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px;max-width:1160px}
  .cfaq .brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit}
  .cfaq .brand .mark{width:28px;height:28px}
  .cfaq .brand span{font-weight:800;font-size:19px;letter-spacing:-.02em}
  .cfaq .btn{display:inline-flex;align-items:center;height:38px;padding:0 18px;border-radius:999px;background:var(--teal);color:#fff;font-weight:600;font-size:14px;text-decoration:none}
  .cfaq .btn.big{height:48px;padding:0 26px;font-size:15px}
  .cfaq .ghead{padding:clamp(40px,6vw,64px) 0 clamp(20px,3vw,28px)}
  .cfaq .kicker{font-size:11.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--tealD);margin:0 0 10px}
  .cfaq h1{font-size:clamp(28px,5vw,42px);letter-spacing:-.035em;line-height:1.12;margin:0 0 14px;font-weight:700}
  .cfaq .lede{font-size:17px;color:var(--muted);margin:0;max-width:64ch}
  .cfaq .body{padding-bottom:70px}
  .cfaq h2{font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--subtle);margin:46px 0 4px}
  .cfaq .h2sub{font-size:14.5px;color:var(--subtle);margin:0 0 14px}
  .cfaq details{background:var(--white);border:1px solid var(--border);border-radius:15px;margin:0 0 10px;overflow:hidden}
  .cfaq details[open]{border-color:#D6DDE2}
  .cfaq summary{list-style:none;cursor:pointer;padding:16px 46px 16px 18px;font-size:16.5px;font-weight:650;letter-spacing:-.011em;position:relative}
  .cfaq summary::-webkit-details-marker{display:none}
  .cfaq summary::after{content:"+";position:absolute;right:18px;top:14px;font-size:20px;font-weight:400;color:var(--subtle)}
  .cfaq details[open] summary::after{content:"−"}
  .cfaq .a{padding:0 18px 17px;font-size:15.3px;color:var(--muted)}
  .cfaq .a p{margin:0 0 11px}
  .cfaq .a p:last-of-type{margin-bottom:0}
  .cfaq .a b,.cfaq .a strong{color:var(--ink);font-weight:650}
  .cfaq .a ul{margin:0 0 11px;padding-left:19px}
  .cfaq .a li{margin:0 0 6px}
  .cfaq .ref{display:inline-block;margin-top:12px;font-size:11.5px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--tealD);background:var(--wash);border-radius:999px;padding:5px 11px}
  .cfaq .calc{width:100%;border-collapse:collapse;margin:4px 0 12px;font-size:14.5px}
  .cfaq .calc th{text-align:left;font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:var(--subtle);padding:0 0 7px;border-bottom:1px solid var(--border)}
  .cfaq .calc td{padding:8px 0;border-bottom:1px solid var(--border)}
  .cfaq .calc td:last-child,.cfaq .calc th:last-child{text-align:right;white-space:nowrap}
  .cfaq .calc tr:last-child td{border-bottom:0;padding-top:11px;color:var(--ink);font-weight:700}
  .cfaq .shots{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 4px}
  .cfaq .shots figure{margin:0}
  .cfaq .shots img{width:100%;border-radius:12px;display:block}
  .cfaq .shots figcaption{font-size:12.5px;color:var(--subtle);margin-top:7px;line-height:1.45}
  @media(max-width:560px){.cfaq .shots{grid-template-columns:1fr}}
  .cfaq .note{background:var(--wash);border-radius:11px;padding:12px 14px;margin:0 0 11px;font-size:14.5px}
  .cfaq .foot{border-top:1px solid var(--border);padding:26px 0 70px;font-size:14.5px;color:var(--subtle)}
  .cfaq .foot p{margin:0 0 8px}
  .cfaq .foot .cta{margin-top:18px}
`;

const HTML = `
  <div class="nav"><div class="wrap">
    <a class="brand" href="/"><svg class="mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#0E9AAE"/><path d="M 51.07 25.99 A 20 20 0 1 1 38.01 12.93" fill="none" stroke="#fff" stroke-width="5.5" stroke-linecap="round"/></svg><span>Sage</span></a>
    <a class="btn" href="/become-a-coach">Launch on Sage</a>
  </div></div>

  <header class="ghead"><div class="wrap">
    <p class="kicker">Sage &middot; For creators</p>
    <h1>The questions creators actually ask.</h1>
    <p class="lede">Straight answers about money, your members, your work and leaving. Every answer names
    the clause it comes from. The full <a href="/creator-agreement">Creator Agreement</a> is public, and
    nothing here overrides it.</p>
  </div></header>

  <main class="wrap body">
  <h2>Money</h2>
    <p class="h2sub">What it costs, and what you keep</p>
  <details><summary>What does it cost me to start?</summary><div class="a"><p><b>Nothing.</b> No setup fee, no monthly platform fee, no charge for having your club open. You are
  not buying a tool from us.</p>
  <p>We are paid out of what you earn, and only out of what you earn: if you sell nothing in a month, we
  are paid nothing that month. There is no minimum, no quota and no contract term.</p>
  <p><b>Founding creators don’t pay for Sage Premium.</b> Members pay for the app; we set yours up on your
  account when we approve you. You will be working inside the same app your members use, so it would be
  strange to charge you for the privilege.</p><span class="ref">Agreement · Section 6</span></div></details>
  <details><summary>How is my share calculated — does the 5% cover the card fees?</summary><div class="a"><p><b>No, and this is the part worth reading slowly.</b> The 5% is our fee. Card fees are separate, and
  they come off before the split.</p>
  <p>As a founding creator you keep <b>95% of net revenue</b>. Net means after payment costs, and the
  agreement lists exactly what those are: card and payment processing, currency conversion, payout costs,
  and the provider's fee for keeping your payout account active. They come off the top, so both shares
  carry them in proportion — ours as well as yours.</p>
  <p>Payment costs are not one percentage. Every card payment costs a small fixed amount <b>plus</b> a
  percentage, so the same card costs proportionally more on a $5 subscription than on a $50 one, and the
  percentage moves with where your member's card was issued and which currency they pay in. On club
  prices it usually lands somewhere <b>between 3% and 6%</b>.</p>
  <p>Put together, <b>you keep between about 89% and 92% of the price you set</b> — less on a very cheap
  subscription, or if many of your members pay with cards from another continent, because the fixed part
  of the fee weighs far more on a $5 club than on a $40 one. Treat these as indicative figures rather
  than a promise: the invoice is the exact number.</p>

  <p>On a <b>$14.99</b> monthly club, taking the worst case for payment costs:</p>
  <table class="calc">
    <thead><tr><th>Where it goes</th><th>Amount</th></tr></thead>
    <tbody>
      <tr><td>Member pays</td><td>$14.99</td></tr>
      <tr><td>Payment costs (card, currency, payout)</td><td>&minus; $0.75</td></tr>
      <tr><td>Sage, 5% of what is left</td><td>&minus; $0.71</td></tr>
      <tr><td>You keep</td><td>$13.53 &middot; 90%</td></tr>
    </tbody>
  </table>
  <p>There is no app-store cut in that table, and that is not an oversight. Subscriptions to your offer
  are sold on the web, so Apple and Google take nothing from them. On platforms where members subscribe
  inside the app, 30% comes off the top before anything else is counted.</p>
  <p>Tax sits outside all of it. Where VAT or sales tax applies, the member pays it on top, we collect
  and remit it, and it was never part of your revenue.</p>
  <p>And you never have to take our word for any of it: every payout comes with a self-billed invoice
  showing the sales, the payment costs and your share, line by line.</p><span class="ref">Agreement · Sections 1, 6 and 10</span></div></details>
  <details><summary>Does a member pay anything besides my price?</summary><div class="a"><p>One other thing, in the same checkout: <b>Sage Premium</b>, which is the app itself and the AI behind
  it — the food logging, the tracking, the coaching assistant. It is Sage's own product and Sage's own
  revenue. No creator earnings come from it, which is also why it never reduces your share.</p>
  <p>Joining through your page happens in a browser, where Premium is <b>$4.99 a month</b>. Bought on its
  own inside the app it is <b>$7.99</b>, because the app stores take their cut of anything sold in-app. So
  your members pay less for the same app precisely because they came through you. If someone already has
  Premium, it is skipped at your checkout and they pay only your price.</p>
  <p>Beyond that, nothing. No setup fee, no monthly platform cost, no transaction fee on your side.</p><span class="ref">Agreement · Sections 1 and 6</span></div></details>
  <details><summary>When and how am I paid?</summary><div class="a"><p>Where Stripe operates in your country: <b>every Monday</b>, into your own Stripe account, covering
  every sale that has cleared — typically two to seven days after it was made, depending on your country
  and the payment method.</p>
  <p>You do not raise an invoice. We issue a self-billed invoice for you with every payout, showing the
  sales, the payment costs and your share.</p><span class="ref">Agreement · Sections 6 and 10</span></div></details>
  <details><summary>Can you actually pay me where I live?</summary><div class="a"><p>Direct payouts through Stripe work in <b>33 countries</b> today: the EU, plus the United Kingdom,
  the United States, Canada, Switzerland, Norway and Liechtenstein.</p>
  <p>Outside those, we pay you <b>by bank transfer, monthly, against an invoice</b> — either one you issue
  to Friday Technologies SRL, or one we issue on your behalf. Bank and intermediary fees on that transfer
  are yours, and there is a <b>$50 minimum</b> per transfer, with anything below it carried into the next
  month, because otherwise the transfer costs would eat the payment.</p>
  <p>It is slower and it is monthly rather than weekly. We would rather say that plainly than have you
  find out after you have built the thing.</p><span class="ref">Agreement · Section 6</span></div></details>
  <details><summary>Can you hold my money back?</summary><div class="a"><p>In specific circumstances, yes, and you should know them before you start rather than the week it
  happens.</p>
  <p>We or our payment provider may hold, delay or reserve part of a payout where that is reasonably
  needed to cover refunds, chargebacks, disputes or suspected fraud. If refunds or chargebacks exceed
  your balance, the balance goes negative and you repay the shortfall — from future earnings or
  otherwise — and that obligation survives closing your account.</p>
  <p>In ordinary use, with ordinary refund levels, this never comes up. It exists because someone,
  eventually, refunds more than they earned in a week.</p><span class="ref">Agreement · Section 6</span></div></details>
  <details><summary>Who handles VAT, refunds and cancellations?</summary><div class="a"><p><b>We do, as merchant of record.</b> We sell access to your offer in our own name, collect the money,
  and charge and remit the consumer VAT or sales tax due in the member's country. Your tax relationship
  is with Sage, not with each individual member in each individual country.</p>
  <p>We also honour the refund rights members have by law — for example the 14-day withdrawal right for
  digital services in the EU. When a sale is refunded or charged back, your share of it comes back out of
  your balance, the same as any other refund.</p>
  <p>Members manage and cancel their own subscriptions. There is nothing for you to administer, and
  nobody asks you for a refund in a DM.</p><span class="ref">Agreement · Sections 6 and 11</span></div></details>
  <details><summary>Can you change the 95% later?</summary><div class="a"><p><b>Not your rate.</b> It is written into the agreement: your founding rate stays with your account
  for as long as it is active and in good standing, and it does not change if we later change our fees
  for new creators. Later versions are for the creators who come after you.</p>
  <p>The rest of the agreement can be updated, like any agreement, and we will not pretend otherwise.
  When that happens you get <b>at least 15 days' notice</b>, in writing and in a form you can keep, and
  longer where a change would require you to adapt commercially. You can close your account at any point
  before it takes effect, free of charge. Changes never apply backwards — they do not touch the terms
  that applied to sales you have already made.</p>
  <p>And the version you accepted is kept exactly as it was, with its date and a cryptographic
  fingerprint of its text, for as long as your account exists. You can always read the version you
  signed.</p><span class="ref">Agreement · Sections 8 and 18</span></div></details>
  <details><summary>If I raise my price, what happens to people already paying me?</summary><div class="a"><p>They stay on the price they joined at. Changing the price of your offer changes it for
  <b>new</b> members only: we don’t move existing members onto a new price automatically.</p>
  <p>So you can raise your price as your club gets better without punishing the people who believed in it
  first.</p>
  <p>If you <em>do</em> want to move existing members onto a new price, message us and we will set it up
  for you. It needs notice to them and their right to cancel first &mdash; that is the law anywhere, not
  a Sage rule &mdash; so it is not instant, and some of them will leave. Most creators raise the price
  for new members and leave the early ones where they are.</p><span class="ref">Agreement · Section 6</span></div></details>
  <h2>Your people</h2>
    <p class="h2sub">Who they belong to, and who talks to them</p>
  <details><summary>Do I get my members&rsquo; names and emails? Can I export them?</summary><div class="a"><p><b>Yes.</b> They are your customers.</p>
  <p>In your creator studio you see every member and 1:1 client in one list: their name, their email
  address, what they bought, when they became your customer, what they have paid you, and whether their
  subscription is about to end. You can export the whole list as a spreadsheet whenever you want, and use
  it in your own mail tool.</p>
  <p>Every member is told at checkout, before they pay, that their name and email go to you. Some will
  have signed in with Apple, which gives a forwarding address rather than their own — mail still reaches
  them, and members can add a real address themselves at any time.</p>
  <p>What comes with it: from the moment you hold those addresses, you are responsible for them under
  data-protection law. Use them for your own offers, put a working unsubscribe in anything you send and
  act on it, answer a member who asks what you hold or asks you to delete it, and keep the list secure.
  You may not sell, rent or pass the list to anyone else, and you may not use it to sell a member,
  off Sage, something you are also selling on Sage.</p>
  <p>What you never receive: payment details, and anything members track privately for themselves —
  their weigh-ins, meals, habits, photos and their conversations with the app. The one exception is 1:1
  coaching, where your client can choose to share their food and weight with you.</p><span class="ref">Agreement · Sections 9 and 14</span></div></details>
  <details><summary>Can a member tell me to stop emailing her?</summary><div class="a"><p>Yes, and you have to honour it. That is the other side of getting the list.</p>
  <p>Put a working unsubscribe in anything you send, and act on it when someone uses it. If a member
  asks you directly, that counts too. It is not a Sage rule; it is the law wherever your members live,
  and it applies to you because the list is yours.</p>
  <p>Nothing stops you talking to her inside the club. Unsubscribing is about your mailing list, not
  about her membership.</p><span class="ref">Agreement · Section 9</span></div></details>
  <details><summary>Will Sage market to my members?</summary><div class="a"><p>We send members what running the app requires: their own tracking, their reminders, their receipts,
  and service messages about their subscriptions. Sage Premium is our product and we do promote it.</p>
  <p>We do not email your members to move them to another coach, and we do not sell or rent their
  details to anyone.</p>
  <p>What we do run is a discovery feed and a search, where members can find creators — including you.
  Other creators appear there too. That is how a marketplace works, and it is the same mechanism that
  can bring you members you never reached yourself.</p><span class="ref">Agreement · Sections 7 and 8</span></div></details>
  <details><summary>Will Sage bring me members, or do they all have to come from my audience?</summary><div class="a"><p><b>Plan on bringing your own.</b> Your audience is the engine; we are the shop, the checkout and the
  paperwork.</p>
  <p>Discovery and search exist and people do find creators through them, and when someone finds you that
  way you keep the same share as on anyone you brought yourself — we do not charge more for a member we
  introduced. But we will not promise you traffic, a position in the feed or a number of members, and any
  figure we show you as an example is an example, not a forecast.</p>
  <p>If someone tells you a platform will bring you customers, ask them to put the number in the
  contract.</p><span class="ref">Agreement · Sections 7 and 14b</span></div></details>
  <details><summary>Am I locked in — and what happens to members already paying me if I leave?</summary><div class="a"><p>You are not locked in. There is no minimum term and no exit penalty. You can stop selling new
  subscriptions at any time; to close the account you give us 30 days' notice.</p>
  <p>During that period, and until the end of every period your members have already paid for, you stay
  responsible for delivering what they bought. That is the whole obligation — serve out what is paid for.</p>
  <p>Your members are not reassigned to another coach, not pooled, and not sold anything of ours in your
  place. You keep the contact details you already received, with the same responsibilities as before. You
  keep your content.</p>
  <p>If we were ever to end the agreement, you get at least 30 days' notice with the reasons in writing,
  your existing members keep their access during it, and your earnings keep being paid.</p><span class="ref">Agreement · Sections 9 and 12</span></div></details>
  <h2>Your work</h2>
    <p class="h2sub">What is expected, and what happens if it doesn't go well</p>
  <details><summary>What is expected of me each week — and what if I go quiet?</summary><div class="a"><p>There is no posting quota, no minimum hours and nobody checking your activity. What members pay for
  is what you told them they were paying for, and that is the standard: deliver your own offer.</p>
  <p>The one hard line is abandonment. If an offer is sold and then not delivered — nothing published, no
  answers, no sign of you — and it stays that way for <b>30 days</b> after we ask, we may pause new sales,
  tell your members, refund or cancel the active subscriptions, and take the offer down. Where we refund
  members because you stopped delivering, those refunded earnings are recovered from you.</p>
  <p>This is not aimed at a quiet fortnight or a holiday. It exists so that a club that has been
  abandoned does not keep charging people.</p><span class="ref">Agreement · Section 14b</span></div></details>
  <details><summary>What if it doesn&rsquo;t work? Can I close it without a scene?</summary><div class="a"><p>Yes, and it is worth saying out loud because it is the thing most people are actually weighing.</p>
  <p>A first cohort is usually small. Posting to twenty thousand people and getting eleven members is a
  normal beginning, not a failure — and nobody outside sees your member count unless you show it.</p>
  <p>If you decide it is not for you: close the doors to new members, keep serving the people who already
  paid until their period ends, and stop. No refunds are forced, nothing is clawed back, there is no
  penalty, and your club does not get deleted out from under you. An orderly exit costs you nothing.</p>
  <p>The only version that gets expensive is disappearing without telling anyone while people are still
  being charged — see the question above.</p><span class="ref">Agreement · Sections 12 and 14b</span></div></details>
  <details><summary>I&rsquo;m not a certified coach. Does that change things?</summary><div class="a"><p>For a club, no. A club is you sharing how you train and eat, members following your programs and
  logging their own food, and challenges built on consistency. Most transformation creators run clubs
  without a certification. They say so openly and they avoid medical claims, which is exactly right.</p>
  <p>For 1:1 coaching with individual prescriptions, certification matters, and in some countries it is
  required. That is your call and your responsibility, not ours to grant.</p>
  <p>What the agreement does require of everyone: no diagnosing, treating or claiming to cure anything,
  no prescribing medication, no promising specific medical outcomes, no extreme restriction or rapid
  weight-loss claims, and a clear notice on your offers that your content is general fitness and
  nutrition guidance rather than medical advice. Members should be told to see a doctor first — in
  particular if they are pregnant, recovering, or have a condition. Adults only.</p><span class="ref">Agreement · Section 14</span></div></details>
  <details><summary>If a member hurts herself following my plan, who is responsible?</summary><div class="a"><p>Members buy from Sage, so if a complaint ever comes, it comes to us first &mdash; and you hear it from
  us the same day.</p>
  <p>Our member terms say it plainly, and they say it about you too: exercise carries risk, the member
  takes it on voluntarily, and they release <b>both Sage and the creator whose programs they follow</b>
  from claims arising out of it. You are named, not just us.</p>
  <p>Your part is the same as anywhere you have ever coached: stay inside what you know, don&rsquo;t
  diagnose, don&rsquo;t promise medical results, and don&rsquo;t build a program around a condition
  someone has told you about.</p>
  <p>If you coach 1:1, professional liability insurance is worth having. It runs about &euro;100&ndash;250
  a year.</p><span class="ref">Agreement · Section 14 · Member Terms 6.2</span></div></details>
  <details><summary>Who owns my content?</summary><div class="a"><p><b>You do, always.</b> You grant Sage a non-exclusive, royalty-free licence to host and display it
  while the agreement is running, which is what allows it to appear in the app at all. The licence ends
  when the agreement ends, and you keep everything.</p>
  <p>We do not take ownership, we do not get to reuse your material for something else, and nothing here
  makes your content ours.</p><span class="ref">Agreement · Section 5</span></div></details>
  <details><summary>Can I change a program after I have published it?</summary><div class="a"><p>Yes, whenever you like. Fix a typo, re-record a lesson, reorder a week, add something you forgot.
  Members see the current version; nothing is frozen at the moment of sale.</p>
  <p>This is not true everywhere. On some platforms a one-time product is locked the moment it goes
  live, and a spelling mistake means writing to support.</p><span class="ref">—</span></div></details>
  <details><summary>If a member cancels, does she keep what she already bought?</summary><div class="a"><p>A subscription is access while it runs. When it ends, the club, its channels and the programs
  included in it close &mdash; that is what a membership is.</p>
  <p>Anything bought separately as a one-off stays hers. She paid once for that thing, so it does not
  disappear because she stopped paying monthly for something else.</p><span class="ref">—</span></div></details>
  <h2>Practical</h2>
    <p class="h2sub">Before you decide</p>
  <details><summary>What do I actually need before I can open?</summary><div class="a"><p>Two things: <b>a price</b> on your offer, and <b>your payouts connected</b> so members have a way
  to pay you. Then you can go live.</p>
  <p>We do not hold you to a content quota before you are allowed to sell &mdash; no minimum number of
  programs, no required weeks of material. What goes inside is yours to decide, and you can keep adding
  to it after you open.</p>
  <p>In practice most creators want something ready for the first week, so members who join on day one
  find the place already alive. That is judgement, not a rule.</p><span class="ref">—</span></div></details>
  <details><summary>I already use another coaching app. Does this clash?</summary><div class="a"><p>No, and this is the most common misunderstanding in our inbox.</p>
  <p>Your coaching app stays exactly as it is. Nobody is asking you to migrate your one-to-one clients,
  rebuild your programs, or leave a tool that works. A club is the tier <b>below</b> your one-to-one — a
  monthly home for the hundreds of people who follow you, like what you do, and will never pay
  four figures for individual coaching.</p>
  <p>Between "I follow her" and "I train with her" there is usually no step at a monthly price. That step
  is what a club is.</p><span class="ref">Agreement · Section 4</span></div></details>
  <details><summary>Is there any exclusivity? Can I keep selling elsewhere?</summary><div class="a"><p>There is no exclusivity. Keep your own site, your own programs, your own products, your other
  platforms, your existing list. You set your own prices here and you can change them whenever you want.</p>
  <p><b>Already selling on Gumroad, Stan Store or your own site? Keep doing it.</b> Those are your
  products, on your shop, and you can tell your members about them. Nothing here touches that.</p>
  <p><b>The only limits are inside Sage itself.</b> Don&rsquo;t take an offer you are selling <em>here</em>
  and route your Sage members to buy that same thing elsewhere to skip the fee, and don&rsquo;t advertise
  a competing platform in our app. That is the whole of it.</p>
  <p><b>What you do with your list outside Sage is your own business</b> &mdash; it says so in the
  agreement, in those words. Your audience, your site, your other platforms and everything you built
  before are untouched and always were, and nothing stops you telling any of them where else you work.</p><span class="ref">Agreement · Section 14</span></div></details>
  <details><summary>What does the inside of a club actually look like?</summary><div class="a"><p>Channels you create and name, where your members talk and you post; programs and lessons you build
  once; challenges with a start date and a leaderboard; and a private one-to-one chat if you also coach
  individually. Members do all of it inside the app they already use to log their food and their
  training.</p>
  <div class="shots">
    <figure>
      <img src="/images/creator-docs/34-channel-general.webp" alt="A channel inside a Sage club: members posting, reactions, and tips" loading="lazy">
      <figcaption>A channel inside a club &mdash; members talking, reacting, and tipping.</figcaption>
    </figure>
    <figure>
      <img src="/images/creator-docs/40-classroom.webp" alt="The classroom inside a Sage club, with programs the creator has built" loading="lazy">
      <figcaption>The classroom &mdash; the programs you build, published or still in draft.</figcaption>
    </figure>
  </div>
  <p>Rather than only describe it, we film it too: short walkthroughs of a club seen by a member, and of
  a creator building one from scratch.</p><span class="ref">—</span></div></details>
  <details><summary>What tax information do you need, and what do you report about me?</summary><div class="a"><p>As an EU platform we are required each year to report certain creators to the Romanian tax
  authority under the DAC7 directive. So we collect and keep current: your full legal name and address,
  your date of birth or company registration number, your tax identification number and who issued it,
  your VAT number if you have one, and your payout account details. Creators in the United States also
  provide a W-9 or W-8.</p>
  <p>This is a legal obligation on us, not a preference. If the information is missing after two
  reminders we have to suspend payouts.</p>
  <p>What you owe on your earnings — income tax, contributions — you declare yourself, where you live.
  We do not do that for you, and no platform does.</p><span class="ref">Agreement · Section 11</span></div></details>
  <details><summary>Who am I actually contracting with?</summary><div class="a"><p><b>Friday Technologies SRL</b>, a Romanian company: Trade Register J40/11353/2022, fiscal code
  46304555, registered at Șoseaua Pipera 61, Bucharest. Payments run through Stripe, and you hold your
  own Stripe account in your own name.</p>
  <p>Governing law is Romanian and the courts of Bucharest have jurisdiction, without affecting any
  mandatory protection you have where you live. Before anyone goes near a court, the agreement requires
  us to talk first — you raise it in writing, and we have 30 days to sort it out.</p><span class="ref">Agreement · Sections 19, 20 and 21</span></div></details>
  </main>

  <footer class="foot"><div class="wrap">
    <p>The full Creator Agreement is at <a href="/creator-agreement">sageacademy.app/creator-agreement</a>.
    If something here and the agreement ever disagree, the agreement is what governs.</p>
    <p>Anything not answered here: <a href="mailto:contact@sageacademy.app">contact@sageacademy.app</a>.</p>
    <p class="cta"><a class="btn big" href="/become-a-coach">Launch on Sage</a></p>
  </div></footer>`;

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does it cost me to start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nothing. No setup fee, no monthly platform fee, no charge for having your club open. You are not buying a tool from us. We are paid out of what you earn, and only out of what you earn: if you sell nothing in a month, we are paid nothing that month. There is no minimum, no quota and no contract term. Founding creators don’t pay for Sage Premium. Members pay for the app; we set yours up on your account when we approve you. You will be working inside the same app your members use, so it would be strange to charge you for the privilege."
      }
    },
    {
      "@type": "Question",
      "name": "How is my share calculated — does the 5% cover the card fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, and this is the part worth reading slowly. The 5% is our fee. Card fees are separate, and they come off before the split. As a founding creator you keep 95% of net revenue . Net means after payment costs, and the agreement lists exactly what those are: card and payment processing, currency conversion, payout costs, and the provider's fee for keeping your payout account active. They come off the top, so both shares carry them in proportion — ours as well as yours. Payment costs are not one percentage. Every card payment costs a small fixed amount plus a percentage, so the same card costs proportionally more on a $5 subscription than on a $50 one, and the percentage moves with where your member's card was issued and which currency they pay in. On club prices it usually lands somewhere between 3% and 6% . Put together, you keep between about 89% and 92% of the price you set — less on a very cheap subscription, or if many of your members pay with cards from another continent, because the fixed part of the fee weighs far more on a $5 club than on a $40 one. Treat these as indicative figures rather than a promise: the invoice is the exact number. On a $14.99 monthly club, taking the worst case for payment costs: Where it goes Amount Member pays $14.99 Payment costs (card, currency, payout) − $0.75 Sage, 5% of what is left − $0.71 You keep $13.53 · 90% There is no app-store cut in that table, and that is not an oversight. Subscriptions to your offer are sold on the web, so Apple and Google take nothing from them. On platforms where members subscribe inside the app, 30% comes off the top before anything else is counted. Tax sits outside all of it. Where VAT or sales tax applies, the member pays it on top, we collect and remit it, and it was never part of your revenue. And you never have to take our word for any of it: every payout comes with a self-billed invoice showing the sales, the payment costs and your share, line by line."
      }
    },
    {
      "@type": "Question",
      "name": "Does a member pay anything besides my price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One other thing, in the same checkout: Sage Premium , which is the app itself and the AI behind it — the food logging, the tracking, the coaching assistant. It is Sage's own product and Sage's own revenue. No creator earnings come from it, which is also why it never reduces your share. Joining through your page happens in a browser, where Premium is $4.99 a month . Bought on its own inside the app it is $7.99 , because the app stores take their cut of anything sold in-app. So your members pay less for the same app precisely because they came through you. If someone already has Premium, it is skipped at your checkout and they pay only your price. Beyond that, nothing. No setup fee, no monthly platform cost, no transaction fee on your side."
      }
    },
    {
      "@type": "Question",
      "name": "When and how am I paid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Where Stripe operates in your country: every Monday , into your own Stripe account, covering every sale that has cleared — typically two to seven days after it was made, depending on your country and the payment method. You do not raise an invoice. We issue a self-billed invoice for you with every payout, showing the sales, the payment costs and your share."
      }
    },
    {
      "@type": "Question",
      "name": "Can you actually pay me where I live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct payouts through Stripe work in 33 countries today: the EU, plus the United Kingdom, the United States, Canada, Switzerland, Norway and Liechtenstein. Outside those, we pay you by bank transfer, monthly, against an invoice — either one you issue to Friday Technologies SRL, or one we issue on your behalf. Bank and intermediary fees on that transfer are yours, and there is a $50 minimum per transfer, with anything below it carried into the next month, because otherwise the transfer costs would eat the payment. It is slower and it is monthly rather than weekly. We would rather say that plainly than have you find out after you have built the thing."
      }
    },
    {
      "@type": "Question",
      "name": "Can you hold my money back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In specific circumstances, yes, and you should know them before you start rather than the week it happens. We or our payment provider may hold, delay or reserve part of a payout where that is reasonably needed to cover refunds, chargebacks, disputes or suspected fraud. If refunds or chargebacks exceed your balance, the balance goes negative and you repay the shortfall — from future earnings or otherwise — and that obligation survives closing your account. In ordinary use, with ordinary refund levels, this never comes up. It exists because someone, eventually, refunds more than they earned in a week."
      }
    },
    {
      "@type": "Question",
      "name": "Who handles VAT, refunds and cancellations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do, as merchant of record. We sell access to your offer in our own name, collect the money, and charge and remit the consumer VAT or sales tax due in the member's country. Your tax relationship is with Sage, not with each individual member in each individual country. We also honour the refund rights members have by law — for example the 14-day withdrawal right for digital services in the EU. When a sale is refunded or charged back, your share of it comes back out of your balance, the same as any other refund. Members manage and cancel their own subscriptions. There is nothing for you to administer, and nobody asks you for a refund in a DM."
      }
    },
    {
      "@type": "Question",
      "name": "Can you change the 95% later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not your rate. It is written into the agreement: your founding rate stays with your account for as long as it is active and in good standing, and it does not change if we later change our fees for new creators. Later versions are for the creators who come after you. The rest of the agreement can be updated, like any agreement, and we will not pretend otherwise. When that happens you get at least 15 days' notice , in writing and in a form you can keep, and longer where a change would require you to adapt commercially. You can close your account at any point before it takes effect, free of charge. Changes never apply backwards — they do not touch the terms that applied to sales you have already made. And the version you accepted is kept exactly as it was, with its date and a cryptographic fingerprint of its text, for as long as your account exists. You can always read the version you signed."
      }
    },
    {
      "@type": "Question",
      "name": "If I raise my price, what happens to people already paying me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They stay on the price they joined at. Changing the price of your offer changes it for new members only: we don’t move existing members onto a new price automatically. So you can raise your price as your club gets better without punishing the people who believed in it first. If you do want to move existing members onto a new price, message us and we will set it up for you. It needs notice to them and their right to cancel first — that is the law anywhere, not a Sage rule — so it is not instant, and some of them will leave. Most creators raise the price for new members and leave the early ones where they are."
      }
    },
    {
      "@type": "Question",
      "name": "Do I get my members' names and emails? Can I export them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. They are your customers. In your creator studio you see every member and 1:1 client in one list: their name, their email address, what they bought, when they became your customer, what they have paid you, and whether their subscription is about to end. You can export the whole list as a spreadsheet whenever you want, and use it in your own mail tool. Every member is told at checkout, before they pay, that their name and email go to you. Some will have signed in with Apple, which gives a forwarding address rather than their own — mail still reaches them, and members can add a real address themselves at any time. What comes with it: from the moment you hold those addresses, you are responsible for them under data-protection law. Use them for your own offers, put a working unsubscribe in anything you send and act on it, answer a member who asks what you hold or asks you to delete it, and keep the list secure. You may not sell, rent or pass the list to anyone else, and you may not use it to sell a member, off Sage, something you are also selling on Sage. What you never receive: payment details, and anything members track privately for themselves — their weigh-ins, meals, habits, photos and their conversations with the app. The one exception is 1:1 coaching, where your client can choose to share their food and weight with you."
      }
    },
    {
      "@type": "Question",
      "name": "Can a member tell me to stop emailing her?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and you have to honour it. That is the other side of getting the list. Put a working unsubscribe in anything you send, and act on it when someone uses it. If a member asks you directly, that counts too. It is not a Sage rule; it is the law wherever your members live, and it applies to you because the list is yours. Nothing stops you talking to her inside the club. Unsubscribing is about your mailing list, not about her membership."
      }
    },
    {
      "@type": "Question",
      "name": "Will Sage market to my members?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We send members what running the app requires: their own tracking, their reminders, their receipts, and service messages about their subscriptions. Sage Premium is our product and we do promote it. We do not email your members to move them to another coach, and we do not sell or rent their details to anyone. What we do run is a discovery feed and a search, where members can find creators — including you. Other creators appear there too. That is how a marketplace works, and it is the same mechanism that can bring you members you never reached yourself."
      }
    },
    {
      "@type": "Question",
      "name": "Will Sage bring me members, or do they all have to come from my audience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan on bringing your own. Your audience is the engine; we are the shop, the checkout and the paperwork. Discovery and search exist and people do find creators through them, and when someone finds you that way you keep the same share as on anyone you brought yourself — we do not charge more for a member we introduced. But we will not promise you traffic, a position in the feed or a number of members, and any figure we show you as an example is an example, not a forecast. If someone tells you a platform will bring you customers, ask them to put the number in the contract."
      }
    },
    {
      "@type": "Question",
      "name": "Am I locked in — and what happens to members already paying me if I leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You are not locked in. There is no minimum term and no exit penalty. You can stop selling new subscriptions at any time; to close the account you give us 30 days' notice. During that period, and until the end of every period your members have already paid for, you stay responsible for delivering what they bought. That is the whole obligation — serve out what is paid for. Your members are not reassigned to another coach, not pooled, and not sold anything of ours in your place. You keep the contact details you already received, with the same responsibilities as before. You keep your content. If we were ever to end the agreement, you get at least 30 days' notice with the reasons in writing, your existing members keep their access during it, and your earnings keep being paid."
      }
    },
    {
      "@type": "Question",
      "name": "What is expected of me each week — and what if I go quiet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no posting quota, no minimum hours and nobody checking your activity. What members pay for is what you told them they were paying for, and that is the standard: deliver your own offer. The one hard line is abandonment. If an offer is sold and then not delivered — nothing published, no answers, no sign of you — and it stays that way for 30 days after we ask, we may pause new sales, tell your members, refund or cancel the active subscriptions, and take the offer down. Where we refund members because you stopped delivering, those refunded earnings are recovered from you. This is not aimed at a quiet fortnight or a holiday. It exists so that a club that has been abandoned does not keep charging people."
      }
    },
    {
      "@type": "Question",
      "name": "What if it doesn't work? Can I close it without a scene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and it is worth saying out loud because it is the thing most people are actually weighing. A first cohort is usually small. Posting to twenty thousand people and getting eleven members is a normal beginning, not a failure — and nobody outside sees your member count unless you show it. If you decide it is not for you: close the doors to new members, keep serving the people who already paid until their period ends, and stop. No refunds are forced, nothing is clawed back, there is no penalty, and your club does not get deleted out from under you. An orderly exit costs you nothing. The only version that gets expensive is disappearing without telling anyone while people are still being charged — see the question above."
      }
    },
    {
      "@type": "Question",
      "name": "I'm not a certified coach. Does that change things?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a club, no. A club is you sharing how you train and eat, members following your programs and logging their own food, and challenges built on consistency. Most transformation creators run clubs without a certification. They say so openly and they avoid medical claims, which is exactly right. For 1:1 coaching with individual prescriptions, certification matters, and in some countries it is required. That is your call and your responsibility, not ours to grant. What the agreement does require of everyone: no diagnosing, treating or claiming to cure anything, no prescribing medication, no promising specific medical outcomes, no extreme restriction or rapid weight-loss claims, and a clear notice on your offers that your content is general fitness and nutrition guidance rather than medical advice. Members should be told to see a doctor first — in particular if they are pregnant, recovering, or have a condition. Adults only."
      }
    },
    {
      "@type": "Question",
      "name": "If a member hurts herself following my plan, who is responsible?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Members buy from Sage, so if a complaint ever comes, it comes to us first — and you hear it from us the same day. Our member terms say it plainly, and they say it about you too: exercise carries risk, the member takes it on voluntarily, and they release both Sage and the creator whose programs they follow from claims arising out of it. You are named, not just us. Your part is the same as anywhere you have ever coached: stay inside what you know, don’t diagnose, don’t promise medical results, and don’t build a program around a condition someone has told you about. If you coach 1:1, professional liability insurance is worth having. It runs about €100–250 a year."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns my content?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, always. You grant Sage a non-exclusive, royalty-free licence to host and display it while the agreement is running, which is what allows it to appear in the app at all. The licence ends when the agreement ends, and you keep everything. We do not take ownership, we do not get to reuse your material for something else, and nothing here makes your content ours."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change a program after I have published it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, whenever you like. Fix a typo, re-record a lesson, reorder a week, add something you forgot. Members see the current version; nothing is frozen at the moment of sale. This is not true everywhere. On some platforms a one-time product is locked the moment it goes live, and a spelling mistake means writing to support."
      }
    },
    {
      "@type": "Question",
      "name": "If a member cancels, does she keep what she already bought?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A subscription is access while it runs. When it ends, the club, its channels and the programs included in it close — that is what a membership is. Anything bought separately as a one-off stays hers. She paid once for that thing, so it does not disappear because she stopped paying monthly for something else."
      }
    },
    {
      "@type": "Question",
      "name": "What do I actually need before I can open?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two things: a price on your offer, and your payouts connected so members have a way to pay you. Then you can go live. We do not hold you to a content quota before you are allowed to sell — no minimum number of programs, no required weeks of material. What goes inside is yours to decide, and you can keep adding to it after you open. In practice most creators want something ready for the first week, so members who join on day one find the place already alive. That is judgement, not a rule."
      }
    },
    {
      "@type": "Question",
      "name": "I already use another coaching app. Does this clash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, and this is the most common misunderstanding in our inbox. Your coaching app stays exactly as it is. Nobody is asking you to migrate your one-to-one clients, rebuild your programs, or leave a tool that works. A club is the tier below your one-to-one — a monthly home for the hundreds of people who follow you, like what you do, and will never pay four figures for individual coaching. Between \"I follow her\" and \"I train with her\" there is usually no step at a monthly price. That step is what a club is."
      }
    },
    {
      "@type": "Question",
      "name": "Is there any exclusivity? Can I keep selling elsewhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no exclusivity. Keep your own site, your own programs, your own products, your other platforms, your existing list. You set your own prices here and you can change them whenever you want. Already selling on Gumroad, Stan Store or your own site? Keep doing it. Those are your products, on your shop, and you can tell your members about them. Nothing here touches that. The only limits are inside Sage itself. Don’t take an offer you are selling here and route your Sage members to buy that same thing elsewhere to skip the fee, and don’t advertise a competing platform in our app. That is the whole of it. What you do with your list outside Sage is your own business — it says so in the agreement, in those words. Your audience, your site, your other platforms and everything you built before are untouched and always were, and nothing stops you telling any of them where else you work."
      }
    },
    {
      "@type": "Question",
      "name": "What does the inside of a club actually look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Channels you create and name, where your members talk and you post; programs and lessons you build once; challenges with a start date and a leaderboard; and a private one-to-one chat if you also coach individually. Members do all of it inside the app they already use to log their food and their training. A channel inside a club — members talking, reacting, and tipping. The classroom — the programs you build, published or still in draft. Rather than only describe it, we film it too: short walkthroughs of a club seen by a member, and of a creator building one from scratch."
      }
    },
    {
      "@type": "Question",
      "name": "What tax information do you need, and what do you report about me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As an EU platform we are required each year to report certain creators to the Romanian tax authority under the DAC7 directive. So we collect and keep current: your full legal name and address, your date of birth or company registration number, your tax identification number and who issued it, your VAT number if you have one, and your payout account details. Creators in the United States also provide a W-9 or W-8. This is a legal obligation on us, not a preference. If the information is missing after two reminders we have to suspend payouts. What you owe on your earnings — income tax, contributions — you declare yourself, where you live. We do not do that for you, and no platform does."
      }
    },
    {
      "@type": "Question",
      "name": "Who am I actually contracting with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Friday Technologies SRL , a Romanian company: Trade Register J40/11353/2022, fiscal code 46304555, registered at Șoseaua Pipera 61, Bucharest. Payments run through Stripe, and you hold your own Stripe account in your own name. Governing law is Romanian and the courts of Bucharest have jurisdiction, without affecting any mandatory protection you have where you live. Before anyone goes near a court, the agreement requires us to talk first — you raise it in writing, and we have 30 days to sort it out."
      }
    }
  ]
};

export default function CreatorFaqPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cfaq" dangerouslySetInnerHTML={{ __html: HTML }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
    </>
  );
}
