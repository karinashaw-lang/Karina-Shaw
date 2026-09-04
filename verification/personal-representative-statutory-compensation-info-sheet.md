# Estate Planning, new document: Statutory Compensation of the Personal Representative — Information Sheet

## Why this document

Confirmed by grep that "10800", "10801", "executor compensation," and
"statutory fee" had zero genuine hits anywhere in the corpus. Read the
existing Petition for Probate document in full — confirmed this is a
genuine, non-duplicative companion: that document covers opening
probate (petition, notice, priority, Letters); this document covers
the personal representative's compensation once appointed, a
different topic. Second of wave 67's four documents.

## What this document covers

7 clauses: 2 drafting (purpose/declaration, signature/acknowledgment)
and 5 authority clauses, citing Cal. Prob. Code §§ 10800(a)-(b),
10801(a), 10802(a)-(b), 10803, 10804, and 10805:

- **`executorcomp_statutory_percentage_schedule`** (§ 10800(a)-(b)) —
  **a key finding**: the exact tiered percentage schedule (4%/3%/2%/
  1%/0.5%, then court-determined above $25M) and the statute's own
  definition of "value of the estate accounted for" — appraisal value
  plus sale gains plus receipts, less sale losses, without regard to
  encumbrances.
- **`executorcomp_extraordinary_services`** (§ 10801(a)) — the
  court's separate, formula-free "just and reasonable" discretionary
  allowance for extraordinary services.
- **`executorcomp_will_provision_controls_and_no_side_agreements`**
  (§ 10802(a)-(b), § 10803) — a will's own compensation provision
  displaces the statutory schedule (subject to a relief petition),
  and any side agreement for more than the statute allows is void.
- **`executorcomp_attorney_personal_representative_dual_role`**
  (§ 10804) — an attorney-personal-representative keeps the PR fee
  but not the attorney fee absent advance court approval.
- **`executorcomp_multiple_personal_representatives`** (§ 10805) —
  co-personal-representatives split one statutory fee; each does not
  receive a full fee.

## Genuine corrections and findings

- **The central finding**: confirmed the exact current percentage
  tiers and dollar breakpoints verbatim from the fetched text, rather
  than approximating a number known to be easily misremembered —
  flagged in the research assignment itself as unusually
  number-sensitive.
- Confirmed "value of the estate accounted for" is a defined
  statutory figure (appraisal value + gains − losses + receipts,
  ignoring encumbrances), not simply the estate's gross or net value —
  a distinction that matters because it means the percentage schedule
  isn't applied to net equity after debts.
- Confirmed extraordinary-services compensation has no fixed
  percentage or formula of its own — left entirely to the court's
  "just and reasonable" discretion, unlike the ordinary-services
  schedule.
- Confirmed the void-side-agreement rule (§ 10803) as a distinct,
  separately-numbered protection from the will-provision-controls
  rule (§ 10802), not the same rule restated.
- Confirmed multiple personal representatives divide one fee rather
  than each independently qualifying for a full statutory fee.

## Honest gap disclosed

The separate, similarly tiered statutory schedule for the estate
attorney's own compensation (Prob. Code §§ 10810-10811) was fetched
for context but not built into its own clause or cited, since this
document's scope is the personal representative's fee specifically —
its existence is flagged in a `gap` field without asserting
unverified specifics about it. § 10802's remaining subsections (the
notice and best-interest findings required before a court relieves a
personal representative from a will's compensation provision) were
not quoted, only their existence flagged. How the court treats
jointly held or non-probate property for purposes of the § 10800
schedule was not addressed.

## Method

Fetched Cal. Prob. Code §§ 10800-10805 from `leginfo.legislature.ca.gov`
via curl (through the sandboxed proxy), each section fetched twice
with distinct User-Agent strings, confirmed byte-identical after
whitespace normalization (one transient connection reset on § 10804
was retried successfully). All 8 citation quotes across the 5
authority clauses programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- All six statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- **Caught and fixed one schema error** during my own validation
  (separate from the corpus's `{{}}` leak scan): the delivered
  drafting clause `pr_comp_declaration` carried a stray `checkedDate`
  field, which the schema reserves for authority clauses only.
  Removed before merge. Also renamed the batch's clause-id prefix from
  the agent's self-chosen `pr_comp_` to `executorcomp_` for
  consistency with the prefix suggested in the research assignment and
  this corpus's naming conventions; re-scanned clean after both fixes.
- Checked source-independence disclosure logic — the § 10800(a)/(b)
  pair and § 10802(a)/(b) pair correctly disclosed as one statutory
  section each; § 10802 and § 10803 correctly disclosed as
  independent, separately-numbered sections; correct as delivered.
- Checked for duplicate clause IDs and duplicate titles against the
  full corpus (none, after the rename).
- Field names (`decedentName`, `executorName`, `dateSigned`,
  `cityState`) independently confirmed to match existing corpus field
  definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Statutory Compensation of the Personal Representative
  — Information Sheet
  (`personal_representative_statutory_compensation_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Estate Planning category.
  No new fields.
- Corpus: 2,449 → 2,456 clauses; 316 → 317 documents. Second document
  of wave 67.
