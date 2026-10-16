// Behavioral checks for the Phase 2.3 generic wizard renderer that
// tools/wizard_regression.js's 740-document happy-path walk can't
// cover on its own: validation actually blocking an invalid step,
// showIf hiding/revealing fields and skipping an all-hidden step,
// sensitive fields getting marked in the DOM, the review screen's
// Edit links jumping back and focusing the right field, and draft
// resume restoring the step the person was actually on (not always
// step 0). Each one is a specific claim this phase's acceptance
// criteria make; this is what checks the claim is true, not just that
// every document happens to make it through once.
//
// Needs a local static server, same as regression.js/golden.js:
//   python3 -m http.server 8933 &
//   node tests/wizard/wizard_unit.js
const fs = require('fs');
const { chromium } = require('playwright');

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
  await page.goto('http://localhost:8933/index.html', { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses && state.sharedFields);

  // ---- showIf: hides a field, skips an all-hidden step, blocks on a
  // now-required-and-visible field, and the review screen reflects it ----
  const showIfResult = await page.evaluate(() => {
    const fakeDoc = {
      id: 'synthetic_showif_doc',
      title: 'Synthetic ShowIf Test',
      fields: [
        { id: 'f1', label: 'F1', type: 'text', required: true },
        { id: 'f2', label: 'F2', type: 'text', required: false },
        { id: 'f3', label: 'F3', type: 'text', required: false },
        { id: 'f4', label: 'F4', type: 'text', required: false },
        { id: 'f5', label: 'F5 (conditional)', type: 'text', required: true, showIf: { field: 'f1', equals: 'yes' } },
      ],
    };
    state.documents.push(fakeDoc);
    state.jurisdictionByDoc.set(fakeDoc.id, 'NONE');
    state.document = fakeDoc;
    state.answers = {};
    renderWizard();
    showScreen('screen-wizard'); // focus only works on a visible element
    const out = { stepsCount: state.wizardSteps.length };

    document.getElementById('field-f1').value = 'no';
    document.getElementById('field-f1').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('wizard-next').click();
    out.hiddenCaseSkipsToReview = state.wizardReviewing;

    state.wizardStepIndex = 0;
    renderWizardStep();
    document.getElementById('field-f1').value = 'yes';
    document.getElementById('field-f1').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('wizard-next').click();
    out.visibleCaseEntersStep2 = !state.wizardReviewing && !!document.getElementById('field-f5');

    document.getElementById('wizard-next').click();
    out.blockedByRequiredF5 = !state.wizardReviewing;
    const errEl = document.getElementById('field-f5-error');
    out.f5ErrorShown = !!(errEl && !errEl.hidden);

    document.getElementById('field-f5').value = 'synthetic answer';
    document.getElementById('field-f5').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('wizard-next').click();
    out.reviewMentionsF5 = document.getElementById('wizard-review').textContent.includes('F5 (conditional)');
    return out;
  });
  check('showIf: all-hidden step is skipped straight to review', showIfResult.hiddenCaseSkipsToReview);
  check('showIf: field becomes visible when condition matches', showIfResult.visibleCaseEntersStep2);
  check('showIf: a now-visible required field still blocks Next until filled', showIfResult.blockedByRequiredF5);
  check('showIf: the blocking field shows a visible error message', showIfResult.f5ErrorShown);
  check('showIf: review screen includes the conditional field once shown', showIfResult.reviewMentionsF5);

  // ---- validation: empty required field blocks advance; invalid email/money format blocks too ----
  const validationResult = await page.evaluate(() => {
    const fakeDoc = {
      id: 'synthetic_validation_doc',
      title: 'Synthetic Validation Test',
      fields: [
        { id: 'req', label: 'Required text', type: 'text', required: true },
        { id: 'em', label: 'Email', type: 'email', required: true },
        { id: 'amt', label: 'Amount', type: 'money', required: false },
      ],
    };
    state.documents.push(fakeDoc);
    state.jurisdictionByDoc.set(fakeDoc.id, 'NONE');
    state.document = fakeDoc;
    state.answers = {};
    renderWizard();
    showScreen('screen-wizard');
    const out = {};

    document.getElementById('wizard-next').click();
    out.emptyRequiredBlocks = !state.wizardReviewing;

    document.getElementById('field-req').value = 'hello';
    document.getElementById('field-req').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('field-em').value = 'not-an-email';
    document.getElementById('field-em').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('wizard-next').click();
    out.badEmailBlocks = !state.wizardReviewing;

    document.getElementById('field-em').value = 'person@example.com';
    document.getElementById('field-em').dispatchEvent(new Event('input', { bubbles: true }));
    // Money field is optional and left blank — must not block.
    document.getElementById('wizard-next').click();
    out.optionalBlankMoneyDoesNotBlock = state.wizardReviewing;

    // A real corpus example with trailing descriptive text must pass —
    // this is the exact shape that broke the first, stricter version of
    // this validator (found by tools/wizard_regression.js against the
    // real corpus, not guessed).
    state.wizardStepIndex = 0;
    renderWizardStep();
    document.getElementById('field-amt').value = '$25,000 cash';
    document.getElementById('field-amt').dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('wizard-next').click();
    out.realisticMoneyExampleAccepted = state.wizardReviewing;
    return out;
  });
  check('validation: empty required field blocks Next', validationResult.emptyRequiredBlocks);
  check('validation: malformed email blocks Next', validationResult.badEmailBlocks);
  check('validation: blank optional money field does not block Next', validationResult.optionalBlankMoneyDoesNotBlock);
  check('validation: a realistic "$25,000 cash"-style money value is accepted', validationResult.realisticMoneyExampleAccepted);

  // ---- sensitive field marking ----
  const sensitiveResult = await page.evaluate(() => {
    const doc = state.documents.find(d => d.id === 'ein_info_sheet');
    state.document = doc;
    state.answers = {};
    renderWizard();
    for (let i = 0; i < state.wizardSteps.length; i++) {
      state.wizardStepIndex = i;
      renderWizardStep();
      const wrap = document.querySelector('[data-sensitive="true"]');
      if (wrap) return { found: true, hasNote: !!wrap.querySelector('.field-sensitive-note') };
    }
    return { found: false };
  });
  check('sensitive field is marked with data-sensitive in the DOM', sensitiveResult.found, JSON.stringify(sensitiveResult));
  check('sensitive field shows a plain-language note', sensitiveResult.found && sensitiveResult.hasNote);

  // ---- review screen: Edit link jumps back to the owning step and focuses the field ----
  const editJumpResult = await page.evaluate(() => {
    const doc = state.documents.find(d => d.id === 'ein_info_sheet');
    state.document = doc;
    state.answers = {};
    renderWizard();
    showScreen('screen-wizard');
    for (let guard = 0; guard < 20 && !state.wizardReviewing; guard++) {
      visibleFieldsInStep(state.wizardSteps[state.wizardStepIndex]).forEach(f => {
        const input = document.getElementById(`field-${f.id}`);
        input.value = f.example || 'Sample Value';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
      document.getElementById('wizard-next').click();
    }
    const firstEditBtn = document.querySelector('.review-edit');
    firstEditBtn.click();
    return {
      leftReview: !state.wizardReviewing,
      focusedFieldInput: document.activeElement.id.startsWith('field-'),
    };
  });
  check('review: clicking Edit leaves the review screen', editJumpResult.leftReview);
  check('review: clicking Edit focuses a real field input', editJumpResult.focusedFieldInput);

  // ---- draft resume restores the step, not just the answers ----
  await page.evaluate(() => {
    const doc = state.documents.find(d => d.id === 'ein_info_sheet');
    state.document = doc;
    state.answers = {};
    renderWizard();
    visibleFieldsInStep(state.wizardSteps[0]).forEach(f => {
      const input = document.getElementById(`field-${f.id}`);
      input.value = f.example || 'Sample Value';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    document.getElementById('wizard-next').click(); // now on step 1; saveDraft() fires inside renderWizardStep
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents);
  const resumeResult = await page.evaluate(() => {
    const bannerVisible = !document.getElementById('draft-banner').hidden;
    document.getElementById('draft-resume').click();
    return { bannerVisible, stepAfterResume: state.wizardStepIndex, answersRestored: Object.keys(state.answers).length > 0 };
  });
  check('draft resume: banner appears after reload', resumeResult.bannerVisible);
  check('draft resume: restores the step the user was on (not step 0)', resumeResult.stepAfterResume === 1, JSON.stringify(resumeResult));
  check('draft resume: restores the answers', resumeResult.answersRestored);

  await browser.close();

  const failed = checks.filter(c => !c.ok);
  checks.forEach(c => console.log((c.ok ? 'OK   ' : 'FAIL ') + c.name + (c.detail && !c.ok ? ` (${c.detail})` : '')));
  console.log(`\n${checks.length - failed.length}/${checks.length} wizard behavior checks passed.`);
  if (failed.length) { console.log('\nFAILED'); process.exit(1); }
  console.log('\nwizard unit checks passed');
})();
