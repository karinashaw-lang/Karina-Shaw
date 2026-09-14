# Verification record — Directors' Duties to Creditors When a California Corporation Is Insolvent

- Document id: `insolvent_corporation_director_duties_creditors_info_sheet`
- Category: Business Formation
- Clause id prefix: `insolvdc_`
- Clauses: 15 (12 authority, 3 drafting); 29 citations
- Checked date recorded on every authority clause: 2026-09-14

## 0. Coverage check before drafting

Greps were run over `data/clauses.json` and `data/documents.json` for the candidate's
distinctive names and phrases. Counts at the time of drafting (clauses / documents):

| term | clauses | documents | notes |
|---|---|---|---|
| `trust fund doctrine` | 0 | 0 | |
| `Berg & Berg` | 0 | 0 | |
| `Saracco` | 0 | 0 | |
| `deepening insolvency` | 0 | 0 | |
| `zone of insolvency` | 0 | 0 | |
| `duty to creditors` | 0 | 0 | |
| `assignment for the benefit of creditors` | 1 | 0 | inspected — the single hit is inside the quoted text of Civ. Code § 3439.01(c) in the Uniform Voidable Transactions Act sheet, where "assignee of a general assignment for the benefit of creditors, as defined in Section 493.010 of the Code of Civil Procedure" appears as a cross-reference inside a definition of "creditor." Discounted: the corpus nowhere states what a general assignment is, what the assignee must do, or what it may recover. |
| `493.010` | 1 | 0 | same UVTA definitional cross-reference; discounted for the same reason. |
| `1802` (as Code Civ. Proc. § 1802) | 0 | 0 | the 14 raw hits for the string `1802` were inspected and are all false positives: 48 C.F.R. §§ 22.1802–22.1803 in a federal-contracting clause, and **Corporations Code** § 1802 (provisional director in an involuntary dissolution action) in the involuntary-dissolution sheet. No hit is to Code of Civil Procedure § 1802. |
| `Code of Civil Procedure section 1800` | 0 | 0 | the 117 raw hits for `1800` are **Corporations Code** § 1800 (involuntary dissolution) and reporter page numbers; none is the Code of Civil Procedure preference-recovery section. |
| `§ 2005` (Corp. Code) | 0 | 0 | |
| `adequately provided for` | 16 | 0 | inspected — these are in the existing corporate-dissolution sheet, which quotes Corp. Code § 2004 ("paid or adequately provided for"). The *definition* section, § 2005, is nowhere quoted or described; this sheet supplies it and does not re-quote § 2004 or § 2011. |
| `Credit Managers` | 0 | 0 | |
| `Grosset` / `PacLink` / `Schuster v. Gardner` | 0 | 0 | |

False positives specifically watched for and discounted: `§ 2000` returns 64 clause hits,
almost all of which are **42 U.S.C. § 2000e / § 2000ff** (Title VII and GINA) in the
employment categories; the genuine Corporations Code § 2000 hits belong to the existing
involuntary-dissolution sheet, which is why this sheet does not go near the § 2000 buyout.
`§ 208` and `1110` likewise match unrelated section numbers and reporter pages.

Overlap deliberately avoided: `distribution_restrictions_info_sheet` already quotes Corp.
Code §§ 166, 500, 501, 316 and 506; `corporate_dissolution` already quotes §§ 1900, 1901,
1903, 1905, 2004, 2010 and 2011. Nothing quoted here duplicates those.

## 1. Sources and how each was fetched

### Berg & Berg Enterprises, LLC v. Boyle (2009) 178 Cal.App.4th 1020 (6th Dist.)

- Fetch A: `https://www.courtlistener.com/opinion/2260375/berg-berg-enterprises-llc-v-boyle/`
  reached through the citation redirect `https://www.courtlistener.com/c/cal-app-4th/178/1020/`
  (302 → `/c/cal-app-4th/178/1020/` → 200), with a browser User-Agent, `Referer:
  https://www.courtlistener.com/` and an HTML Accept header. 159,982 bytes.
- Fetch B: the same opinion URL requested again with a different User-Agent (Safari/macOS)
  and a different Referer. 159,982 bytes.
- **Comparison result: the two fetches produced byte-identical opinion text (80,304
  characters after tag stripping).** That is one publisher and two request paths, not two
  sources, and it is recorded that way in every affected clause's `gap`.
- **No second publisher was reachable.** Attempted and refused by the egress proxy or by
  the host: Justia (`law.justia.com`, 403), FindLaw (403), casetext (410 for the case
  page), case.law / static.case.law / api.case.law (CONNECT rejected), law.resource.org
  (CONNECT rejected), Google Scholar and Google generally (CONNECT rejected),
  en.wikisource.org (CONNECT rejected), descrybe.ai (CONNECT rejected), anylaw,
  opinions.calcourts.gov (no route). The California courts' own opinion archive was tried
  at `https://www.courts.ca.gov/opinions/archive/H031591.PDF` (H031591 is the docket number
  shown on the CourtListener record) and returned **404** after redirecting to www4 — the
  archive does not reach back to 2009.
- Corroboration of wording (not a second publisher): two later federal opinions reproduce
  the holding sentence quoted in clause `insolvdc_trust_fund_scope`. See below.
- Index queries run against CourtListener's search API to confirm the two disclosed
  oddities are in the stored record rather than in my extraction:
  - `q=cluster_id:2260375 AND "used to pay creditors claims"` → **count 1**
  - `q=cluster_id:2260375 AND "Enterprises, LLP v. Sherwood"` → **count 1**
  Both queries run against the same stored text, so they confirm extraction fidelity, not
  the printed reporter.

### Solution Trust v. 2100 Grand LLC (In re AWTR Liquidation Inc.) (Bankr. C.D. Cal. 2016) 548 B.R. 300

- Fetch A and Fetch B: `https://www.courtlistener.com/opinion/8526841/solution-trust-v-2100-grand-llc-in-re-awtr-liquidation-inc/`,
  twice, with different User-Agents. Both 249,743 bytes; the two HTML responses differ only
  in the Content-Security-Policy `nonce` attribute, and the extracted opinion text is
  identical (137,809 characters).
- One publisher only, for the same reasons listed above.

### Swimmer v. Moeller (In re Moeller) (Bankr. S.D. Cal. 2012) 466 B.R. 525

- Fetch A and Fetch B: `https://www.courtlistener.com/opinion/2189553/swimmer-v-moeller-in-re-moeller/`,
  twice, with different User-Agents. Both 110,341 bytes; extracted text identical after
  whitespace normalization (36,974 characters).
- Not quoted in any `citations` entry; used only as corroboration and disclosed in the
  `gap` of `insolvdc_trust_fund_scope` and `insolvdc_federal_reading`.

### Statutes (Code Civ. Proc. §§ 493.010, 1800, 1802; Corp. Code §§ 2005, 2300, 309)

- Fetch A: `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=…&sectionNum=…`,
  with a JSF session cookie seeded from `/faces/codes.xhtml`.
- Fetch B: the same five sections fetched again in a **second, separate JSF session** with a
  different User-Agent. Section text identical in all five cases (493.010: 1,107 chars;
  1800: 11,978; 1802: 1,584; 2005: 1,275; 2300: 760).
- Fetch C (second site): `california.public.law/codes/ca_civ_proc_code_section_1800`,
  `…_1802`, `…_493.010`, `ca_corp_code_section_2005`, `ca_corp_code_section_2300`.
- **Comparison result:** word-level diff of the operative text shows **no substantive
  difference**. The only differences are (i) the code-heading block and the enactment note,
  which leginfo prints and public.law does not, and (ii) a missing space after "(iii)" in
  five places in public.law's rendering of § 1800. Every quoted span is identical on both.
- **Independence caveat, disclosed in every statute clause's `gap`:** california.public.law
  prints a "Source:" line on each of these pages naming the corresponding leginfo page as
  its source. The two sites are separately formatted and separately maintained, but they are
  not independent publishers of the text.
- Corp. Code § 309 was fetched from leginfo only, and is not quoted in any citation; it was
  fetched to confirm that the words Berg quotes from § 309(a) still appear unchanged in the
  current section (last amended Stats. 1987, ch. 1203, § 2). They do.

## 2. Per-citation verification

Every `citations[].quote` was checked as a verbatim substring of each fetch listed for it,
after normalizing only benign artifacts (see §4). Checks were run twice: once against the
draft, and again **after writing, by re-reading the quotes back out of `data/clauses.json`**.

| clause | citation | fetches checked | result |
|---|---|---|---|
| `insolvdc_baseline_duty` | Berg at 1037 (§ 309(a) sentence) | Berg A, Berg B | pass / pass |
| `insolvdc_baseline_duty` | Berg at 1037 (no analogous statutory authority) | Berg A, Berg B | pass / pass |
| `insolvdc_no_duty_from_insolvency_alone` | Berg at 1041 (no broad paramount duty) | Berg A, Berg B | pass / pass |
| `insolvdc_no_duty_from_insolvency_alone` | Berg at 1041 (decline to create such duty) | Berg A, Berg B | pass / pass |
| `insolvdc_trust_fund_scope` | Berg at 1041 (holding on scope) | Berg A, Berg B | pass / pass |
| `insolvdc_trust_fund_scope` | Berg at 1041 (in other words …) | Berg A, Berg B | pass / pass |
| `insolvdc_trust_fund_origins` | Berg at 1040 (assets become a trust fund) | Berg A, Berg B | pass / pass |
| `insolvdc_zone_of_insolvency` | Berg at 1041 (zone / vicinity holding) | Berg A, Berg B | pass / pass |
| `insolvdc_negative_result_no_prior_case` | Berg at 1040 (no published California cases) | Berg A, Berg B | pass / pass |
| `insolvdc_applying_the_standard` | Berg at 1047 | Berg A, Berg B | pass / pass |
| `insolvdc_applying_the_standard` | Berg at 1043 | Berg A, Berg B | pass / pass |
| `insolvdc_federal_reading` | AWTR 548 B.R. 300, 323 (heading) | AWTR A (=B) | pass / pass |
| `insolvdc_federal_reading` | AWTR 548 B.R. 300, 323 (not persuaded) | AWTR A (=B) | pass / pass |
| `insolvdc_federal_reading` | AWTR 548 B.R. 300 (unsettled; no pin cite) | AWTR A (=B) | pass / pass |
| `insolvdc_abc_definition` | Code Civ. Proc. § 493.010 (3 quotes) | leginfo, public.law | pass / pass |
| `insolvdc_abc_definition` | Berg footnote 1 (no pin cite) | Berg A, Berg B | pass / pass |
| `insolvdc_abc_notice_and_claims_bar` | Code Civ. Proc. § 1802(a), (b), (c) | leginfo, public.law | pass / pass |
| `insolvdc_abc_preference_recovery` | Code Civ. Proc. § 1800(b), (b)(4), (f), (g) | leginfo, public.law | pass / pass |
| `insolvdc_adequately_provided_for` | Corp. Code § 2005 (3 quotes) | leginfo, public.law | pass / pass |
| `insolvdc_adequately_provided_for` | Corp. Code § 2300 | leginfo, public.law | pass / pass |

Totals: **29 citations, 55 quote-against-fetch substring checks, 55 pass, 0 fail**, both
before and after writing to `data/clauses.json`.

## 3. Defects, damage and limitations disclosed rather than corrected

1. **Berg prints "creditors claims" without an apostrophe in its central holding.** At 178
   Cal.App.4th 1041 the sentence reads "… that might otherwise be used to pay creditors
   claims," while the same opinion prints "creditors' claims" with the apostrophe in
   neighbouring sentences (for example at 1043 and 1044). The quote in
   `insolvdc_trust_fund_scope` reproduces the source exactly. Corroboration that the
   omission is in the reported opinion and not in this publisher's transcription: *In re
   Moeller*, 466 B.R. 525, 532, quoting Berg, prints "pay creditors claims"; *In re AWTR
   Liquidation*, 548 B.R. 300, 323, quoting Berg, prints "pay creditors **[']** claims" —
   that court inserted the missing apostrophe in brackets, which is how a court marks an
   alteration of the source it is quoting. Disclosed in the clause `gap`; not corrected.
2. **Berg's footnote 1 misnames the party in the case it cites.** It cites "Berg & Berg
   Enterprises, **LLP** v. Sherwood Partners, Inc. (2005) 131 Cal.App.4th 802, 829, fn. 13,"
   while four other references in the same opinion give "LLC," and the decision reported at
   131 Cal.App.4th 802 is indexed as *Berg & Berg Enterprises, LLC v. Sherwood Partners,
   Inc.* Whether the misprint is in the official report or is a character substitution in
   this publisher's text cannot be resolved from a single source, and the clause `gap` says
   so rather than choosing.
3. **A later court's quotation differs from its source by one character.** *In re Moeller*
   renders Berg's phrase as "trust-**fund** doctrine" (hyphenated) where Berg prints "trust
   fund doctrine." Disclosed in `insolvdc_federal_reading`; the Moeller text is not relied
   on for Berg's wording.
4. **california.public.law's page metadata contradicts the statute printed on the same
   page.** Its pages for Corp. Code §§ 2005 and 2300 both carry "(updated Jan. 1, 1975;
   accessed Sep. 14, 2026)", while the text of § 2300 displayed on that page defines the
   effective date of the 1975 recodification (Stats. 1975, ch. 682) as **January 1, 1977**.
   The leginfo page carries no such date, giving only the enactment note. Disclosed in
   `insolvdc_adequately_provided_for`; § 2300 is quoted as a citation so a reader can see
   the contradiction from primary law. Verified from primary law, not memory: Corp. Code
   § 2300 was fetched from both sites.
5. **OCR damage in the Berg text as published by CourtListener**, outside every quoted
   span: "modem" for "modern", "general mle" for "general rule", "canied-forward" for
   "carried forward", the bracketed alterations "divert[ing], dissipat[ing] or unduly
   risk[ing]" printed as "diverting], dissipating] or unduly risking]", and paragraph marks
   printed as "[f]" and "[!]". Every quoted sentence was compared character by character
   against both fetches and is free of it. Disclosed in each Berg clause's `gap`.
6. **OCR damage in the AWTR text**, in the very sentence that quotes Berg:
   "extracontraetual" for "extracontractual". The AWTR sentences actually quoted in a
   citation were checked and are clean. Disclosed in `insolvdc_federal_reading`.
7. **Footnotes are relocated in the fetched Berg text.** The star-pagination markers run
   *1024 → *1050 through the running text, then restart at *1028 in a block of footnotes
   appended at the end, where they no longer track the text around them. Because a pin cite
   cannot be fixed from that block, the Berg footnote 1 quote in `insolvdc_abc_definition`
   **carries no pin cite**, and the `cite` field says why.
8. **One AWTR quote has no pin cite.** The sentence "Some issues of California law are not
   settled…" falls before the first star-page marker (*306) in the fetched text, so its
   reporter page cannot be fixed; the `cite` field says so instead of guessing.
9. **Single-publisher limitation.** Every case quote in this sheet comes from one publisher,
   CourtListener. Each opinion was fetched twice, but by two request paths to the same site,
   and the fetches were identical. This is stated plainly in the `gap` of every clause that
   quotes a case.
10. **Nested quotation.** The trust-fund sentence in `insolvdc_trust_fund_origins` is quoted
    by Berg from a federal district court decision (*CarrAmerica Realty Corp. v. nVIDIA
    Corp.* (N.D. Cal. 2006) 2006 U.S.Dist. Lexis 75399). It is quoted here only as the
    controlling California opinion reproduces it, the nested quotation marks are dropped
    from the quoted span, and CarrAmerica was not fetched. The four older California
    decisions Berg collected (Saracco Tank, Commons v. Schine, Title Ins. etc. Co. v.
    California Dev. Co., Bonney v. Tilley) are described only from Berg's parentheticals;
    none was fetched and none is quoted.
11. **Federal authority labelled as such.** AWTR and Moeller are federal bankruptcy
    decisions predicting California law. `insolvdc_federal_reading` says in both body and
    gap that they do not bind California courts and that AWTR's extension of Berg to
    officers, and its derivative-standing analysis, go beyond what Berg decided.

## 4. Normalization applied

Only benign artifacts were normalized, and each affected clause's `gap` says so:
non-breaking spaces converted to ordinary spaces; runs of whitespace introduced by line
wrapping or by the publisher's markup collapsed to single spaces (leginfo inserts hard line
breaks in mid-sentence, and CourtListener puts italicized case names on their own lines);
and, in the opinion text only, the reporter's star-pagination markers (for example "*1041",
"[*1041]") removed where they fall inside a quoted sentence. No word, punctuation mark, or
capital letter was altered in any quote. Curly apostrophes and quotation marks are
reproduced as the sources print them.

## 5. Negative results recorded in the clauses

- Berg itself recorded that as of 2009 there were **no published California cases** relying
  on or postdating *Credit Lyonnais* that decided whether insolvency triggers duties to
  creditors (clause `insolvdc_negative_result_no_prior_case`).
- No **California Supreme Court** decision on the question was located; the Supreme Court
  denied review in Berg on February 3, 2010 (S178524), which decides nothing on the merits.
- Berg addressed **directors**; it did not decide what duties officers owe creditors on
  insolvency. A federal bankruptcy court has since extended the reasoning to officers, which
  the sheet reports as a federal court's prediction, not as California law.
- A federal court applying Berg has stated that **some issues of California law here are not
  settled**; that statement is quoted.
- No case law construing Code Civ. Proc. § 1800 or Corp. Code § 2005 was fetched, and the
  corresponding clauses say that they rest on statutory text alone.
- Amendment status recorded: Code Civ. Proc. § 493.010 last amended 1982 (operative July 1,
  1983); § 1802 added 1992 (effective January 1, 1993) and not since amended; § 1800 last
  amended 2010 (operative July 1, 2012) — i.e. **after** Berg was decided; Corp. Code § 2005
  added 1975 and never amended; Corp. Code § 309 last amended 1987.

## 6. Validation run before committing

A Python check asserted: both data files parse; clause ids unique; document ids unique;
document titles unique corpus-wide; every `clauseOrder` id resolves; every authority clause
has a non-empty `gap` and at least one citation; no orphan clauses; no undeclared `{{field}}`
placeholders in any body or gap; and canonical key order for clauses (`id, title, kind,
status, checkedDate, body, gap, citations` / `id, title, kind, body`), for citations
(`case, cite, url, quote`) and for documents (`id, title, description, categories,
clauseOrder, fields`).

Result: **VALIDATION OK — 721 documents, 6,328 clauses**; this document contributes 15
clauses (12 authority, 3 drafting) and 29 citations, counted from the written file.
