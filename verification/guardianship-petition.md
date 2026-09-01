# Family Law, tenth new document: Guardianship of the Person (Petition Information Sheet)

## Why this document

The project already has "Nomination of Guardian for Minor Children,"
but that document is a parent's advance private nomination (Prob.
Code §§ 1500, 1502) — it is not a court proceeding. This new document
covers the genuinely distinct, real court process by which a proposed
guardian actually becomes a court-appointed guardian of a minor's
person under Probate Code Division 4, Part 2: petition, notice,
investigation, appointment standard, and the guardian's resulting
powers. Made explicit throughout (and in its own dedicated clause)
that this document is informational only and does not itself appoint
anyone — only a court order does that.

## What this document covers

8 clauses: 2 drafting (declaration/background information, signature
block) and 6 authority clauses:

- **`guardianpet_scope_vs_nomination`** (§ 1510(a)) — who may file the
  petition, and the distinction from a parent's private nomination.
- **`guardianpet_petition_notice`** (§§ 1510(b)-(c), 1511(a)-(b)) —
  required petition content and the 15-day notice requirements.
- **`guardianpet_investigation_requirement`** (§ 1513(a)) — the
  mandatory pre-appointment investigation and report.
- **`guardianpet_priority_and_parent_bar`** (§ 1514(b)(1)-(2); Fam.
  Code § 3040(a)) — the appointment standard, the bar on appointing a
  minor's own parent as guardian of their person, and the custody-
  preference order the statute incorporates.
- **`guardianpet_not_parental_rights_termination`** (Fam. Code
  § 3041(c); Prob. Code § 1601) — that guardianship is legally
  distinct from, and does not terminate, parental rights, and remains
  subject to court termination.
- **`guardianpet_powers_and_duties`** (§ 2351(a)-(b)) — what a
  court-appointed guardian may do once actually appointed.

## Genuine corrections caught during research

- The task brief's assumed statutory map was checked directly and
  corrected in several places: §§ 1500-1501 are the nomination
  statute (already covered by the existing Nomination document, not
  re-cited here as an appointment-priority rule); § 1513, not § 1514,
  is the investigation-and-report provision; § 1514 is the
  appointment-standard provision; § 1601 is the termination
  provision, not a "consent to appointment" or relative-preference
  statute; and § 1601.5, which the brief anticipated, does not exist
  — confirmed by fetching it directly.
- No standalone Probate Code "relative preference" statute for a
  guardian-of-the-person appointment was found; the real analog is the
  Family Code § 3040(a) custody-preference order, incorporated by
  cross-reference.

## Defect caught and fixed during integration

`guardianpet_scope_vs_nomination` cites a single statutory subsection
but initially lacked the standard explicit single-source disclosure
sentence — added during integration.

## Method

Fetched Probate Code §§ 1510, 1511, 1513, 1514, 1601, 2351 and Family
Code §§ 3040, 3041 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed byte-identical.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed two real leaks during its own drafting process, then
  re-confirmed clean on the final file (also independently
  re-confirmed clean during this integration).
- Checked source-independence disclosure logic across all 6 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `childDOB`, `parent1Name`, `parent2Name`,
  `dateSigned`, `cityState`) independently confirmed against existing
  Family Law documents before use.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Guardianship of the Person (Petition Information
  Sheet) (`guardianship_petition`), 8 clauses (6 authority + 2
  drafting), in the Family Law category. New fields:
  `proposedGuardianName`, `relationshipToChild` (all other fields
  reused from existing Family Law conventions).
- Corpus: 556 → 564 clauses; 74 → 75 documents.
