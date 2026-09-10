# Real Estate, new document: Tenant Protections for Survivors of Domestic Violence, Sexual Assault, Stalking, Human Trafficking, and Abuse — Information Sheet

Wave 156 (Real Estate). Continues the even round-robin of waves 146,
148, 150, 152, and 154.

## Why this document

Before this document, the corpus's 81 Real Estate documents had no
clause on the cluster of California statutes protecting residential
tenants who are (or whose household or immediate family members are)
victims of domestic violence and related acts. A grep of both data
files for `1946.7`, `1946.8`, `1941.5`, `1941.6`, `1161.3`, `1174.27`,
`Elmassian`, and `roommate` returned no hits (an initial count of 8 for
`1161.3` was a regex false positive on `1161` followed by any character
and `3`; a literal search found none). The 131 `domestic violence`
hits in `clauses.json` are all in employment, family-law, and
estate-planning documents; the only two Real Estate hits are in the
Landlord's Right of Entry sheet, which mentions the § 1954 entry
exception for a tenant who has requested a lock change, and does not
quote or describe the lock-change statutes. Several of the task
prompt's suggested topics (ADU ministerial approval, abandoned
personal property, prescriptive easement, repair-and-deduct) were
already covered, so this topic was chosen instead.

## What this document covers

12 clauses: 2 drafting (purpose declaration, acknowledgment) and 10
authority clauses:

- **`dvtenant_covered_acts_and_persons`** (Civ. Code § 1946.7(a),
  (h)(1), (h)(3); Fam. Code § 6211) — the eight categories of
  qualifying act; definitions of household member and immediate family
  member; the Family Code definition of domestic violence.
- **`dvtenant_termination_notice_and_documentation`** (§ 1946.7(b)
  chapeau, (b)(1)-(2), (b)(3)(A), (b)(4), (c) chapeau, (d)) — the
  written notice, four documentation options, the extra statement for a
  non-household family member, the 180-day window.
- **`dvtenant_termination_rent_deposit_effect`** (§ 1946.7(e)-(g)) —
  14-day rent cap, release, proration, no deposit forfeiture, no deemed
  breach, other tenants remain bound.
- **`dvtenant_termination_confidentiality_nonretaliation_remedies`**
  (§ 1946.7(i)(1), (j), (k), (l)) — confidentiality, bar on refusing to
  rent, actual plus $100-$5,000 statutory damages with the
  catch-all-documentation carve-out, cumulative remedies.
- **`dvtenant_lock_change_nontenant_perpetrator`** (§ 1941.5(a), (b),
  (c)(1)-(3), (d)(4), (e), (f)(2), (f)(6)) — 24-hour lock change at the
  landlord's expense, tenant self-help and 21-day reimbursement,
  documentation of the tenant's choosing including a signed tenant
  statement.
- **`dvtenant_lock_change_cotenant_perpetrator`** (§ 1941.6(a)-(e),
  (f)(1)) — restrained co-tenant, exclusion order within 180 days, no
  § 789.3 liability, excluded person's continuing rent liability.
- **`dvtenant_eviction_prohibition`** (Code Civ. Proc. § 1161.3(a)(1),
  (a)(2)(B), (a)(2)(D), (a)(8), (b)(1)-(2), (c)) — the bar on
  terminating based on abuse or violence after documentation, the two
  exceptions, no liability to other tenants.
- **`dvtenant_ud_affirmative_defense_partial_eviction`** (§ 1161.3(d),
  (e)(1); § 1174.27(e), (f)(1), (h)) — the affirmative defense, the
  partial-eviction procedure, the no-collateral-effect rule,
  confidentiality.
- **`dvtenant_elmassian_based_upon_and_documentation`** (*Elmassian v.
  Flores* (App. Div. Super. Ct. L.A. County 2021) No. BV 033271, five
  quotes incl. the dissent) — "based upon" where mixed grounds are
  asserted; sufficiency of a one-page police report.
- **`dvtenant_right_to_summon_help`** (Civ. Code § 1946.8(a)(3), (b),
  (c) first sentence, (e), (f)(1)-(2), (h)) — void lease restrictions,
  no penalties, the 30-day presumption, no injunction against filing.

## Genuine corrections and findings

- *Elmassian* construed the **pre-2023** text of § 1161.3, which it
  quoted in full ("based upon an act or acts ... that constitute
  domestic violence," with documentation and not-a-tenant conditions in
  subd. (a)(1)-(2)). SB 1017 (Stats. 2022, Ch. 558) restructured the
  section effective January 1, 2023, and AB 1756 (Stats. 2023, Ch. 478)
  amended it again. The eviction clauses quote the current text; the
  *Elmassian* clause's `gap` describes the change and states that
  whether the decision's readings carry over has not been decided in
  any published opinion located.
- Civ. Code § 1941.5 was **repealed and re-enacted** by SB 1051 (Stats.
  2024, Ch. 75) effective January 1, 2025, and § 1941.6 was amended by
  the same act; the clauses say so and note the prior text was not
  compared.
- *Elmassian* is an opinion of a superior court appellate division,
  certified for publication. Its official reporter citation could not
  be confirmed from any fetched source (CourtListener lists no citation
  on any of the three indexed copies), so the `case` field identifies
  it by court, filing date, docket number, and modification dates
  rather than by an unverified reporter cite; the `gap` says so.
- The CourtListener cover sheet of the fetched PDF reads "Opinion filed
  8/23/21," while the opinion itself is stamped "Filed 8/11/21" and the
  September 10 modification order refers to "the August 11, 2021
  opinion"; the `case` field uses August 11.
- Two citation `case` labels in the draft named a second subdivision
  that was in fact quoted in the following separate citation
  (§ 1941.5 "(f)(2), (f)(6)" and § 1161.3 "(a)(2)(B), (a)(2)(D)"); both
  were corrected to name only the subdivision actually quoted before
  merging. No quote text required any change.

## Honest gaps disclosed

- The many cross-referenced definitional sections (Penal Code §§ 261,
  261.5, 286, 287, 289, 236.1, 646.9; Civ. Code §§ 1708.7, 1946, 1950.5,
  789.3; Code Civ. Proc. §§ 527.6, 1219; Fam. Code §§ 6203, 6209, 6240
  et seq., 6300 et seq., 6400 et seq.; Welf. & Inst. Code §§ 213.5,
  15610.07, 15657.03; Evid. Code §§ 1035.2, 1037.1, 1038.2) were not
  fetched; each clause that leans on one says so.
- The statutory "Tenant Statement and Qualified Third Party Statement"
  forms in §§ 1946.7, 1941.5, and 1161.3 are described, not reproduced.
- Whether the Judicial Council revised its unlawful detainer answer
  forms as § 1161.3(f) directed was not checked.
- Precedential weight of an appellate-division published opinion
  relative to Court of Appeal decisions is not characterized.
- No published decision applying § 1174.27 or the post-2023 § 1161.3
  was located.

## Method

Fetched Civ. Code §§ 1946.7, 1946.8, 1941.5, 1941.6, Code Civ. Proc.
§§ 1161.3, 1174.27, and Fam. Code § 6211 from
`leginfo.legislature.ca.gov` twice each with two distinct User-Agent
strings (a browser-style UA and a `Groundtruth-Verifier` UA) via curl
through the environment proxy, into a uniquely named scratchpad
subdirectory (`wave156_realestate_dv/`); each pair was confirmed
identical after tag-stripping and whitespace/nbsp normalization.

Case law: the CourtListener MCP account had exhausted its **daily**
quota (125/day; "expected available in 4520 seconds") when this task
ran — a different limit from the shared 5/min limit, so it could not be
waited out with short sleeps. The unauthenticated public search API
(`/api/rest/v4/search/`) was used via curl instead: searches for
`"1946.7"`, `"1941.5"`, and `"1946.8"` in California courts returned no
relevant opinions; `"1161.3"` returned *Elmassian v. Flores* under
three cluster ids (5094726, 5173681, 5291317), all pointing to the same
Judicial Council PDF (`JAD2106A.PDF`). The cluster and opinion
endpoints return 401 unauthenticated, the HTML opinion page returns the
known empty 202 bot challenge, and the Judicial Council's original URL
(and two guessed archive paths) return 404. The opinion was therefore
fetched twice from CourtListener's static storage
(`storage.courtlistener.com/pdf/2021/09/27/elmassian_v._flores.pdf`)
with two User-Agents — byte-identical (md5
`263e02b3d02f1edf1b239be4bfff02c5`, 329,204 bytes, 35 pages) — and text
was extracted with `pdfplumber` (no `pdftotext` on the box). No
independent second host for the opinion was located; disclosed here
and in the clause `gap` rather than worked around.

## Verification

- All 49 citation quotes (44 statute, 5 *Elmassian*) programmatically
  confirmed as exact substrings of the fetched text after benign
  normalization (whitespace, nbsp, PDF page-break markers), both on a
  dry run and again immediately before the merge.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Drafting clauses carry exactly `{id,title,kind,body}`; authority
  clauses exactly `{id,title,kind,status,checkedDate,body,gap,
  citations}`; citations exactly `{case,cite,url,quote}`.
- No duplicate clause ids or document id against the full corpus. The
  only title collisions are the two standard drafting titles ("Purpose
  of This Information Sheet" and "Acknowledgment") shared by every
  information sheet; all ten authority-clause titles are unique.
- Field names (`propertyAddress`, `landlordName`, `tenantName`) match
  existing corpus convention; no new field names introduced.
- Serialization verified to match the existing files exactly
  (`indent=2`, `ensure_ascii=False`, trailing newline); the diff is
  458 insertions and 0 deletions.
- Corpus-wide validation (both files parse, ids unique, every
  `clauseOrder` id exists, every `{{placeholder}}` resolves to a
  declared field) run across the full updated corpus — clean.
- Inform-never-advise check: every clause states what a statute
  provides or what the court held and did not decide; no clause tells
  a reader what to do.

## Net changes

- New document: Tenant Protections for Survivors of Domestic Violence,
  Sexual Assault, Stalking, Human Trafficking, and Abuse — Information
  Sheet (`domestic_violence_survivor_tenant_protections_info_sheet`),
  12 clauses (10 authority + 2 drafting), in the Real Estate category.
  Fields: `propertyAddress`, `landlordName`, `tenantName`.
- Corpus: 5,240 → 5,252 clauses; 639 → 640 documents; Real Estate
  81 → 82.
