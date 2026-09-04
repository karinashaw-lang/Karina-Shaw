# Confidentiality & IP, gap-fix: No "Narrow-Restraint" Exception Under Section 16600 (added to Employee Non-Solicitation Agreement)

## Why this gap-fix, not a new document

Fourth document/gap-fix of wave 84. Read the existing
`employee_nonsolicit` document and all four of its clauses
(`nonsolicit_scope`, `nonsolicit_employee_split`,
`nonsolicit_customer_distinction`, `nonsolicit_ack`) in full. Confirmed
`nonsolicit_customer_distinction` already independently verifies and
quotes *AMN Healthcare, Inc. v. Aya Healthcare Services, Inc.*'s
approving quotation of *The Retirement Group v. Galante* — the
customer-non-solicitation-specific holding was already covered, not
merely mentioned in passing. Grepped the corpus for "narrow restraint"
and confirmed zero hits anywhere — the specific "narrow-restraint
exception" doctrine (*Edwards v. Arthur Andersen LLP*'s refusal to
adopt the Ninth Circuit's *Campbell* exception, and *AMN Healthcare*'s
application of that refusal) was a genuine, uncovered gap. Because this
doctrine is the general anti-narrow-restraint principle that both the
existing employee-solicitation and customer-solicitation lines of
authority in this document rest on, one new authority clause added to
the existing document was the right fix — not a duplicative standalone
document.

## What this gap-fix covers

One new authority clause, `nonsolicit_narrow_restraint`, inserted into
`employee_nonsolicit`'s `clauseOrder` immediately after
`nonsolicit_customer_distinction`: Section 16600's own broad-reading
directive with no exception for a "narrow" restriction; the state
Supreme Court's refusal in *Edwards v. Arthur Andersen LLP* to adopt a
judicially created "narrow-restraint" exception the Ninth Circuit had
recognized in *Campbell v. Trustees of Leland Stanford Jr. University*;
and the Court of Appeal's application of that rule in *AMN Healthcare*
to void a non-solicitation restriction despite its "narrow" framing.

## Genuine corrections and findings

- **Correction to the task's premise**: *AMN Healthcare*'s own facts
  and its own narrow-restraint holding concern an *employee*
  non-solicitation clause (barring former staff from recruiting the
  company's travel nurses), not a customer non-solicitation clause. The
  new clause states the general anti-narrow-restraint principle and its
  gap field makes this lineage distinction explicit rather than
  fabricating a customer-specific *AMN Healthcare* holding that does
  not exist.
- **Honestly disclosed sourcing-tier distinction**: the two quotations
  attributed to *Edwards v. Arthur Andersen LLP* itself were not
  independently fetched from Edwards's own opinion — CourtListener's
  API was rate-limited (125/day, exhausted) and its opinion pages
  return an AWS WAF bot challenge; Justia and FindLaw mirrors returned
  Cloudflare bot-challenge pages; the California Courts website's
  opinion archive does not retain the 2008 Edwards opinion (its S147190
  URL 404s, unlike AMN Healthcare's retained D071924 PDF). Both Edwards
  quotations are disclosed as reproduced only as block-quoted material
  within the independently-verified AMN Healthcare opinion — a weaker
  verification tier than the statutory and AMN Healthcare quotes — with
  the citation's `case` field naming this chain explicitly rather than
  citing Edwards as if independently confirmed.
- Correctly left open, rather than asserting, whether the rule applies
  identically to independent contractors (as opposed to employees) or
  to soliciting prospective (as opposed to existing) customers — neither
  question was resolved by the sources fetched.

## Honest gap(s) disclosed

*The Retirement Group v. Galante* (2009) — the case actually deciding
the customer-solicitation-specific rule, quoted approvingly within AMN
Healthcare and already independently verified elsewhere in this
document's `nonsolicit_customer_distinction` clause — was not
independently re-fetched for this clause; this clause does not confirm
whether Galante's own reasoning used the term "narrow restraint," only
that AMN Healthcare's use of that term arose in the employee-
solicitation context. Edwards's own opinion text is not independently
verified, as disclosed above.

## Method

Fetched Cal. Bus. & Prof. Code § 16600 from `leginfo.legislature.ca.gov`
and the official, certified-for-publication opinion PDF of *AMN
Healthcare, Inc. v. Aya Healthcare Services, Inc.*, 28 Cal.App.5th 923
(2018), from `courts.ca.gov` — a primary court source, not a mirror —
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. All 4 citation quotes
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a twenty-seventh fetch (a distinct curl User-Agent string,
"Groundtruth-27thVerify-CustNonsolicit/1.0") of both the statute and
the official court PDF (re-extracted from the PDF's text layer with
`pypdf`) — all 4 quotes confirmed clean.

## Verification

- Statute and case-law PDF each fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  twenty-seventh independent fetch during integration review; all 4
  quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in the clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field
  — clean.
- Checked source-independence disclosure logic — the clause correctly
  distinguishes the independently-verified statutory and AMN Healthcare
  quotes from the weaker-tier, block-quoted-only Edwards quotes; correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked the citation `case` field for emptiness — all 4 populated
  with proper case/citation identifier strings, including the
  explicitly-named sourcing chain for the two Edwards quotations.
- No fields used or needed — the clause is a general statement of law
  with no `{{placeholder}}` fields, matching the style of its sibling
  clauses in the same document.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- Gap-fix: added `nonsolicit_narrow_restraint` (1 authority clause) to
  the existing `employee_nonsolicit` document's `clauseOrder`
  (Confidentiality & IP / Hiring categories). No new fields, no new
  document.
- Corpus: 2,914 → 2,915 clauses; 384 documents (unchanged document
  count). Fourth and final addition of wave 84.

## Wave 84 summary

Wave 84 closes at 2,915 clauses / 384 documents (from 2,900/382 at
wave 83's close, since this document's own first addition
(`california_whistleblower_protection_info_sheet`) took the corpus
from 2,893/381 to 2,900/382): California General Whistleblower
Protection (During employment), California Freelance Worker Protection
Act Agreement (Hiring), OWBPA Group/Exit-Incentive Program Disclosure
Notice (Ending employment), and this narrow-restraint gap-fix
(Confidentiality & IP) — one document or gap-fix in each of the four
target categories, following the established 1×4 strict-alternation
pattern. Wave 85 should return to a 2×2 pattern across two of the
remaining, less-recently-touched categories.
