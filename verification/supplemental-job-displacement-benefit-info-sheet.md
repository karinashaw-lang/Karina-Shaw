# Ending employment, new document: Supplemental Job Displacement Benefit (Workers' Comp Voucher) — Information Sheet

## Why this document

First processed item of wave 98 (Ending employment slot, 1×4 pattern
targeting the corpus's six-way-tied lowest categories). A scoping pass
confirmed zero prior coverage of the workers' compensation retraining
voucher anywhere in the corpus, distinct from the existing Workers'
Compensation Retaliation information sheet.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Labor Code § 4658.7(a)-(i):

- **`jobdisplacement_eligibility_trigger`** — the permanent-partial-
  disability trigger and the qualifying-offer defeat conditions.
- **`jobdisplacement_offer_and_voucher_timing`** — the 60-day
  qualifying-offer window and the 20-day voucher-offer deadline that
  follows it.
- **`jobdisplacement_voucher_value_and_use`** — the central finding: the
  current $6,000 aggregate voucher value and its itemized permitted
  uses and sub-caps.
- **`jobdisplacement_expiration`** — the two-year/five-year expiration
  rule.
- **`jobdisplacement_settlement_and_employer_liability`** — the
  restriction on settling the SJDB claim under specific Labor Code
  chapters, and the employer's non-liability for voucher-use injuries.

## Genuine findings

- **A confirmed current-dollar-value verification, not an assumption**:
  the research brief specifically flagged that the voucher amount had
  been amended over the years and asked the agent to verify rather than
  assume a remembered figure. The agent confirmed the current $6,000
  aggregate figure directly from the statute's own text, and explicitly
  disclosed that an older, pre-2013 version of this benefit used a
  different PD-rating-tiered schedule — independently re-confirmed
  during integration review via a fresh fetch.
- **A disclosed, deliberate choice not to force weak case law**: the
  agent found two candidate cases (Camacho v. Target Corp.; California
  Insurance Guarantee Assn. v. WCAB) but on reading both determined
  neither is squarely on point — one concerns settlement-release scope
  with SJDB as an incidental checkbox item, the other only mentions SJDB
  in passing while deciding an unrelated medical-lien dispute. Rather
  than force in a misleading citation, the document is purely statutory,
  a disclosed and legitimate choice.
- Every authority clause correctly identifies the fact-specific
  determinations (PD rating, offer timeliness, physician-report receipt
  date, cumulative-trauma injury dates) that this sheet cannot resolve
  for any individual claim.

## Honest gap(s) disclosed

This document does not reproduce Labor Code § 4658.1's own definitions
of "regular work," "modified work," and "alternative work," incorporated
by reference. It does not address how a broader workers' compensation
compromise-and-release agreement that lists the SJDB voucher as a
settled item should be interpreted — a separate contract-construction
question. It does not calculate a specific expiration date, offer
deadline, or eligibility determination for any individual worker's claim.

## Method

Fetched Labor Code § 4658.7 from `leginfo.legislature.ca.gov`, fetched
twice by the research agent with two distinct User-Agent strings; the
extracted statutory-text content (after HTML-tag stripping and
whitespace normalization) was confirmed byte-identical, though the raw
page bytes differed slightly due to a per-request session token. All 15
citation instances programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via an
eightieth fetch (a new distinct curl User-Agent string,
"Groundtruth-80thVerify-JobDisplacement/1.0") of § 4658.7 — all 13
unique quotes (across 15 citation instances) confirmed clean on direct
substring match, no extraction artifacts encountered.

## Verification

- Labor Code § 4658.7 fetched twice independently by the research agent
  with distinct User-Agent strings, plus an eightieth independent fetch
  during integration review; all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 15 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`companyName`, `employeeName`,
  `injuryDate`, `injuryDescription`, `dateSigned`, `cityState`) reused
  from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Supplemental Job Displacement Benefit (Workers' Comp
  Voucher) — Information Sheet
  (`supplemental_job_displacement_benefit_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Ending employment category. No new
  fields.
- Corpus: 3,277 → 3,284 clauses; 434 → 435 documents. First processed
  item of wave 98.
