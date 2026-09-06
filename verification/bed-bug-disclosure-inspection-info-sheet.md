# Real Estate, new document: Bed Bug Disclosure and Inspection — Information Sheet

## Why this document

Second processed item of wave 98 (Real Estate slot). A scoping pass
confirmed zero prior coverage of California's bed bug disclosure and
inspection statute anywhere in the corpus. Confirmed distinct from the
existing Natural Hazard Disclosure and pest-report documents, which are
sale-of-property disclosures triggered by a property transfer, not this
chapter's landlord-tenancy duties.

## What this document covers

7 clauses: 2 drafting (intro, acknowledgment) and 5 authority clauses,
citing Civil Code §§ 1954.600(a), (c), (d), 1954.601, 1954.602(a)-(b),
1954.603, 1954.604, and 1954.605:

- **`bedbug_legislative_findings`** — the Legislature's stated findings
  on bed bug control, including that "tenants should not face
  retaliation for reporting a problem" (a finding, not itself an
  operative anti-retaliation rule, disclosed as such).
- **`bedbug_prelease_disclosure`** — the written bed-bug information
  notice required before a new tenancy, and the one-time 2018 existing-
  tenant delivery deadline.
- **`bedbug_known_infestation_limit`** — the prohibition on showing,
  renting, or leasing a known-infested vacant unit, and the visual-
  evidence-as-notice rule.
- **`bedbug_inspection_entry_and_cooperation`** — entry to inspect tied
  to the general entry statute (§ 1954), and the tenant's cooperation
  duty.
- **`bedbug_findings_notification_duty`** — the landlord's two-business-
  day written notification duty after receiving inspection findings.

## Genuine findings

- **Multiple significant corrections to the research brief's own
  assumptions**: the brief assumed a general "known infestation in the
  unit or adjacent units" disclosure duty and a prohibition on renting a
  unit undergoing treatment. Neither exists in the statute's actual
  text. The research agent verified the known-infestation limit applies
  only to a vacant unit at initial leasing (§ 1954.602), not an ongoing
  disclosure duty for occupied or adjacent units, and found no
  statutory prohibition on renting a unit undergoing treatment —
  disclosed explicitly rather than fabricated to match the brief's
  assumption.
- **A correctly scoped treatment of a "finding" versus an operative
  rule**: § 1954.600(c)'s statement that "tenants should not face
  retaliation" is presented as a legislative finding with no attached
  cause of action or remedy in this chapter — not overstated as an
  enforceable anti-retaliation right.
- **A disclosed negative case-law search**: the agent searched
  CourtListener for California case law construing this chapter and
  found none; the document is purely statutory, a disclosed and
  legitimate choice.
- Correctly distinguished the one-time January 1, 2018 existing-tenant
  notice deadline (a historical transition requirement) from a
  recurring obligation.

## Honest gap(s) disclosed

This document does not address what other California anti-retaliation
statutes (outside this chapter) might separately apply to a bed-bug
report. It does not fully reproduce § 1954.603's specified notice
content, which the statute itself treats as a floor, not a ceiling. It
does not define how far "surrounding units" extends for follow-up
inspection purposes, or address what counts as "receipt" of pest control
findings for the two-business-day notification clock. It does not
restate § 1954's own general entry-notice requirements, incorporated by
reference. It does not determine whether any specific property has a
suspected or confirmed infestation.

## Method

Fetched Civil Code §§ 1954.600 through 1954.605 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings (one transient connection reset
resolved on retry), confirmed byte-identical on the isolated statutory-
text content after whitespace normalization. CourtListener searched for
relevant California case law; none found on point, a disclosed
negative result. All 14 citation instances programmatically confirmed
by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via an
eighty-first fetch (a new distinct curl User-Agent string,
"Groundtruth-81stVerify-BedBug/1.0") of all six sections — all 13 unique
quotes (across 14 citation instances) confirmed clean on direct
substring match, no extraction artifacts encountered.

## Verification

- All six Civil Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus an
  eighty-first independent fetch during integration review; all 14
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subsections of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Acknowledgment") duplicate existing corpus titles — consistent with
  this project's established pattern of generic, reused boilerplate
  titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 14 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`propertyAddress`,
  `landlordName`, `tenantName`, `dateSigned`, `cityState`) reused from
  the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Bed Bug Disclosure and Inspection — Information Sheet
  (`bed_bug_disclosure_inspection_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Real Estate category. No new fields.
- Corpus: 3,284 → 3,291 clauses; 435 → 436 documents. Second processed
  item of wave 98.
