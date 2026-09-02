# Confidentiality & IP, new document: Right of Publicity Demand Letter Information Sheet

## Why this document

The existing Trademark Infringement Cease and Desist document covers
misuse of a mark. This document covers a distinct statutory right —
California's statutory right of publicity in a person's own name,
likeness, voice, or signature, for both living persons (Civ. Code
§ 3344) and deceased personalities (Civ. Code § 3344.1) — with its own
remedies, exceptions, and (for the posthumous right) duration and
registration requirements.

## What this document covers

10 clauses: 3 drafting (intro, description of identity/conduct,
demand and signature) and 7 authority clauses:

- **`publicity_statutory_standard`** (Civ. Code § 3344) — the
  knowing-use standard and statutory remedies (the $750 floor plus
  profits, cumulative, and two-way prevailing-party attorney's fees)
  for living persons.
- **`publicity_statutory_injunctive_relief`** (Civ. Code § 3344, as
  amended by SB 683, eff. Jan. 1, 2026) — the new injunction/TRO
  mechanism with a 2-business-day compliance window.
- **`publicity_statutory_exceptions`** (Civ. Code § 3344) — the
  news/public affairs/political-campaign exception, the
  commercial-medium question-of-fact rule, and the innocent-publisher
  exemption.
- **`publicity_posthumous_standard`** (Civ. Code § 3344.1) — the
  posthumous right's remedies and the absence of a "knowing use"
  qualifier in the statutory text, unlike § 3344.
- **`publicity_posthumous_duration_standing_registration`** (Civ. Code
  § 3344.1) — the 70-year duration, statutory successors, and the
  Secretary of State registration precondition to suit.
- **`publicity_posthumous_entertainment_exemption`** (Civ. Code
  § 3344.1) — the entertainment-work and single-and-original-work-of-
  fine-art exemption, which exists only in the posthumous statute.
- **`publicity_posthumous_digital_replica`** (Civ. Code § 3344.1, as
  amended by AB 1836, eff. Jan. 1, 2025) — the digital-replica
  (AI deepfake) provision with its own $10,000 statutory minimum.

## Genuine corrections and findings

- Confirmed the $750 statutory-damages floor and disgorgement of
  profits are cumulative under § 3344, not alternative — the statute
  awards the greater of $750 or actual damages, plus any profits not
  already counted in actual damages.
- Confirmed § 3344's attorney's-fee provision runs to "the prevailing
  party," not only a prevailing plaintiff, and carries no
  exceptional-case gate — a genuine two-way fee-shifting risk distinct
  from the federal Lanham Act standard already in the corpus's
  trademark document.
- Confirmed the "single and original work of fine art" exception exists
  only in § 3344.1 (posthumous); § 3344's own exceptions for living
  persons are narrower and use different language.
- A genuine, directly verified textual difference: § 3344's operative
  sentence requires a defendant who "knowingly uses" the protected
  attributes, while § 3344.1's posthumous-liability sentence contains
  no such qualifier at all.
- Confirmed two recent amendments with distinct effective dates: SB
  683 (eff. Jan. 1, 2026) added the § 3344 injunction/TRO mechanism,
  and AB 1836 (eff. Jan. 1, 2025) added the § 3344.1 digital-replica
  provision with a $10,000 statutory minimum, higher than the general
  $750 floor.
- Confirmed the 70-year posthumous duration and the Secretary of
  State registration precondition to suit under § 3344.1.

## Honest gap disclosed

California's common-law right of publicity (e.g., the elements
established in *Eastwood v. Superior Court*) could not be verified.
CourtListener's rate limit (125 requests/day) was already exhausted
before this research began, and direct fetches to courtlistener.com,
law.justia.com, and law.resource.org were blocked or WAF-challenged.
Rather than invent or loosely source a common-law citation, the
`publicity_intro` and `publicity_posthumous_standard` clauses disclose
this gap honestly and scope the document to the statutory right only —
consistent with the precedent already set by this corpus's
`trademarkcd_registered_mark_infringement` clause, which hit the same
rate-limit wall.

## Method

Fetched Civ. Code §§ 3344 and 3344.1 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. All 17 citation quotes programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  working title ("Purpose of This Letter") was caught by the agent's
  own self-check as colliding with `trademarkcd_intro`/`tsmisap_intro`
  and renamed to "Purpose of This Right of Publicity Letter" before
  delivery — independently confirmed clean against the full corpus.
- Field names: `preparerName`, `recipientName`, `personName`,
  `identityDescription`, `allegedUseDescription`, `demandDate` — new
  fields, following the same naming conventions as the existing
  Trademark Cease and Desist document's `companyName`/`recipientName`/
  `demandDate` pattern, renamed where the subject matter differs
  (a person's identity rather than a trademark).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Right of Publicity Demand Letter Information Sheet
  (`right_of_publicity_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Confidentiality & IP category. New fields:
  `preparerName`, `recipientName`, `personName`, `identityDescription`,
  `allegedUseDescription`, `demandDate`.
- Corpus: 1,152 → 1,162 clauses; 147 → 148 documents.
