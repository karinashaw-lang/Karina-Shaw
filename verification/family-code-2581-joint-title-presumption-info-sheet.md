# Family Law, new document: Section 2581 Community Property Presumption for Property Held in Joint Title — Information Sheet

Part of wave 147 (Family Law category; this wave continues wave 145's
category set, following wave 146's coverage of the other four
categories).

## Why this document

The task brief flagged Family Law as unusually saturated (~76 existing
documents) and specifically named several already-covered topics
(summary dissolution, grandparent visitation, move-away, name change,
domestic partnership, spousal support §4320, child support §4062,
adoption). Confirmed by reading `data/documents.json`'s full Family Law
title list (76 documents) that all of those, plus many more (§2640,
§2641, §2556 reimbursement/omitted-property doctrines, transmutation
under §§850-853 via the postnuptial agreement document, the putative
spouse doctrine under §2251 via the nullity document, sibling
visitation under §3102 via the grandparent visitation document,
paternity disestablishment under §§7540-7541, earnings assignments
under §5230, spousal support duration under §4336), are already
covered. Grepped the full corpus for "2581", "joint tenancy
presumption," "joint title," and "community property presumption" —
no genuine hits describing Family Code §§ 2580-2581's joint-title
presumption specifically (the only "joint tenancy" hits were in
unrelated Probate Code, partnership, and minor's-property clauses).
Confirmed this is a genuine, non-duplicative topic: §2581 is a
characterization presumption keyed to how title was taken during
marriage, analytically distinct from §2640 (a reimbursement right that
presupposes a source-tracing analysis regardless of title form) and
from §§850-853 (transmutation's writing requirement for changing an
asset's character after acquisition). Read the existing §2640 document
in full to confirm no overlap and to write an accurate cross-reference
rather than duplicate its content.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Cal. Fam. Code §§ 2580(a), 2580(b)
(quoted together as one clause), 2580(c), 2581 (introductory
sentence), 2581(a), 2581(b), and In re Marriage of Weaver (2005) 127
Cal.App.4th 858:

- **`jointtitle2581_legislative_purpose`** (§2580(a)) — the
  Legislature's own stated public-policy purpose: a uniform,
  consistent standard of proof for characterizing jointly titled
  marital property, replacing inconsistent prior case/statutory law.
- **`jointtitle2581_retroactivity`** (§2580(c)) — **a key finding**:
  the presumption applies retroactively to property regardless of
  acquisition date, in any proceeding commenced on or after January 1,
  1984, but the statute carves out its own limit — it does not apply
  to property settlement agreements executed, or judgments rendered,
  before January 1, 1987 (even if those judgments later became final).
- **`jointtitle2581_presumption`** (§2581, intro sentence) — the
  presumption itself: property acquired during marriage in joint form
  (joint tenancy, tenancy in common, tenancy by the entirety, or
  community property) is presumed community property, a presumption
  affecting the burden of proof.
- **`jointtitle2581_rebuttal_methods`** (§2581(a)-(b)) — the statute's
  own exhaustive list of exactly two rebuttal methods: a clear
  statement of separate-property status in the deed/title document, or
  proof of a written agreement that the property is separate property.
- **`jointtitle2581_weaver_oral_agreements_insufficient`** (case law)
  — In re Marriage of Weaver's holding that oral or implied agreements
  cannot rebut the presumption, and its explanation that this changed
  the law from pre-1984 case law (In re Marriage of Camire), which had
  allowed oral rebuttal evidence.
- **`jointtitle2581_relation_to_2640_reimbursement`** (case law) —
  Weaver's clarification that a §2581 community-property
  characterization does not foreclose an independent §2640
  reimbursement claim by the contributing spouse — the two doctrines
  operate independently, addressed here only to mark the boundary
  against, not duplicate, this corpus's existing §2640 document.

## Genuine corrections and findings

- **Central finding**: confirmed §2581 lists exactly two rebuttal
  methods, both requiring writings — the agent verified this directly
  against the statutory text rather than assuming oral evidence might
  suffice by analogy to the general community-property presumption
  (Fam. Code §760), which case law (pre-1984) had allowed to be
  rebutted orally.
- Confirmed, via In re Marriage of Weaver, that §2581's predecessor
  (former Civil Code §4800.1, operative 1984) marked a deliberate
  legislative departure from prior case law (In re Marriage of Camire,
  1980) that had permitted oral rebuttal — this is stated by the court
  itself, not inferred.
- Confirmed the retroactivity provision's own internal limit (no
  application to pre-1987 settlement agreements or judgments) — a real
  boundary on the "regardless of acquisition date" retroactivity rule
  that a careless read of §2580(c) could miss.
- Confirmed §2581's presumption and §2640's reimbursement right are
  doctrinally independent (per Weaver's own words) rather than
  alternative or competing theories — avoided conflating or duplicating
  this corpus's existing §2640 document.

## Honest gap disclosed

- The statute's own text does not define what makes a deed statement
  "clear" or what form a qualifying written agreement must take beyond
  being written and reflecting the parties' agreement — disclosed
  explicitly in the rebuttal-methods clause rather than inferred from
  Weaver's specific facts.
- One benign source-formatting artifact was found and corrected: the
  §2580(c) HTML source rendered the phrase "a compelling state
  interest" split across a line wrap with an embedded newline and
  extra tab/space characters ("state\n\t\t\t\t  interest"). This is a
  rendering/line-wrap artifact of the leginfo.legislature.ca.gov page,
  not a substantive difference in the statutory text; the clause
  quotes the phrase with normal single-space spacing and discloses the
  correction in that clause's `gap` field, per the task's benign-vs-
  genuine-defect distinction.
- The `jointtitle2581_weaver_oral_agreements_insufficient` clause does
  not address the same opinion's separate holding on the Scandia
  residence (a transmutation-by-commingling issue, unrelated to the
  joint-title presumption) or its disposition on remand — noted as out
  of scope in that clause's `gap` field.

## Method

- Fetched Cal. Fam. Code §§ 2580 and 2581 from
  `leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
  each fetched twice with distinct User-Agent strings (Chrome/Windows
  and curl/8.4.0 for §2581; Safari/macOS and Firefox/Linux for §2580).
  Both sections' extracted `<div id="single_law_section">` bodies were
  byte-identical across their two independent fetches (confirmed via
  `diff`).
- Retrieved In re Marriage of Weaver (2005) 127 Cal.App.4th 858 via
  the CourtListener MCP `search` tool (query: "Family Code 2581 clear
  statement joint title community property presumption", court
  calctapp), then fetched the full opinion twice independently via
  `get_endpoint_item` (endpoint "opinions", item_id 2262353 = cluster
  id 2262353 in this case), confirming the returned `html_with_citations`
  text was identical both times.
- All 9 citation quotes across the 6 authority clauses
  programmatically confirmed as exact substrings of the confirmed
  source texts (statutory text with HTML tags stripped and whitespace
  normalized; opinion text likewise), via a Python verification script
  comparing normalized quote strings against normalized source text.

## Verification

- Both statutory sections and the case opinion fetched twice
  independently with distinct User-Agent strings / independent tool
  calls; confirmed clean/identical on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic: §2580(a)-(b) and
  §2580(c) are subdivisions of the same statutory section as each
  other (disclosed as not independent); §2581's intro sentence and
  §2581(a)-(b) are likewise subdivisions of the same section (disclosed
  as not independent); the three Weaver quotes in the oral-agreements
  clause come from the same paragraph pair of the same opinion
  (disclosed as not independent of each other); §2580 and §2581 are
  genuinely separate, independently numbered statutory sections
  (treated as independent of each other); the case-law clauses are
  independent of the statutory clauses.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused titles "Declaration of Parties and Purpose of This
  Information Sheet" and "Signature and Acknowledgment — Not a Court
  Filing" match the established Family Law information-sheet
  boilerplate pattern already used across multiple other documents in
  this corpus (e.g., the §2640 document), not a substantive duplicate.
- Field names (`party1Name`, `party2Name`, `countyOfFiling`,
  `dateSigned`, `cityState`) reused to match the existing §2640
  document's field definitions exactly. No new fields introduced.
- Corpus-wide validation script run after merging: both JSON files
  parse; no duplicate clause or document ids across the full corpus
  (4,887 clauses / 605 documents); every clause id in the new
  document's `clauseOrder` resolves to an existing clause; all
  `{{placeholder}}` tokens used in the new document's clause bodies
  resolve to a declared field on the document.

## Net changes

- New document: Section 2581 Community Property Presumption for
  Property Held in Joint Title — Information Sheet
  (`family_code_2581_joint_title_presumption_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Family Law category. No new
  fields.
- Corpus: 4,879 → 4,887 clauses; 604 → 605 documents. Wave 147,
  Family Law.
