# Business Formation, new document: Piercing the Corporate Veil / Alter Ego Liability — Information Sheet

## Why this document

Confirmed by grep that "alter ego" and "piercing the corporate veil"
had no substantive coverage anywhere in the corpus's clause bodies or
titles. A well-defined, case-law-based California doctrine with real
primary sources; UPL-sensitive given it concerns personal liability
exposure, so drafted with extra care to stay descriptive rather than
prescriptive.

## What this document covers

6 clauses: 2 drafting (purpose/scope declaration, signature block) and
4 authority clauses:

- **`alterego_two_part_test`** (*Automotriz del Golfo de California v.
  Resnick*, 47 Cal.2d 792 (1957); *Mesler v. Bragg Management Co.*, 39
  Cal.3d 290 (1985)) — the two-part test for alter ego liability.
- **`alterego_factors_totality`** (*Sonora Diamond Corp. v. Superior
  Court*, 83 Cal.App.4th 523 (2000)) — the non-exhaustive factors
  courts weigh, no fixed checklist.
- **`alterego_llc_parity`** (Corp. Code § 17703.04(a)-(b)) — the
  statute extending the doctrine to LLC members on the same terms as
  corporate shareholders.
- **`alterego_equitable_nature`** (*Mesler*; *Sonora Diamond*) — the
  doctrine's equitable character; it doesn't dissolve the entity.

## Genuine corrections and findings

- Confirmed the two-part test's exact wording from its originating
  case, *Automotriz* (1957), and confirmed *Mesler* (1985) quotes that
  same passage verbatim rather than independently restating it —
  disclosed as one source (Automotriz) plus one confirming later
  decision, not two independent sources for the test's wording.
- Confirmed *Sonora Diamond*'s factor list is itself a synthesis of
  earlier cases (*Roman Catholic Archbishop*, *Associated Vendors*,
  and others) — disclosed as one appellate source's synthesis, not
  several independently verified sources, since the underlying cases
  weren't independently re-fetched.
- Confirmed via statutory text that Corp. Code § 17703.04(b) extends
  the common-law doctrine to LLC members on the same terms as
  corporate shareholders, with one specific, narrow carve-out: failure
  to hold member/manager meetings isn't itself a factor toward alter
  ego liability unless the governing documents expressly require such
  meetings.
- Confirmed via *Mesler*'s own language that alter ego liability
  doesn't dissolve or merge the entity — "the wall remains" even after
  a "hole is drilled" for the specific liability at issue.
- **A disciplined omission**: declined to assert that "alter ego is
  not an independent cause of action" — a common secondary-source
  characterization — because it was not independently verified against
  primary case text within this research's scope, disclosed explicitly
  as omitted rather than asserted on secondary-source strength alone.

## Honest gap disclosed

The underlying cases *Sonora Diamond* itself cites and synthesizes
(*Roman Catholic Archbishop*, *Associated Vendors*, *Tomaselli*, and
others) were not independently fetched or re-verified — this document
relies on *Sonora Diamond*'s own restatement of those factors.

## Method

Fetched *Automotriz*, *Mesler*, and *Sonora Diamond* from
CourtListener, and Corp. Code § 17703.04 from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch — confirmed consistent. All 8 citation quotes
programmatically confirmed as exact substrings of the fetched text.

## Verification

- All citations fetched twice independently; confirmed clean on
  integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses when citations quote the identical passage (Automotriz/
  Mesler) versus genuinely independent sources (Mesler/Sonora Diamond
  for the equitable-nature clause) versus subsections of the same
  statute (§ 17703.04(a)-(b)); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none — no title reuse at all in this delivery).
- Field names (`companyName`, `entityType`, `stateOfFormation`,
  `authorizedSignerName`, `dateSigned`, `cityState`) independently
  confirmed to match existing corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Piercing the Corporate Veil / Alter Ego Liability —
  Information Sheet (`alter_ego_piercing_corporate_veil_info_sheet`),
  6 clauses (4 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 1,803 → 1,809 clauses; 230 → 231 documents. Completes wave
  45 (Child Abduction Prevention Orders, Shareholder/Member Inspection
  Rights, Sperm/Egg Donor Parentage, Alter Ego/Piercing the Corporate
  Veil).
