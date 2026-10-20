// Phase 5.2 acceptance: every real path through the intake flow --
// each category, crossed with every combination of its narrowing
// questions' answers -- must route to at least one document. A branch
// that quietly returns nothing would be indistinguishable, to someone
// using it, from the feature being broken; this is the same
// branch-coverage discipline validate_corpus.py already applies to
// clauseOrder's includeIf branches, applied here to intake_flow.json.
//
//   python3 -m http.server 8933 &
//   node tests/search/intake_coverage.js

const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';

function cartesian(arrays) {
  return arrays.reduce((acc, arr) => acc.flatMap(combo => arr.map(x => [...combo, x])), [[]]);
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.intakeFlow && state.docIdf);

  const intakeFlow = await page.evaluate(() => state.intakeFlow);
  const categories = Object.keys(intakeFlow);

  let totalBranches = 0;
  let emptyBranches = [];

  for (const category of categories) {
    const questions = intakeFlow[category];
    const optionLists = questions.map(q => q.options);
    const combos = cartesian(optionLists);
    for (const combo of combos) {
      totalBranches++;
      // Deliberately checks the keyword-scored result BEFORE
      // renderIntakeResults()'s category-wide fallback -- the fallback
      // guarantees a non-empty list either way (every category has
      // documents), so it would make this check pass trivially and
      // hide the thing actually worth catching: a narrowing question
      // whose keywords don't share any vocabulary with anything in
      // its own category, i.e. a question that does nothing.
      const count = await page.evaluate(({ category, combo }) => {
        const categoryIndices = state.documents
          .map((d, idx) => ((d.categories || []).includes(category) ? idx : -1))
          .filter(idx => idx !== -1);
        const keywordParts = [category, ...combo.map(a => a.keywords).filter(Boolean)];
        return scoreDocuments(keywordParts.join(' '), categoryIndices).length;
      }, { category, combo });
      if (count === 0) {
        emptyBranches.push({ category, answers: combo.map(a => a.label) });
      }
    }
  }

  console.log(`${totalBranches - emptyBranches.length}/${totalBranches} intake branches route to at least one document.`);
  if (emptyBranches.length > 0) {
    console.error('Empty branches:', JSON.stringify(emptyBranches, null, 2));
  }

  await browser.close();
  if (emptyBranches.length > 0) {
    console.error(`\n${emptyBranches.length} intake branch(es) route to zero documents.`);
    process.exit(1);
  }
  console.log('intake coverage passed');
})();
