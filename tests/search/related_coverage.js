// Phase 5.3 acceptance: every document's related-document suggestions,
// computed live from relatedDocuments(), must (a) be non-empty across
// virtually the whole corpus -- a document with zero suggestions would
// look to someone using it like the feature silently didn't apply to
// theirs -- and (b) carry exactly one of the two master-plan labels.
// Also pins down that both labels are genuinely exercised by real data
// (not just theoretically reachable), since a labeling bug that always
// picked one would otherwise pass a bare non-empty check.
//
//   python3 -m http.server 8933 &
//   node tests/search/related_coverage.js
//
// Thresholds below were set from the real, observed corpus distribution
// (740/0/343/397 at the time this test was written) with slack for
// future corpus growth, not from a hoped-for target.

const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const ALLOWED_LABELS = ['Documents often used alongside', 'Related documents'];

// Virtually every document should get a suggestion; a handful of
// isolated documents (sharing no clause, no rare field, no category
// with anything else) is plausible as the corpus grows, so this isn't 0.
const MAX_EMPTY_FRACTION = 0.02;
// Both labels must be in real, observed use -- not just reachable in
// principle -- so a regression that collapses the threshold logic to
// one label always shows up here.
const MIN_LABEL_FRACTION = 0.1;

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.clauseDocCount);

  const stats = await page.evaluate(() => {
    let empty = 0;
    let strong = 0;
    let weak = 0;
    const badLabels = [];
    const selfReferential = [];
    state.documents.forEach(doc => {
      const { items, label } = relatedDocuments(doc);
      if (items.length === 0) {
        empty++;
        return;
      }
      if (label === 'Documents often used alongside') strong++;
      else if (label === 'Related documents') weak++;
      else badLabels.push({ docId: doc.id, label });
      if (items.some(r => r.document.id === doc.id)) selfReferential.push(doc.id);
    });
    return { total: state.documents.length, empty, strong, weak, badLabels, selfReferential };
  });

  const failures = [];
  const emptyFraction = stats.empty / stats.total;
  if (emptyFraction > MAX_EMPTY_FRACTION) {
    failures.push(`${stats.empty}/${stats.total} documents (${(emptyFraction * 100).toFixed(1)}%) got zero related documents, over the ${(MAX_EMPTY_FRACTION * 100).toFixed(0)}% ceiling.`);
  }
  if (stats.badLabels.length > 0) {
    failures.push(`${stats.badLabels.length} document(s) got a label outside ${JSON.stringify(ALLOWED_LABELS)}: ${JSON.stringify(stats.badLabels)}`);
  }
  if (stats.selfReferential.length > 0) {
    failures.push(`${stats.selfReferential.length} document(s) suggested themselves: ${JSON.stringify(stats.selfReferential)}`);
  }
  if (stats.strong / stats.total < MIN_LABEL_FRACTION) {
    failures.push(`Only ${stats.strong}/${stats.total} documents got "Documents often used alongside" -- below the ${(MIN_LABEL_FRACTION * 100).toFixed(0)}% floor, suggesting the stronger label has stopped being reachable.`);
  }
  if (stats.weak / stats.total < MIN_LABEL_FRACTION) {
    failures.push(`Only ${stats.weak}/${stats.total} documents got "Related documents" -- below the ${(MIN_LABEL_FRACTION * 100).toFixed(0)}% floor, suggesting the fallback label has stopped being reachable.`);
  }

  console.log(`${stats.total - stats.empty}/${stats.total} documents got related-document suggestions (${stats.strong} "often used alongside", ${stats.weak} "Related documents").`);
  await browser.close();

  if (failures.length > 0) {
    console.error('\n' + failures.join('\n'));
    process.exit(1);
  }
  console.log('related-document coverage passed');
})();
