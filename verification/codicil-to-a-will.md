# Estate Planning, sixth document: Codicil to a Will

## Why this document

Continuing the Estate Planning build-out. A codicil is real, standard
estate-planning practice — a small, targeted amendment to an existing
will that doesn't require re-executing an entirely new document. This
document is deliberately narrow: it complements the existing Last Will
and Testament document rather than re-deriving its content, and stays
short because that's what the actual statutory law supports.

## What this document covers

7 clauses: 2 drafting (a declaration identifying the original will and
amendment, and a signature/witness block) and 5 authority clauses citing
California Probate Code:

- **`codicil_definition`** (§ 88 + § 20) — California doesn't treat a
  codicil as a separate category of instrument; its own definitions
  statute simply defines "will" to include "codicil," pulling every
  will statute in the Probate Code onto codicils by that one definition.
- **`codicil_execution_requirements`** (§ 6110(a) + § 88) — because a
  codicil is legally a "will," it isn't exempt from the same execution
  formalities and doesn't get any special shortcut for being a mere
  amendment.
- **`codicil_revocation_no_automatic_revival`** (§ 6123(a) + § 6120(a)) —
  California's actual revival rule: revoking a codicil doesn't
  automatically restore the will terms it had changed, unless the
  circumstances or the testator's own declarations show that was the
  intent.
- **`codicil_inconsistent_provisions`** (§ 6120(a) + § 21121) — no
  codicil-specific inconsistency statute exists; only the general
  "expressly or by inconsistency" revocation rule and general
  construction principles govern.
- **`codicil_lost_codicil_presumption`** (§ 6124) — California's
  lost-instrument presumption (destroyed with intent to revoke) applies
  independently to a lost codicil, separate from whether the will itself
  is found.

## A real, disclosed gap — not worked around

The research explicitly checked whether California codifies the
common-law "republication by codicil" doctrine (the idea that executing
a codicil can republish the underlying will as of the codicil's date).
After checking the full chapter structure of Probate Code Division 6
(Wills) and Division 11 (general construction rules), no such statute
was found. Rather than manufacture a citation or quietly omit the topic,
this is disclosed directly: the doctrine is not codified in California's
Probate Code, so no authority clause claims otherwise, and the practical
workaround (an express republication/confirmation statement) appears
only in the drafting-clause boilerplate, not as a sourced legal claim.

Similarly, neither § 6120 nor § 6123 expressly resolves whether
physically revoking the original will instrument automatically revokes a
separate codicil paper, or the reverse — that specific multi-document
question is disclosed as unresolved by the statutory text found, rather
than assumed one way or the other.

## Method

Fetched all candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov`. Every quote re-verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
across both fetches for every section cited (§ 20, § 88, § 6110, § 6120,
§ 6123, § 6124, § 21121).

## Verification

- Every candidate section fetched directly via `curl`, then re-verified
  on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 45 documents.

## Net changes

- New document: Codicil to a Will (`codicil`), 7 clauses (5 authority +
  2 drafting), in the Estate Planning category.
