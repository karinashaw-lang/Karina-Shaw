// Phase 6.4 acceptance (pilot scope -- see filing/README.md and
// DECISIONS.md for exactly what this covers and what's deliberately
// deferred): "For documents with a real filing or follow-on step...
// add a structured 'What happens after this document' section sourced
// from official agency pages, with citations and checked-dates like
// any clause" and "Add date-based reminders... as calendar (.ics)
// exports, computed from the user's entered dates, with the rule's
// citation shown." Drives the real, live
// resolveNextSteps()/buildIcsForStep()/renderNextSteps() in a headless
// browser (the same "exercise the real render path" approach as every
// other test in this project), extracts the generated PDF/.docx back
// out (pdf-parse/mammoth, already devDependencies from Phase 6.1/6.2)
// to confirm the section is real content there too, not just on screen.
//
//   python3 -m http.server 8933 &
//   node tests/filing/next_steps.js

const fs = require('fs');
const { chromium } = require('playwright');
const { PDFParse } = require('pdf-parse');
const mammoth = require('mammoth');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const ADVISORY_WORDS = /\byou (should|must|need to)\b|\bwe recommend\b|\bmake sure to\b/i;

const PILOT_DOC_ID = 'llc_articles_of_organization';
const BASE_ANSWERS = {
  companyName: 'Acme Ventures, LLC',
  managementStructure: 'member-managed',
  agentName: 'Jordan Lee',
  agentAddress: '123 Main St., Sacramento, CA 95814',
  organizerName: 'Jordan Lee',
};

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.nextSteps && typeof pdfMake !== 'undefined' && typeof docx !== 'undefined');

  const checks = [];
  function check(name, pass, detail) {
    checks.push({ name, pass, detail });
    console.log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' -- ' + detail : ''}`);
  }

  async function setDocument(answers) {
    return page.evaluate(({ docId, answers }) => {
      const doc = state.documents.find(d => d.id === docId);
      state.document = doc;
      state.answers = { ...answers };
      state.edits = {};
      state.editedClauseIds = new Set();
      state.currentEntryId = null;
      renderOutput();
      showScreen('screen-output');
    }, { docId: PILOT_DOC_ID, answers });
  }

  // --- Shape of the real pilot data ---
  const shape = await page.evaluate((docId) => {
    const steps = state.nextSteps[docId] || [];
    return {
      stepCount: steps.length,
      allHaveCitations: steps.every(s => (s.citations || []).length > 0),
      allHaveCheckedDate: steps.every(s => !!s.checkedDate),
      reminderCount: steps.filter(s => s.reminder).length,
    };
  }, PILOT_DOC_ID);
  check('pilot document has at least one real next-step', shape.stepCount >= 1, JSON.stringify(shape));
  check('every step carries at least one citation', shape.allHaveCitations);
  check('every step carries a checkedDate', shape.allHaveCheckedDate);
  check('exactly one step offers a computed reminder (the other is informational-only, by design)', shape.reminderCount === 1, JSON.stringify(shape));

  // --- Case 1: a valid, parseable date entered ---
  await setDocument({ ...BASE_ANSWERS, articlesFiledDate: 'January 1, 2026' });
  const case1 = await page.evaluate(() => {
    const content = buildDocumentContent();
    const reminderStep = content.nextSteps.find(s => s.reminder);
    return {
      sectionHidden: document.getElementById('output-next-steps').hidden,
      reminderText: document.querySelector('.next-step-reminder') ? document.querySelector('.next-step-reminder').textContent : null,
      hasIcsBtn: !!Array.from(document.querySelectorAll('.next-step button')).find(b => b.textContent.includes('calendar')),
      dueDateISO: reminderStep.reminder.dueDate ? reminderStep.reminder.dueDate.toISOString().slice(0, 10) : null,
      ledeHTML: document.querySelector('#output-next-steps .lede').textContent,
    };
  });
  check('section is shown once a document with real next-steps is rendered', !case1.sectionHidden);
  check('a valid entered date produces a due date exactly offsetDays later (Jan 1 + 90 = Apr 1)', case1.dueDateISO === '2026-04-01', case1.dueDateISO);
  check('a computed due date comes with an "Add to calendar" button', case1.hasIcsBtn);
  check('the due date is shown with the reminder label text', /Statement of Information due/.test(case1.reminderText || ''), case1.reminderText);
  check('the section intro contains no advisory language', !ADVISORY_WORDS.test(case1.ledeHTML));

  const icsBtn = await page.$('.next-step button');
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 10000 }),
    icsBtn.click(),
  ]);
  const icsPath = await download.path();
  const icsText = fs.readFileSync(icsPath, 'utf8');
  check('.ics file is a real VCALENDAR/VEVENT', icsText.includes('BEGIN:VCALENDAR') && icsText.includes('BEGIN:VEVENT') && icsText.includes('END:VEVENT'));
  check('.ics DTSTART matches the computed due date', icsText.includes('DTSTART;VALUE=DATE:20260401'), icsText);
  check('.ics carries the rule\'s own citation (case + cite + url), not just a bare date', /DESCRIPTION:.*Cal\. Corp\. Code.*17702\.09.*leginfo\.legislature\.ca\.gov/s.test(icsText.replace(/\r\n/g, '')), icsText);
  check('.ics file ends in CRLF line terminators (RFC 5545)', icsText.includes('\r\n'));

  // --- Case 2: the date field left blank ---
  await setDocument({ ...BASE_ANSWERS });
  const case2 = await page.evaluate(() => ({
    reminderText: document.querySelector('.next-step-reminder') ? document.querySelector('.next-step-reminder').textContent : null,
    hasIcsBtn: !!Array.from(document.querySelectorAll('.next-step button')).find(b => b.textContent.includes('calendar')),
  }));
  check('a blank date field shows the neutral "wasn\'t entered" note, not an error or a guessed date', /wasn't entered/.test(case2.reminderText || ''), case2.reminderText);
  check('no calendar button is offered when there is no computable due date', !case2.hasIcsBtn);
  check('the blank-date note contains no advisory language', !ADVISORY_WORDS.test(case2.reminderText || ''));

  // --- Case 3: an unparseable (but non-empty) date entered ---
  await setDocument({ ...BASE_ANSWERS, articlesFiledDate: 'sometime next quarter' });
  const case3 = await page.evaluate(() => ({
    reminderText: document.querySelector('.next-step-reminder') ? document.querySelector('.next-step-reminder').textContent : null,
    hasIcsBtn: !!Array.from(document.querySelectorAll('.next-step button')).find(b => b.textContent.includes('calendar')),
  }));
  check('an unparseable date degrades gracefully to a neutral note rather than crashing or guessing', /couldn't be read as a calendar date/.test(case3.reminderText || ''), case3.reminderText);
  check('no calendar button is offered for an unparseable date either', !case3.hasIcsBtn);

  // --- Case 4: a document with no next-steps entry at all ---
  const case4 = await page.evaluate(() => {
    const doc = state.documents.find(d => d.id === 'job_description');
    state.document = doc;
    state.answers = {};
    doc.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    state.edits = {}; state.editedClauseIds = new Set(); state.currentEntryId = null;
    renderOutput();
    return { sectionHidden: document.getElementById('output-next-steps').hidden };
  });
  check('a document with no filing/next_steps.json entry hides the section rather than showing nothing broken', case4.sectionHidden);

  // --- Case 5: the section appears as real content in every prose export ---
  await setDocument({ ...BASE_ANSWERS, articlesFiledDate: 'January 1, 2026' });
  const exports = await page.evaluate(async () => {
    const plainText = buildPlainText();
    const pdfBase64 = await pdfMake.createPdf(buildPdfDocDefinition()).getBase64();
    const docxBase64 = await docx.Packer.toBase64String(buildDocxDocument());
    return { plainText, pdfBase64, docxBase64 };
  });
  check('plain-text export includes the next-steps heading', exports.plainText.includes('WHAT HAPPENS AFTER THIS DOCUMENT'));
  check('plain-text export includes the computed due date', exports.plainText.includes('Statement of Information due'));

  const pdfBuffer = Buffer.from(exports.pdfBase64, 'base64');
  const pdfParsed = await new PDFParse({ data: pdfBuffer }).getText();
  check('PDF export contains the next-steps heading as real extracted text', pdfParsed.text.includes('WHAT HAPPENS AFTER THIS DOCUMENT'));
  check('PDF export contains the computed due date as real extracted text', pdfParsed.text.includes('Statement of Information due'));
  check('PDF export contains no stray \\u0000 (font-glyph coverage, Phase 6.1\'s own check)', !/\u0000/.test(pdfParsed.text));

  const docxBuffer = Buffer.from(exports.docxBase64, 'base64');
  const docxExtracted = await mammoth.extractRawText({ buffer: docxBuffer });
  check('DOCX export contains the next-steps heading as real extracted text', docxExtracted.value.includes('WHAT HAPPENS AFTER THIS DOCUMENT'));
  check('DOCX export contains the computed due date as real extracted text', docxExtracted.value.includes('Statement of Information due'));

  await browser.close();

  const failures = checks.filter(c => !c.pass);
  if (failures.length > 0) {
    console.error(`\n${failures.length} filing next-steps check(s) failed.`);
    process.exit(1);
  }
  console.log('\nfiling next-steps tests passed');
})();
