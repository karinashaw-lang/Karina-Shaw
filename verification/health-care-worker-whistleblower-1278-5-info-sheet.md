# During employment, new document: Health Care Worker Whistleblower Protection (Health & Safety Code §1278.5) — Information Sheet

## Why this document

Second processed item of wave 118 (During employment slot). Document-
and clause-level greps for "1278.5," "health care worker whistle,"
"healthcare whistle" returned zero hits. The agent confirmed the two
existing whistleblower documents are distinct: `california_whistleblower_protection_info_sheet`
covers only Lab. Code §1102.5 (general, not health-facility-specific),
and `whistleblower_policy` covers only federal Dodd-Frank/SOX securities
whistleblowing — neither touches H&S Code §1278.5. The agent also
spot-checked 8 CCR §3342 (healthcare-specific workplace violence
regulations) and confirmed it too is genuinely uncovered per an explicit
disclaimer in the existing Workplace Violence Prevention Plan document,
but chose §1278.5 instead as more cleanly sourceable from leginfo. No
pivot was needed. Personally reconfirmed via corpus search: zero prior
mentions of "1278.5" anywhere in the corpus.

## What this document covers

12 clauses: 2 drafting (intro, acknowledgment) and 10 authority clauses,
citing Health & Saf. Code § 1278.5(a) (two passages), (b)(1), (b)(2),
(b)(3), (c), (d)(1), (d)(2), (e), (f), (g) (three passages), (m), (h),
(l), (i), (j), (k), (n):

- **`hsw1278_5_purpose_and_scope`** — the Legislature's stated purpose
  and the express note that the statute is not intended to reach general
  employment matters.
- **`hsw1278_5_protected_activity`** — the prohibition on discrimination/
  retaliation by the facility and by owning/operating entities.
- **`hsw1278_5_civil_penalty`** — the $25,000 civil penalty and its
  cross-referenced administrative process.
- **`hsw1278_5_patient_presumption`** — the 180-day rebuttable
  presumption protecting a patient.
- **`hsw1278_5_workforce_presumption`** — the separate 120-day
  rebuttable presumption protecting employees, medical staff, and
  health care workers, and the burden-of-production note.
- **`hsw1278_5_misdemeanor`** — the $75,000 criminal misdemeanor for a
  willful violation.
- **`hsw1278_5_remedies`** — role-differentiated remedies (employee,
  health care worker, medical staff member) and preservation of other
  legal theories.
- **`hsw1278_5_peer_review`** — interaction with medical staff peer
  review and the injunction/in-camera-review mechanism.
- **`hsw1278_5_coverage_and_exemptions`** — the "health facility"
  definition and exclusions for correctional/juvenile facility inmates
  and long-term health care facilities.
- **`hsw1278_5_inspector_discussion_right`** — the right to speak
  privately with a facility inspector.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially framed this as an employee-only protection.
  Reading the full text showed the statute separately protects patients
  (with their own 180-day presumption) and non-employee health care
  workers/independent contractors (120-day presumption, no reinstatement
  remedy) — a broader and more role-differentiated structure than the
  initial framing suggested.
- **A corrected scope assumption**: the agent initially expected broad
  "health care worker" coverage but found the statute expressly excludes
  long-term health care facilities (covered instead by §1432) and
  correctional/juvenile-facility inmates — narrower coverage than a
  plain topic label would suggest.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not independently verify the cross-referenced
administrative process at Chapter 2.4 (commencing with §1417), Evidence
Code §603 (the burden-of-production mechanism both presumptions
reference), Bus. & Prof. Code §§805 and 809-809.5 (the peer-review
process itself), or H&S Code §§1418 and 1432 (the long-term-care-
facility definitions and statute), and does not define "willfully" for
purposes of the criminal misdemeanor or identify the specific
"department" referenced by the inspector-discussion right.

## Method

Fetched Health & Saf. Code § 1278.5 from leginfo.legislature.ca.gov,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical for the statutory-text block after
investigating a raw-HTML byte-size difference traced to a per-request
JSF ViewState session token (a disclosed, non-substantive artifact).
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
20 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-forty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-149thVerify-HealthWhistleblower/1.0") — 19 of 20
citation instances matched directly on a strict normalized-whitespace
check; the remaining one (the protected-activity clause's §1278.5(b)(1)
quote) was flagged and investigated, tracing to this session's
established subdivision-marker-spacing artifact (a colon immediately
followed by "(A)" with no space in the extracted quote, versus a space
in the source) — confirmed benign via a whitespace-tolerant re-check.
All 20 citation instances confirmed clean overall, no genuine defects.
The role-differentiated remedies, the two separate rebuttable
presumptions, and the long-term-care-facility exclusion were all
independently reconfirmed present in the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-forty-ninth
  independent fetch during integration review; all 20 citation instances
  confirmed clean (1 via the confirmed-benign subdivision-marker-spacing
  artifact, 19 on direct match).
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause citing
  multiple subdivisions of the same section correctly discloses they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the two existing whistleblower documents
  (Lab. Code §1102.5 general protection; federal Dodd-Frank/SOX) address
  different statutes with zero overlap.
- Checked every citation's `case` field for emptiness — all 20
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Health Care Worker Whistleblower Protection (Health &
  Safety Code §1278.5) — Information Sheet
  (`health_care_worker_whistleblower_1278_5_info_sheet`), 12 clauses
  (10 authority + 2 drafting), in the During employment category. No
  new fields.
- Corpus: 3,874 → 3,886 clauses; 503 → 504 documents. Second processed
  item of wave 118.
