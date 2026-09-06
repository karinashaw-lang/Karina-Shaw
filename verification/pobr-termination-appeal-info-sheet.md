# Ending employment, new document: Public Safety Officers Procedural Bill of Rights Act (POBR) — Termination and Administrative Appeal Information Sheet

## Why this document

Fourth and final processed item of wave 122 (Ending employment slot).
The agent ruled out three candidates via specific section-number greps
before landing here: Lab. Code §246(g)(1)-(2) (sick leave payout at
termination) was found already fully quoted in the existing
`sickleave_no_payout_at_termination` clause; Gov. Code §12954
(off-duty cannabis termination) was found already fully quoted across
subdivisions inside the existing `wrongful_termination_public_policy_info_sheet`;
and Lab. Code §201.3 (temporary-services-employer final pay) was found
extensively covered (41 hits) by an entire existing document. The
chosen topic — POBR, Gov. Code §§3300-3313, the peace-officer-specific
procedural due-process framework around discipline and dismissal — was
confirmed genuinely open via both a context-scoped and a broad
section-number grep. Personally reconfirmed via corpus search: the
bare numbers 3301/3303/3304/3305/3306/3306.5/3309.5 do appear
elsewhere in the corpus, but exclusively as false positives — Civil
Code §3301 (contract termination damages) and Unemployment Insurance
Code §3301 (Paid Family Leave), both unrelated statutes citing the
same bare section number under a different code.

## What this document covers

11 clauses: 2 drafting (declaration/background, closing/signature) and
9 authority clauses, citing Gov. Code § 3301, § 3303, § 3303(i),
§ 3304(a), § 3304(b), § 3304(d)(1), § 3304(d)(2)(A)-(B), § 3305,
§ 3306, § 3306.5(a)-(b), § 3309.5(c)-(e):

- **`pobrterm_scope_public_safety_officer`** — the statute's own
  cross-reference definition of "public safety officer."
- **`pobrterm_punitive_action_definition`** — the statute's own
  definition of "punitive action," including dismissal.
- **`pobrterm_interrogation_representation_right`** — the right to
  representation during an interrogation likely to result in punitive
  action, and its carve-outs.
- **`pobrterm_no_retaliation_for_exercising_rights`** — the prohibition
  on punitive action for exercising chapter or grievance rights.
- **`pobrterm_administrative_appeal_right`** — the core right to an
  opportunity for administrative appeal before a non-probationary
  officer's dismissal.
- **`pobrterm_one_year_deadline_and_tolling`** — the one-year
  investigation/notice deadline and two of its tolling grounds.
- **`pobrterm_adverse_comment_read_sign_and_response`** — the right to
  read/sign an adverse personnel comment before entry and file a
  30-day written response.
- **`pobrterm_personnel_file_inspection_right`** — the right to inspect
  and seek correction of the personnel file used to decide
  termination or discipline.
- **`pobrterm_enforcement_superior_court_and_civil_penalty`** — the
  superior court's initial jurisdiction, injunctive relief, and the
  $25,000 civil penalty for a malicious violation.

## Genuine findings

- **A disclosed structural note distinguishing this document from
  three existing corpus documents**: the document description
  explicitly states this chapter is distinct from the corpus's general
  Wrongful Termination in Violation of Public Policy, Personnel and
  Payroll Record Retention Duration, and Employee's Request to Inspect
  Personnel and Payroll Records documents, none of which address this
  chapter's peace-officer-specific procedural rights.
- **A disclosed, deliberate choice to quote only a subset of the
  one-year deadline's tolling grounds**: the `pobrterm_one_year_deadline_and_tolling`
  clause's gap explicitly lists the six additional enumerated tolling
  grounds not quoted, rather than presenting the two quoted grounds as
  exhaustive.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone, with three
  clauses explicitly disclosing that a fact-sensitive statutory phrase
  ("likely to result," retaliation causation, "maliciously... with the
  intent to injure") could not be sharpened by case law as a result.

## Honest gap(s) disclosed

This document does not identify which job classifications each
cross-referenced Penal Code section actually covers, does not resolve
the punitive-transfer-versus-operational-reassignment line, does not
define how imminent an interrogation's likely punitive consequence
must be before the representation right attaches, does not state a
causation standard for the anti-retaliation provision, does not extend
the administrative-appeal right to probationary officers or describe
the appeal's procedure/forum, does not quote six of the statute's eight
tolling grounds or its reopening-for-new-evidence exception, does not
state that filing a written response removes or reduces an adverse
comment's weight, does not define "reasonable" intervals for personnel-
file inspection, and does not resolve the "maliciously... with the
intent to injure" standard for the civil penalty.

## Method

Fetched Gov. Code §§3301, 3303, 3304, 3305, 3306, 3306.5, and 3309.5
from leginfo.legislature.ca.gov, each fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical on
extracted statute text (raw HTML had incidental byte-size differences
from dynamic boilerplate). CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 17 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-163rdVerify-POBR/1.0") of all seven sections —
all 17 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered. The public-safety-officer definition, the punitive-action
definition, the interrogation-representation right, the one-year
deadline and its tolling grounds, and the $25,000 civil-penalty
standard were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All seven Government Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-sixty-third independent fetch during integration
  review; all 17 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `pobrterm_` prefix has zero collisions. Independently
  reconfirmed the corpus's apparent prior "3301"/etc. hits are false
  positives from unrelated Civil Code and Unemployment Insurance Code
  sections sharing the same bare number, and reconfirmed the agent's
  three pivot rationales against the corpus.
- Checked every citation's `case` field for emptiness — all 17
  populated with proper citation identifier strings.
- No new fields required — all five fields (`employeeName`,
  `companyName`, `jobTitle`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Public Safety Officers Procedural Bill of Rights Act
  (POBR) — Termination and Administrative Appeal Information Sheet
  (`pobr_termination_appeal_info_sheet`), 11 clauses (9 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 4,014 → 4,025 clauses; 517 → 518 documents. Fourth and final
  processed item of wave 122.

## Wave 122 summary

Wave 122 followed the established 1×4 pattern, targeting During
employment, Ending employment, Family Law, and Real Estate — four of
the six categories tied lowest after wave 121's rotation, chosen to
avoid the categories touched in wave 120 (2 waves back) where possible
and to avoid wave 121's two categories entirely. All four agents ran
careful section-number-specific duplication checks before landing on
genuinely open topics: Hazard Communication Standard (8 CCR §5194,
after pivoting away from a wage-discussion-protection candidate that
would have overlapped an existing clause), License Suspension for
Unpaid Child Support (Fam. Code §17520, after ruling out ten
already-covered candidates), California Real Estate Withholding
(Rev. & Tax. Code §§18662/18668, after ruling out several already-
covered candidates and confirming the one prior corpus mention was a
disclosed non-research note), and POBR Termination and Administrative
Appeal (Gov. Code §§3300-3313, after ruling out three already-covered
candidates via specific section-number greps). This wave was launched
with explicit instructions incorporating the lesson from wave 121's
Wage Deductions duplication finding — check specific statute sections
directly, not just topic names — and all four agents' own duplication
checks held up under independent re-verification, with zero
document-level or clause-level duplicates found during this wave's
integration review (a first since the practice of checking specific
section numbers was formalized). Per the established alternation, wave
123 should return to a 2×2 pattern.
