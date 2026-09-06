# Ending employment, new document: State Disability Insurance (SDI) Eligibility — Information Sheet

## Why this document

Second processed item of wave 101 (Ending employment slot). A scoping
pass and clause-level duplication check confirmed the corpus's existing
Unemployment Insurance documents and Paid Family Leave document don't
cover SDI's own claimant-disability eligibility — a genuinely distinct
gap under the same Unemployment Insurance Code part.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Unemployment Insurance Code §§ 2601, 2609, 2610, 2611, 2626(a)-(b),
2627(b), 2628, 2652, and 1253(c):

- **`sdi_purpose_and_scope`** — the shared statutory purpose behind SDI
  and PFL, and how this document addresses only SDI.
- **`sdi_disability_definition`** — the statutory "disability" definition
  and its enumerated categories.
- **`sdi_unemployed_claimant_eligibility`** — the central finding:
  current employment is not itself an SDI eligibility requirement.
- **`sdi_wage_base_period_requirement`** — the $300 minimum wage-earning
  threshold and how the disability base period is determined.
- **`sdi_waiting_period`** — the seven-consecutive-day waiting period and
  its 60-day related-claim exception.
- **`sdi_no_concurrent_ui_benefits`** — the statutory bar on concurrent
  SDI and UI benefits for the same period, and the separate mechanism
  by which that bar actually operates on each side.

## Genuine findings

- **A direct, confirmed answer to the research brief's central
  question**: the agent read §§ 2609 and 2610 closely and confirmed
  current employment is not required for a valid SDI claim — only
  base-period wages — meaning a recently-unemployed person can still
  qualify for SDI if they become disabled within the applicable base
  period. This directly resolves the brief's framing question through
  primary-source reading rather than assumption.
- **A corrected oversimplification of the "no double dip" rule**: the
  brief assumed a single unified statute preventing concurrent SDI/UI
  benefits. The agent found the bar actually operates through two
  separate statutory tests: § 2628 disqualifies SDI when UI was received
  or the claimant was entitled to it, while the UI-side practical bar
  rests on the unrelated "able to work and available for work"
  requirement in § 1253(c) — there is no UI-side statute naming SDI
  receipt directly. Disclosed as a structural correction rather than
  stated as a single unified rule.
- **A disclosed statutory-vintage finding**: the $300 wage-earning
  threshold in § 2652 was last amended in 1957 and has not been
  inflation-adjusted by that section's own text — flagged rather than
  presented as a current, meaningful dollar figure without context.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's single
  lightweight test call; the document proceeds statute-only, disclosed
  explicitly.

## Honest gap(s) disclosed

This document does not define "regular or customary work" for a
claimant with no current employer at disability onset — that question,
if answered at all, lies in EDD regulations not independently verified
here. It does not detail the additional alcoholism/drug-treatment
conditions in §§ 2626.1-2626.2, the other § 2627 eligibility conditions
(claim-filing, examination, certification), or any temporary
emergency waiver of the waiting period. It does not state the weekly
benefit-amount calculation formula. It does not address partial-
disability situations where a claimant might satisfy § 1253(c) for part
of a week while disabled for another part.

## Method

Fetched Unemployment Insurance Code §§ 2601, 2606, 2609, 2610, 2611,
2626, 2627, 2628, 2652, and 1253 from `leginfo.legislature.ca.gov`, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization.
CourtListener's daily rate limit was already exhausted on a single
lightweight test call; no case law was used, a disclosed and legitimate
choice. All 10 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-third fetch (a new distinct curl User-Agent string,
"Groundtruth-93rdVerify-SDI/1.0") of all nine cited sections — all 10
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All nine Unemployment Insurance Code sections fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a ninety-third independent fetch during integration review; all
  10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus — confirmed
  clean; independently re-verified that the `sdi_` id prefix used here
  does not collide with the corpus's unrelated existing `sdi_*` ids
  (security-deposit clauses in a different document), which use the
  same prefix by coincidence but distinct, non-overlapping id strings.
- Checked every citation's `case` field for emptiness — all 10 populated
  with proper citation identifier strings.
- No new fields required — all three fields (`employeeName`,
  `companyName`, `separationDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: State Disability Insurance (SDI) Eligibility —
  Information Sheet (`state_disability_insurance_eligibility_info_sheet`),
  8 clauses (6 authority + 2 drafting), in the Ending employment
  category. No new fields.
- Corpus: 3,372 → 3,380 clauses; 447 → 448 documents. Second processed
  item of wave 101.
