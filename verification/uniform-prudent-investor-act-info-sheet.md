# Estate Planning, new document: Uniform Prudent Investor Act — Information Sheet

## Why this document

Confirmed by grep that "prudent investor" had zero hits anywhere in
the corpus. Distinct from the existing Revocable Living Trust and
Trustee's Notification to Beneficiaries documents, neither of which
covers this specific investment-standard-of-care doctrine. First of
wave 59's two Estate Planning documents.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Prob. Code §§ 16046-16048 and 16051:

- **`prudentinvestor_core_standard`** (§§ 16046(a), 16047(a)-(b)) — the
  trustee's duty and the prudent-investor standard, including the
  portfolio-as-a-whole rule for evaluating individual decisions.
- **`prudentinvestor_factors`** (§ 16047(c)-(d)) — the eight
  enumerated, non-exhaustive factors and the duty to ascertain
  relevant facts.
- **`prudentinvestor_diversification`** (§ 16048) — the mandatory
  diversification duty and its "prudent not to" exception.
- **`prudentinvestor_expand_restrict`** (§ 16046(b)) — the settlor's
  power to alter the default rule by express trust provisions.
- **`prudentinvestor_hindsight`** (§ 16051) — compliance judged at the
  time of the decision, not by hindsight.

## Genuine corrections and findings

- **A deliberate narrowing below the research assignment's own
  framing**: the assignment's brief described the settlor's power as
  potentially "eliminating" the rule; the agent verified § 16046(b)'s
  actual text says "expand or restrict" only — it does not use the
  word "eliminate" — and the delivered clause states only what the
  statute actually says, declining to take a position on how far a
  restriction could go.
- Confirmed the factor list under § 16047(c) is expressly introduced as
  non-exhaustive ("among circumstances that are appropriate to
  consider"), not a closed list.
- Confirmed the diversification exception has no statutory list of
  qualifying circumstances — the statute commits "prudent not to
  diversify" to case-by-case determination rather than fixed criteria,
  left honestly unresolved rather than filled in with invented
  examples.
- Confirmed the rule is explicitly not a list of approved or forbidden
  asset classes — the statute states a trustee may invest in any kind
  of property or investment strategy consistent with the standard.

## Honest gap disclosed

The document does not address any other state's version of the
Uniform Prudent Investor Act, nor does it determine whether any
specific trustee's decisions, or any specific trust's portfolio,
satisfy the standard — genuinely fact-specific determinations left
unresolved throughout.

## Method

Fetched Cal. Prob. Code §§ 16046-16054 directly from
`leginfo.legislature.ca.gov`, each independently re-fetched with a
distinct User-Agent header/Accept combination; after extracting the
statutory-text content div and normalizing whitespace, all sections
were confirmed byte-identical across both fetches (raw byte counts
differed due to dynamic JSF ViewState tokens, disclosed and resolved
via the normalization step). All 6 citation quotes programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All sections fetched twice independently with distinct request
  signatures; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — subdivisions of the
  same section correctly disclosed as one source (§ 16046(a)/(b) shared
  across two clauses; § 16047(a)-(d) shared across two clauses); §§
  16048 and 16051 correctly disclosed as standing alone; correct as
  delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`trusteeName`, `trustName`, `originalTrustDate`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Uniform Prudent Investor Act — Information Sheet
  (`uniform_prudent_investor_act_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Estate Planning category. No new fields.
- Corpus: 2,207 → 2,214 clauses; 283 → 284 documents. First document of
  wave 59.
