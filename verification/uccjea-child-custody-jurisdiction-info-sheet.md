# Family Law, new document: Child Custody Jurisdiction (UCCJEA) — Information Sheet

## Why this document

The corpus's existing UIFSA document governs interstate child SUPPORT
enforcement (Fam. Code §§ 5700.101-5700.905, a different Family Code
part). The existing Emergency (Ex Parte) Custody Order document covers
CRC rule 5.151's emergency-order procedure, not the underlying
jurisdictional question of which state's courts may hear a custody
case in the first place. Confirmed by reading both existing documents'
clauses before writing anything.

## What this document covers

8 clauses: 2 drafting (jurisdictional-facts declaration, signature/
certification) and 6 authority clauses:

- **`uccjea_home_state_jurisdiction`** (Fam. Code § 3402(g); § 3421(a)
  (1)) — home state as the primary jurisdictional basis.
- **`uccjea_alternative_bases_no_home_state`** (§ 3421(a)(2)-(4), (b))
  — the alternative jurisdictional bases when there is no home state.
- **`uccjea_exclusive_continuing_jurisdiction`** (§ 3422(a); § 3423)
  — the rule for which state retains jurisdiction to modify a custody
  determination.
- **`uccjea_temporary_emergency_jurisdiction`** (§ 3424(a),(b)) — a
  genuinely separate jurisdictional basis distinct from the ex parte
  document's procedural mechanism.
- **`uccjea_registration_enforcement`** (§ 3445(a),(c); § 3446(a)-(b))
  — the UCCJEA's own registration mechanism for enforcing an
  out-of-state custody determination.
- **`uccjea_simultaneous_proceedings`** (§ 3426(a); § 3410(a)) — the
  stay-and-communicate rule for simultaneous proceedings in two
  states.

## Genuine corrections and findings

- Confirmed the section range exactly: §§ 3400-3465 (leginfo's own
  part heading confirms "PART 3. UNIFORM CHILD CUSTODY JURISDICTION
  AND ENFORCEMENT ACT [3400-3465]").
- Confirmed home state and the primary jurisdictional basis as
  originally framed.
- Found the alternative-bases test is richer than the generic framing:
  a two-prong significant-connection test plus two further bases
  (forum-declination, no-other-state-has-jurisdiction) and an
  exclusivity clause.
- **A genuine finding on exclusive continuing jurisdiction**:
  structurally parallel to but not identical to UIFSA's — turns on
  "significant connection"/evidence-availability or the residence of
  the child, parents, and person acting as a parent, not
  obligor/obligee residence as under UIFSA, and has no party-consent
  override unlike UIFSA § 5700.205(a)(2).
- Confirmed temporary emergency jurisdiction is a genuinely separate
  jurisdictional basis (whether California courts have the power to
  act at all) from the ex parte document's procedural mechanism (which
  governs whether relief is granted once jurisdiction already exists).
- Confirmed the UCCJEA has its own registration statute, structurally
  parallel to but distinct from UIFSA's § 5700.601 et seq.
- Confirmed the stay-and-communicate rule for simultaneous
  proceedings, paired with the general inter-court communication
  authority in § 3410 — a genuinely independent source (a different
  chapter), unlike most other clause pairs in this document, which are
  subsections of the same section.

## Honest gaps disclosed

- No case-law citations anywhere — this is a purely statutory topic;
  CourtListener was not queried this session, and each authority
  clause discloses this explicitly.
- Sections 3064, 3427, 3428 (forum non conveniens factors), 3429, and
  3445(d)'s enumerated defenses are referenced as existing but not
  independently fetched or quoted — clauses note their existence
  without quoting them.

## Method

Fetched Fam. Code §§ 3402, 3410, 3421, 3422, 3423, 3424, 3426, 3445,
and 3446 directly from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent —
confirmed byte-identical (whitespace-normalized). All 13 citation
quotes across 6 authority clauses programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `dateSigned`, `cityState`,
  `countyOfFiling`, `requestingPartyName`, `otherParentName`)
  independently confirmed to match existing corpus convention
  (Parenting Plan, UIFSA Registration, Emergency Custody Order
  documents). New fields: `childCurrentState`, `childResidenceHistory`,
  `otherCustodyProceedingsInfo`, `otherPersonsClaimingRights`, modeled
  on Judicial Council form FL-105's content categories.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Child Custody Jurisdiction (UCCJEA) — Information
  Sheet (`uccjea_child_custody_jurisdiction_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Family Law category. New fields:
  `childCurrentState`, `childResidenceHistory`,
  `otherCustodyProceedingsInfo`, `otherPersonsClaimingRights`.
- Corpus: 1,511 → 1,519 clauses; 190 → 191 documents.
