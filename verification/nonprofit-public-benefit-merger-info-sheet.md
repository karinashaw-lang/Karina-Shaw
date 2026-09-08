# Business Formation, new document: Nonprofit Public Benefit Corporation Merger — Information Sheet

## Why this document

Second processed item of wave 141 (Business Formation slot #1, 2×2
pattern). The agent confirmed the corpus's only existing merger
document (`corporate_statutory_merger_info_sheet`) covers exclusively
the General Corporation Law procedure for for-profit corporations
(Corp. Code §§ 1100-1113) — nonprofit public benefit corporation
mergers are governed by a separate, independently codified chapter
(Corp. Code §§ 6010-6022) with materially different rules, most
notably an Attorney General consent/notice regime with no for-profit
analog. A personal duplication spot-check independently confirmed
zero prior corpus hits on "6011," "6012," "6019," or "6020," and
identified the apparent hits on "6010" and "6014" as false-positive
cross-code collisions (Fam. Code § 3424(a) and Rev. & Tax. Code
§ 6014, respectively) — confirmed by inspecting each hit's actual
citation field.

## What this document covers

9 clauses: 2 drafting (recitals, closing record) and 7 authority
clauses, citing Corp. Code §§ 6010(a)-(c), 6011, 6012, 6014, 6019,
and 6020(a)-(b):

- **`npmerger_permitted_merger_partners`** — the general merger-
  partner allowance and the enumerated list a public benefit
  corporation may merge with without Attorney General consent (two
  citations).
- **`npmerger_ag_notice_and_membership_limit`** — the 20-day advance
  Attorney General notice duty and the limit on what a member may
  receive (two citations).
- **`npmerger_agreement_requirements`** — board approval and the
  required contents of the agreement of merger (two citations).
- **`npmerger_member_approval`** — the separate member-approval
  requirement for the merger's principal terms.
- **`npmerger_certificate_filing`** — the officers' certificate,
  filing, and effective-date mechanics (two citations).
- **`npmerger_business_corporation_hybrid`** — the cross-reference
  table for a merger between a nonprofit and a business corporation.
- **`npmerger_effect_successor_liability`** — successor liability and
  preserved creditor rights on merger (two citations).

## Genuine findings

- **A disclosed genuine textual anomaly, not resolved by this
  document**: the hybrid-merger clause's gap flags that § 6019's
  cross-reference list for a nonprofit/business-corporation merger
  omits § 6010 — the section imposing the Attorney General consent
  and notice duties — for the constituent public benefit corporation,
  and states plainly that whether those duties nonetheless continue
  to apply in that scenario is a real textual question this document
  does not resolve, rather than picking an answer.
- **Two disclosed benign formatting artifacts, confirmed against the
  raw source rather than silently corrected**: (1) a line-wrap
  artifact between "proposed" and "agreement of merger" in § 6010(b),
  confirmed identical across two independent fetches; (2) a stray
  double space in § 6020(c), confirmed identical across two
  independent fetches — handled by simply not quoting that
  subdivision rather than reproducing or silently fixing the anomaly.
- **A disclosed non-breaking-space/punctuation-spacing artifact**
  (found and independently confirmed during integration review): the
  § 6011 lettered-list quote's HTML source uses non-breaking spaces
  after each subdivision marker and a space after each colon/
  semicolon that the delivered quote's plain-text rendering omits —
  the same well-catalogued subdivision-marker-adjacency pattern
  documented throughout this session; confirmed via a whitespace-
  stripped substring match against the freshly fetched source.

## Honest gap(s) disclosed

This document does not reproduce the cross-referenced definitions of
"foreign corporation" (§ 171), "other business entity" (§ 5063.5), or
"members" (§ 5034), does not address a public benefit corporation
with no members, does not address the campaign-finance-committee
exemption under Government Code §§ 12581, 12583, and 82013, does not
address mutual benefit or religious corporation merger rules beyond
the cross-reference table, does not address charitable-trust/cy pres
doctrine underlying "trust obligations," does not address tax or
securities consequences of a nonprofit-to-business-corporation
merger, and does not cite any case law (CourtListener search returned
no on-point authority construing this chapter).

## Method

Fetched Corp. Code §§ 6010, 6011, 6012, 6014, 6019, and 6020 from
leginfo.legislature.ca.gov, the six cited sections fetched twice by
the research agent with two distinct User-Agent strings via curl,
confirmed byte-identical (two additional sections, 6013 and
6015-6018, 6021, fetched only to confirm they were not independently
needed). All 11 citation instances were programmatically confirmed by
the research agent as exact substrings of the extracted source text.

Independently re-verified during integration review via a two-
hundred-and-twenty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-227thVerify-NonprofitPublicBenefitMerger/1.0")
of all six statutory sections — all fetched cleanly on the first
attempt. 9 of 11 citation instances confirmed clean on direct
substring match; the remaining 2 (the § 6010(b) notice quote and the
§ 6011 lettered-list quote) confirmed clean only after normalizing
whitespace, matching the two artifacts already disclosed in the
delivered gap fields (the § 6010(b) line-wrap) and a newly confirmed
non-breaking-space/punctuation-spacing artifact in § 6011's raw HTML
(disclosed above under Genuine findings). The merger-partner
allowance and Attorney General consent list, the notice and
membership-limit rules, the agreement's required contents, the
member-approval requirement, the certificate-filing and effective-
date mechanics, the hybrid cross-reference table, and the successor-
liability and creditor-rights provisions were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All six cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-seventh independent fetch during integration
  review; all 11 citation instances confirmed clean (2 only after
  normalizing benign, source-side whitespace artifacts).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `npmerger_` prefix has zero collisions. Ran section-
  number-specific greps for "6010," "6011," "6012," "6014," "6019,"
  and "6020" — the two apparent hits (6010, 6014) confirmed
  false-positive cross-code collisions (Fam. Code § 3424(a), Rev. &
  Tax. Code § 6014) by inspecting each hit's citation field directly.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new field ids required — all nine fields
  (`constituentCorporationNames`, `survivingCorporationName`,
  `boardApprovalDate`, `requiredApprovalStatement`, `noticeDate`,
  `shareholderApprovalDate`, `dateSigned`, `authorizedSignerName`,
  `authorizedSignerTitle`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Nonprofit Public Benefit Corporation Merger —
  Information Sheet (`nonprofit_public_benefit_merger_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 4,678 → 4,687 clauses; 581 → 582 documents. Second
  processed item of wave 141.
