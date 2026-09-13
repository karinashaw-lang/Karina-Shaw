# Verification — Contested Director Elections (Corp. Code § 709) — Information Sheet

Document id: `contested_director_election_709_info_sheet`
Category: Business Formation · Checked date on all authority clauses: 2026-09-13
Clauses: 14 (12 authority, 2 drafting) · Citations: 51

## Coverage check before drafting (HEAD of `data/documents.json`, `data/clauses.json`)

Unicode-safe substring counts over the parsed JSON (the `§` character is escaped by a naive
`json.dumps`, so counts were taken with `ensure_ascii=False`):

| Term | clauses | documents | note |
|---|---|---|---|
| `§ 709` | 2 | 0 | both false positives: `spend_principal_restraint`, `spend_excess_over_needs`, whose "709" is **Code of Civil Procedure § 709.010** (judgment creditor's petition against a trust) |
| `section 709` | 4 | 0 | same four spendthrift-trust clauses, same § 709.010 false positive |
| `validity of the election` | 0 | 0 | |
| `quo warranto` | 0 | 0 | |
| `Escamilla` | 0 | 0 | |
| `Shahin` / `Wawro` | 0 / 0 | 0 / 0 | |
| `Caira` / `Offner` | 0 / 0 | 0 / 0 | |
| `Haah` | 0 | 0 | |
| `Morrical` | 0 | 0 | |
| `Stevens v. Perkins` | 0 | 0 | |
| `Columbia Engineering` | 0 | 0 | |
| `Parlier` | 0 | 0 | |
| `Spencer v. Older` | 0 | 0 | |
| `Clapkin` | 0 | 0 | |
| `§ 5617` | 0 | 0 | |
| `§ 7616` | 1 | 0 | false positive: `ctrlsh_individual_vs_derivative` cites **former Financial Code § 7616** |
| `§ 600(c)` | 0 | 0 | |
| `§ 305(c)` | 0 | 0 | |
| `§ 2116` | 0 | 0 | |
| `Penasquitos` | 0 | 0 | rejected first candidate, see below |

(`provisional director` returned 2 clause hits — `closecorp_deadlock_dissolution` and
`involdissolution_deadlock_provisional_director` — and `§ 2000` returned 23, of which the only
corporate one is the involuntary-dissolution buyout clause. Those are adjacent deadlock topics, not
this one; none of them mentions § 709, the § 709 case law, or court-ordered meetings under
§§ 600(c)/305(c).)

First candidate considered and rejected: post-dissolution survival of claims (Corp. Code §§ 2010,
2011; *Penasquitos, Inc. v. Superior Court*). `Penasquitos` returned 0 hits, but the existing
`corporate_dissolution` document already carries a clause, `corpdiss_continued_existence_and_claims`,
that quotes §§ 2010 and 2011 and states the four-year shareholder-liability rule, so the topic is
partly covered. Moved to the § 709 election-contest topic instead.

## Fetch method

Statutes — two independent hosts:
* **A** `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=…&sectionNum=…`,
  fetched with a Chrome User-Agent, a `Referer: …/faces/codes.xhtml`, and a JSF session cookie
  seeded from `/faces/codes.xhtml` (without the cookie the section body comes back empty).
* **B** `california.public.law/codes/…_section_…`, fetched with a Safari User-Agent (the
  `ca_corp_code_…` slug 301-redirects to `corporations_code_…`).

Opinions — two paths on CourtListener with different User-Agent/header sets:
* **A** `https://www.courtlistener.com/opinion/<cluster>/<slug>/` with a Chrome UA plus
  `Referer: https://www.courtlistener.com/` and a browser `Accept` header (without the Referer the
  server returns an empty HTTP 202).
* **B** the citation redirect `https://www.courtlistener.com/c/<Reporter>/<volume>/<page>/` with a
  Firefox UA. For every opinion below, the two retrievals produced byte-identical extracted text.
* Candidate opinions were located through the public unauthenticated search JSON at
  `/api/rest/v4/search/?type=o&q=…`. The authenticated `/api/rest/v4/opinions/?cluster=…` endpoint
  returned HTTP 401 and was not used.

Slip opinion (*Clapkin*) — two different hosts:
* **A** `https://www.courts.ca.gov/opinions/archive/B340606.PDF`
* **B** `https://storage.courtlistener.com/pdf/2026/03/16/clapkin_v._levin.pdf`
  The two PDFs are byte-identical (md5 `27a20e69f73a9f0070f17365873debac`), and the text extracted
  from each with `pypdf` is identical.

Normalization applied before matching (and disclosed in every clause's `gap`): non-breaking spaces
→ ordinary spaces, soft hyphens dropped, line-wrap whitespace collapsed to single spaces, and
reporter star-pagination markers (e.g. `*460`) removed where they fall inside a quoted sentence. No
word, punctuation mark, or capital letter was altered. Two quoted passages do span a page break and
are pin cited to both pages (*Morrical* at 459-460; *Spencer* at 102-103).

Pin cites were read off the star pagination in the fetched text, not from memory: for each quote the
last `*NNN` marker preceding the quote was computed programmatically, and any marker falling inside
the quote was reported so the cite could be given as a page range.

## Per-source result

| Source | Fetch A | Fetch B | Comparison | Quotes used |
|---|---|---|---|---|
| Corp. Code § 709 | leginfo 200 | public.law 200 | identical on all quoted text | 4 |
| Corp. Code § 600 | leginfo 200 | public.law 200 | identical on quoted text; see disclosure 1 | 2 |
| Corp. Code § 601 | leginfo 200 | public.law 200 | identical on quoted text; see disclosure 1 | 3 |
| Corp. Code § 305 | leginfo 200 | public.law 200 | identical on quoted text | 3 |
| Corp. Code § 185 | leginfo 200 | public.law 200 | identical | 1 |
| Corp. Code § 5617 | leginfo 200 | public.law 200 | identical | 2 |
| Corp. Code § 7616 | leginfo 200 | public.law 200 | identical | 3 |
| Code Civ. Proc. § 803 | leginfo 200 | public.law 200 | identical | 1 |
| Code Civ. Proc. § 389 | leginfo 200 | public.law 200 | identical on quoted spans; see disclosure 2 | 2 |
| *Lawrence v. I. N. Parlier Estate Co.* (1940) 15 Cal.2d 220 | CL opinion page 200 (after two 202s; retried with in-turn sleeps) | `/c/Cal. 2d/15/220/` 200 | byte-identical text | 1 |
| *Columbia Engineering Co. v. Joiner* (1965) 231 Cal.App.2d 837 | CL opinion page 200 | `/c/Cal. App. 2d/231/837/` 200 | byte-identical text | 3 |
| *Stevens v. Perkins* (1979) 93 Cal.App.3d 69 | CL opinion page 200 (after 202s) | `/c/Cal. App. 3d/93/69/` 200 | byte-identical text | 2 |
| *Spencer v. Older* (1982) 133 Cal.App.3d 95 | CL opinion page 200 | `/c/Cal. App. 3d/133/95/` 200 (after 202s) | byte-identical text | 5 |
| *Shahin v. Wawro* (1982) 136 Cal.App.3d 749 | CL opinion page 200 | `/c/Cal. App. 3d/136/749/` 200 | byte-identical text | 4 |
| *Haah v. Kim* (2009) 175 Cal.App.4th 45 | CL opinion page 200 | `/c/Cal. App. 4th/175/45/` 200 | byte-identical text | 4 |
| *Morrical v. Rogers* (2013) 220 Cal.App.4th 438 | CL opinion page 200 | `/c/Cal. App. 4th/220/438/` 200 | byte-identical text | 8 |
| *Clapkin v. Levin* (2026) slip opn., No. B340606 | courts.ca.gov PDF 200 | storage.courtlistener.com PDF 200 | byte-identical PDFs and extracted text | 1 |

Every one of the 51 `citations[].quote` strings was re-read out of the written
`data/clauses.json` after the merge and re-tested as a verbatim substring of **both** normalized
fetches: **51 pass, 0 fail.**

## Things disclosed rather than fixed

1. **Two mirrors of §§ 600 and 601 disagree on a cross-reference parenthetical.** leginfo reads
   "(Sections 20 and 21)"; california.public.law reads "(Section 20 and 21 )" — apparently an
   artifact of that site's automatic linking of section numbers. The difference lies outside the
   text quoted in the clauses; it is stated in the `gap` of
   `elect709_meeting_notice_defects` rather than being smoothed over.
2. **Two mirrors of Code Civ. Proc. § 389 differ in enumeration spacing** ("(1) in" / "(2) he" vs
   "(1)in" / "(2)he"). The quoted spans were chosen to fall outside the enumerations and are
   identical in both; the discrepancy is recorded in the `gap` of
   `elect709_joinder_of_absent_parties`.
3. **§ 5617(d) is narrower than § 7616(d) and § 709(c).** The public benefit corporation provision
   omits the power to determine "the validity, effectiveness and construction of voting agreements
   and voting trusts," which both of the other two contain; and § 5617(a) has a comma ("any director
   or member, or by any person") where § 7616(a) has none. Both mirrors agree on both differences.
   Reported in the `gap` of `elect709_nonprofit_counterparts`; § 5617(d) is described, not quoted.
4. **Morrical's reproduction of Columbia does not match Columbia's own text.** At 220 Cal.App.4th
   455 *Morrical* renders the sentence as "[Although summary in nature, the actions provided for by
   [section 709 predecessor statutes] were not intended . . . merely to determine [the] technical
   and procedural questions involved in a corporation election." *Columbia*'s own text (231
   Cal.App.2d 844) reads "…were not intended to be, as contended by defendants, merely to determine
   technical and procedural questions…" — with no "the." The opening "[Although" also appears where
   a bracketed alteration "[A]lthough" would be expected, which looks like scanning damage in the
   fetched *Morrical* text. Because of this, the sentence is quoted in
   `elect709_grounds_not_limited` from *Columbia* itself (independently fetched) and not through
   *Morrical*, and the divergence is stated in that clause's `gap`.
5. **Shahin's fetched text says "section 609" where the context is section 709.** Both retrievals of
   *Shahin* read "Shahin's section 609 cause of action remained intact" in the paragraph after the
   passages quoted here. Whether that is an error in the original reporter or damage introduced in
   scanning could not be determined from the sources reachable here. No quotation is taken from that
   sentence, and the defect is recorded in the `gap` of `elect709_limits_on_scope`.
6. **Lawrence reads "all matter necessary," in the singular.** The Supreme Court sentence quoted in
   `elect709_equitable_and_summary` contains "and also all matter necessary to a just direction of
   the relief required in each instance." Both retrievals read it that way; it is quoted as-is and
   flagged in the `gap` rather than corrected to "all matters."
7. **OCR damage elsewhere in the scanned opinions.** The CourtListener texts of *Morrical*,
   *Shahin*, *Spencer* and *Columbia* contain visible scanning artifacts outside the quoted
   passages — e.g. "breách of fiduciary duty," "Griff ths," "[njone," "not readily amendable to
   summary proceedings" (for "amenable"), "sháreholder," "the adjourned, meeting," and braces in
   place of parentheses in citation signals. Every quoted sentence was checked character by
   character against both fetches and is free of these; the general warning is carried in each
   affected clause's `gap`.
8. **Clapkin has no official reporter pagination in the copies fetched**, so no pin cite is given
   for it — the `cite` field records the court, docket number, and filing date and says so
   explicitly. Its subsequent history was not checked.
9. **Quotation-within-quotation.** The *Shahin* sentence quoted in `elect709_equitable_and_summary`
   contains, inside it, language *Shahin* took from *Boericke v. Weise* (1945) 68 Cal.App.2d 407,
   which was not independently fetched; the `gap` says the *Boericke* language is reproduced only as
   *Shahin* reproduces it. Likewise, *Haah*'s "wide discretion" sentence introduces a quotation of
   *Lawrence*; *Lawrence* is quoted in this sheet directly from *Lawrence*, not through *Haah*.

## Negative results recorded in the clauses

* No counterpart to § 709 was located in the LLC act; `elect709_who_may_sue` says so and makes no
  claim about how an LLC manager-election dispute is litigated.
* No decision construing § 600(c) or § 305(c) was located in this research; the
  `elect709_court_ordered_meetings` clause therefore rests on statutory text alone and says so.
* No California Supreme Court decision construing § 709 itself was located — *Lawrence* construed
  the predecessor Civil Code § 315 — and review in *Morrical* was denied (S214723, Jan. 21, 2014)
  rather than granted; the `gap` of `elect709_grounds_not_limited` records that the Supreme Court
  has not decided whether fiduciary-duty grounds may be litigated under § 709.
* § 709 does not identify a limitations period, and *Spencer*'s rejection of laches was made on that
  record; the `gap` of `elect709_meeting_notice_defects` records both points.
* *Haah* did not decide whether a claimed right to vote must be made in good faith or may be tested
  at the threshold, and forfeited the appellant's challenge to the appointment of directors, so it
  contains no standard for appointing replacement directors. Recorded in
  `elect709_standing_beneficial_holders`.

## Post-merge corpus validation

Assertions run over the whole corpus after the append: both files parse; clause ids unique; document
ids unique; document titles unique; every `clauseOrder` entry resolves to a clause; every authority
clause has a non-empty `gap` and at least one citation; no orphan clauses; every `{{field}}` used in
any clause body or gap is declared in the owning document's `fields`; key order canonical for
clauses (`id, title, kind, status, checkedDate, body, gap, citations`), drafting clauses
(`id, title, kind, body`), citations (`case, cite, url, quote`) and documents
(`id, title, description, categories, clauseOrder, fields`).

Result: **structural checks PASS**; corpus totals after merge — 713 documents, 6208 clauses.
Quote re-verification from the written file: **51 / 51 verbatim in both fetches.**
