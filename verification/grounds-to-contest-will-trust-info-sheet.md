# Estate Planning, new document: Grounds to Contest a Will or Trust — Information Sheet

## Why this document

Distinct from two existing corpus items rather than a duplicate of
either: the existing `will_testamentary_capacity` clause (in the Last
Will and Testament document) states the same statutory capacity test but
framed as a drafting-time requirement, not a contest ground; and the
existing No-Contest Clause Enforceability document covers the
enforceability of an in terrorem clause a testator writes INTO a will,
not the substantive grounds for challenging one. This document covers
the actual grounds a contestant could raise and the procedural basics of
raising them. First of wave 55's two Estate Planning documents.

## What this document covers

8 clauses: 2 drafting (purpose declaration, certification/signature) and
6 authority clauses, citing Cal. Prob. Code §§ 6100.5, 6104, 86, 48,
8250, 8270, 16061.7, and 16061.8:

- **`willcontest_capacity_ground`** (§ 6100.5(a)) — the two-part
  testamentary capacity test, independently re-verified and reframed
  around a contest (the existing clause frames the same subsection as a
  drafting-time requirement).
- **`willcontest_6104_invalidity_grounds`** (§ 6104) — the four
  procurement-based invalidity grounds: duress, menace, fraud, and undue
  influence.
- **`willcontest_undue_influence_definition`** (§ 86) — **a key finding**:
  answers whether "undue influence" is defined for a will/trust contest
  the same way it's defined for elder financial abuse.
- **`willcontest_standing_and_procedure`** (§§ 48, 8250(a)) — the
  "interested person" standing concept and the pre-admission contest
  procedure.
- **`willcontest_postprobate_revocation_deadline`** (§ 8270) — the
  120-day post-admission deadline and its minor/incompetent exception.
- **`willcontest_trust_contest_deadline`** (§§ 16061.7(a)(1), 16061.8) —
  **a second key finding**: a trust contest runs on an entirely
  different, notice-triggered clock, not the will-contest deadlines.

## Genuine corrections and findings

- **The undue-influence definitional question, resolved precisely**:
  § 6104 itself defines nothing. A separate section, § 86 (added 2014),
  cross-references the same Welf. & Inst. Code § 15610.70 definition
  already covered by the corpus's existing elder-abuse clause — but the
  Legislature's own text states this only *supplements* the common-law
  meaning rather than replacing it. The document states this precisely
  rather than assuming the two contexts share one definition by default,
  and doesn't re-quote § 15610.70's text since the existing elder-abuse
  clause already covers it.
- **Will and trust contests do not share one procedural clock**:
  pre-probate will contests (§ 8250) have no fixed outer deadline of
  their own; post-admission revocation petitions (§ 8270) carry a
  120-day deadline; trust contests (§ 16061.8) run on a separate
  120/60-day mechanism keyed to trustee notice under § 16061.7 — three
  genuinely distinct timing regimes, not one rule restated three ways.
- Confirmed the § 6104 grounds only invalidate execution/revocation "to
  the extent" actually procured by the listed misconduct — not a
  blanket rule that any duress/fraud automatically voids an entire will.

## Honest gap disclosed

No case law was independently verified or cited — statutory text only.
Forgery, due-execution defects, and beneficiary-disqualification grounds
were not covered. The separate rule for contesting a personal
representative's appointment (§ 8004) and the executor's no-duty-to-
defend-until-appointed rule (§ 8250(b)) were not restated.

## Method

Fetched all eight Probate Code sections directly from
`leginfo.legislature.ca.gov`, each independently re-fetched with a
distinct User-Agent/Accept-Language combination and confirmed
byte-identical after whitespace normalization. All 8 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 8270(a)/(b)
  correctly disclosed as one source; §§ 48/8250, and §§ 16061.7/16061.8
  (disclosed as substantively linked though independently numbered)
  correctly handled; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose of This Information
  Sheet," "Certification of Understanding").
- Field names (`decedentName`, `dateOfDeath`, `countyOfFiling`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields — the agent confirmed
  `contestantName`, initially assumed to exist, is not actually present
  anywhere in the corpus and was not invented.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Grounds to Contest a Will or Trust — Information Sheet
  (`grounds_to_contest_will_trust_info_sheet`), 8 clauses (6 authority +
  2 drafting), in the Estate Planning category. No new fields.
- Corpus: 2,085 → 2,093 clauses; 267 → 268 documents. First document of
  wave 55.
