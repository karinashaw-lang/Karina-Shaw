# A5 — Verify the launch set: what's already done, what's left, and a cost/time estimate

Per the spec: *"Estimate cost and time and WAIT for approval."* This file
is that estimate — **no verification or patch work has started** beyond
measuring the current state against the approved 128-document launch set
(`LAUNCH_SET_PROPOSAL.md`, approved 2026-11-18).

## What's already done (don't recount this as A5's remaining cost)

The 128-document launch set's **684 authority clauses have already been
through a full adversarial-verifier pass** — not once but to completion,
across three prior batches (`LAUNCH_SET_VERIFICATION_WAVE1.md`,
`WAVE2.md`, `WAVE3.md`, run under the earlier "CA Wedge Plan Step 6"
naming for this same task). 93 findings came out of those three waves (0
blockers, 13 major, 80 minor), every one triaged `accepted` at the time
(real, evidence-backed, left unfixed per Global Rule 5's patch-and-approve
discipline — not rubber-stamped, and not false positives).

Current state, measured fresh against the live corpus (`tools/clause_levels.py`):

| Level | Authority clauses | % of 684 |
| --- | --- | --- |
| `adversarially_checked` | 460 | 67% |
| `verified` (checked; closed or accepted finding only) | 99 | 14% |
| `cited` (blocked below `verified`) | 125 | 18% |

**Two-thirds of the launch set's authority clauses are already at the top
level.** A5's real remaining cost is narrower than "verify 684 clauses
from scratch" — it's four bounded buckets:

## Bucket 1 — 123 clauses citing a mirror, not a primary source (biggest piece)

These 123 clauses (across 38 of the 128 documents) are stuck at `cited`
because at least one citation uses `sourceClass: mirror`
(`california.public.law`, `law.onecle.com`, `law.cornell.edu`, etc.) —
Global Rule 3: a mirror never counts as verified, no matter the quote's
accuracy. Ranked by concentration:

| Document | Mirror-sourced clauses |
| --- | --- |
| `s_corp_election_overview` | 8 |
| `small_claims_info_sheet` | 7 (named explicitly in the spec) |
| `retirement_401k_distribution_notice` | 6 |
| `cobra_election_notice` | 6 |
| `whistleblower_policy`, `trademark_license`, `patent_license_agreement`, `fmla_leave`, `dmca_takedown_notice`, `safe_note`, `copyright_assignment`, `special_needs_trust` | 5 each |
| 29 more documents | 1–4 each |

Most of these cite a federal statute (USC/CFR) via a secondary mirror
(frequently Cornell LII) where an official primary alternate
(`govinfo.gov`, `www.ecfr.gov`, or `uscode.house.gov`) almost certainly
exists for the same section — several of these exact clauses
(`cobra_*`, `bgc_*`, `safe_ca_blue_sky_notice_filing`,
`snt_able_account_alternative`) already had their mirror-sourced quotes
independently confirmed *accurate* against the live mirror text during
this session's B1 citation recheck
(`review/CITATION_RECHECK_REPORT.md`). The real work per clause is
**not** re-researching whether the claim is true — it's finding the
specific primary-source URL, confirming the exact quote still matches
there, and replacing the citation (patch file → owner approval → apply →
re-verify → `checkedDate` update, per Global Rule 5).

**Estimate: 123 clauses × ~12–18 minutes each (lookup + quote-match +
patch) ≈ 25–37 hours of work**, batchable in parallel the same way Waves
1–3 were (9 concurrent workers) → **roughly 3–5 hours of wall-clock time**
if run that way, split across several sessions given this account's
CourtListener-style tool/fetch pacing (not all 123 cite CourtListener,
but the same "don't run everything in one uncoordinated burst" lesson
from B1 applies). Some fraction will hit the already-documented
`leginfo.legislature.ca.gov` Cloudflare block (`review/SOURCE_BLOCKS.md`)
if their primary alternate is a CA statute rather than federal —
expect a residual handful that can't be fully upgraded from this sandbox
and will need to be flagged for the owner rather than force-fixed.

## Bucket 2 — 2 clauses with `status: unverified` (not just mirror-blocked)

- `smallclaims_judgment_enforcement` (the spec's own named "small-claims
  judgment-enforcement clause") — currently cites `selfhelp.courts.ca.gov`
  but has never passed a primary-source check at all.
- `namechange_gender_identity_conforming_process` (the spec's own named
  "name-change SB 59 / AB 1084 clause") — cites `courts.ca.gov` only,
  same situation.

These need a real from-scratch primary-source verification, not a
citation swap. **Estimate: ~45–60 minutes each ≈ 1.5–2 hours.**

## Bucket 3 — 18 genuinely open (never-triaged) minor findings

Found across 15 clauses in 15 documents (categories: `citation_mismatch`,
`advisory_language`, `overclaiming`, `unverifiable`, `superseded_law`,
`other`) — left over from the three verification waves or added since.
Each needs a triage decision (accept / reject / patch), per
`verifier/triage.py`. Most will likely resolve the same way the prior 93
did (accepted, evidence-backed, no corpus edit needed) but each needs
actual review, not a bulk rubber-stamp. **Estimate: ~10–15 minutes each
≈ 3–4.5 hours.**

## Bucket 4 — 332 drafting clauses, not yet run through any check

A5 also calls for the drafting-clause checks (advisory language,
contradiction, jurisdiction disclosure, embedded legal claims that
should be reclassified as authority) that B2 defines corpus-wide — none
of the launch set's 332 drafting clauses have had this specific check
run yet (only the 684 authority clauses have). This is a faster,
judgment-based screen, not source-fetching, and batches well the same
way the three waves did. **Estimate: ~5 minutes/clause automated-batch
≈ 28 hours of total work, ~3–4 hours wall-clock with parallel workers.**

## Out of scope for A5 (flagging, not including in this estimate)

The spec's Section 4 (A5) also names the "AI Transparency Act item
(section 22757.2 and SB 1000 changes)." The 5 `aitransparency_*` clauses
that cover this already live on `california_ai_transparency_act_info_sheet`
— **a document that is not in the approved 128-document launch set**
(all 5 are already `verified`/`adversarially_checked`, citing
`leginfo.legislature.ca.gov` directly, no mirror involved — there is no
open problem here). Since it's outside the approved launch set, it's
correctly B2/B3 scope (corpus-wide), not A5's. Noted here so the
apparent gap isn't mistaken for missed work.

## Total estimate

| Bucket | Clauses | Wall-clock (parallel batches) |
| --- | --- | --- |
| 1. Mirror → primary re-sourcing | 123 | 3–5 hours |
| 2. From-scratch verification | 2 | 1.5–2 hours |
| 3. Open-minor triage | 18 findings / 15 clauses | 3–4.5 hours |
| 4. Drafting-clause checks | 332 | 3–4 hours |
| **Total** | **~470 clause-level items** | **~11–15.5 hours wall-clock, likely 2–3 working sessions** given per-domain fetch pacing and this sandbox's recurring leginfo/CourtListener access limits |

Tool-call cost is the same pattern already used for Waves 1–3 (the
existing `verifier/sample.py` → parallel `Agent` workers →
`verifier/record_result.py` → `triage.py` pipeline) — no new
infrastructure needed. The realistic risk to this estimate isn't effort,
it's **source access**: a meaningful slice of bucket 1's CA-statute
mirror clauses may hit the same leginfo Cloudflare block already
documented in three other places this session, which would leave some
clauses correctly flagged "unverifiable, see OWNER_TODO.md" rather than
actually resolved, exactly as the existing waves' findings already show
happening at this rate (roughly 20–25% of minor findings across waves
1–3 were leginfo-access, not content, problems).

**Waiting for approval to proceed**, per Section 4/A5's own instruction
and Section 7 item 1 (owner approves the cost estimate). Buckets 1–4 can
run independently and in any order once approved.
