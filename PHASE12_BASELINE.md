# Phase 12 baseline — 2026-10-30

Taken at commit `c3fdfd6` on `claude/new-session-palh5c`, before any
Phase 12 work. Every number below was re-measured just now by reading
the actual files or running the actual tools — none of it is carried
forward from `BUILD_STATUS.md` without re-checking.

## Correction to BUILD_STATUS.md — flagged up front

`BUILD_STATUS.md` (Phase 11) reported "0 blocker, 1 major, 17 minor
**open** verifier findings." That undercounts how resolved this
already is: **all 18 findings from the 100-clause sample have already
been triaged to a terminal state** (`verifier/triage.jsonl`, Phase
4.2) — 8 were actually fixed in the corpus with real re-verification
and a `checkedDate` bump; 10 were "accepted, no clause edit" (every
one of them an `unverifiable` finding caused by `leginfo.legislature.ca.gov`
being Cloudflare-blocked during that run, not a false positive, and
not swept under the rug — each is recorded as needing re-verification
once that source is reachable). **Net currently-open findings
requiring action: 0 blocker, 0 major, 0 minor.** The 10 "accepted"
items are a real standing gap, not a closed one — see Owner-blocked
items below and Step 5.

`verifier/report.py` itself doesn't make this distinction (it reads
only `findings.jsonl`, which is an append-only raw log with no status
field, and never cross-references `triage.jsonl`). That's a real gap
in the reporting tool, worth fixing in Step 3/4 so this can't recur.

## Gate results (run just now)

| Gate | Result |
| --- | --- |
| `python3 tools/validate_corpus.py` | **PASS** — 740 documents / 6,610 clauses (4,980 authority, 1,630 drafting), 11,665 citations; 0 newly-flagged stale clauses |
| `python3 tools/merge_guard.py HEAD~1` | **PASS** — clean: additions only (no base-branch PR open right now, so run against the immediately prior commit on this branch as the meaningful comparison) |
| `node tools/regression.js` | **PASS** — all checks green, 0 CSP violations, including the 3 legal-notice pages |

## Tier counts by category

| Category | Docs | Tier A | Tier B | Tier C |
| --- | --- | --- | --- | --- |
| Hiring | 93 | 0 | 59 | 34 |
| During employment | 93 | 0 | 80 | 13 |
| Ending employment | 94 | 0 | 44 | 50 |
| Confidentiality & IP | 94 | 0 | 38 | 56 |
| Business Formation | 94 | 0 | 49 | 45 |
| Real Estate | 94 | 0 | 32 | 62 |
| Estate Planning | 93 | 0 | 41 | 52 |
| Family Law | 93 | 0 | 46 | 47 |
| **Total** | **740** | **0** | **382** | **358** |

Tier A is empty by design in every category — it requires both a full
adversarial-verifier pass with no open findings and an accessibility
sign-off on the document's full rendered output, and neither has run
against the full corpus. This is exactly what Steps 3, 4, and 6 exist
to change.

## Verifier coverage

- **4,980** authority clauses total (never-adversarially-verified
  until checked here — "verified" on the clause's own `status` field
  only means a citation is attached with a current `checkedDate`, a
  weaker claim than passing the adversarial verifier).
- **100 / 4,980 (2.0%)** have been through the adversarial verifier
  (`verifier/checked.jsonl`, 10 batches in `verifier/batch_results/`).
- **18** findings from that sample, **all triaged** (see correction
  above): 8 fixed, 10 accepted pending source access.
- **0** entries in `verifier/prompt.md`'s "Known false positives"
  section — correct, since nothing in the sample run was rejected as
  a false positive.
- **1,630** drafting clauses have never been checked for anything —
  Step 3.4 covers this (advisory language, internal contradiction,
  jurisdiction disclosure; no citation checks, since they carry none).

## Owner-blocked items (from `DECISIONS.md` — not attempted here)

1. **Two RLS/performance linter fixes**, both blocked by the same
   destructive-SQL confirmation gate (`DROP POLICY` included, not
   just `DELETE`/`TRUNCATE`/`DROP TABLE`) — exact SQL already written
   and handed off in `DECISIONS.md`, reproduced in `OWNER_TODO.md`.
2. **`auth_leaked_password_protection`** — a Supabase Auth dashboard
   toggle, no API/MCP path to flip it from here.
3. **Three CI repo secrets** (`SUPABASE_ACCESS_TOKEN`,
   `SUPABASE_STAGING_PROJECT_REF`, `SUPABASE_PROD_PROJECT_REF`) needed
   to activate the `deploy-staging` and `backup.yml` CI jobs, both
   already written and currently no-oping cleanly without them.
4. **`privacy.html`/`terms.html`** carry a `[contact email — to be
   added]` placeholder and an explicit "not yet reviewed by an
   attorney" banner — need a real address and real legal review.
5. **The AI Transparency Act freshness item** (Cal. Bus. & Prof. Code
   § 22757.2) — flagged by the law-change watcher 2026-10-01, still
   open; blocked on the same `leginfo.legislature.ca.gov` Cloudflare
   403 affecting the 10 "accepted" verifier findings above. Step 5
   covers a fresh attempt.
6. **`public._scratch_probe`** — a harmless, zero-PII leftover
   dev-probe table (2 rows, each just an integer id), blocked from
   removal by the same `DROP TABLE` gate. Not a current finding in
   this phase's scope, but included here since it needs the same
   dashboard access as item 1.

## Date

2026-10-30.
