# Hiring, new document: Fixed-Term Employment Contract — Information Sheet

## Why this document

The existing Offer Letter document is at-will. This document covers
a genuinely distinct legal arrangement — employment for a specified
term, which displaces the at-will default under its own statutory
provisions.

## What this document covers

7 clauses: 2 drafting (declaration/background, signature) and 5
authority clauses:

- **`fixedterm_atwill_default_specified_term`** (Lab. Code § 2922) —
  the at-will default and the statute's own definition of a
  "specified term" (employment for a period greater than one month).
- **`fixedterm_sufficient_cause_grounds`** (Lab. Code § 2924; § 2925)
  — the statutory grounds for early termination during the term.
- **`fixedterm_premature_termination_damages`** (Civ. Code § 3300;
  § 3301; Lab. Code § 2926) — the general contract-damages remedy
  that fills the gap the Labor Code leaves open, contrasted against
  at-will dismissal's narrower remedy.
- **`fixedterm_renewal_and_holdover`** (Lab. Code § 2920) — what
  happens when work continues after the term ends.
- **`fixedterm_distinction_from_atwill_and_probation`** — how a
  specified term differs from an at-will offer, including one with a
  probationary period.

## Genuine corrections and findings

- Confirmed § 2922's at-will default language as originally framed,
  plus a bonus finding: the statute itself defines "specified term"
  directly in its text ("Employment for a specified term means an
  employment for a period greater than one month") — not case-law
  gloss, but the statutory text itself.
- **A significant correction**: § 2924 is not a damages statute.
  Direct review shows it is actually a for-cause termination grounds
  provision (willful breach of duty, habitual neglect, or continued
  incapacity), pairing with § 2925's mirror right for the employee.
  The "detriment" compensation language originally assumed to be
  employment-specific is actually California's general contract-
  damages statute, Civ. Code § 3300 (bounded by § 3301's "clearly
  ascertainable" limit) — Labor Code §§ 2920-2929 contain no
  specialized damages formula at all. Labor Code § 2926 (at-will
  dismissal limits compensation to services already rendered) was
  used as a contrast to show why fixed-term status actually changes
  the remedy available.
- Confirmed "sufficient cause" has only a partial statutory anchor:
  § 2924's three enumerated categories are the closest thing to a
  statutory definition — no broader definition was fabricated beyond
  that.
- **A significant correction**: the original framing's renewal-
  presumption assumption was wrong, traced to its actual source. There
  is no renewal/holdover presumption anywhere in Labor Code §§ 2920-
  2929 — § 2920 simply lists the ways employment ends. The
  "presumed renewed... one month" rule being recalled is real, but it
  is Civil Code § 1945, which governs real property leases, not
  employment — a cross-domain mixup, corrected explicitly. The actual
  default for employment holdover is inferred from § 2922's own text
  (continued work without a new specified-term deal falls back into
  "no specified term," i.e., at-will), disclosed honestly as this
  document's own textual inference, not a verified holding.
- Confirmed the probation/at-will distinction is correct in substance
  but not codified — no statute mentions probationary periods at all.
  CourtListener's rate limit was already exhausted, so no case (e.g.,
  *Guz v. Bechtel*) was cited as verified.

## Honest gap disclosed

The probationary-period/at-will case-law pattern could not be
independently verified against primary opinion text — CourtListener
was rate-limited, disclosed honestly rather than citing an unverified
case.

## Method

Fetched Lab. Code §§ 2920, 2922, 2924, 2925, 2926, and Civ. Code
§§ 3300, 3301 directly from `leginfo.legislature.ca.gov`, each
verified against a second, independent fetch with a distinct
User-Agent — confirmed text-identical. All 8 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature") confirmed as the corpus's established,
  accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `jobTitle`, `startDate`)
  independently confirmed to match existing corpus convention. New
  field: `endDate` (reuses an existing field id from a different
  document with a document-specific label, consistent with corpus
  practice).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Fixed-Term Employment Contract — Information Sheet
  (`fixed_term_employment_contract_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Hiring category. No genuinely new
  fields.
- Corpus: 1,387 → 1,394 clauses; 174 → 175 documents.
