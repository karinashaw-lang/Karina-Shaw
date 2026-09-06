# Business Formation, new document: Uniform Voidable Transactions Act — Information Sheet

## Why this document

Second processed item of wave 105 (Business Formation slot, 2×2
pattern). A scoping pass and clause-level duplication check confirmed
zero prior coverage of the Uniform Voidable Transactions Act anywhere
in the corpus, distinct from the existing FTB-suspension/revivor-adjacent
clause (`soi_suspension_consequence`) and the existing corporate
formation and creditor-facing documents.

## What this document covers

9 clauses: 2 drafting (intro/scope, signature block) and 7 authority
clauses, citing Civil Code §§ 3439.01(a), (c)-(e), (m); 3439.02(a)-(b);
3439.04(a), (a)(1), (b), (c); 3439.05(a); 3439.07(a), (c); and
3439.09(a)-(c):

- **`uvta_definitions`** — the statutory definitions of "transfer,"
  "creditor," "debt," "debtor," and "asset."
- **`uvta_insolvency_definition`** — the separate balance-sheet
  insolvency test and its rebuttable presumption.
- **`uvta_actual_intent_test`** — the actual-intent-to-hinder-delay-
  or-defraud ground for voidability and its burden of proof.
- **`uvta_badges_of_fraud`** — the eleven non-exclusive statutory
  factors bearing on actual intent.
- **`uvta_constructive_fraud_test`** — the two distinct constructive-
  fraud grounds, with different creditor eligibility.
- **`uvta_limitations_period`** — the three distinct time rules
  governing these claims.
- **`uvta_creditor_remedies`** — the remedies available to a creditor
  who prevails.

## Genuine findings

- **A significant correction to the research brief's assumption about
  the constructive-fraud test**: the brief described a single combined
  test (no reasonably equivalent value plus insolvency, undercapital-
  ization, or intent to incur unpayable debts, treated as interchangeable
  alternatives). The agent read §§ 3439.04(a)(2) and 3439.05 directly and
  found these are two separate statutory provisions with different
  creditor eligibility — § 3439.04(a)(2) is open to any creditor
  regardless of when the claim arose, while § 3439.05 is limited to
  creditors whose claim predates the transfer and is keyed to actual
  insolvency rather than merely a risk of undercapitalization. Corrected
  and stated as two separate clauses rather than merged into one.
- **A parallel, equally significant correction on the limitations
  period**: the brief referred generally to a single limitations/repose
  period. The agent found the statute actually sets three different time
  rules — a four-year-or-one-year-discovery period for actual-intent
  claims, a flat four-year period for constructive-fraud claims, and an
  absolute seven-year repose period that overrides both regardless of
  discovery — and stated all three separately rather than compressing
  them into one.
- **A correctly identified separate location for the insolvency
  definition**: the agent found "insolvent" is not defined alongside the
  other terms in § 3439.01's main definitions block, but in its own
  separate section (§ 3439.02), and built a dedicated clause for it
  rather than folding it into the general-definitions clause.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on the statute's own text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found all 14 citation instances failed a
byte-for-byte strict match, but all 14 passed after normalizing
whitespace. Manual inspection of the underlying HTML confirmed the cause:
leginfo.legislature.ca.gov's source markup line-wraps subdivision text
with an embedded newline (e.g., between "release, lease," and "license,"
in the § 3439.01(m) "transfer" definition), where the delivered quote
uses a normal space at that same point. This is the same general class
of source-side whitespace-normalization artifact documented repeatedly
elsewhere in this corpus (previously identified as a Cornell LII
markup-stripping pattern; this fetch confirms leginfo.legislature.ca.gov
produces an analogous but distinct newline-insertion artifact of its
own). Confirmed as genuine and benign across all 14 instances — no
content correction needed.

## Honest gap(s) disclosed

This document does not restate Civil Code § 3439.01's remaining defined
terms ("claim," "lien," "organization," "person," "property," "record,"
"sign," "electronic," and "valid lien"). It does not restate
§ 3439.07(b) (attachment before judgment) or § 3439.07(d) (rights of an
assignee for the benefit of creditors), or the good-faith-transferee
protections in § 3439.08 that § 3439.07 itself cross-references. It does
not perform, or supply the financial data needed to perform, an actual
insolvency calculation, evaluate any specific transfer against the
badges-of-fraud factors, calculate any specific limitations deadline, or
determine whether any particular transfer or obligation is voidable —
only a court applying the statute to specific facts can determine that.

## Method

Fetched Civil Code §§ 3439.01, 3439.02, 3439.04, 3439.05, 3439.07, and
3439.09 from leginfo.legislature.ca.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical (159,736 bytes each on the chapter-wide fetch).
CourtListener's daily rate limit was already exhausted on the agent's
test call; no case law was used, a disclosed and legitimate choice. All
14 citation instances programmatically confirmed by the research agent
as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-ninth fetch (a new distinct curl User-Agent string,
"Groundtruth-109thVerify-UVTA/1.0") of all six sections — all 14 citation
instances confirmed clean after normalizing whitespace, with the cause
traced to a genuine leginfo line-wrap newline artifact via direct
byte-level inspection, not a content defect. Both corrected structural
findings (the two-provision constructive-fraud test and the three-rule
limitations period) were independently reconfirmed present in the
freshly fetched text.

## Verification

- All six Civil Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-ninth independent fetch during integration review; all
  14 citation instances confirmed clean, all fourteen after accounting
  for a confirmed genuine whitespace artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is
  distinct from the existing FTB-suspension/revivor-adjacent clause and
  from all other existing creditor- and formation-facing documents.
- Checked every citation's `case` field for emptiness — all 14
  populated with proper citation identifier strings.
- One new field required (`creditorName`), confirmed genuinely new via a
  corpus-wide field-id lookup; the remaining five fields (`debtorName`,
  `preparerName`, `dateSigned`, `cityState`, `propertyDescription`)
  confirmed already existing and reused from the corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Uniform Voidable Transactions Act — Information Sheet
  (`uniform_voidable_transactions_act_info_sheet`), 9 clauses (7
  authority + 2 drafting), in the Business Formation category. One new
  field (`creditorName`).
- Corpus: 3,498 → 3,507 clauses; 463 → 464 documents. Second processed
  item of wave 105.
