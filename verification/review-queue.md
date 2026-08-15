# Review queue

## Sampling result

9 clauses have been checked against sources. **8 of them (89%) are confirmed defective** —
they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.

At 95% confidence, **at least 57% of the corpus is defective** — around 206 of 360 clauses,
with a point estimate near 320.

The sample spans California employment, California entity, New York entity, and federal tax clauses, so the
pattern is not specific to one jurisdiction or subject. Of 43 individual assertions checked,
2 were contradicted outright and 7 could not be supported by any source found.

| Defect type | Count | What it means |
|---|---:|---|
| `omitted-requirement` | 7 | The source describes an obligation the clause does not mention at all. |
| `omitted-qualifier` | 5 | The clause states a threshold or test without a condition that narrows or widens it. |
| `overstated-scope` | 1 | The clause claims broader application than the provision has. |
| `overstated-consequence` | 1 | The clause states exposure without a limit the source imposes. |
| `miscitation` | 1 | The clause cites the wrong provision for the obligation it performs. |
| `scope-mismatch` | 1 | The clause is drafted for a party the provision does not govern. |

The dominant failure is omission, not invention. The clauses generally get the headline number right and
leave out the qualifier that decides whether the number applies — which is the failure mode least likely to
be caught by reading the clause on its own.

## Corpus-wide triage

Those patterns are structural, so they can be looked for without checking each clause against a source.
`tools/lint.mjs` implements one detector per taxonomy entry and flags **116 of 360 clauses**.

| Detector | Flagged | Predicts |
|---|---:|---|
| `threshold-without-lookback` | 36 | omitted-qualifier |
| `penalty-without-cap` | 16 | overstated-consequence |
| `scope-test-single-conjunct` | 2 | overstated-scope |
| `form-not-named` | 32 | omitted-requirement |
| `deadline-without-trigger` | 8 | omitted-qualifier |
| `notice-duty-single-citation` | 17 | miscitation |
| `absolute-without-exception` | 27 | omitted-qualifier |

**Read this with the caveat it deserves.** The detectors were written after seeing the nine sampled clauses,
so scoring them against those same nine measures fit, not predictive accuracy. The 88% recall and 88% precision
that scoring reports are optimistic and rest on n=9. What the exercise does establish is that the taxonomy is
mechanically expressible — the patterns are real and detectable rather than a narrative imposed on the sample.
Treat a flag as "look here first", never as a verdict. A held-out sample is needed for an honest error rate.

360 of 360 clauses are below the release gate `corroborated` and cannot be drafted.

Ordered by expected cost of being wrong: severity, whether the clause is drafted automatically or merely suggested,
whether it is in the jurisdiction being led with, whether it asserts a specific provision, and how far it sits from the gate.

## By verification level

| Level | Clauses | Meaning |
|---|---:|---|
| `unsourced` | 249 | Drafted from model knowledge with no citation attached. No independent basis exists for anything it asserts. |
| `single-source` | 89 | One citation is asserted, and nothing has checked that the cited provision says what the clause says it says. |
| `multi-cited` | 22 | More than one citation is asserted. Still self-asserted — several citations written by one author are not corroboration. |
| `search-corroborated` | 0 | The assertion matched a web search summary drawing on two or more independent sources, with URLs and a check date recorded. No source document was opened and no primary text was read. This is a lead for a reviewer, not a verification. |

## By document

| Document | Clauses below gate |
|---|---:|
| msa | 61 |
| governance | 51 |
| ca-notices | 37 |
| handbook | 34 |
| employment-agreement | 27 |
| employment | 20 |
| compliance-calendar | 20 |
| dpa | 16 |
| contractor-agreement | 15 |
| charter | 14 |
| sow | 14 |
| nda | 14 |
| consent | 11 |
| ip-assignment | 9 |
| vesting | 6 |
| foreign-qualification | 5 |
| election-83b | 3 |
| schedules | 3 |

## Top 25 by priority

| # | Clause | Doc | Sev | Level | Citations |
|---:|---|---|---|---|---|
| 1 | `can_calwarn` — Cal-WARN Notice | ca-notices | critical | `single-source` | Cal. Lab. Code §§1400–1408 |
| 2 | `ea_ca_925` — California Forum and Choice of Law | employment-agreement | critical | `single-source` | Cal. Lab. Code §925 |
| 3 | `ipa_state_carveout` — Statutory Invention Carve-Out | ip-assignment | critical | `single-source` | Cal. Lab. Code §2870 |
| 4 | `ic_ca_freelance` — Freelance Worker Protection Act | contractor-agreement | critical | `single-source` | Cal. Bus. & Prof. Code §18100 (SB 988) |
| 5 | `charter_ny_publication` — Publication Requirement | charter | critical | `single-source` | NY LLC Law §206 |
| 6 | `can_harassment_training` — Harassment Prevention Training | ca-notices | critical | `multi-cited` | Cal. Gov. Code §12950.1 | California Civil Rights Department — Sexual harassment prevention training FAQ for employers | FindLaw — Cal. Gov. Code §12950.1 | Traliant — California sexual harassment training requirements |
| 7 | `can_wtpa` — Wage Theft Prevention Act Notice | ca-notices | critical | `multi-cited` | Cal. Lab. Code §2810.5 | Ogletree Deakins — California publishes new wage theft notice | CalChamber HRWatchdog — Updated wage theft notice released | California Workplace Law Blog — Labor Commissioner publishes updated wage theft notice |
| 8 | `b83_instructions` — Filing Instructions | election-83b | critical | `single-source` | Treas. Reg. §1.83-2(c) |
| 9 | `can_fair_chance` — Fair Chance Act Procedure | ca-notices | critical | `single-source` | Cal. Gov. Code §12952 |
| 10 | `emp_finalpay` — Final Pay Timing | employment | critical | `single-source` | Cal. Lab. Code §§201-203 |
| 11 | `msa_ca_925` — California Choice of Law Limits | msa | critical | `multi-cited` | Cal. Lab. Code §925 | Cal. Civ. Code §1646.5 |
| 12 | `hb_ca_jury_voting` — Jury, Witness, and Voting Leave | handbook | critical | `single-source` | Cal. Lab. Code §§230, 14350–14353 |
| 13 | `msa_ca_cipa` — Website Tracking and CIPA Exposure | msa | critical | `single-source` | Cal. Penal Code §§630–638 |
| 14 | `msa_ca_unruh` — Accessibility and Unruh Act Exposure | msa | critical | `single-source` | Cal. Civ. Code §51 |
| 15 | `cal_ca_soi` — California Statement of Information | compliance-calendar | critical | `single-source` | Cal. Corp. Code §§1502, 17702.09 |
| 16 | `can_ccpa_hr` — Privacy Notice for Employee Data | ca-notices | critical | `single-source` | Cal. Civ. Code §1798.100 |
| 17 | `can_edd` — EDD Employer Registration | ca-notices | critical | `single-source` | Cal. Unemp. Ins. Code §1086 |
| 18 | `can_harassment_policy` — Written Harassment and Discrimination Policy | ca-notices | critical | `single-source` | 2 C.C.R. §11023 |
| 19 | `can_heat` — Heat Illness Prevention | ca-notices | critical | `single-source` | 8 C.C.R. §3395 |
| 20 | `can_lactation` — Lactation Accommodation Policy | ca-notices | critical | `single-source` | Cal. Lab. Code §§1030–1034 |
| 21 | `can_local_sd` — San Diego Ordinances | ca-notices | critical | `single-source` | S.D. Mun. Code ch. 3, art. 9 |
| 22 | `can_paga` — Private Attorneys General Act | ca-notices | critical | `single-source` | Cal. Lab. Code §2698 et seq. |
| 23 | `can_paga_cure` — PAGA Notice and Cure Window | ca-notices | critical | `single-source` | Cal. Lab. Code §§2699.3, 2699.5 |
| 24 | `can_paydata` — Annual Pay Data Reporting | ca-notices | critical | `single-source` | Cal. Gov. Code §12999 |
| 25 | `can_whistleblower` — Whistleblower Protection | ca-notices | critical | `single-source` | Cal. Lab. Code §§1102.5, 1102.8 |

## Clauses checked and found defective

8 clause(s) have been checked against sources and found to omit or misstate a requirement.
These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,
because it reads as complete.

### `can_calwarn` — Cal-WARN Notice

Checked 2026-08-15. 3 defect(s).

- The 75-employee threshold looks back twelve months — an establishment that hit 75 at any point in the preceding year is covered. The clause implies a current headcount test, which would let a shrinking employer conclude it is exempt when it is not.
- A mass layoff means 50 or more job losses in any 30-day period. The clause uses the term without the trigger, so a user cannot tell whether a given reduction is covered.
- Damages are capped at 60 days of back pay, or half the days the employee worked, whichever is smaller. The clause states back pay for each day of shortfall with no cap, overstating the exposure.

### `ea_ca_925` — California Forum and Choice of Law

Checked 2026-08-15. 3 defect(s).

- The prohibition attaches to requiring the provision as a condition of employment. The clause omits that qualifier and reads as though any such provision is voidable however it arose.
- Injunctive relief is available alongside fees. The clause mentions only fees.
- contradicted: applies to an employee who primarily works in California

### `ipa_state_carveout` — Statutory Invention Carve-Out

Checked 2026-08-15. 3 defect(s).

- A provision purporting to require assignment of a §2870-protected invention is against the public policy of California and unenforceable. The clause states the carve-out but not that an overbroad assignment is void, which is the consequence that matters.
- §§2870–2872 govern employees. The clause is drafted for founders and sits in the founder IP assignment; a founder who is not an employee may not be covered, and the clause does not flag that.
- contradicted: the written notice is given under §2870

### `ic_ca_freelance` — Freelance Worker Protection Act

Checked 2026-08-15. 2 defect(s).

- The $250 threshold aggregates across all contracts between the same hiring party and contractor in the preceding 120 days. The clause states a flat $250 and would let a user split engagements below the threshold and believe they were outside the Act.
- The hiring party must furnish a signed copy of the contract to the freelance worker. The clause requires a written contract but not that a signed copy be provided.

### `charter_ny_publication` — Publication Requirement

Checked 2026-08-15. 2 defect(s).

- The two newspapers must be one daily and one weekly. The clause says only 'two newspapers', which reads as though any two designated papers will do.
- The Certificate of Publication must have the affidavits of publication from each newspaper attached. The clause does not mention the affidavits, which are the part a filer has to collect from the papers.

### `can_harassment_training` — Harassment Prevention Training

Checked 2026-08-15. 1 defect(s).

- Sources describe prevention of abusive conduct as a required component of the training. The clause does not mention it.

### `can_wtpa` — Wage Theft Prevention Act Notice

Checked 2026-08-15. 1 defect(s).

- The notice must state whether a federal or state disaster declaration applies to the county of employment. The clause omits this requirement entirely.

### `b83_instructions` — Filing Instructions

Checked 2026-08-15. 1 defect(s).

- The IRS now provides Form 15620 as a standardised way to make the election. The clause describes only a written statement and does not mention the form, so a user following it would hand-draft something the IRS has since published a form for.

