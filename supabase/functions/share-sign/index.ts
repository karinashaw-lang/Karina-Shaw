// Phase 7.5: records exactly one signature per share. Same no-session,
// token-only trust model as share-view (see its header). A share that
// already has a signature is rejected rather than overwritten -- a
// signing record that could be silently replaced wouldn't be one.
//
// NOT invoked from this sandbox, for the same egress-policy reason as
// every other edge function in this project (see DECISIONS.md).

import { createClient } from 'npm:@supabase/supabase-js@2';
import { withinRateLimit, callerKey } from '../_shared/rate_limit.ts';

Deno.serve(async req => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  // Phase 9.4: 10 requests/min per caller IP -- tighter than
  // share-view, since this one writes. A real signer submits once;
  // ten is headroom for a mis-click/retry, not an invitation to spam.
  const allowed = await withinRateLimit(Deno.env.get('SUPABASE_DB_URL')!, callerKey(req, 'share-sign'), 10);
  if (!allowed) {
    return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment and try again.' }), { status: 429 });
  }

  let body: { token?: string; signerName?: string; signatureType?: string; signatureData?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const { token, signerName, signatureType, signatureData } = body;
  if (!token || !signerName || !signatureData || (signatureType !== 'typed' && signatureType !== 'drawn')) {
    return new Response(JSON.stringify({ error: 'Missing or invalid fields' }), { status: 400 });
  }

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  const { data: share, error: shareErr } = await admin
    .from('document_shares')
    .select('id, owner_id, expires_at')
    .eq('token', token)
    .maybeSingle();

  if (shareErr || !share) {
    return new Response(JSON.stringify({ error: 'This link is invalid.' }), { status: 404 });
  }

  if (new Date(share.expires_at).getTime() < Date.now()) {
    return new Response(JSON.stringify({ error: 'This link has expired.' }), { status: 410 });
  }

  const { data: existing } = await admin
    .from('document_signatures')
    .select('id')
    .eq('share_id', share.id)
    .maybeSingle();

  if (existing) {
    return new Response(JSON.stringify({ error: 'This document has already been signed.' }), { status: 409 });
  }

  const signerIp = req.headers.get('x-forwarded-for') || null;

  const { data: inserted, error: insertErr } = await admin
    .from('document_signatures')
    .insert({
      share_id: share.id,
      owner_id: share.owner_id,
      signer_name: signerName,
      signature_type: signatureType,
      signature_data: signatureData,
      signer_ip: signerIp,
    })
    .select('signer_name, signature_type, signature_data, signed_at')
    .single();

  if (insertErr) {
    return new Response(JSON.stringify({ error: insertErr.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ signature: inserted }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
