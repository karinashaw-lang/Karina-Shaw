# MVP baseline — 2026-11-10

Taken at commit `b6b96eb` on `claude/new-session-palh5c`, before any
work on the new "Complete MVP Build Plan" begins. Every number below
was measured just now by running the project's own tools or querying
the actual data files — none of it is carried forward from
`BUILD_STATUS.md`, `PHASE12_BASELINE.md`, or any prior report without
re-checking. Per Step 1's instruction, this step made no code changes.

## Mismatches with BUILD_STATUS.md — flagged up front

`BUILD_STATUS.md` was last updated 2026-11-03 and reports 740
documents / 6,610 clauses (4,980 authority) across 8 categories, 0
unverified authority clauses, and 100% of verified clauses within
staleness thresholds. All of that is now stale:

- **741 documents** across **9 categories** (a "Consumer & Civil
  Court" category and 2 documents were added in Phase 12 Step 10,
  after BUILD_STATUS.md's last update).
- **6,621 clauses (4,989 authority, 1,632 drafting), 11,688
  citations** — up from the reported 6,610/4,980/1,630/11,661.
- **2 authority clauses now carry `"status": "unverified"`** —
  `namechange_gender_identity_conforming_process` and
  `smallclaims_judgment_enforcement` — a status value that did not
  exist anywhere in the corpus as of BUILD_STATUS.md's last update.
  The "100% verified" claim is no longer accurate as stated; 4,987 of
  4,989 (99.96%) are verified.
- Tier counts have moved from 0/382/358 (BUILD_STATUS.md) to the
  Phase 12 Step 6 promotion's **9 Tier A / 373 Tier B / 359 Tier C**
  (the newest 2 documents are both Tier C, having neither a complete
  field schema nor a golden fixture yet).

`BUILD_STATUS.md` itself will need a full rewrite once this plan's
Step 19 runs; it is not corrected here, only flagged, per Step 1's
"no code changes" scope.

## A finding from running every gate, not just the usual 3

Global Rule 4 says to run "any newer gates," so this baseline ran the
golden-output harness (Phase 1.4) in addition to the usual
`validate_corpus.py` / `regression.js` / `merge_guard.py` three —
**and it fails:**

```
691/741 documents match their golden fixture.
1 document has no fixture at all: small_claims_info_sheet
FAILED
```

That's **49 documents with a stale fixture plus 1 with no fixture at
all — 50 total golden-test failures**, none of them new regressions
introduced by this session's own edits (confirmed by inspecting the
diffs: every stale-fixture mismatch traces to a legitimate, already-
committed verifier fix from Phase 12 Steps 4/5/7 — a corrected dollar
figure, a bumped `checkedDate`, a clarifying sentence added to a
clause's body — that simply never had its golden fixture regenerated
afterward). This has been silently accumulating for several Phase 12
steps because this session's own working habit was to run only the 3
gates named in the original master plan's Global Rule 4, not golden.js
as well. It's a real, pre-existing gap, surfaced here for the first
time, not a new defect. **It needs a fixture-regeneration pass before
any step that depends on golden tests passing (Step 2's tier
redefinition references golden fixtures; Step 7's server-rendered
export must pass "the existing golden tests for text parity").**

## Gate results (run just now)

| Gate | Result |
| --- | --- |
| `python3 tools/validate_corpus.py` | **PASS** — 741 documents / 6,621 clauses (4,989 authority, 1,632 drafting), 11,688 citations; 0 newly-flagged stale clauses |
| `node tools/regression.js` | **PASS** — all checks green, 0 CSP violations |
| `node tools/wizard_regression.js` | **PASS** — 741/741 documents complete the wizard end to end |
| `python3 tools/merge_guard.py HEAD` | **PASS** — clean: additions only |
| `node tests/golden/golden.js` | **FAIL** — see above: 50/741 documents don't match their fixture |

## Verifier coverage and open findings

- **1,100 of 4,989 authority clauses (22.1%)** have been through the
  adversarial verifier.
- **225 findings total**, all triaged to a terminal state except the
  untriaged ones: **64 fixed, 13 accepted (real, disclosed gaps — see
  below), 0 rejected, 148 open (all minor severity; 0 open blocker, 0
  open major)**. Confirmed directly against `triage.jsonl` rather
  than `verifier/report.py`'s own summary, which (as already
  documented in `PHASE12_BASELINE.md`) reads only the raw
  `findings.jsonl` log and doesn't cross-reference triage status — so
  its "Example findings" list includes several already-fixed blockers
  (`aitransparency_detection_tool`, `captiveaudience_core_prohibition`,
  `stayorpay_core_prohibition`, `smallestate_real_property_affidavit`,
  `llcdefault_management_and_voting`) that read as open if you don't
  check `triage.jsonl` directly. This is a known, pre-existing
  reporting-tool gap, not a new one.
- The **13 accepted findings** are genuine, disclosed access gaps, not
  false positives waved through: each one is a clause where leginfo
  was unreachable this session and no independent second source could
  settle the question (e.g. `epnp_covered_vehicles` has two secondary
  mirrors disagreeing on a cross-reference number that only the
  primary text can resolve). Each carries a `reason` in `triage.jsonl`
  explaining exactly what's unresolved and why.

## Unverified clauses and non-primary sourcing

- **2 clauses carry `"status": "unverified"`**:
  `namechange_gender_identity_conforming_process` (sourced to the
  Judicial Council's own Invitation to Comment, not a direct statute
  fetch) and `smallclaims_judgment_enforcement` (sourced to the
  Judicial Council's self-help website). Both already disclose this
  honestly in their own `gap` field; neither claims `"verified"`.
- **`sourceClass` does not exist anywhere in the corpus yet** — this
  is new as of this plan's Step 2. A rough domain-based approximation,
  run now only to size the work ahead (the real backfill is Step 2.2,
  not this step):
  - **96 authority clauses cite at least one mirror-class domain**
    (`california.public.law`, `law.onecle.com`, and similar) rather
    than fetching `leginfo.legislature.ca.gov` directly. This set
    includes all **7 verified + 1 unverified small-claims clauses**
    the new plan specifically calls out for re-verification, plus 88
    others across government-claims, medical-support, probate-sale,
    survival-of-claims, tax-defaulted-sale, and title-insurance
    clauses that were never previously flagged as non-primary because
    this corpus had no `sourceClass` field to flag them with.
  - **3,568 clauses** cite `leginfo.legislature.ca.gov` directly
    (the clearest primary-official case).
  - **943 clauses** cite CourtListener (court-opinion sourcing).
  - **~250 clauses** cite an agency/judicial-council domain
    (`courts.ca.gov` and similar).
  - **~850 clauses** cite `law.cornell.edu` for federal statutory text
    (Cornell's Legal Information Institute — a well-known, generally
    reliable mirror of the U.S. Code, but still a mirror, not
    `uscode.house.gov` or `ecfr.gov` directly, which together account
    for ~300 more).
  This is a domain-pattern estimate, not the real per-citation
  `sourceClass` value Step 2.2 will assign and store — it exists here
  only so Step 2's scope is sized honestly before that work starts,
  not discovered partway through it.

## Tier counts by category (current)

| Category | Docs | Tier A | Tier B | Tier C |
| --- | --- | --- | --- | --- |
| Hiring | 93 | 3 | 56 | 34 |
| During employment | 93 | 5 | 75 | 13 |
| Ending employment | 94 | 2 | 42 | 50 |
| Confidentiality & IP | 94 | 0 | 38 | 56 |
| Business Formation | 94 | 0 | 49 | 45 |
| Real Estate | 94 | 0 | 32 | 62 |
| Estate Planning | 93 | 0 | 41 | 52 |
| Family Law | 93 | 0 | 46 | 47 |
| Consumer & Civil Court | 2 | 0 | 0 | 2 |
| **Total** | **741** | **9** | **373** | **359** |

Under this plan's Step 2 tier redefinition (a document with zero
authority clauses can never be Tier A; today's 9 Tier A documents are
exactly that case — drafting-only forms), these 9 will need to be
revisited: either the redefinition demotes them and labels them
"Drafting only (no legal authority claimed)" as its own honest
category, or Tier A is reserved for documents with authority content
that has actually cleared the adversarial verifier at 100% coverage —
which is currently zero documents, since verifier coverage tops out at
22.1% of all authority clauses corpus-wide. **This is the single
biggest visible consequence of Step 2: Tier A, as redefined, is likely
to go to zero** until specific documents' authority clauses are
deliberately walked to 100% verifier coverage — which has direct
bearing on Step 4's launch-set selection (a launch set chosen for
trustworthiness should weight toward documents closest to that bar).

## What this baseline does not cover

Per Step 1's scope, this is measurement only — no labels, tiers,
hooks, launch-set proposal, or pricing work. Those are Steps 2 through
6, in order, starting next.
