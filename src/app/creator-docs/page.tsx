/* Sage — Creator Docs (2026-09-11). Step-by-step documentation with real app
   screenshots and numbered markers. Standalone page (own chrome; /creator-docs is
   standalone in SiteChrome). Scoped under .cguide. Screens live in /public/images/creator-docs.
   Marker coordinates are percentages of the screenshot (x from left, y from top). */

type Marker = { n: number; x: number; y: number };
type Field = { n?: number; label: string; text: string; example?: string };
type Figure = { img: string; alt: string; markers: Marker[] };
type Step = { id: string; kicker: string; title: string; lead: string; figure?: Figure; fields?: Field[]; note?: { kind: 'tip' | 'warn'; text: string } };
type Section = { id: string; num: string; title: string; lead: string; steps: Step[] };

const IMG = (n: string) => `/images/creator-docs/${n}.webp`;

const SECTIONS: Section[] = [
  {
    id: 'start', num: '01', title: 'Where everything is',
    lead: 'Once you are approved as a creator, everything you build lives in the Academy tab, under Creator studio.',
    steps: [
      {
        id: 'studio', kicker: 'Academy tab', title: 'Your Creator studio',
        lead: 'Open the Academy tab in the bottom bar and scroll to Creator studio. This is your home base.',
        figure: { img: IMG('01-academy-studio'), alt: 'The Academy tab with Creator studio and Your offers', markers: [{ n: 1, x: 82.1, y: 15.9 }, { n: 2, x: 44.1, y: 41.6 }, { n: 3, x: 95.4, y: 36.8 }, { n: 4, x: 37.2, y: 47.2 }, { n: 5, x: 71.8, y: 69.1 }] },
        fields: [
          { n: 1, label: 'Discover', text: 'The list where members browse coaches and communities. Your Discovery card shows up here.' },
          { n: 2, label: 'Earnings & payouts', text: 'What you earned this month, your balance and payouts.' },
          { n: 3, label: 'Creator profile', text: 'Your name, photo, bio and social link, shared by all your offers.' },
          { n: 4, label: 'Your offers', text: 'Every offer you created. Tap Edit to change one, or tap the offer to open it.' },
          { n: 5, label: 'Create offer', text: 'Start a new 1:1 coaching or a new community.' },
        ],
      },
      {
        id: 'profile', kicker: 'Creator profile', title: 'Set up your creator profile',
        lead: 'Do this first. It appears on every offer you sell.',
        figure: { img: IMG('02-creator-profile'), alt: 'The Creator profile screen', markers: [{ n: 1, x: 35.4, y: 31.5 }, { n: 2, x: 29.0, y: 42.2 }, { n: 3, x: 21.5, y: 55.6 }, { n: 4, x: 35.9, y: 74.2 }] },
        fields: [
          { n: 1, label: 'Your name', text: 'The name members see.', example: 'Maya Brooks' },
          { n: 2, label: 'Handle', text: 'Your link: sageacademy.app/@handle. Pick it once, changing it later breaks old links.', example: 'mayastrong' },
          { n: 3, label: 'Bio', text: 'Two or three lines on who you help and how. Up to 300 characters.', example: 'Strength & fat-loss coach for busy women. Short workouts, real food, weekly check-ins.' },
          { n: 4, label: 'Social link', text: 'Your Instagram, TikTok or YouTube, so people can see your content.' },
        ],
      },
    ],
  },
  {
    id: 'map', num: '02', title: 'The three buttons every offer has',
    lead: 'Your 1:1 coaching and every community open onto the same three buttons. Each one controls a different place where people see you.',
    steps: [
      {
        id: 'three', kicker: '1:1 Coaching · Community', title: 'Inside, Discovery card, Sales page',
        lead: 'Tap Edit on an offer to see them. The box at the top tells you whether the offer is live.',
        figure: { img: IMG('10-coaching-setup'), alt: 'The 1:1 Coaching setup screen with its three buttons', markers: [{ n: 1, x: 58.2, y: 16.9 }, { n: 2, x: 50.5, y: 34.7 }, { n: 3, x: 60.0, y: 44.4 }, { n: 4, x: 52.8, y: 54.1 }] },
        fields: [
          { n: 1, label: 'Live status', text: 'Shows if people can find and buy the offer. It needs a price on the Sales page before you can go live.' },
          { n: 2, label: 'Coaching / Community', text: 'The inside: what clients or members see after they have paid.' },
          { n: 3, label: 'Discovery card', text: 'Your shop window: the small card people scroll past in Discover.' },
          { n: 4, label: 'Sales page', text: 'The page people see before they pay. It is also the link for your bio.' },
        ],
      },
    ],
  },
  {
    id: 'coaching', num: '03', title: 'Your 1:1 coaching, screen by screen',
    lead: 'You can have one 1:1 offer. It is the private, direct channel between you and each client.',
    steps: [
      {
        id: 'c-inside', kicker: 'Button 1 · Coaching', title: 'The inside of your 1:1',
        lead: 'What a client sees once they have subscribed.',
        figure: { img: IMG('11-coaching-inside'), alt: 'The Coaching screen with title, banner and tagline', markers: [{ n: 1, x: 41.8, y: 20.9 }, { n: 2, x: 29.2, y: 34.0 }, { n: 3, x: 29.2, y: 58.4 }] },
        fields: [
          { n: 1, label: 'Program title', text: 'The name of your 1:1.', example: '1:1 Coaching with Maya' },
          { n: 2, label: 'Banner', text: 'A wide photo at the top. Drag to reposition, slide to zoom.' },
          { n: 3, label: 'Tagline', text: 'One line under the title.', example: 'Weekly check-ins on your real data' },
        ],
      },
      {
        id: 'c-card', kicker: 'Button 2 · Discovery card', title: 'Your card in Discover',
        lead: 'Its only job is to earn the tap.',
        figure: { img: IMG('12-coaching-card'), alt: 'The Discovery card screen', markers: [{ n: 1, x: 39.2, y: 66.0 }, { n: 2, x: 65.9, y: 51.1 }, { n: 3, x: 93.1, y: 54.8 }] },
        fields: [
          { n: 1, label: 'Card banner', text: 'Landscape, ideally 1200 × 750 px. Use your strongest photo.' },
          { n: 2, label: 'Card title', text: 'Optional bold line under your name.', example: '1:1 Coaching with Maya' },
          { n: 3, label: 'Card text', text: 'A short hook, up to 3 lines. Write the reason to tap, not a description.', example: 'Real coaching on your real data: weekly check-ins, direct chat and a plan that fits your week.' },
        ],
      },
      {
        id: 'c-sales', kicker: 'Button 3 · Sales page', title: 'The page that sells',
        lead: 'This is where people decide. Spend most of your time here.',
        figure: { img: IMG('13-coaching-sales-top'), alt: 'The top of the Sales page: title, tagline, categories and keywords', markers: [{ n: 1, x: 24.4, y: 23.0 }, { n: 2, x: 29.2, y: 37.9 }, { n: 3, x: 35.4, y: 51.1 }, { n: 4, x: 47.4, y: 73.3 }] },
        fields: [
          { n: 1, label: 'Title', text: 'The name of your offer on this page.', example: '1:1 Coaching with Maya' },
          { n: 2, label: 'Tagline', text: 'One line under the title.', example: 'A plan built around your week, not a template' },
          { n: 3, label: 'Categories', text: 'Up to 2. They decide which filters you appear under in Discover.' },
          { n: 4, label: 'Search keywords', text: 'Comma-separated words people might search.', example: 'strength, fat loss, busy women' },
        ],
      },
      {
        id: 'c-gallery', kicker: 'Sales page', title: 'Gallery and price',
        lead: 'Scroll down the same screen.',
        figure: { img: IMG('14-coaching-sales-gallery'), alt: 'The gallery and price on the Sales page', markers: [{ n: 1, x: 29.7, y: 13.7 }, { n: 2, x: 41.0, y: 37.7 }] },
        fields: [
          { n: 1, label: 'Gallery', text: 'A video and photos at the top of your page. Landscape 16:9 looks best. The first one shows first.' },
          { n: 2, label: 'Price / month', text: 'Billed monthly, clients can cancel any time. Setting a price is what unlocks Go live.', example: '$175' },
        ],
      },
      {
        id: 'c-pitch', kicker: 'Sales page', title: 'The pitch',
        lead: 'Your sales copy, built from blocks. Tap Edit pitch.',
        figure: { img: IMG('17-pitch-editor'), alt: 'The pitch editor with blocks', markers: [] },
        fields: [
          { label: 'Blocks', text: 'Heading, Text, Checklist, Photo, Slider and Video. Add them, reorder them, remove them.' },
          { label: 'A structure that works', text: 'A Heading with the promise, a Text block with your story, a Checklist of what is included, a Slider of photos, then a short Video of you.' },
        ],
      },
      {
        id: 'c-link', kicker: 'Sales page', title: 'Reviews, other offers and your link',
        lead: 'The bottom of the Sales page.',
        figure: { img: IMG('16-coaching-sales-link'), alt: 'Reviews, Show my other offers and Your link', markers: [{ n: 1, x: 30.0, y: 24.1 }, { n: 2, x: 56.2, y: 39.8 }, { n: 3, x: 33.3, y: 57.3 }] },
        fields: [
          { n: 1, label: 'Reviews', text: 'On: reviews show on your page. Off: people can still leave them, they just stay private.' },
          { n: 2, label: 'Show my other offers', text: 'On: your other offers appear at the bottom, so someone on your 1:1 page also sees your community.' },
          { n: 3, label: 'Your link', text: 'Your page on the web, for your Instagram bio, stories and DMs. Copy link copies it, Open shows it in your browser.', example: 'sageacademy.app/mayastrong' },
        ],
        note: { kind: 'tip', text: 'Your link works before you go live, so you can check your page in a browser while you build. After you edit something in the app, refresh the browser page to see the change (it can take up to a minute).' },
      },
      {
        id: 'c-preview', kicker: 'Sales page', title: 'See it the way a client does',
        lead: 'Tap Preview sales page at the bottom of the Sales page. Subscribe is turned off while you look around.',
        figure: { img: IMG('18-preview-1'), alt: 'The Sales page preview as a client sees it', markers: [] },
        fields: [
          { label: 'Top of the page', text: 'Your title, rating, gallery, categories and price, exactly as a client sees them.' },
          { label: 'Further down', text: 'Your pitch, your reviews and, if you turned it on, your other offers.' },
        ],
      },
      {
        id: 'c-clients', kicker: 'Your 1:1', title: 'Your clients',
        lead: 'Tap your 1:1 in Your offers (not Edit) to open it.',
        figure: { img: IMG('19-coaching-home'), alt: 'The 1:1 home with the Classroom and the list of clients', markers: [] },
        fields: [
          { label: 'Classroom', text: 'Programs you share with all your 1:1 clients.' },
          { label: 'Your clients', text: 'Everyone subscribed to your 1:1, with their latest message. Tap a client to open your chat.' },
        ],
      },
      {
        id: 'c-chat', kicker: 'Your 1:1', title: 'Chat with a client',
        lead: 'Tap a client in Your clients to open your private chat.',
        figure: { img: IMG('27-coach-chat'), alt: 'The private 1:1 chat between coach and client', markers: [] },
        fields: [
          { label: 'Messages', text: 'Text, photos, files (for example a PDF plan) and voice notes. Reply to a message, react, edit or delete your own.' },
          { label: 'Tips', text: 'Clients can send you a tip from the chat. It shows as a small event in the conversation.' },
          { label: 'Request payment', text: 'Ask for a one-off amount with a note, for example an extra video form review. The client pays from the chat and it shows as PAID.' },
        ],
      },
      {
        id: 'c-client', kicker: 'Your 1:1', title: 'Your client’s data',
        lead: 'Tap the client’s name at the top of the chat, where it says Tap to view data.',
        figure: { img: IMG('28-coach-client'), alt: 'The client profile with weight, nutrition, habits and measurements', markers: [] },
        fields: [
          { label: 'Profile and weight', text: 'Goal, current weight and progress toward the goal, with the full trend behind See weight trend.' },
          { label: 'Energy balance and meals', text: 'Their calories in and out this week, and what they ate, from what they log in Sage.' },
          { label: 'Habits and measurements', text: 'How their habits went this week and their body measurements, each with See all for the history.' },
          { label: 'Sharing', text: 'You only see what the client chooses to share. If they have not shared their data, you can still message them.' },
        ],
      },
    ],
  },
  {
    id: 'community', num: '04', title: 'Your community (club)',
    lead: 'A community is a paid group, run like a Discord server: channels, programs and challenges. You can have several.',
    steps: [
      {
        id: 'm-setup', kicker: 'Community', title: 'Same three buttons',
        lead: 'Create it from Create offer → Community, give it a name, then tap Edit to fill the three buttons.',
        figure: { img: IMG('20-community-setup'), alt: 'The community setup screen', markers: [{ n: 1, x: 54.6, y: 34.7 }, { n: 2, x: 60.0, y: 46.4 }, { n: 3, x: 52.8, y: 56.1 }] },
        fields: [
          { n: 1, label: 'Community', text: 'Name, banner and tagline: what members see inside.' },
          { n: 2, label: 'Discovery card', text: 'How the community looks in Discover.' },
          { n: 3, label: 'Sales page', text: 'Gallery, prices and pitch: what people see before they join.' },
        ],
      },
      {
        id: 'm-inside', kicker: 'Button 1 · Community', title: 'Name, banner and tagline',
        lead: 'The inside of your club.',
        figure: { img: IMG('21-community-inside-edit'), alt: 'The Community screen with name, banner and tagline', markers: [{ n: 1, x: 47.2, y: 18.7 }, { n: 2, x: 29.2, y: 29.4 }, { n: 3, x: 29.2, y: 53.8 }] },
        fields: [
          { n: 1, label: 'Community name', text: 'The name of your club.', example: 'Strong in 30 Club' },
          { n: 2, label: 'Banner', text: 'A wide photo at the top of the community.' },
          { n: 3, label: 'Tagline', text: 'One line under the name.', example: '30-minute strength workouts for busy women' },
        ],
      },
      {
        id: 'm-card', kicker: 'Button 2 · Discovery card', title: 'The community card',
        lead: 'Same idea as the 1:1 card, with two extras.',
        figure: { img: IMG('22-community-card'), alt: 'The community Discovery card screen', markers: [{ n: 1, x: 61.3, y: 54.0 }, { n: 2, x: 94.9, y: 58.5 }, { n: 3, x: 55.9, y: 62.7 }] },
        fields: [
          { n: 1, label: 'Logo / photo', text: 'Square, 400 × 400 px. The small round image next to your name. Falls back to your profile photo.' },
          { n: 2, label: 'Card text', text: 'A short hook, up to 3 lines.', example: 'Short strength workouts, monthly challenges and a group that keeps you going.' },
          { n: 3, label: 'Member count', text: 'Shows how many members you have. Turn it off while your club is small.' },
        ],
      },
      {
        id: 'm-price', kicker: 'Button 3 · Sales page', title: 'Monthly and yearly price',
        lead: 'A community can be sold monthly, yearly, or both.',
        figure: { img: IMG('24-community-sales-price'), alt: 'Monthly and yearly price on the community Sales page', markers: [{ n: 1, x: 41.0, y: 13.7 }, { n: 2, x: 36.7, y: 26.9 }] },
        fields: [
          { n: 1, label: 'Price / month', text: 'Leave it empty to sell yearly only.', example: '$30' },
          { n: 2, label: 'Price / year', text: 'Optional, usually a discount on twelve months.', example: '$300' },
        ],
      },
      {
        id: 'm-preview', kicker: 'Sales page', title: 'Preview your community page',
        lead: 'Same as the 1:1: tap Preview sales page to see what people see before they join.',
        figure: { img: IMG('26-community-preview-1'), alt: 'The community page preview as a visitor sees it', markers: [] },
        fields: [
          { label: 'Gallery', text: 'The first item shows first. For example, a short intro video, then a few slides about what is inside.' },
          { label: 'Join', text: 'Join is turned off in preview, so you can check everything safely.' },
        ],
      },
    ],
  },
  {
    id: 'inside', num: '05', title: 'Running your club: channels and members',
    lead: 'Open your community to manage it. Tap the community itself in Your offers, not Edit.',
    steps: [
      {
        id: 'i-page', kicker: 'Your community', title: 'The sections of your club',
        lead: 'About, Classroom, Challenges, Channels and Members.',
        figure: { img: IMG('30-community-page'), alt: 'The community page as the owner sees it', markers: [{ n: 1, x: 49.7, y: 56.8 }, { n: 2, x: 36.7, y: 64.6 }, { n: 3, x: 33.3, y: 86.1 }, { n: 4, x: 39.0, y: 46.4 }] },
        fields: [
          { n: 1, label: 'Classroom', text: 'Where your programs live.' },
          { n: 2, label: 'Challenges', text: 'Each challenge gets its own leaderboard and chat.' },
          { n: 3, label: 'Channels', text: 'The group chats.' },
          { label: 'Members', text: 'Everyone in the club, plus moderation.' },
          { n: 4, label: 'Reports', text: 'When a member reports a message, it shows up here with a red badge. Open it to see the message and decide what to do: dismiss the report, or mute or remove the member.' },
        ],
      },
      {
        id: 'i-channel', kicker: 'Channels', title: 'Add a channel',
        lead: 'Tap Add channel and choose a type.',
        figure: { img: IMG('32-add-channel'), alt: 'The Add channel form', markers: [{ n: 1, x: 53.8, y: 35.7 }, { n: 2, x: 91.5, y: 35.7 }, { n: 3, x: 41.3, y: 40.6 }, { n: 4, x: 28.7, y: 59.2 }] },
        fields: [
          { n: 1, label: 'Chat', text: 'Everyone can post. Good for general, wins or meal ideas.' },
          { n: 2, label: 'Announcement', text: 'Only you post, members read. Good for weekly updates.' },
          { n: 3, label: 'Slow mode', text: 'Limits how often each person can post, so a busy chat stays readable.' },
          { n: 4, label: 'Tips', text: 'Lets members send you a tip inside that channel.' },
        ],
        note: { kind: 'tip', text: 'Two or three channels are enough to start: one Announcement and one or two Chats.' },
      },
      {
        id: 'i-chat', kicker: 'Channels', title: 'Talking with your members',
        lead: 'Members talk in the channels. You join the conversation there.',
        figure: { img: IMG('34-channel-general'), alt: 'A community chat channel with messages and tips', markers: [] },
        fields: [
          { label: 'Group chat', text: 'Everything in a community happens in the channels. You can reply to a message, react, post photos and share updates in an Announcement channel, where only you post.' },
          { label: 'Tips', text: 'If Tips is on for the channel, members can send a tip that shows in the chat, and the biggest tip of the week sits at the top.' },
          { label: 'Private chat', text: 'There are no private messages inside a community. A member who wants a private conversation with you can subscribe to your 1:1.' },
        ],
      },
      {
        id: 'i-members', kicker: 'Members', title: 'Members and Captains',
        lead: 'Tap Members to see everyone in the club.',
        figure: { img: IMG('33-members'), alt: 'The members list', markers: [{ n: 1, x: 55.1, y: 92.9 }, { n: 2, x: 95.4, y: 93.8 }] },
        fields: [
          { n: 1, label: 'Captain', text: 'Make a trusted member a Captain, a moderator who helps keep the chat tidy.' },
          { n: 2, label: 'Mute or remove', text: 'Handle anyone who breaks the rules.' },
        ],
      },
    ],
  },
  {
    id: 'programs', num: '06', title: 'Uploading programs',
    lead: 'Programs are what people follow week by week. They live in the Classroom of a community or of your 1:1.',
    steps: [
      {
        id: 'p-classroom', kicker: 'Classroom', title: 'Create a program',
        lead: 'Open your community, tap Classroom, then + Program.',
        figure: { img: IMG('40-classroom'), alt: 'The Classroom with programs', markers: [{ n: 1, x: 95.4, y: 9.6 }] },
        fields: [ { n: 1, label: '+ Program', text: 'Creates a new program. It starts as a Draft that only you can see.' } ],
      },
      {
        id: 'p-builder', kicker: 'Program builder', title: 'Title, cover and access',
        lead: 'Fill the basics at the top of the builder.',
        figure: { img: IMG('41-program-builder'), alt: 'The program builder: title, description, cover and access', markers: [{ n: 1, x: 23.8, y: 15.6 }, { n: 2, x: 25.9, y: 34.1 }, { n: 3, x: 27.2, y: 66.8 }] },
        fields: [
          { n: 1, label: 'Title', text: 'The name of the program.', example: '8-Week Strength Foundations' },
          { label: 'Short description', text: 'Optional, one sentence on who it is for.', example: 'Four lifting days a week, with progressions' },
          { n: 2, label: 'Cover', text: 'A landscape image for the program tile.' },
          { n: 3, label: 'Access', text: 'Included: every member gets it with their subscription. PPV: members unlock it once, for a price you set in USD.' },
        ],
      },
      {
        id: 'p-lessons', kicker: 'Program builder', title: 'Lessons',
        lead: 'Scroll down to Lessons. Type a lesson name and add it, then tap Edit to fill it in.',
        figure: { img: IMG('42-program-builder-lessons'), alt: 'Lessons in the program builder', markers: [{ n: 1, x: 29.5, y: 23.7 }] },
        fields: [ { n: 1, label: 'Add a lesson', text: 'One lesson per week works well.', example: 'Week 1 · Foundations' } ],
      },
      {
        id: 'p-lesson', kicker: 'Lesson editor', title: 'What goes inside a lesson',
        lead: 'Give the lesson a title, then tap Add block.',
        figure: { img: IMG('43-lesson-editor'), alt: 'The lesson editor with blocks', markers: [{ n: 1, x: 33.8, y: 76.5 }, { n: 2, x: 55.1, y: 76.5 }, { n: 3, x: 76.4, y: 76.5 }, { n: 4, x: 34.4, y: 82.2 }] },
        fields: [
          { n: 1, label: 'Video', text: 'Paste a link to your video.' },
          { n: 2, label: 'Text', text: 'The written plan: sets, reps, notes.' },
          { n: 3, label: 'PDF', text: 'Upload a PDF you already have.' },
          { n: 4, label: 'Image', text: 'A photo or a diagram.' },
        ],
        note: { kind: 'tip', text: 'Every program stays a Draft, visible only to you, until you press Go live on that program. Build it at your own pace.' },
      },
    ],
  },
  {
    id: 'challenges', num: '07', title: 'Running a challenge',
    lead: 'A challenge is a program with a leaderboard and its own chat. You decide how long it runs.',
    steps: [
      {
        id: 'ch', kicker: 'Program builder', title: 'Turn a program into a challenge',
        lead: 'In the program builder, switch Regular to Challenge and confirm with Make it a challenge.',
        figure: { img: IMG('45-challenge-settings'), alt: 'The Regular / Challenge switch in the program builder', markers: [{ n: 1, x: 37.9, y: 13.7 }, { n: 2, x: 25.9, y: 29.6 }, { n: 3, x: 30.3, y: 42.8 }, { n: 4, x: 31.8, y: 49.0 }] },
        fields: [
          { n: 1, label: 'Challenge name', text: 'The title of the leaderboard and its chat.', example: 'Spring Cut' },
          { n: 2, label: 'Length', text: 'How many weeks it runs.' },
          { n: 3, label: 'Join open', text: 'How many days after the start people can still join.' },
          { n: 4, label: 'Enrollment', text: 'Open or Closed. Close it once you want the group fixed.' },
        ],
        note: { kind: 'warn', text: 'A challenge starts the day you switch it on. Build it as a regular program first, fill in the lessons, and switch it to Challenge on the day you want it to begin.' },
      },
    ],
  },
  {
    id: 'paid', num: '08', title: 'Getting paid',
    lead: 'Members pay inside the app. Your earnings and payouts live in Earnings & payouts.',
    steps: [
      {
        id: 'e-revenue', kicker: 'Earnings & payouts', title: 'Your revenue',
        lead: 'Tap Earnings & payouts in Creator studio.',
        figure: { img: IMG('50-earnings'), alt: 'The Revenue screen', markers: [{ n: 1, x: 48.2, y: 22.7 }, { n: 2, x: 69.0, y: 37.7 }, { n: 3, x: 70.0, y: 85.1 }] },
        fields: [
          { n: 1, label: 'This month', text: 'What you earned, and how it compares to last month.' },
          { n: 2, label: 'Your balance', text: 'Coming Monday, Clearing, and Paid to your bank.' },
          { n: 3, label: 'By offer', text: 'Monthly recurring revenue per offer.' },
        ],
      },
      {
        id: 'e-payouts', kicker: 'Earnings & payouts', title: 'Connect payouts',
        lead: 'Scroll to Get paid and tap Manage payouts.',
        figure: { img: IMG('51-manage-payouts'), alt: 'Manage payouts on the Revenue screen', markers: [{ n: 1, x: 60.8, y: 64.3 }] },
        fields: [
          { n: 1, label: 'Manage payouts', text: 'Opens Stripe, our payment partner, to verify your identity and add your bank account. The form is on stripe.com; Sage never sees your ID.' },
          { label: 'Payouts', text: 'Paid weekly, on Mondays, with an invoice issued for you for every payout.' },
        ],
      },
    ],
  },
  {
    id: 'found', num: '09', title: 'How people find you',
    lead: 'Members browse Discover. Your Discovery cards are what they see.',
    steps: [
      {
        id: 'discover', kicker: 'Discover', title: 'Your cards in Discover',
        lead: 'This is what a member sees when they browse. To appear here, an offer needs to be live.',
        figure: { img: IMG('60-discover-member'), alt: 'Discover with 1:1 coaching cards, as a member sees it', markers: [] },
        fields: [
          { label: 'Ranking', text: 'Ordered by quality, not by who joined last.' },
          { label: 'Your link', text: 'Most of your first members will come from your own audience: put your Sales page link in your bio.' },
        ],
      },
      {
        id: 'discover-communities', kicker: 'Discover', title: 'Communities in Discover',
        lead: 'Members switch between Personal (1:1 coaching) and Communities at the top.',
        figure: { img: IMG('61-discover-communities-member'), alt: 'Discover with community cards, as a member sees it', markers: [] },
        fields: [
          { label: 'Filters', text: 'The chips under the tabs come from the categories you pick on your Sales page.' },
          { label: 'Your card', text: 'Banner, logo, card text, member count and price, all from the Discovery card and Sales page.' },
        ],
      },
    ],
  },
];

const CHECKLIST = [
  ['Creator profile', 'Photo, a short bio and your social link.'],
  ['1:1 coaching', 'Coaching, Discovery card and Sales page, with a price.'],
  ['Go live on your 1:1', 'Read your Sales page as a client first.'],
  ['Community', 'Its three buttons, with a monthly or yearly price.'],
  ['Channels', 'One Announcement and one or two Chats.'],
  ['First program', 'Lessons filled in, then Go live on the program.'],
  ['Payouts', 'Manage payouts in Earnings & payouts.'],
  ['Your link in your bio', 'Copy it from the Sales page.'],
];

const CSS = `
  .cguide{
    --cream:#FBF7EE; --white:#FFFFFF; --ink:#11181C; --muted:#5A6672; --subtle:#98A2AC; --border:#ECEEF0;
    --teal:#0E9AAE; --tealD:#0B8296; --tealWash:#E4F2F3; --amber:#8A5A00; --amberWash:#FFF3D9;
    --shadow:0 1px 2px rgba(17,24,28,.04),0 12px 30px -16px rgba(17,24,28,.16);
    --font:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    background:var(--cream);color:var(--ink);font-family:var(--font);font-weight:500;line-height:1.6;
    -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;
  }
  .cguide *{box-sizing:border-box}
  .cguide img{max-width:100%;display:block}
  .cguide h1,.cguide h2,.cguide h3{color:var(--ink);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0;text-wrap:balance}
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
  .cguide .ghead p{font-size:18px;color:var(--muted);max-width:62ch;margin:16px 0 0}
  .cguide .ghead p.demo{font-size:14px;margin-top:10px;color:var(--subtle)}
  .cguide .layout{display:grid;grid-template-columns:1fr;gap:clamp(28px,4vw,52px);padding:clamp(30px,4vw,48px) 0 80px}
  @media(min-width:980px){.cguide .layout{grid-template-columns:220px minmax(0,1fr)}}
  .cguide .toc{display:none}
  @media(min-width:980px){.cguide .toc{display:block;align-self:start;position:sticky;top:86px}}
  .cguide .toc p{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--subtle);font-weight:700;margin:0 0 12px}
  .cguide .toc a{display:flex;gap:10px;font-size:14px;font-weight:600;color:var(--muted);text-decoration:none;padding:7px 0 7px 14px;border-left:2px solid var(--border)}
  .cguide .toc a:hover{color:var(--ink);border-color:var(--teal)}
  .cguide .toc a b{color:var(--teal);font-weight:800;font-variant-numeric:tabular-nums}
  .cguide .main{min-width:0}
  .cguide .sec{padding-top:18px;margin-top:44px;border-top:1px solid var(--border);scroll-margin-top:80px}
  .cguide .sec:first-child{border-top:0;margin-top:0;padding-top:0}
  .cguide .snum{font-size:13px;font-weight:800;color:var(--teal);letter-spacing:.06em;margin:0}
  .cguide .sec > h2{font-size:clamp(24px,3.3vw,32px);letter-spacing:-.025em;margin:6px 0 0}
  .cguide .slead{font-size:16.5px;color:var(--muted);margin:10px 0 0;max-width:64ch}
  .cguide .step{display:grid;grid-template-columns:1fr;gap:26px;margin-top:30px;padding:22px;background:var(--white);border:1px solid var(--border);border-radius:20px;box-shadow:var(--shadow);scroll-margin-top:80px}
  @media(min-width:760px){.cguide .step{grid-template-columns:minmax(220px,300px) minmax(0,1fr);align-items:start}}
  .cguide .phone{position:relative;max-width:300px;margin:0 auto;width:100%}
  .cguide .phone img{width:100%;height:auto;border-radius:28px}
  .cguide .pin{position:absolute;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;background:var(--teal);color:#fff;font-size:13px;font-weight:800;display:grid;place-items:center;border:2px solid #fff;box-shadow:0 2px 8px rgba(11,130,150,.45)}
  .cguide .pin::after{content:"";position:absolute;right:100%;top:50%;width:14px;height:2px;background:var(--teal);transform:translateY(-50%)}
  .cguide .kick{font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--tealD);font-weight:700;margin:0}
  .cguide .step h3{font-size:21px;margin:6px 0 0}
  .cguide .step .lead{font-size:15.5px;color:var(--muted);margin:8px 0 0}
  .cguide dl{margin:16px 0 0;display:grid;gap:0;border-top:1px solid var(--border)}
  .cguide .fr{display:grid;grid-template-columns:28px minmax(0,1fr);gap:12px;padding:12px 0;border-bottom:1px solid var(--border)}
  .cguide .fr .n{width:24px;height:24px;border-radius:50%;background:var(--tealWash);color:var(--tealD);font-size:12.5px;font-weight:800;display:grid;place-items:center;margin-top:1px}
  .cguide .fr .n.dot{background:transparent;border:2px solid var(--border)}
  .cguide dt{font-weight:700;font-size:15px}
  .cguide dd{margin:2px 0 0;font-size:14.5px;color:var(--muted);line-height:1.5}
  .cguide .ex{display:inline-block;margin-top:6px;font-size:13px;color:var(--tealD);background:var(--tealWash);border-radius:8px;padding:3px 9px;font-weight:600}
  .cguide .note{margin:16px 0 0;border-radius:14px;padding:13px 16px;font-size:14.5px;font-weight:600;line-height:1.5}
  .cguide .note.tip{background:var(--tealWash);color:var(--ink)}
  .cguide .note.warn{background:var(--amberWash);color:var(--ink)}
  .cguide .note b{display:block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:3px}
  .cguide .note.tip b{color:var(--tealD)} .cguide .note.warn b{color:var(--amber)}
  .cguide .map{display:grid;grid-template-columns:1fr;gap:12px;margin-top:22px}
  @media(min-width:760px){.cguide .map{grid-template-columns:repeat(3,minmax(0,1fr))}}
  .cguide .map div{background:var(--white);border:1px solid var(--border);border-radius:16px;padding:16px 18px}
  .cguide .map div.key{border-color:var(--teal);background:var(--tealWash)}
  .cguide .map small{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--subtle);font-weight:700}
  .cguide .map h4{margin:6px 0 0;font-size:16px;font-weight:800}
  .cguide .map p{margin:4px 0 0;font-size:14px;color:var(--muted)}
  .cguide .check{margin-top:22px;background:var(--white);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow);counter-reset:c}
  .cguide .check li{counter-increment:c;list-style:none;display:grid;grid-template-columns:30px minmax(0,1fr);gap:12px;padding:14px 18px;border-bottom:1px solid var(--border)}
  .cguide .check li:last-child{border-bottom:0}
  .cguide .check li::before{content:counter(c);width:26px;height:26px;border-radius:50%;background:var(--tealWash);color:var(--tealD);font-weight:800;font-size:13px;display:grid;place-items:center}
  .cguide .check b{display:block;font-size:15px}
  .cguide .check span{font-size:14px;color:var(--muted)}
  .cguide ol.check{padding:0;margin-left:0}
`;

export default function CreatorDocsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="cguide">
        <nav className="nav">
          <div className="wrap">
            <a className="brand" href="/">
              <svg className="mark" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="32" fill="#0E9AAE" /><path d="M 51.07 25.99 A 20 20 0 1 1 38.01 12.93" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" /></svg>
              <span>Sage Academy</span>
            </a>
            <a className="btn" href="/become-a-coach#apply">Become a creator</a>
          </div>
        </nav>

        <header className="ghead">
          <div className="wrap">
            <p className="eyebrow">Sage Academy · Creator Docs</p>
            <h1>Set up your page, offers and programs, step by step.</h1>
            <p>Every screen you will use, with the exact buttons you will see and an example of what to put in each field. Everything is editable later, and nothing is visible to anyone until you press Go live.</p>
            <p className="demo">The screens show a demo creator account (Maya Brooks) with example clients, photos and messages.</p>
          </div>
        </header>

        <div className="wrap">
          <div className="layout">
            <aside className="toc">
              <p>Steps</p>
              {SECTIONS.map((s) => (<a key={s.id} href={`#${s.id}`}><b>{s.num}</b>{s.title}</a>))}
              <a href="#checklist"><b>10</b>Your checklist</a>
            </aside>

            <main className="main">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="sec">
                  <p className="snum">{s.num}</p>
                  <h2>{s.title}</h2>
                  <p className="slead">{s.lead}</p>

                  {s.id === 'map' && (
                    <div className="map">
                      <div><small>Button 1</small><h4>Coaching / Community</h4><p>The inside. Seen by people who already paid.</p></div>
                      <div><small>Button 2</small><h4>Discovery card</h4><p>Your shop window in Discover.</p></div>
                      <div className="key"><small>Button 3</small><h4>Sales page</h4><p>The page people see before they pay, and your bio link.</p></div>
                    </div>
                  )}

                  {s.steps.map((st) => (
                    <article key={st.id} id={st.id} className="step">
                      {st.figure && (
                        <figure className="phone" style={{ margin: 0 }}>
                          <img src={st.figure.img} alt={st.figure.alt} width={390} height={844} loading="lazy" />
                          {st.figure.markers.map((m) => (
                            <span key={m.n} className="pin" style={{ left: `${m.x}%`, top: `${m.y}%` }} aria-hidden="true">{m.n}</span>
                          ))}
                        </figure>
                      )}
                      <div>
                        <p className="kick">{st.kicker}</p>
                        <h3>{st.title}</h3>
                        <p className="lead">{st.lead}</p>
                        {st.fields && (
                          <dl>
                            {st.fields.map((f, i) => (
                              <div key={i} className="fr">
                                <span className={`n${f.n ? '' : ' dot'}`}>{f.n ?? ''}</span>
                                <div>
                                  <dt>{f.label}</dt>
                                  <dd>{f.text}{f.example && (<><br /><span className="ex">Example: {f.example}</span></>)}</dd>
                                </div>
                              </div>
                            ))}
                          </dl>
                        )}
                        {st.note && (<p className={`note ${st.note.kind}`}><b>{st.note.kind === 'warn' ? 'Important' : 'Tip'}</b>{st.note.text}</p>)}
                      </div>
                    </article>
                  ))}
                </section>
              ))}

              <section id="checklist" className="sec">
                <p className="snum">10</p>
                <h2>Your checklist</h2>
                <p className="slead">The easiest order to do it in.</p>
                <ol className="check">
                  {CHECKLIST.map(([t, d]) => (<li key={t}><div><b>{t}</b><span>{d}</span></div></li>))}
                </ol>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
