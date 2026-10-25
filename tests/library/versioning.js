// Phase 6.3 acceptance: "Store each saved document with: schemaVersion,
// corpusVersion (a content hash of the clauses used), clause ids and
// clause checkedDates at generation time, and the user's inputs,"
// "When the corpus changes a clause the document used, show a banner
// on My Documents... with a diff of what changed and a one-click
// regenerate that preserves inputs. State facts only. Do not say
// whether the user must act," and "Keep prior versions with
// timestamps and allow restore." Drives the real, live
// addToLibrary()/detectDrift()/diffWords()/regenerateLibraryEntry()/
// restoreLibraryVersion()/renderLibrary() in a headless browser (the
// same "exercise the real render path" approach as every other test
// in this project), not a reimplementation of the drift logic in Node.
//
//   python3 -m http.server 8933 &
//   node tests/library/versioning.js

const fs = require('fs');
const { chromium } = require('playwright');

const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';

// The master plan's own required framing -- the banner states facts,
// never whether the reader needs to act. Checking the exact strings
// (not just "a banner appeared") means a future edit that slips into
// advisory language ("you should regenerate this") fails this test.
const EXPECTED_SINGULAR = 'A clause used in this document has changed since you created it.';
const EXPECTED_PLURAL_2 = '2 clauses used in this document have changed since you created it.';
const EXPECTED_REMOVED_NOTE = "This clause is no longer in Groundtruth's library.";
const ADVISORY_WORDS = /\byou (should|must|need to)\b|\bwe recommend\b|\bit'?s (best|a good idea)\b/i;

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses);

  const checks = [];
  function check(name, pass, detail) {
    checks.push({ name, pass, detail });
    console.log(`${pass ? 'OK  ' : 'FAIL'} ${name}${detail ? ' -- ' + detail : ''}`);
  }

  const result = await page.evaluate(() => {
    localStorage.removeItem('groundtruth-library');
    const doc = state.documents.find(d => d.id === 'job_description');
    state.document = doc;
    state.answers = {};
    doc.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    const entry = addToLibrary(doc.id, doc.title, state.answers);
    const answersBeforeAll = JSON.stringify(entry.answers);

    const atSave = {
      hasSchemaVersion: typeof entry.schemaVersion === 'number',
      hasCorpusVersion: typeof entry.corpusVersion === 'string' && entry.corpusVersion.length > 0,
      snapshotCount: entry.clauseSnapshots.length,
      snapshotHasCheckedDate: entry.clauseSnapshots.every(s => 'checkedDate' in s),
      versionsEmpty: (entry.versions || []).length === 0,
      driftAtSave: detectDrift(entry).length,
    };

    // Simulate a real corpus edit to exactly one of the clauses this
    // document used: change its body and its checkedDate.
    const usedId = entry.clauseSnapshots[0].id;
    const liveClause = state.clauses.find(c => c.id === usedId);
    const originalBody = liveClause.body;
    liveClause.body = originalBody + ' This sentence replaces the ending to simulate a corpus edit.';
    liveClause.checkedDate = '2030-01-01';

    const afterEdit = loadLibrary().find(e => e.id === entry.id);
    const drift = detectDrift(afterEdit);
    const diffSpans = diffWords(originalBody, liveClause.body);

    renderLibrary();
    const bannerText = document.querySelector('.drift-summary') ? document.querySelector('.drift-summary').textContent : null;
    const bannerHTML = document.querySelector('.drift-banner') ? document.querySelector('.drift-banner').outerHTML : '';

    // Second document, saved after the edit, so its snapshot already
    // reflects the (now-edited) clause -- it should show no drift.
    const doc2 = state.documents.find(d => d.id === 'interview_scorecard');
    state.document = doc2;
    state.answers = {};
    doc2.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    const entry2 = addToLibrary(doc2.id, doc2.title, state.answers);
    const entry2Drift = detectDrift(entry2);

    // Two-clause-drift case, for the plural banner wording.
    const twoClauseDocId = state.documents.find(d => d.clauseOrder.length >= 2 && d.id !== doc.id && d.id !== doc2.id).id;
    const doc3 = state.documents.find(d => d.id === twoClauseDocId);
    state.document = doc3;
    state.answers = {};
    doc3.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    const entry3 = addToLibrary(doc3.id, doc3.title, state.answers);
    entry3.clauseSnapshots.slice(0, 2).forEach(snap => {
      const c = state.clauses.find(cl => cl.id === snap.id);
      c.checkedDate = '2031-02-02';
    });
    saveLibraryEntries(loadLibrary().map(e => e.id === entry3.id ? { ...e } : e));
    renderLibrary();
    const bannerTexts = Array.from(document.querySelectorAll('.drift-summary')).map(el => el.textContent);

    // Regenerate the first (drifted) entry and check it clears, and
    // that the stored answers are untouched.
    const regenBtns = Array.from(document.querySelectorAll('.drift-banner button'));
    const firstRegenBtn = regenBtns.find(b => b.closest('.library-entry').querySelector('.library-row-title').textContent === doc.title);
    firstRegenBtn.click();
    const afterRegen = loadLibrary().find(e => e.id === entry.id);
    const driftAfterRegen = detectDrift(afterRegen);
    const answersAfterRegen = JSON.stringify(afterRegen.answers);

    renderLibrary();
    const bannerGoneForFirst = !Array.from(document.querySelectorAll('.library-entry'))
      .some(el => el.querySelector('.library-row-title').textContent === doc.title && el.querySelector('.drift-summary'));

    // Restore the version that was pushed into history by regenerate,
    // and confirm drift reappears (the old, now-stale snapshot is
    // current again) and the entry that was "current" before restore
    // is kept, not discarded.
    const versionsBeforeRestore = (afterRegen.versions || []).length;
    const restoreBtn = document.querySelector('.version-row button');
    const hadRestoreBtn = !!restoreBtn;
    if (restoreBtn) restoreBtn.click();
    const afterRestore = loadLibrary().find(e => e.id === entry.id);
    const driftAfterRestore = detectDrift(afterRestore);
    const versionsAfterRestore = (afterRestore.versions || []).length;

    // Removed-clause case: a snapshot referencing an id no longer in
    // the corpus at all.
    const removedCaseDrift = detectDrift({ clauseSnapshots: [{ id: 'nonexistent-clause-id-xyz', title: 'Ghost Clause' }] });

    // Legacy entry, saved before Phase 6.3 existed (no clauseSnapshots
    // at all) -- must report no drift, not throw.
    let legacyThrew = false;
    let legacyDrift = null;
    try {
      legacyDrift = detectDrift({ id: 'legacy-1', documentId: doc.id, title: doc.title, answers: {}, generatedAt: new Date().toISOString() });
    } catch (e) {
      legacyThrew = true;
    }

    return {
      atSave,
      answersBeforeAll,
      drift,
      diffSpans,
      bannerText,
      bannerHTML,
      entry2Drift,
      bannerTexts,
      driftAfterRegen,
      answersAfterRegen,
      bannerGoneForFirst,
      versionsBeforeRestore,
      hadRestoreBtn,
      driftAfterRestore,
      versionsAfterRestore,
      removedCaseDrift,
      legacyThrew,
      legacyDrift,
    };
  });

  check('saved entry carries schemaVersion', result.atSave.hasSchemaVersion);
  check('saved entry carries corpusVersion', result.atSave.hasCorpusVersion);
  check('saved entry carries at least one clause snapshot with a checkedDate', result.atSave.snapshotCount > 0 && result.atSave.snapshotHasCheckedDate);
  check('saved entry starts with no version history', result.atSave.versionsEmpty);
  check('no drift reported immediately after saving', result.atSave.driftAtSave === 0);

  check('drift detected after a used clause is edited', result.drift.length === 1, JSON.stringify(result.drift.map(d => d.changedFields)));
  check('drift reports both the body and checkedDate changes', result.drift[0] && result.drift[0].changedFields.includes('body') && result.drift[0].changedFields.includes('checkedDate'));
  check('diffWords reports an added span for the appended sentence', result.diffSpans.some(s => s.type === 'added' && s.text.includes('This sentence replaces')));

  check('banner text matches the master plan\'s exact singular wording', result.bannerText === EXPECTED_SINGULAR, result.bannerText);
  check('banner renders the word-level diff as a real <ins> insertion, not just plain text', result.bannerHTML.includes('<ins>'));
  check('banner text contains no advisory language', !ADVISORY_WORDS.test(result.bannerHTML));

  check('a document saved after the edit shows no drift for that clause', result.entry2Drift.length === 0);
  check('plural banner wording used when 2 clauses changed', result.bannerTexts.includes(EXPECTED_PLURAL_2), JSON.stringify(result.bannerTexts));

  check('regenerate clears drift for the entry', result.driftAfterRegen.length === 0);
  check('regenerate preserves the stored answers exactly', result.answersAfterRegen === result.answersBeforeAll);
  check('regenerate removes that entry\'s banner from the rendered page', result.bannerGoneForFirst);
  check('regenerate pushes exactly one version into history', result.versionsBeforeRestore === 1);

  check('a restore button is offered once history exists', result.hadRestoreBtn);
  check('restoring brings the old, stale snapshot back as current (drift reappears)', result.driftAfterRestore.length === 1);
  check('restoring keeps what was current before it, rather than discarding it', result.versionsAfterRestore === 1);

  check('a removed clause is reported with removed:true, not silently dropped', result.removedCaseDrift.length === 1 && result.removedCaseDrift[0].removed === true);
  check('a pre-6.3 entry with no clauseSnapshots reports no drift and does not throw', !result.legacyThrew && Array.isArray(result.legacyDrift) && result.legacyDrift.length === 0);

  // Separately verify the "removed clause" banner copy through the
  // real render path, not just detectDrift()'s return value -- a
  // fresh, single-entry library so the rendered .drift-clause is
  // unambiguously this one, not whichever entry happens to render
  // first among the several left over from the checks above.
  const removedBannerText = await page.evaluate(() => {
    localStorage.removeItem('groundtruth-library');
    const doc = state.documents.find(d => d.id === 'job_description');
    state.document = doc;
    state.answers = {};
    doc.fields.forEach(f => { state.answers[f.id] = 'Acme Holdings LLC'; });
    const entry = addToLibrary(doc.id, doc.title, state.answers);
    const entries = loadLibrary();
    entries[0].clauseSnapshots = [{ id: 'nonexistent-clause-id-xyz', title: 'Ghost Clause' }];
    saveLibraryEntries(entries);
    renderLibrary();
    const details = document.querySelector('.drift-detail');
    if (details) details.open = true;
    const clauseBlock = document.querySelector('.drift-clause');
    return clauseBlock ? clauseBlock.textContent : null;
  });
  check('removed-clause note uses the expected neutral wording', removedBannerText && removedBannerText.includes(EXPECTED_REMOVED_NOTE), removedBannerText);

  await browser.close();

  const failures = checks.filter(c => !c.pass);
  if (failures.length > 0) {
    console.error(`\n${failures.length} versioning check(s) failed.`);
    process.exit(1);
  }
  console.log('\nversioning tests passed');
})();
