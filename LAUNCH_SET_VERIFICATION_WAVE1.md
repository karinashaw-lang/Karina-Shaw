# CA Wedge Plan Step 6 — Launch Set Verification, Wave 1

Real adversarial-verifier results against the approved 128-document launch
set (`LAUNCH_SET_PROPOSAL.md`). This wave checked 180 of the launch set's
521 not-yet-adversarially-checked authority clauses, hand-ordered (not
random): the 7-document wedge cluster first, then documents needing the
fewest additional clean checks to reach Tier A. Method and rubric: the
existing `verifier/` pipeline (`sample.py` → 9 parallel `Agent`-tool workers
following `verifier/prompt.md` → `record_result.py` → `triage.py`), unchanged
from Phase 4.1 except for the hand-ordered (not random) sample selection.

## Results

- **180/180 clauses checked**, all genuinely researched (fetched sources,
  no rubber-stamping) — see `verifier/checked.jsonl` / `verifier/findings.jsonl`
  for the raw record and `DECISIONS.md` for a per-batch account of what each
  worker actually fetched and confirmed.
- **56 findings**: 10 major, 46 minor, 0 blockers.
- **All 56 triaged "accepted"** — the finding stands, no corpus edit has been
  made yet (Global Rule 7: never auto-edit clause text from verifier output;
  write patch files, show the diff, wait for approval). None were "rejected"
  — every finding researchers returned was evidence-backed, not a false
  positive guess. "Accepted" also means these clauses, including the clean
  ones they weren't attached to, do **not** yet count toward Tier A for their
  documents until a fix lands, consistent with the honest-tiering rule that
  an accepted finding of any severity blocks `adversarially_checked`.
- **38 of the 46 minor findings are "unverifiable"**: `leginfo.legislature.ca.gov`
  returned a Cloudflare bot-challenge (HTTP 403) to every worker, all
  session, on every direct-fetch attempt. Workers used `law.onecle.com`
  (the rubric's named independent second publisher) and, where that mirror
  was stale, corroborating secondary sources (legislative trackers, law-firm
  summaries) rather than guessing — consistent with the Phase 4.1 precedent
  already in `verifier/README.md` ("accepted with no clause edit — all
  sourcing-access limitations, not false positives"). This is a real,
  structural access gap (not specific to this wave) worth the owner's
  attention: a human with a real browser can likely reach leginfo directly
  where these sandboxed workers could not.

## Effect on tiers

Before this wave, 0 documents anywhere in the 741-document corpus reached
Tier A. After recording and triaging wave 1:

| | A | B | C | DraftOnly |
|---|---|---|---|---|
| Before | 0 | 324 | 417 | 9 |
| After | **6** | 318 | 417 | 9 |

All 6 new Tier A documents are inside the approved launch set, and 2 are
inside the 7-document wedge cluster itself:

- `llc_annual_fee_info_sheet` — **wedge**
- `llc_default_operating_rules_info_sheet` — **wedge**
- `buy_sell_agreement`
- `commission_agreement`
- `quitclaim_deed`
- `wage_statement_itemization_policy`

`tools/tiering.py`, `tools/build_verification_levels.py`, and the golden
fixtures were all regenerated and committed; `validate_corpus.py`,
`merge_guard.py`, `regression.js`, `golden.js`, and the full tiering/verifier
test suites all pass.

## 10 real, evidence-backed findings needing a Patch-ID fix (owner review)

None of these have been applied. Each is a genuine, sourced defect — not a
false positive — with a suggested fix below. Once reviewed and approved,
applying them (plus re-running `golden.js --update` if rendered text
changes) would let several of these clauses, and potentially their
documents, reach `adversarially_checked`/Tier A.

### `llc_tax_election_mechanics` -- major/internal_contradiction

**Finding:** The clause's opening sentence assumes the LLC's default federal classification is 'disregarded entity' treatment, but this same clause is also attached to the Multi-Member LLC Operating Agreement, where the sibling clause llc_mm_tax_classification correctly states the default is partnership classification, not disregarded-entity status (which by definition requires a single owner).

**Suggested fix:** Replace the opening sentence with classification-neutral wording, e.g.: "Changing away from {{companyName}}'s default federal tax classification isn't automatic — it takes filing IRS Form 8832 (Entity Classification Election)." (The rest of the clause, on Form 8832's timing and the 60-month lock-in, is accurate for both the single-member and multi-member context and needs no change.)

### `homeimprove_contract_required_and_writing` -- major/superseded_law

**Finding:** Bus. & Prof. Code § 7159's required-disclosure list was expanded by SB 517 (Stats. 2025, ch. 585), effective January 1, 2026 — before this clause's September 2026 checkedDate — to add a mandatory subcontractor-use disclosure that this clause's enumerated list of required disclosure notices (CGL, workers' comp, mechanics lien warning, CSLB notice) does not mention.

**Suggested fix:** n/a (not a wording swap) — recommend re-pulling the current chaptered text of Bus. & Prof. Code § 7159 directly from leginfo and adding the new subcontractor-use disclosure to this clause's list of required disclosure notices, noting the SB 517 (2025) amendment and its January 1, 2026 effective date.

### `arb_agreement` -- major/overclaiming

**Finding:** The clause states flatly that the employee 'give[s] up the right to bring or participate in a ... representative action,' but under current California law a PAGA representative-action waiver does not actually eliminate the employee's standing to pursue the non-individual PAGA claim in court once their individual claim is compelled to arbitration — a significant, undisclosed California-specific limit on the waiver this clause describes as settled.

**Suggested fix:** Add a California-specific qualifier, e.g.: "Under California's Private Attorneys General Act (PAGA), this representative-action waiver may not fully apply: even where {{employeeName}}'s individual claim is sent to arbitration, California courts have held that {{employeeName}} can retain standing to pursue a non-individual PAGA claim on behalf of other employees in court (Adolph v. Uber Technologies, Inc., 14 Cal.5th 1104 (2023))."

### `waitingtime_willful_standard` -- major/other

**Finding:** The clause's gap frames whether a good-faith FACTUAL dispute over the amount owed (as opposed to a legal dispute like Barnhill's setoff claim) can defeat willfulness as an unresolved, distinct question, but a published California Court of Appeal decision applying a DLSE regulation already resolves it by extending the good-faith defense to disputes 'based in law or fact.'

**Suggested fix:** Revise the gap to note that Amaral v. Cintas Corp. No. 2, 163 Cal.App.4th 1157 (2008), applying Cal. Code Regs. tit. 8, § 13520, has extended the good-faith-dispute defense to disputes 'based in law or fact' over whether wages are due at all -- not only to legal disputes like the setoff claim in Barnhill -- so the amount-owed question Barnhill itself flagged as open (citing out-of-state authority) is not as unresolved under current California authority as the gap currently suggests.

### `notice_pay_rent_required_contents` -- major/citation_mismatch

**Finding:** The clause attributes the 'notice demanding more rent than is actually owed is defective' rule to California courts and cites only Kwok v. Bergren, but Kwok never addresses an overstated-rent-amount notice at all — it is about defective service of the notice (CCP § 1162), and the overstated-amount rule actually comes from different, uncited cases (Bevill v. Zoura (1994) 27 Cal.App.4th 694, itself citing Nourafchan v. Miner (1985) 169 Cal.App.3d 746, 753 and Ernst Enterprises, Inc. v. Sun Valley Gasoline, Inc. (1983) 139 Cal.App.3d 355, 359).

**Suggested fix:** Split the sentence's authority: keep Kwok (or better, Bevill v. Zoura, which states the proposition in the unlawful-detainer-notice context) for 'valid only if it strictly complies,' and add a citation to Bevill v. Zoura (1994) 27 Cal.App.4th 694 and/or Nourafchan v. Miner (1985) 169 Cal.App.3d 746, 753 for 'a notice demanding more rent than is actually owed is defective.'

### `sdi_deposit_cap` -- major/overclaiming

**Finding:** The clause states without qualification that the service-member exclusion from the small-landlord two-month cap means 'the one-month cap still controls' — but Civil Code § 1950.5(c)(4) (effective April 1, 2025, and still in effect as of this review) separately lets a landlord charge a service-member tenant MORE than one month's rent as security based on credit history, credit score, housing history, or another tenant-related factor, subject to a pre-signing written disclosure and a refund of the excess within six months. The clause's own checkedDate (2026-09-01) postdates this amendment by well over a year, so this is not a case of law changing after the check.

**Suggested fix:** Add a sentence disclosing Civ. Code § 1950.5(c)(4): 'A separate, narrower exception lets a landlord charge a service-member tenant more than one month's rent as security based on the tenant's credit history or similar factors, if disclosed in writing before the lease is signed — but the landlord must refund the excess within six months of the tenant taking possession (assuming rent is current).' **The same gap exists verbatim in the sibling clause "lease_security_deposit"** used by the Residential Lease Agreement document (outside this wave's sample) — flagged here so it isn't missed when this clause is fixed.

### `nonsolicit_employee_split` and `nonsolicit_customer_distinction` -- major/other (same defect, two sibling clauses)

**Finding:** Both clauses' citation URL for AMN Healthcare, Inc. v. Aya Healthcare Services, Inc. points to the wrong CourtListener case — a family-law opinion (Adamiak v. Adamiak), not AMN Healthcare — because the URL uses the opinion's internal `opinion_id` (4326974) in the path slot where CourtListener's routing expects the `cluster_id`. The quoted text itself is genuine and verbatim once the correct opinion is read; only the public link is broken.

**Suggested fix:** Change both AMN Healthcare citation URLs from `https://www.courtlistener.com/opinion/4326974/amn-healthcare-inc-v-aya-healthcare-services-inc/` to `https://www.courtlistener.com/opinion/4549721/amn-healthcare-inc-v-aya-healthcare-services-inc/` (the real cluster id). No wording change needed.

### `at_will` -- major/citation_mismatch

**Finding:** The quoted sentence attributed to Lincoln v. Wackenhut Corp. is that court's description of a different case's facts (McDonald v. Mobil Coal Producing, Inc.), and Lincoln itself reached the opposite result, upholding the employer's disclaimer as conspicuous and effective.

**Suggested fix:** Either cite McDonald v. Mobil Coal Producing, Inc., 820 P.2d 986 (Wyo. 1991) directly for the 'buried in a welcoming section' proposition, or revise the quote/cite pairing so Lincoln v. Wackenhut is used only for the conspicuousness-factors test it actually applies, not for an outcome it did not reach.

### `work_auth` -- major/citation_mismatch

**Finding:** The citation URL for Split Rail Fence Co. v. United States points to the wrong CourtListener case when resolved by its numeric ID (same class of bug as the AMN Healthcare findings above); the quoted text is real but not reachable at the URL given.

**Suggested fix:** Replace the citation URL with `https://www.courtlistener.com/opinion/4376418/split-rail-fence-co-v-united-states/`.

## 8 minor, non-"unverifiable" findings (lower priority, same owner-review process)

Each is real and evidence-backed; none applied. Full text (finding, evidence,
sources, suggested fix) is in `verifier/findings.jsonl`, searchable by clause
id. Briefly: `ein_statutory_basis` (overclaiming — a quote supports less than
the sentence it's attached to claims), `llc_articles_filing_requirement`
(advisory-language drift in a gap note), `cobra_election_period` (citation
pinpoint one subsection too specific), `ccpasp_monitoring_and_audit_provisions`
(doesn't disclose newer CPPA regulations may bear on the question),
`bgc_disclosure` (FCRA transportation-exception description omits half the
statutory requirement), `accommodation` (cites out-of-circuit cases for a
California document when 9th Circuit authority — Humphrey v. Memorial
Hospitals Ass'n — says the same thing), `safe_sec_act_5_registration` (the
load-bearing "a SAFE is a security" premise is uncited), `nda_definition`
(an out-of-state case used without this corpus's usual single-state
caveat).

## A systemic note, not a per-clause finding

`leginfo.legislature.ca.gov` was Cloudflare-blocked for every one of the 9
wave-1 workers, all session, for every attempted direct fetch (curl and
WebFetch alike). Workers worked around it with independent mirrors and
secondary corroboration per the rubric, and this did not stop real,
substantive findings from surfacing — but it means roughly a fifth of this
wave's clauses are logged as "unverifiable" for reasons that might not
apply to a verification pass run from a real browser rather than this
sandboxed environment. Worth flagging to the owner as an environment
limitation, not a corpus problem.

## What's next

521 - 180 = 341 launch-set authority clauses remain unchecked. Continuing
in the same hand-ordered priority (wedge cluster first, already complete;
then ascending per-document gap size) in further waves, same process:
sample → parallel verification workers → record → triage → rebuild tiers.
