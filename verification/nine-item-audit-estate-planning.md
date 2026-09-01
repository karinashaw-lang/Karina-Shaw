# 9-item checklist audit — Estate Planning category

## Why this audit

Direct follow-up to a direct question: what I think of the Estate Planning
build-out, and whether I could verify everything in it. The honest answer
was that every clause had already been through a second independent fetch
before it shipped, but this category — all 7 documents, 67 authority
clauses built in one continuous session — had never been through the same
dedicated, independent re-audit that the Employment and Business
Formation/Real Estate categories each received earlier in this project
(see `nine-item-audit-employment-category.md` and
`nine-item-audit-business-formation-real-estate.md`). This closes that gap.

## Method

Split the 67 authority clauses across four parallel research passes,
grouped by document pairing (Will + Codicil; Power of Attorney + HIPAA
Authorization; Advance Health Care Directive; Living Trust + Guardian
Nomination), each independently re-fetching every citation's source text
fresh — via `leginfo.legislature.ca.gov` for California statutes and
`ecfr.gov` for the one federal document — and walking all 9 checklist
items per clause. Each pass was instructed to treat a clean bill of health
as the surprising outcome, not the expected one, based on this project's
own prior audit history.

Before applying any fix, every new or extended citation the four passes
proposed was independently re-verified against a fresh fetch by the main
session — not taken on the sub-agents' word — including the single most
consequential claim (that `will_executor_appointment` cited the wrong
statute) and the least expected one (that Probate Code § 1502(a) had
itself been amended, effective January 1, 2026, to add a sentence the
existing clause's quote stopped just short of).

## What the audit found and fixed

**The most significant finding — a wrong controlling statute:**

- **`will_executor_appointment`** cited only § 8461, the priority order
  for an intestate estate with no will at all. When a will exists but
  names no executor (or the named executor can't serve), the actual
  controlling provision is § 8440 (which triggers appointment of an
  "administrator with the will annexed") and § 8441, whose subsection (b)
  gives priority to whoever actually takes property under the will — with
  a person taking more than half the estate's value having priority over
  other people in the same category. The clause presented the bare § 8461
  order as if it always controlled; it doesn't once a will exists. Fixed:
  added § 8440 and § 8441(a)-(b) as citations, kept § 8461 as the
  underlying order § 8441(a) invokes, and corrected the body to state the
  will-beneficiary override.

**Missing statutory exceptions the clause's own topic required:**

- **`ahcd_witness_disqualifications`** never disclosed § 4674(a): witnesses
  must be adults. The clause framed itself as a complete disqualification
  list without it. Fixed: added the citation and folded it into the body.
- **`ahcd_provider_compliance`** framed the reasons-of-conscience exception
  as the sole basis for a provider to decline compliance, even though its
  own quoted § 4733 text names a second exception, § 4735 (medically
  ineffective care, or care contrary to generally accepted standards),
  never discussed. Fixed: added the § 4735 citation and corrected the body.
- **`will_omitted_children`** cited § 21620, whose own text opens "Except
  as provided in Section 21621" — and never said what § 21621 actually
  provides (intentional omission apparent on the will's face; substantially
  all the estate left to the child's other parent; provision made outside
  the will in lieu of a provision in it). The default share was presented
  as unqualified when it isn't. Fixed: added the § 21621 citation and
  disclosed the three real exceptions in the body.
- **`guardian_nom_standalone_writing`**, **`guardian_nom_conditional_temporary`**,
  and **`guardian_nom_minor_preference`** collectively told the reader only
  that a written nomination "isn't self-executing" without ever disclosing
  that a court is statutorily required to give it "due weight" — Family
  Code § 3043, cross-referenced by name in Probate Code § 1502(a) itself.
  This was compounded by a real staleness catch: § 1502(a) was amended
  effective January 1, 2026 to add that cross-reference sentence, and the
  existing clause's quote stopped one sentence short of it. Fixed: extended
  the § 1502(a) quote to the current text, added § 3043 as a new citation
  and worked it into `guardian_nom_standalone_writing`'s body, and added a
  short cross-reference in the other two clauses' `gap` fields rather than
  duplicating the citation three times.

**A real factual overclaim, corrected against the statute's actual words:**

- **`will_omitted_spouse`**'s `gap` field described the care-custodian
  anti-abuse carve-out as defeated by proof the marriage "was genuine and
  not the result of undue influence, fraud, or duress" — but § 21611(d)(2)
  only requires proof the marriage "was not the product of fraud or undue
  influence." "Duress" and "genuine" aren't in the statute — an added
  element a reader would wrongly believe they had to prove. Separately,
  the carve-out's own precondition — that the decedent was a legally
  defined "dependent adult" under § 21366 — was never disclosed; the
  clause read as if it reached any testator with any paid caregiver. Fixed
  both: corrected the wording to the statute's actual standard, added the
  § 21366 citation, and — a related, independent defect the same audit
  caught — discovered the clause's own § 21611 citation had never actually
  quoted subsection (d) at all, despite the clause's body describing what
  (d) says; extended that citation's quote to include the full subsection.

**Real, on-point citations missing from clauses whose own claims needed them:**

- **`poa_third_party_acceptance`**'s body described specific content an
  agent's affidavit must contain, sourced from § 4305 — never cited in the
  clause (only referenced in passing through § 4306(a)'s cross-reference).
  Fixed: added § 4305(a) as a citation.
- **`poa_termination_events`**'s § 4152 quote silently dropped its own
  opening qualifier, "Subject to subdivision (b)," and never disclosed
  that subdivision (b) grants a general no-notice liability protection
  covering *all nine* termination events — not just the principal's death,
  which the clause's separate § 4304(a) citation already covered. Fixed:
  extended the § 4152 quote to include subsection (b) in full, and
  generalized the body's framing.
- **`hipaa_auth_defective`**'s body labeled one statutory defect only "the
  compound-authorization rules," but the cited provision, § 164.508(b)(3)
  *or* (4), also covers violating the separate "prohibition on
  conditioning of authorizations" rule — never mentioned. Fixed: corrected
  the body to name both.
- **`hipaa_auth_scope_distinction`**'s § 164.506(a) quote silently dropped
  its own leading qualifying clause — directly on-topic for a clause whose
  entire purpose is distinguishing when authorization is required. Fixed:
  extended the quote to its full text.
- **`poa_general_grant_scope`**'s body made several specific claims (that
  a real-property grant includes insuring, paying/contesting taxes, and
  making repairs; that a banking grant includes withdrawing funds,
  borrowing/pledging, negotiating checks, and applying for letters of
  credit) that are true under the statute but weren't supported by the
  quoted text, which stopped short of the subsections that actually say
  so. Fixed: extended both § 4451 and § 4455 quotes to the supporting
  subsections — and, caught in a self-check before shipping, corrected two
  places where the extension itself skipped an intervening subsection
  without marking the omission with an ellipsis, the same defect class
  this audit was hunting for in the first place.
- **`will_testamentary_capacity`** — the only single-citation clause among
  its own document's authority clauses without the standard single-source
  disclosure sentence every sibling clause carries. Fixed for consistency.

## Verification

- Every fetched statute and regulation was pulled fresh via `curl`,
  independent of whatever fetches produced the original clauses.
- Before any fix was written, the main session independently re-verified
  every proposed new or extended citation against its own fresh fetch —
  not the audit passes' reported text — including catching and correcting
  two ellipsis-omission defects introduced by the fix itself before they
  could ship.
- Full-corpus checked for `{{` leakage in every touched clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean. Checked for duplicate clause IDs across the full 268-clause
  corpus — none.
- Full-corpus regression run after all fixes, across all 45 documents.

## Net changes

- No clauses added or removed — corpus remains 268 clauses across 45
  documents. This pass corrected and strengthened 14 existing clauses: 1
  clause got a corrected controlling statute (a real, moderate-severity
  defect), 4 clauses gained a previously-undisclosed statutory exception,
  1 clause had a real factual overclaim corrected against the statute's
  actual wording, 5 clauses gained a citation their own body's claims
  needed but lacked, 2 clauses had a citation's quote extended to its full
  text after being caught mid-sentence, and 1 clause gained a missing
  single-source disclosure sentence.
- Of the 67 authority clauses audited, roughly half passed all 9 checklist
  items on first check with no findings, cosmetic or otherwise — broadly
  consistent with the defect density found in the two prior full audits of
  this project's Employment and Business Formation/Real Estate categories.
- A number of additional cosmetic-only findings (silently-dropped
  paragraph subheadings, minor paraphrase gaps immediately adjacent to an
  accurate full quote) were reported by the audit passes and reviewed, but
  intentionally left unchanged — none of them would mislead a reader, and
  the fixes above focus on defects that actually would.
