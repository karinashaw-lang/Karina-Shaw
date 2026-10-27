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
// Measured on this sandbox: ~5.6MB (app.js, styles.css, the vendored
// PDF/.docx libraries, and the corpus JSON together -- a local static
// server with no compression, the "worst case" a real gzip/brotli host
// would beat easily). Budgeted with real headroom over that, to catch
// an accidental new eager-loaded asset, not to pretend every byte here
// could or should shrink -- a lot of it is data/clauses.json, real
// sourced text for 740 documents.
const INITIAL_LOAD_BYTES = 20 * 1024 * 1024;
// Measured: ~1.5-2s in this sandbox for every data file to arrive and
// state.documents/clauses/sharedFields to be ready. Generous headroom
// for a slower CI runner or a cold cache on a real device.
const TIME_TO_INTERACTIVE_MS = 8000;
// Measured: ~1.9-2.1s in this sandbox for all 60 passages of the
// synthetic paste below (TF-IDF scoring the full corpus per passage,
// with no cross-passage caching -- genuinely O(passages × corpus),
// not a one-time setup cost). This profiling is exactly what moved
// the actual scoring into contract_worker.js, off the main thread
// (Phase 9.2) -- the wall-clock time measured here is about the same
// either way, but the UI no longer freezes while it elapses, which
// this timing-only budget can't see and A11Y_CHECKLIST.md-style manual
// observation would have to. Budgeted with real headroom, not just
// over the sandbox's own number, since a
// real reader's paste is the one input size here this project doesn't
// otherwise control.
const CONTRACT_READER_MS = 5000;

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

  // ---- initial load size + time to interactive ----
  // Captured across the real navigation, not just the data files --
  // app.js, styles.css, and the vendored PDF/.docx libraries (loaded
  // unconditionally, not lazily, per lib/README.md) are as much a part
  // of what a real visitor's browser has to fetch as the corpus JSON.
  let totalBytes = 0;
  page.on('response', async res => {
    try {
      const body = await res.body();
      totalBytes += body.length;
    } catch (e) { /* a request that never completed a body isn't part of what loaded */ }
  });
  const navStart = Date.now();
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses && state.sharedFields);
  const timeToInteractiveMs = Date.now() - navStart;
  await page.waitForFunction(() => typeof state !== 'undefined' && state.docIdf);

  const failures = [];

  console.log(`initial load: ${(totalBytes / 1024 / 1024).toFixed(1)}MB transferred (budget ${(INITIAL_LOAD_BYTES / 1024 / 1024).toFixed(0)}MB)`);
  if (totalBytes > INITIAL_LOAD_BYTES) {
    failures.push(`Initial load transferred ${(totalBytes / 1024 / 1024).toFixed(1)}MB, over the ${(INITIAL_LOAD_BYTES / 1024 / 1024).toFixed(0)}MB budget.`);
  }

  console.log(`time to interactive: ${timeToInteractiveMs}ms (budget ${TIME_TO_INTERACTIVE_MS}ms)`);
  if (timeToInteractiveMs > TIME_TO_INTERACTIVE_MS) {
    failures.push(`Time to interactive was ${timeToInteractiveMs}ms, over the ${TIME_TO_INTERACTIVE_MS}ms budget.`);
  }

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

  // ---- contract reader: a realistic ~20-page paste ----
  // ~60 paragraphs, ~165 words each (~10,000 words total -- a 20-page
  // contract at a standard ~500 words/page), separated by blank lines
  // the way a real contract's sections actually are, so
  // splitPassages()'s primary paragraph-split path is what's actually
  // being timed, not its fallback sentence-splitter.
  const TWENTY_PAGE_PASTE = Array.from({ length: 60 }, (_, i) => (
    `Section ${i + 1}. This provision governs the rights and obligations of the parties with respect to the matters described in this section, ` +
    'and shall be read together with every other section of this agreement as a single, integrated instrument. Each party represents and warrants ' +
    'that it has full power and authority to enter into this agreement and to perform its obligations hereunder, and that doing so will not conflict ' +
    'with, or result in a breach of, any other agreement, order, or judgment to which it is a party or by which it is bound. Any notice required or ' +
    'permitted under this section shall be in writing and delivered by hand, by nationally recognized overnight courier, or by certified mail, return ' +
    'receipt requested, to the address set forth in the signature block below, or to such other address as a party may designate by written notice to ' +
    'the other party from time to time in accordance with the terms of this section.'
  )).join('\n\n');

  // Phase 9.2: renderIncomingResults() is now async (the actual
  // scoring happens off the main thread, in contract_worker.js) -- the
  // budget still times the whole user-visible operation, paste to
  // rendered results, just awaited instead of measured synchronously.
  const contractReaderResult = await page.evaluate(async text => {
    const t0 = performance.now();
    const passages = splitPassages(text);
    await renderIncomingResults(passages);
    return { ms: performance.now() - t0, passageCount: passages.length };
  }, TWENTY_PAGE_PASTE);
  console.log(`contract reader (20-page paste): ${contractReaderResult.ms.toFixed(1)}ms for ${contractReaderResult.passageCount} passages (budget ${CONTRACT_READER_MS}ms)`);
  if (contractReaderResult.ms > CONTRACT_READER_MS) {
    failures.push(`Contract reader took ${contractReaderResult.ms.toFixed(1)}ms on a 20-page paste, over the ${CONTRACT_READER_MS}ms budget.`);
  }
  if (contractReaderResult.passageCount < 50) {
    failures.push(`Contract reader only split the 20-page paste into ${contractReaderResult.passageCount} passages -- splitPassages() may not be splitting on paragraphs correctly.`);
  }

  await browser.close();

  if (failures.length > 0) {
    console.error('\n' + failures.join('\n'));
    process.exit(1);
  }
  console.log('performance budget passed');
})();
