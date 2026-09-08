# Family Law, new document: False Child Abuse Allegation Sanctions and Reporting Protections — Information Sheet

## Why this document

Third processed item of wave 139 (Family Law slot #2, 2×2 pattern).
One wave-139 document (During employment #2, Military Status
Employment Discrimination Protection) remains pending integration;
this document is not the wave's closing entry. The agent ruled out
putative spouse
doctrine, interspousal fiduciary duty, § 6389/§ 29825 firearm
relinquishment, and § 4320 spousal-support factors — all confirmed
already covered by direct inspection of the actual hits, not just
bare grep matches. The chosen topic — Fam. Code §§ 3027, 3027.1, and
3027.5, governing temporary protective steps and agency-investigation
referral during a custody proceeding, monetary sanctions for a
knowingly false abuse accusation, and reporting protections (with a
false-report exception) for a parent who lawfully reported suspected
sexual abuse — was confirmed genuinely open: zero prior corpus hits
on "3027," "3027.1," "3027.5," "Robert J. v. Catherine," or "Niko v.
Foreman."

## What this document covers

10 clauses: 4 drafting (intro, distinguishing related topics,
acknowledgment) and 6 authority clauses, citing Fam. Code § 3027(a),
(b), § 3027.1(a), (b), (c), § 3027.5(a), (b) (two citations), plus
*Robert J. v. Catherine D.* (2009) 171 Cal. App. 4th 1500 (two
citations) and *Niko v. Foreman* (2006) 144 Cal. App. 4th 344 (two
citations):

- **`falseabuseclaim_temporary_protective_steps`** / **`
  falseabuseclaim_agency_investigation_referral`** — the court's
  discretionary temporary-safety-step authority and discretionary
  agency-investigation referral.
- **`falseabuseclaim_sanctions_elements`** / **`falseabuseclaim_
  sanctions_procedure`** — the elements, cap, and definition of
  "person" for § 3027.1 sanctions, plus the order-to-show-cause
  procedure and cumulative-remedy language.
- **`falseabuseclaim_case_law`** — *Robert J.*'s presumptive filing-
  deadline rule and *Niko*'s strict enforcement of the notice
  procedure.
- **`falseabuseclaim_good_faith_reporting_protection`** / **`
  falseabuseclaim_knowing_false_report_limitation`** — the reporting
  protection under § 3027.5(a) and its knowing-false-report exception
  under § 3027.5(b).

## Genuine findings

- **A disclosed non-retroactivity limitation**: the case-law clause's
  gap notes *Robert J.*'s new presumptive filing-deadline rule,
  announced as an issue of first impression, was itself held not to
  apply retroactively to the party before that court.
- **A disclosed scope-limiting distinction between § 3027.5 and its
  companion sections**: the reporting-protection clause's gap notes
  § 3027.5 is limited to sexual abuse, unlike §§ 3027/3027.1's broader
  "child abuse or neglect" scope.
- **A disclosed negative case-law finding for one section**: no
  published case law construing § 3027.5 specifically was located; the
  two cases cited elsewhere in the document address § 3027.1 only,
  disclosed honestly rather than stretched to cover § 3027.5.
- **Two disclosed leginfo mid-phrase line-wrap artifacts**, verified
  directly against the raw HTML and normalized to a single space, in
  § 3027(b) and § 3027.1(b).

## Honest gap(s) disclosed

This document does not describe Welf. & Inst. Code §§ 328, 16504, or
16506 (cross-referenced but not independently fetched), does not
define "reasonable money sanctions" numerically, does not track case
law after *Robert J.* that might have refined the filing-deadline
rule, does not address § 3027.5 case law (none found), and does not
determine whether any specific allegation is true or false or whether
any specific sanctions motion would succeed.

## Method

Fetched Fam. Code §§ 3027, 3027.1, and 3027.5 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. CourtListener searches (hitting only the 5/min throttle,
not the daily quota) located *Robert J. v. Catherine D.* and *Niko v.
Foreman*; all four case-law quotes were verified via the tool-
returned internal opinion ids. All 12 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a two-
hundred-and-twentieth fetch (a new distinct curl User-Agent string,
"Groundtruth-220thVerify-FalseAbuseAllegation/1.0") of all three
statutory sections — all fetched cleanly on the first attempt. All 8
statute citation instances confirmed clean on direct normalized-
whitespace substring match. All four case-law citations independently
reconfirmed via the CourtListener API's `get_endpoint_item` (used
after the `search_document`/`read_document` tools transiently
required approval and did not resolve) against each opinion's
`html_with_citations` field — all four exact matches, no defects
found. The temporary-protective-steps and agency-investigation-
referral provisions, the sanctions elements and procedure, both case-
law holdings, and the reporting protection and its false-report
exception were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All three cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-twentieth independent fetch during integration review;
  all 8 statute citation instances confirmed clean. All four case-law
  citations independently re-verified via the CourtListener API
  against each opinion's correct internal id; no defects found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `falseabuseclaim_` prefix has zero collisions. Ran
  term-specific greps for "3027," "3027.1," "3027.5," "Robert J. v.
  Catherine," and "Niko v. Foreman" — zero hits on all, confirming
  genuine novelty.
- Checked every citation's `case` field for emptiness — all 12
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`party1Name`,
  `party2Name`, `childName`, `courtCaseNumber`, `countyOfFiling`,
  `cityState`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: False Child Abuse Allegation Sanctions and Reporting
  Protections — Information Sheet
  (`false_child_abuse_allegation_sanctions_info_sheet`), 10 clauses
  (6 authority + 4 drafting), in the Family Law category. No new
  fields.
- Corpus: 4,612 → 4,622 clauses; 574 → 575 documents. Third processed
  item of wave 139. The fourth and final item (Military Status
  Employment Discrimination Protection, During employment #2) remains
  pending integration and will close the wave in its own verification
  file.
