# Real Estate, new document: Structural Pest Control Inspection Report — Information Sheet

## Why this document

Second document of wave 79's Real Estate slot (the first Real Estate
topic, Mello-Roos, became a gap-fix into the existing Residential
Purchase Agreement document rather than a standalone document). Read
the existing Residential Purchase Agreement, Home Improvement
Contract, and Mold Disclosure documents in full — confirmed by grep
that "structural pest," "wood-destroying," "8516," and "termite" had
zero prior hits. Confirmed non-duplicative.

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority
clauses, citing Cal. Civ. Code § 1099(a), (d) and Cal. Bus. & Prof.
Code §§ 8516(b), (c), (e), 8517, 8518(a), and 8519:

- **`pestreport_delivery_trigger`** (Civ. Code § 1099(a), (d)) — **the
  central finding**: California does not universally mandate a
  structural pest inspection report for every sale — the delivery duty
  is conditional on certification/report preparation being a condition
  of the contract effecting the transfer or a requirement imposed as a
  condition of financing.
- **`pestreport_inspection_licensing_and_timing`** (Bus. & Prof. Code
  § 8516(b)) — the licensing requirement (a licensed Branch 3 field
  representative or operator of a registered company) and the
  10-business-day report-delivery timing requirement. Also corrects a
  research-brief assumption: § 8520 is not part of the inspection-
  report framework — it's a separate section in a different article
  establishing the Structural Pest Control Board itself.
- **`pestreport_section1_section2_distinction`** (§ 8516(c), (e)) —
  the statute's own distinction between evident infestation and
  conditions likely to lead to infestation, and the rule against
  characterizing a likely-to-lead condition as an actual "defect" or
  "active" infestation.
- **`pestreport_certification`** (§ 8519) — the optional,
  requested-not-automatic certification, quoting the statutory "no
  infestation" certification text.
- **`pestreport_correspondence_and_completion_notice`** (§ 8517,
  § 8518(a)) — later correspondence must reference the report and its
  completion status; completed work triggers a separate 10-business-day
  notice-of-work-completed requirement.

## Genuine corrections and findings

- **The central finding**: confirmed from Civ. Code § 1099(a)'s own
  text that the delivery duty is conditional, not universal — a
  common misconception this clause explicitly corrects.
- **A genuine citation correction**: caught that Bus. & Prof. Code
  § 8520 — sometimes assumed to be part of the inspection-report
  framework — is actually a separate section in a different article of
  the same chapter, establishing the Structural Pest Control Board
  itself (with its own sunset/repeal clause), not an inspection-report
  requirement.
- Discovered and used a source not in the original research brief:
  Civil Code § 1099 is the actual statutory delivery trigger — the
  Business and Professions Code sections alone govern only how a
  report must be prepared once one exists, not when delivery to a
  buyer is required.
- Confirmed the statute's own text prohibits characterizing a
  "likely to lead to infestation" condition as an actual "defect" or
  "active" infestation — a real, non-obvious statutory guardrail
  against overstating a report's findings.

## Honest gap(s) disclosed

The board-prescribed inspection report form's exact current "Section
1"/"Section 2" labels (an industry/form naming convention, not
independently fetchable as primary statutory text) are not stated —
this document uses the underlying statutory text instead. No specific
report validity period is stated — the statute's own text does not
provide one; commonly-cited 30/90-day windows are lender/industry
practice, not statutory text, and were correctly omitted rather than
fabricated. The full 13-item list of required report contents under
§ 8516(b)(1)-(13) is not restated — only the licensing/timing items are
quoted. The three other statutory certification texts under
§ 8519(b)-(d) (completed correction, partial correction, limited-
inspection-report scenarios) are not quoted.

## Method

Fetched Cal. Civ. Code § 1099 and Cal. Bus. & Prof. Code §§ 8516,
8517, 8518, and 8519 from `leginfo.legislature.ca.gov`, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 10
citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a fifth fetch
(a distinct curl User-Agent string, "Groundtruth-FifthVerify-
PestReport/1.0") of all five sections — all 10 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fifth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the Civ. Code
  § 1099(a)/(d) pair, the two § 8516(b) citations, and the § 8516(c)/(e)
  pair each correctly disclosed as not independent of one another (same
  statutory section); the § 8517/§ 8518(a) pairing correctly disclosed
  as independent (two separate, independently authored sections);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") match titles used elsewhere in the corpus —
  confirmed as the corpus's established, intentional boilerplate-title
  reuse pattern (unique clause ids), not a genuine collision.
- No new fields required — all three fields (`propertyAddress`,
  `sellerName`, `buyerName`) reused from the existing corpus (41, 6,
  and 7 prior documents respectively), matching the existing
  Residential Purchase Agreement document's own field set.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: Structural Pest Control Inspection Report —
  Information Sheet (`structural_pest_control_report_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Real Estate category. No
  new fields.
- Corpus: 2,767 → 2,774 clauses; 363 → 364 documents. Second addition
  of wave 79 (first standalone new document — Mello-Roos was a
  gap-fix).
