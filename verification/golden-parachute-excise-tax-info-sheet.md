# Ending employment, new document: Golden Parachute Excise Tax — Information Sheet

## Why this document

First document of wave 88, chosen via a scoping agent's category-gap
survey. Read the existing "401(k)/Retirement Plan Distribution
Notice" and "Deferred Compensation and Equity Vesting at Termination"
documents in full — confirmed the former covers ERISA/qualified-plan
rollover mechanics and the latter covers Labor Code "wages"
characterization and ISO post-termination exercise windows, neither
touching golden-parachute excise tax. Grepped the corpus for "golden
parachute," "280G," "4999," and "excess parachute payment" — zero
hits anywhere. Confirmed a real, non-duplicative gap. This is federal
tax law with no California-specific analog, consistent with this
corpus's established practice of including federal-only documents
(OWBPA, FMLA, DTSA) where no state analog exists.

## What this document covers

7 clauses: 2 drafting (declaration/scope, status declaration/
signature) and 5 authority clauses, citing 26 U.S.C. §§ 280G(a),
(b)(2)(A), (b)(2)(A)(i), (b)(2)(A)(ii), (b)(3)(A), (b)(5)(A)(ii),
(b)(5)(B), (c), (c)(2), and 4999(a), (b):

- **`goldenparachute_parachute_payment_defined`** (§ 280G(b)(2)(A),
  (b)(2)(A)(i)) — the "parachute payment" definition: compensation to
  a disqualified individual contingent on a change in ownership/
  control.
- **`goldenparachute_disqualified_individual_defined`** (§ 280G(c),
  (c)(2)) — who counts as a "disqualified individual" (officer,
  shareholder, or highly-compensated individual).
- **`goldenparachute_three_times_base_amount_threshold`**
  (§ 280G(b)(2)(A)(ii), (b)(3)(A)) — the 3-times-base-amount trigger
  and the base-amount definition.
- **`goldenparachute_deduction_denial_and_excise_tax`** (§ 280G(a);
  § 4999(a), (b)) — the two consequences: employer deduction denial and
  the 20% employee excise tax, cross-referenced by definition.
- **`goldenparachute_shareholder_approval_exception`**
  (§ 280G(b)(5)(A)(ii), (b)(5)(B)) — the shareholder-approval exception
  for corporations whose stock is not publicly traded.

## Genuine corrections and findings

- Confirmed the task brief's assumed subsection lettering and 3-times-
  base-amount threshold match the fetched statutory text exactly — no
  correction needed to the core structure.
- Confirmed the shareholder-approval exception's two-part test (no
  readily tradeable stock, plus a 75%-of-voting-power shareholder vote
  with adequate disclosure) precisely from the fetched text, correctly
  distinguishing this closely-held-corporation branch from the
  separate, unconditional small-business/S-corp exemption in
  § 280G(b)(5)(A)(i) — which the document names but does not cover.
- Correctly cross-referenced § 4999(b)'s definition of "excess
  parachute payment" back to § 280G(b) rather than restating it,
  disclosing the cross-reference relationship explicitly.

## Honest gap(s) disclosed

§ 280G(b)(2)(B) (securities-law-violation payments), (b)(2)(C) (the
one-year-agreement presumption's exact operation), (b)(4) (reasonable-
compensation carve-out and present-value discount rate), (b)(5)(A)(i)
(small-business/S-corp exemption), (b)(6) (qualified-plan exemption),
(d)(5) (affiliated-group treatment), § 280G(e) (TARP-era rules), and
§ 4999(c) (withholding mechanics) are all named but not quoted or
independently verified — each disclosed in the relevant clause's gap
field rather than silently omitted. This document does not calculate
any specific individual's base amount, determine whether a specific
payment is a parachute payment, or determine whether any specific
shareholder vote satisfied the exception's requirements.

## Method

Fetched 26 U.S.C. §§ 280G and 4999 from Cornell Law School's Legal
Information Institute (`law.cornell.edu`), each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization (verified via matching
MD5 hashes). All 11 citation quotes across the 5 authority clauses
programmatically confirmed as exact contiguous substrings (no
ellipsis-joined quotes). Independently re-verified during integration
review via a fortieth fetch (a distinct curl User-Agent string,
"Groundtruth-40thVerify-GoldenParachute/1.0") of both sections — all
11 quotes confirmed clean.

## Verification

- Both federal statutory sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a fortieth
  independent fetch during integration review; all quotes confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean (the agent's self-report noted it caught and
  fixed one round of gap-field placeholder-syntax violations during
  its own drafting, before delivery).
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of § 280G(b)
  versus the genuinely independent §§ 280G(a), 280G(c), and 4999;
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 11
  populated with proper case/citation identifier strings.
- Three fields reused (`companyName`, 197 prior documents;
  `employeeName`, 137; `effectiveDate`, 7). Three new fields required
  (`changeInControlDate`, `aggregateParachutePaymentAmount`,
  `baseAmount`) — grepped the corpus and confirmed no existing field
  fit these tax-specific concepts.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Golden Parachute Excise Tax — Information Sheet
  (`golden_parachute_excise_tax_info_sheet`), 7 clauses (5 authority +
  2 drafting), in the Ending employment category. Three new fields
  (`changeInControlDate`, `aggregateParachutePaymentAmount`,
  `baseAmount`).
- Corpus: 2,999 → 3,006 clauses; 395 → 396 documents. First addition of
  wave 88, and the corpus's first crossing of the 3,000-clause mark.
