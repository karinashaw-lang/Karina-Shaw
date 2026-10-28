// Real end-to-end test of the thing this sandbox's egress policy blocks:
// an actual HTTP round trip through Supabase Auth, not just RLS verified
// directly against Postgres (which a prior session already did, and which
// proves the policies are correct but not that the real client-facing API
// path works). Run this from a machine whose network isn't restricted —
// your own laptop, a CI runner with normal internet, anywhere outside this
// sandbox.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_ANON_KEY=sb_publishable_... \
//   node tests/auth_roundtrip.js
//
// With just those two (the same two values config.js needs), this verifies:
//   - an unauthenticated client cannot read any row in public.agreements
//   - requesting a magic link for a throwaway address succeeds over HTTP
// It cannot go further than that without completing the email round trip,
// which needs either a real inbox or the service role key (below).
//
// For the full round trip — two real sessions, one user's insert, the
// other user's blocked read/update/delete, now extended (Phase 7.1) to
// also cover orders/order_items/audit_log/document_versions/feedback —
// also set:
//   SUPABASE_SERVICE_ROLE_KEY=...   (Project Settings -> API -> service_role.
//                                    Never put this in config.js or anywhere
//                                    client-side — it bypasses RLS entirely.
//                                    It's used here, server-side, only to
//                                    generate magic-link tokens the way
//                                    Supabase's own email would, without
//                                    needing an actual inbox.)
//
// Requires Node 18+ (built-in fetch, no dependencies).

const SUPABASE_URL = process.env.SUPABASE_URL;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !ANON_KEY) {
  console.log('SUPABASE_URL and/or SUPABASE_ANON_KEY not set — skipping.');
  console.log('This test needs real network access to a Supabase project,');
  console.log('which this sandbox\'s egress policy does not allow (see');
  console.log('DECISIONS.md / BASELINE.md). Run it from an unrestricted');
  console.log('machine with those two env vars set — see the header of');
  console.log('this file for the full instructions, including the optional');
  console.log('SUPABASE_SERVICE_ROLE_KEY for the complete two-user test.');
  process.exit(0);
}

const RUN_ID = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
let failures = 0;

function check(cond, label) {
  console.log((cond ? 'OK   ' : 'FAIL ') + label);
  if (!cond) failures++;
  return cond;
}

async function restFetch(path, { token = ANON_KEY, method = 'GET', body, extraHeaders = {} } = {}) {
  const res = await fetch(`${SUPABASE_URL}${path}`, {
    method,
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* non-JSON response */ }
  return { status: res.status, json, text };
}

async function main() {
  console.log(`Target: ${SUPABASE_URL}`);
  console.log(`Run id: ${RUN_ID}\n`);

  // --- Anon-key-only checks: work with just SUPABASE_URL + SUPABASE_ANON_KEY ---

  const anonRead = await restFetch('/rest/v1/agreements?select=id&limit=1');
  check(
    anonRead.status === 200 && Array.isArray(anonRead.json) && anonRead.json.length === 0,
    `unauthenticated read of public.agreements returns zero rows (status ${anonRead.status}, ${Array.isArray(anonRead.json) ? anonRead.json.length : '?'} rows)`
  );

  const throwawayEmail = `groundtruth-roundtrip-${RUN_ID}@example.com`;
  const otpRequest = await restFetch('/auth/v1/otp', {
    method: 'POST',
    body: { email: throwawayEmail, create_user: true },
  });
  check(otpRequest.status >= 200 && otpRequest.status < 300, `magic-link request for ${throwawayEmail} accepted (status ${otpRequest.status})`);

  if (!SERVICE_KEY) {
    console.log('\nSUPABASE_SERVICE_ROLE_KEY not set — stopping here.');
    console.log('The full two-user round trip (real sessions, insert, cross-user');
    console.log('isolation over HTTP) needs it to generate magic-link tokens');
    console.log('without an inbox. See this file\'s header for how.');
    finish();
    return;
  }

  // --- Full round trip: needs the service role key to mint real sessions ---

  async function createSessionForThrowawayUser(label) {
    const email = `groundtruth-roundtrip-${RUN_ID}-${label}@example.com`;
    const linkRes = await restFetch('/auth/v1/admin/generate_link', {
      token: SERVICE_KEY,
      method: 'POST',
      body: { type: 'magiclink', email },
      extraHeaders: { apikey: SERVICE_KEY },
    });
    const tokenHash = linkRes.json && (linkRes.json.hashed_token || (linkRes.json.properties || {}).hashed_token);
    if (!check(linkRes.status < 300 && !!tokenHash, `generated magic-link token for user ${label} (${email})`)) {
      return null;
    }
    const verifyRes = await restFetch(`/auth/v1/verify`, {
      method: 'POST',
      body: { type: 'magiclink', token_hash: tokenHash },
    });
    const accessToken = verifyRes.json && verifyRes.json.access_token;
    const userId = verifyRes.json && verifyRes.json.user && verifyRes.json.user.id;
    if (!check(!!accessToken && !!userId, `exchanged token for a real session, user ${label} (status ${verifyRes.status})`)) {
      return null;
    }
    return { email, userId, accessToken };
  }

  const userA = await createSessionForThrowawayUser('a');
  const userB = await createSessionForThrowawayUser('b');
  if (!userA || !userB) {
    console.log('\nCould not establish both real sessions — stopping the round trip here.');
    finish();
    return;
  }

  const rowId = `roundtrip-${RUN_ID}`;
  const insertRes = await restFetch('/rest/v1/agreements', {
    token: userA.accessToken,
    method: 'POST',
    body: { id: rowId, user_id: userA.userId, document_id: 'nda', title: 'Round-trip test', answers: {} },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(insertRes.status >= 200 && insertRes.status < 300, `user A inserts a row over REST (status ${insertRes.status})`);

  const aReadsOwn = await restFetch(`/rest/v1/agreements?id=eq.${rowId}&select=id`, { token: userA.accessToken });
  check(Array.isArray(aReadsOwn.json) && aReadsOwn.json.length === 1, 'user A reads back their own row');

  const bReadsA = await restFetch(`/rest/v1/agreements?id=eq.${rowId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsA.json) && bReadsA.json.length === 0, "user B's read of A's row returns zero rows");

  const bUpdatesA = await restFetch(`/rest/v1/agreements?id=eq.${rowId}`, {
    token: userB.accessToken,
    method: 'PATCH',
    body: { title: 'hijacked' },
    extraHeaders: { Prefer: 'return=representation' },
  });
  const bUpdateRows = Array.isArray(bUpdatesA.json) ? bUpdatesA.json.length : -1;
  check(bUpdateRows === 0, `user B's update of A's row affects zero rows (status ${bUpdatesA.status}, ${bUpdateRows} rows)`);

  const bDeletesA = await restFetch(`/rest/v1/agreements?id=eq.${rowId}`, {
    token: userB.accessToken,
    method: 'DELETE',
    extraHeaders: { Prefer: 'return=representation' },
  });
  const bDeleteRows = Array.isArray(bDeletesA.json) ? bDeletesA.json.length : -1;
  check(bDeleteRows === 0, `user B's delete of A's row affects zero rows (status ${bDeletesA.status}, ${bDeleteRows} rows)`);

  // --- Phase 7.5: document_shares/document_signatures, plus the two
  // public (no-session) edge functions a signer actually uses. ---

  const shareToken = `roundtrip-${RUN_ID}`;
  const shareExpires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  const shareInsert = await restFetch('/rest/v1/document_shares', {
    token: userA.accessToken, method: 'POST',
    body: {
      owner_id: userA.userId, token: shareToken, document_id: 'nda', title: 'Round-trip share',
      answers: { party_name: 'Acme Co' }, clause_snapshots: [{ id: 'c1', title: 'Clause One', body: 'Hello {{party_name}}.', kind: 'drafting' }],
      schema_version: 1, expires_at: shareExpires,
    },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(shareInsert.status >= 200 && shareInsert.status < 300, `user A creates a document_shares row over REST (status ${shareInsert.status})`);
  const shareId = shareInsert.json && shareInsert.json[0] && shareInsert.json[0].id;

  const bReadsShareA = await restFetch(`/rest/v1/document_shares?id=eq.${shareId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsShareA.json) && bReadsShareA.json.length === 0, "user B's read of A's document_shares row returns zero rows");

  // The signer has no session at all -- these two calls use only the
  // anon key, same as sign.js does.
  const viewBeforeSigning = await restFetch(`/functions/v1/share-view?token=${shareToken}`);
  check(
    viewBeforeSigning.status === 200 && viewBeforeSigning.json && viewBeforeSigning.json.signature === null && !viewBeforeSigning.json.expired,
    `share-view (no session) returns the unsigned document (status ${viewBeforeSigning.status})`
  );

  const badTokenView = await restFetch(`/functions/v1/share-view?token=not-a-real-token`);
  check(badTokenView.status === 404, `share-view rejects an invalid token (status ${badTokenView.status})`);

  const signRes = await restFetch('/functions/v1/share-sign', {
    method: 'POST',
    body: { token: shareToken, signerName: 'Jane Signer', signatureType: 'typed', signatureData: 'Jane Signer' },
  });
  check(signRes.status === 200 && signRes.json && signRes.json.signature, `share-sign (no session) records a signature (status ${signRes.status})`);

  const signAgainRes = await restFetch('/functions/v1/share-sign', {
    method: 'POST',
    body: { token: shareToken, signerName: 'Someone Else', signatureType: 'typed', signatureData: 'Someone Else' },
  });
  check(signAgainRes.status === 409, `share-sign rejects a second signature on the same share (status ${signAgainRes.status})`);

  const viewAfterSigning = await restFetch(`/functions/v1/share-view?token=${shareToken}`);
  check(
    viewAfterSigning.status === 200 && viewAfterSigning.json && viewAfterSigning.json.signature && viewAfterSigning.json.signature.signer_name === 'Jane Signer',
    'share-view now returns the recorded signature'
  );

  const bReadsSignatureA = await restFetch(`/rest/v1/document_signatures?share_id=eq.${shareId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsSignatureA.json) && bReadsSignatureA.json.length === 0, "user B's read of A's document_signatures row returns zero rows");

  // --- Phase 7.1 tables: the same RLS matrix DECISIONS.md verified at
  // the SQL level (role/claim impersonation through execute_sql, since
  // this sandbox's egress policy blocks this exact HTTP path) — this is
  // that matrix's HTTP-level counterpart, the thing Phase 7.1 recorded
  // as unverified for the same network reason. Reuses userA/userB above.

  const auditInsert = await restFetch('/rest/v1/audit_log', {
    token: userA.accessToken, method: 'POST',
    body: { user_id: userA.userId, document_id: 'nda', output_hash: 'deadbeef' },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(auditInsert.status >= 200 && auditInsert.status < 300, `user A inserts an audit_log row over REST (status ${auditInsert.status})`);
  const auditId = auditInsert.json && auditInsert.json[0] && auditInsert.json[0].id;

  const bReadsAuditA = await restFetch(`/rest/v1/audit_log?id=eq.${auditId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsAuditA.json) && bReadsAuditA.json.length === 0, "user B's read of A's audit_log row returns zero rows");

  const bForgesAudit = await restFetch('/rest/v1/audit_log', {
    token: userB.accessToken, method: 'POST',
    body: { user_id: userA.userId, document_id: 'nda', output_hash: 'forged' },
  });
  check(bForgesAudit.status >= 400 && bForgesAudit.status < 500, `user B's forged audit_log insert as A is rejected (status ${bForgesAudit.status})`);

  const feedbackInsert = await restFetch('/rest/v1/feedback', {
    token: userA.accessToken, method: 'POST',
    body: { user_id: userA.userId, message: 'auth round-trip test' },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(feedbackInsert.status >= 200 && feedbackInsert.status < 300, `user A inserts a feedback row over REST (status ${feedbackInsert.status})`);
  const feedbackId = feedbackInsert.json && feedbackInsert.json[0] && feedbackInsert.json[0].id;
  const bReadsFeedbackA = await restFetch(`/rest/v1/feedback?id=eq.${feedbackId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsFeedbackA.json) && bReadsFeedbackA.json.length === 0, "user B's read of A's feedback row returns zero rows");

  // Phase 8.2: anonymous feedback (no session at all) and the
  // clause-id-required-for-wrong_or_outdated constraint.
  const anonFeedback = await restFetch('/rest/v1/feedback', {
    method: 'POST',
    body: { category: 'confusing_question', message: 'anon feedback round trip', document_id: 'nda' },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(anonFeedback.status >= 200 && anonFeedback.status < 300, `anonymous (no session) feedback insert succeeds (status ${anonFeedback.status})`);
  const anonFeedbackId = anonFeedback.json && anonFeedback.json[0] && anonFeedback.json[0].id;

  const missingClauseId = await restFetch('/rest/v1/feedback', {
    method: 'POST',
    body: { category: 'wrong_or_outdated', message: 'should fail, no clause id', document_id: 'nda' },
  });
  check(missingClauseId.status >= 400 && missingClauseId.status < 500, `wrong_or_outdated with no clause_id is rejected by the check constraint (status ${missingClauseId.status})`);

  const withClauseId = await restFetch('/rest/v1/feedback', {
    method: 'POST',
    body: { category: 'wrong_or_outdated', message: 'has a clause id', document_id: 'nda', clause_id: 'some_clause_id' },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(withClauseId.status >= 200 && withClauseId.status < 300, `wrong_or_outdated with a clause_id succeeds (status ${withClauseId.status})`);
  const withClauseIdFeedbackId = withClauseId.json && withClauseId.json[0] && withClauseId.json[0].id;

  // Phase 8.1: anonymous analytics insert, the same no-.select() shape
  // account.js's trackEvent() uses (see DECISIONS.md for why RETURNING
  // and a no-SELECT-policy table don't mix).
  const anonAnalytics = await restFetch('/rest/v1/analytics_events', {
    method: 'POST',
    body: { event_type: 'opened', document_id: 'nda', client_session_id: '00000000-0000-0000-0000-000000000000' },
  });
  check(anonAnalytics.status >= 200 && anonAnalytics.status < 300, `anonymous analytics event insert succeeds (status ${anonAnalytics.status})`);

  // Phase 9.3: same anonymous-insert, no-.select() shape as analytics_events.
  const anonErrorReport = await restFetch('/rest/v1/error_reports', {
    method: 'POST',
    body: { error_name: 'TypeError', message: 'auth round-trip test error', page: '/index.html' },
  });
  check(anonErrorReport.status >= 200 && anonErrorReport.status < 300, `anonymous error report insert succeeds (status ${anonErrorReport.status})`);

  const dvInsert = await restFetch('/rest/v1/document_versions', {
    token: userA.accessToken, method: 'POST',
    body: { user_id: userA.userId, agreement_id: rowId, schema_version: 1, clause_snapshots: [], generated_at: new Date().toISOString() },
    extraHeaders: { Prefer: 'return=representation' },
  });
  check(dvInsert.status >= 200 && dvInsert.status < 300, `user A inserts a document_versions row over REST (status ${dvInsert.status})`);
  const dvId = dvInsert.json && dvInsert.json[0] && dvInsert.json[0].id;
  const bReadsDvA = await restFetch(`/rest/v1/document_versions?id=eq.${dvId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsDvA.json) && bReadsDvA.json.length === 0, "user B's read of A's document_versions row returns zero rows");

  // orders/order_items: select-only for the owner, no write path from
  // either user at all (by design — see DECISIONS.md) — seeded here via
  // the service role, standing in for the Phase 7.2 edge function that
  // doesn't exist yet.
  const orderSeed = await restFetch('/rest/v1/orders', {
    token: SERVICE_KEY, method: 'POST',
    body: { user_id: userA.userId, amount_cents: 2500, status: 'paid' },
    extraHeaders: { apikey: SERVICE_KEY, Prefer: 'return=representation' },
  });
  check(orderSeed.status >= 200 && orderSeed.status < 300, `service role seeds an orders row for A (status ${orderSeed.status})`);
  const orderId = orderSeed.json && orderSeed.json[0] && orderSeed.json[0].id;

  const aReadsOwnOrder = await restFetch(`/rest/v1/orders?id=eq.${orderId}&select=id`, { token: userA.accessToken });
  check(Array.isArray(aReadsOwnOrder.json) && aReadsOwnOrder.json.length === 1, "user A reads back their own seeded order");

  const bReadsOrderA = await restFetch(`/rest/v1/orders?id=eq.${orderId}&select=id`, { token: userB.accessToken });
  check(Array.isArray(bReadsOrderA.json) && bReadsOrderA.json.length === 0, "user B's read of A's order returns zero rows");

  const aInsertsOrder = await restFetch('/rest/v1/orders', {
    token: userA.accessToken, method: 'POST',
    body: { user_id: userA.userId, amount_cents: 1 },
  });
  check(aInsertsOrder.status >= 400 && aInsertsOrder.status < 500, `owner's own insert into orders is rejected — no insert policy for anyone (status ${aInsertsOrder.status})`);

  // --- Phase 7.4 edge functions: list-sessions and delete-account ---
  // Both need a real signed-in user's own access token (not the anon
  // key, not the service role key) to call, same as account.js does.

  const sessionsRes = await restFetch('/functions/v1/list-sessions', { token: userA.accessToken });
  const sessionsOk = sessionsRes.status === 200 && Array.isArray(sessionsRes.json && sessionsRes.json.sessions);
  check(sessionsOk, `list-sessions returns user A's own sessions (status ${sessionsRes.status})`);
  if (sessionsOk) {
    check(sessionsRes.json.sessions.some(s => s.current), 'list-sessions marks the calling session as current');
  }

  const bSessionsRes = await restFetch('/functions/v1/list-sessions', { token: userB.accessToken });
  const bSessionsOk = bSessionsRes.status === 200 && Array.isArray(bSessionsRes.json && bSessionsRes.json.sessions);
  check(
    bSessionsOk && !sessionsRes.json.sessions.some(aS => bSessionsRes.json.sessions.some(bS => bS.id === aS.id)),
    "list-sessions for user B never returns user A's session ids"
  );

  // delete-account, called last, as user A: relies on every table's
  // user_id -> auth.users(id) on delete cascade (Phase 7.1) to clean up
  // everything A created above in one call, instead of deleting each
  // row individually.
  const deleteRes = await restFetch('/functions/v1/delete-account', { token: userA.accessToken, method: 'POST' });
  check(deleteRes.status === 200 && deleteRes.json && deleteRes.json.deleted === true, `delete-account deletes user A's account (status ${deleteRes.status})`);

  const aGoneCheck = await restFetch(`/rest/v1/agreements?id=eq.${rowId}&select=id`, { token: SERVICE_KEY, extraHeaders: { apikey: SERVICE_KEY } });
  check(Array.isArray(aGoneCheck.json) && aGoneCheck.json.length === 0, "user A's agreements row is gone after account deletion (cascade, not a separate delete)");

  const shareGoneCheck = await restFetch(`/rest/v1/document_shares?id=eq.${shareId}&select=id`, { token: SERVICE_KEY, extraHeaders: { apikey: SERVICE_KEY } });
  check(Array.isArray(shareGoneCheck.json) && shareGoneCheck.json.length === 0, "user A's document_shares row (and its signature) is gone after account deletion too");

  // --- Cleanup: this script has the service role key, so it can actually
  // finish what it starts — unlike the MCP-based investigation recorded in
  // DECISIONS.md, a direct REST call with the service role key is not
  // subject to that tool's destructive-statement gate. User A's account
  // (and everything it owned) is already gone via delete-account above;
  // only user B is left to remove here.
  await restFetch(`/auth/v1/admin/users/${userB.userId}`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  // Anonymous feedback/analytics rows have no owner to cascade through,
  // so they need their own explicit cleanup here.
  if (anonFeedbackId) await restFetch(`/rest/v1/feedback?id=eq.${anonFeedbackId}`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  if (withClauseIdFeedbackId) await restFetch(`/rest/v1/feedback?id=eq.${withClauseIdFeedbackId}`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  await restFetch(`/rest/v1/analytics_events?document_id=eq.nda&client_session_id=eq.00000000-0000-0000-0000-000000000000`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  await restFetch(`/rest/v1/error_reports?message=eq.auth%20round-trip%20test%20error`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  console.log("\nCleaned up: user A's account self-deleted via delete-account; user B removed directly; anonymous feedback/analytics rows removed explicitly.");

  finish();
}

function finish() {
  console.log(`\n${failures === 0 ? 'PASSED' : 'FAILED'} (${failures} failure${failures === 1 ? '' : 's'})`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
