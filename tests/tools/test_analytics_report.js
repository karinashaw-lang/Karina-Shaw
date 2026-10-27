// Phase 8.1: checks tools/analytics_report.js's actual aggregation
// logic against synthetic events with known answers -- the one part
// of that file that's worth testing at all, since its own no-op path
// (no credentials) is already covered just by running it. Captures
// console.log output and checks the real computed numbers, not just
// that the script runs without throwing.
const { reportCompletionAndAbandonment, reportSearches, reportSlowestScreens } = require('../../tools/analytics_report.js');

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
}

function captureLog(fn) {
  const lines = [];
  const original = console.log;
  console.log = (...args) => lines.push(args.join(' '));
  try { fn(); } finally { console.log = original; }
  return lines.join('\n');
}

// ---- completion + abandonment ----
{
  const events = [
    { event_type: 'opened', document_id: 'nda' },
    { event_type: 'opened', document_id: 'nda' },
    { event_type: 'completed', document_id: 'nda' },
    { event_type: 'step_reached', document_id: 'nda', step_id: '0' },
    { event_type: 'step_reached', document_id: 'nda', step_id: '0' },
    { event_type: 'step_reached', document_id: 'nda', step_id: '1' },
    { event_type: 'step_reached', document_id: 'nda', step_id: 'review' },
  ];
  const out = captureLog(() => reportCompletionAndAbandonment(events));
  check('completion: reports 2 opened, 1 completed for nda', /nda: opened 2, completed 1 \(50%\)/.test(out), out);
  check('completion: step 0 reached by both, step 1 by one (1 dropped)', /step 1: 1 reached \(1 dropped off from the previous step\)/.test(out), out);
  check('completion: review step ordered last, not numerically before step 1', out.indexOf('step 1:') < out.indexOf('step review:'), out);
}

// ---- top searches with no result ----
{
  const events = [
    { event_type: 'search', search_query: 'eviction notice', search_result_count: 0 },
    { event_type: 'search', search_query: 'Eviction Notice', search_result_count: 0 },
    { event_type: 'search', search_query: 'nda', search_result_count: 5 },
    { event_type: 'search', search_query: 'power of attorney', search_result_count: 0 },
  ];
  const out = captureLog(() => reportSearches(events));
  check('searches: case-folds and counts "eviction notice" twice', /"eviction notice": 2 times/.test(out), out);
  check('searches: a query with real results is excluded', !out.includes('nda'), out);
  check('searches: a single no-result query still appears', /"power of attorney": 1 time\b/.test(out), out);
}

// ---- slowest screens ----
{
  const t0 = new Date('2026-01-01T00:00:00Z');
  const sec = n => new Date(t0.getTime() + n * 1000).toISOString();
  const events = [
    { event_type: 'step_reached', document_id: 'nda', step_id: '0', client_session_id: 's1', created_at: sec(0) },
    { event_type: 'step_reached', document_id: 'nda', step_id: '1', client_session_id: 's1', created_at: sec(10) },
    { event_type: 'step_reached', document_id: 'nda', step_id: '0', client_session_id: 's2', created_at: sec(0) },
    { event_type: 'step_reached', document_id: 'nda', step_id: '1', client_session_id: 's2', created_at: sec(20) },
    // a different document in the same session shouldn't be treated as a slow step on the first one
    { event_type: 'step_reached', document_id: 'lease', step_id: '0', client_session_id: 's1', created_at: sec(100) },
    // no client_session_id at all -- must be skipped, not guessed at
    { event_type: 'step_reached', document_id: 'nda', step_id: '0', created_at: sec(5) },
  ];
  const out = captureLog(() => reportSlowestScreens(events));
  check('slowest screens: median of 10s/20s for nda step 0 is 20s (n=2)', /nda step 0: 20\.0s \(n=2\)/.test(out), out);
  check('slowest screens: a cross-document jump in the same session is not counted', !out.includes('nda step 1:'), out);
}

const failed = checks.filter(c => !c.ok);
checks.forEach(c => console.log(`${c.ok ? 'OK  ' : 'FAIL'} ${c.name}${!c.ok ? ' -- ' + c.detail : ''}`));
console.log(`\n${checks.length - failed.length}/${checks.length} analytics_report checks passed.`);
if (failed.length) process.exit(1);
console.log('analytics_report checks passed');
