# Estate Planning, fourth document: Revocable Living Trust

## Why this document

Completes the core four-document Estate Planning build-out (Will, Financial
Power of Attorney, Advance Health Care Directive, and now a Living Trust) —
the standard set of documents a basic estate plan is built from. Of the
four, a trust is the most structurally complex, and the research pass for
this document explicitly assessed whether that complexity makes a
clause-assembly format inappropriate before drafting anything.

## The funding disclosure — a deliberate, prominent design choice

A revocable living trust's most consequential real-world failure mode isn't
a defect in the document's language — it's a document that's perfectly
valid but never actually holds the property it was meant to hold. A trust
controls only property that was actually, correctly transferred into it;
real property specifically requires its own recorded deed into the
trustee's name, an act that happens at a county recorder's office, entirely
outside this document. An unfunded or partially-funded trust doesn't fail
as a trust — it just fails to do the one thing people build one for.

That fact is treated as load-bearing here, not a footnote: it's stated
plainly in the document's own `description` field (so it's visible before a
user even opens the wizard), and the clause that sources it,
`trust_property_formality`, is placed second in the clause order —
immediately after the declaration, ahead of even the basic creation and
validity requirements — rather than buried later in the document. This is
a factual disclosure about what the law requires, consistent with this
project's "inform, never advise" architecture: it states what a trust
holds and doesn't hold, and that this document is typically paired with a
pour-over will (this corpus's own Last Will and Testament) to catch
property that was never transferred in — it does not instruct the reader
to "consult an attorney" or take any other advisory action.

## What this document covers

13 clauses: 3 drafting (the declaration, a distribution-on-death provision,
and the signature/notarization block) and 10 authority clauses, all citing
California Probate Code Division 9 (Trust Law) and one cross-reference to
the Will document's own probate code source (the pour-over statute):

- **`trust_property_formality`** (§ 15206 + § 15207(a)-(b)) — the funding
  disclosure described above: personal property needs no special
  formality (though an oral trust of it is provable only by clear and
  convincing evidence), while real property requires a qualifying written
  instrument or it stays outside the trust.
- **`trust_creation_methods`** (§ 15200) — the actual statutory list of how
  a trust can be created.
- **`trust_validity_requirements`** (§ 15201 + § 15203 + § 15205) —
  settlor intent, lawful purpose, and the ascertainable-beneficiary
  requirement (with the charitable-trust exception).
- **`trust_no_consideration_required`** (§ 15208) — unlike a contract, a
  trust doesn't need consideration; a real, easy-to-miss fact.
- **`trust_revocation_default`** (§ 15400 + § 15401(a)) — revocability,
  not irrevocability, is the default, and the actual statutory revocation
  methods.
- **`trust_fiduciary_duty_loyalty`** (§ 16002(a) + § 16009) — the
  trustee's duty of loyalty and the separate duty to keep trust property
  segregated and identified.
- **`trust_settlor_interest_revocable`** (§ 15800(a) + § 15801(a)) — a
  genuinely counter-intuitive default: while the trust is revocable and
  someone competent holds the power to revoke, the trustee's duties and
  the beneficiaries' statutory rights run to that person, not to the named
  beneficiaries.
- **`trust_accounting_duty`** (§ 16062(a) + § 16069(a)(1)) — the
  trustee's accounting duty, and how the statute itself reconciles it with
  the revocable-trust rule above (no duty to account to beneficiaries
  while the trust is still revocable and someone competent can revoke it).
- **`trust_successor_trustee_vacancy`** (§ 15660(b)-(d)) — the statutory
  fallback for filling a vacant trusteeship — the mechanism a living trust
  actually depends on to avoid a court-supervised conservatorship, and
  what happens if the trust instrument's own successor provision fails or
  is silent.
- **`trust_pour_over_will`** (§ 6300(a)-(b)) — the actual statutory basis
  for a pour-over provision, and its real relationship to this document's
  funding disclosure: a pour-over will routes probate property into the
  trust at death; it doesn't avoid probate for that property.

## Method

Fetched all 17 candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov`. Every section was re-verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-for-byte identical across both fetches for all 17.

Applied the established source-independence rule: single-section clauses
(`trust_creation_methods`, `trust_successor_trustee_vacancy`,
`trust_no_consideration_required`, `trust_pour_over_will`) disclose that
honestly; clauses citing genuinely different sections do not.

Several candidate sections were fetched and reviewed but deliberately not
used: § 15202 (a related property-requirement provision, folded into the
funding discussion rather than duplicated as a separate clause), § 15642
(trustee removal — real, but a different topic than what was scoped),
§ 16064 (accounting-waiver exceptions, referenced in `trust_accounting_duty`'s
gap rather than separately cited), and § 6301 (an obsolete pre-1965 savings
clause with no current relevance). No section that was actually cited
failed second-fetch verification.

## Verification

- Every candidate section fetched directly via `curl`, then re-verified on
  a second, independent fetch with a distinct User-Agent before use.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 42 documents: correct
  card count and titles, this document assembles all 13 clauses with no
  leftover placeholders, and zero errors across the whole run.

## Net changes

- New document: Revocable Living Trust (`revocable_living_trust`), 13
  clauses (10 authority + 3 drafting), in the Estate Planning category.
- Corpus: 229 → 242 clauses; 41 → 42 documents.

## Estate Planning category status

With this document, the category now covers the four standard components
of a basic estate plan: Last Will and Testament, Financial Power of
Attorney, Advance Health Care Directive, and Revocable Living Trust — 19 +
13 + 16 + 13 = 61 clauses total, all independently sourced from California
Probate Code (plus one correctly-scoped federal HIPAA citation in the
health care directive). This matches the depth pattern used for Employment
and Business Formation/Real Estate: several documents built to real
granularity within one sector before moving to the next.
