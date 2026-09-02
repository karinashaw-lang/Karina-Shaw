# Business Formation, new document: Certificate of Amendment to Articles of Incorporation — Information Sheet

## Why this document

The existing Articles of Incorporation, Corporate Bylaws, Corporate
Dissolution, and Corporate Board Resolution documents don't cover the
post-formation amendment process — a distinct statutory mechanism a
corporation uses to change its articles after formation.

## What this document covers

9 clauses: 2 drafting (certificate of amendment declaration, officer
signature/certification) and 7 authority clauses:

- **`certamend_general_power`** (Corp. Code § 900) — the general power
  to amend articles.
- **`certamend_board_shareholder_approval`** (Corp. Code § 902) —
  board and shareholder approval mechanics.
- **`certamend_preissuance_amendment`** (Corp. Code § 901) — the
  different, pre-issuance amendment process (incorporators or
  directors, by signed writing, no shareholder vote since none exist
  yet).
- **`certamend_required_content`** (Corp. Code §§ 905, 907; § 173) —
  required content of the post-issuance certificate of amendment.
- **`certamend_class_vote_trigger`** (Corp. Code § 903) — the
  7-item list of amendment types requiring a separate class vote.
- **`certamend_effective_date`** (Corp. Code § 908; § 110(c)) — when
  an amendment becomes effective, including the delayed-effective-date
  option unavailable for original articles.
- **`certamend_restated_articles`** (Corp. Code § 910) — restated
  articles as a genuinely separate mechanism from a standalone
  amendment.

## Genuine corrections and findings

- Corrected the general-power citation: § 900, not § 902, grants the
  general power to amend; § 902 governs only approval mechanics.
- **A significant correction**: the pre-issuance "board alone"
  provision actually lives at § 901, not § 902, and is not accurately
  described as "board alone" — it is a majority of incorporators (if
  no directors yet exist) or a majority of directors (if directors
  exist), acting by signed writing, with no shareholder vote because
  no shares exist yet. Section 902's own board-alone exceptions
  (subds. (b)-(d)) are a separate, narrower thing: they apply only
  after shares are issued, to three specifically enumerated situations
  (pre-1929 perpetual-existence extensions, single-class stock splits,
  and deleting stale initial-address/agent information) — not a
  general "minor amendment" carve-out.
- Corrected the required-content citation: § 905, not § 906, covers
  the post-issuance certificate; § 906 governs the different
  pre-issuance certificate tied to § 901. Also pulled in § 907
  (wording mechanics) and § 173 (the statutory definition of
  "officers' certificate," requiring one signer from
  chair/president/vice president and one from
  secretary/CFO/treasurer/assistant secretary/assistant treasurer).
- Confirmed the class-vote trigger (§ 903) as framed: a 7-item list of
  amendment types requiring separate class approval, in addition to
  (not as an alternative to) overall outstanding-voting-shares
  approval.
- Confirmed the effective-date rule as framed: § 908 (effective on
  filing) plus § 110(c), which — unlike original articles, which
  § 110(c) excludes — does allow a certificate of amendment to specify
  a delayed effective date up to 90 days.
- Confirmed restated articles under § 910 as a genuinely separate
  mechanism that consolidates and supersedes all prior articles,
  amendments, and certificates of determination into one integrated
  document.

## Honest gap disclosed

This topic is purely statutory; no case law was needed to answer any
of the six research questions, and CourtListener was not queried.
Sections 904 (assessable-shares amendments), 909 (extending a
limited-term corporation's existence), and 911 (nonprofit/cooperative
status-change amendments) were fetched and reviewed but intentionally
left out of the delivered clause set as out-of-scope edge cases not
asked for.

## Method

Fetched Corp. Code §§ 110, 173, and 900-911 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually
identical. All 15 citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — every clause pulling
  multiple subsections of the same section (§§ 900, 902, 903, 910)
  discloses this correctly; § 901/§ 906, § 905/§ 907/§ 173, and
  § 908/§ 110 are each correctly labeled as independent sections since
  they aren't subsections of one section; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field name (`companyName`) independently confirmed to match the
  existing Articles of Incorporation document's field exactly. New
  fields: `formerCompanyName`, `amendedArticleText`, `officerName`,
  `officerTitle`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Certificate of Amendment to Articles of Incorporation
  — Information Sheet (`certificate_of_amendment_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Business Formation
  category. New fields: `formerCompanyName`, `amendedArticleText`,
  `officerName`, `officerTitle`.
- Corpus: 1,288 → 1,297 clauses; 162 → 163 documents.
