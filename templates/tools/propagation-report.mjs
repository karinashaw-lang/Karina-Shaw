/* Where else would each confirmed defect land?

   Reads the findings, asks propagation.mjs which unchecked clauses are implicated, and
   writes the list. Also reports the standing exposure: every group of near-duplicate
   clauses is a place where one defect lands more than once, whether or not one has been
   found there yet.

   Usage: node templates/tools/propagation-report.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {implicated, duplicateGroups, divergences} from './propagation.mjs';

const C = loadCorpus();
const V = path.join(ROOT,'..','verification');
const findings = fs.readdirSync(path.join(V,'findings')).filter(f=>f.endsWith('.json'))
  .map(f=>JSON.parse(fs.readFileSync(path.join(V,'findings',f),'utf8')));

const checked   = new Set(findings.map(f=>f.clauseId));
const defective = new Set(findings
  .filter(f=>(f.gaps||[]).length>0 || (f.assertions||[]).some(a=>a.status==='contradicted'))
  .map(f=>f.clauseId));

const leads  = implicated(C.clauses, {defective, checked});
const groups = duplicateGroups(C.clauses);
const byId   = new Map(C.clauses.map(c=>[c.id,c]));
const confirmedPropagated = findings.filter(f=>f.propagatedFrom);

let md = `# Defect propagation

A corpus written from memory repeats its mistakes: the same wrong recollection comes out the
same way every time it is needed. \`msa_ca_925\` proved it — the identical "primarily works"
error already confirmed in \`ea_ca_925\`, written twice and found twice at the cost of two
separate searches. Nobody reading one clause would have known to read the other.

So a confirmed defect is not one finding. It is a lead on every clause built from the same
recollection, and there are two ways to tell which those are: clauses sharing distinctive
runs of wording, and clauses resting on the same provision.

## Leads from the ${defective.size} confirmed defects

${leads.length} unchecked clause(s) are implicated.

| Clause | Why | Confirmed in |
|---|---|---|
${leads.map(l=>`| \`${l.clause}\` | ${l.reasons.map(r=>r.kind).join(' + ')} | ${[...new Set(l.reasons.map(r=>r.from))].map(x=>`\`${x}\``).join(', ')} |`).join('\n')}

${leads.map(l=>`### \`${l.clause}\` — ${byId.get(l.clause)?.title||''}\n\n` +
  l.reasons.map(r=>`- ${r.why}${r.kind==='text'?` (${(100*r.jaccard).toFixed(0)}% of runs in common)`:''}`).join('\n')).join('\n\n')}

## What checking them found

${confirmedPropagated.length} of the leads have been checked against the evidence already gathered for the
clause they were implicated by — no new search was needed, because the question was whether
the *same* defect is present, and the sources establishing it are already recorded.

| Clause | Implicated by | Same defect present? |
|---|---|---|
${confirmedPropagated.map(f=>`| \`${f.clauseId}\` | \`${f.propagatedFrom}\` | ${(f.gaps||[]).length||(f.assertions||[]).some(a=>a.status==='contradicted')?'**yes**':'no'} |`).join('\n')}

## Divergence inside a group: a defect found with no source at all

Where two near-duplicate clauses state the same rule and one of them carries a checkable
particular the other does not, one of the two is incomplete — and knowing that needs no
statute, no search, and no reviewer. Two of the findings above came from exactly this.

| Group | Particular | Stated by | Absent from |
|---|---|---|---|
${groups.flatMap(g=>divergences(C.clauses,g).asymmetric.map(d=>
  `| ${g.map(x=>`\`${x}\``).join(', ')} | ${d.particular} | ${d.statedBy.map(x=>`\`${x}\``).join(', ')} | ${d.absentFrom.map(x=>`\`${x}\``).join(', ')} |`)).join('\n')}

A divergence is not automatically a defect — one member may be deliberately narrower than
another. But each one is a question with a definite answer, answerable by reading two
clauses side by side.

There was a second check here and it was removed rather than shipped: flagging the same unit
with different values as an internal contradiction. It cannot work at this level, because a
single clause legitimately says "register within 15 days" and "report a hire within 20 days"
and nothing in the text tells the two concepts apart. Asked properly instead — scoped by
shared citation, where the concept is pinned down — **no two clauses citing the same
provision state different numbers.** That is not reassurance. A corpus written from one
memory is consistently wrong rather than inconsistently wrong.

## The standing exposure

${groups.length} group(s) of near-duplicate clauses, covering ${groups.flat().length} of the ${C.clauses.length} clauses. Each is a
place where one defect would land more than once. Most have no confirmed defect yet, which
is a statement about what has been checked rather than about what is there.

${groups.sort((a,b)=>b.length-a.length).map(g=>{
  const hit = g.filter(x=>defective.has(x));
  return `- ${g.map(x=>`\`${x}\``).join(', ')}${hit.length?`  — defect confirmed in ${hit.map(x=>`\`${x}\``).join(', ')}`:''}`;
}).join('\n')}

## What this does not establish

Shared wording is not shared error. A phrase can be right in one context and wrong in
another, and two clauses resting on one statute can make different claims about it. These
are leads, ranked; each still has to be read. What propagation buys is that a search which
found one defect now names the next clauses worth reading, instead of the queue falling back
to severity order.
`;

fs.mkdirSync(V,{recursive:true});
fs.writeFileSync(path.join(V,'propagation.md'), md);

console.log(`${defective.size} confirmed defect(s) implicate ${leads.length} unchecked clause(s)`);
for(const l of leads) console.log(`  ${l.clause.padEnd(26)} ${l.reasons.map(r=>r.kind).join('+').padEnd(14)} from ${[...new Set(l.reasons.map(r=>r.from))].join(', ')}`);
console.log(`${groups.length} near-duplicate group(s) covering ${groups.flat().length} clauses — each is a place one defect lands twice`);
if(confirmedPropagated.length){
  const yes = confirmedPropagated.filter(f=>(f.gaps||[]).length||(f.assertions||[]).some(a=>a.status==='contradicted')).length;
  console.log(`checked ${confirmedPropagated.length} lead(s): ${yes} carried the same defect`);
}
console.log('written to verification/propagation.md');
