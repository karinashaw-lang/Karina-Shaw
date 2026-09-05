# Creator Platform (V1 + integrations)

A working build of the core loop from the business plan in
[`../business-plan.md`](../business-plan.md): sign up, become a creator, post a video (upload
a file, record from your camera, or paste a URL), get found through transcript search, build
a following, gate content behind a subscription, get tipped, go live, and let viewers clip and
save what they find into a personal wall — plus a commute briefing generated from that wall.

## Real integrations, off by default

Stripe, Mux, and OpenAI are fully wired up in code, but every one of them is **inert until you
add its API key(s)** as environment variables. Without keys, each feature falls back to the
simulated/manual behavior it shipped with originally — nothing breaks, nothing pretends to be
real. This is the actual state of each:

| Feature | Env vars | Without keys | With keys |
|---|---|---|---|
| Tips | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` | Instant simulated ledger entry | Real Stripe Checkout, webhook-confirmed |
| Subscriptions | same as above | Instant simulated toggle | Real recurring Stripe subscription, webhook-confirmed, cancel-able |
| Video upload | `MUX_TOKEN_ID`, `MUX_TOKEN_SECRET`, `MUX_WEBHOOK_SECRET` | Saved to local disk (`public/uploads/`) | Uploaded direct-to-Mux, transcoded, HLS playback |
| Live streaming | same as above | "Go live" page says Mux isn't configured | Real RTMP ingest + HLS live playback, webhook-driven status |
| Transcripts | `OPENAI_API_KEY` | Creator pastes manually | Auto-transcribed with Whisper on local file uploads |
| Commute briefing | same as above | Button says it needs the key | Real GPT summary + TTS audio file |

See `src/lib/integrations/` for the client setup and `isXConfigured()` guards. Because I don't
have accounts/keys for any of these, **the real-credential paths are implemented but not
end-to-end verified against the live APIs** — only the fallback paths have been exercised in a
real browser. Test each with its provider's local tooling before trusting it in production:

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

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Postgres + Prisma 7 (`@prisma/adapter-pg`)
- Tailwind CSS
- Auth: custom email/password with bcrypt + a JWT session cookie (no third-party auth
  provider yet)
- Stripe, `@mux/mux-node`, OpenAI, hls.js — see the table above

## Getting started

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
- **Auto-transcription** (Whisper) — `src/lib/integrations/transcribe.ts`
- **Comments** — `src/components/comment-form.tsx`, `postComment` in
  `src/lib/actions/video.ts`
- **Follows** — `src/components/follow-button.tsx`, `src/lib/actions/follow.ts`
- **Viewer-created clips** — `src/app/clips/[id]`, `src/components/clip-form.tsx`,
  `src/lib/actions/clip.ts` (playback uses a media-fragment URL, e.g. `#t=10,20`; this doesn't
  precisely trim Mux-hosted/HLS sources yet, only local/URL video files)
- **Personal wall** — `src/app/wall`, `src/lib/actions/wall.ts`
- **Search inside video** — `src/app/search`, `src/lib/transcript.ts`,
  `src/components/transcript-editor.tsx`, `src/components/video-with-transcript.tsx`
- **Tips** — `src/components/tip-form.tsx`, `src/lib/actions/tip.ts`,
  `src/app/api/webhooks/stripe`
- **Subscriptions** (gates `subscriberOnly` videos) — `src/components/subscribe-button.tsx` /
  `subscribe-checkout-form.tsx`, `src/lib/actions/subscription.ts`
- **Live streaming** — `src/app/creator/live` (creator RTMP setup),
  `src/app/creators/[handle]/live` (viewer HLS playback), `src/lib/actions/live.ts`,
  `src/app/api/webhooks/mux`
- **Commute briefing** — `src/lib/actions/briefing.ts` (GPT summary + TTS), surfaced on
  `src/app/wall`
- **Creator dashboard** — `src/app/creator/dashboard`
