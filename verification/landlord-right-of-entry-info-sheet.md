# Real Estate, new document: Landlord's Right of Entry — Information Sheet

## Why this document

The existing Residential Lease Agreement's `lease_habitability*`
clauses cover a different topic (what makes a unit habitable). This
document covers a genuinely distinct statutory topic: when and how a
landlord may enter an occupied rental unit under Civil Code § 1954.

## What this document covers

8 clauses: 2 drafting (declaration, acknowledgment) and 6 authority
clauses:

- **`landlordentry_general_rule`** (Civ. Code § 1954(a)(1)-(4), (a)(5)
  -(6), (c)) — the enumerated permitted purposes for entry and the
  no-abuse/no-harassment rule.
- **`landlordentry_notice_requirement`** (Civ. Code § 1954(d)(1)) —
  the written-notice content/delivery requirements and the two
  separate reasonable-notice presumptions.
- **`landlordentry_business_hours`** (Civ. Code § 1954(b)) — the
  normal-business-hours restriction.
- **`landlordentry_no_notice_required`** (Civ. Code § 1954(e)) — the
  three situations requiring no notice at all.
- **`landlordentry_reduced_notice_exceptions`** (Civ. Code § 1954(d)(2)
  , (d)(3)) — the narrower oral-notice exceptions for showing the unit
  to a buyer and for agreed repair visits, correcting a significant
  assumption.
- **`landlordentry_remedy`** (Civ. Code § 1940.2(a), (a)(4), (b);
  § 1927) — the actual remedy structure, since § 1954 itself has none.

## Genuine corrections caught during research

- The task brief assumed a "48 hours' oral notice" shortcut exists for
  showing the unit to a prospective *new tenant* near the end of a
  tenancy. Direct review shows this is wrong on both counts: California's
  oral-notice exception in § 1954(d)(2) applies only to showing the
  unit to a prospective or actual *purchaser* (and only after separate
  written for-sale notice within 120 days) — not to a prospective
  tenant — and no "48 hours" figure appears anywhere in § 1954; that
  number, if real, belongs to a different state's law.
- Confirmed the 24-hour reasonable-notice presumption exactly as
  assumed, but the task brief missed a second, independent presumption
  the agent found and added a clause for: mailing notice at least six
  days before entry is separately presumed reasonable for mailed
  notice.
- Confirmed "normal business hours" is required but, correctly per the
  task brief's caution, is not itself numerically defined by the
  statute — the document states the restriction as written rather than
  supplying an invented range.
- Confirmed the emergency/present-consent/abandonment no-notice
  exceptions exactly as assumed.
- The task brief asked whether § 1954 itself supplies a remedy for its
  own violation. Direct review confirms it does not — the actual
  remedy is a separate statute, § 1940.2(a)(4)/(b), narrower than a
  bare violation (it requires the violation to be significant,
  intentional, and for the purpose of influencing the tenant to
  vacate), plus a distinct, independently identified body of law: the
  general covenant of quiet possession (Civ. Code § 1927, in force
  since 1872).

## Honest gaps disclosed

- CourtListener's search hit its rate limit before any citable opinion
  interpreting "abuse of the right of access" under § 1954(c), or
  applying § 1940.2/§ 1927 to entry disputes, could be verified.
  Rather than invent a case citation, both relevant clauses
  (`landlordentry_general_rule`, `landlordentry_remedy`) disclose this
  plainly and rely on statutory text alone.

## Method

Fetched Civ. Code §§ 1954, 1940.2, and 1927 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 12 citations across 6 authority clauses programmatically confirmed
as exact substrings of the verified text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — every clause correctly distinguishes same-section-multiple
  -subsection citations from § 1927's genuinely separate, independent
  source; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  title matches ("Acknowledgment" and "Purpose of This Information
  Sheet") confirmed as the corpus's established, accepted generic
  drafting-title-reuse pattern — not defects.
- Field names (`landlordName`, `tenantName`, `propertyAddress`)
  confirmed to match existing Residential Lease Agreement/Tenant's
  Notice of Intent to Vacate/Notice to Pay Rent or Quit documents'
  fields exactly. No new fields introduced.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Landlord's Right of Entry — Information Sheet
  (`landlord_right_of_entry_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. No new fields.
- Corpus: 1,026 → 1,034 clauses; 133 → 134 documents.
