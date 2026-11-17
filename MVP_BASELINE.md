# MVP baseline — Part A, Task A0

Run 2026-11-17, against branch `claude/new-session-palh5c`. Confirms
the handoff spec's Section 2 against live tools today. Methodology for
every number below (verification-level computation, sourceClass
breakdown, staleness thresholds) is identical to `REVIEW_BASELINE.md`
(written the same day for Part B's own B0) — this file exists
separately because the spec asks for it by name and because Part A
tracks a few things Part B's baseline doesn't (the wedge's own tier
status, pricing, SEO page count).

**This file existed before today, under an earlier plan iteration**
("Complete MVP Build Plan," dated 2026-11-10, taken at commit
`b6b96eb`) and this task overwrote it with today's numbers, the same
way `BUILD_STATUS.md` or `tiers.json` get refreshed rather than kept
as a historical log — the 2026-11-10 version is still fully readable
in git history (`git show <a commit before this one>:MVP_BASELINE.md`),
not deleted. One fact from that version worth carrying forward
explicitly since this file's own methodology table doesn't otherwise
surface it: that baseline found **2 authority clauses with
`"status": "unverified"`** (not `"verified"` at all, a step below
even `cited`) — re-checked today, both are still exactly the same 2,
unchanged: `namechange_gender_identity_conforming_process` and
`smallclaims_judgment_enforcement`. Neither has regressed or been
silently resolved; both still disclose the gap honestly in their own
`gap` field.

## Confirming Section 2

| Claim | Confirmed |
| --- | --- |
| 741 documents, 9 categories | Exact match |
| 6,621 clauses (4,989 authority, 1,632 drafting) | Exact match |
| 11,688 citations | Exact match |
| Tiers: 15 A, 314 B, 412 C | Exact match |
| Findings: 318 logged (0 open blocker, 0 open major, 148 open minor, 64 fixed, 106 accepted) | Exact match, re-derived directly from `findings.jsonl` × `triage.jsonl`, not just trusted from `--summary` |
| Adversarial coverage ~22% at Nov 10, current unknown | **Now known: 23.5%** clean (1,172/4,989); 32.5% reached by the checkpoint at all, clean or not. 67.5% (3,368 clauses) never reached — see `REVIEW_BASELINE.md` §2 for the full breakdown. |
| Launch wedge: 7 documents, Tier A or B | **Confirmed, checked individually today:** `llc_default_operating_rules_info_sheet` A, `agent_for_service_of_process_info_sheet` A, `llc_annual_fee_info_sheet` A, `llc_articles_of_organization` B, `ein_info_sheet` B, `llc_operating_agreement_single_member` B, `statement_of_information` B. 0 of the 7 are Tier C. |
| Stripe test mode only; `config/pricing.json` is null by design | Confirmed — `monthlyPriceUsd`/`annualPriceUsd` still `null`; model is `subscription` per the owner's 2026-11-10 decision. |
| 840 SEO pages generated, none published | Confirmed — `python3 tools/generate_seo_pages.py` produces 741 document pages + 99 question pages = 840 today; `build/seo/` stays gitignored, `config/seo.json`'s `baseUrl` is still `""`. |

No mismatches. Section 2's numbers were accurate.

## What this means for A1-A5

- **A1** (honest labels and tiers): already substantially built.
  `tools/tiering.py`'s Tier A gate already requires a golden fixture,
  fresh (non-stale) check dates, zero open findings via adversarial
  review, and an accessibility pass — and already hard-blocks
  drafting-only documents from Tier A (`drafting_only` → always
  appends the blocking reason, confirmed no current Tier A document
  is drafting-only: 0 of 15). The one real gap found and fixed today:
  the clause badge's one-line explanation (`LEVEL_NOTE` in `app.js`)
  only existed for the `cited` level — `verified` and
  `adversarially_checked` rendered no explanation at all, failing the
  spec's "badge shows level, check date, one-line explanation" for
  two of the three levels. Fixed; see this task's commit.
  `verifier/NON_PRIMARY_SOURCES.md` was stale (578 mirror-citing
  clauses as of 2026-11-10; really 571 today after Step 22's own
  upgrades) — corrected.
- **A3** (confirm the LLC wedge): the tier confirmation above already
  answers "are all 7 wedge documents Tier A/B" — yes. Whether every
  wedge authority clause is specifically *adversarially checked*
  (not just Tier-B-level verified) still needs a per-clause check;
  not done in this baseline task.
- **A4** (launch set, 100-150 documents): not started — explicit WAIT
  gate, owner approval required before this is proposed.
- **A5** (verify the launch set): blocked on A4.
- **A6** (pricing decision): not started — owner decision, not
  engineering.

## Source reachability (shared fact with `REVIEW_BASELINE.md`)

Checked live today: `leginfo.legislature.ca.gov` and
`california.public.law` both still return 403 (via `curl` and
`WebFetch` alike), and `law.onecle.com`'s TLS connection doesn't
complete at all. **This is not just the 96 Priority-1 mirror-citing
clauses' problem** — `leginfo.legislature.ca.gov` alone carries 62%
of all 11,688 citations, and a full count found 71.7% of authority
clauses (3,575 of 4,989) cite at least one blocked domain. See
`review/SOURCE_BLOCKS.md` for the exact URLs and the owner's
questions, and `REVIEW_BASELINE.md` §3/§5 for how this changes the
B1-B4 cost estimate. `www.courtlistener.com` is 403 as a raw fetch but
the dedicated CourtListener MCP tool works. `ecfr.gov`, `govinfo.gov`,
`law.cornell.edu`, and `oag.ca.gov` are all reachable.
