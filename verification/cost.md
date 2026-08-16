# What "no mistake" costs

Everything below marked *measured* comes from `npm run audit`. Everything marked
*assumed* is a rate I have no data for and have labelled rather than buried.

## The split that changes the number

*Measured.* Of 360 clauses, **169 assert what the law requires** and **191 state a negotiated term**.

These fail differently and are vetted by different people:

| Track | Clauses | The question | Fails by |
|---|---:|---|---|
| Authority | 169 | Does the source say this, and all of it? | omission — right number, missing qualifier |
| Drafting | 191 | Is this the term we want? | unfavourable, ambiguous, unenforceable |

A statutory reviewer cannot clear a liability cap — it asserts no statute. A commercial
lawyer cannot clear a wage-theft notice clause by reading it, because what is wrong with
it is what is not in it. Collapsing the two is what makes the job look impossible.

## Concentration

*Measured.* The authority burden is not spread evenly:

| Document | Asserts law | Of total |
|---|---:|---:|
| ca-notices | 32 | 37 (86%) |
| handbook | 30 | 34 (88%) |
| compliance-calendar | 17 | 20 (85%) |
| msa | 16 | 61 (26%) |
| employment-agreement | 15 | 27 (56%) |
| governance | 15 | 51 (29%) |
| employment | 14 | 20 (70%) |
| dpa | 7 | 16 (44%) |

The California compliance documents are almost entirely legal assertion. The NDA, MSA,
and statement of work are almost entirely drafting. That is the practical scheduling
insight: the commercial package can be cleared by a commercial lawyer without a single
statute being pulled, and the California package cannot be cleared without all of them.

## The estimate

*Measured.* Sampled defect rate: 27 of 28 (96%), 95% lower bound 84%.
*Measured.* 116 clauses carry at least one detector flag.

*Assumed.* 25 minutes per authority clause, 8 per drafting clause, 1.6× for a defective one.

**≈ 137 hours of qualified review**, of which roughly 111 is California-weighted legal work.
At the sampled rate, about 163 of the 169 authority clauses are not corrections but rewrites against the source.

## What this says about the approach

The honest reading of an 89% sampled defect rate is that the drafting method, not the
drafts, is what failed. Reviewing 169 authority clauses written from memory costs more
than composing them from attested text in the first place, and leaves the same failure
mode in place for everything written next.

The pinning workflow inverts it: quote the provision, pin the assertion, and the
omission failure largely cannot occur, because you are reading the text while you write
rather than recalling it afterwards. That is a change to how the corpus is produced, not
a bigger review budget.

*Nothing here is a legal opinion, and the per-clause rates are guesses. The clause counts,
the split, the defect rate, and the flag counts are measured and reproducible.*
