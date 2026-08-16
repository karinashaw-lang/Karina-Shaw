# Review queue

## Sampling result

28 clauses have been checked against sources. **27 of them (96%) are confirmed defective** —
they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.

At 95% confidence, **at least 84% of the corpus is defective** — around 303 of 360 clauses,
with a point estimate near 347.

The sample spans California employment, California entity, New York entity, and federal tax clauses, so the
pattern is not specific to one jurisdiction or subject. Of 114 individual assertions checked,
6 were contradicted outright and 8 could not be supported by any source found.

| Defect type | Count | What it means |
|---|---:|---|
| `omitted-requirement` | 17 | The source describes an obligation the clause does not mention at all. |
| `omitted-qualifier` | 19 | The clause states a threshold or test without a condition that narrows or widens it. |
| `overstated-scope` | 2 | The clause claims broader application than the provision has. |
| `overstated-consequence` | 4 | The clause states exposure without a limit the source imposes. |
| `miscitation` | 2 | The clause cites the wrong provision for the obligation it performs. |
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
| compliance-calendar | 20 |
| employment | 20 |
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
| 1 | `can_fair_chance` — Fair Chance Act Procedure | ca-notices | critical | `single-source` | Cal. Gov. Code §12952 |
| 2 | `cal_soi` — California Statement of Information | compliance-calendar | critical | `multi-cited` | Cal. Corp. Code §17702.09 | Cal. Corp. Code §1502 |
| 3 | `msa_ca_prop65` — Proposition 65 Warnings | msa | recommended | `single-source` | Cal. Health & Safety Code §25249.6 |
| 4 | `can_calwarn` — Cal-WARN Notice | ca-notices | critical | `single-source` | Cal. Lab. Code §§1400–1408 |
| 5 | `ea_ca_925` — California Forum and Choice of Law | employment-agreement | critical | `single-source` | Cal. Lab. Code §925 |
| 6 | `ipa_state_carveout` — Statutory Invention Carve-Out | ip-assignment | critical | `single-source` | Cal. Lab. Code §2870 |
| 7 | `cal_ca_soi` — California Statement of Information | compliance-calendar | critical | `single-source` | Cal. Corp. Code §§1502, 17702.09 |
| 8 | `can_heat` — Heat Illness Prevention | ca-notices | critical | `single-source` | 8 C.C.R. §3395 |
| 9 | `can_lactation` — Lactation Accommodation Policy | ca-notices | critical | `single-source` | Cal. Lab. Code §§1030–1034 |
| 10 | `msa_ca_release` — Section 1542 Waiver in Settlements | msa | recommended | `single-source` | Cal. Civ. Code §1542 |
| 11 | `emp_finalpay` — Final Pay Timing | employment | critical | `single-source` | Cal. Lab. Code §§201-203 |
| 12 | `msa_ca_925` — California Choice of Law Limits | msa | critical | `multi-cited` | Cal. Lab. Code §925 | Cal. Civ. Code §1646.5 |
| 13 | `hb_ca_jury_voting` — Jury, Witness, and Voting Leave | handbook | critical | `single-source` | Cal. Lab. Code §§230, 14350–14353 |
| 14 | `ic_ca_freelance` — Freelance Worker Protection Act | contractor-agreement | critical | `single-source` | Cal. Bus. & Prof. Code §18100 (SB 988) |
| 15 | `can_edd` — EDD Employer Registration | ca-notices | critical | `single-source` | Cal. Unemp. Ins. Code §1086 |
| 16 | `can_harassment_policy` — Written Harassment and Discrimination Policy | ca-notices | critical | `single-source` | 2 C.C.R. §11023 |
| 17 | `msa_ca_auto_renew` — California Automatic Renewal Requirements | msa | critical | `single-source` | Cal. Bus. & Prof. Code §§17601–17606 |
| 18 | `charter_ny_publication` — Publication Requirement | charter | critical | `single-source` | NY LLC Law §206 |
| 19 | `emp_ca_registration` — California Employer Registration Checklist | employment | critical | `unsourced` | (none) |
| 20 | `msa_ca_indemnity_construction` — California Anti-Indemnity Limits | msa | critical | `single-source` | Cal. Civ. Code §§2782, 2782.05 |
| 21 | `cal_ca_prop65_ops` — Proposition 65 Review | compliance-calendar | recommended | `single-source` | Cal. Health & Safety Code §25249.6 |
| 22 | `hb_ca_lactation_break` — Lactation Breaks | handbook | critical | `single-source` | Cal. Lab. Code §§1030–1034 |
| 23 | `can_harassment_training` — Harassment Prevention Training | ca-notices | critical | `multi-cited` | Cal. Gov. Code §12950.1 | California Civil Rights Department — Sexual harassment prevention training FAQ for employers | FindLaw — Cal. Gov. Code §12950.1 | Traliant — California sexual harassment training requirements |
| 24 | `can_wtpa` — Wage Theft Prevention Act Notice | ca-notices | critical | `multi-cited` | Cal. Lab. Code §2810.5 | Ogletree Deakins — California publishes new wage theft notice | CalChamber HRWatchdog — Updated wage theft notice released | California Workplace Law Blog — Labor Commissioner publishes updated wage theft notice |
| 25 | `b83_instructions` — Filing Instructions | election-83b | critical | `single-source` | Treas. Reg. §1.83-2(c) |

## Clauses checked and found defective

27 clause(s) have been checked against sources and found to omit or misstate a requirement.
These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,
because it reads as complete.

### `can_fair_chance` — Fair Chance Act Procedure

Checked 2026-08-15. 4 defect(s).

- "an additional five (5) days if the applicant disputes accuracy" — sources give five additional BUSINESS days. The clause says "business days" for the first period and drops the word for the second, so a user counting calendar days shortens the period the applicant is owed.
- The Act applies to employers with five or more employees. The clause states the whole procedure unconditionally, so a four-person company following it believes it is bound when it is not, and a company crossing five has no signal that it now is.
- The 2023 regulations set when the five days start running where receipt cannot be confirmed — two business days for email, five calendar days for mail to a California address, ten elsewhere in the United States, twenty abroad. The clause gives the duration without the trigger.
- The statutory test is whether the conviction history has a direct and adverse relationship with the specific duties of the job. The clause lists the three factors that feed that test but never states the test itself, so an assessment can recite the factors and reach no finding.

### `cal_soi` — California Statement of Information

Checked 2026-08-15. 4 defect(s).

- The penalty is $250. The clause says "a penalty" without the figure, which is the only part of it a founder can act on.
- A delinquent entity gets a notice and a further 60 days to file before suspension or forfeiture. The clause presents suspension as the direct consequence of lateness, so a founder who has already missed the date does not know a cure window exists or how long it runs.
- The clause states only the initial filing. Corporations file annually and LLCs biennially thereafter, and its near-duplicate cal_ca_soi carries that recurrence in a field — so the corpus has the fact and this clause drops it.
- A suspended entity is restored to active status by the Franchise Tax Board, not the Secretary of State. The clause names the consequence and not the cure.

### `msa_ca_prop65` — Proposition 65 Warnings

Checked 2026-08-15. 4 defect(s).

- "a warning that is present but non-conforming is treated as no warning at all" — the safe-harbor regulations define warnings deemed clear and reasonable; a non-conforming warning loses the safe harbor rather than being void as such
- Proposition 65 does not apply to a business employing fewer than 10 employees. For a product built for small companies this is the single most consequential qualifier in the statute, and the clause states the duty with no threshold at all — so the reader most likely to be exempt is told they are covered.
- The exemption does not travel upstream: a manufacturer or distributor selling through an exempt small vendor still owes the consumer a warning. A clause that allocates responsibility between the parties without this cannot allocate it correctly.
- The safe-harbor warning content and methods were amended effective 30 August 2018. The clause tells the reader to allocate responsibility for "the warning’s content and placement" without pointing at the regulations that define what content is safe.

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

### `cal_ca_soi` — California Statement of Information

Checked 2026-08-15. 3 defect(s).

- The penalty is $250; the clause does not say so.
- The 60-day cure window after the notice of delinquency is omitted. This clause is the more detailed of the pair about what suspension costs, which makes the missing escape route more conspicuous, not less.
- Restoration to active status runs through the Franchise Tax Board. The clause is unusually specific about the consequences of suspension and silent on how to undo it.

### `can_heat` — Heat Illness Prevention

Checked 2026-08-15. 3 defect(s).

- The clause asserts the indoor obligation but cites only 8 C.C.R. §3395, which governs OUTDOOR places of employment. The indoor duty lives in §3396. This is the same shape as the confirmed defect in ipa_state_carveout: a duty asserted under the number of a neighbouring section, so a reader who follows the citation to check the indoor rule will not find it there.
- Section 3395 applies to outdoor places of employment. The clause opens with an unconditional "maintain a written heat illness prevention plan", giving an indoor-only employer no way to tell which standard applies to it.
- The triggers are stated as "the regulatory threshold" and "the applicable trigger" rather than as numbers. That is defensible drafting for figures that move, but it means the clause cannot be checked against the source without going to the source.

### `can_lactation` — Lactation Accommodation Policy

Checked 2026-08-15. 3 defect(s).

- An employer with fewer than 50 employees may be exempt from a requirement on a showing of undue hardship. For a product aimed at small companies this is the single most relevant qualifier in the section, and the clause states every requirement as absolute.
- Section 1033 also carries a civil penalty of $100 for each day an employee is denied break time or space. The clause gives the 226.7 hour of pay and stops, so the reader sees the smaller of the two exposures.
- The statute prescribes what the policy must contain: the right to request accommodation, the process for requesting it, the employer’s obligation to respond, and the right to complain to the Labor Commissioner. The clause requires a policy without saying what has to be in it, so a policy can satisfy the clause and fail the statute.

### `msa_ca_release` — Section 1542 Waiver in Settlements

Checked 2026-08-15. 3 defect(s).

- "a release must expressly waive §1542, quoting it in full" — sources are explicit that section 1542 does not require a release to quote the statutory language — quoting it verbatim is best practice, not a condition of validity. The clause states a drafting convention as a rule of law.
- "otherwise the release will not extend to unknown claims" — the consequence is not automatic either way. Winet v. Price holds that a mere recital of waiver is NOT controlling, and that releasing unknown claims needs evidence of intent beyond the words — so quoting the statute is neither necessary nor by itself sufficient. The clause states a binary that the case law does not.
- Section 1542 was amended effective 1 January 2019 (adding "or releasing party", changing "must" to "would"). A clause that instructs the drafter to quote the section in full without saying which version is being quoted invites a stale quotation, which is the failure mode the instruction was meant to prevent.

### `emp_finalpay` — Final Pay Timing

Checked 2026-08-15. 2 defect(s).

- "a terminated employee must be paid all wages at the time of termination" — true as the general rule, but stated as absolute; several industries have their own deadlines
- Labor Code 201 carries industry exceptions the clause states nothing about: seasonal agricultural layoffs in curing, canning or drying perishable produce are payable within 72 hours; oil drilling layoffs within 24 hours excluding weekends and holidays; motion picture production employees whose pay requires special computation by the next regular payday. The clause reads as a flat rule, so an employer in one of those industries following it pays on the wrong schedule.

### `msa_ca_925` — California Choice of Law Limits

Checked 2026-08-15. 2 defect(s).

- "the protection reaches an employee "who primarily works in California"" — the statutory test is an employee who primarily RESIDES AND WORKS in California. Dropping the residence conjunct widens the rule to anyone working here, which is the same defect already confirmed in ea_ca_925 — it has propagated across clauses.
- Section 925 does not apply where the employee was in fact individually represented by a lawyer who was involved in negotiating the forum or choice-of-law term. That is the one lawful route to a non-California forum, and the clause omits it entirely — so it tells the reader the door is shut when the statute leaves it open.

### `hb_ca_jury_voting` — Jury, Witness, and Voting Leave

Checked 2026-08-15. 2 defect(s).

- Labor Code 230 protects the employee who gives reasonable notice to the employer before taking the time off. The clause states the leave as unconditional, so an employer following it does not know it may require notice and an employee reading it does not know they must give it.
- The voting-leave provisions require the employee to give two working days’ notice before the election. The clause states the entitlement and omits the precondition, which is the operative term for an employer deciding whether a request was timely.

### `ic_ca_freelance` — Freelance Worker Protection Act

Checked 2026-08-15. 2 defect(s).

- The $250 threshold aggregates across all contracts between the same hiring party and contractor in the preceding 120 days. The clause states a flat $250 and would let a user split engagements below the threshold and believe they were outside the Act.
- The hiring party must furnish a signed copy of the contract to the freelance worker. The clause requires a written contract but not that a signed copy be provided.

### `can_edd` — EDD Employer Registration

Checked 2026-08-15. 2 defect(s).

- New hires must be reported to the EDD on Form DE 34 within 20 calendar days of the start-of-work date. This clause omits it — and its near-duplicate emp_ca_registration states it, so the corpus knows the requirement and drops it in the place a reader looking up EDD obligations would look.
- Registration, returns and payment must go through e-Services for Business; electronic filing is mandatory unless a waiver is approved. The clause says to file and deposit "on the assigned schedule" without saying the channel is not optional.

### `can_harassment_policy` — Written Harassment and Discrimination Policy

Checked 2026-08-15. 2 defect(s).

- The regulation applies to employers with five or more employees. The clause states the duty unconditionally, so a smaller employer reads a binding obligation it does not have and gets no signal when it crosses the threshold.
- The prescribed contents also include instructions to supervisors on reporting complaints, and identification of the Civil Rights Department and the federal EEOC as additional avenues for an employee. The clause lists six required elements and omits both, so a policy built from the clause is short of the regulation while appearing complete.

### `msa_ca_auto_renew` — California Automatic Renewal Requirements

Checked 2026-08-15. 2 defect(s).

- AB 2863 was signed in September 2024 and applies to contracts entered into, amended, or extended on or after 1 July 2025 — more than a year before this check. The clause describes the pre-amendment regime and omits all of it: free-to-pay conversions brought into scope, the new annual reminder notice, the click-to-cancel requirement and its voice equivalent, and the duty to retain consent verification records for three years or one year after termination, whichever is longer.
- The clause is not wrong about the old law. It is silent about the current law, which is the more dangerous failure for a compliance clause: it reads as a complete statement of the regime and is a year out of date.

### `charter_ny_publication` — Publication Requirement

Checked 2026-08-15. 2 defect(s).

- The two newspapers must be one daily and one weekly. The clause says only 'two newspapers', which reads as though any two designated papers will do.
- The Certificate of Publication must have the affidavits of publication from each newspaper attached. The clause does not mention the affidavits, which are the part a filer has to collect from the papers.

### `emp_ca_registration` — California Employer Registration Checklist

Checked 2026-08-15. 2 defect(s).

- Electronic filing through e-Services for Business is mandatory absent an approved waiver. Neither clause in this pair says so.
- The clause carries no citation at all while asserting five separate legal duties. Every assertion here is unverifiable as filed, because there is nothing recorded to verify it against.

### `msa_ca_indemnity_construction` — California Anti-Indemnity Limits

Checked 2026-08-15. 2 defect(s).

- Section 2782.05 applies to contracts entered into on or after 1 January 2013. The clause states the limit with no temporal boundary, so it is asserted of contracts it does not reach.
- Section 2782.05 also voids the subcontractor’s indemnity to the extent claims arise from work outside the subcontractor’s contractual scope. That is a third protection, independent of active negligence, and the clause omits it — a subcontractor relying on this clause would not know to raise it.

### `cal_ca_prop65_ops` — Proposition 65 Review

Checked 2026-08-15. 2 defect(s).

- "a warning that is present but non-conforming is treated as no warning" — the same overstatement confirmed in msa_ca_prop65 — a non-conforming warning loses the safe harbour rather than being void as such
- The parent defect propagated: this clause states the duty with no threshold, and Proposition 65 does not apply to a business employing fewer than ten employees. Both clauses in this pair tell the reader most likely to be exempt that they are covered.

### `hb_ca_lactation_break` — Lactation Breaks

Checked 2026-08-15. 1 defect(s).

- The parent defect propagated: no mention of the undue-hardship exemption available to an employer with fewer than 50 employees, which for a small-company product is the most relevant qualifier in the section. The clause delegates the space requirements to can_lactation, which omits it too, so the exemption appears nowhere in the pair.

### `can_harassment_training` — Harassment Prevention Training

Checked 2026-08-15. 1 defect(s).

- Sources describe prevention of abusive conduct as a required component of the training. The clause does not mention it.

### `can_wtpa` — Wage Theft Prevention Act Notice

Checked 2026-08-15. 1 defect(s).

- The notice must state whether a federal or state disaster declaration applies to the county of employment. The clause omits this requirement entirely.

### `b83_instructions` — Filing Instructions

Checked 2026-08-15. 1 defect(s).

- The IRS now provides Form 15620 as a standardised way to make the election. The clause describes only a written statement and does not mention the form, so a user following it would hand-draft something the IRS has since published a form for.

### `cal_ny` — New York Publication Deadline

Checked 2026-08-15. 1 defect(s).

- The parent defect propagated: the two papers are not interchangeable — the county clerk designates one daily and one weekly. "Two designated newspapers" reads as a free choice of any two, so a founder can publish in two dailies, satisfy this clause, and fail the statute. Confirmed in charter_ny_publication and repeated verbatim in substance here.

### `ea_ca_release` — Release and Section 1542 Waiver

Checked 2026-08-15. 1 defect(s).

- "any release must expressly waive §1542, quoting it, or unknown claims survive" — the same error confirmed in msa_ca_release: §1542 does not require a release to quote the statute, and quoting it is neither necessary nor by itself sufficient. Written in two places, wrong in both.

