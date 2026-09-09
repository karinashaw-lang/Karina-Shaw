# Hiring, new document: Peace Officer Hiring Qualifications and Disqualifications — Information Sheet

## Why this document

Wave 147 (Hiring slot; wave 147 returns to the Hiring/During
employment/Estate Planning/Family Law group after wave 146 covered the
other four categories). A scoping pass of the existing ~76 Hiring
documents in `data/documents.json` confirmed no prior coverage of
statutory minimum qualifications or disqualifications for peace officer
employment specifically. The corpus's existing background-check
documents (Live Scan / DOJ Fingerprint Background Check, Background
Check Disclosure & Authorization, Physical Ability / Agility
Pre-Employment Testing) address background-check procedure and
FEHA/ADA/Title VII testing standards generally, not the peace-officer-
specific statutory minimum-qualification and disqualification framework
in Government Code sections 1029, 1031, and 1031.1. Also checked and
ruled out as already covered: off-duty cannabis-use hiring protections
(already inside `drug_testing_info_sheet`), noncompete notification
(already covered by `noncompete_void_notification_info_sheet`), and
no-rehire settlement clauses (already covered by
`no_rehire_clause_restriction_info_sheet`).

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing Penal Code § 830 and Government Code §§ 1029(a) & (a)(1),
1029(a)(10)-(11), 1031(a)-(d), 1031(e), 1031(f) & (f)(1)-(2), 1031(h),
1031.1(a), and 1031.1(b):

- **`peaceofficer_definition`** — Penal Code § 830's confinement of
  "peace officer" status to positions listed in the Penal Code.
- **`peaceofficer_minimum_standards_core`** — Gov. Code § 1031(a)-(d):
  work authorization, minimum age, fingerprinting, and background
  investigation for good moral character.
- **`peaceofficer_education_standard`** — Gov. Code § 1031(e): the
  high-school-graduation/equivalency/degree standard.
- **`peaceofficer_medical_psych_standard`** — Gov. Code § 1031(f):
  the physical/emotional/mental-condition standard and who must
  evaluate it.
- **`peaceofficer_federal_law_consistency`** — Gov. Code § 1031(h):
  consistency with federal law and the 8 C.F.R. § 274a.2 cross-reference.
- **`peaceofficer_felony_disqualification`** — Gov. Code § 1029(a) &
  (a)(1): the felony-conviction disqualification.
- **`peaceofficer_decertification_disqualification`** — Gov. Code
  § 1029(a)(10)-(11): disqualification based on revoked/surrendered/
  denied POST certification or National Decertification Index listing.
- **`peaceofficer_background_disclosure_duty`** — Gov. Code
  § 1031.1(a)-(b): a former employer's conditional duty to disclose
  employment information to a requesting law enforcement agency, and
  the accompanying civil-liability immunity absent fraud or malice.

## Method

Fetched Government Code §§ 1029, 1031, and 1031.1, and Penal Code § 830,
each directly from `leginfo.legislature.ca.gov` via `curl` through the
environment's proxy, independently **twice** with two distinct
User-Agent strings ("Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Groundtruth-Research/1.0" and "curl/8.5.0 Groundtruth-Verify-Secondary"
for the first pair, plus a third confirmation pass during integration
review using "Groundtruth-IntegrationReview-PeaceOfficer/1.0
(+verify)"). For each section, the HTML `codeLawSectionNoHead` div was
extracted, tags stripped, and the two (and for the final check, three)
independent fetches compared: the statutory text was byte-identical
across fetches in every case (the only inter-fetch differences in the
raw HTML were the page's session-specific `javax.faces.ViewState` token
and a debug-script timestamp, both non-substantive artifacts of the
page's server-side rendering, not the statutory text itself).

All 11 citation quotes were then checked programmatically as
whitespace-normalized substrings of the extracted source text (a
Python script collapsed runs of whitespace, including the HTML page's
mid-sentence line-wrap tabs/newlines, to single spaces, and normalized
curly quotes to straight quotes) — first against the two initial
independent fetches, then a third time, independently, against a fresh
third fetch of all four sources under the integration-review User-Agent.
All 11 quotes passed cleanly on every pass.

## Genuine findings

- **One benign line-wrap whitespace artifact, disclosed rather than
  silently normalized**: the quote in `peaceofficer_education_standard`
  (Gov. Code § 1031(e)) spans a point where the source page's HTML
  rendering inserts a line break with tab-indented continuation between
  the words "high" and "school equivalency test," a mid-sentence
  artifact of the page's table-row layout rather than any change in the
  statutory text. The intervening whitespace was normalized to a single
  space; per this document's convention of disclosing rather than
  silently correcting such artifacts, that clause's `gap` field
  explains the normalization.
- **Two deliberately truncated quotes, each disclosed**: the second
  citation in `peaceofficer_decertification_disqualification` (Gov.
  Code § 1029(a)(11)) and the first citation in
  `peaceofficer_background_disclosure_duty` (Gov. Code § 1031.1(a))
  each quote only part of a longer statutory sentence, stopping short of
  additional disqualifying language or a third numbered condition,
  respectively, that this document does not itemize. Each clause's
  `gap` field discloses the omitted continuation and confirms it is
  consistent with, and does not contradict, the clause's body.
- **No case law used**: this document is grounded entirely in verified
  statutory text (three California Government Code subdivisions and one
  Penal Code section); CourtListener was not queried because no
  case-law point was needed to state these statutory facts.

## Honest gap(s) disclosed

This document does not itemize every class of position Penal Code
sections 830.1 through 830.65 designate as a peace officer position; it
does not survey Government Code section 1029's disqualifying categories
(2) through (9) or its statutory exceptions in subdivisions (b) through
(e); it does not detail the licensing and experience qualifications the
statute requires of the physician, surgeon, or psychologist who conducts
a medical or psychological evaluation, or the POST certification and
decertification process under Penal Code sections 13510.1 and 13510.8;
it does not fetch or quote 8 C.F.R. § 274a.2, the federal regulation
Gov. Code § 1031(h) cross-references; and it does not address
Government Code section 1031.1's subdivisions (c) through (f) (the
definition of "employment information," the civil remedy for a
refusal to disclose, redisclosure between agencies, and permissible
copying fees). This document does not determine whether any specific
position is a peace officer position, whether any specific applicant
meets or fails to meet these standards, or what any hiring authority or
former employer should do about a particular hiring decision or
disclosure request.

## Verification

- Gov. Code §§ 1029, 1031, and 1031.1, and Penal Code § 830 each
  fetched twice independently via `curl` with two distinct User-Agent
  strings, confirmed byte-identical (aside from non-substantive
  session/debug artifacts) before any quote was drafted; all 11
  citation quotes then confirmed as clean, whitespace-normalized
  substrings of those sources.
- Independently re-verified during integration review via a third
  fetch of all four sources under a third distinct User-Agent
  ("Groundtruth-IntegrationReview-PeaceOfficer/1.0 (+verify)"); all 11
  quotes confirmed clean against this third, independent copy.
- Checked for `{{` / `}}` leakage in every clause's `title`/`gap` and
  every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- Checked for duplicate clause IDs against the full corpus — none;
  all 10 new clause IDs (`peaceofficer_*`) are unique. The drafting
  clause title "Acknowledgment" duplicates existing corpus titles,
  consistent with this project's established pattern of reused
  boilerplate titles; clause IDs remain unique.
- Checked placeholder-to-field resolution: all `{{publicEntityName}}`,
  `{{jobTitle}}`, `{{applicantName}}`, and `{{dateSigned}}` placeholders
  used in the new drafting and authority clause bodies resolve to
  fields declared on the new document. No new field IDs were created;
  all four (`publicEntityName`, `jobTitle`, `applicantName`,
  `dateSigned`) are reused from the existing corpus's established field
  vocabulary (e.g., `publicEntityName` and `applicantName` previously
  used together in `proposition_209_public_employment_info_sheet`).
- Corpus-wide validation (both JSON files parse; no duplicate clause
  IDs; no duplicate document IDs; every `clauseOrder` reference across
  all 605 documents resolves to an existing clause ID; new document has
  exactly the required top-level keys; new authority clauses have
  exactly `{id,title,kind,status,checkedDate,body,gap,citations}`; new
  drafting clauses have exactly `{id,title,kind,body}`; every citation
  has exactly `{case,cite,url,quote}`) run across the full updated
  corpus — clean.

## Net changes

- New document: Peace Officer Hiring Qualifications and Disqualifications
  — Information Sheet (`peace_officer_hiring_qualifications_info_sheet`),
  10 clauses (8 authority + 2 drafting), in the Hiring category. No new
  fields (all four reused from the existing corpus).
- Corpus: 4,879 → 4,889 clauses; 604 → 605 documents. Wave 147, Hiring
  category slot.
