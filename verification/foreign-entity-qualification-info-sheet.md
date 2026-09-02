# Business Formation, new document: Foreign LLC/Corporation Qualification to Transact Business in California — Information Sheet

## Why this document

The existing LLC Articles of Organization, Articles of Incorporation,
and Statement of Information documents concern an entity being formed
under California law, or an already-California entity's periodic
reporting. This document covers a genuinely distinct topic: an entity
formed under another jurisdiction's law separately registering to
transact business in California without becoming a California entity.

## What this document covers

9 clauses: 2 drafting (declaration/scope, closing/signature) and 7
authority clauses, addressing both California's corporation and LLC
statutory frameworks in parallel:

- **`foreignqual_corp_qualification_requirement`** (Corp. Code
  § 2105(a)) — the certificate-of-qualification requirement for
  foreign corporations.
- **`foreignqual_corp_application_content`** (Corp. Code § 2105(a),
  (b)) — required content of a foreign corporation's statement and
  designation.
- **`foreignqual_transacting_business_definition`** (Corp. Code
  § 191(a); § 17708.03(a)) — the statutory definition of "transacting
  intrastate business" for both entity types.
- **`foreignqual_activities_not_transacting_business`** (Corp. Code
  § 191(c); § 17708.03(b)) — the specific carve-out activity lists for
  both entity types.
- **`foreignqual_llc_application_requirements`** (Corp. Code
  § 17708.02(a), (b); § 17708.01(c)) — required content of a foreign
  LLC's certificate-of-registration application.
- **`foreignqual_corp_consequences`** (Corp. Code § 2203(a), (c);
  § 2258) — the corporation-specific consequences: per-day penalty,
  curable litigation bar, and misdemeanor.
- **`foreignqual_llc_consequences`** (Corp. Code § 17708.07(a)-(d);
  § 17708.09) — the LLC-specific consequences, explicitly disclosed as
  not parallel to the corporation statute's.

## Genuine corrections caught during research

- The task brief's guessed LLC section numbers (§ 17708.02,
  § 17708.03) turned out correct, but not interchangeable as the brief
  implied: § 17708.02 governs the application requirements (parallel
  to § 2105), and § 17708.03 governs the definition of "transacting
  intrastate business" plus its carve-out list (parallel to § 191).
- The task brief did not identify the LLC consequences provision
  (§ 17708.07) or anticipate a real, meaningful asymmetry: unlike the
  corporation statute, the LLC Act (a) expressly permits an
  unregistered LLC to still defend itself in court, (b) expressly
  shields members/managers from personal liability solely for
  unregistered transacting, (c) deems the Secretary of State the LLC's
  agent for service if unregistered, and (d) has **no per-day civil
  penalty or misdemeanor criminal penalty** parallel to the
  corporation statute's $20/day penalty or $500-$1,000 misdemeanor —
  its only extra enforcement tool is Attorney General injunctive
  authority under § 17708.09.
- The task brief assumed the statute states a noncompliant corporation
  "remains liable on its contracts." Direct review shows the statute
  contains no such phrase — § 2203(c) only bars the corporation from
  affirmatively *maintaining* an action, doesn't restrict others from
  suing it, and its "until it has complied" phrasing shows the bar is
  curable, not a permanent voiding.
- Confirmed § 2105 and § 2203 as the correct core corporation sections,
  and § 191 as the correct corporation-side "transacting intrastate
  business" definition, exactly as guessed.

## Honest gaps disclosed

- The "no per-day/criminal penalty" observation for LLCs is limited to
  the specific sections reviewed, not a survey of all California law
  that could conceivably bear on an unregistered foreign LLC.
- The document does not address parallel foreign-qualification regimes
  for other entity types (limited partnerships, foreign nonprofits).

## Method

Fetched Corp. Code §§ 2105, 191, 2203, 2258, 17708.01, 17708.02,
17708.03, 17708.07, and 17708.09 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 17 quotes across 7 authority clauses programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — every clause carries the appropriate disclosure, correctly
  distinguishing same-section-multiple-subsection citations from
  citations to genuinely separate, independent sections; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `entityType`, `stateOfFormation`,
  `principalOfficeAddress`, `dateSigned`, `cityState`) confirmed to
  match existing corpus conventions exactly — all six reused, zero
  renamed. New field: `authorizedSignerName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Foreign LLC/Corporation Qualification to Transact
  Business in California — Information Sheet
  (`foreign_entity_qualification_info_sheet`), 9 clauses (7 authority
  + 2 drafting), in the Business Formation category. New field:
  `authorizedSignerName`.
- Corpus: 963 → 972 clauses; 126 → 127 documents.
