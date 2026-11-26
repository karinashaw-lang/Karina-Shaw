# MVP Baseline — GROUNDTRUTH_MASTER_BUILD_PLAN.md, Part 1, Step 1

**This file existed before today**, last written 2026-11-17 for an
earlier plan's own Part A, Task A0 — this step overwrote it with
today's numbers, the same established practice that earlier version
itself documented (`BUILD_STATUS.md`/`tiers.json` get refreshed, not
kept as a historical log); the 2026-11-17 version is still fully
readable via `git show <a commit before this one>:MVP_BASELINE.md`,
not deleted. That version flagged 2 authority clauses with
`"status": "unverified"` (a step below even "cited"):
`namechange_gender_identity_conforming_process` and
`smallclaims_judgment_enforcement`. Re-checked today: **both now carry
`"status": "verified"`**, and **zero clauses in the corpus carry
`"status": "unverified"`** — real progress since the last baseline,
not a carried-forward gap.

Step 1's own instruction: "Re-measure from scratch: documents, clauses,
citations, tier counts, verifier coverage, open findings by severity,
unverified clauses, and clauses relying on mirror or secondary sources.
Write MVP_BASELINE.md and flag any mismatch with BUILD_STATUS." No code
changes made for this step — pure measurement, re-derived directly from
the live corpus and verifier state files, not copied from any other
document.

## Corpus size

- **741** documents.
- **6,621** clauses — **4,989** authority (make a legal claim, carry a
  citation), **1,632** drafting (plain contract language, no legal
  claim, no citation).
- **11,688** citations across those clauses.

No mismatch with `BUILD_STATUS.md`, which states the same 741/6,621
split and citation count.

## Verification levels (authority clauses only — drafting clauses carry
no level, by design)

| Level | Count | Share of authority clauses |
|---|---|---|
| Adversarially checked | 1,286 | 25.8% |
| Verified | 3,244 | 65.0% |
| Cited (sourced, not yet independently confirmed) | 459 | 9.2% |

"Unverified" in the strict sense (no citation confirmed against a
primary source at all) means the 459 clauses sitting at "Cited" —
sourced, but the quote hasn't been independently re-checked against the
primary text yet, per this corpus's own three-level definition (already
built, matching this plan's Step 2 relabeling — no new system needed,
just confirmed the existing one already draws this exact distinction).

## Document tiers

| Tier | Count | Share |
|---|---|---|
| A (at least one authority clause, every authority clause adversarially checked, zero open findings) | 29 | 3.9% |
| B (every authority clause at least Verified; may include adversarially-checked ones too) | 322 | 43.5% |
| C (everything else, including drafting-only documents, which can never reach Tier A) | 390 | 52.6% |

Matches `BUILD_STATUS.md`'s own "29 at Tier A, 322 at Tier B" figures
exactly — no mismatch found.

## Verifier coverage / open findings by severity

From `verifier/findings.jsonl` + `verifier/triage.jsonl` (329 findings
total, using `verifier/triage.py`'s own loader, not a reimplementation):

| Status | Count |
|---|---|
| Fixed | 88 |
| Accepted (disclosed via the clause's own `gap` field — enforced by `tools/check_accepted_disclosure.py` in CI as of 2026-11-22) | 113 |
| Open | 128 |

Open findings by severity: **2 major**, **126 minor**, **0 blockers**
(no `blocker` severity value exists in the data at all — the verifier's
severity scale in this corpus only has `minor`/`major`, confirmed by
reading the actual file rather than assumed from the plan's own
blocker/major/minor framing). Cross-referenced all 128 open findings'
clause ids against every document that clause id appears in (not a
sample): **zero of the 128 open findings touch any clause used in a
launch-set document.** All open findings sit entirely outside the
128-document launch set approved 2026-11-18
(`LAUNCH_SET_PROPOSAL.md`). This matches this plan's own Step 6
acceptance criterion ("zero open blockers or majors in the launch
set") as already true today, before Step 6's own verification work
even starts — worth confirming again once Step 6 actually runs the
adversarial verifier fresh, since this measurement only checked
existing findings, not whether every launch-set authority clause has
been run through the verifier at all.

## Clauses relying on mirror or secondary sources

| sourceClass | Citation count |
|---|---|
| primary-official | 7,807 |
| court-opinion | 2,572 |
| agency | 528 |
| mirror | 781 |
| secondary | 0 |

**781 citations currently carry `sourceClass: "mirror"`**, across 459
authority clauses. **Correction to this file's own first pass**:
`verifier/NON_PRIMARY_SOURCES.md` already exists (written 2026-11-17
for an earlier plan's own Step 2.2) and already satisfies this plan's
Step 2 instruction — it splits the queue into 96 California-statute
mirrors (Priority 1, the ones that actually matter for Step 6's
re-verification work) and 363 federal-statute mirrors (Priority 2,
explicitly lower priority), re-confirmed directly against today's
corpus rather than assumed stale. An earlier pass of this step briefly
overwrote that file with a flatter, lower-quality regeneration before
catching the mistake and reverting it — noted here so the mistake
isn't silently repeated.

No citation in the corpus currently carries `sourceClass: "secondary"`
— either none exist, or (more likely, given the corpus's history of
incremental `sourceClass` backfilling) some citations may still be
missing a `sourceClass` value entirely rather than correctly carrying
"secondary." Not checked in this pass — worth confirming in Step 2
before assuming the queue is mirror-only.

## Mismatches found with BUILD_STATUS.md

**None.** Every number re-measured here (document/clause/citation
counts, Tier A/B counts) matches `BUILD_STATUS.md`'s own existing
figures exactly. `BUILD_STATUS.md` does not currently state the
open-findings-by-severity breakdown or the mirror-citation count in
the same terms this baseline uses, so there is nothing to compare
those two against — not a mismatch, just a gap this baseline newly
fills.

## Scope note

This file is the Step 1 deliverable only. It does not relabel clauses,
redefine tiers, build `NON_PRIMARY_SOURCES.md`, or touch any code —
all of that is Step 2 and later, per the plan's own sequencing.
