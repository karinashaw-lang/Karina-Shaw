# Classification review packet

One field decides which ladder every clause is graded on, and on all 360 clauses it is
still `heuristic-unreviewed`. Until a person decides it, both release gates refuse
everything — the authority gate and the drafting gate alike. This is the cheapest
unblocking step in the repo: 360 binary questions, no statutes, no source texts.

**The question, for each clause:** does this clause tell the reader what the law requires
(**authority**), or what the parties have agreed (**drafting**)?

Nothing in this packet classifies anything. Each clause is listed with the textual evidence
found in its own body — facts you can check by looking, like "the body cites a numbered
provision" — and with what that evidence says about the label it already carries. The order
puts the misrouting that ships a defect first and the misrouting that only wastes time last.

## Why the direction matters

| Recorded | Evidence says | Consequence |
|---|---|---|
| drafting | authority | **Dangerous.** Reviewed for commercial sense by someone not looking for a missing legal requirement. |
| authority | drafting | **Stuck.** Waits forever for a statute that does not exist. |

## How to record the result

Fill the `decision` column of `verification/classification-review.csv` with `authority` or
`drafting` (leave blank to skip — blank rows are skipped, never defaulted), then:

```
node templates/tools/classification-packet.mjs --apply verification/classification-review.csv \
  --by "Full Name" --on YYYY-MM-DD
```

That writes `assertsLaw`, sets `classifiedBy: "reviewed"`, and records who decided and when.
A reviewer name that is a team, a tool, or a model is refused, and a malformed decision
aborts the whole run without writing anything.

## Where the corpus stands

| Band | Clauses | What it means |
|---|---|---|
| Recorded as a term, reads like a statute | 7 | `dangerous` |
| Both kinds of signal present | 10 | `ambiguous` |
| No signal either way | 232 | `unevidenced` |
| Recorded as law, reads like a term | 12 | `stuck` |
| Evidence agrees with the recorded label | 99 | `consistent` |


---

# Recorded as a term, reads like a statute

7 clause(s). These are the ones that matter. A clause stating what the law requires, routed to a review that asks whether the commercial term is sensible. Nobody on that track checks for a missing requirement, and omission is this corpus's dominant defect. Decide these first.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `consent_adopt` | Initial Consent | drafting | 69% | the body names a government body a filing or notice goes to |
| `gov_formation` | Governing document | drafting | 69% | the body names a government body a filing or notice goes to |
| `fq_statement` | Foreign Qualification | drafting | 52% | the body names a government body a filing or notice goes to |
| `cal_payroll` | Compliance Calendar | drafting | 39% | the body names a government body a filing or notice goes to |
| `cal_ein` | Compliance Calendar | drafting | 69% | the body names a government body a filing or notice goes to |
| `consent_ein` | Initial Consent | drafting | 69% | the body names a government body a filing or notice goes to |
| `can_benefit_notices` | California Employer Compliance Set | drafting | 6% | the body names a government body a filing or notice goes to |


### `consent_adopt` — Adoption of Governing Documents

Initial Consent · **critical** · auto · appears in 69% of documents

```
The {{ownerTerm}} adopt the {{govDoc}} attached hereto, effective {{date}}, and ratify the filing of the {{charterDoc}} with the Secretary of State of {{formStateLong}} and all acts taken by the organizer or incorporator in connection with that filing.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `gov_formation` — Formation and Term

Governing document · **critical** · auto · appears in 69% of documents

```
This {{govDoc}} is entered into as of {{date}} (the “Effective Date”) by and among the Company and {{founderList}} (each a “{{ownerSing}}” and collectively the “{{ownerTerm}}”). The Company was formed by filing a {{charterDoc}} with the Secretary of State of {{formStateLong}}.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `fq_statement` — Application for Authority

Foreign Qualification · **critical** · auto · appears in 52% of documents

```
{{company}}, a {{formStateLong}} {{entityLong}}, applies for authority to transact business in {{opStateLong}} and designates the Secretary of State of {{opStateLong}} as its agent for service of process in any action arising out of business transacted in that state.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `cal_payroll` — Payroll Tax Deposits and Filings

Compliance Calendar · **critical** · auto · appears in 39% of documents

```
Once the Company has employees it must deposit withheld income and FICA taxes on the schedule the IRS assigns, file Form 941 quarterly and Form 940 annually, and meet the equivalent {{opStateLong}} obligations. Unremitted trust fund taxes can be assessed personally against the officer appointed in <<xr:consent_officers>>.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `cal_ein` — EIN and Tax Registration

Compliance Calendar · **recommended** · auto · appears in 69% of documents

```
Apply for an EIN on IRS Form SS-4 before opening the bank account authorized in <<xr:consent_bank>>. Then register for {{opStateLong}} state tax accounts and, if hiring, unemployment insurance and workers’ compensation.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `consent_ein` — Tax Identification

Initial Consent · **recommended** · auto · appears in 69% of documents

```
The Company is authorized to apply for an Employer Identification Number on IRS Form SS-4 and to register for the state tax accounts required in {{opStateLong}}, as calendared in <<xr:cal_ein>>.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


### `can_benefit_notices` — State Benefit Notices and Pamphlets

California Employer Compliance Set · **critical** · auto · appears in 6% of documents

```
Distribute at hire: the State Disability Insurance and Paid Family Leave pamphlets, the workers' compensation rights notice and carrier information, the Civil Rights Department sexual harassment pamphlet, the paid sick leave notice, and the Company's written policies. Redistribute the disability and paid family leave notices when an employee takes a qualifying leave.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


---

# Both kinds of signal present

10 clause(s). The body carries law-facing and term-facing language at once. Which ladder it belongs on cannot be read off the text, which is exactly when a human is needed.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `msa_breach_notify` | Master Services Agreement | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `dpa_deletion` | Data Processing Addendum | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `msa_ca_925` | Master Services Agreement | authority | 4% | the body cites a numbered provision; the body operates on the instrument it sits in *(carries a citation)* |
| `msa_ca_unruh` | Master Services Agreement | authority | 2% | the body appeals to what the law requires; the body is written in terms of the two labelled parties *(carries a citation)* |
| `ea_ca_925` | Employment Agreement | authority | 6% | the body cites a numbered provision; the body operates on the instrument it sits in *(carries a citation)* |
| `nda_return` | Mutual NDA | authority | 18% | the body appeals to what the law requires; the body records what the parties agree between themselves |
| `dpa_assistance` | Data Processing Addendum | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `dpa_ca_deletion_chain` | Data Processing Addendum | authority | 2% | the body appeals to what the law requires; the body is written in terms of the two labelled parties *(carries a citation)* |
| `msa_ca_release` | Master Services Agreement | authority | 4% | the body cites a numbered provision; the body operates on the instrument it sits in *(carries a citation)* |
| `msa_marks` | Master Services Agreement | authority | 18% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |


### `msa_breach_notify` — Security Incident Notification

Master Services Agreement · **critical** · auto · appears in 9% of documents

```
The {{selfLabel}} shall notify the {{counterLabel}} without undue delay and in any event within seventy-two (72) hours of becoming aware of a [[security incident]] affecting the {{counterLabel}}’s data, provide the information reasonably needed to meet any notification obligation, and take prompt steps to contain and remediate. The {{selfLabel}} shall not make any public statement identifying the {{counterLabel}} without prior written consent unless required by law.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `dpa_deletion` — Return and Deletion

Data Processing Addendum · **critical** · auto · appears in 9% of documents

```
On termination, and at the {{counterLabel}}’s election, the {{selfLabel}} shall return or delete all personal data within {{cure}} days and certify deletion. Copies retained in backup media or required by law remain subject to this Addendum and shall be deleted on the {{selfLabel}}’s ordinary backup cycle.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `msa_ca_925` — California Choice of Law Limits

Master Services Agreement · **critical** · auto · appears in 4% of documents

```
Between businesses, a governing law clause is generally enforceable, and California expressly permits parties to a contract of at least a quarter million dollars to choose California law regardless of connection. That freedom does not extend to individuals: [[Labor Code §925|labor code 925]] makes a non-California forum or choice of law voidable at the election of any employee — and, in practice, of any misclassified contractor — who primarily works in California. Where individuals perform under this Agreement in California, do not rely on the selected forum to reach them.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `msa_ca_unruh` — Accessibility and Unruh Act Exposure

Master Services Agreement · **critical** · auto · appears in 2% of documents

```
The [[Unruh Act|unruh act]] provides statutory damages per violation plus attorney's fees for denial of equal access, and a federal ADA violation is a per se Unruh violation in California. Website and application accessibility claims are filed at high volume in this state. Where a Deliverable is a customer-facing interface, the {{selfLabel}} shall build to WCAG 2.1 AA or the standard stated in the Statement of Work, and the Parties shall allocate responsibility for remediation and for defense of any access claim rather than leaving it to the general indemnity in <<xr:msa_indemnity_mutual>>.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `ea_ca_925` — California Forum and Choice of Law

Employment Agreement · **critical** · auto · appears in 6% of documents

```
This agreement is governed by California law and any dispute is adjudicated in California. [[Labor Code §925|labor code 925]] makes a contrary forum or choice-of-law provision voidable at the {{workerLabel}}'s election for any employee who primarily works in California, unless they were individually represented by counsel in negotiating it. An employee who voids such a provision is entitled to recover their attorney's fees.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `nda_return` — Return or Destruction

Mutual NDA · **recommended** · auto · appears in 18% of documents

```
On written request, each Party shall return or destroy the other’s Confidential Information and confirm it has done so. A Party may retain copies required by law or held in routine backup systems, provided those copies remain subject to <<xr:nda_obligations>> for as long as they are retained.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `dpa_assistance` — Data Subject Requests

Data Processing Addendum · **recommended** · auto · appears in 9% of documents

```
The {{selfLabel}} shall promptly forward any request it receives from a data subject and shall not respond directly except to confirm the request has been forwarded. Taking into account the nature of the processing, the {{selfLabel}} shall provide reasonable assistance enabling the {{counterLabel}} to respond within the statutory period, including through self-service functionality where available.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `dpa_ca_deletion_chain` — Deletion Down the Chain

Data Processing Addendum · **recommended** · auto · appears in 2% of documents

```
On a consumer deletion request, the {{selfLabel}} shall delete the personal information and direct each subprocessor engaged under <<xr:dpa_subprocessors>> to do the same, unless a statutory exception applies. Maintain a record of the request, the action taken, and any exception relied on. Deletion obligations reach backups on the ordinary cycle as provided in <<xr:dpa_deletion>>.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `msa_ca_release` — Section 1542 Waiver in Settlements

Master Services Agreement · **recommended** · suggest · appears in 4% of documents

```
Any release given under or in connection with this Agreement shall expressly waive [[Civil Code §1542|section 1542]], quoting it in full, or it will not extend to claims the releasing party did not know or suspect to exist at the time — which is ordinarily the principal reason for taking the release.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


### `msa_marks` — Publicity and Trademarks

Master Services Agreement · **optional** · suggest · appears in 18% of documents

```
Neither Party may use the other’s name, logo, or marks in any public communication without prior written consent, except that the {{selfLabel}} may identify the {{counterLabel}} in a customer list on its website, and either Party may make disclosures required by law or by <<xr:nda_compelled>>.
```

**Recorded as:** authority · **evidence says:** conflicting

**Why it is here:** the body carries both law-facing and term-facing signals. Which ladder it belongs on cannot be read off the text.


---

# No signal either way

232 clause(s). Neither kind of language appears, so the label these already carry rests on nothing a reader can check. Most of the corpus is here. They are usually quick — the question is what the clause is for, not what it says.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `charter_name` | Charter filing | drafting | 69% | — |
| `charter_purpose` | Charter filing | authority | 69% | — |
| `charter_agent` | Charter filing | drafting | 69% | — |
| `cal_annual_report` | Compliance Calendar | drafting | 69% | — |
| `gov_units` | Governing document | drafting | 69% | — |
| `sched_a_ownership` | Schedules and Exhibits | drafting | 69% | — |
| `consent_issue_vesting` | Initial Consent | drafting | 59% | — |
| `ipa_assign` | Founder IP Assignment | drafting | 59% | — |
| `ipa_wfh` | Founder IP Assignment | authority | 59% | — |
| `vest_schedule` | Founder Vesting Agreement | drafting | 59% | — |
| `vest_repurchase` | Founder Vesting Agreement | drafting | 59% | — |
| `exh_a_prior` | Schedules and Exhibits | drafting | 59% | — |
| `cal_foreign` | Compliance Calendar | authority | 52% | — |
| `fq_agent` | Foreign Qualification | drafting | 52% | — |
| `fq_goodstanding` | Foreign Qualification | drafting | 52% | — |
| `gov_transfer` | Governing document | authority | 49% | — |
| `gov_buysell` | Governing document | drafting | 49% | — |
| `emp_atwill` | Employment Policy Set | drafting | 39% | — |
| `emp_classification` | Employment Policy Set | drafting | 39% | — |
| `emp_i9` | Employment Policy Set | authority | 39% | — *(carries a citation)* |
| `gov_vesting` | Governing document | drafting | 39% | — |
| `charter_organizer` | Charter filing | drafting | 34% | — |
| `charter_incorporator` | Charter filing | drafting | 34% | — |
| `charter_mgmt` | Charter filing | drafting | 34% | — |
| `charter_shares` | Charter filing | drafting | 34% | — |
| `consent_directors` | Initial Consent | drafting | 34% | — |
| `gov_capital` | Governing document | drafting | 34% | — |
| `gov_stock_issuance` | Governing document | drafting | 34% | — |
| `gov_voting` | Governing document | drafting | 34% | — |
| `gov_board` | Governing document | drafting | 34% | — |
| `cal_ca_annual_tax` | Compliance Calendar | authority | 31% | — *(carries a citation)* |
| `cal_ca_soi` | Compliance Calendar | authority | 31% | — *(carries a citation)* |
| `b83_election` | IRS Section 83(b) Election | authority | 20% | — *(carries a citation)* |
| `emp_ca_iipp` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `msa_liability_carveouts` | Master Services Agreement | drafting | 18% | — |
| `nda_exclusions` | Mutual NDA | drafting | 18% | — |
| `cal_de_franchise` | Compliance Calendar | authority | 17% | — *(carries a citation)* |
| `emp_meal` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `emp_rest` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `emp_pto` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `emp_finalpay` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `emp_noncompete_notice` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `cal_ca_seller_permit` | Compliance Calendar | authority | 10% | — *(carries a citation)* |
| `charter_ca_professional` | Charter filing | authority | 10% | — *(carries a citation)* |
| `gov_ca_2115` | Governing document | authority | 7% | — *(carries a citation)* |
| `emp_ca_local` | Employment Policy Set | drafting | 8% | — |
| `dpa_scope` | Data Processing Addendum | drafting | 9% | — |
| `consent_issue_plain` | Initial Consent | drafting | 10% | — |
| `consent_officers` | Initial Consent | drafting | 69% | — |
| `consent_bank` | Initial Consent | drafting | 69% | — |
| `gov_quorum` | Governing document | drafting | 69% | — |
| `gov_written_consent` | Governing document | drafting | 69% | — |
| `gov_fiduciary` | Governing document | drafting | 69% | — |
| `gov_books` | Governing document | drafting | 69% | — |
| `gov_amend` | Governing document | drafting | 69% | — |
| `gov_dissolution` | Governing document | drafting | 69% | — |
| `ea_position` | Employment Agreement | drafting | 9% | — |
| `ea_compensation` | Employment Agreement | drafting | 9% | — |
| `ea_equity` | Employment Agreement | drafting | 7% | — |
| `ea_prior_obligations` | Employment Agreement | drafting | 9% | — |
| `ea_termination` | Employment Agreement | drafting | 9% | — |
| `hb_welcome` | Employee Handbook | drafting | 9% | — |
| `hb_i9` | Employee Handbook | authority | 9% | — *(carries a citation)* |
| `hb_pay_schedule` | Employee Handbook | authority | 9% | — |
| `hb_timekeeping` | Employee Handbook | drafting | 9% | — |
| `hb_harassment` | Employee Handbook | drafting | 9% | — |
| `hb_leave_sick` | Employee Handbook | authority | 6% | — |
| `hb_leave_vacation` | Employee Handbook | authority | 9% | — |
| `hb_accommodation` | Employee Handbook | authority | 9% | — |
| `can_thresholds` | California Employer Compliance Set | authority | 6% | — |
| `can_wtpa` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_payscale_request` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_salary_history` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_postings` | California Employer Compliance Set | drafting | 6% | — |
| `can_iipp` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_wvpp` | California Employer Compliance Set | authority | 4% | — *(carries a citation)* |
| `can_harassment_training` | California Employer Compliance Set | authority | 5% | — *(carries a citation)* |
| `can_harassment_policy` | California Employer Compliance Set | authority | 5% | — *(carries a citation)* |
| `can_fair_chance` | California Employer Compliance Set | authority | 5% | — *(carries a citation)* |
| `can_lactation` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_workers_comp` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_calsavers` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `ea_ca_exempt` | Employment Agreement | authority | 3% | — *(carries a citation)* |
| `hb_ca_overtime` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_reporting_time` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_cfra` | Employee Handbook | authority | 5% | — *(carries a citation)* |
| `hb_ca_pdl` | Employee Handbook | authority | 5% | — *(carries a citation)* |
| `hb_ca_bereavement` | Employee Handbook | authority | 5% | — *(carries a citation)* |
| `can_paga` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_paga_cure` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_pay_equity` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_whistleblower` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `can_local_general` | California Employer Compliance Set | drafting | 4% | — |
| `hb_ca_oncall_travel` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_jury_voting` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_lactation_break` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `charter_ny_publication` | Charter filing | authority | 6% | — *(carries a citation)* |
| `cal_ny` | Compliance Calendar | authority | 6% | — *(carries a citation)* |
| `ea_classification` | Employment Agreement | drafting | 4% | — |
| `ea_overtime` | Employment Agreement | authority | 4% | — |
| `ic_scope` | Independent Contractor Agreement | authority | 5% | — |
| `ic_no_control` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_taxes` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_confidentiality` | Independent Contractor Agreement | authority | 5% | — |
| `hb_meal_rest` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `msa_ca_auto_renew` | Master Services Agreement | authority | 2% | — *(carries a citation)* |
| `msa_ca_indemnity_construction` | Master Services Agreement | authority | 1% | — *(carries a citation)* |
| `dpa_ca_service_provider` | Data Processing Addendum | authority | 2% | — *(carries a citation)* |
| `sow_ca_prevailing_wage` | Statement of Work | authority | 1% | — *(carries a citation)* |
| `can_heat` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `ic_ca_freelance` | Independent Contractor Agreement | authority | 1% | — *(carries a citation)* |
| `can_local_sf` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `can_local_la` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `can_local_sd` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `can_local_sj` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `can_local_oak` | California Employer Compliance Set | authority | 1% | — *(carries a citation)* |
| `consent_ip` | Initial Consent | drafting | 59% | — |
| `ipa_prior` | Founder IP Assignment | drafting | 59% | — |
| `ipa_confidential` | Founder IP Assignment | authority | 59% | — |
| `ipa_further` | Founder IP Assignment | drafting | 59% | — |
| `vest_transfer` | Founder Vesting Agreement | authority | 59% | — |
| `consent_qualify` | Initial Consent | drafting | 52% | — |
| `fq_name_availability` | Foreign Qualification | drafting | 52% | — |
| `fq_tax_registration` | Foreign Qualification | drafting | 52% | — |
| `gov_permitted_transfers` | Governing document | drafting | 49% | — |
| `gov_govlaw` | Governing document | drafting | 69% | — |
| `emp_offer` | Employment Policy Set | drafting | 39% | — |
| `emp_overtime` | Employment Policy Set | authority | 39% | — *(carries a citation)* |
| `emp_harassment` | Employment Policy Set | authority | 39% | — |
| `vest_accel` | Founder Vesting Agreement | drafting | 39% | — |
| `charter_dirliability` | Charter filing | authority | 34% | — |
| `gov_officers` | Governing document | drafting | 34% | — |
| `gov_distrib` | Governing document | drafting | 34% | — |
| `gov_allocations` | Governing document | authority | 34% | — |
| `cal_ca_casp` | Compliance Calendar | authority | 31% | — *(carries a citation)* |
| `cal_ca_fbn` | Compliance Calendar | authority | 31% | — *(carries a citation)* |
| `cal_ca_local_license` | Compliance Calendar | authority | 31% | — |
| `charter_duration` | Charter filing | drafting | 69% | — |
| `consent_fiscal` | Initial Consent | drafting | 69% | — |
| `gov_offices` | Governing document | drafting | 69% | — |
| `gov_drag` | Governing document | drafting | 29% | — |
| `gov_tag` | Governing document | authority | 29% | — |
| `charter_preferred` | Charter filing | drafting | 20% | — |
| `consent_83b_ack` | Initial Consent | authority | 20% | — |
| `gov_solemember` | Governing document | drafting | 20% | — |
| `msa_term_insolvency` | Master Services Agreement | drafting | 18% | — |
| `msa_survival` | Master Services Agreement | drafting | 18% | — |
| `msa_force_majeure` | Master Services Agreement | drafting | 18% | — |
| `nda_permitted` | Mutual NDA | drafting | 18% | — |
| `sow_expenses_sow` | Statement of Work | drafting | 18% | — |
| `emp_paystub` | Employment Policy Set | authority | 15% | — *(carries a citation)* |
| `cal_ca_prop65_ops` | Compliance Calendar | authority | 10% | — *(carries a citation)* |
| `msa_liability_supercap` | Master Services Agreement | drafting | 12% | — |
| `cal_tx_franchise` | Compliance Calendar | authority | 12% | — *(carries a citation)* |
| `cal_fl_annual` | Compliance Calendar | authority | 12% | — *(carries a citation)* |
| `cal_ny_biennial` | Compliance Calendar | authority | 12% | — *(carries a citation)* |
| `cal_baa_review` | Compliance Calendar | authority | 11% | — *(carries a citation)* |
| `gov_licens` | Governing document | drafting | 11% | — |
| `gov_ca_rullca` | Governing document | authority | 8% | — *(carries a citation)* |
| `gov_ca_charging` | Governing document | authority | 8% | — *(carries a citation)* |
| `gov_manager` | Governing document | authority | 10% | — |
| `gov_deadlock` | Governing document | authority | 29% | — |
| `ea_start` | Employment Agreement | authority | 9% | — |
| `ea_return_property` | Employment Agreement | drafting | 9% | — |
| `hb_ack` | Employee Handbook | drafting | 9% | — |
| `hb_conduct` | Employee Handbook | authority | 9% | — |
| `hb_training` | Employee Handbook | authority | 6% | — |
| `hb_technology` | Employee Handbook | authority | 9% | — |
| `hb_leave_statutory` | Employee Handbook | authority | 9% | — |
| `can_local_ordinance` | California Employer Compliance Set | drafting | 6% | — |
| `can_cannabis` | California Employer Compliance Set | authority | 5% | — *(carries a citation)* |
| `hb_ca_personnel_records` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `can_records` | California Employer Compliance Set | authority | 6% | — *(carries a citation)* |
| `hb_ca_paga_reference` | Employee Handbook | authority | 6% | — |
| `hb_ca_day_of_rest` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_uniforms_tools` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `hb_ca_school_leave` | Employee Handbook | authority | 2% | — *(carries a citation)* |
| `hb_ca_military_leave` | Employee Handbook | authority | 6% | — *(carries a citation)* |
| `gov_charging` | Governing document | authority | 6% | — *(carries a citation)* |
| `ic_subcontract` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_no_benefits` | Independent Contractor Agreement | drafting | 5% | — |
| `msa_ca_prop65` | Master Services Agreement | authority | 1% | — *(carries a citation)* |
| `dpa_ca_sensitive` | Data Processing Addendum | authority | 2% | — *(carries a citation)* |
| `hb_ca_fmla_concurrent` | Employee Handbook | authority | 2% | — |
| `ic_ca_exemptions` | Independent Contractor Agreement | authority | 1% | — *(carries a citation)* |
| `ic_ca_expenses` | Independent Contractor Agreement | authority | 1% | — *(carries a citation)* |
| `can_local_remote` | California Employer Compliance Set | authority | 0% | — |
| `ea_location` | Employment Agreement | authority | 2% | — |
| `gov_dividends` | Governing document | drafting | 34% | — |
| `gov_insurance` | Governing document | drafting | 69% | — |
| `gov_indemnify` | Governing document | authority | 69% | — |
| `gov_dispute` | Governing document | drafting | 69% | — |
| `ea_ca_commission` | Employment Agreement | authority | 6% | — *(carries a citation)* |
| `ipa_thirdparty` | Founder IP Assignment | drafting | 59% | — |
| `gov_conflicts` | Governing document | drafting | 49% | — |
| `hb_ca_organ_donor` | Employee Handbook | authority | 3% | — *(carries a citation)* |
| `emp_contractor` | Employment Policy Set | drafting | 39% | — |
| `charter_charter_indemnify` | Charter filing | drafting | 34% | — |
| `gov_taxelect` | Governing document | drafting | 34% | — |
| `gov_expenses` | Governing document | drafting | 69% | — |
| `gov_sever` | Governing document | drafting | 69% | — |
| `gov_notices` | Governing document | drafting | 69% | — |
| `gov_counterparts` | Governing document | drafting | 69% | — |
| `gov_entire` | Governing document | drafting | 69% | — |
| `gov_waiver` | Governing document | drafting | 69% | — |
| `ipa_opensource` | Founder IP Assignment | drafting | 23% | — |
| `gov_taxdistrib` | Governing document | drafting | 25% | — |
| `gov_spousal` | Governing document | drafting | 25% | — |
| `exh_b_spousal` | Schedules and Exhibits | drafting | 25% | — |
| `ipa_moral` | Founder IP Assignment | drafting | 59% | — |
| `vest_leave` | Founder Vesting Agreement | drafting | 59% | — |
| `msa_dispute` | Master Services Agreement | drafting | 18% | — |
| `dpa_liability` | Data Processing Addendum | drafting | 9% | — |
| `ea_bonus` | Employment Agreement | authority | 9% | — |
| `ea_outside_activity` | Employment Agreement | authority | 9% | — |
| `can_paga_audit` | California Employer Compliance Set | drafting | 6% | — |
| `ea_ca_pay_equity` | Employment Agreement | authority | 6% | — *(carries a citation)* |
| `ea_nonsolicit` | Employment Agreement | drafting | 3% | — |
| `hb_ca_tips` | Employee Handbook | authority | 2% | — *(carries a citation)* |
| `emp_arbitration` | Employment Policy Set | drafting | 39% | — |
| `gov_committees` | Governing document | authority | 34% | — |
| `gov_privacy_notice` | Governing document | drafting | 34% | — |
| `msa_notices` | Master Services Agreement | drafting | 18% | — |
| `nda_nonsolicit` | Mutual NDA | drafting | 14% | — |
| `charter_tx_purpose` | Charter filing | drafting | 12% | — |
| `b83_spouse` | IRS Section 83(b) Election | drafting | 11% | — |
| `nda_residuals` | Mutual NDA | drafting | 9% | — |
| `ea_severance` | Employment Agreement | drafting | 9% | — |
| `ea_ca_arbitration` | Employment Agreement | authority | 6% | — |
| `ea_ca_paga_waiver` | Employment Agreement | drafting | 6% | — |
| `hb_ca_seating` | Employee Handbook | authority | 3% | — *(carries a citation)* |
| `ic_expenses` | Independent Contractor Agreement | drafting | 5% | — |


---

# Recorded as law, reads like a term

12 clause(s). A negotiated term waiting on the authority ladder for a statutory verification that can never arrive. Costly rather than unsafe, so they come last — but every one of them is a clause that would otherwise never ship.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `msa_term_cause` | Master Services Agreement | authority | 18% | the body operates on the instrument it sits in |
| `sow_acceptance` | Statement of Work | authority | 18% | the body is written in terms of the two labelled parties |
| `msa_warranty_provider` | Master Services Agreement | authority | 9% | the body is written in terms of the two labelled parties |
| `dpa_subprocessors` | Data Processing Addendum | authority | 9% | the body is written in terms of the two labelled parties |
| `ea_noncompete_void` | Employment Agreement | authority | 6% | the body operates on the instrument it sits in *(carries a citation)* |
| `ic_ca_abc` | Independent Contractor Agreement | authority | 1% | the body operates on the instrument it sits in *(carries a citation)* |
| `vest_definitions` | Founder Vesting Agreement | authority | 59% | the body operates on the instrument it sits in |
| `msa_price_protection` | Master Services Agreement | authority | 9% | the body is written in terms of the two labelled parties |
| `msa_ca_dark_patterns` | Master Services Agreement | authority | 2% | the body is written in terms of the two labelled parties *(carries a citation)* |
| `msa_ca_privacy_notice_flow` | Data Processing Addendum | authority | 2% | the body is written in terms of the two labelled parties *(carries a citation)* |
| `msa_ca_ab5_flowdown` | Master Services Agreement | authority | 4% | the body is written in terms of the two labelled parties *(carries a citation)* |
| `msa_expenses` | Master Services Agreement | authority | 18% | the body is written in terms of the two labelled parties |


### `msa_term_cause` — Termination for Cause

Master Services Agreement · **critical** · auto · appears in 18% of documents

```
Either Party may terminate this Agreement or any Statement of Work if the other materially breaches and fails to cure within {{cure}} days of written notice describing the breach, or within ten (10) days in the case of non-payment of undisputed amounts.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `sow_acceptance` — Acceptance Criteria

Statement of Work · **critical** · auto · appears in 18% of documents

```
Each Deliverable is subject to the [[acceptance criteria]] stated for it. The {{counterLabel}} shall review each Deliverable within {{cure}} days of delivery and either accept it or give written notice of the specific criteria it fails. The {{selfLabel}} shall correct and redeliver within a reasonable period, and the review period restarts as to the corrected items only.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_warranty_provider` — Warranties

Master Services Agreement · **critical** · auto · appears in 9% of documents

```
The {{selfLabel}} warrants that the Services will be performed in a professional and workmanlike manner by qualified personnel, in accordance with the applicable Statement of Work. The {{counterLabel}}’s exclusive remedy for breach of this warranty is re-performance of the deficient Services, or, if re-performance is not commercially reasonable, refund of the fees paid for them, provided notice is given within {{cure}} days of performance.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `dpa_subprocessors` — Subprocessors

Data Processing Addendum · **critical** · auto · appears in 9% of documents

```
The {{counterLabel}} authorizes the {{selfLabel}} to engage the [[subprocessors|subprocessor]] listed in the subprocessor annex. The {{selfLabel}} shall give at least {{cure}} days’ notice before adding or replacing a subprocessor, and the {{counterLabel}} may object on reasonable data protection grounds, in which case the Parties shall work in good faith toward a resolution and, failing one, the {{counterLabel}} may terminate the affected Services without penalty. The {{selfLabel}} remains liable for its subprocessors’ acts and omissions.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `ea_noncompete_void` — No Non-Compete

Employment Agreement · **critical** · auto · appears in 6% of documents

```
This agreement contains no non-compete or customer non-solicitation covenant. Such provisions are void under California law and it is unlawful to include or attempt to enforce them, regardless of where the agreement is signed or which state’s law it names. The Company relies on the confidentiality and invention assignment obligations in <<xr:ea_ip>> instead.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `ic_ca_abc` — California ABC Test

Independent Contractor Agreement · **critical** · auto · appears in 1% of documents

```
California presumes a worker is an employee. To engage them as a contractor the Company must satisfy all three prongs of the [[ABC test|abc test]]: (A) the worker is free from the Company's control and direction in fact as well as under this agreement; (B) the work is outside the usual course of the Company's business; and (C) the worker is customarily engaged in an independently established trade of the same nature. Prong B cannot be satisfied by contract language. Because the Company's business is {{industryName}}, an engagement for work of that same nature is unlikely to qualify. Misclassif
…
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `vest_definitions` — Cause and Good Reason

Founder Vesting Agreement · **recommended** · auto · appears in 59% of documents

```
“Cause” means a founder’s conviction of a felony, act of fraud or material dishonesty against the Company, material breach of this agreement not cured within {{cure}} days of written notice, or willful failure to perform assigned duties after written notice. “Good Reason” means a material reduction in duties or compensation, or a relocation of the founder’s principal workplace by more than fifty (50) miles, in each case without the founder’s consent and after {{cure}} days to cure.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_price_protection` — Rate Adjustments

Master Services Agreement · **recommended** · auto · appears in 9% of documents

```
Rates are fixed for the initial term. Thereafter the {{selfLabel}} may propose an adjustment on {{renewalNotice}} days’ written notice, capped at the lesser of three percent (3%) or the twelve-month change in the Consumer Price Index. If the {{counterLabel}} rejects the adjustment, it may terminate at the end of the then-current term without penalty.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_ca_dark_patterns` — Consent Interface Requirements

Master Services Agreement · **recommended** · auto · appears in 2% of documents

```
Consent obtained through a [[dark pattern]] is not consent under California law. A consent interface must present the choice symmetrically, so that declining takes no more steps than accepting; must avoid pre-checked boxes, double negatives, and language that shames or pressures; and must honor an opt-out preference signal. Where the {{selfLabel}} supplies a consent or preference interface used with California consumers, it shall meet these requirements, and shall not represent that consent has been obtained where the interface does not.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_ca_privacy_notice_flow` — Notice at Collection Flow-Down

Data Processing Addendum · **recommended** · auto · appears in 2% of documents

```
The {{counterLabel}} is responsible for providing the notice at collection to consumers, and the {{selfLabel}} shall not collect personal information in connection with the Services except as disclosed in it. Where the {{selfLabel}} controls the interface at the point of collection, it shall surface the notice supplied by the {{counterLabel}} and shall not alter it. Neither Party may use personal information for a purpose absent from the notice, including for training a model, without a separate written instruction under <<xr:dpa_instructions>>.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_ca_ab5_flowdown` — Worker Classification Flow-Down

Master Services Agreement · **recommended** · suggest · appears in 4% of documents

```
The {{selfLabel}} represents that individuals performing the Services are properly classified under California law, including the [[ABC test|abc test]] where it applies, that all wages, overtime, meal and rest premiums, and business expense reimbursements have been paid, and that required workers' compensation coverage is in place. The {{selfLabel}} shall indemnify the {{counterLabel}} against claims arising from misclassification of its personnel, and this indemnity sits within the carve-outs at <<xr:msa_liability_carveouts>>.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_expenses` — Expenses

Master Services Agreement · **optional** · suggest · appears in 18% of documents

```
The {{counterLabel}} shall reimburse reasonable, documented, pre-approved travel and out-of-pocket expenses at cost, without markup. Expenses require written pre-approval where they exceed the threshold stated in the applicable Statement of Work.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


---

# Evidence agrees with the recorded label

99 clause(s). Listed for completeness. Still needs a decision, because a heuristic agreeing with itself is not a review, but these should go fastest.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `emp_ip` | Employment Policy Set | authority | 39% | the body appeals to what the law requires |
| `cal_soi` | Compliance Calendar | authority | 31% | the body states a deadline together with a consequence for missing it *(carries a citation)* |
| `ipa_state_carveout` | Founder IP Assignment | authority | 29% | the body cites a numbered provision *(carries a citation)* |
| `cal_83b` | Compliance Calendar | authority | 20% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `b83_instructions` | IRS Section 83(b) Election | authority | 20% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `emp_ca_registration` | Employment Policy Set | authority | 15% | the body names a government body a filing or notice goes to |
| `msa_parties` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_structure` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_fees` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_invoicing` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_ip_background` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_indemnity_ip` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_liability_cap` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_confidentiality` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_term` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_effect_termination` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `nda_parties` | Mutual NDA | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `nda_definition` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `nda_obligations` | Mutual NDA | drafting | 18% | the body records what the parties agree between themselves |
| `nda_term` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `sow_reference` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `sow_scope` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties |
| `sow_deliverables` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `sow_schedule` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties |
| `sow_fees` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `sow_change` | Statement of Work | drafting | 18% | the body is written in terms of the two labelled parties |
| `gov_ca_professional` | Governing document | authority | 7% | the body appeals to what the law requires *(carries a citation)* |
| `msa_ip_deliverables_provider` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_ip_deliverables_customer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_warranty_customer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_disclaimer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_dpa_incorp` | Master Services Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `dpa_roles` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_instructions` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_security` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_incident` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_transfers` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `ea_atwill` | Employment Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `ea_ip` | Employment Agreement | authority | 9% | the body appeals to what the law requires |
| `can_payscale_posting` | California Employer Compliance Set | authority | 3% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `can_new_hire_report` | California Employer Compliance Set | authority | 6% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `can_ccpa_hr` | California Employer Compliance Set | authority | 3% | the body appeals to what the law requires *(carries a citation)* |
| `can_edd` | California Employer Compliance Set | authority | 6% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `hb_ca_sick` | Employee Handbook | authority | 6% | the body appeals to what the law requires *(carries a citation)* |
| `hb_ca_victim_leave` | Employee Handbook | authority | 6% | the body appeals to what the law requires *(carries a citation)* |
| `ic_engagement` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `ic_payment` | Independent Contractor Agreement | authority | 5% | the body appeals to what the law requires |
| `ic_ip` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `ic_term` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `msa_ca_cipa` | Master Services Agreement | authority | 2% | the body appeals to what the law requires *(carries a citation)* |
| `can_paydata` | California Employer Compliance Set | authority | 1% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `can_calwarn` | California Employer Compliance Set | authority | 1% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `cal_ca_dissolution` | Compliance Calendar | authority | 31% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `emp_sickleave` | Employment Policy Set | authority | 21% | the body appeals to what the law requires |
| `msa_definitions` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_late` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_taxes` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_indemnity_mutual` | Master Services Agreement | drafting | 18% | the body records what the parties agree between themselves |
| `msa_term_convenience` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_assignment` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `nda_compelled` | Mutual NDA | authority | 18% | the body appeals to what the law requires |
| `nda_no_license` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `nda_injunctive` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `sow_assumptions` | Statement of Work | drafting | 18% | the body operates on the instrument it sits in |
| `sow_precedence` | Statement of Work | drafting | 18% | the body operates on the instrument it sits in |
| `msa_insurance` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_security` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `gov_lien` | Governing document | authority | 11% | the body appeals to what the law requires |
| `msa_price_increase` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_feedback` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_renewal` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `sow_dependencies` | Statement of Work | drafting | 9% | the body is written in terms of the two labelled parties |
| `sow_acceptance_deemed` | Statement of Work | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_confidentiality` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_audit` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `ea_83b_notice` | Employment Agreement | authority | 7% | the body names a government body a filing or notice goes to |
| `ea_benefits` | Employment Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `ea_expenses` | Employment Agreement | authority | 7% | the body appeals to what the law requires *(carries a citation)* |
| `can_cobra` | California Employer Compliance Set | authority | 3% | the body appeals to what the law requires *(carries a citation)* |
| `msa_audit` | Master Services Agreement | drafting | 6% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_ca_song_beverly` | Master Services Agreement | authority | 1% | the body appeals to what the law requires *(carries a citation)* |
| `msa_govlaw` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `nda_govlaw` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `gov_baa` | Governing document | authority | 11% | the body cites a numbered provision *(carries a citation)* |
| `msa_independent` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `emp_confid` | Employment Policy Set | authority | 39% | the body appeals to what the law requires |
| `gov_dataproc` | Governing document | authority | 34% | the body appeals to what the law requires |
| `msa_sla` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `msa_transition` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `ea_ca_release` | Employment Agreement | authority | 6% | the body cites a numbered provision *(carries a citation)* |
| `msa_opensource` | Master Services Agreement | drafting | 6% | the body is written in terms of the two labelled parties |
| `msa_affiliates` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_nonsolicit` | Master Services Agreement | drafting | 14% | the body operates on the instrument it sits in |
| `msa_entire` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_counterparts` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `nda_no_obligation` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `sow_personnel` | Statement of Work | drafting | 12% | the body is written in terms of the two labelled parties |
| `msa_mfn` | Master Services Agreement | drafting | 3% | the body is written in terms of the two labelled parties |
| `msa_escrow` | Master Services Agreement | drafting | 1% | the body is written in terms of the two labelled parties |

