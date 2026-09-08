# Confidentiality & IP, new document: California Reader Privacy Act (Civil Code §§ 1798.90-1798.90.05) — Information Sheet

## Why this document

First processed item of wave 143 (Confidentiality & IP slot #1, 2×2
pattern). The agent's novelty check confirmed the one apparent
prior-corpus hit on "1798.90" was a false positive — an existing
data-breach clause's incidental cross-reference to the unrelated
§ 1798.90.5 (automated license-plate recognition data), confirmed by
inspecting the hit's exact context. A personal duplication spot-check
independently reconfirmed this false positive and zero hits on
"Reader Privacy Act."

## What this document covers

10 clauses: 3 drafting (purpose, scope note, acknowledgment) and 7
authority clauses, citing Civ. Code § 1798.90(b)(1), (b)(2), (b)(5),
(b)(6) (definitions), (c) intro, (c)(1), (c)(2)(B), (c)(3)-(5),
(g)(1)(A), (g)(4), (h), and § 1798.90.05:

- **`readerprivacy_definitions`** — "book," "book service," "provider,"
  and "personal information" (four citations).
- **`readerprivacy_general_prohibition`** — the baseline no-knowing/
  no-compelled-disclosure rule.
- **`readerprivacy_law_enforcement_court_order`** — the five-condition
  law-enforcement court-order track.
- **`readerprivacy_civil_litigant_court_order`** — the parallel track
  for other government entities/civil litigants, including the
  user's 35-day right to move to quash.
- **`readerprivacy_consent_emergency_crime_exceptions`** — the
  consent, imminent-danger, and crime-against-provider exceptions
  (three citations).
- **`readerprivacy_penalties_and_reliance_defense`** — the $500 civil
  penalty, two-year filing period, and reasonable-reliance defense
  (three citations).
- **`readerprivacy_child_exploitation_warrant_exception`** — the
  separate § 1798.90.05 search-warrant exception.

## Genuine findings

- **A disclosed structural distinction between two disclosure
  tracks**: the civil-litigant clause's gap notes that, unlike the
  law-enforcement track, this track requires the provider to withhold
  disclosure until the user has had a minimum 35-day pre-disclosure
  window to move to quash — a meaningful procedural difference stated
  plainly rather than glossed over.
- **A disclosed mandatory/permissive distinction**: the exceptions
  clause's gap notes the consent exception is phrased as mandatory
  ("shall disclose") while the emergency and crime-against-provider
  exceptions are both permissive ("may disclose"), and states that
  the document does not resolve what, if anything, would obligate
  disclosure in the latter two circumstances under other law.
- **A disclosed narrow-exception scope**: the child-exploitation
  warrant-exception clause's gap states plainly that this provision
  addresses only search warrants for specific enumerated federal
  offenses, not a general search-warrant pathway.
- **A disclosed absence of case law**: a CourtListener search found no
  California case construing the Act — disclosed in the scope-note
  clause rather than left unstated.

## Honest gap(s) disclosed

This document does not describe the Act's transparency-reporting
scheme (§ 1798.90(i)-(k)), the court-safeguard/quash authority
(§ 1798.90(d)), the record-preservation duty (§ 1798.90(e)), the
evidence-exclusion rule (§ 1798.90(f)), the federal Privacy Protection
Act of 1980 (42 U.S.C. § 2000aa) or Penal Code § 1524 warrant grounds
it cross-references, or the separate § 1798.80 personal-information
list it incorporates by reference. It does not resolve whether a
public library or other noncommercial entity is a "provider" bound by
the Act (limited by its own text to a "commercial entity"), and does
not cite any case law construing the Act (confirmed genuine absence
via CourtListener search).

## Method

Fetched Civ. Code §§ 1798.90 and 1798.90.05 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via curl, confirmed byte-
identical. All 14 citation instances were programmatically confirmed
by the research agent as exact substrings after normalizing a
disclosed HTML line-wrap artifact confirmed identical across both
fetches.

Independently re-verified during integration review via a two-
hundred-and-thirty-fourth fetch (a new distinct curl User-Agent
string, "Groundtruth-234thVerify-ReaderPrivacyAct/1.0") of both
statutory sections — both fetched cleanly on the first attempt. All
14 citation instances confirmed clean on normalized-whitespace
substring match, consistent with the line-wrap artifact already
disclosed in the delivered clauses' gap fields. The definitions, the
baseline prohibition, both court-order tracks, the three further
exceptions, the penalties and reliance defense, and the child-
exploitation warrant exception were all independently reconfirmed
present in the freshly fetched text.

## Verification

- Both cited statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-thirty-fourth independent fetch during integration
  review; all 14 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `readerprivacy_` prefix has zero collisions. Ran a
  section-number-specific grep for "1798.90" and "Reader Privacy
  Act" — the one apparent hit confirmed a false-positive cross-
  reference (§ 1798.90.5, ALPR data) by inspecting the hit's exact
  context directly.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- No new field ids required — all four fields (`businessName`,
  `websiteURL`, `preparerName`, `signatureDate`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California Reader Privacy Act (Civil Code
  §§ 1798.90-1798.90.05) — Information Sheet
  (`reader_privacy_act_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 4,737 → 4,747 clauses; 588 → 589 documents. First processed
  item of wave 143.
