// Phase 9.4: "rate limiting for edge functions and magic-link
// requests." Magic-link rate limiting is a Supabase Auth platform
// setting (Authentication -> Rate Limits in the dashboard), on by
// default -- nothing to build for it, see DECISIONS.md. This file is
// the other half: a shared rate limiter for the edge functions that
// accept requests with no Supabase session at all (share-view,
// share-sign), which the platform doesn't throttle per caller the way
// Auth endpoints are.
//
// Backed by a dedicated `rate_limits` table, reached only through a
// direct Postgres connection (SUPABASE_DB_URL) -- the same privileged
// path list-sessions already uses to read auth.sessions -- never
// through PostgREST, which has no policies on that table at all (see
// the migration). The upsert is one statement so Postgres's own row
// lock makes the read-reset-or-increment atomic; no two concurrent
// requests can both see a stale count.
//
// Fails OPEN on any error talking to the database: a rate limiter that
// takes the app down when the DB hiccups is worse than one that
// occasionally lets a burst through. This is a defense-in-depth layer
// on top of the real protections (a 192-bit share token is not
// brute-forceable at any rate limit; this exists to bound abuse/cost
// and slow a signing race, not to be the only thing standing between
// an attacker and a share).

import postgres from 'npm:postgres@3';

export async function withinRateLimit(dbUrl: string, key: string, limit: number): Promise<boolean> {
  const sql = postgres(dbUrl);
  try {
    const [row] = await sql`
      insert into public.rate_limits (key, window_start, count)
      values (${key}, now(), 1)
      on conflict (key) do update set
        count = case
          when public.rate_limits.window_start < now() - interval '1 minute' then 1
          else public.rate_limits.count + 1
        end,
        window_start = case
          when public.rate_limits.window_start < now() - interval '1 minute' then now()
          else public.rate_limits.window_start
        end
      returning count
    `;
    return row.count <= limit;
  } catch (err) {
    console.error('rate limit check failed, allowing request:', err);
    return true;
  } finally {
    await sql.end();
  }
}

export function callerKey(req: Request, prefix: string): string {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  return `${prefix}:${ip}`;
}
