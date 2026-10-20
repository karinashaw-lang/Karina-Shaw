// One-off generator for tests/search/golden_queries.json -- NOT run by
// CI (see golden_search.js for that). Picks ~100 documents spread
// across every category, and for each one, tries its own lay-term
// phrasings (search/lay_terms.json) against the REAL, live
// searchDocuments() until it finds one that actually places that
// document in the top 3 -- so the fixture reflects verified behavior,
// not an aspiration that might not hold. A document whose phrasings
// all fail is swapped for another in the same category rather than
// forced in, so the committed fixture is never a query the engine
// can't actually satisfy.
//
//   python3 -m http.server 8933 &
//   node tests/search/generate_golden_queries.js

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const OUT_PATH = path.join(__dirname, 'golden_queries.json');
const TARGET_PER_CATEGORY = 13; // 8 categories * 13 = 104, trimmed to 100

function seededShuffle(arr, seed) {
  // Deterministic, dependency-free shuffle (xorshift32).
  let state = seed;
  const rand = () => {
    state ^= state << 13; state ^= state >>> 17; state ^= state << 5;
    state |= 0;
    return ((state >>> 0) / 4294967296);
  };
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.docIdf);

  const docs = await page.evaluate(() => state.documents.map(d => ({ id: d.id, categories: d.categories || [] })));
  const layTerms = await page.evaluate(() => state.layTerms || {});

  const byCategory = {};
  docs.forEach(d => {
    (d.categories.length ? d.categories : ['(none)']).forEach(c => {
      (byCategory[c] = byCategory[c] || []).push(d.id);
    });
  });

  async function topThreeContains(query, docId) {
    const top3 = await page.evaluate(q => searchDocuments(q).slice(0, 3).map(r => r.document.id), query);
    return top3.includes(docId);
  }

  const results = [];
  const usedDocIds = new Set();
  const categories = Object.keys(byCategory).sort();

  for (const category of categories) {
    const pool = seededShuffle(byCategory[category], 1337 + category.length);
    let picked = 0;
    for (const docId of pool) {
      if (picked >= TARGET_PER_CATEGORY) break;
      if (usedDocIds.has(docId)) continue;
      const phrases = (layTerms[docId] || []).filter(p => p.split(/\s+/).length >= 3);
      let chosenQuery = null;
      for (const phrase of phrases) {
        if (await topThreeContains(phrase, docId)) { chosenQuery = phrase; break; }
      }
      if (!chosenQuery) continue; // this doc's phrasings don't verify -- skip it, don't force it
      usedDocIds.add(docId);
      results.push({ query: chosenQuery, expectedDocId: docId, category });
      picked++;
    }
    console.error(`${category}: picked ${picked}/${TARGET_PER_CATEGORY}`);
  }

  const final = seededShuffle(results, 777).slice(0, 100);
  fs.writeFileSync(OUT_PATH, JSON.stringify(final, null, 2) + '\n');
  console.error(`Wrote ${final.length} verified golden queries to ${OUT_PATH}`);

  await browser.close();
})();
