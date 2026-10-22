// Phase 5.4 acceptance: "Add a performance budget test: first render
// under a threshold, and search response under 100 ms for the full
// corpus." Drives the real, live app.js in a headless browser (the
// same approach as tools/regression.js and tests/search/golden_search.js)
// rather than reimplementing renderPicker()/searchDocuments() in Node,
// so a regression in the real rendering or scoring path is what this
// actually catches.
//
//   python3 -m http.server 8933 &
//   node tests/performance/performance_budget.js
//
// Thresholds were set from this sandbox's own measured numbers (first
// page: ~5ms; full 740-card render: ~85ms; search: under 2ms) with
// generous headroom for a slower CI runner or a real mid-range phone --
// not tuned to just barely pass. The point of each threshold:
//   - FIRST_RENDER_MS catches a regression back to rendering the whole
//     unpaginated 740-document corpus on first paint (which measures
//     ~85ms here -- comfortably over this budget even on this fast
//     sandbox, let alone a slower device).
//   - SEARCH_MS is the master plan's own number, checked against the
//     full, un-truncated document index on every representative query.

const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const FIRST_RENDER_MS = 50;
const SEARCH_MS = 100;

const SEARCH_QUERIES = [
  'security deposit back', 'fired for no reason', 'noncompete clause',
  'landlord wont fix', 'quitclaim deed', 'nda', 'estate planning trust',
  'llc operating agreement', 'company car accident', 'severance package',
];

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.docIdf);

  const failures = [];

  const { firstRenderMs, cardCount, totalDocs } = await page.evaluate(() => {
    state.categoryFilter = null;
    state.tierFilter = null;
    state.tierSortEnabled = false;
    state.searchQuery = '';
    state.searchResults = null;
    const t0 = performance.now();
    renderPicker();
    return {
      firstRenderMs: performance.now() - t0,
      cardCount: document.querySelectorAll('#doc-list .doc-card').length,
      totalDocs: state.documents.length,
    };
  });
  console.log(`first render: ${firstRenderMs.toFixed(1)}ms for ${cardCount}/${totalDocs} cards (budget ${FIRST_RENDER_MS}ms)`);
  if (firstRenderMs > FIRST_RENDER_MS) {
    failures.push(`First picker render took ${firstRenderMs.toFixed(1)}ms, over the ${FIRST_RENDER_MS}ms budget.`);
  }
  if (cardCount >= totalDocs) {
    failures.push(`First render built ${cardCount}/${totalDocs} cards -- the picker isn't paginating at all.`);
  }

  const searchTimings = await page.evaluate(queries => queries.map(q => {
    const t0 = performance.now();
    const results = searchDocuments(q);
    return { q, ms: performance.now() - t0, resultCount: results.length };
  }), SEARCH_QUERIES);
  const maxSearch = Math.max(...searchTimings.map(s => s.ms));
  console.log(`search: max ${maxSearch.toFixed(1)}ms across ${SEARCH_QUERIES.length} queries (budget ${SEARCH_MS}ms)`);
  searchTimings.forEach(s => {
    if (s.ms > SEARCH_MS) {
      failures.push(`searchDocuments("${s.q}") took ${s.ms.toFixed(1)}ms, over the ${SEARCH_MS}ms budget.`);
    }
  });

  await browser.close();

  if (failures.length > 0) {
    console.error('\n' + failures.join('\n'));
    process.exit(1);
  }
  console.log('performance budget passed');
})();
