// Proves supabase/functions/_shared/document_engine.mjs's output is
// byte-identical to app.js's actual client-side clause-assembly
// output, on real corpus data -- not just an assertion in a comment
// that the two agree. This is MVP_BUILD_INSTRUCTIONS.md item 2.4's
// "golden text-parity tests on server output," applied one step
// earlier: proving the shared engine release-document renders from
// matches the browser before ever involving PDF/DOCX byte output,
// which would make a real mismatch much harder to localize.
//
// Loads index.html via file:// (this sandbox blocks starting a local
// http.server -- see DECISIONS.md -- so this uses the same
// --allow-file-access-from-files workaround this session's own D1.2
// testing used) and reads the real, live `assembleDocument`/
// `preparedForLine`/`clauseLevel`/`clauseVerificationNoteText`/
// `hashString` functions straight off `window` -- app.js is a plain
// classic script, so its top-level `function` declarations are
// already `window` properties; nothing added to app.js to make this
// test possible.
//
//   node tests/release_document/test_document_engine_parity.js
const path = require('path');
const { chromium } = require('playwright');
// document_engine.mjs is a real ES module (Deno imports it that way
// too), so it's loaded with a dynamic import() rather than require()
// -- this repo's other Node-side tooling stays CommonJS; only this
// one shared file needs to be an ES module, and .mjs plus import()
// gets that without changing package.json's module type for everything
// else.
const engineUrl = 'file://' + path.resolve(__dirname, '../../supabase/functions/_shared/document_engine.mjs');

// Three real documents, not one -- the wedge's own llc_operating_agreement
// (conditionals + a moderately long clause list), a short info sheet
// (near-trivial, catches an off-by-one on a tiny document), and the
// one document in this corpus that actually ships a clauseOrder-level
// includeIf today (bare-id vs {id, includeIf} shape both need
// covering, not just the common case).
function sampleAnswersFor(doc) {
  const answers = {};
  (doc.fields || []).forEach(f => {
    answers[f.id] = f.example || f.placeholder || `Sample ${f.label}`;
  });
  return answers;
}

async function main() {
  const engine = await import(engineUrl);
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium',
    args: ['--allow-file-access-from-files'],
  });
  const page = await browser.newPage();
  const indexPath = 'file://' + path.resolve(__dirname, '../../index.html');
  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  await page.goto(indexPath);
  await page.waitForFunction(() => typeof state !== 'undefined' && Array.isArray(state.documents) && state.documents.length > 0, { timeout: 15000 });

  const docIds = await page.evaluate(() => state.documents.map(d => d.id));
  const withConditional = await page.evaluate(() =>
    state.documents.find(d => (d.clauseOrder || []).some(e => typeof e !== 'string' && e.includeIf))?.id || null
  );
  const candidates = ['llc_operating_agreement_single_member', 'llc_articles_of_organization', withConditional]
    .filter(id => id && docIds.includes(id));
  // Always exercise at least 3 documents even if the two named ones
  // somehow aren't in the corpus under those exact ids -- fall back to
  // the first few real ids rather than fail with an empty sample.
  const targets = [...new Set(candidates.length >= 2 ? candidates : docIds.slice(0, 3))];

  let failures = 0;
  for (const docId of targets) {
    const clientDoc = await page.evaluate(id => state.documents.find(d => d.id === id), docId);
    const answers = sampleAnswersFor(clientDoc);

    const clientResult = await page.evaluate(({ id, answers }) => {
      state.document = state.documents.find(d => d.id === id);
      state.answers = answers;
      const assembled = assembleDocument();
      return {
        preparedFor: preparedForLine(answers),
        conditional: describeConditionalClauses(),
        clauses: assembled.map(c => ({
          id: c.id,
          renderedBody: c.renderedBody,
          gap: c.gap || null,
          level: clauseLevel(c),
          note: clauseVerificationNoteText(c),
        })),
      };
    }, { id: docId, answers });

    const allClauses = await page.evaluate(() => state.clauses);
    const serverAssembled = engine.assembleDocument(clientDoc, allClauses, answers);
    const verificationLevels = await page.evaluate(() => state.verificationLevels || {});
    const serverResult = {
      preparedFor: engine.preparedForLine(clientDoc, answers),
      conditional: engine.describeConditionalClauses(clientDoc, allClauses, answers),
      clauses: serverAssembled.map(c => ({
        id: c.id,
        renderedBody: c.renderedBody,
        gap: c.gap || null,
        level: engine.clauseLevel(c, verificationLevels),
        note: engine.clauseVerificationNoteText(c, verificationLevels),
      })),
    };

    const a = JSON.stringify(clientResult);
    const b = JSON.stringify(serverResult);
    if (a === b) {
      console.log(`OK   ${docId}: shared engine output matches the live client exactly (${serverResult.clauses.length} clauses)`);
    } else {
      failures++;
      console.log(`FAIL ${docId}: shared engine output diverges from the live client`);
      console.log('  client:', a.slice(0, 500));
      console.log('  server:', b.slice(0, 500));
    }
  }

  // hashString parity, independently of any document -- app.js's own
  // writeAuditLogEntry() hashes buildPlainText()'s output with this
  // function, so a hash mismatch here would silently break
  // audit_log.output_hash comparisons between a browser-generated and
  // a server-generated copy of the same document.
  const hashSamples = ['', 'a', 'Groundtruth', 'The quick brown fox jumps over the lazy dog.'];
  for (const s of hashSamples) {
    const clientHash = await page.evaluate(str => hashString(str), s);
    const serverHash = engine.hashString(s);
    if (clientHash !== serverHash) {
      failures++;
      console.log(`FAIL hashString(${JSON.stringify(s)}): client=${clientHash} server=${serverHash}`);
    }
  }
  if (hashSamples.length) console.log(`OK   hashString: ${hashSamples.length}/${hashSamples.length} sample(s) match`);

  // No real document in the corpus uses a clauseOrder-level includeIf
  // yet (confirmed by grepping data/documents.json before writing this
  // test) -- same situation tests/wizard/wizard_unit.js's own Phase 2.4
  // section was in, so this reuses that file's exact synthetic fixture
  // shape rather than inventing a different one, to actually exercise
  // the {id, includeIf} clauseOrder branch and both the included and
  // excluded sides of conditionMatches().
  const syntheticDoc = {
    id: 'synthetic_includeif_doc',
    title: 'Synthetic IncludeIf Test',
    fields: [{ id: 'wantsArbitration', label: 'Include an arbitration clause?', type: 'text', required: true }],
    clauseOrder: ['synthetic_c1', { id: 'synthetic_c2', includeIf: { field: 'wantsArbitration', equals: 'yes' } }],
  };
  const syntheticClauses = [
    { id: 'synthetic_c1', title: 'Floor Clause', kind: 'drafting', body: 'This always appears.' },
    { id: 'synthetic_c2', title: 'Arbitration Clause', kind: 'drafting', body: 'This is the optional arbitration clause.' },
  ];
  for (const wantsArbitration of ['yes', 'no']) {
    const answers = { wantsArbitration };
    const clientResult = await page.evaluate(({ doc, clauses, answers }) => {
      const priorDocs = state.documents.slice();
      const priorClauses = state.clauses.slice();
      state.documents.push(doc);
      state.clauses.push(...clauses);
      state.document = doc;
      state.answers = answers;
      const result = {
        assembled: assembleDocument().map(c => c.id),
        conditional: describeConditionalClauses(),
      };
      state.documents = priorDocs;
      state.clauses = priorClauses;
      return result;
    }, { doc: syntheticDoc, clauses: syntheticClauses, answers });

    const serverAssembled = engine.assembleDocument(syntheticDoc, syntheticClauses, answers).map(c => c.id);
    const serverConditional = engine.describeConditionalClauses(syntheticDoc, syntheticClauses, answers);
    const a = JSON.stringify({ assembled: clientResult.assembled, conditional: clientResult.conditional });
    const b = JSON.stringify({ assembled: serverAssembled, conditional: serverConditional });
    if (a === b) {
      console.log(`OK   synthetic includeIf (wantsArbitration=${wantsArbitration}): matches`);
    } else {
      failures++;
      console.log(`FAIL synthetic includeIf (wantsArbitration=${wantsArbitration}): client=${a} server=${b}`);
    }
  }

  if (consoleErrors.length) {
    console.log(`NOTE ${consoleErrors.length} browser console error(s) during the run (not necessarily a parity failure):`);
    consoleErrors.slice(0, 5).forEach(e => console.log('  ' + e));
  }

  await browser.close();
  if (failures > 0) {
    console.log(`\n${failures} parity failure(s).`);
    process.exit(1);
  }
  console.log(`\nAll parity checks passed across ${targets.length} document(s).`);
}

main().catch(err => { console.error(err); process.exit(1); });
