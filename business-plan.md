# Business Plan

Working title: [Platform name]
September 2026

## 1. The Idea in One Line

Everything a creator already made — the best moments, the process, the raw footage that never shipped — is for sale per video, in ten minutes of work, paid straight to the creator. Nothing spreads unless the creator says so.

## 2. The Problem

Creators do most of their work before a video ever posts: planning, shooting, reshooting, cutting hours of footage down to minutes. Platforms pay only for the finished piece, only while it is new, and only through ad revenue or channel-wide memberships the platform controls and takes a cut of.

Three things go unpaid on every platform today:

- **The back catalog.** Older episodes earn nothing after the first weeks, even though they contain the creator's best material.
- **The process.** Raw footage, cut scenes, plans, and outtakes are deleted or given away, even though audiences consistently say they want to see how things were made.
- **The audience's effort.** Viewers who share a creator's best moment drive real money and get nothing for it.

Existing options are channel-wide (YouTube Memberships, Patreon), take a large cut, hold the creator's money, and are disconnected from the specific video someone just watched.

## 3. The Product

A video platform where every video comes with a set of things the creator can sell, each attached to that specific video, each priced by the creator, each paid directly to the creator's own Stripe account.

### Signature features

**Curated Moments** — The creator marks which moments of a video are allowed to spread. Each becomes a permanent link and an embeddable card that plays anywhere on the web — newsletters, blogs, social — with a tip and subscribe button built in. An AI pass suggests candidate moments from the transcript so curation takes about a minute per episode. Nothing viewers do can make a moment public without the creator's approval.

**Distributor Payouts** — Any viewer can grab a personal share link for a curated moment. If their share leads to a tip or a new subscription, they automatically earn a cut. The audience becomes the creator's distribution, and it is paid for performance rather than asked to work for free.

**Behind the Cut** — A per-video companion section with five fixed slots: the plan, the raw footage, the cut scenes, the kit, and the hard part. Any slot can be empty; the raw footage alone is enough to sell. Sold per video (default $3) or included with a subscription. A free "effort badge" on every public video — hours, reshoots, minutes cut — makes the paid section feel earned.

### Additional per-video items (all near-zero effort)

- Cleaned, timestamped transcript
- Resource sheet: everything mentioned in the episode, pulled by AI, checked by the creator
- Outtakes as a separate short unlock
- Early access for subscribers
- Paid attachment slot: project files, worksheets, recipe cards, templates
- Paid questions: viewers pay to submit a question for the next episode

### Foundation features (already built)

Accounts and creator profiles, upload or paste a link, automatic transcription, search inside any video, "ask the show" answers drawn from the whole catalog with sources cited, tips, subscriptions, direct payouts via Stripe Connect.

## 4. Why This Is Different and Hard to Copy

Each individual perk exists somewhere. The combination does not, and the large platforms are structurally unable to build it:

- **Per-video, not per-channel.** YouTube and Patreon monetize the relationship; you join a person. Selling one raw cut or one transcript for $2 to a non-subscriber fragments the membership funnel they depend on.
- **Direct payouts.** Money goes to the creator's Stripe, not through the platform's balance sheet. Incumbents hold the money, take 30 percent, and pay monthly. That is their revenue model, not a missing feature.
- **Paying outsiders to send money off-platform.** Distributor payouts reward people for taking attention and money away from the feed. No ad-funded platform can do this without undermining its own inventory.
- **Transcript-native products.** Moments, resource sheets, ask pages, and transcripts all fall out of treating the video as text. Incumbent stacks are built around watch time; rebuilding around the transcript is a multi-year shift.
- **Creator-gated virality.** Every recommendation engine is built to decide what spreads. Handing that decision to the creator is the opposite of their core mechanism.

A competitor would have to become a different company to occupy this position.

## 5. How the Platform Makes Money

- 10 percent platform fee on all transactions: tips, subscriptions, per-video unlocks, attachments, paid questions.
- Stripe fees are passed through and shown once.
- The remainder goes directly to the creator (and, where attributed, the distributor). The platform never holds creator funds.

### Illustrative unit economics

A creator with 200 back-catalog videos and 5,000 engaged viewers:

- 2 percent of viewers unlock one Behind the Cut per month at $3: $300
- 1 percent subscribe at $5/month: $250
- Tips on curated moments: $100–300

Creator earns roughly $600–800/month on content already made; platform earns $60–80. At 500 such creators the platform is at $30–40k/month with a cost base in the low hundreds.

## 6. Costs

The build is designed to run for almost nothing until money moves.

- Video and raw-footage storage and delivery: Cloudflare R2 (zero egress) and Cloudflare Stream
- Transcription: Deepgram or Groq-hosted Whisper; reuse existing captions for pasted links
- AI moment suggestions and ask pages: small hosted model, negligible per query
- Moment rendering: ffmpeg on a small worker
- App hosting: Vercel; database: Neon or Supabase Postgres
- Payments: Stripe Connect — costs only when money moves

Estimated run cost at 50 creators, 2,000 hours of catalog, 20,000 moment plays per month, a few terabytes of raw footage: $60–200 per month.

Removed from the original build for cost and lack of differentiation: live streaming, AI dubbing, listening parties, streaks, recap reels, in-browser recording, and free-form viewer clipping.

## 7. Go-to-Market

**Wedge** — One vertical with deep back catalogs, real production effort, and creators underpaid by platforms: interview podcasts, independent educators, or documentary-style YouTubers. Recruit 10–20 creators by hand and ingest their entire catalog for free.

**Pitch to creators** — "Your back catalog becomes searchable and quotable. You choose what spreads. Your raw footage and cut scenes — the stuff you'd delete — sell per video. Your audience gets paid to share you. Money goes to your Stripe, not ours."

**Pitch to audiences** — "See how it was really made. Share the best 30 seconds and get paid if it lands."

**Growth loop** — Curated moments travel off-platform through embeds and distributor links. Each one carries a tip button and a route back to the creator's catalog and ask page. Public ask pages capture long-tail search traffic. Every new creator brings a catalog, and every catalog produces hundreds of shareable, indexable pages on day one.

## 8. Roadmap

**Phase 1 — Prove the signature (first 8–12 weeks)**
- Strip the build to the core; swap to the cheap stack
- Curation UI with AI suggestions, moment pages, embeds
- Tips and subscriptions on moment pages and embeds, guest checkout
- Distributor share links, attribution, payouts
- Behind the Cut with per-video unlocks and the effort badge
- Public ask pages
- Creator and distributor earnings pages
- Launch with 10–20 hand-recruited creators in one vertical

**Phase 2 — Expand what sells**
- Resource sheets, transcripts, outtakes, paid attachments, paid questions, early access, private podcast feed for subscribers
- Personal wall and saved moments for viewers

**Phase 3 — Bring back the expensive features once revenue supports them**
- Live streaming and live clipping
- AI dubbing as a paid creator add-on
- Weekly recaps and streaks

## 9. Risks and How They Are Handled

- **Rights.** Pasted links mean other people's content. DMCA agent registered, takedown form live, and only the verified owner of a channel can curate or sell from it. Unclaimed catalogs are searchable but earn nothing.
- **Raw footage rights.** Raw cuts often contain guests and music removed from the final edit. Upload requires confirmation the creator has the right to sell the footage.
- **Payout fraud.** No self-tipping (matched card fingerprints), attribution windows, click deduplication, refund clawbacks from the distributor ledger before payout.
- **Curation effort.** If marking moments takes more than a minute, creators stop. AI suggestions are confirm-or-dismiss; five fixed slots keep Behind the Cut to ten minutes.
- **Creator trust.** The promise "you're never surprised" — nothing spreads unless marked — is a product rule, not a setting.
- **Production readiness.** Before real users: Stripe test-mode verification of every payout path including distributor transfers and refund clawbacks, object storage instead of local disk, and a security review of auth, payments, uploads, and the attribution webhook path.

## 10. What We Are Asking For / Next Step

[Fill in: bootstrapped, seeking a small round, or seeking design partners.]

Immediate next step: finish Phase 1, sign the first ten creators, and put real money through the system in one vertical before building anything else.
