# Real Estate, new document: Adverse Possession — Information Sheet

## Why this document

The corpus's existing Boundary Line Agreement and Quiet Title Action
documents mention adverse possession only to distinguish themselves
from it. This document gives the doctrine itself the depth it lacked.

## What this document covers

7 clauses: 2 drafting (possession-history declaration, declarant
certification) and 5 authority clauses:

- **`adversepossession_two_statutory_pathways`** (Code Civ. Proc.
  § 322; § 324) — the two statutory pathways: color of title and bare
  claim of right.
- **`adversepossession_possession_manner_requirements`** (Code Civ.
  Proc. § 323; § 325(a)) — the manner-of-possession tests, different
  under each pathway.
- **`adversepossession_tax_payment_requirement`** (Code Civ. Proc.
  § 325(b)) — the property-tax-payment requirement and its
  certified-record proof mechanism.
- **`adversepossession_five_year_limitations_period`** (Code Civ.
  Proc. § 318; § 321) — the five-year statutory period.
- **`adversepossession_government_land_barred`** (Civ. Code § 1007) —
  the bar against adverse possession of publicly owned or dedicated
  land.

## Genuine corrections and findings

- **A significant correction to the common five-element framing**:
  the statutory text does not use the words "hostile," "open," or
  "notorious" anywhere. Those are judicial/secondary-source glosses.
  The actual statutory language is "claim of title, exclusive of
  other right" (§§ 322, 324) and "deemed to have been held adversely"
  — narrower and more precise than the common mnemonic suggests.
- Confirmed two distinct statutory pathways with different
  manner-of-possession tests: the color-of-title branch (§ 323) is
  broader (cultivation, enclosure, fuel/pasturage use, the farm/lot
  rule), while the bare claim-of-right branch (§ 325(a)) is narrower
  (enclosure or cultivation only).
- A genuine textual finding, flagged as the agent's own reading rather
  than a verified judicial holding: § 325(b)'s own "under the
  provision of any section of this code" language textually extends
  the tax-payment requirement beyond its own claim-of-right branch to
  the color-of-title branch as well.
- Confirmed the five-year period from two angles: § 318 bars the true
  owner's recovery action, and § 321 sets up a presumption of
  title-holder possession that is rebutted by five years of adverse
  holding.
- **A correction to the original framing's guessed citation**: the
  government-land bar is Civ. Code § 1007, not a Code of Civil
  Procedure section as originally guessed. Confirmed its unqualified
  exception for land "dedicated to a public use by a public utility,
  or dedicated to or owned by the state or any public entity."

## Honest gaps disclosed

- **Tacking** (combining successive possessors' periods under
  privity) is not addressed anywhere in Code Civ. Proc. §§ 315-330 —
  it is purely a case-law doctrine. CourtListener returned HTTP 429
  (daily quota exhausted) on the first search attempt, so this
  sub-topic was omitted entirely rather than built on an unverified
  case.
- **Permissive use defeating a claim** — no statutory text states
  this explicitly (only the "claim of title, exclusive of other
  right" language, which courts construe this way); the same
  CourtListener rate limit blocked case-law verification, so no
  dedicated clause asserts this rule. The gap is disclosed candidly in
  the two-pathways clause instead.
- Not all commonly-cited "elements" are explicitly statutory —
  "actual," "open," "notorious," and "hostile" are judicial glosses,
  not statutory words; only continuity (5 years), the
  manner-of-possession tests, tax payment, and "held adversely" are
  directly in the statutory text.

## Method

Fetched Code Civ. Proc. §§ 318, 321, 322, 323, 324, 325, and Civ. Code
§ 1007 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical. All citation quotes programmatically
confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`propertyAddress`, `legalDescription`, `parcelNumber`,
  `recordingCounty`) independently confirmed to match existing corpus
  convention (Quiet Title Action, Boundary Line Agreement, deed
  documents). New fields: `possessorName`, `recordOwnerName`,
  `possessionStartDate`, `possessionMannerDescription`,
  `taxPaymentDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Adverse Possession — Information Sheet
  (`adverse_possession_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Real Estate category. New fields: `possessorName`,
  `recordOwnerName`, `possessionStartDate`,
  `possessionMannerDescription`, `taxPaymentDescription`.
- Corpus: 1,487 → 1,494 clauses; 187 → 188 documents. Completes wave
  34 (Benefit Corporation, Domain Name Dispute, Deferred Compensation
  and Equity Vesting at Termination, Adverse Possession).
