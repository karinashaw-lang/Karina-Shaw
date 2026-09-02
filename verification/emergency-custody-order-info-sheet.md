# Family Law, new document: Emergency (Ex Parte) Custody Order — Information Sheet

## Why this document

The existing Post-Judgment Modification of Child Custody/Support and
Domestic Violence Restraining Order documents don't cover the
distinct, faster emergency custody procedure available in a family
law case, governed by California Rules of Court and Family Code
provisions on ex parte applications specifically.

## What this document covers

8 clauses: 2 drafting (application declaration, signature/
verification) and 6 authority clauses:

- **`exparteorder_crc5151_procedure_and_standard`** (Cal. Rules of
  Court, rule 5.151) — the general ex parte application procedure and
  standard.
- **`exparteorder_fam3064_immediate_harm_standard`** (Fam. Code
  § 3064) — the immediate-harm standard specific to a custody ex parte
  order.
- **`exparteorder_crc5165_notice_requirements`** (Cal. Rules of
  Court, rule 5.165) — notice requirements for the ex parte
  application itself, and the five good-cause categories for waiving
  it.
- **`exparteorder_fam3062_followup_hearing`** (Fam. Code § 3062;
  § 3063) — the required follow-up noticed hearing and the interim
  state-removal restraining order.
- **`exparteorder_dvro_relationship_distinction`** (Cal. Rules of
  Court, rule 5.151(a); rule 5.165(b)) — the distinction from a
  Domestic Violence Restraining Order as a separate procedural track.
- **`exparteorder_epo_distinction`** (Fam. Code §§ 6250, 6256) — a
  brief distinction from the law-enforcement-initiated Emergency
  Protective Order.

## Genuine corrections and findings

- **A significant correction**: § 3064's standard does not mention
  jurisdiction or venue-shopping at all. Direct review shows the
  statute is purely: "immediate harm to the child or immediate risk
  that the child will be removed from the State of California," with
  "immediate harm" defined by recent/patterned domestic violence,
  recent/patterned sexual abuse, and mandatory consideration of
  illegal firearm access. No venue/jurisdiction-motive language exists
  in the section as fetched.
- **A significant correction**: Family Code § 3066 does not exist —
  confirmed by two independent fetches returning no section content —
  at least not in the custody chapter, which runs only §§ 3060-3064.
  The real follow-up-noticed-hearing provision is § 3062(a): the
  court "shall... set a hearing date within 20 days" and issue an
  order to show cause on the responding party, with a possible 90-day
  extension under § 3062(b) if service can't be effected on an evasive
  party. Section 3063 separately requires a state-removal restraining
  order pending that hearing.
- Corrected the notice-waiver framing: Rule 5.165's good-cause grounds
  are broader than "fear of flight." The rule lists five distinct
  categories (frustrating the order's purpose; irreparable harm to
  applicant/children; irreparable property loss; advance agreement; or
  futile/burdensome further efforts) — "flight risk" is at most one
  fact pattern that might fit one category, not itself a named
  exception.
- A genuine additional finding: Rule 5.151(d)(5) explicitly ties
  custody ex parte applications to § 3064 and lists required showings
  (a UCCJEA declaration, the current custody order) — useful
  specificity beyond the original research brief.
- Confirmed the DVRO distinction is directly citable, not merely
  inferred: Rules 5.151(a) and 5.165(b) each contain an explicit
  textual carve-out stating they do not apply to DVPA ex parte
  applications.
- Confirmed Family Code § 6256's Emergency Protective Order duration
  (the earlier of the 5th court day or the 7th calendar day) as a
  brief, secondary distinguishing citation.

## Honest gap disclosed

No case law was included — this topic is fully statutory/procedural,
and CourtListener was not used, consistent with the guidance that case
law here is optional.

## Method

Fetched Cal. Fam. Code §§ 3062, 3063, 3064, 6250, 6256 directly from
`leginfo.legislature.ca.gov`, and California Rules of Court, rules
5.151 and 5.165, directly from `courts.ca.gov`. Each verified against
a second, independent fetch with a distinct User-Agent — confirmed
byte-identical or textually identical. All 13 citation quotes
programmatically confirmed as exact substrings of the fetched,
cleaned source text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-section
  citation pairs (5.151(b) + (d)(2); § 3064(a) + (b)(1) + (b)(2);
  5.165(b) + (b)(2)) correctly disclose "treated as one source, not
  independent"; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`countyOfFiling`, `signatureDate`, `signatureCity`,
  `otherParentName`) independently confirmed to match existing corpus
  convention. New fields: `requestingPartyName`, `childrenNames`,
  `factsShowingImmediateRisk`, `dateOfMostRecentIncident`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Emergency (Ex Parte) Custody Order — Information
  Sheet (`emergency_custody_order_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Family Law category. New fields:
  `requestingPartyName`, `childrenNames`, `factsShowingImmediateRisk`,
  `dateOfMostRecentIncident`.
- Corpus: 1,331 → 1,339 clauses; 167 → 168 documents.
