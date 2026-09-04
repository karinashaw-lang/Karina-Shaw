# Confidentiality & IP, new document: Confidentiality of Medical Information Act — Employer Obligations — Information Sheet

## Why this document

Third document of wave 85. Grepped the corpus for "Confidentiality of
Medical Information," "Civil Code section 56," "§ 56," and "CMIA" and
found exactly two pre-existing hits: the `accommodation_confidentiality`
clause (ADA's federal confidentiality duty, 42 U.S.C. § 12112(d)) and
the `hipaa_auth_ca_state_law_note` clause (Civ. Code § 56.10, the
general health-care-provider-to-patient disclosure rule in a patient-
authorization document with no employer angle). Confirmed neither
touches Civil Code §§ 56.20-56.245 (the CMIA's employer chapter) or
§ 56.36 (penalties/private right of action). Confirmed non-duplicative.

## What this document covers

7 clauses: 2 drafting (handling record, signature block) and 5
authority clauses, citing Cal. Civ. Code §§ 56.20(a)-(c), 56.20(c)(3),
and 56.36(b)(1), (c)(1), (c)(2)(A):

- **`cmia_employer_confidentiality_procedures`** (§ 56.20(a)) — the
  employer's duty to establish appropriate confidentiality procedures
  for medical information it receives.
- **`cmia_employer_disclosure_restriction`** (§ 56.20(c)) — the core
  restriction: no employer use, disclosure, or knowing permission to
  use/disclose employee medical information without a signed
  authorization, except as listed.
- **`cmia_employer_benefits_administration_exception`** (§ 56.20(c)(3))
  — the exception permitting authorization-free use for administering
  benefit plans (health care, disability income, workers' comp,
  medical-leave eligibility).
- **`cmia_employer_no_retaliation_for_refusal`** (§ 56.20(b)) — the
  rule against discriminating against an employee for refusing to sign
  an authorization.
- **`cmia_civil_penalty_private_right_of_action`** (§ 56.36(b)(1),
  (c)(1), (c)(2)(A)) — the private right of action (nominal $1,000
  damages plus actual damages) and the two escalating civil-penalty
  tiers ($2,500 negligent, $25,000 knowing-and-willful).

## Genuine corrections and findings

- **A correction to the task's own research brief**: the brief assumed
  the employer chapter runs "§ 56.20 and §§ 56.245-56.246." The agent
  independently confirmed, from the chapter's own table-of-contents
  header, that the correct range is §§ 56.20-56.245 — there is no
  § 56.246, and § 56.245 (the chapter's last section) governs
  re-disclosure by a recipient of employer-disclosed information, not
  a penalty provision. No clause cites a non-existent § 56.246.
- **A genuine finding, honestly disclosed rather than assumed**: the
  employer chapter's text speaks only of "employees," never
  "applicant" — the document does not claim applicant coverage, and
  two clauses' gap fields flag this explicitly rather than assuming
  the broader FEHA-style applicant/employee parity used elsewhere in
  the corpus.
- **A second genuine finding**: unlike the ADA's parallel confidentiality
  duty already in this corpus (which requires separate forms and a
  separate file), § 56.20(a) requires only "appropriate procedures" —
  no explicit separate-file mandate. The document states this
  accurately rather than assuming the ADA's stricter mechanics apply
  here too, and correctly declines to draft a "separate file" clause
  since the statute's own text does not impose one.
- Correctly disclosed that § 56.36 is a general remedies section
  reaching any violation of "this part" (the whole CMIA), not an
  employer-specific penalty provision by its own terms — it applies to
  § 56.20 violations only because § 56.20 sits within that same part.

## Honest gap(s) disclosed

The other three § 56.20(c) authorization exceptions (compelled
disclosure, litigation-relevant information, and treatment-related
disclosure when the patient cannot authorize) are not restated.
§ 56.20(d)'s voluntary-narrowing-by-policy provision, §§ 56.21-56.24's
authorization/copy/cancellation mechanics, and § 56.245's recipient
re-disclosure rule are not covered. § 56.36's higher financial-gain
penalty tier (up to $250,000), its assessment-factors list, and its
HIPAA-compliance affirmative defense are not restated. This document
does not evaluate whether any specific employer use or disclosure
would actually violate the Act.

## Method

Fetched Cal. Civ. Code §§ 56.20 and 56.36 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 7 citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a thirtieth fetch (a distinct curl User-Agent string,
"Groundtruth-30thVerify-CMIA/1.0") of both sections — all 7 quotes
confirmed clean.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a thirtieth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Signature Block") matches the established
  boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 7
  populated with proper case/citation identifier strings.
- No new fields required — all four fields (`companyName`,
  `employeeName`, `dateSigned`, `cityState`) reused from the existing
  corpus (190, 131, 161, and 139 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Confidentiality of Medical Information Act — Employer
  Obligations — Information Sheet
  (`cmia_employer_medical_information_confidentiality_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Confidentiality & IP
  category. No new fields.
- Corpus: 2,924 → 2,931 clauses; 385 → 386 documents. Third addition of
  wave 85.
