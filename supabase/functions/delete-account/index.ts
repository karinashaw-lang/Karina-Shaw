// Phase 7.4: full account deletion. Deleting a row from auth.users is
// admin-only -- no anon-key client call can do it to its own account,
// so this is the one piece of 7.4 that genuinely needs an edge
// function and the service role key.
//
// Every table this project writes has user_id references
// auth.users(id) on delete cascade (Phase 7.1's own migrations,
// confirmed directly against pg_constraint, not assumed) -- so
// deleting the auth user is sufficient on its own to remove every row
// this account ever wrote. Nothing else needs to run first.
//
// NOT invoked from this sandbox, for the same egress-policy reason as
// list-sessions -- see that function's header and DECISIONS.md.

import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async req => {
  const authHeader = req.headers.get('Authorization') || '';

  const userClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  );
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData.user) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
  }

  const adminClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );
  const { error: deleteErr } = await adminClient.auth.admin.deleteUser(userData.user.id);
  if (deleteErr) {
    return new Response(JSON.stringify({ error: deleteErr.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ deleted: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
