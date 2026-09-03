# Estate Planning, new document: Omitted Spouse and Omitted Child (Pretermitted Heir) — Information Sheet

## Why this document

This topic previously existed in the corpus only within the Last Will
and Testament document, as two clauses (`will_omitted_spouse` and
`will_omitted_children`) embedded there. Following the established
"deepen a narrow/passing-mention topic into a full dedicated document"
pattern, the delivering agent independently re-verified both existing
clauses rather than assuming them correct, and expanded into a genuinely
deeper, standalone treatment covering ground the embedded pair didn't:
whether these protections reach a revocable-trust-turned-irrevocable
(not just a will), how an omitted share is actually apportioned/satisfied
against the rest of the estate, and the definitions behind the spousal
care-custodian anti-abuse exception as their own sourced material — using
a distinct `omitted_` id prefix to avoid collisions.

## What this document covers

8 clauses: 2 drafting (purpose declaration, certification/signature) and
6 authority clauses, citing Cal. Prob. Code §§ 21600, 21362, 21366,
21610-21611, and 21620-21623:

- **`omitted_scope_instruments`** (§ 21600) — these protections reach
  both wills and a trust that becomes irrevocable only on the settlor's
  death (not one irrevocable for some other reason during life).
- **`omitted_spouse_share`** (§ 21610) — the omitted spouse's default
  share: half of community/quasi-community property, plus a capped
  intestate-equivalent share of separate property.
- **`omitted_spouse_exceptions`** (§ 21611; §§ 21362, 21366) — the four
  exceptions, including the care-custodian anti-abuse rule with its own
  sourced "care custodian"/"dependent adult" definitions.
- **`omitted_child_share`** (§§ 21620, 21622) — the omitted child's
  default share: the full intestate share, uncapped, extending to a
  living child left out because the decedent believed the child dead or
  didn't know of the birth.
- **`omitted_child_exceptions`** (§ 21621) — the three exceptions,
  including the "other parent" carve-out with no spousal counterpart.
- **`omitted_satisfaction_apportionment`** (§ 21623) — how an established
  share is actually paid: first from the undisposed-of estate, then
  pro rata from all beneficiaries by date-of-death value, with an
  intent-preserving carve-out for specific gifts.

## Genuine corrections and findings

- **A correction to the assignment's own framing, disclosed rather than
  silently accepted**: the assignment brief assumed this topic existed
  only as a single narrow clause covering omitted spouse alone. The
  corpus actually already contained a second, fairly developed clause on
  omitted children (`will_omitted_children`). Both existing clauses were
  read in full and independently re-verified before this document was
  built as a genuinely deeper standalone treatment.
- Confirmed these protections reach a revocable-trust-turned-irrevocable-
  at-death, not just a will — directly supporting the "or certain trust
  instruments" framing, verified via § 21600's own cross-reference.
- **A previously uncovered mechanism**: § 21623 supplies the
  apportionment/abatement rule for how an omitted share is actually
  satisfied — first from the undisposed-of estate, then proportionally
  from all beneficiaries — and this mechanism applies identically to both
  the omitted-spouse and omitted-child chapters, unlike the entitlement
  and exceptions rules, which differ substantially between the two.
- Confirmed a structural asymmetry: the spouse's default share uses the
  community-property formula with a cap on separate property, while the
  child's is an uncapped full intestate share.
- Confirmed the omitted-child exceptions statute (§ 21621) was amended
  effective January 1, 2025 (Stats. 2024, Ch. 80, Sec. 108.5) —
  independently reconfirmed as current rather than assumed unchanged.
- Confirmed the care-custodian and dependent-adult definitions (§§ 21362,
  21366) are incorporated by cross-reference from a different part of the
  Probate Code (the presumption-of-fraud-or-undue-influence statutes)
  rather than defined within the omitted-spouse chapter itself.

## Honest gap disclosed

§ 21600's cross-reference to the Probate Code's general "trust"
definition (§ 82) was not independently quoted or verified — only the
irrevocability distinction actually stated in § 21600 itself is
described.

## Method

Fetched Cal. Prob. Code §§ 21600, 21610, 21611, 21362, 21366, 21620,
21621, 21622, and 21623 directly from `leginfo.legislature.ca.gov`, each
via two independent curl requests using distinct User-Agent strings —
confirmed byte-identical after whitespace normalization across all nine
sections (a few transient connection-reset errors from the proxy/server
were simply retried until both independent fetches succeeded). All 8
citation quotes programmatically confirmed as exact substrings of the
confirmed text.

## Verification

- All nine sections fetched twice independently with distinct
  User-Agents; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which citations are subdivisions of the same statutory
  chapter versus genuinely separate sections (e.g. §§ 21362 and 21366
  cross-referenced from outside the omitted-spouse chapter); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none, and a
  distinct `omitted_` id prefix was deliberately used to avoid colliding
  with the existing `will_` prefixed clauses). Two accepted generic
  drafting-title reuses ("Purpose of This Information Sheet,"
  "Certification and Signature").
- Field names (`preparerName`, `decedentName`, `relationshipToDecedent`,
  `dateSigned`, `cityState`) independently confirmed to match existing
  corpus convention. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Omitted Spouse and Omitted Child (Pretermitted Heir) —
  Information Sheet (`omitted_spouse_child_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Estate Planning category. No new
  fields.
- Corpus: 1,979 → 1,987 clauses; 253 → 254 documents. Closes wave 51
  (Natural Hazard Disclosure Statement, Family Allowance, Omitted Spouse
  and Omitted Child — Mold Disclosure did not deliver in this wave).
