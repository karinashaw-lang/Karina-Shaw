# Estate Planning, third document: Advance Health Care Directive

## Why this document

Continuing the Estate Planning build-out, following the Last Will and
Testament and the Financial Power of Attorney. A health care directive is
the standard third leg of a basic estate plan — where the financial power
of attorney covers property and finances, this document covers medical
decision-making. Sourced from California Probate Code Division 4.7 (Health
Care Decisions Law), the same direct-fetch methodology used throughout this
sector.

## What this document covers

16 clauses: 3 drafting (declaration/appointment, an optional end-of-life
wishes section, and the signature block) and 13 authority clauses citing
California Probate Code Division 4.7, plus one clause that correctly cites
the federal HIPAA Privacy Rule alongside state law for a genuinely
federal point (medical-record access), rather than conflating the two
bodies of law:

- **`ahcd_two_components`** (§ 4605 + § 4671(a)) — the statute's own
  structure: an "individual health care instruction" and a "power of
  attorney for health care" are legally distinct, and a single document can
  contain either or both.
- **`ahcd_execution_requirements`** (§ 4673(a)) — signature plus either two
  witnesses or notarization, not both.
- **`ahcd_witness_disqualifications`** (§ 4674(c) + § 4674(e)) — who can't
  witness (the health care provider, facility staff, the agent) and the
  real, easy-to-miss rule that the "disinterested witness" requirement
  applies to only one of the two witnesses, not both.
- **`ahcd_skilled_nursing_witness`** (§ 4675(a)) — an extra safeguard,
  unique to skilled nursing facility patients: a patient advocate or
  ombudsman must also witness the directive.
- **`ahcd_capacity_determination`** (§ 4682 + § 4658) — the agent's
  authority defaults to taking effect only on an incapacity determination,
  and who makes that determination absent contrary instructions.
- **`ahcd_agent_decision_standard`** (§ 4684) — the actual statutory
  decision-making standard: known instructions and wishes first, best
  interest otherwise.
- **`ahcd_scope_of_authority`** (§ 4683(a) + § 4652) — how broad the
  agent's default authority is, and the real statutory carve-out (mental
  health commitment, sterilization, abortion, and more) that no directive
  can grant regardless of its own language.
- **`ahcd_records_access`** (§ 4678 + 45 C.F.R. § 164.502(g)(1)-(2)) — the
  state-law records-access right for whoever is authorized to decide,
  paired with the actual federal HIPAA personal-representative provision —
  cited as two independent sources addressing two different bodies of law,
  with the gap field explicit that HIPAA governs record access, not
  decision-making authority itself.
- **`ahcd_revocation`** (§ 4695(a) + § 4695(b)) — a real, non-uniform
  mechanic: revoking the agent designation itself requires a signed writing
  or personally informing the provider, while revoking anything else can be
  done in any manner that communicates intent.
- **`ahcd_divorce_effect`** (§ 4697(a) + § 4697(b)) — California's Health
  Care Decisions Law has its own automatic-revocation-on-divorce rule for a
  spouse-agent, independently confirmed rather than assumed to mirror the
  will statute — and its own automatic-revival-on-remarriage rule.
- **`ahcd_provider_compliance`** (§ 4733 + § 4736 + § 4734) — the
  provider's duty to comply, the real conscience-based exception, and the
  notify-and-transfer duty (including continued pain relief) that applies
  when a provider declines.
- **`ahcd_immunity`** (§ 4740 + § 4741) — good-faith immunity for both
  providers and agents, with its real limit disclosed in the gap: the
  protection runs only to good-faith conduct, and the same statute imposes
  real liability for bad faith.
- **`ahcd_statutory_form`** (§ 4700) — California provides an optional
  model form; using it isn't required.

## Method

Fetched Division 4.7 directly from `leginfo.legislature.ca.gov`, plus the
one federal citation from `ecfr.gov` (the current, official electronic
Code of Federal Regulations). Every quote re-verified against a second,
independent fetch with a distinct User-Agent before use — all 22 California
quotes and both HIPAA sub-quotes confirmed byte-for-byte identical across
both fetches.

Applied the established source-independence rule: clauses citing two
subsections of the same section (`ahcd_witness_disqualifications`,
`ahcd_revocation`, `ahcd_divorce_effect`) disclose that honestly in their
`gap` field; clauses citing genuinely different sections do not.

A real finding surfaced by explicit verification rather than assumption:
California's Health Care Decisions Law has its own divorce-revocation rule
for an agent designation (§ 4697), textually independent of the will
statute's version (§ 6122) already cited in this corpus's Last Will and
Testament document — confirmed directly rather than inferred to exist by
analogy.

## Verification

- Every candidate section fetched directly via `curl` (California
  Probate Code) or from `ecfr.gov` (the one federal HIPAA citation), then
  re-verified on a second, independent fetch with a distinct User-Agent.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked for duplicate clause IDs against the full corpus (none) and
  duplicate titles within this document's `clauseOrder` (none).
- Full-corpus regression run headless against all 41 documents: correct
  card count and titles, this document assembles all 16 clauses with no
  leftover placeholders, and zero errors across the whole run.

## Net changes

- New document: Advance Health Care Directive
  (`advance_health_care_directive`), 16 clauses (13 authority + 3
  drafting), in the Estate Planning category.
- Corpus: 213 → 229 clauses; 40 → 41 documents.
