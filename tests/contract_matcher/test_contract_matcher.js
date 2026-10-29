// Phase 10.1: unit tests for contract_matcher.js's pure algorithm,
// against a small synthetic clause set -- not the real corpus, which
// is what tools/eval_contract_reader.js measures instead. This file
// locks in the module's own contract (rankPassage returns candidates
// best-first; matchPassage applies the threshold/confidence labeling
// on top of that; a too-short or unrelated passage returns nothing)
// so a future change to the scoring math can't silently break the
// shape every caller (contract_worker.js, the eval harness) depends on.
//
// Run directly: node tests/contract_matcher/test_contract_matcher.js
const matcher = require('../../contract_matcher.js');

let failures = 0;
function check(cond, msg) {
  if (cond) { console.log(`OK   ${msg}`); }
  else { console.log(`FAIL ${msg}`); failures++; }
}

const clauses = [
  { id: 'at_will', title: 'At-Will Employment', body: 'Employment under this agreement is at-will and either party may terminate the relationship at any time for any lawful reason without advance notice.' },
  { id: 'noncompete', title: 'Non-Competition', body: 'Employee agrees not to work for a competing business within a defined geographic area for a defined period after the end of employment.' },
  { id: 'confidentiality', title: 'Confidentiality', body: 'Employee agrees to keep proprietary business information confidential during and after employment and not to disclose trade secrets to any third party.' },
];

const index = matcher.buildClauseIndex(clauses);

// ---- tokenize ----
check(matcher.tokenize('The Employee SHALL not disclose.').includes('disclose'), 'tokenize: lowercases and strips punctuation');
check(!matcher.tokenize('the and for that this shall will').length, 'tokenize: strips every stopword in a stopword-only string');

// ---- rankPassage: ranking order and topK ----
{
  const ranked = matcher.rankPassage(index, 'The worker may be dismissed by either side at any time, with or without a stated reason, since the job has no fixed term.', 0);
  check(ranked.length > 0, 'rankPassage: returns at least one candidate for a relevant passage');
  check(clauses[ranked[0].clauseIndex].id === 'at_will', 'rankPassage: ranks the actually-relevant clause first');
  check(ranked.every((r, i) => i === 0 || ranked[i - 1].cosine >= r.cosine), 'rankPassage: results are sorted best-first');
}
{
  const ranked = matcher.rankPassage(index, 'The worker may be dismissed by either side at any time, with or without a stated reason, since the job has no fixed term.', 1);
  check(ranked.length === 1, 'rankPassage: topK limits the result count');
}

// ---- rankPassage: too short / irrelevant passages ----
check(matcher.rankPassage(index, 'Short text.', 0).length === 0, 'rankPassage: a passage under the minimum token count returns nothing');
check(matcher.rankPassage(index, 'The quick brown fox jumps over the lazy dog near a riverbank.', 0).length === 0, 'rankPassage: a passage sharing no real tokens with any clause returns nothing');

// ---- matchPassage: threshold + confidence ----
{
  const match = matcher.matchPassage(index, 'The worker may be dismissed by either side at any time, with or without a stated reason, since the job has no fixed term.');
  check(match !== null, 'matchPassage: returns a match for a clearly relevant passage');
  check(match && clauses[match.clauseIndex].id === 'at_will', 'matchPassage: matches the correct clause');
  check(match && (match.confidence === 'strong' || match.confidence === 'weak'), 'matchPassage: confidence is always strong or weak when matched');
}
check(matcher.matchPassage(index, 'Short text.') === null, 'matchPassage: null for a too-short passage, never a least-bad guess');
check(matcher.matchPassage(index, 'The quick brown fox jumps over the lazy dog near a riverbank by the old mill.') === null, 'matchPassage: null for an unrelated passage, never a least-bad guess');

console.log(`\n${failures === 0 ? 'OK' : 'FAIL'}: ${failures} failure(s)`);
if (failures > 0) process.exit(1);
console.log('contract_matcher unit tests passed');
