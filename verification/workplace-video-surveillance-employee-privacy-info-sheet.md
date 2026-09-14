# Verification — Covert Video Surveillance of Employees and the California Right of Privacy

Document id: `workplace_video_surveillance_employee_privacy_info_sheet`
Category: During employment (California law)
Clause id prefix: `wsurv_`
Checked: 2026-09-14

14 clauses (11 authority, 3 drafting), 33 citation quotes across 6 sources.

---

## 0. Coverage check before drafting

Greps run against `data/documents.json` and `data/clauses.json` at HEAD
(`origin/claude/new-session-palh5c`, 716 documents / 6,254 clauses):

| term | doc hits | clause hits | disposition |
|---|---|---|---|
| `Hernandez v. Hillsides` | 0 | 0 | uncovered |
| `Hillsides` | 0 | 0 | uncovered |
| `intrusion upon seclusion` | 0 | 0 | uncovered |
| `Shulman v. Group W` | 0 | 0 | uncovered |
| `Sanders v. American Broadcasting` | 0 | 0 | uncovered |
| `surveillance` | 0 | 0 | uncovered |
| `highly offensive` | 0 | 0 | uncovered |
| `Hill v. National Collegiate` | 1 | 3 | inspected — see below |
| `reasonable expectation of privacy` | 0 | 4 | inspected — see below |
| `camera` | 0 | 12 | inspected — all false positives |
| `suitable seats` / `Kilby` | 1 / 3 | 5 / 17 | first candidate, already covered; abandoned |
| `McCarther` / `kin care` | 1 / 4 | 10 / 34 | second candidate, already covered; abandoned |

Hits inspected rather than counted:

- `Hill v. National Collegiate` — all hits are in one document,
  `drug_testing_info_sheet`, and one clause, `drugtest_hill_private_employer_privacy`.
  That clause quotes only a sentence from the **separate opinion** in *Hill* for the
  narrow proposition that article I, section 1 reaches private parties, and its own
  `gap` states that the full *Hill* framework "could not independently re-verify … the
  specific test a later court applies" because CourtListener was rate-limited. So *Hill*'s
  three-element framework and its balancing analysis were not in the corpus.
- `reasonable expectation of privacy` — two clauses. `drugtest_hill_private_employer_privacy`
  (above) and `monitoring`, a generic handbook clause whose only citations are
  *Smyth v. Pillsbury Co.* (E.D. Pa. 1996) and *Stengart v. Loving Care Agency* (N.J. 2010) —
  out-of-state, about e-mail and personal webmail, and expressly labelled in its own gap as
  "two states' court decisions … not a claim about which state's law actually governs".
  No California authority, and nothing about visual monitoring.
- `camera` — 12 clause hits, all false positives: they are hits on *in camera* (the Latin
  phrase) in family-law, peer-review and protective-order clauses
  (`minorscounsel_cps_records_access`, `ts2019210_protective_order_secrecy_preservation`,
  `minormarriage_interview_and_report_process`, `hsw1278_5_peer_review`,
  `evid1061_protective_order_standard`, `evid1062_scope_review_and_transcript`).
- Numeric greps such as `1051`, `1052`, `1053`, `1026`, `1028` returned dozens of hits that
  are reporter page numbers inside existing citations, not statute sections; those candidate
  topics were dropped for that reason rather than on the raw counts.

Two earlier candidates were abandoned as already covered: seating under the wage orders
(*Kilby v. CVS Pharmacy*) and kin-care leave (*McCarther v. Pacific Telesis Group*).

---

## 1. Fetch paths, per source

### 1.1 *Hernandez v. Hillsides, Inc.* (2009) 47 Cal.4th 272 — CourtListener cluster 1801890

- **Fetch A** — `https://www.courtlistener.com/opinion/1801890/hernandez-v-hillsides-inc/`,
  Chrome/125 User-Agent, `Referer: https://www.courtlistener.com/`. HTTP 200, 161,232 bytes.
- **Fetch B** — reporter-citation redirect `https://www.courtlistener.com/c/Cal.%204th/47/272/`,
  Firefox/127 User-Agent, same Referer, `-L`. HTTP 200, 161,232 bytes.
- **Comparison** — extracted texts byte-identical (`md5 e98101d3c2a8e0d030d8245c2077a7c3`, 75,494 chars).
- **Star pagination** — present as `*276` … `*301`, monotonic through the body. Every pin cite in
  this sheet was taken from the nearest preceding marker, not from memory.
- **Third, index-level check** — every quoted sentence was re-confirmed with
  `q=cluster_id:1801890 AND "<phrase>"` against the public search JSON API; each returned
  `count: 1`. This is a separately built index over the stored opinion, so it rules out an
  artifact of the HTML-to-text extraction performed here.

### 1.2 *Hill v. National Collegiate Athletic Assn.* (1994) 7 Cal.4th 1 — cluster 1235436

- **Fetch A** — `/opinion/1235436/hill-v-national-collegiate-athletic-assn/`, Chrome/125. HTTP 200, 504,272 bytes.
- **Fetch B** — `/c/Cal.%204th/7/1/`, Firefox/127. HTTP 200, 504,272 bytes.
- **Comparison** — identical (`md5 4d3504b4a4fd7b96149c53a8f7952278`, 302,529 chars).
- **Pagination** — the `star-pagination` markup is absent from this rendering (one span only),
  but inline markers `*8` … `*110` are present in the body text and were used for pin cites.
- **Index check** — all four quoted spans returned `count: 1`.

### 1.3 *Shulman v. Group W Productions, Inc.* (1998) 18 Cal.4th 200 — cluster 1242947

- **Fetch A** — `/opinion/1242947/shulman-v-group-w-productions-inc/`, Chrome/125. HTTP 200, 264,498 bytes.
- **Fetch B** — `/c/Cal.%204th/18/200/`, Firefox/127. HTTP 200, 264,498 bytes.
- **Comparison** — identical (`md5 f4e5efe6dbef80b2046768f131e007bd`, 139,823 chars).
- **Pagination** — inline markers `*206` … `*252`; pin cites 231, 232, 237 taken from them.
- **Index check** — all three quoted spans returned `count: 1`.

### 1.4 *Sanders v. American Broadcasting Companies* (1999) 20 Cal.4th 907 — cluster 1133646

- **Fetch A** — `/opinion/1133646/sanders-v-american-broadcasting-companies/`, Chrome/125. HTTP 200, 118,255 bytes.
- **Fetch B** — `/c/Cal.%204th/20/907/`, Firefox/127. HTTP 200, 118,255 bytes.
- **Comparison** — identical (`md5 20bb1522961879e20063d8147abf7f50`, 51,426 chars).
- **Pagination** — `star-pagination` spans `*910` … `*927`; pin cites 916 and 923 taken from them.
- **Index check** — both quoted spans returned `count: 1`.

### 1.5 California Constitution, article I, section 1

- **Fetch A** — Legislative Counsel, `leginfo.legislature.ca.gov`,
  `codes_displayText.xhtml?lawCode=CONS&article=I`, with a JSF session cookie seeded from
  `/faces/codes.xhtml` (without the cookie the section body returns empty). 189,251 bytes.
  A first attempt at the per-section URL (`codes_displaySection.xhtml?lawCode=CONS&sectionNum=SEC.%201.&article=I`)
  returned a page with no section body; that attempt is recorded here and was discarded in
  favour of the whole-article page.
- **Fetch B (second publisher)** — the same sentence as reproduced by the California Supreme
  Court in *Hill*, 7 Cal.4th at p. 15, from the independent fetch described at 1.2.
  (`california.public.law` has no page for the state constitution: `/constitution/article_i_section_1`
  returns 404.)
- **Comparison** — the two renderings of the sentence are identical, word for word and
  punctuation mark for punctuation mark.

### 1.6 Labor Code section 435

- **Fetch A** — Legislative Counsel, `codes_displaySection.xhtml?lawCode=LAB&sectionNum=435.`,
  seeded session cookie, Chrome/125. 164,369 bytes.
- **Fetch B** — `california.public.law/codes/ca_lab_code_section_435` (301 → `/codes/labor_code_section_435`),
  Firefox/127. HTTP 200, 19,109 bytes.
- **Comparison** — subdivisions (a), (b) and (c) identical in both. The second publisher places
  each subdivision letter on its own line; line breaks and runs of spaces were collapsed before
  comparison. Both agree the section was added by Stats. 1998, ch. 515, § 1, effective Jan. 1, 1999.

### 1.7 Hosts that could not be reached (recorded as a negative result)

No second publisher of California Supreme Court opinions was reachable from this environment.
Probed and refused: `law.justia.com` (403), `caselaw.findlaw.com` (403), `scocal.stanford.edu`
(proxy CONNECT rejected), `casemine.com`, `vlex.com` (CONNECT rejected), and
`www.courts.ca.gov/opinions/archive/S147552.PDF` and `/opinions/documents/S147552.PDF`
(both 404 — the official archive no longer carries 2009 slip opinions).
Consequently, Fetches A and B for the four opinions resolve to the same stored CourtListener
record, and the index-level phrase check described above is what stands in for a genuinely
independent second publisher. This limitation is disclosed in the `gap` of every clause that
quotes an opinion.

---

## 2. Defects disclosed rather than corrected

### 2.1 *Hernandez* prints the wrong reporter series for *Shulman*

At 47 Cal.4th 272, 295, in the sentence introducing the offensiveness factors, the retrieved
text reads:

> ( Shulman, supra, 18 Cal.3d 200, 236 , quoting and following Miller, supra, 187 Cal.App.3d
> at pp. 1483-1484.)

*Shulman v. Group W Productions, Inc.* is reported at **18 Cal.4th 200**, and the same opinion
cites it correctly as "18 Cal.4th 200" in eleven other places. Both independent fetch paths show
`Cal.3d` at this one spot, and `q=cluster_id:1801890 AND "Cal.3d"` returns `count: 1`, confirming
the string is in the stored record and not an extraction artifact. Because no second publisher was
reachable, it could not be determined whether the misprint originates in the Official Reports or in
this publisher's rendering of them. **Not corrected.** No quotation in this sheet is taken from that
sentence. Disclosed in the `gap` of `wsurv_hernandez_framework` and cross-referenced from
`wsurv_offensiveness_element`.

### 2.2 *Hill* prints a damaged sentence at page 50

At 7 Cal.4th 1, 50, immediately after the passage this sheet quotes, the retrieved text reads:

> Nothing in the language of history of the Privacy Initiative justifies the imposition of such a
> burden; we decline to impose it.

"language of history" is not idiomatic; the sense requires "language **or** history". The
California Supreme Court itself, citing this very page in *Hernandez*, describes *Hill* as
"invoking language **and** history of state constitutional privacy provision".
`q=cluster_id:1235436 AND "language of history"` returns `count: 1`, confirming the string is in
the stored record. **Not corrected, and not quoted.** The quotation taken from page 50 stops at the
preceding sentence. Disclosed in the `gap` of `wsurv_hill_balancing`.

### 2.3 *Shulman* carries a scanning defect in the paragraph quoted from

At 18 Cal.4th 200, 232, the retrieved text prints `[Tjhere is no liability for the examination of a
public record` — a scanned lowercase `j` where a capital `T` belongs inside the bracket.
**Not corrected.** No quotation in this sheet is taken from the defective sentence; the quotation
from page 232 is the later sentence beginning "To prove actionable intrusion". Disclosed in the
`gap` of `wsurv_common_law_intrusion`.

### 2.4 *Hernandez* footnotes are relocated and the page markers stop tracking

The rendering moves all footnotes into a block after the Conclusion, and the page markers inside
that block do **not** continue the body's pagination: after the body reaches `*301`, the footnote
block reverts to `*293` and `*295`. Accordingly **no quotation in this sheet is taken from a
footnote and no footnote is pin cited.** Disclosed in the `gap` of `wsurv_hernandez_disposition`.

### 2.5 *Hernandez* alters *Shulman*'s wording when quoting it

At 47 Cal.4th 272, 287, *Hernandez* renders *Shulman*'s sentence as "California tort law provides
no bright line on ['offensiveness']; each case must be taken on its facts." *Shulman* itself prints
"no bright line on **this question**". The bracketed substitution is proper quoting convention, not
an error, but this sheet quotes *Shulman*'s own wording and records the difference in the `gap` of
`wsurv_common_law_intrusion` so the two forms are not confused.

### 2.6 Minor artifacts noted, not quoted

At 47 Cal.4th 272, 288 the retrieved text prints `(Ibid:,` where `(Ibid.;` is expected — an OCR
artifact in a citation parenthetical. Not quoted.

---

## 3. Normalization applied

Only whitespace and page markers were normalized, and the affected clauses say so:

- **Whitespace** — the renderings break lines around italicized case names and inserted citation
  links. Runs of spaces, non-breaking spaces and line breaks were collapsed to single spaces before
  comparison. Text was NFKC-normalized and the Unicode hyphen U+2010 mapped to `-`. Curly quotation
  marks and apostrophes are reproduced exactly as the sources print them.
- **Page-break markers** — three quotations straddle a page break, and the inline marker sitting
  mid-sentence was removed before comparison. These are pin cited as page ranges:
  - *Hill*, pp. 39-40 (marker `*40` between "legally" and "protected") — `wsurv_hill_three_elements`
  - *Hernandez*, pp. 286-287 (marker `*287` between "this" and "court") — `wsurv_hernandez_workplace_expectations`
  - *Hernandez*, pp. 299-300 (marker `*300` between "legitimate" and "objectives") — `wsurv_hill_balancing`

No words were added, removed or changed in any quotation.

## 3a. Phrase query re-run recorded

The index check for the *Sanders*-factors sentence in *Hernandez* first used the opening twelve
words and returned `count: 0` — because the `*287` page marker sits inside that span in the stored
text. The query was re-run on the shorter span
`"linked the reasonableness of privacy expectations to such factors as"` and returned `count: 1`.
This re-run is recorded in the `gap` of `wsurv_hernandez_workplace_expectations`.

Two further index queries returned a parser error rather than a count (spans containing `(2)` and
spans of the form `18 Cal.4th 200, 231`); those were re-run as shorter spans
(`"identity of the intruder"` → `count: 1`; `"Cal.3d"` → `count: 1`) and are recorded here.

---

## 4. Negative results recorded in the clauses

- **No case law construing Labor Code section 435** was located; the clause says so, and says that
  the meaning of "room designated by an employer for changing clothes" and of the court-order
  exception are therefore unconstrued here.
- ***Katzberg v. Regents*** left open whether the constitutional privacy provision supports a
  damages remedy standing alone; *Hernandez* notes this and does not resolve it. Recorded in
  `wsurv_hill_three_elements`.
- ***Sanders*** expressly adopted no per se doctrine of privacy and decided only the reasonableness
  element, not offensiveness. Recorded in `wsurv_sanders_not_all_or_nothing`.
- ***Hernandez*** decides nothing about public employers, nothing about what a differently worded
  monitoring policy would do, and imposes no notice requirement despite its closing caveat.
  Recorded in `wsurv_hill_balancing`, `wsurv_hernandez_enclosed_office` and `wsurv_notice_and_consent`.
- **Intermediate-court and out-of-state authority** — *Hernandez* builds its workplace spectrum on
  Court of Appeal, federal district and out-of-state decisions (*Wilkins*, *Sacramento County Deputy
  Sheriffs' Assn.*, *Trujillo*, *Doe*, *Liberti*, *Meche*, *Marrs*, *Melder*, *Acosta*, *Wolfson*).
  **None of them is quoted in this sheet**, and `wsurv_hernandez_workplace_expectations` says so
  expressly; only sentences written by the California Supreme Court are quoted.

---

## 5. Post-merge validation

`validate.py` over the merged corpus:

```
clauses: 6268 documents: 717
authority clauses: 4691
total citations: 10703
FAILURES: 0
```

Checks asserted: both files parse; clause ids unique; document ids unique; document titles unique
corpus-wide; every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and at
least one citation; no orphan clauses; no undeclared `{{field}}` placeholders in any clause body or
gap; canonical key order for clause objects, citation objects and document objects.

`reverify.py` re-read all 33 quotes back out of the written `data/clauses.json` and compared each
against **both** fetched source texts:

```
quote re-verification: PASS 33 / FAIL 0
```

30 matched as exact substrings of both fetches; 3 matched after removal of the mid-sentence page
marker described in section 3 and are pin cited as page ranges.
