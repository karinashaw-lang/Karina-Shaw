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
    note: c.verificationNote || '',
    title: c.title,
    file: C.sources[c.id]
  }))
  .sort((a,b) => b.priority - a.priority || a.id.localeCompare(b.id));

const shown = queue.slice(0, TOP);
const outDir = path.join(ROOT,'..','verification');
fs.mkdirSync(outDir,{recursive:true});

/* CSV — for whoever is actually working the list */
const cols = ['priority','id','title','verification','severity','insertion','document','jurisdictions','citations','file','note'];
const esc = v => `"${String(v).replace(/"/g,'""')}"`;
fs.writeFileSync(path.join(outDir,'review-queue.csv'),
  [cols.join(','), ...shown.map(r => cols.map(k => esc(r[k])).join(','))].join('\n') + '\n');

/* Markdown — for the summary conversation */
const byDoc = {};
queue.forEach(r => { (byDoc[r.document] ||= []).push(r); });
const md = [
  '# Review queue',
  '',
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
  '## Clauses with a recorded gap',
  '',
  ...(queue.filter(r=>r.note).length
      ? queue.filter(r=>r.note).flatMap(r => [`**\`${r.id}\`** — ${r.title}`, '', r.note, ''])
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
