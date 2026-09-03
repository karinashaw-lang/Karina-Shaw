# Ending employment, new document: No-Rehire Clause Restriction in Settlement Agreements — Information Sheet

## Why this document

Confirmed by grep that "1002.5" and "no-rehire" had zero hits anywhere
in the corpus. Distinguished from the existing Non-Disparagement
Agreement document, which covers a different statute (Code Civ. Proc.
§ 1001, restricting confidentiality/non-disparagement provisions over
harassment/discrimination/retaliation facts) — § 1002.5 addresses a
narrower, distinct subject: whether a settling employee can be barred
from future employment. Third of wave 56's four documents.

## What this document covers

7 clauses: 2 drafting (purpose declaration, acknowledgment) and 5
authority clauses, citing Cal. Code Civ. Proc. § 1002.5(a)-(c):

- **`norehire_ccp_1002_5_scope`** (§ 1002.5(a)) — the core voiding rule:
  a no-rehire provision barring future employment with the employer or
  its corporate family is void as a matter of law, prospective to
  agreements entered on or after January 1, 2020.
- **`norehire_ccp_1002_5_aggrieved_person_definition`** (§ 1002.5(c)(1))
  — the "aggrieved person" definition limiting who the rule protects.
- **`norehire_ccp_1002_5_good_faith_exception`** (§ 1002.5(b)(1)) — the
  end-of-employment carve-out and the pre-claim, documented good-faith
  determination exception for sexual harassment, sexual assault, or
  criminal conduct.
- **`norehire_ccp_1002_5_legitimate_reason_exception`** (§ 1002.5(b)(2))
  — a separate, broader "legitimate non-discriminatory or
  non-retaliatory reason" exception with different scope and no stated
  documentation/timing requirement.
- **`norehire_ccp_1002_5_definitions_and_history`** (§ 1002.5(c)(2)-(3),
  history notes) — the "sexual assault" and "sexual harassment"
  definitions, and the statute's enactment/amendment history.

## Genuine corrections and findings

- **Two textually distinct exceptions, not one general "good reason"
  carve-out**: the sexual-harassment/assault/criminal-conduct exception
  under (b)(1)(B) requires the determination be made and documented
  *before* the claim was filed and concern only those specific
  categories; the (b)(2) legitimate-reason exception is broader, with no
  comparable documentation or timing requirement stated in the text —
  confirmed by directly comparing the two subdivisions' wording rather
  than assuming they're interchangeable.
- Confirmed "aggrieved person" is a defined, limiting term — someone who
  in good faith filed a claim through one of four listed channels — the
  statute's text does not extend the voiding rule to a settling party
  who never filed a claim.
- Confirmed the void-as-a-matter-of-law consequence is tied to
  agreements "entered into on or after January 1, 2020" — prospective,
  not retroactive, per the statute's own text.
- Honestly flagged, without resolving, an ambiguity: the statute's own
  text does not indicate whether a later 2021 amendment (AB 2143)
  changed the January 1, 2020 operative date attached to the voiding
  rule.

## Honest gap disclosed

The cross-referenced definitions in Penal Code §§ 243.3, 261, 262,
264.1, 286, 287, 289, and Government Code § 12940(j) were not
independently fetched or verified — only § 1002.5's own text naming
them was confirmed.

## Method

Fetched Cal. Code Civ. Proc. § 1002.5 directly from
`leginfo.legislature.ca.gov`, independently re-fetched with a distinct
User-Agent string (Chrome/Windows UA vs. curl/8.4.0), and confirmed
byte-identical after whitespace normalization. All 5 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- Section fetched twice independently with genuinely distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all citations
  correctly disclosed as subdivisions of a single statutory section, not
  independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Acknowledgment").
- Field names (`employeeName`, `companyName`, `dateSigned`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: No-Rehire Clause Restriction in Settlement Agreements —
  Information Sheet (`no_rehire_clause_restriction_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Ending employment category.
  No new fields.
- Corpus: 2,131 → 2,138 clauses; 273 → 274 documents. Third document of
  wave 56.
