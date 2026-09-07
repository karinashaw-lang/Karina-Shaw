# Ending employment, new document: Oil Drilling Industry Final-Wage Timing (Labor Code § 201.7) — Information Sheet

## Why this document

First processed item of wave 138 (Ending employment slot, 1×4
pattern). The agent ruled out candidates already covered by this
corpus's dense final-wage-timing coverage (general waiting-time
penalty, motion picture/broadcasting industry timing under § 201.5,
delivery method, vacation/commission payout, exempt-employee final
week) — all confirmed already covered via direct grep hits. The
chosen topic — Lab. Code § 201.7's distinct 24-hour-excluding-
weekends-and-holidays final-wage timing rule for a layoff of
employees engaged in the business of oil drilling, with a mailing
option — was confirmed genuinely open: zero prior corpus hits on
"201.7" or "oil drilling," found by checking the family of final-
wage-timing sections cross-referenced inside the existing § 203
penalty-list quote.

## What this document covers

4 clauses: 1 drafting (applicability note) and 3 authority clauses,
citing Lab. Code § 201.7 (two citations, first and second paragraphs)
and § 203(a):

- **`oildrillfinalwage_24hour_deeming_rule`** — the core 24-hour
  (excluding weekends/holidays) deeming rule and mailing option.
- **`oildrillfinalwage_legislative_purpose`** — the statute's own
  recital of legislative purpose (remote drilling locations).
- **`oildrillfinalwage_penalty_crossref`** — the observation that
  § 203's penalty list names § 201 (to which § 201.7 ties its own
  rule) but does not separately name § 201.7 itself.

## Genuine findings

- **A disclosed textual-relationship observation, not a legal
  conclusion**: the penalty-crossref clause's gap explicitly
  distinguishes between the textual fact (§ 201.7 ties itself to
  § 201, which § 203's list does name) and the unresolved legal
  question of how the § 203 penalty applies in practice to a late
  payment under § 201.7's extended window — disclosed as unresolved
  because no on-point case law was located, rather than assumed.
- **A disclosed scope limitation on layoff vs. resignation**: the
  24-hour-deeming-rule clause's gap notes § 201.7 by its own terms
  addresses only a layoff, and does not address an oil-drilling
  employee's resignation under the separate § 202 quit rule.
- **A disclosed negative CourtListener result**: a search for case law
  construing § 201.7's relationship to § 203 returned 8 results, none
  substantively on point (general § 203 waiting-time-penalty cases) —
  disclosed honestly rather than treated as supporting authority.
- **A confirmed legitimate citation-reuse pattern, not duplication**:
  the § 203 penalty-list sentence quoted here is also quoted by three
  existing corpus clauses (general waiting-time penalty, bonus pay,
  independent contractor final wage) — each, including this one,
  making a different specific analytical point about that document's
  own topic in relation to § 203, consistent with this corpus's
  established practice for widely-relevant cross-referenced statutes.

## Honest gap(s) disclosed

This document does not define "the business of oil drilling" (the
statute itself does not define it), does not address a resignation by
an oil-drilling employee, does not resolve what "such reasonable time
as may be necessary" means below the 24-hour cap, does not restate
§ 203(b)'s statute of limitations or the secretes-or-absents-
themselves exception, and does not independently verify legislative
history beyond the enactment note (Stats. 1980, Ch. 440) visible on
the fetched page.

## Method

Fetched Lab. Code §§ 201.7 and 203 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical. A CourtListener search
returned 8 results, none substantively construing § 201.7's
relationship to § 203 — disclosed honestly rather than treated as
supporting authority. All 3 citation instances were programmatically
confirmed by the research agent as exact, contiguous substrings via a
Python script asserting each quote against the extracted source text.

Independently re-verified during integration review via a two-
hundred-and-fourteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-214thVerify-OilDrillingFinalWage/1.0") of both sections —
one transient connection reset on § 201.7 resolved via the established
retry-with-backoff pattern; § 203 fetched cleanly. All 3 citation
instances confirmed clean on direct normalized-whitespace substring
match. The 24-hour deeming rule and mailing option, the statute's
stated legislative purpose, and the § 203 penalty-list text were all
independently reconfirmed present in the freshly fetched text.

## Verification

- Both cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  fourteenth independent fetch during integration review; all 3
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause's gap
  correctly discloses it is not corroborated by a second, independent
  source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `oildrillfinalwage_` prefix has zero collisions. Ran
  section-number-specific greps for "201.7" and "oil drilling" — zero
  hits on both, confirming genuine novelty. Separately confirmed the
  § 203 penalty-list quote's reuse across three other existing clauses
  is a legitimate, established citation-reuse pattern, not duplicative
  coverage.
- Checked every citation's `case` field for emptiness — all 3
  populated with proper citation identifier strings.
- No new field ids required — all three fields (`employeeName`,
  `companyName`, `terminationDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Oil Drilling Industry Final-Wage Timing (Labor Code
  § 201.7) — Information Sheet
  (`oil_drilling_final_wage_timing_info_sheet`), 4 clauses (3 authority
  + 1 drafting), in the Ending employment category. No new fields.
- Corpus: 4,563 → 4,567 clauses; 568 → 569 documents. First processed
  item of wave 138.
