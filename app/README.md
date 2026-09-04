# Creator Platform (V1 skeleton)

A first vertical slice of the real-time, video-first creator platform described in
[`../business-plan.md`](../business-plan.md): sign up, become a creator, post a video, and comment on it.

Video hosting isn't wired up yet — the upload form just takes a URL to an existing video
file. Live streaming, clipping, the personal wall, search, tips, and everything else in the
roadmap come later.

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

## Project layout

- `prisma/schema.prisma` — `User`, `CreatorProfile`, `Video`, `Comment` models
- `src/lib/session.ts`, `src/lib/auth.ts` — session cookie + current-user lookup
- `src/lib/actions/*` — Server Actions for signup/login/logout, creating a creator
  profile, uploading a video, and commenting
- `src/app/*` — pages for the home feed, auth, creator setup/upload, creator profiles,
  and video detail
