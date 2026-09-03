# Family Law, new document: Marital Summary Dissolution — Information Sheet

## Why this document

Confirmed the corpus's existing Domestic Partnership Dissolution
document covers a genuinely different mechanism (Fam. Code § 299,
Secretary of State administrative filing for registered domestic
partnerships) from this document's subject (Fam. Code §§ 2400-2406,
married spouses, superior court judgment). First of wave 57's two
Family Law documents.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses, citing Cal. Fam. Code §§ 2400-2405 and, for contrast, § 299:

- **`summarydissolution_eligibility_conditions`** (§ 2400(a)-(b)) —
  the full twelve eligibility conditions and the dollar-figure
  adjustment mechanism.
- **`summarydissolution_petition_commencement_and_contents`** (§ 2401)
  — the joint-petition requirement and required contents.
- **`summarydissolution_revocation_before_judgment`** (§ 2402) — either
  party's unilateral right to revoke before judgment.
- **`summarydissolution_judgment_entry_and_status`** (§ 2403) — the
  six-month wait and automatic judgment entry.
- **`summarydissolution_judgment_effect_and_setaside`** (§§ 2404, 2405)
  — the judgment's finality and the statutory set-aside grounds.
- **`summarydissolution_distinction_from_dp_administrative_termination`**
  (§§ 2400(a)(1), 2401(a), 299(a)) — a structural comparison to the
  existing Domestic Partnership Dissolution document's mechanism.

## Genuine corrections and findings

- **All twelve eligibility conditions verified precisely, including
  exact dollar figures**: a 5-year marriage-duration cap measured as of
  the date of separation (not filing), a narrow lease-only real-property
  exception, a $4,000 unpaid-obligations threshold, and a $25,000
  community/separate-property threshold — all quoted exactly from the
  currently codified text (last amended effective 2015).
- **A significant honest disclosure**: § 2400(b) requires the Judicial
  Council to periodically recompute and publish CPI-adjusted versions of
  the $4,000 and $25,000 figures outside the statute's own text. The
  document states the codified base figures precisely but explicitly
  does not claim to know the presently-adjusted amounts — mirroring how
  the existing Domestic Partnership Dissolution document already handles
  the same kind of cross-reference.
- Confirmed either party may unilaterally revoke the joint petition
  before judgment, and that judgment enters automatically after six
  months absent revocation — the court does not exercise independent
  discretion at that stage.
- Confirmed the set-aside remedy under § 2405(b) is scoped precisely:
  if the § 2400 conditions weren't actually met, the court must set the
  judgment aside as to everything except marital status — the dissolved
  status itself survives even a successful set-aside on that ground.
- Structural comparison to the Domestic Partnership Dissolution document
  confirms a family resemblance (duration caps, dollar thresholds tied
  to the same § 2400 figures, a similar lease exception) while
  identifying the mechanisms as genuinely distinct: different Family
  Code parts, different legal statuses, and different deciding
  government actors (superior court vs. Secretary of State).

## Honest gap disclosed

The currently-operative, CPI-adjusted dollar thresholds (as opposed to
the statute's own base figures) were not independently located or
verified. The § 299(a) quote in the comparison clause is reused
verbatim from the corpus's already-verified `dpdissolution_
administrative_notice_eligibility` clause rather than independently
re-fetched by this research.

## Method

Fetched Cal. Fam. Code §§ 2400-2405 directly from
`leginfo.legislature.ca.gov`, each independently re-fetched with a
distinct User-Agent string/headers and confirmed byte-identical after
whitespace normalization for all seven sections checked. All 8 citation
quotes programmatically confirmed as exact substrings of the confirmed
text.

## Verification

- All sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; §§ 2404 and 2405
  correctly disclosed as genuinely independent sections; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses.
- Field names (`party1Name`, `party2Name`, `marriageDate`,
  `separationDate`, `countyOfFiling`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field ids. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Marital Summary Dissolution — Information Sheet
  (`marital_summary_dissolution_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Family Law category. No new fields.
- Corpus: 2,145 → 2,153 clauses; 275 → 276 documents. First document of
  wave 57.
