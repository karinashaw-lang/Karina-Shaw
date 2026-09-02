# Family Law, new document: Post-Judgment Modification of Child Custody/Support — Information Sheet

## Why this document

The existing Parenting Plan and Child Support Agreement documents
cover the initial custody/support determination. This document covers
a genuinely distinct, later-stage topic: modifying an existing court
order after it's already in place — which requires a different legal
showing, and a materially different standard for custody versus
support. Informational only, following the same non-dispositive
pattern as the Guardianship and Dissolution Petition documents.

## What this document covers

9 clauses: 3 drafting (declaration, change description, signature
block) and 6 authority clauses:

- **`custodymod_court_continuing_jurisdiction`** (Fam. Code § 3022;
  § 3651(a)) — the court's continuing jurisdiction over custody and
  support are two different statutes.
- **`custodymod_custody_changed_circumstances_doctrine`** (Fam. Code
  § 3087) — the judicially developed stability standard for custody,
  grounded in the codified joint-custody-modification standard.
- **`custodymod_support_standard_differs_from_custody`** (Fam. Code
  § 4065(d)) — support modification uses a more permissive standard;
  no changed-circumstances showing needed to raise a below-guideline
  stipulated order to guideline level.
- **`custodymod_retroactivity_limit`** (Fam. Code § 3651(c)(1);
  § 3653(a)) — a support modification can only reach back to the date
  of filing.
- **`custodymod_no_self_modification_without_court_order`** (Fam. Code
  § 4065(a); § 3651(e)) — a parents' private agreement alone doesn't
  modify an order; court approval is required.
- **`custodymod_guideline_presumption_on_modification`** (Fam. Code
  § 4057(a)-(b)) — the guideline presumption applies to a modified
  amount, not just a first-time order.

## Genuine corrections caught during research

- The task brief assumed Fam. Code § 3651 is the statutory basis for
  modifying custody as well as support. Direct review of the fetched
  text shows § 3651 addresses only support orders and never uses the
  word "custody" — the actual custody-continuing-jurisdiction statute
  is § 3022, cited separately.
- The task brief assumed § 4009 addresses support modification.
  Direct review shows § 4009 actually governs retroactivity of an
  original support order to the date of filing the initial petition,
  not a subsequent modification — fetched but not used.
- Confirmed the task brief's core hypothesis: support modification
  uses a materially more permissive standard than custody's, with a
  concrete statutory example found that exceeds the brief's
  expectation — § 4065(d)'s "no change of circumstances need be
  demonstrated" rule for raising a below-guideline stipulated order to
  the guideline level.

## Honest gap disclosed

*Montenegro v. Diaz*, 26 Cal.4th 249 (2001) — the well-known
California Supreme Court decision on the custody changed-circumstances
doctrine — could not be independently verified: CourtListener's daily
request cap was already exhausted by earlier calls in the same
research session before the attempt. Rather than present an unverified
citation as verified, `custodymod_custody_changed_circumstances_doctrine`
describes the doctrine's substance in general terms without citing
Montenegro or any other case for it, and explicitly discloses that the
description should be read as unverified case law.

## Method

Fetched Fam. Code §§ 3022, 3651, 3653, 3087, 4065, and 4057 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 9 citations verified as exact substrings of the fetched text. Two
statutes (§ 3087, § 4065(a)) are deliberately reused from clauses
already in the corpus for different, narrower points relevant to
modification specifically, each independently re-verified against
live text and disclosed with an explicit cross-reference.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed six real leaks during its own self-check before delivery;
  independently re-confirmed clean on integration.
- Checked source-independence disclosure logic across all 6 authority
  clauses — no clause cites the same statutory section twice; correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  — the agent caught and fixed one real title collision
  (`custodymod_signature_block` originally collided with the existing
  `dissolution_signature_block` clause's title) before delivery;
  independently re-confirmed clean on integration.
- Field names (`parent1Name`, `parent2Name`, `childName`, `childDOB`)
  confirmed to match the Parenting Plan and Child Support Agreement
  documents' `fields` arrays exactly; `countyOfFiling`, `dateSigned`,
  `cityState` confirmed to match the Dissolution Petition document's
  convention exactly. New fields: `originalOrderDate`,
  `allegedChangedCircumstance`, `proposedModification`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Post-Judgment Modification of Child Custody/Support —
  Information Sheet (`custody_support_modification_info_sheet`), 9
  clauses (6 authority + 3 drafting), in the Family Law category. New
  fields: `originalOrderDate`, `allegedChangedCircumstance`,
  `proposedModification`.
- Corpus: 877 → 886 clauses; 116 → 117 documents.
