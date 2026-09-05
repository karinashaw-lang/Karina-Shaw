# Business Formation, new document: California Limited Offering Exemption — Information Sheet

## Why this document

Third processed item of wave 94 (Business Formation slot). Read the
existing SAFE Note document's clauses in full — confirmed it covers the
SAFE instrument, the federal Reg D/Rule 506 exemption, and only Corp. Code
§ 25102.1(d) (the notice-filing exemption for an already-federally-covered
security) — an independent, non-federally-covered exemption entirely.
Confirmed the Franchise Investment Law document covers unrelated subject
matter. Grepped the corpus for "25102," "limited offering exemption," and
"private placement" — the only hits were the existing § 25102.1(d)
citation, confirming zero prior coverage of § 25102(f) itself. Confirmed a
real, non-duplicative gap.

## What this document covers

7 clauses: 2 drafting (declaration, signature/certification) and 5
authority clauses, citing Corp. Code § 25102(f), (f)(1)-(2), (f)(3)-(4),
its unlettered notice/cure paragraph, 10 Cal. Code Regs. § 260.102.14(a)-(c),
and 17 C.F.R. § 230.506(b)(2)(i):

- **`limoffexempt_purchaser_limit_and_qualification`** (§ 25102(f), (f)(1)-(2))
  — the 35-purchaser limit and the preexisting-relationship/sophistication
  test.
- **`limoffexempt_investment_representation_no_advertising`**
  (§ 25102(f)(3)-(4)) — the investment-intent representation and the
  no-advertisement condition.
- **`limoffexempt_notice_filing_statute`** (§ 25102(f)'s unlettered notice/
  cure paragraph) — the Commissioner's rulemaking directive and the
  15-business-day cure/fee provision for a missed notice.
- **`limoffexempt_notice_filing_mechanics`** (10 CCR § 260.102.14(a)-(c))
  — the implementing regulation's 15-calendar-day filing deadline, the
  Regulation D dual-filing shortcut, and the form's title.
- **`limoffexempt_reg_d_comparison`** (§ 25102(f), (f)(1)-(2); 17 C.F.R.
  § 230.506(b)(2)(i)) — how the purchaser-count and qualification
  conditions differ from federal Rule 506(b).

## Genuine corrections and findings

- **A genuine finding, disclosed rather than silently resolved**: the
  implementing regulation's own instructions cross-reference the
  notice/cure provision as "Corporations Code section 25102(f)(4)" — but
  in the current statutory text, paragraph (4) is the no-advertisement
  condition, not the cure provision (which is an unlettered trailing
  paragraph). Disclosed as a likely stale cross-reference carried forward
  in the regulation, not resolved further or silently corrected.
- **A genuine, disclosed access-tier limitation**: 10 CCR § 260.102.14 is
  not hosted on leginfo (which covers only codified statutes, not
  regulations). The official state platform (govt.westlaw.com) returned
  "Document not found"/an unresolved redirect for scripted fetches, so the
  agent instead verified the regulation via two independent User-Agent
  fetches of the Cornell LII mirror — disclosed explicitly as a lower-rigor
  verification tier than the statutory citations verified directly against
  leginfo.
- **A genuine finding flagging a likely-stale codification**: the Cornell
  mirror's text still names the pre-2020 "Department of Business
  Oversight" and "www.dbo.ca.gov," the agency's predecessor name/address
  before its 2020 renaming to the Department of Financial Protection and
  Innovation (DFPI) — disclosed as a sign the mirrored text may not
  reflect the regulation's most recent administrative updates, even though
  the substantive deadline and dual-filing terms matched DFPI's own
  current public guidance found during research (itself not verified to
  the same two-fetch standard, disclosed as such).
- Correctly built the Regulation D comparison as the document's own
  analysis of two independently verified texts, explicitly disclosed as
  not a comparison stated in either source.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 1 of 7 quotes (10 CCR § 260.102.14(a))
mismatched on a strict check, passing on whitespace-collapsed comparison.
Manual inspection confirmed the established Cornell LII markup artifact:
a spurious space before punctuation around the hyperlinked term
"www.dbo.ca.gov" (source: "www.dbo.ca.gov . If the issuer" vs. delivered
"www.dbo.ca.gov. If the issuer"). Confirmed as a genuine source-side
rendering artifact — no correction needed.

## Honest gap(s) disclosed

The several other, differently structured limited-offering and
private-transaction exemptions in § 25102 (subdivisions (h), (i), (n),
(p), (q), (r)) are named but not covered. The regulation's electronic-
filing default and consequences, its narrow hardship exception, and its
fee schedule are not restated. Rule 506(c)'s accredited-investor
verification regime and general-solicitation rules, and the federal
preemption of state qualification authority for a federally covered
security (addressed elsewhere in this corpus, but inapplicable to
§ 25102(f) since it is not itself a federally covered exemption), are not
compared. This document does not evaluate whether any particular offer or
sale meets the exemption's conditions.

## Method

Fetched Corp. Code § 25102 from `leginfo.legislature.ca.gov`, 10 Cal. Code
Regs. § 260.102.14 and 17 C.F.R. § 230.506 from Cornell LII
(`law.cornell.edu`), each fetched twice by the research agent with two
distinct User-Agent strings, confirmed byte-identical after whitespace
normalization. All 7 unique citation quotes across the 5 authority
clauses programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes); 6 confirmed clean immediately, 1 confirmed clean
via whitespace-collapsed comparison after manual context inspection ruled
out a genuine transcription defect. Independently re-verified during
integration review via a sixty-sixth fetch (a distinct curl User-Agent
string, "Groundtruth-66thVerify-LimOffExempt/1.0") of all three sources —
reproduced the identical artifact, confirming it is a stable source-side
characteristic.

## Verification

- All three sources fetched twice independently by the research agent
  with distinct User-Agent strings, plus a sixty-sixth independent fetch
  during integration review; all 7 quotes confirmed clean (6 direct, 1 via
  whitespace-normalized match after confirming a genuine source-side
  artifact).
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  subdivision versus genuinely independent sources (the statute vs. the
  implementing regulation vs. the federal Rule 506(b) comparison); correct
  as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles duplicate existing corpus titles — consistent
  with this project's established pattern of generic, reused boilerplate
  drafting-clause titles; clause IDs remain unique.
- Checked every citation's `case` field for emptiness — all 7 populated
  with proper citation identifier strings.
- No new fields required — all four fields (`preparerName`, `companyName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: California Limited Offering Exemption — Information Sheet
  (`california_limited_offering_exemption_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Business Formation category. No new
  fields.
- Corpus: 3,179 → 3,186 clauses; 420 → 421 documents. Third processed item
  of wave 94.
