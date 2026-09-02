# Ending employment, new document: Workers' Compensation Retaliation (Labor Code Section 132a) — Information Sheet

## Why this document

The corpus's existing Wrongful Termination in Violation of Public
Policy document covers § 1102.5 whistleblower retaliation and § 98.6
wage-claim retaliation but not Labor Code § 132a, which has a wholly
distinct statutory scheme adjudicated by the Workers' Compensation
Appeals Board rather than superior court. Confirmed as a genuine,
zero-hit gap by grepping the corpus for "132a" and reading the
existing Wrongful Termination and Workers' Compensation Claim Notice
documents in full before drafting.

## What this document covers

7 clauses: 2 drafting (declaration/background, closing/signature) and
5 authority clauses:

- **`wc132a_declared_policy_and_core_prohibition`** (Lab. Code § 132a,
  declared policy + paragraph (1)) — the core prohibition on
  discharge/threat/discrimination for a workers' comp claim.
- **`wc132a_insurer_inducement`** (§ 132a, paragraph (2)) — a parallel
  prohibition on insurers pressuring an employer to discharge.
- **`wc132a_testimony_protection`** (§ 132a, paragraphs (3)-(4)) — a
  separate protection for testifying in another employee's case, with
  a narrower remedy.
- **`wc132a_remedy_structure`** (§ 132a, paragraph (1)) — the current
  dollar/percentage remedy figures.
- **`wc132a_wcab_petition_procedure_and_deadline`** (§ 132a, closing
  paragraph; 8 Cal. Code Regs. § 10528) — the WCAB petition procedure
  and one-year deadline.

## Genuine corrections and findings

- Confirmed the statute's dollar and percentage figures (one-half
  increase, capped at $10,000, plus $250 costs) directly against the
  current statutory text rather than assuming an older figure was
  still accurate — the statute's own amendment history shows no
  change since 1990.
- **A genuinely distinct, non-obvious finding**: § 132a's protection
  extends beyond an employee's own claim — paragraph (3) protects an
  employee who testified or intended to testify in *another*
  employee's WCAB case, regardless of whether the testifying employee
  has any pending claim of their own. Confirmed this category carries
  a narrower remedy (reinstatement/reimbursement only, no
  increased-compensation multiplier) — the two remedy structures are
  not interchangeable.
- Confirmed directly from the statute's own text and the WCAB's own
  regulation (8 CCR § 10528) that § 132a is enforced through a
  petition filed with, and adjudicated by, the Workers' Compensation
  Appeals Board — not a superior court civil action — a genuinely
  distinct procedural scheme from § 1102.5/§ 98.6, already covered
  elsewhere in the corpus.
- Disclosed a non-binding DWC guide's additional claim (that a § 132a
  petition can only be filed if the employee already has a pending
  WCAB case) as agency guidance, not verified regulatory or statutory
  fact, since it was not found in the statute or the regulation
  itself.

## Honest gap disclosed

The DWC's "Information & Assistance Unit Guide 7" was consulted only
for corroboration and explicitly not relied on as citation-grade
authority for any statutory fact stated in the document's body.

## Method

Fetched Lab. Code § 132a and 8 Cal. Code Regs. § 10528 directly from
`leginfo.legislature.ca.gov` and `dir.ca.gov` via curl with two
distinct User-Agent strings each — confirmed textually identical both
times. All 10 citation quotes programmatically confirmed as exact,
whitespace-normalized substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are paragraphs of the same statutory
  section (treated as one source) versus the genuinely separate WCAB
  regulation; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`employeeName`, `companyName`,
  `allegedProtectedActivity`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus convention. New fields:
  `allegedAdverseAction`, `adverseActionDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Workers' Compensation Retaliation (Labor Code Section
  132a) — Information Sheet
  (`workers_compensation_retaliation_132a_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Ending employment category. New
  fields: `allegedAdverseAction`, `adverseActionDate`.
- Corpus: 1,738 → 1,745 clauses; 221 → 222 documents. Third document
  of wave 43.
