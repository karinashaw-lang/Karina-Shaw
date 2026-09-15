const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
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
  if (hi - lo > 1) console.log(`FAIL categories are not level: spread ${lo}..${hi}`);
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
    console.log((r.MISSING ? 'FAIL ' : 'OK   ') + JSON.stringify(r));
  }

  // Full render through the real output path
  await p.evaluate(() => {
    state.document = state.documents[state.documents.length - 1];
    state.answers = {}; state.document.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    renderOutput(); showScreen('screen-output');
  });
  console.log('rendered: ' + JSON.stringify(await p.evaluate(() => ({
    blocks: document.querySelectorAll('#output-clauses .clause').length,
    badges: document.querySelectorAll('#output-clauses [class*="badge"]').length,
    rawBraces: (document.getElementById('output-clauses').textContent.match(/\{\{\w+\}\}/g) || []).length,
  }))));

  console.log('contract reader: ' + JSON.stringify(await p.evaluate(() => {
    const t0 = performance.now();
    matchPassage('Employer may monitor employee activity by video recording in work areas.');
    return { ms: Math.round(performance.now() - t0) };
  })));

  console.log('console errors: ' + errs.length);
  errs.forEach(e => console.log('  ' + e));
  await b.close();
})();
