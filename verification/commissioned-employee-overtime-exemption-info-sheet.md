# During employment, new document: Commissioned Employee ("Inside Sales") Overtime Exemption (Wage Orders 4 and 7, § 3(D); Peabody v. Time Warner Cable) — Information Sheet

## Wave

Wave 161 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, ..., 159
covered the same four categories. This task ran in an isolated git
worktree with no coordination with the other three parallel wave-161
tasks, and all scratch files were kept in a uniquely-named
scratchpad subdirectory (`wave161_during/`).

## Why this document

Read `data/documents.json` and enumerated all 83 existing "During
employment" documents before choosing a topic. Confirmed that several
of the task brief's own example topics were already taken:
`injury_illness_prevention_program_info_sheet` (8 CCR § 3203),
`kin_care_info_sheet` (Lab. Code § 233),
`crime_victim_domestic_violence_leave_info_sheet` (§ 230.2),
`computer_software_employee_overtime_exemption_info_sheet` (§ 515.5),
`workers_compensation_claim_notice_info_sheet` (§§ 3550/5401), and
`wage_advances_draws_against_commission_info_sheet` (Steinhebel; 18
corpus hits for "Steinhebel").

Grepped the full text of both data files for the candidate topic and
near-neighbours before settling on it:

- "Peabody", "Ramirez v. Yosemite", "Keyes Motors", "Areso",
  "Muldrow", "inside sales", "inside salesperson", "commissioned
  employee exemption", "more than half of that employee" — **zero**
  hits. The 14 hits for "commissioned" are all copyright
  ("commissioned work") clauses.
- "outside salesperson" — 3 hits, none about the § 3(D) commission
  exemption; "3(D)" — 114 hits, all other wage-order subsections or
  unrelated statutes.
- `commission_agreement` (Lab. Code § 2751) and
  `wage_advances_draws_against_commission_info_sheet` exist and are
  cross-referenced as companions; neither describes the overtime
  exemption, its two prongs, or Peabody's pay-period rule.

**The commissioned employee overtime exemption** — Wage Orders 4-2001
and 7-2001, § 3(D) — is a discrete, frequently-litigated rule with a
short regulatory text, a controlling California Supreme Court
decision (Peabody), a settled two-part definition of "commission"
(Keyes Motors, adopted in Ramirez, applied in Areso and Muldrow), and
published DLSE enforcement positions, none of which the corpus
addressed.

## What this document covers

10 clauses (8 authority + 2 drafting), id-prefixed `commsalesexempt_`:

- **`commsalesexempt_intro`** (drafting) — scope statement; states
  that the sheet describes the law and does not classify any employee
  or create, modify, or interpret any commission plan.
- **`commsalesexempt_overtime_default_and_wage_order_source`** —
  Lab. Code § 510(a) baseline; § 515(b) (IWC may retain pre-1997
  wage-order exemptions) as the statutory footing for a wage-order-only
  exemption; Keyes Motors' 1987 construction of the Order 7-80 version.
- **`commsalesexempt_exemption_text_and_covered_wage_orders`** — the
  § 3(D) text of Wage Orders 4-2001 and 7-2001; Peabody fn. 3 (Order 4
  covers salespersons and sales agents); DLSE Manual § 50.6; Keyes
  Motors fn. 2 (Order 9 has no such exemption). Gap discloses the
  hyphen line-wrap in the Manual's opening sentence and that the other
  fifteen current wage orders were not surveyed.
- **`commsalesexempt_two_prongs_and_employer_burden`** — the two
  prongs; narrow construction (Ramirez, Peabody); affirmative defense /
  employer's burden (Ramirez); Peabody fn. 4 (no opinion on the
  second prong). Gap discloses the removed "*795" star-page marker.
- **`commsalesexempt_minimum_earnings_prong_current_rate`** — DLSE
  FAQ: $16.90/hour effective January 1, 2026; the document's own
  1.5× arithmetic ($25.35), disclosed as such; § 1182.12(c)(1)
  annual CPI-W adjustment; Peabody fn. 6 weekly illustration. Gap
  takes no position on whether local/industry minimum wages feed the
  prong.
- **`commsalesexempt_pay_period_attribution_peabody`** — Peabody's
  facts, holding, reasoning (§§ 204(a), 200(a), 226), the
  "commissions owed only when earned" corollary, and its refusal to
  follow 29 U.S.C. § 207(i).
- **`commsalesexempt_what_counts_as_commission`** — § 204.1
  definition; Keyes Motors two-part test; Ramirez adoption; Areso
  (uniform per-vehicle payment = commission based on "amount");
  Muldrow (percentage of adjusted gross profit; "excessively narrow
  and wooden" reading rejected; recruiters "principally selling").
  Gap discloses Harris v. Investor's Business Daily is described only
  as Areso characterized it and was not fetched.
- **`commsalesexempt_dlse_enforcement_positions`** — DLSE Manual
  §§ 50.6.1 (items 1-4), 50.6.4.1, 50.6.4.3-4, 50.6.4.5; Peabody's
  adoption of § 50.6.1 after independent review. Gap states the
  Manual's non-binding status and the June 2002 footer on § 50 pages.
- **`commsalesexempt_what_the_exemption_does_not_reach`** — Wage
  Order 4 § 4(B) (minimum wage each payroll period); Peabody fn. 7;
  Lab. Code § 2751(a)-(b) written-commission-contract rule; Wage
  Order 4 § 1(A).
- **`commsalesexempt_ack`** (drafting) — signature block reusing the
  exact pattern of `makeuptime_ack` / `timerounding_ack`.

Fields: `companyName`, `employeeName` — reused verbatim (same ids,
labels, placeholders) from `makeup_time_personal_obligations_info_sheet`.
No new fields.

Deliberately **excluded**: the outside salesperson exemption (the
main subject of Ramirez), the executive/administrative/professional
exemptions, remedies and penalties, the § 2751(c) bonus exclusions
(covered by `commission_agreement`), and draw/advance recoupment
(covered by `wage_advances_draws_against_commission_info_sheet`).

## Case-law research (no CourtListener MCP quota used)

All case location and text retrieval went through `curl` via the
environment proxy, not the MCP server, per the task brief's quota
note. The public unauthenticated
`https://www.courtlistener.com/api/rest/v4/search/?type=o&q=...` JSON
endpoint was used four times to locate cluster ids
(Peabody 2683375; Ramirez 1133701; Keyes Motors 2116074; Areso
5810272; Muldrow 5811300 — the last two surfaced in the Keyes/Areso
searches). Harris v. Investor's Business Daily (2006) 138
Cal.App.4th 28 was identified from the Areso and Muldrow opinions but
deliberately not fetched or cited; it is described only as Areso
characterized it, and the clause gap says so.

## Independent double-fetch

Every source was fetched twice into `wave161_during/` with two
distinct header sets, and the two fetches were required to agree:

- **Cal. Lab. Code §§ 510, 515, 204, 204.1, 200, 2751, 1182.12** —
  `leginfo.legislature.ca.gov`, Chrome UA vs.
  `GroundtruthVerifier/1.0 (+corpus-verification; curl)`. All 14
  fetches HTTP 200 (one transient TLS/connection reset on the § 200
  first attempt was retried with the same UA and succeeded). The
  `id="codeLawSectionNoHead"` text of each pair was **identical**
  after tag-stripping and whitespace normalization (asserted in
  `pre_merge_check.py`).
- **IWC Wage Orders 4-2001 and 7-2001** —
  `https://www.dir.ca.gov/IWC/IWCArticle4.pdf` and `.../IWCArticle7.pdf`
  (the URLs actually fetched and cited). Both pairs byte-identical
  (pdfplumber text md5 `ec3e805b5cc38267df79097419c6b4e3` for Order 4,
  `da74e261d4d21a64008988ec576c3a08` for Order 7).
- **DLSE Enforcement Policies and Interpretations Manual** —
  `https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf`
  (4,457,559 bytes; file md5 `b0e45ef97010c7472ec7ed693ca5ea21` for
  both fetches; pdfplumber text md5 `02ff7daa8386af4ab446ac9a9352ac37`).
  The § 50.6 pages carry a "JUNE, 2002" footer, recorded in each
  citation's `case` field.
- **DLSE Minimum Wage FAQ** — `https://www.dir.ca.gov/dlse/faq_minimumwage.htm`,
  both fetches identical (63,334 bytes).
- **Five CourtListener opinion pages** (Peabody, Ramirez, Keyes
  Motors, Areso, Muldrow) — fetched with two distinct header sets
  (Chrome/Windows UA + `Referer: https://www.courtlistener.com/` vs.
  Safari/macOS UA + `Referer: https://www.courtlistener.com/opinion/`),
  all HTTP 200 on the first try, each pair byte-identical.

## Quote verification

`pre_merge_check.py` built a normalized (nbsp → space, whitespace
collapsed) text of each source, asserted the two fetches of each
source agree exactly, and checked every `citations[].quote` in all 8
authority clauses for exact substring containment in its cited
source under the same normalization. For the CourtListener pages the
only additional normalization was removal of the
`<span class="star-pagination">` page-marker elements, the same
benign normalization used by earlier verification entries in this
directory.

**Result: 41 of 41 quotes verified.** Two drafts failed on the first
pass and were corrected rather than worked around:

1. The Ramirez burden-of-proof sentence is interrupted in the
   CourtListener text by the "*795" star-page marker between "proving
   the" and "employee's". The marker is stripped as a benign artifact;
   the clause gap and the citation's `case` field disclose it.
2. The DLSE Manual's § 50.6 opening sentence breaks "Order 4-2001"
   across a hyphenated line ("Order 4-" / "2001"), so whitespace
   normalization cannot rejoin it. The citation quote was moved to the
   artifact-free remainder of that sentence plus the Manual's block
   quotation of § 3(D); the gap discloses this.

Also audited every case pincite against the star-page markers
(`pincite_check.py`): three drafted pincites were tightened (Keyes
559, not 559-560; Keyes 564 for "Put simply", not 563; Areso 1006,
not 1006-1007). Footnote pincites (Peabody fns. 3, 4, 6, 7; Keyes
fn. 2) were located by their anchor numerals in the main text.

Hand-checked additionally: the Wage Order 7 quote reproduces the PDF's
split fraction "(11/ 2 )" exactly as extracted, and the Wage Order 4
quote its "(11/2)"; the Peabody text's OCR defects elsewhere ("die
minimum wage", "{ibid..)") were avoided rather than quoted.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first and matched
the exact patterns of recent During-employment info sheets
(`makeup_time_personal_obligations_info_sheet`). `pre_merge_check.py`
confirmed:

- Every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}`, status
  `verified`, non-empty body/gap/citations, and every citation exactly
  `{case,cite,url,quote}`.
- Every drafting clause has exactly `{id,title,kind,body}`.
- The document has exactly `{id,title,description,categories,clauseOrder,fields}`.
- `clauseOrder` equals the set of the 10 new clause ids; no duplicates;
  no collision with any existing clause or document id.
- Every `{{placeholder}}` in the drafting bodies (`companyName`,
  `employeeName`) is declared in `fields`; no placeholder appears in
  any authority body, gap, or title.

## Corpus-wide validation (post-merge)

`merge_and_validate.py` first asserted that re-serializing both data
files (`json.dumps(indent=2, ensure_ascii=False)` + trailing newline)
reproduced them byte-for-byte, so the merge is append-only. After the
merge it re-read both files from disk and confirmed:

- Both files parse as valid JSON.
- All clause ids unique across all 5,470 clauses (5,460 → 5,470).
- All document ids unique across all 659 documents (658 → 659).
- Every `clauseOrder` entry across **all 659 documents** resolves to an
  existing clause id.
- Every `{{placeholder}}` in every clause referenced by every document
  resolves to a field declared by that document — zero unresolved
  placeholders corpus-wide.

## Net changes

- New document: Commissioned Employee ("Inside Sales") Overtime
  Exemption (Wage Orders 4 and 7, § 3(D); Peabody v. Time Warner
  Cable) — Information Sheet
  (`commissioned_employee_overtime_exemption_info_sheet`), category:
  During employment.
- 10 new clauses (8 authority + 2 drafting), all under the
  `commsalesexempt_*` id prefix; 41 verified citations.
- No new fields (reused `companyName`, `employeeName`).
- Corpus: 5,460 → 5,470 clauses; 658 → 659 documents.
