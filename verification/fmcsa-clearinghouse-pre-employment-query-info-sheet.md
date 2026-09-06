# Hiring, new document: FMCSA Drug and Alcohol Clearinghouse Pre-Employment Query — Information Sheet

## Why this document

Second and final processed item of wave 131 (Hiring slot, 2×2
pattern). The agent ruled out six candidates via specific
section-number greps before landing here: off-duty cannabis use (Gov.
Code §12954), employer access to social media passwords (Lab. Code
§980), the noncompete void-notice duty (Bus. & Prof. Code
§16600.1(b)), USERRA reemployment rights, and no-rehire clauses in
settlement agreements (CCP §1002.5) were all confirmed already
substantively covered. The chosen topic — the federal Commercial
Driver's License Drug and Alcohol Clearinghouse pre-employment/annual
query requirement (49 CFR Part 382, Subpart G) — was confirmed
genuinely open: zero prior corpus hits on "FMCSA," "Clearinghouse,"
"382.301," "49 CFR," or "Federal Motor Carrier" before drafting. The
document explicitly distinguishes itself from two related-but-
different existing corpus documents: the DMV Employer Pull Notice
Program (California driving-record system) and the TNC Driver
Background Check (California rideshare-specific criminal screening) —
neither touches a driver's federal drug/alcohol testing violation
record.

## What this document covers

10 clauses: 2 drafting (scope, acknowledgment) and 8 authority
clauses, citing 49 CFR §382.103(a), §382.107 (two citations),
§382.701(a), §382.703(a), (c), §382.701(b), §382.701(d), §382.701(e),
§382.507:

- **`cdlch_applicability`** — Part 382's coverage rule and its stated
  exceptions.
- **`cdlch_definitions`** — the "Clearinghouse" and "Employer"
  definitions.
- **`cdlch_preemployment_query`** — the mandatory full pre-employment
  query before safety-sensitive work.
- **`cdlch_driver_consent`** — the driver-consent requirements for
  full and limited queries, and the no-consent-no-work rule.
- **`cdlch_annual_query`** — the annual query requirement and the
  24-hour full-query upgrade rule.
- **`cdlch_prohibition_return_to_duty`** — the general use prohibition
  and its SAP/return-to-duty exception.
- **`cdlch_recordkeeping`** — the three-year query recordkeeping duty.
- **`cdlch_penalties`** — the federal civil/criminal penalty
  cross-reference.

## Genuine findings

- **A disclosed, deliberate choice not to independently fetch three
  cross-referenced provisions**: the return-to-duty clause's gap
  discloses that 49 CFR Part 40, Subpart O (the SAP process itself)
  was not independently fetched; the penalties clause's gap discloses
  that 49 U.S.C. §521(b)'s actual penalty amounts and procedure were
  not independently fetched, only the regulatory cross-reference
  verified; and the applicability clause's gap discloses that
  §382.103(d)'s detailed exception conditions were paraphrased, not
  independently quoted in full.
- **A disclosed self-correction during drafting**: the agent's own
  report states it caught and fixed seven initial gap-field
  `{{placeholder}}` leaks before finalizing — a concrete example of
  the mandatory pre-delivery leak check catching real issues before
  they reached integration review.
- **A disclosed, deliberate choice not to restate an extensive
  definitions list**: the definitions clause's gap explicitly names
  the additional §382.107 terms ("driver," "safety-sensitive
  function," "actual knowledge," "refuse to submit to a test") used
  elsewhere in the document without being independently defined in
  this clause.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on regulatory text alone.

## Honest gap(s) disclosed

This document does not restate §382.103(d)'s exception conditions in
full, does not restate §382.107's full definitions list, does not
determine whether a specific position requires a commercial driver's
license or falls within Part 382's coverage, does not describe Part
40 Subpart O's SAP/return-to-duty process, does not state 49 U.S.C.
§521(b)'s actual penalty amounts or enforcement procedure, and does
not describe the mechanics of how a Clearinghouse registration
satisfies the recordkeeping requirement.

## Method

Fetched 49 CFR §§382.103, 382.107, 382.701, 382.703, and 382.507 via
the eCFR Versioner API (title 49, current as of September 3, 2026),
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. CourtListener's daily quota was
already exhausted (HTTP 429) on the agent's test call; no case law was
used or fabricated. All 10 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings,
including exact preservation of the source XML's paragraph-level line
breaks within multi-subdivision quotes.

Independently re-verified during integration review via a
one-hundred-and-eighty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-189thVerify-FMCSAClearinghouse/1.0") of all five
sections through the same eCFR Versioner API — all 10 citation
instances confirmed clean on exact, newline-preserving substring
match against the paragraph-joined source text, directly confirming
the embedded literal newlines in several quotes are genuine paragraph
breaks in the source XML, not artifacts. The coverage rule, both
definitions, the pre-employment query requirement, the driver-consent
rules, the annual query requirement, the use prohibition and its SAP
exception, the recordkeeping duty, and the penalty cross-reference
were all independently reconfirmed present in the freshly fetched
text.

## Verification

- All five CFR sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  eighty-ninth independent fetch during integration review; all 10
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean (confirming the agent's own disclosed
  self-correction of seven initial placeholder leaks held).
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `cdlch_` prefix has zero collisions. Ran
  section-number-specific greps for §§382.103, 382.107, 382.701,
  382.703, and 382.507 across the full corpus — zero hits outside the
  new clauses, confirming no disguised overlap.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `jobTitle`, `dateSigned`) reused from the existing
  corpus, matching the house style of the sibling TNC Driver
  Background Check document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: FMCSA Drug and Alcohol Clearinghouse Pre-Employment
  Query — Information Sheet
  (`fmcsa_clearinghouse_pre_employment_query_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 4,279 → 4,289 clauses; 543 → 544 documents. Second and final
  processed item of wave 131.

## Wave 131 summary

Wave 131 followed the established 2×2 pattern, targeting Hiring and
Estate Planning — the two categories tied lowest after wave 130's
rotation, both last touched in wave 128. Both agents ran section-
number-specific duplication checks before landing on genuinely open
topics: the Probate Referee and Inventory and Appraisal procedure
(Prob. Code §8800 et seq. and §400 et seq., after ruling out six
already-covered candidates) and the FMCSA Drug and Alcohol
Clearinghouse pre-employment query requirement (49 CFR Part 382,
Subpart G, after ruling out six already-covered candidates). This wave
produced zero genuine duplication findings requiring exclusion — every
delivered clause across both documents survived independent
integration review intact. Each document surfaced at least one
genuine, disclosed finding: a disclosed choice not to independently
verify three cross-referenced Probate Code sections, plus a deliberate
decision not to seek case law at all given the topic's purely
administrative character (Probate Referee); and a disclosed
self-correction of seven initial placeholder leaks caught before
delivery, plus disclosed non-verification of three cross-referenced
federal provisions (FMCSA Clearinghouse). Per the established
alternation, wave 132 should return to a 1×4 pattern.
