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
  for (const c of cats) {
    const n = await p.evaluate(c => state.documents.filter(d => d.categories.includes(c)).length, c);
    console.log(`${n === 92 ? 'OK  ' : 'FAIL'} ${c}: ${n}`);
  }
  console.log(await p.evaluate(() => `corpus: ${state.documents.length} documents / ${state.clauses.length} clauses`));

  // The five newest documents, assembled end to end
  const newest = ['probate_sale_real_property_confirmation_info_sheet',
                  'third_party_joinder_family_law_info_sheet',
                  'employee_obligations_labor_code_article_3_info_sheet',
                  'state_civil_service_appointment_info_sheet'];
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
    state.document = state.documents.find(d => d.id === 'state_civil_service_appointment_info_sheet');
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
