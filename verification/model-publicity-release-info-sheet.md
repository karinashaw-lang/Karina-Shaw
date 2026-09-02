# Confidentiality & IP, new document: Model/Publicity Release — Information Sheet

## Why this document

The existing Right of Publicity Demand Letter document covers a claim
for violation of the right. This document is the companion piece in
the opposite direction: the consent that prevents such a claim from
arising in the first place.

## What this document covers

8 clauses: 2 drafting (consent/release declaration, signature block)
and 6 authority clauses:

- **`modelrelease_consent_element`** (Civ. Code § 3344(a)(1)) — the
  statutory consent element, confirming no written-form requirement
  appears in the statute's text.
- **`modelrelease_scope_of_consent`** (Civ. Code §§ 1648, 1654;
  *Christoff v. Nestlé USA, Inc.*) — the limits on the scope of
  consent under general contract-interpretation rules.
- **`modelrelease_revocability`** (Civ. Code §§ 1550, 1689) —
  revocability, grounded in general contract-formation and
  rescission statutes.
- **`modelrelease_minor_capacity`** (Civ. Code § 3344(a)(1); Fam.
  Code § 6710) — a minor's own signature, the publicity statute's own
  parent-or-guardian language, and the general disaffirmance rule.
- **`modelrelease_posthumous_interaction`** (Civ. Code § 3344.1(b),
  (c)) — how a lifetime consent interacts with the separate posthumous
  right.
- **`modelrelease_consideration`** (Civ. Code §§ 1550, 1605) —
  consideration under general California contract law, cross-
  referencing rather than duplicating the corpus's existing no-
  consideration-required clauses.

## Genuine corrections and findings

- Confirmed § 3344(a)(1)'s liability sentence requires only "prior
  consent," with no "written" qualifier anywhere in the section's
  text.
- **A significant correction, not merely a confirmation**: the
  original framing assumed a lifetime release and the posthumous right
  are analytically separate and that a lifetime document doesn't bind
  successors post-death. Direct review of § 3344.1(b)-(c) shows this
  is wrong as a general matter: the statute expressly validates a
  lifetime contract that "assigned the rights, in whole or in part, to
  use" the person's identity, and makes that lifetime transferee (not
  the statutory heirs) the holder of the posthumous consent right if
  such an assignment occurred. A lifetime document can bind successors
  post-death — but only to the extent it operates as an assignment of
  the underlying right rather than a narrower use-permission. The
  clause was written around this actual statutory mechanism rather
  than the vaguer "analytically separate" framing.
- A genuine additional finding: *Christoff v. Nestlé USA, Inc.* (2009)
  47 Cal.4th 468 — a real, on-point California Supreme Court case
  (a model paid for one specific use of a photo; a different, later
  use occurred without his consent) — used in the scope-of-consent
  clause, honestly scoped to the opinion's own recitation of
  undisputed facts (obtained via a lighter-throttled public search
  path), not its holding, since full opinion text was WAF-blocked.

## Honest gaps disclosed

- No accessible case law specific to publicity-release revocability
  was found; the revocability clause is grounded instead in general
  California contract-formation/rescission statutes, with explicit
  disclosure of what wasn't verified.
- The consideration clause cross-references, rather than duplicates,
  this corpus's existing `trust_no_consideration_required` and
  `prenup_no_consideration_required` clauses.

## Method

Fetched Civ. Code §§ 3344, 3344.1, 1550, 1605, 1648, 1654, and 1689,
and Fam. Code § 6710, directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed textually identical after whitespace
normalization. All 12 citation quotes programmatically confirmed as
exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`personName`, `identityDescription` reused from the
  Right of Publicity document; `granteeName`, `signatureDate` reused
  from existing corpus conventions) independently confirmed to match.
  New fields: `useDescription`, `compensationDescription`,
  `parentGuardianName`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Model/Publicity Release — Information Sheet
  (`model_publicity_release_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Confidentiality & IP category. New fields:
  `useDescription`, `compensationDescription`, `parentGuardianName`.
- Corpus: 1,371 → 1,379 clauses; 172 → 173 documents. This completes
  wave 30 (4 documents: Quiet Title Action, Gestational Carrier
  Agreement, Statutory Conversion, and this document).
