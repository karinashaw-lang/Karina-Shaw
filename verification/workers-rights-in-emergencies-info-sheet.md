# During employment, new document: Workers' Rights in Emergencies — Information Sheet

## Why this document

Third processed item of wave 112 (During employment slot). Off-duty
cannabis use protection, personnel-file inspection, and the right to a
copy of signed employment documents were confirmed already covered. A
"restroom/toilet" hit at the clause level was confirmed a false
positive (an unrelated real-estate water-fixture disclosure document).
The agent confirmed zero prior coverage of Lab. Code § 1139 via both
document-level and clause-level checks, and distinguished it explicitly
from the existing Right to Refuse Hazardous Work document (a different,
safety-standard-violation trigger under Lab. Code §§ 6310-6312) and
the Workplace Violence Prevention Plan document (an employer planning
duty, not an individual refuse/leave right).

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing Lab. Code § 1139(a)(1), (a)(1)(B), (a)(2), (b)(1), (b)(1)(A)-(B),
(b)(1)(M), (b)(2)(A)-(B), (c), (d), (e), and § 2699.3(c)(2)(A):

- **`emergencycond_definitions_emergency_condition`** — the defined
  term "emergency condition," expressly excluding health pandemics.
- **`emergencycond_reasonable_belief_standard`** — the objective
  "reasonable belief the workplace is unsafe" standard.
- **`emergencycond_core_right_refuse_or_leave`** — the core anti-
  retaliation right to refuse to report to or leave an affected
  workplace.
- **`emergencycond_exempt_occupations`** — the thirteen categories of
  employees to whom the core right does not apply.
- **`emergencycond_device_access_right`** — the textually separate
  communications-device access right, extended to public-sector
  employees.
- **`emergencycond_notice_duty`** — the employee's feasibility-based
  notice duty.
- **`emergencycond_duration_limit`** — the statute's own temporal
  limit tied to when the imminent risk has ceased.
- **`emergencycond_paga_enforcement`** — PAGA as the only enforcement
  mechanism the statute's text addresses, and the employer's right to
  cure under § 2699.3.

## Genuine findings

- **A significant correction to the agent's own initial framing**: the
  assignment's own phrasing ("emergency-condition leave") suggested a
  scheduled or approved leave benefit akin to CFRA or HWHFA sick leave.
  Reading the full text showed § 1139 is not a leave-accrual or
  paid-absence statute at all — it has no accrual, no certification
  process, no employer-size or length-of-service eligibility gate, and
  does not require pay for missed time. It is purely an anti-retaliation
  and device-access statute keyed to a specific factual trigger, and
  the drafting intro was corrected to state this plainly rather than
  carrying the "leave law" framing forward.
- **A disclosed, deliberately unresolved cross-reference**: the agent
  traced § 1139(e)'s cross-reference to the PAGA cure statute
  (§ 2699.3) and found it has multiple differently-structured cure
  procedures depending on which Labor Code provision is at issue. Which
  procedure governs a § 1139 claim depends on whether § 1139 is listed
  in § 2699.5 — a question the agent explicitly left open rather than
  assuming an answer, since § 2699.5's own list was not independently
  fetched.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not define "extreme peril," "disaster," "the
affected area," "adverse action," "threaten," or "prevent," does not
independently verify the cross-referenced definitions in Gov. Code
§§ 8562 and 3101, Fin. Code § 1420, or the Health & Safety Code
"qualified insurance resource" provisions, does not specify the form
or recipient of the employee's notice, does not define when an
emergency condition's imminent risk has "ceased," does not confirm
whether § 1139 is listed in § 2699.5 for PAGA cure-procedure purposes,
and does not describe any non-PAGA remedy that may separately be
available.

## Method

Fetched Lab. Code §§ 1139 and 2699.3 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical via the extracted statute-text block.
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
13 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-132ndVerify-EmergencyCondition/1.0") of both
sections — all 13 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The health-pandemic exclusion and the thirteen exempt
categories were both independently reconfirmed present in the freshly
fetched text.

## Verification

- Both Labor Code sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  thirty-second independent fetch during integration review; all 13
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); one
  drafting-clause title ("Acknowledgment of Receipt") collides with a
  generic boilerplate title already reused elsewhere in the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the existing Right to Refuse Hazardous Work and Workplace Violence
  Prevention Plan documents.
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- No new fields required — all four fields (`employeeName`,
  `companyName`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Workers' Rights in Emergencies — Information Sheet
  (`workers_rights_in_emergencies_info_sheet`), 10 clauses (8 authority
  + 2 drafting), in the During employment category. No new fields.
- Corpus: 3,703 → 3,713 clauses; 486 → 487 documents. Third processed
  item of wave 112.
