# Launch Set Proposal — CA Wedge Plan Step 5

Status: **PROPOSED — WAITING FOR OWNER APPROVAL.** Per the plan's own instruction
for this step, no further step (Step 6 verification, Step 8 entitlements, Step 22
publishing, etc.) proceeds until this list is approved or amended. Only documents
on the approved launch set are published, promoted, or sold; everything else in
the 741-document corpus stays out of the paid/public product for this launch.

## 1. Selection method

The corpus splits cleanly into two kinds of records:

- **122 fillable documents** — real forms and agreements a person fills in and
  takes away: leases, wills, operating agreements, offer letters, notices,
  deeds, and the like. Every one of these has at least one fillable field.
- **619 `*_info_sheet` records** — narrow explainer topics (one specific
  statute, doctrine, or penalty provision each, e.g.
  `corporate_opportunity_doctrine_info_sheet`,
  `cutsa_statute_of_limitations_info_sheet`). These exist to back the
  contract-reader and search/citation index, not to be sold as standalone
  products — most have no fillable fields at all.

A paid, proof-first launch should sell the thing people actually come to fill
out, not a 741-item catalog padded with single-topic reference notes. So the
proposed launch set is:

1. **All 122 fillable documents**, unconditionally — this is the product.
2. **6 named info sheets**, added because the plan's own text calls them out
   by name or because they are load-bearing for the wedge cluster (see below):
   `ein_info_sheet`, `llc_annual_fee_info_sheet`,
   `agent_for_service_of_process_info_sheet`,
   `llc_default_operating_rules_info_sheet`, `small_claims_info_sheet`,
   `name_change_petition_info_sheet`.

**Total: 128 documents** — inside the plan's 100–150 target.

This is a data-driven cut, not a hand-picked "most common" guess: the 122
fillable documents already are the set of real, usable forms in the corpus,
spread across all 8 substantive categories (16–20 per category, see below),
so no category is starved or over-represented by construction. The remaining
591 info sheets (619 minus the 6 added) stay in the corpus for the free
contract reader (Step 13) and citation index, available to *read*, but are
excluded from the paid document list, from SEO publishing, and from the
`/trust` page's document count.

No current document reaches **Tier A**. `tiers.json` confirms 0 Tier A, 324
Tier B, 417 Tier C across the whole corpus, and that's unchanged within the
128-document launch set too — Tier A requires every authority clause to be
`adversarially_checked`, and the adversarial-verifier pass simply hasn't run
against most of the corpus yet. That is expected and is exactly what **Step 6
(verify the launch set)** exists to fix: narrowing the adversarial-verifier
effort to these 128 documents, instead of all 741, is the whole point of
defining the launch set first. Tier/drafting-only labels shown below are each
document's *current*, honest state — not a promise about where it'll land
after Step 6.

## 2. The wedge cluster — single-member LLC formation

Per the plan: *"formation documents, operating agreement, Statement of
Information reminder, filing instructions, registered agent referral."*
Marketing (Step 19's home page, Step 22's Wave 1 SEO pages) points at this
cluster first. It is the 7 documents marked **[WEDGE]** below:

| Document | Role in the wedge |
|---|---|
| `llc_articles_of_organization` | The formation filing itself (Secretary of State Form LLC-1 equivalent). |
| `llc_operating_agreement_single_member` | The operating agreement — California doesn't require filing one, but strongly implies owning one (see default-rules sheet below). |
| `llc_default_operating_rules_info_sheet` | Explains what CA law imposes by default if you *don't* have an operating agreement — the reason to want the document above. |
| `statement_of_information` | The periodic filing every CA LLC must make after formation; Step 15 adds a reminder on top of this document. |
| `ein_info_sheet` | Needed immediately after formation to open a business bank account or hire. |
| `llc_annual_fee_info_sheet` | The $800 CA franchise tax / LLC fee — the single most common "nobody told me" cost of forming a CA LLC; sets expectations honestly. |
| `agent_for_service_of_process_info_sheet` | Explains the agent-for-service-of-process requirement that Step 16's registered-agent referral link sits next to. |

No standalone "registered agent" document exists in the corpus, and none is
proposed — Step 16 covers that as a referral link to a third-party service,
not a document this product drafts or files, consistent with the scope lock
(no registered-agent service, no filing-on-behalf).

`llc_operating_agreement_multi_member` stays in the general launch set (it's
a real, needed document) but is **not** part of the wedge — the wedge is
specifically the *single*-member path the go-to-market plan names.

## 3. Named example topics, confirmed present

The plan names several example documents as a sanity check on breadth. All
are in the proposed set:

- Operating agreement — `llc_operating_agreement_single_member` (wedge)
- Offer letter — `offer`
- Independent contractor agreement — `independent_contractor`
- Handbook — `handbook`
- NDA — `nda` (plus `mutual_nda`)
- Residential lease — `residential_lease`
- Demand letter — `waiting_time_penalty_demand` (the only demand-letter-shaped document in the corpus; it's employment-specific, not a generic civil demand letter — flagged as a gap, see §5)
- Will — `last_will_testament`
- Advance health care directive — `advance_health_care_directive`
- Small claims — `small_claims_info_sheet`
- Name change — `name_change_petition_info_sheet`

## 4. Full proposed launch set, by category (128 documents)

### Business Formation (20)

- `agent_for_service_of_process_info_sheet` -- Agent for Service of Process — Duties and Change of Agent Information Sheet (current tier: C) **[WEDGE]**
- `articles_of_incorporation` -- Articles of Incorporation (California Corporation) (current tier: B)
- `buy_sell_agreement` -- Buy-Sell Agreement (current tier: B)
- `llc_annual_fee_info_sheet` -- California LLC Annual Fee — Information Sheet (current tier: B) **[WEDGE]**
- `board_written_consent` -- Corporate Board Resolution / Action by Written Consent (current tier: C)
- `corporate_bylaws` -- Corporate Bylaws (current tier: B)
- `corporate_dissolution` -- Corporate Dissolution (Certificate of Dissolution) (current tier: B)
- `ein_info_sheet` -- Employer Identification Number (EIN) — Information Sheet (current tier: C) **[WEDGE]**
- `fictitious_business_name_statement` -- Fictitious Business Name (DBA) Statement — Information Sheet (current tier: C)
- `founders_agreement` -- Founders' Agreement (current tier: C)
- `partnership_agreement` -- General Partnership Agreement (current tier: C)
- `llc_articles_of_organization` -- LLC Articles of Organization (current tier: C) **[WEDGE]**
- `llc_default_operating_rules_info_sheet` -- LLC Default Operating Rules — Information Sheet (current tier: B) **[WEDGE]**
- `llc_dissolution_cancellation` -- LLC Dissolution and Cancellation (current tier: B)
- `llc_operating_agreement_multi_member` -- Multi-Member LLC Operating Agreement (current tier: C)
- `nonprofit_articles_of_incorporation` -- Nonprofit Public Benefit Corporation Articles of Incorporation (current tier: C)
- `s_corp_election_overview` -- S Corporation Election Overview (current tier: C)
- `safe_note` -- SAFE (Simple Agreement for Future Equity) Note (current tier: C)
- `llc_operating_agreement_single_member` -- Single-Member LLC Operating Agreement (current tier: C) **[WEDGE]**
- `statement_of_information` -- Statement of Information (California Secretary of State Periodic Filing) (current tier: C) **[WEDGE]**

### Confidentiality & IP (12)

- `ccpa_service_provider_agreement` -- CCPA Service Provider Data Processing Agreement (current tier: C)
- `copyright_assignment` -- Copyright Assignment Agreement (current tier: C)
- `dmca_takedown_notice` -- DMCA Takedown Notice (Copyright Infringement Notification) (current tier: C)
- `mutual_nda` -- Mutual Non-Disclosure Agreement (current tier: C)
- `nda` -- Non-Disclosure Agreement (current tier: C)
- `patent_assignment` -- Patent Assignment Agreement (current tier: C)
- `patent_license_agreement` -- Patent License Agreement (current tier: C)
- `software_license` -- Software License Agreement (current tier: C)
- `trade_secret_cease_and_desist` -- Trade Secret Misappropriation Cease and Desist Letter (current tier: C)
- `trademark_license` -- Trademark License Agreement (current tier: C)
- `ccpa_consumer_privacy_policy` -- Website/App Privacy Policy — CCPA Consumer-Facing Disclosure (current tier: C)
- `work_made_for_hire_agreement` -- Work Made for Hire Agreement (Independent Contractor) (current tier: C)

### Consumer & Civil Court (1)

- `small_claims_info_sheet` -- Small Claims Court — Information Sheet (current tier: C)

### During employment (15)

- `ada_accommodation_request` -- ADA Reasonable Accommodation Request Form (current tier: C)
- `anti_harassment_policy` -- Anti-Harassment & Non-Discrimination Policy (current tier: C)
- `expense_reimbursement` -- Business Expense Reimbursement Form (current tier: drafting-only)
- `employment_verification` -- Employment Verification Letter (current tier: drafting-only)
- `fmla_leave` -- FMLA Leave Request & Employer Notice (current tier: C)
- `meal_rest_break_policy` -- Meal and Rest Break Policy (current tier: B)
- `overtime_authorization` -- Overtime Authorization Form (current tier: C)
- `paga_notice_letter` -- PAGA Pre-Suit Notice Letter (current tier: C)
- `pto_request` -- PTO / Vacation Request Form (current tier: drafting-only)
- `pwfa_accommodation` -- Pregnant Workers Fairness Act Accommodation Request (current tier: C)
- `salary_change` -- Salary Change / Promotion Notice (current tier: drafting-only)
- `timesheet` -- Timesheet / Time Records (current tier: C)
- `wage_statement_itemization_policy` -- Wage Statement Itemization Policy (current tier: B)
- `whistleblower_policy` -- Whistleblower Policy (current tier: C)
- `written_warning` -- Written Warning / Corrective Action Notice (current tier: B)

### Ending employment (16)

- `retirement_401k_distribution_notice` -- 401(k)/Retirement Plan Distribution Notice at Termination (current tier: C)
- `cobra_election_notice` -- COBRA Election Notice (current tier: C)
- `calcobra_election_notice` -- Cal-COBRA Election Notice (California Continuation Benefits Replacement Act) (current tier: C)
- `commission_payout_statement` -- Commission Payout Upon Termination — Statement of Earned but Unpaid Commissions (current tier: C)
- `property_return` -- Company Property & Equipment Return Acknowledgment (current tier: C)
- `personnel_records_request` -- Employee's Request to Inspect Personnel and Payroll Records (current tier: C)
- `employer_ui_claim_response` -- Employer's Response to Unemployment Insurance Claim (current tier: C)
- `exit_interview` -- Exit Interview Form (current tier: drafting-only)
- `waiting_time_penalty_demand` -- Final Wage Payment / Waiting-Time Penalty Demand Letter (current tier: C)
- `neutral_reference_policy` -- Neutral Reference / Employment Verification Policy (current tier: C)
- `unemployment_change_notice` -- Notice to Employee as to Change in Relationship (current tier: C)
- `owbpa_group_program_disclosure_notice` -- OWBPA Group/Exit-Incentive Program Disclosure Notice (current tier: C)
- `severance` -- Severance Agreement (current tier: C)
- `termination_letter` -- Termination / Separation Letter (current tier: C)
- `vacation_payout_statement` -- Vacation/PTO Payout at Termination — Statement of Accrued but Unused Vacation (current tier: C)
- `warn_notice` -- WARN Act Layoff Notice (current tier: C)

### Estate Planning (15)

- `advance_health_care_directive` -- Advance Health Care Directive (current tier: C)
- `codicil` -- Codicil to a Will (current tier: C)
- `adult_conservatorship_petition_info` -- Conservatorship of an Adult — Petition Information Sheet (current tier: C)
- `disposition_of_remains_instructions` -- Disposition of Remains Instructions (current tier: C)
- `financial_power_of_attorney` -- Financial Power of Attorney (current tier: B)
- `hipaa_authorization` -- HIPAA Authorization (current tier: C)
- `individual_health_care_instruction` -- Individual Health Care Instruction (current tier: C)
- `last_will_testament` -- Last Will and Testament (current tier: C)
- `guardianship_nomination` -- Nomination of Guardian for Minor Children (current tier: C)
- `revocable_living_trust` -- Revocable Living Trust (current tier: B)
- `small_estate_affidavit` -- Small Estate Affidavit (current tier: C)
- `special_needs_trust` -- Special Needs Trust (current tier: C)
- `transfer_on_death_deed` -- Transfer-on-Death Deed (current tier: B)
- `trust_amendment` -- Trust Amendment (current tier: C)
- `trustee_notification_to_beneficiaries` -- Trustee's Notification to Beneficiaries — Information Sheet (current tier: C)

### Family Law (14)

- `child_support_agreement` -- Child Support Agreement (current tier: C)
- `civil_harassment_restraining_order` -- Civil Harassment Restraining Order (current tier: B)
- `cohabitation_agreement` -- Cohabitation Agreement (current tier: C)
- `domestic_partnership_declaration` -- Domestic Partnership Declaration (current tier: B)
- `dvro_petition_information` -- Domestic Violence Restraining Order (Request for Order) Information Sheet (current tier: C)
- `grandparent_visitation_petition` -- Grandparent Visitation (Petition Information Sheet) (current tier: C)
- `guardianship_petition` -- Guardianship of the Person (Petition Information Sheet) (current tier: B)
- `marital_settlement_agreement` -- Marital Settlement Agreement (current tier: B)
- `parenting_plan` -- Parenting Plan (current tier: B)
- `paternity_action_petition` -- Paternity Action (Petition to Establish Parental Relationship) Information Sheet (current tier: C)
- `name_change_petition_info_sheet` -- Petition for Change of Name (Adult or Minor) — Information Sheet (current tier: C)
- `postnuptial_agreement` -- Postnuptial Agreement (current tier: B)
- `premarital_agreement` -- Premarital Agreement (current tier: B)
- `voluntary_declaration_of_parentage` -- Voluntary Declaration of Parentage (current tier: B)

### Hiring (17)

- `background_check` -- Background Check Disclosure & Authorization (current tier: C)
- `freelance_worker_protection_act_agreement` -- California Freelance Worker Protection Act Agreement (current tier: C)
- `commission_agreement` -- Commission Agreement (current tier: B)
- `direct_deposit` -- Direct Deposit Authorization (current tier: drafting-only)
- `handbook` -- Employee Handbook (excerpt) (current tier: C)
- `employee_nonsolicit` -- Employee Non-Solicitation Agreement (current tier: B)
- `referral_bonus` -- Employee Referral Bonus Agreement (current tier: drafting-only)
- `arbitration` -- Employment Arbitration Agreement (current tier: C)
- `flsa_classification` -- Exempt / Non-Exempt Classification Notice (current tier: C)
- `independent_contractor` -- Independent Contractor Agreement (current tier: C)
- `interview_scorecard` -- Interview Scorecard (current tier: drafting-only)
- `ip_agreement` -- Invention Assignment & Confidentiality Agreement (current tier: C)
- `job_description` -- Job Description Template (current tier: drafting-only)
- `onboarding_checklist` -- New Hire Onboarding Checklist (current tier: C)
- `noncompete` -- Non-Compete Agreement (current tier: C)
- `offer` -- Offer Letter (current tier: C)
- `wage_theft_prevention_notice` -- Wage Theft Prevention Act Notice to Employee — Information Sheet (current tier: B)

### Real Estate (18)

- `notice_to_perform_covenant_or_quit` -- 3-Day Notice to Perform Covenant or Quit (current tier: C)
- `commercial_lease` -- Commercial Lease Agreement (current tier: C)
- `deed_of_trust_promissory_note` -- Deed of Trust and Promissory Note (Private/Seller-Financed Real Estate Loan) (current tier: C)
- `easement_agreement` -- Easement Agreement (current tier: C)
- `grant_deed` -- Grant Deed (current tier: B)
- `hoa_ccr_disclosure` -- HOA / CC&R Disclosure (Davis-Stirling Common Interest Development Disclosure) (current tier: C)
- `home_improvement_contract` -- Home Improvement Contract (current tier: C)
- `lead_based_paint_disclosure` -- Lead-Based Paint Disclosure (current tier: C)
- `mechanics_lien_preliminary_notice` -- Mechanics Lien Preliminary Notice (current tier: C)
- `mechanics_lien_waiver_and_release_forms` -- Mechanics Lien Waiver and Release Forms (Progress and Final Payment) (current tier: C)
- `notice_to_pay_rent_or_quit` -- Notice to Pay Rent or Quit (current tier: C)
- `quitclaim_deed` -- Quitclaim Deed (current tier: B)
- `residential_lease` -- Residential Lease Agreement (current tier: B)
- `residential_purchase_agreement` -- Residential Purchase Agreement (current tier: C)
- `security_deposit_itemization` -- Security Deposit Itemization / Move-Out Statement (current tier: C)
- `sublease_agreement` -- Sublease Agreement (current tier: C)
- `tenant_notice_to_vacate` -- Tenant's Notice of Intent to Vacate (current tier: C)
- `wrongful_foreclosure_void_assignment` -- Wrongful Foreclosure and the Void-Assignment Standing Rule (current tier: C)

## 5. Known gaps and conservative calls (Global Rule 15)

- **No generic civil demand letter.** `waiting_time_penalty_demand` covers
  only the employment final-wages scenario. A general consumer/small-business
  demand letter (e.g., for an unpaid invoice or returned deposit) doesn't
  exist in the corpus. Not added by substitution — proposing a document that
  doesn't exist yet is out of scope for a "define the launch set from what's
  already built" step. Logged here so it's visible as a Wave 2 gap, not
  silently dropped.
- **9 documents in this set are drafting-only** (`expense_reimbursement`,
  `employment_verification`, `pto_request`, `salary_change`, `exit_interview`,
  `direct_deposit`, `referral_bonus`, `interview_scorecard`,
  `job_description`). These carry no legal-authority citation at all — they're
  plain administrative templates (a timesheet, a scorecard), so there's
  nothing for Step 6 to verify and no "Verified"/tier badge to earn or lose.
  Including them is conservative, not a stretch: the drafting-only label is
  itself an honest, visible fact in the UI (per Step 2's tiering work), so a
  buyer is never told these are legally sourced when they aren't.
- **591 info sheets are excluded from the paid/published set but not
  deleted or hidden from the free contract reader.** They continue to back
  Step 13 (contract reader) and the citation/search index. Nothing about this
  step removes them from the corpus — only from what's sold, SEO-published,
  or counted on the `/trust` page's "documents" figure.
- **128, not exactly 100–150's midpoint**, because the number falls out of
  which fillable documents already exist plus a short, named list — not from
  hitting a target count by trimming or padding. No document was added or
  removed purely to make the total look rounder.

## 6. What happens on approval

Once approved (or amended), the next steps proceed in order:

- **Step 6** runs the adversarial verifier against these 128 documents'
  authority clauses (not the other 613), aiming to move as many as honestly
  possible from Tier B/C to Tier A, and labels — never ships — anything that
  can't be verified.
- **Step 8** scopes entitlements/server-side release to exactly this
  document-id list.
- **Step 22** scopes the wedge-first SEO pages to this list, with the
  7-document wedge cluster as Wave 1.

No document outside this list is published, promoted, or sold until a future
revision of this proposal adds it through the same process.
