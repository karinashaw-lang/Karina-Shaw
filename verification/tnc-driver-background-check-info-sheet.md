# Hiring, new document: Transportation Network Company Driver Background Check Requirements — Information Sheet

## Why this document

First processed item of wave 123 (Hiring slot, 2×2 pattern). The agent
ruled out two candidates via specific section-number greps before
landing here: Lab. Code §§1050-1053/Civ. Code §47(c) (reference-check/
blacklisting law) was found already substantively quoted across the
existing `blacklisting_former_employee_info_sheet` and
`neutral_reference_policy` documents; a third Live Scan "sector
example" (H&S Code §1522) was judged too close a variant of the
existing Live Scan document's own §1522-family coverage. The chosen
topic — Pub. Util. Code §§5431, 5445.2, 5445.3, the TNC-specific
driver-screening scheme — was confirmed genuinely open via both a
direct section-number grep and a broader phrase grep ("Transportation
Network Company," "TNC driver"). Personally reconfirmed via corpus
search: zero prior mentions of "5431," "5445.2," or "5445.3" anywhere
in the corpus.

## What this document covers

10 clauses: 2 drafting (declaration, signature/certification) and 8
authority clauses, citing Pub. Util. Code § 5431(a), (c), § 5445.2(a)(1)-(5),
(b), (c)(1)-(2), § 5445.3(a)(1):

- **`tncdriverbg_definitions`** — the statutory definitions of
  "participating driver" and "transportation network company."
- **`tncdriverbg_core_requirement`** — the mandatory local/national
  criminal background check methodology.
- **`tncdriverbg_permanent_bar`** — permanent disqualification for
  current sex-offender registration or specified convictions.
- **`tncdriverbg_sevenyear_lookback`** — the seven-year lookback
  disqualifiers.
- **`tncdriverbg_outofstate_and_additional_standards`** — out-of-state
  equivalent convictions count, and companies may impose stricter
  standards.
- **`tncdriverbg_civil_penalty`** — the $1,000-$5,000 civil penalty for
  noncompliance.
- **`tncdriverbg_icraa_carveout`** — the narrow ICRAA carve-out
  permitting reports to TNCs regardless of employee/contractor status.
- **`tncdriverbg_license_requirement`** — the valid California driver's
  license requirement.

## Genuine findings

- **A disclosed choice to quote only the cross-reference language, not
  the underlying cross-referenced statutes**: multiple gap fields
  disclose that the underlying Penal Code, Elections Code, and Civil
  Code sections cross-referenced by the PUC provisions (Penal Code
  §§667.5, 236.1, 11413, 11418, 11418.5, 11419; Elections Code §18540;
  Penal Code §§67, 68, 85, 86, 92, 93, 137, 138, 165, 518, 530, 484(a),
  487(a); Civil Code §§1786.12, 1786.18(a)(7)) were not independently
  fetched or verified — only the PUC statute's own cross-reference text
  is quoted and verified.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not name specific approved commercial databases or
a re-check cadence for the core background check, does not
independently verify the underlying Penal Code, Elections Code, or
Civil Code cross-references, does not state how the seven-year period
is computed (from conviction, sentencing, or another event), does not
identify who performs the out-of-state offense element comparison or
the enforcing body/procedure for the civil penalty, does not establish
that ICRAA's other disclosure/certification requirements cease to
apply, and does not quote the nonresident-military-member license
exception or the Vehicle Code notice requirement.

## Method

Fetched Pub. Util. Code §§5431, 5445.2, and 5445.3 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 11 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-164thVerify-TNCDriverBackgroundCheck/1.0"). The
first fetch attempts hit a transient 503/connection-reset from
leginfo.legislature.ca.gov (confirmed as a genuine transient relay
issue via the environment's own proxy status log, not a URL or request
defect); a retry loop with backoff succeeded shortly after. All 11
citation instances confirmed clean on normalized-whitespace substring
match; 4 of the 11 required the standard whitespace-stripped fallback
check (the familiar subdivision-marker-spacing artifact), confirmed
benign. The driver/TNC definitions, the background-check methodology,
the permanent bar, the seven-year lookback, the civil penalty amount,
and the ICRAA carve-out were all independently reconfirmed present in
the freshly fetched text.

## Verification

- All three primary sources fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-sixty-fourth independent fetch during integration
  review (after a transient server-side outage cleared); all 11
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `tncdriverbg_` prefix has zero collisions.
  Independently reconfirmed zero prior corpus mentions of "5431,"
  "5445.2," or "5445.3," and reconfirmed the agent's two pivot
  rationales against the corpus.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `jobTitle`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Transportation Network Company Driver Background Check
  Requirements — Information Sheet
  (`tnc_driver_background_check_info_sheet`), 10 clauses (8 authority +
  2 drafting), in the Hiring category. No new fields.
- Corpus: 4,025 → 4,035 clauses; 518 → 519 documents. First processed
  item of wave 123.
