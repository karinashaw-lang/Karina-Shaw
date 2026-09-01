# Business Formation, sixth new document: LLC Dissolution and Cancellation

## Why this document

The project's existing LLC Operating Agreements (single- and
multi-member) cover only the contractual/statutory triggers for
dissolution and a one-line "pay debts then distribute" statement.
This document is the parallel filing/winding-up process — the actual
statutory conduct and Secretary of State filings that formally
terminate an LLC's existence — the same structural relationship
Articles of Organization has to the Operating Agreement's internal
governance. Confirmed non-duplication by reading the existing
`llc_dissolution`/`llc_mm_dissolution*` clauses first.

## What this document covers

8 clauses: 2 drafting (recitals, winding-up declaration/signatures)
and 6 authority clauses:

- **`llcdiss_winding_up_duty`** (Corp. Code § 17707.04(a), (c)) —
  who winds up by default, the creditor-notice duty, and compensation.
- **`llcdiss_distribution_priority`** (§ 17707.05(a)-(b)) — the
  default order for distributing remaining assets after debts are
  paid.
- **`llcdiss_certificate_filings`** (§ 17707.08(a)-(c)) — the
  two-filing mechanism (certificate of dissolution, then certificate
  of cancellation) and what each must state.
- **`llcdiss_continued_existence`** (§ 17707.06(a)-(c)) — the LLC's
  narrow continued existence after cancellation for winding-up
  purposes only.
- **`llcdiss_short_form_eligibility`** (§ 17707.02(a)-(b)) — the
  simplified single-filing cancellation path and its real eligibility
  conditions.
- **`llcdiss_final_tax_clearance`** (Rev. & Tax. Code § 17947(a)) —
  the actual mechanism tying the annual $800 LLC tax to the
  cancellation filing.

## Genuine corrections caught during research

- The task brief pointed to § 17713.04 for short-form dissolution
  eligibility. Direct review shows that's wrong — § 17713.04 is a
  transition/applicability provision for the 2014 RULLCA
  recodification, unrelated to short-form cancellation. The real
  provision is § 17707.02.
- The task brief described short-form eligibility as requiring the LLC
  to have "commenced business within the last 12 months." The actual
  statutory text requires the opposite: the LLC must have conducted
  **no business at all** since filing its articles.
- The task brief assumed the LLC's existence continues for limited
  purposes "until" cancellation is filed. Direct review of § 17707.06
  shows the opposite — the narrower continued-existence rule applies
  **after** cancellation, not before it; before cancellation, the
  LLC's full powers remain intact under § 17707.08(c).
- The winding-up activities the brief attributed to a single section
  actually split across § 17707.04 (who winds up + notice) and
  § 17707.05 (distribution priority) — § 17707.03 is a different,
  judicial-dissolution-grounds provision.

## Honest gap disclosed

`llcdiss_final_tax_clearance` cross-references Corp. Code § 17708.06
(an alternate cancellation provision) and Rev. & Tax. Code § 18633.5
(defining "final annual tax return") by number only — neither was
independently fetched and verified, so their text isn't relied on
beyond what § 17947 itself states.

## Defect caught and fixed during integration

`llcdiss_continued_existence` cites two subsections of the same
section but initially lacked the standard explicit single-source
disclosure sentence — added during integration.

## Method

Fetched Corp. Code §§ 17707.02, 17707.04, 17707.05, 17707.06,
17707.08, 17713.04 and Rev. & Tax. Code § 17947 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`companyName`) reused from the existing LLC document
  convention.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: LLC Dissolution and Cancellation
  (`llc_dissolution_cancellation`), 8 clauses (6 authority + 2
  drafting), in the Business Formation category. New fields:
  `dissolutionDate`, `dissolutionReason`.
- Corpus: 626 → 634 clauses; 83 → 84 documents.
