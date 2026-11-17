# Review baseline — full-corpus completion spec, WS0

Run 2026-11-17, against branch `claude/new-session-palh5c`. Every
number below came from running the repo's own tools today
(`tools/validate_corpus.py`, `tools/tiering.py`,
`verifier/triage.py --summary`, and a one-off computation against
`verifier/checked.jsonl`/`findings.jsonl`/`triage.jsonl` using
`tools/clause_levels.py`'s own functions — reproduced in full below),
not recalled from the handoff spec or an earlier report.

## 1. Confirming the handoff spec's Section 2

| Claim in the spec | Confirmed |
| --- | --- |
| 741 documents, 9 categories | **Exact match.** |
| 6,621 clauses (4,989 authority, 1,632 drafting) | **Exact match.** |
| 11,688 citations | **Exact match.** |
| Tiers: 15 A / 314 B / 412 C | **Exact match.** |
| 318 findings (0 open blocker, 0 open major, 148 open minor, 64 fixed, 106 accepted) | **Exact match**, confirmed by joining `findings.jsonl` against `triage.jsonl` directly rather than trusting `--summary` alone — severity breakdown of the 148 open findings is 100% minor (0 blocker, 0 major), matching the spec's claim exactly. |
| "Adversarial verifier coverage was ~22% ... at last detailed report (Nov 10). Current figure unknown." | **Now known: 23.5%** of authority clauses are `adversarially_checked` (clean) today — see Section 2 below. The small increase since Nov 10 is Step 22's own citation-upgrade work, not new verifier throughput. |

No mismatches. The spec's baseline claims were accurate.

## 2. New measures this step adds (per WS0's own task list)

**Verification-level coverage (`tools/clause_levels.py`'s three levels, authority clauses only, n=4,989):**

| Level | Count | % |
| --- | --- | --- |
| `cited` (has a citation but not yet `verified`) | 573 | 11.5% |
| `verified` (primary-sourced, not yet adversarially checked clean) | 3,244 | 65.0% |
| `adversarially_checked` (clean — the actual completion target) | 1,172 | 23.5% |

1,621 clauses (32.5%) have been *reached* by the adversarial checkpoint
at all; 243 of those are still `unclean` (carry an open or `accepted`
finding of any severity), leaving the 1,172 clean count above. **3,368
authority clauses (67.5%) have never been reached by the adversarial
checkpoint at all** — this is the single largest number in this
baseline, and the real size of WS2.

**Citations by `sourceClass` (n=11,688, all 28 cited domains already
classified — no missing values):**

| sourceClass | Count | % |
| --- | --- | --- |
| `primary-official` | 7,600 | 65.0% |
| `court-opinion` | 2,572 | 22.0% |
| `agency` | 528 | 4.5% |
| `mirror` | 988 | 8.5% |
| `secondary` | 0 | 0% |

**571 of 4,989 authority clauses (11.4%) carry at least one
`mirror`-class citation** — down from the 578 (11.6%) `verifier/
NON_PRIMARY_SOURCES.md` recorded on 2026-11-10, reflecting Step 22's
real upgrade of 10 citations across 2 wedge documents since then. 0
clauses cite a `secondary`-class source.

**Staleness (per-category thresholds, `config/staleness.json`):** 0
verified clauses are past their category's fatal threshold; 0 are
even inside the warn window. The corpus is not stale today — this
confirms `validate_corpus.py`'s own silent-pass behavior (it only
prints these counts when they're non-zero) by direct computation,
not by assuming silence meant zero.

**Documents with zero authority clauses (drafting-only), n=9:**
`direct_deposit`, `referral_bonus`, `exit_interview`,
`employment_verification`, `pto_request`, `expense_reimbursement`,
`salary_change`, `job_description`, `interview_scorecard`. Matches
`tools/tiering.py`'s own `DraftOnly` total exactly.

**Documents with an existing `verification/` research note:** 684 of
741, per `validate_corpus.py`'s own count (authoritative). **Zero
documents have a `review/documents/<docId>.md` file** in the format
WS3 specifies — that whole workstream starts from nothing; the
existing `verification/` notes answer "why does this document exist"
and don't cover WS3's 8-point research checklist (governing law,
missing elements, restricted provisions, federal overlay, recency,
scope, overlaps, interview accuracy).

## 3. Source reachability, checked live today (directly relevant to WS1/WS2 cost)

| Domain | Result | Relevance |
| --- | --- | --- |
| `leginfo.legislature.ca.gov` | **403**, confirmed via both `curl` and `WebFetch` | The single most important source (California statutes) is still blocked from this sandbox, exactly as every prior session segment found. This blocks direct re-verification of the 96 Priority-1 California-statute-mirror clauses `NON_PRIMARY_SOURCES.md` names, same as before. |
| `california.public.law` (a mirror) | 403 | Also blocked — not a usable fallback either. |
| `www.courtlistener.com` (raw web) | 403 | Blocked as a plain URL fetch, **but the dedicated CourtListener MCP tool works** — confirmed live today: a real query ("Wasatch Property Management v. Degrate") returned a real result with a usable `opinion_id`. This is better than one open finding's text assumed ("auth-walled") — that finding was hitting the raw REST URL directly, not the authenticated MCP tool. Case-law verification in WS2 should route through the CourtListener MCP tool, not a raw fetch. |
| `www.ecfr.gov` | reachable (302 redirect, resolves) | Already the working path used for Step 22's federal citation upgrades. |
| `www.govinfo.gov` | 200 | Reachable, already used successfully this session. |
| `www.law.cornell.edu` | 200 | Reachable — a legitimate secondary cross-check, though Global Rule 4 still means a clause citing only Cornell LII can't reach `verified`. |
| `www.oag.ca.gov` | 200 | Reachable — a usable primary source for agency-class citations. |

**This matters for the estimate below far more than it first
appears.** Federal and case-law verification are both practically
reachable at scale. But `leginfo.legislature.ca.gov` isn't just the
96 Priority-1 mirror-citing clauses' problem — it's the primary
source for 62% of all 11,688 citations in the corpus. A full citation-
level reachability count (`review/SOURCE_BLOCKS.md`) found **7,434 of
11,688 citations (63.6%) sit on a blocked domain**, and **3,575 of
4,989 authority clauses (71.7%) cite at least one of them** — far
larger than this section first suggested from the mirror-clause count
alone. Absent a different network path or the owner doing a manual
leginfo check, most of the corpus's citation-match checks — not a
96-clause edge case — stay undone from this sandbox. See Section 5
below and `review/SOURCE_BLOCKS.md` for the corrected scale.

## 4. `review/queue.jsonl` — the review queue

Built by the new `tools/build_review_queue.py` (committed, tested,
`--check` mode for CI), one row per clause (6,621) and one row per
document (741), 7,362 rows total, sorted by a priority score built
only from objective, reproducible signals already in the corpus —
**not** an invented demand or legal-risk judgment:

- **demand** — 1.0 if the document is one of the CA Wedge Plan's 7
  wedge-cluster documents (the one real go-to-market decision that
  exists), else 0.0. This is the *only* real demand signal available:
  `analytics_events` holds zero production rows (`BUILD_STATUS.md`),
  so there is no usage data to weight by yet.
- **legal_risk** — built only from structural facts: any non-primary
  (mirror) citation, any historical blocker/major finding (fixed or
  not — a clause that's been wrong before), and citation count. A
  true legal-risk ranking by subject matter needs an attorney's
  judgment (Level 2) or WS3's human-reviewed research, not a script's
  guess, so none is attempted here.
- **staleness** — months since `checkedDate` over the clause's own
  category fatal threshold.
- **finding_rate** — total historical findings on the clause, capped.

Top of the queue, confirming the formula does what it's meant to:
wedge-cluster documents and their clauses dominate the top ranks
(`llc_default_operating_rules_info_sheet` and
`llc_operating_agreement_single_member` lead the document rows;
`llcdefault_management_and_voting` and `llc_tax_election_mechanics`
lead the clause rows), with non-wedge high-risk items
(`residential_purchase_agreement`, `handbook`) close behind on
structural risk alone.

`python3 tools/build_review_queue.py` regenerates it;
`python3 tools/build_review_queue.py --check` (added to the same
pattern as `tiering.py --check`) fails CI if it's stale against the
live corpus.

## 5. Cost / time estimate — for owner approval before any full WS1-WS4 run

**This is an order-of-magnitude estimate with named assumptions, not a
precise figure — treat it as a planning input, not a quote.**

| Workstream | Units | Estimated effort per unit | Rough total |
| --- | --- | --- | --- |
| WS1 (citation hygiene, re-check 11,688 citations) | **Corrected 2026-11-17 (see `review/SOURCE_BLOCKS.md`): only 4,254 of 11,688 citations (36.4%) are reachable from this sandbox at all** — `leginfo.legislature.ca.gov` alone carries 7,281 (62%) and returns 403. The ~10-30s/citation fetch-and-compare estimate below only applies to the reachable 4,254; the other 7,434 need the owner's own network access or a different session before WS1 can touch them at all, not more time from this sandbox. | ~10-30s fetch + compare per reachable citation | ~12-35 hours for the 4,254 reachable citations; the remaining 7,434 are blocked, not merely slow, until source access changes |
| WS2 (clause-level, 8-point test) | 4,989 authority clauses (3,368 never reached by the checkpoint at all) + 1,632 drafting-clause advisory-language scans. **Corrected 2026-11-17: only 1,414 of 4,989 authority clauses (28.3%) have every citation on a reachable domain; 3,575 (71.7%) cite at least one blocked domain (mostly `leginfo.legislature.ca.gov`) and can't have their "quote matches live source" check fully completed from this sandbox.** | ~2-5 minutes per fully-reachable authority clause (source fetch, quote compare, contradiction/advisory checks); the blocked-domain checks can still run every non-citation part of the 8-point test (contradiction, jurisdiction disclosure, threshold/date math, advisory language) but not the citation-match step itself; ~30s per drafting clause | ~47-118 hours for the 1,414 fully-reachable clauses' full 8-point test; a partial (non-citation) pass on the other 3,575 at a similar per-clause rate adds roughly as much again; ~14 hours (drafting) |
| WS3 (document-level research, 741 files) | 741 documents, all from zero today | ~15-30 minutes per document for the 8-point checklist, done honestly (real source checks, not templated prose) | ~185-370 hours |
| WS4 (triage/patch the resulting findings) | Unknown until WS2 runs — this baseline's 148 pre-existing open minors are already a known lower bound | ~10-20 minutes per finding (patch-file discipline: diff, owner approval, re-verify, changelog) | At least 25-50 hours just for the 148 already open; WS2 will add more |

**Total order of magnitude: roughly 335-685 hours of what this
sandbox can actually run today, plus a second, currently-unbounded
amount of work that is blocked on source access, not on time** —
before Level 2 attorney review. The split matters more than the total:
this isn't "do X hours of work and you're done" so much as "do
~335-685 hours of the reachable 28-36% of the corpus, and the other
64-72% stays stuck at `cited` or only partially re-checked until
someone reaches leginfo.legislature.ca.gov from somewhere this sandbox
can't." Four things change how this maps to wall-clock time:

1. **Parallelism helps, but has a known constraint.** Earlier in this
   project, two attempts to delegate autonomous, commit-authority
   background research agents for exactly this kind of legal-citation
   work were declined by this session's own auto-mode safety
   classifier ("Destructive or Unwanted Actions"), both times resolved
   by doing the work directly instead. A **read-only** research agent
   that only reports findings (never commits — Rule 3's patch-file
   discipline stays intact either way) may not hit the same block, but
   that's unconfirmed; the owner should expect to either approve
   broader delegation explicitly or accept single-threaded, fully
   supervised throughput, which is far slower than the hours above
   suggest if run one clause at a time in one conversation.
2. **The leginfo blocker is much bigger than the 96 mirror-citing
   clauses — it's most of the corpus.** `leginfo.legislature.ca.gov`
   alone carries 62% of all 11,688 citations; 3,575 of 4,989 authority
   clauses (71.7%) cite at least one blocked domain. This isn't a
   96-clause edge case this session can route around — it's the
   normal case. Every one of those clauses stays at its current level
   under any amount of this session's own effort unless the owner can
   reach leginfo.legislature.ca.gov (or california.public.law, or
   law.onecle.com — see `review/SOURCE_BLOCKS.md`) from somewhere this
   sandbox can't, or a different network path becomes available.
3. **A partial pass is still worth doing on the blocked-domain
   clauses.** The citation-match step is blocked, but the rest of
   WS2's 8-point test (contradiction, jurisdiction disclosure,
   threshold/date math, advisory language, supersession by amendment)
   doesn't depend on fetching the clause's own citation and can still
   run. This is real, partial progress, not nothing — but it should
   be tracked and reported as partial, not conflated with a full pass.
4. **WS4's size is only a floor until WS2 actually runs.** 3,368
   clauses have never been adversarially checked; assume WS2 surfaces
   meaningfully more findings than the 148 already open, most of them
   probably minor based on this corpus's own history (245 of 318
   findings to date have been minor severity), but not confirmable
   until real.

**Recommendation, not a decision:** two separable asks for the owner,
not one. First, a scope decision: approve a bounded first batch — the
review queue's own top N rows (the wedge cluster's clauses/documents
plus the next-highest-risk items) — rather than authorizing all
4,989+741 units at once, and re-estimate after that batch's real
throughput is known. Second, and independent of batch size, a source-
access decision: without resolving at least `leginfo.legislature.ca.gov`
(directly, or by confirming whether it's reachable from the owner's
own network or a differently-configured session), **no batch size
changes the fact that 71.7% of authority clauses can't get a real
citation-match check from this sandbox**, no matter how small or
large the approved batch is.

## 6. What this baseline does NOT cover

The handoff spec's message was cut off after "### WS5: Labels, tiers,
UI" (mid-sentence) and references a "Section 10" (owner action for
Level 2 review) that never arrived. This baseline doesn't speculate
about either — WS5's remainder and sections 7-10 are needed before
any work in those areas starts.

## 7. Exit — WS0's own gate

Per the spec: *"Get owner approval before any full run."* Baseline is
committed (this file, plus `review/queue.jsonl` and `tools/
build_review_queue.py`). **Nothing in WS1-WS4 has started.** Waiting
on: (a) the rest of the spec (WS5's remainder, sections 7-10), and
(b) explicit approval of a scope/batch size against the estimate in
Section 5.
