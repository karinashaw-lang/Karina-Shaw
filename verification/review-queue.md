# Review queue

## Sampling result

34 clauses have been checked against sources. **33 of them (97%) are confirmed defective** —
they omit a requirement the sources describe, misstate its scope, or cite the wrong provision.

At 95% confidence, **at least 87% of the corpus is defective** — around 312 of 360 clauses,
with a point estimate near 349.

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
`tools/lint.mjs` implements one detector per taxonomy entry and flags **112 of 360 clauses**.

| Detector | Flagged | Predicts |
|---|---:|---|
| `threshold-without-lookback` | 38 | omitted-qualifier |
| `penalty-without-cap` | 12 | overstated-consequence |
| `scope-test-single-conjunct` | 0 | overstated-scope |
| `form-not-named` | 31 | omitted-requirement |
| `deadline-without-trigger` | 9 | omitted-qualifier |
| `notice-duty-single-citation` | 15 | miscitation |
| `absolute-without-exception` | 27 | omitted-qualifier |

**Read this with the caveat it deserves.** The detectors were written after seeing the nine sampled clauses,
so scoring them against those same nine measures fit, not predictive accuracy. The 88% recall and 88% precision
that scoring reports are optimistic and rest on n=9. What the exercise does establish is that the taxonomy is
mechanically expressible — the patterns are real and detectable rather than a narrative imposed on the sample.
Treat a flag as "look here first", never as a verdict. A held-out sample is needed for an honest error rate.

360 of 360 clauses are below the release gate `primary-verified` and cannot be drafted.

Ordered by expected cost of being wrong: severity, whether the clause is drafted automatically or merely suggested,
whether it is in the jurisdiction being led with, whether it asserts a specific provision, and how far it sits from the gate.

## By verification level

| Level | Clauses | Meaning |
|---|---:|---|
| `unsourced` | 249 | Drafted from model knowledge with no citation attached. No independent basis exists for anything it asserts. |
| `single-source` | 70 | One citation is asserted, and nothing has checked that the cited provision says what the clause says it says. |
| `multi-cited` | 41 | More than one citation is asserted. Still self-asserted — several citations written by one author are not corroboration. |
| `search-corroborated` | 0 | The assertion matched a web search summary drawing on two or more independent sources, with URLs and a check date recorded. No source document was opened and no primary text was read. This is a lead for a reviewer, not a verification. |
| `corroborated` | 0 | Two or more independent secondary sources were opened and read, and each was recorded with a URL and a date. The primary text was still not checked. This sits BELOW the release gate: secondary sources agreeing with each other is not two primary sources. |

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
| 1 | `can_wtpa` — Wage Theft Prevention Act Notice | ca-notices | critical | `multi-cited` | Cal. Lab. Code §2810.5 |
| 2 | `can_harassment_training` — Harassment Prevention Training | ca-notices | critical | `multi-cited` | Cal. Gov. Code §12950.1 |
| 3 | `b83_instructions` — Filing Instructions | election-83b | critical | `multi-cited` | Treas. Reg. §1.83-2 | 26 U.S.C. §83(b) |
| 4 | `can_lactation` — Lactation Accommodation Policy | ca-notices | critical | `multi-cited` | Cal. Lab. Code §§1030–1034 | Cal. Lab. Code §226.7 | IWC Wage Order No. 4-2001 §12 |
| 5 | `emp_finalpay` — Final Pay Timing | employment | critical | `multi-cited` | Cal. Lab. Code §§201–203 |
| 6 | `msa_ca_auto_renew` — California Automatic Renewal Requirements | msa | critical | `multi-cited` | Cal. Bus. & Prof. Code §§17600–17606 |
| 7 | `can_heat` — Heat Illness Prevention | ca-notices | critical | `single-source` | 8 C.C.R. §3395 |
| 8 | `cal_ca_soi` — California Statement of Information | compliance-calendar | critical | `multi-cited` | Cal. Corp. Code §1502 | Cal. Corp. Code §17702.09 | Cal. Corp. Code §2204 | Cal. Corp. Code §2205 | Cal. Corp. Code §17713.09 | Cal. Rev. & Tax. Code §19141 | Cal. Rev. & Tax. Code §23304.1 |
| 9 | `can_edd` — EDD Employer Registration | ca-notices | critical | `multi-cited` | Cal. Unemp. Ins. Code §1086 | Cal. Unemp. Ins. Code §675 | Cal. Unemp. Ins. Code §1088 | Cal. Unemp. Ins. Code §1088.5 | Cal. Unemp. Ins. Code §1735 |
| 10 | `emp_meal` — Meal Period Policy | employment | critical | `multi-cited` | Cal. Lab. Code §512 | Cal. Lab. Code §226.7 | IWC Wage Order No. 4-2001 §11 |
| 11 | `emp_rest` — Rest Period Policy | employment | critical | `multi-cited` | IWC Wage Order No. 4-2001 §12 | Cal. Lab. Code §226.7 |
| 12 | `hb_ca_jury_voting` — Jury, Witness, and Voting Leave | handbook | critical | `multi-cited` | Cal. Lab. Code §230 | Cal. Elec. Code §§14000–14004 | 29 C.F.R. §541.602 |
| 13 | `hb_meal_rest` — Meal and Rest Periods | handbook | critical | `multi-cited` | Cal. Lab. Code §512 | Cal. Lab. Code §226.7 | IWC Wage Order No. 4-2001 §§11–12 |
| 14 | `ic_ca_freelance` — Freelance Worker Protection Act | contractor-agreement | critical | `multi-cited` | Cal. Bus. & Prof. Code §§18100–18107 | Cal. Lab. Code §2778 |
| 15 | `msa_ca_indemnity_construction` — California Anti-Indemnity Limits | msa | critical | `multi-cited` | Cal. Civ. Code §2782 | Cal. Civ. Code §2782.05 |
| 16 | `hb_ca_lactation_break` — Lactation Breaks | handbook | critical | `multi-cited` | Cal. Lab. Code §§1030–1034 | Cal. Lab. Code §226.7 |
| 17 | `msa_ca_925` — California Choice of Law Limits | msa | critical | `multi-cited` | Cal. Lab. Code §925 | Cal. Civ. Code §1646.5 | Cal. Civ. Code §1646 |
| 18 | `cal_ca_prop65_ops` — Proposition 65 Review | compliance-calendar | recommended | `multi-cited` | Cal. Health & Safety Code §25249.6 | Cal. Health & Safety Code §25249.11 | Cal. Health & Safety Code §25249.7 |
| 19 | `msa_ca_prop65` — Proposition 65 Warnings | msa | recommended | `multi-cited` | Cal. Health & Safety Code §25249.6 | Cal. Health & Safety Code §25249.11 | Cal. Health & Safety Code §§25249.7, 25249.10 |
| 20 | `ea_ca_release` — Release and Section 1542 Waiver | employment-agreement | recommended | `multi-cited` | Cal. Civ. Code §1542 | Cal. Lab. Code §206.5 | Cal. Lab. Code §5001 | Cal. Unemp. Ins. Code §1342 | Cal. Gov. Code §12964.5 |
| 21 | `can_fair_chance` — Fair Chance Act Procedure | ca-notices | critical | `multi-cited` | Cal. Gov. Code §12952 |
| 22 | `msa_ca_release` — Section 1542 Waiver in Settlements | msa | recommended | `multi-cited` | Cal. Civ. Code §1542 | Cal. Civ. Code §1541 | Cal. Civ. Code §3513 |
| 23 | `can_harassment_policy` — Written Harassment and Discrimination Policy | ca-notices | critical | `single-source` | 2 C.C.R. §11023 |
| 24 | `cal_soi` — California Statement of Information | compliance-calendar | critical | `multi-cited` | Cal. Corp. Code §1502 | Cal. Corp. Code §17702.09 | Cal. Corp. Code §2204 | Cal. Corp. Code §2205 | Cal. Rev. & Tax. Code §19141 | Palm Valley Homeowners Assn. v. Design MTC (2000) 85 Cal.App.4th 553 |
| 25 | `ea_ca_925` — California Forum and Choice of Law | employment-agreement | critical | `multi-cited` | Cal. Lab. Code §925 |

## Clauses checked and found defective

36 clause(s) have been checked against sources and found to omit or misstate a requirement.
These sit at the top of the queue: a clause known to be wrong is more dangerous than one merely unverified,
because it reads as complete.

### `can_wtpa` — Wage Theft Prevention Act Notice

Checked 2026-08-19. 4 defect(s).

- No decision construing §2810.5 was found on CourtListener. The one hit was a passing reference in Turrieta v. Lyft. The section appears unconstrued, so every ambiguity in it is open.
- §2810.5(a)(4) and (d) require an employer of an H-2A agricultural worker to give a separate Spanish-language section describing a long list of additional rights, using the Labor Commissioner's template, from 15 March 2024. It was read and is not carried, because the corpus is not aimed at agricultural employers. An agricultural employer following this clause would be short of the section.
- §2810.5(a)(1)(J) lets the Labor Commissioner add any other information deemed material and necessary. The clause states the statutory list and notes the template; it cannot state what the Labor Commissioner has added, and this session did not open the Labor Commissioner's published template.
- No penalty for failing to give the notice is stated in §2810.5 itself and none was researched. The clause states a duty with no consequence attached.

### `can_harassment_training` — Harassment Prevention Training

Checked 2026-08-19. 4 defect(s).

- The record-retention period is carried behind an explicit NOT VERIFIED marker. It is a regulation of the Civil Rights Department and govt.westlaw.com, the publisher of the California Code of Regulations, returns HTTP 403 at this environment's egress proxy. calcivilrights.ca.gov is reachable but is the agency, not the publisher of the regulation, and it was not used as a substitute for the text.
- No decision construing §12950.1 was found on CourtListener. The section appears unconstrued.
- §12950.1(l) allows an employer in the construction industry with a multiemployer collective bargaining agreement to satisfy the requirement by verifying training received within the past two years elsewhere. It was read and is not carried, because the clause is a general notices clause; a construction employer is being held to more than the section requires.
- §12950 — the separate obligation to distribute an information sheet or poster on sexual harassment — was not read and is not addressed. It is a different section with a different duty and a reader may assume this clause covers it.

### `b83_instructions` — Filing Instructions

Checked 2026-08-19. 4 defect(s).

- The clause previously said the election must be "postmarked" within thirty days. Treas. Reg. §1.83-2(b) says the election shall be "filed" not later than 30 days after transfer, and §1.83-2(c) says it is made by filing one copy with the internal revenue office where the taxpayer files their return. The mailbox rule that turns a postmark into a filing date is Internal Revenue Code §7502, which was NOT read for this rebuild. The rebuilt body says to send it in a way that produces a dated record and does not assert that a postmark is a filing.
- The clause previously said "There is no procedure to cure a late filing." That is stated here on the narrower and verified ground that the 30-day period is fixed by §83(b)(2) of the statute rather than by regulation. Whether discretionary relief under Treas. Reg. §301.9100 is unavailable for that reason was not verified — §301.9100 was not read.
- Form 15620 was read as a PDF from irs.gov, which is the agency and not a publisher of law. Its instruction text extracted only partially, and the extracted portions confirm the where-to-file rule and that the form is an alternative to a written statement. Its "When to File" paragraph did not extract cleanly and was not relied on.
- State law was not considered. A California taxpayer may have a separate state election or filing obligation and nothing here addresses it.

### `can_lactation` — Lactation Accommodation Policy

Checked 2026-08-19. 3 defect(s).

- No California decision construing Labor Code §§1030–1034 was found on CourtListener. The chapter appears to be unconstrued in the published case law, which means the statutory text is doing all the work and every ambiguity in it is open. In particular nothing decides what "seriously disrupt the operations of the employer" means in §1032, and that is the exception an employer will reach for first.
- The clause does not state the agricultural-employer safe harbour in §1031(g) or the multitenant and multiemployer worksite provisions in §1031(f), both of which were read. They were left out as too situational for a general notices clause, which means an agricultural or construction employer following this clause is being held to more than the section requires.
- The interaction between the §226.7 premium and the §1033(c) civil penalty was not researched. The clause states both; whether both are recoverable for the same denial is not decided by anything read here.

### `emp_finalpay` — Final Pay Timing

Checked 2026-08-19. 3 defect(s).

- The good-faith-dispute rule is stated in the clause on the authority of Naranjo (2024), which describes it as "long established law" and cites In re Trombley, Barnhill and 8 C.C.R. §13520. The regulation that actually defines a good faith dispute could not be read: the publisher of the California Code of Regulations, govt.westlaw.com, returns HTTP 403 at this environment's egress proxy. The clause therefore states that a good faith dispute defeats wilfulness without stating what makes a dispute good faith.
- Labor Code §201 also carries a state-employer deferral scheme in subdivisions (b) to (d) that was read and deliberately not carried, on the ground that no user of this corpus is the State of California. If that assumption is wrong the clause is incomplete for such an employer.
- The sections listed for the industry exceptions were identified from §203(a)'s own cross-references and from §201.7; §§201.3, 201.5, 201.6 and 201.9 were seen in the article listing but their operative deadlines were not read in full, so the clause names them rather than stating their rules.

### `msa_ca_auto_renew` — California Automatic Renewal Requirements

Checked 2026-08-19. 3 defect(s).

- The clause is inserted whenever the agreement auto-renews and the counterparty is Californian. Because the article reaches only consumers, that condition fires the clause for business-to-business agreements it does not govern. The rebuilt body says so in its first sentence rather than changing the condition, which is an engine change nobody has approved.
- The clause states that a business complying in good faith is not subject to civil remedies (§17604(b)). No decision construing that safe harbour was read, and it is the kind of provision whose scope is decided by case law rather than text.
- The interaction between this article and the federal Restore Online Shoppers' Confidence Act, and any FTC negative-option rule, was not researched. A national subscription business needs both.

### `can_heat` — Heat Illness Prevention

Checked 2026-08-15. 3 defect(s).

- The clause asserts the indoor obligation but cites only 8 C.C.R. §3395, which governs OUTDOOR places of employment. The indoor duty lives in §3396. This is the same shape as the confirmed defect in ipa_state_carveout: a duty asserted under the number of a neighbouring section, so a reader who follows the citation to check the indoor rule will not find it there.
- Section 3395 applies to outdoor places of employment. The clause opens with an unconditional "maintain a written heat illness prevention plan", giving an indoor-only employer no way to tell which standard applies to it.
- The triggers are stated as "the regulatory threshold" and "the applicable trigger" rather than as numbers. That is defensible drafting for figures that move, but it means the clause cannot be checked against the source without going to the source.

### `cal_ca_soi` — California Statement of Information

Checked 2026-08-19. 3 defect(s).

- The LLC suspension path was not fully traced. §17713.09 gives the LLC delinquency, certification and penalty route and it matches §2204 almost word for word, but no LLC counterpart to §2205's suspension mechanism was read. The rebuilt body states the suspension sequence for corporations only. An LLC reader is told the penalty route and no suspension route, which is narrower than the law may be and is deliberately narrow rather than guessed.
- Whether a suspended LLC suffers the same litigation disability as a suspended corporation was not verified and is not asserted.
- This clause and cal_soi remain near-duplicates covering the same sections for different documents. Both have now been rebuilt from the same primary text, but they were rebuilt in separate passes and no one has compared the two bodies line by line.

### `can_edd` — EDD Employer Registration

Checked 2026-08-19. 3 defect(s).

- The clause names the DE 9 and DE 9C in its previous form and this rebuild removed those form numbers, because §1088 describes a report of contributions, a quarterly return and a report of wages and does not name forms. The form numbers are correct as far as this session knows, but they are an EDD administrative matter and edd.ca.gov was not opened for this rebuild.
- The deposit schedule for withholding is set by Unemp. Ins. Code §13021, which was not read. The clause says 'on the assigned schedule', which is accurate and empty.
- This clause and emp_ca_registration are near-duplicates. emp_ca_registration is unsourced and was not rebuilt here; the two will now disagree.

### `emp_meal` — Meal Period Policy

Checked 2026-08-19. 3 defect(s).

- Wage Order No. 4-2001 was read for the meal-period provision because it is the order that covers professional, technical, clerical and mechanical occupations. The clause is inserted for every California employer regardless of industry, and the other sixteen orders were not read. An employer under Order 5, 7, 11, 12 or 16 may owe something different, and this clause does not say so.
- The clause states the premium as owed "for that workday" without resolving whether a meal violation and a rest violation on the same day are separately payable. That question was not researched here.
- Whether a meal-period waiver has to be in writing was not resolved. Section 512(a) and Wage Order 4 §11(A) both say "mutual consent" and neither requires a writing; the written-agreement requirement in the section applies to on-duty meal periods. The clause follows the text, but a reader may take the silence as permission to rely on an oral waiver, which no source read here endorses.

### `emp_rest` — Rest Period Policy

Checked 2026-08-19. 3 defect(s).

- The previous citation named "IWC Wage Order (industry-specific)" — a body of law with no provision inside it, so nothing could be looked up. It has been replaced with Order No. 4-2001 §12, which is the order covering professional, technical, clerical and mechanical occupations. That is a real provision but it is not necessarily the reader's order: the clause is inserted for every California employer and the other sixteen orders were not read.
- The sentence about not combining rest with meal periods, and not trading a rest period for an early departure, is carried with an explicit NOT VERIFIED marker. It is standard practice and it follows from the "middle of each work period" language, but no primary text read for this rebuild imposes it.
- Whether the ten-minute period runs from when the employee reaches the break area, and whether the employer must relieve the employee for the walking time, was not researched and is not addressed.

### `hb_ca_jury_voting` — Jury, Witness, and Voting Leave

Checked 2026-08-19. 3 defect(s).

- The previous citation was "Cal. Lab. Code §§230, 14350–14353". There is no Labor Code §14350; the voting leave provisions are Elections Code §§14000–14004. Every voting assertion in the clause was cited to a section of the wrong code, and the exempt-salary assertion was cited to the Labor Code when it comes from a federal regulation. Both have been re-cited.
- Labor Code §230 also protects a victim of crime or abuse who takes time off for relief or to appear, and requires reasonable accommodation for a victim of domestic violence, sexual assault or stalking. Those subdivisions were read and are not carried here because the corpus has a separate hb_ca_victim_leave clause, which was not examined for this rebuild and may or may not state them correctly.
- The clause says nothing about how a voting-leave dispute is enforced. Elections Code §§14000–14004 carry no express remedy that was found in the text read, and none was researched.

### `hb_meal_rest` — Meal and Rest Periods

Checked 2026-08-19. 3 defect(s).

- Order No. 4-2001 is the order read for this rebuild. The clause fires for any California operation, and the sixteen other orders — including the ones covering manufacturing, public housekeeping, agriculture and construction — were not read. A reader in one of those industries is being given Order 4's answer.
- The handbook voice states the on-duty meal period nowhere, because the corresponding employer-facing clause carries it. An employee whose job is one where the nature of the work prevents relief from duty will not learn from this clause that an on-duty meal period is lawful with a signed, revocable agreement.
- Whether an employee can recover both a meal premium and a rest premium for the same workday was not researched. The clause is drafted to read as though they are separate, which follows the text of §226.7(c), but no authority read here decides it.

### `ic_ca_freelance` — Freelance Worker Protection Act

Checked 2026-08-19. 3 defect(s).

- The "professional services" list in Lab. Code §2778(b)(2) runs from (A) to (O) and several entries carry their own conditions — marketing must be original and creative work depending primarily on the individual's invention, imagination or talent; freelance writing and the licensed trades have multi-part tests. The clause names representative categories and says the list is closed. It does not reproduce the conditions, so a hiring party cannot tell from this clause whether a particular engagement is inside the list.
- No decision construing §§18100–18107 was found on CourtListener. The Act took effect on 1 January 2025 and appears to be entirely unconstrued.
- Whether a contract entered into before 1 January 2025 and amended (as opposed to renewed) after that date comes within the Act was not resolved. §18107 says 'entered into or renewed', which is narrower than the formula other California statutes use.

### `msa_ca_indemnity_construction` — California Anti-Indemnity Limits

Checked 2026-08-19. 3 defect(s).

- Sections 2782.1, 2782.2, 2782.5 and 2782.6 are named as exceptions to §2782(a) but their contents were not read in full; they were seen only in the Title 12 listing. A party relying on one of them gets no help from this clause.
- The residential-construction regime in §2782(d)-(i) was read and is not carried, beyond the statement that §2782.05 does not reach it. A residential builder or its subcontractor needs §2782(d), which has its own standard (negligence, not active negligence), its own 90-day election period, and its own damages provisions.
- Whether the §2782.05(c) choice-of-law override survives a forum outside California was not researched. The section says California law applies; it does not say a foreign court must apply it.

### `hb_ca_lactation_break` — Lactation Breaks

Checked 2026-08-19. 3 defect(s).

- The clause tells the employee they are owed an hour of pay "on the same basis as a missed rest period", and hb_meal_rest now carries Ferra's construction of that measure. If hb_meal_rest is ever edited without this clause being re-read, the cross-reference will silently carry whatever hb_meal_rest then says.
- No decision construing §§1030–1034 was found. The §1032 "seriously disrupt the operations" exception is stated to the employee with no gloss on what it means, because nothing read here supplies one.
- The clause states the §226.7 premium and the §1033(c) civil penalty together without saying whether both are available for the same denial. That was not researched.

### `msa_ca_925` — California Choice of Law Limits

Checked 2026-08-19. 3 defect(s).

- The clause previously asserted that §925 reaches "in practice, any misclassified contractor". Nothing read for this rebuild supports that, and the rebuilt body now says so expressly rather than asserting it. It remains an open question a reader may need answered.
- Whether §925 is preempted by the Federal Arbitration Act where the covered provision is an arbitration clause was not researched and is not addressed. For a commercial agreement that arbitrates, that is the question that decides whether the clause matters.
- Civil Code §1646.5 permits choosing California law. Nothing read here validates a choice of another state's law in a California-connected commercial contract, which is the more common drafting problem. The clause states the limit and does not answer the question.

### `cal_ca_prop65_ops` — Proposition 65 Review

Checked 2026-08-19. 3 defect(s).

- The annual cadence is this corpus's operational choice, not a statutory one. Nothing in chapter 6.6 requires a periodic review, and no source read here says annually is enough. The clause presents a housekeeping rhythm alongside statutory rules and a reader will not distinguish them.
- The Article 6 safe-harbour regulations were never opened: govt.westlaw.com returns HTTP 403 and the agency hosts return a firewall challenge. What a "correctly worded" warning is therefore cannot be stated, which is most of what this review is supposed to check.
- The clause tells the reader to check placement on the product page. The regulation that governs internet purchases is in Article 6 and was not read, so the instruction has no verified content behind it.

### `msa_ca_prop65` — Proposition 65 Warnings

Checked 2026-08-19. 3 defect(s).

- The Article 6 safe-harbour regulations (27 C.C.R. §25600 and following, including §25600.2 on allocation and the internet-purchase provisions) could not be read from any publisher. govt.westlaw.com, the publisher of the California Code of Regulations, returns HTTP 403 at this environment's egress proxy; oehha.ca.gov and p65warnings.ca.gov, the promulgating agency's own sites, return an Incapsula firewall challenge rather than the document. Everything this clause says about the regulations is carried behind an explicit NOT VERIFIED marker and rests on the Court of Appeal's quotation of §25600.2 in Lee v. Amazon.com — a court quoting a regulation is strong corroboration and is not the text.
- The clause is conditioned on industry being ecommerce. Proposition 65 is not an ecommerce statute; a manufacturer or a physical retailer with ten or more employees is equally covered. The condition was not changed by this rebuild and it means the clause will not fire for parties who need it.
- The internet-purchase warning rules — where a warning must appear relative to the purchase button, and whether a warning delivered with the product suffices — are in Article 6 and were not read. The clause tells the drafter to allocate responsibility for placement "including on the product page" without being able to say what compliant placement is.

### `ea_ca_release` — Release and Section 1542 Waiver

Checked 2026-08-19. 3 defect(s).

- The previous body said a release cannot waive "the right to file with or participate in an agency investigation". Gov. Code §12964.5(a)(1)(A)(ii) forbids requiring that release in exchange for a raise or bonus or as a condition of employment or continued employment. It is not a blanket rule about separation agreements: §12964.5(b)(3) permits a general release of all claims in a separation agreement, and §12964.5(d)(1) takes negotiated settlements of filed claims outside the section entirely. The rebuilt clause states the separation-agreement rules and does not repeat the blanket claim, but it also does not resolve what an employer may ask for at the point of hire, which is where the prohibition actually bites.
- Federal law was not read. An age-discrimination waiver in a separation agreement is governed by the Older Workers Benefit Protection Act, whose consideration and revocation periods are longer than the five business days §12964.5(b)(4) requires. An employer following this clause for an employee over forty would be short.
- Code of Civil Procedure §1001, which restricts confidentiality in settlements of certain harassment and discrimination claims, was not read. It overlaps §12964.5 and may impose more.

### `can_fair_chance` — Fair Chance Act Procedure

Checked 2026-08-19. 2 defect(s).

- The advertisement prohibition and the receipt-timing rule are not in §12952. They are carried in the body as explicitly unverified because the official publisher of the California Code of Regulations (govt.westlaw.com) returns HTTP 403 at this environment's egress proxy and the regulation text was never opened.
- No decision construing §12952 was found. The statutory text is doing all the work and any ambiguity in it is unresolved.

### `msa_ca_release` — Section 1542 Waiver in Settlements

Checked 2026-08-19. 3 defect(s).

- Civil Code §3513 was read for the proposition that the benefit of §1542 is waivable, since §1542 itself says nothing about waiver. No decision was read that expressly ties §1542's waivability to §3513, so that link is this rebuild's reasoning from the two texts rather than something a court has been seen to hold.
- Winet is a 1992 Court of Appeal decision and quotes §1542 in its pre-2019 wording. It is relied on only for the conscious-understanding standard it takes from Casey v. Proctor, which turns on the purpose of the section rather than on the amended words. Casey itself was not opened.
- Whether a §1542 waiver reaches claims that had not yet accrued at the date of the release, as opposed to accrued claims the party did not know about, was not researched and is not addressed.

### `can_harassment_policy` — Written Harassment and Discrimination Policy

Checked 2026-08-15. 2 defect(s).

- The regulation applies to employers with five or more employees. The clause states the duty unconditionally, so a smaller employer reads a binding obligation it does not have and gets no signal when it crosses the threshold.
- The prescribed contents also include instructions to supervisors on reporting complaints, and identification of the Civil Rights Department and the federal EEOC as additional avenues for an employee. The clause lists six required elements and omits both, so a policy built from the clause is short of the regulation while appearing complete.

### `cal_soi` — California Statement of Information

Checked 2026-08-19. 2 defect(s).

- The LLC suspension path was not traced. §17713.09 supplies the LLC delinquency and penalty route; the LLC counterpart to §2205 was not read, so the body states the suspension sequence for corporations only and asserts none for LLCs.
- cal_ca_soi is a near-duplicate of this clause and was not rebuilt. The two now rest on different work and will disagree until it is.

### `ea_ca_925` — California Forum and Choice of Law

Checked 2026-08-19. 2 defect(s).

- The clause states §925 and stops. It does not tell the reader what happens if the employee never invokes it — the provision is voidable, not void, so an unexercised right leaves the contrary forum clause standing.
- No published decision construing "primarily resides and works" was found. For a remote employee who resides outside California but works into it, or the reverse, the clause states the test without resolving it.

### `ipa_state_carveout` — Statutory Invention Carve-Out

Checked 2026-08-19. 2 defect(s).

- The clause fires when opState is CA or TX but states California law only. No Texas provision was read and none is cited; for a Texas operation this notice recites law that does not govern it. Unresolved.
- Whether §§2870-2872 reach a founder who is not an employee was not resolved from primary text. The body now names the question instead of assuming the answer.

### `charter_ny_publication` — Publication Requirement

Checked 2026-08-15. 2 defect(s).

- The two newspapers must be one daily and one weekly. The clause says only 'two newspapers', which reads as though any two designated papers will do.
- The Certificate of Publication must have the affidavits of publication from each newspaper attached. The clause does not mention the affidavits, which are the part a filer has to collect from the papers.

### `emp_ca_registration` — California Employer Registration Checklist

Checked 2026-08-15. 2 defect(s).

- Electronic filing through e-Services for Business is mandatory absent an approved waiver. Neither clause in this pair says so.
- The clause carries no citation at all while asserting five separate legal duties. Every assertion here is unverifiable as filed, because there is nothing recorded to verify it against.

### `can_calwarn` — Cal-WARN Notice

Checked 2026-08-19. 2 defect(s).

- Article 2 of the chapter (§1410 and following) sets separate requirements for grocery establishments. It was not read and the clause does not mention it.
- The clause is gated on rule ca_75plus, which was not re-examined against §1400.5(a)'s "employs, or has employed within the preceding 12 months" test. If that rule reads current headcount only, the clause will not fire for an employer that has shrunk below 75 within the year, though the statute still covers it.

### `can_local_sd` — San Diego Ordinances

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (S.D. Mun. Code ch. 3, art. 9), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

### `can_local_la` — Los Angeles Ordinances

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (L.A. Mun. Code), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

### `can_local_oak` — Oakland Ordinances

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (Oakland Mun. Code ch. 5.92, 5.93), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

### `can_local_sj` — San Jose Ordinances

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (S.J. Mun. Code ch. 4.100, 4.101), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

### `can_local_sf` — San Francisco Ordinances

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (S.F. Admin. Code; S.F. Police Code), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

### `cal_ny` — New York Publication Deadline

Checked 2026-08-15. 1 defect(s).

- The parent defect propagated: the two papers are not interchangeable — the county clerk designates one daily and one weekly. "Two designated newspapers" reads as a free choice of any two, so a founder can publish in two dailies, satisfy this clause, and fail the statute. Confirmed in charter_ny_publication and repeated verbatim in substance here.

### `cal_tx_franchise` — Texas Franchise Tax and Public Information Report

Checked . 1 defect(s).

- Every citation on this clause names a body of law without a provision inside it (Tex. Tax Code ch. 171), so there is nothing specific to look up. This clause cannot be verified as filed no matter what source access is granted — it has to be re-cited by somebody who knows which provision it was relying on. Not repaired here: supplying a section number from memory is the failure this corpus is full of.

