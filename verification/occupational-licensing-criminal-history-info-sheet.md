# Hiring, new document: Occupational Licensing Eligibility Despite Criminal History — Information Sheet

## Why this document

Second processed item of wave 136 (Hiring slot, 1×4 pattern). The
agent ruled out off-duty cannabis protections, employer blacklisting,
social media password protection, juvenile record sealing (found
irrelevant to hiring on inspection), and a business-license-suspension
statute — all confirmed already covered or a poor fit. The chosen
topic — the general, cross-board framework in Bus. & Prof. Code
§§ 480-484 and § 7.5 governing when any California occupational
licensing board may deny a license based on criminal history — was
confirmed genuinely open: this corpus's existing licensing-specific
documents (private investigator, security guard, farm labor
contractor, public works contractor) each touch § 480 only as an
incidental cross-reference, and one existing clause
(`privinv_licensure_qualifications`) explicitly states that § 480's
grounds-for-denial standards are outside its scope. A duplication
check found several apparent hits on "480," "481," "482," and "484,"
all confirmed false positives — different codes entirely (Rev. & Tax.
Code §§ 480/480.3, Penal Code § 484(a), Educ. Code § 48204) or
substring collisions inside unrelated clause ids and statute numbers
like "1197.5."

## What this document covers

13 clauses: 2 drafting (declaration, certification) and 11 authority
clauses, citing Bus. & Prof. Code § 480(a), (a)(1), (a)(1)(A)-(B),
(a)(2), (b), (c), (d), (f)(1)-(2), (f)(3), § 481(b), § 482(a)-(b),
§ 484, § 7.5(a), (b)(1), (c):

- **`occlic_core_denial_standard`** / **`occlic_formal_discipline_
  ground`** / **`occlic_sevenyear_exceptions`** — the two grounds for
  denial, the seven-year limitation, and its exceptions.
- **`occlic_substantial_relation_criteria`** — the three statutory
  minimum factors every board must use to assess "substantially
  related."
- **`occlic_rehabilitation_pathways`** — the certificate-of-
  rehabilitation, pardon, and board-showing pathways that bar denial.
- **`occlic_dismissed_conviction_protection`** /
  **`occlic_arrest_infraction_juvenile_protection`** — protections for
  dismissed convictions and non-conviction dispositions.
- **`occlic_disclosure_restriction`** — the default bar on requiring
  criminal-history disclosure on the application at all.
- **`occlic_denial_notice_and_appeal_rights`** — the required
  written-notice contents on denial.
- **`occlic_conviction_definition_controls`** — the controlling
  statutory definition of "conviction" and its State Bar exception.
- **`occlic_good_moral_character_prohibition`** — the bar on requiring
  third-party character attestations.

## Genuine findings

- **A disclosed statutory asymmetry, not resolved but named**: the
  dismissed-conviction clause's gap notes the statute's proof-of-
  dismissal obligation is stated only for four of the five listed
  dismissal mechanisms, leaving § 1203.425 dismissals and "comparable"
  expungements without an express matching proof requirement.
- **A disclosed scope boundary between two related subdivisions**: the
  arrest/infraction clause's gap notes subdivision (d) restricts only
  what a board may use as a *basis for denial*, not what a board may
  *ask* on the application — a separate question governed by
  subdivision (f).
- **A disclosed occupation-identification limitation, repeated
  honestly rather than resolved once and reused**: several clauses'
  gaps separately disclose that the document does not independently
  verify which specific occupations fall within the numbered chapters
  the statute cross-references by section-range only.
- **A disclosed, deliberate choice not to incorporate case law found
  but not independently verified**: CourtListener actually returned 84
  results this time (not rate-limited), but the agent chose not to
  cite any of them without completing the same quote-verification
  rigor applied to statutes, and disclosed that choice honestly rather
  than citing unverified case law.

## Honest gap(s) disclosed

This document does not verify Bus. & Prof. Code §§ 726 or 729 (the
physician-misconduct comparator cross-referenced by the older-than-
seven-years exception), does not identify which occupations fall
within the numbered chapters listed in §§ 480(a)(1)(B) and 480(f)(1),
does not restate any specific board's own published substantially-
related or rehabilitation criteria, and does not cite any case law
despite a successful CourtListener search, by deliberate choice
disclosed in the research report.

## Method

Fetched Bus. & Prof. Code §§ 480, 481, 482, 484, and 7.5 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed identical
after whitespace normalization (preserving non-breaking-space
placement after subdivision labels exactly as fetched). CourtListener
returned 84 results on this topic (not rate-limited), but the agent
deliberately did not incorporate any as citations, disclosing that
choice rather than citing unverified case law. All 14 citation
instances were programmatically confirmed by the research agent as
exact, contiguous substrings via string-slicing between verified
anchor pairs rather than hand-typed quotes, catching and fixing two
initial `{{placeholder}}` leaks in gap fields before finalizing.

Independently re-verified during integration review via a two-
hundred-and-seventh fetch (a new distinct curl User-Agent string,
"Groundtruth-207thVerify-OccLicensing/1.0") of all five sections — all
fetched cleanly on the first attempt. All 14 citation instances
confirmed clean on direct normalized-whitespace substring match, with
no fallback needed. The two denial grounds and the seven-year
limitation and its exceptions, the substantially-related criteria, the
rehabilitation pathways, the dismissed-conviction and arrest/
infraction protections, the disclosure restriction and denial-notice
requirements, the controlling "conviction" definition, and the
good-moral-character-attestation bar were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All five cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-
  seventh independent fetch during integration review; all 14 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `occlic_` prefix has zero collisions. Ran section-
  number-specific greps for "480," "481," "482," "484," and "7.5("
  across the full corpus — all apparent hits traced to different codes
  entirely (Rev. & Tax. Code, Penal Code, Educ. Code) or coincidental
  substring matches inside unrelated clause ids and statute numbers;
  zero genuine overlap.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `licensingBoardName` — checked against `boardApprovalDate`,
  `employmentAgencyName`, `localAgencyName`, and
  `respondingAgencyName`, none of which fit. Five other fields
  (`companyName`, `applicantName`, `jobTitle`, `professionType`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Occupational Licensing Eligibility Despite Criminal
  History — Information Sheet
  (`occupational_licensing_criminal_history_info_sheet`), 13 clauses
  (11 authority + 2 drafting), in the Hiring category. One new field:
  `licensingBoardName`.
- Corpus: 4,481 → 4,494 clauses; 561 → 562 documents. Second processed
  item of wave 136.
