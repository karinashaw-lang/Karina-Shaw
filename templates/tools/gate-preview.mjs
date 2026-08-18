/* What applying the classification proposals would change, computed before anything is written.

   The honest answer is: nothing ships either way. Zero clauses clear the gate today and zero
   clear it afterwards. That is worth stating plainly, because a review of 360 clauses looks
   like progress and it is easy to let it read as though the corpus got closer to usable.

   What it changes is WHICH question is blocking. Today every clause is held by the same
   bookkeeping gap — nobody has said which ladder it belongs on — and that single reason masks
   167 clauses that need primary sources and 193 that need a lawyer. Those are not the same
   problem, they are solved by different people, and neither can start while the corpus cannot
   say which pile a clause is in.

   So the value of applying is not throughput. It is that the remaining work becomes legible and
   can be worked in parallel by the two people who can actually do it.

   This runs the real gate — gateFor, the same function the engine calls — against an in-memory
   overlay. It writes nothing to the corpus. Applying still requires a named person.

   Usage: node templates/tools/gate-preview.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import {loadCorpus, ROOT} from './corpus.mjs';
import {gateFor} from './review.mjs';
import {meetsTwoPrimary} from './sources.mjs';
import {expand} from './classification-proposals.mjs';
import {writeIfChanged, VOLATILE_LINES} from './artifact.mjs';

const V = path.join(ROOT,'..','verification');

/* Group blocking reasons by shape rather than by exact text, so "at level X, gate is Y" for
   forty different levels reads as one reason instead of forty. */
const shape = s => String(s).replace(/"[^"]*"/g,'"…"').replace(/\d+/g,'N');

export function preview(clauses, tax, decisions){
  const overlay = c => ({...c,
    assertsLaw: decisions.get(c.id) === 'authority',
    classifiedBy: 'reviewed',
    classificationReview: {reviewer:'(preview)', date:'0000-00-00'}});

  const count = mk => {
    const reasons = new Map(); let ok = 0;
    for(const c of clauses){
      const g = gateFor(mk(c), tax);
      if(g.ok){ ok++; continue; }
      const k = shape(g.blocking);
      reasons.set(k, (reasons.get(k)||0)+1);
    }
    return {ok, blocked: clauses.length-ok,
            reasons: [...reasons].sort((a,b)=>b[1]-a[1])};
  };
  return {before: count(c=>c), after: count(overlay),
          authority: clauses.filter(c=>decisions.get(c.id)==='authority'),
          drafting:  clauses.filter(c=>decisions.get(c.id)==='drafting')};
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('gate-preview.mjs');
if(INVOKED){
  const C = loadCorpus(), TAX = C.taxonomy;
  const proposals = JSON.parse(fs.readFileSync(path.join(V,'classification','proposals.json'),'utf8'));
  const {rows, problems} = expand(proposals, C.clauses);
  if(problems.length){
    console.error('the proposals do not expand cleanly; fix them before reading a preview:');
    problems.forEach(p=>console.error('  ! '+p));
    process.exit(1);
  }
  const decisions = new Map(rows.map(r=>[r.id, r.decision]));
  const p = preview(C.clauses, TAX, decisions);

  const lv = {}; for(const c of p.authority) lv[c.verification||'unset'] = (lv[c.verification||'unset']||0)+1;
  const noSources = p.authority.filter(c=>!(c.sources||[]).length).length;
  const twoPrimary = p.authority.filter(c=>
    meetsTwoPrimary(c.sources||[], {assertionKind:'statutory', readBy:c.readBy}).ok).length;
  const sev = t => t.reduce((m,c)=>{m[c.severity]=(m[c.severity]||0)+1; return m;},{});
  const perDoc = {}; for(const c of p.drafting) perDoc[c.doc] = (perDoc[c.doc]||0)+1;

  const md = `# What applying the classification would change

Computed by \`templates/tools/gate-preview.mjs\` against an in-memory overlay, using \`gateFor\` —
the same function the engine calls. Nothing was written to the corpus.

## The headline: nothing ships either way

| | Clears the gate | Blocked |
|---|---|---|
| As the corpus stands | ${p.before.ok} | ${p.before.blocked} |
| With the proposals applied | ${p.after.ok} | ${p.after.blocked} |

Applying a classification review to all 360 clauses moves **${p.after.ok - p.before.ok}** clauses
into usable. That is the number to hold onto before reading anything else here, because 360
judgement calls feel like progress and this one produces no releasable output at all.

## What it does change: the blocker stops being bookkeeping

Before:

${p.before.reasons.map(([r,n])=>`- **${n}** — ${r}`).join('\n')}

After:

${p.after.reasons.map(([r,n])=>`- **${n}** — ${r}`).join('\n')}

One reason becomes two, and both of the new ones are real. The old reason was the corpus not
knowing which question to ask about a clause. It masked everything behind it: a clause with no
sources and a clause needing a lawyer were reported identically, so neither pile could be
started, sized, or handed to anyone.

## The two piles, which need different people

### ${p.authority.length} clauses assert law — they need sources

| | |
|---|---|
| Gate | \`${TAX.releaseGate.minimum}\` |
| Meet the two-primary standard | **${twoPrimary}** |
| Have no sources at all | ${noSources} |
| Have at least one source | ${p.authority.length - noSources} |
| By severity | ${Object.entries(sev(p.authority)).map(([k,v])=>`${v} ${k}`).join(', ')} |

Current verification labels: ${Object.entries(lv).map(([k,v])=>`\`${k}\` ${v}`).join(', ')}.

None of these labels was earned against a primary source. This pile cannot move at all while
egress to the publisher hosts is refused — the blocker is measured, not assumed, and it is not
a research problem.

### ${p.drafting.length} clauses assert no law — they need a named lawyer

| | |
|---|---|
| Gate | \`${TAX.releaseGate.draftingMinimum}\` |
| Reviews recorded so far | ${p.drafting.filter(c=>c.draftingReview).length} |
| By severity | ${Object.entries(sev(p.drafting)).map(([k,v])=>`${v} ${k}`).join(', ')} |

By document:

${Object.entries(perDoc).sort((a,b)=>b[1]-a[1]).map(([d,n])=>`- \`${d}\` — ${n}`).join('\n')}

This pile is not blocked by egress. It is blocked only on a person, and \`npm run packet\`
already produces the packet they would work from. It is the half of the corpus that could
start moving today.

## Why that split is the point

The two ladders are blind to each other by design: adding citations to a drafting clause does
nothing, and a lawyer reading an authority clause does not make it verified. Until every clause
said which ladder it was on, that design could not do any work — everything failed at the same
place for the same uninformative reason.

The proposals do not make the corpus more releasable. They make the remaining work divisible.
`;

  writeIfChanged(path.join(V,'classification','gate-preview.md'), md, {linePatterns:VOLATILE_LINES, fsImpl:fs});

  console.log(`gate now : ${p.before.ok} of ${C.clauses.length} clear`);
  for(const [r,n] of p.before.reasons) console.log(`  ${String(n).padStart(3)}  ${r}`);
  console.log(`gate after applying: ${p.after.ok} of ${C.clauses.length} clear  (${p.after.ok-p.before.ok} more)`);
  for(const [r,n] of p.after.reasons) console.log(`  ${String(n).padStart(3)}  ${r}`);
  console.log(`\n${p.authority.length} authority clauses need sources — ${twoPrimary} meet the two-primary standard, ${noSources} have none at all`);
  console.log(`${p.drafting.length} drafting clauses need a named lawyer — not blocked by egress, could start today`);
  console.log('written to verification/classification/gate-preview.md');
}
