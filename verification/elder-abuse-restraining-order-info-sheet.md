# Family Law, new document: Elder Abuse Restraining Order — Information Sheet

## Why this document

The corpus's existing Elder and Dependent Adult Financial Abuse
Information Sheet (Estate Planning category) covers financial-abuse
reporting/documentation, never the EADACPA civil protective-order
remedy in Welf. & Inst. Code § 15657.03. The existing Civil Harassment
Restraining Order and Domestic Violence Restraining Order documents
have their own, different eligibility statutes. Confirmed as a
genuine, non-duplicative gap by reading all three existing documents
in full before drafting.

## What this document covers

8 clauses: 2 drafting (petition declaration, verification/signature)
and 6 authority clauses:

- **`elderabuseTRO_protected_person_definitions`** (Welf. & Inst. Code
  §§ 15610.27; 15610.23(a)-(b)) — statutory definitions of "elder" and
  "dependent adult."
- **`elderabuseTRO_abuse_definition`** (§ 15610.07(a)) — the
  three-category statutory definition of abuse.
- **`elderabuseTRO_who_may_petition`** (§ 15657.03(a)(1), (a)(2)(A)-(B),
  (a)(3)(A), (b)(2)-(4)) — who may petition: the protected person, or
  specified others on their behalf.
- **`elderabuseTRO_relief_available`** (§ 15657.03(b)(5)(A)-(C)) —
  personal-conduct orders, residence exclusion and its limits.
- **`elderabuseTRO_standard_duration_enforcement`** (§ 15657.03(c),
  (i)(1)-(2), (x)) — the standard, duration/renewal, and violation
  consequence.
- **`elderabuseTRO_distinction_from_other_restraining_orders`**
  (§ 15657.03(y)) — the statutory carve-out distinguishing this remedy
  from civil harassment and domestic violence restraining orders.

## Genuine corrections and findings

- **A significant correction to the eligibility framing**: § 15657.03
  has no "certain relatives" category comparable to the family/
  household-member categories in the civil harassment or domestic
  violence statutes. Eligibility instead runs to the elder/dependent
  adult themselves, or a conservator, trustee, attorney-in-fact,
  guardian ad litem, or catch-all "other person legally authorized,"
  plus — narrowly, only for isolation-based claims — an "interested
  party" defined by a personal, preexisting relationship rather than
  family status, plus a county APS agency under two specific
  conditions.
- **A term-of-art correction**: the statute's own definition of
  "Petitioner" (§ 15657.03(b)(4)) is the protected elder or dependent
  adult, not necessarily the person who files — the opposite of
  ordinary usage. The document's drafting clauses account for this by
  using separate `petitionerName` and `elderOrDependentAdultName`
  fields.
- Confirmed the standard of proof (§ 15657.03(c): "reasonable proof of
  a past act or acts of abuse") does not include the "great or
  irreparable harm" language that appears in the civil harassment
  statute — a genuine textual difference, not assumed.
- Confirmed renewal under § 15657.03(i)(1) is broader than the civil
  harassment statute's renewal cap: "either for five years or
  permanently," versus a flat five-year cap with no permanent option
  elsewhere in the corpus's already-verified civil harassment
  citations — disclosed as drawing on that prior verification rather
  than a fresh fetch this session.
- Confirmed the residence-exclusion order has an explicit title/lease
  carve-out (§ 15657.03(b)(5)(B)) not present in the harassment
  statute's relief provisions.
- Confirmed directly from § 15657.03(y) itself (not just inferred from
  the reverse cross-reference in the civil harassment statute) that
  this remedy is, by its own terms, mutually exclusive with actions
  under Code Civ. Proc. Chapter 3 (civil harassment) and Family Code
  Division 10 (domestic violence).

## Honest gap disclosed

The distinction clause's characterization of Code Civ. Proc. § 527.6(w)
and Fam. Code § 6211 relies on this corpus's own already-verified
citations for those statutes (from the existing Civil Harassment
Restraining Order document); those two statutes were not independently
re-fetched this session, and this is disclosed explicitly rather than
presented as freshly verified.

## Method

Fetched Welf. & Inst. Code §§ 15610.07, 15610.23, 15610.27, and
15657.03 directly from `leginfo.legislature.ca.gov` via curl (not a
summarizing fetch tool, to preserve exact text), each verified against
a second, independent fetch with a distinct User-Agent (Chrome/Windows
vs. Safari/macOS) — confirmed byte-identical on both fetches. All 16
citation quotes across the 6 authority clauses programmatically
confirmed as exact substrings of the fetched, tag-stripped text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subsections of the same statutory
  section (treated as one source) versus genuinely separate sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic title reuses ("Verification and Signature" from the
  Civil Harassment document; "Statutory Definitions of 'Elder' and
  'Dependent Adult'" from the Elder Financial Abuse document) —
  consistent with the corpus-wide generic-title-reuse pattern; content
  independently re-verified rather than copied, per the delivering
  agent's own disclosure.
- Field names (`petitionerName`, `respondentName`, `incidentDate`,
  `incidentLocation`, `incidentDescription`, `additionalIncidents`,
  `signatureDate`, `signatureCity`) independently confirmed to match
  the existing Civil Harassment Restraining Order document's fields.
  New fields: `elderOrDependentAdultName`,
  `petitionerRelationshipToElder`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Elder Abuse Restraining Order — Information Sheet
  (`elder_abuse_restraining_order_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Family Law category. New fields:
  `elderOrDependentAdultName`, `petitionerRelationshipToElder`.
- Corpus: 1,703 → 1,711 clauses; 216 → 217 documents. Second document
  of wave 42.
