# During employment, new document: On-Call and Standby Time Compensability — Information Sheet

## Why this document

Third processed item of wave 99 (During employment slot, second of the
2×2 pattern). A scoping pass confirmed zero prior coverage of on-call/
standby time compensability, distinct from the existing Reporting Time
Pay information sheet, which addresses the narrower situation of an
employee who has already reported to work.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing IWC Wage Order No. 4-2001 §§ 2(L), 3(A)(1), 4(B), and 5(D):

- **`oncall_hours_worked_definition`** — the general control-based
  "hours worked" definition.
- **`oncall_health_care_variant`** — a separate, narrower FLSA-referenced
  definition applicable specifically to health-care-industry employees.
- **`oncall_control_test_factors`** — a general, explicitly unverified
  description of the factors California case law has examined when
  applying the control test to on-call/standby arrangements.
- **`oncall_wages_owed_consequence`** — how an "hours worked"
  classification feeds into minimum-wage and overtime calculations.
- **`oncall_distinguishing_reporting_time`** — the wage order's own
  standby-status carve-out from reporting-time pay, and how that differs
  from this document's broader on-call/standby question.

## Genuine findings

- **A disclosed, deliberate choice not to cite unverified case law**: a
  single lightweight CourtListener search call was made before drafting
  to check quota availability; it returned a 429 indicating the daily
  cap (125/day) was already exhausted by earlier session research
  (~5.7-hour reset). Rather than wait it out or cite *Mendiola v. CPS
  Security Solutions* or any other case from memory, the agent named
  Mendiola only as a commonly-associated, explicitly unverified
  reference in the gap field and built the control-test-factors clause
  as a general, disclosed-as-unverified description of the doctrine
  rather than a quoted holding.
- **A correctly identified quote-construction issue**: the health-care-
  industry variant's quote spans a footnote inserted mid-sentence at a
  PDF page break; rather than approximate or ellipsis-join across it,
  the agent split the citation into two separately-quoted, independently
  verified fragments.
- **A disclosed PDF-extraction spacing artifact**: the overtime quote
  ("one and one- half ( 1½)") reflects the source PDF's own extraction
  spacing irregularity, quoted exactly as extracted rather than silently
  cleaned up.
- **A correctly scoped distinction from the existing Reporting Time Pay
  document**: the agent confirmed the new document doesn't restate that
  document's core rule or exceptions, citing the same § 5(D) subdivision
  only for its own distinct interpretive point about scope.

## Honest gap(s) disclosed

This document verifies only IWC Wage Order No. 4-2001; other numbered
wage orders (e.g., No. 5, No. 7) containing materially similar "hours
worked" language in their own numbered subdivisions were not
independently checked. It does not confirm whether the wage order's
"subject to control" wording has changed since its original 2001
adoption — the fetched text reflects the order's current, actively
amended form (including minimum-wage figures effective through 2026). It
does not state any verified case-law holding on how the control-test
factors have actually been applied to specific on-call arrangements; the
factor list is disclosed as a general, unverified summary of the
doctrine. It does not determine, for any actual on-call or standby
arrangement, whether that time in fact qualifies as "hours worked."

## Method

Fetched IWC Wage Order No. 4-2001 (`dir.ca.gov/IWC/IWCArticle04.pdf`)
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical by MD5 checksum (`bdeadc4f90623740bdfabff0cd2d6056`).
CourtListener's daily rate limit was already exhausted on a single
lightweight test call made before drafting; no case law was cited, a
disclosed and legitimate choice. All 7 citation quotes programmatically
confirmed by the research agent as exact, contiguous substrings of the
extracted PDF text.

Independently re-verified during integration review via an
eighty-sixth fetch (a new distinct curl User-Agent string,
"Groundtruth-86thVerify-OnCall/1.0") of the same PDF — confirmed
byte-identical to the research agent's own two fetches by MD5 checksum.
All 7 citation instances confirmed clean on direct substring match after
independent text extraction, no discrepancies found.

## Verification

- IWC Wage Order No. 4-2001 fetched twice independently by the research
  agent with distinct User-Agent strings, plus an eighty-sixth
  independent fetch during integration review (all three copies
  MD5-identical); all 7 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same wage order, and the subdivision already used
  by the existing Reporting Time Pay document, correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: On-Call and Standby Time Compensability — Information
  Sheet (`on_call_standby_time_compensability_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the During employment category. No new
  fields.
- Corpus: 3,319 → 3,326 clauses; 440 → 441 documents. Third processed
  item of wave 99.
