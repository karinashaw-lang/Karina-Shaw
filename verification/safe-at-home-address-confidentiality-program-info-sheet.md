# Family Law, new document: Safe at Home Address Confidentiality Program — Information Sheet

## Why this document

Fourth and final processed item of wave 100 (Family Law slot). A
scoping pass confirmed zero prior coverage of California's Secretary-
of-State-administered address confidentiality program, distinct from
this corpus's existing DVRO, civil harassment, elder abuse restraining
order, and ATROS documents — all of which are court proceedings against
a named respondent, while Safe at Home is an administrative enrollment
program naming no respondent.

## What this document covers

8 clauses: 2 drafting (intro/distinction, acknowledgment) and 6
authority clauses, citing Government Code §§ 6205(a), 6206(a), (a)(1)(A),
(d), 6207(a)-(b), 6208, 6209.7(b)(1), 6215(b), 6215.1(c), and 6215.2(d),
(f):

- **`safeathome_chapter31_eligibility_categories`** — Chapter 3.1's six
  eligibility categories and the sworn-statement requirement.
- **`safeathome_chapter32_eligibility_categories`** — the separately
  enacted Chapter 3.2 covering health-care and public-entity-worker
  applicants.
- **`safeathome_application_process`** — the in-person application,
  counselor orientation, and four-year certification.
- **`safeathome_agency_use_of_substitute_address`** — the state/local
  agency substitute-address acceptance rule and its vital-records
  carve-out.
- **`safeathome_confidentiality_and_disclosure_limits`** — the Secretary
  of State's disclosure restrictions and the rebuttable presumption
  against discovery of a participant's location.
- **`safeathome_fees_and_duration_differ_by_chapter`** — the fee and
  certification-length differences between the two chapters.

## Genuine findings

- **A significant correction/expansion of the research brief's assumed
  scope**: the brief described four eligibility categories under the
  core chapter; the agent found Chapter 3.1 actually lists six —
  domestic violence, sexual assault, stalking, human trafficking, child
  abduction, and elder/dependent adult abuse — with the last two omitted
  from the brief's framing.
- **A corrected structural assumption**: the brief treated reproductive-
  health and "election worker" eligibility as part of the same chapter
  as domestic violence. The agent found these actually live in a wholly
  separate chapter (§§ 6215-6216.6), and that "election workers" is not
  its own defined category but one illustrative example under a much
  broader public-entity-worker basis that also covers public health
  officers, school board members, and code enforcement officers.
- **A significant, very recent statutory finding**: Chapter 3.2's health-
  care-provider eligibility was broadened by a 2025 amendment (Stats.
  2025, Ch. 679) to include gender-affirming health care, not just
  reproductive care — a scope the brief's "reproductive health care"
  framing would have understated.
- **A disclosed, genuinely programmatic difference the brief didn't
  flag**: Chapter 3.2 charges an application/annual fee (with a patient
  exemption); Chapter 3.1 does not — disclosed as an inference from the
  absence of fee language in § 6206 rather than an affirmative
  statutory "no fee" statement.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's single
  lightweight test call; the confidentiality/disclosure clause proceeds
  statute-only, disclosed explicitly.

## Honest gap(s) disclosed

This document does not resolve whether a specific applicant's facts
satisfy any eligibility category — that determination is the Secretary
of State's on the application. It does not restate the Vehicle Code
DMV-record-suppression provisions or Chapter 3.2's parallel
agency-acceptance rule (§ 6215.5) in full. It does not restate the full
rebuttal standard or custody/visitation provisions in § 6209.7(a) and
(c). It does not state the actual current dollar amount of any Chapter
3.2 fee, which the statute leaves to the Secretary of State to set
administratively. It does not describe any other state's address
confidentiality program.

## Method

Fetched Government Code §§ 6205, 6206, 6207, 6208, 6209.7, 6215,
6215.1, and 6215.2 from `leginfo.legislature.ca.gov`, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical on the extracted statutory-text content after
whitespace normalization. CourtListener's daily rate limit was already
exhausted on a single lightweight test call; no case law was used, a
disclosed and legitimate choice. All 12 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
ninety-first fetch (a new distinct curl User-Agent string,
"Groundtruth-91stVerify-SafeAtHome/1.0") of all eight sections — all 12
citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All eight Government Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a ninety-first
  independent fetch during integration review; all 12 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — every clause citing two
  subdivisions correctly discloses whether they are the same section
  (single-section citation) or two different sections (not independent
  corroboration of each other); correct as delivered throughout.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either). Confirmed via cross-document review that this
  document does not duplicate the existing DVRO, civil harassment, elder
  abuse restraining order, or ATROS documents — all of which are
  court-ordered proceedings against a named respondent, unlike this
  administrative, no-respondent program.
- Checked every citation's `case` field for emptiness — all 12 populated
  with proper citation identifier strings.
- One new field required: `eligibilityCategory` (confirmed genuinely new
  via a corpus-wide field-id lookup before adding); the other three
  fields (`applicantName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Safe at Home Address Confidentiality Program —
  Information Sheet
  (`safe_at_home_address_confidentiality_program_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Family Law category. One
  new field: `eligibilityCategory`.
- Corpus: 3,357 → 3,365 clauses; 445 → 446 documents. Fourth and final
  processed item of wave 100.

## Wave 100 summary

Wave 100 followed the established 1×4 pattern, targeting four of the
six categories tied at the corpus's then-lowest count: Business
Formation, Estate Planning, Real Estate, and Family Law (the other two
tied categories, Hiring and Ending employment, were left for a future
wave). A scoping pass proposed one top-pick topic per category, and a
pre-launch duplication check caught that the Business Formation top
pick (worker classification/ABC test) already existed in the corpus
under a different category — a genuine catch that avoided wasting a
full research-agent cycle, and a reminder that category-scoped
duplication checks alone are insufficient; a cross-category keyword
search is also needed and was added to this wave's process. All four
completed documents (Caregiver's Authorization Affidavit, California
Escrow Law, Commercial Financing Disclosure Law, and this Safe at Home
sheet) were built statute-only after each research agent's own
lightweight CourtListener test call found the daily 125-request quota
still exhausted, consistent with wave 99's established adaptation. Each
nonetheless surfaced genuine findings through close statutory reading
alone: a corrected immunization-supersession assumption plus a
just-effective amendment (Caregiver's Authorization Affidavit), a
corrected exemption-scope oversimplification (California Escrow Law), a
corrected/expanded section range with a very recent legislative
amendment (Commercial Financing Disclosure Law), and a corrected
eligibility-category count plus a separate, recently-broadened chapter
the brief had conflated with the wrong one (Safe at Home). Per the
established alternation, wave 101 should return to a 2×2 pattern.
