# Family Law, new document: Military Divorce and the Uniformed Services Former Spouses' Protection Act — Information Sheet

## Why this document

Confirmed by grep that "USFSPA," "uniformed services," "military
divorce," and "disposable retired pay" had zero hits anywhere in the
corpus. Read the existing UIFSA document as a style model and confirmed
no subject overlap (UIFSA governs interstate support-order
registration/enforcement; this document governs military retired-pay
property division, a different federal statute and different
subject). Fourth and final document of wave 61, closing the wave.

## What this document covers

7 clauses: 2 drafting (purpose/intro, acknowledgment/signature) and 5
authority clauses, citing 10 U.S.C. § 1408 and 29 U.S.C. §§ 1002, 1003,
plus McCarty v. McCarty, 453 U.S. 210 (1981):

- **`mildivorce_usfspa_overview`** (§ 1408(c)(1) + McCarty) — USFSPA's
  authorization for state courts to treat disposable retired pay as
  divisible property, enacted in direct response to McCarty's
  preemption holding.
- **`mildivorce_disposable_retired_pay_definition`** (§ 1408(a)(4)(A))
  — the statutory definition and its specific exclusions from the
  divisible amount.
- **`mildivorce_ten_ten_rule_direct_payment`** (§ 1408(d)(2)) — **the
  central finding**: the widely-repeated "10/10 rule" governs only
  DFAS direct-payment eligibility, not whether retired pay can be
  divided as property at all.
- **`mildivorce_disposable_retired_pay_cap`** (§ 1408(e)(1), (e)(4)) —
  the 50% property-division-only cap and the separate, higher 65% cap
  when combined with other garnishment-type process.
- **`mildivorce_distinct_federal_scheme`** (29 U.S.C. §§ 1003(b)(1),
  1002(32)) — confirms military retired pay sits outside ERISA's
  Title I (and therefore outside the QDRO mechanism) as a governmental
  plan of the United States.

## Genuine corrections and findings

- **The central finding, corrected from popular misconception**: the
  "10/10 rule" is often described as though it decides whether military
  retired pay can be divided at all. The statutory text does not
  support that — the 10-year overlap requirement appears only in the
  direct-payment provision (§ 1408(d)(2)), not in the divisibility
  authorization (§ 1408(c)), which contains no marriage-length
  threshold. A court order dividing retired pay in a marriage that
  doesn't meet the 10/10 overlap can still be enforced — just not
  through DFAS's direct-payment mechanism.
- **A citation correction caught and fixed**: the commonly cited
  reporter citation for McCarty v. McCarty is often miswritten as 452
  U.S. 210; CourtListener's official reporter data confirms the correct
  citation is 453 U.S. 210 (1981) — used here rather than perpetuating
  the common error.
- **A precise date distinguished, not rounded**: § 1408(c)(1)'s
  retroactivity cutoff is pay periods beginning after June 25, 1981 —
  one day before the McCarty decision issued (June 26, 1981) — stated
  exactly as codified.
- Confirmed a genuinely independent, different-type federal source
  (ERISA's own governmental-plan exclusion) corroborates that military
  retired pay is not divided via a QDRO — two different federal
  statutes reaching the same practical conclusion.
- Confirmed the statute sets two distinct caps depending on context (50%
  for property-division orders alone; 65% when combined with other
  garnishment-type legal process) rather than one flat percentage.

## Honest gap disclosed

The "military pension division order" terminology sometimes used in
secondary sources was not used here — no primary source located in
this research used that specific phrase in describing 10 U.S.C. § 1408,
so it is omitted rather than asserted. California's CalPERS/CalSTRS
public-pension comparison was not addressed — no primary citation was
independently verified for that comparison, so it is omitted. §
1408(a)(4)(B)'s hypothetical-retired-pay computation for a
decree-before-retirement scenario, and the statute's separate 25% cap
for child-abuse garnishment orders, are not addressed.

## Method

Fetched 10 U.S.C. § 1408 and 29 U.S.C. §§ 1002, 1003 from
`law.cornell.edu` via curl (WebFetch blocked), each fetched twice with
distinct User-Agent strings/request configurations, confirmed
byte-identical. McCarty v. McCarty independently verified via the
CourtListener case-law database — a genuinely different source type
from the U.S. Code fetches. All 7 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All statutory sources fetched twice independently with distinct
  User-Agent strings; case law confirmed via CourtListener; confirmed
  clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 1408 subsections
  correctly disclosed as the same statutory section, not independent of
  each other; § 1408(c)(1) and McCarty correctly disclosed as genuinely
  independent, different-type sources; 29 U.S.C. §§ 1003(b)(1) and
  1002(32) correctly disclosed as non-independent of each other but
  independent of the 10 U.S.C. § 1408 material; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose of This Information
  Sheet").
- Field names (`dateSigned`, `cityState`) independently confirmed to
  match existing corpus field definitions. `memberName` and
  `marriageDate` are existing field ids reused here with
  document-specific labels appropriate to this military-divorce
  context (rather than their single-member-LLC and
  anticipated-premarital-agreement originals). Three genuinely new
  fields added: `spouseName`, `serviceBranch`,
  `yearsOfCreditableService` (optional).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Military Divorce and the Uniformed Services Former
  Spouses' Protection Act — Information Sheet
  (`military_divorce_usfspa_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Family Law category. Three new fields:
  `spouseName`, `serviceBranch`, `yearsOfCreditableService`.
- Corpus: 2,287 → 2,294 clauses; 294 → 295 documents. Fourth and final
  document of wave 61, closing the wave.
