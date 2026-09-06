# During employment, new document: Civil Air Patrol Leave — Information Sheet

## Why this document

Fourth and final processed item of wave 136 (During employment slot,
1×4 pattern, closing the wave). The agent ruled out personnel-file
inspection, CROWN Act, CalSavers, off-duty cannabis, wage-garnishment
discharge protection, wage-discussion protection, Equal Pay Act,
polygraph, no-rehire clauses, yellow-dog contracts, religious dress
accommodation, and vacation/PTO vesting — all confirmed already
covered. A mandatory-overtime-for-nurses candidate was abandoned after
a double-fetch of the suspected statute (Lab. Code § 518) returned an
empty section on both fetches, rather than reconstructing it from
memory. The chosen topic — the Civil Air Patrol Employment Protection
Act, Lab. Code §§ 1500-1507 — was confirmed genuinely open: zero prior
corpus hits on "Civil Air Patrol" and zero hits on §§ 1504, 1506, or
1507; the apparent hits on §§ 1500-1503 and 1505 all traced to
unrelated Probate Code, Corp. Code, and Unclaimed Property Law
sections sharing bare numbers, plus one legitimate, already-disclosed
cross-reference (an existing organ-donor-leave clause notes its own
statute borrows §1501's defined terms without restating them).

## What this document covers

12 clauses: 3 drafting (intro, leave-request notice, acknowledgment)
and 9 authority clauses, citing Lab. Code § 1501(a)-(d), § 1502,
§ 1503(a)(1)-(2), (b)(1)-(2), (c)-(d), § 1504(a)-(b), § 1505(a)-(d),
§ 1506(a)-(b), § 1507(a)-(b):

- **`capleave_definitions`** — the four key definitions, including the
  15-employee threshold and 90-day tenure requirement.
- **`capleave_leave_entitlement`** — the 10-day annual entitlement,
  3-day per-mission cap, and first-responder exception.
- **`capleave_notice_certification`** — the notice and Civil Air
  Patrol certification requirements.
- **`capleave_no_forced_exhaustion_unpaid`** — the unpaid default and
  the bar on forcing exhaustion of other leave.
- **`capleave_antidiscrimination_membership`** — the prohibition on
  discrimination based on Civil Air Patrol membership.
- **`capleave_reinstatement_rights`** — the reinstatement duty and
  benefits-continuation negotiation option.
- **`capleave_benefits_continuity`** — no loss of previously accrued
  benefits, and interaction with collective bargaining agreements.
- **`capleave_retaliation_prohibited`** — the anti-interference and
  anti-retaliation provisions.
- **`capleave_enforcement_civil_action`** — the sole enforcement
  mechanism: a private civil action for injunctive/equitable relief.

## Genuine findings

- **A disclosed structural contrast with the corpus's existing
  volunteer-responder document**: the enforcement clause's gap
  explicitly contrasts this statute's lack of any Labor Commissioner
  complaint route or misdemeanor penalty against the §230.3/230.4
  document's §98.7 complaint procedure and misdemeanor penalty for a
  willful refusal to reinstate — a genuine structural difference
  between two similar-seeming leave statutes.
- **A disclosed double-approval ambiguity**: the leave-entitlement
  clause's gap notes the three-day per-mission cap can only be
  extended if both the authorizing agency and the employer approve,
  and the statute does not state what happens if only one does.
- **A disclosed dated anti-diminishment boundary**: the benefits-
  continuity clause's gap notes § 1505(c)'s anti-diminishment
  protection applies only to agreements entered on or after January
  1, 2010, with the statute silent on earlier agreements.
- **A disclosed negative CourtListener result, not a rate-limit
  workaround**: two CourtListener searches for this statute both
  succeeded (no 429) but returned zero results — disclosed as a
  genuine absence of published case law construing this part, not
  papered over.
- **Two disclosed mid-sentence line-wrap artifacts**, verified
  identical across both independent fetches and preserved exactly in
  the quotes rather than silently normalized (§1503(a)(2) and
  §1505(d)).

## Honest gap(s) disclosed

This document does not define "first responder" or "disaster service
worker" for the §1503(a)(2) exception, does not state how "more than
15 employees" is counted, does not address wage-replacement programs
during the unpaid leave, does not state what limitations period
applies to a §1506 civil action (the statute itself states none), and
does not determine that any specific reduction in hours or employment
action complies with or violates the statute.

## Method

Fetched Lab. Code §§ 1501-1507 (7 sections) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical after whitespace normalization. Two CourtListener searches
for this statute both succeeded but returned zero results — disclosed
as a genuine absence of case law, not a quota exhaustion. All 9
citation instances were programmatically confirmed by the research
agent as exact, contiguous substrings via string-slicing between
verified anchor pairs, then independently re-verified against both
raw fetched sources in a separate pass.

Independently re-verified during integration review via a two-
hundred-and-ninth fetch (a new distinct curl User-Agent string,
"Groundtruth-209thVerify-CivilAirPatrol/1.0") of all seven sections —
all fetched cleanly on the first attempt. All 9 citation instances
confirmed clean on direct normalized-whitespace substring match,
including the two disclosed line-wrap artifacts. The definitions, the
leave entitlement and its cap/exception, the notice and certification
requirements, the no-forced-exhaustion and unpaid-default rules, the
anti-discrimination provision, the reinstatement duty, the benefits-
continuity and collective-bargaining rules, the anti-retaliation
provisions, and the civil-action enforcement mechanism were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All seven cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-ninth
  independent fetch during integration review; all 9 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `capleave_` prefix has zero collisions. Ran section-
  number-specific greps for "1500" through "1507" and "Civil Air
  Patrol" across the full corpus — zero hits on §§ 1504, 1506, 1507,
  and the phrase; all other apparent hits traced to unrelated Probate
  Code, Corp. Code, and Unclaimed Property Law sections, plus one
  legitimate existing cross-reference already disclosed by an
  unrelated organ-donor-leave clause.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all nine fields (`employeeName`,
  `companyName`, `respondingAgencyName`, `startDate`, `employeeCount`,
  `serviceStartDate`, `serviceEndDate`, `dateSigned`, `cityState`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Civil Air Patrol Leave — Information Sheet
  (`civil_air_patrol_leave_info_sheet`), 12 clauses (9 authority + 3
  drafting), in the During employment category. No new fields.
- Corpus: 4,505 → 4,517 clauses; 563 → 564 documents. Fourth and final
  processed item of wave 136.

## Wave 136 summary

Wave 136 used a 1×4 rotation pattern (one document each in Family Law,
Hiring, Estate Planning, and During employment), targeting the four
tied-lowest categories after wave 135 closed:

1. **Court-Appointed Child Custody Evaluations — Information Sheet**
   (Family Law) — 12 clauses, Fam. Code Chapter 6 (§§ 3110-3118).
2. **Occupational Licensing Eligibility Despite Criminal History —
   Information Sheet** (Hiring) — 13 clauses, Bus. & Prof. Code
   §§ 480-484, 7.5.
3. **Contracts Regarding Wills — Information Sheet** (Estate
   Planning) — 11 clauses, Prob. Code § 21700, CCP § 366.3.
4. **Civil Air Patrol Leave — Information Sheet** (During
   employment) — 12 clauses, Lab. Code §§ 1500-1507.

Corpus totals across the wave: 4,481 → 4,517 clauses (+36 net from
this wave's starting point after wave 135's close at 4,469 — the wave
added 48 clauses across its four documents: 12 + 13 + 11 + 12); 560 →
564 documents (+4). No genuine duplication findings required excluding
any delivered clause this wave — every apparent grep hit across all
four documents was confirmed, on direct inspection, to be either a
false-positive cross-code collision, a coincidental substring match,
or a legitimate, already-disclosed non-duplicative cross-reference.
