# During employment, new document: Volunteer Emergency Responder Leave — Information Sheet

## Why this document

First processed item of wave 133 (During employment slot, 2×2 pattern,
targeting the four tied-lowest categories — Hiring, During employment,
Estate Planning, Family Law — with During employment and Family Law
chosen as the two least-recently-touched by document-array position).
The agent ruled out personnel-file inspection (Lab. Code § 1198.5),
polygraph prohibition (§ 432.2), credit-report restrictions (§ 1024.5),
social media password protection (§§ 980-981), wage retaliation
(§ 98.6), religious accommodation, and USERRA military leave — all
confirmed already substantively covered by existing clause families.
The chosen topic — California's two distinct job protections for
volunteer firefighters, reserve peace officers, and emergency rescue
personnel under Labor Code §§ 230.3 and 230.4 — was confirmed
genuinely open: zero prior corpus hits on "230.3," "230.4," "50952,"
or "1799.107" before drafting.

## What this document covers

12 clauses: 4 drafting (intro, emergency-duty notice, training-leave
request, signature) and 8 authority clauses, citing Lab. Code
§ 230.3(a), (b), (c)(1)-(2), (d)(1)-(2), § 230.4(a)-(c), § 98.7(a)(1),
and Gov. Code § 50952(p):

- **`volresponderlv_covered_roles_definitions`** — the "volunteer
  firefighter," "emergency rescue personnel," and "health care
  provider" definitions.
- **`volresponderlv_emergency_duty_protection`** — the size-independent
  § 230.3(a) protection against discharge/discrimination for emergency
  duty absence.
- **`volresponderlv_health_care_provider_notice_duty`** — the
  health-care-provider-specific notice duty.
- **`volresponderlv_public_safety_employer_exception`** — the § 230.3
  carve-out for public safety/EMS employers.
- **`volresponderlv_emergency_duty_remedies`** — reinstatement,
  reimbursement, and the misdemeanor penalty for willful refusal.
- **`volresponderlv_training_leave_right`** — the 50+-employee,
  14-day/year training-leave right under § 230.4(a).
- **`volresponderlv_training_leave_remedies`** — the § 230.4(b) remedy,
  which lacks the § 230.3(b) misdemeanor penalty.
- **`volresponderlv_complaint_procedure`** — the § 230.4(c)
  cross-reference to the § 98.7 Labor Commissioner complaint process
  and its one-year filing deadline.

## Genuine findings

- **A disclosed, deliberate scope limitation on the complaint
  procedure**: the complaint-procedure clause's gap explicitly notes
  that § 230.4(c) cross-references § 98.7 by its own text, while
  § 230.3 contains no equivalent cross-reference — so the document does
  not assert that the § 98.7 procedure applies to an emergency-duty
  (§ 230.3) violation, only to a training-leave (§ 230.4) violation.
- **A disclosed asymmetry between the two remedy provisions**: the
  training-leave-remedies clause's gap notes that § 230.4(b), unlike
  § 230.3(b), contains no misdemeanor penalty for an employer's willful
  refusal to reinstate.
- **A disclosed, unresolved cross-reference**: the definitions clause's
  gap discloses that Health & Safety Code § 1799.107 (defining
  "emergency services," cross-referenced by § 230.3(d)(2)) was not
  independently fetched or verified.
- **A disclosed statutory silence on employer-size counting**: the
  training-leave-right clause's gap notes the statute does not define
  how "50 or more employees" is counted (part-time staff, affiliated
  entities, rolling headcount).
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not verify Health & Safety Code § 1799.107's
definition of "emergency services," does not state how "50 or more
employees" is counted for § 230.4 eligibility, does not assert whether
either leave must be paid, does not describe the § 98.7 complaint
procedure's investigation/hearing/appeal mechanics beyond the one-year
filing deadline, and does not extend the § 98.7 complaint route to a
§ 230.3 emergency-duty violation absent an express statutory
cross-reference.

## Method

Fetched Lab. Code § 230.3, § 230.4, § 98.7, and Gov. Code § 50952 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via raw curl through the
pre-configured proxy, confirmed byte-identical after normalizing the
JSF ViewState token and debug-output timestamp. One transient
connection reset was resolved via retry-with-backoff. CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 10 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings of the fetched source text.

Independently re-verified during integration review via a
one-hundred-and-ninety-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-194thVerify-VolResponderLeave/1.0") of all four
sections — all fetched cleanly on the first attempt. All 10 citation
instances confirmed clean on direct normalized-whitespace substring
match, with no fallback needed. The covered-roles definitions, the
emergency-duty protection and its public-safety exception, the
health-care-provider notice duty, the emergency-duty remedies, the
training-leave right and its remedy, and the § 98.7 complaint
cross-reference were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All four cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a
  one-hundred-and-ninety-fourth independent fetch during integration
  review; all 10 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `volresponderlv_` prefix has zero collisions. Ran
  section-number-specific greps for "230.3," "230.4," "98.7," "50952,"
  and "1799.107" across the full corpus — "98.7" returned 17 hits, all
  traced to § 98.7's role as a general-purpose Labor Commissioner
  complaint procedure cross-referenced by many unrelated existing
  clauses (e.g. wage retaliation), consistent with the new clause's own
  disclosure that § 98.7 is a general mechanism, not specific to this
  topic; zero hits on the other four section numbers.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `respondingAgencyName` — checked against `employerName`,
  `employmentAgencyName`, `incumbentEmployerName`, and
  `localAgencyName`, none of which fit. Seven other fields
  (`employeeName`, `companyName`, `serviceStartDate`, `serviceEndDate`,
  `employeeCount`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Volunteer Emergency Responder Leave — Information
  Sheet (`volunteer_emergency_responder_leave_info_sheet`), 12 clauses
  (8 authority + 4 drafting), in the During employment category. One
  new field: `respondingAgencyName`.
- Corpus: 4,332 → 4,344 clauses; 548 → 549 documents. First processed
  item of wave 133.
