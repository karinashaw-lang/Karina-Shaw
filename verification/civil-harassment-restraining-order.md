# Family Law, ninth document: Civil Harassment Restraining Order

## Why this document

Continuing the "go as deep as humanely possible" build-out. This is an
informational document describing California's civil harassment
restraining order process — for harassment outside a family, dating, or
cohabitant relationship (which is instead covered by the separate
Domestic Violence Prevention Act) — distinct from anything else in the
Family Law category. Sourced from California Code of Civil Procedure
§ 527.6, Penal Code § 273.6, and Family Code § 6211.

## What this document covers

10 clauses: 3 drafting (incident declaration, relief checklist
reference, and verification/signature) and 7 authority clauses:

- **`harassment_definition`** (§ 527.6(b)(3)) — the real, four-part
  statutory test for "harassment."
- **`course_of_conduct_definition`** (§ 527.6(b)(1)) — the statutory
  definition of "course of conduct" and its constitutionally-protected-
  activity exclusion.
- **`tro_mechanism`** (§ 527.6(d)-(g)) — the temporary restraining order
  mechanism, same-day ruling requirement, and the 21/25-day duration
  and hearing deadline.
- **`order_contents`** (§ 527.6(b)(6)(A), (c)) — what a restraining
  order may include, with an honest flag that the statute's own text
  authorizes only a general distance order, not itemized protected
  locations (home/workplace/school) as some other California statutes
  do.
- **`order_duration`** (§ 527.6(j)(1)-(2)) — the real 5-year maximum
  duration, one 5-year renewal without a further showing, and the
  3-year default when an order's expiration date is left blank.
- **`violation_consequences`** (§ 527.6(t); Penal Code § 273.6(a)-(b))
  — the misdemeanor penalty structure for violating an order, including
  the enhanced penalty for a violation causing physical injury.
- **`dvpa_distinction`** (§ 527.6(w); Family Code § 6211) — an explicit,
  honest boundary: this document does not cover Domestic Violence
  Prevention Act proceedings, which apply to a different, defined set
  of relationships under a different statute.

## Method

Fetched CCP § 527.6, Penal Code § 273.6, and Family Code § 6211
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical, including confirming the current CCP § 527.6 text
reflects the version amended effective January 1, 2026.

## Sensitivity handling

Per this project's standing "inform, never advise" rule, applied with
extra care here: all clause bodies state only what the statute itself
provides, with no guidance on when someone should seek an order or how
to build a case. The drafting clauses are neutral, fact-recording
fields rather than persuasive or advisory language.

## Defect caught and fixed during integration

Two clauses (`tro_mechanism`, `order_contents`) cited a single statutory
section each but initially lacked the standard single-source disclosure
sentence — added during integration.

## Verification

- All three governing sections fetched directly, then re-verified on a
  second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).

## Net changes

- New document: Civil Harassment Restraining Order
  (`civil_harassment_restraining_order`), 10 clauses (7 authority + 3
  drafting), in the Family Law category.
- Corpus: 475 → 485 clauses; 65 → 66 documents.
