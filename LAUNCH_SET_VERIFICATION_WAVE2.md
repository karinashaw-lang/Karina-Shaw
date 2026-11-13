# CA Wedge Plan Step 6 — Launch Set Verification, Wave 2

Continuation of `LAUNCH_SET_VERIFICATION_WAVE1.md`. Same method, same
hand-ordered priority (documents needing the fewest additional checks to
reach Tier A, now re-ranked after wave 1's results), same 9-worker /
`verifier/prompt.md` pipeline.

## Results

- **180/180 clauses checked** (521 total unchecked at the start of wave 1,
  341 remained after wave 1, 161 remain after this wave).
- **15 findings**: 2 major, 13 minor, 0 blockers.
- **All 15 triaged "accepted"** — same reasoning as wave 1: real,
  evidence-backed findings or disclosed access limitations, none false
  positives, none yet fixed (Global Rule 7).
- **10 of the 13 minor findings are "unverifiable"** (leginfo
  Cloudflare-blocked again, all session, for every worker). Several workers
  explicitly flagged and declined apparent "quote drift" against the
  `law.onecle.com` mirror after confirming via secondary sources that the
  mirror — not the clause — was stale (details below); this wave's workers
  were noticeably more careful about that distinction than assumed going
  in, which is worth remembering as a real risk for any future wave that
  skips the cross-check.

## Effect on tiers

| | A | B | C | DraftOnly |
|---|---|---|---|---|
| After wave 1 | 6 | 318 | 417 | 9 |
| After wave 2 | **11** | 313 | 417 | 9 |

5 newly Tier A, all inside the approved launch set:
`civil_harassment_restraining_order`, `corporate_dissolution`, `grant_deed`,
`parenting_plan`, `wage_theft_prevention_notice`. (None of this wave's new
Tier A documents are in the 7-document wedge cluster — both wedge
promotions happened in wave 1.)

`tools/tiering.py`, `tools/build_verification_levels.py`, and the golden
fixtures (37 documents, same honest Verified→Adversarially-checked pattern,
nothing else) were regenerated and committed; `validate_corpus.py`,
`merge_guard.py`, `regression.js`, `golden.js` (741/741), and the tiering
test suite all pass.

## 2 real findings needing a Patch-ID fix (owner review)

### `lease_security_deposit` -- major/overclaiming

**Finding:** States the one-month service-member security-deposit cap "still controls" with no qualification, but Civ. Code § 1950.5(c)(4) (operative April 1, 2025) separately lets a landlord charge a service member a disclosed, credit-related higher amount, refundable within six months.

This is the **same defect wave 1 found and named** in the sibling clause `sdi_deposit_cap` (used by `security_deposit_itemization`) — wave 1's finding specifically flagged "the same gap exists verbatim in the sibling clause lease_security_deposit... which should receive the same correction." This wave's independent worker (who had not seen wave 1's finding — each wave's packets never include prior findings) found the identical issue from scratch, which is a good sign the original finding was correct rather than a one-off misread.

**Suggested fix:** Same as `sdi_deposit_cap`'s wave-1 suggested fix: disclose Civ. Code § 1950.5(c)(4)'s service-member exception alongside the one-month-cap statement. Both clauses should be fixed together in the same patch.

### `dp_eligibility` -- major/superseded_law (time-sensitive)

**Finding:** The clause's age-18 domestic-partnership requirement correctly cites a live statutory minor exception (Fam. Code § 297.1, cross-referenced in § 297(b)(3)) — but AB 1267, signed September 30, 2026, repeals that exception effective **January 1, 2027**, about six weeks from this review.

**This is not yet wrong** — the exception is still live law today — but it is a scheduled, dated change, not a routine annual recheck. Recommend flagging `dp_eligibility` for a priority recheck in the first week of January 2027 rather than waiting for its normal freshness cycle.

A second, already-live and separate issue on the same clause: `dp_eligibility` (minor/overclaiming) states the age-18 requirement as unqualified in its own body text today, already dropping the exception its own citation names — worth fixing in the same pass as the superseded-law note above, before AB 1267 even takes effect.

## 1 minor, non-"unverifiable" finding (lower priority)

`guardian_nom_caregiver_affidavit_scope` (minor/citation_mismatch): the
clause's definition of a statutory "relative" is substantively accurate but
cites the wrong subsection (Fam. Code § 6552 instead of the actual source,
§ 6550(h)(2)). Full text in `verifier/findings.jsonl`.

## A calibration note worth keeping

Several wave-2 workers hit cases where a clause's quote didn't match
`law.onecle.com`'s static ~2017/2018 snapshot, and — rather than flagging
quote drift — independently confirmed via secondary sources (bill-chapter
citations, Judicial Council PDFs, law-firm bulletins) that the clause was
actually *more current* than the mirror: a 2022 conservatorship-language
amendment, a 2023 trust-notification narrowing, a 2024 fictitious-business-
name address-field change, and others. None of these were flagged as
findings, correctly. This means `law.onecle.com`'s staleness cuts both
ways — it can hide a real problem (as a 2+ year old snapshot would) or
manufacture a false one if trusted blindly as ground truth. Future waves
should keep cross-checking amendment history before treating a mirror
mismatch as a finding either way.

## What's next

341 - 180 = 161 launch-set authority clauses remain for a third wave, same
process.
