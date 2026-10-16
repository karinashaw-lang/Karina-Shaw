// Golden-output test harness. Renders every document headlessly from a
// stored set of answers and confirms the assembled result (both the
// plain-text export and the structured clause JSON) hasn't changed
// unexpectedly — the thing regression.js's own checks can't catch, since
// those only confirm a document renders *something* with no leaked
// placeholders, never that a specific clause's actual wording stayed the
// same. Changing one clause's text should make every fixture that uses
// it, and only those, fail.
//
// Check mode (default — this is what CI runs):
//   python3 -m http.server 8933 &
//   node tests/golden/golden.js
//
// Update mode — (re)generates fixtures. Creates one for any document that
// doesn't have one yet (using every field's own placeholder text as its
// sample answer — the corpus already writes those as realistic examples,
// confirmed 100% coverage across all 3,975 fields), and for existing
// fixtures, re-renders and prints a diff of what changed before
// overwriting:
//   node tests/golden/golden.js --update
//
// Conditional fields (showIf) and clause-level conditionals (includeIf)
// don't exist in the schema yet — Phase 2 introduces them — so "one
// fixture per branch" doesn't apply today; every document gets exactly
// one fixture, covering its one and only render path.

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const FIXTURES_DIR = path.join(__dirname, 'fixtures');
const MANIFEST_PATH = path.join(__dirname, 'golden-manifest.json');
const BASE_URL = process.env.GOLDEN_BASE_URL || 'http://localhost:8933';
const UPDATE = process.argv.includes('--update');

// A field's placeholder is written as UI copy first — "e.g., Jane Doe" is a
// good format hint to show someone filling out the real wizard, but a bad
// literal input for a fixture meant to look like a real filled-in document.
// Stripping the "e.g." prefix recovers the actual example underneath for
// the ~70 documents that use this pattern, with nothing hardcoded per
// document.
function stripExamplePrefix(text) {
  return text.replace(/^e\.g\.?,?\s*/i, '');
}

// A handful of fields (23, confirmed by inspecting every placeholder in
// the corpus — see GOLDEN_REVIEW.md) are phrased as an instruction to the
// person filling the form ("Describe what happened") rather than an
// example of what they'd write, and have no "e.g." prefix to strip. Same
// field id, same meaning, in every document that uses it — matching the
// convention the app itself already relies on elsewhere (Inbox matches
// any `*Date` id, Relationships any `*Name` id, regardless of document).
const INSTRUCTION_FIELD_OVERRIDES = {
  incidentDescription: 'On March 3, 2026, the respondent appeared outside the petitioner’s home and yelled threats for several minutes before leaving.',
  additionalIncidents: 'On March 10, 2026, the respondent sent several threatening text messages to the petitioner.',
  supportingFacts: 'Employees were required to work through rest breaks without additional pay, and timekeeping records show no 10-minute break recorded on multiple shifts.',
  legalTheories: 'Failure to provide rest breaks under Labor Code section 226.7, and failure to pay all wages owed under section 204.',
  allegedAdverseAction: 'The employee was demoted and had their hours reduced within two weeks of filing a workers’ compensation claim.',
  allegedIntolerableConditions: 'A manager repeatedly cut the employee’s hours and shifted them to overnight shifts after the employee raised a safety complaint.',
  habitabilityDefectDescription: 'A persistent roof leak in the main bedroom that has caused visible mold growth.',
  inspectionPurpose: 'To review financial records relevant to a potential breach of fiduciary duty by a director.',
  donationType: 'Anonymous sperm donation through a licensed sperm bank.',
  workDescription: 'A bronze sculpture titled ‘Pacific Light,’ installed in the plaza in 2015.',
};

// Phase 2.1's migration (tools/migrate_fields.py) made this exact logic a
// real, persisted `example` property on every field in data/documents.json
// — so every field created going forward prefers that over recomputing it
// here. The fallback below stays only so a field added without running the
// migration (or before it existed) still gets a sane fixture value instead
// of failing outright.
function sampleValueFor(field) {
  if (field.example) return field.example;
  if (INSTRUCTION_FIELD_OVERRIDES[field.id]) return INSTRUCTION_FIELD_OVERRIDES[field.id];
  const placeholder = (field.placeholder || '').trim();
  if (!placeholder) return 'Sample Value';
  return stripExamplePrefix(placeholder);
}

function fixturePath(docId) {
  return path.join(FIXTURES_DIR, `${docId}.json`);
}

function loadFixture(docId) {
  const p = fixturePath(docId);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function saveFixture(docId, data) {
  fs.mkdirSync(FIXTURES_DIR, { recursive: true });
  fs.writeFileSync(fixturePath(docId), JSON.stringify(data, null, 2) + '\n');
}

// A short, readable line-level diff — enough to see what changed without
// dumping two entire documents into the log.
function diffText(oldText, newText) {
  if (oldText === newText) return null;
  const oldLines = (oldText || '').split('\n');
  const newLines = (newText || '').split('\n');
  const max = Math.max(oldLines.length, newLines.length);
  const diffs = [];
  for (let i = 0; i < max; i++) {
    if (oldLines[i] !== newLines[i]) {
      diffs.push(`    line ${i + 1}:\n      - ${oldLines[i] ?? '(absent)'}\n      + ${newLines[i] ?? '(absent)'}`);
      if (diffs.length >= 5) { diffs.push('    ... (more differences omitted)'); break; }
    }
  }
  return diffs.join('\n');
}

(async () => {
  const SANDBOX_CHROMIUM = '/opt/pw-browsers/chromium';
  const launchOpts = fs.existsSync(SANDBOX_CHROMIUM) ? { executablePath: SANDBOX_CHROMIUM } : {};
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage();
  await page.route('https://fonts.googleapis.com/**', r => r.abort());
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => typeof state !== 'undefined' && state.documents && state.clauses);

  const allDocIds = await page.evaluate(() => state.documents.map(d => d.id));

  async function defaultInputsFor(docId) {
    const fields = await page.evaluate(id => {
      const doc = state.documents.find(d => d.id === id);
      return (doc && doc.fields) || [];
    }, docId);
    const answers = {};
    fields.forEach(f => { answers[f.id] = sampleValueFor(f); });
    return answers;
  }

  // Renders through the same two real export paths the app itself uses
  // (assembleDocument + buildPlainText), not a reimplementation of them —
  // a golden test that doesn't exercise the real render path would miss
  // exactly the regressions it exists to catch.
  async function renderDoc(docId, inputs) {
    return page.evaluate(({ id, inputs }) => {
      const doc = state.documents.find(d => d.id === id);
      if (!doc) return null;
      state.document = doc;
      state.answers = { ...inputs };
      state.edits = {};
      state.editedClauseIds = new Set();
      state.currentEntryId = null;
      const assembled = assembleDocument();
      const expectedJSON = assembled.map(c => ({
        id: c.id,
        kind: c.kind,
        status: c.status || null,
        body: c.renderedBody,
        citations: c.kind === 'authority' ? (c.citations || []) : undefined,
        checkedDate: c.checkedDate || undefined,
        gap: c.gap || undefined,
      }));
      const expectedText = buildPlainText();
      return { expectedText, expectedJSON };
    }, { id: docId, inputs });
  }

  const failures = [];
  const missingFixtures = [];
  let updated = 0;

  for (const docId of allDocIds) {
    const fixture = loadFixture(docId);

    if (UPDATE) {
      const inputs = fixture ? fixture.inputs : await defaultInputsFor(docId);
      const rendered = await renderDoc(docId, inputs);
      if (!rendered) {
        console.log(`FAIL ${docId}: document not found while rendering`);
        failures.push(docId);
        continue;
      }
      const textDiff = fixture ? diffText(fixture.expectedText, rendered.expectedText) : null;
      const jsonChanged = fixture ? JSON.stringify(fixture.expectedJSON) !== JSON.stringify(rendered.expectedJSON) : true;
      if (!fixture || textDiff || jsonChanged) {
        console.log(`UPDATE ${docId}${fixture ? '' : ' (new)'}`);
        if (fixture && textDiff) console.log(textDiff);
        updated++;
      }
      saveFixture(docId, { docId, inputs, expectedText: rendered.expectedText, expectedJSON: rendered.expectedJSON });
      continue;
    }

    if (!fixture) {
      missingFixtures.push(docId);
      failures.push(docId);
      continue;
    }
    const rendered = await renderDoc(docId, fixture.inputs);
    if (!rendered) {
      console.log(`FAIL ${docId}: document not found while rendering`);
      failures.push(docId);
      continue;
    }
    const textMatch = rendered.expectedText === fixture.expectedText;
    const jsonMatch = JSON.stringify(rendered.expectedJSON) === JSON.stringify(fixture.expectedJSON);
    if (!textMatch || !jsonMatch) {
      console.log(`FAIL ${docId}${!textMatch ? ' text differs' : ''}${!jsonMatch ? ' json differs' : ''}`);
      if (!textMatch) console.log(diffText(fixture.expectedText, rendered.expectedText));
      failures.push(docId);
    }
  }

  await browser.close();

  if (UPDATE) {
    const manifest = allDocIds.filter(id => fs.existsSync(fixturePath(id))).sort();
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
    console.log(`\n${updated} fixture(s) created or changed. ${manifest.length}/${allDocIds.length} documents covered.`);
    process.exit(0);
  }

  console.log(`\n${allDocIds.length - failures.length}/${allDocIds.length} documents match their golden fixture.`);
  if (missingFixtures.length) {
    console.log(`${missingFixtures.length} document(s) have no fixture at all: ${missingFixtures.slice(0, 10).join(', ')}${missingFixtures.length > 10 ? ' ...' : ''}`);
  }
  if (failures.length) {
    console.log('\nFAILED');
    process.exit(1);
  }
  console.log('\ngolden passed');
})();
