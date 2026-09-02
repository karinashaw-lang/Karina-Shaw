# Real Estate, new document: HOA Board Election Procedures — Information Sheet

## Why this document

The corpus's existing HOA/CC&R Disclosure, HOA Assessment Lien and
Foreclosure, and Common Interest Development Formation documents don't
cover the Davis-Stirling Act's secret-ballot election-procedure
requirements. Confirmed as a genuine gap; the delivering agent read
all three existing documents first.

## What this document covers

7 clauses: 2 drafting (declaration, signature/acknowledgment) and 5
authority clauses:

- **`hoaelection_secret_ballot_scope`** (Civ. Code § 5100(a)(1)-(2)) —
  when secret-ballot procedures apply.
- **`hoaelection_election_rules_adoption`** (§ 5105(a), (a)(3), (a)(5))
  — the association's requirement to adopt election operating rules.
- **`hoaelection_independent_third_party`** (§ 5110(a)-(b)) — who
  qualifies (and is disqualified) as inspector of elections.
- **`hoaelection_ballot_notice_and_double_envelope`** (§ 5115(a),
  (c), (c)(1)) — notice timing and the double-envelope ballot
  mechanism.
- **`hoaelection_vote_tabulation_and_results`** (§ 5120(a)-(b)) — how
  ballots are counted, tabulated, and reported.

## Genuine corrections and findings

- **A significant correction to the research brief's own framing**:
  § 5100(a)(1) requires secret ballots for director election/removal
  generally, with no "contested" or "candidates-exceed-seats"
  qualifier — that narrower rule (election by acclamation) lives in a
  separate section, § 5103, which was fetched only once and, per the
  omit-rather-than-fabricate discipline, is not described or quoted
  anywhere in this document.
- Confirmed the double-envelope ballot mechanics and notice-timing
  rules are in § 5115, not §§ 5100/5105/5110/5120 as the original
  research framing implied.
- Confirmed § 5105's required-subjects list runs to seven enumerated
  paragraphs — longer and more granular than a generic "candidate
  qualifications, campaigning, ballot procedures" summary suggests
  (it also covers proxies, the voting period, the method of selecting
  the inspector, and record retention).
- Flagged that §§ 5115 and 5120 both carry recent operative amendments
  (§ 5115: AB 1170, eff. Jan. 1, 2026; § 5120: AB 2159, eff. Jan. 1,
  2025) — confirmed current rather than assuming an older version.
- Confirmed the recurring "30 days" figure across § 5115(a)-(c) is the
  same period restated for three distinct notice/mailing steps, not
  three independently confirmed different figures.

## Honest gap disclosed

Civil Code § 5103 (the acclamation exception to secret-ballot voting)
was fetched only once, not independently double-verified, and is
therefore not described or quoted anywhere in this document.

## Method

Fetched Civ. Code §§ 5100, 5105, 5110, 5115, and 5120 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings each (a Chrome UA and a bare curl UA) — byte-identical text
both times (a few individual calls hit transient connection resets,
resolved by retry). All 12 citation quotes programmatically confirmed
as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory
  section (treated as one source); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field name (`hoaName`) independently confirmed to match existing
  corpus convention (used by the other HOA documents). No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: HOA Board Election Procedures — Information Sheet
  (`hoa_board_election_procedures_info_sheet`), 7 clauses (5 authority
  + 2 drafting), in the Real Estate category. No new fields.
- Corpus: 1,839 → 1,846 clauses; 235 → 236 documents. First document
  of wave 47.
