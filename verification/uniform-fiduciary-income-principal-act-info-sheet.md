# Estate Planning, new document: Uniform Fiduciary Income and Principal Act — Information Sheet

## Why this document

Fourth and final processed item of wave 126 (Estate Planning slot,
1×4 pattern). The agent ruled out four candidates via specific
section-number greps before landing here: the Heggstad petition
(Prob. Code §850), conservatorship accounting (Prob. Code
§§2610/2620/2628 — already quoted verbatim in
`guardestate_inventory_and_accounting`), the Uniform Statutory Form
Power of Attorney (judged too likely to collide with the existing
Financial Power of Attorney document's scope even though §4401 itself
had zero corpus hits), and divorce-revocation of nonprobate transfers
(already covered by `will_revocation_by_divorce`/
`statwill_divorce_revocation` and the `podaccount_*` clauses) were all
confirmed already substantively covered or too likely to duplicate.
The chosen topic — California's Uniform Fiduciary Income and Principal
Act ("UFIPA," Prob. Code §§16320-16383), effective January 1, 2024,
replacing the former Uniform Principal and Income Act — was confirmed
genuinely open: zero prior corpus hits on any of the fifteen section
numbers the agent planned to cite (16320, 16322, 16323, 16325, 16330,
16331, 16332, 16333, 16334, 16340, 16341, 16350, 16370, 16371, 16375)
before drafting.

## What this document covers

10 clauses: 2 drafting (background declaration, signature block) and
8 authority clauses, citing Prob. Code §16320, §16322, §16325(a),
§16327(a), (b)-(c), §16332(a), (b)-(c), §16333, §16340(c)-(d),
§16350(a), §16375(a)-(b):

- **`ufipa_purpose_and_scope`** — the chapter's short title and its
  scope of application to trusts, estates, and life estates/other term
  interests.
- **`ufipa_trust_terms_and_default_gap_filling`** — the statute's
  default-rule status: a trust's own terms and the fiduciary's
  discretionary administration power control over UFIPA's defaults.
- **`ufipa_power_to_adjust`** — the trustee's power to adjust between
  income and principal without court approval, with no duty to
  exercise it and no liability either way.
- **`ufipa_unitrust_conversion_power`** — the separate power to
  convert an income trust to a unitrust, change a unitrust's
  calculation, or convert back, conditioned on notice and no
  beneficiary objection.
- **`ufipa_unitrust_notice_objection_period`** — the required notice
  contents and the at-least-30-day objection deadline floor.
- **`ufipa_entity_distribution_default_rule`** — the default
  income/principal allocation of money received from a corporation,
  LLC, or similar entity.
- **`ufipa_natural_resources_receipts`** — the default allocation of
  receipts from minerals, water, or other natural resources.
- **`ufipa_income_interest_begins_at_death`** — when an income
  beneficiary's right to net income begins, including the rule that a
  death-triggered interest begins on the date of death even through an
  intervening administration period.

## Genuine findings

- **A disclosed operative-date and transition limitation**: the
  purpose-and-scope clause's gap explicitly discloses that this
  document describes only the current UFIPA text as codified beginning
  January 1, 2024, and does not address transition or savings-clause
  questions for events predating that effective date, which may still
  be governed by the former Uniform Principal and Income Act's
  different text.
- **A disclosed, deliberate choice not to chain further into a
  cross-referenced procedural statute**: the unitrust-notice clause's
  gap explicitly discloses that Prob. Code §16333 itself cross-refers
  to the separate Chapter 5 (commencing with §16500) service-mechanics
  statute, which this document does not quote or apply, having judged
  the clause budget better spent on the substantive allocation rules.
- **A disclosed, deliberate choice not to apply detailed downstream
  content requirements**: the unitrust-conversion clause's gap
  discloses that the detailed unitrust-plan content requirements
  (§§16334-16338) and the IRC-tied trusts §16331(b) excludes from the
  article entirely are not addressed.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search
  call; given the statute took effect barely 21 months before this
  wave, no case law construing it would be expected to exist yet in
  any event.

## Honest gap(s) disclosed

This document does not address transition/savings-clause questions
for pre-2024 events under the former Uniform Principal and Income Act,
does not quote §16325's remaining subdivisions (b)-(e) (the fairness
presumption and residual catch-all factors), does not apply the nine
§16327(e) restriction categories or the cofiduciary/delegation rules
in §16327(f)-(h) to any specific trust, does not describe the unitrust
plan content requirements of §§16334-16338 or the §16331(b) IRC-tied
trust exclusions, does not quote the Chapter 5 notice-service
mechanics cross-referenced by §16333, does not quote §16340(e)-(i)'s
capital-distribution determination methodology, does not describe the
depletion-deduction presumption in §16350(c) or the pre-2024
grandfathering option in §16350(d), and does not address the separate
end-of-interest apportionment rules in §§16376-16377.

## Method

Fetched Prob. Code §§16320, 16322, 16325, 16327, 16332, 16333, 16340,
16350, and 16375 from leginfo.legislature.ca.gov, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization (some sections required
a short backoff/retry after transient connection resets — the same
known transient-relay issue independently encountered and resolved
elsewhere in this project). A full-chapter text dump was also pulled
as a cross-check; its per-section text matched the individual fetches.
CourtListener's daily quota was already exhausted (HTTP 429) on the
agent's search attempt; no case law was used or fabricated. All 13
citation instances programmatically confirmed by the research agent as
exact, contiguous substrings — the agent also disclosed correcting
seven initial `{{placeholder}}` leaks in `gap` fields to generic
phrasing before delivery.

Independently re-verified during integration review via a
one-hundred-and-seventy-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-175thVerify-UFIPA/1.0") of all nine sections —
all 13 citation instances confirmed clean on direct normalized-
whitespace substring match, with no fallback needed. The short title,
scope provision, default-rule-status text, power to adjust, unitrust
conversion power, unitrust notice requirements, entity-distribution
default rule, natural-resources receipt allocation, and income-
interest start-date rule were all independently reconfirmed present in
the freshly fetched text.

## Verification

- All nine Probate Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-seventy-fifth independent fetch during integration
  review; all 13 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean (including reconfirming the agent's own
  self-corrected placeholder leaks did not resurface).
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `ufipa_` prefix has zero collisions. Ran
  section-number-specific greps for all nine cited sections (16320,
  16322, 16325, 16327, 16332, 16333, 16340, 16350, 16375) across the
  full corpus — zero hits outside the new clauses, confirming no
  disguised overlap.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- No new fields required — all five fields (`trusteeName`,
  `trustName`, `originalTrustDate`, `dateSigned`, `cityState`) reused
  from the existing corpus (matching the house style of the existing
  Uniform Prudent Investor Act document).
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Uniform Fiduciary Income and Principal Act —
  Information Sheet (`uniform_fiduciary_income_principal_act_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 4,138 → 4,148 clauses; 529 → 530 documents. Fourth and final
  processed item of wave 126.

## Wave 126 summary

Wave 126 followed the established 1×4 pattern, targeting Business
Formation, Hiring, Confidentiality & IP, and Estate Planning — the
four categories tied lowest after wave 125's rotation. All four agents
ran section-number-specific duplication checks before landing on
genuinely open topics: Limited Partner Control Safe Harbor (Corp. Code
§§15903.03(b)-(c), 15903.06, directly signposted by an existing
clause's own honest gap disclosure), Private Investigator Licensing
(Bus. & Prof. Code §§7512-7573.5, after ruling out five already-covered
candidates), the electronics/appliance Right to Repair Act's IP
disclosure limits (Pub. Resources Code §§42488-42488.3, after ruling
out ten already-covered candidates and carefully disambiguating from
an existing, differently-scoped document sharing the same short
title), and UFIPA (Prob. Code §§16320-16383, after ruling out four
already-covered or too-likely-to-collide candidates). This wave
produced zero genuine duplication findings requiring exclusion — every
delivered clause across all four documents survived independent
integration review intact. Each document surfaced at least one
genuine, disclosed finding: a positive example of the corpus's own
disclosure discipline guiding follow-on research (Limited Partner
Control Safe Harbor); a disclosed leginfo site-quirk workaround for a
decimal section number (Private Investigator Licensing); a disclosed,
deliberate choice not to duplicate existing trade-secret-definition
content already covered elsewhere in the corpus (Right to Repair Act
IP); and a disclosed operative-date/transition limitation plus a
deliberate choice not to chain into a cross-referenced procedural
statute (UFIPA). Per the established alternation, wave 127 should
return to a 2×2 pattern.
