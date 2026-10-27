// Phase 8.1: "a simple dashboard script: completion and abandonment
// per document and per step, top searches with no result, slowest
// screens." Reads analytics_events directly, since that table has no
// SELECT policy for anyone via the anon key (by design — see its
// migration and DECISIONS.md) and can only be read with the service
// role key, which never belongs in client code and so never belongs
// in this sandbox's config.js either. Run this from the project
// owner's own machine, same as tests/auth_roundtrip.js.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=... \
//   node tools/analytics_report.js
//
// Requires Node 18+ (built-in fetch, no dependencies).

// analytics_events is expected to stay small relative to the corpus
// (it's event counts, not document content) — a single page covers
// real usage for a long time before pagination is worth adding.
const PAGE_SIZE = 10000;

async function fetchAllEvents(supabaseUrl, serviceKey) {
  const res = await fetch(`${supabaseUrl}/rest/v1/analytics_events?select=*&order=created_at.asc&limit=${PAGE_SIZE}`, {
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch analytics_events: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

function reportCompletionAndAbandonment(events) {
  console.log('\n=== Completion per document ===');
  const opened = new Map();
  const completed = new Map();
  events.forEach(e => {
    if (e.event_type === 'opened') opened.set(e.document_id, (opened.get(e.document_id) || 0) + 1);
    if (e.event_type === 'completed') completed.set(e.document_id, (completed.get(e.document_id) || 0) + 1);
  });
  const docIds = new Set([...opened.keys(), ...completed.keys()]);
  if (docIds.size === 0) { console.log('(no data yet)'); }
  [...docIds].sort().forEach(docId => {
    const o = opened.get(docId) || 0;
    const c = completed.get(docId) || 0;
    const rate = o ? `${Math.round((c / o) * 100)}%` : 'n/a';
    console.log(`  ${docId}: opened ${o}, completed ${c} (${rate})`);
  });

  console.log('\n=== Step reached per document (drop-off between consecutive steps) ===');
  const stepsByDoc = new Map();
  events.filter(e => e.event_type === 'step_reached').forEach(e => {
    if (!stepsByDoc.has(e.document_id)) stepsByDoc.set(e.document_id, new Map());
    const steps = stepsByDoc.get(e.document_id);
    steps.set(e.step_id, (steps.get(e.step_id) || 0) + 1);
  });
  if (stepsByDoc.size === 0) { console.log('(no data yet)'); }
  [...stepsByDoc.keys()].sort().forEach(docId => {
    const steps = stepsByDoc.get(docId);
    const ordered = [...steps.entries()].sort((a, b) => {
      if (a[0] === 'review') return 1;
      if (b[0] === 'review') return -1;
      return Number(a[0]) - Number(b[0]);
    });
    console.log(`  ${docId}:`);
    ordered.forEach(([stepId, count], i) => {
      const prevCount = i > 0 ? ordered[i - 1][1] : count;
      const dropped = i > 0 ? prevCount - count : 0;
      console.log(`    step ${stepId}: ${count} reached${i > 0 && dropped > 0 ? ` (${dropped} dropped off from the previous step)` : ''}`);
    });
  });
}

function reportSearches(events) {
  console.log('\n=== Top searches with no result ===');
  const noResult = new Map();
  events.filter(e => e.event_type === 'search' && e.search_result_count === 0 && e.search_query).forEach(e => {
    const q = e.search_query.trim().toLowerCase();
    noResult.set(q, (noResult.get(q) || 0) + 1);
  });
  const sorted = [...noResult.entries()].sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) { console.log('(no data yet)'); }
  sorted.slice(0, 20).forEach(([q, count]) => console.log(`  "${q}": ${count} time${count === 1 ? '' : 's'}`));
}

function reportSlowestScreens(events) {
  console.log('\n=== Slowest screens (median seconds spent before reaching the next step) ===');
  // Grouped by client_session_id, which only exists to let this one
  // computation group one visit's own events in order — never to
  // identify who made the visit. Events with no session id (an older
  // row, or sessionStorage unavailable) can't be grouped and are
  // skipped here, not guessed at.
  const bySession = new Map();
  events.filter(e => e.event_type === 'step_reached' && e.client_session_id).forEach(e => {
    if (!bySession.has(e.client_session_id)) bySession.set(e.client_session_id, []);
    bySession.get(e.client_session_id).push(e);
  });

  const durationsByStep = new Map();
  for (const stepEvents of bySession.values()) {
    stepEvents.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    for (let i = 0; i < stepEvents.length - 1; i++) {
      const cur = stepEvents[i];
      const next = stepEvents[i + 1];
      if (cur.document_id !== next.document_id) continue; // a new document in the same tab is a new attempt, not a slow step
      const seconds = (new Date(next.created_at) - new Date(cur.created_at)) / 1000;
      const key = `${cur.document_id} step ${cur.step_id}`;
      if (!durationsByStep.has(key)) durationsByStep.set(key, []);
      durationsByStep.get(key).push(seconds);
    }
  }

  const medians = [...durationsByStep.entries()].map(([key, durations]) => {
    durations.sort((a, b) => a - b);
    const median = durations[Math.floor(durations.length / 2)];
    return { key, median, n: durations.length };
  }).sort((a, b) => b.median - a.median);

  if (medians.length === 0) { console.log('(not enough same-session step sequences yet)'); }
  medians.slice(0, 20).forEach(({ key, median, n }) => console.log(`  ${key}: ${median.toFixed(1)}s (n=${n})`));
}

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.log('SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY not set — skipping.');
    console.log('This needs the service role key (Project Settings -> API),');
    console.log('which must never live in this sandbox or in config.js. Run it');
    console.log('from the project owner\'s own machine — see this file\'s header.');
    return;
  }
  const events = await fetchAllEvents(supabaseUrl, serviceKey);
  console.log(`Loaded ${events.length} analytics events from ${supabaseUrl}.`);
  reportCompletionAndAbandonment(events);
  reportSearches(events);
  reportSlowestScreens(events);
}

if (require.main === module) {
  main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
}

// Exported for tests/tools/test_analytics_report.js — the aggregation
// logic itself (what this file is actually for) is real, pure, and
// worth checking against synthetic events, independent of this file's
// own no-credentials no-op path above, which is all a live run could
// otherwise verify.
module.exports = { reportCompletionAndAbandonment, reportSearches, reportSlowestScreens };
