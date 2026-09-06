# Ending employment, new document: Civil Code Section 1542 General Release Waiver — Information Sheet

## Why this document

First processed item of wave 101 (Ending employment slot, 2×2 pattern
targeting the corpus's two then-lowest-tied categories). A scoping pass
proposed Labor Code § 6310 safety-retaliation as the top pick, but a
clause-level (not just document-title) duplication check found this
already covered by the existing "Right to Refuse Hazardous Work"
document's `refusehazardous_section6310_broader_complaint_protection`
clause, filed under During employment. Retargeted to a confirmed-clean
backup: Civil Code § 1542's general-release default rule, distinct from
the existing Severance Agreement's generic release clause (`sev_release`),
which does not itself quote or reference § 1542.

## What this document covers

7 clauses: 4 drafting (intro, common-practice note, relationship to the
Severance release, case-law research note) and 3 authority clauses,
citing Civil Code § 1542:

- **`release1542_full_text`** — the statute's current text in full.
- **`release1542_two_elements`** — the two-part test (unknown/unsuspected
  at signing, and would have materially affected the settlement if
  known).
- **`release1542_statute_silent_on_waiver_mechanics`** — the significant
  correction that the statute's own text says nothing about how to
  validly waive its protection.

## Genuine findings

- **A corrected research-brief assumption**: the brief expected the
  statute's own text to state what a valid waiver of § 1542 requires.
  The agent read the current text (amended 2018, effective January 1,
  2019) and found it contains no waiver language, no "knowing and
  voluntary" standard, and no drafting requirements at all — only the
  default rule itself. Disclosed explicitly as a correction rather than
  inventing waiver mechanics to match the brief's assumption.
- **A disclosed, deliberate choice not to state an unverified case-law
  standard**: CourtListener's daily quota was exhausted on the agent's
  single lightweight test call before any case search could run. Rather
  than state a remembered "knowing and voluntary" judicial standard
  without verifying it against actual opinion text, the agent left that
  question entirely undescribed and disclosed the gap in two separate
  clauses.
- **A correctly scoped companion-document design**: the agent
  distinguished this document from the existing Severance Agreement's
  generic release clause — noting that clause's silence on § 1542 and
  unknown claims — without adding waiver language to that existing
  clause or duplicating its content.

## Honest gap(s) disclosed

This document does not define "suspect to exist" or "materially
affected" beyond the statute's own words, or resolve whether a
particular claim meets either part of the two-part test. It does not
state any judicially-derived standard for what makes an express § 1542
waiver enforceable (e.g., whether waiver language must name the statute)
— that entire body of case law is disclosed as unverified this session
due to CourtListener quota exhaustion. It does not add waiver language
to any specific release clause or determine whether a specific
agreement's release is effective.

## Method

Fetched Civil Code § 1542 from `leginfo.legislature.ca.gov` twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical (1,478 characters of extracted statutory HTML, exact
match). CourtListener's daily rate limit was already exhausted on a
single lightweight test call; no case law was used, a disclosed and
legitimate choice. All citation quotes programmatically confirmed by
the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
ninety-second fetch (a new distinct curl User-Agent string,
"Groundtruth-92ndVerify-Release1542/1.0") of the section — all 3
citation instances (across the 3 authority clauses) confirmed clean on
direct substring match, no extraction artifacts encountered.

## Verification

- Civil Code § 1542 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a ninety-second independent
  fetch during integration review; all 3 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — all three authority
  clauses cite the same single statutory section, correctly not treated
  as independent sources of each other.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed no prior clause
  anywhere in the corpus references Civil Code § 1542 before this
  document.
- Checked every citation's `case` field for emptiness — all 3 populated
  with proper citation identifier strings.
- No new fields required — both fields (`companyName`, `employeeName`)
  reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Civil Code Section 1542 General Release Waiver —
  Information Sheet (`civil_code_1542_general_release_waiver_info_sheet`),
  7 clauses (3 authority + 4 drafting), in the Ending employment
  category. No new fields.
- Corpus: 3,365 → 3,372 clauses; 446 → 447 documents. First processed
  item of wave 101.
