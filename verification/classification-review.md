# Classification review packet

One field decides which ladder every clause is graded on, and on all 363 clauses it is
still `heuristic-unreviewed`. Until a person decides it, both release gates refuse
everything — the authority gate and the drafting gate alike. This is the cheapest
unblocking step in the repo: 363 binary questions, no statutes, no source texts.

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
| Recorded as a term, reads like a statute | 6 | `dangerous` |
| Both kinds of signal present | 6 | `ambiguous` |
| No signal either way | 255 | `unevidenced` |
| Recorded as law, reads like a term | 7 | `stuck` |
| Evidence agrees with the recorded label | 89 | `consistent` |


---

# Recorded as a term, reads like a statute

6 clause(s). These are the ones that matter. A clause stating what the law requires, routed to a review that asks whether the commercial term is sensible. Nobody on that track checks for a missing requirement, and omission is this corpus's dominant defect. Decide these first.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `consent_adopt` | Initial Consent | drafting | 69% | the body names a government body a filing or notice goes to |
| `gov_formation` | Governing document | drafting | 69% | the body names a government body a filing or notice goes to |
| `fq_statement` | Foreign Qualification | drafting | 52% | the body names a government body a filing or notice goes to |
| `cal_ein` | Compliance Calendar | drafting | 69% | the body names a government body a filing or notice goes to |
| `consent_ein` | Initial Consent | drafting | 69% | the body names a government body a filing or notice goes to |
| `cal_payroll` | Compliance Calendar | drafting | 39% | the body names a government body a filing or notice goes to |


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


### `cal_ein` — EIN and Tax Registration

Compliance Calendar · **recommended** · auto · appears in 69% of documents

```
An employer needs an EIN, applied for on IRS Form SS-4, before opening the bank account authorized in <<xr:consent_bank>>. Then register for {{opStateLong}} state tax accounts and, if hiring, unemployment insurance and workers’ compensation.
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


### `cal_payroll` — Payroll Tax Deposits and Filings

Compliance Calendar · **critical** · suggest · appears in 39% of documents

```
Once the Company has employees it must deposit withheld income and FICA taxes on the schedule the IRS assigns, file Form 941 quarterly and Form 940 annually, and meet the equivalent {{opStateLong}} obligations. Unremitted trust fund taxes can be assessed personally against the officer appointed in <<xr:consent_officers>>.
```

**Recorded as:** drafting · **evidence says:** evidence-authority

**Why it is here:** recorded as a negotiated term, but the body talks like a statute. On the drafting ladder nobody checks whether a required item is missing, and omission is this corpus's dominant defect.


---

# Both kinds of signal present

6 clause(s). The body carries law-facing and term-facing language at once. Which ladder it belongs on cannot be read off the text, which is exactly when a human is needed.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `msa_breach_notify` | Master Services Agreement | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `dpa_deletion` | Data Processing Addendum | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `nda_return` | Mutual NDA | authority | 18% | the body appeals to what the law requires; the body records what the parties agree between themselves |
| `dpa_assistance` | Data Processing Addendum | authority | 9% | the body appeals to what the law requires; the body is written in terms of the two labelled parties |
| `sh_return_property` | * | drafting | 0% | the body appeals to what the law requires; the body records what the parties agree between themselves |
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


### `sh_return_property` — Return of Property

* · **recommended** · suggest · appears in 0% of documents

```
On termination of this {{thisDocument}} or on written request, each party shall return or destroy the other's confidential information, materials, equipment, and credentials in its possession, and shall confirm in writing that it has done so. A party may retain copies required by law or held in routine backup systems, which remain subject to the confidentiality obligations of this {{thisDocument}} for as long as they are retained.
```

**Recorded as:** drafting · **evidence says:** conflicting

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

255 clause(s). Neither kind of language appears, so the label these already carry rests on nothing a reader can check. Most of the corpus is here. They are usually quick — the question is what the clause is for, not what it says.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `charter_name` | Charter filing | drafting | 69% | — |
| `charter_purpose` | Charter filing | authority | 69% | — |
| `charter_agent` | Charter filing | drafting | 69% | — |
| `cal_annual_report` | Compliance Calendar | drafting | 69% | — |
| `gov_units` | Governing document | drafting | 69% | — |
| `sched_a_ownership` | Schedules and Exhibits | drafting | 69% | — |
| `ipa_assign` | Founder IP Assignment | drafting | 59% | — |
| `ipa_wfh` | Founder IP Assignment | authority | 59% | — |
| `vest_schedule` | Founder Vesting Agreement | drafting | 59% | — |
| `vest_repurchase` | Founder Vesting Agreement | drafting | 59% | — |
| `cal_foreign` | Compliance Calendar | authority | 52% | — |
| `fq_agent` | Foreign Qualification | drafting | 52% | — |
| `fq_goodstanding` | Foreign Qualification | drafting | 52% | — |
| `emp_atwill` | Employment Policy Set | drafting | 39% | — |
| `emp_classification` | Employment Policy Set | drafting | 39% | — |
| `emp_i9` | Employment Policy Set | authority | 39% | — *(carries a citation)* |
| `gov_voting` | Governing document | drafting | 34% | — |
| `gov_board` | Governing document | drafting | 34% | — |
| `msa_liability_carveouts` | Master Services Agreement | drafting | 18% | — |
| `nda_exclusions` | Mutual NDA | drafting | 18% | — |
| `prop_scope_blank` | Sales Proposal | drafting | 18% | — |
| `prop_investment` | Sales Proposal | drafting | 18% | — |
| `dpa_scope` | Data Processing Addendum | drafting | 9% | — |
| `consent_officers` | Initial Consent | drafting | 69% | — |
| `consent_bank` | Initial Consent | drafting | 69% | — |
| `gov_quorum` | Governing document | drafting | 69% | — |
| `gov_written_consent` | Governing document | drafting | 69% | — |
| `gov_fiduciary` | Governing document | drafting | 69% | — |
| `gov_books` | Governing document | drafting | 69% | — |
| `gov_dissolution` | Governing document | drafting | 69% | — |
| `ea_position` | Employment Agreement | drafting | 9% | — |
| `ea_compensation` | Employment Agreement | drafting | 9% | — |
| `ea_prior_obligations` | Employment Agreement | drafting | 9% | — |
| `ea_termination` | Employment Agreement | drafting | 9% | — |
| `hb_welcome` | Employee Handbook | drafting | 9% | — |
| `hb_i9` | Employee Handbook | authority | 9% | — *(carries a citation)* |
| `hb_pay_schedule` | Employee Handbook | authority | 9% | — |
| `hb_timekeeping` | Employee Handbook | drafting | 9% | — |
| `hb_harassment` | Employee Handbook | drafting | 9% | — |
| `hb_leave_vacation` | Employee Handbook | authority | 9% | — |
| `hb_accommodation` | Employee Handbook | authority | 9% | — |
| `ic_scope` | Independent Contractor Agreement | authority | 5% | — |
| `ic_no_control` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_taxes` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_confidentiality` | Independent Contractor Agreement | authority | 5% | — |
| `svc_payment` | Service Agreement | drafting | 0% | — |
| `svc_ip` | Service Agreement | drafting | 0% | — |
| `svc_term_end` | Service Agreement | drafting | 0% | — |
| `loa_what` | Letter of Agreement | drafting | 0% | — |
| `bp_exec_summary` | Business Plan | drafting | 0% | — |
| `bp_financial_note` | Business Plan | drafting | 0% | — |
| `ipa_prior` | Founder IP Assignment | drafting | 59% | — |
| `ipa_confidential` | Founder IP Assignment | authority | 59% | — |
| `ipa_further` | Founder IP Assignment | drafting | 59% | — |
| `vest_transfer` | Founder Vesting Agreement | authority | 59% | — |
| `lease_parties` | Residential Lease | drafting | 0% | — |
| `lease_term_12` | Residential Lease | drafting | 0% | — |
| `lease_term_6` | Residential Lease | drafting | 0% | — |
| `lease_term_24` | Residential Lease | drafting | 0% | — |
| `lease_term_m2m` | Residential Lease | drafting | 0% | — |
| `lease_rent` | Residential Lease | drafting | 0% | — |
| `lease_deposit` | Residential Lease | drafting | 0% | — |
| `lease_maintenance` | Residential Lease | drafting | 0% | — |
| `note_promise` | Promissory Note | drafting | 0% | — |
| `note_interest_yes` | Promissory Note | drafting | 0% | — |
| `note_interest_no` | Promissory Note | drafting | 0% | — |
| `note_repay_installments` | Promissory Note | drafting | 0% | — |
| `note_repay_lump` | Promissory Note | drafting | 0% | — |
| `note_repay_demand` | Promissory Note | drafting | 0% | — |
| `note_default` | Promissory Note | drafting | 0% | — |
| `loan_parties` | Loan Agreement | drafting | 0% | — |
| `loan_disbursement` | Loan Agreement | drafting | 0% | — |
| `loan_interest_yes` | Loan Agreement | drafting | 0% | — |
| `loan_interest_no` | Loan Agreement | drafting | 0% | — |
| `loan_repay_installments` | Loan Agreement | drafting | 0% | — |
| `loan_repay_lump` | Loan Agreement | drafting | 0% | — |
| `loan_repay_demand` | Loan Agreement | drafting | 0% | — |
| `loan_collateral` | Loan Agreement | drafting | 0% | — |
| `loan_default_events` | Loan Agreement | drafting | 0% | — |
| `loan_remedies` | Loan Agreement | drafting | 0% | — |
| `pt_formation` | Partnership Agreement | drafting | 0% | — |
| `pt_purpose` | Partnership Agreement | drafting | 0% | — |
| `pt_contributions` | Partnership Agreement | drafting | 0% | — |
| `pt_shares` | Partnership Agreement | drafting | 0% | — |
| `pt_decisions` | Partnership Agreement | drafting | 0% | — |
| `pt_authority` | Partnership Agreement | drafting | 0% | — |
| `pt_leaving` | Partnership Agreement | drafting | 0% | — |
| `pt_dissolution` | Partnership Agreement | drafting | 0% | — |
| `sub_parties` | Sublease | drafting | 0% | — |
| `sub_consent` | Sublease | drafting | 0% | — |
| `sub_subordinate` | Sublease | drafting | 0% | — |
| `sub_rent` | Sublease | drafting | 0% | — |
| `sub_term` | Sublease | drafting | 0% | — |
| `rm_rent_split` | Roommate Agreement | drafting | 0% | — |
| `rm_leaving` | Roommate Agreement | drafting | 0% | — |
| `prop_scope_filled` | Sales Proposal | drafting | 0% | — |
| `fq_name_availability` | Foreign Qualification | drafting | 52% | — |
| `fq_tax_registration` | Foreign Qualification | drafting | 52% | — |
| `consent_issue_vesting` | Initial Consent | drafting | 59% | — |
| `emp_offer` | Employment Policy Set | drafting | 39% | — |
| `emp_overtime` | Employment Policy Set | authority | 39% | — *(carries a citation)* |
| `emp_harassment` | Employment Policy Set | authority | 39% | — |
| `exh_a_prior` | Schedules and Exhibits | drafting | 59% | — |
| `charter_duration` | Charter filing | drafting | 69% | — |
| `consent_fiscal` | Initial Consent | drafting | 69% | — |
| `gov_offices` | Governing document | drafting | 69% | — |
| `gov_transfer` | Governing document | authority | 49% | — |
| `gov_buysell` | Governing document | drafting | 49% | — |
| `gov_vesting` | Governing document | drafting | 39% | — |
| `charter_organizer` | Charter filing | drafting | 34% | — |
| `charter_incorporator` | Charter filing | drafting | 34% | — |
| `charter_mgmt` | Charter filing | drafting | 34% | — |
| `charter_shares` | Charter filing | drafting | 34% | — |
| `msa_term_insolvency` | Master Services Agreement | drafting | 18% | — |
| `msa_survival` | Master Services Agreement | drafting | 18% | — |
| `nda_permitted` | Mutual NDA | drafting | 18% | — |
| `sow_expenses_sow` | Statement of Work | drafting | 18% | — |
| `consent_directors` | Initial Consent | drafting | 34% | — |
| `gov_capital` | Governing document | drafting | 34% | — |
| `gov_stock_issuance` | Governing document | drafting | 34% | — |
| `prop_validity` | Sales Proposal | drafting | 18% | — |
| `prop_next_steps` | Sales Proposal | drafting | 18% | — |
| `gov_deadlock` | Governing document | authority | 29% | — |
| `ea_start` | Employment Agreement | authority | 9% | — |
| `hb_ack` | Employee Handbook | drafting | 9% | — |
| `hb_conduct` | Employee Handbook | authority | 9% | — |
| `hb_technology` | Employee Handbook | authority | 9% | — |
| `hb_leave_statutory` | Employee Handbook | authority | 9% | — |
| `ic_subcontract` | Independent Contractor Agreement | drafting | 5% | — |
| `ic_no_benefits` | Independent Contractor Agreement | drafting | 5% | — |
| `svc_deadline` | Service Agreement | drafting | 0% | — |
| `svc_independent` | Service Agreement | drafting | 0% | — |
| `loa_deadline` | Letter of Agreement | drafting | 0% | — |
| `loa_ending` | Letter of Agreement | drafting | 0% | — |
| `bp_company_desc` | Business Plan | drafting | 0% | — |
| `bp_market_filled` | Business Plan | drafting | 0% | — |
| `bp_market_blank` | Business Plan | drafting | 0% | — |
| `bp_competitive` | Business Plan | drafting | 0% | — |
| `bp_marketing_sales` | Business Plan | drafting | 0% | — |
| `bp_mgmt_org` | Business Plan | drafting | 0% | — |
| `bp_funding_request` | Business Plan | drafting | 0% | — |
| `b83_election` | IRS Section 83(b) Election | authority | 20% | — *(carries a citation)* |
| `inv_disputes` | Invoice | drafting | 0% | — |
| `lease_utilities_incl` | Residential Lease | drafting | 0% | — |
| `lease_utilities_sep` | Residential Lease | drafting | 0% | — |
| `lease_use` | Residential Lease | drafting | 0% | — |
| `lease_pets_yes` | Residential Lease | drafting | 0% | — |
| `lease_pets_no` | Residential Lease | drafting | 0% | — |
| `lease_entry` | Residential Lease | drafting | 0% | — |
| `lease_moveout` | Residential Lease | drafting | 0% | — |
| `note_payment_mechanics` | Promissory Note | drafting | 0% | — |
| `note_prepayment` | Promissory Note | drafting | 0% | — |
| `note_secured` | Promissory Note | drafting | 0% | — |
| `loan_note_companion` | Loan Agreement | drafting | 0% | — |
| `loan_borrower_promises` | Loan Agreement | drafting | 0% | — |
| `pt_term` | Partnership Agreement | drafting | 0% | — |
| `pt_draws` | Partnership Agreement | drafting | 0% | — |
| `pt_accounts` | Partnership Agreement | drafting | 0% | — |
| `pt_duties` | Partnership Agreement | drafting | 0% | — |
| `pt_new_partner` | Partnership Agreement | drafting | 0% | — |
| `pt_transfer` | Partnership Agreement | drafting | 0% | — |
| `sub_deposit` | Sublease | drafting | 0% | — |
| `sub_condition` | Sublease | drafting | 0% | — |
| `sub_no_further` | Sublease | drafting | 0% | — |
| `sub_utilities` | Sublease | drafting | 0% | — |
| `sub_entry_moveout` | Sublease | drafting | 0% | — |
| `rm_deposit_split` | Roommate Agreement | drafting | 0% | — |
| `rm_utilities` | Roommate Agreement | drafting | 0% | — |
| `consent_issue_plain` | Initial Consent | drafting | 10% | — |
| `gov_insurance` | Governing document | drafting | 69% | — |
| `gov_indemnify` | Governing document | authority | 69% | — |
| `ea_equity` | Employment Agreement | drafting | 7% | — |
| `ea_classification` | Employment Agreement | drafting | 4% | — |
| `ea_overtime` | Employment Agreement | authority | 4% | — |
| `consent_ip` | Initial Consent | drafting | 59% | — |
| `ipa_thirdparty` | Founder IP Assignment | drafting | 59% | — |
| `consent_qualify` | Initial Consent | drafting | 52% | — |
| `gov_conflicts` | Governing document | drafting | 49% | — |
| `gov_permitted_transfers` | Governing document | drafting | 49% | — |
| `emp_contractor` | Employment Policy Set | drafting | 39% | — |
| `vest_accel` | Founder Vesting Agreement | drafting | 39% | — |
| `note_unsecured` | Promissory Note | drafting | 0% | — |
| `charter_dirliability` | Charter filing | authority | 34% | — |
| `charter_charter_indemnify` | Charter filing | drafting | 34% | — |
| `gov_taxelect` | Governing document | drafting | 34% | — |
| `gov_officers` | Governing document | drafting | 34% | — |
| `gov_distrib` | Governing document | drafting | 34% | — |
| `gov_allocations` | Governing document | authority | 34% | — |
| `gov_expenses` | Governing document | drafting | 69% | — |
| `gov_drag` | Governing document | drafting | 29% | — |
| `gov_tag` | Governing document | authority | 29% | — |
| `gov_counterparts` | Governing document | drafting | 69% | — |
| `ipa_opensource` | Founder IP Assignment | drafting | 23% | — |
| `gov_taxdistrib` | Governing document | drafting | 24% | — |
| `charter_preferred` | Charter filing | drafting | 20% | — |
| `consent_83b_ack` | Initial Consent | authority | 20% | — |
| `ipa_moral` | Founder IP Assignment | drafting | 59% | — |
| `vest_leave` | Founder Vesting Agreement | drafting | 59% | — |
| `gov_solemember` | Governing document | drafting | 20% | — |
| `prop_deliverables` | Sales Proposal | drafting | 18% | — |
| `msa_liability_supercap` | Master Services Agreement | drafting | 12% | — |
| `cal_baa_review` | Compliance Calendar | authority | 11% | — *(carries a citation)* |
| `gov_licens` | Governing document | drafting | 11% | — |
| `dpa_liability` | Data Processing Addendum | drafting | 9% | — |
| `gov_manager` | Governing document | authority | 10% | — |
| `ea_bonus` | Employment Agreement | authority | 9% | — |
| `ea_outside_activity` | Employment Agreement | authority | 9% | — |
| `svc_revisions` | Service Agreement | drafting | 0% | — |
| `svc_warranty_cap` | Service Agreement | drafting | 0% | — |
| `bp_risks` | Business Plan | drafting | 0% | — |
| `emp_arbitration` | Employment Policy Set | drafting | 39% | — |
| `ea_location` | Employment Agreement | authority | 2% | — |
| `inv_payment_methods` | Invoice | drafting | 0% | — |
| `inv_late_fee` | Invoice | drafting | 0% | — |
| `lease_occupants` | Residential Lease | drafting | 0% | — |
| `lease_late` | Residential Lease | drafting | 0% | — |
| `lease_sublet` | Residential Lease | drafting | 0% | — |
| `note_costs` | Promissory Note | drafting | 0% | — |
| `loan_prepayment` | Loan Agreement | drafting | 0% | — |
| `loan_costs` | Loan Agreement | drafting | 0% | — |
| `pt_time` | Partnership Agreement | drafting | 0% | — |
| `pt_death_disability` | Partnership Agreement | drafting | 0% | — |
| `sh_govlaw` | * | drafting | 0% | — |
| `sh_entire` | * | drafting | 0% | — |
| `sh_amend` | * | drafting | 0% | — |
| `sh_notices` | * | drafting | 0% | — |
| `sh_severability` | * | drafting | 0% | — |
| `sh_assignment` | * | drafting | 0% | — |
| `sh_dispute` | * | drafting | 0% | — |
| `sh_liability` | * | drafting | 0% | — |
| `sh_term_cause` | * | drafting | 0% | — |
| `gov_committees` | Governing document | authority | 34% | — |
| `gov_dividends` | Governing document | drafting | 34% | — |
| `gov_privacy_notice` | Governing document | drafting | 34% | — |
| `prop_background` | Sales Proposal | drafting | 18% | — |
| `prop_approach` | Sales Proposal | drafting | 18% | — |
| `prop_whats_included` | Sales Proposal | drafting | 18% | — |
| `prop_questions` | Sales Proposal | drafting | 18% | — |
| `nda_residuals` | Mutual NDA | drafting | 9% | — |
| `ea_severance` | Employment Agreement | drafting | 9% | — |
| `ic_expenses` | Independent Contractor Agreement | drafting | 5% | — |
| `svc_expenses` | Service Agreement | drafting | 0% | — |
| `loa_whole` | Letter of Agreement | drafting | 0% | — |
| `inv_thanks` | Invoice | drafting | 0% | — |
| `lease_smoking` | Residential Lease | drafting | 0% | — |
| `lease_holdover` | Residential Lease | drafting | 0% | — |
| `loan_use_of_funds` | Loan Agreement | drafting | 0% | — |
| `rm_chores` | Roommate Agreement | drafting | 0% | — |
| `rm_guests_quiet` | Roommate Agreement | drafting | 0% | — |
| `rm_property` | Roommate Agreement | drafting | 0% | — |
| `sh_waiver` | * | drafting | 0% | — |
| `sh_force_majeure` | * | drafting | 0% | — |
| `sh_term_convenience` | * | drafting | 0% | — |
| `sh_nonsolicit` | * | drafting | 0% | — |
| `sh_noncompete` | * | drafting | 0% | — |


---

# Recorded as law, reads like a term

7 clause(s). A negotiated term waiting on the authority ladder for a statutory verification that can never arrive. Costly rather than unsafe, so they come last — but every one of them is a clause that would otherwise never ship.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `msa_term_cause` | Master Services Agreement | authority | 18% | the body operates on the instrument it sits in |
| `sow_acceptance` | Statement of Work | authority | 18% | the body is written in terms of the two labelled parties |
| `dpa_subprocessors` | Data Processing Addendum | authority | 9% | the body is written in terms of the two labelled parties |
| `vest_definitions` | Founder Vesting Agreement | authority | 59% | the body operates on the instrument it sits in |
| `msa_warranty_provider` | Master Services Agreement | authority | 9% | the body is written in terms of the two labelled parties |
| `msa_price_protection` | Master Services Agreement | authority | 9% | the body is written in terms of the two labelled parties |
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


### `dpa_subprocessors` — Subprocessors

Data Processing Addendum · **critical** · auto · appears in 9% of documents

```
The {{counterLabel}} authorizes the {{selfLabel}} to engage the [[subprocessors|subprocessor]] listed in the subprocessor annex. The {{selfLabel}} shall give at least {{cure}} days’ notice before adding or replacing a subprocessor, and the {{counterLabel}} may object on reasonable data protection grounds, in which case the Parties shall work in good faith toward a resolution and, failing one, the {{counterLabel}} may terminate the affected Services without penalty. The {{selfLabel}} remains liable for its subprocessors’ acts and omissions.
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


### `msa_warranty_provider` — Warranties

Master Services Agreement · **critical** · suggest · appears in 9% of documents

```
The {{selfLabel}} warrants that the Services will be performed in a professional and workmanlike manner by qualified personnel, in accordance with the applicable Statement of Work. The {{counterLabel}}’s exclusive remedy for breach of this warranty is re-performance of the deficient Services, or, if re-performance is not commercially reasonable, refund of the fees paid for them, provided notice is given within {{cure}} days of performance.
```

**Recorded as:** authority · **evidence says:** evidence-drafting

**Why it is here:** recorded as asserting law, but the body reads as a negotiated term. It will wait on the authority ladder for a statutory verification that can never arrive, because there is no statute to verify it against.


### `msa_price_protection` — Rate Adjustments

Master Services Agreement · **recommended** · suggest · appears in 9% of documents

```
Rates are fixed for the initial term. Thereafter the {{selfLabel}} may propose an adjustment on {{renewalNotice}} days’ written notice, capped at the lesser of three percent (3%) or the twelve-month change in the Consumer Price Index. If the {{counterLabel}} rejects the adjustment, it may terminate at the end of the then-current term without penalty.
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

89 clause(s). Listed for completeness. Still needs a decision, because a heuristic agreeing with itself is not a review, but these should go fastest.

| Clause | Document | Recorded | Reach | Evidence in the body |
|---|---|---|---|---|
| `emp_ip` | Employment Policy Set | authority | 39% | the body appeals to what the law requires |
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
| `dpa_roles` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_instructions` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_security` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_incident` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_transfers` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `ea_atwill` | Employment Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `ea_ip` | Employment Agreement | authority | 9% | the body appeals to what the law requires |
| `prop_intro_provider` | Sales Proposal | drafting | 9% | the body is written in terms of the two labelled parties |
| `prop_intro_client` | Sales Proposal | drafting | 9% | the body is written in terms of the two labelled parties |
| `ic_engagement` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `ic_payment` | Independent Contractor Agreement | authority | 5% | the body appeals to what the law requires |
| `ic_ip` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `ic_term` | Independent Contractor Agreement | drafting | 5% | the body operates on the instrument it sits in |
| `svc_parties_provider` | Service Agreement | drafting | 0% | the body is written in terms of the two labelled parties |
| `svc_parties_client` | Service Agreement | drafting | 0% | the body is written in terms of the two labelled parties |
| `loa_opening` | Letter of Agreement | drafting | 0% | the body is written in terms of the two labelled parties |
| `inv_details_numbered` | Invoice | drafting | 0% | the body is written in terms of the two labelled parties |
| `inv_details_unnumbered` | Invoice | drafting | 0% | the body is written in terms of the two labelled parties |
| `rm_parties` | Roommate Agreement | drafting | 0% | the body operates on the instrument it sits in |
| `msa_definitions` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_late` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_taxes` | Master Services Agreement | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_indemnity_mutual` | Master Services Agreement | drafting | 18% | the body records what the parties agree between themselves |
| `nda_compelled` | Mutual NDA | authority | 18% | the body appeals to what the law requires |
| `nda_no_license` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `nda_injunctive` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `sow_assumptions` | Statement of Work | drafting | 18% | the body operates on the instrument it sits in |
| `sow_precedence` | Statement of Work | drafting | 18% | the body operates on the instrument it sits in |
| `prop_timeline` | Sales Proposal | drafting | 18% | the body is written in terms of the two labelled parties |
| `msa_security` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `dpa_confidentiality` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `dpa_audit` | Data Processing Addendum | drafting | 9% | the body is written in terms of the two labelled parties |
| `ea_benefits` | Employment Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `cal_83b` | Compliance Calendar | authority | 20% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `b83_instructions` | IRS Section 83(b) Election | authority | 20% | the body names a government body a filing or notice goes to *(carries a citation)* |
| `gov_baa` | Governing document | authority | 11% | the body cites a numbered provision *(carries a citation)* |
| `msa_ip_deliverables_provider` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_ip_deliverables_customer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_warranty_customer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_disclaimer` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_dpa_incorp` | Master Services Agreement | drafting | 9% | the body operates on the instrument it sits in |
| `msa_independent` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `emp_confid` | Employment Policy Set | authority | 39% | the body appeals to what the law requires |
| `gov_dataproc` | Governing document | authority | 34% | the body appeals to what the law requires |
| `msa_insurance` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `msa_sla` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `msa_transition` | Master Services Agreement | drafting | 12% | the body is written in terms of the two labelled parties |
| `gov_lien` | Governing document | authority | 11% | the body appeals to what the law requires |
| `msa_price_increase` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_feedback` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties |
| `msa_renewal` | Master Services Agreement | drafting | 9% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `sow_dependencies` | Statement of Work | drafting | 9% | the body is written in terms of the two labelled parties |
| `sow_acceptance_deemed` | Statement of Work | drafting | 9% | the body is written in terms of the two labelled parties |
| `ea_83b_notice` | Employment Agreement | authority | 7% | the body names a government body a filing or notice goes to |
| `ea_expenses` | Employment Agreement | authority | 7% | the body appeals to what the law requires *(carries a citation)* |
| `msa_opensource` | Master Services Agreement | drafting | 6% | the body is written in terms of the two labelled parties |
| `msa_audit` | Master Services Agreement | drafting | 6% | the body is written in terms of the two labelled parties; the body operates on the instrument it sits in |
| `svc_confidentiality` | Service Agreement | drafting | 0% | the body records what the parties agree between themselves |
| `pt_disputes` | Partnership Agreement | drafting | 0% | the body operates on the instrument it sits in |
| `sh_indemnity` | * | drafting | 0% | the body records what the parties agree between themselves |
| `sh_confidentiality` | * | drafting | 0% | the body records what the parties agree between themselves |
| `msa_affiliates` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `msa_counterparts` | Master Services Agreement | drafting | 18% | the body operates on the instrument it sits in |
| `nda_no_obligation` | Mutual NDA | drafting | 18% | the body operates on the instrument it sits in |
| `sow_personnel` | Statement of Work | drafting | 12% | the body is written in terms of the two labelled parties |
| `msa_mfn` | Master Services Agreement | drafting | 3% | the body is written in terms of the two labelled parties |
| `msa_escrow` | Master Services Agreement | drafting | 1% | the body is written in terms of the two labelled parties |
| `lease_alterations` | Residential Lease | drafting | 0% | the body records what the parties agree between themselves |

