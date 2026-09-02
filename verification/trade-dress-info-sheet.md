# Confidentiality & IP, new document: Trade Dress — Information Sheet

## Why this document

The existing Trademark Registration, License, Assignment, and Cease
and Desist documents all cover word/logo marks. Trade dress protects
a product's or service's overall look and feel instead — a distinct
body of law under the same Lanham Act provision.

## What this document covers

8 clauses: 2 drafting (trade dress description/statements, signature/
certification) and 6 authority clauses:

- **`tradedress_statutory_basis`** (15 U.S.C. § 1125(a)(1)(A),
  (a)(3)) — the statutory basis for trade dress claims.
- **`tradedress_functionality_doctrine`** (15 U.S.C. § 1125(a)(3)) —
  the functionality doctrine's categorical bar to protection.
- **`tradedress_distinctiveness_requirement`** (15 U.S.C. § 1052(f))
  — the distinctiveness requirement.
- **`tradedress_registration_optional`** (15 U.S.C. § 1091(c)) —
  federal registration availability, tied to the functionality bar.
- **`tradedress_remedies_cross_reference`** (15 U.S.C. § 1116) — the
  remedies framework shared with other Lanham Act claims, cross-
  referencing rather than duplicating the existing Trademark Cease and
  Desist document.
- **`tradedress_ca_state_law`** (Cal. Bus. & Prof. Code § 17200) —
  the honest finding that California's general unfair competition
  statute is not itself a trade-dress-specific doctrine.

## Genuine corrections and findings

- **A significant correction**: the original research framing assumed
  the statute never uses the phrase "trade dress." Direct review of
  the full text of 15 U.S.C. § 1125 shows this is wrong — while
  § 1125(a)(1)(A), the general false-designation-of-origin cause of
  action, indeed does not use the phrase, § 1125(a)(3) explicitly
  does: "In a civil action for trade dress infringement under this
  chapter for trade dress not registered on the principal register,
  the person who asserts trade dress protection has the burden of
  proving that the matter sought to be protected is not functional."
- Confirmed § 1125(a)(3) places the burden of proving non-
  functionality on the party asserting unregistered trade dress
  protection.
- Confirmed California's Bus. & Prof. Code § 17200 is a generic
  unfair-competition definition that never mentions trademarks, trade
  dress, or product appearance — the clause states only the bare text
  and explicitly disclaims any verified California trade-dress-
  specific doctrine, rather than asserting a robust state-law layer
  that the primary source doesn't support.
- A genuine additional finding: 15 U.S.C. § 1091(c) (the Supplemental
  Register statute) explicitly lists "package" and "configuration of
  goods" as registrable subject matter, provided the matter "as a
  whole is not functional" — a clean statutory tie between
  registration eligibility and the functionality bar.

## Honest gap disclosed

The case law behind the distinctiveness split (inherent
distinctiveness for packaging versus secondary-meaning-only for
product design, commonly associated with *Wal-Mart Stores, Inc. v.
Samara Brothers, Inc.*, 529 U.S. 205 (2000)) and the functionality
test's "essential to use/affects cost or quality" formulation
(commonly associated with *TrafFix Devices, Inc. v. Marketing
Displays, Inc.* and *Inwood Laboratories*) could not be verified —
CourtListener was confirmed still rate-limited via a live attempt.
These doctrines are stated in the relevant clauses' `body` fields as
widely-reported legal principles, with the non-verification disclosed
explicitly in each `gap` field; neither case appears in any
`citations` array — only the statutory text that was actually fetched
is cited.

## Method

Fetched 15 U.S.C. §§ 1125, 1091, 1052, and 1116, and Cal. Bus. &
Prof. Code § 17200, directly from `law.cornell.edu` and
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration. Independently re-confirmed the two
  case-law-dependent clauses contain no fabricated or placeholder
  quote text in their citations arrays — only genuinely fetched
  statutory sources.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`goodsServicesDescription` reused from the Trademark
  Registration/Cease and Desist documents; `ownerName` reused from
  existing corpus convention) independently confirmed to match. New
  fields: `tradeDressDescription`, `nonFunctionalityStatement`,
  `distinctivenessBasis`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Dress — Information Sheet
  (`trade_dress_info_sheet`), 8 clauses (6 authority + 2 drafting), in
  the Confidentiality & IP category. New fields:
  `tradeDressDescription`, `nonFunctionalityStatement`,
  `distinctivenessBasis`.
- Corpus: 1,436 → 1,444 clauses; 180 → 181 documents.
