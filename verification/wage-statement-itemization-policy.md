# Employment, eleventh document: Wage Statement Itemization Policy

## Why this document

Continuing the "go as deep as humanely possible" build-out. California
Labor Code § 226 requires employers to provide detailed itemized wage
statements with each payment of wages, backed by a real, heavily
litigated statutory penalty scheme (a common source of PAGA claims) —
distinct from anything else in the Employment category. Sourced from
California Labor Code §§ 226, 2699.

## What this document covers

9 clauses: 3 drafting (policy statement, sample itemization, and
employee acknowledgment) and 6 authority clauses:

- **`wagestmt_nine_items`** (§ 226(a)) — the actual, complete nine-item
  list a wage statement must show, with the built-in statutory
  exceptions for certain salaried-exempt employees and farm labor
  contractors flagged rather than glossed over.
- **`wagestmt_itemized_deductions`** (§ 226(a)) — the itemized-
  deductions requirement and its one narrow aggregation exception
  (deductions made on the employee's own written order).
- **`wagestmt_knowing_intentional_penalty`** (§ 226(e)(1), (3)) — the
  $50/$100/$4,000 statutory penalty structure, and the clerical-error
  carve-out that keeps an isolated, unintentional mistake from counting
  as "knowing and intentional."
- **`wagestmt_suffering_injury`** (§ 226(e)(2)(A)-(C)) — the precise
  statutory test for when an employee is deemed to suffer injury,
  quoted as one continuous statutory paragraph.
- **`wagestmt_inspection_right`** (§ 226(b)-(c), (f)) — the employee
  records-inspection right, its 21-day compliance deadline, and the
  $750 penalty for missing it.
- **`wagestmt_paga_context`** (§ 2699(a), (d)(2)(A)-(B)) — how a
  § 226(a) wage-statement violation fits into PAGA's cure mechanism,
  deliberately scoped narrowly to avoid re-deriving PAGA's general
  procedure, with an honest disclosure that whether a § 226(e) penalty
  and a PAGA penalty can both be pursued for the same conduct isn't
  resolved by the statutory text.

## Method

Fetched Labor Code §§ 226 and 2699 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
The research also checked the existing corpus for prior PAGA content
before drafting the PAGA-context clause, confirming none existed to
cross-reference or risk duplicating.

## Defect caught and fixed during integration

`wagestmt_nine_items` cites a single statutory subsection but initially
lacked the standard single-source disclosure sentence — added during
integration.

## Verification

- Labor Code §§ 226 and 2699 fetched directly, then re-verified on a
  second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none); two
  duplicate titles ("Policy Statement," "Employee Acknowledgment") are
  the pre-existing, accepted generic drafting-title pattern.
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Wage Statement Itemization Policy
  (`wage_statement_itemization_policy`), 9 clauses (6 authority + 3
  drafting), in the During-employment category.
- Corpus: 447 → 456 clauses; 62 → 63 documents.
