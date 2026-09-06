# Hiring, new document: Time-of-Hire Workers' Compensation Rights Notice — Information Sheet

## Why this document

Fourth and final processed item of wave 101 (Hiring slot). A scoping
pass confirmed zero prior coverage of the time-of-hire workers'
compensation written notice, distinct from the existing "duty to secure
workers' compensation insurance" document (which explicitly scopes
itself away from this notice requirement) and from the "Notice to
Employee as to Change in Relationship" document (which covers the EDD's
unemployment-insurance separation pamphlet — a different notice, statute,
timing, and subject matter entirely).

## What this document covers

8 clauses: 2 drafting (intro, signature block) and 6 authority clauses,
citing Labor Code §§ 3550(a)-(b), (d), (e), 3551(a)-(c), and 8 CCR
§§ 9880, 9883(a), (a)(1):

- **`wcnotice_time_of_hire_duty`** — the core § 3551(a) time-of-hire
  duty and its statutory exception.
- **`wcnotice_additional_content_and_language`** — § 3551(b)'s bilingual
  requirement and three additional required content items.
- **`wcnotice_incorporated_3550_content`** — the substantive § 3550(d)
  content list incorporated by reference into the § 3551 notice.
- **`wcnotice_posted_notice_distinguished`** — the separate, differently-
  timed workplace-posted notice under § 3550, with its own misdemeanor
  and personal-physician consequences that don't automatically extend to
  the time-of-hire notice.
- **`wcnotice_regulatory_content_list`** — the implementing regulation's
  (8 CCR § 9880) content list, sourced from a secondary compiler after
  primary-source access failed.
- **`wcnotice_insurer_or_employer_published_version`** — 8 CCR § 9883's
  rules for an employer/insurer-published version of the notice.

## Genuine findings

- **A significant correction to the research brief's own attribution**:
  the brief assumed the time-of-hire written-notice duty is § 3550
  itself. The agent read the actual current text and found § 3550 is
  the workplace-*posted* notice; it's § 3551 that creates the "give
  every new employee written notice at hire" duty (incorporating § 3550's
  content plus three more items). The document was restructured to
  center on § 3551, with § 3550's separate posted-notice duty explicitly
  distinguished in its own clause.
- **A disclosed, honestly-reported access limitation for the CCR
  regulations**: the agent tried dir.ca.gov's title-8 pages (404), the
  Office of Administrative Law's own published-text search, and
  Westlaw's govt.westlaw.com/calregs (all unreachable), and disclosed
  that the regulation text instead comes from Cornell LII's secondary
  compilation — a well-established compiler, not California's primary
  publisher — with that limitation stated plainly rather than presented
  as primary-source-verified.
- **A disclosed gap on an undefined statutory reference**: § 3551(c)
  refers to "penalties for a failure to provide this notice" without
  itself defining them; the agent did not locate a separate penalty
  provision specific to a § 3551 violation and disclosed that honestly
  rather than assuming the § 3550(b) misdemeanor penalty (which
  attaches to the distinct posted-notice duty) also applies here.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted when checked; the document
  proceeds statute/regulation-only, disclosed explicitly.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 1 of 16 citation instances (8 CCR
§ 9883(a)(1)) mismatched on a strict check, passing after normalizing
space-before-punctuation. Manual inspection confirmed the established
Cornell LII markup-stripping whitespace artifact: a spurious space
before a period from a stripped inline cross-reference link ("Section
9880 ." vs. the natural reading "Section 9880."). Confirmed as a
genuine, already-documented source-side rendering artifact — no
correction needed.

## Honest gap(s) disclosed

This document does not investigate whether any specific employer has in
fact provided this notice to any specific employee, or whether a given
employee falls within the § 3351(d) exception. It does not independently
verify the CCR regulation text against a primary California publisher —
only a secondary compilation. It does not identify what specific
penalty attaches to a § 3551 (as opposed to § 3550) violation. It does
not state any case law construing this notice duty.

## Method

Fetched Labor Code §§ 3550 and 3551 from `leginfo.legislature.ca.gov`,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. Fetched
8 CCR §§ 9880 and 9883 from Cornell LII (a disclosed secondary source,
after primary California sources proved unreachable), each fetched twice
with the same two User-Agent strings, also confirmed byte-identical.
CourtListener's daily rate limit was already exhausted on a single
lightweight test call; no case law was used, a disclosed and legitimate
choice. All 16 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-fifth fetch (a new distinct curl User-Agent string,
"Groundtruth-95thVerify-WCNotice/1.0") of all four sources — 15 of 16
citation instances confirmed clean on direct substring match; the
sixteenth (8 CCR § 9883(a)(1)) matched only after normalizing
space-before-punctuation, confirmed as the established Cornell LII
whitespace artifact via manual context inspection.

## Verification

- Labor Code §§ 3550 and 3551, and 8 CCR §§ 9880 and 9883, each fetched
  twice independently by the research agent with distinct User-Agent
  strings, plus a ninety-fifth independent fetch during integration
  review; all 16 citation instances confirmed clean, one after
  accounting for a confirmed genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section, or the same subdivision
  used across two clauses, correctly disclose they are not independent
  sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 16 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`companyName`,
  `employeeName`, `startDate`, `dateSigned`, `cityState`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Time-of-Hire Workers' Compensation Rights Notice —
  Information Sheet
  (`time_of_hire_workers_compensation_rights_notice_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 3,386 → 3,394 clauses; 449 → 450 documents. Fourth and final
  processed item of wave 101.

## Wave 101 summary

Wave 101 followed the established 2×2 pattern, targeting Hiring and
Ending employment — the corpus's two then-lowest-tied categories. This
wave's scoping pass surfaced a valuable lesson: two of its four
top-pick topics (DTSA §1833(b) whistleblower notice for Hiring, Labor
Code §6310 safety retaliation for Ending employment) turned out to
already be covered elsewhere in the corpus, but at the *clause* level
rather than the document-title level — meaning the scoping agent's
document-title/description search alone missed them, and only a direct
grep of `clauses.json` caught both before launching research agents on
them. Both were swapped for confirmed-clean backups (Time-of-Hire
Workers' Compensation Rights Notice; Civil Code §1542 General Release
Waiver) before launch, and a third research agent (Wage Advances and
Draws Against Commission) independently ran the same clause-level check
mid-research and pivoted its own topic honestly after finding
substantial existing coverage. All four completed documents were built
with CourtListener's daily quota exhausted throughout (confirmed still
exhausted by an integration-review recheck partway through the wave),
consistent with the adaptation established in wave 98. Each surfaced
genuine findings through close primary-source reading: a corrected
statutory attribution with the wrong section fixed (Time-of-Hire WC
Notice: § 3551, not § 3550, creates the hire-time duty), a corrected
assumption about where a minimum-wage floor actually lives (Wage
Advances: an IWC wage order, not § 224), a corrected assumption that a
statute itself defines waiver mechanics (§ 1542: it doesn't), and a
corrected assumption about a unified "no double dip" rule (SDI: it's
two separate statutory tests). Per the established alternation, wave
102 should return to a 1×4 pattern.
