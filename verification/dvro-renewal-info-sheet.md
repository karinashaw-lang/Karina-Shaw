# Family Law, new document: Renewal of a Domestic Violence Restraining Order — Information Sheet

## Why this document

Wave 151 (Family Law slot), continuing the even round-robin also covering
Hiring, During Employment, and Estate Planning. This category has been
flagged in prior waves as unusually saturated. `data/documents.json` was
read in full first: 78 existing Family Law documents were enumerated,
including the existing DVRO petition-information document
(`dvro_petition_information`), Mutual Restraining Orders in Domestic
Violence Cases, Civil Harassment Restraining Order, ATROS, Full Faith and
Credit for Out-of-State Protective Orders, Elder Abuse Restraining Order,
and the DVRO firearm-relinquishment and putative-spouse clauses already in
the corpus.

Several candidate topics from the task brief were ruled out as already
covered by direct inspection of `data/clauses.json`:

- Fam. Code § 2030 need-based attorney's fees — already covered by
  `need_based_attorney_fees_family_law_info_sheet`.
- Child abduction prevention orders — already covered by
  `child_abduction_prevention_orders_info_sheet`.
- Civil harassment restraining orders — already covered by
  `civil_harassment_restraining_order`.
- Putative spouse doctrine (Fam. Code § 2251) — already covered by the
  `nullity_putative_spouse_doctrine` clause.
- Community-property transmutation, interspousal fiduciary duty — already
  covered under the postnuptial-agreement clauses.
- Mandatory child-support earnings assignment (Fam. Code § 5230) — already
  a single clause (`childsupport_earnings_assignment`) inside the Child
  Support Agreement drafting document.

The existing DVRO petition-information document's `clauseOrder` was
inspected directly and confirmed to cover only qualifying relationships,
the abuse definition, standard of proof, ex parte issuance/initial
duration, and firearm relinquishment — it does not address **renewal** of
an order already issued. A targeted grep of `data/clauses.json` for
`renew`, `6345`, and `Ritchie` (and `Konrad`) returned zero hits in any
Family Law context, confirming the topic was genuinely open: California
Family Code § 6345 (renewal of a domestic violence protective order after
notice and hearing) and the controlling case, *Ritchie v. Konrad* (2004)
115 Cal.App.4th 1275, which announced the "reasonable apprehension of
future abuse" standard used statewide for renewal requests.

## What this document covers

7 clauses: 3 drafting (declaration, scope-distinction, signature) and 4
authority clauses, citing Fam. Code § 6345(a), (c), (d), and *Ritchie v.
Konrad* (2004) 115 Cal. App. 4th 1275 at page 1290:

- **`dvrorenew_duration_and_renewal_without_further_abuse`** — the
  five-year cap on order duration, the rule that renewal (for five or
  more years, or permanently) requires no further showing of abuse since
  the original order, and the three-month pre-expiration filing window.
- **`dvrorenew_default_duration_notice`** — the default three-year
  duration when no expiration date is stated on the order, and the notice
  protections before a non-protected party can terminate or modify an
  order early.
- **`dvrorenew_reasonable_apprehension_standard`** — the *Ritchie v.
  Konrad* holding establishing the preponderance-of-the-evidence
  "reasonable apprehension of future abuse" test, and the court's
  clarification that this does not require finding future abuse is more
  likely than not to occur.
- **`dvrorenew_evidentiary_factors_and_estoppel`** — the same opinion's
  holding that a trial court ordinarily should consider the evidence and
  findings underlying the initial order, and should not permit the
  restrained party to relitigate the truth of those findings (collateral
  estoppel).

## Independent double-fetch

**Statute (Fam. Code § 6345):** fetched twice directly from
`leginfo.legislature.ca.gov` via `curl` through the environment's proxy,
using two distinct User-Agent strings:
1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) Groundtruth-Research/1.0`
2. `curl/8.4.0 Groundtruth-Research-B`

Both fetches returned HTTP 200 with an identical byte count (165,901
bytes). The raw HTML differed only in a dynamically generated JSF
debug-session timestamp embedded in inline JavaScript (irrelevant to the
statutory text). After extracting and whitespace-normalizing the
`codeLawSectionNoHead` block from each fetch independently, the two
extracted statute texts were confirmed **character-for-character
identical** (3,382 normalized characters each) via direct Python string
comparison.

**Case law (*Ritchie v. Konrad*):** located via `mcp__CourtListener__search`
(type "o", case_name "Ritchie v. Konrad", court "calctapp") — a single
result, `cluster_id` 2281534, `opinion_id` 2281534 (cluster and opinion id
coincide in this instance). Fetched twice, independently, via
`mcp__CourtListener__get_endpoint_item` (endpoint `opinions`, item_id
2281534, fields `id`/`cluster_id`/`html_with_citations`, and a second call
requesting `id`/`cluster_id`/`html_with_citations` again). The two
`html_with_citations` payloads were diffed directly and are **byte-for-byte
identical**.

## Quote-by-quote verification

All 9 quotations across the 4 authority clauses were checked by loading
the extracted, whitespace-normalized source text (statute or case
opinion, matched by which `citations[].url` the clause used) and confirming
each `citations[].quote` string is an exact contiguous substring after
normalizing only whitespace runs (no other alteration). Result: **9/9
quotes verified present, verbatim, in the independently-confirmed source
text.** No nbsp entities were present in this leginfo fetch (checked via
`&nbsp;` count = 0), so no formatting-artifact disclosure was needed for
the statute. No genuine defects were found in any quote — none required
correction or a disclosure sentence.

Case-law pinpoint page: all four Ritchie quotations were checked against
the opinion's embedded `*NNNN` page-break markers in the normalized text;
all four quoted passages fall between the `*1290` and `*1291` markers, so
all four are correctly pinpoint-cited to page 1290 (an initial draft had
mis-cited one quotation to 1291 before this check; it was corrected prior
to merge).

## Schema and corpus-wide validation

- `data/clauses.json` and `data/documents.json` schemas were read first.
  Authority clauses use exactly `{id,title,kind,status,checkedDate,body,gap,citations[{case,cite,url,quote}]}`;
  drafting clauses use exactly `{id,title,kind,body}`. Verified
  programmatically against the actual new clauses — no extra or missing
  keys.
- Checked for `{{...}}` leakage in every new clause's `title`/`gap` and
  every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked every `{{placeholder}}` used in a drafting clause body resolves
  to a field id declared on the new document — clean (all 7 placeholders:
  `petitionerName`, `respondentName`, `courtCaseNumber`, `countyOfFiling`,
  `originalOrderExpirationDate`, `signatureDate`, `signatureCity`; the
  first six are reused field ids already used elsewhere in the corpus,
  and `originalOrderExpirationDate` is the one new field this document
  introduces).
- Checked for duplicate clause ids against the full corpus (none); the
  `dvrorenew_` prefix has zero collisions.
- Checked for a duplicate document id (none).
- Confirmed every clause id in the new document's `clauseOrder` exists in
  `data/clauses.json` (7/7).
- Ran full corpus-wide validation after merge: both JSON files parse,
  zero duplicate clause ids anywhere in the corpus, zero duplicate
  document ids anywhere in the corpus, zero missing `clauseOrder`
  references across all 621 documents.

## Honest gaps disclosed (in clause `gap` fields)

- The duration/renewal clause discloses its three quotations are all from
  the same subdivision, § 6345(a), and are not independent sources of one
  another.
- The default-duration/notice clause discloses its two quotations are
  from different subdivisions of the same statute (§ 6345(c) and (d)),
  not independent of each other or of the companion clause's § 6345(a)
  citations; it also discloses it does not describe the Code of Civil
  Procedure § 1005 service mechanics or the Safe at Home program that
  § 6345(d) cross-references, nor § 6345(e)'s Judicial Council
  form-creation directive.
- Both case-law clauses disclose they rest on a single published opinion,
  not a survey of authority, and that the two case-law clauses are not
  independent of one another (same opinion). The evidentiary-factors
  clause discloses it does not cover the opinion's further multi-factor
  discussion beyond the two quoted holdings.
- This document does not address the manner in which a party contests a
  renewal request procedurally, does not address renewal of an ex parte
  (temporary) order (which is a separate, shorter-duration order type
  under a different statute), and does not survey unpublished or later
  Court of Appeal decisions applying the *Ritchie* standard.

## Net changes

- New document: Renewal of a Domestic Violence Restraining Order —
  Information Sheet (`dvro_renewal_info_sheet`), 7 clauses (4 authority +
  3 drafting), in the Family Law category. One new field
  (`originalOrderExpirationDate`); all other fields reused from the
  existing corpus.
- Corpus: 5,022 → 5,029 clauses; 620 → 621 documents. Family Law item of
  wave 151.
