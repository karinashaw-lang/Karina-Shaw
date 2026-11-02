// Phase 9.1 (tiering): the per-document accessibility signal
// tools/tiering.py's ACCESSIBILITY_CHECK_EXISTS plugs into. Distinct
// from tests/accessibility/axe_check.js, which is a CI regression gate
// over every shared screen plus a 50-document sample -- fast enough to
// run on every push, but not a corpus-wide certification. Tier A asks
// "has *this* document passed a real accessibility check," not "was it
// one of the 50 sampled this time," so every one of the corpus's
// documents needs its own real result, not an assumption borrowed from
// a sample it may never have been part of.
//
// Renders each document's output screen directly (the same
// state.document/state.answers/renderOutput() path tools/regression.js
// uses for its own full-render check) rather than clicking through the
// wizard per document -- much faster at this scale, and the wizard's
// own accessibility is already covered once, not per-document, by
// tests/accessibility/axe_check.js's screen-wizard scan. Checks both
// light and dark theme, since this app's dark mode is real (styles.css)
// and a color-contrast violation can be theme-specific.
//
// Writes accessibility.json: {generatedAt, sourceCommit, documents:
// {docId: {passed, violations: [{id, impact, help, nodeCount, theme}]}}}.
// Only serious/critical violations affect `passed`, the same bar
// tests/accessibility/axe_check.js and A11Y_CHECKLIST.md use -- moderate/
// minor findings are recorded for visibility but don't block Tier A.
//
//   python3 -m http.server 8933 &
//   node tools/accessibility_scan.js
const fs = require('fs');
const { execSync } = require('child_process');
const { chromium } = require('playwright');

const AXE_SOURCE = fs.readFileSync(require.resolve('axe-core'), 'utf-8');
const FAIL_IMPACTS = new Set(['serious', 'critical']);
const OUT_PATH = 'accessibility.json';

function sourceCommit() {
  try {
    return execSync('git rev-parse HEAD').toString().trim();
  } catch {
    return null;
  }
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto('http://localhost:8933/index.html', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses);
  await page.evaluate(AXE_SOURCE);

  let docIds = await page.evaluate(() => state.documents.map(d => d.id));
  const limitArg = process.argv.find(a => a.startsWith('--limit='));
  if (limitArg) docIds = docIds.slice(0, parseInt(limitArg.split('=')[1], 10));
  console.error(`Scanning ${docIds.length} documents' output screens, both themes...`);

  const results = {};
  let done = 0;
  for (const docId of docIds) {
    const perDoc = { passed: true, violations: [] };
    for (const theme of ['light', 'dark']) {
      const outcome = await page.evaluate(async ({ id, theme }) => {
        const doc = state.documents.find(d => d.id === id);
        if (!doc) return { reached: false };
        state.document = doc;
        state.answers = {};
        doc.fields.forEach(f => { state.answers[f.id] = f.example || 'Sample Value'; });
        renderOutput();
        showScreen('screen-output');
        if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
        else document.documentElement.removeAttribute('data-theme');
        const reached = document.getElementById('screen-output').classList.contains('active');
        if (!reached) return { reached: false };
        const r = await axe.run(document, {});
        return { reached: true, violations: r.violations };
      }, { id: docId, theme });

      if (!outcome.reached) {
        perDoc.passed = false;
        perDoc.violations.push({ id: 'SCAN_FAILED', impact: 'critical', help: `never reached the output screen (${theme} theme)`, nodeCount: 0, theme });
        continue;
      }
      for (const v of outcome.violations) {
        const entry = { id: v.id, impact: v.impact, help: v.help, nodeCount: v.nodes.length, theme };
        perDoc.violations.push(entry);
        if (FAIL_IMPACTS.has(v.impact)) perDoc.passed = false;
      }
    }
    results[docId] = perDoc;
    done += 1;
    if (done % 50 === 0 || done === docIds.length) console.error(`  ${done}/${docIds.length}...`);
  }

  await browser.close();

  const passed = Object.values(results).filter(r => r.passed).length;
  const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    sourceCommit: sourceCommit(),
    documents: results,
    summary: { total: docIds.length, passed, failed: docIds.length - passed },
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n');
  console.log(`Wrote ${OUT_PATH}: ${passed}/${docIds.length} documents pass (0 serious/critical violations, both themes).`);
  if (docIds.length - passed > 0) {
    console.log(`${docIds.length - passed} document(s) with a serious/critical violation:`);
    for (const [id, r] of Object.entries(results)) {
      if (r.passed) continue;
      const bad = r.violations.filter(v => FAIL_IMPACTS.has(v.impact));
      console.log(`  ${id}: ${bad.map(v => `[${v.theme}] ${v.id}`).join(', ')}`);
    }
  }
})();
