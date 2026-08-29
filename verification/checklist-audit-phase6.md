# Phase 6 audit — full 9-item checklist, all 24 shipped clauses

Checked 2026-08-29. The Phase 3 audit (`checklist-audit-phase3.md`) checked items 1
and 8 across the 11 clauses that existed at the time. This audit checks all nine
items, across all 24 clauses now in the corpus (11 drafting, 13 authority), across
all five documents. It found and fixed three real defects — not just confirmed
existing work.

## What changed as a result of this audit

Three authority clauses were corrected. All three fixes are already live in
`data/clauses.json`; this section records what was wrong and how it was found.

### 1. `at_will` — missing jurisdictional exception (item 7)

The clause stated the at-will default with no jurisdictional qualifier at all,
implying it applies universally. It doesn't: Montana's Wrongful Discharge from
Employment Act is a real, statutory exception — once an employee completes the
employer's probationary period, the employer needs "good cause" to terminate, and
plain at-will termination stops being lawful. Neither the original clause nor the
Phase 3 audit caught this, because Phase 3 checked item 1 (primary source) and item
8 (informing vs. advising) but not item 7 (jurisdiction) against this clause.

Fixed by adding a paragraph to the gap and two new citations, both freshly
fetched and confirmed against the actual statute-quoting case text:

- *Buck v. Billings Montana Chevrolet, Inc.*, 811 P.2d 537 (Mont. 1991)
- *Sullivan v. Continental Construction of Montana, LLC*, 299 P.3d 832 (Mont. 2013)

### 2. `timekeeping` — citation didn't precisely match the claim (item 3)

The clause's first sentence ("Non-exempt employees must record all time worked")
is a recordkeeping-duty claim. The only citation supporting it was 29 U.S.C.
§207(a)(1) — the overtime *pay-rate* requirement, not the recordkeeping duty
itself. The actual recordkeeping duty is 29 U.S.C. §211(c). §207(a)(1) still
belongs in the clause (it's the underlying pay obligation the Mt. Clemens
Pottery burden-shifting rule protects — already reasoned through in the Phase 3
audit), but it wasn't, on its own, the right citation for the recordkeeping
sentence specifically.

Fixed by fetching §211(c) directly from Cornell LII and adding it as the first
citation.

### 3. `accommodation` — clause overstated its own cited authority (item 6)

The clause claimed a good-faith interactive-process failure "can itself be a
basis for liability, independent of whether an accommodation actually existed."
Checking that claim against the full text of the clause's own cited case (*Taylor
v. Phoenixville School District*) found a four-part test, and the fourth element
is exactly the thing the clause said didn't matter: "the employee could have been
reasonably accommodated but for the employer's lack of good faith." The clause was
overclaiming relative to its own source — the single most common defect pattern
found across this whole project, and this is a real instance of it, not a
hypothetical.

Fixed by rewriting the body to state the accommodation requirement accurately,
rewriting the gap to explain the correction, and adding the four-part-test quote
from Taylor as a supporting citation.

All three fixes were re-verified against a second, independent source fetch
before shipping (the Montana cases and the FLSA recordkeeping statute via a
second `search_document`/`curl` pass; see conversation record). `checkedDate` was
updated to 2026-08-29 on all three.

## Full corpus, all nine items

### Drafting clauses (11) — item 1 (classification) and item 8 (informing) only;
items 2–7 and 9 don't apply, since these carry no legal claim

| Clause | Verdict |
|---|---|
| `welcome` | Pass — company statement, no legal claim. |
| `closing`, `offer_ack`, `ip_ack`, `ic_ack`, `term_ack` | Pass — signature blocks, no legal claim. |
| `offer_position`, `offer_compensation` | Pass — factual offer terms. |
| `ic_scope` | Pass — states the parties' own arrangement ("determines the manner and means of performing this work" describes what this contract says, not a claim about outside law). |
| `ic_payment` | Pass, reasoned through explicitly: the tax-withholding sentence states what *this company* will and won't do contractually, not a claim about what tax law requires — kept as drafting rather than reclassified to authority. |
| `term_notice` | Pass — factual notice of an effective date. |

### Authority clauses (13) — all nine items

| Clause | 1: primary source | 2–5: sourcing & quotes | 6: full picture | 7: jurisdiction | 8: informing | 9: staleness |
|---|---|---|---|---|---|---|
| `at_will` | N/A — common-law doctrine, opinions are the primary source | Pass, 5 citations | Pass | **Fixed this round** — Montana exception now disclosed | Pass | 2026-08-29 |
| `timekeeping` | Pass — §211(c) and §207(a)(1) both fetched directly | Pass, 4 citations | Pass | N/A — federal floor, correctly scoped | Pass | 2026-08-29 |
| `work_auth` | Pass — both underlying provisions fetched directly (Phase 2/3) | Pass, 4 citations | Pass — agency-guidance-vs-codified-rule distinction already drawn | N/A — federal | Pass | 2026-08-21 |
| `accommodation` | Pass — regulation fetched directly | Pass, 4 citations | **Fixed this round** — overclaim corrected | N/A — federal | Pass | 2026-08-29 |
| `monitoring` | N/A — common-law doctrine | Pass, 2 citations | Pass — privileged-communications distinction already flagged | Named as unresolved in gap (advance-notice varies by state) | Pass | 2026-08-21 |
| `offer_overtime` | Pass — §207(a)(1) fetched directly | Pass, 4 citations | Pass | Named as unresolved in gap (federal floor only) | Pass | 2026-08-21 |
| `ip_assignment` | Pass — 17 U.S.C. §101 fetched directly | Pass, 3 citations | Pass — contractor-assignment gap already flagged | N/A — federal | Pass | 2026-08-29 |
| `ip_consideration` | N/A — state contract-consideration doctrine | Pass, 2 citations | Pass | Pass — named split (Ohio v. Washington), not resolved | Pass | 2026-08-29 |
| `ic_classification` | N/A — federal common-law doctrine | Pass, 2 citations | Pass | N/A — federal | Pass | 2026-08-29 |
| `ic_state_variation` | Pass — Cal. Lab. Code §2775 fetched directly | Pass, 2 citations | Pass — statutory exceptions to the ABC test flagged | Pass — named (California), scoped as one example | Pass | 2026-08-29 |
| `term_final_pay` | N/A — no single federal rule; two state statutes are themselves primary | Pass, 2 citations | Pass | Pass — named split (California v. New York) | Pass | 2026-08-29 |
| `term_cobra` | Pass — all three provisions fetched directly | Pass, 3 citations | Pass — small-employer exception and gross-misconduct fact question both flagged | N/A — federal | Pass | 2026-08-29 |
| `term_accrued_pto` | Pass — Cal. Lab. Code §227.3 fetched directly | Pass, 2 citations | Pass | Pass — named (California), scoped as one strict example | Pass | 2026-08-29 |

**Item 9 in the aggregate:** every authority clause carries a `checkedDate`; none
are more than 8 days old as of this audit. The dates are a transparency
mechanism, not a permanent guarantee — restated from the Phase 3 audit's caveat,
which still holds: primary-source fetches in this project use `curl` against
Cornell LII, California Legislative Information, and the New York State Senate
site directly, which has worked every time it's been tried but is not a stable,
schema-backed integration.

## What this audit is, and isn't

This is the first pass that checked all nine items against the whole corpus
rather than a subset. It found three real, previously-unflagged defects and
fixed them — a jurisdiction omission, a citation-precision mismatch, and a
clause that overstated its own cited authority. It did not find, and is not
claiming to have found, every possible defect; the discipline is to keep
checking, not to declare the corpus finished.
