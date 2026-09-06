# During employment, new document: Emergency Action Plan — Information Sheet

## Why this document

First processed item of wave 130 (During employment slot, 1×4
pattern). The agent ruled out eleven candidates via specific
section-number greps before landing here — the polygraph prohibition
(Lab. Code §432.2), personnel file inspection (Lab. Code §1198.5),
wage/payroll record inspection (Lab. Code §226(b)), blacklisting
(Lab. Code §1050, disambiguated from false-positive substring
collisions in Probate Code §§10450/10501/10404/10580), general
whistleblower protection (Lab. Code §1102.5), off-duty cannabis use
(Gov. Code §12954), non-compete unenforceability (Bus. & Prof. Code
§16600), workers' comp retaliation (Lab. Code §132a), wage-complaint
retaliation (Lab. Code §98.6), indoor heat illness (8 CCR §3396,
already folded into the existing heat-illness document), and
religious dress/grooming (Gov. Code §12926) were all confirmed already
substantively covered. The chosen topic — Cal/OSHA's Emergency Action
Plan regulation (8 CCR §3220) — was confirmed genuinely open: zero
prior corpus hits on §3220 or the phrase "emergency action plan" in
any form before drafting, and it fits alongside the corpus's existing
sibling Cal/OSHA "During employment" documents (IIPP, Hazard
Communication, Bloodborne Pathogens, Noise Exposure, Heat Illness,
Workplace Violence Prevention).

## What this document covers

9 clauses: 2 drafting (declaration/scope, acknowledgment) and 7
authority clauses, citing 8 CCR §3220(a), (b) intro and (b)(1)-(6),
(c)(1)-(2), (d), (e)(1), (e)(2) intro and (A)-(C), (e)(3):

- **`eap_scope_and_written_plan_requirement`** — the scope statement
  and the general written-plan requirement.
- **`eap_required_plan_elements`** — the six minimum required plan
  elements, quoted individually.
- **`eap_alarm_system_requirement`** — the employee alarm system
  requirement and the distinctive-signal rule for multi-purpose
  alarms.
- **`eap_evacuation_types`** — the requirement to establish the types
  of evacuation to be used.
- **`eap_training_and_designation`** — the duty to designate and train
  a sufficient number of evacuation-assist personnel.
- **`eap_employee_notification_timing`** — the three specified times
  employees must be advised of their plan responsibilities.
- **`eap_plan_availability_and_small_employer_exception`** — written-
  plan availability at the workplace, plus the 10-or-fewer-employee
  oral-plan exception.

## Genuine findings

- **A disclosed extraction-method choice to avoid a known artifact
  class**: the agent inspected the raw HTML and found each regulatory
  subsection lives in its own adjacent `<div>` with no whitespace
  between divs (a pattern that has produced run-together-text
  artifacts elsewhere in this project); it deliberately quoted each
  subsection individually rather than across subsection boundaries,
  avoiding the artifact entirely rather than needing to disclose and
  explain it.
- **A disclosed, deliberate choice not to independently fetch a
  cross-referenced standard**: the alarm-system clause's gap
  explicitly discloses that Article 165 (the separate Title 8
  employee-alarm-system standard §3220(c)(1) cross-references) was not
  independently fetched, so no claim is made about what that article
  itself requires.
- **A disclosed textual observation on an undefined counting method**:
  the plan-availability clause's gap notes the regulation's text does
  not state whether the "10 or fewer employees" count is measured
  company-wide or per worksite.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on regulatory text alone.

## Honest gap(s) disclosed

This document does not state which employers or industries are
covered by the underlying duty to have a plan at all (as distinct from
the small-employer exception to the writing requirement), does not
state what, if anything, a plan must contain beyond the six-element
floor, does not independently verify Article 165's alarm-system
content, does not list or define the available "types of evacuation,"
does not specify a numeric ratio for "sufficient number" of trained
evacuation personnel, does not specify a method or deadline for
advising employees of plan changes, and does not state how the
10-or-fewer-employee count is measured.

## Method

Fetched 8 CCR §3220 from www.dir.ca.gov (the same official DIR-hosted
source pattern used by this corpus's existing sibling Cal/OSHA
documents), fetched twice by the research agent with two distinct
User-Agent strings, confirmed byte-identical (10,912 bytes both
times). CourtListener's daily quota was already exhausted (HTTP 429)
on the agent's test call; no case law was used or fabricated. All 17
citation instances programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-eighty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-184thVerify-EmergencyActionPlan/1.0") of the same
source — confirmed the same 10,912-byte size as the agent's fetches,
and all 17 citation instances confirmed clean on direct normalized-
whitespace substring match, with no fallback needed. The scope/
written-plan requirement, all six required plan elements, the alarm-
system rule, the evacuation-type requirement, the training/designation
duty, the three notification timing points, and the plan-availability/
small-employer-exception rule were all independently reconfirmed
present in the freshly fetched text.

## Verification

- The source fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-eighty-fourth
  independent fetch during integration review (identical byte size
  across all three fetches); all 17 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same regulation correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `eap_` prefix has zero collisions. Ran a
  section-number-specific grep for "3220" across the full corpus —
  zero hits outside the new clauses, confirming no disguised overlap.
- Checked every citation's `case` field for emptiness — all 17
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `programAdministratorName`) reused from the existing
  corpus, matching the house style of the existing IIPP, Workplace
  Violence Prevention, and Heat Illness documents.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Emergency Action Plan — Information Sheet
  (`emergency_action_plan_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 4,229 → 4,238 clauses; 538 → 539 documents. First processed
  item of wave 130.
