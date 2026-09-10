# During employment, new document: Makeup Time for Personal Obligations (Lab. Code § 513) — Information Sheet

## Wave

Wave 155 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); waves 147, 149, 151 and
153 covered the same four categories. This task ran in an isolated
git worktree with no coordination with the other three parallel
wave-155 tasks.

## Why this document

Read `data/documents.json` and enumerated all 80 existing "During
employment" documents before choosing a topic. Confirmed the task
brief's own example topics were partly taken already:
`bereavement_leave_info_sheet` and
`alternative_workweek_schedule_election_info_sheet` (Lab. Code § 511)
both exist, and `california_overtime_pay_calculation_info_sheet`
already carries the *Alvarado v. Dart Container* flat-sum-bonus
regular-rate rule (4 corpus hits for "Alvarado", 58 for "regular
rate").

Grepped the full text of both data files for the candidate topic and
near-neighbours before settling on it:

- "makeup time", "make-up time", "make up work time" — **zero**
  employment-law hits (the only "make-up" matches are charitable
  remainder unitrust "net-income/make-up" clauses in Estate Planning).
- "513" — 67 hits, every one a different statute (Corp. Code § 5130,
  Prob. Code § 5130, Civ. Code § 3513, etc.); none is Lab. Code § 513.
- "204.3" / "compensating time" — zero hits.
- Also confirmed alternatives were already covered or out of scope:
  personnel-file access (§ 1198.5, 51 hits), Equal Pay Act (§ 1197.5,
  66 hits), vacation forfeiture (§ 227.3/Suastez, 21/10 hits),
  garnishment-based discharge (covered in an existing clause set).

**Makeup work time under Lab. Code § 513** — the employee-initiated,
same-workweek exception to daily overtime — is a discrete,
frequently-used mechanic with a short controlling statute, a parallel
wage-order provision containing one rule the statute lacks (the
four-weeks-in-advance option for recurring obligations), and published
DLSE enforcement positions, none of which the corpus addressed.

## What this document covers

10 clauses (8 authority + 2 drafting), id-prefixed `makeuptime_`:

- **`makeuptime_intro`** (drafting) — scope statement; states that the
  sheet describes the law and does not create, request, approve, or
  deny any arrangement.
- **`makeuptime_daily_overtime_baseline`** — Lab. Code § 510(a): the
  8-hour daily / 40-hour weekly / seventh-day thresholds that makeup
  time creates an exception to; gap discloses that the
  Tuesday/Thursday illustration is the document's own, not a source's.
- **`makeuptime_statutory_exception`** — § 513's core rule and its
  11-hour-per-day and 40-hour-per-week ceilings, plus the 1999/2000
  enactment note; gap discloses the CourtListener finding that no
  published appellate opinion construes the section's substantive
  elements (see below).
- **`makeuptime_written_request_no_solicitation`** — § 513's
  signed-written-request-per-occasion rule and its prohibition on
  employers encouraging or soliciting requests; Wage Order 4-2001
  § 3(M)'s "may inform … prohibited from encouraging" sentence.
- **`makeuptime_recurring_obligation_advance_request`** — Wage Order
  4-2001 § 3(M)'s four-weeks-in-advance sentence for recurring
  obligations (absent from the statute) and its restatement of the
  same-week rule.
- **`makeuptime_workweek_definition`** — Lab. Code § 500(a)–(b)
  definitions of "workday" and "workweek" (fixed, recurring 168-hour
  period), which bound the "same workweek" requirement.
- **`makeuptime_dlse_enforcement_positions`** — DLSE Enforcement
  Manual §§ 48.2, 48.2.1, 48.2.1.1, 48.2.1.2 and the § 48.2 footnote:
  the agency's element summary, its "informing is permitted" note, its
  policy of not reviewing the reason for makeup time, and the
  Wage Order 14 / AB 1066 footnote; gap states the Manual's
  non-binding status and that § 861 / AB 1066 were not fetched.
- **`makeuptime_distinguished_from_compensating_time_off`** —
  Lab. Code § 204.3(a), (b)(3)–(4), (c)(1) and DLSE Manual §§ 6.3 and
  6.1.1: how banked comp time differs from makeup time, and the DLSE's
  federal-law caveat; gap discloses 29 U.S.C. § 207(o) was not fetched.
- **`makeuptime_coverage_limits`** — Wage Order 4-2001 § 1(A)
  (sections 3–12 inapplicable to administrative/executive/professional
  employees) and § 513's cross-reference to § 511.
- **`makeuptime_ack`** (drafting) — signature block, reusing the exact
  pattern of `timerounding_ack` / `oncall_ack`.

Fields: `companyName`, `employeeName` — reused verbatim (same ids,
labels, placeholders) from `time_clock_rounding_info_sheet`. No new
fields.

Deliberately **excluded**: remedies for violating the no-solicitation
rule (no source states one); the salary/duties tests for the wage-order
exemptions (Lab. Code § 515); and the detailed interaction of makeup
time with an alternative workweek schedule.

## Case-law search (CourtListener MCP)

Ran `search` (type "o") twice: `"makeup time" "section 513" overtime`
restricted to `cal`/`calctapp`, and a broader
`"make up work time" OR "makeup work time" "personal obligation"`
across California state and federal courts. The only relevant results
were the three CourtListener clusters for *Donohue v. AMN Services,
LLC* (Cal. Ct. App. 2018), 29 Cal.App.5th 1068 (cluster 6240101,
opinion 6107034). Fetched that opinion via `get_endpoint_item`
(`plain_text` was empty; `html_with_citations` used, 211,712 chars)
and read every passage mentioning makeup time: the court quoted § 513
in **footnote 38** and held that any error concerning the makeup-time
issue was harmless because AMN prevailed on the overtime claim on
unrelated grounds. It did not construe the statute, so it is
**not cited** as authority; the finding is disclosed in the
`makeuptime_statutory_exception` gap. A 429 rate-limit was hit once on
the shared 5/min CourtListener budget and the call was simply retried.

## Independent double-fetch

All statutory/regulatory/agency sources were fetched twice via `curl`
through the environment proxy with two distinct User-Agent strings
(a Chrome UA and `GroundtruthVerifier/1.0 (+corpus-verification;
curl)`), into a uniquely-named scratchpad subdirectory
(`wave155_during/`) rather than the shared `/tmp` root:

- **Cal. Lab. Code §§ 513, 510, 500, 204.3** —
  `leginfo.legislature.ca.gov`. All pairs returned HTTP 200. The first
  § 500 attempt with the Chrome UA failed with a TCP connection reset
  (curl exit 35, proxy-side) and was simply retried with the same UA,
  succeeding. The `id="codeLawSectionNoHead"` statutory text of each
  pair was **identical** after tag-stripping and whitespace
  normalization (asserted programmatically in `pre_merge_check.py`;
  the only raw-HTML differences are session tokens).
- **IWC Wage Order No. 4-2001** — `https://www.dir.ca.gov/IWC/IWCArticle4.pdf`
  (the URL actually fetched; cited as such). Both fetches were
  **byte-identical PDFs** (md5 of the pdfplumber-extracted text
  `ec3e805b5cc38267df79097419c6b4e3` for both). Text was extracted
  with `pdfplumber` (pypdf's extraction had intra-word spacing
  artifacts such as "workw eek"; pdfplumber's did not, so it was used
  for verification).
- **DLSE Enforcement Policies and Interpretations Manual** —
  `https://www.dir.ca.gov/dlse/DLSEManual/dlse_enfcmanual.pdf`
  (4,457,559 bytes, 352 pages). Both fetches byte-identical
  (pdfplumber text md5 `aa9d3be7fa4eca86b92e0e1746d51efe` for both).
  Quoted pages carry "AUGUST, 2019" footers (pp. 6-1 and 48-5), which
  is the revision date recorded in each citation's `case` field.
- Also fetched (twice, identical) the DLSE overtime FAQ page; it does
  not discuss makeup time and is not cited.

## Quote verification

`pre_merge_check.py` built a normalized (nbsp → space, whitespace
collapsed) text of each of the six independently fetched sources,
required the two fetches of each source to agree exactly, and checked
every `citations[].quote` in all 8 authority clauses for exact
substring containment in its cited source under the same
normalization.

**Result: all 19 quotes across all 8 authority clauses verified on the
first pass.** No genuine defects were found; the only normalization
applied was whitespace collapse across PDF line breaks. Curly quotation
marks, the section symbol, and the em-dash/apostrophe characters in the
sources were reproduced as-is in the quotes. No clause `gap` therefore
records a quote correction.

Hand-checked additionally: the § 513 quote uses "towards" while the
Wage Order § 3(M) quote uses "toward" — both are verbatim to their
respective sources and are deliberately not harmonized.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first and matched
the exact patterns of recent During-employment info sheets
(`time_clock_rounding_info_sheet`). `pre_merge_check.py` confirmed:

- Every authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}`, status
  `verified`, non-empty body/gap/citations, and every citation exactly
  `{case,cite,url,quote}`.
- Every drafting clause has exactly `{id,title,kind,body}`.
- The document has exactly `{id,title,description,categories,clauseOrder,fields}`.
- `clauseOrder` equals the set of the 10 new clause ids; no duplicates.
- Every `{{placeholder}}` in the drafting bodies (`companyName`,
  `employeeName`) is declared in `fields`; no placeholder appears in
  any authority body; no brace leakage in titles/gaps.

## Corpus-wide validation (post-merge)

`merge_and_validate.py` first asserted that re-serializing both data
files (`json.dumps(indent=2, ensure_ascii=False)` + trailing newline)
reproduced them byte-for-byte, so the merge is append-only
(`git diff` shows 248 insertions, 0 deletions). After the merge it
re-read both files from disk and confirmed:

- Both files parse as valid JSON.
- All clause ids unique across all 5,209 clauses (5,199 → 5,209).
- All document ids unique across all 637 documents (636 → 637).
- Every `clauseOrder` entry across **all 637 documents** resolves to an
  existing clause id.
- Every `{{placeholder}}` in every clause referenced by every document
  resolves to a field declared by that document — zero unresolved
  placeholders corpus-wide.

## Net changes

- New document: Makeup Time for Personal Obligations (Lab. Code § 513)
  — Information Sheet (`makeup_time_personal_obligations_info_sheet`),
  category: During employment.
- 10 new clauses (8 authority + 2 drafting), all under the
  `makeuptime_*` id prefix; 19 verified citations.
- No new fields (reused `companyName`, `employeeName`).
- Corpus: 5,199 → 5,209 clauses; 636 → 637 documents.
