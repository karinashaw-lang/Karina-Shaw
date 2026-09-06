# Hiring, new document: Farm Labor Contractor Licensing — Information Sheet

## Why this document

Second and final processed item of wave 115 (Hiring slot). Several
candidates were checked and eliminated before landing on this topic:
salary history inquiry ban (already folded into `payscale_salary_history_ban`
under §432.3), displaced-worker hiring preferences (already fully
covered by the Displaced Janitor Opportunity Act and Grocery Worker
Retention Law documents), and health-care/fast-food minimum wage
statutes (genuinely uncovered but deprioritized as more "during
employment" wage-setting than hiring-specific — the health care worker
minimum wage topic was independently picked up by the same wave's
During employment agent, confirming this assessment). The agent read
the existing Client Employer/Labor Contractor Liability document
(Lab. Code §2810.3) in full and confirmed it addresses a different
statute — shared civil liability between a client employer and its
labor contractor for wage/workers'-comp violations — with no overlap
with the Farm Labor Contractor licensing regime itself (Labor
Commissioner licensure, bonding, exam, denial/revocation grounds).
Personally reconfirmed via corpus search: the two existing "farm labor
contractor" hits (`fairchance_covered_employers_and_exemptions`,
`tempsvcfinal_definition`) are both incidental exclusion-list mentions,
not substantive coverage.

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority clauses,
citing Lab. Code §§ 1682(b), 1682.5(a), 1682.5(b), 1683(a), 1683(b)(1)(A),
1684(a)(1), 1684(a)(2), 1684(a)(3)(A), 1684(a)(4) (two passages),
1684(a)(5), 1684(a)(8)(A), 1685(a), 1685(c), 1690 (introductory clause),
1690(d), 1690(g), 1695(a)(1), 1695(a)(5), 1695(a)(7), 1697(a), 1697(b),
1697(c):

- **`flc_definitions_and_exemptions`** — the "farm labor contractor"
  definition and the two §1682.5 exemptions.
- **`flc_license_required_and_penalty`** — the license requirement and
  tiered civil penalty schedule for unlicensed operation.
- **`flc_application_process`** — the sworn application and Labor
  Commissioner character/competency investigation.
- **`flc_bond_and_fee_requirements`** — the payroll-tiered surety bond,
  license fee, and Farmworker Remedial Account allocation.
- **`flc_exam_and_harassment_training_conditions`** — the 85%-passing
  written exam and sexual harassment prevention training attestation.
- **`flc_license_denial_grounds`** — mandatory denial grounds, including
  the liquor-sales bar and the sexual-harassment-finding bar.
- **`flc_license_revocation_grounds`** — discretionary revocation,
  suspension, or non-renewal grounds.
- **`flc_ongoing_licensee_duties`** — the duty to carry the license and
  the bilingual pay-rate disclosure/posting duties.
- **`flc_enforcement_and_remedies`** — the misdemeanor penalty, the
  aggrieved employee's private civil action and bond remedy, and the
  heightened penalty for contracting while suspended/revoked.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected a provision imposing liability on the
  grower/user of an unlicensed farm labor contractor, analogous to
  §2810.3. Reading the full chapter through §1699 found no such
  provision within this chapter itself — liability runs to the
  contractor and to an aggrieved employee, not explicitly to the
  grower for merely using an unlicensed FLC — disclosed as a specific
  gap rather than assumed or invented.
- **A confirmed, precisely incorporated exemption structure**: the
  agent's initial uncertainty about whether §1682.5 stated a clean
  carve-out was resolved by finding exactly two exemptions
  (nonprofit-for-members, employee-not-independent-contractor),
  incorporated precisely.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not resolve how the §1682.5 exemptions interact with
the ABC test or other independent-contractor multi-factor tests, does
not address grower/user liability for engaging an unlicensed FLC beyond
noting it may arise under other statutes, does not restate every
condition in §1684(a)'s numbered paragraphs (only the application,
investigation, bond/fee, and exam/training conditions are covered), does
not track dollar-figure amendments made after the checked date (the
license fee itself already increased once, from $500 to $600, effective
January 1, 2015), does not describe the discretionary factors or
procedural sequence for license revocation, does not restate six of
nine numbered ongoing licensee duties, and does not describe the
Agricultural Labor Relations Act unfair-labor-practice conduct excluded
from the private civil action.

## Method

Fetched Lab. Code §§ 1682, 1682.5, 1683, 1684, 1685, 1690, 1695, and
1697 from leginfo.legislature.ca.gov, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after normalization. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 23 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings, built
via anchor-based slicing directly from extracted source text rather than
retyped by hand.

Independently re-verified during integration review via a
one-hundred-and-forty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-141stVerify-FarmLaborContractor/1.0") of all eight
sections — all 23 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered this time. The tiered bond/fee amounts, the sexual-
harassment denial and revocation grounds, and the aggrieved employee's
private civil action were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All eight Labor Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-forty-first independent fetch during integration review; all 23
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the two existing "farm labor contractor"
  corpus hits are incidental exclusion-list mentions, and reconfirmed
  no overlap with the existing Client Employer/Labor Contractor
  Liability document (Lab. Code §2810.3).
- Checked every citation's `case` field for emptiness — all 23
  populated with proper citation identifier strings.
- No new fields required — all five fields (`companyName`,
  `laborContractorUseDescription`, `preparerName`, `cityState`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Farm Labor Contractor Licensing — Information Sheet
  (`farm_labor_contractor_licensing_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 3,792 → 3,803 clauses; 495 → 496 documents. Second and final
  processed item of wave 115.

## Wave 115 summary

Wave 115 followed the established 2×2 pattern, targeting Hiring and
During employment — the two categories left tied lowest after wave
114's rotation and not touched in the two immediately preceding waves.
Both agents ran careful duplication-check passes before landing on
genuinely open topics: Health Care Worker Minimum Wage (after ruling out
§98.7 retaliation as already covered) and Farm Labor Contractor
Licensing (after ruling out salary-history-inquiry, displaced-worker
preferences, and confirming no overlap with the existing labor-
contractor-liability document). Both documents were built with
CourtListener's daily quota exhausted throughout. Each surfaced a
genuine correction through close primary-source reading: a corrected
assumption about the statute's enactment date and a corrected
expectation of a single flat wage figure, replaced by the actual
four-tier schedule structure (Health Care Worker Minimum Wage); and a
corrected assumption that grower/user liability for an unlicensed FLC
would appear within the chapter itself, when in fact no such provision
exists there (Farm Labor Contractor Licensing). The Health Care Worker
Minimum Wage integration also surfaced this session's first instance of
the established subdivision-marker-spacing artifact appearing in the
*reverse* direction (space present in the source, omitted in the
agent's extracted quote, rather than the previously-seen inserted-space
direction) — investigated and confirmed benign via the same artifact
taxonomy. Per the established alternation, wave 116 should return to a
1×4 pattern.
