# Real Estate, ninth new document: HOA / CC&R Disclosure (Davis-Stirling Common Interest Development Disclosure)

## Why this document

The existing Residential Purchase Agreement and Transfer Disclosure
Statement documents cover general residential-sale disclosures. Neither
covers the genuinely distinct Davis-Stirling Common Interest Development
Act disclosure package a seller of a home in a homeowners association
must separately provide — a different statutory scheme (Civil Code
§§ 4525 et seq.) with its own document list, request/fee mechanics, and
remedy structure, cumulative with (not a substitute for) the standard
TDS.

## What this document covers

7 clauses: 2 drafting (intro, buyer acknowledgment) and 5 authority
clauses:

- **`hoadisc_document_list`** (Civ. Code § 4525(a), several subsections)
  — the required document list a seller must provide: governing
  documents, budget/financial documents, assessment/unpaid-amount
  statement, unresolved-violation notice, and exterior-elevated-elements
  inspection report.
- **`hoadisc_request_timing_fee`** (Civ. Code § 4530(a)(1), (b)(1),
  (b)(6)) — the 10-day delivery deadline and the "reasonable fee based
  on actual cost" standard, correcting an assumed dollar cap.
- **`hoadisc_billing_form`** (Civ. Code § 4528, § 4530(d)) — the
  itemized billing-disclosure form, correcting an assumption that
  § 4528 is a standalone disclosure document rather than the billing
  form itself.
- **`hoadisc_remedy`** (Civ. Code §§ 4540, 4545) — damages, a
  $500-capped civil penalty, and fee-shifting for a willful violation;
  § 4545 expressly preserves title validity.
- **`hoadisc_cumulative_with_tds`** (Civ. Code § 4185(a), § 1102(a)) —
  confirms the Davis-Stirling disclosure and the TDS are separate,
  cumulative obligations.

## Genuine corrections caught during research

- The task brief assumed § 4525(a) includes a general pending-litigation
  disclosure item. Direct review shows only a narrower builder-defect
  process disclosure exists (§§ 6000, 6100); there is no general
  litigation-disclosure line item.
- The task brief assumed a fixed dollar cap on the document-compilation
  fee. Direct review of § 4530(b)(1) shows only a "reasonable fee" tied
  to actual cost, with no dollar ceiling.
- The task brief assumed § 4528 is a standalone "Assessment and Reserve
  Funding Disclosure Summary" document. Direct review shows § 4528 is
  the itemized billing-disclosure form itself, where that phrase is one
  line-item label, not a separate document.
- The task brief assumed § 4525(f) creates a rescission right. No such
  subsection exists; the actual remedy structure (§§ 4540, 4545) is
  damages plus a capped civil penalty, and affirmatively preserves title
  validity — no rescission remedy exists in this scheme.

## Method

Fetched Civ. Code §§ 4185, 4525, 4528, 4530, 4540, 4545, and § 1102
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. No case law cited; the statutory text is unambiguous.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — both same-section clauses (`hoadisc_document_list`,
  6 citations to § 4525(a); `hoadisc_request_timing_fee`, 3 citations to
  § 4530) carry an explicit "these citations are all to subsections of
  the same statutory section" disclosure sentence — correct as
  delivered, despite not matching this integration's exact regex
  wording on first automated pass (manually confirmed).
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`sellerName`, `buyerName`, `propertyAddress`)
  independently confirmed against the existing Residential Purchase
  Agreement document's actual `fields` array — exact match. New fields:
  `hoaName`, `monthlyAssessment`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: HOA / CC&R Disclosure (Davis-Stirling Common Interest
  Development Disclosure) (`hoa_ccr_disclosure`), 7 clauses (5 authority
  + 2 drafting), in the Real Estate category. New fields: `hoaName`,
  `monthlyAssessment`.
- Corpus: 728 → 735 clauses (as part of a combined merge to 757 with
  three other documents; see net totals in the wave's other
  verification docs). Document count: 97 → 98 (as part of the same
  combined merge to 101).
