# Estate Planning, thirteenth document: Individual Health Care Instruction

## Why this document (and why it isn't a "Living Will Declaration")

The original brief for this document was a "Living Will Declaration."
Before drafting anything, the research checked whether that would
duplicate the existing Advance Health Care Directive document. It does
— California's separate "Natural Death Act" living-will framework was
fully repealed and folded into the unified Health Care Decisions Law
effective July 1, 2000 (confirmed directly: every section in Probate
Code Division 4.7, Part 2 carries the identical 1999 enactment note).
There is no live, freestanding "living will" statute left to build a
distinct document from.

Rather than force a redundant document into existence, the research
found a genuinely distinct, still-operative mechanism the existing AHCD
document doesn't cover: the **individual health care instruction**
under Probate Code § 4670 — a stand-alone statement of health care
wishes given with **no agent named at all**. The existing AHCD
document's fields (`agentName` required) and clauses are built almost
entirely around the agent-appointment half of California's two-part
"advance health care directive" structure (Prob. Code § 4605: an
advance directive is *either* an individual instruction *or* a power
of attorney for health care). This document covers the other half.

## What this document covers

8 clauses: 3 drafting (declaration, instruction content, and
signature) and 5 authority clauses:

- **`ihci_statutory_basis`** (§§ 4670, 4605) — the statutory hook for
  giving an instruction without naming an agent.
- **`ihci_purpose_and_scope`** (§§ 4650(a)-(b), 4617(a)) — the
  Legislature's stated purpose and the real breadth of what an
  instruction can address.
- **`ihci_no_agent_direct_compliance`** (§§ 4671(a), 4733(a)) — how a
  provider must comply directly with the instruction itself, with no
  agent required to interpret it.
- **`ihci_oral_or_written_execution`** (§§ 4670, 4673(a)) — that an
  oral instruction needs no formality at all, while a written one
  follows the same legal-sufficiency rule as any written directive.
- **`ihci_revocation`** (§ 4695(b)) — the looser revocation standard
  that applies because no agent designation exists to revoke.

## Deliberate non-duplication

Every clause's gap field explicitly discloses where it leans on a
statutory section (or subsection) already cited in the existing AHCD
document's `ahcd_two_components`, `ahcd_execution_requirements`, or
`ahcd_revocation` clauses, rather than presenting shared statutory
ground as an independent new finding. Field names (`patientName`,
`lifeProlongingWishes`, `painReliefWishes`, `additionalHealthCareWishes`)
were matched exactly to the existing AHCD document's conventions after
independently confirming them against the corpus, rather than trusting
the research agent's naming suggestion at face value — the agent's
first proposal (`principalName`) was checked and found to be wrong (that
name belongs to the separate Financial Power of Attorney document).

## Method

Fetched Probate Code §§ 4605, 4617, 4650, 4670, 4671, 4673, 4695, 4733
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean.
- Checked source-independence disclosure logic across all 5 authority
  clauses — correct throughout.
- Checked for duplicate clause IDs against the full corpus (none); one
  duplicate title ("Declaration") is the pre-existing generic
  drafting-title pattern.
- Field names independently re-verified against the existing AHCD
  document rather than trusting the research report as given.

## Net changes

- New document: Individual Health Care Instruction
  (`individual_health_care_instruction`), 8 clauses (5 authority + 3
  drafting), in the Estate Planning category.
- Corpus: 514 → 522 clauses; 69 → 70 documents.
