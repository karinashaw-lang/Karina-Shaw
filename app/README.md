# Creator Platform (V1 + integrations)

A working build of the core loop from the business plan in
[`../business-plan.md`](../business-plan.md): sign up, become a creator, post a video (upload
a file, record from your camera, or paste a URL — with a real audio-only stream extracted
automatically), get found through transcript search, build a following, gate content behind a
subscription, get tipped and paid out directly via Stripe Connect, go live, keep a streak going,
and let viewers clip and save what they find into a personal wall — plus a commute briefing and
a shareable monthly Wall Card generated from that wall.

## Real integrations, off by default

Stripe, Mux, and OpenAI are fully wired up in code, but every one of them is **inert until you
add its API key(s)** as environment variables. Without keys, each feature falls back to the
simulated/manual behavior it shipped with originally — nothing breaks, nothing pretends to be
real. This is the actual state of each:

| Feature | Env vars | Without keys | With keys |
|---|---|---|---|
| Tips | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Instant simulated ledger entry | Real Stripe Checkout, webhook-confirmed |
| Subscriptions | same as above | Instant simulated toggle | Real recurring Stripe subscription, webhook-confirmed, cancel-able |
| Creator payouts | same as above (+ creator completes Connect onboarding) | Tips/subscriptions charge to the *platform's* Stripe account | Stripe Connect Express: funds route directly to the creator's own account (`transfer_data`), tracked via the `account.updated` webhook |
| Video upload | `MUX_TOKEN_ID`, `MUX_TOKEN_SECRET`, `MUX_WEBHOOK_SECRET` | Saved to local disk (`public/uploads/`) | Uploaded direct-to-Mux, transcoded, HLS playback |
| Live streaming | same as above | "Go live" page says Mux isn't configured | Real RTMP ingest + HLS live playback, webhook-driven status |
| Live chat + viewer clipping | same as above | N/A — both only exist once a stream can go live at all | Chat during the broadcast (polling, same pattern as listening parties) and a "Clip this moment" button that grabs the last 30s; once the stream ends, Mux's recording becomes a regular rewatchable video and pending clip requests become real clips against it |
| Transcripts | `OPENAI_API_KEY` | Creator pastes manually | Auto-transcribed with Whisper on local file uploads |
| Commute briefing | same as above | Button says it needs the key | Real GPT summary + TTS audio file |

See `src/lib/integrations/` for the client setup and `isXConfigured()` guards. Because I don't
have accounts/keys for any of these, **the real-credential paths that call out to a provider's
API are implemented but not end-to-end verified against the live APIs** — only the fallback
paths have been exercised in a real browser. Test each with its provider's local tooling before
trusting it in production. One exception: the Mux webhook's live-recording-to-Video pipeline
(`materializeLiveRecording` in `src/app/api/webhooks/mux/route.ts`) needed no outbound Mux call
to verify, just a correctly-signed inbound webhook, so it *was* exercised end-to-end — a real
HTTP POST with a hand-computed Mux webhook signature (HMAC-SHA256, matching `@mux/mux-node`'s own
verification), asserting on the actual Video/Clip rows it produced.

- **Stripe**: `stripe listen --forward-to localhost:3000/api/webhooks/stripe` for local webhook
  delivery; use Stripe's test-mode keys and test card numbers first.
- **Mux**: register `https://<your-tunnel>/api/webhooks/mux` in the Mux dashboard (or use their
  CLI tunneling) so `video.asset.ready` / `video.live_stream.*` events reach you locally.
- **OpenAI**: no webhook needed — Whisper/TTS/chat calls are synchronous.

`APP_URL` is optional (used for Stripe/Mux callback URLs); without it, the app derives its own
origin from the incoming request, which is fine for local dev but should be set explicitly
behind a proxy/CDN in production.

Still not buildable without further infrastructure/product decisions: AI-automated
clip/highlight detection and AI dubbing (voice cloning) — see the business plan's V2/V3
roadmap.

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
- Stripe, `@mux/mux-node`, OpenAI, hls.js — see the table above
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
