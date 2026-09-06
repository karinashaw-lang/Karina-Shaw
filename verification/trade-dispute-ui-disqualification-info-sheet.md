# Ending employment, new document: Trade Dispute Unemployment Insurance Disqualification — Information Sheet

## Why this document

Fourth and final processed item of wave 110 (Ending employment slot).
Cal-COBRA, the § 203 waiting-time penalty, vacation payout, sick-leave
payout, constructive discharge, both WARN Acts, severance, blacklisting,
personnel records, no-rehire clauses, UI misconduct/voluntary-quit, UI
appeals, and UI overpayment/fraud were all confirmed already covered.
The agent also checked and ruled out FSA/flexible spending, ESPP,
furlough, and successor liability as false-positive substring
collisions. The agent confirmed zero prior substantive coverage of the
UI Code's trade-dispute disqualification (§§ 1262, 1262.5) — the only
existing corpus reference (`unemploynotice_change_in_relationship`)
cites "trade dispute" merely as one exception to a separate written-
notice duty, not the disqualification standard itself.

## What this document covers

5 clauses: 2 drafting (intro, closing acknowledgment) and 3 authority
clauses, citing Unemployment Insurance Code §§ 1262 (first and second
sentences) and 1262.5:

- **`tradedispute_core_disqualification`** — the disqualification for
  leaving work because of a trade dispute, with no textual exception
  for role or degree of participation in the dispute.
- **`tradedispute_duration_and_establishment`** — the disqualification's
  duration, tied to the dispute's active progress at the specific
  establishment rather than a fixed waiting period.
- **`tradedispute_edd_investigation_not_eligibility_determination`** —
  the EDD's separate dispute-level investigation duty under § 1262.5,
  expressly distinct from an individual claimant's eligibility
  determination.

## Genuine findings

- **A significant correction to the agent's own initial expectation**:
  the agent expected a "grade or class" carve-out common in some other
  states' UI statutes, excusing employees who didn't participate in,
  finance, or have a direct interest in the dispute. Reading the actual
  text of § 1262 showed no such exception exists — it is a flat rule
  keyed only to why the individual left work, not their role in the
  dispute. The agent also expected a fixed-week disqualification
  period; the statute instead ties the *duration* of ineligibility
  directly to whether the dispute remains in active progress at that
  specific establishment, with no separate re-qualification/earnings
  requirement.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search
  call; every authority clause proceeds on the statute's own text
  alone, with the core-disqualification clause explicitly noting that
  published California decisions likely construe the strike/lockout
  distinction but could not be verified or characterized this session.

## Honest gap(s) disclosed

This document does not define "trade dispute" or "establishment," does
not resolve whether an employer-initiated lockout counts as an employee
"leaving" work, does not address a multi-location employer where only
one location is affected, does not state a deadline for the EDD's
§ 1262.5 investigation or how a claimant may contest the department's
dispute-level findings independently of an individual eligibility
determination, and does not address NLRA rights, bargaining
obligations, replacement-worker or reinstatement rights, or whether
severance/WARN obligations apply during a labor dispute.

## Method

Fetched UIC §§ 1262 and 1262.5 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 3 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings, with a whitespace-normalized fallback check that was not
needed (exact matches on first try).

Independently re-verified during integration review via a
one-hundred-and-twenty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-127thVerify-TradeDispute/1.0") of both sections —
all 3 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
no-grade-or-class-exception and active-progress-duration findings were
both independently reconfirmed present in the freshly fetched text. A
personal spot-check confirmed the two "trade dispute" hits elsewhere in
the corpus were unrelated passing references (a notice-duty exception
and an unrelated final-pay-timing exception category), not genuine
prior coverage.

## Verification

- Both Unemployment Insurance Code sections fetched twice independently
  by the research agent with distinct User-Agent strings, plus a
  one-hundred-and-twenty-seventh independent fetch during integration
  review; all 3 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the duration clause
  correctly discloses it draws from the same statutory section as the
  core-disqualification clause, not an independent source; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment") collides with a generic
  boilerplate title already reused by dozens of other drafting clauses
  across the corpus — confirmed as intentional generic-title reuse,
  not a content duplicate. Independently reconfirmed this document is
  distinct from the existing UI Claimant and Employer UI Claim Response
  documents.
- Checked every citation's `case` field for emptiness — all 3
  populated with proper citation identifier strings.
- Two new fields required (`tradeDisputeDescription`,
  `workStoppageDate`), confirmed genuinely new via a corpus-wide
  field-id lookup; the remaining four fields (`employeeName`,
  `companyName`, `dateSigned`, `cityState`) confirmed already existing
  and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Dispute Unemployment Insurance Disqualification
  — Information Sheet (`trade_dispute_ui_disqualification_info_sheet`),
  5 clauses (3 authority + 2 drafting), in the Ending employment
  category. Two new fields (`tradeDisputeDescription`,
  `workStoppageDate`).
- Corpus: 3,660 → 3,665 clauses; 481 → 482 documents. Fourth and final
  processed item of wave 110.

## Wave 110 summary

Wave 110 followed the established 1×4 pattern, targeting During
Employment, Ending Employment, Business Formation, and Real Estate —
the two lowest-tied categories plus two rotated in from wave 108's
coverage, since wave 109 (the immediately preceding wave) had touched
Hiring and Confidentiality & IP. All four agents reported extensive
duplication-check pivots before landing on genuinely open topics,
continuing the saturation trend from recent waves — this now
482-document corpus increasingly requires scoping agents to search
narrower or more recently enacted statutory ground. All four completed
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine correction through close primary-
source reading: a corrected assumption about a newly enacted statute's
structural simplicity (Captive Audience Meetings' actual six-exemption,
three-enforcement-track chapter), a corrected "simple map filing"
framing replaced by a layered multi-threshold exemption structure
(Subdivision Map Act), a corrected assumption that a short statute
contained an unwritten second implementing clause (Preemptive Rights'
single-sentence § 406), and a corrected assumption importing another
state's "grade or class" carve-out that California's own statute does
not contain (Trade Dispute UI Disqualification). Per the established
alternation, wave 111 should return to a 2×2 pattern.
