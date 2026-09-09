# Hiring, new document: Age and Anti-Solicitation Employment Restrictions for Alcoholic Beverage Licensees — Information Sheet

## Why this document

Wave 149 (Hiring slot; wave 149 returns to the Hiring/During
employment/Estate Planning/Family Law group after wave 148 covered the
other four categories). A scoping pass of the existing ~77 Hiring
documents in `data/documents.json` confirmed no prior coverage of the
Alcoholic Beverage Control Act's employment-specific restrictions. In
particular, ruled out as already covered before choosing this topic:
salary-history/pay-scale disclosure (Lab. Code § 432.3, fully covered by
`pay_scale_disclosure_info_sheet`), independent-contractor
classification and EDD reporting (covered by `california_abc_test_info_sheet`
and `new_hire_reporting_info_sheet`, the latter explicitly covering the
"separate reporting duty for certain paid independent contractors"),
apprenticeship program registration (covered by
`apprenticeship_agreement_info_sheet`), minor work permits generally
(covered by `minor_work_permits_info_sheet`, which addresses the
Education Code's school-issued work-permit system, §§ 49101-49120, and
Labor Code §§ 1286, 1299, 1391 — a different statutory scheme from this
document's Business and Professions Code sections), off-duty cannabis
hiring protections (covered inside `drug_testing_info_sheet`),
blacklisting a former employee, no-rehire settlement clauses, grocery
worker retention, the Displaced Janitor Opportunity Act, and the
COVID-19 right of recall (all four covered under the Ending employment
category, confirmed not duplicated here even though this document sits
in a different category), and social-media password protection (Lab.
Code § 980, covered under Confidentiality & IP). No existing document
in the corpus mentions Business and Professions Code §§ 25657, 25663,
23038, or 23038.1.

## Topic chosen

California's Alcoholic Beverage Control Act (Bus. & Prof. Code, Div. 9)
regulates, as a matter of who a licensee may hire and how, (1) the
minimum age at which a person may be employed to prepare, serve, or
sell alcoholic beverages on licensed premises, with a narrow exception
for bona fide public eating places, and (2) two prohibited employment
arrangements — paying an employee a commission to procure or encourage
alcohol purchases, and employing or knowingly permitting loitering to
solicit alcohol purchases — each a misdemeanor. These sit in Article 3
("Women and Minors") of Chapter 16 of the Act and are genuinely
hiring-stage facts distinct from the Education Code's general minor
work-permit system.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment) and 6 authority clauses,
citing Business and Professions Code §§ 25663(a), 25663(b), 25663(c),
23038, 23038.1, 25657(a), and 25657(b) plus its closing penalty
sentence:

- **`alclic_onsale_under21_prohibition`** — § 25663(a): on-sale
  licensees may not employ anyone under 21 to prepare or serve alcohol;
  misdemeanor for employing/using anyone under 21 in the alcohol-service
  area during business hours.
- **`alclic_offsale_under18_restriction`** — § 25663(b): off-sale
  licensees employing/using anyone under 18 to sell alcohol risk license
  suspension or revocation, unless continuously supervised by someone
  21 or older.
- **`alclic_public_eating_place_exception`** — § 25663(c): the
  exception permitting 18-to-21-year-olds employed at a bona fide public
  eating place to serve alcohol when incidental to primary meal-service
  duties, and the subdivision's own definition of "serve"/"service."
- **`alclic_public_eating_place_definition`** — §§ 23038 and 23038.1:
  the statutory definitions of "bona fide public eating place" that the
  exception depends on (general definition, and the alternate
  convention-center/exhibit-hall/auditorium definition).
- **`alclic_commission_solicitation_prohibition`** — § 25657(a):
  unlawful to employ someone on licensed on-sale premises, or pay them
  a commission, to procure or encourage alcohol purchases.
- **`alclic_loitering_solicitation_prohibition`** — § 25657(b) and its
  closing sentence: unlawful to employ or knowingly permit loitering to
  solicit alcohol purchases; misdemeanor penalty for violating § 25657.

## Method

Fetched Business and Professions Code §§ 25663 and 25657, and their
cross-referenced definitional sections 23038 and 23038.1, directly from
`leginfo.legislature.ca.gov` via `curl` through the environment's proxy,
independently **twice per section** with two distinct User-Agent
strings: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36` for the first fetch
of each section, and `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15`
for the second, independent fetch of each section. For each section,
the `codeLawSectionNoHead` HTML div was extracted, tags stripped, HTML
entities unescaped, and runs of whitespace collapsed to a single space
by a Python script; the two independently fetched, normalized texts
were then diffed for each of the four sections and found **byte-for-byte
identical** in every case (the raw HTML fetches differed only in the
page's session-specific `javax.faces.ViewState` token and a debug-script
timestamp — non-substantive artifacts of the page's server-side
rendering, not the statutory text).

No case law was needed for this document (it is grounded entirely in
verified statutory text), so CourtListener was not queried.

## Quote-by-quote check results

All 8 citation quotes across the document's 6 authority clauses were
checked programmatically as whitespace-normalized substrings of the
independently double-fetched source text for their respective section
(25663, 25657, 23038, or 23038.1), with curly quotation marks preserved
to match the source (the statute itself uses curly quotes around
"serve"/"service" in § 25663(c) and around "bona fide public eating
place" in §§ 23038/23038.1, which the quotes reproduce verbatim rather
than normalize to straight quotes). All 8 quotes passed cleanly with no
character-level defects found — no normalization beyond ordinary
whitespace collapsing was needed for any quote, and no `gap` disclosure
of a source-text correction was required.

| Clause | Citation | Result |
|---|---|---|
| `alclic_onsale_under21_prohibition` | § 25663(a) | verified substring |
| `alclic_offsale_under18_restriction` | § 25663(b) | verified substring |
| `alclic_public_eating_place_exception` | § 25663(c) | verified substring |
| `alclic_public_eating_place_definition` | § 23038 | verified substring |
| `alclic_public_eating_place_definition` | § 23038.1 (opening clause only) | verified substring |
| `alclic_commission_solicitation_prohibition` | § 25657(a) | verified substring |
| `alclic_loitering_solicitation_prohibition` | § 25657(b) | verified substring |
| `alclic_loitering_solicitation_prohibition` | § 25657 closing penalty sentence | verified substring |

## Honest gap(s) disclosed

This document does not quote § 23038's or § 23038.1's full text beyond
the sentences drawn on above (e.g., § 23038's further sentences
defining "meals" and "guests," or § 23038.1's fuller convention-center
conditions); it does not determine, for any specific employee or work
area, whether alcohol service is "incidental" to meal-service duties or
whether an area is "primarily designed and used" for food service; it
does not address the Department of Alcoholic Beverage Control's license
suspension/revocation procedure for a § 25663(b) violation; and it does
not address enforcement history or how §§ 25657/25663 have been applied
by courts or the Department to particular business models. This
document does not determine whether any specific position, employee, or
employment arrangement complies with these sections.

## Verification

- Bus. & Prof. Code §§ 25663, 25657, 23038, and 23038.1 each fetched
  twice independently via `curl` with two distinct User-Agent strings,
  confirmed byte-identical (aside from non-substantive session/debug
  artifacts) before any quote was drafted; all 8 citation quotes then
  confirmed as clean, whitespace-normalized substrings of those sources
  via an automated Python check.
- Checked for `{{` / `}}` leakage in every new clause's `title`/`gap`
  and every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- Checked for duplicate clause IDs against the full corpus — none; all
  8 new clause IDs (`alclic_*`) are unique. The drafting clause title
  "Acknowledgment" duplicates existing corpus titles, consistent with
  this project's established pattern of reused boilerplate titles;
  clause IDs remain unique.
- Checked placeholder-to-field resolution: all `{{companyName}}`,
  `{{jobTitle}}`, `{{applicantName}}`, and `{{dateSigned}}` placeholders
  used in the new drafting and authority clause bodies resolve to
  fields declared on the new document. No new field IDs were created;
  all four are reused from the existing corpus's established field
  vocabulary (the same four used together in, e.g., the Peace Officer
  Hiring Qualifications and Disqualifications information sheet).
- Corpus-wide validation (both JSON files parse; no duplicate clause
  IDs; no duplicate document IDs; every `clauseOrder` reference across
  all 613 documents resolves to an existing clause ID; new document has
  exactly the required top-level keys; new authority clauses have
  exactly `{id,title,kind,status,checkedDate,body,gap,citations}`; new
  drafting clauses have exactly `{id,title,kind,body}`; every citation
  has exactly `{case,cite,url,quote}`) run across the full updated
  corpus via a Python script — clean.

## Net changes

- New document: Age and Anti-Solicitation Employment Restrictions for
  Alcoholic Beverage Licensees — Information Sheet
  (`alcohol_licensee_employment_restrictions_info_sheet`), 8 clauses
  (6 authority + 2 drafting), in the Hiring category. No new fields
  (all four reused from the existing corpus).
- Corpus: 4,953 → 4,961 clauses; 612 → 613 documents. Wave 149, Hiring
  category slot.
