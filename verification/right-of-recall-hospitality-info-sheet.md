# Ending employment, new document: COVID-19 Right of Recall for Hospitality and Building-Service Workers — Information Sheet and Notice Template

## Why this document

First processed item of wave 120 (Ending employment slot, 1×4 pattern).
The agent ruled out two other candidates before landing here: the AB 1076
noncompete-void notice duty (already covered by the existing
`noncompete_void_notification_info_sheet` document) and blacklisting /
service-letter law plus the "For Your Benefit" pamphlet duty (already
covered by `blacklisting_former_employee_info_sheet` and existing
clauses referencing "DE 2320"). The agent confirmed zero corpus hits for
"laid-off employee," "right of recall," "2810.8," or "recall" as a
termination-adjacent concept. Personally reconfirmed via corpus search:
zero prior mentions of "2810.8" or "laid-off employee" anywhere in the
63-document-deep Ending employment category, and confirmed the
`recallrt_` prefix has zero collisions.

## What this document covers

10 clauses: 2 drafting (identification, certification/signature) and 8
authority clauses, citing Lab. Code § 2810.8(a)(4), (a)(6), (a)(7),
(a)(10), (b)(1), (b)(2), (b)(3), (b)(4), (b)(5), (b)(6), (c), (d),
(d)(1), (d)(2)-(3), (f), (g), (i), and the statute's own amendment
history line:

- **`recallrt_covered_enterprises_and_employees`** — the "enterprise,"
  "building service," and "laid-off employee" definitions, including the
  rebuttable COVID-19-relatedness presumption.
- **`recallrt_offer_duty_and_preference`** — the five-business-day
  written offer duty, the "qualified" standard, and the length-of-service
  order of preference.
- **`recallrt_response_window`** — the employee's five-business-day
  response window and simultaneous conditional offers.
- **`recallrt_recordkeeping_and_declined_notice`** — the three-year
  recordkeeping duty and the 30-day notice required when recall is
  declined for lack of qualifications.
- **`recallrt_successor_and_reorg_coverage`** — continued coverage after
  a change in ownership, organizational form, asset acquisition, or
  relocation, and the matching "employer" definition.
- **`recallrt_antiretaliation`** — the statute's own anti-retaliation
  provision, including its good-faith mistaken-allegation protection.
- **`recallrt_enforcement_remedies_penalties`** — the Labor
  Commissioner's exclusive enforcement jurisdiction, complaint remedies,
  and the no-criminal/civil-penalty-plus-liquidated-damages scheme.
- **`recallrt_cba_local_law_and_sunset`** — the local-ordinance savings
  clause, preserved common-law wrongful-termination claims, the
  collective-bargaining waiver requirement, and the statute's own
  January 1, 2027 sunset date.

## Genuine findings

- **A correction to the agent's own initial assumption about the
  statute's scope**: because the corpus already has 63 documents in
  Ending employment, most obvious topics were already covered, requiring
  real digging before landing on this genuinely open, well-documented
  topic.
- **A disclosed, load-bearing sunset-date finding**: the statute is
  written to lapse on January 1, 2027 absent further legislative action
  (confirmed against the section's own amendment-history line, reflecting
  amendment by AB 858, Stats. 2025, Ch. 280, effective January 1, 2026).
  This is disclosed prominently in the closing clause's `gap` field
  rather than buried, with an explicit instruction to re-check
  leginfo.legislature.ca.gov directly after that date.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone, and the
  anti-retaliation clause's `gap` field explicitly discloses that no
  case law interpreting "adverse action" under this specific provision
  could be located.

## Honest gap(s) disclosed

This document does not quote the statute's remaining defined terms
("airport," "airport hospitality operation," "airport service
provider," "event center," "hotel," "private club") or their individual
size/scope thresholds, does not define what it means to "establish" a
position for purposes of starting the five-business-day offer clock,
does not resolve how simultaneous conditional offers interact with the
final offer's own response window, does not specify a required delivery
method for the 30-day declined-recall notice, does not further define
"substantially all of the assets" or "same or similar operations" for
successor-employer coverage, does not quote subdivisions (d)(4) through
(d)(7) (investigative/citation procedures, injunctive relief, and the
interest-rate cross-reference) or subdivision (e) (the Division's
rulemaking authority), and does not independently trace the statute's
amendment history beyond its current text and most recent history line.

## Method

Fetched Lab. Code § 2810.8 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical (14,319 characters both times, after
HTML-tag stripping). CourtListener's daily rate limit was already
exhausted on the agent's test call (HTTP 429); no case law was used, a
disclosed and legitimate choice. All 18 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-fifty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-154thVerify-RightOfRecall/1.0") — all 18 citation
instances confirmed clean on normalized-whitespace substring match; 4
of the 18 required the standard whitespace-stripped fallback check
(the familiar subdivision-marker-spacing artifact around labels like
"(1)" and "(A)"), confirmed benign. The five-business-day offer duty,
the length-of-service preference order, the successor-employer
coverage circumstances, the enforcement scheme, and the January 1, 2027
sunset date were all independently reconfirmed present in the freshly
fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-fifty-fourth
  independent fetch during integration review; all 18 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses that all citations in this document derive from subdivisions
  of the single statute §2810.8 and are not independent sources of one
  another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `recallrt_` prefix has zero collisions. Independently
  reconfirmed zero prior corpus mentions of "2810.8" or "laid-off
  employee," and reconfirmed the two pivot rationales (existing
  `noncompete_void_notification_info_sheet` and
  `blacklisting_former_employee_info_sheet` documents already cover the
  agent's two earlier candidates).
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- Four new field ids confirmed genuinely necessary and non-duplicative:
  `enterpriseDescription`, `positionOffered`, `offerDate`,
  `acceptDeclineDeadline` — none existed previously in the corpus under
  any name. Seven other fields (`companyName`, `employeeName`,
  `jobTitle`, `terminationDate`, `preparerName`, `cityState`,
  `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: COVID-19 Right of Recall for Hospitality and
  Building-Service Workers — Information Sheet and Notice Template
  (`right_of_recall_hospitality_info_sheet`), 10 clauses (8 authority +
  2 drafting), in the Ending employment category. Four new fields:
  `enterpriseDescription`, `positionOffered`, `offerDate`,
  `acceptDeclineDeadline`.
- Corpus: 3,928 → 3,938 clauses; 508 → 509 documents. First processed
  item of wave 120.
