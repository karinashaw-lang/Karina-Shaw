# Estate Planning, new document: California End of Life Option Act (Medical Aid-in-Dying) — Information Sheet

## Why this document

Fourth and final processed item of wave 138 (Estate Planning slot,
1×4 pattern, closing the wave). The agent ruled out Heggstad
petitions, holographic wills, Totten trusts, Crummey powers, and
life-estate/right-of-survivorship language — all confirmed already
covered by direct inspection of context, not just bare grep hits. The
chosen topic — the End of Life Option Act, Health & Safety Code
§§ 443-443.22 (medical aid-in-dying) — was confirmed genuinely open:
zero prior corpus hits on any of the seven cited section numbers,
"End of Life Option," or "aid-in-dying." The corpus's only other
Health & Safety Code coverage (§§ 7100/7100.1, disposition of
remains) is a distinct, unrelated topic.

## What this document covers

11 clauses: 2 drafting (intro, signature block) and 9 authority
clauses, citing Health & Saf. Code § 443.1(p), (r), (b), (o),
§ 443.2(a), (a)(5), (b), (c), § 443.3(a), (b)(2), (c), (c)(1), (c)(2),
§ 443.13(a)(1), (b), § 443.14(d)(1), (d)(2), § 443.18, § 443.21, plus
*People ex rel. Becerra v. Superior Court of Riverside County*, 29
Cal. App. 5th 486 (2018):

- **`eola_statutory_definitions`** — "qualified individual,"
  "terminal disease," and "aid-in-dying drug."
- **`eola_eligibility_requirements`** — the statutory conditions for a
  request, and the age/disability non-disqualification rule.
- **`eola_request_cannot_be_made_by_surrogate`** — the bar on
  surrogate requests via power of attorney, advance directive, or
  conservator.
- **`eola_request_procedure`** — the two-oral-requests-plus-written-
  request procedure.
- **`eola_witness_qualifications`** — the relationship/estate-interest
  and health-care-entity-employment limits on witnesses.
- **`eola_insurance_annuity_effect`** — the bar on conditioning a
  policy on a request, and the natural-death characterization for
  policy purposes.
- **`eola_legal_characterization_safeguards`** — the limits on using a
  request as sole basis for conservatorship/elder-abuse claims, and
  the not-suicide/homicide/euthanasia characterization.
- **`eola_estate_claim_public_place_death`** — a governmental entity's
  cost-recovery claim against the estate for a public-place death.
- **`eola_litigation_history`** — the published Court of Appeal
  decision addressing (on standing grounds only) a challenge to the
  Act's enactment.

## Genuine findings

- **A disclosed standing-only holding, not overstated as validating
  the Act**: the litigation-history clause explicitly states the
  court's holding was limited to standing and expressly did not reach
  the constitutional question, including a note that a separate
  opinion in the same case reached the constitutional merits but was
  not the basis of the court's disposition.
- **A disclosed missing-provision finding**: the insurance/annuity
  clause's gap discloses that no provision addressing how a death
  certificate must record cause of death was located anywhere in
  Health & Saf. Code §§ 443-443.22.
- **A disclosed cross-document limitation**: the surrogate-request
  clause's gap notes the corpus's existing Financial Power of
  Attorney, Advance Health Care Directive, and conservatorship
  documents do not independently restate this specific carve-out.
- **A disclosed unresolved consequence gap**: both the surrogate-
  request and witness-qualification clauses' gaps note the statute
  does not itself state a legal consequence if its requirements are
  violated (e.g., an improperly witnessed request).
- **A disclosed avoided line-wrap artifact**: rather than invoke the
  documented line-wrap exception, the witness-qualifications clause
  split a candidate quote into three clean quotes to avoid crossing a
  genuine non-breaking-space formatting artifact in § 443.3(c)'s
  numbered-item markup.

## Honest gap(s) disclosed

This document does not reproduce the full statutory written-request
form (§ 443.11) or the physician checklist/compliance forms
(§ 443.22), does not define all 18 terms in § 443.1 (only 4 used),
does not address the pre-2022 15-day request interval superseded by
SB 380, does not state a limitations period or claim priority for the
§ 443.21 estate claim, does not address § 443.14's other immunity
subdivisions, and does not track any later reported appellate
decision resolving the Act's enactment-validity question on the
merits after the 2018 standing-based remand.

## Method

Fetched Health & Saf. Code §§ 443.1, 443.2, 443.3, 443.13, 443.14,
443.18, and 443.21 from leginfo.legislature.ca.gov, each fetched
twice by the research agent with two distinct User-Agent strings via
curl, confirmed byte-identical. A CourtListener search located the
Becerra decision without a rate-limit issue; both quotes were verified
directly against the opinion's text. All 21 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings via a script comparing each quote against the corresponding
extracted section text or case opinion plain text.

Independently re-verified during integration review via a two-
hundred-and-seventeenth fetch (a new distinct curl User-Agent string,
"Groundtruth-217thVerify-EndOfLifeOptionAct/1.0") of all seven
statutory sections — one transient connection reset on § 443.1
resolved via the established retry-with-backoff pattern; the
remaining six fetched cleanly. All 19 statute citation instances
confirmed clean on direct normalized-whitespace substring match. Both
case-law quotes independently reconfirmed via the CourtListener MCP
document-search tool against the opinion's internal opinion_id
(6106992, for cluster 6240060) — both exact matches. The statutory
definitions, eligibility conditions, surrogate-request bar, request
procedure and witness limits, insurance/annuity effect, legal-
characterization safeguards, estate-claim provision, and the
litigation history's standing-only holding were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All seven cited statutory sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a two-
  hundred-and-seventeenth independent fetch during integration
  review; all 19 statute citation instances confirmed clean. Both
  case-law citations independently re-verified via the CourtListener
  MCP API against the correct internal opinion id.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions or multiple sections correctly disclose
  whether they are independent sources of each other; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `eola_` prefix has zero collisions. Ran section-
  number-specific greps for all seven cited sections plus "End of
  Life Option" and "aid-in-dying" — zero hits on all, confirming
  genuine novelty.
- Checked every citation's `case` field for emptiness — all 21
  populated with proper citation identifier strings.
- No new field ids required — all three fields (`patientName`,
  `physicianName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California End of Life Option Act (Medical Aid-in-
  Dying) — Information Sheet (`end_of_life_option_act_info_sheet`),
  11 clauses (9 authority + 2 drafting), in the Estate Planning
  category. No new fields.
- Corpus: 4,584 → 4,595 clauses; 571 → 572 documents. Fourth and
  final processed item of wave 138.

## Wave 138 summary

Wave 138 used a 1×4 rotation pattern (one document each in Ending
employment, Hiring, Business Formation, and Estate Planning),
targeting the two tied-lowest categories after wave 137 closed
(Hiring, Estate Planning) plus the two least-recently-touched
categories among the four tied one tier up (Business Formation,
Ending employment):

1. **Oil Drilling Industry Final-Wage Timing — Information Sheet**
   (Ending employment) — 4 clauses, Lab. Code §§ 201.7, 203.
2. **Proposition 209 — Constitutional Bar on Preferences in Public
   Employment — Information Sheet** (Hiring) — 8 clauses, Cal. Const.
   art. I, § 31.
3. **Limited Partnership Dissolution and Winding-Up — Information
   Sheet** (Business Formation) — 9 clauses, Corp. Code
   §§ 15908.01-15908.09.
4. **California End of Life Option Act (Medical Aid-in-Dying) —
   Information Sheet** (Estate Planning) — 11 clauses, Health & Saf.
   Code §§ 443-443.22.

Corpus totals across the wave: 4,563 → 4,595 clauses (+32 net across
four documents: 4 + 8 + 9 + 11); 568 → 572 documents (+4). No genuine
duplication findings required excluding any delivered clause this
wave — every apparent grep hit across all four documents was confirmed
false-positive or a legitimate, already-disclosed cross-reference.
One tooling discrepancy from the immediately preceding wave 137 was
resolved at the start of this wave's processing (the CourtListener
MCP tool's `opinion_id` parameter requiring the internal Opinion table
primary key, distinct from a courtlistener.com URL's cluster-id slug)
and applied correctly throughout this wave's own case-law
verification (the Becerra opinion).
