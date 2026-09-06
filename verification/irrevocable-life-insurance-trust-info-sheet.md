# Estate Planning, new document: Irrevocable Life Insurance Trust (ILIT) — Information Sheet

## Why this document

Fourth and final processed item of wave 134 (Estate Planning slot,
1×4 pattern, closing the wave). The agent ruled out the Heggstad
petition, the QTIP marital deduction, the small-value real-property
affidavit, the power-of-attorney third-party-acceptance duty, and
right-of-publicity postmortem descendibility — all confirmed already
covered. The chosen topic — the federal estate/gift tax structure of
an irrevocable life insurance trust and California's insurable-
interest statute governing a trust that owns or originates a policy —
was confirmed genuinely open and distinct from this corpus's existing
Revocable Living Trust, Life Insurance Beneficiary Designation, and
Testamentary Trust documents. A duplication check on §§ 2042, 2035,
2514, 2632, 25.2503-3, and 10110.1 found two apparent "2035" hits,
both confirmed coincidental year references ("scheduled for repeal on
January 1, 2035") rather than statutory citations; zero hits on every
other section.

## What this document covers

12 clauses: 4 drafting (intro, the Crummey-technique explanation, a
corpus-distinction note, signature) and 8 authority clauses, citing 26
U.S.C. § 2042(2), § 2035(a), § 2514(e), § 2632(c)(1), (c)(3)(A)-(B),
26 CFR § 25.2503-3(b) and its Example (2), and Cal. Ins. Code
§ 10110.1(b), (d):

- **`ilit_estate_inclusion_incidents_of_ownership`** — why an ILIT
  keeps proceeds out of the insured's gross estate (§ 2042(2)).
- **`ilit_three_year_rule`** — the three-year look-back for
  transferring an existing policy into an ILIT (§ 2035(a)).
- **`ilit_present_interest_requirement`** — the annual-exclusion
  present-interest requirement and its life-insurance-specific
  regulatory example.
- **`ilit_lapse_as_release_5and5`** — the lapse-of-withdrawal-right
  "5-and-5" exception (§ 2514(e)).
- **`ilit_gst_indirect_skip_allocation`** / **`ilit_gst_trust_
  definition`** — automatic GST-exemption allocation to a "GST trust."
- **`ilit_ca_insurable_interest_self`** / **`ilit_ca_insurable_
  interest_trust_caution`** — an individual's own unlimited insurable
  interest, and the separate limit on a trust that originates its own
  coverage.

## Genuine findings

- **A disclosed interpretive reading distinguished from statutory
  text**: the three-year-rule clause's gap explicitly flags that the
  conclusion "a trust-originated policy avoids the three-year
  look-back altogether" is the research's own reading of the statute's
  language, not a phrase appearing in the statute itself, and was not
  checked against any IRS ruling or Tax Court decision.
- **A disclosed, deliberate choice not to cite unverified case law**:
  a CourtListener search for *Crummey v. Commissioner* — the case that
  gave the "Crummey power" technique its name — returned a 429; the
  drafting clause naming the technique explicitly discloses the case
  is not independently cited anywhere in the document.
- **A disclosed textual-scope flag on a California statute's likely
  target**: the trust-insurable-interest-limit clause's gap notes
  § 10110.1(d)'s language ("policies of insurance for investors")
  appears, on its face, aimed at stranger-originated life insurance
  arrangements rather than an ordinary family ILIT, without asserting
  that reading as settled law absent located case authority.
- **A disclosed unaddressed community-property complication**: the
  estate-inclusion clause's gap flags that a spouse's community-fund
  premium contributions can raise a partial-interest question this
  document does not resolve.

## Honest gap(s) disclosed

This document does not address § 2042(1) (executor-payable proceeds),
the extensive case law on what specific policy powers constitute
"incidents of ownership," direct-skip GST rules or the GST tax
computation itself, the "hanging power" drafting technique used to
manage 5-and-5 exposure, four of § 2632(c)(3)(B)'s five remaining
GST-trust exceptions, and California case law construing § 10110.1(d)
as applied to an ordinary family ILIT.

## Method

Fetched 26 U.S.C. §§ 2042, 2035, 2514, 2632 from Cornell Law School's
Legal Information Institute, 26 CFR § 25.2503-3 from the Electronic
Code of Federal Regulations, and Cal. Ins. Code § 10110.1 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical (or
identical after normalizing the JSF ViewState token for the leginfo
fetch). CourtListener's daily quota was already exhausted (HTTP 429)
on the agent's test call for *Crummey v. Commissioner*; no case law
was used or fabricated. All 10 citation instances were programmatically
confirmed by the research agent as exact, contiguous substrings —
after the agent caught and fixed its own extraction bug (an earlier
tag-stripping pass had fabricated a space inside "October 21, 1942,
during" that does not exist in the raw HTML) before finalizing.

Independently re-verified during integration review via a
two-hundred-and-first fetch (a new distinct curl User-Agent string,
"Groundtruth-201stVerify-ILIT/1.0") of all six sources — the five
statutory/regulatory sources fetched cleanly on the first attempt; the
eCFR section required this session's established browser-realistic
User-Agent workaround for eCFR's bot protection, which succeeded
cleanly. All 10 citation instances confirmed clean on direct
normalized-whitespace substring match (after correcting a section-
number-extraction regex bug in the verification script itself, which
had nothing to do with the source content). The incidents-of-ownership
rule, the three-year look-back, the present-interest definition and
its life-insurance example, the 5-and-5 lapse rule, the automatic
GST-allocation rule and GST-trust definition, and both insurable-
interest provisions were all independently reconfirmed present in the
freshly fetched text.

## Verification

- All six cited sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a two-hundred-and-first
  independent fetch during integration review; all 10 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `ilit_` prefix has zero collisions. Ran section-
  number-specific greps for "2042," "2035," "2514," "2632,"
  "25.2503-3," and "10110.1" across the full corpus — "2035" returned
  two hits, both traced to coincidental year references ("January 1,
  2035" repeal dates); zero hits on every other section.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `insuredName` — did not exist previously in the corpus under any
  name that captured "the person whose life is insured" as distinct
  from settlor, trustee, or beneficiary. Ten other fields
  (`settlorName`, `trustName`, `trusteeName`, `successorTrusteeName`,
  `beneficiaryName`, `insurerName`, `policyNumber`, `dateSigned`,
  `cityState`, `preparerName`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Irrevocable Life Insurance Trust (ILIT) — Information
  Sheet (`irrevocable_life_insurance_trust_info_sheet`), 12 clauses
  (8 authority + 4 drafting), in the Estate Planning category. One
  new field: `insuredName`.
- Corpus: 4,413 → 4,425 clauses; 555 → 556 documents. Fourth and final
  processed item of wave 134.

## Wave 134 summary

Wave 134 used a 1×4 rotation pattern (one document each in Real
Estate, Confidentiality & IP, Hiring, and Estate Planning), targeting
the four tied-lowest categories after wave 133 closed:

1. **Mechanics Lien Waiver and Release Forms (Progress and Final
   Payment)** (Real Estate) — 12 clauses, Civ. Code §§ 8120-8138.
2. **Mediation Confidentiality (Evid. Code §§ 1115-1129, 703.5) —
   Information Sheet and Statutory Disclosure Notice**
   (Confidentiality & IP) — 16 clauses.
3. **Unpaid Trial Work / Working Interview — Information Sheet**
   (Hiring) — 9 clauses, IWC Wage Order No. 4-2001, Lab. Code
   §§ 1197, 1194, 1174.
4. **Irrevocable Life Insurance Trust (ILIT) — Information Sheet**
   (Estate Planning) — 12 clauses, 26 U.S.C. §§ 2042, 2035, 2514,
   2632, 26 CFR § 25.2503-3, Cal. Ins. Code § 10110.1.

Corpus totals across the wave: 4,388 → 4,425 clauses (+37 net after
accounting for the wave's starting point of 4,388 following wave 133's
close at 4,376 — the wave itself added 49 clauses across its four
documents: 12 + 16 + 9 + 12); 552 → 556 documents (+4). No genuine
duplication findings required excluding any delivered clause this
wave — every apparent grep hit across all four documents was
confirmed, on direct inspection, to be either a false-positive
cross-code collision, a coincidental substring or year-number match,
or an incidental cross-reference. Two cosmetic drafting/formatting
defects (unrelated to citation accuracy) were found and fixed during
integration review this wave: a stray word breaking a sentence in the
ICARA document (wave 133, noted for continuity) and a repeated
nested-subdivision citation-formatting typo in the Mediation
Confidentiality document.
