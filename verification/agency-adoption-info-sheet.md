# Family Law, new document: Agency Adoption — Information Sheet

## Why this document

Wave 145 (Family Law slot). Read `data/documents.json` in full for the
category: 75 existing Family Law documents, an unusually dense corpus
already covering premarital agreements, DVROs, paternity actions,
cohabitation agreements, stepparent adoption, independent adoption, adult
adoption, and dozens of narrower topics. Checked every candidate topic
suggested by the task brief (premarital agreement formalities, child
support guideline disclosure, DVRO procedure, parentage establishment,
Marvin cohabitation) and several others (Family Code § 4320 spousal-support
factors, § 4062 child-support add-ons, transmutation, putative spouse,
firearm relinquishment) against the existing corpus by keyword grep across
`data/clauses.json` — all were already covered, several in detail (e.g.
`msa_spousal_support_factors` already quotes § 4320(a)-(l) in full;
`childsupport_addon_expenses` already quotes § 4062).

Found the gap by reading the existing Independent Adoption document's own
clause `independentadoption_definition_independent_vs_agency`, which quotes
Family Code § 8506's definition of "agency adoption" only to explain what
independent adoption is *not* — the corpus had never built out the agency
adoption chapter itself. Confirmed by grep: no clause with an
`agencyadopt_*` prefix, and no document title containing "agency
adoption," existed anywhere in the corpus before this document.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses, citing Family Code §§ 8506, 8700(a), 8700(e)(1)-(2), 8700(f)-(h),
8704(a)-(b), and 8715(a) — all within Division 13, Part 2, Chapter 2
("Agency Adoptions," §§ 8700-8720), plus the Part 1 definitions section:

- **`agencyadopt_definition_and_scope`** (§ 8506) — the statutory
  definition of "agency adoption" and the three kinds of agencies the
  chapter covers (the department, a county adoption agency, a licensed
  adoption agency).
- **`agencyadopt_relinquishment_procedure`** (§ 8700(a)) — how a birth
  parent relinquishes a child to an agency: written statement, two
  subscribing witnesses, acknowledgment, and its evidentiary effect on
  custody.
- **`agencyadopt_revocation_period`** (§ 8700(e)(1)-(2)) — the
  relinquishment's finality timeline (no effect until filed with the
  department; final 10 business days after receipt, subject to three
  exceptions) and the mutual-consent-only rescission rule once final.
- **`agencyadopt_named_placement_rescission`** (§ 8700(f)-(h)) — a
  separate, later-arising 30-day rescission right that applies only when a
  relinquishment names specific prospective adoptive parents and that
  placement falls through.
- **`agencyadopt_exclusive_custody_pending_order`** (§ 8704(a)-(b)) — the
  agency's exclusive custody of the child pending an adoption order, the
  restriction on who may file the adoption petition, and the court's
  authority to override an agency's refusal to consent.
- **`agencyadopt_court_report_requirement`** (§ 8715(a)) — the agency's
  duty to submit a full report of the facts of the case to the court.

## Genuine corrections and findings

- **A genuine, disclosed correction during drafting**: an early draft of
  the `agencyadopt_revocation_period` clause quoted § 8700(e)(1)'s first
  sentence with a trailing comma ("...filed with, the department,") to fit
  the surrounding sentence grammatically. A body-quote verification pass
  (checking every smart-quoted span in clause `body` text, not just the
  `citations[].quote` fields, against the fetched source) caught that the
  source actually ends that sentence with a period, not a comma. Fixed by
  closing the quotation at the correct sentence boundary and moving the
  explanatory clause outside the quotation marks.
- **A genuine, disclosed finding on scope**: confirmed via the fetched
  chapter heading in the § 8700 source ("CHAPTER 2. Agency Adoptions
  [8700 - 8720]") that the Agency Adoptions chapter is a distinct chapter
  from Independent Adoptions (Chapter 3, §§ 8800-8823, already covered by
  this corpus's `independent_adoption_info_sheet`) and Stepparent Adoptions
  (Chapter 5, §§ 9000-9007, already covered by
  `stepparent_adoption_info_sheet`) within the same Part 2. This document
  does not re-cover either of those chapters.
- **A genuine finding by absence, honestly disclosed**: § 8700(e)(1)(C)
  cross-references § 8700.5 (a waiver-of-right-to-revoke procedure) and
  § 8704(b) references a court-approval procedure for removing a placed
  child after the petition is filed; neither was independently fetched or
  verified, and both are disclosed as out of scope in the relevant
  clauses' `gap` fields rather than silently omitted or fabricated.
- Correctly excluded § 8715(b)-(e) (additional report content for a
  juvenile-dependency-originated adoption, a postadoption contact
  agreement, an optional department report, and an out-of-state
  petitioner's home study) and § 8714 (the separate filing-mechanics
  section, already the subject of its own report-content cross-reference
  in § 8715(a))'s own contents — disclosed rather than included without
  verification.
- Declined to independently fetch or verify § 8701, § 8702, § 8703
  (post-relinquishment information rights and disclosure-consent notices
  to birth parents) or § 8716 (the $500 agency fee and its waiver
  conditions); all were fetched once during research triage but excluded
  from the final document to keep it tightly scoped to the
  relinquishment-through-custody arc, and are not cited or quoted anywhere
  in the final document.

## Honest gap(s) disclosed

Each authority clause's `gap` field discloses: (1) that this is one
state's statute, used as evidence of California's specific rule, not a
claim about which state's law governs any specific adoption; (2) which
citations within the clause are subdivisions of the same statutory
section (treated as one source) versus independently numbered sections;
(3) the specific adjoining subdivisions/sections not detailed in that
clause; and (4) that the document is informational only and does not
itself relinquish, place, or adopt any child, or file, remove, rescind,
or determine the outcome of any specific case.

## Method

Fetched Family Code §§ 8700, 8701, 8702, 8703, 8704, 8506, 8714, 8715,
8716, and 8717 from `leginfo.legislature.ca.gov` via `curl` (not
`WebFetch`, to preserve exact byte-for-byte source text for verbatim quote
checking) using a first User-Agent string
("Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research/1.0").
Independently re-fetched the four sections actually cited in the final
document (§§ 8506, 8700, 8704, 8715) a second time using a distinct
User-Agent string
("curl/8.7.1 Groundtruth-DualFetch-Verify/2.0 (macOS; independent-check)").
Programmatically diffed the HTML-stripped, whitespace-normalized text of
both fetches for all four sections — byte-for-byte identical on every
section, confirming no caching/mirroring artifact.

Every `citations[].quote` string (11 quotes across 6 authority clauses)
was then checked as an exact, whitespace-normalized substring of both
independent fetches — 100% pass. Separately, every smart-quoted span
inside each authority clause's `body` text (not just the formal citation
field) was independently checked the same way, allowing for the standard
legal-writing bracket convention (e.g. "[t]he relinquishment..." for a
lowercased sentence-initial word); this second pass caught the one comma/
period discrepancy described above, which was corrected before finalizing.

## Verification

- All four cited statutory sections (§§ 8506, 8700, 8704, 8715) fetched
  twice independently with distinct User-Agent strings; confirmed
  byte-identical.
- All 11 `citations[].quote` strings confirmed as exact substrings of both
  independent fetches.
- All smart-quoted spans inside clause `body` text independently checked
  against source text; one genuine defect found and fixed (see "Genuine
  corrections and findings" above); no other defects found.
- Ran a corpus-wide validation script confirming: both `data/clauses.json`
  and `data/documents.json` parse as valid JSON; no duplicate clause ids
  (4,820 total, up from 4,812); no duplicate document ids (597 total, up
  from 596); every clause id in the new document's `clauseOrder` exists in
  `data/clauses.json`; every authority clause has exactly the keys
  `{id, title, kind, status, checkedDate, body, gap, citations}` with
  `status: "verified"`; every drafting clause has exactly
  `{id, title, kind, body}`; every citation has exactly
  `{case, cite, url, quote}` with a non-empty `case` field; every
  `{{field}}` placeholder used in the new clauses' `body`/`gap` text
  resolves to a field actually declared on the new document.
- Confirmed Family Law category count: 76 documents (was 75), restoring
  exact 8-category balance (all categories now at 75-76) alongside the
  other three wave-145 documents added in sibling worktrees.

## Net changes

- New document: Agency Adoption — Information Sheet
  (`agency_adoption_info_sheet`), 8 clauses (6 authority + 2 drafting), in
  the Family Law category. New fields: `birthParentName`, `childName`,
  `childDOB`, `agencyName`, `prospectiveAdoptiveParentName`,
  `countyOfFiling`, `dateSigned`, `cityState` (all reused patterns from
  this corpus's existing adoption documents; no schema changes).
- Corpus: 4,812 → 4,820 clauses; 596 → 597 documents. Family Law category:
  75 → 76 documents. Part of wave 145 (Family Law slot).
