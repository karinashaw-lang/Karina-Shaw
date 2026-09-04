# Business Formation, new document: Removal of a Corporate Officer — Information Sheet

## Why this document

Confirmed by grep that "officer removal," "removal of officers," and
"officer at will" had zero hits anywhere in the corpus. Read the
existing Corporate Bylaws document's clauses in full and confirmed its
`bylaws_officers` clause is a bare drafting sentence with no statutory
citation. First of wave 65's four documents.

## What this document covers

7 clauses: 2 drafting (purpose/scope, record/certification) and 5
authority clauses, citing Cal. Corp. Code § 312(a)-(b) and Cal. Lab.
Code § 2922:

- **`officerremoval_required_officers`** (§ 312(a)) — the required
  officers and the default chief executive officer designation.
- **`officerremoval_multiple_offices`** (§ 312(a)) — the default rule
  permitting one person to hold multiple offices.
- **`officerremoval_selection_and_removal`** (§ 312(b)) — **a key
  finding**: officers "serve at the pleasure of the board," subject to
  any contract-of-employment rights — with the statute's actual
  phrasing corrected against the task brief's assumption.
- **`officerremoval_resignation`** (§ 312(b)) — an officer's reciprocal
  right to resign.
- **`officerremoval_vs_at_will_employee`** (§ 312(b) + Lab. Code
  § 2922) — a verified, genuinely independent distinction between
  corporate-office removal and separate at-will employment status.

## Genuine corrections and findings

- **The central finding, correcting the research assignment's own
  premise**: the task brief speculated § 312 uses "with or without
  cause" phrasing. The actual current text (amended 2023) instead says
  officers "serve at the pleasure of the board" — the delivering agent
  used only the verified phrase and explicitly disclosed the statute
  does not contain "with or without cause," rather than perpetuating
  the assignment's own assumption.
- **A sub-topic honestly omitted, not guessed**: the task brief asked
  about vacancy-filling; a full-text search of the fetched § 312 found
  no mention of "vacancy" at all, so that point was omitted entirely
  rather than assumed to live elsewhere in the section.
- Confirmed § 312's board-removal power and an officer's own
  resignation right are reciprocal statutory rules within the same
  subdivision, each expressly preserving the other party's separate
  contract rights.
- Confirmed Corp. Code § 312 and Labor Code § 2922 are genuinely
  independent statutes governing two distinct legal relationships (the
  corporate office and the employment relationship) that can coexist
  for the same individual.

## Honest gap disclosed

The statute preserves an officer's contract-of-employment rights "if
any" but does not itself define what such a contract must contain to
create them, and does not state whether removing a specific officer
without cause would breach any specific contract. The statutory and
common-law exceptions to at-will employment (covered elsewhere in this
corpus) are not restated here.

## Method

Fetched Cal. Corp. Code § 312 and Cal. Lab. Code § 2922 from
`leginfo.legislature.ca.gov` via curl (WebFetch blocked), each section
fetched twice with two genuinely distinct request profiles (User-Agent,
headers, URL formatting), confirmed byte-identical. All 6 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- Both statutes fetched twice independently with distinct request
  profiles; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 312(a) and (b)
  citations correctly disclosed as one statutory section, not
  independent of each other; the § 312/Lab. Code § 2922 comparison
  correctly disclosed as genuinely independent (different codes);
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Field names (`companyName`, `officerName`, `officerTitle`,
  `preparerName`, `dateSigned`, `cityState`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Removal of a Corporate Officer — Information Sheet
  (`officer_removal_info_sheet`), 7 clauses (5 authority + 2 drafting),
  in the Business Formation category. No new fields.
- Corpus: 2,381 → 2,388 clauses; 307 → 308 documents. First document
  of wave 65.
