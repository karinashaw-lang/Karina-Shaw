# Ending employment, new document: Real Estate Broker's Duty to Notify the DRE of a Salesperson's Termination — Information Sheet

## Why this document

Read `data/documents.json`'s full set of 78 existing "Ending employment"
documents before starting. Several suggested starting points in the task
brief were already covered: DE 2320 ("Notice to Employee as to Change in
Relationship") is the existing `unemployment_change_notice` document;
Cal-COBRA is the existing `calcobra_election_notice` document; the WARN
Act's physical-calamity/faltering-company/unforeseeable-circumstances
exceptions are already covered in depth by both `calwarn_exceptions`
(Cal/WARN's own physical-calamity and active-seeking-capital exceptions)
and `warn_exceptions` (federal WARN's actively-seeking-capital,
unforeseeable-circumstances, and natural-disaster exceptions); and
unemployment insurance disqualification for misconduct is already covered
by `ui_claimant_info_sheet`'s `uiclaimant_disqualification_standard`,
`uimisconduct_case_law_standard`, and `uimisconduct_good_cause_case_law_crossover`
clauses (a prior wave folded that topic into that existing document rather
than a standalone one, per that document's own verification history).
Paid-sick-leave non-payout at termination was also checked and found
already covered (`sickleave_no_payout_at_termination`,
`vacpayout_sick_leave_distinct`). Grepped the full clause corpus for
"whistleblow", "1102.5", "job abandonment", "overpay", "recoup", and
"setoff" and confirmed no gap there either (whistleblower retaliation is
covered by the existing `wrongful_termination_public_policy_info_sheet`
document; a Barnhill/wage-setoff angle is touched only tangentially by
`waitingtime_willful_standard` and the Hiring-category
`wage_repayment_clawback_info_sheet`, neither of which addresses this
document's topic).

Settled on a genuinely uncovered, narrow, checkable topic instead: the
notice a real estate broker must give the California Department of Real
Estate (DRE) when a real estate salesperson's affiliation with that broker
ends. Confirmed by grep that no existing clause or document in the corpus
cites Business and Professions Code § 10161.8, § 10137, or California Code
of Regulations title 10, § 2752, and that the corpus's existing
`real_estate_broker_salesperson_licensing_info_sheet` document (Real
Estate category) covers general broker/salesperson licensing requirements
but not this specific termination-notice duty. This document fits the
Ending employment category on the same logic as this corpus's existing
industry-specific termination/relocation documents (e.g. the Displaced
Janitor Opportunity Act, the grocery worker retention law, and the
call-center relocation notice): the underlying legal event that triggers
the duty is the end of an employment/affiliation relationship, even though
the duty itself falls on an industry-specific regulator. This is part of
wave 150 (Ending employment category), one of four parallel,
isolated-worktree documents added this wave across Confidentiality & IP,
Ending employment, Business Formation, and Real Estate — continuing the
same even round-robin that waves 146 and 148 covered.

## What this document covers

6 clauses: 2 drafting (scope declaration, acknowledgment/signature) and 4
authority clauses:

- **`realestatetermnotice_core_duty`** (Bus. & Prof. Code § 10161.8(a),
  (d)) — **the central finding**: a responsible broker must notify the
  Real Estate Commissioner when a salesperson's (or a broker acting as a
  salesperson's) affiliation is terminated, in whatever manner the
  Commissioner specifies — the statute itself leaves the notice's format,
  timing, and delivery method to the Commissioner rather than spelling
  them out directly.
- **`realestatetermnotice_hiring_symmetry`** (§ 10161.8(b), (c)) — the
  same section separately requires notice when a broker *retains* a
  salesperson or another broker to act as one; a departing salesperson's
  next broker owes an independent notice of its own, not a substitute for
  the terminating broker's notice.
- **`realestatetermnotice_regulation_timing`** (Cal. Code Regs. tit. 10,
  § 2752(a)-(b)) — the implementing regulation's ten-day mailing deadline
  for a broker-to-broker termination notice, and the alternative-form
  provision letting a predecessor broker's termination notice piggyback on
  a successor broker's retention-notice form.
- **`realestatetermnotice_no_compensation_outside_broker`** (Bus. & Prof.
  Code § 10137) — the separate rule that a salesperson cannot accept, and
  a broker cannot pay, compensation for licensed real estate activity
  outside the current responsible-broker relationship, on pain of license
  suspension or revocation.

## Genuine findings

- Confirmed § 10161.8 was substantially rewritten effective January 1,
  2019 by AB 2884 (Stats. 2018, Ch. 285, Sec. 42). The current text no
  longer contains the "immediately notify the commissioner ... in
  writing" language that a web search's synthesized summary (drawing on
  older secondary sources) initially returned; the actual current
  leginfo.legislature.ca.gov text instead directs the Commissioner to
  specify "the manner" of notice, with no "immediately" or "in writing"
  requirement stated in the statute itself. This document states only the
  current, post-2019 statutory text as independently fetched and verified
  this session — the web search result that surfaced this topic was
  treated as a lead to verify, not as a source to quote, and its outdated
  characterization was caught and corrected before drafting any clause.
- Confirmed Cal. Code Regs. tit. 10, § 2752 is current (its own "Notes"
  show a most-recent amendment effective April 1, 2022, i.e. after
  § 10161.8's 2019 renumbering) but contains what appears to be a stale
  internal cross-reference: it cites "Section 10161.8(b)" for both a
  broker-to-broker termination notice and, separately, for a salesperson's
  certification duty, but under the current (post-2019) lettering of
  § 10161.8, subdivision (b) concerns *retaining* a salesperson, not
  terminating one, and subdivision (d) is the broker's own termination
  duty. This looks like an uncorrected cross-reference carried through the
  regulation's 2022 amendment rather than a live discrepancy in which
  version of the statute is in effect — disclosed as a gap in
  `realestatetermnotice_regulation_timing` rather than silently resolved,
  following the same disclosure pattern this corpus's existing
  `calwarn_exceptions` clause used for an analogous stale
  cross-reference (§ 1402.5(d)'s reference to "subdivision (d) of Section
  1400," which is itself now Section 1400.5(d)).
- Confirmed § 10137's compensation restriction is a genuinely separate
  legal mechanism from the Commissioner-notice duty above: it restricts
  who may lawfully pay and receive compensation for licensed activity at
  any time, independent of whether the Commissioner has been notified of
  a termination, and ties directly into what a departing salesperson can
  expect regarding compensation for work performed while still affiliated
  with the terminating broker.

## Honest gaps disclosed

- `realestatetermnotice_core_duty`: notes the 2019 rewrite and that this
  clause states only the current post-2019 text, not the earlier
  "immediately ... in writing" version some secondary sources still
  describe.
- `realestatetermnotice_hiring_symmetry`: discloses that both citations
  are subdivisions of the same section already quoted in the prior
  clause, so not an independent source from it.
- `realestatetermnotice_regulation_timing`: discloses the internal
  cross-reference discrepancy described above at length, and does not
  resolve which current subdivision the regulation's drafters meant to
  cite; also discloses that Cornell Law School's Legal Information
  Institute (not the state's own regulations portal) was the fetched
  source for this regulation's text, consistent with this corpus's
  existing practice of citing Cornell LII for federal C.F.R. text (e.g.
  the existing WARN Act Layoff Notice document's citation to 20 C.F.R.
  § 639.9(c)).
- `realestatetermnotice_no_compensation_outside_broker`: notes this
  clause states the statute's general restriction only, and does not
  independently determine how it interacts with any specific commission
  owed to a departing salesperson for a transaction pending at
  termination, which depends on facts (timing and terms of any
  commission-sharing agreement) not addressed here.

## Method

Fetched Bus. & Prof. Code §§ 10161.8 and 10137 directly from
`leginfo.legislature.ca.gov` (the standard `codes_displaySection.xhtml`
page, via `curl` rather than WebFetch since this session's WebFetch tool
was not exercised for this domain — `curl` through the environment's
configured proxy was used directly, consistent with prior agents' findings
that this works for leginfo). Each section was fetched twice,
independently, with two distinct User-Agent strings (a Windows/Chrome
string and a bare `curl/8.4.0` string). Both fetches of § 10161.8 returned
HTTP 200 with byte-identical statutory-text content (confirmed via SHA-256
hash of the parsed `<div id="codeLawSectionNoHead">` paragraph text); both
fetches of § 10137 likewise returned HTTP 200 with byte-identical content
(same hash-comparison method). Cal. Code Regs. tit. 10, § 2752 was fetched
from Cornell Law School's Legal Information Institute
(`law.cornell.edu/regulations/california/10-CCR-2752`) twice, independently,
with two distinct User-Agent strings (the same Chrome string and a
Firefox/Linux string); both fetches returned HTTP 200, and a `diff` of the
two saved files showed no differences at all (not even in page
boilerplate).

## Verification

- All 3 sources (2 statutes + 1 regulation) fetched twice independently
  with two distinct User-Agent strings each; all 6 fetches returned HTTP
  200. The two § 10161.8 fetches and the two § 10137 fetches were
  confirmed byte-identical via SHA-256 hash of their parsed statutory
  text; the two § 2752 fetches were confirmed byte-identical via `diff`
  of the full saved page.
- All 9 citation quotes across the 4 authority clauses programmatically
  re-verified as exact substrings of the corresponding fetched source
  text. Normalization applied only to benign source-formatting artifacts
  before comparison: non-breaking spaces (`&nbsp;`/`\xa0`) following
  subdivision letters such as "(a)\xa0The commissioner..." in the leginfo
  HTML, and an HTML line-wrap tab/newline sequence inside § 10161.8(b)'s
  "requiring a\n\t\t\t\tlicense" — both are source-rendering artifacts, not
  differences in the underlying legal text, and were normalized to plain
  spaces before the substring check. No genuine quote defects (a
  character present in a drafted quote but absent from the source) were
  found, so no `gap`-field correction disclosure of that kind was needed
  for any citation; the `gap` fields present instead disclose the
  substantive cross-reference and statutory-history points described
  above.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field. One instance was initially
  found (a `{{salespersonName}}` placeholder inadvertently used inside a
  `gap` field, where only `body` fields should carry merge placeholders)
  and corrected to plain prose before merging; re-checked clean after the
  fix.
- Checked every authority clause has exactly the schema key set
  `{id,title,kind,status,checkedDate,body,gap,citations}` and every
  citation has exactly `{case,cite,url,quote}`; every drafting clause has
  exactly `{id,title,kind,body}` — verified programmatically against
  `data/clauses.json`'s existing key-set conventions.
- Checked the document object has exactly
  `{id,title,description,categories,clauseOrder,fields}`.
- Checked for duplicate clause ids and duplicate document ids against the
  full corpus (none), both before and after merging.
- Checked every clause id in the new document's `clauseOrder` resolves to
  an existing clause in `data/clauses.json` (all 6 resolve), and
  separately re-checked this corpus-wide for every document in the merged
  file (no unresolved references anywhere).
- Confirmed every `{{field}}` placeholder used in the new document's
  clause bodies (`responsibleBrokerName`, `salespersonName`,
  `terminationDate`) is declared in the document's own `fields` array.
- Confirmed both `data/clauses.json` and `data/documents.json` still
  parse as valid JSON after the merge.

## Net changes

- New document: Real Estate Broker's Duty to Notify the DRE of a
  Salesperson's Termination — Information Sheet
  (`real_estate_broker_termination_notice_dre_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Ending employment category. New fields:
  `responsibleBrokerName`, `salespersonName`, `terminationDate`.
- Corpus: 4,987 → 4,993 clauses; 616 → 617 documents. Wave 150 (Ending
  employment category; one of four parallel documents added this wave
  across Confidentiality & IP, Ending employment, Business Formation, and
  Real Estate, each in its own isolated git worktree).
