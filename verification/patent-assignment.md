# Confidentiality & IP, eighth document: Patent Assignment Agreement

## Why this document

Genuinely distinct area of IP law from copyright and trademark — the
Patent Act's own statutory and doctrinal framework, including a
landmark Supreme Court holding directly on point.

## What this document covers

7 clauses: 2 drafting (assignment grant, signatures) and 5 authority
clauses:

- **`patentassign_initial_ownership`** (*Bd. of Trustees of the Leland
  Stanford Junior Univ. v. Roche Molecular Systems, Inc.*, 563 U.S.
  776 (2011); *United States v. Dubilier Condenser Corp.*, 289 U.S.
  178 (1933)) — that patent rights vest initially in the individual
  inventor, not an employer, even with federal funding involved.
- **`patentassign_hired_to_invent`** (*Dubilier*; *Standard Parts Co.
  v. Peck*, 264 U.S. 52 (1924)) — the narrow exception for someone
  specifically engaged to solve the exact problem the invention
  solves, with an honest disclosure that the doctrine's authority is
  federal, not state law as commonly assumed, and a further Erie-era
  caveat about how a modern court might characterize its source.
- **`patentassign_writing_requirement`** (35 U.S.C. § 261) — patents
  as personal property and the writing requirement, covering
  applications not yet filed.
- **`patentassign_present_assignment_language`** (*Stanford v. Roche*,
  583 F.3d 832 (Fed. Cir. 2009); *FilmTec Corp. v. Allied-Signal,
  Inc.*, 939 F.2d 1568 (Fed. Cir. 1991)) — the "hereby assigns" vs.
  "agree to assign" distinction that determines whether an assignment
  transfers rights automatically, with an explicit note that this
  holding is Federal Circuit authority from the Stanford litigation's
  lower court, distinct from the Supreme Court's own opinion in the
  same case (which addressed the Bayh-Dole Act instead).
- **`patentassign_recording`** (35 U.S.C. § 261; *FilmTec Corp. v.
  Allied-Signal, Inc.*) — the USPTO's optional-but-consequential
  3-month recording window and its bona fide purchaser rule.

## Method

Fetched 35 U.S.C. § 261 from `law.cornell.edu`, verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All five cases (*Stanford v. Roche* Supreme Court and
Federal Circuit opinions, *Dubilier*, *Standard Parts Co. v. Peck*,
*FilmTec Corp.*) verified via CourtListener against full opinion text.

## Verification

- All citations fetched twice independently or verified against full
  primary opinion text; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Acknowledgment") is the pre-existing generic
  drafting-title pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Patent Assignment Agreement (`patent_assignment`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. New fields: `assignorName`, `assigneeName`,
  `patentDescription`.
- Corpus: 668 → 675 clauses; 89 → 90 documents.
