# Ending employment, new document: CalPERS "Golden Handshake" Early Retirement Incentive (Government Code § 20903) — Information Sheet

## Why this document

Third processed item of wave 141 (Ending employment slot #2, 2×2
pattern). The agent ruled out sick-leave payout/rehire reinstatement
(§ 246(g)(1), § 246.5(g)(2), already covered) and wage-overpayment
recoupment (would substantially duplicate the existing wage-repayment
clawback document) — confirmed by direct inspection. The chosen
topic — Government Code § 20903, the Public Employees' Retirement
Law provision letting a CalPERS contracting agency offer eligible
local members two years of additional retirement service credit when
an impending workforce curtailment justifies it — was confirmed
genuinely open: a personal duplication spot-check independently
confirmed zero prior corpus hits on "20903" or "golden handshake"
(any case).

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority
clauses, citing Gov. Code § 20903 (a), (c), (d), (e), (f), (g), (i)
(two citations), and *Bunnett v. Regents of University of
California*, 35 Cal. App. 4th 843 (1995):

- **`calpers_golden_handshake_trigger`** — the impending-curtailment/
  change-in-service trigger and the agency's own best-interests
  determination.
- **`calpers_golden_handshake_window_period`** — the 90-to-180-day
  retirement window condition.
- **`calpers_golden_handshake_layoff_certification`** — the 1 percent
  layoff-certification condition.
- **`calpers_golden_handshake_workforce_reduction`** — the certified
  intent that a resulting vacancy remain permanently unfilled.
- **`calpers_golden_handshake_two_years_credit`** — the flat two-year
  service-credit rule.
- **`calpers_golden_handshake_ui_disqualification`** — disqualification
  for receiving unemployment insurance payments during the window.
- **`calpers_golden_handshake_reentry_forfeiture`** — forfeiture upon
  subsequent reentry into the retirement system.
- **`calpers_golden_handshake_agency_election`** — the agency's own
  election requirement and the public-meeting, non-consent-calendar
  prerequisite (two citations).
- **`calpers_golden_handshake_terminology_case`** — a cautionary
  comparison: *Bunnett*'s use of the colloquial term "golden
  handshake" for a wholly different, non-CalPERS retirement program.

## Genuine findings

- **A disclosed cautionary use of case law, heavily caveated rather
  than stretched into authority**: the terminology clause's gap
  states plainly that *Bunnett* is not authority interpreting
  § 20903 — the "golden handshake" program actually at issue was the
  University of California's own separate retirement plan, not
  CalPERS, and the case's actual holding (contract interpretation and
  administrative-mandate review) does not address § 20903 at all.
  The clause exists only to document that California practice uses
  the term "golden handshake" generically.
- **A disclosed negative case-law finding for the statute itself**: no
  reported California decision interpreting § 20903 by name was
  located — disclosed honestly across multiple clauses' gaps rather
  than stretched into tangential citations.
- **A consistently disclosed pattern of not resolving open
  administrative questions**: the gaps for the trigger, layoff-
  certification, workforce-reduction, and reentry-forfeiture clauses
  each explicitly flag specific undefined terms or unaddressed
  enforcement/review questions the statute's text does not resolve,
  rather than implying the statute is self-executing or complete.

## Honest gap(s) disclosed

This document does not determine whether any specific agency has
adopted § 20903, does not calculate the dollar value of the credit
under any specific pension formula, does not address Government Code
§ 7507's actuarial-disclosure requirements or subdivision (h)'s
5-year minimum-service exception and subdivision (j)'s pre-1999
savings clause beyond a cross-reference, does not address CalSTRS,
the UC Retirement Plan, '37 Act county systems, or a state-employer
equivalent (§ 20903 applies only to CalPERS contracting agencies),
and does not resolve any standard of judicial review for an agency's
own curtailment determination.

## Method

Fetched Gov. Code § 20903 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed byte-identical. A CourtListener search located
*Bunnett v. Regents of University of California* (opinion_id/
cluster_id 2257037, same value for both in this case); its quote was
verified via the tool-returned internal opinion id's
`html_with_citations` field. All 10 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a two-
hundred-and-twenty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-228thVerify-CalPERSGoldenHandshake/1.0") of
§ 20903 — fetched cleanly on the first attempt; all 9 statutory
citation instances confirmed clean on direct substring match. The
*Bunnett* citation was independently re-verified via the
CourtListener API's `get_endpoint_item` against opinion id 2257037 —
an initial attempt hit the MCP's hourly rate limit (429, ~17-minute
wait), and a direct-to-courtlistener.com fetch attempt was blocked
by this environment's network egress controls (confirming this
session's established, disclosed limitation); the MCP call succeeded
once the rate limit reset, and the quote was confirmed an exact,
contiguous substring of the letter quoted in the opinion's recitation
of undisputed facts, with the curly-quote characters around "golden
handshake" matching exactly. The trigger determination, the 90-to-
180-day window, the 1 percent layoff certification, the permanent-
vacancy certification, the flat two-year credit rule, the UI
disqualification, the reentry forfeiture, and the agency election and
public-meeting requirements were all independently reconfirmed
present in the freshly fetched statutory text.

## Verification

- The cited statutory section fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-eighth independent fetch during integration
  review; all 9 statutory citation instances confirmed clean. The
  case-law citation independently re-verified via the CourtListener
  API against the correct internal opinion id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section, or the same single
  opinion, correctly disclose they are not independent sources of
  each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `calpers_golden_handshake_` prefix has zero
  collisions. Ran term-specific greps for "20903" and "golden
  handshake" — zero hits on both, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new field ids required — all six fields (`employeeName`,
  `companyName`, `jobTitle`, `effectiveDate`, `dateSigned`,
  `cityState`) reused from the existing corpus, with `companyName`'s
  label reworded for the public-agency context, matching an existing
  pattern elsewhere in the corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: CalPERS "Golden Handshake" Early Retirement Incentive
  (Government Code § 20903) — Information Sheet
  (`calpers_golden_handshake_info_sheet`), 11 clauses (9 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 4,687 → 4,698 clauses; 582 → 583 documents. Third processed
  item of wave 141.
