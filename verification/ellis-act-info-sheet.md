# Real Estate, new document: Ellis Act — Information Sheet

## Why this document

Confirmed by grep that "Ellis Act" and "7060" had zero hits anywhere in
the corpus. Explicitly distinguished from the existing "California
Statewide Just Cause Eviction and Rent Cap (AB 1482)" document — the
Ellis Act is a separate statutory mechanism for a landlord to exit the
rental business entirely, not a category of just cause defined by the
AB 1482 framework. Third of wave 55's four documents (first of the two
Real Estate documents processed, though delivered fourth).

## What this document covers

8 clauses: 2 drafting (purpose declaration, closing acknowledgment) and
6 authority clauses, citing Cal. Gov. Code §§ 7060, 7060.1, 7060.2,
7060.4, 7060.5, 7060.6, and 7060.7:

- **`ellisact_core_right_to_withdraw`** (§§ 7060(a), (b)(1), 7060.7) —
  the central statewide right to withdraw all accommodations from the
  rental market, and the Legislature's stated intent to supersede *Nash
  v. City of Santa Monica*.
- **`ellisact_all_units_no_partial_withdrawal`** (§ 7060.7(d)) — the
  all-units requirement and narrow owner-occupancy exceptions.
- **`ellisact_notice_and_date_of_withdrawal`** (§§ 7060.4(a)-(b),
  7060.5) — **a key finding**: the widely-cited 120-day date-of-
  withdrawal rule is conditional, not self-executing statewide.
- **`ellisact_elderly_disabled_extension`** (§§ 7060.4(b), 7060(b)(2)) —
  the one-year extension for a qualifying elderly or disabled tenant,
  itself nested within the same conditional framework.
- **`ellisact_rerental_restrictions`** (§§ 7060.2, 7060.7(d)(2)) — the
  re-rental first-offer obligation and damages exposure, plus **a second
  key finding**: no state-law dollar figure for relocation assistance
  exists anywhere in the chapter.
- **`ellisact_scope_of_preemption_and_ud_defense`** (§§ 7060.1, 7060.6) —
  what the Act does not preempt, and a tenant's statutory defense in an
  unlawful detainer action.

## Genuine corrections and findings

- **The central finding**: the commonly-cited "120-day notice,"
  "one-year elderly/disabled extension," and "2-to-10-year re-rental
  restriction" figures are not self-executing statewide rules — Gov.
  Code §§ 7060.2, 7060.4, and 7060.5 are all framed as things a public
  entity with an existing price-control system "may require by statute
  or ordinance, or by regulation." The statute's own text ties the
  120-day date-of-withdrawal rule to "that situation" (an entity that
  has adopted an implementing ordinance). Every relevant clause states
  this conditional structure explicitly rather than presenting it as a
  blanket state mandate.
- **No state-law relocation-assistance dollar figure exists**: unlike
  Civil Code § 1946.2's one-month's-rent figure for AB 1482 no-fault
  terminations, nothing in Gov. Code §§ 7060-7060.7 sets a dollar amount
  or formula for Ellis Act relocation assistance — local ordinances (San
  Francisco, Los Angeles, etc.) set actual figures, not catalogued here.
- Confirmed the all-units requirement precisely: a landlord may not
  selectively withdraw only some units while continuing to rent others
  — the statutory right is to withdraw the entire property (or parcel,
  for a small structure).
- Confirmed a tenant's statutory unlawful-detainer defense under
  § 7060.6 — the Act's requirements are judicially enforceable, not
  merely aspirational.

## Honest gap disclosed

The document does not catalog any specific local implementing ordinance
(San Francisco, Los Angeles, Santa Monica, West Hollywood, etc.), nor
does it determine whether any specific public entity has adopted one.
The *Nash v. City of Santa Monica* decision itself was not independently
verified — only the Legislature's stated intent to supersede it.
Section 7060.1(d)'s list of other non-superseded statutory schemes is
summarized, not independently verified for what those other laws
themselves require.

## Method

Fetched all relevant sections of Gov. Code Chapter 12.75 (§§ 7060
through 7060.7) directly from `leginfo.legislature.ca.gov`, each
independently re-fetched with distinct User-Agent strings, headers, and
query parameters, and confirmed byte-identical after whitespace
normalization. All 20 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All eight sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source throughout; separate
  sections (e.g. § 7060.7 alongside § 7060, § 7060.6 alongside § 7060.1)
  correctly disclosed as independent corroboration; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`landlordName`, `tenantName`, `propertyAddress`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly (same set as the AB 1482 document).
  No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Ellis Act — Information Sheet (`ellis_act_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Real Estate category. No
  new fields.
- Corpus: 2,101 → 2,109 clauses; 269 → 270 documents. Third document of
  wave 55.
