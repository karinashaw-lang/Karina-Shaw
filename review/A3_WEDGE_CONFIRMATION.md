# A3 — Confirming the LLC wedge

Run 2026-11-18, branch `claude/new-session-palh5c`, against the live
`data/clauses.json`/`data/documents.json`, `verifier/findings.jsonl`,
`verifier/triage.jsonl`, and `verifier/checked.jsonl`, using
`tools/clause_levels.py` as the single source of truth for a clause's
level (no separate re-implementation of that logic here).

## The 7 wedge documents (`WEDGE_CLUSTER_DOC_IDS`)

`llc_articles_of_organization`, `ein_info_sheet`,
`llc_operating_agreement_single_member`,
`llc_default_operating_rules_info_sheet`,
`agent_for_service_of_process_info_sheet`, `statement_of_information`,
`llc_annual_fee_info_sheet` — 40 authority clauses total (plus 19
drafting clauses, not in scope for this check; a drafting clause
makes no legal-authority claim to verify).

## 1. CA primary sources for CA law; federal sources only for federal matters

Checked every one of the 40 authority clauses' citation domains
against what each clause actually claims:

| Domain | sourceClass | What it backs |
| --- | --- | --- |
| `leginfo.legislature.ca.gov` | primary-official | California LLC Act provisions: formation, articles content, agent for service, liability shield, records inspection, death/succession, default voting/management rules, Statement of Information filing and penalties, the annual $800 tax and the gross-receipts LLC fee. All genuinely California statutory law. |
| `www.sos.ca.gov`, `bpd.cdn.sos.ca.gov` | agency | California Secretary of State procedure (corporate-agent certificate, changing an agent after formation) — correctly agency, not primary-official, and correctly backing CA-specific procedure, not statute. |
| `www.ecfr.gov`, `govinfo.gov` | primary-official | Federal tax-classification rules only: EIN's statutory basis, the "check-the-box" default classification and Form 8832 mechanics, disregarded-entity treatment. These are genuinely federal (Title 26 C.F.R.), not California law — correctly not backed by `leginfo`. |
| `www.irs.gov` | agency | Federal EIN application procedure — correctly agency, correctly federal. |
| `edd.ca.gov` | agency | The one clause (`ein_state_vs_federal_disambiguation`) that explicitly distinguishes a federal EIN from a California state employer account number — correctly cites the California agency for the California half of that distinction. |

**No clause mixes these up.** Nothing CA-specific is backed only by a
federal source, and nothing genuinely federal (EIN, tax
classification) is backed by `leginfo` instead of the eCFR/IRS. Zero
citations anywhere in the wedge use `sourceClass: mirror` or
`secondary` — every one is `primary-official` or `agency`.

## 2. Adversarial-check status (all 40 clauses, via `clause_levels.py`)

| Level | Count |
| --- | --- |
| `adversarially_checked` | 26 |
| `verified` (checked, one accepted finding keeps it here — see below) | 14 |
| `cited` (not yet verified against a primary source) | 0 |
| Unverified / unreachable | 0 |

All 40 have actually been run through the adversarial verifier
(`verifier/checked.jsonl` — none are sitting un-run). The 14 at
`verified` rather than `adversarially_checked` each carry exactly one
finding with triage status `accepted` (a confirmed, reviewed, non-
blocking issue — `clause_levels.py` correctly keeps a clause with an
accepted finding out of the top tier even though it isn't "open").

## 3. Open findings touching the wedge

**Zero.** 16 findings total touch the 40 wedge clauses; all 16 are
closed one way or another:

| Severity | Status | Count |
| --- | --- | --- |
| blocker | fixed | 1 (`llcdefault_management_and_voting` — the per-capita-vs-proportional voting default, already corrected) |
| major | accepted | 1 (`llc_tax_election_mechanics` — a cross-document framing nuance between the single- and multi-member operating agreements, reviewed and accepted) |
| minor | fixed | 1 |
| minor | accepted | 13 |

Of the 13 accepted minors: 11 are the already-documented
`leginfo.legislature.ca.gov` Cloudflare bot-challenge
(`review/SOURCE_BLOCKS.md`) blocking a *re*-fetch during the
adversarial pass — not a failure to ever verify (each clause's
`status: "verified"` and `checkedDate` predate the block and stand on
their own); the remaining 2 are narrow, already-reviewed wording
nuances (`ein_statutory_basis`'s citation-pairing nuance — a true
claim resting on a different subsection than the one cited for it —
and `llc_articles_filing_requirement`'s gap note drifting from
"here's what we couldn't confirm" into "you should not assume," a
slight overstep toward advising rather than informing). Both were
already reviewed and accepted as non-blocking before this check, not
newly discovered here.

**Nothing in this list needs triaging — there is no open minor (or
open anything) touching the wedge.** This matches the corpus-wide
baseline (`MVP_BASELINE.md`: 0 open blocker, 0 open major corpus-wide)
rather than contradicting it.

## Conclusion

A3 passes with no code or data changes needed. The LLC wedge's
California law is sourced from California primary sources, its
federal law (EIN/tax classification) is sourced from federal primary
sources, every wedge authority clause has actually been adversarially
checked, and nothing touching the wedge is sitting open and
untriaged.

**Verification:** `python3 tools/validate_corpus.py`,
`python3 verifier/triage.py --summary` (320 total, unchanged — this
task read-only), `python3 tools/merge_guard.py origin/claude/new-session-palh5c`.

**Next:** A4 — propose the launch set. This was already done once
under the earlier "CA Wedge Plan" work (`LAUNCH_SET_PROPOSAL.md`, 128
documents) and explicitly marked **WAITING FOR OWNER APPROVAL**, which
this session cannot grant on the owner's behalf. Per Section 8's
sequencing ("A4 (owner approval)"), work stops here until that
approval (or a revised list) comes back — see the next message.
