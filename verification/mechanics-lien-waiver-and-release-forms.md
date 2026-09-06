# Real Estate, new document: Mechanics Lien Waiver and Release Forms (Progress and Final Payment)

## Why this document

First processed item of wave 134 (Real Estate slot, 1×4 pattern). The
agent ruled out Megan's Law database disclosure and the Declared
Homestead exemption as already substantively covered, and set aside
PACE loan financing, Notice of Non-Responsibility, price gouging, and
short-term-rental regulation as weaker or thinner fits. The chosen
topic — the four statutory mechanics-lien waiver-and-release forms
(Civ. Code §§ 8120-8138) — was confirmed genuinely open and a natural,
non-duplicative companion to this corpus's existing Mechanics Lien
Preliminary Notice document (which covers the notice given before a
lien attaches, not the release given after payment). A duplication
check on "8120" found three apparent hits, all confirmed false
positives: two were substring collisions with Penal Code § 18120
(firearm violations), and one was a citation to the unrelated Probate
Code § 8120 (probate notice publication).

## What this document covers

12 clauses: 4 drafting (purpose statement, and the full statutory text
of all four waiver-and-release forms) and 8 authority clauses, citing
Civ. Code § 8120, § 8122, § 8124(a)-(b), § 8132, § 8134, § 8136,
§ 8138:

- **`mlwr_applicability`** — the chapter's scope within Part 6 (Works
  of Improvement).
- **`mlwr_anti_waiver_of_other_claimants`** — the prohibition on
  contractually waiving a different claimant's rights in advance.
- **`mlwr_effect_of_release_conditions`** — the two-part statutory test
  for when a release actually protects the owner, lender, or surety.
- **`mlwr_conditional_progress_authority`** /
  **`mlwr_unconditional_progress_authority`** — when the progress-
  payment conditional and unconditional forms are required or void.
- **`mlwr_conditional_final_authority`** /
  **`mlwr_unconditional_final_authority`** — when the final-payment
  conditional and unconditional forms are required or void.

## Genuine findings

- **A disclosed structural distinction between progress and final
  forms**: the conditional-final-authority clause's gap notes the
  final-payment forms have no "Through Date" field and no
  previously-waived-but-unpaid-progress-payment exception, unlike the
  progress-payment forms — a narrower Exceptions section covering only
  disputed extras.
- **A disclosed unresolved consequence**: the effect-of-release-
  conditions clause's gap notes the statute does not identify who
  bears the burden of proving evidence of payment in a lien-
  foreclosure or bond-claim dispute.
- **A disclosed unspecified numeric requirement**: both unconditional-
  form authority clauses' gaps note the statute requires the "Notice
  to Claimant" warning to be printed in type at least as large as the
  largest type elsewhere in the form, but specifies no numeric point
  size.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "work of improvement" or the private-
versus-public-works boundary, does not identify who bears the burden
of proving evidence of payment, does not specify a numeric minimum
type size for the statutory warning text, does not address a
claimant's recourse against a party who obtains an unconditional
release without payment, and does not cover the separate Notice of
Nonresponsibility or multi-improvement lien-claim provisions outside
this chapter.

## Method

Fetched Civ. Code §§ 8120, 8122, 8124, 8132, 8134, 8136, 8138 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via raw curl, confirmed
byte-identical after normalizing the JSF ViewState token and debug
timestamp. CourtListener's daily quota was already exhausted (HTTP
429) on the agent's test call; no case law was used or fabricated.
All 7 citation instances were programmatically confirmed by the
research agent as exact, contiguous substrings — after the agent
caught and fixed its own extraction bug (an initial § 8124 quote used
ordinary spaces where the raw HTML contains literal non-breaking-space
characters) before finalizing.

Independently re-verified during integration review via a
one-hundred-and-ninety-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-198thVerify-MechanicsLienWaiver/1.0") of all
seven sections — all fetched cleanly on the first attempt. All 7
citation instances confirmed clean on direct normalized-whitespace
substring match, with no fallback needed. The chapter's applicability,
the anti-waiver-of-other-claimants rule, the two-part release-
effectiveness test, and all four forms' required/void triggers were
all independently reconfirmed present in the freshly fetched text.

## Verification

- All seven cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a
  one-hundred-and-ninety-eighth independent fetch during integration
  review; all 7 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each authority clause
  cites a single, textually separate section rather than restating a
  sibling section's rule; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `mlwr_` prefix has zero collisions. Ran section-
  number-specific greps for "8120," "8122," "8124," "8132," "8134,"
  "8136," and "8138" across the full corpus — "8120" returned three
  hits, all traced to false-positive collisions (Penal Code § 18120
  substring matches and an unrelated Probate Code § 8120 citation);
  zero hits on the other six section numbers.
- Checked every citation's `case` field for emptiness — all 7
  populated with proper citation identifier strings.
- Three new field ids confirmed genuinely necessary and non-
  duplicative: `customerName`, `throughDate`, `checkAmount` — none
  existed previously in the corpus under any name that fit this exact
  semantic purpose. Five other fields (`claimantName`, `ownerName`,
  `propertyAddress`, `payorName`, `payeeName`) reused from the
  existing corpus, two relabeled for this document's context.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Mechanics Lien Waiver and Release Forms (Progress and
  Final Payment) (`mechanics_lien_waiver_and_release_forms`), 12
  clauses (8 authority + 4 drafting), in the Real Estate category.
  Three new fields: `customerName`, `throughDate`, `checkAmount`.
- Corpus: 4,376 → 4,388 clauses; 552 → 553 documents. First processed
  item of wave 134.
