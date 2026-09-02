# Confidentiality & IP, new document: Copyright Fair Use Doctrine — Information Sheet

## Why this document

The corpus's existing Copyright Registration, Assignment, and DMCA
documents don't explain the fair use doctrine itself — a few existing
clauses mention "fair use" only in passing (e.g., the DMCA counter-
notification's sworn-statement scope clause). Confirmed by reading all
5 existing "fair use" hits before writing anything.

## What this document covers

7 clauses: 2 drafting (self-assessment record, signature/
certification) and 5 authority clauses:

- **`fairuse_statutory_text_and_illustrative_purposes`** (17 U.S.C.
  § 107; § 101) — the statutory text and its illustrative, non-
  exhaustive list of purposes.
- **`fairuse_four_statutory_factors`** (§ 107) — the four statutory
  factors verbatim, plus the unpublished-work rule.
- **`fairuse_transformative_use_is_judicial_not_statutory`**
  (*Campbell v. Acuff-Rose Music, Inc.*, 510 U.S. 569 (1994)) —
  "transformative use" is a judicial gloss on factor one, not
  statutory text.
- **`fairuse_no_fixed_quantitative_rule`** (§ 107; *Campbell*) — no
  fixed percentage, word count, or bright-line rule.
- **`fairuse_affirmative_defense_and_burden`** (*Campbell*) — fair use
  as an affirmative defense, and the burden-of-proof question.

## Genuine corrections and findings

- Confirmed § 107's operative sentence and illustrative-purposes list,
  and independently confirmed via § 101's "including" / "such as . . .
  illustrative and not limitative" language that both the purposes
  list and the "shall include" factors list are non-exhaustive.
- Confirmed "transformative use" appears nowhere in § 107's text — it
  comes entirely from *Campbell v. Acuff-Rose Music*, verified via
  Cornell LII's official Supreme Court slip-opinion archive and then
  independently cross-checked against CourtListener's opinion text
  (cluster 112936) once CourtListener's rate limit cleared mid-session,
  which also supplied accurate U.S. Reports pin cites.
- **A precision correction**: the "no bright-line rule" principle is
  explicitly *Campbell*'s general holding about the whole doctrine,
  not something the statute itself states — sourced carefully as
  case law, not conflated with the statutory text.
- **A precision correction on burden of proof**: § 107 is genuinely
  silent on who bears the burden. *Campbell* characterizes fair use as
  an affirmative defense and notes a proponent's evidentiary
  difficulty without favorable market evidence, but that
  characterization was made in a specific factor-four/summary-judgment
  context, not as a categorical burden-allocation holding — disclosed
  explicitly rather than overstated.

## Honest gap disclosed

A genuine source discrepancy: Cornell's slip-opinion archive renders
"bright line rules" / "case by case analysis" unhyphenated, while
CourtListener's paginated opinion text (the corrected, published
version) hyphenates both. Cornell's own page notes the slip opinion
"is subject to formal revision before publication." The hyphenated,
paginated CourtListener wording was used as the quoted text, with this
discrepancy disclosed in the relevant clause's `gap` field.

## Method

Fetched 17 U.S.C. §§ 107 and 101 directly from `law.cornell.edu` and
`uscode.house.gov`, and *Campbell v. Acuff-Rose Music* from Cornell's
Supreme Court slip-opinion archive and (once reachable)
CourtListener's opinion text, each verified against a second,
independent fetch — confirmed consistent apart from the disclosed
hyphenation discrepancy. All citation quotes programmatically
confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently (statute: distinct
  User-Agents; case law: two independent primary sources, Cornell then
  CourtListener); confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none; one initially-generic title was proactively renamed by the
  research agent to avoid a collision before delivery).
- Field names (`copyrightedWorkDescription`, `ownerName`,
  `useDescription`, `dateSigned`) independently confirmed to match
  existing corpus convention. New fields: `userName`,
  `purposeAndCharacterNotes`, `natureOfWorkNotes`, `amountUsedNotes`,
  `marketEffectNotes`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Copyright Fair Use Doctrine — Information Sheet
  (`copyright_fair_use_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `userName`, `purposeAndCharacterNotes`, `natureOfWorkNotes`,
  `amountUsedNotes`, `marketEffectNotes`.
- Corpus: 1,654 → 1,661 clauses; 209 → 210 documents.
