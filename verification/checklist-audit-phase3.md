# Phase 3 audit — checklist items 1 and 8, all 11 shipped clauses

Checked 2026-08-21, against the 9-item checklist adopted this session. Items 2, 3,
4, 5, 6, 7, and 9 were already satisfied when each clause was written (two
independent sources, quotes re-verified, gaps recorded, checked-dates present).
This is closing the two that weren't explicitly audited: item 1 (primary source,
reliable method) and item 8 (stays informational, doesn't advise).

## Item 1 — primary source inventory

Where a codified statute or regulation actually underlies the claim, fetched it
directly (via Cornell LII, `curl` — same method flagged earlier this session as
not a stable integration, still true) rather than leaving it as case-law-only.
Where the doctrine is judge-made with no codified text beneath it, that's stated
plainly — there is no "more primary" source to fetch in those cases; the opinion
itself is the primary source, and CourtListener is a mirror **of the opinion**,
not a mirror of some further-upstream primary text.

| Clause | Statute/reg underneath? | Primary text fetched this session? |
|---|---|---|
| `at_will` | None — the at-will default and its implied-contract/disclaimer exceptions are common-law doctrine. | N/A. The three citations (*Toussaint*, *Lincoln*) are themselves the primary source; CourtListener mirrors them. |
| `timekeeping` | 29 U.S.C. § 207(a)(1) (the underlying overtime-pay duty; the "just and reasonable inference" test itself is judicial gloss on top of it). | **Yes** — fetched directly from Cornell LII this session, added as a citation. |
| `work_auth` | 8 C.F.R. § 274a.2(b)(1)(ii); 8 U.S.C. § 1324b(a)(6). | **Yes, both** — the regulation was fetched in the prior session round; the statute was fetched this round, closing the miscitation gap with the statute's own text rather than a case quoting it. |
| `accommodation` | 29 C.F.R. § 1630.2(o)(3). | **Yes** — fetched this round. |
| `monitoring` | None — "reasonable expectation of privacy" in this context is a common-law/constitutional-adjacent doctrine, not a codified test. | N/A, same reasoning as `at_will`. |
| `offer_overtime` | 29 U.S.C. § 207(a)(1), same duty as `timekeeping`. | **Yes** — fetched this round, added as a citation. |

**Net result:** 4 of 6 authority clauses now carry a directly-fetched primary
statute/regulation citation in addition to case law. The other 2 (`at_will`,
`monitoring`) don't have a "more primary" source to reach — genuinely, not because
the check wasn't tried.

**Standing caveat, unchanged from earlier this session:** the fetch method is
`curl` reaching Cornell LII directly. It worked every time it was tried this
session, but it's still not a stable integration — no schema, HTML-structure
dependent, and inconsistent with what the `WebFetch` tool reports for the same
domain. Treat each fetch as verified for the day it happened, not as a permanent
guarantee the method keeps working.

## Item 8 — stays informational, doesn't advise

Read every clause against the line: does it tell *this specific reader* what to
do about their situation, or does it state a general rule and its general
consequence? All 11 pass; two are close enough to the line to be worth recording
the reasoning, not just the verdict.

| Clause | Kind | Verdict | Reasoning |
|---|---|---|---|
| `welcome` | drafting | Pass | Company statement, no legal claim. |
| `at_will` | authority | Pass | States the relationship's default status going forward; does not tell the reader to do anything. |
| `timekeeping` | authority | Pass | States what happens if records are incomplete; describes a process outcome, not a directive. |
| `work_auth` | authority | Pass | States the company's legal duty; no instruction to the reader. |
| `accommodation` | authority | **Pass, closest call** | "If you request..." describes what happens *if* the reader acts, not whether they should — but it's the clause most adjacent to advice-shaped language of the six. Worth re-reading if this document line ever gets edited. |
| `monitoring` | authority | Pass | States the monitoring/privacy rule generally; no directive to the reader. |
| `closing` | drafting | Pass | Signature block. |
| `offer_position` | drafting | Pass | Factual offer terms. |
| `offer_compensation` | drafting | Pass | Factual offer terms. |
| `offer_overtime` | authority | **Pass, closest call** | Describes the rule and its consequence (overtime owed regardless of pre-approval, unless never reported) — reads close to "so you should report your hours," but stays descriptive of the legal consequence rather than instructing the reader to act. Same note as `accommodation`: re-read if this wording changes. |
| `offer_ack` | drafting | Pass | Signature block. |

**Net result:** 11 of 11 pass. Two flagged as the closest calls, not because
they're wrong, but so a future edit to either doesn't casually cross the line
without someone noticing it was already close.
