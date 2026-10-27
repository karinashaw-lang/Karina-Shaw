const fs = require('fs');
const { chromium } = require('playwright');
(async () => {
  // Tracks real structural failures only (category balance, a document that
  // fails to assemble) — not console-error count, which legitimately differs
  // between this sandbox (two expected, proxy-blocked resources) and CI
  // (real internet, so neither is expected there). A script that only logs
  // "FAIL" without ever exiting nonzero can't gate anything, which defeats
  // the point of running it in CI at all.
  let ok = true;
  // This sandbox pre-installs Chromium at a fixed path and skips Playwright's
  // own browser download; CI runs `playwright install chromium` instead, which
  // puts it in Playwright's normal managed location. Use the sandbox path only
  // when it's actually there, so the same script works in both.
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const b = await chromium.launch(launchOpts);
  const p = await b.newPage();
  const errs = [];
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
  await p.route('https://fonts.googleapis.com/**', r => r.abort());
  await p.goto('http://localhost:8933/index.html', { waitUntil: 'networkidle' });
  await p.waitForFunction(() => state && state.documents && state.clauses);

  const cats = ['Hiring','During employment','Confidentiality & IP','Ending employment',
                'Business Formation','Real Estate','Estate Planning','Family Law'];
  const counts = [];
  for (const c of cats) {
    const n = await p.evaluate(c => state.documents.filter(d => d.categories.includes(c)).length, c);
    // Categories are kept level by the wave rotation, so they may differ by at
    // most one. Deriving the floor keeps this from needing an edit every wave.
    counts.push([c, n]);
  }
  const lo = Math.min(...counts.map(x => x[1])), hi = Math.max(...counts.map(x => x[1]));
  for (const [c, n] of counts) console.log(`${hi - lo <= 1 ? 'OK  ' : 'FAIL'} ${c}: ${n}`);
  if (hi - lo > 1) { console.log(`FAIL categories are not level: spread ${lo}..${hi}`); ok = false; }
  console.log(await p.evaluate(() => `corpus: ${state.documents.length} documents / ${state.clauses.length} clauses`));

  // The most recently added documents, assembled end to end. Documents are
  // appended, so the tail of the array is the newest wave — derived rather
  // than hardcoded so this needs no edit as the corpus grows.
  const newest = await p.evaluate(() => state.documents.slice(-4).map(d => d.id));
  for (const id of newest) {
    const r = await p.evaluate(id => {
      const doc = state.documents.find(d => d.id === id);
      if (!doc) return { id, MISSING: true };
      state.document = doc; state.answers = {};
      doc.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
      const asm = assembleDocument();
      return { id, clauses: asm.length,
        verified: asm.filter(c => c.status === 'verified').length,
        citations: asm.reduce((s, c) => s + (c.citations ? c.citations.length : 0), 0),
        rawInBody: asm.filter(c => /\{\{\w+\}\}/.test(c.renderedBody)).length,
        rawInGap: asm.filter(c => c.gap && /\{\{\w+\}\}/.test(c.gap)).length };
    }, id);
    const bad = r.MISSING || r.rawInBody > 0 || r.rawInGap > 0;
    if (bad) ok = false;
    console.log((bad ? 'FAIL ' : 'OK   ') + JSON.stringify(r));
  }

  // Full render through the real output path
  await p.evaluate(() => {
    state.document = state.documents[state.documents.length - 1];
    state.answers = {}; state.document.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    renderOutput(); showScreen('screen-output');
  });
  const rendered = await p.evaluate(() => ({
    blocks: document.querySelectorAll('#output-clauses .clause').length,
    badges: document.querySelectorAll('#output-clauses [class*="badge"]').length,
    rawBraces: (document.getElementById('output-clauses').textContent.match(/\{\{\w+\}\}/g) || []).length,
  }));
  if (rendered.blocks === 0 || rendered.rawBraces > 0) ok = false;
  console.log((rendered.blocks === 0 || rendered.rawBraces > 0 ? 'FAIL ' : 'OK   ') + 'rendered: ' + JSON.stringify(rendered));

  // Phase 9.2: the actual scoring now runs in contract_worker.js, off
  // the main thread -- matchPassages() is the async main-thread call
  // that hands a passage to it and waits for the real result, not a
  // direct call into the (now worker-only) scoring function.
  console.log('contract reader: ' + JSON.stringify(await p.evaluate(async () => {
    const t0 = performance.now();
    const [match] = await matchPassages(['Employer may monitor employee activity by video recording in work areas.']);
    return { ms: Math.round(performance.now() - t0), matched: !!match };
  })));

  // Quality tiers (Phase 3.2): every document gets a tier pill on the
  // picker, filtering by tier narrows to exactly that tier's documents,
  // and sorting by tier groups A before B before C. Since Phase 5.4,
  // renderPicker() only ever puts one page's worth of cards in the DOM
  // (see PICKER_PAGE_SIZE) -- "every document" is checked against
  // getPickerDocs()'s full filtered list, not a DOM query, and the DOM
  // checks instead confirm the rendered page itself is correct and
  // correctly capped at PICKER_PAGE_SIZE.
  const tierCheck = await p.evaluate(() => {
    showScreen('screen-picker');
    state.categoryFilter = null;
    state.tierFilter = null;
    state.tierSortEnabled = false;
    renderCategoryFilter();
    renderTierFilter();
    renderPicker();
    const docCount = getPickerDocs().docs.length;
    const pillCount = document.querySelectorAll('.doc-card .tier-pill').length;
    const renderedCount = document.querySelectorAll('.doc-card').length;
    const expectedPage = Math.min(PICKER_PAGE_SIZE, docCount);

    const bCount = Object.values(state.tiers).filter(t => t.tier === 'B').length;
    state.tierFilter = 'B';
    renderPicker();
    const filteredDocCount = getPickerDocs().docs.length;
    const filteredRenderedCount = document.querySelectorAll('.doc-card').length;
    const expectedFilteredPage = Math.min(PICKER_PAGE_SIZE, filteredDocCount);
    const allFilteredAreB = Array.from(document.querySelectorAll('.doc-card'))
      .every(card => card.querySelector('.tier-pill.tier-B'));
    state.tierFilter = null;

    state.tierSortEnabled = true;
    renderPicker();
    const order = Array.from(document.querySelectorAll('.doc-card .tier-pill'))
      .map(pill => pill.className.match(/tier-([ABC])/)[1]);
    const rank = { A: 0, B: 1, C: 2 };
    const sorted = order.every((t, i) => i === 0 || rank[order[i - 1]] <= rank[t]);
    state.tierSortEnabled = false;
    renderPicker();

    return { docCount, pillCount, renderedCount, expectedPage, bCount, filteredDocCount,
      filteredRenderedCount, expectedFilteredPage, allFilteredAreB, sorted };
  });
  const tierOk = tierCheck.pillCount === tierCheck.renderedCount
    && tierCheck.renderedCount === tierCheck.expectedPage
    && tierCheck.filteredDocCount === tierCheck.bCount
    && tierCheck.filteredRenderedCount === tierCheck.expectedFilteredPage
    && tierCheck.allFilteredAreB
    && tierCheck.sorted;
  if (!tierOk) ok = false;
  console.log((tierOk ? 'OK   ' : 'FAIL ') + 'tiers: ' + JSON.stringify(tierCheck));

  console.log('console errors: ' + errs.length);
  errs.forEach(e => console.log('  ' + e));
  await b.close();
  if (!ok) { console.log('\nFAILED'); process.exit(1); }
  console.log('\nregression passed');
})();
