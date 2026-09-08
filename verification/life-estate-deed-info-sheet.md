# Estate Planning, new document: Life Estate Deed — Information Sheet

## Why this document

Second processed item of wave 140 (Estate Planning slot, 1×4
pattern). The agent confirmed the corpus's several incidental "life
estate" mentions (federal estate tax marital deduction, UFIPA scope,
ILIT rules, small-estate exclusions, grant-deed default) never treat a
deed reserving a life estate as its own instrument, and confirmed the
apparent "761" collision traced to Fam. Code § 7611 and CCP § 761.010
et seq. — different codes entirely. The chosen topic — a deed
reserving a life estate under Civ. Code §§ 761, 765, 818, 840, 1105,
Rev. & Tax. Code § 62(e), and Prob. Code § 210, plus *Sallee v.
Daneri*'s market-value-depreciation gloss on "injury to the
inheritance" — was confirmed genuinely open.

## What this document covers

10 clauses: 3 drafting (purpose, TOD-deed distinction, signature/
acknowledgment) and 7 authority clauses, citing Civ. Code § 761,
§ 765, § 1105, § 840, § 818, Rev. & Tax. Code § 62(e), Prob. Code
§ 210(a), and *Sallee v. Daneri*, 49 Cal. App. 2d 324 (1942):

- **`lifeestatedeed_estate_types`** / **`lifeestatedeed_freehold_
  classification`** — life estates as one of four durational estate
  categories, classified as freehold.
- **`lifeestatedeed_express_reservation_required`** — the fee-simple
  presumption requiring express reservation on the deed's face.
- **`lifeestatedeed_life_tenant_repair_tax_duty`** — the life
  tenant's statutory duty to maintain and pay taxes.
- **`lifeestatedeed_no_injury_to_inheritance`** — the life tenant's
  broad use right, limited by the no-injury-to-inheritance rule and
  *Sallee*'s market-value-depreciation/burden-of-proof gloss.
- **`lifeestatedeed_property_tax_change_ownership`** — the property-
  tax change-in-ownership exclusion for creating (but not ending) a
  life estate.
- **`lifeestatedeed_affidavit_of_death`** — the affidavit-of-death
  recording mechanism.

## Genuine findings

- **A disclosed source-text digitization artifact preserved rather
  than corrected**: the estate-types clause's gap discloses that
  § 761's own published text numbers its first list item with a
  lowercase "l." rather than the numeral "1.," verified directly in
  the raw HTML on both fetches, not silently normalized.
- **A disclosed single-decision, non-Supreme-Court authority**: the
  no-injury-to-inheritance clause's gap notes *Sallee v. Daneri* is an
  intermediate appellate decision on which the Supreme Court denied a
  hearing petition (with three justices voting to grant it, per the
  opinion's own closing line) — disclosed rather than treated as
  settled or unanimous.
- **A disclosed fact-pattern limitation**: the same clause's gap notes
  *Sallee* involved timber-cutting and farm-building deterioration
  specifically, and does not claim the same market-value test applies
  identically to every kind of act on every kind of property.
- **A disclosed cross-reference not independently traced**: the
  property-tax clause's gap notes § 62(e) cross-references subdivision
  (d) and § 63 for further exceptions, neither quoted or described
  here.

## Honest gap(s) disclosed

This document does not address who bears extraordinary repair,
capital-improvement, or insurance costs as between life tenant and
remainderman, does not state a remedy for a remainderman if § 840 or
§ 818 duties are breached, does not describe execution/acknowledgment/
recording formalities (deferred to the corpus's Grant Deed document),
does not address Medi-Cal estate-recovery or gift/estate-tax
consequences, and does not evaluate whether any specific deed's
wording achieves an effective life-estate reservation.

## Method

Fetched Civ. Code §§ 761, 765, 818, 840, 1105, Rev. & Tax. Code § 62,
and Prob. Code § 210 from leginfo.legislature.ca.gov, each fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed identical after normalizing only confirmed whitespace
artifacts. A CourtListener search located *Sallee v. Daneri* without a
rate-limit issue; its quote was verified via the tool-returned
internal opinion id's `html_with_citations` field. All 8 citation
instances were programmatically confirmed by the research agent as
exact, contiguous substrings.

Independently re-verified during integration review via a two-
hundred-and-twenty-third fetch (a new distinct curl User-Agent
string, "Groundtruth-223rdVerify-LifeEstateDeed/1.0") of all seven
statutory sections — all fetched cleanly on the first attempt. All 7
statute citation instances confirmed clean on direct normalized-
whitespace substring match, including the disclosed "l."/"1."
digitization artifact. The *Sallee v. Daneri* citation was
independently reconfirmed via the CourtListener API's
`get_endpoint_item` against the opinion's internal id — an exact
match, no defect found. The four durational estate categories, the
freehold classification, the fee-simple presumption, the life
tenant's repair/tax duties, the no-injury-to-inheritance rule and its
judicial gloss, the change-in-ownership exclusion, and the affidavit-
of-death mechanism were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All seven cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-twenty-third independent fetch during integration
  review; all 7 statute citation instances confirmed clean. The
  case-law citation independently re-verified via the CourtListener
  API against the correct internal opinion id; no defect found.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause
  correctly discloses whether it draws on one or more sources; correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `lifeestatedeed_` prefix has zero collisions. Ran
  term-specific greps for "life estate," "Sallee v. Daneri," and bare
  section numbers "761," "765," "818," "840" — the "life estate" hits
  all traced to incidental mentions in unrelated documents (federal
  estate tax, UFIPA, ILIT, small-estate exclusions, grant-deed
  default), and the bare-number hits all traced to different codes
  (Family Code, Code of Civil Procedure, Probate Code, Corporations
  Code) — zero genuine overlap.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new field ids required — all seven fields (`grantorName`,
  `granteeName`, `propertyAddress`, `legalDescription`,
  `recordingCounty`, `dateSigned`, `cityOfExecution`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Life Estate Deed — Information Sheet
  (`life_estate_deed_info_sheet`), 10 clauses (7 authority + 3
  drafting), in the Estate Planning category. No new fields.
- Corpus: 4,640 → 4,650 clauses; 577 → 578 documents. Second processed
  item of wave 140.
