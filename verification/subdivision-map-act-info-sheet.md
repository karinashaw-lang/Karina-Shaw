# Real Estate, new document: Subdivision Map Act — Information Sheet

## Why this document

Second processed item of wave 110 (Real Estate slot). Several
candidates (Mello-Roos, Megan's Law, quiet title, prescriptive
easement/necessity, HOA lien foreclosure, Natural Hazard Disclosure,
Right to Repair) were confirmed already covered. Documentary transfer
tax looked open at the document level but a clause-level check found
substantive existing treatment inside the Quitclaim Deed document's
`qcd_documentary_transfer_tax` clause — a genuine near-miss caught
before committing. The agent confirmed the Subdivision Map Act itself
(Gov. Code § 66410 et seq.) had only passing, non-substantive
references in three existing clauses (citing it merely as an example
of "any Subdivision Map Act approval" without stating any of its
rules) — a genuinely open topic.

## What this document covers

8 clauses: 2 drafting (intro, closing) and 6 authority clauses, citing
Gov. Code §§ 66424, 66426, 66426(a), 66412(d), 66499.30(a), (e),
66452.6(a)(1), (d), and 66473.5:

- **`submapact_subdivision_definition`** — the statutory definition of
  "subdivision," including its reach beyond physical land division to
  condominium projects and stock cooperative conversions.
- **`submapact_tentative_final_map_requirement`** — the five-or-more-
  parcel threshold for the full tentative-and-final-map procedure and
  its six statutory carve-outs to the simpler parcel map procedure.
- **`submapact_lot_line_adjustment_exemption`** — the lot line
  adjustment exemption and its conditions and review limits.
- **`submapact_sale_lease_finance_prohibition`** — the prohibition on
  selling, leasing, or financing land before a required map is
  recorded, and its own stated conditions.
- **`submapact_tentative_map_expiration`** — the 24-month base
  expiration period, its tolling and extension mechanics, and the
  inflation-adjusted dollar threshold tied to the extension.
- **`submapact_general_plan_consistency`** — the required finding that
  a proposed subdivision is consistent with the applicable general or
  specific plan.

## Genuine findings

- **A significant correction to the agent's own initial framing**: the
  agent expected a relatively simple "file a map" scheme. Reading the
  actual statutes showed a far more layered structure: § 66426's
  five-parcel threshold has six separate statutory carve-outs that
  instead require only a parcel map; § 66412 contains an extensive list
  of categorical exemptions well beyond the commonly known lot-line-
  adjustment exemption; and tentative map expiration under § 66452.6 is
  not a flat term — it starts at 24 months but is tolled by development
  moratoria and litigation stays and can be extended up to 10 years via
  a mechanism tied to an annually inflation-adjusted dollar threshold
  (flagged explicitly as a moving target, not a fixed figure, in the
  clause's gap field).
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not address the separate parcel-map-only threshold
for subdivisions of four or fewer parcels, does not state what legal
effect (if any) a violation of the § 66499.30 sale/lease/finance
prohibition has on the validity of a completed conveyance, does not
independently verify the currency of the inflation-adjusted dollar
threshold ($236,790 as fetched, subject to annual adjustment), does not
address vesting tentative maps' separate statutory rules, and does not
determine whether any specific property, transaction, or line
adjustment described in this document meets any of the statute's
definitions, thresholds, or exemptions.

## Method

Fetched Gov. Code §§ 66424, 66426, 66412, 66499.30, 66452.6, and
66473.5 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after isolating the statute-text container. CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 10 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-twenty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-125thVerify-SubMapAct/1.0") of all 6 sections —
all 10 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
layered exemption structure and the inflation-adjusted expiration
mechanic were both independently reconfirmed present in the freshly
fetched text. A personal spot-check confirmed the only prior corpus
references to "Subdivision Map Act" and "lot line adjustment" were
passing mentions in unrelated documents, not substantive coverage.

## Verification

- All 6 Government Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-twenty-fifth independent fetch during integration
  review; all 10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") collide with generic boilerplate titles already
  reused by dozens of other drafting clauses across the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field required (`proposedDivisionDescription`), confirmed
  genuinely new via a corpus-wide field-id lookup since the existing
  `developmentDescription` field is semantically tied to the Coastal
  Act's "development" concept; the remaining six fields
  (`propertyAddress`, `county`, `parcelNumber`, `ownerName`,
  `dateSigned`, `cityState`) confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Subdivision Map Act — Information Sheet
  (`subdivision_map_act_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. One new field
  (`proposedDivisionDescription`).
- Corpus: 3,647 → 3,655 clauses; 479 → 480 documents. Second processed
  item of wave 110.
