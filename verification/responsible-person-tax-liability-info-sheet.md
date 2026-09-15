# Verification — Personal Liability of Owners, Officers, and Managers for a Business's Unpaid Sales, Payroll, and Federal Trust Fund Taxes

Document id: `responsible_person_tax_liability_info_sheet`
Category: Business Formation
Checked: 2026-09-15
Clauses: 15 (13 authority, 2 drafting), clause id prefix `resptax_`, 31 citations.

---

## 1. Gap analysis — how the topic was chosen

### The structural question the category never poses

The Business Formation category already held 92 documents. Three of them ask when an owner or manager can be reached personally:

- `alter_ego_piercing_corporate_veil_info_sheet` — the equitable doctrine.
- `officer_director_personal_tort_liability_info_sheet` — torts the person personally commits.
- `successor_liability_asset_purchase_info_sheet` — what a **buyer** of the assets takes on.

And several ask what the entity owes the tax authorities (`sellers_permit_info_sheet`,
`doing_business_in_california_tax_definition_info_sheet`, `ca_s_corporation_tax_info_sheet`,
`llc_annual_fee_info_sheet`).

None asks the question that sits between them: when the entity itself collects tax from customers or
withholds it from employees and fails to pay it over, which individuals become personally liable **by
statute** — no veil-piercing, no personal tort, no purchase of the business required.

The adjacency is unusually tight and is visible in the code's own structure. The successor-liability
sheet already quotes Rev. & Tax. Code §§ 6811–6814 (the buyer's withholding duty) and Unemp. Ins.
Code §§ 1731–1732 (the same on the payroll side). Unemployment Insurance Code § 1735 — the
responsible-person section — sits in the *same article* as §§ 1731–1732, whose heading reads
"Liability of Successors, Officers and Fiduciaries [1731 - 1736]". The corpus had taken the
"Successors" half of that article title and left the "Officers" half untouched. Likewise Rev. & Tax.
Code § 6829 sits 17 sections away from § 6812, which the corpus already covers. This is a structural
gap, not a lexical one.

### Grep counts (run against `data/clauses.json` and `data/documents.json` before any edit)

Candidates probed and **discounted** first:

| term | clauses | docs | verdict |
|---|---|---|---|
| `Penasquitos` | 0 | 0 | — |
| `dissolved corporation` | 13 | 1 | **COVERED**: inspected `corpdiss_continued_existence_and_claims`; quotes Corp. Code §§ 2010, 2011(a)(1)–(2) in full. Post-dissolution claims candidate dropped. |
| `§ 2010` | 29 | 1 | same clause — covered |
| `§ 2000` | 64 | 1 | **COVERED**: inspected `involdissolution_buyout_alternative`; quotes § 2000(a) and (c) buyout-to-avoid-dissolution. Candidate dropped. |
| `appraisers` | 17 | 0 | inspected all 4 hits: `involdissolution_buyout_alternative`, `dissenters_court_action_and_costs`, `llcjuddiss_appraisal_and_decree`, `unqualsec_who_else_is_liable` (this last matches "appraisers" inside § 25504.2, unrelated) |
| `17707.03(c)` | 10 | 0 | **COVERED**: LLC buyout covered by `llcjuddiss_buyout_election`, `llcjuddiss_appraisal_and_decree`, `llcjuddiss_valuation_date_and_dismissal` |
| `provisional director` | 10 | 0 | **COVERED**: `closecorp_deadlock_dissolution`, `involdissolution_deadlock_provisional_director` (Corp. Code §§ 1802, 308(c)) |
| `cumulative voting` | 9 | 1 | **COVERED**: `bylaws_cumulative_voting`, `bylaws_director_removal` |
| `de facto corporation` / `corporation by estoppel` | 0 / 0 | 0 / 0 | left for another document |

Chosen topic — counts before the edit:

| term | clauses | docs | verdict |
|---|---|---|---|
| `6829` | **0** | **0** | genuinely absent |
| `6672` | **0** | **0** | genuinely absent |
| `trust fund recovery` | **0** | **0** | genuinely absent |
| `1735` | 1 | 0 | **false positive** — inspected: the sole hit is in `benacct_legacy_trust_exception`, where the string occurs inside Prob. Code § 16062's cross-reference "Section **1735**0". Nothing to do with Unemp. Ins. Code § 1735. Discounted. |
| `responsible person` | 6 | 0 | **all false positives** — inspected each: `cobrapenalty_liable_party` (26 U.S.C. § 4980B plan administrators); `hazcom_acknowledgment_signature`, `occnoise_acknowledgment_signature`, `bbp_acknowledgment_signature` (signature-block field "Program Responsible Person"); `insolvdc_adequately_provided_for` (Corp. Code § 2005 "financially responsible person"); `saleconf_overbid_formula` (Prob. Code § 10311 "responsible person" bidder). None concerns tax. |
| `willfully fails to pay` | 12 | 0 | **all false positives** — every hit is Lab. Code § 203's waiting-time penalty (`waitingtime_penalty_mechanics`, `bonuspay_…`, `bonafidedispute_…`, `indfinalwage_…`, `oildrillfinalwage_…`, `eventsemp_…`, `tempsvcwage_…`). None is a tax statute. |
| `personally liable for` | 44 | 1 | not inspected exhaustively; the three tax sections that are the subject of this document return 0, which is dispositive |
| `1088.5` / `3700` | 29 / 32 | 0 / 1 | employer-registration candidate, not pursued |

A second, independent false-positive pattern was recorded during case-law search: a CourtListener
query for `"6829"` restricted to the California Supreme Court returned three hits, **all** of them
matching *LEXIS cite numbers* (`1996 Cal. LEXIS 6829`) rather than the statute — the same class of
numeric false positive the brief warns about.

---

## 2. Per-citation verification

Fetch tooling: `curl` through the session's agent proxy. leginfo required a JSF cookie seeded from
`/faces/codes.xhtml` before the section pages would return content.

### A. Cal. Rev. & Tax. Code § 6829 — used in 4 clauses

| path | URL | result |
|---|---|---|
| Publisher 1 | `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=6829.` | HTTP 200, 166,308 bytes |
| Publisher 2 | `https://law.onecle.com/california/taxation/6829.html` | HTTP 200, 11,874 bytes |
| Corroboration | `https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB1528` (Stats. 2024, ch. 499, § 15) | HTTP 200, 247,197 bytes |

`https://law.onecle.com/california/revenue/6829.html` and `.../revenue-and-taxation/6829.html` both
return 404; the live path is `/california/taxation/`. Recorded so the negative fetch is on the record.

**Are the publishers independent?** leginfo and onecle: yes, genuinely. onecle is a 2017 snapshot with
its own pagination, its own "Last modified: October 25, 2018" footer, and no "Source:" line pointing at
leginfo. `california.public.law` was deliberately **not** used.

The chaptered bill text and the code page are **the same publisher (Legislative Counsel) in two
different documents**. That is disclosed in the gap of every clause that relies on it, and is never
presented as independent corroboration.

**Comparison result, subdivision by subdivision:**

| subd. | leginfo (current) vs onecle (2017) | disposition |
|---|---|---|
| (a) | **identical** | quoted from both; two genuinely independent publishers |
| (b) | differs: "they had" (current) vs "he or she had" (2017) | **amendment**, Stats. 2024 ch. 499 § 15. Both versions quoted in the clause so the change is visible on the page. |
| (c) | differs: "the department" vs "the board" | same amendment; current text corroborated against the chaptered bill |
| (d) | differs by **one comma**: "For purposes of this section**,** “willfully…" vs "For purposes of this section “willfully…" | same amendment. Both quoted. Confirmed by an absence test in both directions: the comma-bearing string is absent from onecle; the comma-free string is absent from both leginfo documents. |
| (e) | **identical** | quoted; independent corroboration |
| (f) | differs: "shall be served"/"the department" vs "shall be mailed"/"the board" (first clause); the eight-year clause is **identical** | amendment for the first clause (corroborated against SB 1528 only — same publisher, disclosed); eight-year clause quoted with genuine two-publisher corroboration |

**Normalization disclosed:** the leginfo HTML inserts a line break plus a leading space mid-sentence in
(a), (c), (d) and (f) (e.g. "willfully fails to pay\n or to cause to be paid"). All whitespace runs were
collapsed to single spaces before comparison, and non-breaking spaces rendered as ordinary spaces. No
word, punctuation mark, or capital was altered. The same breaks appear at the same points in the
chaptered bill page — which, being the same publisher, does not by itself prove they are a rendering
artifact; the onecle text, which runs the sentences together, does prove it. That reasoning is stated in
the clause gap rather than asserted.

### B. Cal. Unemp. Ins. Code § 1735 — used in 1 clause

| path | URL | result |
|---|---|---|
| Publisher 1 | `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=UIC&sectionNum=1735.` | HTTP 200, 163,651 bytes |
| Publisher 2 | `https://law.onecle.com/california/unemployment-insurance/1735.html` | HTTP 200 |

`https://law.onecle.com/california/unemployment/1735.html` → 404 (recorded).

**Comparison result: character-for-character identical** for both quoted sentences. Section 1735 was
last amended by Stats. 1995, ch. 679, § 18, so the 2017 onecle snapshot is contemporaneous with the
operative text and no chaptered-bill corroboration was needed. Two genuinely independent publishers.

### C. 26 U.S.C. §§ 6671, 6672 — used in 2 clauses

| path | URL | result |
|---|---|---|
| Publisher 1 | `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section6672&num=0&edition=prelim` (Office of the Law Revision Counsel) | HTTP 200, 162,687 bytes |
| Publisher 2 | `https://www.law.cornell.edu/uscode/text/26/6672` (Cornell LII) | HTTP 200, 56,300 bytes |
| Publisher 1 | `…section6671…` | HTTP 200 |
| Publisher 2 | `https://www.law.cornell.edu/uscode/text/26/6671` | HTTP 200 |

These are genuinely different publishers (a federal office and a university institute, not a reprint of
one another).

**Comparison result: identical**, subject to one disclosed normalization. Cornell wraps defined terms
("such tax", "in person") in inline anchors, so after tag-stripping its text reads "such tax ," and
"in person ,". Spaces before `,` `.` `;` `:` `)` were closed up on **both** sides before comparison.
This is the same class of artifact `california.public.law` was caught *introducing into its own text*;
here it is an artifact of stripping markup, applied symmetrically, and it is disclosed in both clause
gaps. Initial comparison **failed** on two quotes for exactly this reason and passed only after the
normalization — recorded here rather than quietly fixed.

The § 6671(b) quote deliberately begins *after* the defined term `"person"` so that neither publisher's
quotation-mark style (straight at OLRC, curly at Cornell) enters the quote.

### D. State Bd. of Equalization v. Wirick (2001) 93 Cal.App.4th 411 — used in 5 clauses

| path | URL | result |
|---|---|---|
| Only reachable copy | `https://www.courtlistener.com/opinion/2282500/state-board-of-equalization-v-wirick/` | HTTP 200, 69,900 bytes, first try |
| Citation check | `https://www.courtlistener.com/c/Cal.%20App.%204th/93/411/` → `/c/cal-app-4th/93/411/` → **302** to opinion 2282500 | single cluster; no second cluster to diff |

**A second free publisher could not be reached.** Justia, FindLaw, Google Scholar, case.law, casetext,
leagle, anylaw, casemine, vlex and archive.org are egress-blocked from this environment; the California
courts' opinion archive carries only recent slip opinions. "Fetched twice" is **not** claimed for any
Wirick quote, and that limitation is stated in the gap of **every one of the five clauses** that relies
on this opinion.

**DEFECT DISCLOSURE 1 — OCR corruption in the only reachable transcription, and an internal
inconsistency at CourtListener.** The rendered HTML contains:

- `Sofiron` once, against 22 correct occurrences of `Softron`
- `Lome Bay` where `Lorne` is the evident name
- `From January thorough August 1991` (for "through")
- `(§ 6829, subd. (e)0` (for "(e).)")

Exact-phrase index queries against the same cluster returned: `"Lome Bay"` → **1**, `"Lorne Bay"` → **0**,
`"From January thorough August 1991"` → **1**, `"Softron"` → **1**, but `"Sofiron"` → **0** (run twice).
So CourtListener's **indexed text and its rendered HTML for this opinion are not identical.** Two
CourtListener representations therefore cannot be treated as corroborating one another. No quote in this
document comes from a passage containing any of that corruption; this is disclosed in the gap of
`resptax_wirick_former_officers`.

**DEFECT DISCLOSURE 2 — a misquotation in the opinion itself, left uncorrected and quoted verbatim.**
Where Wirick sets out the text of Unemp. Ins. Code § 1735, it prints:

> on the date on which they **became** delinquent

The enacted statute reads **become**. Established four ways, none of them from memory:

1. leginfo § 1735 → "become"
2. onecle § 1735 (independent publisher) → "become"
3. § 1735 has not been amended since 1995 — six years *before* Wirick — so this is not a version difference
4. **both** independent transcriptions of *Cavanagh* (clusters 5809129 and 2299395) quote the same
   sentence of § 1735 as "become"

And confirmed to be in the publisher's text of the opinion rather than an extraction artifact by exact-
phrase index query: `cluster_id:2282500 AND "on the date on which they became delinquent"` → **1**;
`…"on the date on which they become delinquent"` → **0**. (Because one form returned 1 and the other 0,
the search analyzer is demonstrably not conflating the two words.)

The variant is quoted **exactly as printed** in `resptax_wirick_contrast_1735`, with a `cite` field saying
so, and the gap explains it. It is a tense error in an opinion whose entire holding turns on the
difference between the present and the past tense. Whether it originated with the court or the reporter
cannot be resolved from a single transcription, and the clause says so rather than guessing.

**Pin cites.** The rendering carries Cal.App.4th star pagination continuously from `*413` to `*421`, so
pin cites are given. Each quote was placed by its position relative to the markers:

| quote | between markers | pin |
|---|---|---|
| "…section 6829 covers former officers…" | `*413`–`*414` | p. 413 |
| "…makes an officer personally liable … at any time…" | `*418`–`*419` | p. 418 |
| "It is undisputed that personal liability arises … only “upon termination…”" | `*418`–`*419` | p. 418 |
| "on the date on which they became delinquent" | `*418`–`*419` | p. 418 |
| "hold a purchaser of a business or stock of goods…" | `*418`–`*419` | p. 418 |
| "These remedies are cumulative." | `*418`–`*419` | p. 418 |
| "These chapters provide limitation periods…" | `*418`–`*419` | p. 418 |
| "Under section 6711, the Board may bring suit…" | `*419`–`*420` | p. 419 |
| "But these provisions are made applicable…" | `*419`–`*420` | p. 419 |
| "The language of subdivision (a)…" | `*419`–`*420` | p. 419 |
| "Section 6829 easily meets this standard." | `*420`–`*421` | p. 420 |
| "the reasonable and practical construction…" | `*420`–`*421` | p. 420 |

One quote that would otherwise have been attractive — Wirick's description of the three/eight-year
period of § 6487 — was **not** used, because the `*419` marker falls between "Section 6487" and
"provides", so no verbatim span covers the sentence. The sentence about § 6711 was used instead.

### E. Cavanagh v. California Unemployment Ins. Appeals Bd. (2004) 118 Cal.App.4th 83 — used in 1 clause

| path | URL | result |
|---|---|---|
| Citation check | `https://www.courtlistener.com/c/cal-app-4th/118/83/` | **HTTP 300** — more than one cluster carries this citation |
| Transcription 1 | `https://www.courtlistener.com/opinion/5809129/cavanagh-v-california-unemployment-insurance-appeals-board/` | HTTP 200, 77,158 bytes |
| Transcription 2 | `https://www.courtlistener.com/opinion/2299395/cavanagh-v-cal-unemp-ins-appeals-bd/` | HTTP 200, 71,490 bytes |

Per the 300-response instruction, **both were fetched and diffed.** Both are the same majority opinion
by Raye, J. (not a concurrence/majority split of the kind that has burned earlier waves). The quoted
passages are **word-for-word identical** across the two; the only differences are typographic quotation
marks (curly in 5809129, straight in 2299395), the spacing of the abbreviation "Unemp. Ins. Code" vs
"Unemp.Ins.Code", and the presence of star pagination (only 5809129 carries `*86`, `*87`, `*88`, `*94`,
`*95`).

That is two independent digitizations, but **both are served by CourtListener and are therefore one
publisher.** No second free publisher of this opinion could be reached. Stated in the clause gap.

Pin cites taken from the transcription carrying star pagination: the "authority for the Department's
assessments rests in … section 1735" sentence precedes `*94`, so p. 93; the §§ 1222 / 1223–1224 / 1703
passage follows `*94`, so p. 94.

### F. Parmar v. Board of Equalization (2011) 196 Cal.App.4th 705 — **inspected and discounted**

Search returned it for `"6829" "personally liable"`. Fetched (opinion 5810337, HTTP 200, 100,079 bytes)
and read. The opinion contains exactly **one** occurrence of "6829", and it lies inside a block quote of
the Board's appellate brief describing a bill (A.B. 2676) that **was never enacted**. Parmar's actual
holding concerns standing to claim a cigarette and tobacco tax refund under Rev. & Tax. Code § 30407.
It is not authority on § 6829 and is **not cited in this document.**

---

## 3. Negative results recorded

- **No published California decision construes the willfulness element of Unemp. Ins. Code § 1735.**
  CourtListener, restricted to `court=cal calctapp`, for `"Unemployment Insurance Code section 1735"` →
  count 3, which is two duplicate clusters of *Cavanagh* plus *Wirick*. The shorter query
  `"Insurance Code section 1735"` returned the same 3. Recorded in `resptax_uic1735_text`.
- **No published California decision construes Rev. & Tax. Code § 6829(c)'s tax-reimbursement proof
  requirement**, or defines "terminated, dissolved, or abandoned". `"Revenue and Taxation Code section
  6829"` → count 2 (*Wirick*, *Parmar*); *Parmar* discounted above.
- **Amendments postdating the quoted opinions.** *Wirick* (2001) predates the 2024 amendment that
  rewrote § 6829(b), (c), (d) and (f). Disclosed in `resptax_wirick_limitations`.
- **Question not reached in Wirick:** the court recorded that Wirick "does not raise a statute of
  limitations defense in his case", so the application of §§ 6487/6711 to particular facts was not
  decided. Carried into the clause body.
- **Not fetched, and said so:** Cal. Code Regs., tit. 18, § 1702.5 (the Board regulation *Wirick*
  discusses) was not fetched and is not quoted. Unemp. Ins. Code §§ 1222, 1223, 1224, 1703 and Rev. &
  Tax. Code §§ 6487, 6561, 6564, 6711, 6812, 6827 are reported only as the Court of Appeal described
  them.
- **Federal case law deliberately not quoted.** The decisions construing § 6672's "responsible person"
  and "willfulness" elements are federal circuit and district decisions that no California controlling
  opinion reproduces; under the rule governing this corpus they are not quoted. Stated as a deliberate
  limit in `resptax_federal_6672_penalty`.

## 4. Tooling limit encountered

Two exact-phrase index queries returned an error rather than a count and were **re-run shorter**, as the
instructions require: `"section 6829 covers former officers, as well as those in charge when the
corporation ceases"` and `"any current or former officer may be personally liable for unpaid sales
taxes"` (the second re-ran successfully as `"current or former officer may be personally liable"` →
count 1). A later re-run of `"covers former officers"` returned
`{"detail":"Request was throttled. Expected available in 62789 seconds."}`, after which no further index
queries were possible. Quotes that could not be index-checked were verified against the fetched HTML
only. This is disclosed in `resptax_wirick_vagueness` rather than left to be inferred.

## 5. Post-write validation

Script asserted: both files parse; clause ids unique; doc ids unique; doc titles unique; every
`clauseOrder` id resolves; every authority clause has a non-empty `gap` and ≥ 1 citation; no orphan
clauses; every `{{placeholder}}` in any body or gap is declared in the owning document's `fields`;
canonical key order for clauses (`id,title,kind,status,checkedDate,body,gap,citations` /
`id,title,kind,body`), citations (`case,cite,url,quote`), and documents
(`id,title,description,categories,clauseOrder,fields`).

Then **every quote was re-read out of the written `data/clauses.json`**, mapped back to its source by
URL, and re-checked as a verbatim substring of the corresponding fetched document (with only the
disclosed whitespace / space-before-punctuation normalization).

```
new doc clauses: 15
new authority: 13
new drafting: 2
new citations: 31
corpus totals: clauses 6446 documents 729
Business Formation docs: 93
ALL CHECKS PASS
```

`git diff --numstat` after the edit: `342 1 data/clauses.json`, `52 1 data/documents.json` — purely
additive (the single deleted line in each file is the closing bracket, re-emitted).
