// Phase 6.1 acceptance: "Add golden tests that extract text from
// generated PDFs and compare to the plain-text export. Test on a
// 1-page, a 10-page, and a very long document." Drives the real,
// live buildPdfDocDefinition()/pdfMake.createPdf() in a headless
// browser (the same "exercise the real render path" approach as every
// other golden test in this project), then extracts the generated
// PDF's own text back out with pdf-parse in Node -- proving the PDF
// carries real, embedded-font, selectable text, not a rasterized
// image of the page, which is the master plan's other 6.1 requirement.
//
//   python3 -m http.server 8933 &
//   node tests/pdf/pdf_golden.js
//
// "1-page / 10-page / very long" are derived from the corpus's own
// clause counts (shortest / median / longest assembled document)
// rather than hardcoded document ids, so this keeps testing the right
// shape of document as the corpus grows instead of silently testing
// three documents that used to be short/medium/long and no longer are.
//
// The median document also exercises Phase 6.2's "sources and checked-
// dates appendix" toggle (state.includeSourcesAppendix), checking both
// that enabling it adds the appendix and that leaving it off (the
// other two documents) doesn't add it anyway.
//
// Two real findings from building this against the live engine, not
// assumed:
//   - A per-page footer's text sits, in PDF reading order, between
//     whatever content ends at the bottom of one page and whatever
//     continues at the top of the next -- so concatenating all pages'
//     extracted text literally interrupts a paragraph that spans a
//     page break with the footer's own words. stripFooters() removes
//     recognizable footer/page-number lines before comparing, since
//     that's a property of any paginated footer, not lost content.
//   - pdfmake's bundled Roboto font doesn't cover every character this
//     corpus actually uses (☐, ◻, ‖, ‟, ℠, ⅓, Ⓜ all came back as a
//     literal \u0000, pdf.js's signature for "no glyph", when tested
//     directly) -- app.js's sanitizeForPdf() swaps these for plain-
//     ASCII equivalents in the PDF only, which this test both relies
//     on (applying the same substitution to the plain-text side before
//     comparing) and separately re-verifies by asserting the final
//     extracted text contains no stray \u0000 at all, so a future
//     character this corpus starts using wouldn't silently regress.

const fs = require('fs');
const { chromium } = require('playwright');
const { PDFParse } = require('pdf-parse');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';

function sampleValueFor(f) {
  if (f.type === 'email') return 'person@example.com';
  if (f.type === 'date') return '2026-01-15';
  return 'Acme Holdings LLC';
}

function stripFooterLines(text, docId) {
  const escapedId = docId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text
    .replace(new RegExp(`${escapedId}\\s*·\\s*generated\\s*\\d{4}-\\d{2}-\\d{2}`, 'g'), '')
    .replace(/Page\s+\d+\s+of\s+\d+/g, '')
    .replace(/--\s*\d+\s+of\s+\d+\s*--/g, '');
}

// Whitespace, hyphens (a long hyphenated identifier can get its own
// hyphen used as the line-wrap point, inserting a line break with no
// space), brackets, and quote marks all vary with where pdfmake happens
// to wrap a line -- none of that is lost content, so the comparison
// ignores all of it and checks the underlying run of characters instead.
function normalize(s) {
  return s.toLowerCase().replace(/[\s\-\[\]"“”‘’]+/g, '');
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && typeof pdfMake !== 'undefined');

  const clauseCounts = await page.evaluate(() => state.documents.map(d => ({ id: d.id, count: d.clauseOrder.length })));
  clauseCounts.sort((a, b) => a.count - b.count);
  const shortest = clauseCounts[0];
  const median = clauseCounts[Math.floor(clauseCounts.length / 2)];
  const longest = clauseCounts[clauseCounts.length - 1];

  const failures = [];

  async function checkDocument(docId, { withSignature, withAppendix } = {}) {
    const result = await page.evaluate(async ({ id, withSignature, withAppendix }) => {
      const doc = state.documents.find(d => d.id === id);
      state.document = doc;
      state.answers = {};
      doc.fields.forEach(f => {
        state.answers[f.id] = f.type === 'email' ? 'person@example.com' : f.type === 'date' ? '2026-01-15' : 'Acme Holdings LLC';
      });
      state.edits = {};
      state.editedClauseIds = new Set();
      state.currentEntryId = null;
      state.includeSourcesAppendix = !!withAppendix;

      if (withSignature) {
        const entry = addToLibrary(doc.id, doc.title, state.answers);
        state.currentEntryId = entry.id;
        updateLibraryEntry(entry.id, {
          signature: { type: 'typed', name: 'Jane Q. Doe', signedAt: '2026-01-16T10:00:00.000Z' },
        });
      }

      const plainText = buildPlainText();
      const sanitizedPlainText = sanitizeForPdf(plainText);
      const docDef = buildPdfDocDefinition();
      const base64 = await pdfMake.createPdf(docDef).getBase64();
      state.includeSourcesAppendix = false;
      return { sanitizedPlainText, base64, documentId: doc.id };
    }, { id: docId, withSignature, withAppendix });

    const buffer = Buffer.from(result.base64, 'base64');
    const parser = new PDFParse({ data: buffer });
    const parsed = await parser.getText();

    const rawText = parsed.text;
    const cleanedText = stripFooterLines(rawText, result.documentId);
    const normalizedPdf = normalize(cleanedText);
    const plainLines = result.sanitizedPlainText.split('\n').map(l => l.trim()).filter(l => l.length > 3 && l !== '—');
    const missing = plainLines.filter(l => !normalizedPdf.includes(normalize(l)));

    const docFailures = [];
    if (missing.length > 0) {
      docFailures.push(`${missing.length} plain-text line(s) not found in the extracted PDF text: ${JSON.stringify(missing.slice(0, 3))}`);
    }
    if (/\u0000/.test(rawText)) {
      docFailures.push('Extracted PDF text contains \\u0000 -- a character in this document has no glyph in the embedded font.');
    }
    if (!rawText.includes(result.documentId)) {
      docFailures.push(`Footer should carry the document id ("${result.documentId}") but it wasn't found in the extracted text.`);
    }
    if (!/generated\s*\d{4}-\d{2}-\d{2}/.test(rawText)) {
      docFailures.push('Footer should carry a generated-on date but none was found in the extracted text.');
    }
    if (!/Page\s+1\s+of\s+\d+/.test(rawText)) {
      docFailures.push('Footer should carry page numbers ("Page 1 of N") but none was found in the extracted text.');
    }
    if (withSignature && !normalize(rawText).includes(normalize('Jane Q. Doe'))) {
      docFailures.push('Signed name was not found in the extracted PDF text.');
    }
    if (withAppendix && !rawText.includes('SOURCES AND CHECKED DATES')) {
      docFailures.push('Sources appendix was enabled but its heading was not found in the extracted PDF text.');
    }
    if (!withAppendix && rawText.includes('SOURCES AND CHECKED DATES')) {
      docFailures.push('Sources appendix was NOT enabled but its heading appeared anyway -- the toggle leaked across documents.');
    }

    console.log(`${docFailures.length === 0 ? 'OK  ' : 'FAIL'} ${docId}: ${parsed.total} page(s), ${plainLines.length} line(s) checked, ${missing.length} missing`);
    docFailures.forEach(f => console.error(`  - ${f}`));
    failures.push(...docFailures);
    return parsed.total;
  }

  const shortestPages = await checkDocument(shortest.id);
  const medianPages = await checkDocument(median.id, { withSignature: true, withAppendix: true });
  const longestPages = await checkDocument(longest.id);

  if (shortestPages !== 1) failures.push(`Expected the shortest document (${shortest.id}, ${shortest.count} clauses) to fit on 1 page, got ${shortestPages}.`);
  if (medianPages < 2) failures.push(`Expected the median document (${median.id}, ${median.count} clauses) to span multiple pages, got ${medianPages}.`);
  if (longestPages < 10) failures.push(`Expected the longest document (${longest.id}, ${longest.count} clauses) to span at least 10 pages, got ${longestPages}.`);

  await browser.close();

  if (failures.length > 0) {
    console.error(`\n${failures.length} PDF golden check(s) failed.`);
    process.exit(1);
  }
  console.log('PDF golden tests passed');
})();
