# Estate Planning, second document: Financial Power of Attorney

## Why this document

Direct follow-up to "go build [Estate Planning] and go as granular as possible,"
continuing past the Last Will and Testament flagship document. A durable
financial power of attorney is one of the standard companion documents to a
will in a real estate plan, and — like the will — its subject (agency law) is
state law with no federal counterpart, so it follows the same sourcing
methodology already established for this sector: California Probate Code,
fetched directly, cited by name, and explicitly framed throughout as one
state's evidence rather than a jurisdiction claim.

## What this document covers

13 clauses: 2 drafting (the agent appointment and the signature/witness/notary
block) and 11 authority clauses, all citing California Probate Code Division
4.5 (Powers of Attorney), a part of the code no earlier document in this
corpus had touched:

- **`poa_execution_formalities`** (§ 4121 + § 4122) — the actual signing
  rules: date, signature, and either notarization or two qualified
  witnesses, with the agent barred from serving as a witness.
- **`poa_durability`** (§ 4124 + § 4125) — durability isn't automatic; it
  requires specific language in the document, and acts taken during
  incapacity under a durable power bind the principal exactly as if they'd
  had full capacity.
- **`poa_effective_timing`** (§ 4124(b) + § 4129) — the difference between an
  immediately-effective and a "springing" power of attorney, and the actual
  statutory mechanism (a written declaration under penalty of perjury) that
  triggers a springing one.
- **`poa_general_grant_scope`** (§ 4451 + § 4455) — what a general grant of
  authority over "real property" or "banking" actually includes under the
  statutory-form construction rules.
- **`poa_hot_powers`** (§ 4264 + § 4265) — the defined list of powers that
  require express, specific authorization even under an otherwise broad
  grant (gifting, trust creation, beneficiary-designation changes, and
  more), plus the categorical, non-waivable bar on using a power of
  attorney to make or revoke the principal's will.
- **`poa_fiduciary_duties`** (§ 4232 + § 4236) — the agent's duty of loyalty
  and the real, narrow set of circumstances that actually trigger a duty to
  account.
- **`poa_liability_standard`** (§ 4231 + § 4202(e)) — the prudent-person
  standard of care, its heightened-skill exception, and that one co-agent
  isn't automatically liable for another's misconduct.
- **`poa_multiple_agents`** (§ 4202 + § 4203) — the default unanimity rule
  for co-agents, its real exceptions for vacancy/unavailability, and
  successor agents.
- **`poa_third_party_acceptance`** (§ 4300 + § 4306(a)) — a third party's
  duty to treat an agent as it would treat the principal, and the real
  (narrowly scoped) attorney's-fee liability mechanism for wrongful refusal
  after a statutory affidavit is furnished.
- **`poa_revocation`** (§ 4151 + § 4130) — how a principal revokes, and the
  non-waivable rule that a later power of attorney controls over an earlier
  one to the extent of any conflict.
- **`poa_termination_events`** (§ 4152 + § 4304(a)) — the full statutory
  list of what ends an agent's authority, and that a principal's death
  doesn't retroactively undo good-faith acts taken without actual knowledge
  of the death.

## Method

Fetched all candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov`. Every quote used was re-verified against a
second, independent fetch with a distinct User-Agent before being used —
confirmed byte-identical (md5-checked) across both fetches for every section
cited.

Applied the established source-independence rule throughout: every one of
the 11 authority clauses in this document cites two genuinely different
statutory sections (not two subsections of the same section), so none of
them needed a single-source disclosure sentence — unusual for this corpus's
recent state-law documents, and a reflection of how much distinct, on-point
statutory material Division 4.5 actually contains.

One deliberate scoping decision, made and disclosed during research rather
than silently: a candidate citation (§ 4128, the printed-form warning-notice
requirement) was fetched and verified but not used, because it's a narrower
disclosure rule specific to commercially-sold blank power-of-attorney forms
and doesn't apply to the statutory form — using it as the general
execution-formalities citation would have overclaimed its scope. §§ 4121
and 4122 were used instead as the better-fit primary source.

## Verification

- Every candidate section fetched directly via `curl`, then re-verified on
  a second, independent fetch with a distinct User-Agent before use.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 41 documents: correct
  card count and titles, this document assembles all 13 clauses with no
  leftover placeholders, and zero errors across the whole run.

## Net changes

- New document: Financial Power of Attorney (`financial_power_of_attorney`),
  13 clauses (11 authority + 2 drafting), in the Estate Planning category.
- Corpus: 200 → 213 clauses; 39 → 40 documents.
