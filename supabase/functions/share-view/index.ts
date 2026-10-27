// Phase 7.5: "share a document by expiring link... signer view."
// The signer has no Supabase session at all -- there's no account to
// sign in to, by design, since requiring one would defeat the point of
// a share link. verify_jwt is turned off for this function (see the
// deploy call in DECISIONS.md); the token in the URL itself is the only
// credential, checked here in code against the live project with the
// service role key, which is exactly why document_shares/
// document_signatures have no anon-facing RLS policy at all (Phase 7.5's
// migration comments) -- a direct table read was never the intended
// path in.
//
// NOT invoked from this sandbox, for the same egress-policy reason as
// every other edge function in this project (see DECISIONS.md).

import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async req => {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');
  if (!token) {
    return new Response(JSON.stringify({ error: 'Missing token' }), { status: 400 });
  }

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  const { data: share, error: shareErr } = await admin
    .from('document_shares')
    .select('id, document_id, title, answers, clause_snapshots, schema_version, corpus_version, expires_at, created_at')
    .eq('token', token)
    .maybeSingle();

  if (shareErr || !share) {
    return new Response(JSON.stringify({ error: 'This link is invalid.' }), { status: 404 });
  }

  const expired = new Date(share.expires_at).getTime() < Date.now();

  const { data: signature } = await admin
    .from('document_signatures')
    .select('signer_name, signature_type, signature_data, signed_at')
    .eq('share_id', share.id)
    .maybeSingle();

  return new Response(
    JSON.stringify({
      documentId: share.document_id,
      title: share.title,
      answers: share.answers,
      clauseSnapshots: share.clause_snapshots,
      expiresAt: share.expires_at,
      expired,
      signature: signature || null,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
});
