# Estate Planning, new document: Probate Homestead Set-Aside — Information Sheet

## Why this document

Confirmed by grep that "probate homestead" and "6520-6528" had zero
genuine hits anywhere in the corpus — the one incidental hit was a
Family Code § 2337 clause's `gap` text merely listing "probate
homestead rights" as an unexplored cross-reference, not substantive
coverage. Read the existing Homestead Exemption document in full
first — confirmed this is a genuine, non-duplicative companion: that
document covers a living debtor's CCP § 704.710 creditor-exemption
homestead; this document covers a distinct, post-death right a
probate court exercises during estate administration under the
Probate Code. First of wave 67's four documents (Real Estate +
Estate Planning alternation).

## What this document covers

8 clauses: 2 drafting (purpose, signature/acknowledgment) and 6
authority clauses, citing Cal. Prob. Code §§ 6520, 6521, 6522(a)-(b),
6523(a)-(b), 6524, 6525(a), 6526(a)-(c), and 6528:

- **`probatehomestead_who_may_petition`** (§§ 6520, 6521, 6525(a)) —
  who may petition ("any interested person") and for whose use
  (surviving spouse and/or minor children).
- **`probatehomestead_eligible_property`** (§ 6522(a)-(b)) — the
  order of preference for eligible property and the third-person
  consent limit.
- **`probatehomestead_court_discretion_selection`** (§ 6523(a)-(b)) —
  the factors the court must consider and its discretion over
  selection, term, and conditions — **a key finding**: the statutory
  text imposes no fixed dollar cap or fixed duration, unlike the CCP
  homestead exemption's formula.
- **`probatehomestead_duration_and_effect`** (§ 6524) — the outer
  time limits (never beyond the spouse's lifetime or a child's
  minority) and the set-aside's relationship to ongoing estate
  administration.
- **`probatehomestead_creditor_priority`** (§ 6526(a)-(c)) — the
  three-part rule on liability for lien-secured claims, non-liability
  for claims against the recipient personally, and continued
  liability to successors after administration.
- **`probatehomestead_distinct_from_declared_homestead`** (§ 6528) —
  **a key finding used as the basis for the overlap analysis**: the
  statute itself expressly states this chapter does not affect a
  separate declaration of homestead, confirming the two rights are
  legally distinct.

## Genuine corrections and findings

- **The central finding**: confirmed the probate homestead has no
  fixed dollar-value cap or fixed term in its own statutory text —
  both are committed to the court's discretion applied to § 6523(a)'s
  listed factors — a genuine structural difference from the CCP
  homestead exemption's formula-based cap, which this corpus's
  existing Homestead Exemption document covers.
- Confirmed the order of preference for eligible property (community/
  quasi-community first, then property owned in common, separate
  property, or — if the decedent was unmarried — the decedent's own
  property), rather than treating all eligible property as
  interchangeable.
- Confirmed the statute's own express disclaimer (§ 6528) that this
  chapter doesn't affect a separate declaration of homestead —
  independent textual confirmation that the two rights are distinct,
  used to ground the document's own framing.
- Confirmed the creditor-priority rule's own cross-reference to the
  CCP homestead exemption (§ 6526(a)) rather than assuming the two
  regimes are unrelated for creditor purposes.

## Honest gap disclosed

The Legal Estates Principal and Income Law (Civ. Code §§ 731 et
seq.), cross-referenced by § 6524 for the parties' rights during the
set-aside period, was not independently fetched or verified. The
Probate Code § 1220 notice provisions cross-referenced by § 6525(a),
and § 6527 (the court's power to modify or terminate a set-aside),
were fetched by the agent as part of the same primary-source page but
not built into their own clauses. The current CCP § 704.710 dollar
formula was not re-verified here — it's addressed in this corpus's
separate Homestead Exemption document and reused by reference rather
than re-fetched.

## Method

Fetched Cal. Prob. Code §§ 6520-6528 (all nine sections in the
chapter) from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
11 citation quotes across the 6 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All nine statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 6522(a)/(b),
  § 6523(a)/(b), and § 6526(a)/(b)/(c) subsection pairs each correctly
  disclosed as one statutory section, not independent of each other;
  §§ 6520, 6521, and 6525(a) correctly disclosed as independent,
  separately-numbered sections; correct as delivered.
- Checked for duplicate clause IDs and duplicate titles against the
  full corpus (none).
- Field names (`decedentName`, `petitionerName`,
  `survivingSpouseName`, `dateOfDeath`, `propertyAddress`,
  `dateSigned`, `cityOfExecution`) independently confirmed to match
  existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Probate Homestead Set-Aside — Information Sheet
  (`probate_homestead_set_aside_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Estate Planning category. No new fields.
- Corpus: 2,441 → 2,449 clauses; 315 → 316 documents. First document
  of wave 67.
