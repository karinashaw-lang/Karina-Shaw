# Real Estate, new document: Partition Action — Information Sheet

## Why this document

Substituted in place of a Real Estate Transfer Disclosure Statement
topic, which a research agent correctly identified as already fully
covered inside the existing Residential Purchase Agreement document
(three verified TDS clauses there) — rather than force a shallow
"deepening" of content already complete, this fresh, unrelated topic
filled the slot. Confirmed by grep that "partition," "872.210,"
"tenants in common," and "joint tenants" had zero genuine hits on
partition actions specifically. Read the existing Quiet Title Action
and Boundary Line Agreement documents in full — confirmed this is a
genuine, non-duplicative companion: those resolve who owns disputed
title or where a line sits; partition is a different remedy for
co-owners who agree on ownership shares but want the property divided
or sold. Third of wave 67's four documents.

## What this document covers

8 clauses: 2 drafting (declaration, signature/acknowledgment) and 6
authority clauses, citing Cal. Code Civ. Proc. §§ 872.210(a)-(b),
872.020, 872.140, 874.010(a), 874.040, 874.321.5, 874.318(a),
874.319(a), 874.311(b)-(c), 874.313(a)-(b), 874.316(a), and
874.317(a)-(b):

- **`partition_who_may_bring_and_scope`** (§ 872.210(a)-(b), § 872.020)
  — who may bring a partition action and what property interests it
  covers, plus the express spousal community-property carve-out.
- **`partition_contribution_and_accounting`** (§ 872.140) — the
  court's general equitable power to order accounting/contribution
  among co-owners, honestly disclosed as undefined by category in the
  statute's own text.
- **`partition_costs_and_attorneys_fees`** (§ 874.010(a), § 874.040,
  § 874.321.5) — **a key finding**: partition has its own statutory
  attorney's-fee rule, a specific departure from the general "American
  Rule."
- **`partition_in_kind_vs_sale_preference`** (§ 874.318(a),
  § 874.319(a)) — the statutory preference for partition in kind and
  the "great prejudice" factor test.
- **`partition_real_property_act_scope`** (§ 874.311(b)-(c),
  § 874.313(a)-(b)) — **a key finding**: California's 2022-amended
  Partition of Real Property Act applies by default to tenancy-in-
  common actions filed since Jan. 1, 2023 absent unanimous cotenant
  agreement — and, verified from its own text, expressly does not
  extend to joint tenancy.
- **`partition_appraisal_and_buyout_right`** (§ 874.316(a),
  § 874.317(a)-(b)) — the court-ordered appraisal and the buyout
  right for cotenants who didn't request sale, before a forced sale.

## Genuine corrections and findings

- **The central finding**: confirmed the Partition of Real Property
  Act's scope provision is not limited to inherited "heirs property"
  by its own text — it applies to any qualifying tenancy-in-common
  action — and confirmed it does not extend to joint tenancy, both
  disclosed explicitly rather than assumed from the act's common
  informal name.
- Confirmed partition has its own attorney's-fee-shifting rule
  (fees "for the common benefit" as a cost of partition, apportioned
  by interest or equity), rather than assuming the general American
  Rule applies with no exception.
- Confirmed the statutory preference is partition in kind, not
  partition by sale — sale requires an affirmative "great prejudice"
  finding after weighing statutory factors, with no single factor
  dispositive.
- Confirmed the buyout mechanism operates only after a court-ordered
  appraisal and only for cotenants who did not request sale.
- Caught and fixed a smart-quote vs. straight-quote mismatch in one
  citation during the agent's own programmatic re-verification pass,
  per its self-report.

## Honest gap disclosed

The general equitable contribution/accounting power (§ 872.140) is
stated in the statute's own general "principles of equity" language
without a statutory list of reimbursable expense categories — case
law applying it to specific categories (taxes, mortgage, repairs) was
not researched. The pre-2023 Chapter 3 partition-manner provisions
(§§ 872.810 et seq.), which would govern an action outside the
Partition of Real Property Act's scope, were not verified. Several
subsections within the cited sections (buyout price formula, payment
deadlines, multiple-elector procedure, the sale procedure itself, and
broker reporting duties) were not independently quoted — each
clause's `gap` field flags this rather than implying completeness.

## Method

Fetched Cal. Code Civ. Proc. §§ 872.210, 872.020, 872.140, 874.010,
874.040, 874.321.5, 874.318, 874.319, 874.311, 874.313, 874.316, and
874.317 from `leginfo.legislature.ca.gov` via curl (through the
sandboxed proxy), each section fetched twice with distinct User-Agent
strings, confirmed byte-identical after whitespace normalization. All
11 citation quotes across the 6 authority clauses programmatically
re-verified as exact substrings of the confirmed text as a final gate
before delivery.

## Verification

- All twelve statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 872.210(a)/(b)
  pair, § 874.318(a)/(b) pair, and § 874.316(a)/(d) pair each
  correctly disclosed as one statutory section; § 872.020, § 874.319,
  § 874.313, and § 874.317 each correctly disclosed as genuinely
  separate, independently numbered sections even where they work
  together with a companion section; § 874.321.5 correctly disclosed
  as an independent, later-added section that narrows § 874.040;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused generic drafting title "Signature and Acknowledgment"
  matches this corpus's established cross-document pattern, not a
  substantive duplicate.
- Three new fields defined (`otherCoOwnersNames`, `coOwnershipType`,
  `requestedPartitionType`) — checked against the full corpus's
  existing field ids first to confirm no equivalent field already
  existed under a different name. Seven other fields
  (`plaintiffName`, `propertyAddress`, `legalDescription`,
  `parcelNumber`, `countyOfFiling`, `signatureDate`, `signatureCity`)
  reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Partition Action — Information Sheet
  (`partition_action_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. 3 new fields
  (`otherCoOwnersNames`, `coOwnershipType`, `requestedPartitionType`).
- Corpus: 2,456 → 2,464 clauses; 317 → 318 documents. Third document
  of wave 67.
