# Estate Planning, new document: Testamentary Trust — Information Sheet

## Why this document

The existing Revocable Living Trust and Pour-Over Will documents don't
cover a trust created within a will itself, taking effect only at
death and subject to probate — a genuinely distinct mechanism. The
only prior mention of "testamentary trust" in this corpus was a
passing reference within the Revocable Living Trust document's
`trust_pour_over_will` clause.

## What this document covers

8 clauses: 2 drafting (declaration, trustee acceptance) and 6
authority clauses:

- **`testtrust_creation`** (Prob. Code § 15200(c)) — how a
  testamentary trust is created.
- **`testtrust_probate_required`** (Prob. Code §§ 7000, 7001) — why
  probate applies, the key difference from a living trust.
- **`testtrust_common_uses`** (Prob. Code §§ 3400, 3401) — a common
  use holding property for a minor beneficiary, honestly distinguished
  between the verified statutory trigger and the disclosed
  practitioner-convention inference.
- **`testtrust_funding_mechanics`** (Prob. Code §§ 11640(a), 11641) —
  how a testamentary trust is funded through the general probate
  distribution process.
- **`testtrust_trustee_obligations`** (Prob. Code §§ 15001(a), 16000)
  — the trustee's continuing obligations under the same general trust
  law that governs any trust.
- **`testtrust_revocability`** (Prob. Code §§ 6120, 15400, 15401(a)(2),
  (b)(2)) — why a testamentary trust becomes irrevocable at the
  testator's death, with an honestly flagged narrow wrinkle.

## Genuine corrections and findings

- **A significant correction**: the correct creation citation is Prob.
  Code § 15200(c), not § 15200(b) as originally guessed — subsection
  (b) is the lifetime-transfer method (used for living trusts); it is
  (c) that covers wills ("A transfer of property by the owner, by
  will or by other instrument taking effect upon the death of the
  owner, to another person as trustee").
- Refined the probate-required framing: rather than a general "wills
  require probate" statute, the actual mechanism is §§ 7000 and 7001
  — title passes to the will's devisee at death, but that property
  remains "subject to administration under this code" (i.e., subject
  to probate) until distributed. More precise than the original
  framing, and ties directly into the funding-mechanics clause.
- On common uses for minor beneficiaries, verified at two honest
  tiers: found a genuinely on-point, verifiable trigger — §§ 3400/3401
  cap California's simplified "pay a minor's property to a parent to
  hold in trust" mechanism at $5,000, above which that simplified
  route is unavailable. No statute itself says testators commonly
  respond to this by writing a testamentary trust — that is disclosed
  explicitly in the `gap` field as professional/practitioner
  convention, not independently statute-verified.
- Confirmed no testamentary-trust-specific funding provision exists —
  it is the general order-for-distribution framework (§ 11640(a) plus
  § 11641) that applies to any estate distribution, trustee or
  individual devisee alike.
- Confirmed no statute states "Division 9 applies regardless of
  creation method" verbatim. The trustee-obligations clause is built
  from § 15001(a) ("this division applies to all trusts") plus § 16000
  (the trustee's duty runs to "this division" generally), with the
  "regardless of creation method" conclusion explicitly flagged as
  this clause's own inference from those two sections, not a verbatim
  rule.
- On revocability, also reasoned rather than asserted by a single
  statute: built from § 6120 (only the living testator can revoke a
  will) plus § 15400/§ 15401(a)(2) (default trust revocation requires
  the settlor's living act). A genuine, honestly-flagged wrinkle:
  § 15401(b)(2) allows a settlor to grant someone else a revocation
  power that survives the settlor's death — disclosed as a narrow
  provision whose applicability to testamentary trusts specifically
  could not be confirmed.

## Method

Fetched Prob. Code §§ 3400, 3401, 6120, 7000, 7001, 11640, 11641,
15001, 15200, 15400, 15401, and 16000 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually
identical after normalizing non-breaking spaces. All 11 citation
quotes programmatically confirmed as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 15400/§ 15401
  correctly disclosed as one source, not independent, where both are
  cited together; § 6120 versus §§ 15400/15401 (different Probate Code
  divisions) correctly treated as independent; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`testatorName`, `testatorCounty` reused from the Last
  Will/Codicil documents; `trustName`, `trusteeName`,
  `successorTrusteeName`, `beneficiaryName` reused from the Revocable
  Living Trust/Special Needs Trust documents) independently confirmed
  to match existing corpus convention. New field: `distributionAge`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Testamentary Trust — Information Sheet
  (`testamentary_trust_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Estate Planning category. New field:
  `distributionAge`.
- Corpus: 1,403 → 1,411 clauses; 176 → 177 documents. This completes
  wave 31 (4 documents: Reporting Time Pay, Fixed-Term Employment
  Contract, Layoff/RIF Selection Criteria, and this document).
