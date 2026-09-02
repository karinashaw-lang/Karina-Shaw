# Real Estate, new document: Real Estate Agency Relationship Disclosure — Information Sheet

## Why this document

The existing Residential Purchase Agreement covers the transaction's
terms. This document covers a separate statutory disclosure duty:
who the real estate agents actually represent.

## What this document covers

8 clauses: 2 drafting (declaration, acknowledgment) and 6 authority
clauses:

- **`agencydisc_scope`** (Civ. Code § 2079.13(j), (k), (l); § 2079(a))
  — the scope of covered property and transactions, correcting a
  significant assumption.
- **`agencydisc_agency_relationships`** (Civ. Code § 2079.13(f), (o),
  (d); § 2079.16) — the statutory definitions of seller's agent,
  buyer's agent, and dual agent.
- **`agencydisc_disclosure_timing`** (Civ. Code § 2079.14(a)(1),
  (a)(2), (b)) — the timing rules, correcting a significant assumption
  about uniformity.
- **`agencydisc_statutory_form_duties`** (Civ. Code § 2079.16) — the
  prescribed statutory disclosure-form text, confirming actual
  quotable form language exists.
- **`agencydisc_confirmation_of_actual_relationship`** (Civ. Code
  § 2079.17(a)-(d)) — the separate written confirmation of the actual
  agency relationship.
- **`agencydisc_duties_not_diminished`** (Civ. Code § 2079.24) — the
  statute's preservation of an agent's other duties and liability.

## Genuine corrections caught during research

- The task brief assumed the disclosure requirement is triggered by
  a "1-4 dwelling units" property scope. Direct review shows the
  agency-disclosure statutes' own "real property" definition is
  broader — it includes multiunit residential property with *more
  than* four units, commercial property, vacant land, and qualifying
  manufactured/mobile homes. The 1-4-unit trigger actually belongs to
  a separate, narrower duty (the broker's visual-inspection duty under
  § 2079(a)), cited only for contrast.
- The task brief assumed § 2079.14's "as soon as practicable before an
  offer" timing applies uniformly. Direct review shows the timing
  differs by role: a seller's agent must deliver the disclosure form
  before entering into the listing agreement — not tied to an offer at
  all — while only the buyer's agent has the "as soon as practicable"
  standard, with a next-business-day backstop if that agent didn't
  draft the offer.
- Confirmed § 2079.16 contains actual prescribed, quotable statutory
  form text (the "Disclosure Regarding Real Estate Agency Relationship"
  caption and the full duty language), as anticipated.
- Confirmed § 2079.17 governs a second, distinct confirmation — of the
  actual (not merely possible) agency relationship — with its own
  prescribed checkbox form.
- Confirmed the non-client-party duty framing exactly as anticipated:
  diligence, honest/fair dealing, and material-fact disclosure, but
  not the same fiduciary loyalty owed to the agent's own client.

## Method

Fetched Civ. Code §§ 2079, 2079.13, 2079.14, 2079.16, 2079.17, 2079.24
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All 21 citation quotes programmatically confirmed as
exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section
  citations from citations to genuinely separate sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Purpose of This Information Sheet") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern
  (already shared by `drugtest_purpose` and `landlordentry_declaration`)
  — not a defect.
- Field names (`propertyAddress`, `sellerName`, `buyerName`) confirmed
  to match existing Residential Purchase Agreement/HOA Disclosure
  documents' fields exactly. New fields: `sellerAgentName`,
  `buyerAgentName` (no agent-identity fields existed anywhere in the
  corpus before this document).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Real Estate Agency Relationship Disclosure —
  Information Sheet (`real_estate_agency_disclosure_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Real Estate category. New
  fields: `sellerAgentName`, `buyerAgentName`.
- Corpus: 1,136 → 1,144 clauses; 145 → 146 documents.
