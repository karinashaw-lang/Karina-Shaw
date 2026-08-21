# Review queue

## Sampling result

11 clauses have been checked against sources. **10 of them (91%) are confirmed defective** —
they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.

At 95% confidence, **at least 64% of the corpus is defective** — around 231 of 363 clauses,
with a point estimate near 330.

The sample spans California employment, California entity, New York entity, and federal tax clauses, so the
pattern is not specific to one jurisdiction or subject. Of 32 individual assertions checked,
2 were contradicted outright and 8 could not be supported by any source found.

| Defect type | Count | What it means |
|---|---:|---|
| `omitted-requirement` | 1 | The source describes an obligation the clause does not mention at all. |
| `omitted-qualifier` | 5 | The clause states a threshold or test without a condition that narrows or widens it. |
| `miscitation` | 2 | The clause cites the wrong provision for the obligation it performs. |

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
| `unsourced` | 349 | Drafted from model knowledge with no citation attached. No independent basis exists for anything it asserts. |
| `single-source` | 6 | One citation is asserted, and nothing has checked that the cited provision says what the clause says it says. |
| `multi-cited` | 8 | More than one citation is asserted. Still self-asserted — several citations written by one author are not corroboration. |
| `search-corroborated` | 0 | The assertion matched a web search summary drawing on two or more independent sources, with URLs and a check date recorded. No source document was opened and no primary text was read. This is a lead for a reviewer, not a verification. |
| `corroborated` | 0 | Two or more independent secondary sources were opened and read, and each was recorded with a URL and a date. The primary text was still not checked. This sits BELOW the release gate: secondary sources agreeing with each other is not two primary sources. |

## By document

| Document | Clauses below gate |
|---|---:|
| msa | 43 |
| governance | 38 |
| lease | 21 |
| employment-agreement | 17 |
| partnership | 17 |
| * | 17 |
| loan | 15 |
| proposal | 13 |
| sow | 13 |
| dpa | 12 |
| nda | 12 |
| note | 12 |
| handbook | 11 |
| consent | 11 |
| contractor-agreement | 11 |
| charter | 11 |
| svc | 11 |
| employment | 10 |
| sublease | 10 |
| businessplan | 10 |
| ip-assignment | 8 |
| roommate | 8 |
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
| 1 | `ipa_wfh` — Work Made For Hire | ip-assignment | critical | `multi-cited` | (none) |
| 2 | `b83_instructions` — Filing Instructions | election-83b | critical | `multi-cited` | Treas. Reg. §1.83-2 | 26 U.S.C. §83(b) |
| 3 | `hb_technology` — Technology and Monitoring | handbook | recommended | `multi-cited` | (none) |
| 4 | `emp_overtime` — Overtime | employment | recommended | `multi-cited` | 29 U.S.C. §207 |
| 5 | `emp_ip` — Employee Invention Assignment | employment | critical | `multi-cited` | (none) |
| 6 | `hb_accommodation` — Reasonable Accommodation | handbook | critical | `multi-cited` | (none) |
| 7 | `ea_overtime` — Overtime and Timekeeping | employment-agreement | critical | `multi-cited` | (none) |
| 8 | `emp_i9` — Work Authorization | employment | critical | `single-source` | 8 U.S.C. §1324a |
| 9 | `hb_i9` — Work Authorization | handbook | critical | `single-source` | 8 U.S.C. §1324a |
| 10 | `hb_timekeeping` — Timekeeping | handbook | critical | `unsourced` | (none) |
| 11 | `cal_annual_report` — Annual Report and Registered Agent | compliance-calendar | critical | `unsourced` | (none) |
| 12 | `cal_foreign` — Foreign Qualification | compliance-calendar | critical | `unsourced` | (none) |
| 13 | `consent_adopt` — Adoption of Governing Documents | consent | critical | `unsourced` | (none) |
| 14 | `dpa_security` — Security Measures | dpa | critical | `unsourced` | (none) |
| 15 | `dpa_subprocessors` — Subprocessors | dpa | critical | `unsourced` | (none) |
| 16 | `fq_goodstanding` — Certificate of Good Standing | foreign-qualification | critical | `unsourced` | (none) |
| 17 | `gov_formation` — Formation and Term | governance | critical | `unsourced` | (none) |
| 18 | `hb_harassment` — Anti-Harassment and Anti-Retaliation | handbook | critical | `unsourced` | (none) |
| 19 | `ic_payment` — Fees and Invoicing | contractor-agreement | critical | `unsourced` | (none) |
| 20 | `lease_term_24` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 21 | `lease_term_6` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 22 | `lease_term_m2m` — Term of the Tenancy | lease | critical | `unsourced` | (none) |
| 23 | `loan_repay_demand` — Repayment | loan | critical | `unsourced` | (none) |
| 24 | `msa_indemnity_ip` — Intellectual Property Indemnity | msa | critical | `unsourced` | (none) |
| 25 | `msa_liability_cap` — Limitation of Liability | msa | critical | `unsourced` | (none) |

## Clauses checked and found defective

10 clause(s) have been checked against sources and found to omit or misstate a requirement.
These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,
because it reads as complete.

### `ipa_wfh` — Work Made For Hire

Checked 2026-08-20. 5 defect(s).

- The clause's first sentence ('All copyrightable works created by a founder within the scope of the Company's business are work made for hire under the Copyright Act') is stated as a categorical fact. Under Reid it is a fact-specific legal conclusion that depends on the founder's actual working relationship with the Company -- control, payroll status, benefits, tax treatment, and the rest -- and will often come out the other way for an early-stage founder who is not drawing a W-2 salary. The clause does not say this, and a reader has no way to know the first sentence is a legal conclusion resting on facts not stated.
- The practical consequence is muted, not absent: the second sentence's backstop assignment ('To the extent any work does not qualify... it is assigned to the Company') means the Company ends up owning the copyright either way, by assignment if not by operation of section 101. That is why this is recorded as a gap rather than a contradiction that blocks the document -- but an assignment and a work-for-hire are not identical in every respect. Section 203 of the Copyright Act lets an individual author terminate a granted assignment after 35 years; a true work made for hire cannot be terminated because the employer is deemed the author from the start. Whether that distinction matters for a given company was not researched, and the clause's flat 'is work made for hire' framing could leave a reader thinking the section 203 question does not arise when it may.
- The statutory text of 17 U.S.C. section 101 was not independently fetched -- every primary and mirror host was blocked at the egress proxy during this check. The section 101(2) category list above is taken from the Court's own quotation of the statute in Reid, not read directly from the Office of the Law Revision Counsel's text.
- Only one fact pattern (Aymes, a single hired programmer) was read as an application of the Reid factors. Founders' circumstances vary a great deal -- co-founders working full time with no other clients look more like employees than a founder who is also running a separate consultancy -- and this check does not cover that range.
- contradicted: work made for hire under 17 U.S.C. section 101 arises automatically whenever a founder creates a copyrightable work within the scope of the Company's business

### `b83_instructions` — Filing Instructions

Checked 2026-08-19. 5 defect(s).

- 26 U.S.C. §7502, the timely-mailing-is-timely-filing rule, was not read. The rebuilt body therefore tells the reader to send the election in a way that produces a dated record, and does not assert that a postmark is a filing.
- Treas. Reg. §301.9100 was not read. The clause's claim that there is no cure for a late filing is stated on the narrower and verified ground that the 30-day period comes from the statute; whether §301.9100 relief is unavailable for that reason was not verified.
- Form 15620's instruction text extracted only partially from the PDF — the 'Who May File' and 'When to File' paragraphs came through as fragments. What is asserted about the form is limited to the fragments that did extract cleanly. irs.gov is the agency and not a publisher of law.
- State law was not considered. A California taxpayer may have a separate state filing obligation and nothing here addresses it.
- The remaining substantive consequences in §1.83-2(a) — that the substantial vesting rules of §83(a) stop applying, and the basis rule for a later sale — were read and are not carried. Whether another clause in the election document states them was not checked.

### `hb_technology` — Technology and Monitoring

Checked 2026-08-21. 5 defect(s).

- The clause's 'no expectation of privacy... on Company systems' is accurate for the ordinary case Smyth addresses (an employee's ordinary use of the company's own email/systems) but is stated as though monitoring is therefore unconstrained. Stengart's own fact pattern is exactly the scenario this clause's last sentence gestures at without addressing -- an employee using a personal, password-protected account (there, webmail; the clause separately tells employees not to store confidential information in personal accounts, which implies personal accounts are in scope of employee behavior but not of what the Company may do with them) accessed through a company device. Personal accounts accessed on Company hardware are not squarely 'data stored on or transmitted through Company systems,' and the clause does not say whether the Company claims any monitoring right over them.
- Privileged communications (attorney-client, in Stengart's case) get separate, stronger protection than ordinary personal communications under the case law read here. The clause draws no distinction for privileged content at all.
- Courts described in Stengart's own survey (not independently read here, only as characterized by Stengart itself) draw a further distinction between accessing personal webmail through a browser versus routing personal messages through the company's own email address -- the latter looking more like Smyth even when the content is personal. The clause does not address this distinction because it does not address personal accounts at all.
- The clause's own advance-written-notice requirement ('may require advance written notice') for state-law monitoring rules was not itself checked against any specific state's statute -- every host that would carry state notice-of-monitoring statutes was blocked.
- contradicted: employees have no expectation of privacy in ANY data stored on or transmitted through Company systems, stated without qualification

### `emp_overtime` — Overtime

Checked 2026-08-20. 4 defect(s).

- The clause states the payment duty as unconditional ('must be paid whether or not it was authorized in advance') with no mention of the employer's-knowledge condition both circuits treat as load-bearing. In the ordinary case an employer that requires advance authorization also has visibility into hours worked (timekeeping, direct supervision), so the condition is usually satisfied and the clause's practical guidance is not wrong for the case it is written for. The gap matters at the edge: an employee who conceals hours or bypasses the time-reporting system entirely, then claims unreported overtime after the fact, is exactly the Forrester fact pattern, and on those facts the employer may owe nothing. The clause gives the reader no way to tell the ordinary case from the edge case.
- 29 U.S.C. section 207 and section 203(g) were not independently fetched -- every host that would carry them was blocked. The quoted statutory language above is the courts' own quotation of the text, not a primary read of the Office of the Law Revision Counsel's version.
- The clause's second half ('and at any additional rate required by the law of {{opStateLong}}') is a pure deferral and was not checked -- it names no state-specific rule to verify.
- ea_overtime (employment-agreement) makes close to the same two claims in worker-facing language and was not separately checked. Its risk profile is different -- it faces the employee being offered the job, not an internal handbook policy -- and it deserves its own pass rather than being assumed covered by this one.

### `emp_ip` — Employee Invention Assignment

Checked 2026-08-21. 3 defect(s).

- Both opinions read address noncompetition covenants specifically, not a bare invention-assignment-and-confidentiality agreement with no competitive restriction. The general contract-law question is the same ('is a promise made after an at-will relationship already exists supported by consideration'), and nothing found suggests courts draw a different line for invention assignments -- but that was not independently confirmed with a case actually presenting an invention-assignment fact pattern, only inferred from the shared underlying doctrine.
- This confirms a split exists; it does not tell a reader which side any particular {{opStateLong}} falls on, and the clause does not either -- by design, since this is the jurisdiction-neutral corpus and state-specific answers were parked. A reader who wants to know whether separate consideration is actually required in their state still has to look it up themselves.
- Both sources are on the same host (courtlistener.com), so this does not meet this project's two-independent-host standard even though it draws on two independent courts reaching opposite conclusions -- an artifact of how host-independence is measured here, not a weakness in the finding itself.

### `hb_accommodation` — Reasonable Accommodation

Checked 2026-08-21. 3 defect(s).

- Both opinions read are from circuits (3d and 7th) that recognize interactive-process good faith as independently significant. Whether every circuit agrees that a bad-faith failure to engage is independently actionable even where no reasonable accommodation existed at all was not checked -- some circuits reason from the process failure to an inference about what accommodation would have been found, rather than treating the process failure as freestanding, and a genuine split on the precise formulation was not ruled out here.
- 29 C.F.R. section 1630.2(o)(3) and the EEOC's interpretive guidance, which both opinions quote as the source of the interactive-process obligation, were not independently fetched -- every host that would carry the regulation itself was blocked.
- Neither case addresses the clause's separate factual claim that requests 'may be made to any manager or to the {{principalTitle}}' -- that is this document's own administrative choice, not a claim about what the law requires, and was not part of this check.

### `ea_overtime` — Overtime and Timekeeping

Checked 2026-08-21. 3 defect(s).

- Same omission as emp_overtime, worth restating in this clause's own terms because the audience is different: this is language in an offer letter, read by a new hire before they have worked a single shift, not an internal handbook policy read by someone already employed. Telling a new hire overtime 'will be paid whether or not it was approved' with no qualifier is the more consequential place for the gap to sit, since it sets an expectation the company may not always be able to meet -- specifically where the new hire never reports the hours through whatever channel the company actually uses.
- 29 U.S.C. section 207 and section 203(g) were not independently fetched -- every host that would carry them was blocked, same as for emp_overtime.
- The clause's deferral to 'the law of {{opStateLong}}' was not checked against any state's actual daily-overtime or other overtime rules -- it names no specific state rule to verify.

### `emp_i9` — Work Authorization

Checked 2026-08-21. 2 defect(s).

- The clause's citation (8 U.S.C. section 1324a only) does not name section 1324b, which is the actual statutory source of the documentary-uniformity claim. Whether this is worth flagging as a citation gap depends on whether a reader would understand '8 U.S.C. section 1324a' to cover the whole clause or just the verification-duty sentence -- not resolved here, but noted because this project's stated failure pattern is exactly 'the clause reproduces something true and cites the wrong or incomplete provision.'
- Robison's discrimination-requirement holding was for the pre-1996 version of section 1324b(a)(6); the opinion states the 1996 amendment made the discrimination requirement express rather than changing it, and the court read the requirement into the earlier text too -- so the current text should hold a fortiori, but the current (post-1996) statutory text was not independently fetched to confirm the amendment reads the way the opinion describes it, since every host carrying it directly is blocked.

### `hb_i9` — Work Authorization

Checked 2026-08-21. 2 defect(s).

- Same citation gap as emp_i9: the clause's only citation (8 U.S.C. section 1324a) does not name section 1324b, the actual source of the documentary-uniformity claim.
- Same unconfirmed premise as emp_i9: Robison's discrimination-requirement holding construed the pre-1996 statute; the current text was not independently fetched to confirm the 1996 amendment reads the way the opinion describes.

### `hb_timekeeping` — Timekeeping

Checked 2026-08-21. 1 defect(s).

- The clause says the employee's estimate 'will generally be accepted,' which reads as though the estimate is simply credited. Mt. Clemens actually describes a two-step burden-shift: the employee must first produce evidence sufficient to support 'a matter of just and reasonable inference' as to the amount of work performed, and only then does the burden shift to the employer to 'come forward with evidence of the precise amount of work performed or with evidence to negative the reasonableness of the inference.' An employer that shows up with contrary evidence can defeat or narrow the employee's estimate -- the clause gives the reader no hint that the employer retains this rebuttal opportunity, which matters most to the audience actually reading a handbook (the employer), since it understates the extent to which good contrary evidence, even short of full records, can still limit exposure.

