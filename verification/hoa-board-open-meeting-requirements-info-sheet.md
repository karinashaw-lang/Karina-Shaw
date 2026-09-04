# Real Estate, new document: Common Interest Development Open Meeting Act — HOA Board Meeting Requirements — Information Sheet

## Why this document

First document of wave 86. Read the existing "HOA Board Election
Procedures" document and every clause under its `hoaelection_` prefix
in full — confirmed it covers only Civil Code §§ 5100-5145 secret-
ballot election mechanics, with no general board-meeting/notice
content. Also checked the other three HOA/Davis-Stirling documents
(CC&R disclosure, assessment lien/foreclosure, common-interest-
development formation) and confirmed none address general board
open-meeting rules. Grepped the corpus for "4900," "4950," "open
meeting," and "executive session" — the only hits were narrow,
transaction-specific references inside lien/foreclosure clauses (a
required vote "in an open meeting"/"in executive session" for a
specific lien decision) and a passing phrase inside the election-
tabulation clause, none amounting to a treatment of the general
open-meeting regime. Confirmed non-duplicative.

## What this document covers

8 clauses: 2 drafting (declaration, acknowledgment of review) and 6
authority clauses, citing Cal. Civ. Code §§ 4900, 4910(a), 4920(a),
(b)(2), (c), (d), 4923, 4925(a)-(b), 4930(a), 4935(a), (e), 4950(a),
4955(a)-(b):

- **`hoaopenmeeting_general_rule`** (§ 4900, § 4910(a)) — the Act's
  short title and the core rule that a board may not take action
  outside a board meeting.
- **`hoaopenmeeting_notice_requirements`** (§ 4920(a), (b)(2), (c),
  (d); § 4923) — the 4-day default notice period, the 2-day
  executive-session-only exception, the notice-free emergency-meeting
  exception, delivery method, and required agenda content.
- **`hoaopenmeeting_executive_session_limits`** (§ 4935(a), (e)) —
  the enumerated list of permitted executive-session topics and the
  requirement that executive-session matters be generally noted in the
  next open meeting's minutes.
- **`hoaopenmeeting_member_attendance_and_speaking_rights`**
  (§ 4925(a)-(b)) — members' right to attend (outside executive
  session) and to speak, subject to a reasonable board-set time limit.
- **`hoaopenmeeting_agenda_action_requirement`** (§ 4930(a)) — the
  rule limiting nonemergency-meeting discussion/action to items on the
  distributed agenda.
- **`hoaopenmeeting_minutes_and_enforcement`** (§ 4950(a); § 4955(a)-(b))
  — the 30-day minutes-availability requirement and members' civil
  remedy (declaratory/injunctive relief, attorney's fees, and a
  per-violation civil penalty up to $500).

## Genuine corrections and findings

- Confirmed the Davis-Stirling Act's open-meeting provisions are
  formally titled the "Common Interest Development Open Meeting Act"
  (Article 2 of Chapter 6, Part 5, Division 4) — verified from § 4900's
  own short-title text rather than assumed.
- Confirmed §§ 4940 and 4945 do not exist at leginfo (both fetches
  returned empty) — consistent with skipped numbers in the enacted
  numbering scheme; nothing was fabricated to fill the gap, and no
  clause cites either number.
- Correctly distinguished § 4923 (a separately-numbered emergency-
  meeting-exception section) from § 4920's own subdivisions, disclosing
  it as an independent section rather than folding it into the § 4920
  "same section" group.
- Correctly disclosed § 4950(a) and § 4955 as related-but-separate
  sections (a recordkeeping duty and a civil remedy provision) rather
  than treating them as subdivisions of one section.

## Honest gap(s) disclosed (integration-review finding)

**A genuine leak bug was found and fixed during integration review**:
the delivered `gap` fields for six of the six authority clauses used
literal `{{hoaName}}` placeholder syntax — a violation of the
established rule that `gap` fields are never substituted. Corrected
each occurrence to plain, non-templated text ("the association"/"the
association's") before merging; re-ran the leak scan afterward and
confirmed clean. This is the first `{{}}` leak caught in this session
requiring a fix, rather than a false-positive flag.

Civil Code § 4045 (general-delivery mechanics) and § 4090
(teleconference-meeting mechanics), both cross-referenced by name, are
not independently fetched or quoted. § 4920(b)(3) (a governing-
document-based longer notice period), § 4930(b)-(e) (narrow agenda-
rule exceptions), and § 4935(b)-(d) (mandatory-executive-session
triggers) are named but not separately quoted. This document does not
determine whether any specific meeting, notice, or board action of a
specific association complied with these requirements.

## Method

Fetched Cal. Civ. Code §§ 4900, 4910, 4920, 4923, 4925, 4930, 4935,
4950, and 4955 from `leginfo.legislature.ca.gov`, each fetched twice
by the research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 15 citation quotes
across the 6 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a thirty-second fetch (a
distinct curl User-Agent string, "Groundtruth-32ndVerify-
HOAOpenMeeting/1.0") of all nine sections — all 15 quotes confirmed
clean, and the `{{hoaName}}` leak in the gap fields was caught and
corrected during this same review pass.

## Verification

- All nine statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  thirty-second independent fetch during integration review; all
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — found and fixed six `{{hoaName}}` leaks in `gap`
  fields; clean after correction.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section versus genuinely independent sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Acknowledgment of Review") matches the
  established boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper case/citation identifier strings.
- No new fields required — all three fields (`hoaName`, `dateSigned`,
  `cityState`) reused from the existing sibling HOA Board Election
  Procedures document (4, 163, and 141 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Common Interest Development Open Meeting Act — HOA
  Board Meeting Requirements — Information Sheet
  (`hoa_board_open_meeting_requirements_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 2,938 → 2,946 clauses; 387 → 388 documents. First addition of
  wave 86.
