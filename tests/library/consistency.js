// Phase 10.2: "Expand the [cross-document consistency] checks
// (conflicting dates, mismatched party names, inconsistent amounts,
// conflicting governing law) with a test suite of seeded
// inconsistencies. Report facts... with no recommendation."
//
// computeConsistency() (app.js) is already generic over every shared
// field id, not hand-coded per field type — a mismatched date, party
// name, or dollar amount all go through the exact same comparison
// whenever two saved documents share the same field id, which is
// exactly how the corpus actually models dates/names/amounts (see
// DECISIONS.md for why "conflicting governing law" specifically is
// NOT covered: it isn't a field a user answers at all in this
// single-state corpus, so there is nothing per-document to compare).
// This file is the dedicated seeded-inconsistency suite that function
// never had — zero tests referenced it before this phase, confirmed
// by grepping for it first.
//
//   python3 -m http.server 8933 &
//   node tests/library/consistency.js
const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';

const checks = [];
function check(name, cond, detail) {
  checks.push({ name, ok: !!cond, detail });
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses);

  const result = await page.evaluate(() => {
    // Two synthetic documents sharing field ids "companyName" (a
    // party name), "effectiveDate" (a date), and "amountCents" (an
    // amount) — standing in for the real corpus's own *Name/*Date
    // naming conventions (app.js's Inbox/Relationships features rely
    // on the exact same convention), without depending on which two
    // real documents happen to share a field today.
    const docA = { id: 'synthetic_consistency_doc_a', title: 'Doc A', categories: ['Hiring'], clauseOrder: [],
      fields: [
        { id: 'companyName', label: 'Company name', type: 'text' },
        { id: 'effectiveDate', label: 'Effective date', type: 'text' },
        { id: 'amountCents', label: 'Amount', type: 'text' },
        { id: 'onlyInA', label: 'Only in A', type: 'text' },
      ] };
    const docB = { id: 'synthetic_consistency_doc_b', title: 'Doc B', categories: ['Hiring'], clauseOrder: [],
      fields: [
        { id: 'companyName', label: 'Company name', type: 'text' },
        { id: 'effectiveDate', label: 'Effective date', type: 'text' },
        { id: 'amountCents', label: 'Amount', type: 'text' },
      ] };
    const originalDocs = state.documents;
    state.documents = [...originalDocs, docA, docB];

    const out = {};

    // 1. A mismatched party name (companyName) and a mismatched date
    //    (effectiveDate) are both flagged, independently, in the same run.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '500' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'Zenith Corp', effectiveDate: '2026-02-01', amountCents: '500' } },
      ];
      const mismatches = computeConsistency(entries);
      const fields = mismatches.map(m => m.fieldId).sort();
      out.flagsNameAndDateIndependently = JSON.stringify(fields) === JSON.stringify(['companyName', 'effectiveDate']);
      out.doesNotFlagMatchingAmount = !fields.includes('amountCents');
    }

    // 2. An inconsistent dollar amount (same field id, different
    //    value) is flagged the same way a name or date is -- there's
    //    nothing field-type-specific about the check.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '500' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '750' } },
      ];
      const mismatches = computeConsistency(entries);
      out.flagsInconsistentAmount = mismatches.length === 1 && mismatches[0].fieldId === 'amountCents';
      out.reportsBothValuesVerbatim = JSON.stringify(mismatches[0].occurrences.map(o => o.value).sort()) === JSON.stringify(['500', '750']);
    }

    // 3. Identical values across every shared field: nothing flagged.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '500' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '500' } },
      ];
      out.noFalsePositiveWhenIdentical = computeConsistency(entries).length === 0;
    }

    // 4. A single saved document (nothing to compare against): nothing flagged.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', effectiveDate: '2026-01-01', amountCents: '500' } },
      ];
      out.noFlagWithOnlyOneDocument = computeConsistency(entries).length === 0;
    }

    // 5. A field present in only one document is never flagged --
    //    there is nothing to disagree with.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', onlyInA: 'whatever' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'Acme LLC' } },
      ];
      out.neverFlagsAFieldOnlyOneDocumentHas = computeConsistency(entries).every(m => m.fieldId !== 'onlyInA');
    }

    // 6. A blank/whitespace-only answer is skipped, not compared as a
    //    real value (an unanswered optional field shouldn't look like
    //    a deliberate empty-string disagreement with a filled-in one).
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC', amountCents: '' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'Acme LLC', amountCents: '   ' } },
      ];
      out.skipsBlankAnswers = computeConsistency(entries).length === 0;
    }

    // 7. Case/whitespace-different values ARE flagged as literally
    //    different -- documented behavior, not a bug: normalizing
    //    "Acme LLC" against "acme llc" or "Acme, LLC" risks silently
    //    hiding a real typo, which is exactly what this feature exists
    //    to surface. If this is ever changed, it should be a deliberate
    //    decision recorded in DECISIONS.md, not a silent side effect of
    //    an unrelated change -- hence a test that currently expects it.
    {
      const entries = [
        { documentId: 'synthetic_consistency_doc_a', title: 'Doc A', answers: { companyName: 'Acme LLC' } },
        { documentId: 'synthetic_consistency_doc_b', title: 'Doc B', answers: { companyName: 'acme llc' } },
      ];
      out.flagsCaseDifferenceAsAMismatch = computeConsistency(entries).length === 1;
    }

    state.documents = originalDocs;
    return out;
  });

  check('flags a mismatched party name and a mismatched date independently', result.flagsNameAndDateIndependently, result);
  check('does not flag a field both documents agree on', result.doesNotFlagMatchingAmount, result);
  check('flags an inconsistent dollar amount the same way as any other field', result.flagsInconsistentAmount, result);
  check('reports both differing values verbatim, not just that they differ', result.reportsBothValuesVerbatim, result);
  check('no false positive when every shared field agrees', result.noFalsePositiveWhenIdentical, result);
  check('no flag with only one saved document', result.noFlagWithOnlyOneDocument, result);
  check('never flags a field only one document has', result.neverFlagsAFieldOnlyOneDocumentHas, result);
  check('skips blank/whitespace-only answers rather than comparing them', result.skipsBlankAnswers, result);
  check('flags a case/whitespace difference as a real mismatch (by design)', result.flagsCaseDifferenceAsAMismatch, result);

  await browser.close();

  const failed = checks.filter(c => !c.ok);
  checks.forEach(c => console.log((c.ok ? 'OK   ' : 'FAIL ') + c.name));
  console.log(`\n${checks.length - failed.length}/${checks.length} consistency checks passed.`);
  if (failed.length) {
    failed.forEach(c => console.log(`  FAILED: ${c.name}`, JSON.stringify(c.detail)));
    process.exit(1);
  }
  console.log('consistency checks passed');
})();
