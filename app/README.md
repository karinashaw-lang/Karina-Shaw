# Creator Platform (V1)

A working build of the V1 core loop from the business plan in
[`../business-plan.md`](../business-plan.md): sign up, become a creator, post a video (upload
a file, record from your camera, or paste a URL), get found through transcript search, build
a following, gate content behind a subscription, get tipped, and let viewers clip and save
what they find into a personal wall.

Three things are simulated rather than fully real, called out in the UI wherever they show up:

- **Video storage** — uploaded files are saved to local disk (`public/uploads/`), not a real
  blob/video service (Mux, Cloudflare Stream, S3). Fine for development; won't survive a
  serverless deploy's ephemeral filesystem.
- **Transcripts** — creators paste them in manually (see the transcript editor on a video
  page). There's no speech-to-text pipeline; search and timestamp jump-links work off
  whatever's pasted in.
- **Tips and subscriptions** — recorded as ledger entries with no payment processor behind
  them (no Stripe integration yet).

Studio Look (an optional real-time cinematic color grade + vignette while recording) is
implemented for real, entirely client-side with a `<canvas>` — see
`src/components/camera-recorder.tsx`.

Live streaming, AI-automated clip detection, the commute briefing, and AI dubbing all need
real infrastructure decisions (a live/RTMP provider, an ASR/TTS provider) plus API keys
before they're buildable — see the business plan's V2/V3 roadmap.

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Postgres + Prisma 7 (`@prisma/adapter-pg`)
- Tailwind CSS
- Auth: custom email/password with bcrypt + a JWT session cookie (no third-party auth
  provider yet)

## Getting started

1. Start Postgres and create a database (adjust to taste):

   ```bash
   sudo service postgresql start
   sudo -u postgres psql -c "CREATE USER app WITH PASSWORD 'app' CREATEDB;"
   sudo -u postgres psql -c "CREATE DATABASE creatorplatform OWNER app;"
   ```

2. Copy `.env` and set `DATABASE_URL` / `SESSION_SECRET` if you didn't use the defaults above.

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
- **Upload** (file / camera recording / URL) — `src/app/creator/upload`,
  `src/components/upload-form.tsx`, `src/components/camera-recorder.tsx`,
  `src/lib/video-storage.ts`
- **Studio Look** (real-time canvas color grade during recording) —
  `src/components/camera-recorder.tsx`
- **Comments** — `src/components/comment-form.tsx`, `postComment` in
  `src/lib/actions/video.ts`
- **Follows** — `src/components/follow-button.tsx`, `src/lib/actions/follow.ts`
- **Viewer-created clips** — `src/app/clips/[id]`, `src/components/clip-form.tsx`,
  `src/lib/actions/clip.ts` (playback uses a media-fragment URL, e.g. `#t=10,20`)
- **Personal wall** — `src/app/wall`, `src/lib/actions/wall.ts`
- **Search inside video** — `src/app/search`, `src/lib/transcript.ts`,
  `src/components/transcript-editor.tsx`, `src/components/video-with-transcript.tsx`
- **Tips** — `src/components/tip-form.tsx`, `src/lib/actions/tip.ts`
- **Subscriptions** (gates `subscriberOnly` videos) — `src/components/subscribe-button.tsx`,
  `src/lib/actions/subscription.ts`
- **Creator dashboard** — `src/app/creator/dashboard`
