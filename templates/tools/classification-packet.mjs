/* The classification review packet, and the path to record its result.

   One field blocks everything: `assertsLaw`. Both release gates refuse a clause whose
   classification is still `heuristic-unreviewed`, and all 360 are. A human deciding those
   360 binary questions is the cheapest unblocking step in the repo — no statutes, no
   source texts, no egress.

   This makes that afternoon short. Clauses are ordered by what the evidence in their own
   bodies says about the label they already carry, with the misrouting that ships a defect
   at the top and the misrouting that merely wastes time at the bottom. The reviewer is
   confirming or overruling a proposal with the reasons shown, not deciding cold.

   Nothing here classifies anything. The apply step writes only what a named person put in
   the decision column, and refuses a reviewer name that is a team, a tool, or a model.

   Usage:
     node templates/tools/classification-packet.mjs
     node templates/tools/classification-packet.mjs --apply <decided.csv> --by "Full Name" --on 2026-08-15
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {fireRules, clauseEligible, docIncluded, allConfigs} from './evaluator.mjs';
import {signalsFor, tensionFor, reviewPriority, triage,
        AUTHORITY_SIGNALS, DRAFTING_SIGNALS} from './classification.mjs';
import {looksLikeAPerson} from './review.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

const C = loadCorpus();
const TAX = C.taxonomy;
const arg = n => { const i=process.argv.indexOf('--'+n); return i>0 ? process.argv[i+1] : null; };
const SAYS = Object.fromEntries([...AUTHORITY_SIGNALS,...DRAFTING_SIGNALS].map(s=>[s.id,s.says]));

/* ---------------- apply: record a human's decisions ---------------- */

if(process.argv.includes('--apply')){
  const file = arg('apply'), by = arg('by'), on = arg('on') || new Date().toISOString().slice(0,10);
  if(!file || !fs.existsSync(file)){ console.error(`--apply needs a decided CSV; no such file: ${file}`); process.exit(1); }
  if(!by){ console.error('--by is required: a classification review is a person taking responsibility, not a batch job'); process.exit(1); }
  if(!looksLikeAPerson(by)){ console.error(`"${by}" is not a named person — a team, a tool, or a model cannot sign off a classification`); process.exit(1); }
  if(!/^\d{4}-\d{2}-\d{2}$/.test(on)){ console.error(`--on "${on}" is not an ISO date`); process.exit(1); }

  /* minimal CSV reader: quoted fields, doubled quotes */
  const parse = text => {
    const rows=[]; let row=[], field='', q=false;
    for(let i=0;i<text.length;i++){
      const ch=text[i];
      if(q){ if(ch==='"'){ if(text[i+1]==='"'){field+='"';i++;} else q=false; } else field+=ch; }
      else if(ch==='"') q=true;
      else if(ch===','){ row.push(field); field=''; }
      else if(ch==='\n'){ row.push(field); rows.push(row); row=[]; field=''; }
      else if(ch!=='\r') field+=ch;
    }
    if(field.length||row.length){ row.push(field); rows.push(row); }
    return rows.filter(r=>r.some(v=>v!==''));
  };

  const rows = parse(fs.readFileSync(file,'utf8'));
  const head = rows.shift().map(h=>h.trim());
  const iId = head.indexOf('clause'), iDec = head.indexOf('decision'), iNote = head.indexOf('note');
  if(iId<0 || iDec<0){ console.error('the CSV needs at least a "clause" column and a "decision" column'); process.exit(1); }

  const byId = new Map(C.clauses.map(c=>[c.id,c]));
  const decisions = [], problems = [];
  for(const r of rows){
    const id = (r[iId]||'').trim(), dec = (r[iDec]||'').trim().toLowerCase();
    if(!id || !dec) continue;                                   /* undecided rows are skipped, not defaulted */
    if(!byId.has(id)){ problems.push(`unknown clause "${id}"`); continue; }
    if(dec!=='authority' && dec!=='drafting'){
      problems.push(`clause "${id}": decision "${dec}" is neither "authority" nor "drafting"`); continue;
    }
    decisions.push({id, assertsLaw: dec==='authority', note: iNote>=0 ? (r[iNote]||'').trim() : ''});
  }
  if(problems.length){
    console.error('refused — nothing was written:');
    problems.forEach(p=>console.error('  - '+p));
    process.exit(2);
  }
  if(!decisions.length){ console.log('no decided rows in the CSV; nothing to apply'); process.exit(0); }

  /* write back into the clause files, one file at a time */
  const dir = path.join(ROOT,'clauses');
  let changed = 0, flipped = 0;
  for(const f of fs.readdirSync(dir).filter(n=>n.endsWith('.json'))){
    const p = path.join(dir,f);
    const doc = JSON.parse(fs.readFileSync(p,'utf8'));
    let touched = false;
    for(const c of doc.clauses||[]){
      const d = decisions.find(x=>x.id===c.id);
      if(!d) continue;
      if(c.assertsLaw !== d.assertsLaw) flipped++;
      c.assertsLaw = d.assertsLaw;
      c.classifiedBy = 'reviewed';
      c.classificationReview = {reviewer: by, date: on, ...(d.note ? {note: d.note} : {})};
      touched = true; changed++;
    }
    if(touched) fs.writeFileSync(p, JSON.stringify(doc,null,1)+"\n");
  }
  console.log(`recorded ${changed} classification(s) reviewed by ${by} on ${on}`);
  console.log(`  ${flipped} label(s) changed, ${changed-flipped} confirmed as they stood`);
  console.log(`  ${C.clauses.length-changed} clause(s) still heuristic-unreviewed`);
  console.log('run `npm run check` — the validator will refuse anything malformed, and the gate will re-count.');
  process.exit(0);
}

/* ---------------- report: the packet ---------------- */

/* Reach, measured the same way the validator measures anything: by walking the whole
   enumerated configuration space rather than guessing at it. */
const reach = new Map(C.clauses.map(c=>[c.id,0]));
const configs = allConfigs(TAX);
for(const a of configs){
  const fired = fireRules(C.rules, a, TAX), ruleOf = id => fired.has(id);
  const open = new Set(C.documents.filter(d=>docIncluded(d,a,TAX,ruleOf)).map(d=>d.id));
  for(const c of C.clauses){
    if(!open.has(c.doc)) continue;
    if(clauseEligible(c,a,TAX,ruleOf)) reach.set(c.id, reach.get(c.id)+1);
  }
}
const pct = id => 100*reach.get(id)/configs.length;

const t = triage(C.clauses);
const docById = new Map(C.documents.map(d=>[d.id,d]));
const ordered = [...C.clauses].sort((a,b)=>reviewPriority(b,pct(b.id))-reviewPriority(a,pct(a.id)));

const KINDS = [
  ['dangerous',  'Recorded as a term, reads like a statute',
   'These are the ones that matter. A clause stating what the law requires, routed to a review that asks whether the commercial term is sensible. Nobody on that track checks for a missing requirement, and omission is this corpus\'s dominant defect. Decide these first.'],
  ['ambiguous',  'Both kinds of signal present',
   'The body carries law-facing and term-facing language at once. Which ladder it belongs on cannot be read off the text, which is exactly when a human is needed.'],
  ['unevidenced','No signal either way',
   'Neither kind of language appears, so the label these already carry rests on nothing a reader can check. Most of the corpus is here. They are usually quick — the question is what the clause is for, not what it says.'],
  ['stuck',      'Recorded as law, reads like a term',
   'A negotiated term waiting on the authority ladder for a statutory verification that can never arrive. Costly rather than unsafe, so they come last — but every one of them is a clause that would otherwise never ship.'],
  ['consistent', 'Evidence agrees with the recorded label',
   'Listed for completeness. Still needs a decision, because a heuristic agreeing with itself is not a review, but these should go fastest.'],
];

let md = `# Classification review packet

One field decides which ladder every clause is graded on, and on all ${C.clauses.length} clauses it is
still \`heuristic-unreviewed\`. Until a person decides it, both release gates refuse
everything — the authority gate and the drafting gate alike. This is the cheapest
unblocking step in the repo: ${C.clauses.length} binary questions, no statutes, no source texts.

**The question, for each clause:** does this clause tell the reader what the law requires
(**authority**), or what the parties have agreed (**drafting**)?

Nothing in this packet classifies anything. Each clause is listed with the textual evidence
found in its own body — facts you can check by looking, like "the body cites a numbered
provision" — and with what that evidence says about the label it already carries. The order
puts the misrouting that ships a defect first and the misrouting that only wastes time last.

## Why the direction matters

| Recorded | Evidence says | Consequence |
|---|---|---|
| drafting | authority | **Dangerous.** Reviewed for commercial sense by someone not looking for a missing legal requirement. |
| authority | drafting | **Stuck.** Waits forever for a statute that does not exist. |

## How to record the result

Fill the \`decision\` column of \`verification/classification-review.csv\` with \`authority\` or
\`drafting\` (leave blank to skip — blank rows are skipped, never defaulted), then:

\`\`\`
node templates/tools/classification-packet.mjs --apply verification/classification-review.csv \\
  --by "Full Name" --on YYYY-MM-DD
\`\`\`

That writes \`assertsLaw\`, sets \`classifiedBy: "reviewed"\`, and records who decided and when.
A reviewer name that is a team, a tool, or a model is refused, and a malformed decision
aborts the whole run without writing anything.

## Where the corpus stands

| Band | Clauses | What it means |
|---|---|---|
${KINDS.map(([k,title,])=>`| ${title} | ${t.kinds[k]||0} | \`${k}\` |`).join('\n')}

`;

for(const [kind, title, blurb] of KINDS){
  const cs = ordered.filter(c=>tensionFor(c).kind===kind);
  if(!cs.length) continue;
  md += `\n---\n\n# ${title}\n\n${cs.length} clause(s). ${blurb}\n\n`;
  md += `| Clause | Document | Recorded | Reach | Evidence in the body |\n|---|---|---|---|---|\n`;
  for(const c of cs){
    const s = signalsFor(c);
    const ev = [...s.authority, ...s.drafting].map(id=>SAYS[id]).join('; ') || '—';
    md += `| \`${c.id}\` | ${docById.get(c.doc)?.label || c.doc} | ${c.assertsLaw?'authority':'drafting'} | ${pct(c.id).toFixed(0)}% | ${ev}${s.cited?' *(carries a citation)*':''} |\n`;
  }
  md += '\n';

  /* The two directions of misrouting get the clause text, because those are the ones
     where a reviewer needs to read rather than recognise. */
  if(kind==='dangerous' || kind==='stuck' || kind==='ambiguous'){
    for(const c of cs){
      md += `\n### \`${c.id}\` — ${c.title}\n\n`;
      md += `${docById.get(c.doc)?.label || c.doc} · **${c.severity}** · ${c.insertion} · appears in ${pct(c.id).toFixed(0)}% of documents\n\n`;
      md += '```\n' + String(c.body).trim().slice(0,600) + (c.body.length>600?'\n…':'') + '\n```\n\n';
      md += `**Recorded as:** ${c.assertsLaw?'authority':'drafting'} · **evidence says:** ${tensionFor(c).band}\n\n`;
      md += `**Why it is here:** ${tensionFor(c).why}\n\n`;
    }
  }
}

const outDir = path.join(ROOT,'..','verification');
fs.mkdirSync(outDir,{recursive:true});
writeIfChanged(path.join(outDir,'classification-review.md'), md, {linePatterns:VOLATILE_LINES, fsImpl:fs});

const esc = v => `"${String(v??'').replace(/"/g,'""')}"`;
const csv = ['clause,document,title,severity,insertion,reach_pct,recorded,evidence_band,tension,evidence,decision,note']
  .concat(ordered.map(c=>{
    const s = signalsFor(c), tn = tensionFor(c);
    return [c.id, c.doc, c.title, c.severity, c.insertion, pct(c.id).toFixed(1),
            c.assertsLaw?'authority':'drafting', tn.band, tn.kind,
            [...s.authority,...s.drafting].join('; '), '', ''].map(esc).join(',');
  })).join('\n');
writeIfChanged(path.join(outDir,'classification-review.csv'), csv+'\n', {linePatterns:VOLATILE_LINES, fsImpl:fs});

console.log(`${C.clauses.length} clauses, all classified heuristically and none reviewed`);
for(const [kind,title] of KINDS)
  console.log(`  ${String(t.kinds[kind]||0).padStart(4)}  ${kind.padEnd(12)} ${title.toLowerCase()}`);
const dangerous = ordered.filter(c=>tensionFor(c).kind==='dangerous');
if(dangerous.length) console.log(`  decide first: ${dangerous.map(c=>c.id).join(', ')}`);
console.log('written to verification/classification-review.md and .csv');
