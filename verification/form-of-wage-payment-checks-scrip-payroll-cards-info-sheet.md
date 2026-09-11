# During employment, new document: Form of Wage Payment: Checks, Scrip, Direct Deposit, and Payroll Cards (Lab. Code §§ 212–213) — Information Sheet

## Wave

Wave 159 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, 151, 153,
155 and 157 covered the same four categories. This task ran in an
isolated git worktree with no coordination with the other three
parallel wave-159 tasks, and used a uniquely-named scratchpad
subdirectory (`wave159_during/`) rather than the shared `/tmp` root.

## Why this document

Read `data/documents.json` and enumerated all 82 existing "During
employment" documents before choosing a topic. Confirmed that most of
the task brief's own example topics were already taken:
`tip_pooling_gratuities_ownership_info_sheet` (Lab. Code §§ 350–351),
`political_activity_protection_info_sheet` (§§ 1101–1102),
`jury_duty_witness_leave_info_sheet`, `time_off_to_vote_info_sheet`,
`wage_garnishment_info_sheet` (Code Civ. Proc. § 706.010 et seq.), and
vacation-as-vested-wages (§ 227.3 / *Suastez*, 23 and 12 corpus hits,
carried by `vacation_payout_statement` and the deferred-compensation
sheet). Also confirmed `wage_working_conditions_disclosure_info_sheet`
already covers Lab. Code §§ 232/232.5 and *Grant-Burton*.

Grepped the full text of both data files for the chosen topic and its
near-neighbours before settling on it:

- "§ 212" / "§ 213" / "payroll card" / "pay card" / "scrip" (as a
  word) / "negotiable" (employment sense) / "dishonor" (employment
  sense) / "insufficient funds" / "bounced" — **zero** employment-law
  hits. The only "section 212" / "section 213" matches are other codes
  (Unemp. Ins. Code, Prob. Code, Fam. Code).
- "225.5" — one hit, in the cash-shortage deductions sheet, as a
  penalty cross-reference only.
- The existing `direct_deposit` document is three **drafting** clauses
  with no citations; `finalpaydelivery_direct_deposit` (Ending
  employment) quotes § 213(d) only for its final-paycheck sentence.
  Neither addresses § 212's negotiable-instrument rule, the scrip ban,
  the dishonor presumption, out-of-state checks, or payroll cards.

**The form of wage payment under Lab. Code §§ 212–213** — the
negotiable-instrument requirement, the scrip/company-store ban, the
30-day sufficient-funds rule and dishonor presumption, § 215 / § 225.5
enforcement, the § 213 exceptions (direct deposit, public employers),
out-of-state paychecks, payroll debit cards, and the Regulation E
compulsory-use overlay — is a discrete, frequently-encountered payroll
question with a short controlling statute, three published California
appellate opinions, one federal district-court opinion, and one
detailed DLSE opinion letter, none of which the corpus addressed.

## What this document covers

11 clauses (9 authority + 2 drafting), id-prefixed `wagepayform_`:

- **`wagepayform_intro`** (drafting) — scope statement; states that the
  sheet describes the law and does not select, authorize, or change
  any payment method.
- **`wagepayform_negotiable_instrument_rule`** — § 212(a)(1) quoted in
  full; § 208 ("in the manner provided by law"); *Brown v. Superior
  Court* (2011) 199 Cal.App.4th 971 on the statute's accepted purpose
  and its observation that only three reported decisions had
  discussed § 212 in 75 years.
- **`wagepayform_scrip_merchandise_prohibition`** — § 212(a)(2);
  *People v. Hampton* (1965) 236 Cal.App.2d 795 quoting *In re
  Ballestra* (1916) on the company-store rationale and *People v.
  Turner* (1957) on the statute punishing the instrument, not the
  nonpayment; *Brown*'s "scrip for the company store" sentence. Gap
  discloses that *Ballestra* and *Turner* are cited only as quoted in
  *Hampton*.
- **`wagepayform_in_state_place_of_business_out_of_state_checks`** —
  § 212(c) (bank drawee); *Solis v. Regis Corp.* (N.D. Cal. 2007) 612
  F.Supp.2d 1085 (Chicago-bank paychecks violated § 212 regardless of
  injury; check-cashing fee is a "discount"). Gap flags the opinion's
  federal, non-binding status and its own typographical transposition
  in quoting § 212.
- **`wagepayform_sufficient_funds_dishonor_presumption`** — § 212(b);
  *Hampton*'s holding on the presumption, burden of justification, and
  the "reasonably should have known" standard.
- **`wagepayform_criminal_civil_penalties`** — § 215 (misdemeanor);
  § 225.5 ($100 / $200 + 25%); *Solis* limiting § 225.5 to violations
  involving an actual withholding and applying PAGA § 2699(f)
  otherwise. Gap notes PAGA's post-2007 amendments and that current
  § 2699 was not fetched.
- **`wagepayform_direct_deposit_exception`** — § 213(d) quoted in full;
  DLSE Op. Letter 2008.07.07 on § 213(d) as an independent
  authorization and on employee choice as a fundamental condition.
- **`wagepayform_payroll_debit_cards`** — the 2008 DLSE letter's
  two-step analysis (§ 213(d) voluntariness, then § 212(a)'s "without
  discount" applied to the card), its fee warning, its one-free-
  transaction conclusion, its "fully informed / optional" caveat, and
  its facts-limited disclaimer; *Marenco v. DirecTV LLC* (2015) 233
  Cal.App.4th 1409 for the debit-card-fee allegations and the fact
  that the appeal decided only arbitration. Gap discloses the letter's
  OCR defects and the fact that *Marenco* did not decide the § 212
  claim.
- **`wagepayform_federal_regulation_e_compulsory_use`** — 12 C.F.R.
  § 1005.10(e)(2) from the eCFR; the DLSE letter's 2008 statement of
  the same rule (then § 205.10(e)) and its note that payroll card
  accounts became Regulation E accounts effective July 1, 2007.
- **`wagepayform_exclusions_public_employers`** — § 213(a)–(c) and
  § 220(b) quoted in full; § 220(a) described (it does not list § 212);
  *Brown*'s merits disposition of a state-employee § 212 claim.
- **`wagepayform_ack`** (drafting) — signature block, reusing the exact
  pattern of `makeuptime_ack` / `timerounding_ack`.

Fields: `companyName`, `employeeName` — reused verbatim (same ids,
labels, placeholders) from `makeup_time_personal_obligations_info_sheet`.
No new fields.

Deliberately **excluded**: Lab. Code § 203.1 (construction-industry
dishonored-check penalty wages, mentioned in *Hampton*); Penal Code
§ 476a; the funds-availability rule behind *Solis*'s five-day-hold
statement; the current text of PAGA § 2699; Regulation E's payroll
card account definition and substantive protections beyond
§ 1005.10(e)(2); and *Wang v. DLSE* (1990) 219 Cal.App.3d 1152, which
was fetched (twice, identical) but mentions § 212 only in a footnote
as an example of a statutory knowledge presumption, so it is not cited.

## Case-law search

Per the CourtListener quota note, **no CourtListener MCP calls were
made**. Case law was located with the public unauthenticated
`https://www.courtlistener.com/api/rest/v4/search/?type=o` JSON
endpoint (two queries: `"Labor Code section 212" AND ("negotiable and
payable in cash" OR scrip OR "payroll")` restricted to `cal calctapp`,
and a broader `"section 212" AND "Labor Code" AND (...)` across
California state and federal courts), which returned *Brown*,
*Marenco*, *Solis*, *Hampton*, *Wang*, *Schachter*, *Jenks*, *Clark*,
*Rhodes* and *Gonzalez v. Millard Mall*. Only the first five discuss
§ 212; *Wang* is a footnote mention (not cited). *Brown* itself
confirms that as of 2011 the reported California decisions discussing
§ 212 were *Ballestra*, *Turner* and *Hampton*, so the search is
believed complete for state appellate authority.

## Independent double-fetch

All sources were fetched twice via `curl` through the environment proxy
with two distinct User-Agent strings / header sets:

- **Cal. Lab. Code §§ 212, 213, 215, 216, 220, 225.5, 225, 208** —
  `leginfo.legislature.ca.gov`, Chrome UA vs
  `GroundtruthVerifier/1.0 (+corpus-verification; curl)`. The first
  § 212 second-UA attempt failed with a proxy-side TCP connection
  reset (curl exit 35) and was retried, succeeding. The
  `id="codeLawSectionNoHead"` statutory text of every pair was
  **identical** after tag-stripping and whitespace normalization
  (asserted programmatically in `build_and_check.py`). A third
  fetch of §§ 212, 213 and 225.5 via WebFetch returned partially
  paraphrased summaries and was used only as a sanity check, not for
  verification.
- **Brown, Hampton, Solis, Marenco, Wang (CourtListener opinion HTML)**
  — plain browser-header fetches returned the AWS WAF challenge page
  (HTTP 202, ~2 KB) as the brief warned; adding a cookie jar, a
  same-origin `Referer`, and `Sec-Fetch-*` headers returned the full
  pages (HTTP 200). Each opinion was fetched with a Windows/Chrome UA
  and a macOS/Safari UA (Brown three times, including the initial
  cookie-jar probe); the `<article>` text of every pair (and Brown's
  triple) was **identical** after normalization.
- **Marenco v. DirecTV** — second independent path: the California
  courts' own archived slip opinion
  `https://www.courts.ca.gov/opinions/archive/B238421.PDF` (369,748
  bytes; pdfplumber text md5 `31030d52339c0ed8f2efa458cefb658e`),
  which is the URL cited. Both *Marenco* quotes were required to
  appear in **both** the courts.ca.gov PDF and the CourtListener text
  (the two sources differ only in em-dash spacing in a sentence not
  quoted). The `courtinfo.ca.gov` mirror redirected to HTML and the
  storage.courtlistener.com path returned 404; neither was used.
- **DLSE Opinion Letter 2008.07.07** —
  `https://www.dir.ca.gov/dlse/opinions/2008-07-07.pdf` (1,113,135
  bytes, 10 pages). Both fetches **byte-identical** (pdfplumber text
  md5 `bc60f0076ac3c85bf520d36195299545` for both). The PDF is a
  scanned image with OCR text containing recognition errors
  ("payrnll", "mid" for "and", "EFT A"); quotes were chosen from clean
  passages and the one quote containing an OCR artifact ("EFT A") is
  reproduced as it appears in the source, with the defect disclosed in
  the clause gap. One otherwise-useful sentence ("By providing one
  free transaction ...") is split by a page header in the OCR text and
  was deliberately not quoted.
- **12 C.F.R. § 1005.10** — eCFR versioner API
  (`.../full/2026-09-01/title-12.xml?section=1005.10`); the API
  requires `Accept-Encoding` compression (first attempts returned
  406). Both fetches (two UAs) identical after normalization. Cited
  URL is the human-readable eCFR section page.

## Quote verification

`build_and_check.py` built a normalized (nbsp → space, whitespace
collapsed) text of each independently fetched source, required the two
(or three) fetches of each source to agree exactly, and checked every
`citations[].quote` in all 9 authority clauses for exact substring
containment in its cited source under the same normalization.

**Result: all 36 quotes across all 9 authority clauses verified on the
first pass.** No genuine defects were found; the only normalization
applied was whitespace collapse across PDF/HTML line breaks. Curly
quotation marks and apostrophes in the statutes and opinions, and
straight apostrophes in the OCR'd DLSE letter, were reproduced as-is.
No clause `gap` records a quote correction; the DLSE OCR artifact
disclosure is in `wagepayform_payroll_debit_cards`'s gap.

Hand-checked additionally: *Hampton*'s "does not purport to inflict
punishment" sentence is *Hampton*'s quotation of *Turner*, and its
*Ballestra* passage is a quotation — both disclosed in the scrip
clause's gap. *Brown*'s "accepted purpose" sentence contains
CourtListener's bracketed parallel cite with spaces (`[ 161 P. 120 ]`),
reproduced verbatim.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first and matched
the exact patterns of recent During-employment info sheets
(`makeup_time_personal_obligations_info_sheet`). `build_and_check.py`
confirmed:

- Every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}`, status
  `verified`, non-empty body/gap/citations, and every citation exactly
  `{case,cite,url,quote}`.
- Every drafting clause has exactly `{id,title,kind,body}`.
- The document has exactly `{id,title,description,categories,clauseOrder,fields}`.
- `clauseOrder` equals the ordered list of the 11 new clause ids; no
  duplicates.
- Every `{{placeholder}}` in the drafting bodies (`companyName`,
  `employeeName`) is declared in `fields`; no placeholder appears in
  any authority body or gap.
- An "inform, never advise" phrase scan ("you should", "we recommend",
  etc.) found nothing.

## Corpus-wide validation (post-merge)

`merge_and_validate.py` first asserted that re-serializing both data
files (`json.dumps(indent=2, ensure_ascii=False)` + trailing newline)
reproduced them byte-for-byte, so the merge is append-only
(`git diff` shows 362 insertions, 0 deletions). After the merge it
re-read both files from disk and confirmed:

- Both files parse as valid JSON.
- All clause ids unique across all 5,387 clauses (5,376 → 5,387).
- All document ids unique across all 652 documents (651 → 652).
- Every `clauseOrder` entry across **all 652 documents** resolves to an
  existing clause id.
- Every `{{placeholder}}` in every clause referenced by every document
  resolves to a field declared by that document — zero unresolved
  placeholders corpus-wide. (The validator tolerates the pre-existing
  clauses whose `gap` is `null`.)

## Net changes

- New document: Form of Wage Payment: Checks, Scrip, Direct Deposit,
  and Payroll Cards (Lab. Code §§ 212–213) — Information Sheet
  (`form_of_wage_payment_checks_scrip_payroll_cards_info_sheet`),
  category: During employment.
- 11 new clauses (9 authority + 2 drafting), all under the
  `wagepayform_*` id prefix; 36 verified citations.
- No new fields (reused `companyName`, `employeeName`).
- Corpus: 5,376 → 5,387 clauses; 651 → 652 documents.
