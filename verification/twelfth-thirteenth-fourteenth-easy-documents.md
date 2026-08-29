# Documents 12-14 — three lightweight documents

## Why these, and why "easy"

After eleven documents built on the full research pipeline (fresh statute/case
research, multiple citations per clause, a dedicated verification write-up each), the
next request was explicitly for lower-effort additions. Rather than force manufactured
legal claims onto simple business forms just to keep the "authority clause" pattern
going, these three lean on item 1 of the checklist — classify correctly first — and are
honestly scoped: two are pure `drafting` (no legal claim, no badge, nothing to verify),
and the third carries exactly one real, quickly-verified legal point rather than
several.

## Document 12 — Company Property & Equipment Return Acknowledgment

Three clauses: `prop_return_list` (drafting — itemized return list), a single
authority clause `prop_return_deduction_limit`, and `prop_return_ack` (drafting).

The one real claim: an employer can't deduct the value of unreturned property from an
employee's wages if doing so cuts into minimum wage or overtime pay — federal law
treats that the same as demanding wages back after they've been paid. Citations:

- 29 C.F.R. § 531.35 (the "free and clear" / no-kickback regulation).
- *Stein v. hhgregg, Inc.*, 873 F.3d 523 (6th Cir. 2017) — a real, on-point holding that
  requiring an employee to repay an already-delivered draw violates this same
  regulation, the same underlying principle as deducting for unreturned property.

**A transcription issue caught during independent re-verification:** the *hhgregg*
opinion's text, as returned by CourtListener, reads "...requires a repayment of wages
already, delivered to her" — an odd comma that reproduced identically across multiple
independent fetches. Rather than either silently drop it (altering what the source
shows) or quote it as-is (which could read as this project's own transcription error
rather than the source's oddity), the quote was restructured with an ellipsis to skip
past that ambiguous fragment entirely and land on the next clean, complete sentence
("Under these circumstances, we cannot say that the minimum wage is provided 'free and
clear.'"), which makes the same point without the ambiguity. Both fragments
independently re-verified against a fresh `search_document` call.

**Also caught:** the first draft of both citation quotes used straight double quotes
around "wages," "free and clear," and "kicks-back," where the actual source text (both
the CFR page and the case opinion) uses curly quotation marks. Caught immediately by
the fresh-fetch diff script (both fragments came back `MISSING` on the first pass), fixed
by copying the exact characters, re-verified clean.

Gap discloses that this is a federal floor only — state law can restrict or ban these
deductions further, or require written authorization first, and this document doesn't
catalog those stricter rules.

## Document 13 — Direct Deposit Authorization

Three clauses, all `drafting`, correctly classified: `dd_authorization` (the
authorization itself, with bank name/routing/account number left as blank fill-in
lines rather than wizard-collected fields — no reason for this client-side tool to ever
programmatically handle real banking numbers), `dd_revocation` (the employee can change
or revoke it in writing), `dd_ack`. No legal claim is made anywhere in this document,
so nothing needed sourcing — a routine consent form genuinely doesn't carry an
independent legal assertion beyond "the parties agree to this."

## Document 14 — Employee Referral Bonus Agreement

Three clauses, all `drafting`: `referral_terms` (bonus amount and the condition that
both the new hire and the referring employee stay employed through the payment date —
a business term the company sets, not a legal requirement), `referral_eligibility`
(who doesn't qualify — family members, current contractors, anyone involved in hiring
for that role), `referral_ack`.

## Verification

- The one real citation pair re-verified against a second, independent fetch —
  programmatic substring match for the CFR text, `search_document` for the case.
- Headless Playwright walkthrough of all 14 documents (corrected script — badges
  opened, `textContent` read): zero console errors, zero leftover placeholders across
  the whole corpus, including the three new ones.
- Screenshot of the property-return document confirms both citations render with the
  correct curly quotes and the gap displays correctly.

## Net changes

- `data/clauses.json`: +9 clauses (3 per document), corpus now 58 clauses. Only 1 of
  the 9 new clauses is `authority` (`prop_return_deduction_limit`); the other 8 are
  `drafting`.
- `data/documents.json`: +3 documents (`property_return`, `direct_deposit`,
  `referral_bonus`), corpus now 14 documents.
