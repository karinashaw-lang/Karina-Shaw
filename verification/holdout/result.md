# Held-out detector test

Predictions for 8 clauses were written to `verification/holdout/pre-registration.json`
and committed **before any search was run on them**. The earlier 88%/88% figure was scored
against the same nine findings the detectors were written after seeing — fit, not accuracy.
This is the test that can fail.

## Result on the pre-registered sample

| | |
|---|---|
| Clauses predicted defective | 8 |
| ...that were defective | 8 |
| **Precision** | **100%** |
| Predicted type matched an observed type | 75% |

Every clause the detectors flagged was defective. That is precision, and precision alone.
The sample contains no clauses the detectors predicted clean, so it cannot measure whether
a quiet detector means anything — which is the number that decides whether the suite can be
used to *skip* review.

## The controls: does a clean prediction screen anything out?

So 3 clauses the detectors predicted **clean** were checked, chosen the same way and
searched the same way.

| Clause | Detectors | Result |
|---|---|---|
| `msa_ca_indemnity_construction` | predicted clean | **defective** |
| `msa_ca_prop65` | predicted clean | **defective** |
| `msa_ca_release` | predicted clean | **defective** |

**3 of 3.** A clean prediction screened out nothing.

The defects the detectors missed are not subtle, and they share a shape:

- `msa_ca_prop65` omits that Proposition 65 does not apply to a business with fewer than
  ten employees — the single most consequential qualifier in the statute for a product built
  for small companies, and the clause tells the reader most likely to be exempt that they
  are covered.
- `msa_ca_release` states a drafting convention as a rule of law: §1542 does not require a
  release to quote the statute, and quoting it is neither necessary nor by itself sufficient.
- `msa_ca_indemnity_construction` omits both the 2013 effective date of §2782.05 and its
  third protective branch, for work outside the subcontractor's scope.

Each is an omitted qualifier or an overstated consequence — the same two categories the
detectors were built for. They were missed because a detector matches a surface pattern and
these clauses do not have the pattern, not because the defect is of a new kind.

## What this means for how the detectors may be used

They rank. They do not screen. A flagged clause is worth looking at first; an unflagged
clause is not thereby safe, and nothing in the pipeline may treat it as such. On this
evidence the detectors' value is entirely in ordering the queue, and `npm run queue`
already uses them that way.

## The corpus-wide estimate, updated

19 of 20 clauses checked are demonstrably defective. The one that is not,
`hb_ca_sick`, is still withheld by the gate — two of its assertions found no source either
way, which is absence of evidence and is deliberately not counted as a defect.

| | Before | Now |
|---|---|---|
| Clauses checked | 9 | 20 |
| Demonstrably defective | 8 | 19 |
| Withheld by the gate | 9 | 20 |
| 95% lower bound on the defect rate | 57% | **78%** |
| Implied defective clauses in the 360 | ≥206 | **≥282** |

The bound moved from 57% to 78% because the sample more than doubled and every added
clause was defective. Nothing about the corpus changed; what changed is how much of it has
been looked at.

The sample is not random — it is the top of a queue ordered by consequence, plus three
controls chosen for being detector-clean. It is biased toward clauses that matter, which is
the right bias for deciding what to fix and the wrong one for estimating a population mean.
The lower bound should be read as: among clauses of this kind, at least 78% are defective.

## Every defect found, by category

- **omitted-qualifier** — 15
- **omitted-requirement** — 13
- **overstated-consequence** — 2
- **miscitation** — 2
- **overstated-scope** — 2
- **scope-mismatch** — 1
- **stale** — 1

Omission still dominates, and by a wider margin than before. The corpus is rarely wrong
about what it says. It is wrong about what it leaves out.
