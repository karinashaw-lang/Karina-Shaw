# Phase 18 — Deep audit of the 5 never-audited authority clauses

Same adversarial-depth standard as Phases 6 and 7: for each clause, re-fetch the cited
source in full — past the fragment already quoted — and hunt for qualifiers, carve-outs,
or additional holdings the clause doesn't disclose. Nothing here is a claim that these
five clauses were wrong; each had already been through the 9-item checklist once at
write time. This is a second, independent pass, done later and adversarially, the way
Phase 6/7 covers were done for the rest of the corpus.

Audited: `nda_definition`, `nda_dtsa_notice`, `nc_enforceability`, `nc_consideration`,
`sev_owbpa`.

## nda_definition — What Counts as Confidential

**Re-checked:** 18 U.S.C. § 1839(3) fetched fresh; searched the statute text for
"general skill," "inevitable disclosure," "residual" — none codified there, confirming
the DTSA's own text doesn't address the general-skill-and-knowledge doctrine at all.

**Finding (real, added):** the clause's definition didn't disclose that an employee's
own general skill, knowledge, and experience — developed on the job but not specific to
the employer's own processes — isn't a trade secret and isn't something a confidentiality
agreement can lock down when the employee leaves. This is well-established doctrine, not
DTSA text, so it needed its own independent source rather than being folded into the
existing statute/*Inteliclear* citations.

**Fix:** added a new citation, *Analog Devices, Inc. v. Michalski*, 157 N.C. App. 462,
579 S.E.2d 449 (2003) (https://www.courtlistener.com/opinion/1304930/analog-devices-inc-v-michalski/),
confirmed by direct document search — the quote states plainly that general engineering
skill and knowledge "are not specific to the techniques and processes used by Analog, and
both engineers are free to market those skills to competitors." Cross-checked against the
older case it quotes, *FMC Corp. v. Cyprus Foote Mineral Co.*, 899 F. Supp. 1477 (W.D.N.C.
1995) — confirmed the "must work for FMC or not work at all" language word for word
against a fresh fetch of that opinion too. Extended the gap to disclose the doctrine.

**Bug caught during this fix:** the first draft of the extended gap text used
`{{companyName}}` and `{{employeeName}}` placeholder syntax. Gap text is never
substitution-processed (`substitute()` only runs on clause `body`) — this is a
previously-documented defect class (see changelog) and it recurred here. Caught by the
regression script's leftover-placeholder check before commit, not shipped. Rewritten in
plain language ("the employer's trade secret," "the employee developed").

## nda_dtsa_notice — Whistleblower Immunity Notice

**Re-checked:** fetched the complete text of 18 U.S.C. § 1833 (not just (b)(1) and
(b)(3), which were the only subsections already cited).

**Finding (real, added):** two provisions in the same subsection weren't disclosed:

- § 1833(b)(3)(B) — an employer can satisfy the notice requirement without putting it in
  the contract at all, by cross-referencing a separate policy document that states the
  employer's reporting policy instead.
- § 1833(b)(2) — someone retaliated against for reporting a suspected violation has a
  further right beyond the immunity itself: they may share the trade secret with their
  own attorney and use it in that retaliation lawsuit, if filed under seal.

**Fix:** added both as new citations with exact quotes re-verified against a fresh
fetch, and extended the gap to name both. (§ 1833(b)(3)(D)'s effective-date cutoff and
(b)(4)'s contractor/consultant inclusion were reviewed and judged not worth adding —
the former is moot for any current agreement, the latter doesn't change what this
clause tells the reader.)

## nc_enforceability — Enforceability Varies by State

**Tooling note caught mid-audit:** the first attempt to re-verify the *Raimonde v. Van
Vlerah* quote passed `opinion_id: 6865409` (the case's *cluster* ID, reused by mistake)
to `search_document` and got back the text of a completely unrelated Washington case —
a real false-negative risk this project has hit before with `search_document`, but this
time from passing the wrong ID type rather than an apostrophe/linebreak mismatch. Caught
by noticing the returned text didn't match the case at all, not by trusting a "no match."
Re-ran `search` on the case name, got the correct `opinion_id: 6755445`, and the
original quote checked out exactly as already cited.

**Re-checked:** fetched the complete text of Cal. Bus. & Prof. Code § 16600 (not just
subsection (a), which was the only part already cited), and read past the already-quoted
fragment of *Raimonde*.

**Finding (real, added):**

- § 16600(b)(1) — California's ban is explicit that narrow drafting is not a workaround:
  a noncompete is void "no matter how narrowly tailored" if it doesn't fit a statutory
  exception. The clause already described the ban-state approach in general terms but
  didn't disclose that tailoring the restriction doesn't rescue it under this approach —
  a real, common misconception worth naming.
- *Raimonde* itself, read past the already-quoted reasonableness test, holds that Ohio
  courts modify/amend ("blue pencil") an unreasonable covenant rather than voiding it
  outright — this is the specific example the existing gap's abstract "some will narrow,
  others will void" sentence lacked. Added as a second quote from the same case.

**Fix:** added both findings as new citations (§ 16600(b)(1) with its Edwards v. Arthur
Andersen cross-reference intact; the *Raimonde* modification holding), and rewrote the
gap to name the narrow-tailoring point and to use *Raimonde* as the concrete blue-pencil
example instead of leaving the split unillustrated.

## nc_consideration — If This Is Signed After Employment Begins

**Re-checked:** read past the already-quoted holding sentence in *Lake Land Employment
Group of Akron, LLC v. Columber*, into the opinion's own "III. Caveat" section.

**Finding (real, significant):** the court's caveat is explicit that its holding —
continued at-will employment is sufficient *consideration* — does **not** mean the
noncompete is automatically *enforceable*. The opinion says the reasonableness inquiry
is a separate, later question the consideration holding doesn't resolve. The clause as
written could be read to imply that satisfying consideration settles the matter; it
doesn't distinguish consideration from enforceability at all.

**Fix:** extended the gap to state plainly that consideration and enforceability are two
different questions, quoting/paraphrasing the caveat's own framing, without adding a new
citation (the caveat is part of the opinion already cited, at a different pin).

**Item 8 correction (informing vs. advising):** the original gap ended with an
imperative — "check the rule for the specific state involved before relying on continued
employment alone as sufficient consideration." That's a directive to the specific reader,
not a statement of fact, and doesn't match this project's own standard (see
methodology.html item 8). Rewritten to a descriptive statement: the split exists, and
"this document doesn't take a position on which rule applies to any specific agreement."

## sev_owbpa — Age Discrimination Release Requirements

**Re-checked:** fetched the complete text of 29 U.S.C. § 626(f) (all of paragraphs
(1)-(4), not just the subparagraphs already cited).

**Finding (real, significant):** § 626(f)(1)(H) — a requirement specific to group
terminations and exit-incentive programs that the clause's existing 45-day mention
didn't capture at all: the employer must also give written disclosure, at the start of
the consideration period, of the class/unit/group covered, eligibility factors, time
limits, and — the part with real practical teeth — the job titles and ages of everyone
eligible or selected for the program *and* everyone in the same job classification or
unit who wasn't. This is one of the most litigated OWBPA compliance points in actual
group layoffs and was entirely absent from the existing clause and gap.

**Finding (real, minor):** § 626(f)(2) — a waiver settling an already-filed EEOC charge
or lawsuit follows a lighter rule (subparagraphs (A)-(E) plus only a "reasonable period,"
not the fixed 21/45-day and 7-day structure). The clause's body states the full
requirements as if universal to any age-discrimination release; this carve-out for
already-filed disputes wasn't disclosed.

**Fix:** added both as new citations with quotes re-verified against the fresh fetch,
and extended the gap to state both, alongside the existing EEOC-participation point.

**Item 8 correction:** same pattern as `nc_consideration` — "confirm that before relying
on the shorter period" was an imperative directed at the specific reader. Rewritten to
disclosure-only language.

## Regression

Headless Playwright walkthrough of all three affected documents (NDA, Non-Compete,
Severance Agreement): generated each with placeholder answers, expanded every badge,
confirmed all five audited clauses render with their full (now-longer) citation lists,
zero console errors, zero leftover `{{placeholder}}` text in rendered output (after the
gap-text bug above was caught and fixed). Screenshots captured for all three documents.

## Net changes to data/clauses.json

- `nda_definition`: +1 citation (Analog Devices v. Michalski), gap extended.
- `nda_dtsa_notice`: +2 citations (§1833(b)(3)(B), §1833(b)(2)), gap extended.
- `nc_enforceability`: +2 citations (§16600(b)(1), Raimonde blue-pencil quote), gap
  rewritten with a concrete example.
- `nc_consideration`: gap extended (no new citation — same case, different holding
  already in the record) and de-imperativized.
- `sev_owbpa`: +2 citations (§626(f)(1)(H), §626(f)(2)), gap extended and
  de-imperativized.

All five clauses remain `status: "verified"` — nothing found here contradicted what was
already shipped; every finding was an undisclosed qualifier or additional provision, the
exact failure class item 6 of the checklist exists to catch.
