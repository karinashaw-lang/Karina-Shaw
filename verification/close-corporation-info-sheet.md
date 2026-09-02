# Business Formation, new document: Close Corporation — Formation Information Sheet

## Why this document

The corpus's existing Buy-Sell Agreement and Articles of Incorporation
documents mention close corporations only in passing (a contingent cap
provision, naming requirements). Neither analyzes the close
corporation election itself — its definition, required articles
statement, share transfer restrictions, or its central practical
feature (shareholder management agreements).

## What this document covers

7 clauses: 2 drafting (election/purpose declaration, incorporator
signature) and 5 authority clauses:

- **`closecorp_definition`** (Corp. Code § 158) — the statutory
  definition and shareholder cap.
- **`closecorp_election_amendment_mechanics`** (§ 202) — the required
  articles statement to elect (or later remove) close corporation
  status.
- **`closecorp_transfer_restriction_legend`** (§ 418) — the required
  share certificate legend and the consequence of exceeding the cap.
- **`closecorp_shareholder_management_agreement`** (§ 300(b); § 186) —
  shareholder management agreements in place of a board.
- **`closecorp_deadlock_dissolution`** (§ 1800(a)(2); § 1904(c)) —
  expanded standing for close-corporation shareholders in deadlock and
  dissolution proceedings.

## Genuine corrections and findings

- Confirmed §§ 158, 202, 300(b), and 418 as originally framed, and
  found § 158(g) itself lists which sections it treats as containing
  close-corporation-specific provisions (186, 202, 204, 300, 418, 421,
  1111, 1201, 1800, 1904) — used to confirm coverage rather than guess.
- **A genuine finding**: § 186 (not originally named) is the operative
  definition of "shareholders' agreement," cross-referencing § 300(b)
  directly — added as a second, independent source for the
  management-agreement clause.
- **A significant correction on deadlock/dissolution**: the deadlock
  remedy is not a close-corporation-specific "provisional director"
  mechanism. Section 308 (provisional director) is a general remedy
  for any corporation and is conspicuously absent from § 158(g)'s own
  list of close-corp-specific sections. What is close-corp-specific is
  standing: §§ 1800(a)(2) and 1904(c) give any shareholder of a close
  corporation standing to seek involuntary dissolution or court
  supervision of winding-up regardless of ownership percentage, versus
  the general 33⅓%/5% thresholds — stated plainly as a correction
  rather than asserting a nonexistent provision.
- **A precision correction**: § 158's shareholder cap is a
  corporation-chosen number "not exceeding 35," not a flat mandatory
  35 — the corporation may set it lower.

## Honest gap disclosed

Section 300(c)'s list of provisions a shareholders' agreement cannot
waive out of is referenced generically in the relevant clause's body,
not quoted item-by-item, to avoid an unwieldy partial quote —
disclosed in that clause's `gap` field rather than fabricated.

## Method

Fetched Corp. Code §§ 158, 186, 202, 300, 308, 418, 421, 1800, and
1904 directly from `leginfo.legislature.ca.gov`, each verified against
a second, independent fetch with a distinct User-Agent — confirmed
byte-identical. All 15 citation quotes programmatically confirmed as
exact substrings of the fetched, normalized text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subsections of one
  section (e.g., § 158(b)/(c), § 418(c)/(d), § 300(b)/(d)/(e), §
  1800(a)(2)/(b)(5)) labeled as one source each; genuinely separate
  sections (§ 158 vs. § 202, § 300 vs. § 186, §§ 1800/1904 vs. § 308)
  labeled as independent — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `authorizedShares`,
  `principalOfficeAddress`, `agentName`, `agentAddress`,
  `incorporatorName`) independently confirmed to match the existing
  Articles of Incorporation and Professional Corporation documents'
  fields exactly. New field: `maxShareholders`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Close Corporation — Formation Information Sheet
  (`close_corporation_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Business Formation category. New field:
  `maxShareholders`.
- Corpus: 1,541 → 1,548 clauses; 194 → 195 documents.
