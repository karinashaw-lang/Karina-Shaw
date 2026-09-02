# Business Formation, new document: Shareholder and Member Inspection Rights — Corporate and LLC Records Information Sheet

## Why this document

No dedicated coverage of Corp. Code §§ 1600-1603 (corporate
shareholder inspection) or § 17704.10 (LLC member inspection) existed
in the corpus. Confirmed as a genuine gap; the delivering agent read
the existing Corporate Bylaws document and confirmed the existing
`llc_records_inspection` clause (shared by both LLC Operating
Agreement documents) already cites § 17704.10(b) for the parallel LLC
right, and independently re-verified that citation rather than
trusting it.

## What this document covers

7 clauses: 2 drafting (declaration, closing/signature) and 5 authority
clauses:

- **`inspectionrights_corp_books_records`** (Corp. Code § 1601(a)-(b))
  — shareholder's right to inspect books, records, and minutes — no
  ownership threshold.
- **`inspectionrights_corp_shareholder_list`** (§ 1600(a), (c)) — two
  distinct shareholder-list rights, one gated by ownership, one not.
- **`inspectionrights_corp_remedy`** (§ 1603(a)-(c)) — the court
  remedy for a refused demand.
- **`inspectionrights_llc_member_records`** (§ 17704.10(b);
  § 17701.13(d)) — the parallel LLC member/transferee inspection
  right.
- **`inspectionrights_nonwaivable`** (§§ 1600(d), 1601(b);
  § 17704.10(h)) — non-waivability across both entity types.

## Genuine corrections and findings

- **A significant correction**: § 1600 contains two distinct rights,
  not one right with one threshold. Subdivision (a) is a streamlined,
  no-purpose-required procedure to obtain a compiled shareholder list
  on five business days' notice, gated at 5% aggregate ownership (or
  1% plus a Schedule 14A filing). Subdivision (c) is a separate,
  threshold-free right for any shareholder to inspect the same
  shareholder record for a purpose reasonably related to their
  interest — easily conflated as a single right with a single
  threshold.
- Confirmed § 1601 (books/records/minutes) carries no ownership
  threshold at all — one share is enough.
- **A correction on the remedy**: § 1603 has no per-day or fixed-dollar
  penalty, contrary to a natural assumption. The remedy is purely a
  court order (enforcement or an appointed inspector/accountant), with
  audit costs defaulting to the applicant unless the court shifts
  them. This contrasts with the LLC statute (§ 17704.10(g), noted but
  not separately quoted), which does let a court award attorney's fees
  for unjustified noncompliance — an asymmetry between the two entity
  types.
- Confirmed § 17704.10(b) (the operative LLC inspection right) and
  § 17701.13(d) (the separate section defining which records must be
  maintained) are correctly distinguished rather than conflated.
- **A precise textual comparison**: the corporate non-waivability
  language bars limiting the right "by the articles or bylaws"
  (naming specific documents), while the LLC statute more broadly
  voids "any waiver of the rights" without naming a document —
  flagged as an open question whether that difference would matter
  for a side agreement, rather than resolved speculatively.

## Honest gap disclosed

Whether a corporation's shareholders agreement (a separate contract
from the articles or bylaws) could have a different effect than the
bylaws themselves on the corporate right was not resolved — the
quoted statutes name only the articles and bylaws.

## Method

Fetched Corp. Code §§ 1600, 1601, 1602, 1603, 17704.10, and 17701.13
directly from `leginfo.legislature.ca.gov` via curl with two distinct
User-Agent strings each (one 17704.10 fetch hit a connection reset,
retried successfully) — text identical both times aside from a
dynamic per-request debug token. All 12 citation quotes
programmatically confirmed as exact substrings of the fetched text
before being written into the JSON.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory
  section versus genuinely independent sections across two separate
  statutory schemes (General Corporation Law vs. the LLC Act); correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `entityType`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention. New
  fields: `shareholderOrMemberName`, `inspectionPurpose`,
  `ownershipPercentage`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Shareholder and Member Inspection Rights — Corporate
  and LLC Records Information Sheet
  (`shareholder_member_inspection_rights_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Business Formation category. New
  fields: `shareholderOrMemberName`, `inspectionPurpose`,
  `ownershipPercentage`.
- Corpus: 1,789 → 1,796 clauses; 228 → 229 documents. Second document
  of wave 45.
