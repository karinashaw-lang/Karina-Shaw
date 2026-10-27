// Phase 8.2: "route 'wrong or outdated information' directly into the
// verifier findings queue as a minor finding with the clause id."
//
// There's no live path from a visitor's browser straight into
// verifier/findings.jsonl -- that file is a git-tracked part of this
// repo, and this app has no server of its own that could write to it
// on a client's request even if it wanted to. The real pipeline is
// this script: feedback accumulates in Supabase's feedback table
// (written by anyone, read only with the service role key — see
// DECISIONS.md), and running this appends each new wrong_or_outdated
// row to findings.jsonl as its own entry, then marks the row routed
// so a second run doesn't duplicate it.
//
// This does NOT use verifier/record_result.py: that script enforces
// "never re-record an already-checked clause id", a rule that exists
// to stop the *sampling* pipeline from double-processing a clause —
// it has nothing to do with user reports, which can legitimately
// arrive for a clause whether or not the adversarial verifier has
// ever looked at it. Writing directly to findings.jsonl here, in the
// exact same key shape triage.py/report.py already expect, keeps
// those tools working on this unchanged.
//
// A user report is NOT a verifier finding in the sense every other
// entry in that file is — nothing here is independently checked
// against a primary source. Pretending otherwise would be exactly the
// kind of fabrication this project refuses to do, so evidence/
// sourceChecked/suggestedFix below say plainly that this is an
// unverified report, not invented research.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=... \
//   node tools/ingest_feedback_findings.js [--dry-run]
//
// Requires Node 18+ (built-in fetch, no dependencies).

const fs = require('fs');
const path = require('path');

const FINDINGS_PATH = path.join(__dirname, '..', 'verifier', 'findings.jsonl');
const CLAUSES_PATH = path.join(__dirname, '..', 'data', 'clauses.json');

// Pure and testable on its own (tests/tools/test_ingest_feedback_findings.js):
// given feedback rows and the set of clause ids that actually exist,
// decides which rows become a new finding line, which are skipped
// (and why), and which rows to mark routed either way -- a row
// referencing a clause id that no longer exists is routed too, so it
// doesn't get retried forever, but produces no finding, since writing
// one against a clause id that isn't real would be worse than silence.
function buildFindingLines(feedbackRows, knownClauseIds) {
  const lines = [];
  const routedIds = [];
  const skipped = [];
  for (const row of feedbackRows) {
    if (!knownClauseIds.has(row.clause_id)) {
      skipped.push({ id: row.id, reason: `clause id ${row.clause_id} not found in data/clauses.json` });
      routedIds.push(row.id);
      continue;
    }
    lines.push(JSON.stringify({
      clauseId: row.clause_id,
      foundAt: row.created_at,
      severity: 'minor',
      category: 'user_reported',
      summary: row.message ? row.message.trim() : '(no message provided)',
      evidence: 'User-submitted report via the app\'s feedback control; not independently verified against any source.',
      sourceChecked: 'n/a — not yet researched',
      suggestedFix: 'Needs human/verifier review before any fix is applied.',
    }));
    routedIds.push(row.id);
  }
  return { lines, routedIds, skipped };
}

function loadKnownClauseIds() {
  const clauses = JSON.parse(fs.readFileSync(CLAUSES_PATH, 'utf-8'));
  return new Set(clauses.map(c => c.id));
}

async function fetchUnroutedFeedback(supabaseUrl, serviceKey) {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/feedback?select=id,clause_id,message,created_at&category=eq.wrong_or_outdated&routed_at=is.null&order=created_at.asc`,
    { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } }
  );
  if (!res.ok) throw new Error(`Failed to fetch feedback: ${res.status} ${await res.text()}`);
  return res.json();
}

async function markRouted(supabaseUrl, serviceKey, ids) {
  if (ids.length === 0) return;
  const idList = ids.join(',');
  const res = await fetch(`${supabaseUrl}/rest/v1/feedback?id=in.(${idList})`, {
    method: 'PATCH',
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ routed_at: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Failed to mark feedback routed: ${res.status} ${await res.text()}`);
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.log('SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY not set — skipping.');
    console.log('This needs the service role key, which must never live in this');
    console.log('sandbox or in config.js. Run it from the project owner\'s own');
    console.log('machine — see this file\'s header.');
    return;
  }

  const rows = await fetchUnroutedFeedback(supabaseUrl, serviceKey);
  console.log(`Found ${rows.length} unrouted "wrong or outdated" report(s).`);
  if (rows.length === 0) return;

  const knownClauseIds = loadKnownClauseIds();
  const { lines, routedIds, skipped } = buildFindingLines(rows, knownClauseIds);

  skipped.forEach(s => console.log(`  skipped ${s.id}: ${s.reason}`));
  console.log(`  ${lines.length} new finding(s) to append, ${routedIds.length} row(s) to mark routed.`);

  if (dryRun) {
    console.log('\n--dry-run: not writing findings.jsonl or updating Supabase.');
    lines.forEach(l => console.log(l));
    return;
  }

  if (lines.length > 0) {
    fs.appendFileSync(FINDINGS_PATH, lines.join('\n') + '\n', 'utf-8');
  }
  await markRouted(supabaseUrl, serviceKey, routedIds);
  console.log(`\nAppended ${lines.length} finding(s) to ${FINDINGS_PATH} and marked ${routedIds.length} feedback row(s) routed.`);
  console.log('Review them with: python3 verifier/triage.py --list --severity minor');
}

if (require.main === module) {
  main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
}

module.exports = { buildFindingLines };
