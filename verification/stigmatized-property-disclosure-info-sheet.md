# Real Estate, new document: Death-on-Property and HIV/AIDS-Status Disclosure ("Stigmatized Property") — Information Sheet

## Why this document

First document of wave 83. Read the existing Residential Purchase
Agreement document's TDS and Megan's Law clauses in full — confirmed
neither mentions death-on-property, "manner of death," or HIV/AIDS
status. Confirmed by grep that "1710.2" and "stigmatized" had zero
prior hits anywhere in the corpus. Confirmed non-duplicative.

## What this document covers

5 clauses: 2 drafting (declaration, acknowledgment) and 3 authority
clauses, citing Cal. Civ. Code §§ 1710.2(a)(1), (a)(1)(A)-(B),
(a)(2)(A)-(B), (a)(3), (b), (c), and (d):

- **`stigprop_death_no_duty_rule`** (§ 1710.2(a)(1), (a)(1)(A), (a)(3),
  (a)(2)(B)) — the three-year no-duty rule for disclosing an
  occupant's death or its manner, with no cause of action arising from
  non-disclosure, and the statutory "transferee" definition covering
  purchasers, lessees, and renters alike.
- **`stigprop_hiv_aids_no_duty`** (§ 1710.2(a)(1)(B), (b)) — **the
  central finding**: the separate HIV/AIDS-status no-duty rule carries
  NO time limit at all, unlike the three-year death rule — a genuinely
  distinct scope from the neighboring provision — plus the
  Legislature's stated intent to "occupy the field" on both subjects.
- **`stigprop_scope_and_misrepresentation_limit`** (§ 1710.2(c), (d),
  (a)(2)(A)) — the statute's own express limits: it does not alter
  other physical/mental-condition disclosure duties, and does not
  immunize an intentional misrepresentation made in response to a
  direct inquiry about deaths on the property.

## Genuine corrections and findings

- **The central finding**: confirmed precisely that the HIV/AIDS-status
  no-duty rule has no time limit, in contrast to the death/manner-of-
  death rule's explicit three-year window — a real structural
  asymmetry within the same statutory subdivision, verified
  word-for-word rather than assumed to mirror the death rule.
- Confirmed the statute uses only the undifferentiated phrase "the
  manner of death" — it does not itself categorize manner into
  natural/accidental/suicide/homicide — correctly declining to invent a
  taxonomy the statute's own text doesn't contain.
- Confirmed the intentional-misrepresentation carve-out is scoped
  specifically to "a direct inquiry... concerning deaths on the real
  property" — the statute's own text does not extend that carve-out
  language to the HIV/AIDS-status rule in the same terms.
- Correctly declined to interpret what the statute's "occupy the
  field" language does or does not preempt for local ordinances or
  common-law claims — disclosed as an open, unresolved question rather
  than asserted.

## Honest gap(s) disclosed

What counts as an "intentional misrepresentation" or a "direct
inquiry" under subdivision (d) is not defined by the statute's own
text and not resolved here. Whether or how "occupy the field"
preempts other disclosure regulation is not interpreted. No comparison
to other states' stigmatized-property statutes (lookback periods, or
their absence) is drawn beyond noting that they vary.

## Method

Fetched Cal. Civ. Code § 1710.2 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
9 citation quotes across the 3 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a twentieth
fetch (a distinct curl User-Agent string, "Groundtruth-TwentiethVerify-
StigProp/1.0"; the first attempt hit a transient SSL connection error,
resolved on retry) — all 9 quotes confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a twentieth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section (not independently corroborating); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") match titles used elsewhere in the corpus —
  confirmed as the established boilerplate-title reuse pattern, not a
  genuine collision.
- No new fields required — all three fields (`propertyAddress`,
  `sellerLandlordName`, `buyerTenantName`) reused from the existing
  corpus (42, 2, and 2 prior documents respectively — the same field
  set used by the existing Lead-Based Paint and Mold Disclosure
  documents, the closest structural analogs since § 1710.2 also covers
  both sale and lease/rental transfers).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Death-on-Property and HIV/AIDS-Status Disclosure
  ("Stigmatized Property," Civ. Code § 1710.2) — Information Sheet
  (`stigmatized_property_disclosure_info_sheet`), 5 clauses (3
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 2,867 → 2,872 clauses; 377 → 378 documents. First addition of
  wave 83.
