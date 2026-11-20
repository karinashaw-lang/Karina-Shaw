# Launch-set verification report

Written 2026-11-20, satisfying `MVP_BUILD_INSTRUCTIONS.md` item 1.8.
This is a fresh report built directly from today's `data/clauses.json`,
`verification_levels.json` (regenerated today), `verifier/findings.jsonl`
and `verifier/triage.jsonl` — not a reassembly of
`LAUNCH_SET_VERIFICATION_WAVE1/2/3.md` or
`LAUNCH_SET_VERIFICATION_ESTIMATE.md`, which are dated 2026-11-14 and
2026-11-18 respectively and predate the A5 bucket-verification work
(2026-11-18/19) that this report's numbers actually reflect — reusing
their stale per-finding "accepted, not yet fixed" snapshots as if they
were current would have been wrong, not just incomplete. Those three
files remain useful as a historical record of how the verifier run was
staged and are not superseded by this one; this file is the current
state, not the history of how it got here (see `DECISIONS.md` for
that).

Scope: the 128-document launch set approved in `LAUNCH_SET_PROPOSAL.md`
("Approve as proposed," owner, 2026-11-18). Clause counts below are by
unique clause id (a clause shared across several launch-set documents
counts once), not by clause-document occurrence — stated explicitly
because an earlier commit message in this session reported launch-set
authority-clause counts by occurrence (684) rather than by unique id
(670); both are real numbers, just answering slightly different
questions, and this report uses the unique-id convention throughout.

## Headline numbers

- **128 documents**, **1,001 unique clauses**: 670 authority, 331
  drafting.
- **Authority-clause verification level** (`tools/clause_levels.py`,
  via `verification_levels.json`):
  - 568 adversarially_checked (84.8%)
  - 95 verified (14.2%)
  - 7 cited (1.0%)
  - 0 unverified
- **Open findings touching the launch set: 0.** 140 findings
  historically touched a launch-set clause (2 blocker, 28 major, 110
  minor); every one is now either fixed or accepted — none open. This
  confirms `review/A3_WEDGE_CONFIRMATION.md`'s and the A5 bucket
  commits' own claims of "0 open blocker/major" at the launch-set
  level, from the finding data directly rather than by trusting the
  prior claim.

| Severity | Fixed | Accepted | Open |
|---|---|---|---|
| Blocker | 2 | 0 | 0 |
| Major | 14 | 14 | 0 |
| Minor | 23 | 87 | 0 |

## Finding rate by failure type

**Fixed** (54 total): overclaiming 13, internal_contradiction 7, other
6, citation_mismatch 6, superseded_law 3, advisory_language 3, quote_
drift 1.

**Accepted, disclosed, not corpus-edited** (101 total): unverifiable
66 (see "clauses left unverified and why" below — this is the single
largest category by far), overclaiming 10, citation_mismatch 7, other
7, superseded_law 3, advisory_language 3, quote_drift 2, jurisdiction 2,
internal_contradiction 1.

A sample of the 14 **accepted major** findings — real, evidence-backed,
deliberately left as disclosed gaps rather than silently fixed, per
Global Rule 7's require-an-approved-patch standard (these were
reviewed and the triage call was to disclose rather than edit, not an
oversight):
- `llcdiss_continued_existence` — quoted text drops a qualifying clause
  from Corp. Code § 17707.06(c).
- `llc_tax_election_mechanics` — internal tension between the clause's
  default-classification framing and a sibling clause.
- `homeimprove_contract_required_and_writing` — Bus. & Prof. Code
  § 7159's disclosure list was expanded by SB 517 (eff. 2026-01-01),
  after this clause's last check.
- `arb_agreement` — overclaims the scope of a representative-action
  waiver under current California law.
- `work_auth` / `nonsolicit_employee_split` / `nonsolicit_customer_
  distinction` — citation URLs that resolve to the wrong CourtListener
  opinion for the cited case name.
- `dp_eligibility` — relies on a Family Code cross-reference (§297.1)
  that AB 1267 is in the process of repealing.
- `purchase_tds_requirement` / `lease_security_deposit` /
  `sdi_deposit_cap` / `notice_pay_rent_required_contents` /
  `waitingtime_willful_standard` — see `verifier/findings.jsonl` for
  full text; each is a real, sourced gap, not a false positive.

## Clauses left unverified, and why

**None of the 670 launch-set authority clauses carries `status:
"unverified"`** — the corpus-wide 2 fully-unverified clauses this
session started with
(`smallclaims_judgment_enforcement`,
`namechange_gender_identity_conforming_process`) were both resolved to
`verified` during the A5 bucket-2 work (2026-11-19), and neither was
in the launch set's own blocking path to begin with.

The **7 clauses stuck at `cited`** (one level below `verified`) are
the ones this session's own A5 bucket-1 re-sourcing work could not
move further: all 7 are `small_claims_info_sheet` clauses whose
primary source is `leginfo.legislature.ca.gov`, which has returned an
HTTP 403 Cloudflare bot-challenge to every direct-fetch attempt this
session made, from any calling context. Each of these 7 clauses
discloses this in its own `gap` field rather than silently claiming a
verification that didn't happen (Global Rule 6). `review/SOURCE_BLOCKS.md`
lists the exact URLs for the owner to check by hand or grant access
to.

The **66 "unverifiable" accepted-minor findings** are a different
thing from the 7 `cited`-level clauses above: these are clauses that
did reach `verified` or `adversarially_checked` using a secondary
mirror (`law.onecle.com`, the rubric's named independent second
publisher) because the same leginfo block prevented the *adversarial
checker itself* from independently re-fetching the primary source for
that specific pass, not because the clause's own citation was never
verified against a primary source in the first place. Each carries its
own disclosed gap text; none of them are the same 7 clauses listed
above.

## Drafting clauses

All 331 launch-set drafting clauses were screened in A5 bucket 4
(2026-11-19) for advisory language, contradiction with a sibling
clause, undisclosed jurisdiction, and embedded legal claims that
should be authority clauses instead — 9 real defects found, all 9
fixed directly (not just disclosed), none open. Drafting clauses carry
no authority/verification level by definition and are correctly
excluded from Tier A regardless of this screening result
(`tools/tiering.py`).

## What this report does not cover

This report is about clause-level verification state only. It says
nothing about export paywall enforcement, server-side rendering,
Stripe/entitlements correctness, or any of the other Phase 2-5 gaps
`MVP_INSTRUCTIONS_STATUS.md` tracks separately — those are real,
open, and not restated here to avoid two files drifting out of sync
on the same claims.
