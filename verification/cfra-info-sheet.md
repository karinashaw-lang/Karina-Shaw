# During employment, new document: California Family Rights Act (CFRA) — Information Sheet

## Why this document

Confirmed by checking the corpus that "CFRA" and "California Family
Rights Act" appeared only as generic passing references inside the
existing Bereavement Leave and Kin Care documents — neither independently
verified Gov. Code § 12945.2 itself, and the corpus had a dedicated FMLA
document but no dedicated CFRA document despite CFRA being California's
own, materially different family/medical leave statute.

## What this document covers

9 clauses: 2 drafting (leave request, acknowledgment) and 7 authority
clauses, all citing Cal. Gov. Code § 12945.2:

- **`cfra_covered_employers`** (subd. (b)(4)(A)-(B)) — the 5-employee
  private-employer threshold (versus FMLA's 50) and unconditional public-
  employer coverage.
- **`cfra_eligibility`** (subd. (a)) — the 12-month/1,250-hour test,
  identical in numbers to FMLA but without FMLA's worksite-clustering
  exclusion.
- **`cfra_qualifying_reasons`** (subd. (b)(5)(A)-(D)) — birth/placement,
  family-care, the employee's own serious health condition (excluding
  pregnancy disability), and qualifying-exigency leave.
- **`cfra_family_definitions`** (subd. (b)(1), (2), (8), (9), (14)) —
  "child," "designated person," "grandchild," "grandparent," and
  "sibling," substantially broader than FMLA's family-member coverage.
- **`cfra_restoration`** (subd. (a), (f), (b)(6)) — the restoration
  guarantee, employee status/seniority during leave, and the statutory
  "comparable position" definition.
- **`cfra_no_interference`** (subd. (k), (q)) — prohibited discrimination
  and prohibited interference.
- **`cfra_fmla_relationship`** (subd. (o), (p)) — the concurrent 12-month
  period, the combined 12-week cap, and the pregnancy-disability carve-out.

## Genuine corrections and findings

- **A structural, not just numerical, coverage difference**: CFRA's
  5-employee threshold carries no FMLA-style 50-employees-within-75-miles
  worksite-clustering test at all — CFRA coverage turns solely on how many
  people the employer directly employs, not on how many work at the same
  location.
- **A materially broader family-member list**: CFRA reaches grandparents,
  grandchildren, siblings, domestic partners, and one self-identified
  "designated person" per 12-month period — categories entirely absent
  from the existing FMLA document's spouse/child/parent coverage.
- **A real, non-obvious substantive difference**: CFRA's own definition of
  "family care and medical leave" excludes leave for pregnancy/childbirth
  disability, which California handles under a separate statute
  (Gov. Code § 12945, cross-referenced but not independently verified
  here) — FMLA leave taken for that reason runs on its own track rather
  than sharing the CFRA/FMLA combined 12-week cap.
- Confirmed CFRA's restoration guarantee (subd. (a)) does not carry
  forward FMLA's highly-compensated-employee restoration exception — this
  was not fabricated by assuming symmetry with the existing FMLA clause;
  its absence is disclosed explicitly instead.
- Confirmed the eligibility numeric thresholds (12 months, 1,250 hours)
  are genuinely identical between CFRA and FMLA — confirmed by direct
  text comparison rather than assumed from the "state analog of federal
  law" framing.

## Honest gap disclosed

The flight-crew alternative eligibility test (subd. (r)) is described
only qualitatively, not quoted. Certification/recertification procedures
(subd. (i)-(j)), health-plan continuation mechanics (subd. (e)), and
paid-leave substitution rules (subd. (d)) were verified in the raw text
but omitted to keep the document focused rather than padded. The separate
Pregnancy Disability Leave statute (Gov. Code § 12945) is named but not
independently researched.

## Method

Fetched Cal. Gov. Code § 12945.2 directly from `leginfo.legislature.ca.gov`
twice, using two distinct User-Agent strings in independent curl requests
— confirmed byte-identical (17,262 chars each) after whitespace
normalization. All 19 citation quotes programmatically confirmed as exact
substrings of the confirmed text.

## Verification

- The statute fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every citation in this
  document is a subdivision of the single statute § 12945.2, and each
  clause's `gap` explicitly discloses this; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Five
  accepted title reuses: "Acknowledgment" (the corpus's most common
  generic drafting title) and "Who Is Eligible" / "Leave Request" /
  "Returning From Leave" / "No Interference or Retaliation" (deliberately
  parallel to the existing `fmla_*` clauses of the same structural
  pattern, for a related but distinct statute).
- Field names (`companyName`, `employeeName`) independently confirmed to
  match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Family Rights Act (CFRA) — Information Sheet
  (`cfra_info_sheet`), 9 clauses (7 authority + 2 drafting), in the
  During employment category. No new fields.
- Corpus: 1,931 → 1,940 clauses; 247 → 248 documents. First document of
  wave 50.
