# Confidentiality & IP, new document: Provisional Patent Application Information Sheet

## Why this document

The existing Patent Assignment Agreement document covers transferring
ownership of an existing patent or patent application. This document
covers the genuinely distinct, upstream topic: how a provisional
patent application itself works under federal patent law.

## What this document covers

8 clauses: 2 drafting (invention summary, filing record) and 6
authority clauses:

- **`provpat_requirements`** (35 U.S.C. § 111(b)(1), (b)(2), (b)(3);
  § 113) — a provisional needs a specification and (where applicable)
  a drawing, but explicitly no claim.
- **`provpat_never_examined`** (35 U.S.C. § 111(b)(8)) — a provisional
  is never examined and cannot itself become a patent.
- **`provpat_twelve_month_deadline`** (35 U.S.C. § 111(b)(5);
  § 119(e)(3)) — the firm 12-month deadline and its narrow weekend/
  holiday adjustment.
- **`provpat_priority_date`** (35 U.S.C. § 119(e)(1); § 111(b)(7);
  § 154(a)(3)) — what claiming the benefit of a provisional's filing
  date actually does, and that it does not extend the eventual
  patent's term.
- **`provpat_novelty_and_grace`** (35 U.S.C. § 102(a)(1), (b)(1),
  (b)(1)(A)) — the public-disclosure bar and the one-year grace period
  for the inventor's own disclosures.
- **`provpat_patent_pending`** (35 U.S.C. § 292(a); § 154(a)(1),
  (a)(2)) — what "patent pending" status does and doesn't mean.

## Genuine corrections caught during research

- The task brief's core assumptions (no claim required, the 12-month
  abandonment deadline, the § 102(b)(1) grace period) were all
  confirmed accurate against the current statutory text — including
  the exact phrasing "1 year or less before the effective filing date"
  rather than a rounded "12 months."
- A nuance not in the task brief: § 119(e)(1) separately allows a
  Director-prescribed 2-month unintentional-delay extension for the
  priority claim, but § 111(b)(5)'s own abandonment cross-reference
  reaches only § 119(e)(3)'s weekend/holiday adjustment — the
  interaction between the two is disclosed as unresolved rather than
  guessed at.
- The task brief asked whether "patent pending" confers enforceable
  rights. Direct review shows the phrase itself appears only in
  § 292(a), a false-marking prohibition — the "no enforceable rights
  before issuance" conclusion is the document's own inference from
  § 111(b)(8) (never examined) and § 154(a)(1)-(2) (rights begin at
  issuance), disclosed explicitly as an inference rather than a single
  quoted statutory statement.
- A bonus fact worth having: § 154(a)(3) confirms that claiming
  § 119(e) priority does not extend the eventual patent's 20-year term
  — it still runs from the nonprovisional's own filing date, correcting
  a common misconception about what a "priority date" buys.

## Honest gap disclosed

CourtListener hit its rate limit immediately this session, so no case
law is used anywhere in this document — every authority clause rests
solely on directly-verified statutory text, disclosed rather than
worked around.

## Method

Fetched 35 U.S.C. §§ 111, 113, 119, 102, 154, and 292 from
`law.cornell.edu/uscode`, each verified against a second, independent
fetch with a distinct User-Agent — confirmed byte-identical. All 16
citation quotes programmatically re-verified as exact substrings of
the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the three same-section clauses (`provpat_requirements`,
  `provpat_novelty_and_grace`, `provpat_patent_pending`) each carry an
  explicit "not independent corroborating sources" disclosure sentence
  — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- New fields (no existing document with a directly matching field set
  to reuse): `inventorName`, `inventionTitle`, `inventionDescription`,
  `filingDate`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Provisional Patent Application Information Sheet
  (`provisional_patent_application_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Confidentiality & IP category. New
  fields: `inventorName`, `inventionTitle`, `inventionDescription`,
  `filingDate`.
- Corpus: 829 → 837 clauses; 110 → 111 documents.
