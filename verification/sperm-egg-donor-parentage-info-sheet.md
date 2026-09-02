# Family Law, new document: Sperm/Egg Donor Parentage — Information Sheet

## Why this document

The corpus's existing Gestational Carrier (Surrogacy) Agreement
document covers Fam. Code §§ 7960-7962 (gestational surrogacy
specifically), not the more general assisted-reproduction donor
framework in § 7613. Confirmed by grep that § 7613 had only passing,
cross-referenced mentions elsewhere; the delivering agent read the
gestcarrier clauses in full first to state the relationship between
the two frameworks precisely rather than assume.

## What this document covers

7 clauses: 2 drafting (facts declaration, signature/acknowledgment)
and 5 authority clauses:

- **`donorparentage_sperm_donor_default_rule`** (Fam. Code
  § 7613(b)(1)-(2)) — two different default rules for a semen donor
  depending on physician/sperm-bank involvement.
- **`donorparentage_ova_embryo_provider_rule`** (§ 7613(c), (d)(1)) —
  a different rule for ova and embryo providers.
- **`donorparentage_nonbirthgiving_intended_parent_consent`**
  (§ 7613(a)(1)-(2)) — the non-birth-giving intended parent's own
  parentage via written or oral consent.
- **`donorparentage_statutory_forms_and_gestcarrier_relationship`**
  (§ 7613.5(a), (c), (d)) — the optional statutory forms and their
  explicit non-application to gestational-carrier agreements.
- **`donorparentage_original_source_consent_and_embryo_disposition`**
  (§ 7613(d)(2), (e)(1)-(2)) — multi-hand genetic material and
  embryo-disposition renunciation agreements.

## Genuine corrections and findings

- **A significant nuance correction**: the "must go through a licensed
  physician" rule was not fully repealed as one framing assumed — it
  survives as one half of an asymmetric default structure. Physician/
  sperm-bank donation defaults to non-parent status (opt-in-to-parent
  via writing); non-physician/known donation defaults the other
  direction (opt-out-of-parent via writing or clear-and-convincing
  oral-agreement proof).
- Confirmed the statute never uses the words "anonymous" or "known" to
  describe a donor — that distinction is the document's own functional
  description of the practical effect, disclosed explicitly as not
  statutory language.
- Confirmed § 7613(a) answers the non-donor, non-birth-giving intended
  parent's own parentage directly within the same section, gender/
  marital-status neutral, with no physician-involvement condition — no
  need to reach outside the section.
- **A significant finding on ova/embryo providers**: neither is subject
  to the physician/bank distinction that governs semen donors — that
  mechanism is unique to § 7613(b); a naive assumption that egg
  donation tracks sperm donation's structure would be wrong. The two
  provisions also use a different evidentiary standard ("satisfactory
  evidence" of shared intent) than § 7613(b)(2)'s "clear and
  convincing evidence."
- Confirmed § 7613.5(c) explicitly disclaims covering gestational
  carrier/surrogacy agreements, giving a precise, textually-grounded
  statement of how the two corpus frameworks relate rather than
  assuming one subsumes the other.

## Honest gap disclosed

§ 7613(e)'s renunciation-agreement clause deliberately covers only a
voluntary written agreement between people who already share legal
control over stored embryos — not a court's resolution of a contested
embryo-disposition dispute where no such agreement exists, which was
not researched and is outside this document's scope.

## Method

Fetched Fam. Code §§ 7613 and 7613.5 directly from
`leginfo.legislature.ca.gov` via curl with two distinct User-Agent
strings — byte-identical text both times, with each section's own
amendment footer confirming currency (§ 7613: Stats. 2023, Ch. 851,
Sec. 5 (AB 1650), eff. Jan. 1, 2024; § 7613.5: Stats. 2019, Ch. 115,
Sec. 89 (AB 1817), eff. Jan. 1, 2020). All 12 citation quotes
programmatically confirmed as exact substrings of both independent
fetches.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  section (treated as one source); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`intendedParent1Name`, `intendedParent2Name`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. New fields: `donorName`, `donationType`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Sperm/Egg Donor Parentage — Information Sheet
  (`sperm_egg_donor_parentage_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the Family Law category. New fields: `donorName`,
  `donationType`.
- Corpus: 1,796 → 1,803 clauses; 229 → 230 documents. Third document
  of wave 45.
