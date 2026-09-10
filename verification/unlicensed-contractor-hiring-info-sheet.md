# Hiring, new document: Hiring an Unlicensed Contractor — Information Sheet

## Why this document

Part of wave 151 (Hiring slot), continuing the even-round-robin rotation
that wave 145/147/149 also covered (Hiring, During employment, Estate
Planning, Family Law). Checked `data/documents.json` for the ~78 existing
Hiring-category documents first. Ruled out several candidates already
covered by the corpus: social media/password protection (Labor Code
§980) is already a document (`social_media_password_protection_info_sheet`),
though filed under "Confidentiality & IP" rather than Hiring — still a
duplicate topic, so it was not re-covered here; pre-employment physical/
agility testing is already covered
(`physical_ability_agility_testing_info_sheet`); workers'-compensation
coverage disclosure at hire is already covered by two documents
(`workers_compensation_insurance_duty_info_sheet` and
`time_of_hire_workers_compensation_rights_notice_info_sheet`); cannabis/
off-duty-use pre-employment drug testing is already folded into
`drug_testing_info_sheet`. A full-text search of `data/clauses.json` for
"2750.5" and "7028" returned zero hits, confirming the licensed-
contractor/subcontractor hiring topic suggested in the task brief was
genuinely open. Landed on Labor Code §2750.5 (the rebuttable presumption
that a worker performing licensed-contractor work without a license is
an employee, not an independent contractor) together with the
Business and Professions Code provisions that create the underlying
license requirement and its consequences (§§7028, 7031, 7048) — a
well-defined, checkable topic squarely about hiring/engaging workers for
work that requires a contractor's license, distinct from every existing
document in the category.

## What this document covers

12 clauses: 2 drafting (intro, acknowledgment) and 10 authority clauses,
citing Bus. & Prof. Code §§7028(a), 7028(a)(1), 7028(b), 7028(d), 7028(h),
7031(a), 7031(b), 7048(a), 7048(c), 7048(c)(1), 7048(c)(2); Lab. Code
§2750.5 (four passages: opening presumption, factors (a)/(b)/(c), the
license-as-condition paragraph, and the workers'-compensation-supplement
paragraph); and Hydrotech Systems, Ltd. v. Oasis Waterpark, 52 Cal.3d 988
(1991) (three passages, one of which itself quotes Lewis & Queen v.
N.M. Ball Sons, 48 Cal.2d 141 (1957)):

- **`ulc_bp_license_crime`** — the general misdemeanor rule for acting
  as a contractor without a license (§7028(a), (a)(1)).
- **`ulc_bp_license_penalties`** — first- and third-conviction criminal
  penalty ranges (§7028(b), (d)).
- **`ulc_bp_restitution`** — restitution rights for a person who used an
  unlicensed contractor's services (§7028(h)).
- **`ulc_labor_presumption`** — the core §2750.5 rebuttable presumption
  of employee status.
- **`ulc_labor_rebuttal_factors`** — the §2750.5(a)-(c) factors bearing
  on independent contractor status.
- **`ulc_labor_license_condition`** — §2750.5's requirement that a valid
  contractor's license is a condition of independent contractor status.
- **`ulc_labor_workers_comp_supplement`** — §2750.5's statement that the
  presumption supplements, and does not lessen, workers'-compensation
  coverage.
- **`ulc_bp_compensation_forfeiture`** — §7031(a)-(b): an unlicensed
  contractor cannot sue for compensation, and the hiring party may
  recover amounts already paid.
- **`ulc_hydrotech_policy`** — the California Supreme Court's statement
  of §7031's public-protection purpose and the settled rule that it
  applies even where enforcement is harsh to the unlicensed contractor.
- **`ulc_small_job_exemption`** — the §7048 casual/minor-work exemption
  (current $1,000 threshold, effective January 1, 2026) and its
  advertising/employee conditions.

## Genuine findings

- **A correction to an initial assumption about the dollar threshold**:
  §7048's casual/minor-work exemption is commonly cited elsewhere as a
  "$500" threshold. The freshly fetched leginfo text shows the
  threshold was raised to $1,000 by a 2025 amendment (Stats. 2025,
  Ch. 67, Sec. 12 (AB 1170)), effective January 1, 2026 — current law as
  of the September 10, 2026 checked date. The clause states the current
  $1,000 figure and discloses the prior $500 figure in its `gap` field
  rather than silently using a stale number.
- **A structural clarification confirmed by close reading**: §2750.5's
  presumption applies to work "for which a license is required," and
  operates independently of — is a "supplement to" — the ABC-test
  framework (already covered elsewhere in the corpus by
  `california_abc_test_info_sheet`) and of ordinary workers'-compensation
  employee/independent-contractor definitions. The document's `gap`
  fields disclose this relationship rather than conflating the two
  frameworks.
- **A confirmed duplicate-adjacent-but-distinct relationship**: the
  existing `social_media_password_protection_info_sheet` document
  (Confidentiality & IP category) already covers Labor Code §980, so
  that suggested topic was correctly not re-covered here to avoid
  duplication.

## Honest gap(s) disclosed

Each authority clause's `gap` field discloses what it does not cover:
§7028(a)(2)'s separate suspended-license misdemeanor branch and the
Article 3 exemption catalog generally (not restated in
`ulc_bp_license_crime`); the §7028(c) second-conviction penalty tier and
the §7028(f) hourly-basis contract-price definition (not restated in
`ulc_bp_license_penalties`); the Penal Code §1202.4(f) restitution
procedure itself (not described in `ulc_bp_restitution`); the full
cumulative-factor list within §2750.5(c) beyond its lead sentence (not
fully restated in `ulc_labor_rebuttal_factors`); the Labor Code
Divisions 4 and 5 workers'-compensation coverage provisions themselves
(not restated in `ulc_labor_workers_comp_supplement`); the §7031(a)
joint-venture exception, the §7031(e) substantial-compliance exception,
and the §7031(c)-(d) security-interest and proof-of-licensure provisions
(not restated in `ulc_bp_compensation_forfeiture`); the specific
Hydrotech holding on out-of-state contractors and isolated transactions,
as distinct from the general policy statement quoted
(`ulc_hydrotech_policy`); the §7048(b) anti-evasion/larger-operation
carve-out and the prior $500 threshold correction
(`ulc_small_job_exemption`). This document also does not define
"contractor" or state the full scope of Chapter 9's licensing
classifications, and does not address the Contractors State License
Board's licensing/examination process itself.

## Method

**Statutes** — fetched directly from leginfo.legislature.ca.gov via curl
through the environment's proxy (WebFetch's underlying small-model
summarizer truncated/paraphrased rather than returning verbatim text
reliably for these sections, so raw HTML was fetched and parsed
directly instead):

- Lab. Code §2750.5: fetched twice, User-Agent "Mozilla/5.0 (Windows NT
  10.0; Win64; x64) ... Chrome/120.0" and "Mozilla/5.0 (Macintosh; Intel
  Mac OS X 10_15_7) ... Safari/605.1.15". Both 200 OK, 164,331 bytes.
  The `codeLawSectionNoHead` content div was byte-identical between the
  two fetches (3,607 characters after stripping to that div).
- Bus. & Prof. Code §7028: fetched twice with the same two User-Agent
  strings. Both 200 OK. Raw page sizes differed slightly (164,331 vs.
  165,672 bytes on one attempt due to session-specific JSF ViewState
  tokens and debug-URL timestamps embedded in the page); the extracted
  `codeLawSectionNoHead` statutory-text div was confirmed byte-identical
  between the two fetches.
- Bus. & Prof. Code §7031: fetched twice, User-Agent "Mozilla/5.0 (X11;
  Linux x86_64) ... Chrome/119.0" and "Mozilla/5.0 (iPhone; CPU iPhone
  OS 17_0 ...) ... Version/17.0 Mobile/15E148" (the second attempt hit a
  transient proxy connection reset and was retried once with the same
  User-Agent, succeeding on retry). Both final fetches 200 OK; extracted
  statutory-text div byte-identical.
- Bus. & Prof. Code §7048: fetched twice, User-Agent "Mozilla/5.0
  (Windows NT 10.0; Win64; x64) ... Chrome/121" and "Mozilla/5.0
  (Macintosh; Intel Mac OS X 10_15_7) ... Firefox/121.0". Both 200 OK;
  extracted statutory-text div byte-identical.

**Case law** — Hydrotech Systems, Ltd. v. Oasis Waterpark, 52 Cal.3d 988
(1991), located via CourtListener `search` (type "o", case_name query),
which returned cluster_id 1131503 with a combined-opinion `opinion_id`
that also equals 1131503 (lead-opinion id 9534804 is a separate related
opinion object). Fetched via `get_endpoint_item` (endpoint_id
"opinions", item_id 1131503) twice independently: once requesting
`["id","html_with_citations","plain_text"]` and once requesting
`["id","html_with_citations"]` only. `plain_text` was empty in the first
fetch (only `html_with_citations` is populated for this record); the
`html_with_citations` field was confirmed byte-identical between the two
independent fetches (82,110 vs. 82,090 total characters, the 20-character
difference accounted for entirely by the differing field-list wrapper,
not the field content).

## Quote-by-quote check results

All 20 quoted strings across the 10 authority clauses were verified by
exact substring match against the plain-text-stripped statutory/opinion
text (HTML tags removed, HTML entities unescaped, no other alteration):

- 7028(a) lead-in and (a)(1): exact match.
- 7028(b) and 7028(d): exact match.
- 7028(h): exact match.
- 2750.5 opening presumption sentence: exact match.
- 2750.5(a), (b), (c) lead sentence: exact match. (Curly right-single-
  quote character U+2019 in "individual's" preserved verbatim from
  source, not normalized to a straight apostrophe.)
- 2750.5 "in addition to the factors..." license-condition paragraph:
  exact match (curly apostrophe in "contractors'" preserved verbatim).
- 2750.5 workers'-compensation-supplement paragraph: exact match (curly
  apostrophe in "workers'" preserved verbatim).
- 7031(a) and 7031(b): exact match.
- Hydrotech "purpose of the licensing law...protect the public" quote:
  exact match, taken from a sentence-boundary span that avoids the
  opinion's `*991`/`*992` star-pagination page-break markers embedded
  mid-paragraph elsewhere in the same opinion.
- Hydrotech "Section 7031 advances this purpose..." quote: exact match.
- Hydrotech "Section 7031 represents a legislative determination..."
  quote (itself a quotation from Lewis & Queen v. N.M. Ball Sons,
  reproduced within the Hydrotech opinion text and cited as such in the
  `case`/`cite` fields): exact match, quote stops before the opinion's
  own internal "[Citation.] ..." bracket rather than including it.
- 7048(a): exact match, including the current $1,000 figure.
- 7048(c) lead-in, (c)(1), (c)(2): exact match.

No genuine defects (source characters absent from the fetched text) were
found in any quote. No benign formatting artifacts required
normalization either — all matches were exact, contiguous substrings of
the tag-stripped, entity-unescaped source text with no whitespace
normalization needed. A programmatic check (Python `in` substring test,
plus a whitespace-normalized fallback that was never needed) was run for
all 20 quotes against their respective source files before merging.

## Verification

- Both statutes (4 sections) and the one case fetched twice
  independently as described above; all fetches confirmed
  content-identical after removing only session-specific,
  non-substantive artifacts (JSF ViewState tokens, debug-URL
  timestamps, JSON field-wrapper differences).
- All 20 citation `quote` strings confirmed as exact substrings of the
  fetched source text — zero normalization needed, zero genuine defects
  found.
- Schema validated against `data/clauses.json`: every authority clause
  has exactly `{id,title,kind,status,checkedDate,body,gap,citations}`
  with `kind:"authority"`, `status:"verified"`, `checkedDate:"2026-09-10"`;
  every drafting clause has exactly `{id,title,kind,body}`; every
  citation object has exactly `{case,cite,url,quote}`.
- Corpus-wide validation run after merging: both `data/clauses.json`
  (5,034 clauses) and `data/documents.json` (621 documents) parse as
  valid JSON; all clause ids are globally unique; all document ids are
  globally unique; every clause id referenced in the new document's
  `clauseOrder` (12 ids) resolves to an existing clause; every
  `{{placeholder}}` used in the new document's clause bodies resolves to
  a declared field id (`companyName`, `contractingActivityDescription`,
  `preparerName`, `cityState`, `dateSigned`); no empty `case`/`cite`/
  `url`/`quote` citation fields found.
- Checked corpus-wide for prior coverage before drafting: zero hits for
  "2750.5" or "7028" in `data/clauses.json`; confirmed
  `social_media_password_protection_info_sheet` (Labor Code §980,
  Confidentiality & IP category) is the only adjacent existing document
  and covers a distinct statute, so no duplication results from adding
  this document.
- New field id `contractingActivityDescription` confirmed non-duplicative
  against the existing corpus field-id list; four other fields
  (`companyName`, `preparerName`, `cityState`, `dateSigned`) reused from
  the established corpus convention.

## Net changes

- New document: Hiring an Unlicensed Contractor — Information Sheet
  (`unlicensed_contractor_hiring_info_sheet`), 12 clauses (10 authority +
  2 drafting), in the Hiring category. One new field:
  `contractingActivityDescription`.
- Corpus: 5,022 → 5,034 clauses; 620 → 621 documents.

## Wave 151 note

This document is the Hiring-category contribution to wave 151, run in an
isolated git worktree alongside three parallel tasks covering During
employment, Estate Planning, and Family Law (continuing the same
even-round-robin category set as waves 145/147/149). No coordination
with the other three tasks was needed or performed.
