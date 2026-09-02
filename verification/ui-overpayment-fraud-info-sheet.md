# Ending employment, new document: Unemployment Insurance Overpayment and Fraud — Information Sheet

## Why this document

The corpus's existing UI Claimant and UI Appeal documents cover
claiming benefits and appealing eligibility determinations, not what
happens after the EDD determines someone was overpaid. Confirmed by
reading all clauses in both existing documents before writing
anything; only one prior overlap exists (`uiappeal_continued_benefits`
already cites UIC § 1375(a)), reused and disclosed rather than
re-presented as independent.

## What this document covers

8 clauses: 3 drafting (declaration, response declaration, signature/
certification) and 5 authority clauses:

- **`uioverpay_nonfraud_fraud_distinction`** (UIC § 1375; § 1375.1) —
  the statutory distinction between a non-fraud and fraudulent
  overpayment.
- **`uioverpay_waiver_conditions`** (§ 1375) — the three independent
  waiver grounds for a non-fraud overpayment.
- **`uioverpay_fraud_penalties`** (§ 1375.1; § 1257(a); § 1260(c)-(d))
  — the mandatory 30% penalty and disqualification/criminal exposure.
- **`uioverpay_notice_and_appeal`** (§ 1376; § 1377(a)) — the
  overpayment-specific notice and 30-day appeal right.
- **`uioverpay_recovery_methods`** (§ 1379(a),(d); § 1384) —
  California's recovery methods.

## Genuine corrections and findings

- **A significant correction**: § 1375.1 is not the waiver
  provision — it is the fraud penalty statute (the mandatory 30%
  assessment). The non-fraud waiver, including all three independent
  grounds, lives entirely in § 1375.
- A genuine finding beyond the original framing: § 1375's waiver
  grounds are not limited to the equity/good-conscience non-fault
  standard — two further, independent grounds exist: cooperating with
  an investigation that penalizes someone else, and the overpayment
  resulting from employer inducement or coercion.
- Confirmed § 1260(c)'s notable carve-out: the fraud disqualification
  period does not apply to someone convicted under § 2101 — a real
  interaction between the civil and criminal tracks.
- **A correction on notice/appeal**: the mechanism is not a bare
  cross-reference to the general claim-eligibility appeal — §§ 1376
  and 1377 are dedicated, overpayment-specific sections, with their
  own 30-day appeal right and their own notice-deadline rule (which
  does not apply where fraud is involved).
- **A correction on recovery methods**: no statutory basis was found
  for wage garnishment or IRS/FTB tax-refund interception as named,
  distinct overpayment-recovery tools in §§ 1379/1384 — corrected
  rather than assumed. Recovery is instead by civil action, offset
  against future benefits, and a Controller-level interagency
  mechanism under Gov. Code § 12419.2 (described only via UIC § 1384's
  own reference to it, not independently fetched).

## Honest gaps disclosed

- Government Code § 12419.2's own text was not independently fetched;
  the recovery-methods clause relies only on UIC § 1384's description
  of it, disclosed explicitly.
- Criminal penalties under §§ 2101/2122 were not re-verified this
  session; the fraud-penalties clause discloses reliance on this
  corpus's prior verification rather than re-fetching.
- No case law was used — CourtListener was not needed for this
  purely statutory topic.

## Method

Fetched Unemp. Ins. Code §§ 1257, 1260, 1375, 1375.1, 1376, 1377,
1379, and 1384 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical. All citation quotes
programmatically confirmed as exact substrings of the fetched,
normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the reuse of
  `uiappeal_continued_benefits`'s § 1375(a) quote is disclosed
  explicitly rather than presented as independent re-verification;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Certification") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`employeeName`, `companyName`, `determinationDate`,
  `eddCaseNumber`) independently confirmed to match existing corpus
  convention (UI Appeal document). New fields: `overpaymentAmount`,
  `overpaymentResponseAction`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Unemployment Insurance Overpayment and Fraud —
  Information Sheet (`ui_overpayment_fraud_info_sheet`), 8 clauses (5
  authority + 3 drafting), in the Ending employment category. New
  fields: `overpaymentAmount`, `overpaymentResponseAction`.
- Corpus: 1,526 → 1,534 clauses; 192 → 193 documents.
