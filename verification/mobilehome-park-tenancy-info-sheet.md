# Real Estate, new document: Mobilehome Park Tenancy (Mobilehome Residency Law) — Information Sheet

## Why this document

The corpus's existing just-cause eviction/rent cap clauses mention
mobilehomes only as a passing exemption category. Neither that
document nor the Residential Lease Agreement addresses California's
Mobilehome Residency Law itself — a wholly separate tenancy scheme
where the resident owns the mobilehome and rents only the site.

## What this document covers

8 clauses: 2 drafting (tenancy declaration, acknowledgment) and 6
authority clauses:

- **`mobilehome_tenancy_structure_definitions`** (Civ. Code §§ 798.9,
  798.12, 798.3(a), 798.4, 798.2) — the split-ownership structure via
  the statute's own definitions.
- **`mobilehome_rental_agreement_requirements`** (§ 798.15;
  § 798.16(b)) — required rental agreement contents and the return
  deadline.
- **`mobilehome_rules_waiver_protection`** (§ 798.19; § 798.56(a)(4))
  — the anti-waiver rule and the "reasonable rule" standard.
- **`mobilehome_termination_grounds`** (§ 798.56(a); § 798.55(a)) —
  the statute's own closed list of termination grounds.
- **`mobilehome_notice_periods`** (§ 798.30; § 798.55(b)(1);
  § 798.56(a)(7)(B)) — notice periods for rent increases and
  termination.
- **`mobilehome_sale_in_place`** (§ 798.73; § 798.74(a),(c),(e)(3)) —
  the right to sell the mobilehome in place and the park's limited
  approval discretion.

## Genuine corrections and findings

- **A correction to the original framing**: the chapter is Civ. Code
  §§ 798-799.13 (Chapter 2.5, "Mobilehome Residency Law"), not
  "799.11ish" — confirmed directly from the leginfo table-of-contents
  header on every section page fetched.
- Confirmed the basic tenancy structure: the homeowner owns the
  mobilehome and rents only the site, via the statute's own
  definitions of "homeowner," "tenancy," "mobilehome," "mobilehome
  park," and "management."
- Confirmed § 798.56(a)'s termination grounds are an express closed
  list ("only for one or more of the following reasons") — 6 of 7
  enumerated grounds quoted verbatim; the criminal-conviction ground
  (a dense Penal Code cross-reference) is summarized rather than
  quoted, disclosed as such.
- Confirmed distinct notice periods: 90 days for a rent increase
  (§ 798.30), 60 days for general termination (§ 798.55(b)(1)), and
  6-12 months for a change-of-use termination (§ 798.56(a)(7)(B)).
- Confirmed the sale-in-place right and the park's narrow, enumerated
  grounds for withholding buyer approval, with deemed-approval on
  management's silence (§ 798.74(e)(3)).

## Honest gaps disclosed

- Section 798.56(a)(5) and (a)(7)'s full procedural sub-rules
  (nonpayment cure sequence; change-of-use notice conditions) are only
  partially reproduced.
- Section 798.73's specific age/condition exceptions permitting forced
  removal are summarized, not quoted in full.
- Section 798.74's fee-crediting/refund provisions and documentation
  limits are not addressed.
- Section 798.3(b)'s RV-inclusion rules and § 798.11's "resident"
  (broader than "homeowner") are noted but not developed into their
  own clauses.
- Local mobilehome-park rent-stabilization ordinances are explicitly
  disclosed as uncatalogued, consistent with how the corpus's existing
  just-cause/rent-cap clauses handle local law.

## Method

Fetched Civ. Code §§ 798.2, 798.3, 798.4, 798.9, 798.12, 798.15,
798.16, 798.19, 798.30, 798.55, 798.56, 798.73, and 798.74 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All 30 citation quotes programmatically confirmed as exact
substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`homeownerName`, `monthlyRent`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus
  convention. New fields: `parkOwnerName`, `parkName`, `parkAddress`,
  `spaceNumber`, `mobilehomeDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Mobilehome Park Tenancy (Mobilehome Residency Law) —
  Information Sheet (`mobilehome_park_tenancy_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Real Estate category. New fields:
  `parkOwnerName`, `parkName`, `parkAddress`, `spaceNumber`,
  `mobilehomeDescription`.
- Corpus: 1,548 → 1,556 clauses; 195 → 196 documents. Completes wave
  36 (UI Overpayment and Fraud, Trademark Opposition and Cancellation,
  Close Corporation, Mobilehome Park Tenancy).
