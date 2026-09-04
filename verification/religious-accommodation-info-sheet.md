# Hiring, new document: Religious Accommodation in Employment (FEHA) — Information Sheet

## Why this document

Category-balance analysis flagged Hiring as one of wave 64's four
perpetually-thin categories. Confirmed by grep that "religious
accommodation," "12940(l)," and "religious dress and grooming" had
zero hits anywhere in the corpus. Read the existing GINA and
post-offer medical examination documents as structural models — this
document covers a categorically distinct FEHA protected category.
First of wave 64's four documents.

## What this document covers

9 clauses: 2 drafting (purpose, closing/signature) and 7 authority
clauses, citing Cal. Gov. Code §§ 12940(l)(1)-(4) and 12926(d), (q),
(u):

- **`religacc_core_prohibition`** (§ 12940(l)(1)) — the core
  reasonable-accommodation duty and its unable-without-undue-hardship
  standard.
- **`religacc_dress_grooming_definitions`** (§§ 12940(l)(1),
  12926(q)) — the specific, broadly-construed statutory definitions of
  "religious dress practice" and "religious grooming practice."
- **`religacc_undue_hardship_standard`** (§ 12926(u)) — **a key
  finding**: FEHA's own five-factor "undue hardship" definition,
  explicitly not assumed identical to the federal Title VII standard.
- **`religacc_segregation_not_reasonable`** (§ 12940(l)(2)) — the
  specific rule that segregating an employee is never a reasonable
  accommodation of religious dress or grooming practice.
- **`religacc_not_required_if_unlawful`** (§ 12940(l)(3)) —
  accommodation is not required if it would itself violate
  antidiscrimination law.
- **`religacc_retaliation_protection`** (§ 12940(l)(4)) — retaliation
  protection for requesting an accommodation, regardless of outcome.
- **`religacc_employer_threshold`** (§ 12926(d)) — the five-employee
  coverage threshold and the religious-nonprofit exclusion.

## Genuine corrections and findings

- **The central finding**: FEHA defines "undue hardship" directly in
  its own text via a five-factor balancing test (§ 12926(u)) — not a
  standard left entirely to case law, and explicitly not asserted as
  identical to the federal Title VII standard (Groff v. DeJoy (2023))
  without independent verification of the federal side.
- Confirmed the specific statutory rule that segregating an employee
  from others or the public is never a reasonable accommodation of
  religious dress or grooming practice — a precise textual rule, not
  inferred from the general duty.
- Confirmed the statute expressly extends to apprenticeship programs,
  unpaid internships, and other unpaid workplace experience programs,
  not only paid employment.
- Confirmed the retaliation protection applies regardless of whether
  the underlying accommodation request was granted.

## Honest gap disclosed

The federal Title VII "undue hardship" standard and Groff v. DeJoy
(2023) 600 U.S. 447 are named only as unverified context — neither the
federal statute nor the opinion was independently fetched or quoted,
and this document does not assert the state and federal standards
would produce the same result. Civil Code § 51(b) and Gov. Code
§ 11135, cross-referenced by § 12940(l)(3), are named but not
independently quoted. § 12940(h)'s general retaliation-protection
subdivision is cross-referenced but not restated.

## Method

Fetched Cal. Gov. Code §§ 12940 and 12926 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with distinct User-Agent strings/HTTP configurations,
confirmed byte-identical. All 8 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- Both sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 12940(l)
  citations correctly disclosed as different paragraphs of one
  subdivision, not independent of each other; § 12926(d), (q), and (u)
  correctly disclosed as different subdivisions of one definitions
  section, not independent of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Religious Accommodation in Employment (FEHA) —
  Information Sheet (`religious_accommodation_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,351 → 2,360 clauses; 303 → 304 documents. First document
  of wave 64.
