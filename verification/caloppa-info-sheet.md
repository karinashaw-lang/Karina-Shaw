# Confidentiality & IP, new document: California Online Privacy Protection Act (CalOPPA) — Information Sheet

## Why this document

Confirmed by grep that "CalOPPA" and "Online Privacy Protection Act" had
zero hits anywhere in the corpus. Distinct from the existing "Website/App
Privacy Policy — CCPA Consumer-Facing Disclosure" document, which covers
the separate, later, broader California Consumer Privacy Act (Civ. Code
§§ 1798.100-1798.135) — CalOPPA (Bus. & Prof. Code §§ 22575-22579) is the
older, narrower website-privacy-policy-posting requirement that predates
and still coexists with the CCPA. The delivering agent read the existing
CCPA document first to confirm no duplication and to match its tone,
schema, and field-id conventions.

## What this document covers

8 clauses: 2 drafting (posting declaration, certification) and 6 authority
clauses, all citing Bus. & Prof. Code §§ 22575-22579:

- **`caloppa_posting_requirement`** (§ 22575(a)) — the duty to conspicuously
  post a privacy policy, and the 30-day cure period before a first lapse
  becomes a violation.
- **`caloppa_policy_required_content`** (§ 22575(b)(1)-(4)) — required
  content: PII/third-party categories, an optional review/change process
  description, the material-change notification process, and effective
  date.
- **`caloppa_dnt_and_thirdparty_tracking_disclosure`** (§ 22575(b)(5)-(7))
  — the "Do Not Track" response disclosure, cross-site tracking-by-others
  disclosure, and the hyperlink safe harbor.
- **`caloppa_definitions_pii_and_operator`** (§ 22577(a), (c)) — statutory
  definitions of "personally identifiable information" and "operator."
- **`caloppa_conspicuous_posting_methods`** (§ 22577(b)) — the statutory
  test for what counts as "conspicuously post" (homepage placement, icon/
  text-link requirements, etc.).
- **`caloppa_violation_standard_and_operative_date`** (§§ 22576, 22578,
  22579) — the knowing/willful-or-negligent/material violation standard,
  local-law preemption, and the chapter's July 1, 2004 operative date.

## Genuine corrections and findings

- **A correction to the drafting brief itself**: the assignment described
  the "Do Not Track" disclosure duty as located at § 22575(b)(7). The
  verified statutory text shows the actual disclosure duty is in
  paragraph (5); paragraph (7) is instead a safe harbor letting an
  operator satisfy paragraph (5) via a hyperlink to an external
  description — not the disclosure duty itself. Flagged explicitly in the
  relevant clause's `gap` field rather than silently corrected.
- Confirmed the review/request-to-change-information process is
  conditional — § 22575(b)(2)'s own text only requires describing such a
  process "if the operator maintains" one; the statute does not require
  every operator to establish one.
- Confirmed the "operator" definition (§ 22577(c)) expressly excludes a
  third party that merely hosts/manages a site on the owner's behalf,
  without independently determining how that exclusion applies to any
  specific vendor relationship.
- Confirmed the statute does not name any specific technology (e.g. the
  Global Privacy Control) as a qualifying "Do Not Track" signal — the
  clause states the statutory test without representing that any
  particular signal satisfies it.
- Confirmed the violation standard requires either knowing/willful or
  negligent/material noncompliance (§ 22576) — not strict liability for
  any lapse — consistent with, and reinforcing, the separate 30-day cure
  period in § 22575(a).

## Honest gap disclosed

Whether CalOPPA itself creates a private right of action for a consumer,
or whether a violation might instead (or additionally) be pursued under
another statute such as the Unfair Competition Law, was not researched and
this document takes no position on it. Subdivision (d) of § 22577 (the
definition of "consumer") was not independently verified or quoted.

## Method

Fetched Bus. & Prof. Code §§ 22575, 22576, 22577, 22578, and 22579 directly
from `leginfo.legislature.ca.gov`, each fetched twice using distinct
browser User-Agent strings (Chrome/Windows and Safari/macOS) — confirmed
byte-identical after whitespace normalization. All 9 citation quotes
programmatically re-verified as exact substrings of the confirmed text in
a final automated pass.

## Verification

- All five sections fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section (§ 22575's several clauses; § 22577's two definition
  subdivisions) versus genuinely separate sections (§§ 22576, 22578,
  22579, each independently cited); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Certification").
- Field names (`businessName`, `categoriesCollected`, `effectiveDate`,
  `preparerName`, `signatureDate`) independently confirmed to match
  existing corpus convention (including the sibling CCPA document). New
  fields: `websiteURL`, `thirdPartiesSharedWith`, `reviewRequestProcess`,
  `materialChangesProcess`, `dntResponse`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: California Online Privacy Protection Act (CalOPPA) —
  Information Sheet (`caloppa_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `websiteURL`, `thirdPartiesSharedWith`, `reviewRequestProcess`,
  `materialChangesProcess`, `dntResponse`.
- Corpus: 1,879 → 1,887 clauses; 240 → 241 documents. Second document of
  wave 48.
