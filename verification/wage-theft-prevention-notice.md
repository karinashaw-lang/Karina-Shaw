# Hiring, new document: Wage Theft Prevention Act Notice to Employee — Information Sheet

## Why this document

Grep of the existing "Hiring" and "Ending employment" documents
confirmed no prior document addresses California's hiring-time
written-notice statute (Labor Code § 2810.5) — genuinely distinct from
the existing Offer Letter, Exempt/Non-Exempt Classification Notice, and
I-9 Employment Eligibility Verification documents.

## What this document covers

8 clauses: 2 drafting (scope, acknowledgment of receipt) and 6
authority clauses:

- **`wagetheft_hiring_time_notice`** (Labor Code § 2810.5(a)(1)) — the
  general hiring-time written-notice duty.
- **`wagetheft_required_contents`** (Labor Code § 2810.5(a)(1)(A)-(J))
  — all ten required content categories, correcting an assumption
  that omitted two: paid sick leave rights (H) and recent
  emergency/disaster declaration disclosure (I).
- **`wagetheft_excluded_employees`** (Labor Code § 2810.5(c), (c)(1)-
  (3)) — the three narrow statutory exclusions, correcting an
  assumption that overstated their breadth.
- **`wagetheft_update_notice`** (Labor Code § 2810.5(b), (b)(1)-(2)) —
  the separate 7-calendar-day update-notice duty and its two
  exceptions.
- **`wagetheft_template_and_temp_services`** (Labor Code § 2810.5(a)(2)
  -(3)) — the Labor Commissioner's required template and additional
  content required of temporary services employers.
- **`wagetheft_no_specific_penalty_text`** (Labor Code § 2810.5;
  § 1197.1(a); § 226.3) — an honest disclosure that the statute itself
  states no penalty, and that two commonly-associated penalty
  sections don't reference it either, without claiming no enforcement
  mechanism exists anywhere in California law.

## Genuine corrections caught during research

- The task brief described the excluded-employee categories loosely
  ("government employees," "CBA-covered employees"). Direct review of
  § 2810.5(c) shows the exclusions are narrower: only employees
  *directly* employed by the state or a political subdivision, and
  CBA coverage only where the CBA itself expressly addresses wages/
  hours/conditions and provides a premium overtime rate and a regular
  hourly rate at least 30% above state minimum wage.
- The task brief's required-contents list omitted two categories
  present in the current, amended statute: paid sick leave rights
  disclosure and recent emergency/disaster declaration disclosure —
  both added by later amendments not reflected in an informal summary
  of the statute's original 2011 text.
- The task brief correctly anticipated that § 2810.5 itself states no
  penalty. Direct review confirms this, and further confirms that two
  commonly-associated penalty statutes (§ 1197.1, § 226.3) don't
  reference § 2810.5 in their current text either — disclosed as an
  honest, non-exhaustive finding rather than a claim that no
  enforcement mechanism exists anywhere in California law.

## Honest gaps disclosed

- The Labor Commissioner's actual "Notice to Employee" template
  document was not fetched or reviewed — only the statutory
  requirement that one exist was verified.
- The separate, detailed Spanish-language notice content required for
  H-2A agricultural visa employees (§ 2810.5(a)(4)) was deliberately
  not built out as a clause (narrow, agricultural-specific) and is
  disclosed as an omission rather than silently dropped.
- Whether any enforcement mechanism exists via the Labor Commissioner's
  general citation authority (§ 98) or a PAGA representative action
  was not exhaustively checked.

## Method

Fetched Labor Code §§ 2810.5, 1197.1, and 226.3 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
apart from per-request ViewState tokens. All 21 quotes across the 6
authority clauses programmatically re-verified against the fetched
text before finalizing.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the delivering agent
  found and fixed 6 leaks (company/employee names embedded in `gap`
  narrative text) during its own self-check before delivery; my
  independent re-check on integration confirmed clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause combining subsections of one statutory
  section/subdivision carries an explicit disclosure; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  — one duplicate title was caught and renamed by the delivering agent
  before delivery ("About This Wage Theft Prevention Act Notice
  Information Sheet," to avoid colliding with `i9_scope`'s "About This
  Information Sheet"); none remain against the corpus.
- Field names (`companyName`, `employeeName`, `startDate`) confirmed to
  match the existing I-9 Employment Eligibility Verification
  document's fields exactly. No new fields introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Wage Theft Prevention Act Notice to Employee —
  Information Sheet (`wage_theft_prevention_notice`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 955 → 963 clauses; 125 → 126 documents.
