# Phase 7 audit — deep pass on the remaining 10 authority clauses

Checked 2026-08-29. The Phase 6 audit checked all nine items against all 24
clauses, but at uneven depth: 3 clauses (`at_will`, `timekeeping`,
`accommodation`) got a genuine re-investigation — full source text re-read past
the already-quoted fragment, primary sources re-fetched — and it found three real
defects. The other 10 authority clauses got a verdict recorded against the
framework, but resting on the verification already done when each was built, not
a fresh re-read in that pass.

This audit applies the same depth used on those first three to the remaining 10:
`work_auth`, `monitoring`, `offer_overtime`, `ip_assignment`, `ip_consideration`,
`ic_classification`, `ic_state_variation`, `term_final_pay`, `term_cobra`,
`term_accrued_pto`. For each, every citation's full source text was re-fetched and
read past the quoted fragment, specifically hunting for qualifiers, exceptions, and
scope limits the existing quote might not carry. Nine of the ten turned up something
real. Only `ic_classification` came back clean on this deeper pass — its existing
gap already anticipated the relevant qualifier (a statute can override the
common-law default; *Darden* itself says so).

## What changed

| Clause | Finding | Fix |
|---|---|---|
| `work_auth` | The "three business days" I-9 deadline isn't universal — hires under 3 business days require same-day completion (8 C.F.R. §274a.2(b)(1)(iii)). More substantially: 8 U.S.C. §1324b(a)(2)(A) exempts employers with **three or fewer employees** from the anti-discrimination provision entirely — the clause's "applies to every employee" framing didn't disclose that the smallest employers are outside this protection's scope. | Added both as citations; extended the gap. |
| `monitoring` | Both cited cases are state common law, not a national rule — *Smyth* applies Pennsylvania tort law, *Stengart* is New Jersey Supreme Court applying private-party common law (the opinion itself says the Fourth Amendment doesn't reach private employers). The existing gap already flagged the privilege-specific nature of *Stengart*; this adds that the underlying rule itself is state-grounded. | Extended the gap. |
| `offer_overtime` | *Forrester*'s own reasoning limits the non-reporting safe harbor: an employer can still be liable for negligently maintaining required records or deliberately turning its back on a situation — not reporting isn't a blank check. | Added a supporting *Forrester* quote; extended the gap. |
| `ip_assignment` | 17 U.S.C. §101 only *defines* "work made for hire" — the provision that actually *vests* ownership is §201(b), which carries its own carve-out: ownership vests in the employer unless the parties expressly agree otherwise in a signed writing. This is exactly why a written assignment still matters. | Added §201(b) as a citation; extended the gap. |
| `ip_consideration` | Both *Columber* and *Labriola* are noncompete cases — *Columber*'s own reasoning leans on public policy specific to restraints on trade, which doesn't obviously extend to an invention-assignment or confidentiality agreement. No case confirming the same rule applies to that context was found. | Disclosed as an open scope question in the gap, not resolved by assertion. |
| `ic_classification` | None — the existing gap already anticipated that a statute can override the common-law default, which is exactly what *Darden* itself says ("unless the statute otherwise dictates"). | No change. |
| `ic_state_variation` | The gap's claim that California's ABC test "has statutory exceptions for specific occupations" was accurate but had been asserted from memory, not sourced. | Fetched Cal. Lab. Code §2783 directly (insurance professionals, physicians, and others revert to the *Borello* test) and added it as a citation. |
| `term_final_pay` | Even California's "immediate" rule has a narrow carve-out for seasonal layoffs in perishable-food processing (up to 72 hours instead of immediate). | Extended the gap. |
| `term_cobra` | The clause said coverage lasts "temporarily" without saying how long — 29 U.S.C. §1162(2)(A)(i) sets the actual figure at 18 months (extendable to 36 for a second qualifying event). | Rewrote the body to state the concrete duration; added the citation; extended the gap. |
| `term_accrued_pto` | California's no-forfeiture rule bars taking away vacation already earned, but does not require unlimited accrual — an employer may cap future accrual once a threshold is banked (*Boothby v. Atlas Mechanical*). The clause's "can't be forfeited" language didn't distinguish a forfeiture from a cap. | Added the *Boothby* citation; extended the gap. |

**Caught mid-fix, before it shipped:** the first draft of the `term_accrued_pto`
gap addition repeated the exact `{{companyName}}`-in-gap-text bug this project
already knows about (gap text isn't run through template substitution). Caught by
re-reading the diff before committing, not by re-testing in the browser this
time — worth noting as a place this failure mode keeps trying to sneak back in.

**Caught during the final quote re-verification, before shipping:** two of the
new citations (`work_auth`'s §1324b(a)(2)(A) and `ic_state_variation`'s §2783) had
a subtler defect — cutting a quote at a natural stopping point but silently
converting the source's continuing punctuation (a comma, a colon) into a
fabricated closing period. Caught by the standard independent-refetch-and-diff
step, not by inspection; fixed by ending the quote with no invented punctuation
instead.

All fixes were re-verified against a second, independent source fetch — five
statute/regulation quotes diffed programmatically against fresh `curl` fetches,
two case quotes reconfirmed via a second CourtListener `search_document` call —
before this round shipped. `checkedDate` updated to 2026-08-29 on all nine
corrected clauses.

## Where this leaves the corpus

Combined with Phase 6, every one of the 13 authority clauses in the corpus has
now had at least one round of this depth applied: full source re-read past the
quoted fragment, not just a re-confirmation that the quote is verbatim. Twelve of
the thirteen had something real to fix. That ratio is itself informative — it
means the earlier "Pass" verdicts recorded in lighter passes (Phase 3's items 1
and 8, Phase 6's first table) were checking real things, but were not a
substitute for this depth, and shouldn't be read as a claim that a clause is
finished. Nothing in this project is verified once and left alone — the standing
rule is still to keep checking, including clauses that already passed a lighter
audit.
