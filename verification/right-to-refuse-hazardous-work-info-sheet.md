# During employment, new document: Right to Refuse Hazardous Work — Information Sheet

## Why this document

Category-balance analysis flagged During employment as one of wave 60's
four perpetually-thin categories. Grep confirmed the only prior
"6310/6311" hit in the corpus was a passing footnote inside the § 98.6
wage-retaliation clause about a DOL concurrent-complaint deadline, not
substantive coverage. Read the existing Workers' Compensation
Retaliation (§ 132a) document in full and confirmed no duplication —
§ 6310's own text expressly carves the § 132a category out of its own
coverage. Second of wave 60's four documents.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Labor Code §§ 6311, 6310, 6312, and 98.7:

- **`refusehazardous_core_right_and_hazard_standard`** (§ 6311) — the
  core right: no layoff/discharge for refusing work that would violate
  the Labor Code, a safety standard, or a safety order, where the
  violation would create a real and apparent hazard.
- **`refusehazardous_no_express_notice_precondition_in_text`** (§ 6311)
  — **a key finding**: the statute's own text has no express
  prior-notice-to-employer precondition; that idea traces to secondary
  sources and to a distinct federal OSH Act standard, not to § 6311
  itself.
- **`refusehazardous_wage_remedy_right_of_action`** (§ 6311) — the
  remedy is a right of action for wages, not an automatic continued-pay
  guarantee; also covers the domestic-work-employee extension and
  carve-out.
- **`refusehazardous_complaint_procedure_and_deadlines`** (§§ 6312,
  98.7) — the Labor Commissioner complaint procedure: one-year filing
  deadline (extendable for good cause), the 30-day concurrent U.S. DOL
  complaint right, and the appeal path to the Director of Industrial
  Relations unique to § 6310/6311 cases.
- **`refusehazardous_section6310_broader_complaint_protection`**
  (§ 6310) — a genuinely broader, separate protection for safety
  complaints/reporting/committee participation generally, with its own
  reinstatement + reimbursement remedy and family-member retaliation
  clause; confirms the § 132a/WCAB carve-out.

## Genuine corrections and findings

- **The central finding**: § 6311's own statutory text contains no
  express prior-notice-to-employer precondition. Secondary/practitioner
  sources describing such a practice, and the federal OSH Act's distinct
  reasonable-person/imminent-danger test (29 C.F.R. § 1977.12(b)(2)),
  were located but explicitly not conflated with California's statute —
  disclosed as a deliberate, honest gap rather than filled in with a
  borrowed standard.
- Confirmed § 6311's remedy is framed as a "right of action for wages,"
  not an automatic continued-pay entitlement.
- Confirmed § 6310 is genuinely broader and distinct from § 6311: it
  protects complaint/reporting/committee-participation conduct generally
  with no refusal-to-perform-work requirement, and has its own
  reinstatement + reimbursement remedy and misdemeanor provision for
  willful refusal to restore an eligible employee.
- Confirmed §§ 6312/98.7 give § 6310/6311 complainants two procedural
  features other Labor Commissioner claims lack: a 30-day concurrent
  U.S. DOL complaint right and an appeal path to the Director of
  Industrial Relations.
- Confirmed, by reading the existing § 132a document in full and by
  § 6310's own text, that this document does not duplicate that
  existing document's coverage.

## Honest gap disclosed

The statute's text does not define "real and apparent hazard," and no
published California appellate decision construing that phrase was
independently verified. Whether the same one-year filing deadline that
governs a § 6312/98.7 administrative complaint also governs a direct
civil right of action for wages under § 6311 itself was not
independently verified. § 6310(d)'s "employer" definition
(cross-referencing §§ 2810.3 and 6400) and § 6401.7's occupational
health and safety committee requirements were not independently
verified or restated.

## Method

Fetched Cal. Labor Code §§ 6311, 6310, 6312, and 98.7 directly from
`leginfo.legislature.ca.gov` via curl, each section fetched twice with
distinct User-Agent strings, confirmed byte-identical after whitespace
normalization. All 9 citation quotes programmatically confirmed as
exact substrings of the confirmed text.

## Verification

- All four sections fetched twice independently with distinct
  User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source (§ 6311's three
  sentences; § 6310's four subdivisions; § 98.7's two subdivisions);
  §§ 6312 and 98.7 correctly disclosed as related but distinct sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse pattern in the signature block.
- Field names (`employeeName`, `companyName`, `jobTitle`, `dateSigned`,
  `cityState`, `incidentDate`, `incidentDescription`,
  `incidentLocation`, `supervisorName`, `workDescription`)
  independently confirmed to match existing corpus field ids. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Right to Refuse Hazardous Work — Information Sheet
  (`right_to_refuse_hazardous_work_info_sheet`), 7 clauses (5 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 2,243 → 2,250 clauses; 288 → 289 documents. Second document
  of wave 60.
