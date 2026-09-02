# Family Law, twelfth document: Grandparent Visitation (Petition Information Sheet)

## Why this document

Genuinely distinct from the existing Parenting Plan (between the
child's own parents) and the Guardianship Petition (custody/care, not
visitation). Follows the same informational, non-dispositive pattern
as the Guardianship Petition document — explicit throughout that it
does not itself grant visitation, only a court order does.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses covering California's three distinct statutory pathways:

- **`grandvis_scope_informational`** (Fam. Code § 3104(a)) — the
  shared framework and that visitation arises only from a court order.
- **`grandvis_3102_deceased_parent`** (Fam. Code § 3102(a)-(c)) — the
  deceased-parent pathway, correcting an assumption that it reaches
  only grandparents — it also reaches the deceased parent's children,
  siblings, and surviving parent.
- **`grandvis_3103_pending_proceeding`** (Fam. Code § 3103(a), (c),
  (d)) — the pending-custody-proceeding pathway, available only inside
  an already-pending § 3021 proceeding.
- **`grandvis_3104_petition_requirements`** (Fam. Code § 3104(a), (c))
  — the general freestanding petition's two required findings.
- **`grandvis_3104b_filing_restriction`** (Fam. Code § 3104(b);
  *Troxel v. Granville*, 530 U.S. 57 (2000)) — the actual flat bar on
  filing while parents are married (not a "presumption," as the task
  brief assumed), subject to six enumerated exceptions.
- **`grandvis_3104ef_presumptions`** (Fam. Code § 3104(e)-(f); *Troxel
  v. Granville*; *In re Marriage of Harris*, 34 Cal.4th 210 (2004)) —
  the two distinct rebuttable presumptions (parents agree; sole-custody
  parent objects), each confirmed constitutional under Troxel.

## Genuine corrections caught during research

- § 3102's petitioning class is broader than grandparents alone — it
  also reaches the deceased parent's children, siblings, and surviving
  parent.
- The task brief's assumed "presumption when parents are married and
  living together and object" doesn't match the statute: § 3104(b) is
  a flat filing bar (not a presumption), while the actual rebuttable
  presumptions (§ 3104(e), (f)) apply to different fact patterns
  (parents agreeing; a sole-custody parent objecting) — neither is
  "married-and-living-together-and-object."
- Confirmed directly that *Troxel* did not itself construe California's
  statute — it addressed a Washington statute and cited § 3104(e)
  only approvingly, by name, as a contrasting example.
- Found and used the actual California Supreme Court case applying
  Troxel to § 3104(f): *In re Marriage of Harris* (2004).

## Method

Fetched Family Code §§ 3102, 3103, 3104 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical. *Troxel v. Granville* and *In re Marriage of Harris*
verified via CourtListener against full opinion text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — the agent caught and
  fixed one real leak during its own drafting process, then
  re-confirmed clean on the final file (also independently
  re-confirmed clean during this integration).
- Checked source-independence disclosure logic across all 6 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`childName`, `childDOB`, `relationshipToChild`,
  `parent1Name`, `parent2Name`, `dateSigned`, `cityState`) confirmed to
  match the existing Guardianship Petition document exactly.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Grandparent Visitation (Petition Information Sheet)
  (`grandparent_visitation_petition`), 8 clauses (6 authority + 2
  drafting), in the Family Law category. New field: `grandparentName`.
- Corpus: 654 → 662 clauses; 87 → 88 documents.
