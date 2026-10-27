// Phase 8.2: checks tools/ingest_feedback_findings.js's real decision
// logic (which feedback rows become a finding, which are skipped and
// why, which get marked routed either way) against synthetic rows —
// the part with real risk of being wrong, since the live-credentials
// path is already covered just by running the script with none set.
const { buildFindingLines } = require('../../tools/ingest_feedback_findings.js');

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
}

const knownClauseIds = new Set(['real_clause_a', 'real_clause_b']);

// ---- a valid report becomes a real, honestly-worded finding ----
{
  const rows = [{ id: 'f1', clause_id: 'real_clause_a', message: 'This date looks wrong.', created_at: '2026-01-01T00:00:00Z' }];
  const { lines, routedIds, skipped } = buildFindingLines(rows, knownClauseIds);
  check('valid report: produces exactly one finding line', lines.length === 1);
  check('valid report: is marked routed', routedIds.length === 1 && routedIds[0] === 'f1');
  check('valid report: nothing skipped', skipped.length === 0);
  if (lines.length === 1) {
    const finding = JSON.parse(lines[0]);
    check('finding: carries the real clause id', finding.clauseId === 'real_clause_a');
    check('finding: severity is minor, per the master plan\'s own wording', finding.severity === 'minor');
    check('finding: category marks it as user-reported, not verifier research', finding.category === 'user_reported');
    check('finding: carries the user\'s actual message', finding.summary === 'This date looks wrong.');
    check('finding: evidence says plainly this is unverified, doesn\'t fabricate research', /not independently verified/.test(finding.evidence));
    check('finding: has every key verifier/record_result.py requires, so triage.py/report.py read it the same way',
      ['clauseId', 'foundAt', 'severity', 'category', 'summary', 'evidence', 'sourceChecked', 'suggestedFix'].every(k => k in finding));
  }
}

// ---- a report with no message still produces an honest finding, not a crash ----
{
  const rows = [{ id: 'f2', clause_id: 'real_clause_b', message: null, created_at: '2026-01-02T00:00:00Z' }];
  const { lines } = buildFindingLines(rows, knownClauseIds);
  const finding = JSON.parse(lines[0]);
  check('no message: summary says so plainly rather than being blank or null', finding.summary === '(no message provided)');
}

// ---- a report against a clause id that no longer exists is skipped, not fabricated ----
{
  const rows = [{ id: 'f3', clause_id: 'deleted_clause_id', message: 'whatever', created_at: '2026-01-03T00:00:00Z' }];
  const { lines, routedIds, skipped } = buildFindingLines(rows, knownClauseIds);
  check('unknown clause id: produces no finding', lines.length === 0);
  check('unknown clause id: is still marked routed, so it isn\'t retried forever', routedIds.length === 1 && routedIds[0] === 'f3');
  check('unknown clause id: is reported as skipped with a real reason', skipped.length === 1 && /deleted_clause_id/.test(skipped[0].reason));
}

// ---- a mixed batch handles each row independently ----
{
  const rows = [
    { id: 'f4', clause_id: 'real_clause_a', message: 'ok', created_at: '2026-01-04T00:00:00Z' },
    { id: 'f5', clause_id: 'nonexistent', message: 'ok', created_at: '2026-01-05T00:00:00Z' },
  ];
  const { lines, routedIds } = buildFindingLines(rows, knownClauseIds);
  check('mixed batch: exactly one finding for the valid row', lines.length === 1);
  check('mixed batch: both rows marked routed regardless of outcome', routedIds.length === 2);
}

const failed = checks.filter(c => !c.ok);
checks.forEach(c => console.log(`${c.ok ? 'OK  ' : 'FAIL'} ${c.name}${!c.ok ? ' -- ' + c.detail : ''}`));
console.log(`\n${checks.length - failed.length}/${checks.length} ingest_feedback_findings checks passed.`);
if (failed.length) process.exit(1);
console.log('ingest_feedback_findings checks passed');
