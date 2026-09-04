# Family Law, new document: Need-Based Attorney's Fees in Family Law Proceedings — Information Sheet

## Why this document

Third document of wave 86. Grepped the corpus for "2030," "attorney
fees," "attorney's fees," "need-based," "request for order," and
"2032" across all Family Law documents. Found that most "2030"/"2032"
hits were false positives (Stats. sunset dates, FLSA "just and
reasonable inference," probate compensation, unrelated prevailing-
party fee-shifting statutes) — but confirmed a genuine partial hit:
the existing `msa_attorneys_fees_parity` clause (used by the Marital
Settlement Agreement document) already quotes Family Code
§ 2030(a)(1)'s access-to-representation/income-and-needs language
verbatim. Also found `nullity_effect_of_judgment_and_fees`, which
cites the separate, fault-based § 2255 fee limit. Confirmed no
existing coverage of § 2030(a)(2)'s mandatory findings, § 2030(b)-(c)
timing/augmentation, § 2031's procedural mechanism, or § 2032's
"just and reasonable" standard/factors. Rather than duplicate the
existing § 2030(a)(1) clause, built out only the genuinely uncovered
subdivisions and cross-referenced the existing clause explicitly.

## What this document covers

7 clauses: 2 drafting (request declaration, relief requested) and 5
authority clauses, citing Cal. Fam. Code §§ 2030(a)(2), (b), (c),
2031(a)(1), (a)(2), (b), and 2032(a), (b):

- **`famfees_mandatory_findings_on_request`** (§ 2030(a)(2)) — the
  court's mandatory findings on disparity in access to funds and
  ability to pay, and the self-represented litigant's right to request
  the other party fund counsel.
- **`famfees_fees_timing_and_augmentation`** (§ 2030(b), (c)) — fees
  may cover services before or after the proceeding commenced, and the
  court's duty to augment or modify an award as the case (or an
  appeal) continues.
- **`famfees_pendente_lite_procedure`** (§ 2031(a)(1)-(2), (b)) — the
  motion/order-to-show-cause mechanism for a temporary fee order during
  the proceeding, the 15-day ruling deadline, and the without-notice
  oral-motion exception.
- **`famfees_just_and_reasonable_standard`** (§ 2032(a)) — the "just
  and reasonable under the relative circumstances" standard governing
  both whether to award fees and the amount.
- **`famfees_relative_circumstances_factors`** (§ 2032(b)) — the
  relative-circumstances factors (cross-referencing Family Code § 4320)
  and the rule that a requesting party's own resources are not
  themselves a bar to an award.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  suggested the statutory text contains the phrase "without regard to
  which party is the ultimately prevailing party." The agent
  independently confirmed, from the fetched current text of all three
  sections, that this phrase does not appear anywhere in §§ 2030-2032.
  Per the verification discipline, the document does not state or
  paraphrase this as statutory text — the phrase is simply omitted
  rather than fabricated.
- Correctly declined to duplicate the existing `msa_attorneys_fees_parity`
  clause's § 2030(a)(1) citation — the new set's `gap` fields
  explicitly cross-reference that existing clause rather than
  re-quoting it.
- Correctly disclosed that § 2032(b)'s cross-reference to Family Code
  § 4320 (the spousal-support factor list) is named but not
  independently fetched or verified — the document does not claim to
  state § 4320's factors, only that § 2032(b) points to them.

## Honest gap(s) disclosed

Family Code § 4320's own factor list is not quoted or independently
verified. Code of Civil Procedure §§ 585-586 (default judgment,
cross-referenced by § 2031(b)) are not independently fetched. No
Judicial Council form or local-court procedural detail is described —
only the statutory text itself. This document does not state how a
court weighs conflicting factors on a particular record, or resolve
any specific fee request.

## Method

Fetched Cal. Fam. Code §§ 2030, 2031, and 2032 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 10 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a thirty-fourth fetch (a distinct curl
User-Agent string, "Groundtruth-34thVerify-FamFees/1.0") of all three
sections — all 10 quotes confirmed clean, and independently
re-confirmed that "prevailing party" does not appear anywhere in the
fetched text of any of the three sections, corroborating the agent's
finding.

## Verification

- All three statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-fourth independent fetch during integration review; all 10
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section, and which (§ 2032, cross-referenced to but
  independent of §§ 2030/2031) are genuinely separate; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 10
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`petitionerName`,
  `respondentName`, `courtCaseNumber`, `countyOfFiling`) reused from
  the existing corpus (19, 6, 1, and 36 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Need-Based Attorney's Fees in Family Law Proceedings —
  Information Sheet (`need_based_attorney_fees_family_law_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 2,954 → 2,961 clauses; 389 → 390 documents. Third addition of
  wave 86.
