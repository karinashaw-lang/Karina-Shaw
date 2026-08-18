/* Every recorded finding, against the two-primary-source standard.

   The standard is not a target to approach. It is a gate: a claim either rests on two
   primary sources on distinct hosts, at least one of them the publisher of the text, read
   by a named person and dated, or it is not verified. This reports where the corpus stands
   against it and what it would take to close the gap.

   Usage: node templates/tools/sources-audit.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {auditSources, meetsTwoPrimary, tierOf, hostOf, fragility, blockedBy, TIERS} from './sources.mjs';
import {normCitation} from './propagation.mjs';

const C = loadCorpus();
const V = path.join(ROOT,'..','verification');
const findings = fs.readdirSync(path.join(V,'findings')).filter(f=>f.endsWith('.json'))
  .map(f=>JSON.parse(fs.readFileSync(path.join(V,'findings',f),'utf8')));

const a = auditSources(findings);
const allSources = findings.flatMap(f=>f.sources||[]);
const hostTally = {};
for(const s of allSources){
  const h = hostOf(s.url); if(!h) continue;
  hostTally[h] = hostTally[h] || {n:0, tier:tierOf(s.url)};
  hostTally[h].n++;
}
const byTier = t => Object.entries(hostTally).filter(([,v])=>v.tier===t).sort((x,y)=>y[1].n-x[1].n);

/* What would each checked clause need? Two primary sources for each provision it cites. */
const byId = new Map(C.clauses.map(c=>[c.id,c]));
const provisions = new Map();
for(const f of findings){
  const c = byId.get(f.clauseId); if(!c) continue;
  for(const s of (c.sources||[])) if(s.citation){
    const k = normCitation(s.citation);
    if(!provisions.has(k)) provisions.set(k, {citation:s.citation, clauses:new Set()});
    provisions.get(k).clauses.add(f.clauseId);
  }
}

/* Precomputed so the report template stays free of nested template literals. */
const BT = String.fromCharCode(96);
const code = x => BT + x + BT;
const fragilityRows = Object.entries(a.byFragility || {})
  .sort((x,y)=>y[1]-x[1])
  .map(([k,v]) => '| ' + code(k) + ' | ' + v + ' |')
  .join('\n');
const blockTally = C.clauses.reduce((m,c)=>{ const k=blockedBy(c).kind; m[k]=(m[k]||0)+1; return m; }, {});
const uncitable = C.clauses.filter(c=>blockedBy(c).kind==='citation')
  .map(c => '- ' + code(c.id) + ' (' + c.severity + ') — ' + blockedBy(c).citations.join('; '))
  .join('\n');
const winetRows = a.rows
  .filter(r => r.fragility.level === 'unverifiable-as-recorded')
  .map(r => '- ' + code(r.id) + ' — ' + (r.fragility.markers ? r.fragility.markers.join('; ') : 'interpretive claim') +
             '; ' + (r.counts.secondary||0) + ' secondary and ' + (r.counts.mirror||0) + ' mirror source(s), no primary')
  .join('\n');

let md = `# The two-primary-source standard

Nothing is verified unless at least two primary sources say so. This is what that costs,
measured rather than estimated.

## What counts

| Tier | Primary? | What it is |
|---|---|---|
${Object.entries(TIERS).map(([k,v])=>`| \`${k}\` | ${['publisher','agency'].includes(k)?'**yes**':'no'} | ${v.meaning} |`).join('\n')}

Two primary sources means two **distinct** primary hosts. Two pages on one publisher are one
source: a publisher that is wrong is wrong on both pages. A statutory claim additionally
needs at least one publisher among the two, because an agency describing a statute is the
agency's reading of it, and agencies are wrong about statutes with some regularity.

An unclassified host is secondary. A host nobody has vouched for is not primary by default —
that is how a standard quietly stops being one.

## Where the corpus stands

**${a.meeting} of ${a.checked} findings meet the standard.**

| Tier | Sources used | Distinct hosts |
|---|---|---|
${Object.keys(TIERS).map(t=>`| \`${t}\` | ${byTier(t).reduce((s,[,v])=>s+v.n,0)} | ${byTier(t).length} |`).join('\n')}

The decisive line is the first one: **zero publisher-tier sources appear anywhere in
${allSources.length} recorded sources.** Not few — none. Every finding in this repo rests on agency
guidance, faithful republishers, and expert readings.

### The hosts actually used

${['agency','mirror','secondary'].map(t=>`**${TIERS[t].name}** — ${byTier(t).map(([h,v])=>`${h} (${v.n})`).join(', ') || '—'}`).join('\n\n')}

## Which findings could be wrong the way Winet was

Reading one primary text corrected a finding of mine. It said *Winet v. Price* held that a
mere recital of waiver is not controlling; the opinion holds close to the opposite. It
survived because four secondary sources agreed — and they agreed because they were all
paraphrasing the same paraphrase, quoting an older case's language under this case's name.

Distinct hosts cannot catch that. The shape of the claim can, because the two kinds fail
differently. A **factual** claim — a deadline, a threshold, a dollar figure — survives
retelling; ten sources repeating a number are weak evidence but not systematically wrong in
one direction. An **interpretive** claim — what a court held, whether something is voidable,
what the test is — does not survive retelling. Each compression drifts toward the memorable
proposition rather than the actual holding.

So an interpretive claim with no primary source is not weakly evidenced. It is
**unverifiable as recorded**: nothing in the file could tell a reader whether it drifted.

| Level | Findings |
|---|---|
${fragilityRows}

**These carry the Winet shape:**

${winetRows}

That list includes findings this repo has leaned on hardest — the "primarily resides and
works" defect in ea_ca_925 and msa_ca_925, and the §2870/§2872 miscitation in
ipa_state_carveout. They may well be right. The point is that **nothing recorded here could
show it**, and the one finding in this category that has since been checked against a
primary text turned out to be wrong.

## Why there are no publisher sources

Not an oversight. Measured this session, every publisher host is denied at the egress proxy:

\`\`\`
000  leginfo.legislature.ca.gov      connect_rejected — gateway answered 403 to CONNECT
000  uscode.house.gov                connect_rejected
000  www.ecfr.gov                    connect_rejected
000  www.law.cornell.edu             connect_rejected
000  govt.westlaw.com                connect_rejected
000  casetext.com                    connect_rejected
000  edd.ca.gov                      connect_rejected
000  www.dir.ca.gov                  connect_rejected
000  www.sos.ca.gov                  connect_rejected
000  oag.ca.gov                      connect_rejected
\`\`\`

The \`github.com\` control tunnels through the same proxy and answers. This is an
organization egress policy, not a fault in this repo, and the proxy documentation says to
report a policy denial rather than retry it.

**So the standard cannot be met here for any new claim.** Web search returns summaries and
secondary commentary; it does not open a publisher's text, and a summary of a statute is not
the statute. Everything recorded so far is therefore correctly classified as below the gate,
and the gate has been raised to \`primary-verified\` so that stays true structurally rather
than by intention.

## What does not change

The ${findings.filter(f=>(f.gaps||[]).length||(f.assertions||[]).some(x=>x.status==='contradicted')).length} defects already found remain findings. The standard governs what may be
called **verified** — it does not un-find a gap. A clause shown by three law firms and an
agency page to omit a statutory exemption is still a clause that omits it; what nobody may
say is that the clause has been *checked against the law*. Those are different claims and
the second one is the one being withheld.

## What it would take

${provisions.size} distinct provisions are cited by the ${findings.length} clauses checked so far. Each needs two
primary sources, at least one a publisher.

| Provision | Clauses resting on it |
|---|---|
${[...provisions.values()].sort((a,b)=>b.clauses.size-a.clauses.size)
  .map(p=>`| ${p.citation} | ${[...p.clauses].map(x=>`\`${x}\``).join(', ')} |`).join('\n')}

### Seven clauses that egress would not fix

| Blocked by | Clauses |
|---|---|
| \`unsourced\` — no citation at all | ${blockTally.unsourced || 0} |
| \`access\` — provision named, text unreachable | ${blockTally.access || 0} |
| **\`citation\`** — names a body of law, no provision | **${blockTally.citation || 0}** |

${uncitable}

These name a whole municipal code, or a wage order whose number depends on an industry the
citation does not state. Nobody can look them up, so no amount of source access verifies
them — they have to be re-cited by somebody who knows which provision the clause was relying
on. Six of the seven are critical, and they are the deepest California work in the corpus.

They are deliberately not repaired here. Supplying a section number from memory is the exact
failure this corpus is full of, and it would be undetectable afterwards.

Two routes, unchanged and independent:

1. **Egress to the publisher hosts.** One allowlist entry for \`leginfo.legislature.ca.gov\`
   covers most of this list. \`npm run egress\` generates the request, ranked by how many
   citations depend on each host.
2. **Supplied texts.** \`npm run ingest -- --file <text> --citation "..." --by "..." --from "..."\`
   stores the bytes verbatim, hashes them, records who obtained them and from where, and
   refuses the file outright if it is an error page, a rendered web page, a truncated copy,
   or missing the section it claims to be.

\`mayFetch\` was tightened alongside this: only the **publisher** of a text may be ingested as
a source text. An agency site is primary for the agency's own forms and procedures and is
still not the sovereign's words.
`;

fs.writeFileSync(path.join(V,'two-primary.md'), md);

console.log(`${a.meeting} of ${a.checked} findings meet the two-primary standard`);
console.log(`  sources by tier: ${JSON.stringify(a.byTier)}`);
console.log(`  publisher-tier sources anywhere in the repo: ${byTier('publisher').length}`);
console.log(`  provisions needing two primary sources: ${provisions.size}`);
console.log('written to verification/two-primary.md');
