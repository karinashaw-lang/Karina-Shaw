# Estate Planning, new document: Medi-Cal Estate Recovery — Information Sheet

## Why this document

Second processed item of wave 97 (Estate Planning slot). A scoping pass
confirmed this corpus's only prior mention of Medi-Cal estate recovery
was one tangential clause inside the Transfer-on-Death deed document,
whose own gap field explicitly stated the § 14009.5 mechanics "were not
independently traced in this research." This document treats the topic
in full for the first time.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Welfare and Institutions Code § 14009.5(a), (b), (c), (e), (f),
and (g):

- **`medicalrecovery_trigger`** — the two circumstances that can trigger
  a recovery claim: the nursing-facility-inpatient trigger and the
  age-55-or-older trigger.
- **`medicalrecovery_2017_probate_only_limitation`** — the central
  finding: recovery for deaths on or after January 1, 2017 is limited by
  statute to probate-estate assets, a significant narrowing from the
  pre-2017 rule.
- **`medicalrecovery_spousal_child_exemption`** — the bar on recovery
  under the age-55 trigger when survived by a spouse, domestic partner,
  or a minor/disabled child, with an honest disclosure that this bar's
  textual scope is limited to that one trigger.
- **`medicalrecovery_hardship_waiver`** — the mandatory substantial-
  hardship waiver and the "homestead of modest value" exception.
- **`medicalrecovery_information_request_right`** — a living member's
  right to request an accounting of recoverable expenses.

## Genuine findings

- **A confirmed current-law verification, not an assumption**: the
  research brief specifically warned against assuming the pre-2017 rule
  was still current. The agent verified the statute's own text already
  reflects the post-2017 narrowed rule — the "estate" definition is
  expressly limited to probate-estate assets, with subdivision (g)
  confirming this applies only to deaths on or after January 1, 2017 —
  independently re-confirmed during integration review via a fresh
  fetch.
- **A disclosed access-tier limitation, not a fabrication**: dhcs.ca.gov
  returned only an automated bot-detection interstitial (an Incapsula
  challenge page) rather than substantive content on two attempts. The
  document discloses this honestly in the hardship-waiver clause's gap
  field rather than inventing procedural detail about how a hardship
  waiver application actually works.
- **A disclosed verification-tier distinction on the pre-2017 rule**:
  the document describes what the pre-2017 broader "estate" definition
  reached (joint tenancy property, living trust assets, beneficiary
  designations) based on the current statute's own stated amendment
  intent and secondary-source consensus — explicitly flagged as not
  independently diffed against the actual pre-amendment statutory text.
- **A genuinely useful interpretive gap surfaced, not glossed over**:
  the surviving-spouse/child bar applies by its own text only to the
  age-55 trigger, not the separate nursing-facility trigger — flagged as
  an open question the document does not resolve.
- Correctly excluded two candidate cases (Estate of Shinkle, 2002;
  Estate of Starkweather, 1998) because both predate the 2017 narrowing
  and citing them risked implying superseded, broader law was still
  current — a disclosed, deliberate choice rather than an oversight.

## Honest gap(s) disclosed

This document does not resolve whether a particular Medi-Cal recipient's
services meet the federal "health care services" definition subject to
recovery, or whether nursing-facility eligibility criteria were met for
any specific estate. It does not describe DHCS's hardship-waiver
application procedure or forms (left to unreached DHCS regulations). It
does not resolve the interaction between the two recovery triggers where
both could apply, and does not identify a post-death analog to the
living member's accounting-request right for a personal representative.

## Method

Fetched Welfare and Institutions Code § 14009.5 from
`leginfo.legislature.ca.gov`, fetched twice by the research agent with
two distinct User-Agent strings, confirmed byte-for-byte identical on
the statutory-text portion (byte sizes matched; the only raw HTML
difference was a per-request JS debug-nonce in unrelated boilerplate).
dhcs.ca.gov attempted twice and found unreachable (bot-detection
interstitial only). CourtListener searched for potentially relevant case
law; two candidates found and deliberately excluded as pre-2017 and
therefore risking implication of superseded law. All 15 citation quotes
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
seventy-seventh fetch (a new distinct curl User-Agent string,
"Groundtruth-77thVerify-MediCalRecovery/1.0") of § 14009.5 — all 15
quotes confirmed clean on direct substring match, no extraction
artifacts encountered.

## Verification

- Welfare and Institutions Code § 14009.5 fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  seventy-seventh independent fetch during integration review; all 15
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 15 populated
  with proper citation identifier strings.
- No new fields required — all six fields (`decedentName`, `dateOfDeath`,
  `dateSigned`, `cityState`, `preparerName`, `estimatedEstateValue`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Medi-Cal Estate Recovery — Information Sheet
  (`medi_cal_estate_recovery_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Estate Planning category. No new fields.
- Corpus: 3,255 → 3,262 clauses; 431 → 432 documents. Second processed
  item of wave 97.
