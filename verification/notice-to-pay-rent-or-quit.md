# Real Estate, third document: Notice to Pay Rent or Quit

## Why this document

Continuing the "go as deep as humanely possible" build-out. This is the
statutory notice a California landlord must serve on a tenant before
filing an unlawful detainer (eviction) action for nonpayment of rent — a
distinct, narrower document from the existing Residential Lease Agreement
and Residential Purchase Agreement. Sourced from Code of Civil Procedure
§§ 1161-1162 and Civil Code § 1946.2.

## What this document covers

9 clauses: 3 drafting (notice details, payment instructions, and
landlord signature/declaration of service) and 6 authority clauses:

- **`notice_pay_rent_3day_timing`** (CCP § 1161(2)) — the core 3-day
  notice requirement, with the 2019 amendment excluding weekends and
  judicial holidays from the count, confirmed still operative as of the
  most recent 2024 amendment (effective February 1, 2025).
- **`notice_pay_rent_required_contents`** (CCP § 1161(2); *Kwok v.
  Bergren*, 130 Cal.App.3d 596 (1982)) — the statutory content checklist
  plus a genuinely independent case-law source: California courts
  require strict compliance with these requirements.
- **`notice_pay_rent_service_methods`** (CCP § 1162(a)) — the three
  statutorily preferred service methods, including the "nail and mail"
  fallback.
- **`notice_pay_rent_cure_right`** (CCP § 1161(2), (3)) — the tenant's
  right to pay within the notice period and avoid eviction, with an
  honest disclosure of exactly where in the statute the "save the lease
  from forfeiture" language actually appears.
- **`notice_pay_rent_just_cause_context`** (Civ. Code § 1946.2(a), (b)(1)(A),
  (c), (e), (n)) — how nonpayment fits into California's statewide
  Tenant Protection Act just-cause framework, its numerous exemptions,
  and its own January 1, 2030 sunset date.
- **`notice_pay_rent_covid_status`** (CCP § 1161(2)) — a direct,
  disclosed negative finding: no COVID-19-era eviction modification
  remains in the currently codified statute.

## Method

Fetched all candidate California Code of Civil Procedure and Civil Code
sections directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent. *Kwok v.
Bergren* pulled from CourtListener as a genuinely independent, non-
statutory source.

The research explicitly checked whether any COVID-19-era eviction
modification remains in force, rather than assuming it had lapsed:
direct lookups of the former COVID-19 tenant-relief code sections
returned no codified text, consistent with those provisions having
sunset and been removed from the code.

## Defect caught and fixed during integration

One clause (`notice_pay_rent_service_methods`) cited a single statutory
subsection but initially lacked the standard single-source disclosure
sentence — added during integration.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Notice to Pay Rent or Quit (`notice_to_pay_rent_or_quit`),
  9 clauses (6 authority + 3 drafting), in the Real Estate category.
- Corpus: 420 → 429 clauses; 59 → 60 documents.

## Real Estate category summary

Real Estate now has three documents: Residential Lease Agreement,
Residential Purchase Agreement, and Notice to Pay Rent or Quit —
covering the tenancy lifecycle from lease through sale and eviction
notice.
