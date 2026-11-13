# CA Wedge Plan Step 6 — Launch Set Verification, Wave 3 (final)

Continuation and completion of `LAUNCH_SET_VERIFICATION_WAVE1.md` /
`WAVE2.md`. Same method, same 9-worker `verifier/prompt.md` pipeline. This
wave checked the launch set's last 161 unchecked authority clauses —
**every one of the launch set's 670 authority clauses has now been through
a real adversarial-verifier pass at least once.**

## Results

- **161/161 clauses checked.**
- **22 findings**: 1 major, 21 minor, 0 blockers.
- **All 22 triaged "accepted"** — same reasoning as waves 1-2.
- **11 of the 21 minor findings are "unverifiable"** (leginfo
  Cloudflare-blocked, again, every session). As in waves 1-2, several
  workers explicitly caught and declined likely false-positive "quote
  drift" flags against the stale `law.onecle.com` snapshot by
  independently confirming the clause reflected a real, later amendment —
  worth noting that this calibration held up consistently across all three
  waves, not just once.

## Effect on tiers

| | A | B | C | DraftOnly |
|---|---|---|---|---|
| After wave 2 | 11 | 313 | 417 | 9 |
| After wave 3 | **14** | 310 | 417 | 9 |

3 newly Tier A, all inside the approved launch set: `financial_power_of_attorney`,
`guardianship_petition`, `postnuptial_agreement`.

## Cumulative result across all three waves

| | A | B | C | DraftOnly |
|---|---|---|---|---|
| Before Step 6 | 0 | 324 | 417 | 9 |
| After wave 3 (now) | **14** | 310 | 417 | 9 |

All 14 Tier A documents are inside the approved 128-document launch set.
2 are inside the 7-document wedge cluster (`llc_annual_fee_info_sheet`,
`llc_default_operating_rules_info_sheet`). The other 12:
`buy_sell_agreement`, `civil_harassment_restraining_order`,
`commission_agreement`, `corporate_dissolution`, `financial_power_of_attorney`,
`grant_deed`, `guardianship_petition`, `parenting_plan`,
`postnuptial_agreement`, `quitclaim_deed`, `wage_statement_itemization_policy`,
`wage_theft_prevention_notice`.

521 originally-unchecked launch-set clauses checked across 3 waves, 93
total findings (13 major, 80 minor, 0 blockers), all triaged `accepted`,
all 93 real or disclosed access limitations, zero rejected as false
positives.

`tools/tiering.py`, `tools/build_verification_levels.py`, and 18 golden
fixtures were regenerated and committed; `validate_corpus.py`,
`merge_guard.py`, `regression.js`, `golden.js` (741/741), and the tiering
test suite all pass.

## 1 real finding needing a Patch-ID fix (owner review) — major

### `purchase_tds_requirement` -- major/overclaiming

**Finding:** The clause's TDS exemption list cites the court-order exemption (Civ. Code § 1102.2(b)) but omits § 1102.2(c) — the exemption for non-judicial (power-of-sale) foreclosure, deed-in-lieu-of-foreclosure, and defaulting-mortgagor/beneficiary transfers. Non-judicial foreclosure is the dominant foreclosure mechanism in California; a reader relying on this clause's list could wrongly conclude a TDS is required for a transfer that is actually exempt.

**Suggested fix:** Add Civ. Code § 1102.2(c) to the clause's exemption list, alongside the existing court-order exemption.

## 10 minor, non-"unverifiable" findings worth owner attention

Two are worth calling out specifically, beyond their "minor" label:

- **`purchase_natural_hazard_disclosure`** (category "other"): its gap text attributes a sentence to "Stats. 2024, Ch. 80" amending Civ. Code § 1103.2 — but that exact sentence is already present verbatim in the independent 2017/2018 `onecle` snapshot, and no Chapter 80 of 2024 touching § 1103.2 could be found by the reviewing worker. The quote itself is accurate; **the amendment-history citation in the gap appears to be fabricated or misattributed.** This is a different failure mode than every other finding in this project's verification history so far (which have been citation-support gaps, stale mirrors, or broken URLs, never an invented legislative citation) and is worth the owner's specific attention before the next freshness cycle touches this clause.
- **`will_executor_appointment`** and **`will_executor_bond`** (category "advisory_language"): both gap notes drift from describing a statutory default into recommending a course of action ("naming an executor and alternate... matters even for a modest estate"; "an executor shouldn't assume a waiver... guarantees no bond will ever be required") — crossing Global Rule 1's "inform, never advise" hard rule, even though the underlying legal content is accurate. This is the architectural rule the whole project is built around, so a finding of this category deserves a fix sooner rather than later regardless of its "minor" severity label.

The remaining 8 (full text and suggested fixes in `verifier/findings.jsonl`):
`yvvoid_post_sciarratta` (wrong division attributed to an opinion),
`msa_incorporation_into_judgment` (CCP § 664.6 grew substantially since
checkedDate), `msa_attorneys_fees_parity` (describes a mandatory fee award
as discretionary), `smallclaims_no_attorney_at_hearing` (citation pinpoint
quotes only half of a two-part subdivision),
`purchase_tds_requirement`'s second, minor finding (a gap note treats an
already-resolved scope question as open),
`grandvis_3104ef_presumptions` (imprecise quote attribution to Troxel),
`bylaws_cumulative_voting` (overstates a mutual-water-company carve-out).

## What's next

Step 6's launch-set verification pass is complete: every launch-set
authority clause has a real, sourced result. 13 major and 80 minor
findings across all three waves are documented and `accepted`, none
applied as corpus edits yet (Global Rule 7). The next concrete action is
an owner review of the accumulated Patch-ID proposals across
`LAUNCH_SET_VERIFICATION_WAVE1.md` / `WAVE2.md` / `WAVE3.md` (13 major
findings total, plus the handful of minor ones flagged above as worth
fixing despite their label) — once approved, applying them would let
additional documents reach Tier A beyond today's 14.

Step 6 itself, as the plan defines it ("verify the launch set"), is done.
