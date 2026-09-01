# Estate Planning, eleventh document: Disposition of Remains Instructions

## Why this document

Continuing the "go as deep as humanely possible" build-out. This
document lets a person designate, in advance, who has the legal right
to control disposition of their remains, and state specific burial/
cremation instructions — distinct from anything else in the Estate
Planning category (Will, Advance Health Care Directive, HIPAA
Authorization, Guardian Nomination, Small Estate Affidavit, Transfer-
on-Death Deed). Sourced from California Health & Safety Code
§§ 7100, 7100.1, 7111, 7112.

## What this document covers

10 clauses: 3 drafting (agent designation, instructions/preferences
schedule, and signature/notarization) and 7 authority clauses:

- **`remains_priority_order`** (§ 7100(a)) — the full, real nine-tier
  default statutory priority list for who controls disposition absent
  a written direction, with an honest flag that the statute's own text
  names only a "competent surviving spouse" — not "or registered
  domestic partner" — without independently verifying whether Family
  Code § 297.5 would equate the two for this specific list.
- **`remains_written_direction`** (§ 7100.1(a); § 7100(a)) — how a
  person's own written direction overrides the default priority order,
  and its two binding conditions (clarity/completeness, and funding
  arranged), with a disclosed inference that the statute's power to
  "override the list" is drawn from § 7100(a)'s cross-reference, not
  from § 7100.1 itself using the word "agent."
- **`remains_partial_funding`** (§ 7100.1(b)) — the real proration rule
  when only one of two cost categories was funded.
- **`remains_will_provision_effect`** (§ 7100.1(c)) — that a will-based
  disposition direction takes effect immediately, without waiting for
  probate.
- **`remains_revocation`** (§ 7100.1(a)) — the only revocation
  mechanism the statute's text actually describes: a signed and dated
  statement to the contrary — with an honest disclosure that no
  dedicated revocation procedure (unlike the AHCD statute) was found.
- **`remains_cremated_remains_gap`** (§ 7100(a); § 7112) — a genuine
  negative finding, reported directly: no separate statutory rule
  assigning control over already-cremated remains was found anywhere
  in the governing chapter; § 7112 addresses only liability and a
  retention-period rule, not control priority.
- **`remains_liability_protection`** (§ 7100(f); § 7111) — the good-
  faith reliance protection for a funeral director, cemetery authority,
  or crematory acting on a decedent's instructions or a person's
  written representation of authority.

## Method

The research agent read the entire governing Health & Safety Code
chapter (§§ 7100-7117.1), not just the candidate sections, specifically
to check the cremated-remains and will-priority questions honestly
rather than assuming an answer. Every candidate section fetched
directly from `leginfo.legislature.ca.gov`, verified against a second,
independent fetch with a distinct User-Agent.

## Field naming note

Uses `{{principalName}}` for the living person making the designation,
deliberately distinct from this corpus's existing `{{decedentName}}`
(used in the Small Estate Affidavit for someone already deceased) —
since the person executing this document is, by definition, still
alive.

## Defect caught and fixed during integration

`remains_revocation` cites a single statutory subsection but initially
lacked the standard single-source disclosure sentence — added during
integration.

## Verification

- All 5 governing sections fetched directly, then re-verified on a
  second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 7 authority
  clauses — corrected on one, confirmed correct on the rest.
- Checked for duplicate clause IDs against the full corpus (none, aside
  from the pre-existing "Signature and Notarization" pattern).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Disposition of Remains Instructions
  (`disposition_of_remains_instructions`), 10 clauses (7 authority + 3
  drafting), in the Estate Planning category.
- Corpus: 465 → 475 clauses; 64 → 65 documents.
