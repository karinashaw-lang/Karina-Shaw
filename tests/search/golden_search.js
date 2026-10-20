// Phase 5.1 acceptance: "golden search tests: a list of 100 lay
// queries with expected top-3 documents, run in CI." Checks every
// query in golden_queries.json against the real, live
// searchDocuments() and fails if expectedDocId isn't in the top 3 --
// the same "drive the real app.js in a headless browser" approach as
// tests/golden/golden.js and tools/regression.js, not a reimplementation
// of the search logic in Node.
//
//   python3 -m http.server 8933 &
//   node tests/search/golden_search.js
//
// The fixture itself was built by generate_golden_queries.js (not run
// by CI) against this same engine, so a failure here means the engine
// changed since the fixture was generated, not that the fixture was
// ever aspirational.

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const QUERIES_PATH = path.join(__dirname, 'golden_queries.json');

(async () => {
  const queries = JSON.parse(fs.readFileSync(QUERIES_PATH, 'utf8'));

  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.docIdf);

  let failures = 0;
  for (const { query, expectedDocId, category } of queries) {
    const top3 = await page.evaluate(q => searchDocuments(q).slice(0, 3).map(r => r.document.id), query);
    const ok = top3.includes(expectedDocId);
    if (!ok) {
      failures++;
      console.error(`FAIL  [${category}] "${query}" -> expected ${expectedDocId} in top 3, got [${top3.join(', ')}]`);
    }
  }

  console.log(`${queries.length - failures}/${queries.length} golden search queries passed.`);
  await browser.close();

  if (failures > 0) {
    console.error(`\n${failures} golden search quer${failures === 1 ? 'y' : 'ies'} failed.`);
    process.exit(1);
  }
  console.log('golden search passed');
})();
