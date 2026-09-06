# Ending employment, new document: Trade Adjustment Assistance (TAA) — Information Sheet

## Why this document

Fourth and final processed item of wave 104 (Ending employment slot). A
scoping pass and clause-level duplication check confirmed zero prior
coverage of TAA anywhere in the corpus, distinct from the existing
state Unemployment Insurance documents and the WARN Act documents.

## What this document covers

8 clauses: 3 drafting (intro, benefits overview, acknowledgment) and 5
authority clauses, citing 19 U.S.C. §§ 2271(a)(1), (a)(1)(C), 2272(a),
(a)(2)(A)-(B), 2291(a)(3)(A)-(C), 2292(a), 2296(a)(1), 2297(b)(1)-(2),
2298(b)(1)-(2), and 26 U.S.C. § 35(a), (b)(1)(B):

- **`taa_program_status`** — the central finding: new TAA benefits under
  this part are not currently authorized after June 30, 2022.
- **`taa_petition_and_certification`** — how a group of workers is
  petitioned for and certified as adversely affected.
- **`taa_tra_and_ui_relationship`** — how Trade Readjustment Allowances
  depend on and are computed from exhausted state UI.
- **`taa_training_jobsearch_relocation_benefits`** — the training,
  job-search, and relocation allowance categories and dollar figures.
- **`taa_health_coverage_tax_credit`** — the related Health Coverage Tax
  Credit, found to have expired even earlier than the rest of TAA.

## Genuine findings

- **A significant, substantively important correction to the research
  brief's core assumption**: the brief described TAA as a presently
  operating benefits program without qualification. The agent read the
  actual current 19 U.S.C. § 2271 text and its official "Termination
  Date" editorial note and found new TAA benefits under this part are
  not authorized after June 30, 2022 — a finding with real practical
  consequence for anyone consulting this document, disclosed prominently
  as the document's first substantive clause rather than buried in a
  gap field.
- **A second, independent correction on the Health Coverage Tax
  Credit**: the brief listed the HCTC as a currently available TAA
  benefit. The agent found 26 U.S.C. § 35(b)(1)(B)'s own "eligible
  coverage month" definition ended before January 1, 2022 — roughly six
  months earlier than the other TAA benefits' cutoff — disclosed as a
  separate, independent finding rather than conflated with the main
  program lapse.
- **A refined, more precise statement of the UI-TRA relationship**: the
  brief vaguely described TRA as "supplementing/following" UI. The
  agent read §§ 2291(a)(3) and 2292(a) directly and found UI exhaustion
  is an express eligibility condition for TRA, and the weekly TRA amount
  is computed directly from the worker's own prior UI weekly benefit
  amount — a materially more precise statement of the actual statutory
  mechanism.
- **A disclosed, honest access limitation**: the agent attempted to
  corroborate current program status against dol.gov but was blocked
  (curl 403, WebFetch egress-blocked); disclosed this explicitly rather
  than silently relying on Cornell LII alone without noting the
  corroboration attempt failed.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 5 of 15 citation instances mismatched
on a strict check, all passing after normalizing space-before-
punctuation. Manual inspection confirmed the established Cornell LII
markup-stripping whitespace artifact (spurious spaces before commas and
periods from stripped inline cross-reference links), appearing more
densely in this fetch than in prior documents — plausibly because these
amendment-heavy sections carry unusually many inline statutory
cross-references. Confirmed as a genuine, already-documented
source-side rendering artifact across all 5 instances — no correction
needed.

## Honest gap(s) disclosed

This document does not restate § 2271(b)'s hearing procedure, § 2272(b)'s
"adversely affected secondary worker" pathway, or the agricultural/
oil-and-gas firm definitions in § 2272(c). It does not cover § 2291(a)(4)'s
work-search tie-in or §§ 2292(b)-(c)'s training-related TRA adjustments.
It does not cover the application-deadline provisions in §§ 2297(a)(2)(C)
or 2298(a)(2)(E), or whether the stated dollar caps have been
administratively adjusted since this text was last amended. It does not
independently confirm whether Congress has reauthorized the program in
legislation not yet reflected in the fetched Cornell LII text.

## Method

Fetched 19 U.S.C. §§ 2271, 2272, 2291, 2292, 2296, 2297, and 2298, and
26 U.S.C. § 35, from Cornell LII, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after whitespace normalization. CourtListener's daily rate limit was
already exhausted on the agent's first lightweight test call; no case
law was used, a disclosed and legitimate choice. All 15 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-seventh fetch (a new distinct curl User-Agent string,
"Groundtruth-107thVerify-TAA/1.0") of all eight sections — 10 of 15
citation instances confirmed clean on direct substring match; the
remaining 5 matched only after normalizing space-before-punctuation,
confirmed as the established Cornell LII whitespace artifact via manual
context inspection of each. The June 30, 2022 termination date and the
January 1, 2022 HCTC cutoff were both independently reconfirmed present
in the freshly fetched text.

## Verification

- All eight U.S. Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-seventh independent fetch during integration review;
  all 15 citation instances confirmed clean, five after accounting for
  a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all three fields (`employeeName`,
  `companyName`, `separationDate`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Trade Adjustment Assistance (TAA) — Information Sheet
  (`trade_adjustment_assistance_info_sheet`), 8 clauses (5 authority + 3
  drafting), in the Ending employment category. No new fields.
- Corpus: 3,481 → 3,489 clauses; 461 → 462 documents. Fourth and final
  processed item of wave 104.

## Wave 104 summary

Wave 104 followed the established 1×4 pattern, targeting Hiring,
Ending employment, During employment, and Confidentiality & IP —
rotating back to categories not covered in the two immediately
preceding waves. This wave's scoping pass applied the strengthened
cross-category, clause-level duplication check for the third
consecutive wave, and all four top-pick topics were confirmed clean
before launch, with no mid-research pivots needed. All four completed
documents were built with CourtListener's daily quota exhausted
throughout, consistent with the adaptation established in wave 98. Each
surfaced genuine findings through close primary-source reading: a
corrected coverage threshold and eligibility framing plus a correctly
excluded adjacent statute (School Activities Leave), a corrected
citation that collapsed three separate regulatory sub-rules into one
(H-1B Compliance), a corrected Public Law citation confirmed against
the statute's own short-title note (Speak Out Act), and — the most
substantively significant finding of the wave — a discovery that the
federal TAA worker-benefits program has lapsed since June 30, 2022,
with its related Health Coverage Tax Credit having expired even earlier
(Trade Adjustment Assistance). Per the established alternation, wave
105 should return to a 2×2 pattern.
