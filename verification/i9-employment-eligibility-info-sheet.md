# Hiring, new document: I-9 Employment Eligibility Verification — Information Sheet

## Why this document

The existing Employee Handbook document has a brief `work_auth`
clause covering only the 3-business-day deadline and the
documentary-uniformity/discrimination point. No document in the
corpus covers the full federal Form I-9 scheme under the Immigration
Reform and Control Act. This document fills that gap.

## What this document covers

8 clauses: 2 drafting (scope, closing) and 6 authority clauses:

- **`i9_knowing_employment_prohibition`** (8 U.S.C. § 1324a(a)(1)(A),
  (a)(2)) — the hiring prohibition and the separate
  continuing-employment prohibition.
- **`i9_verification_attestation`** (8 U.S.C. § 1324a(b)(1)(A)-(D)) —
  the attestation requirement and the statute's own three-way
  document-category structure.
- **`i9_verification_timing`** (8 C.F.R. § 274a.2(b)(1)(ii)-(iii)) —
  the 3-business-day deadline, correcting an assumption that it's
  statutory.
- **`i9_civil_penalties`** (8 U.S.C. § 1324a(e)(4)(A), (e)(5)) — the
  two distinct civil-penalty ranges.
- **`i9_retention_no_filing`** (8 U.S.C. § 1324a(b)(3)) — no filing
  requirement; retain-and-make-available instead, with the real
  retention period.
- **`i9_antidiscrimination`** (8 U.S.C. § 1324b(a)(1), (a)(2)(A)) — the
  separate anti-discrimination protection layered on top of
  verification, with its small-employer exception.

## Genuine corrections caught during research

- The task brief assumed § 1324a(a)(1) is a single unified "hire or
  continue to employ" prohibition. Direct review shows it's split
  across two separate paragraphs: § 1324a(a)(1)(A) (hiring) and
  § 1324a(a)(2) (continuing employment, triggered only once the
  employer later learns of unauthorized status).
- The task brief assumed the List A/B/C structure and its labels are
  statutory. Direct review confirms the three-way document
  classification is genuinely in the statute (§ 1324a(b)(1)(B)-(D)),
  but the literal "List A/B/C" labels come from the Form I-9 and
  USCIS's Handbook for Employers, not the statute's own subparagraph
  labels.
- The task brief assumed the 3-business-day deadline lives in
  § 1324a(b)(3). Direct review of the full statutory text of
  § 1324a(a) and (b) found no day-count deadline anywhere in the
  statute — § 1324a(b)(3) is actually the retention provision. The
  3-business-day rule exists only in the implementing regulation,
  8 C.F.R. § 274a.2(b)(1)(ii)-(iii) — a distinction that matters
  because a regulation can be amended without a statutory change.

## Honest gaps disclosed

- The § 1324a(e) civil-penalty dollar figures are the amounts as
  codified in the U.S. Code text itself (1996-era); the agent did not
  independently verify DHS's current inflation-adjusted penalty table
  (8 C.F.R. § 274a.10), so actual penalties assessed today are likely
  higher.
- The statute still refers to "the Service" and "the Attorney
  General," reflecting pre-2003 INS-era text; the DHS/ICE
  reorganization mapping was not independently verified — the clause
  quotes the statute as written rather than substituting current
  agency names.
- CourtListener was rate-limited before case-law research could begin;
  no case citations were fabricated to fill that gap — every authority
  clause rests on statutory/regulatory text only.

## Method

Fetched 8 U.S.C. §§ 1324a, 1324b, and 8 C.F.R. § 274a.2 directly from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical, including exact
curly-apostrophe/em-dash characters.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every same-section clause carries an explicit "draws no
  conclusion from that shared subsection other than..." disclosure
  sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `employeeName`, `startDate`) confirmed
  to match the existing Offer Letter document's `fields` array
  exactly — no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: I-9 Employment Eligibility Verification — Information
  Sheet (`i9_employment_eligibility_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields —
  full reuse of the existing Offer Letter document's field set.
- Corpus: 861 → 869 clauses; 114 → 115 documents.
