// Phase 10.1: "Build an evaluation set of 50 real-style contract
// passages with expected matched clauses. Measure top-k match
// accuracy and false-positive rate for TF-IDF."
//
// Runs tests/contract_reader_eval/eval_set.json (55 passages: 50 with
// a known-correct clause, 5 deliberate distractors expecting no
// match) through the exact same contract_matcher.js the real app
// ships -- not a reimplementation, so this measures what a user
// actually experiences, not an idealized version of it.
//
// Metrics:
//   top-1 accuracy   -- matchPassage() (the real, thresholded,
//                        production function) returns the expected
//                        clause.
//   top-3/top-5       -- the expected clause appears anywhere in the
//   ranking accuracy     top-3/top-5 of rankPassage()'s ranked list,
//                        regardless of the production threshold --
//                        this is "is the underlying ranking any
//                        good," separate from "does the shipped
//                        threshold happen to surface it at #1."
//   false positives   -- a distractor passage (expectedClauseId:
//                        null) that matchPassage() nonetheless
//                        matches to something. This is the real
//                        "false-positive rate" the master plan asks
//                        for -- confidently wrong, not just imperfect
//                        ranking.
//   false negatives   -- a real passage matchPassage() returns null
//                        for, even though the expected clause was
//                        ranked somewhere (distinct from a wrong
//                        match: this is "too cautious," not "wrong").
//
// Usage: node tools/eval_contract_reader.js
const fs = require('fs');
const path = require('path');
const matcher = require('../contract_matcher.js');

const EVAL_SET_PATH = path.join(__dirname, '..', 'tests', 'contract_reader_eval', 'eval_set.json');
// Measured-baseline-plus-headroom, the same style every other budget
// in this project uses (tests/performance/performance_budget.js) --
// not round numbers picked in the abstract. The real TF-IDP unigram
// matcher measured 78.0% top-1, 98.0% top-3/top-5, and 0/5 false
// positives against the 55-case eval set the first time it was run;
// see DECISIONS.md for what was tried (bigrams, threshold tuning) to
// improve on that, and why neither change was kept.
const MIN_TOP1_ACCURACY = 0.70;
const MIN_TOP5_ACCURACY = 0.90;
const MAX_FALSE_POSITIVE_RATE = 0.20;

function loadEvalSet() {
  if (!fs.existsSync(EVAL_SET_PATH)) {
    console.error(`${EVAL_SET_PATH} does not exist.`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(EVAL_SET_PATH, 'utf-8'));
}

function run() {
  const clauses = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'clauses.json'), 'utf-8')).clauses;
  const clauseIdById = new Map(clauses.map((c, i) => [c.id, i]));
  const index = matcher.buildClauseIndex(clauses);
  const cases = loadEvalSet();

  let top1 = 0, top3 = 0, top5 = 0;
  let positiveCases = 0, falsePositives = 0, falseNegatives = 0;
  const misses = [];

  for (const item of cases) {
    const expectedIdx = item.expectedClauseId ? clauseIdById.get(item.expectedClauseId) : null;
    if (item.expectedClauseId && expectedIdx === undefined) {
      console.error(`${item.id}: expectedClauseId "${item.expectedClauseId}" does not exist in data/clauses.json`);
      process.exit(1);
    }

    const ranked5 = matcher.rankPassage(index, item.passage, 5);
    const production = matcher.matchPassage(index, item.passage);

    if (expectedIdx === null) {
      // Distractor: a real match of any kind is a false positive.
      if (production) {
        falsePositives++;
        misses.push(`${item.id} (distractor): FALSE POSITIVE -- matched "${clauses[production.clauseIndex].id}" (${production.confidence})`);
      }
      continue;
    }

    positiveCases++;
    const rankedIds = ranked5.map(r => r.clauseIndex);
    if (production && production.clauseIndex === expectedIdx) top1++;
    if (rankedIds.slice(0, 3).includes(expectedIdx)) top3++;
    if (rankedIds.includes(expectedIdx)) {
      top5++;
    } else if (!production) {
      misses.push(`${item.id}: not in top-5 at all for "${item.expectedClauseId}"`);
    }
    if (!production && rankedIds.includes(expectedIdx)) {
      falseNegatives++;
      misses.push(`${item.id}: expected clause ranked (cosine below threshold) but matchPassage() returned null`);
    } else if (production && production.clauseIndex !== expectedIdx) {
      misses.push(`${item.id}: matched "${clauses[production.clauseIndex].id}" instead of expected "${item.expectedClauseId}"`);
    }
  }

  const top1Rate = positiveCases ? top1 / positiveCases : 1;
  const top3Rate = positiveCases ? top3 / positiveCases : 1;
  const top5Rate = positiveCases ? top5 / positiveCases : 1;
  const distractors = cases.length - positiveCases;
  const fpRate = distractors ? falsePositives / distractors : 0;

  console.log(`${cases.length} eval case(s): ${positiveCases} expecting a match, ${distractors} distractor(s) expecting none.`);
  console.log(`top-1 accuracy: ${top1}/${positiveCases} (${(top1Rate * 100).toFixed(1)}%)`);
  console.log(`top-3 accuracy: ${top3}/${positiveCases} (${(top3Rate * 100).toFixed(1)}%)`);
  console.log(`top-5 accuracy: ${top5}/${positiveCases} (${(top5Rate * 100).toFixed(1)}%)`);
  console.log(`false positives: ${falsePositives}/${distractors} distractor(s) (${(fpRate * 100).toFixed(1)}%)`);
  console.log(`false negatives (ranked but below threshold): ${falseNegatives}`);
  if (misses.length) {
    console.log('\nDetail:');
    misses.forEach(m => console.log(`  ${m}`));
  }

  let ok = true;
  if (top1Rate < MIN_TOP1_ACCURACY) { console.log(`\nFAIL top-1 accuracy ${(top1Rate * 100).toFixed(1)}% below budget ${(MIN_TOP1_ACCURACY * 100).toFixed(0)}%`); ok = false; }
  if (top5Rate < MIN_TOP5_ACCURACY) { console.log(`FAIL top-5 accuracy ${(top5Rate * 100).toFixed(1)}% below budget ${(MIN_TOP5_ACCURACY * 100).toFixed(0)}%`); ok = false; }
  if (fpRate > MAX_FALSE_POSITIVE_RATE) { console.log(`FAIL false-positive rate ${(fpRate * 100).toFixed(1)}% above budget ${(MAX_FALSE_POSITIVE_RATE * 100).toFixed(0)}%`); ok = false; }

  if (!ok) { console.log('\nFAILED'); process.exit(1); }
  console.log('\ncontract reader eval passed');
}

if (require.main === module) run();
module.exports = { run, loadEvalSet };
