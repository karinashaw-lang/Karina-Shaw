# Hiring, new document: Employer-Required Cash Bonds, Deposits, and Photographs (Labor Code §§ 400–410) — Information Sheet

## Why this document

Part of wave 153 (Hiring slot), continuing the even-round-robin rotation
that waves 145/147/149/151 also covered (Hiring, During employment,
Estate Planning, Family Law). Checked `data/documents.json` for the ~79
existing Hiring-category documents first. Every topic the task brief
suggested turned out to be already covered: the Fair Chance Act
(`fair_chance_act_info_sheet`, which already includes the individualized-
assessment language), Coogan trust accounts
(`coogan_law_trust_account_info_sheet`), Labor Code §1019
(`immigration_related_unfair_employment_practices_info_sheet`), and
DOJ fingerprinting (`live_scan_doj_fingerprint_background_check_info_sheet`).
Also ruled out as already covered: Labor Code §925 forum selection,
Labor Code §980 social-media passwords, CCPA applicant notices, BFOQ
(folded into `discriminatory_job_advertisements_info_sheet`), and Labor
Code §§1051–1054 fingerprint/photograph sharing (covered inside the Live
Scan document). A full-text search of both data files for "cash bond",
"section 402", "section 401", and Labor Code "40[0-9]" returned zero
hits (the single "1086" hit and the "Bonds" hit were unrelated), so
Article 2 (Bonds and Photographs) of Chapter 3 of Part 1 of Division 2
of the Labor Code, §§400–410 — the "employee's bond law" — was genuinely
open. It is squarely a hiring-stage topic: the article governs what an
employer may demand from an applicant or new employee as a condition of
getting or keeping the job (cash bonds, deposits, property put up as a
"loan" or "investment," photographs), and who pays for it.

## What this document covers

13 clauses: 2 drafting (intro, acknowledgment) and 11 authority clauses,
citing Lab. Code §§400, 401, 402 (lead-in, (a), (b)), 403 (both
sentences), 404 (lead-in, (a), (b)), 405 (all three sentences), 406,
407, 408, 409, 410; Quillian v. Lion Oil Co., 96 Cal.App.3d 156 (1979)
(four passages, one of which is the Court of Appeal's reproduction of
Kerr's Catering Service v. Department of Industrial Relations, 57 Cal.2d
319, 327–328 (1962)); and USS-POSCO Industries v. Case, 244 Cal.App.4th
197 (2016) (two passages):

- **`ecb_applicant_scope`** — §400's definition of "applicant" and the
  article's reach to applicants as well as employees.
- **`ecb_employer_pays_cost`** — §401: the employer pays for any bond or
  photograph it requires.
- **`ecb_cash_bond_restriction`** — §402: no cash bond may be demanded,
  exacted, or accepted except the two statutory situations (property of
  equivalent value entrusted; goods regularly advanced for sale, bond
  capped at their value).
- **`ecb_deposit_and_written_agreement`** — §403: joint-signature
  savings account in a California-authorized bank; written agreement
  stating the bond conditions.
- **`ecb_judgment_protection_and_return`** — §404: bond money shielded
  from third-party money judgments; return with accrued interest,
  subject only to balancing deductions.
- **`ecb_trust_and_theft`** — §405: trust status, no commingling, not
  waivable by contract; misappropriation punished as theft.
- **`ecb_disguised_bonds`** — §406: property put up on a note, as a
  loan, or as an investment is deemed a bond regardless of labeling.
- **`ecb_investment_for_position`** — §407: investments and stock or
  business-interest sales tied to securing a position are against
  public policy and may not be advertised as consideration for
  employment.
- **`ecb_penalties_and_enforcement`** — §§408–410: misdemeanor
  ($50–$1,000 fine and/or up to six months) for violations other than
  §405; fines to the general fund; Labor Commissioner enforcement.
- **`ecb_quillian_shortage_bonus`** — Quillian: a manager's "bonus"
  computed by subtracting station cash/merchandise shortages was held to
  contravene the public policy of §§400–410; §408's penalty implies a
  prohibition, so a contract provision founded on the act is void.
- **`ecb_uss_posco_training_reimbursement`** — USS-POSCO: a voluntary
  training-cost reimbursement agreement was not a bond because the
  employee put up no cash, the employer fronted the expenses, and
  nothing was deducted from wages; Quillian distinguished.

## Genuine findings

- **The article is enforced through two different criminal routes.**
  §408's misdemeanor expressly excepts §405 — not because §405
  violations go unpunished, but because §405 itself makes
  misappropriating or commingling bond property "theft" punishable
  under the Penal Code. The penalties clause and the §405 clause each
  disclose this cross-reference so the exception is not misread as a
  gap in coverage.
- **Case law shows the article reaches beyond literal "bonds."** Quillian
  applied §§400–410 to a compensation formula that never involved a
  deposit at all — the employee's own bonus functioned as the bond
  covering shortages — while USS-POSCO (37 years later) confirmed the
  outer limit: where the worker puts up nothing and nothing is deducted
  from wages, the bond statutes are not implicated even though §406
  says a bond "can take many forms." Presenting both decisions gives a
  reader the boundary rather than a single data point.
- **The statute text is 1937-vintage and largely unamended.** Only §404
  (1982) and §408 (1983) carry amendment notes; the rest are "Enacted
  by Stats. 1937, Ch. 90." Gendered wording ("his own") and the
  capitalized "this State" are preserved verbatim in quotes and flagged
  in `gap` fields rather than silently modernized.

## Honest gap(s) disclosed

Each authority clause's `gap` field discloses what it does not cover:
the absence of statutory definitions of "employer," "employee," and
"bond" (`ecb_applicant_scope`); that §401 allocates cost only and that
§§1051–1054 fingerprint/photograph rules are covered elsewhere
(`ecb_employer_pays_cost`); the undefined "equivalent value" standard
(`ecb_cash_bond_restriction`); the unspecified content of the §403
written agreement and the interest question (`ecb_deposit_and_written_
agreement`); the undefined "necessary to balance accounts" deduction
and its interaction with §§221–224 (`ecb_judgment_protection_and_
return`); the unspecified Penal Code theft grade (`ecb_trust_and_theft`);
the undefined "as a part of the contract of employment" phrase
(`ecb_disguised_bonds`); the undefined "in connection with the securing
of a position" phrase and the post-hire equity-compensation question
(`ecb_investment_for_position`); the absence of an express private right
of action or civil penalty in the article and the PAGA question
(`ecb_penalties_and_enforcement`); Quillian's reliance on §221 and
Kerr's Catering, the willful-misconduct carve-out it did not decide, and
the fact that Kerr's Catering itself was not separately fetched
(`ecb_quillian_shortage_bonus`); USS-POSCO's other holdings (§§450,
2802, 221–223, 432.5, B&P §16600, FLSA, §218.5 fees) and the open
mandatory-program question (`ecb_uss_posco_training_reimbursement`).

## Method

**Statutes** — fetched directly from leginfo.legislature.ca.gov via curl
through the environment's proxy (raw HTML fetched and the
`codeLawSectionNoHead` statutory-text div parsed directly, following
the approach used in prior waves):

- Lab. Code §§400–410 (eleven sections, each fetched at its own
  `codes_displaySection.xhtml?lawCode=LAB&sectionNum=NNN.` URL): each
  fetched twice, User-Agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)
  ... Chrome/122.0.0.0" and "Mozilla/5.0 (Macintosh; Intel Mac OS X
  10_15_7) ... Version/17.2 Safari/605.1.15". All 22 fetches 200 OK
  (the second §400 fetch hit three consecutive proxy "connection reset
  by peer" failures on the first pass and succeeded on a retried pass
  with the same User-Agent). Raw page sizes varied between the two
  fetches of a section (162,021–164,646 bytes) because of
  session-specific JSF ViewState tokens; the extracted statutory-text
  div was byte-identical between the two fetches for all eleven
  sections (lengths 481–1,136 characters including the heading
  breadcrumb and enactment note).

**Case law** — located via CourtListener `search` (type "o", query
`"Labor Code" "section 402" "cash bond"`, courts `cal`/`calctapp`),
which returned exactly two published California opinions:

- Quillian v. Lion Oil Co., 96 Cal.App.3d 156 (1979): cluster_id
  2110756, opinion_id 2110756 (combined opinion). Fetched via
  `get_endpoint_item` (endpoint_id "opinions", item_id 2110756) twice
  independently: once with fields `["id","html_with_citations",
  "plain_text"]` and once with `["id","html_with_citations"]`.
  `plain_text` was empty; `html_with_citations` was compared
  paragraph-for-paragraph between the two fetches and was identical
  (the three quoted paragraphs, ids b173-7, b174-5, and b175-5, were
  saved verbatim from each fetch and `diff` reported no differences).
  Pin cites taken from the opinion's embedded star-pagination markers
  (`*162` precedes the Kerr's Catering quotation; `*163` precedes the
  "clever method" sentence and the concluding paragraph).
- USS-POSCO Industries v. Case, 244 Cal.App.4th 197 (2016): cluster_id
  3172339, opinion_id 3172339 (combined opinion). Fetched twice via
  `get_endpoint_item` with the same two field lists. Both results
  exceeded the tool's inline size limit and were saved to files by the
  harness; the `html_with_citations` field was confirmed byte-identical
  between the two fetches (106,083 characters each). The bond passage
  lies between the `*207` and `*208` star-pagination markers, so it is
  pin-cited to page 207.

## Quote-by-quote check results

All 24 quoted strings across the 11 authority clauses were verified by
exact substring match against the tag-stripped, entity-unescaped source
text (a Python `in` test, with a whitespace-normalized fallback that was
never needed):

- §400 definition: exact match (curly quotes U+201C/U+201D around
  "applicant" preserved from source).
- §401: exact match.
- §402 lead-in, (a), (b): exact match.
- §403 first and second sentences: exact match ("this State" preserved).
- §404 lead-in, (a), (b): exact match.
- §405 sentences one, two, three: exact match ("his own" preserved).
- §406, §407: exact match.
- §408, §409, §410: exact match.
- Quillian/Kerr's Catering "Labor Code sections 400 through 410 set out
  in detail the employee's bond law..." quote: exact match; the quote
  stops at "entrusted to him." immediately before the opinion's
  footnote-1 marker, and the curly apostrophe in "employee's" is
  preserved. The `case`/`cite` fields identify it as Quillian's
  reproduction of Kerr's Catering, 57 Cal.2d at 327–328.
- Quillian "clever method of circumventing" sentence: exact match.
- Quillian "Therefore, we conclude that the bonus herein is in
  contravention of the public policy expressed in sections 400 to
  410..." sentence: exact match.
- Quillian "the imposition by statute of a penalty implies a
  prohibition..." sentence: exact match, stopping before the opinion's
  parenthetical citation to Kerr's Catering.
- USS-POSCO five-sentence bond passage ("For similar reasons ... no
  deduction was ever made from his paid wages."): exact match (curly
  quotes around "required" and "cash bond" preserved; the "(§ 406)"
  parenthetical uses the source's section symbol and space).
- USS-POSCO "That case concerned a reduction in wages..." sentence:
  exact match.

No genuine defects (source characters absent from the fetched text) were
found in any quote, and no normalization was needed for any of the 24.

## Verification

- All eleven statute sections and both cases fetched twice independently
  as described above; every fetch pair confirmed content-identical after
  removing only session-specific JSF ViewState artifacts (statutes) or
  the differing JSON field-list wrapper (cases).
- All 24 citation `quote` strings confirmed as exact substrings of the
  fetched source text.
- Schema validated against `data/clauses.json`: every authority clause
  has exactly `{id,title,kind,status,checkedDate,body,gap,citations}`
  with `kind:"authority"`, `status:"verified"`,
  `checkedDate:"2026-09-10"`; every drafting clause has exactly
  `{id,title,kind,body}`; every citation object has exactly
  `{case,cite,url,quote}` with no empty values.
- Before writing, a `json.dumps(indent=2, ensure_ascii=False)` round-trip
  of each existing data file was confirmed byte-identical to the file
  on disk, so the append changed nothing but the new entries (git diff:
  332 insertions, 0 deletions).
- Corpus-wide validation run after merging: both `data/clauses.json`
  (5,117 clauses) and `data/documents.json` (629 documents) parse as
  valid JSON; all clause ids and document ids are globally unique;
  every clause id in every document's `clauseOrder` resolves; every
  `{{placeholder}}` in every clause body referenced by a document
  resolves to a declared field id of that document; every authority
  clause corpus-wide has the exact key set above and no empty citation
  fields.
- New field id `bondPracticeDescription` confirmed non-duplicative
  against the existing corpus field-id list; four other fields
  (`companyName`, `preparerName`, `cityState`, `dateSigned`) reused from
  the established corpus convention.

## Net changes

- New document: Employer-Required Cash Bonds, Deposits, and Photographs
  (Labor Code §§ 400–410) — Information Sheet
  (`employee_cash_bond_photograph_restrictions_info_sheet`), 13 clauses
  (11 authority + 2 drafting), in the Hiring category. One new field:
  `bondPracticeDescription`.
- Corpus: 5,104 → 5,117 clauses; 628 → 629 documents.

## Wave 153 note

This document is the Hiring-category contribution to wave 153, run in an
isolated git worktree alongside three parallel tasks covering During
employment, Estate Planning, and Family Law (continuing the same
even-round-robin category set as waves 145/147/149/151). No coordination
with the other three tasks was needed or performed. The shared
scratchpad was used only through a uniquely named `wave153_hiring/`
subdirectory, and every source was re-fetched fresh for this task.
