/* Review queue export.

   The corpus is quarantined, not deleted — every clause below the release gate is a
   unit of work for a reviewer. This turns that into an ordered worklist and writes it
   as CSV and Markdown.

   Ordering is by expected cost of being wrong, not by convenience: a critical clause
   that is auto-inserted into a document, in a jurisdiction the product leads with,
   asserting a statute, outranks an optional suggestion nobody will see.

   Usage: node templates/tools/queue.mjs [--top <n>]
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {defectAnalysis} from './findings.mjs';
import {lintClause, DETECTORS} from './lint.mjs';

const TOP = process.argv.includes('--top') ? +process.argv[process.argv.indexOf('--top')+1] : Infinity;
const C = loadCorpus();
const LEVELS = C.taxonomy.verificationLevels;
const gateRank = LEVELS[C.taxonomy.releaseGate.minimum].rank;

const SEVERITY = {critical:3, recommended:2, optional:1};

function priority(c){
  let p = 0;
  p += SEVERITY[c.severity] * 10;                                  // consequence of being wrong
  p += c.insertion === 'auto' ? 6 : 0;                             // drafted vs merely suggested
  p += c.jurisdictions.includes('CA') ? 5 : 0;                     // the jurisdiction being led with
  p += c.sources.some(s => s.citation) ? 4 : 0;                    // a citation is a checkable claim
  p += /§|C\.F\.R\.|U\.S\.C\./.test(c.body) ? 3 : 0;               // asserts a specific provision in the text
  p += (gateRank - LEVELS[c.verification].rank);                   // distance from the gate
  p += (c.defects?.length || 0) * 25;                              // known-wrong outranks merely-unverified
  p += Math.min(9, lintClause(c).length * 3);                      // suspected by a validated detector
  return p;
}

const queue = C.clauses
  .filter(c => LEVELS[c.verification].rank < gateRank)
  .map(c => ({
    id: c.id,
    priority: priority(c),
    verification: c.verification,
    severity: c.severity,
    insertion: c.insertion,
    document: c.doc,
    jurisdictions: c.jurisdictions.join('|'),
    citations: c.sources.map(s => s.citation).filter(Boolean).join(' | ') || '(none)',
    defects: (c.defects||[]).length,
    defectDetail: (c.defects||[]).join(' || '),
    lastChecked: c.lastChecked || '',
    lintHits: lintClause(c).map(h=>h.id).join(' '),
    note: c.verificationNote || '',
    title: c.title,
    file: C.sources[c.id]
  }))
  .sort((a,b) => b.priority - a.priority || a.id.localeCompare(b.id));

const shown = queue.slice(0, TOP);
const outDir = path.join(ROOT,'..','verification');
fs.mkdirSync(outDir,{recursive:true});

/* CSV — for whoever is actually working the list */
const cols = ['priority','id','title','defects','lintHits','verification','severity','insertion','document','jurisdictions','citations','lastChecked','defectDetail','file','note'];
const esc = v => `"${String(v).replace(/"/g,'""')}"`;
fs.writeFileSync(path.join(outDir,'review-queue.csv'),
  [cols.join(','), ...shown.map(r => cols.map(k => esc(r[k])).join(','))].join('\n') + '\n');

/* Markdown — for the summary conversation */
const byDoc = {};
queue.forEach(r => { (byDoc[r.document] ||= []).push(r); });
const FDIR = path.join(ROOT,'..','verification','findings');
const findings = fs.existsSync(FDIR)
  ? fs.readdirSync(FDIR).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(path.join(FDIR,f),'utf8')))
  : [];
const an = defectAnalysis(findings);

const md = [
  '# Review queue',
  '',
  ...(an.checked ? [
   '## Sampling result',
   '',
   `${an.checked} clauses have been checked against sources. **${an.defective} of them (${(an.rate*100).toFixed(0)}%) are confirmed defective** —`,
   'they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.',
   '',
   `At 95% confidence, **at least ${(an.lower95*100).toFixed(0)}% of the corpus is defective** — around ${Math.round(an.lower95*C.clauses.length)} of ${C.clauses.length} clauses,`,
   `with a point estimate near ${Math.round(an.rate*C.clauses.length)}.`,
   '',
   `The sample spans California employment, California entity, New York entity, and federal tax clauses, so the`,
   `pattern is not specific to one jurisdiction or subject. Of ${an.assertions} individual assertions checked,`,
   `${an.contradicted} were contradicted outright and ${an.unsupported} could not be supported by any source found.`,
   '',
   '| Defect type | Count | What it means |',
   '|---|---:|---|',
   ...Object.entries({
     'omitted-requirement':'The source describes an obligation the clause does not mention at all.',
     'omitted-qualifier':'The clause states a threshold or test without a condition that narrows or widens it.',
     'overstated-scope':'The clause claims broader application than the provision has.',
     'overstated-consequence':'The clause states exposure without a limit the source imposes.',
     'miscitation':'The clause cites the wrong provision for the obligation it performs.',
     'scope-mismatch':'The clause is drafted for a party the provision does not govern.'
   }).filter(([k])=>an.types[k]).map(([k,desc])=>`| \`${k}\` | ${an.types[k]} | ${desc} |`),
   '',
   'The dominant failure is omission, not invention. The clauses generally get the headline number right and',
   'leave out the qualifier that decides whether the number applies — which is the failure mode least likely to',
   'be caught by reading the clause on its own.',
   '',
   '## Corpus-wide triage',
   '',
   `Those patterns are structural, so they can be looked for without checking each clause against a source.`,
   `\`tools/lint.mjs\` implements one detector per taxonomy entry and flags **${C.clauses.filter(c=>lintClause(c).length).length} of ${C.clauses.length} clauses**.`,
   '',
   '| Detector | Flagged | Predicts |',
   '|---|---:|---|',
   ...DETECTORS.map(d=>`| \`${d.id}\` | ${C.clauses.filter(c=>lintClause(c).some(h=>h.id===d.id)).length} | ${d.predicts} |`),
   '',
   '**Read this with the caveat it deserves.** The detectors were written after seeing the nine sampled clauses,',
   'so scoring them against those same nine measures fit, not predictive accuracy. The 88% recall and 88% precision',
   'that scoring reports are optimistic and rest on n=9. What the exercise does establish is that the taxonomy is',
   'mechanically expressible — the patterns are real and detectable rather than a narrative imposed on the sample.',
   'Treat a flag as "look here first", never as a verdict. A held-out sample is needed for an honest error rate.',
   ''] : []),
  `${queue.length} of ${C.clauses.length} clauses are below the release gate \`${C.taxonomy.releaseGate.minimum}\` and cannot be drafted.`,
  '',
  'Ordered by expected cost of being wrong: severity, whether the clause is drafted automatically or merely suggested,',
  'whether it is in the jurisdiction being led with, whether it asserts a specific provision, and how far it sits from the gate.',
  '',
  '## By verification level',
  '',
  '| Level | Clauses | Meaning |',
  '|---|---:|---|',
  ...Object.entries(LEVELS)
      .filter(([k]) => LEVELS[k].rank < gateRank)
      .map(([k,v]) => `| \`${k}\` | ${queue.filter(r=>r.verification===k).length} | ${v.meaning} |`),
  '',
  '## By document',
  '',
  '| Document | Clauses below gate |',
  '|---|---:|',
  ...Object.entries(byDoc).sort((a,b)=>b[1].length-a[1].length).map(([d,rows]) => `| ${d} | ${rows.length} |`),
  '',
  `## Top ${Math.min(25,shown.length)} by priority`,
  '',
  '| # | Clause | Doc | Sev | Level | Citations |',
  '|---:|---|---|---|---|---|',
  ...shown.slice(0,25).map((r,i) => `| ${i+1} | \`${r.id}\` — ${r.title} | ${r.document} | ${r.severity} | \`${r.verification}\` | ${r.citations} |`),
  '',
  '## Clauses checked and found defective',
  '',
  `${queue.filter(r=>r.defects).length} clause(s) have been checked against sources and found to omit or misstate a requirement.`,
  'These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,',
  'because it reads as complete.',
  '',
  ...(queue.filter(r=>r.defects).length
      ? queue.filter(r=>r.defects).flatMap(r => [`### \`${r.id}\` — ${r.title}`, '',
          `Checked ${r.lastChecked}. ${r.defects} defect(s).`, '',
          ...(r.defectDetail.split(' || ').map(d=>`- ${d}`)), ''])
      : ['None recorded.']),
  ''
].join('\n');
fs.writeFileSync(path.join(outDir,'review-queue.md'), md);

const byLevel = {};
queue.forEach(r => byLevel[r.verification] = (byLevel[r.verification]||0)+1);
console.log(`review queue: ${queue.length} of ${C.clauses.length} clauses below gate "${C.taxonomy.releaseGate.minimum}"`);
for(const [k,n] of Object.entries(byLevel).sort((a,b)=>b[1]-a[1])) console.log(`  ${String(n).padStart(4)}  ${k}`);
console.log(`\ntop of queue:`);
shown.slice(0,8).forEach((r,i)=>console.log(`  ${String(r.priority).padStart(3)}  ${r.id.padEnd(26)} ${r.severity.padEnd(12)} ${r.citations.slice(0,52)}`));
console.log(`\nwritten to verification/review-queue.csv and review-queue.md`);
