# During employment, new document: Immigrant Worker Protection Act — Information Sheet

## Why this document

Third document of wave 90. Read the existing three immigration-adjacent
Hiring-category documents (Form I-9, E-Verify, "Immigration-Related Unfair
Employment Practices") in full — confirmed they cover only hiring-stage
verification and hiring/discharge discrimination (8 U.S.C. § 1324b), not
mid-employment conduct during an actual federal enforcement action at the
workplace. Grepped the corpus for "AB 450," "1019.2," "90.2," "immigration
enforcement," and "I-9 inspection" — zero hits. Confirmed a real,
non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (scope, acknowledgment) and 5 authority clauses,
citing Lab. Code § 90.2(a)(1), (a)(3), (b)(1), (b)(2), (c), (d), (e), (f),
and Gov. Code §§ 7285.1(a)-(e), 7285.2(a)(1)-(2), (b)-(d):

- **`iwpa_notice_of_inspection`** (§ 90.2(a)(1), (a)(3)) — the 72-hour
  pre-inspection employee notice duty, its required contents, and the
  duty to furnish a copy on request.
- **`iwpa_notice_of_results`** (§ 90.2(b)(1)-(2)) — the post-inspection
  results-notice duty, the separate obligations notice, and the
  "affected employee" definition.
- **`iwpa_notice_penalties`** (§ 90.2(c)-(f)) — the $2,000-$10,000 civil
  penalty for failing to give either notice, the federal-direction
  exception, and the E-Verify MOU savings clause.
- **`iwpa_nonpublic_area_access`** (§ 7285.1(a)-(e)) — the bar on voluntary
  consent to let a federal immigration enforcement agent into a nonpublic
  work area absent a judicial warrant, its warrant-verification carve-out,
  and its penalty/enforcement mechanism.
- **`iwpa_employee_records_access`** (§ 7285.2(a)(1)-(2), (b)-(d)) — the
  parallel bar on voluntary consent to access employee records absent a
  subpoena or judicial warrant, and its Notice-of-Inspection exception.

## Genuine corrections and findings

- **A major genuine correction to the task's own research premise**: the
  brief guessed the topic was codified at "Labor Code § 90.2 and
  § 1019.2." Independently fetching and reading the actual statutory text
  showed this was half wrong: § 1019.2 is a distinct statute (Labor Code
  Chapter 3.1) restricting an employer's *reverification* of an existing
  employee's work authorization — a different subject, excluded from this
  document and flagged in the scope clause so a reader isn't misled about
  coverage. The actual AB 450 provisions barring warrantless workplace/
  records access live in **Government Code §§ 7285.1-7285.3**, not the
  Labor Code — verified by fetching and reading the statutes directly
  rather than trusting the assumption.
- Correctly disclosed that § 90.2(a)(2) (a duty running to the Labor
  Commissioner, not the employer, to develop a model posting by a
  now-historical July 1, 2018 deadline) was deliberately not quoted as an
  ongoing employer obligation.
- Correctly disclosed that § 7285.3 and § 90.2(f) are duplicate E-Verify
  MOU savings clauses; only § 90.2(f) was quoted, with the duplication
  disclosed rather than quoting both redundantly.
- Correctly took no position on whether a private right of action exists
  alongside the Labor Commissioner's enforcement authority — the statutory
  text names only the Labor Commissioner as recovering the § 90.2 penalty,
  and the clause does not assert more than that.

## Genuine delivered-quote defects found and fixed (integration review)

Independent re-verification found 2 of 21 quotes did not match on a strict
check, both in `Lab. Code § 90.2`: the delivered quotes read
"...information:(A) The name..." and similar list items run together
without a space after each period/colon, while the independently fetched
source reads "...information: (A) The name..." with a space before each
lettered item and after each sentence. This is the same missing-space
delivered-quote-defect pattern documented in wave 86 (twice) and wave 90's
own Statutory Will document (once) — a real transcription defect, not a
source-side artifact. Both quotes were corrected in the scratchpad file to
match the source exactly, then re-verified as exact matches before
merging. All 19 other quotes matched cleanly on the first check.

## Honest gap(s) disclosed

Labor Code § 1019.2 (reverification restriction) is out of scope,
addressed elsewhere in this library. No case law on how courts have applied
these provisions was researched. Whether a private right of action exists
alongside Labor Commissioner enforcement is not addressed. What counts as
a "public" versus "nonpublic" area of a particular workplace is a
fact-specific determination the statutory text itself does not define, and
this document does not resolve it. This document does not determine
whether any specific employer received, or will receive, a Notice of
Inspection, or whether voluntary consent was or was not given in any
specific encounter with a federal agent.

## Method

Fetched Lab. Code § 90.2 and Gov. Code §§ 7285.1 and 7285.2 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-identical after whitespace
normalization. All 21 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes) after two delivered-quote defects (described above)
were corrected. Independently re-verified during integration review via a
fiftieth fetch (a distinct curl User-Agent string,
"Groundtruth-50thVerify-IWPA/1.0") of all three sections — 19 of 21 quotes
confirmed clean immediately; the two § 90.2 defects were caught, corrected,
and re-confirmed clean.

## Verification

- All three statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a fiftieth independent
  fetch during integration review; all 21 quotes confirmed clean (two
  corrected before merge).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment") duplicates existing corpus
  titles — consistent with this project's established pattern of generic,
  reused boilerplate drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 21 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`companyName`, `employeeName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Immigrant Worker Protection Act — Information Sheet
  (`immigrant_worker_protection_act_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the During employment category. No new fields.
- Corpus: 3,072 → 3,079 clauses; 405 → 406 documents. Third addition of
  wave 90.
