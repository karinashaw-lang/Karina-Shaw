# Family Law, new document: Petition for Legal Separation — Information Sheet

## Why this document

The corpus's existing dissolution document itself states, in
`dissolution_scope_three_proceedings`, that dissolution, legal
separation, and nullity are three distinct Family Code proceedings.
Dissolution and nullity each already have a dedicated document; legal
separation did not. Confirmed as a genuine gap by reading both
existing documents' full clause sets before drafting, to avoid
duplicating rather than cross-referencing their content.

## What this document covers

6 clauses: 2 drafting (declaration, signature block) and 4 authority
clauses:

- **`legalseparation_no_residency_requirement`** (Fam. Code §§ 2320(a),
  2321(a); California Courts self-help guide) — no residency or
  durational requirement to file for legal separation, unlike
  dissolution.
- **`legalseparation_marital_status_not_terminated`** (Fam. Code
  § 2300; same self-help guide) — a judgment of legal separation does
  not end the parties' marital status.
- **`legalseparation_grounds_and_property_framework`** (Fam. Code
  §§ 2310(a)-(b), 2550) — the same no-fault grounds and
  community-property default apply to both proceedings.
- **`legalseparation_no_waiting_period_and_common_reasons`** (Fam.
  Code § 2339(a); same self-help guide) — no six-month waiting period,
  and commonly cited reasons for choosing legal separation over
  dissolution.

## Genuine corrections and findings

- **A significant correction to the original research framing**: Fam.
  Code § 2345 is not about residency at all — it requires both
  parties' consent to a legal-separation judgment unless one party has
  defaulted. Not used.
- **A second significant correction**: Fam. Code §§ 2400-2406 are not
  "judgment of legal separation" provisions — they are the Summary
  Dissolution chapter, a streamlined divorce procedure for short,
  childless, low-asset marriages. Not usable for this document; not
  cited.
- The real textual basis for "no residency requirement" was found
  instead in § 2320(a) (framed only around "a judgment of dissolution
  of marriage") together with § 2321(a), which expressly contemplates
  a legal-separation proceeding filed without compliance with § 2320's
  residency requirements and supplies the statutory amendment path to
  convert to dissolution once residency is later met.
- The "parties remain married" fact has no dedicated legal-separation
  statute — it rests on the Family Code's structure (§ 2300's "Effect
  of Dissolution" chapter addressing only dissolution, with no
  parallel chapter for legal separation), corroborated by, not
  substituted for, the California Courts self-help page's plain
  statement of the same consequence. This inference from statutory
  structure, rather than an affirmative statute, is disclosed
  explicitly in the clause's `gap` field.
- The commonly cited reasons for choosing legal separation over
  dissolution (religious/personal/financial reasons, insurance/benefit
  preservation) were sourced verbatim from the California Courts
  self-help page, not asserted from general knowledge.
- Confirmed § 2310 and § 2550 each state their rule (grounds;
  community-property division) for both dissolution and legal
  separation in a single sentence, rather than requiring a
  cross-reference or inference.

## Honest gap disclosed

Whether the spousal-support and child-custody statutes extend to
legal separation the same way § 2310 (grounds) and § 2550 (property
division) do was not independently verified — disclosed explicitly as
an open question rather than assumed to extend automatically.

## Method

Fetched Fam. Code §§ 2300, 2310, 2320, 2321, 2339, and 2550 directly
from `leginfo.legislature.ca.gov`, and the California Courts self-help
"Legal separation" page from `selfhelp.courts.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent
(a Chrome UA vs. bare `curl/8.4.0`) — confirmed byte-identical on
diff. All 9 citation quotes programmatically confirmed as exact,
whitespace-normalized substrings of both independent fetches.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are independent Family Code sections vs.
  which quotes come from the same single courts.ca.gov page; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic title reuses ("Declaration of Parties, Marriage
  Date, and Purpose of This Information Sheet" from the Nullity
  document; "Signature and Acknowledgment — Not a Court Filing" from
  the Dissolution document) — deliberate parallel structure, consistent
  with the corpus-wide generic-title-reuse pattern.
- Field names (`party1Name`, `party2Name`, `marriageDate`,
  `separationDate`, `countyOfFiling`, `dateSigned`, `cityState`)
  independently confirmed to exactly match the existing Petition for
  Dissolution of Marriage document's fields. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Petition for Legal Separation — Information Sheet
  (`legal_separation_petition_info_sheet`), 6 clauses (4 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 1,697 → 1,703 clauses; 215 → 216 documents. First document
  of wave 42.
