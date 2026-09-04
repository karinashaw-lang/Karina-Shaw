# Family Law, new document: Division of Retirement Benefits in Divorce and QDROs — Information Sheet

## Why this document

Confirmed by grep that "QDRO," "qualified domestic relations order,"
and "retirement account division" had zero hits anywhere in the
corpus. Read the existing Marital Settlement Agreement document's
clauses in full and confirmed it covers general community/separate
property, spousal support, and custody, but nothing about retirement
plans — a genuine companion, not overlap. Third of wave 61's four
documents.

## What this document covers

9 clauses: 2 drafting (purpose/identification, worksheet/signatures)
and 7 authority clauses, citing Cal. Fam. Code § 2610 and 29 U.S.C.
§§ 1003, 1056:

- **`qdro_ca_retirement_division_authority`** (§ 2610(a), (a)(4)) —
  California's rule directing courts to ensure each party's full
  community-property share of retirement benefits, including the
  direct-payment mechanism.
- **`qdro_ca_public_plan_specific_statutes`** (§ 2610(a)(3)) — **a key
  finding**: public/governmental retirement systems (CalPERS, CalSTRS,
  county systems, JRS) are divided under separate Government/Education
  Code statutes, not the private-plan mechanism.
- **`qdro_ca_retirement_division_limits`** (§ 2610(b)) — the bounds on
  a court's authority: no increased benefits, no pre-retirement
  payment absent plan provision.
- **`qdro_erisa_antialienation_and_exception`** (29 U.S.C.
  § 1056(d)(1), (d)(3)(A)) — ERISA's general anti-assignment rule and
  its QDRO exception.
- **`qdro_erisa_qdro_definition_and_contents`** (29 U.S.C.
  § 1056(d)(3)(B)-(C)) — the exact statutory content requirements a
  domestic relations order must meet to qualify.
- **`qdro_erisa_governmental_plan_exclusion`** (29 U.S.C. § 1003(b)(1))
  — independent federal-side confirmation that governmental plans sit
  outside ERISA's private-plan mechanism.
- **`qdro_erisa_administrator_determination`** (29 U.S.C.
  § 1056(d)(3)(G)(i)) — **a key finding**: a QDRO is not automatic once
  a court signs an order — the plan administrator makes its own
  separate qualification determination.

## Genuine corrections and findings

- **The central finding**: California's own statute cross-references
  separate public-retirement-system statutes rather than treating
  public and private plans identically — confirmed from § 2610(a)(3)'s
  own text rather than assumed.
- **A QDRO is a separate process from the judgment itself**: confirmed
  the plan administrator's independent notice-and-determination
  obligation under § 1056(d)(3)(G)(i), rather than treating a signed
  court order as automatically effective against the plan.
- Confirmed ERISA's governmental-plan exclusion (§ 1003(b)(1)) as
  genuinely independent federal-side corroboration of the same
  public/private distinction California's own statute draws — two
  different sovereigns reaching the same practical line.
- Confirmed the exact statutory content requirements for a qualifying
  order (names/addresses, amount/percentage, payment count/period,
  covered plans) rather than a paraphrase.

## Honest gap disclosed

The "time rule" apportionment formula for a benefit partly earned
before marriage and partly during it was not verified and is
deliberately omitted — candidate cases (In re Marriage of Brown, In re
Marriage of Lehman) were located via CourtListener but repeated
attempts to read the full opinion text failed (auth errors, bot-
challenge blocks), so this was disclosed as a gap rather than
fabricated. The cross-referenced Government/Education Code sections
governing specific public systems, and ERISA's "governmental plan"
definition (29 U.S.C. § 1002(32)), were not independently fetched or
verified.

## Method

Fetched Cal. Fam. Code § 2610 from `leginfo.legislature.ca.gov` and 29
U.S.C. §§ 1003 and 1056 from `law.cornell.edu` via curl (WebFetch
blocked for both domains), each source fetched twice with distinct
User-Agent strings, confirmed byte-identical after whitespace
normalization. All 8 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All sources fetched twice independently with distinct User-Agent
  strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all three § 2610
  clauses correctly disclosed as one statutory section, not independent
  of each other; the two ERISA clauses drawing on the same § 1056(d)(3)
  paragraph correctly disclosed as non-independent; § 1003(b)(1)
  correctly disclosed as genuinely independent of the California
  statute (different sovereign, different law); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`party1Name`, `party2Name`, `separationDate`)
  independently confirmed to match existing corpus field definitions.
  For `marriageDate` and `planName`, used the document-specific label
  variants from `marital_settlement_agreement` and
  `retirement_401k_distribution_notice` (better contextual fit than the
  premarital-agreement/COBRA variants the delivering agent initially
  referenced) rather than inventing new field ids. One genuinely new
  field added: `employerName` (optional).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Division of Retirement Benefits in Divorce and QDROs —
  Information Sheet (`retirement_benefits_division_qdro_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Family Law category. One
  new field: `employerName`.
- Corpus: 2,278 → 2,287 clauses; 293 → 294 documents. Third document of
  wave 61.
