# Real Estate, new document: HOA Member Discipline and Fines — Information Sheet

## Why this document

Second processed item of wave 96 (Real Estate slot). A scoping pass
confirmed this corpus's existing Davis-Stirling documents cover
assessments/liens, board elections, and open meetings, but not the
separate pre-fine disciplinary notice-and-hearing procedure. This
document's own intro clause explicitly distinguishes it from all four
neighboring existing documents.

## What this document covers

6 clauses: 2 drafting (intro, acknowledgment) and 4 authority clauses,
citing Civil Code §§ 5850, 5855, 5865, and 5910:

- **`hoadiscipline_penalty_schedule_and_cap`** (§ 5850(a), (c)-(f)) — the
  required penalty schedule, the $100-per-violation cap (with a
  health/safety exception requiring a written board finding), the
  no-late-charges rule, and the on-request disclosure requirement.
- **`hoadiscipline_notice_and_hearing`** (§ 5855(a)-(c)) — the 10-day
  written notice, its required content, the executive-session right, and
  the pre-meeting cure opportunity.
- **`hoadiscipline_outcome_and_written_decision`** (§ 5855(d)-(g), § 5865)
  — what happens after agreement or disagreement, the 14-day
  written-notice-of-decision requirement, and the saving clause
  preserving the board's underlying disciplinary authority.
- **`hoadiscipline_idr`** (§ 5910) — the separate internal dispute
  resolution procedure a member may invoke after a disciplinary meeting.

## Genuine findings

- **A significant correction to the research brief's own premise**: the
  brief described § 5850 as a general "scope" provision and § 5865 as a
  "written decision within 15 days" requirement. Neither is correct.
  Civil Code §§ 5850 and 5855 were substantially amended effective June
  30, 2025 (Stats. 2025, Ch. 22 (AB 130)); the current text makes § 5850
  the penalty-schedule/cap provision, § 5855 the actual notice-hearing-
  decision procedure (with a 14-day, not 15-day, written-notice
  deadline), and § 5865 a short saving clause preserving the board's
  underlying authority rather than imposing any decision deadline
  itself. The research agent caught this by reading the actual current
  statutory text rather than trusting the brief's characterization.
- **A confirmed negative finding**: Civil Code § 5860, which the brief
  assumed might contain related content, does not currently exist as an
  enacted section — confirmed by the research agent via an empty content
  div on two separate fetches, and independently re-confirmed during
  integration review via a fresh fetch showing the same empty section
  body.
- **A correctly declined case-law fit**: the research agent found and
  fully read Ekstrom v. Marquesa at Monarch Beach Homeowners Assn., 168
  Cal.App.4th 1111 (2008), a plausible-looking candidate, and correctly
  excluded it after confirming it actually concerns CC&R
  view-obstruction/tree-trimming enforcement and the business-judgment
  rule — not disciplinary-hearing due process. The document is purely
  statutory, a disclosed and legitimate choice after a good-faith search
  for on-point case law within the CourtListener rate-limit budget
  turned up nothing on point.

## Honest gap(s) disclosed

Article 1's neighboring §§ 5870 and 5875, and Article 2's §§ 5900 and
5920 (both within the same two chapters as the sections actually
verified), were not fetched or described. Each authority clause draws on
subsections of a single statutory section, disclosed as one source
presented as several numbered points rather than independent
corroborating sources. This document does not state what any specific
association's own penalty schedule or IDR procedure provides, and does
not determine whether any actual notice, hearing, decision, or fine has
complied with the statutory requirements it describes.

## Method

Fetched Civil Code §§ 5850, 5855, 5865, and 5910 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. § 5860 confirmed empty (no enacted content) on
both fetches. All 18 citation quotes across the 4 authority clauses
programmatically confirmed by the research agent as exact, contiguous
substrings (no ellipsis-joined quotes).

Independently re-verified during integration review via a
seventy-third fetch (a new distinct curl User-Agent string,
"Groundtruth-73rdVerify-HOADiscipline/1.0") of all four sections — all
18 quotes confirmed clean on direct substring match, no extraction
artifacts encountered. The § 5860 negative finding was independently
spot-checked via a fresh fetch confirming the same empty section body,
rather than accepted on the agent's self-report alone.

## Verification

- Civil Code §§ 5850, 5855, 5865, and 5910 each fetched twice
  independently by the research agent with distinct User-Agent strings,
  plus a seventy-third independent fetch during integration review; all
  18 quotes confirmed clean.
- The § 5860 non-existence finding independently corroborated via a
  fresh fetch during integration review.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its multiple citations are subsections of a single
  statutory section, not independent sources; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 18 populated
  with proper citation identifier strings.
- No new fields required — all three fields (`hoaName`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: HOA Member Discipline and Fines — Information Sheet
  (`hoa_member_discipline_and_fines_info_sheet`), 6 clauses (4 authority
  + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 3,226 → 3,232 clauses; 427 → 428 documents. Second processed
  item of wave 96.
