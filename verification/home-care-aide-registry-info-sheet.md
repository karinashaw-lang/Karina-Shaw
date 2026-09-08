# Hiring, new document: Home Care Aide Registry — Information Sheet

## Why this document

Fourth and final processed item of wave 140 (Hiring slot, 1×4
pattern, closing the wave). The agent ruled out blacklisting,
Displaced Janitor Opportunity Act, Grocery Worker Retention Law,
no-rehire clauses, captive-audience meetings, cannabis, sub-minimum
wage, prevailing wage, POBRA, domestic workers, and TrustLine — all
confirmed already covered by direct inspection of the actual hits.
The chosen topic — the Home Care Services Consumer Protection Act,
Health & Saf. Code §§ 1796.10-1796.70, governing the Home Care Aide
Registry, home care organization licensing, background checks,
entry-level training, and tuberculosis examination — was confirmed
genuinely open: zero prior corpus hits on any of the seven cited
section numbers or "Home Care Aide Registry."

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority
clauses, citing Health & Saf. Code § 1796.14(b), § 1796.35(a),
§ 1796.19(a)(2), § 1796.43(a) (two citations), § 1796.44(b),
§ 1796.45(a), (e), § 1796.31(a)(1), § 1796.43(a)(3):

- **`hcareg_registry_listing_required`** — the registry-listing
  requirement before an affiliated aide may serve a client.
- **`hcareg_no_unlicensed_arranging`** — the home care organization
  licensing requirement to arrange services.
- **`hcareg_applicant_background_character_review`** — criminal-
  history review as a registration-approval factor.
- **`hcareg_organization_duty_clear_before_contact`** — the
  organization's duty to confirm registry clearance before client
  contact.
- **`hcareg_entry_level_training_before_service`** — the 5-hour
  entry-level training requirement.
- **`hcareg_tuberculosis_exam_condition`** — the TB-exam timing and
  its status as a condition of employment.
- **`hcareg_registration_biennial_renewal`** — the two-year
  registration renewal requirement.
- **`hcareg_notify_department_employment_ends`** — the organization's
  duty to notify the department when an aide's employment ends.

## Genuine findings

- **A disclosed multi-version statute handled via full-chapter
  fetch**: the entry-level-training clause's gap discloses that
  § 1796.44 currently exists in two chaptered versions (the current
  version sunsetting January 1, 2027, and a later version adding a
  dementia-care training topic to the separate annual-training
  requirement), and that because the section's individual leginfo
  page redirects to a version-selection page, the citation URL points
  to the full-chapter display instead — the same established pattern
  used throughout this session for multi-version leginfo sections.
- **A disclosed negative CourtListener finding, not a rate-limit
  workaround**: two searches (one restricted to California courts, one
  unrestricted) returned zero on-point results — the unrestricted
  query's 26,085 hits were all confirmed false positives from
  unrelated "consumer protection" cases — disclosed honestly as a
  genuine absence of case law, consistent with the corpus's other
  pure-regulatory registration documents.
- **A consistently disclosed pattern of partial-subdivision quoting**:
  every authority clause's gap explicitly names the specific
  neighboring subdivisions, paragraphs, or cross-referenced sections
  not quoted or restated, rather than implying comprehensive coverage
  of each cited section.

## Honest gap(s) disclosed

This document does not restate the chapter's exclusions defining who
is not a "home care aide" (§ 1796.14(c)-(d)), does not describe civil-
penalty/enforcement mechanics for unlicensed arranging, does not
restate the substantive disqualifying-conviction standards under
§§ 1522/1522.7 themselves, does not address the parallel pre-contact
clearance duty for non-aide staff or the licensee's discretionary
clearance option, does not describe TB-exam retesting or recordkeeping
details, does not describe renewal-application mechanics, and does
not cite any case law (confirmed genuine absence via two searches).

## Method

Fetched Health & Saf. Code §§ 1796.14, 1796.19, 1796.31, 1796.35,
1796.43, and 1796.45 individually, and § 1796.44 via a full-chapter
fetch (after confirming its individual-section URL redirects to a
multi-version selection page), from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings via curl (one connection reset resolved via retry), confirmed
byte-identical, with a third independent cross-fetch of six individual
sections matching the full-chapter text. Two CourtListener searches
returned zero on-point results — disclosed honestly, no case law used.
All 9 citation instances were programmatically confirmed by the
research agent as exact, contiguous substrings, checked twice
(against draft strings and again against the final delivered file).

Independently re-verified during integration review via a two-
hundred-and-twenty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-225thVerify-HomeCareAideRegistry/1.0") of all
seven sections (six individually, § 1796.44 via the same full-chapter
approach) — all fetched cleanly on the first attempt. All 9 citation
instances confirmed clean on direct normalized-whitespace substring
match. The registry-listing requirement, the licensing requirement,
the background-check factor, the pre-contact clearance duty, the
entry-level training requirement, the TB-exam timing and condition-
of-employment status, the biennial renewal requirement, and the
employment-end notification duty were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All seven cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-fifth independent fetch during integration
  review; all 9 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `hcareg_` prefix has zero collisions. Ran section-
  number-specific greps for all seven sections and "Home Care Aide
  Registry" — zero hits on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all four fields (`companyName`,
  `jobTitle`, `applicantName`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Home Care Aide Registry — Information Sheet
  (`home_care_aide_registry_info_sheet`), 10 clauses (8 authority + 2
  drafting), in the Hiring category. No new fields.
- Corpus: 4,658 → 4,668 clauses; 579 → 580 documents. Fourth and
  final processed item of wave 140.

## Wave 140 summary

Wave 140 used a 1×4 rotation pattern (one document each in Real
Estate, Estate Planning, Confidentiality & IP, and Hiring), targeting
the two tied-lowest categories after wave 139 closed (Hiring, Estate
Planning) plus the two least-recently-touched categories among the
four tied one tier up (Real Estate, Confidentiality & IP). This wave
was interrupted twice by container restarts — once losing all four
in-progress agents before any research began (recovered with no
corpus loss, since nothing had yet merged), and once mid-integration
of the Boundary Trees document (recovered cleanly, since the merge
had already been written to disk before the restart).

1. **Boundary Trees — Information Sheet** (Real Estate) — 8 clauses,
   Civ. Code §§ 833, 834, 3346, Booska v. Patel.
2. **Life Estate Deed — Information Sheet** (Estate Planning) — 10
   clauses, Civ. Code §§ 761, 765, 818, 840, 1105, Rev. & Tax. Code
   § 62(e), Prob. Code § 210, Sallee v. Daneri.
3. **Employee Wage and Working Conditions Disclosure Rights (Labor
   Code §§ 232, 232.5) — Information Sheet** (Confidentiality & IP) —
   8 clauses, Lab. Code §§ 232, 232.5, Grant-Burton v. Covenant Care.
4. **Home Care Aide Registry — Information Sheet** (Hiring) — 10
   clauses, Health & Saf. Code §§ 1796.14, 1796.19, 1796.31, 1796.35,
   1796.43, 1796.44, 1796.45.

Corpus totals across the wave: 4,632 → 4,668 clauses (+36 net across
four documents: 8 + 10 + 8 + 10); 576 → 580 documents (+4). No
genuine duplication findings required excluding any delivered clause
this wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be a false-positive cross-code
collision, an incidental non-substantive mention, or a legitimate,
already-disclosed distinction from a different statute covering
related subject matter (Lab. Code § 1197.5's separate wage-discussion
protection).
