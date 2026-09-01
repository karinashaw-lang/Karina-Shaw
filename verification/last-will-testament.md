# New sector — Estate Planning — flagship document: Last Will and Testament

## Why this document, why now

Direct follow-up instruction: "choose a different sector and go as detailed as
possible," after two completed 9-item audits closed out every existing
authority clause in the corpus. Estate Planning was chosen because it's a
genuinely distinct sector from Employment, Business Formation, and Real
Estate, while following the same methodology that worked well for the
state-law-native categories: California Probate Code, fetched directly from
`leginfo.legislature.ca.gov`, with every clause disclosing that it's one
state's statute rather than a claim about which state's law governs. As with
each prior category, this opens Estate Planning with one flagship document —
here, a Last Will and Testament — rather than several thin ones at once.

## What this document covers

19 clauses: 6 drafting (the declaration, specific bequests, residuary estate,
executor designation, guardian designation, and signature block) and 13
authority clauses, each citing California Probate Code sections that were
never touched by any earlier document in the corpus:

- **`will_testamentary_capacity`** (§ 6100.5(a)) — the actual two-part
  statutory test for what makes someone unable to make a will: not
  understanding the nature of the testamentary act, or not knowing the
  nature/extent of their property or their relations to the people affected.
- **`will_execution_requirements`** (§ 6110(b)-(c)(1) + § 6110(c)(2)) — the
  signing and two-witness rules, plus the real "harmless error" exception:
  a will that doesn't strictly meet those requirements can still be admitted
  if there's clear and convincing evidence the testator intended it as their
  will.
- **`will_holographic_alternative`** (§ 6111(a) + § 6111(b)) — a will valid
  even without witnesses if the signature and the material provisions are in
  the testator's own handwriting, plus the real risk of leaving it undated
  when its validity might overlap with another will or a testator's
  incapacity.
- **`will_revocation`** (§ 6120) — the statute's exclusive list of how a will
  can be revoked, including that accidental or unauthorized physical damage
  to the document doesn't revoke it — intent is what matters.
- **`will_revocation_by_divorce`** (§ 6122(a) + § 6122(b)-(c)) — a later
  divorce automatically revokes any disposition to the former spouse (treated
  as if they predeceased the testator), with the real exception that express
  language in the will, or a court order, can override this.
- **`will_omitted_spouse`** (§ 21610 + § 21611) — the default intestate-share
  protection for a spouse married after the will was signed, including the
  care-custodian exception (a caregiver who marries a dependent adult within
  90 days of providing care doesn't get this protection).
- **`will_omitted_children`** (§ 21620 + § 21622) — the parallel protection
  for a child born or adopted after the will was signed, and the real
  exception when the omission was intentional and stated in the will.
- **`will_simultaneous_death`** (§ 6403(a)) — the 120-hour survival
  requirement (with clear-and-convincing-evidence burden against survival),
  and its own real exception: it doesn't apply if it would cause the property
  to escheat to the state.
- **`will_no_contest_clause`** (§ 21311(a) + § 21311(b)) — the narrow set of
  contests a no-contest clause can actually enforce, and the
  probable-cause safe harbor that protects a good-faith contest from
  triggering the clause.
- **`will_guardian_nomination`** (§ 1500) — a will's nomination of a
  guardian isn't self-executing; it takes effect only through an actual
  guardianship proceeding, and a court can decline to follow it if doing so
  wouldn't serve the child's best interest.
- **`will_executor_appointment`** (§ 8461) — the full statutory priority list
  of who administers an estate when no executor is named or the named one
  can't serve, quoted in full — the concrete reason naming an executor (and
  an alternate) matters.
- **`will_executor_bond`** (§ 8480 + § 8481) — the default bond requirement
  for a personal representative, and how a will can waive it.
- **`will_proof_at_probate`** (§ 8220) — California's one-witness-by-affidavit
  shortcut for proving a will at probate, and that it disappears entirely if
  the will is actually contested.

## Method

Fetched all 16 candidate California Probate Code sections directly from
`leginfo.legislature.ca.gov` via `curl`. Extracted and cleaned quotes using
the project's standing HTML-artifact fix (flatten tags, decode entities,
collapse spurious whitespace around punctuation and quote marks) before using
any quoted text. Every quote used in the final 13 authority clauses was then
re-verified against a second, independent fetch (a fresh `curl` with a
distinct User-Agent) before writing — all 18 planned quote markers confirmed
present, byte-for-byte, in the second fetch.

Applied the source-independence rule established in the two completed
audits: two citations to different subsections of the same statutory section
count as one source, not two, and require an honest single-source disclosure
sentence. Of the 13 authority clauses, 5 (`will_revocation`,
`will_simultaneous_death`, `will_guardian_nomination`,
`will_executor_appointment`, `will_proof_at_probate`) rest on a single
statutory subsection with no independent second source found on a reasonable
search; each now says so explicitly in its `gap` field, following this
corpus's established phrasing ("This is a single statutory subsection
(§ X); no additional independent source was found for this.").

## A defect caught before shipping

A first draft of those same 5 clauses' `gap` fields ended with a leftover,
copy-pasted disclosure sentence — "This is one federal rule; no additional
independent source was found for this" — even though every citation in this
batch is California state law, not federal, and even though the same
sentence's own opening already correctly said "This is one state's
statute." This was caught before any of it reached the real corpus: the
mismatched sentence was removed and replaced with the correct,
state-appropriate phrasing, matching the pattern already used for the
single-source Business Formation and Real Estate clauses.

## Verification

- 16 primary-source fetches, all against `leginfo.legislature.ca.gov`
  directly — no case law in this document at all, so the CourtListener
  access limitations noted in the Employment audit don't apply here.
- Every quote re-verified against a second, independent fetch before
  writing.
- Full corpus checked for `{{` leakage in every new clause's `title`/`gap`
  and every citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked for duplicate clause IDs against the full 200-clause corpus
  (none) and duplicate titles within the new document's `clauseOrder`
  (none — the reused "Signatures" title on `will_signature_attestation`
  matches the existing cross-document pattern already used by
  `buysell_ack` and `lease_ack`, each a distinct clause id, not a
  within-document collision).
- Full-corpus regression run headless against all 39 documents: correct
  card count and titles, the new document assembles all 19 clauses with
  `leftover placeholder: false`, and `ERRORS: []` across the whole run.

## Net changes

- New category: Estate Planning.
- New document: Last Will and Testament (`last_will_testament`), 19 clauses
  (13 authority + 6 drafting).
- Corpus: 181 → 200 clauses; 38 → 39 documents.

## Where this sector goes next

This is the flagship document for Estate Planning, following the same
pattern each prior category used (Employee Handbook for Employment,
Single-Member LLC Operating Agreement for Business Formation, Residential
Lease for Real Estate) — one document built to real depth before the
category expands. Natural next documents in this sector, matching how prior
categories grew: a Financial Power of Attorney, an Advance Health Care
Directive, and possibly a Living Trust or a Codicil — not yet built, and not
yet explicitly requested beyond the standing "go as detailed as possible"
instruction.
