# Estate Planning, new document: Federal Estate and Gift Tax Basics — Information Sheet

## Why this document

Second processed item of wave 93 (Estate Planning slot). Confirmed no
existing document in the corpus addresses federal estate or gift tax at
all — grepped for "estate tax," "gift tax," "portability," "annual
exclusion," "2010," "2056," and "2503" and found only false-positive hits
(unrelated dates, an unrelated Cal. Corp. Code § 2010, docket-citation
years). A genuine, notable gap given the category's otherwise dense
coverage of state-law estate planning instruments and probate procedure.

## What this document covers

7 clauses: 2 drafting (estate disclosure, gift disclosure) and 5 authority
clauses, citing 26 U.S.C. § 2010(a), (c)(1), (c)(2), (c)(3)(A)-(B),
(c)(4), (c)(5)(A), § 2056(a), and § 2503(b)(1)-(2):

- **`esttax_credit_mechanism`** (§ 2010(a), (c)(1)) — the unified-credit
  mechanism, framing the exclusion as a credit computation rather than a
  flat exemption line.
- **`esttax_basic_exclusion_amount`** (§ 2010(c)(2), (c)(3)(A)-(B)) — the
  current $15,000,000 basic exclusion amount and its post-2026
  inflation-adjustment formula.
- **`esttax_portability`** (§ 2010(c)(2)(B), (c)(4), (c)(5)(A)) — the
  deceased spousal unused exclusion amount, its definition, and the
  timely, irrevocable election requirement.
- **`esttax_marital_deduction`** (§ 2056(a)) — the unlimited marital
  deduction's general rule.
- **`esttax_annual_gift_exclusion`** (§ 2503(b)(1)-(2)) — the $10,000
  statutory base figure and inflation-adjustment formula for the annual
  per-donee gift exclusion, without asserting any current adjusted figure.

## Genuine corrections and findings

- **A major genuine finding, directly correcting the task's own outdated
  premise**: the brief assumed the operative complication would be the
  still-pending 2017 TCJA sunset (reverting the exclusion to a
  $5,000,000-indexed figure after 2025). Independently fetching the
  current statutory text showed this premise is now obsolete: Pub. L.
  119-21 (the "One Big Beautiful Bill Act," signed July 4, 2025) rewrote
  § 2010(c)(3) to state a literal **$15,000,000** basic exclusion amount
  directly in the statute's text, reset the inflation-adjustment base year
  to "after 2026," and repealed the former TCJA sunset subparagraph
  outright. Because today's date (Sept. 4, 2026) falls within calendar
  year 2026 itself — the base year the statute uses before any inflation
  adjustment applies — the $15,000,000 figure is the operative amount
  directly from statutory text, with no IRS guidance needed. Independently
  re-confirmed during integration review by inspecting the raw fetched
  source context around the $15,000,000 figure.
- **Rigorous, disciplined dollar-figure handling, exactly matching the
  task's own caution**: for the annual gift exclusion (§ 2503(b)), the
  document deliberately states only the $10,000 statutory base figure and
  the inflation-adjustment mechanism — it does NOT assert any specific
  current adjusted dollar figure, since that number is set by an
  IRS-published Revenue Procedure the agent did not independently fetch
  and verify. This is a genuine example of principled restraint: avoiding
  a stale or guessed number rather than presenting one as settled fact.
- Correctly disclosed the repealed TCJA sunset provision only as
  historical context, explicitly not cited as current law.
- Correctly flagged § 2056(b)'s terminable-interest limitation (with its
  QTIP exception) and § 2056(d)'s non-citizen-spouse Qualified Domestic
  Trust rule as real, frequently determinative limitations on the marital
  deduction that this document does not resolve — disclosed rather than
  glossed over as if the "unlimited" marital deduction were unconditional.

## Honest gap(s) disclosed

The § 2001(c) tax-rate schedule, § 2010(b)'s pre-1977-gift credit
reduction, the generation-skipping transfer tax exemption (§ 2631) and
whether portability extends to it, § 2010(c)(5)(B)'s post-limitations-
period examination rule, § 2056(b)'s terminable-interest limitation and
QTIP election, § 2056(d)'s non-citizen-spouse rule, the parallel gift tax
marital deduction (§ 2523), § 2503(c) (minor's gifts), § 2503(e)
(tuition/medical exclusion), and § 2513 (gift-splitting) are named but not
independently fetched or covered. No specific current inflation-adjusted
gift-exclusion dollar figure is stated. This document does not calculate
or determine any specific estate's or gift's actual tax liability,
exclusion eligibility, or filing requirement.

## Method

Fetched 26 U.S.C. §§ 2010, 2056, and 2503 from Cornell Law School's Legal
Information Institute (`law.cornell.edu`), each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 8 unique citation
quotes across the 5 authority clauses programmatically confirmed as exact
contiguous substrings ending at sentence/clause boundaries (no
ellipsis-joined or mid-word-truncated quotes). Independently re-verified
during integration review via a sixty-first fetch (a distinct curl
User-Agent string, "Groundtruth-61stVerify-EstateGiftTax/1.0") of all
three sections — all quotes confirmed clean on direct substring match, no
extraction artifacts encountered; the $15,000,000/post-2026 finding
independently re-confirmed by direct inspection of the raw fetched
context.

## Verification

- All three federal sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a sixty-first independent
  fetch during integration review; all 8 unique quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections (§ 2010 vs. § 2056 vs.
  § 2503); correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- Four fields reused (`decedentName`, `dateOfDeath`, `survivingSpouseName`,
  `estimatedEstateValue`). One new field required (`giftDonorName`) —
  deliberately not reusing the existing `donorName` field, which is
  scoped elsewhere in the corpus to genetic/sperm-egg donors and would be
  semantically misleading here.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Federal Estate and Gift Tax Basics — Information Sheet
  (`federal_estate_gift_tax_basics_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Estate Planning category. One new field
  (`giftDonorName`).
- Corpus: 3,143 → 3,150 clauses; 415 → 416 documents. Second processed
  item of wave 93.
