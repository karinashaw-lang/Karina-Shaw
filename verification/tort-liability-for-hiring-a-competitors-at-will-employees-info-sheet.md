# Hiring, new document: Tort Liability for Hiring a Competitor's At-Will Employees — Information Sheet

Document id: `hiring_competitors_at_will_employees_info_sheet`
Clause id prefix: `atwillraid_`
Clauses: 15 (12 authority, 3 drafting). Citations: 25.
Checked date on all authority clauses: 2026-09-14.

## Why this topic

The corpus had 90 Hiring documents and ~716 documents overall at HEAD
(`3aa917d`). Grep counts at HEAD, before any edit:

| term | `data/documents.json` | `data/clauses.json` |
|---|---|---|
| `Reeves v. Hanlon` | 0 | 0 |
| `Reeves` | 0 | 0 |
| `Hanlon` | 0 | 0 |
| `Ixchel` | 0 | 0 |
| `Della Penna` | 0 | 0 |
| `Korea Supply` | 0 | 0 |
| `independently wrongful` | 0 | 0 |
| `at-will employment relation` | 0 | 0 |
| `Buxbom` | 0 | 0 |
| `Bancroft-Whitney` | 0 | 0 |
| `GAB Business Services` | 0 | 0 |
| `Quelimane` | 0 | 0 |
| `Pacific Gas & Electric Co. v. Bear Stearns` | 0 | 0 |
| `intentional interference with contractual` | 0 | 0 |
| `interference with prospective economic` | 0 | 7 |
| `raiding` / `no-raid` / `no-raiding` | 0 | 1 |
| `Diodes` | 0 | 2 |

Hits inspected and discounted as false positives:

- `raiding` (1 clause hit) — a gap note in an employee-nonsolicitation
  document about a 1985 appellate decision upholding a **contractual**
  no-raiding covenant. That is the validity of a restrictive covenant,
  not the tort liability of a hiring employer, and no element of the
  Reeves standard appears there.
- `Diodes` (2 clause hits, same clause) — a gap note in a trade-secret
  document stating that the *Cypress v. Maxim* court's quotation of
  *Diodes, Inc. v. Franzen* "was not retrieved." That is an explicit
  record of a **non**-retrieval, not coverage.
- `interference with prospective economic` (7 clause hits) — spread over
  unrelated documents (corporate opportunity, constructive eviction,
  ERISA § 510, private nuisance) where the phrase appears in passing.
  None state the elements of the tort, define "independently wrongful,"
  or cite Della Penna or Korea Supply.

Two earlier candidates were rejected as already covered and are recorded
here so the search path is checkable:

- **Labor Code §§ 970–972** (false representations inducing relocation):
  `grep -c 'Labor Code[^"]\{0,30\}970'` on `data/clauses.json` returned
  8, and the hits are substantive (`"Labor Code section 970 prohibits"`,
  `"violation of section 970 is liable"`). Covered by
  `fraudulent_inducement_of_employment_info_sheet`. Dropped.
- **Lazar v. Superior Court** — 36 clause hits. Covered. Dropped.

## Sources and fetch paths

No independent publisher of California case law was reachable from this
environment. Probed and refused/unreachable: `law.justia.com` (403),
`caselaw.findlaw.com` (403), `casetext.com` (410 on the case page),
`cite.case.law`, `static.case.law`, `api.case.law`, `scocal.stanford.edu`,
`casemine.com`, `openjurist.org`, `descrybe.ai`, `unicourt.com` (all
connection failures). `courts.ca.gov/opinions/archive/S114811.PDF`,
`www.courts.ca.gov/...` and `www4.courts.ca.gov/...` each returned 404 —
there is no official slip PDF on the court's site for a 2004 opinion —
and `storage.courtlistener.com/pdf/2004/08/12/reeves_v._hanlon.pdf`
returned 404.

Each case was therefore fetched **twice from CourtListener over two
different URL paths and two different header sets**, and the extracted
text compared:

- Path A: `/opinion/<cluster>/<slug>/` with a Chrome/Linux User-Agent,
  `Accept-Language: en-US`, `Referer: https://www.courtlistener.com/`.
- Path B: the citation redirect `/c/<Reporter>/<vol>/<page>/` with a
  Firefox/macOS User-Agent and `Accept-Language: en-GB`.

| case | cluster | path A | path B | comparison |
|---|---|---|---|---|
| Reeves v. Hanlon, 33 Cal.4th 1140 | 2597655 | `/opinion/2597655/reeves-v-hanlon/` | `/c/Cal.%204th/33/1140/` | byte-identical extracted text (md5 `e23753cd…`) |
| Buxbom v. Smith, 23 Cal.2d 535 | 2613931 | `/opinion/2613931/buxbom-v-smith/` | `/c/Cal.%202d/23/535/` | byte-identical |
| Korea Supply Co. v. Lockheed Martin Corp., 29 Cal.4th 1134 | 2630547 | `/opinion/2630547/korea-supply-co-v-lockheed-martin-corp/` | `/c/Cal.%204th/29/1134/` | byte-identical |
| Della Penna v. Toyota Motor Sales, 11 Cal.4th 376 | 2607092 | `/opinion/2607092/della-penna-v-toyota-motor-sales-usa-inc/` | `/c/Cal.%204th/11/376/` | identical but for two blank lines from the citation-highlight banner |
| Ixchel Pharma, LLC v. Biogen, Inc., 9 Cal.5th 1130 | 4772471 | `/opinion/4772471/ixchel-pharma-llc-v-biogen-inc/` | `/c/Cal.%205th/9/1130/` | byte-identical (path B returned one 202, retried in-turn to 200) |

A third fetch of Reeves via the parallel P.3d cite (`/c/p3d/95/513/`)
resolved to the same cluster and produced the same text plus two blank
lines. The v4 `/api/rest/v4/opinions/?cluster=…` endpoint returns 401
unauthenticated, so the stored per-publisher variants (lawbox / columbia
/ harvard) could not be compared against each other. **This is disclosed
in every authority clause gap: both fetches are of the same publisher
record.**

Statute, two genuinely independent hosts:

| source | path | result |
|---|---|---|
| Bus. & Prof. Code § 16600 | `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=16600.` (JSF session cookie seeded from `/faces/codes.xhtml` first) | subds. (a)–(c); "Amended by Stats. 2023, Ch. 828, Sec. 1. (AB 1076) Effective January 1, 2024." |
| Bus. & Prof. Code § 16600 | `california.public.law/codes/business_and_professions_code_section_16600` | word-for-word agreement on (a), (b)(1)–(2), (c) |

## Phrase-level confirmation

18 exact-phrase queries of the form
`?type=o&q=cluster_id:<id> AND "<phrase>"` were run against the public
unauthenticated search JSON. 17 returned `count=1` on the first try.

**One returned 0 and was re-run, as required:** the long span
`public policy generally supports a competitor's right to offer more pay
or better terms to another's employee, so long as the employee is free
to leave` returned `count=0`, because the query string carried straight
apostrophes where the source has U+2019. Three shorter spans of the same
sentence were then queried and each returned `count=1`:
`Where no unlawful methods are used, public policy generally supports a
competitor`; `better terms to another`; `employee, so long as the
employee is free to leave`. The re-run is recorded in the gap of
`atwillraid_mere_offer_not_actionable`.

## Normalization

Only benign artifacts were normalized before substring testing: U+00A0
converted to ordinary space, U+2010 to hyphen-minus, and all runs of
whitespace (including the line wrapping produced by HTML-to-text
extraction) collapsed to single spaces. Curly apostrophes (U+2019) and
curly quotation marks (U+201C/U+201D) are preserved verbatim in every
stored quote. This is stated in every authority clause gap.

## Defects disclosed rather than corrected

**1. Reeves and Buxbom do not agree on one word of the sentence Reeves
purports to quote.** (Disclosed in `atwillraid_buxbom_unfair_means`.)

- Buxbom text: `the plaintiff's loss as the result of the competitive
  strife is deemed damnum absque injuria.`
- Reeves text, quoting Buxbom: `the plaintiff's loss as a result of the
  competitive strife is deemed damnum absque injuriar`

"as **the** result" vs "as **a** result." The clause quotes the Buxbom
text as Buxbom has it, cites it to Buxbom, and the gap states that
whether the divergence is a misquotation in the published Reeves opinion
or a scanning error in one of the two texts could not be resolved,
because no independent publisher was reachable. Reeves also drops the
final letter of "injuria" ("injuriar"), which is separately noted.

**2. The Buxbom text is damaged where Reeves quoting it is clean.**
Buxbom prints `it is not ordinarily a tort to hire the employees of
another for **nse** in the hirer's business`; Reeves quotes the identical
sentence with `for **use**`. The clause therefore takes that third quote
from **Reeves's verbatim quotation of Buxbom** rather than from the
Buxbom text, and cites it that way (`Reeves v. Hanlon …, quoting Buxbom
v. Smith (1944) 23 Cal.2d 535, 547`). Disclosed in the same gap.

**3. The two texts print different reporters for the same federal case.**
Buxbom cites `Triangle Film Corp. v. Artcraft Pictures Corp., 250 P. 981`;
Reeves cites the same case as `(2d Cir. 1918) 250 F. 981, 982`. Triangle
Film is a Second Circuit decision, so "250 F." is right and Buxbom's text
has an F→P scanning error. Disclosed in
`atwillraid_mere_offer_not_actionable`; the case is described, not
quoted, because it is out-of-circuit federal authority reaching the sheet
only through Reeves.

**4. Scanner damage in the Reeves text, listed clause by clause.** The
same case name appears twice as "Bear Steams" and once as "Bear Stearns"
in a single opinion; "infonnation" once against six correct
"information"; "client fist" for "client list"; "[tjhere" for "[t]here";
and footnote 6 cites "**Joust** v. Longo" where the case is *Youst v.
Longo* — the correct spelling appears in the Della Penna text. None of
these fall inside a quoted span. Recorded in the gap of every clause
citing Reeves.

**5. Scanner damage in Korea Supply and Buxbom.** Korea Supply: "plaintiffs
prospective" for "plaintiff's prospective", and `15 U.S.C. § 78dd-l(a)(l)(A)`
with lowercase L for the digit 1. Buxbom: "WeinstoCk" for Weinstock,
"Interferenee" for Interference, "L.RA.N.S." for L.R.A.N.S. All outside
the quoted spans; disclosed in the corresponding gaps.

**6. Ixchel Pharma has no official-report pagination — so no pin cites
are given.** The CourtListener text of Ixchel is the **slip** opinion: a
search of the extracted text for star markers returned **zero**, and the
running head `IXCHEL PHARMA, LLC v. BIOGEN, INC. / Opinion of the Court
by Liu, J.` appears **41 times**, interleaved with slip page numbers.
Rather than guess at 9 Cal.5th page numbers, all four Ixchel citations
give the official citation with an explicit parenthetical saying no pin
cite is available and why. Each Ixchel quote was additionally chosen to
lie wholly within one slip page, because the running head interrupts
sentences that straddle a page break; the § 16600 holding quote is
trimmed at `lawful trade or business` for exactly that reason, which the
gap states.

**7. Footnotes are relocated into a block the star markers stop
tracking.** In both the Reeves and Della Penna texts the footnotes are
appended after the disposition/concurrence and the star markers restart
inside that block (Reeves footnote 8 carries a stray `*1154`; Della Penna
shows a second `*392` and a `*394` inside the footnote block). Nothing
from a footnote block is pin-cited to a verified page. The one clause
quoting a footnote (`atwillraid_open_questions`, Reeves fn. 7) gives the
page at which the footnote is **called** and says in both the `cite`
field and the gap that the footnote's own page was not verified.

**8. The statute Reeves cited has since been amended.** § 16600 was a
single undivided sentence when Reeves was decided in 2004; the language
Reeves quoted is now subdivision (a), and subdivisions (b) and (c) were
added by Stats. 2023, ch. 828, § 1 (AB 1076), effective January 1, 2024 —
after both Reeves and Ixchel. Stated in the gap of
`atwillraid_section_16600`; only subdivision (a) is quoted.

## Negative results recorded in gaps

- Reeves fn. 7 **expressly reserved** whether independent wrongfulness is
  required where a defendant induces breach of an otherwise enforceable
  term of an at-will contract; no later California Supreme Court decision
  answering it was located. (`atwillraid_open_questions`.)
- Della Penna **expressly reserved** the precise scope of "wrongfulness,"
  whether disinterested malevolence is itself actionable, and whether
  conduct anticompetitive under positive law should be actionable.
- Korea Supply does not state what quantum of proof of unlawfulness is
  required.
- Reeves disapproved *GAB* only "to the extent it conflicts with the
  views expressed herein" and did not say which of GAB's other holdings
  survive.

## Intermediate-court and out-of-state authority

Per the corpus rule, *Diodes, Inc. v. Franzen* (1968) 260 Cal.App.2d 244,
*Metro Traffic Control, Inc. v. Shadow Traffic Network* (1994) 22
Cal.App.4th 853, *GAB Business Services* (2000) 83 Cal.App.4th 409,
*Redfearn v. Trader Joe's Co.* (2018) 20 Cal.App.5th 989, *Popescu v.
Apple Inc.* (2016) 1 Cal.App.5th 39, *Triangle Film Corp.* (2d Cir.
1918), and the out-of-state decisions Ixchel collects are quoted or
described **only as a controlling California Supreme Court opinion
reproduces them**, and every gap concerned says so. Pin cites for the
Diodes quotations are given to the pages of *Reeves* where the quoted
language appears, not to pages of *Diodes*, and the gap states that the
Diodes page attribution was not independently checked.

## Validation run (post-merge)

```
parsed: 6269 clauses, 717 documents
new doc: 15 clauses (12 authority, 3 drafting), 25 citations
quote re-verification: 25 pass, 0 fail (each checked against BOTH fetches)
ALL CHECKS PASS
```

Asserted: both files parse; clause ids unique (6269); doc ids unique
(717); doc titles unique (717); every `clauseOrder` id resolves; every
authority clause has a non-empty `gap` and ≥1 citation; no orphan
clauses; no undeclared `{{placeholder}}`; canonical key order for
clauses (`id, title, kind, status, checkedDate, body, gap, citations`
and `id, title, kind, body`), citations (`case, cite, url, quote`) and
documents (`id, title, description, categories, clauseOrder, fields`);
new doc `categories` exactly `["Hiring"]`; all 15 new clause ids share
the `atwillraid_` prefix. The 25 quotes were re-read **out of the written
`data/clauses.json`** and each re-tested as a verbatim substring of
**both** independently fetched texts of its source.
