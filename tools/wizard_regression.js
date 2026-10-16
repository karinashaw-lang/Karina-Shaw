// Phase 2.3 acceptance check: every document renders through the real,
// generic wizard renderer (renderWizard/renderWizardStep in app.js) —
// not assembleDocument() called directly the way regression.js and
// golden.js exercise it, but the actual step-by-step, validate-per-step,
// review-then-submit path a person clicks through. Catches a document
// whose field shape the renderer can't handle, a validator that
// rejects every document's own `example` value, or a step that can
// never be escaped.
//
// Needs a local static server (see tools/regression.js's own header):
//   python3 -m http.server 8933 &
//   node tools/wizard_regression.js
const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  let ok = true;
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto('http://localhost:8933/index.html', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses && state.sharedFields);

  const docIds = await page.evaluate(() => state.documents.map(d => d.id));
  const failures = [];

  for (const docId of docIds) {
    const result = await page.evaluate(id => {
      const doc = state.documents.find(d => d.id === id);
      state.document = doc;
      state.answers = {};
      renderWizard();

      const log = [];
      for (let guard = 0; guard < 50; guard++) {
        if (state.wizardReviewing) break;
        const idx = state.wizardStepIndex;
        const step = state.wizardSteps[idx];
        // Fill every visible field with its own real example value (the
        // same value golden.js's fixtures use) — a validator that
        // rejects a document's own example would be a validator too
        // strict for the real data it has to accept.
        visibleFieldsInStep(step).forEach(f => {
          const input = document.getElementById(`field-${f.id}`);
          if (!input) { log.push(`MISSING_INPUT:${f.id}`); return; }
          input.value = f.example || 'Sample Value';
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        const before = idx;
        document.getElementById('wizard-next').click();
        if (state.wizardStepIndex === before && !state.wizardReviewing) {
          log.push(`STUCK_AT_STEP:${idx}`);
          break;
        }
      }
      if (!state.wizardReviewing) log.push('NEVER_REACHED_REVIEW');

      const rawBracesInReview = (document.getElementById('wizard-review').textContent.match(/\{\{\w+\}\}/g) || []).length;
      if (rawBracesInReview) log.push(`RAW_BRACES_IN_REVIEW:${rawBracesInReview}`);

      if (state.wizardReviewing) {
        document.getElementById('wizard-submit').click();
      }
      const reachedOutput = document.getElementById('screen-output').classList.contains('active');
      if (!reachedOutput) log.push('SUBMIT_DID_NOT_REACH_OUTPUT');
      const rawBracesInOutput = reachedOutput
        ? (document.getElementById('output-clauses').textContent.match(/\{\{\w+\}\}/g) || []).length
        : 0;
      if (rawBracesInOutput) log.push(`RAW_BRACES_IN_OUTPUT:${rawBracesInOutput}`);

      return { ok: log.length === 0, log };
    }, docId);

    if (!result.ok) {
      failures.push({ docId, log: result.log });
      ok = false;
    }
  }

  console.log(`${docIds.length - failures.length}/${docIds.length} documents completed the wizard end to end.`);
  if (failures.length) {
    console.log('\nFAILED documents:');
    failures.slice(0, 10).forEach(f => console.log(`  ${f.docId}: ${f.log.join(', ')}`));
    if (failures.length > 10) console.log(`  ... (+${failures.length - 10} more)`);
  }

  await browser.close();
  if (!ok) { console.log('\nFAILED'); process.exit(1); }
  console.log('\nwizard regression passed');
})();
