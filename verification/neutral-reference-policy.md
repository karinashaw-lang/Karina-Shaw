# Ending employment, ninth document: Neutral Reference / Employment Verification Policy

## Why this document

The existing Employment Verification Letter and Termination/
Separation Letter only state the bare fact of employment or the
mechanics of ending it. This document covers the actual legal rules
governing what an employer can say when asked for a reference about a
former employee — confirmed non-duplicative by reading both existing
documents' clauses first.

## What this document covers

7 clauses: 2 drafting (overview, acknowledgment) and 5 authority
clauses:

- **`reference_blacklisting_prohibition`** (Lab. Code § 1050) — the
  misdemeanor blacklisting prohibition, turning on "misrepresentation."
- **`reference_truthful_statement_safe_harbor`** (Lab. Code § 1053) —
  the safe harbor for a truthful, specially-requested statement, and
  the evidentiary trap for coded or unsolicited signals.
- **`reference_civil_treble_damages`** (Lab. Code § 1054) — the
  private treble-damages remedy.
- **`reference_qualified_privilege`** (Civ. Code § 47(c)) — the
  qualified privilege for good-faith job-performance communications
  and rehire/sexual-harassment-basis answers.
- **`reference_no_mandated_neutral_policy`** — the honest negative
  finding that a strict "dates and title only" neutral-reference
  policy is a risk-management practice, not a legal mandate.

## Genuine corrections caught during research

- The task brief assumed § 1053 is the criminal-penalty provision.
  Direct review shows the misdemeanor penalty is written into § 1050
  itself; § 1053 is actually a safe harbor permitting truthful,
  specially-requested statements.
- The task brief assumed the treble-damages remedy (§ 1054) covers
  §§ 1050-1053. Direct review shows it covers only §§ 1050-1052 —
  consistent with § 1053 being a safe harbor, not a prohibition.

## Honest gaps disclosed

- No California statute sets a response-time deadline or writing
  requirement for reference requests — reported as an honest negative
  finding.
- Independent case law on what defeats Civil Code § 47(c)'s "without
  malice" standard was not verified; CourtListener was rate-limited
  during drafting and not pursued further past that point.

## Defect caught and fixed during integration

All five authority clauses cite a single statutory section but
initially lacked the standard explicit single-source disclosure
sentence — added during integration for consistency with project
convention.

## Method

Fetched Labor Code §§ 1050, 1051, 1052, 1053, 1054 and Civil Code § 47
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 5 authority
  clauses — added the standard disclosure sentence to all five for
  consistency.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Acknowledgment") is the pre-existing generic
  drafting-title pattern.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Neutral Reference / Employment Verification Policy
  (`neutral_reference_policy`), 7 clauses (5 authority + 2 drafting),
  in the "Ending employment" category. New field: `inquiringPartyName`
  (`companyName`, `employeeName` reused from existing conventions).
- Corpus: 647 → 654 clauses; 86 → 87 documents.
