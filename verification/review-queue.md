# Review queue

## Sampling result

34 clauses have been checked against sources. **33 of them (97%) are confirmed defective** —
they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.

At 95% confidence, **at least 87% of the corpus is defective** — around 315 of 363 clauses,
with a point estimate near 352.

The sample spans California employment, California entity, New York entity, and federal tax clauses, so the
pattern is not specific to one jurisdiction or subject. Of 265 individual assertions checked,
3 were contradicted outright and 3 could not be supported by any source found.

| Defect type | Count | What it means |
|---|---:|---|
| `omitted-requirement` | 27 | The source describes an obligation the clause does not mention at all. |
| `omitted-qualifier` | 30 | The clause states a threshold or test without a condition that narrows or widens it. |
| `overstated-scope` | 5 | The clause claims broader application than the provision has. |
| `overstated-consequence` | 4 | The clause states exposure without a limit the source imposes. |
| `miscitation` | 1 | The clause cites the wrong provision for the obligation it performs. |

The dominant failure is omission, not invention. The clauses generally get the headline number right and
leave out the qualifier that decides whether the number applies — which is the failure mode least likely to
be caught by reading the clause on its own.

## Corpus-wide triage

Those patterns are structural, so they can be looked for without checking each clause against a source.
`tools/lint.mjs` implements one detector per taxonomy entry and flags **68 of 363 clauses**.

| Detector | Flagged | Predicts |
|---|---:|---|
| `threshold-without-lookback` | 29 | omitted-qualifier |
| `penalty-without-cap` | 6 | overstated-consequence |
| `scope-test-single-conjunct` | 0 | overstated-scope |
| `form-not-named` | 16 | omitted-requirement |
| `deadline-without-trigger` | 3 | omitted-qualifier |
| `notice-duty-single-citation` | 0 | miscitation |
| `absolute-without-exception` | 19 | omitted-qualifier |

**Read this with the caveat it deserves.** The detectors were written after seeing the nine sampled clauses,
so scoring them against those same nine measures fit, not predictive accuracy. The 88% recall and 88% precision
that scoring reports are optimistic and rest on n=9. What the exercise does establish is that the taxonomy is
mechanically expressible — the patterns are real and detectable rather than a narrative imposed on the sample.
Treat a flag as "look here first", never as a verdict. A held-out sample is needed for an honest error rate.

363 of 363 clauses are below the release gate `primary-verified` and cannot be drafted.

Ordered by expected cost of being wrong: severity, whether the clause is drafted automatically or merely suggested,
whether it is in the jurisdiction being led with, whether it asserts a specific provision, and how far it sits from the gate.

## By verification level

| Level | Clauses | Meaning |
|---|---:|---|
| `unsourced` | 354 | Drafted from model knowledge with no citation attached. No independent basis exists for anything it asserts. |
| `single-source` | 7 | One citation is asserted, and nothing has checked that the cited provision says what the clause says it says. |
| `multi-cited` | 2 | More than one citation is asserted. Still self-asserted — several citations written by one author are not corroboration. |
| `search-corroborated` | 0 | The assertion matched a web search summary drawing on two or more independent sources, with URLs and a check date recorded. No source document was opened and no primary text was read. This is a lead for a reviewer, not a verification. |
| `corroborated` | 0 | Two or more independent secondary sources were opened and read, and each was recorded with a URL and a date. The primary text was still not checked. This sits BELOW the release gate: secondary sources agreeing with each other is not two primary sources. |

## By document

| Document | Clauses below gate |
|---|---:|
| msa | 43 |
| governance | 38 |
| lease | 21 |
| partnership | 17 |
| employment-agreement | 17 |
| * | 17 |
| loan | 15 |
| proposal | 13 |
| sow | 13 |
| dpa | 12 |
| nda | 12 |
| note | 12 |
| consent | 11 |
| handbook | 11 |
| contractor-agreement | 11 |
| charter | 11 |
| svc | 11 |
| employment | 10 |
| sublease | 10 |
| businessplan | 10 |
| roommate | 8 |
| ip-assignment | 8 |
| compliance-calendar | 6 |
| invoice | 6 |
| vesting | 6 |
| foreign-qualification | 5 |
| loa | 5 |
| election-83b | 2 |
| schedules | 2 |

## Top 25 by priority

| # | Clause | Doc | Sev | Level | Citations |
|---:|---|---|---|---|---|
| 1 | `b83_instructions` — Filing Instructions | election-83b | critical | `multi-cited` | Treas. Reg. §1.83-2 | 26 U.S.C. §83(b) |
| 2 | `cal_annual_report` — Annual Report and Registered Agent | compliance-calendar | critical | `unsourced` | (none) |
| 3 | `cal_foreign` — Foreign Qualification | compliance-calendar | critical | `unsourced` | (none) |
| 4 | `consent_adopt` — Adoption of Governing Documents | consent | critical | `unsourced` | (none) |
| 5 | `dpa_security` — Security Measures | dpa | critical | `unsourced` | (none) |
| 6 | `dpa_subprocessors` — Subprocessors | dpa | critical | `unsourced` | (none) |
| 7 | `emp_i9` — Work Authorization | employment | critical | `single-source` | 8 U.S.C. §1324a |
| 8 | `fq_goodstanding` — Certificate of Good Standing | foreign-qualification | critical | `unsourced` | (none) |
| 9 | `gov_formation` — Formation and Term | governance | critical | `unsourced` | (none) |
| 10 | `hb_harassment` — Anti-Harassment and Anti-Retaliation | handbook | critical | `unsourced` | (none) |
| 11 | `hb_i9` — Work Authorization | handbook | critical | `single-source` | 8 U.S.C. §1324a |
| 12 | `hb_timekeeping` — Timekeeping | handbook | critical | `unsourced` | (none) |
| 13 | `ic_payment` — Fees and Invoicing | contractor-agreement | critical | `unsourced` | (none) |
| 14 | `lease_term_24` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 15 | `lease_term_6` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 16 | `lease_term_m2m` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 17 | `loan_repay_demand` — Repayment | loan | critical | `unsourced` | (none) |
| 18 | `msa_indemnity_ip` — Intellectual Property Indemnity | msa | critical | `unsourced` | (none) |
| 19 | `msa_liability_cap` — Limitation of Liability | msa | critical | `unsourced` | (none) |
| 20 | `msa_structure` — Structure and Order of Precedence | msa | critical | `unsourced` | (none) |
| 21 | `msa_term_cause` — Termination for Cause | msa | critical | `unsourced` | (none) |
| 22 | `nda_obligations` — Obligations | nda | critical | `unsourced` | (none) |
| 23 | `note_repay_demand` — Repayment | note | critical | `unsourced` | (none) |
| 24 | `prop_intro_provider` — Introduction | proposal | critical | `unsourced` | (none) |
| 25 | `pt_leaving` — A Partner Leaving | partnership | critical | `unsourced` | (none) |

## Clauses checked and found defective

1 clause(s) have been checked against sources and found to omit or misstate a requirement.
These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,
because it reads as complete.

### `b83_instructions` — Filing Instructions

Checked 2026-08-19. 4 defect(s).

- The clause previously said the election must be "postmarked" within thirty days. Treas. Reg. §1.83-2(b) says the election shall be "filed" not later than 30 days after transfer, and §1.83-2(c) says it is made by filing one copy with the internal revenue office where the taxpayer files their return. The mailbox rule that turns a postmark into a filing date is Internal Revenue Code §7502, which was NOT read for this rebuild. The rebuilt body says to send it in a way that produces a dated record and does not assert that a postmark is a filing.
- The clause previously said "There is no procedure to cure a late filing." That is stated here on the narrower and verified ground that the 30-day period is fixed by §83(b)(2) of the statute rather than by regulation. Whether discretionary relief under Treas. Reg. §301.9100 is unavailable for that reason was not verified — §301.9100 was not read.
- Form 15620 was read as a PDF from irs.gov, which is the agency and not a publisher of law. Its instruction text extracted only partially, and the extracted portions confirm the where-to-file rule and that the form is an alternative to a written statement. Its "When to File" paragraph did not extract cleanly and was not relied on.
- State law was not considered. A California taxpayer may have a separate state election or filing obligation and nothing here addresses it.

