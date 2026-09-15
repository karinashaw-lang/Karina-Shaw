# Verification — Tax-Defaulted Property Sales and the Tax Collector's Deed

Document id: `tax_defaulted_property_sale_info_sheet`
Category: Real Estate. Checked 2026-09-15.
15 clauses (13 authority, 2 drafting), 48 citations. Clause id prefix `taxdefsale_`.

## Why the topic was uncovered

The Real Estate category held 93 documents before this one. Two of them — the Real Estate
Transfer Disclosure Statement sheet (`tds_exemptions`) and the smoke alarm / CO device sheet
(`detectorcompliance_smoke_alarm_exemptions`) — each quote a statutory exemption for
"Sales or transfers under Chapter 7 (commencing with Section 3691) ... of Part 6 of Division 1
of the Revenue and Taxation Code." Both carve the tax sale out; neither says what it is. The
title insurance sheet's `titleins_no_duty_to_issue` clause describes Quelimane as a case about
insuring property "whose chain of title includes a tax deed," again assuming the sale. The
corpus therefore had three documents standing around the tax sale and nothing inside it.

Greps over `data/clauses.json` before the edit (counts are raw `grep -ic` line hits across the
whole 736-document corpus, all categories):

| term | hits | inspection |
| --- | --- | --- |
| `tax-defaulted` | 2 | both are the adjacency described above (TDS/detector exemption list; Quelimane in the title insurance sheet). Neither states any rule of Chapter 7. |
| `tax deed` | 1 | the same Quelimane clause. |
| `tax sale` | 0 | — |
| `excess proceeds` | 0 | — |
| `3712` | 1 | **false positive**: the substring appears inside "opinion id 9371215" in `mandatoryarb_ninth_circuit_preemption`. |
| `3691` | 2 | both inside the quoted exemption lists described above — a recorded carve-out, not coverage. |
| `3701` | 48 | **all false positives**: 42 are `23701` (Rev. & Tax. Code § 23701, tax-exempt entities) and 20 are `1133701` (a CourtListener opinion id); none is § 3701. |
| `3707`, `3708` | 5, 8 | **all false positives**: Labor Code §§ 3707/3708 in `wcinsurance_employee_civil_remedy`. |
| `3711`, `3725` | 0, 0 | — |
| `3726` | 6 | **all false positives**: CourtListener opinion ids 1163726 / 1037269 discussion. |
| `3731` | 2 | **false positive**: Rev. & Tax. Code § 23731 in `taxexemptapp_state_application_pathways`. |
| `4674` / `4675` | 9 / 3 | **all false positives**: Probate Code §§ 4674-4675 (advance health care directive witnesses). |
| `Rev. & Tax. Code § 3…` | 0 | no Part 6 section is cited anywhere in the corpus. |

## Sources fetched

### Statutes — leginfo + law.onecle.com (genuinely independent publishers)

Fetched 2026-09-15. leginfo: JSF session cookie seeded from `/faces/codes.xhtml`, then
`codes_displaySection.xhtml?lawCode=RTC&sectionNum=<n>.` for §§ 3691, 3692, 3701, 3702, 3707,
3708, 3711, 3712, 3725, 3726, 3731, 4674, 4675 (all HTTP 200). onecle:
`https://law.onecle.com/california/taxation/<n>.html` for the same thirteen sections (all HTTP 200;
`/california/revenue/<n>.html` returns 404 and was not used).

Full-section diff (whitespace-normalized), leginfo vs onecle's 2017 snapshot:

* **Identical, character for character**: §§ 3702, 3708, 3711, 3712, 3725, 3726, 3731, 4674.
* **Differ (amended after the snapshot)**: §§ 3691 (Stats. 2018, ch. 119, SB 1506), 3692
  (Stats. 2022, ch. 451, SB 1494), 3701 (SB 1506), 3707 (Stats. 2018, ch. 284, AB 2746),
  4675 (Stats. 2022, ch. 451 and Stats. 2024, ch. 123, AB 3288).

For the five amended sections the Legislative Counsel's **chaptered bill text** was fetched as
corroboration and is disclosed in the affected clause gaps as *the same publisher in a different
document*: `billTextClient.xhtml?bill_id=` 201720180SB1506, 201720180AB2746, 202120220SB1494,
202320240AB3288 (all HTTP 200).

Result per quotation (all 48 re-checked out of the written `data/clauses.json`):

* §§ 3691(a)(1)(A) (two sentences), 3692(a), 3701(a) (two sentences), 3701(c), 3702(a) (two
  sentences), 3707(d), 3708, 3711, 3712 opening and subds. (b), (d), (e), (g), 3725(a),
  3725(a)(1), 3726, 3731(a), (d), (g), 4674, 4675(e)(1)(A), 4675(e)(1)(B) — **verbatim in both
  leginfo and onecle**. The 2018/2022 amendments to §§ 3691, 3692 and 3701 did not touch the
  sentences quoted, which is why the 2017 snapshot still matches; each was additionally confirmed
  against the chaptered bill text.
* § 3707(a)(1) and § 3707(e) — **leginfo + AB 2746 chaptered text only**. Disclosed in the gap:
  onecle's 2017 text of (a)(1) reads "prior to the date of the sale" where current law reads
  "prior to the commencement date of the tax sale," and subdivision (e) did not exist in 2017.
  This is a real substantive change between the snapshot and current law, reported, not smoothed.
* § 4675(a)(1) and § 4675(g) — **leginfo + AB 3288 chaptered text only**. Disclosed in the gap:
  onecle's 2017 text reads "in proportion to his or her interest" where current law reads
  "in proportion to that person's interest" (the 2024 amendment).

california.public.law was not used at all; each affected gap records that it prints a "Source:"
line naming leginfo and is at best a third copy of the same publisher.

### Case law

**Leiper v. Gallegos (2019) 42 Cal.App.5th 394** — two genuinely independent publications:
CourtListener cluster 4680267 (HTML, fetched with browser UA + `Referer: courtlistener.com`) and
the official **courts.ca.gov slip PDF** for docket B292905
(`https://courts.ca.gov/opinions/archive/B292905.PDF`, HTTP 200 after the 301 to `www4`, 17 pp.).
The PDF was extracted with **both pypdf 6.18.1 and pdfminer.six 20260107**; normalized lengths
identical (27,393 chars), all 25 opcode differences are footnote/page-number ordering only, and
the two extractions agree on every quoted sentence.

*Disclosed defect (not corrected):* a word-level diff of the two publications shows CourtListener's
HTML printing `"Theincorporeal hereditament of common` in footnote 4 with no space after the
opening quotation mark, where the official slip PDF prints `"The incorporeal hereditament of
common`. Confirmed present in the raw fetched HTML (`grep` on `cl_4680267.html`), so it is in the
record CourtListener serves, not an extraction artifact. That passage is not quoted.

*Pin cite withheld.* Both available publications are slip copies with no star pagination.
The reporter citation 42 Cal.App.5th 394 is not in CourtListener's citation index
(`/c/cal-app-5th/42/394/` → HTTP 404); it is taken from the same court's later opinion in the same
litigation, CourtListener cluster 5106260 (filed 2021-09-23), whose text reads
"Leiper v. Gallegos (2019) 42 Cal.App.5th 394, 398-401." The clause's `cite` field says why no
pin cite is given. The opinion writes "Revenue and Taxation Code 3712, subdivision (d)" without
the word "section" in one quoted sentence; both publications print it that way, and the gap says so.

**Carloss v. County of Alameda (2015) 242 Cal.App.4th 116** — two genuinely independent
publications: CourtListener cluster 3154412 (text of the Official Reports, with star pagination)
and the official courts.ca.gov slip PDF for docket A143531 (HTTP 200, 17 pp.), extracted with both
pypdf and pdfminer.six (35,286 / 35,282 normalized chars; all 33 opcode differences are
footnote/page-number ordering; agreement on every quoted sentence).

*Disclosed defects, running in **both** directions — none corrected, none quoted:*

| passage | CourtListener (Official Reports) | courts.ca.gov slip |
| --- | --- | --- |
| § 4675(g) discussion | "not included **iq** section 4675" | "not included **in** section 4675" |
| quoting § 4675(e)(1) | `"[Pjarties of interest` | `"[P]arties of interest` |
| quoting the prayer | `plaintiff'` (single closing quote) | `plaintiff"` (double) |
| due process argument | "**irrebuttable** presumption" | "**irrebutable** presumption" (slip misspells) |
| quoting Blank v. Kirwan | "cured by amendment**;** if it can be" | "cured by amendment**:** if it can be" |

The "iq" reading was confirmed to be in the record and not in extraction by an exact-phrase query
against CourtListener's own index restricted to the cluster:
`q=cluster_id:3154412 AND "not included iq section 4675"` → **count 1**;
`q=cluster_id:3154412 AND "not included in section 4675"` → **count 0**.
`/c/cal-app-4th/242/116/` resolves (302) to cluster 3154412, confirming the reporter citation
points at the right case. Pin cites (pp. 124, 128, 130) are taken from the star pagination in the
Official Reports copy; the slip PDF carries none, and the clause's third `cite` field says so.

**Mayer v. L&B Real Estate (2008) 43 Cal.4th 1231** — **one publisher only**. The courts.ca.gov
opinions archive returns HTTP 404 for docket S142211 (both `/archive/` and `/documents/`), and
Justia, FindLaw, Google Scholar, case.law, casetext and leagle are egress-blocked from this
environment. Quotations rest on CourtListener cluster 1801641; `/c/cal-4th/43/1231/` resolves
(302) to that same cluster, which checks that the citation points at the right case but is not a
second publication. *Disclosed defect (not quoted):* where the opinion quotes former § 3725 the
fetched copy prints `of'` with a single closing quotation mark in place of a double. Pin cites
1237, 1238, 1240 taken from star pagination in that copy.

**Marion Drive, LLC v. Saladino (2006) 136 Cal.App.4th 1432** — **one publisher only**. The
courts.ca.gov archive returns HTTP 404 for docket B182727. Quotations rest on CourtListener
cluster 2280933; `/c/cal-app-4th/136/1432/` resolves (302) to that cluster. *Disclosed scan
corruption in that copy (not corrected, not quoted):* it prints "The Gibson **Tmst** claims" once,
against thirteen occurrences of "Gibson Trust" elsewhere in the same opinion, and prints the
statutory range as "§§ 4671-**^**4673.1" with a stray caret. Both are present in the fetched HTML.
An exact-phrase index query `q=cluster_id:2280933 AND "Gibson Tmst"` returned **count 0**, i.e. the
search index and the served document do not agree; that discrepancy is recorded in the clause gap
rather than resolved. The clause also records that Marion Drive cites § 4675 subds. (e)(1) and
(e)(2) under the pre-2011 numbering, where current law uses subd. (e)(1)(A) and (B).

## Negative results recorded

* `q="Revenue and Taxation Code section 3731"` (cal + calctapp) → **count 0**. No published
  California opinion using that phrase was located; recorded in the § 3731 clause gap.
* `q="section 3712" "Internal Revenue Service"` → the API returned **`count: null`** (an error, not
  a zero). Re-run shorter as `q="section 3712" "Internal Revenue"` → **count 1** (Quelimane only).
  Both the error and the re-run are recorded in the § 3712 clause gap.
* `q="Revenue and Taxation Code section 3707"` → returned **`count: null`**; re-run shorter as
  `q="section 3707" redemption` → **count 5**.
* `q="section 3711" "conclusive evidence"` → **count 15**; none quoted, because none was fetched and
  diffed against a second publication. Recorded in the §§ 3708/3711 clause gap.
* Mayer construes the pre-2011 version of § 3725; the petition-to-the-board precondition was added
  by Stats. 2011, ch. 288 (AB 261) and applies to sales completed on or after January 1, 2012.
  Recorded in both the §§ 3725/3726 clause and the Mayer clause.

## Normalization disclosed in every affected gap

Runs of whitespace collapsed to a single space; non-breaking spaces and soft hyphens replaced;
ligatures normalized in PDF extraction. Needed because the publishers break sentences across
source lines at different points and the PDFs wrap. **Curly apostrophes and quotation marks were
left exactly as the sources print them and were not converted** — both leginfo and onecle use
U+2019, so no typographic normalization was required for the statutes.

## Validation

`python3 tools/validate_corpus.py` → `737 documents / 6565 clauses (4942 authority, 1623 drafting),
11493 citations` — `validation passed`. Real Estate: 94.

All 48 citation quotes were re-read out of the written `data/clauses.json` after the append and
re-checked as verbatim substrings of the fetched sources: **48 checked, 0 failures.** Clause split
counted from the written file: **13 authority, 2 drafting.** All 13 authority gaps non-empty. All
six `{{field}}` names used in bodies and gaps are declared in the document's `fields`.
`git diff --stat` shows insertions only (443 + 63 lines), no existing clause or document touched.
