# Business Formation, new document: Statement of Information (California Secretary of State Periodic Filing)

## Why this document

The existing Articles of Incorporation, Nonprofit Articles of
Incorporation, LLC Articles of Organization, and Corporate Bylaws
documents cover one-time formation. This document covers a genuinely
distinct, ongoing compliance obligation: the periodic Statement of
Information every California corporation and LLC must file with the
Secretary of State after formation to keep the entity's public record
current — a recurring filing with its own deadlines, required
content, "no change" mechanic, and penalty/suspension consequences
for non-filing, none of which existed anywhere in the corpus before
this document (the existing Articles documents each carry only a
brief pointer clause, independently re-verified rather than reused).

## What this document covers

8 clauses: 2 drafting (declaration, current-information worksheet) and
6 authority clauses:

- **`soi_filing_deadlines`** (Corp. Code § 1502(a), (d); § 17702.09(a),
  (c)) — the initial 90-day deadline for both entity types, then
  annual (corporations) vs. biennial (LLCs) recurring filing.
- **`soi_required_content_corporation`** (Corp. Code § 1502(a), (b)) —
  the full required-content list for a domestic stock corporation.
- **`soi_required_content_llc`** (Corp. Code § 17702.09(a)) — the full
  required-content list for an LLC.
- **`soi_no_change_certification`** (Corp. Code § 1502(c);
  § 17702.09(b)) — the "no change" certification alternative to
  refiling, for both entity types.
- **`soi_penalty_for_nonfiling`** (Rev. & Tax. Code § 19141; Corp.
  Code § 2204(a); § 17713.09(a)) — the $250 penalty and its
  notice-and-certification mechanism.
- **`soi_suspension_consequence`** (Corp. Code § 2205(a)-(c);
  § 17713.10(a)-(c); Rev. & Tax. Code § 23301) — the separate, more
  serious suspension-of-powers consequence for sustained non-filing,
  distinguished from the Franchise Tax Board's separate
  tax-nonpayment suspension mechanism.

## Genuine corrections / confirmations from research

- The task brief's assumption that LLCs file biennially while
  corporations file annually was confirmed as literally true in
  current statutory text (§ 1502(a): "annually thereafter";
  § 17702.09(a): "biennially thereafter") — verified directly, not
  assumed.
- The task brief assumed § 19141's $250 penalty is itself the
  suspension mechanism. Direct review shows it is not — § 19141 is a
  pure monetary penalty triggered by SOS certification; the genuine
  suspension power is a separate provision (Corp. Code § 2205 /
  § 17713.10), triggered only when an entity fails to file for the
  current period, hasn't filed in 24 months, and was already
  certified for the § 19141 penalty. This is legally distinct from,
  though can run parallel to, the Franchise Tax Board's tax-nonpayment
  suspension under Rev. & Tax. Code § 23301.
- The task brief assumed "principal business activity" might be
  textually limited to domestic stock corporations. Direct review of
  § 1502(a)(9) shows the text says "every corporation," not
  stock-corp-limited — the document frames around stock/for-profit
  corporations as a scoping choice (nonprofits are governed by a
  different Corporations Code division, out of scope), not because the
  statute itself is so limited.
- The task brief asked whether an abbreviated "no change" form exists.
  Confirmed real: both § 1502(c) and § 17702.09(b) let an entity
  certify no changes occurred in lieu of refiling.

## Honest gaps disclosed

- The commonly-discussed consequence that a suspended entity loses the
  capacity to sue or defend a civil action in California courts is
  not itself stated in the suspension statutes' text (which only say
  "powers, rights, and privileges" are suspended) and was not
  independently verified against a court opinion this session
  (CourtListener was rate-limited) — disclosed as unverified by this
  document rather than asserted as confirmed.
- The Corporate Transparency Act is mentioned only as unverified
  federal background context in the drafting `soi_declaration` clause,
  explicitly flagged as outside this document's researched scope, not
  as citable authority.
- § 19141's separate $50 penalty for nonprofit mutual-benefit/religious
  corporations (via Corp. Code §§ 6810/8810) is disclosed as out of
  scope, not researched.

## Method

Fetched Corp. Code §§ 1502, 17702.09, 2204, 17713.09, 2205, 17713.10,
and Rev. & Tax. Code §§ 19141, 23301 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical.
All 15 quoted fragments verified as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the two same-section clauses (`soi_filing_deadlines`,
  citing two subsections each of both § 1502 and § 17702.09;
  `soi_required_content_corporation`, citing § 1502(a) and (b)) each
  carry an explicit "treated as one source, not independent" disclosure
  sentence — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `agentName`, `agentAddress`,
  `principalOfficeAddress`) confirmed to match the existing Articles of
  Incorporation and LLC Articles of Organization documents' `fields`
  arrays exactly. New fields: `entityType`, `keyPersonnelNames`,
  `businessActivityDescription`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Statement of Information (California Secretary of
  State Periodic Filing) (`statement_of_information`), 8 clauses (6
  authority + 2 drafting), in the Business Formation category. New
  fields: `entityType`, `keyPersonnelNames`,
  `businessActivityDescription`.
- Corpus: 781 → 789 clauses; 104 → 105 documents.
