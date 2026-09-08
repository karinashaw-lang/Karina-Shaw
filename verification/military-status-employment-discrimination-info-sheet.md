# During employment, new document: Military Status Employment Discrimination Protection — Information Sheet

## Why this document

Fourth and final processed item of wave 139 (During employment slot
#2, closing the wave). The agent confirmed the corpus's existing
USERRA document addresses a different, federal statute (reemployment
rights), and that the 14 apparent "395" hits all traced to the
Servicemembers Civil Relief Act lease-termination document (a
different Real Estate-category document citing 50 U.S.C. § 3955, an
unrelated federal statute sharing a nearby bare number). The chosen
topic — Mil. & Vet. Code § 394's state-law prohibition on
discriminating against an employee because of military membership,
protection from discharge or hindrance for performing ordered
military duty, and its misdemeanor/civil-damages remedy — was
confirmed genuinely open: zero prior corpus hits on "Military and
Veterans Code," "Haligowski," "section 394," or "§ 394."

## What this document covers

10 clauses: 4 drafting (intro, incident record, acknowledgment) and 6
authority clauses, citing Mil. & Vet. Code § 394(a), (b), (d), (e)(1),
(e)(2), (g), (h), § 395(a), and *Haligowski v. Superior Court*, 200
Cal. App. 4th 983 (2011):

- **`milstatusdiscrim_general_prohibition`** / **`milstatusdiscrim_
  public_employer_prohibition`** — the general anti-discrimination
  rule and its parallel state/local-government-employer wording.
- **`milstatusdiscrim_discharge_duty_protection`** — the bar on
  discharging or hindering an employee for military duty or
  enlistment.
- **`milstatusdiscrim_collateral_benefits_protection`** — the
  52-week temporary-incapacitation collateral-benefits protection.
- **`milstatusdiscrim_remedies_and_penalty`** — the misdemeanor
  penalty and non-exclusive civil damages/attorney's-fees remedy.
- **`milstatusdiscrim_employer_not_individual_liability`** — the
  *Haligowski* holding that only the employer, not an individual
  supervisor, may be held liable.
- **`milstatusdiscrim_public_employee_leave_scope_limit`** — the
  disclosure that the chapter's separate leave-of-absence provisions
  (§§ 395-395.08, 395.1, 395.3) apply only to public employees.

## Genuine findings

- **A disclosed unresolved statutory-overlap question**: the public-
  employer-prohibition clause's gap notes the statute's text doesn't
  say whether subdivisions (a) and (b) are mutually exclusive or
  overlapping as applied to a government employer.
- **A disclosed asymmetric verification confidence**: the public-
  employee-leave-scope-limit clause's gap explicitly distinguishes the
  double-fetched, fully-verified §§ 394 and 395(a) from a single,
  not-independently-re-verified chapter-wide fetch used only to
  confirm (from each section's opening sentence) that §§ 395.01-
  395.08, 395.1, and 395.3 are also worded for public employees only.
- **A disclosed narrow reading of a case-law search**: the *Haligowski*
  clause's gap discloses that only that one decision was read in full;
  three other CourtListener results were not reviewed or relied on,
  and the single keyword search cannot rule out other published
  decisions that didn't match the search terms.
- **A disclosed limited scope of the case-law holding**: the same
  clause's gap notes the employer-only liability rule was established
  for a discharge/hindrance claim specifically, and the document does
  not assert it necessarily extends to a claim under subdivision (a)
  or (b) alone.

## Honest gap(s) disclosed

This document does not cover § 394(c) (public-accommodation/uniform
access) or § 394(f) (lending/financing discrimination), does not
state a limitations period for a § 394(g) civil claim, does not
describe the continuation mechanism for collateral benefits under
§ 394(e)(2) in detail, does not independently verify Civ. Code §§ 51
and 52 cross-referenced in § 394(h), and does not quote the full text
of §§ 395.01-395.08, 395.1, or 395.3.

## Method

Fetched Mil. & Vet. Code §§ 394 and 395(a) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical; a full-chapter fetch (§§ 389-399.5) was made once,
separately, solely to confirm the opening-sentence scope of the
chapter's other leave-of-absence sections, disclosed as
not-independently-double-verified. A CourtListener search returned 4
results without a rate-limit issue; *Haligowski v. Superior Court*
was read in full and its quote verified as an exact match.

Independently re-verified during integration review via a two-
hundred-and-twenty-first fetch (a new distinct curl User-Agent
string, "Groundtruth-221stVerify-MilitaryStatusDiscrimination/1.0")
of both statutory sections — both fetched cleanly on the first
attempt. All 8 statute citation instances confirmed clean on direct
normalized-whitespace substring match. The *Haligowski* citation was
independently reconfirmed via the CourtListener API's
`get_endpoint_item` against the opinion's correct internal id
(5666129, distinct from the courtlistener.com URL's cluster id
5810679) — an exact match, no defect found. The general and public-
employer-specific prohibitions, the discharge/hindrance protection,
the collateral-benefits protection, the remedies provision, and the
employer-only-liability holding were all independently reconfirmed
present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-first independent fetch during integration
  review; all 8 statute citation instances confirmed clean. The
  case-law citation independently re-verified via the CourtListener
  API against the correct internal opinion id; no defect found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `milstatusdiscrim_` prefix has zero collisions. Ran
  term-specific greps for "Military and Veterans Code," "Haligowski,"
  "section 394," "§ 394," and "lawCode=MVC" — zero hits on all.
  Separately verified all "394"/"395" bare-number hits in the corpus
  as false positives (page citations and unrelated federal/regulatory
  sections), confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new field ids required — all ten fields (`employeeName`,
  `companyName`, `jobTitle`, `serviceBranch`, `serviceStartDate`,
  `serviceEndDate`, `allegedAdverseAction`, `adverseActionDate`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Military Status Employment Discrimination Protection
  — Information Sheet
  (`military_status_employment_discrimination_info_sheet`), 10
  clauses (6 authority + 4 drafting), in the During employment
  category. No new fields.
- Corpus: 4,622 → 4,632 clauses; 575 → 576 documents. Fourth and
  final processed item of wave 139.

## Wave 139 summary

Wave 139 used a 2×2 rotation pattern (two documents each in Family
Law and During employment), targeting the two least-recently-touched
categories among the four tied-lowest after wave 138 closed. This
wave was interrupted mid-research by a container restart that lost
all four in-progress research agents before any reported back; no
corpus work was lost (nothing had yet been merged), and all four
agents were re-launched from scratch with the same briefs.

1. **Mutual Restraining Orders in Domestic Violence Cases —
   Information Sheet** (Family Law #1) — 7 clauses, Fam. Code § 6305,
   Pen. Code § 836(c)(3).
2. **Labor Rights Regardless of Immigration Status (Labor Code
   § 1171.5) — Information Sheet** (During employment #1) — 10
   clauses, Lab. Code § 1171.5, Salas v. Sierra Chemical Co. Two
   citation-accuracy defects (a stray character and a footnote-
   spanning quote) were found and corrected during integration
   review before merging.
3. **False Child Abuse Allegation Sanctions and Reporting Protections
   — Information Sheet** (Family Law #2) — 10 clauses, Fam. Code
   §§ 3027, 3027.1, 3027.5, Robert J. v. Catherine D., Niko v.
   Foreman.
4. **Military Status Employment Discrimination Protection —
   Information Sheet** (During employment #2) — 10 clauses, Mil. &
   Vet. Code §§ 394, 395(a), Haligowski v. Superior Court.

Corpus totals across the wave: 4,595 → 4,632 clauses (+37 net across
four documents: 7 + 10 + 10 + 10); 572 → 576 documents (+4). No
genuine duplication findings required excluding any delivered clause
this wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be a false-positive cross-code
collision or a page/citation-number coincidence. This wave's only
genuine defects (the two Salas citation transcription errors in
document 2) were found and corrected during integration review, not
left uncorrected or silently accepted.
