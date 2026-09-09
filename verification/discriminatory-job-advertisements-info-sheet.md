# Hiring, new document: Discriminatory Job Advertisements and Applicant Inquiries (FEHA) — Information Sheet

## Why this document

Part of wave 145 (Hiring slot, one of four parallel single-document
additions across Hiring, During employment, Estate Planning, and
Family Law, run in isolated git worktrees). Before drafting, the
agent enumerated the corpus's existing ~75 Hiring documents from
`data/documents.json` and confirmed the following adjacent topics
were already substantively covered and therefore out of scope:
apprenticeship agreements (`apprenticeship_agreement_info_sheet`),
unpaid internship classification
(`unpaid_internship_compliance_info_sheet`), drug testing
(`drug_testing_info_sheet`), pre-offer/post-offer medical
examination timing (`post_offer_medical_examination_info_sheet`,
which cites Gov. Code §12940(e)), salary-range/salary-history
disclosure (`pay_scale_disclosure_info_sheet`), new-hire notice
requirements (`new_hire_reporting_info_sheet`,
`sdi_new_hire_notice_info_sheet`,
`time_of_hire_workers_compensation_rights_notice_info_sheet`),
ban-the-box (`fair_chance_act_info_sheet`), and the janitorial
employer registration info sheet
(`janitorial_employer_registration_info_sheet`). A keyword search of
the full corpus (all categories) for "recall," "rehire," "veteran,"
"military," "citizenship," "job posting," and "discriminat*" also
confirmed that COVID-era hospitality/building-service recall rights
(`right_of_recall_hospitality_info_sheet`, Ending employment) and
general military-status employment discrimination
(`military_status_employment_discrimination_info_sheet`, During
employment) were both already covered elsewhere, ruling those topics
out as duplicative.

The chosen topic — Government Code §12940(d), FEHA's restriction on
printing or circulating a discriminatory publication or making a
nonjob-related pre-employment inquiry of an applicant or employee —
was confirmed genuinely open: a grep of `data/clauses.json` for
`12940(d)` returned zero hits before drafting (all prior §12940
citations in the corpus were to subdivision (a), (e) [medical exam],
and (q) [driver's license] only), and a full-text search for the
statute's "print or circulate" and "nonjob-related inquiry" language
also returned zero hits.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority
clauses, citing Gov. Code §12940's introductory clause, §12940(d)
(the core prohibition and, separately, its age-inquiry exception),
and §12926(d) and §12926(e):

- **`jobad_bfoq_exception`** — the bona fide occupational
  qualification and security-regulation exceptions that qualify all
  of section 12940, including subdivision (d).
- **`jobad_core_prohibition`** — the core rule: an employer or
  employment agency may not print/circulate a discriminatory
  publication or make a nonjob-related discriminatory inquiry of an
  applicant or employee, across the statute's full list of protected
  characteristics.
- **`jobad_age_inquiry_exception`** — the statute's own carve-out
  permitting an age inquiry or age limitation where another law
  compels or provides for it.
- **`jobad_employer_definition`** — FEHA's general "employer"
  definition (§12926(d)), independently re-verified for this
  document.
- **`jobad_employment_agency_definition`** — FEHA's "employment
  agency" definition (§12926(e)), newly cited (not previously used
  anywhere in the corpus).

## Genuine findings

- **One disclosed, preserved source-formatting artifact**: the
  `jobad_core_prohibition` quote spans an HTML line-wrap in the
  leginfo.legislature.ca.gov source — a literal newline followed by
  six tab characters — between "specification, or" and
  "discrimination as to race." This was confirmed present in the raw
  HTML of both independent fetches (byte-for-byte, including the
  exact whitespace) and reproduced exactly in the `quote` field
  rather than corrected, with a disclosure in that clause's `gap`
  field, consistent with how this corpus's driver's-license-posting
  document (wave 128) treated an analogous artifact in the same
  statute.
- **A disclosed, deliberate re-verification of a shared definitional
  citation**: Gov. Code §12926(d) (general "employer" definition) is
  already cited by this corpus's driver's-license-posting document;
  it was independently re-fetched (twice, with two new distinct
  User-Agent strings not reused from any prior document's fetch) and
  re-verified for this document rather than assumed correct from the
  earlier citation.
- **A disclosed, deliberate choice not to force case law**: several
  CourtListener searches (general FEHA §12940 case-law search;
  targeted phrase search on "print or circulate" employment
  discrimination) were run, but no published, clearly on-point
  California case interpreting subdivision (d) specifically (as
  opposed to other subdivisions of §12940) was found within a
  reasonable search budget; the document relies on the statutory
  text alone rather than fabricate or stretch a citation to a case
  that does not squarely address this subdivision.

## Honest gap(s) disclosed

This document does not resolve what falls within the undefined term
"nonjob-related" as applied to a specific inquiry, does not define
"bona fide occupational qualification" or identify which security
regulations qualify for the statute's exception, does not enumerate
which other statutes "compel or provide for" a lawful age inquiry or
age limitation, does not state how the "five or more persons"
threshold in the employer definition is counted, and does not state
a minimum scale or fee level that distinguishes a covered
"employment agency" from other compensated activity. It also does
not address Government Code §12940(e) (the separate pre-offer/
post-offer medical and psychological examination restriction,
already covered by this corpus's Post-Offer, Pre-Employment Medical
Examination — Information Sheet) or any FEHA administrative
complaint or enforcement procedure (already covered by this corpus's
FEHA Administrative Complaint with California's Civil Rights
Department — Information Sheet, in the Ending employment category).

## Method

Fetched Government Code §12940 and §12926 in full from
leginfo.legislature.ca.gov via direct `curl` requests (not the
WebFetch tool, since exact byte-for-byte verbatim text was required
rather than an AI-summarized rendering), each section fetched twice
independently with two distinct User-Agent strings:

- §12940: `Mozilla/5.0 (Windows NT 10.0; Win64; x64)
  Groundtruth-Research-Agent1/1.0` and `curl/8.0
  Groundtruth-Research-Agent2-VerifyPass/1.0`
- §12926: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
  Groundtruth-Research-Agent-Def1/1.0` and `Wget/1.21
  Groundtruth-Research-Agent-Def2-Alt/1.0`

For each section, the two raw HTML responses were diffed after
stripping only the page's `facelets.ui.DebugOutput` timestamp
parameter (the one element that differs run-to-run on this site);
the remaining content — including all statutory text and its exact
whitespace — was byte-for-byte identical between the two independent
fetches for both sections, ruling out caching or mirroring drift.

All 6 citation instances (one BFOQ-exception quote, one core-
prohibition quote, one age-exception quote, two §12926(d) quotes,
one §12926(e) quote) were then verified programmatically as exact,
literal substrings of both raw HTML fetches for the relevant
section (both User-Agent responses independently, not just one),
including the core-prohibition quote's embedded line-wrap
whitespace, which was checked on a non-normalized, exact-substring
basis rather than assumed.

CourtListener was queried for case law interpreting §12940(d)
specifically (a general-topic search and a targeted phrase search
on the statute's "print or circulate" language); no clearly on-point
published case was found, so no case-law citation was used.

## Verification

- Both Government Code sections fetched twice independently with
  four distinct User-Agent strings total (two per section); all 6
  citation instances confirmed as exact, non-normalized substrings
  of both fetches of the relevant section.
- The one disclosed formatting artifact (embedded newline + six tab
  characters from the source's HTML line-wrap) confirmed present
  identically in both independent fetches of §12940, and disclosed
  in the affected clause's `gap` field rather than silently
  corrected.
- Checked every clause against the exact schema in `data/clauses.json`
  (`kind: "authority"` clauses carry exactly
  `{id,title,kind,status,checkedDate,body,gap,citations}` with
  `status: "verified"`; `kind: "drafting"` clauses carry exactly
  `{id,title,kind,body}`); every citation carries exactly
  `{case,cite,url,quote}` with no field empty.
- Checked the new document against the exact schema in
  `data/documents.json` (`{id,title,description,categories,
  clauseOrder,fields}`, no extra keys).
- Checked every `{{placeholder}}` used across the new clauses
  resolves to a field declared on the new document
  (`companyName`, `jobTitle`, `applicantName`, `dateSigned` — all
  reused from this corpus's existing house style, matching the most
  recent Hiring-category documents).
- Ran a corpus-wide script (Node, loading both JSON files fresh)
  confirming: both files still parse as valid JSON; all clause ids
  are globally unique (4,819 total, no collisions); all document ids
  are globally unique (597 total, no collisions); every id in the
  new document's `clauseOrder` exists in `clauses.json`; and post-
  merge category counts are Hiring 76, During employment 75,
  Confidentiality & IP 76, Ending employment 76, Business Formation
  76, Real Estate 76, Estate Planning 75, Family Law 75 (Hiring
  moves from 75 to 76, as expected for this wave's Hiring slot; the
  other three categories return to 76/76 once the sibling worktrees'
  documents for During employment, Estate Planning, and Family Law
  are merged).
- Grepped the full corpus for "12940(d)" and the statute's
  distinctive "print or circulate" / "nonjob-related inquiry"
  language both before and after drafting — zero hits outside the
  new clauses, confirming no disguised overlap with an existing
  document.

## Net changes

- New document: Discriminatory Job Advertisements and Applicant
  Inquiries (FEHA) — Information Sheet
  (`discriminatory_job_advertisements_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Hiring category. No new fields
  beyond the corpus's existing `companyName`, `jobTitle`,
  `applicantName`, and `dateSigned`.
- Corpus: 4,812 → 4,819 clauses; 596 → 597 documents.
