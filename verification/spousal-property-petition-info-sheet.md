# Estate Planning, new document: Spousal or Domestic Partner Property Petition — Information Sheet

## Why this document

This topic was previously only a brief mention inside an existing
clause, `commprop_spousal_property_petition`, in the corpus's existing
Community Property Agreement document, describing it as "a separate
court procedure." This document independently re-verifies Probate Code
§§ 13650-13660 from primary sources and substantially deepens coverage:
the full required-petition-contents list, notice requirements including
the Attorney General notice for charitable interests, order finality,
business-creditor protections, and a structural comparison to the
corpus's Small Estate Affidavit and Petition for Probate documents.
Fourth and final document of wave 55, closing the wave.

## What this document covers

8 clauses: 2 drafting (declaration, signature block) and 6 authority
clauses, citing Cal. Prob. Code §§ 13650-13653, 13655-13660:

- **`spousalpetition_two_types_of_relief`** (§§ 13650(a), 13656(a)-(c)) —
  the statute's two distinct requests: an order that administration is
  unnecessary for property passing to the survivor, versus an order
  confirming ownership of property the survivor already owns under
  §§ 100/101.
- **`spousalpetition_who_may_file_and_where`** (§§ 13650(a), (c), 13652,
  13653) — standing, venue, and which proceeding the petition joins.
- **`spousalpetition_required_petition_contents`** (§ 13651(a)-(c)) —
  the full required-allegations and attachment list.
- **`spousalpetition_notice_requirements`** (§ 13655(a)-(b)) — who must
  receive notice, including a distinct Attorney General notice
  requirement for petitions involving a charitable interest.
- **`spousalpetition_order_finality_and_business_protection`** (§§ 13657,
  13658) — the order's conclusiveness once final, and creditor
  protections specific to an unincorporated business passing to the
  survivor.
- **`spousalpetition_vs_small_estate_and_probate`** (§§ 13659, 13660) —
  a structural comparison to the corpus's existing Small Estate
  Affidavit and Petition for Probate documents.

## Genuine corrections and findings

- **A precise two-type structure, not one general procedure**: the
  statute separately authorizes (1) a determination that administration
  is unnecessary because property is "passing to" the surviving spouse,
  and (2) confirmation of ownership the survivor already holds under
  §§ 100/101 — property that was never the decedent's. The court's
  corresponding orders under § 13656 are stated separately for each
  type, and a mixed outcome under § 13656(b) is confirmed.
- **A previously unstated procedural detail, now fully covered**: the
  complete § 13651(a)-(c) required-contents and attachment list —
  including disclosure of any non-pro-rata division agreement between
  the spouses — far more granular than the existing brief mention.
- **A charitable-interest notice requirement not covered anywhere else
  in the corpus**: § 13655(b)'s Attorney General notice, triggered when
  the petitioner's allegation rests on a will involving a charitable
  trust without a resident trustee or an unidentified charitable devise.
- Confirmed the procedure is administratively lighter than full probate:
  § 13659 dispenses with the inventory and appraisal (except for the
  § 13658 business-creditor protections), and § 13660 lets attorney's
  fees be set by private agreement, not court approval.

## Honest gap disclosed

Probate Code § 1220's manner-of-service requirements, incorporated by
reference into § 13655's notice rule, were not independently fetched or
verified in this document. The structural comparison to the Small Estate
Affidavit and Petition for Probate documents relies on those documents'
already-verified citations (§ 13100, § 8002) rather than re-verifying
them fresh in this session — disclosed explicitly as a summary, not
newly verified statutory text.

## Method

Fetched Cal. Prob. Code §§ 100, 101, 13502, and 13650-13660 directly
from `leginfo.legislature.ca.gov`, each independently re-fetched via two
genuinely distinct methods (curl with one User-Agent versus
wget/Python-urllib with another), extracting only the substantive
content div and normalizing whitespace before diffing — confirmed
byte-identical on both fetches for every section. All 14 citation quotes
programmatically confirmed as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently via genuinely distinct
  fetch methods; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source; §§ 13650, 13652,
  13653, 13657, 13658, 13659, and 13660 correctly disclosed as
  independently numbered, separately verified sections; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`decedentName`, `dateOfDeath`, `survivingSpouseName`,
  `propertyDescription`, `countyOfFiling`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus field definitions
  exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Spousal or Domestic Partner Property Petition —
  Information Sheet (`spousal_property_petition_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Estate Planning category. No new
  fields.
- Corpus: 2,109 → 2,117 clauses; 270 → 271 documents. Fourth and final
  document of wave 55, closing the wave.
