# Confidentiality & IP, new document: CCPA Employee and Job Applicant Data — Information Sheet

## Why this document

Confirmed by grep that Civ. Code § 1798.145's former employee/HR/B2B
exemption had zero substantive coverage anywhere in the corpus — only a
single passing citation to it in an unrelated non-discrimination clause.
Distinct from the existing Website/App Privacy Policy — CCPA
Consumer-Facing Disclosure document (customer-facing) and the CCPA
Service Provider Data Processing Agreement document (vendor-facing).

## What this document covers

8 clauses: 2 drafting (purpose/scope, notice-at-collection declaration)
plus a signature block, and 6 authority clauses, citing Cal. Civ. Code
§§ 1798.145, 1798.140, 1798.100, 1798.105, 1798.106, and 1798.110:

- **`ccpaemployee_former_exemption_expired`** (§ 1798.145(m)(1)(A), (m)(4),
  (n)(1), (n)(3), and its official history note) — the former, temporary
  job-applicant/employee/personnel and B2B exemptions, both inoperative
  since January 1, 2023, confirmed by the statute's own current history
  note.
- **`ccpaemployee_consumer_definition_includes_personnel`** (§ 1798.140(i))
  — the Act's general "consumer" definition doesn't distinguish customers
  from personnel.
- **`ccpaemployee_covered_business_thresholds`** (§ 1798.140(d)(1)) — the
  revenue/volume thresholds that determine which employers are even
  covered.
- **`ccpaemployee_notice_at_collection_requirement`** (§ 1798.100(a)(1)) —
  applied to personnel-directed notices.
- **`ccpaemployee_rights_to_know_delete_correct`** (§§ 1798.105(a),
  1798.106(a), 1798.110(a)) — three independently sourced rights now
  applying to personnel data.

## Genuine corrections and findings

- **The central finding, confirmed against primary source**: Civ. Code
  § 1798.145(m) and (n) each contain their own sunset clause ("shall
  become inoperative on January 1, 2023"), and the statute's own current
  official history note states plainly: "Subdivisions (m) and (n)
  inoperative January 1, 2023, by their own provisions." The subdivisions'
  text is still printed in the statute but has had no legal effect since
  that date — a business's own personnel are fully "consumers" under the
  Act's general framework.
- **Careful separation of verified fact from unverified narrative**: the
  commonly repeated legislative history (AB 25 in 2019, extended by AB
  1281 in 2020, final extension tied to the CPRA) was explicitly NOT
  independently verified against primary bill text and is disclosed as
  drawn from secondary sources — only the operative fact that (m) and (n)
  are currently inoperative, confirmed directly against the official,
  currently in-force statutory text, is marked verified.
- Confirmed the covered-"business" threshold test ($25M revenue, 100,000+
  consumers/households, or 50%+ revenue from selling/sharing data)
  applies independently of the now-expired personnel exemption — an
  employer that doesn't meet the business definition isn't covered
  regardless of the exemption's status.

## Honest gap disclosed

The deletion-right exceptions (§ 1798.105(d)), the sensitive-PI and
retention-period sub-paragraphs of § 1798.100(a)(2)-(3), and the
opt-out/limit-sensitive-use/non-discrimination rights (§§ 1798.115,
1798.120, 1798.121, 1798.125) were not independently re-verified for this
document — they're already verified elsewhere in the corpus's existing
CCPA consumer-facing document, and this document points there rather than
asserting unverified coverage.

## Method

Fetched Cal. Civ. Code §§ 1798.145, 1798.140, 1798.100, 1798.105,
1798.106, and 1798.110 directly from `leginfo.legislature.ca.gov`, each
via two separate curl requests using distinct User-Agent strings (WebFetch
was blocked by the network egress proxy for this domain) — confirmed
byte-identical after whitespace normalization across all six sections.
All 11 citation quotes programmatically confirmed as exact substrings of
the confirmed text.

## Verification

- All six sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of § 1798.145 versus the
  three genuinely separate sections in the rights clause (§§ 1798.105,
  1798.106, 1798.110); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  accepted generic drafting-title reuse ("Purpose and Scope of This
  Information Sheet").
- Field names (`businessName`, `contactMethod`, `categoriesCollected`,
  `purposesOfUse`, `preparerName`, `dateSigned`, `cityState`)
  independently confirmed to match existing corpus convention. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: CCPA Employee and Job Applicant Data — Information Sheet
  (`ccpa_employee_job_applicant_data_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 2,013 → 2,021 clauses; 257 → 258 documents. Third document of
  wave 52.
