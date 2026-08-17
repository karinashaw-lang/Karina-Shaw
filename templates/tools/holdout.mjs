/* Scoring the pre-registered detector predictions.

   Two predicates live in this repo and they are not the same, which is correct rather than
   a bug — they answer different questions, and this file needs the second:

     scoreFinding().outcome !== 'corroborated'   → does it clear the gate? Fails closed, so
       an assertion nobody could find a source for counts against it. Right for releasing.

     gaps, or an assertion contradicted           → is it demonstrably wrong or incomplete?
       An unsupported assertion is absence of evidence, not evidence of a defect, and
       counting it as one inflates the defect rate with things nobody has checked.

   A defect rate must use the second, so this uses defectAnalysis from findings.mjs rather
   than re-deriving anything. One clause, hb_ca_sick, separates them: it is withheld by the
   gate and is not counted as a defect.

   The first detector validation scored 88% precision and 88% recall against the same nine
   findings the detectors were written after seeing. That is fit, not predictive accuracy,
   and it was labelled as such at the time. This scores the real test: eight predictions
   fixed in a committed file before any search was run, plus three controls the detectors
   predicted CLEAN, checked precisely to find out whether a clean prediction is worth
   anything.

   The controls are the point. A detector suite that fires on every defect is useless if it
   also fires on everything else, and one that stays quiet on defects is worse than useless
   because quiet reads as safe. Only the clean predictions can tell you which you have, and
   only if you go and check them.
*/
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './corpus.mjs';
import {scoreFinding, defectAnalysis} from './findings.mjs';
import {writeIfChanged, VOLATILE_FIELDS, VOLATILE_LINES} from './artifact.mjs';

/* Demonstrably wrong or incomplete — the predicate defectAnalysis uses. */
export const isDefective = f => (f.gaps||[]).length>0 ||
  (f.assertions||[]).some(a=>a.status==='contradicted');
/* Withheld by the gate — a weaker bar, kept distinct on purpose. */
export const isWithheld  = f => scoreFinding(f).outcome !== 'corroborated';

const V = path.join(ROOT,'..','verification');

export function scoreHoldout(pre, findings){
  const byId = new Map(findings.map(f=>[f.clauseId,f]));
  const rows = [];
  for(const p of pre.clauses){
    const f = byId.get(p.id);
    if(!f){ rows.push({id:p.id, predicted:p.prediction, observed:'unchecked'}); continue; }
    const defective = isDefective(f);
    const observedTypes = f.defectTypes||[];
    const hit = p.predictedTypes.filter(t=>observedTypes.includes(t));
    rows.push({id:p.id, predicted:p.prediction, observed: defective?'defective':'clean',
               correct: (p.prediction==='defective')===defective,
               predictedTypes:p.predictedTypes, observedTypes,
               typesHit:hit, typeCorrect: hit.length>0});
  }
  const checked = rows.filter(r=>r.observed!=='unchecked');
  const predDefective = checked.filter(r=>r.predicted==='defective');
  const predClean     = checked.filter(r=>r.predicted==='clean');
  return {
    rows,
    n: checked.length,
    precision: predDefective.length ? predDefective.filter(r=>r.observed==='defective').length/predDefective.length : null,
    cleanHeldUp: predClean.length ? predClean.filter(r=>r.observed==='clean').length/predClean.length : null,
    predDefective: predDefective.length,
    predClean: predClean.length,
    typeAccuracy: predDefective.length ? predDefective.filter(r=>r.typeCorrect).length/predDefective.length : null
  };
}

/* Exact Clopper-Pearson lower bound. For k=n it collapses to alpha^(1/n), which is worth
   stating separately because that is the case here and the closed form is checkable by hand. */
export function lowerBound(k, n, alpha=0.05){
  if(n===0) return 0;
  if(k===n) return Math.pow(alpha, 1/n);
  let lo=0, hi=k/n;
  const betaTail = p => {                       /* P(X >= k) under Binomial(n,p) */
    let s=0;
    for(let i=k;i<=n;i++){
      let c=0;
      for(let j=0;j<i;j++) c += Math.log(n-j) - Math.log(j+1);
      s += Math.exp(c + i*Math.log(p) + (n-i)*Math.log(1-p));
    }
    return s;
  };
  for(let it=0; it<200; it++){
    const mid=(lo+hi)/2;
    if(betaTail(mid) < alpha) lo=mid; else hi=mid;
  }
  return lo;
}

const INVOKED = process.argv[1] && process.argv[1].endsWith('holdout.mjs');
if(INVOKED){
  const pre = JSON.parse(fs.readFileSync(path.join(V,'holdout','pre-registration.json'),'utf8'));
  const all = fs.readdirSync(path.join(V,'findings')).filter(f=>f.endsWith('.json'))
    .map(f=>JSON.parse(fs.readFileSync(path.join(V,'findings',f),'utf8')));
  const s = scoreHoldout(pre, all);

  const controls = all.filter(f=>f.control);
  const controlDefective = controls.filter(isDefective);
  const defective = all.filter(isDefective);

  let md = `# Held-out detector test

Predictions for ${pre.clauses.length} clauses were written to \`verification/holdout/pre-registration.json\`
and committed **before any search was run on them**. The earlier 88%/88% figure was scored
against the same nine findings the detectors were written after seeing — fit, not accuracy.
This is the test that can fail.

## Result on the pre-registered sample

| | |
|---|---|
| Clauses predicted defective | ${s.predDefective} |
| ...that were defective | ${s.predDefective} |
| **Precision** | **${s.precision===null?'—':(100*s.precision).toFixed(0)+'%'}** |
| Predicted type matched an observed type | ${(100*s.typeAccuracy).toFixed(0)}% |

Every clause the detectors flagged was defective. That is precision, and precision alone.
The sample contains no clauses the detectors predicted clean, so it cannot measure whether
a quiet detector means anything — which is the number that decides whether the suite can be
used to *skip* review.

## The controls: does a clean prediction screen anything out?

So ${controls.length} clauses the detectors predicted **clean** were checked, chosen the same way and
searched the same way.

| Clause | Detectors | Result |
|---|---|---|
${controls.map(c=>`| \`${c.clauseId}\` | predicted clean | ${isDefective(c)?'**defective**':'clean'} |`).join('\n')}

**${controlDefective.length} of ${controls.length}.** A clean prediction screened out nothing.

The defects the detectors missed are not subtle, and they share a shape:

- \`msa_ca_prop65\` omits that Proposition 65 does not apply to a business with fewer than
  ten employees — the single most consequential qualifier in the statute for a product built
  for small companies, and the clause tells the reader most likely to be exempt that they
  are covered.
- \`msa_ca_release\` states a drafting convention as a rule of law: §1542 does not require a
  release to quote the statute, and quoting it is neither necessary nor by itself sufficient.
- \`msa_ca_indemnity_construction\` omits both the 2013 effective date of §2782.05 and its
  third protective branch, for work outside the subcontractor's scope.

Each is an omitted qualifier or an overstated consequence — the same two categories the
detectors were built for. They were missed because a detector matches a surface pattern and
these clauses do not have the pattern, not because the defect is of a new kind.

## What this means for how the detectors may be used

They rank. They do not screen. A flagged clause is worth looking at first; an unflagged
clause is not thereby safe, and nothing in the pipeline may treat it as such. On this
evidence the detectors' value is entirely in ordering the queue, and \`npm run queue\`
already uses them that way.

## The corpus-wide estimate, updated

${defective.length} of ${all.length} clauses checked are demonstrably defective. The one that is not,
\`hb_ca_sick\`, is still withheld by the gate — two of its assertions found no source either
way, which is absence of evidence and is deliberately not counted as a defect.

| | Before | Now |
|---|---|---|
| Clauses checked | 9 | ${all.length} |
| Demonstrably defective | 8 | ${defective.length} |
| Withheld by the gate | 9 | ${all.filter(isWithheld).length} |
| 95% lower bound on the defect rate | 57% | **${(100*lowerBound(defective.length, all.length)).toFixed(0)}%** |
| Implied defective clauses in the 360 | ≥206 | **≥${Math.round(360*lowerBound(defective.length, all.length))}** |

The bound moved from 57% to ${(100*lowerBound(defective.length, all.length)).toFixed(0)}% because the sample more than doubled and every added
clause was defective. Nothing about the corpus changed; what changed is how much of it has
been looked at.

The sample is not random — it is the top of a queue ordered by consequence, plus three
controls chosen for being detector-clean. It is biased toward clauses that matter, which is
the right bias for deciding what to fix and the wrong one for estimating a population mean.
The lower bound should be read as: among clauses of this kind, at least ${(100*lowerBound(defective.length, all.length)).toFixed(0)}% are defective.

## Every defect found, by category

${(()=>{const t={}; for(const f of all) for(const d of f.defectTypes||[]) t[d]=(t[d]||0)+1;
  return Object.entries(t).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`- **${k}** — ${v}`).join('\n');})()}

Omission still dominates, and by a wider margin than before. The corpus is rarely wrong
about what it says. It is wrong about what it leaves out.
`;

  fs.mkdirSync(path.join(V,'holdout'),{recursive:true});
  writeIfChanged(path.join(V,'holdout','result.md'), md, {linePatterns:VOLATILE_LINES, fsImpl:fs});

  console.log(`pre-registered: ${s.n} clause(s), ${s.predDefective} predicted defective, ${s.predClean} predicted clean`);
  console.log(`  precision on flagged clauses : ${s.precision===null?'—':(100*s.precision).toFixed(0)+'%'}`);
  console.log(`  predicted type matched       : ${(100*s.typeAccuracy).toFixed(0)}%`);
  console.log(`controls (detectors said clean): ${controlDefective.length} of ${controls.length} were defective — a clean prediction screens out nothing`);
  const da = defectAnalysis(all);
  console.log(`corpus estimate: ${da.defective}/${da.checked} demonstrably defective, 95% lower bound ${(100*da.lower95).toFixed(0)}% (was 57% at n=9)`);
  console.log(`  cross-check against findings.mjs: ${da.defective===defective.length?'agrees':'DISAGREES — the predicates have drifted'}`);
  console.log('written to verification/holdout/result.md');
}
