# Hiring, new document: DMV Employer Pull Notice Program — Information Sheet

## Why this document

Third document of wave 87. Grepped the corpus for "pull notice,"
"1808.1," "DMV," "employer pull notice," "EPN," "driving record," and
"commercial driver" — zero hits anywhere. The only "Vehicle Code" hits
were unrelated smoking-regulation clauses citing VC §§ 410/655 for
workplace no-smoking rules. Confirmed no existing document or clause
touches the Pull Notice Program. Confirmed a real, non-duplicative
gap.

## What this document covers

7 clauses: 2 drafting (scope statement, acknowledgment) and 5
authority clauses, citing Cal. Veh. Code § 1808.1(a), (b), (c), (d),
(k):

- **`epnp_program_mechanism`** (§ 1808.1(b)) — what the "pull-notice
  system" is and what "participation" means (obtaining a requester
  code and enrolling covered drivers).
- **`epnp_covered_vehicles`** (§ 1808.1(k)) — which vehicles/license
  classes/certificates trigger the participation requirement.
- **`epnp_prehire_report`** (§ 1808.1(a)) — the pre-hire driving-record
  report requirement and its 30-day currency rule.
- **`epnp_periodic_report`** (§ 1808.1(c)) — the at-least-every-12-
  months periodic report and what the employer must verify from it.
- **`epnp_termination_notice`** (§ 1808.1(d)) — the duty to notify the
  DMV to discontinue enrollment when employment ends.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  suggested Vehicle Code § 13369 as an employer mandatory-enrollment
  trigger. The agent independently fetched and reviewed § 13369 and
  confirmed it is not an enrollment-trigger statute at all — it sets
  the DMV's own criteria for refusing, suspending, or revoking
  specified driver certificates and endorsements based on a driving
  record, with no employer pull-notice obligation. Correctly omitted
  from the citations rather than cited on the mistaken premise.
- Also fetched and reviewed Vehicle Code § 12804.6 and confirmed it
  connects to the pull-notice system (a transit busdriver's certificate
  status becomes part of the pull-notice/periodic reports) but does
  not itself impose or expand an enrollment duty — correctly discussed
  in the gap field rather than cited as an independent trigger.
- **An honestly disclosed research finding**: the fetched text of
  § 1808.1, in its entirety, contains no employee consent or notice
  requirement before enrollment or before obtaining driving-record
  reports. This absence is reported explicitly as a finding about this
  one statute's text — not framed as a broader claim that no such
  requirement exists anywhere in California or federal law, since that
  broader question was not researched.

## Honest gap(s) disclosed

Subdivision (k)'s cross-referenced license/certificate provisions
(Vehicle Code §§ 15278, 12814.7, 12517, 12519, 12520, 12523, 12523.5,
12527, Gov. Code § 53075.5) are named but not independently fetched or
verified. Subdivision (j)'s "casual driver" rule and subdivision (m)'s
motor-carrier-contractor extension are named but not covered. The
enrollment fee provision (subdivision (h)), the department's requester-
code procedures, and the automatic-delivery option for periodic
reports (subdivision (i)) are not covered. This document does not
determine whether any specific position falls within the statute's
scope, which depends on the vehicle and license class or certificate
the position requires.

## Method

Fetched Cal. Veh. Code § 1808.1 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization
(WebFetch was blocked for this domain, curl fallback used throughout).
All 5 citation quotes across the 5 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a
thirty-eighth fetch (a distinct curl User-Agent string,
"Groundtruth-38thVerify-EPNP/1.0") — all 5 quotes confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a thirty-eighth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered (all five citations are
  subdivisions of § 1808.1, correctly disclosed as such).
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("About This Information Sheet,"
  "Acknowledgment") match the established boilerplate-title reuse
  pattern.
- Checked every citation's `case` field for emptiness — all 5
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `jobTitle`, `startDate`) reused from the existing
  corpus (195, 135, 19, and 15 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: DMV Employer Pull Notice Program — Information Sheet
  (`dmv_employer_pull_notice_program_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 2,984 → 2,991 clauses; 393 → 394 documents. Third addition of
  wave 87.
