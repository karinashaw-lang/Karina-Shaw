// Phase 6.2 acceptance: "Add .docx export (client-side) so users can
// edit in Word" and "Include a 'sources and checked-dates' appendix
// option in every export." Drives the real, live
// buildDocxDocument()/docx.Packer in a headless browser (the same
// "exercise the real render path" approach as every other golden test
// in this project), extracts the generated .docx's own text back out
// with mammoth in Node, and checks it against buildPlainText()'s
// output for that same document -- proving the two exports describe
// one document, not two independently-maintained ones that happened
// to agree when this was written.
//
//   python3 -m http.server 8933 &
//   node tests/docx/docx_golden.js
//
// "1-page / 10-page / very long" (same framing as tests/pdf/pdf_golden.js,
// even though .docx has no fixed page count) are derived from the
// corpus's own clause counts (shortest / median / longest assembled
// document), not hardcoded document ids, so this keeps testing the
// right shape of document as the corpus grows.
//
// Unlike tests/pdf/pdf_golden.js, no glyph-fallback or footer-stripping
// was needed here: a .docx's body is XML text, so there's no embedded-
// font-subset for a character to fall outside of (checked directly --
// the same corpus-wide character scan from Phase 6.1 extracts cleanly
// here, including the 633-occurrence checkbox marker), and mammoth's
// extractRawText() reads the document's own paragraph flow, not a
// per-page content stream, so a footer's text never gets spliced into
// the body the way a PDF's does.
//
// mammoth's extractRawText() also doesn't read header/footer parts at
// all (by design -- it converts the main document body), so the
// footer (document id + generated-on date) can't be checked through
// it. readFooterText() instead reads word/footer1.xml directly with
// JSZip (a .docx is a plain zip archive) -- found by first checking,
// directly, that mammoth's "0 missing" result for a document with a
// footer didn't mean the footer text was actually present anywhere
// mammoth looks.

const fs = require('fs');
const { chromium } = require('playwright');
const mammoth = require('mammoth');
const JSZip = require('jszip');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';

// Same reasoning as pdf_golden.js: ignore whitespace, hyphens, brackets,
// and quote marks, since none of that is lost content, just formatting
// that can legitimately differ between a line-joined text export and a
// paragraph-structured Word document.
function normalize(s) {
  return s.toLowerCase().replace(/[\s\-\[\]"“”‘’]+/g, '');
}

// mammoth's extractRawText() doesn't read a .docx's header/footer parts
// at all -- they live in their own XML part (word/footer1.xml), not in
// the body (word/document.xml) mammoth converts. A .docx is a plain
// zip archive, so reading that part directly with JSZip is the only
// way to actually check the footer made it into the generated file.
async function readFooterText(buffer) {
  const zip = await JSZip.loadAsync(buffer);
  const entry = zip.file('word/footer1.xml');
  if (!entry) return '';
  const xml = await entry.async('string');
  return xml.replace(/<[^>]+>/g, ' ');
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && typeof docx !== 'undefined');

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
      const base64 = await docx.Packer.toBase64String(buildDocxDocument());
      state.includeSourcesAppendix = false;
      return { plainText, base64, documentId: doc.id };
    }, { id: docId, withSignature, withAppendix });

    const buffer = Buffer.from(result.base64, 'base64');
    const extracted = await mammoth.extractRawText({ buffer });
    const rawText = extracted.value;
    const normalizedDocx = normalize(rawText);
    const plainLines = result.plainText.split('\n').map(l => l.trim()).filter(l => l.length > 3 && l !== '—');
    const missing = plainLines.filter(l => !normalizedDocx.includes(normalize(l)));

    const docFailures = [];
    if (missing.length > 0) {
      docFailures.push(`${missing.length} plain-text line(s) not found in the extracted .docx text: ${JSON.stringify(missing.slice(0, 3))}`);
    }
    if (/\u0000/.test(rawText)) {
      docFailures.push('Extracted .docx text contains \\u0000 -- unexpected for XML-based text; investigate before assuming this is benign.');
    }
    if (withSignature && !normalize(rawText).includes(normalize('Jane Q. Doe'))) {
      docFailures.push('Signed name was not found in the extracted .docx text.');
    }
    if (withAppendix && !rawText.includes('SOURCES AND CHECKED DATES')) {
      docFailures.push('Sources appendix was enabled but its heading was not found in the extracted .docx text.');
    }
    if (!withAppendix && rawText.includes('SOURCES AND CHECKED DATES')) {
      docFailures.push('Sources appendix was NOT enabled but its heading appeared anyway -- the toggle leaked across documents.');
    }

    const footerText = await readFooterText(buffer);
    if (!footerText.includes(result.documentId)) {
      docFailures.push(`Footer (word/footer1.xml) should carry the document id ("${result.documentId}") but it wasn't found there.`);
    }
    if (!/generated\s*\d{4}-\d{2}-\d{2}/.test(footerText)) {
      docFailures.push('Footer (word/footer1.xml) should carry a generated-on date but none was found there.');
    }

    console.log(`${docFailures.length === 0 ? 'OK  ' : 'FAIL'} ${docId}: ${plainLines.length} line(s) checked, ${missing.length} missing`);
    docFailures.forEach(f => console.error(`  - ${f}`));
    failures.push(...docFailures);
  }

  await checkDocument(shortest.id);
  await checkDocument(median.id, { withSignature: true, withAppendix: true });
  await checkDocument(longest.id);

  await browser.close();

  if (failures.length > 0) {
    console.error(`\n${failures.length} DOCX golden check(s) failed.`);
    process.exit(1);
  }
  console.log('DOCX golden tests passed');
})();
