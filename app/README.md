# Creator Platform (V1 + integrations)

A working build of the core loop from the business plan in
[`../business-plan.md`](../business-plan.md): sign up, become a creator, post a video (upload
a file, record from your camera, or paste a URL — with a real audio-only stream extracted
automatically), get found through transcript search, build a following, gate content behind a
subscription, get tipped and paid out directly via Stripe Connect, go live, keep a streak going,
and let viewers clip and save what they find into a personal wall — plus a commute briefing and
a shareable monthly Wall Card generated from that wall.

**Plan pivot (September 2026):** the business plan now centers on per-video monetization —
Curated Moments, Distributor Payouts, and Behind the Cut — rather than the earlier real-time/live
framing above. Live streaming, AI dubbing, listening parties, streaks, and Recap Reels are all
still built (documented below) but are now Phase 3 items per the plan, not V1/V2. The rest of this
document hasn't been fully rewritten for the pivot yet; treat the feature descriptions as accurate
for what's built, but the framing/roadmap language as pre-pivot until noted otherwise.

**Phase 1 is now fully built**: Curated Moments, guest checkout, Distributor Payouts, Behind the
Cut, creator/distributor earnings pages, and Public ask pages — see each feature's own section
below. **Phase 2 is also built**: saved moments on the personal wall, early access for
subscribers, Video Extras (resource sheets, outtakes, paid attachments), paid questions, and a
private podcast feed for subscribers. Only Phase 3 (live streaming, AI dubbing, streaks, recaps —
all pre-pivot work, still functional and documented below) and the plan's "swap to the cheap
stack" line item remain, both deliberately deferred per an explicit call to keep the current
infra providers (Mux/OpenAI/Stripe) rather than migrate for now.

## Real integrations, off by default

Stripe, Mux, and OpenAI are fully wired up in code, but every one of them is **inert until you
add its API key(s)** as environment variables. Without keys, each feature falls back to the
simulated/manual behavior it shipped with originally — nothing breaks, nothing pretends to be
real. This is the actual state of each:

| Feature | Env vars | Without keys | With keys |
|---|---|---|---|
| Tips | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Instant simulated ledger entry | Real Stripe Checkout, webhook-confirmed |
| Guest tips (no account) | same as above | Not offered — "log in to tip" instead | On moment pages/embeds only: tip via Stripe Checkout with no sign-up, attributed by email |
| Distributor payouts | same as above (+ distributor completes Connect onboarding) | Not offered — no share-and-earn card on moment pages | A signed-in viewer earns 20% of any tip through their personal share link for a moment, paid via a separate Stripe Transfer |
| Behind the Cut unlock | same as above | Instant simulated unlock (no payment) | Real Stripe Checkout, webhook-confirmed, routed to the creator's Connect account if they've onboarded |
| Video Extra unlock (resource sheet, outtakes, attachment) | same as above | Instant simulated unlock (no payment) | Real Stripe Checkout, webhook-confirmed, same routing as Behind the Cut |
| Paid questions | same as above | Instant simulated record | Real Stripe Checkout, webhook-confirmed, routed to the creator's Connect account if they've onboarded |
| Subscriptions | same as above | Instant simulated toggle | Real recurring Stripe subscription, webhook-confirmed, cancel-able |
| Creator payouts | same as above (+ creator completes Connect onboarding) | Tips/subscriptions charge to the *platform's* Stripe account | Stripe Connect Express: funds route directly to the creator's own account (`transfer_data`), tracked via the `account.updated` webhook |
| Video upload | `MUX_TOKEN_ID`, `MUX_TOKEN_SECRET`, `MUX_WEBHOOK_SECRET` | Saved to local disk (`public/uploads/`) | Uploaded direct-to-Mux, transcoded, HLS playback |
| Live streaming | same as above | "Go live" page says Mux isn't configured | Real RTMP ingest + HLS live playback, webhook-driven status |
| Live chat + viewer clipping | same as above | N/A — both only exist once a stream can go live at all | Chat during the broadcast (polling, same pattern as listening parties) and a "Clip this moment" button that grabs the last 30s; once the stream ends, Mux's recording becomes a regular rewatchable video and pending clip requests become real clips against it |
| Transcripts | `OPENAI_API_KEY` | Creator pastes manually | Auto-transcribed with Whisper on local file uploads |
| Commute briefing | same as above | Button says it needs the key | Real GPT summary + TTS audio file |
| Highlight detection | same as above | Crowd-sourced: moments 2+ viewers independently clipped near each other | A real GPT pass over the transcript, cached on the video until the transcript changes |
| Ask the show (synthesized answer) | same as above | Public ask page still created, showing only the matched transcript excerpts | A real GPT answer citing the excerpts inline |
| Resource sheet AI draft | same as above | "AI drafting needs OPENAI_API_KEY — write it yourself for now" | A GPT pass over the transcript drafts a resource list the creator can accept or edit before saving |
| AI dubbing | `ELEVENLABS_API_KEY` | No "Dubbed audio" section at all | Real ElevenLabs dubbing (voice-preserving translation) into Spanish, French, German, Portuguese, Japanese, or Hindi |

See `src/lib/integrations/` for the client setup and `isXConfigured()` guards. Because I don't
have accounts/keys for any of these, **the real-credential paths that call out to a provider's
API are implemented but not end-to-end verified against a fully working live call** — only the
fallback paths have been exercised in a real browser. Test each with its provider's local
tooling before trusting it in production. Two exceptions:

- The Mux webhook's live-recording-to-Video pipeline (`materializeLiveRecording` in
  `src/app/api/webhooks/mux/route.ts`) needed no outbound Mux call to verify, just a
  correctly-signed inbound webhook, so it *was* exercised end-to-end — a real HTTP POST with a
  hand-computed Mux webhook signature (HMAC-SHA256, matching `@mux/mux-node`'s own
  verification), asserting on the actual Video/Clip rows it produced.
- Same trick for Stripe's `checkout.session.completed` webhook (identical `t=...,v1=...`
  HMAC-SHA256 scheme to Mux's): a hand-signed guest-tip event was verified end-to-end against the
  real handler, confirming the resulting `Tip` row has no `fromUserId`, the correct `guestEmail`
  and amount, and that redelivery doesn't create a duplicate. Guest checkout's own outbound call
  (`stripe.checkout.sessions.create`) was tested with a deliberately invalid key the same way as
  ElevenLabs below — it reached Stripe's real servers, failed, and was caught cleanly rather than
  crashing. The same applies to distributor payouts: a hand-signed webhook for a
  distributor-attributed tip confirms the `Tip` row records the `distributorLinkId` correctly
  even when the downstream `stripe.transfers.create` call fails (bad key) — that failure is
  caught and logged rather than losing the underlying payment record, and correctly produces no
  `DistributorEarning` row, since a Transfer either succeeds or the earning isn't real yet. The
  Transfer call itself, and Connect onboarding for a distributor account, are unverified against
  a live account, same as creator payouts. The same pattern covers Behind the Cut's unlock: the
  no-Stripe-key instant-unlock path was exercised end-to-end in a real browser (creator saves
  content, a signed-out-then-signed-in viewer is paywalled, clicks unlock, and immediately gets
  access), and a hand-signed `checkout.session.completed` webhook with `kind:
  "unlock_behind_the_cut"` metadata was verified to create the `BehindTheCutUnlock` row directly
  against the real handler. The real `stripe.checkout.sessions.create` call itself is unverified
  against a live account, same as every other Stripe path here.
- ElevenLabs dubbing was tested with a deliberately invalid API key, which is as far as it's
  possible to go without a real account — and it went further than expected: the SDK's requests
  reached ElevenLabs' actual servers and came back with genuine structured API errors (not a
  local/network failure), which `requestDub`/`checkDubStatus` catch and surface in the UI rather
  than crashing. The success path (a real dub actually completing) is still unverified.

- **Stripe**: `stripe listen --forward-to localhost:3000/api/webhooks/stripe` for local webhook
  delivery; use Stripe's test-mode keys and test card numbers first.
- **Mux**: register `https://<your-tunnel>/api/webhooks/mux` in the Mux dashboard (or use their
  CLI tunneling) so `video.asset.ready` / `video.live_stream.*` events reach you locally.
- **OpenAI**: no webhook needed — Whisper/TTS/chat calls are synchronous.
- **ElevenLabs**: no webhook — dubbing status is polled on demand via a "Check status" button
  (see below) rather than continuously, since each check is a real billable API call.

`APP_URL` is optional (used for Stripe/Mux/ElevenLabs callback URLs); without it, the app derives
its own origin from the incoming request, which is fine for local dev but should be set
explicitly behind a proxy/CDN in production. Note that ElevenLabs needs to fetch the source video
from that URL, so it must be reachable from the public internet in production, not just
localhost.

## Curated Moments (new plan's signature feature)

The first piece of the per-video monetization pivot: a creator marks which moments of a video
are allowed to spread, and only those become a permanent link and an embeddable card. Nothing a
viewer does can make a moment public — the plan's "nothing spreads unless the creator says so"
is enforced as a real status gate (`SUGGESTED` / `PUBLISHED` / `DISMISSED`), not just a UI
convention.

- **AI-suggested candidates** — reuses the existing highlight-detection pass
  (`src/lib/highlights.ts`) rather than a second pipeline: a real GPT pass over the transcript
  when `OPENAI_API_KEY` is set, or the crowd-sourced fallback (moments 2+ viewers independently
  clipped) without one. Suggestions are labeled honestly in the UI — a crowd-sourced suggestion
  is never shown as "AI suggestion." Dismissed suggestions are kept (not deleted) so they're
  never regenerated.
- **Manual moments** — a creator can add one directly with a title and start/end time; it
  publishes immediately, since typing in the times is itself the approval (no suggest-then-approve
  step needed).
- **Public moment page** (`/moments/[id]`) — a permanent link with the trimmed clip, creator
  attribution, a tip form, and a subscribe button if the creator has a subscription price.
  404s for anything not `PUBLISHED`.
- **Embeddable card** (`/embed/moments/[id]`) — the same content in a bare, nav-free layout
  meant for an `<iframe>` on someone else's page. This required Next.js's "multiple root
  layouts" pattern: existing routes moved into a `src/app/(main)/` route group (its layout still
  renders the nav) alongside a new `src/app/(embed)/` group (a minimal layout with no nav) — a
  route group doesn't change any URL, so every existing page still lives at the same path.
- **Copy link / copy embed code** — a small client component (`copy-moment-links.tsx`) used on
  both the creator's curation panel and the public moment page.
- **Guest tipping** (`src/lib/actions/guest-tip.ts`, `src/components/guest-tip-form.tsx`) — a
  signed-out visitor on a moment page or embed can tip via Stripe Checkout with no account, since
  a genuine cross-site `<iframe>` embed almost never carries a signed-in session (third-party
  cookie restrictions). Requires `STRIPE_SECRET_KEY` — there's no sensible simulated version of
  "pay with no account," so without a key it falls back to the same "log in to tip" prompt used
  everywhere else. `Tip.fromUserId` is now nullable, with `guestEmail` (from Stripe Checkout's own
  email collection) as the only record of who a guest was; the creator dashboard's tip list
  handles both.

- **Distributor Payouts** (`src/lib/actions/distributor.ts`, `src/lib/distributor.ts`,
  `src/components/distributor-share-card.tsx`) — any signed-in viewer (not just other creators)
  can grab a personal share link for a published moment and earn a cut of tips that come through
  it. Getting a link requires completing payout onboarding *first* (a separate Stripe Connect
  Express account on the `User`, not the creator's own) — by construction, every `DistributorLink`
  that exists is guaranteed payable, so there's no "link exists but no account behind it" state to
  handle later. A distributor-attributed tip can't use `transfer_data` (it only supports one
  destination), so the charge stays on the platform's balance and the split — a fixed 20% to the
  distributor, the rest to the creator if they've onboarded — happens as two separate
  `stripe.transfers.create` calls in the webhook after payment confirms, recorded as a
  `DistributorEarning` row per tip (a running ledger, ready for a future earnings page). Scoped to
  tips only, not subscriptions — splitting *recurring* revenue per-invoice indefinitely is a
  meaningfully bigger problem than a one-time split. Self-referral is blocked by comparing the
  distributor's own user id against the tipper's for signed-in tips; guest tips have no user id to
  compare, and the plan's other mitigation for that case — matching Stripe card fingerprints —
  isn't implemented. There's also no attribution *window*: a `?d=` link only attributes a tip made
  in that same page visit (passed through as a hidden form field), not a persistent cookie that
  survives leaving and coming back later, which the plan's risk section implies is the eventual
  goal.

- **Behind the Cut** (`src/lib/actions/behind-the-cut.ts`, `src/components/behind-the-cut-editor.tsx`
  + `behind-the-cut-panel.tsx`, `src/components/effort-badge.tsx` + `effort-badge-editor.tsx`) —
  the paid per-video companion the plan describes: five fixed, independently-optional slots (the
  plan, the raw footage, the cut scenes, the kit, the hard part) a creator fills in on their own
  video, unlocked per-viewer for a one-time price they set, or free for subscribers. The free
  **effort badge** (hours to make / reshoots / minutes cut) sits next to the video title for
  everyone, unlocked content or not — it's what's meant to make the paid section feel earned
  rather than arbitrary. Text slots are replaced wholesale on every save (an emptied textarea
  clears that slot); the two file slots (raw footage, cut scenes) only change when a new file is
  actually picked, so editing a text field doesn't force a re-upload.
  - **Known gap — paywalled files aren't access-controlled at the storage layer.** Raw
    footage/cut scenes are saved to `public/uploads/behind-the-cut/<uuid>.<ext>` just like a
    regular video upload, and served as plain static files with no auth check of their own —
    the same architecture regular subscriber-only videos already rely on (a locked video's
    `videoUrl` is real, just never sent to the browser unless the viewer has access). Someone who
    somehow obtained a raw-footage URL directly (not exposed anywhere in the UI or page source
    for a non-paying viewer — see the fix below) could stream it without ever unlocking. A real
    fix would put these behind a signed/expiring URL or an authenticated route; out of scope for
    now, consistent with how the rest of the app already handles unauthenticated `/uploads/` URLs.
  - **Bug found and fixed while building this:** the video page originally passed the *entire*
    Behind the Cut content object as props to the (client-side) `BehindTheCutPanel` regardless of
    whether the viewer had access, gating only the *visible* rendering inside that component. A
    real-browser test caught this the hard way — the paywalled plan/kit text wasn't visible on
    the rendered page, but it *was* present verbatim in the page's raw HTML (inside Next's RSC
    hydration payload), readable by anyone via "view source" without paying. Fixed by nulling out
    every content field server-side before it's ever handed to the client component when the
    viewer lacks access, passing only `priceCents` (needed to render the unlock button's price) —
    mirroring the existing pattern for locked subscriber-only videos, where `videoUrl` is simply
    never passed to any client component at all unless the viewer can watch it.
  - **Verification:** a full real-browser flow — creator signs up, creates a profile, posts a
    video, fills in the effort badge and all five Behind the Cut slots; a separate signed-up
    viewer sees the effort badge and the paywall (unlock button, no content) with the leak fix
    confirmed by inspecting the raw page HTML, not just the visible DOM; clicking unlock (no
    Stripe key configured) grants instant access and the content becomes visible on reload. A
    third viewer's `Subscription` row (created directly in the database, the same way Stripe
    Connect onboarding completion is simulated elsewhere in this doc, since there's no working
    fake account to subscribe through) confirms the "free for subscribers" path, and that a
    `subscriberOnly` video's lock still correctly overrides a paid Behind the Cut unlock — a
    locked video hides everything, Behind the Cut included. The real-Stripe paths were also
    verified: a hand-signed `checkout.session.completed` webhook with `kind:
    "unlock_behind_the_cut"` metadata was POSTed directly at the real handler and confirmed to
    create the `BehindTheCutUnlock` row (and not duplicate it on redelivery), and a real unlock
    attempt with a deliberately invalid `STRIPE_SECRET_KEY` confirmed the outbound
    `stripe.checkout.sessions.create` call reaches Stripe's real servers, fails with a genuine
    "Invalid API Key" error, and is caught cleanly in the UI rather than crashing.

- **Earnings pages** (`src/app/(main)/earnings`, additions to `src/app/(main)/creator/dashboard`)
  — a real UI over ledgers that already existed in the database but had nowhere to be seen. Any
  signed-in user (not just creators — a distributor doesn't have to be one) gets `/earnings`: a
  running total and itemized history of `DistributorEarning` rows, plus payout-account status and
  an onboarding button reused from the moment page's share card (now extracted into
  `distributor-onboarding-form.tsx` so both places share one implementation). The creator
  dashboard gained a Behind the Cut revenue tile (sum of `BehindTheCutUnlock.amountCents` across
  a creator's videos), a recent-unlocks list alongside the existing recent-tips list, and a note
  showing how much of their tip total was actually split off to distributors.
  - **Schema change:** `BehindTheCutUnlock` didn't record how much was actually paid — only
    `BehindTheCut.priceCents`, which the creator can change after the fact, existed. Added
    `amountCents` to `BehindTheCutUnlock` (same reasoning as `Tip.amountCents`: a mutable price
    elsewhere in the schema can't be trusted for historical earnings), set from the real
    `session.amount_total` in the Stripe webhook or from `priceCents` at the moment of a
    simulated unlock.
  - **Bug found and fixed while building this:** the earnings pages are the first place in the
    app that actually reads the `DistributorEarning` ledger, and building them surfaced that the
    ledger could never contain anything without a live Stripe account. `DistributorEarning` rows
    are only ever created inside the Stripe webhook's `splitDistributorPayout`, which the
    *simulated* (no-Stripe-key) tip path never reaches — and that same simulated path also never
    stored `distributorLinkId` on the `Tip` it created, silently dropping the attribution
    entirely. In other words: distributor attribution was completely non-functional in the
    default (no-Stripe-key) configuration, the one this whole app runs in without real credentials.
    Fixed `sendTip`'s simulated branch to resolve and store the `distributorLinkId` like the real
    path already does, and to write a `DistributorEarning` immediately as a second simulated
    ledger entry (no real money moves either way in this mode, same as the tip itself) rather than
    silently doing nothing.
  - **Known gap, not fixed — pre-existing, just newly visible:** getting a distributor share link
    at all still requires `isStripeConfigured()` to be true, purely because the moment page only
    renders `DistributorShareCard` behind that check — `getOrCreateDistributorLink` itself has no
    such requirement. This means the fix above (distributor earnings now work without Stripe) is
    currently only reachable by creating a `DistributorLink` directly in the database, since the
    UI to obtain one never appears without a key. Loosening that page-level gate so the share card
    can appear once a distributor's `stripeChargesEnabled` is true — which, admittedly, still can't
    happen without Stripe either — wouldn't actually unlock anything further without a live
    account, so it's left as-is; noted here so the gap doesn't look like an oversight.
  - **Verification:** a full real-browser flow — a creator publishes a moment and sets up Behind
    the Cut; a distributor is given a `DistributorLink` directly in the database (the gap above
    means the UI can't produce one here) and a `stripeChargesEnabled` flag, matching how Connect
    onboarding completion is already simulated elsewhere in this doc; a separate tipper follows
    the `?d=` link and sends a tip through the real, visible `TipForm`, confirmed to land as a
    `Tip` with the correct `distributorLinkId` and a `DistributorEarning` for exactly 20% of the
    tip; the distributor's `/earnings` page shows the correct running total and lists the moment
    by name. Separately, a viewer unlocking Behind the Cut confirmed the creator dashboard's new
    revenue tile and unlock list update correctly. The webhook's `amount_total`-based
    `amountCents` was verified directly with a hand-signed `checkout.session.completed` event.

## Public ask pages (last Phase 1 item)

Every "Ask the show" question is now persisted as a permanent, public, indexable page at
`/ask/[id]` — the plan's growth-loop bet that "every new creator brings a catalog, and every
catalog produces hundreds of shareable, indexable pages on day one." A permalink to the page
appears right under the answer in the in-page widget, and a creator's profile page lists their 5
most recent questions. Unlike Curated Moments, there's no creator approval step: a page is just a
computed answer (or, without `OPENAI_API_KEY`, a list of matched transcript excerpts) over the
creator's own already-public transcript — never a viewer editorial decision that could
misrepresent the creator, so nothing here needs the "nothing spreads unless the creator says so"
gate.

- **Storage** — `AskedQuestion.sourcesJson` caches the matched excerpts (`AskSource[]`) as a
  JSON blob rather than a separate relational table, since they're a snapshot of what search found
  at that moment, not something ever queried independently — the same reasoning as `Video.highlightsJson`.
- **Verification:** a real-browser flow — a creator adds a transcript, asks a question from their
  own profile page, follows the permalink, and the page renders the correct title (also checked in
  `<title>`/meta description via `generateMetadata`), the matched excerpt, and a working timestamped
  link back to the source video.

## Saved moments on the personal wall (Phase 2)

`WallItem` gained a `momentId` alongside its existing `videoId`/`clipId`, so a viewer can save a
Curated Moment to their wall the same way they already save videos and clips — a `SaveButton` on
the moment page, a "Moment" entry in the wall list linking back to `/moments/[id]`. No new page or
action pattern; this is a small, deliberate schema extension of infrastructure the wall already had.

## Early access for subscribers (Phase 2)

`Video.earlyAccessUntil`, set in days at upload time (or edited afterward by the owner): while set
and in the future, the video is locked to everyone except subscribers and the owner — same lock
screen as `subscriberOnly`, with different copy ("Early access for subscribers" vs "Subscribers
only") — and once the date passes, it opens to *everyone*, subscribed or not. That's the
distinction from `subscriberOnly`, which never expires. Only offered once a creator has a
subscription price set, since early access without anything to be early *to* is meaningless.

- **Bug found and fixed while building this:** `isSubscribed` used to only be computed when
  `video.subscriberOnly` was true, so a subscriber would never register as subscribed on a
  non-`subscriberOnly` video — harmless before this feature existed, but it would have silently
  broken early access (a subscriber would see the same lock screen as everyone else). Fixed by
  computing `isSubscribed` for any signed-in non-owner regardless of `subscriberOnly`, and using it
  independently for each gate. *(Already fixed during Behind the Cut's build, for the same reason
  — noted again here since early access depends on the same value.)*
- **Verification:** a real-browser flow confirmed a non-subscriber sees the "Early access for
  subscribers" lock screen and none of the video's other content (transcript, Behind the Cut,
  Extras) while the window is open, and that a subscriber (given access by a database-inserted
  `Subscription` row, the same simulated-Connect-onboarding pattern used throughout this doc) sees
  the full page immediately, bypassing the lock entirely.

## Video Extras: resource sheets, outtakes, and paid attachments (Phase 2)

The plan's other "additional per-video items," beyond Behind the Cut's five fixed slots: a
**resource sheet** (a written list of everything mentioned in the episode — tools, books, links,
gear), **outtakes** (a separate short video unlock), and a **paid attachment** (project files,
worksheets, templates — any file type, not just video). Unlike Behind the Cut's one-per-video
bundle, a video can have any number of `VideoExtra` rows, each independently priced and unlocked —
separate purchases, not a bundle. Subscribers get every extra on a creator's videos for free, same
as Behind the Cut.

- **AI-assisted resource sheets** — "pulled by AI, checked by the creator," per the plan: a
  "Draft with AI" button runs one GPT pass over the video's transcript and fills the textarea for
  the creator to edit or discard, never auto-publishing. Without `OPENAI_API_KEY` the button
  explains the gap and the creator just writes it themselves.
- **Bug found and fixed while building this — same class as Behind the Cut's leak:** the initial
  version passed unlocked-or-not extras' full `text`/`fileUrl` to the client-side
  `VideoExtrasList` regardless of viewer access, gating only the visible rendering. Fixed the same
  way as Behind the Cut, before it ever shipped: content fields are nulled out server-side unless
  the viewer actually has access, verified directly against the raw page HTML (not just the
  visible DOM) in testing this time, specifically because the same mistake had already happened
  once.
- **Known gap** — same as Behind the Cut's raw footage: outtakes/attachment files sit at
  unauthenticated `/uploads/video-extras/<uuid>` URLs. Consistent with the rest of the app's
  storage model, not a new gap introduced here.
- **Verification:** a real-browser flow — a creator adds all three extra types (with real file
  uploads for outtakes/attachment via Playwright's file input support) and confirms all three
  render on their own page; a separate viewer confirms the raw HTML doesn't leak the resource
  sheet's text before paying, sees the correct per-extra price on the unlock button, unlocks it
  (simulated, no Stripe key), and immediately sees the real content; the resulting
  `VideoExtraUnlock.amountCents` was confirmed to match the extra's price exactly.

## Paid questions (Phase 2)

"Viewers pay to submit a question for the next episode," per the plan. A creator sets a price via
`CreatorProfile.questionPriceCents` (null disables it, same pattern as the subscription price); a
signed-in viewer submits a question and pays that price (real Stripe Checkout or an instant
simulated record); the creator gets a dashboard inbox of pending questions with a button to mark
one answered, optionally linking the video where they addressed it — the only way a viewer finds
out where their paid-for question landed.

- **Verification:** a real-browser flow — a creator sets a question price, a viewer submits and
  pays (simulated), the creator's dashboard shows it pending with the right revenue total, marking
  it answered and linking a video moves it to the "Answered" list with a link to that video.

## Private podcast feed for subscribers (Phase 2)

Each `Subscription` row gets an unguessable `feedToken` (a Prisma-generated `cuid()`, same shape as
every other id in this schema) the moment it's created — a podcast app has no session cookie to
check against, so the token in the URL *is* the access control, the same reasoning as a calendar
app's private iCal feed URL. `GET /api/feed/[token]` returns a standard RSS 2.0 (with minimal
iTunes-namespace tags for podcast-app compatibility) listing the creator's videos as episodes,
audio-first (using the extracted `audioUrl` where one exists, per the "audio-optional by default"
philosophy) but falling back to the video file itself so every episode can appear. A copyable feed
link shows up on the creator's page for any subscriber. Regenerating a leaked link isn't built —
would just mean updating the token on the `Subscription` row — but there's no UI for it yet.

- **Verification:** confirmed the real (Prisma-driven, not database-simulated) subscribe action
  actually populates `feedToken` on create; fetched a real subscriber's feed URL directly and
  parsed the response as valid RSS with the correct `Content-Type`, a matching `<enclosure>` tag,
  and the video's title correctly XML-escaped; confirmed an invalid/made-up token returns 404
  rather than someone else's feed or a server error.

## Cheap-to-build differentiators (no new credentials needed)

A few features from the latest plan revision are built entirely on infrastructure already
here — transcript search and OpenAI, both already wired — matching the plan's "rent
infrastructure, build differentiation" philosophy:

- **Ask the show** — question answering over a creator's whole catalog. Keyword-matches the
  question against that creator's transcripts (same approach as search, no vector DB); with
  `OPENAI_API_KEY` set it synthesizes a cited answer from the matches, without it it just shows
  the matching moments directly — a real degrade, not a dead end.
- **Moment-level recommendations** — "related moments" on video/clip pages, found by keyword
  overlap against *other* videos' transcripts (including other creators'), not category tags.
- **Auto-captioned clips** — every clip page shows a ready-to-paste caption built from whatever
  transcript text falls inside its time range, with a copy button.
- **Highlight detection** (V2 "AI-automated clip/highlight detection") — with `OPENAI_API_KEY`
  set, a real GPT pass over the transcript surfaces up to 3 highlight-worthy moments, cached on
  the `Video` row (it fires passively on page view rather than from a user action, unlike every
  other GPT call in this app, so re-running it on every load would be a real avoidable cost) and
  invalidated when the transcript is re-saved. Without a key, or if the video has no transcript,
  it degrades to a crowd-sourced signal instead of showing nothing: moments 2+ viewers
  independently clipped near each other (`src/lib/highlights.ts`) — people already vote on
  what's worth watching every time they make a clip.
- **Personal notes on wall items** — a one-line "why I saved this" on anything in the wall.
- **Scheduled listening parties** (V2 Tier 1 togetherness) — synchronized playback of an
  existing episode at a set time, with shared chat. Chat is DB-backed with client polling
  (`src/components/party-chat.tsx`, ~3s interval) rather than a hosted real-time provider like
  Pusher/Ably — no vendor decision was made, so this defaults to the zero-new-dependency option;
  swapping in a real-time provider later wouldn't change the data model, just the transport.
  Playback sync seeks once when the party starts (not continuously, so it doesn't fight the
  viewer's own play/pause/scrub) plus a manual "Jump to live position" button.
- **Wall Cards** — the plan's primary viral loop: a shareable image summarizing a viewer's wall
  (top saved moments, most-rewatched item, a "taste twin" — the other viewer whose saves overlap
  theirs the most). Rendered as a real PNG via `next/og`'s `ImageResponse` (Satori + resvg,
  bundled with Next.js — no new dependency or API key). One drop per calendar month
  (`WallCard` row, unique per user+month) with a download link built for posting externally.
- **Audio-optional by default** — every locally-uploaded video gets a real audio-only stream
  extracted with ffmpeg, with a "Watch / Listen only" toggle on the video page. Requires ffmpeg
  installed on the host (`apt-get install ffmpeg` — a system dependency, not an npm package);
  degrades to no audio-only stream (not an error) if it's missing. Only covers local file
  uploads for the same reason auto-transcription does — Mux/pasted-URL videos never have their
  bytes pass through this server. A production build on Mux would use Mux's own audio-only
  static rendition instead.
- **Streaks** — a simple consecutive-day counter (🔥 shown in the nav) from visiting any video
  or clip, computed from a `DailyActivity` table with plain date-gap arithmetic — no scheduled
  job needed.
- **Guest-following** — guests are a separate identity from the creator, matched by exact name
  (not tied to a `User` account), so the same guest can be tagged across different creators'
  episodes and fans can follow the person rather than just the show. A creator re-tags a video's
  full guest list at once (`GuestEditor`); each guest gets a profile page aggregating every
  episode they appear in, across creators, with a follower count and follow button.
- **Recap Reels** — a weekly "habit" image on the wall page, distinct from the Wall Card: it's
  about how active the viewer was (streak, active days, comments posted, items saved, new
  follows, who they engaged with most), not what they chose to save and share. Built entirely
  from tables that already exist for other features (`DailyActivity`, `Comment`, `Follow`,
  `GuestFollow`, `WallItem`) — no new tracking added just for this — and rendered the same way
  as the Wall Card, via `next/og`'s `ImageResponse`. One drop per calendar week
  (`RecapReel` row, unique per user+week).

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Postgres + Prisma 7 (`@prisma/adapter-pg`)
- Tailwind CSS
- Auth: custom email/password with bcrypt + a JWT session cookie (no third-party auth
  provider yet)
- Stripe, `@mux/mux-node`, OpenAI, `@elevenlabs/elevenlabs-js`, hls.js — see the table above
- ffmpeg (system binary, for audio-only extraction — see below)

## Getting started

0. Install ffmpeg (`apt-get install ffmpeg` / `brew install ffmpeg`). Optional — without it,
   uploads still work, just without an audio-only stream.

1. Start Postgres and create a database (adjust to taste):

   ```bash
   sudo service postgresql start
   sudo -u postgres psql -c "CREATE USER app WITH PASSWORD 'app' CREATEDB;"
   sudo -u postgres psql -c "CREATE DATABASE creatorplatform OWNER app;"
   ```

2. Copy `.env` and set `DATABASE_URL` / `SESSION_SECRET` if you didn't use the defaults above.
   Add any of the integration env vars from the table above once you have real accounts.

3. Install dependencies and apply migrations:

   ```bash
   npm install
   npx prisma migrate dev
   ```

4. Run the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Feature map

- **Auth** — `src/lib/session.ts`, `src/lib/auth.ts`, `src/lib/actions/auth.ts`
- **Creator profiles** — `src/app/creator/setup`, `src/lib/actions/creator.ts`
- **Upload** (file / camera recording / URL / Mux direct upload) — `src/app/creator/upload`,
  `src/components/upload-form.tsx`, `src/components/camera-recorder.tsx`,
  `src/lib/video-storage.ts`, `src/lib/integrations/mux.ts`
- **Studio Look** (real-time canvas color grade during recording) —
  `src/components/camera-recorder.tsx`
- **Audio-optional by default** (ffmpeg audio extraction + Watch/Listen toggle) —
  `src/lib/audio-extraction.ts`, `src/components/video-with-transcript.tsx`
- **Auto-transcription** (Whisper) — `src/lib/integrations/transcribe.ts`
- **Streaks** — `src/lib/streaks.ts`, `src/lib/actions/activity.ts`
- **Comments** — `src/components/comment-form.tsx`, `postComment` in
  `src/lib/actions/video.ts`
- **Follows** — `src/components/follow-button.tsx`, `src/lib/actions/follow.ts`
- **Viewer-created clips** — `src/app/clips/[id]`, `src/components/clip-form.tsx`,
  `src/lib/actions/clip.ts` (playback uses a media-fragment URL, e.g. `#t=10,20`; this doesn't
  precisely trim Mux-hosted/HLS sources yet, only local/URL video files)
- **Personal wall** (with notes) — `src/app/wall`, `src/lib/actions/wall.ts`,
  `src/components/wall-item-note.tsx`
- **Ask the show** — `src/lib/actions/ask.ts`, `src/components/ask-the-show.tsx`
- **Moment-level recommendations** — `src/lib/recommendations.ts`,
  `src/components/related-moments.tsx`
- **Auto-captioned clips** — `src/lib/caption.ts`, `src/components/copy-caption-button.tsx`
- **Highlight detection** — `src/lib/highlights.ts` (GPT pass + cache, crowd-sourced fallback),
  `src/components/highlight-moments.tsx`, surfaced on `src/app/videos/[id]`
- **AI dubbing** (V3) — `src/lib/integrations/elevenlabs.ts`, `src/lib/actions/dub.ts`,
  `src/components/dub-panel.tsx` + `dub-request-form.tsx` + `check-dub-status-button.tsx`,
  surfaced on `src/app/videos/[id]`
- **Search inside video** — `src/app/search`, `src/lib/transcript.ts`,
  `src/components/transcript-editor.tsx`, `src/components/video-with-transcript.tsx`
- **Tips** — `src/components/tip-form.tsx`, `src/lib/actions/tip.ts`,
  `src/app/api/webhooks/stripe`
- **Subscriptions** (gates `subscriberOnly` videos) — `src/components/subscribe-button.tsx` /
  `subscribe-checkout-form.tsx`, `src/lib/actions/subscription.ts`
- **Creator payouts** (Stripe Connect) — `src/lib/actions/connect.ts`,
  `src/components/stripe-connect-button.tsx`, onboarding UI in `src/app/creator/dashboard`
- **Live streaming** — `src/app/creator/live` (creator RTMP setup),
  `src/app/creators/[handle]/live` (viewer HLS playback), `src/lib/actions/live.ts`,
  `src/app/api/webhooks/mux`
- **Live chat + real-time viewer clipping** (V2 Tier 2) — `src/components/live-chat.tsx` +
  `src/lib/actions/live-chat.ts` (polling chat, same pattern as party chat);
  `src/components/request-live-clip-form.tsx` + `src/lib/actions/live-clip.ts` (marks a moment
  during the broadcast) and `src/lib/live-clip.ts` (the 30s lookback window); materialized into
  real Clips by `materializeLiveRecording` in `src/app/api/webhooks/mux/route.ts`, which also
  saves the ended broadcast as a normal rewatchable Video — surfaced on `src/app/wall` until
  resolved
- **Commute briefing** — `src/lib/actions/briefing.ts` (GPT summary + TTS), surfaced on
  `src/app/wall`
- **Scheduled listening parties** — `src/app/parties`, `src/lib/actions/party.ts`,
  `src/components/party-player.tsx` (sync), `src/components/party-chat.tsx` (polling chat)
- **Wall Cards** — `src/app/api/wall-card/[userId]` (PNG rendering), `src/lib/wall-card.ts`
  (stats/taste-twin aggregation), `src/lib/actions/wall-view.ts` (rewatch tracking),
  `src/components/wall-card-panel.tsx`
- **Guest-following** — `src/app/guests/[id]` (guest profile), `src/lib/actions/guest.ts`,
  `src/components/guest-editor.tsx` (creator tagging), `src/components/guest-follow-button.tsx`
- **Recap Reels** — `src/app/api/recap/[userId]` (PNG rendering), `src/lib/recap.ts`
  (stats aggregation), `src/components/recap-panel.tsx`, surfaced on `src/app/wall`
- **Creator dashboard** — `src/app/creator/dashboard`
- **Curated Moments** — `src/lib/curated-moments.ts` (AI/crowd suggestion seeding, shared
  public-fetch), `src/lib/actions/curated-moment.ts`, `src/components/curated-moments-curator.tsx`
  + `published-moments-list.tsx` + `copy-moment-links.tsx`, public page at
  `src/app/(main)/moments/[id]`, embeddable card at `src/app/(embed)/embed/moments/[id]`
- **Guest tipping** — `src/lib/actions/guest-tip.ts`, `src/components/guest-tip-form.tsx`,
  handled in `src/app/api/webhooks/stripe` alongside signed-in tips
- **Distributor Payouts** — `src/lib/actions/distributor.ts`, `src/lib/distributor.ts` (split
  math), `src/components/distributor-share-card.tsx`, payout onboarding via
  `createDistributorOnboardingLink` in `src/lib/integrations/stripe.ts`, split handled in
  `src/app/api/webhooks/stripe`
- **Behind the Cut** (plan, raw footage, cut scenes, kit, hard part) — `src/lib/actions/behind-the-cut.ts`,
  `src/components/behind-the-cut-editor.tsx` + `behind-the-cut-panel.tsx`, unlock via Stripe
  Checkout handled in `src/app/api/webhooks/stripe`; the free **effort badge** —
  `src/components/effort-badge.tsx` + `effort-badge-editor.tsx` — surfaced on `src/app/videos/[id]`
- **Earnings pages** — `src/app/(main)/earnings` (distributor ledger, any signed-in user),
  `src/components/distributor-onboarding-form.tsx` (shared with the moment page's share card),
  Behind the Cut revenue + distributor split breakdown added to `src/app/(main)/creator/dashboard`
- **Public ask pages** — `src/lib/actions/ask.ts` (persists `AskedQuestion`), public page at
  `src/app/(main)/ask/[id]`, permalink + recent-questions list added to `ask-the-show.tsx` and the
  creator profile page
- **Saved moments on the wall** — `momentId` on `WallItem`, `saveMomentToWall` in
  `src/lib/actions/wall.ts`, `SaveButton` extended in `src/components/save-button.tsx`
- **Early access for subscribers** — `Video.earlyAccessUntil`, set at upload
  (`src/components/upload-form.tsx`) or edited after
  (`src/components/early-access-editor.tsx` + `setEarlyAccess` in `src/lib/actions/video.ts`),
  gated in `src/app/(main)/videos/[id]/page.tsx`
- **Video Extras** (resource sheet, outtakes, paid attachment) — `src/lib/actions/video-extra.ts`,
  `src/components/video-extra-editor.tsx` + `video-extras-list.tsx`, unlock via Stripe Checkout
  handled in `src/app/api/webhooks/stripe`, file storage in `src/lib/video-storage.ts`
  (`saveOuttakesFile`, `saveAttachmentFile`)
- **Paid questions** — `CreatorProfile.questionPriceCents`, `src/lib/actions/paid-question.ts`,
  `src/components/question-price-form.tsx` + `paid-question-form.tsx` + `paid-questions-inbox.tsx`,
  handled in `src/app/api/webhooks/stripe`
- **Private podcast feed** — `Subscription.feedToken`, `src/app/api/feed/[token]/route.ts` (RSS
  2.0), `src/components/podcast-feed-link.tsx` on the creator profile page
