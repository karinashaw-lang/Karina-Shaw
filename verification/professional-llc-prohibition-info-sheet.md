# Business Formation, new document: Professional LLC Prohibition in California — Information Sheet

## Why this document

Confirmed by grep that "professional limited liability company" and this
specific prohibition had zero hits anywhere in the corpus. Distinct from
the existing Professional Corporation — Formation Information Sheet
document. Functions as a "why not" companion explaining why a licensed
professional typically cannot simply form an LLC the way many other
businesses can in California.

## What this document covers

7 clauses: 2 drafting (purpose declaration, signature/certification) and
5 authority clauses, citing Cal. Corp. Code §§ 17701.04, 13401, 13401.3,
16951, and 16101:

- **`profllc_general_purpose_and_licensing_carveout`** (§ 17701.04(b)) —
  the general lawful-purpose provision, and a conditional licensed-
  services carve-out that turns on what each profession's own governing
  statute separately says.
- **`profllc_professional_services_prohibition`** (§ 17701.04(e)) — a
  separate, unconditional bar for a specifically cross-referenced
  category of "professional services."
- **`profllc_professional_services_defined`** (§§ 13401(a), 13401.3) —
  the cross-referenced definition, broad because it incorporates the
  entire Business and Professions Code licensing scheme.
- **`profllc_healthcare_subsidiary_exception`** (§ 17701.04(d)) — one
  narrow, specifically named exception for a health care service plan
  subsidiary.
- **`profllc_rllp_narrower_professions`** (§§ 16951, 16101(a)(8)(A)) —
  the contrasting Registered Limited Liability Partnership form,
  available but only to a shorter, named list of professions.

## Genuine corrections and findings

- **A key structural finding, surfaced as its own clause**: § 17701.04(b)
  contains an almost-identically-worded *conditional* licensed-services
  carve-out, while subdivision (e) states a *different, unconditional*
  bar for the narrower cross-referenced "professional services" category
  — a nuance a reader could easily misread as contradictory or redundant
  if not explained. The document explicitly flags this reading as its own
  plain-text inference, not a conclusion drawn from case law (none was
  located construing how the two subdivisions interact).
- Confirmed the "professional services" bar reaches broadly by
  cross-reference to the entire Business and Professions Code licensing
  scheme, the Chiropractic Act, the Osteopathic Act, and the Yacht and
  Ship Brokers Act — not a short, fixed list of named professions written
  directly into § 17701.04, § 13401, or § 13401.3.
- Found and included a real, narrow exception (§ 17701.04(d)) for a
  health care service plan LLC that is a subsidiary of an already-
  licensed parent plan — while explicitly noting the exception is framed
  by its own text as an exception to subdivision (b), not expressly to
  subdivision (e)'s professional-services bar, and that whether health
  care service plans separately fall within "professional services" was
  not independently researched.
- Confirmed the contrasting RLLP form is available, but only to a
  specific, shorter list of professions (architecture, public
  accountancy, engineering, land surveying, and law) — not a general
  alternative to the LLC prohibition for any licensed profession.

## Honest gap disclosed

Section 16101 currently has two different 2024-amended versions on file
at leginfo (Stats. 2024, Ch. 361, Sec. 9 vs. Sec. 10); only the Sec. 9
version was independently double-fetched and confirmed, and the document
explicitly flags that the Sec. 10 version was not independently checked
for identical wording. No exhaustive survey of individual Business and
Professions Code licensing statutes was performed to determine which
specific professions might qualify for § 17701.04(b)'s conditional
carve-out.

## Method

Fetched Cal. Corp. Code §§ 17701.04, 13401, 13401.3, 16951, and 16101
directly from `leginfo.legislature.ca.gov`, each via two independent
fetches using distinct User-Agent strings and separate cookie
jars/sessions — confirmed byte-identical after whitespace normalization.
All 7 citation quotes programmatically verified as exact substrings of
the normalized, twice-fetched text.

## Verification

- All five sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of § 17701.04 (treated as
  one source across three clauses) versus the genuinely independent
  §§ 13401/13401.3 pair and the §§ 16951/16101 pair; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  accepted generic drafting-title reuses ("Purpose and Scope of This
  Information Sheet," "Signature and Certification").
- Field names (`preparerName`, `professionType`, `companyName`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Professional LLC Prohibition in California —
  Information Sheet (`professional_llc_prohibition_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Business Formation category.
  No new fields.
- Corpus: 2,042 → 2,049 clauses; 261 → 262 documents. Third document of
  wave 53.
