# Business Formation, new document: California Corporate Statutory Merger — Information Sheet

## Why this document

Confirmed by grep that "corporate merger" and "agreement of merger"
had zero genuine hits (only an incidental EIN-reassignment mention of
"surviving corporation"). Read the Statutory Conversion, Buy-Sell
Agreement, and Corporate Dissolution documents in full — confirmed
none address the merger procedure (Statutory Conversion changes an
entity's type; Buy-Sell Agreement is a private transfer-restriction
contract; Corporate Dissolution covers winding up). Confirmed
non-duplicative. Second of wave 77's four documents.

## What this document covers

6 clauses: 2 drafting (recitals, certification/signatures) and 4
authority clauses, citing Cal. Corp. Code §§ 1101(a), (a)(3), (a)(4),
1201(a), 152, 1107(a), 1103, and 110(c):

- **`corpmerger_agreement_requirements`** (§ 1101(a), (a)(3), (a)(4))
  — the statute's own required content list for an agreement of
  merger.
- **`corpmerger_approval`** (§ 1101(a), § 1201(a), § 152) — **a key
  finding**: the two-layer board-and-shareholder approval structure,
  with California's own statutory definition of "approved by the
  outstanding shares" quoted precisely rather than assuming a single
  fixed percentage — no unanimity claim made.
- **`corpmerger_effect_successor_liability`** (§ 1107(a)) — **the
  central finding**: verified precisely that the surviving corporation
  succeeds to all rights and property AND becomes subject to all debts
  and liabilities "in the same manner as if the surviving corporation
  had itself incurred them" — a merger cannot pick up assets while
  leaving liabilities behind.
- **`corpmerger_certificate_filing`** (§ 1103, § 110(c)) — the
  officers'-certificate filing requirement and the merger's
  effective-upon-filing rule, including the general 90-day
  delayed-effective-date mechanism.

## Genuine corrections and findings

- **The central finding**: confirmed the successor-liability rule
  precisely from § 1107(a)'s own text — the surviving corporation
  cannot take a disappearing corporation's assets without also taking
  its liabilities.
- Confirmed the exact statutory definition of "approved by the
  outstanding shares" (§ 152) rather than assuming a simple majority
  applies uniformly — the definition includes class/series voting and
  any greater proportion the articles require.
- Correctly declined to claim unanimous shareholder approval is
  generally required, and briefly cross-referenced this corpus's
  existing Dissenters' Rights document without restating its content.
- Confirmed the merger becomes effective upon filing unless a delayed
  effective date (up to 90 days) is specified — verified from the
  general instrument-filing statute (§ 110(c)), a section independent
  of the merger-specific filing statute (§ 1103).

## Honest gap disclosed

Short-form parent-subsidiary mergers, mergers with a foreign
corporation or other business entity as a constituent party, social
purpose corporation mergers, the five-sixths-ownership exception to
shareholder approval, and the close-corporation two-thirds threshold
are all flagged as out of scope, consistent with this project's
existing pattern in the Statutory Conversion and Corporate Dissolution
documents.

## Method

Fetched Cal. Corp. Code §§ 1101, 1107, 1103, 1201, 152, and 110 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization — including confirming
the exact section range (Chapter 11, §§ 1100-1113) from the Corporations
Code's own table of contents rather than assumed from memory. All 13
citation quotes across the 4 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a third fetch
(Chrome/Windows User-Agent) of all six cited sections — all 10
spot-checked passages confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the § 1101(a) triple
  citation and the two § 1103 citations each correctly disclosed as
  not independent of one another; § 1101(a) vs. § 1201(a) vs. § 152 in
  the approval clause, and § 1103 vs. § 110(c) in the filing clause,
  correctly disclosed as independent, separately-numbered sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Five new fields required (`constituentCorporationNames`,
  `survivingCorporationName`, `outstandingSharesVoteStatement`,
  `boardApprovalDate`, `shareholderApprovalDate`) — checked against
  the full corpus's existing field ids first to confirm no equivalent
  field already existed. Two fields (`authorizedSignerName`,
  `authorizedSignerTitle`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Corporate Statutory Merger — Information
  Sheet (`corporate_statutory_merger_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Business Formation category. 5 new
  fields.
- Corpus: 2,713 → 2,719 clauses; 356 → 357 documents. Second document
  of wave 77.
