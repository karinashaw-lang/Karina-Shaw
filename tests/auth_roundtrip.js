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
// other user's blocked read/update/delete — also set:
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

  // --- Cleanup: this script has the service role key, so it can actually
  // finish what it starts — unlike the MCP-based investigation recorded in
  // DECISIONS.md, a direct REST call with the service role key is not
  // subject to that tool's destructive-statement gate.
  await restFetch(`/rest/v1/agreements?id=eq.${rowId}`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  for (const u of [userA, userB]) {
    await restFetch(`/auth/v1/admin/users/${u.userId}`, { token: SERVICE_KEY, method: 'DELETE', extraHeaders: { apikey: SERVICE_KEY } });
  }
  console.log('\nCleaned up: test row and both test users deleted.');

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
