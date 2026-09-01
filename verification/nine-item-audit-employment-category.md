# 9-item checklist audit — Employment category

## Why this audit

Direct follow-up instruction: re-run the project's 9-item verification checklist
against "all old material" — the 32 Employment documents built before this session's
Business Formation and Real Estate work — as a fresh, independent audit rather than
trusting that Phase 6, Phase 7, and Phase 18's earlier audits still fully hold.

## Method

Split the corpus's 49 Employment authority clauses across four parallel research
passes, grouped by sub-category (Hiring, During Employment, Ending Employment,
Confidentiality & IP), each independently re-fetching every citation's source text
fresh and walking all 9 checklist items per clause. This wasn't a rubber stamp —
each pass was instructed to report every non-passing item with the exact fetched
text, not just a clean bill of health.

**Environment note:** direct `curl` fetches of `courtlistener.com` are blocked by an
AWS WAF challenge in this sandbox (confirmed independently by all four passes); case
opinions were instead re-verified via the CourtListener MCP API's own document
tools, reading the same underlying primary opinion text a browser would render.
Direct fetches of `nysenate.gov` were also blocked (Cloudflare challenge), leaving
one citation (part of `term_final_pay`) unable to be re-verified by direct fetch in
this environment; it was cross-checked against secondary listings instead, which
matched, but this remains a real, disclosed verification gap rather than a resolved
one.

## What the audit found and fixed

**Real defects, corrected:**

- **`timekeeping`** — the most serious finding. Its §211(c) quote was truncated
  with a period that doesn't exist in the actual statute (the real sentence
  continues for another ~35 words), and the clause's opening claim ("Non-exempt
  employees must record all time worked") was attributed to a citation that is
  actually an *employer* recordkeeping duty, not an employee obligation. Separately,
  its Mazurek v. Metalcraft citation supported a limiting principle the clause never
  stated, and the clause was the only one of its kind in the corpus with no `gap`
  field to hold that nuance. Fixed: quote corrected to the complete sentence, body
  reworded to correctly attribute the duty to the employer while explaining the
  practical employee-facing instruction, and a new `gap` field added stating the
  Mazurek limit explicitly.
- **`bgc_disclosure`** and **`bgc_authorization`** — both overstated the FCRA
  stand-alone-disclosure-document rule as absolute. The statute has a real, narrow
  carve-out for applicants to DOT/state-transportation-regulated positions applying
  by mail, phone, or computer, who can instead receive oral/electronic notice — no
  stand-alone document required. `bgc_authorization` specifically claimed the
  authorization exception was "the one deliberate exception," which is inaccurate
  once this second exception is accounted for. Fixed: both clauses' bodies/gaps
  qualified, and a new citation to 15 U.S.C. § 1681b(b)(2)(B)-(C) added to
  `bgc_disclosure`.
- **`monitoring`** — presented two state-specific court holdings (Smyth v.
  Pillsbury, Pennsylvania; Stengart v. Loving Care, New Jersey) as if they were
  general, jurisdiction-neutral propositions, with neither state named in the body.
  This is exactly the pattern the project's own 2026-08-29 "generalize away from
  named-state examples" policy exists to prevent for federal-law clauses — except
  here the clause's actual content *is* state common law, so the fix is the
  opposite of removal: name the states and frame each holding as one state's
  evidence, matching the disclosed-exception pattern already used for noncompete
  clauses. Fixed: body now names Pennsylvania and New Jersey explicitly; gap
  reframed with the "one state's evidence, not a jurisdiction claim" disclosure.
- **`whistleblower_dodd_frank_scope`** — claimed Dodd-Frank gives "a direct right
  to sue in federal court," a true statement, but one neither of the clause's two
  citations actually supported. Fixed: added a citation to 15 U.S.C.
  § 78u-6(h)(1)(B)(i), the actual district-court cause-of-action provision.

**Two-independent-source gaps, closed with genuine additional sources:**

- `classification_default_rule` (was 1 citation) — added 29 C.F.R. § 778.107, the
  DOL's own regulatory restatement of the 1.5x overtime rate.
- `fmla_entitlement` (was 1 citation) — added 29 C.F.R. § 825.200(a), the DOL's own
  regulatory restatement of the 12-workweek entitlement and its four categories.
- `harassment_employer_response` (both citations were the same case, Faragher) —
  added Burlington Industries, Inc. v. Ellerth, 524 U.S. 742 (1998), Faragher's
  companion case establishing the identical affirmative-defense framework the same
  day.
- `warn_coverage` (both citations were the same statute page) — added 20 C.F.R.
  § 639.3(a), the DOL's own regulatory restatement of the 100-employee coverage
  threshold.
- `warn_exceptions` (both citations were the same statute page) — added 20 C.F.R.
  § 639.9(c), the DOL's own regulatory explanation of the natural-disaster
  exception.
- `whistleblower_coverage` (both citations were the same statute page) — added
  Lawson v. FMR LLC, 571 U.S. 429 (2014), the Supreme Court holding that extends
  § 1514A's protection to employees of a public company's contractors and
  subcontractors, directly corroborating the clause's "extends to...contractors"
  claim.

**Two-independent-source gaps, honestly disclosed rather than force-fit:**

- `warn_liability`, `whistleblower_protected_activity`, `whistleblower_no_waiver` —
  each still rests on subsections of a single statutory page, with no independent
  regulation or case found on a reasonable search restating the same specific point
  (WARN's damages formula; SOX's reasonable-belief standard; SOX's
  no-predispute-waiver rule). Rather than attach a weakly-related citation just to
  hit a count, each clause's `gap` field now says so explicitly — the same honest
  pattern `nda_dtsa_notice` already used before this audit.
- `nda_dtsa_notice` — already self-disclosed this limitation before the audit;
  confirmed accurate and left as-is.

**Minor, precision-only findings — noted, not corrected in the corpus:**

- `at_will`'s Lincoln v. Wackenhut citation is Lincoln's own recitation of a
  sibling Wyoming case's (McDonald v. Mobil Coal) reasoning, which it then adopts —
  the legal proposition conveyed is accurate, the case attribution is slightly
  imprecise. Not changed: correcting it would mean re-citing to a case not
  originally researched, for a nuance that doesn't affect the clause's accuracy.
- `arb_agreement`'s Epic Systems Corp. v. Lewis quote is drawn from the U.S.
  Reports syllabus (which carries its own "constitutes no part of the opinion"
  disclaimer) rather than the majority opinion body — the holding stated is
  accurate. Not changed for the same reason.
- `nonsolicit_employee_split`'s Loral Corp. v. Moyes citation quotes "Business and
  Professions Code," which CourtListener's own scanned-reporter transcription
  renders as "Business arid Professions Code" — an OCR artifact in the mirror, not
  in the actual 1985 opinion or in this corpus's quote. No action needed; flagged
  for awareness only.
- Every federal statute/regulation citation in the corpus is sourced from
  law.cornell.edu (Cornell's Legal Information Institute) rather than a literal
  `.gov` domain. Confirmed, across all four passes, that Cornell LII reproduces the
  U.S. Code and C.F.R. verbatim rather than paraphrasing — this is treated as an
  accepted primary-source-mirror convention for this corpus, the same way
  CourtListener is accepted for case law, rather than a defect requiring a source
  change.

## Verification

- All new/added quotes checked against a second, independent fetch before writing
  (Cornell LII pages via direct `curl`; case opinions via a second CourtListener MCP
  search using different query terms against the same stored text, since a true
  second HTTP fetch of that mirror isn't available in this environment).
- checkedDate updated to 2026-09-01 on every clause actually edited.
- Full-corpus regression run after all fixes.

## Net changes

- 5 clauses fixed for real accuracy/completeness defects: `timekeeping`,
  `bgc_disclosure`, `bgc_authorization`, `monitoring`,
  `whistleblower_dodd_frank_scope`.
- 6 clauses gained a genuine second independent source:
  `classification_default_rule`, `fmla_entitlement`, `harassment_employer_response`,
  `warn_coverage`, `warn_exceptions`, `whistleblower_coverage`.
- 3 clauses gained honest single-source disclosure instead of a forced citation:
  `warn_liability`, `whistleblower_protected_activity`, `whistleblower_no_waiver`.
- 1 clause had minor directive language softened: `term_final_pay`.
- No new clauses added — this pass corrected and strengthened existing ones. Corpus
  remains 181 clauses across 38 documents.
- Of the 49 audited authority clauses, 21 passed all 9 items with zero findings on
  first check; the rest had at least one issue ranging from serious (timekeeping's
  quote truncation) to cosmetic (an OCR artifact in a source mirror this project
  doesn't control).

## Scope note

This audit covered the 49 authority clauses across all 32 Employment documents —
the complete "old material" that predates this session's Business Formation and
Real Estate work. It did not re-run this same audit against the newer Business
Formation/Real Estate/granularity-pass clauses, which were built with the checklist
applied at creation time and have separately had multiple granularity passes; a
fresh independent audit of that newer material, in the same spirit as this one,
hasn't been run yet.
