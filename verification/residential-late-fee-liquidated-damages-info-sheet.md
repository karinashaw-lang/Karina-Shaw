# Real Estate, new document: Late Fees on Residential Rent as Liquidated Damages (Civ. Code §§ 1671(d), 1951.5) — Information Sheet

Wave 162 (Real Estate). Continues the even round-robin of waves 146,
148, 150, 152, 154, 156, 158, and 160.

## Why this document

Before this document, the corpus's 84 Real Estate documents had no
clause on California's liquidated damages statute as applied to a
late fee on residential rent. A grep of both data files for `1671`,
`1951.5`, `Orozco`, `Del Monte`, `Garrett v. Coast`, `Hitz`, and
`late fee` returned **zero** hits for `1671`, `Orozco`, `Garrett`,
and `Hitz`; the only related material was:

- `lease_late_fees`, a one-line *drafting* clause in the Residential
  Lease Agreement ("If rent is not paid within ___ days of the due
  date, Tenant will owe a late fee of $___"), with no authority
  behind it; and
- `purchase_liquidated_damages`, an authority clause in the
  Residential Purchase Agreement quoting Civ. Code §§ 1675 and 1677
  — the *separate* Title 4.5, Chapter 2 scheme for a buyer's deposit
  on a residential purchase contract, which is a different statute on
  a different transaction.

`1719` and `Booska`-style boundary material returned nothing relevant.
The existing Notice to Pay Rent or Quit document covers the contents
of a three-day notice generally; this sheet quotes only the
late-fee-specific intersection (Code Civ. Proc. § 1161(2)'s "stating
the amount that is due" and § 1161(6)'s bar on notice-service fees)
and cross-references rather than repeating that document's material.
Civ. Code § 5650 already appears in the HOA assessment lien sheet; it
is quoted here once, expressly as a *contrast*, and the clause's `gap`
says so.

## What this document covers

11 clauses: 2 drafting (purpose declaration, acknowledgment) and 9
authority clauses.

- **`latefee_1671_dwelling_lease_rule`** (Civ. Code § 1951.5;
  § 1671(b), (c), (d)) — § 1951.5 applies the liquidated damages
  statute to leases of real property; § 1671(c)(2) routes a lease of
  real property "for use as a dwelling" to subdivision (d) rather than
  (b); subdivision (d) makes such a provision void except on the
  impracticability condition. The clause states plainly that the
  statutory default for a dwelling lease is the inverse of the general
  contract default.
- **`latefee_orozco_burden_of_proof`** (*Orozco v. Casimiro* (2004)
  121 Cal.App.4th Supp. 7, four quotes; *Del Monte Properties and
  Investments, Inc. v. Dolan* (2018) 26 Cal.App.5th Supp. 20, one
  quote) — the landlord must plead and prove impracticability; the
  presumption follows only after that showing; on the Orozco record
  the fee was "void and unenforceable"; Del Monte states the burden
  allocation directly.
- **`latefee_two_element_test`** (*Orozco*, quoting *Hitz v. First
  Interstate Bank* (1995) 38 Cal.App.4th 274; *Del Monte*) — the two
  elements (impracticability + reasonable endeavor to estimate fair
  average compensation), the effect of failing either, and Del Monte's
  three markers against the second element (percentage-of-contract-
  price pricing, no prior analysis of actual losses, post-hoc
  rationalization).
- **`latefee_contract_recital_not_conclusive`** (*Del Monte*, two
  quotes) — courts look beyond the contract language; agreement to an
  invalid clause does not insulate it; trial testimony that was
  "little more than a reference to the language of the lease" did not
  carry the burden.
- **`latefee_garrett_penalty_principle`** (*Garrett v. Coast &
  Southern Federal Sav. & Loan Assn.* (1973) 9 Cal.3d 731, three
  quotes) — motivation, purpose and effect; a charge measured against
  the unpaid balance held punitive in character; and the point that
  the rule is evidentiary, not categorical.
- **`latefee_measure_of_actual_loss`** (*Orozco*; *Del Monte*;
  *Garrett*) — what the landlord's actual loss consists of when the
  liquidated damages clause is void.
- **`latefee_no_statutory_amount_for_rent`** (Civ. Code § 1671(a);
  Civ. Code § 5650(b)(2)) — § 1671 states a standard, not a number;
  § 1671(a)'s deference to an expressly applicable statute; the
  contrast with the express 10%-or-$10 late-charge ceiling the
  Legislature did enact for common interest development assessments.
- **`latefee_three_day_notice_and_notice_fees`** (Code Civ. Proc.
  § 1161(2), (6); *Del Monte*) — the notice must state "the amount
  that is due"; Del Monte's holding that the notice before it was
  defective because it "may include an invalid late fee"; and the
  separate bar on charging a tenant a fee for serving a notice.
- **`latefee_returned_check_service_charge`** (Civ. Code § 1719(a)(1),
  (a)(2), (a)(3), (a)(6)) — the $25 / $35 insufficient-funds service
  charge, the certified-mail demand and treble-damages track, the
  good-faith-dispute exception with its clear-and-convincing burden on
  the payee, and the definition of passing a check on insufficient
  funds.

## Genuine corrections and findings

- **Orozco's quotation of Civ. Code § 1951.5 is OCR-damaged.** The
  CourtListener text of cluster 7428089 renders it `“[sjection 1671,
  relating to liquidated damages, applies to a lease of real
  property.”` (a scanned "s]" as "sj"). Rather than quote the damaged
  passage or silently repair it, the sheet quotes § 1951.5 directly
  from leginfo, where the same sentence appears clean. No quote in
  this document reproduces that defect.
- **Garrett's opinion text contains the scanning defect "hable" for
  "liable"** in the paragraph describing the lender's measure of
  damages. The sentence actually quoted
  (`latefee_measure_of_actual_loss`, third citation) is the *following*
  sentence, which is free of the defect; the preceding sentence
  containing "hable" is not quoted. Disclosed in the `gap` of both
  `latefee_garrett_penalty_principle` and
  `latefee_measure_of_actual_loss`.
- **The nested-quotation phrase "administrative costs reasonably
  related to collecting and accounting for" is typographically
  garbled in both Orozco copies** (copy A renders the nested marks as
  `“ 1 “administrative costs … ” ’ ”`, copy B as
  ``"`"administrative costs … "'"``). This document therefore does
  **not** present that phrase as a quotation from Orozco; it
  paraphrases it in the body and quotes only the clean surrounding
  sentence, and quotes the same substantive measure verbatim from
  *Garrett* and *Del Monte* instead. Disclosed in the
  `latefee_measure_of_actual_loss` `gap`.
- **Garrett predates the current statute.** Garrett (1973) construed
  the pre-1977 Civ. Code §§ 1670–1671, repealed and replaced by
  Stats. 1977, Ch. 198. The `gap` says so expressly and states that
  the clause relies on Garrett because the later residential-lease
  opinions rely on it, not because the 1977 statute carried Garrett
  forward by its own terms. The 1977 legislation and its legislative
  history were not fetched.
- **Precedential weight of the two on-point cases is disclosed, not
  glossed.** Orozco and Del Monte are appellate-division opinions
  (Los Angeles and Humboldt superior courts) published in the Official
  Reports. The `latefee_orozco_burden_of_proof` `gap` states that such
  an opinion binds trial courts within its own district but not the
  Courts of Appeal or other appellate divisions, and that **no Court
  of Appeal or Supreme Court decision applying § 1671(d) specifically
  to a residential rent late fee was located** in this research.
  Cal. Rules of Court, rule 8.1115 was not fetched.
- **Del Monte's holding on the three-day notice is permissive in the
  original** ("the notice … is defective because it *may* include an
  invalid late fee and it *may* not support a judgment"). The clause
  reproduces that phrasing and the `gap` expressly declines to restate
  it as a categorical rule that any notice mentioning a late fee is
  void.
- **The "no statutory ceiling" statement is a negative finding** and
  is labelled as one: the `gap` says a local rent-stabilization
  ordinance or program regulation not fetched here could impose a
  limit that § 1671(a) would make controlling, and no ordinance was
  fetched or cited.

## Honest gaps disclosed

- *Hitz v. First Interstate Bank* (1995) 38 Cal.App.4th 274,
  *Beasley v. Wells Fargo Bank* (1991) 235 Cal.App.3d 1383,
  *In re Cellphone Termination Fee Cases* (2011) 193 Cal.App.4th 298,
  *Util. Consumers' Action Network v. AT&T Broadband* (2006)
  135 Cal.App.4th 1023, and *Wasatch Property Management v. Degrate*
  (2005) 35 Cal.4th 1111 are **named but not fetched**; each is
  presented only as the authority the fetched opinion itself cited, in
  that opinion's own words, and every clause leaning on one says so.
- No dollar amount or percentage is stated anywhere in this document
  as a safe or unsafe late fee, because no fetched source states one.
- Whether a lease "NSF" charge is analyzed under § 1719, under
  § 1671(d), or under both is expressly left open — the Del Monte
  lease set its NSF fees at the § 1719 amounts, but that opinion
  decided only the late-fee question.
- Whether a late fee can ever be "rent" properly demanded in a
  § 1161(2) notice was not resolved by any fetched source.
- Civ. Code § 1671(c)(1) (retail purchases/rentals of personal
  property or services) and § 1719(a)(4)–(5), (b)–(k) are referenced
  or bounded but not quoted; the clauses say so.
- Commercial leases (governed by § 1671(b)) are out of scope and the
  clause says so; the corpus's Commercial Lease Agreement covers that
  document type separately.

## Method

**Statutes.** Civ. Code §§ 1671, 1951.5, 1719, 5650 and Code Civ.
Proc. § 1161 were each fetched **twice** from
`leginfo.legislature.ca.gov` via curl through the environment proxy,
with two distinct User-Agent strings (a Chrome/Windows browser UA and
a `groundtruth-corpus-verifier/1.0` UA). Each pair extracted to
byte-identical text (`diff -q`: identical for all five sections). The
first § 1671 request under the second UA was reset by the proxy
(`curl (35) Recv failure`) and was retried; the retry returned the
same 164,417-byte body as the first fetch.

**Case law — no CourtListener MCP calls were made.** All case work
went through the public, unauthenticated v4 search API and the public
opinion HTML/PDF, via curl through the proxy:

- *Orozco v. Casimiro* — the public search API returned **two
  independent CourtListener clusters** for the same opinion:
  7428089 (Appellate Division, `121 Cal. App. Supp. 4th 7`) and
  2259549 (`17 Cal.Rptr.3d 175`). These are separate database entries
  from different source scans with visibly different OCR (e.g. copy A
  has "defendant'" and "[sjection", copy B has "Orozeo" and straight
  quotes/backticks), so they serve as two genuinely independent
  copies. Both fetched with `Referer: https://www.courtlistener.com/`
  plus distinct browser header sets (Chrome/Windows, Safari/macOS);
  both returned 200. Quotes are taken from copy A (curly quotes) and
  confirmed against copy B after normalizing the backtick/acute
  variants copy B uses for nested quotation marks.
- *Del Monte Properties and Investments, Inc. v. Dolan* — cluster
  4527803 opinion HTML (200) is the quote source. The second copy is
  the **slip-opinion PDF** at
  `storage.courtlistener.com/pdf/2018/08/17/del_monte_properties_and_investments_inc._v._dolan.pdf`
  (200, 163,146 bytes), text-extracted with `pypdf` — a different
  artifact by a different path, not a re-read of the same HTML. The
  third CourtListener entry for this case (cluster 6239846, the
  `236 Cal.Rptr.3d 923` reporter version) was also fetched and
  inspected but carries only a condensed run of the opinion's
  paragraphs, so it was **not** used as the second copy; it does
  corroborate the passages it contains.
- *Garrett v. Coast & Southern Federal Sav. & Loan Assn.* — no PDF
  exists for a 1973 opinion and the `/api/rest/v4/opinions/` endpoint
  returns 401 without credentials, so the second verification path is
  the one the task note prescribes: **phrase-level public search**.
  Each of the three Garrett quotes was queried as
  `cluster_id:1183486 AND "<exact phrase>"` and each returned
  `count: 1`. The opinion HTML itself was fetched twice with two
  distinct header sets (Chrome/Windows and Safari/macOS), both 200
  and identical. This is disclosed as the one source where a second
  *independent artifact* was not obtainable.
- Search-API 429 throttling was handled with in-turn
  `sleep 60`–`sleep 70` retry loops; no query was abandoned.

Justia, FindLaw, Google Scholar and case.law are egress-blocked and
were not used. The Official Reports pagination for Orozco and Del
Monte was not independently consulted.

## Verification

- **All 28 citation quotes programmatically confirmed as exact
  substrings of two independent fetched copies each**, after benign
  normalization only (nbsp, whitespace/line-wrap collapse, curly vs.
  straight quotes and apostrophes, backtick/acute-as-apostrophe,
  en/em dash). Verification was re-run a final time reading the
  quotes back out of the **merged** `data/clauses.json` (not the
  staging file): 28 quotes × 2 copies, 0 failures.
- Multi-part quotes use the corpus's ` ... ` elision convention; the
  checker requires each fragment to appear **in order** in the source,
  not merely to appear.
- Checked for `{{` leakage in every clause `title` and in every
  citation's `case`/`cite`/`url`/`quote` field — clean. Placeholders
  appear only in clause `body` and `gap` text, and all three
  (`propertyAddress`, `landlordName`, `tenantName`) are declared
  fields of the document.
- Drafting clauses carry exactly `{id,title,kind,body}`; authority
  clauses exactly `{id,title,kind,status,checkedDate,body,gap,
  citations}` in that order; citations exactly `{case,cite,url,quote}`;
  every authority clause has a non-empty `gap`.
- Duplicate-id check against the full corpus before merge (none for
  the 11 clause ids, none for the document id).
- Field ids reuse existing corpus convention (`propertyAddress`,
  `landlordName`, `tenantName` — the same three used by the Notice to
  Pay Rent or Quit document); no new field names introduced.
- Corpus-wide validation run across the full updated corpus: both
  files parse; 5,533 clause ids unique; 664 document ids unique; every
  `clauseOrder` id resolves to an existing clause; every
  `{{placeholder}}` in every document resolves to a field that
  document declares; every authority clause corpus-wide has a
  non-empty gap; 0 orphan clauses. **0 errors.**
- `git diff --stat` shows insertions only (279 lines in
  `clauses.json`, 41 in `documents.json`) — no existing clause,
  document, or formatting was modified.
- Inform-never-advise check: every clause states what a statute says,
  what a court held, or what no fetched source says. No clause tells
  the landlord or the tenant what to do, what to pay, what to
  demand, or how to respond; the declaration and acknowledgment
  clauses say expressly that the sheet does not evaluate any
  particular fee, term, or notice.

## Net changes

- New document: Late Fees on Residential Rent as Liquidated Damages
  (Civ. Code §§ 1671(d), 1951.5) — Information Sheet
  (`residential_late_fee_liquidated_damages_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Real Estate category. Fields:
  `propertyAddress`, `landlordName`, `tenantName`.
- Corpus: 5,522 → 5,533 clauses; 663 → 664 documents; Real Estate
  84 → 85.
