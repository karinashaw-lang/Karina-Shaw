# Ending employment, new document: Employer Reference Immunity — Information Sheet

## Why this document

A deepening of the existing `reference_qualified_privilege` clause
(embedded in the Neutral Reference / Employment Verification Policy
document), which itself disclosed an open gap: "Independent case law
addressing exactly what conduct defeats this privilege was not
verified for this clause: CourtListener research for that case law
was rate-limited during drafting and was not pursued further past
that point." This document was tasked specifically with attempting to
close that gap. Third of wave 60's four documents.

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority
clauses, citing Cal. Civ. Code § 47(c) and Noel v. River Hills Wilsons,
Inc. (2003) 113 Cal.App.4th 1363:

- **`referenceimmunity_statute_core`** (§ 47(c) chapeau) — the general
  common-interest privilege framework's three disjunctive circumstances.
- **`referenceimmunity_employment_reference_prong`** (§ 47(c) +
  *Noel*) — the 1994 employment-reference sentence and **a key
  finding**: "based on credible evidence" does not lower the standard
  to ordinary negligence.
- **`referenceimmunity_malice_standard`** (*Noel*, quoting *Sanborn*
  and *Roemer*) — **the gap-closing finding**: what "without malice"
  requires — actual malice (hatred/ill will, or reckless disregard from
  lacking reasonable grounds) — and that mere negligence/honest mistake
  is not malice.
- **`referenceimmunity_rehire_and_harassment`** (§ 47(c)) — the
  rehire-disclosure sentence and the separately-verified
  sexual-harassment-complaint sentence, genuinely distinct from each
  other.
- **`referenceimmunity_protected_speech_carveout`** (§ 47(c)) — the
  statute's own express limit excluding constitutionally protected
  speech or activity.

## Genuine corrections and findings

- **The gap-closing finding**: the previously-disclosed research gap in
  `reference_qualified_privilege` (no verified case law on what defeats
  the privilege) is now closed. *Noel v. River Hills Wilsons, Inc.*
  (2003) 113 Cal.App.4th 1363 was located via CourtListener, read via
  two separate tool calls (full-document and chunked reads), and
  cross-checked against CourtListener's cluster metadata endpoint for
  citation and published status.
- Confirmed *Noel*'s own holding that "based on credible evidence" does
  not create a negligence standard — the Legislature did not intend to
  make the privilege inapplicable in the employment-reference context
  merely because a statement turned out to be negligently mistaken.
- Confirmed the "actual malice" test from *Noel* (quoting *Sanborn v.
  Chronicle Pub. Co.*) and the honest-mistake rule from *Noel* (quoting
  *Roemer v. Retail Credit Co.*) as two precisely quoted, distinct
  components of the malice standard.
- Confirmed two pieces genuinely absent from the existing embedded
  clause's shorter treatment: a separate sentence extending the
  privilege to sexual-harassment complaints and related employer
  communications, and the express carve-out for constitutionally
  protected speech or activity (also referencing Code Civ. Proc.
  § 527.3).

## Honest gap disclosed

Independent verification of *Noel* outside CourtListener's own database
was attempted but did not succeed from this environment: Justia
returned HTTP 403, CourtListener's own public website returned an
empty HTTP 202 behind an automated-traffic check, and Google Scholar
was blocked by the environment's outbound network policy — this
remains a single-database confirmation, disclosed plainly rather than
concealed. No published case law specifically construing the
rehire/harassment sentence or the protected-speech carve-out (as
opposed to the general job-performance sentence) was located.

## Method

Fetched Cal. Civ. Code § 47 directly from `leginfo.legislature.ca.gov`
via curl, twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. *Noel v. River Hills
Wilsons, Inc.* retrieved via the CourtListener MCP server (full-text
read plus a separate chunked read of the same opinion), cross-checked
against CourtListener's cluster metadata endpoint. All 6 citation
quotes programmatically confirmed as exact substrings of their
respective confirmed texts.

## Verification

- Statute fetched twice independently with distinct User-Agent
  strings; case law confirmed via two separate CourtListener tool
  calls plus a metadata cross-check; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — all § 47(c) citations
  correctly disclosed as one subsection, not independent sources; the
  two *Noel* quotes correctly disclosed as the same single case
  (single-database confirmation honestly stated); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose of This Information
  Sheet," "Acknowledgment").
- Field names (`companyName`, `employeeName`, `inquiringPartyName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids, `{{}}` leaks) run across the full updated corpus —
  clean.

## Net changes

- New document: Employer Reference Immunity — Information Sheet
  (`employer_reference_immunity_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Ending employment category. No new fields.
- Corpus: 2,250 → 2,257 clauses; 289 → 290 documents. Third document of
  wave 60.
