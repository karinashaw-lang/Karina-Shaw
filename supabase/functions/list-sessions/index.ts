// Phase 7.4: "session management (list and revoke sessions)." Revoking
// is a plain client-side signOut({scope: 'others'}) call -- no edge
// function needed for that, see account.js. Listing needs one, because
// individual rows in auth.sessions aren't reachable through the public
// REST API at any privilege level, anon or service-role: PostgREST
// only exposes the `public` schema. A direct Postgres connection (the
// SUPABASE_DB_URL every edge function gets by default) is the actual
// way in.
//
// Trust boundary: the caller's own access token is verified with
// supabase.auth.getUser() against the Auth server itself, not merely
// decoded -- that's what proves who's asking. The token's session_id
// claim is then read directly (no second verification needed; it's
// the same token getUser() already checked) only to mark which row in
// the result is "this device."
//
// NOT invoked from this sandbox: this sandbox's egress policy blocks
// the project's own domain (see DECISIONS.md, Phase 7.1/7.3), the same
// reason tests/auth_roundtrip.js has to be run manually. The
// auth.sessions query itself was verified directly via execute_sql
// before this was written; the HTTP round trip through this exact
// endpoint was not, and is noted as such in DECISIONS.md.

import { createClient } from 'npm:@supabase/supabase-js@2';
import postgres from 'npm:postgres@3';

function decodeJwtPayload(token: string): Record<string, unknown> {
  const payload = token.split('.')[1];
  const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(atob(base64));
}

Deno.serve(async req => {
  const authHeader = req.headers.get('Authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '');

  const userClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  );
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData.user) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
  }

  let currentSessionId: string | null = null;
  try {
    currentSessionId = (decodeJwtPayload(token).session_id as string) || null;
  } catch {
    // best-effort only -- worst case, no row is marked "this device"
  }

  const sql = postgres(Deno.env.get('SUPABASE_DB_URL')!);
  try {
    const rows = await sql`
      select id, created_at, refreshed_at, user_agent, ip::text as ip
      from auth.sessions
      where user_id = ${userData.user.id}
      order by coalesce(refreshed_at, created_at) desc
    `;
    const sessions = rows.map(r => ({ ...r, current: r.id === currentSessionId }));
    return new Response(JSON.stringify({ sessions }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await sql.end();
  }
});
