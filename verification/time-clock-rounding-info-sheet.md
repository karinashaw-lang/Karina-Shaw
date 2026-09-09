# During employment, new document: Time Clock Rounding Practices — Information Sheet

## Wave

Wave 149 (During employment category). This wave continues the
even-round-robin cadence started by wave 145 (Hiring / During
employment / Estate Planning / Family Law); wave 147 covered the same
four categories. This task ran in an isolated git worktree with no
coordination with the other three parallel wave-149 tasks.

## Why this document

Read `data/documents.json` and enumerated all 77 existing "During
employment" documents before choosing a topic. Confirmed the task
brief's example topics are already covered:
`lactation_accommodation_info_sheet`,
`workplace_violence_prevention_plan_info_sheet`,
`paid_family_leave_info_sheet`, and — after reading its verification
file — `heat_illness_prevention_info_sheet` already covers **both**
the outdoor (8 CCR §3395) and indoor (8 CCR §3396) Cal/OSHA heat
standards, so an "indoor heat illness" document would have
duplicated it.

Grepped the corpus for several other candidate topics before settling
on the final one, and confirmed each was already covered elsewhere:

- Vacation/PTO no-forfeiture rule (Suastez v. Plastic Dress-Up Co.,
  Lab. Code §227.3) — already cited in existing waiting-time-penalty
  and final-paycheck clauses.
- Personnel/payroll record inspection (Lab. Code §§1198.5, 226) —
  already covered by the `personnel_records_request` document.
- Polygraph/lie-detector prohibition (Lab. Code §432.2) — already
  covered by `polygraph_lie_detector_prohibition_info_sheet`.
- Independent contractor ABC test (Dynamex/AB5, Lab. Code §§2775-2776)
  — already covered by `california-abc-test-info-sheet`.
- Religious accommodation (FEHA, Gov. Code §12940(l)) — already
  covered by `religious-accommodation-info-sheet`.
- Repetitive Motion Injury / ergonomics standard (8 CCR §5110) —
  grepped for "ergonomic"/"repetitive motion"/"5110" with zero corpus
  hits, a viable alternative topic, but **time-clock rounding** was
  selected instead as the stronger, more concretely litigated topic.

Grepped the full text of `data/clauses.json` for "rounding" and found
only unrelated matches (e.g., dollar-amount rounding in estate/tax
clauses, "surrounding" as a substring). Grepped for "Donohue v",
"See's Candy", "punch", and "time clock" and found zero existing
corpus hits. Confirmed **time-punch rounding for hourly employees** —
governed by *Donohue v. AMN Services, LLC* (Cal. Supreme Court, 2021)
and *See's Candy Shops, Inc. v. Superior Court* (Cal. Ct. App., 2012)
— was a genuinely open, well-scoped, real, and current topic with
checkable primary sources (two published appellate opinions, one
California statute, one wage order, and one federal regulation).

## What this document covers

9 clauses (7 authority + 2 drafting), id-prefixed `timerounding_`:

- **`timerounding_intro`** (drafting) — scope statement: explains the
  document addresses two different standards depending on what the
  rounded time is used to calculate.
- **`timerounding_definition_and_meal_period_holding`** — defines
  "rounding" using Donohue's own language and states Donohue's core
  holding: rounding is not permitted for time punches used to
  determine meal period compliance.
- **`timerounding_federal_regulatory_basis`** — 29 C.F.R. §785.48(b),
  the federal FLSA "rounding" regulation California courts have used
  as their reference standard.
- **`timerounding_seescandy_neutral_standard`** — See's Candy's
  holding: neutral, over-time rounding is permitted for calculating
  regular/overtime wages generally.
- **`timerounding_neutrality_meaning`** — Donohue's own description of
  how federal courts (quoting Alonzo v. Maximus, Inc.) have drawn the
  line between neutral and unlawfully undercompensating rounding
  policies.
- **`timerounding_meal_period_statutory_precision`** — the precise,
  non-rounded 30-minute/five-hour/ten-hour meal period timing
  requirements in Lab. Code §512(a) and IWC Wage Order No. 4-2001,
  §11(A), that a rounding policy would disrupt.
- **`timerounding_meal_period_reasoning_example`** — Donohue's own
  21-minute-lunch-rounded-to-30-minutes numerical example illustrating
  why rounding is incompatible with meal period precision.
- **`timerounding_scope_limitation`** — an honesty/gap clause stating,
  in the Court's own words, that Donohue expressly left undecided
  whether the general See's Candy neutral-rounding standard is itself
  correct, only assuming its validity arguendo to reach the narrower
  meal-period holding.
- **`timerounding_ack`** (drafting) — signature/acknowledgment block,
  reusing the exact pattern from `oncall_ack` and
  `reportingtime_signature_acknowledgment`.

Fields: `companyName`, `employeeName` — reused verbatim (same ids,
labels, placeholder style) from the existing
`on_call_standby_time_compensability_info_sheet` document. No new
fields were introduced.

Deliberately **excluded** from scope: Donohue's separate second
holding (a rebuttable presumption of meal period violations arising
from non-compliant time records at summary judgment). That is a
distinct procedural/evidentiary topic from time-punch rounding itself
and was left out to keep this document well-scoped to a single,
coherent topic; it remains a candidate for a future, separate
document.

## Independent double-fetch

**Case law** (via CourtListener MCP tools, `search` type "o" then
`get_endpoint_item`, each fetched via two separate, independent
`get_endpoint_item` calls):

- *Donohue v. AMN Services, LLC*, 11 Cal.5th 58 (Cal. 2021) —
  cluster_id 4859143, opinion_id 4662922. Both fetches returned
  identical `plain_text` (65,639 characters), confirmed programmatically
  (`d1['plain_text']==d2['plain_text']` → `True`).
- *See's Candy Shops, Inc. v. Superior Court*, 210 Cal.App.4th 889
  (Cal. Ct. App., 4th Dist., Div. 1, 2012) — cluster_id 5811430,
  opinion_id 5666909. `plain_text` was empty for this older opinion,
  so `html_with_citations` was used instead (converted to text by
  stripping tags and unescaping entities). Both independent fetches
  returned identical `html_with_citations` (84,907 characters),
  confirmed programmatically (`True`).
- Confirmed the docket for See's Candy (docket_id 62168865) carries
  docket number "No. D060710" — a "D"-prefixed docket number, the
  California Fourth Appellate District's numbering convention,
  corroborating "4th Dist." in the citation. Division One specifically
  (San Diego) is the court's well-established division for this case;
  this was not independently re-derived beyond the D-number confirmation.

**Statutes/regulations** (via `curl` through the environment's proxy,
each fetched twice with two distinct User-Agent strings — a Chrome
UA and either a `curl/8.0` UA or, for one host, a Firefox UA after the
`curl/8.0` string transiently failed the proxy tunnel on that host):

- **Cal. Labor Code §512(a)** — `leginfo.legislature.ca.gov`. Both
  fetches returned HTTP 200; the only `diff` was in session-specific
  JS debug-timestamp tokens embedded in the page. The statutory text
  itself (`id="codeLawSectionNoHead"` div) was byte-identical after
  HTML-tag-stripping and whitespace normalization.
- **IWC Wage Order No. 4-2001, §11(A)** — `www.dir.ca.gov/IWC/IWCArticle04.pdf`.
  Both fetches were **byte-identical PDF files** (confirmed via
  matching md5sums: `bdeadc4f90623740bdfabff0cd2d6056`). Text was
  extracted with `pypdf` from one of the two identical files.
- **29 C.F.R. §785.48(b)** — `www.ecfr.gov`. First UA (Chrome)
  succeeded (HTTP 200); the paired `curl/8.0 GroundtruthResearchBot/1.0`
  UA failed the proxy's CONNECT tunnel with a 403 on this host after
  four retries (confirmed as a proxy-side issue, not source-side, via
  `$HTTPS_PROXY/__agentproxy/status`, which showed unrelated
  `connect_rejected`/`ws_closed_mid_exchange` entries for other hosts
  around the same time — consistent with transient proxy instability
  rather than this host blocking the UA string). Substituted a second,
  still-distinct UA (a Firefox string) for the second fetch, which
  succeeded. `diff` on the two fetched pages showed only per-response
  CSP `nonce` attribute values differing (a dynamically generated,
  per-request security token, not content) — the extracted §785.48(b)
  paragraph text itself was byte-identical between the two fetches.

## Quote verification

Wrote a Python script (`pre_merge_check.py`) that built a normalized
(whitespace-collapsed) text of each of the five independently fetched
sources — the two case opinions and the three statutory/regulatory
texts — and checked every `citations[].quote` string in all 7 new
authority clauses for exact substring containment in its cited
source's normalized text, after applying the identical
whitespace-collapse normalization to each quote.

**Result: all 9 quotes across all 7 authority clauses verified as
exact substrings of their cited, independently-fetched sources** on
the second pass. One genuine defect was caught and corrected before
merge: an initial draft of the `timerounding_seescandy_neutral_standard`
quote used straight ASCII quotation marks (`"`) around the embedded
sub-quote, but the source uses curly Unicode quotation marks (`“` `”`)
— the script flagged this as a quote-not-found error, the quote was
corrected to use the source's actual curly-quote characters, and the
script re-run confirmed the fix. This is disclosed here rather than
in a clause `gap` field because it was caught and corrected before
any clause was written into the corpus (no clause was ever merged
with the defect) — consistent with how this project has handled
pre-merge catches elsewhere.

No other normalization beyond whitespace-collapse was needed; no
`nbsp`/PDF-line-wrap artifacts required correction beyond the
standard whitespace-collapse already applied uniformly to all five
sources (the PDF-extracted Wage Order text in particular had several
mid-word line-wrap hyphens/spaces, e.g. "non- working", which the
whitespace-collapse handled since the quoted excerpt did not include
those hyphenated words).

Additionally re-confirmed by hand (not just via the script) that the
`timerounding_seescandy_neutral_standard` clause's page-903 and
page-907 pin cites are accurate: the See's Candy opinion text (from
`html_with_citations`) carries embedded reporter star-pagination
markers (e.g., `*903`, `*907`, `*908`), and both quoted passages fall
between the correct star-page markers in the fetched text. By
contrast, no reliable star-pagination markers were found in the
Donohue slip opinion's `plain_text` (it carries only internal
slip-opinion page numbers 1-33, not official Cal.5th reporter
pagination), so all Donohue citations in this document cite only the
opinion's starting page (`11 Cal. 5th 58`) without a specific pin
page, to avoid citing an unverified page number.

## Schema validation

Read `data/clauses.json` and `data/documents.json` first to confirm
current schema shapes, matching the exact patterns used by recent
"During employment" info-sheet documents (`on_call_standby_time_...`,
`reporting_time_pay_info_sheet`). `pre_merge_check.py` confirmed,
before merge:

- Every new authority clause has exactly the keys
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`, all fields non-empty.
- Every new drafting clause has exactly the keys `{id,title,kind,body}`.
- No duplicate clause ids within the new set.
- The new document's `clauseOrder` references exactly the 9 new
  clause ids, with none missing and none unreferenced.
- The document object has exactly the keys
  `{id,title,description,categories,clauseOrder,fields}`.
- Every `{{field}}` placeholder used in the 2 new drafting clauses'
  bodies (`companyName`, `employeeName`) is declared in the document's
  `fields` array.
- No `{{`/`}}` brace-leakage in any title/body/gap/citation field.

## Corpus-wide validation (post-merge)

After merging, ran a Node script that confirmed:

- Both `data/clauses.json` and `data/documents.json` still parse as
  valid JSON.
- All clause ids remain unique across all 4,962 clauses
  (4,953 → 4,962).
- All document ids remain unique across all 613 documents
  (612 → 613).
- Every id in the new document's `clauseOrder` exists in
  `data/clauses.json`.
- Corpus-wide (not just the new document): every `clauseOrder` entry
  across **all 613 documents** resolves to an existing clause id —
  zero missing references found.

## Net changes

- New document: Time Clock Rounding Practices — Information Sheet
  (`time_clock_rounding_info_sheet`), category: During employment.
- 9 new clauses (7 authority + 2 drafting), all under the
  `timerounding_*` id prefix.
- No new fields (reused `companyName`, `employeeName`).
- Corpus: 4,953 → 4,962 clauses; 612 → 613 documents.
