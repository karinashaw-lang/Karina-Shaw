# Ending employment, new document: Blacklisting a Former Employee — Information Sheet

## Why this document

California Labor Code §§ 1050-1053 previously existed in the corpus only
as three clauses embedded within the existing Neutral Reference /
Employment Verification Policy document (`reference_blacklisting_prohibition`,
`reference_truthful_statement_safe_harbor`, `reference_civil_treble_damages`),
treated there as a supporting topic within a broader internal-policy
document. Following the established "deepen a narrow/passing-mention
topic into a full dedicated document" pattern, this document independently
re-verifies that ground and expands into genuinely new statutory
territory the reference document didn't cover.

## What this document covers

7 clauses: 2 drafting (purpose/scope declaration, certification/signature)
and 5 authority clauses, all citing Cal. Labor Code §§ 1050-1054:

- **`blacklist_core_prohibition`** (§ 1050) — the misdemeanor prohibition
  on preventing re-employment by misrepresentation; applies to both
  successful and unsuccessful attempts.
- **`blacklist_photograph_fingerprint_scheme`** (§ 1051) — a related but
  distinct prohibition: conditioning employment on photographs or
  fingerprints shared with other employers, subject to an unverified
  § 1057 exception.
- **`blacklist_liability_for_permitting_violation`** (§ 1052) — extended
  liability for knowingly permitting an agent or employee to violate
  §§ 1050-1051.
- **`blacklist_truthful_statement_safe_harbor`** (§ 1053) — the safe
  harbor for a truthful, specially-requested statement, and its
  "mark, sign, or other means" evidentiary trap.
- **`blacklist_civil_treble_damages`** (§ 1054) — the private treble-
  damages civil remedy, independent of any criminal prosecution.

## Genuine corrections and findings

- **A correction to a common mislabeling, independently re-confirmed**:
  § 1053 is often treated as "the" blacklisting-penalty provision, but the
  misdemeanor penalty is actually in § 1050 — § 1053 is a safe harbor, not
  a prohibition. This correction was carried forward from the existing
  Neutral Reference document's own finding but independently re-verified
  against fresh fetches rather than copied.
- **A citation-scope finding disclosed rather than assumed**: the assignment
  named §§ 1050-1053 as the statutory range, but the civil treble-damages
  remedy is actually codified at § 1054, a separately drafted section, not
  a subdivision of an already-cited one — disclosed explicitly with the
  required source-independence note.
- Confirmed § 1054's treble-damages remedy reaches violations of
  §§ 1050-1052 only, not § 1053 (since § 1053 is a safe harbor, not a
  prohibition) — the same scope limitation applies to § 1052's extended
  liability.
- Two genuinely new statutory provisions not previously covered anywhere
  in the corpus: § 1051 (photograph/fingerprint conditioning) and § 1052
  (extended liability for permitting a violation) — neither appeared in
  the existing Neutral Reference document's three blacklisting clauses.

## Honest gap disclosed

Labor Code § 1057 (the exception § 1051's own text cross-references —
"Except as provided in Section 1057") was not independently fetched or
verified; this document states only that the exception exists and does
not describe its content.

## Method

Fetched Cal. Labor Code §§ 1050, 1051, 1052, 1053, and 1054 directly from
`leginfo.legislature.ca.gov`, each fetched twice with distinct User-Agent
strings (Chrome/Windows and Safari/macOS) — confirmed byte-identical after
whitespace normalization across all five sections. All 5 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All five sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses that its citation is a standalone statutory section (each of
  §§ 1050-1054 cited independently, not as subdivisions of a shared
  section); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none, and a
  new `blacklist_` id prefix was deliberately used to avoid colliding
  with the existing `reference_` prefixed clauses). Two accepted generic
  drafting-title reuses ("Purpose and Scope of This Information Sheet,"
  "Certification").
- Field names (`companyName`, `employeeName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention, with
  `companyName`/`employeeName` marked optional so the sheet can stand
  alone without naming a specific employer or employee. New field:
  `preparerName` — actually already existing corpus-wide; confirmed no
  new field ids were introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Blacklisting a Former Employee — Information Sheet
  (`blacklisting_former_employee_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Ending employment category. No new fields.
- Corpus: 1,940 → 1,947 clauses; 248 → 249 documents. Second document of
  wave 50.
