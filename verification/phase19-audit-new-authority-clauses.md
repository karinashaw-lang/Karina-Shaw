# Phase 19 — 9-item audit of the nine new authority clauses

## Scope

The nine authority clauses added across the three "fill in all gaps" documents
(Pregnant Workers Fairness Act Accommodation, Whistleblower Policy, Employee
Non-Solicitation Agreement) were each verified at write time, but hadn't had the
dedicated, fresh-eyes second pass this project gives batches of authority content
(the pattern set by Phase 6, 7, and 18). This is that pass.

Audited: `pwfa_coverage`, `pwfa_accommodation_duty`, `whistleblower_coverage`,
`whistleblower_protected_activity`, `whistleblower_dodd_frank_scope`,
`whistleblower_no_waiver`, `whistleblower_remedies`, `nonsolicit_employee_split`,
`nonsolicit_customer_distinction`.

## Method

- Fresh, independent `curl` re-fetch of all four statutory sources (18 U.S.C.
  §1514A, 15 U.S.C. §78u-6, 42 U.S.C. §2000gg, §2000gg-1) — new network round-trips
  this session, not reused from the original authoring fetches.
- Programmatic substring verification of every statutory quote against the freshly
  fetched, tag-stripped, entity-decoded text (handling the corpus's two established
  quoting conventions: `...` for marked omissions, `[x]` for a case-changed letter).
- Fresh CourtListener `search_document` re-verification of every case-law quote
  (Digital Realty Trust v. Somers, Loral Corp. v. Moyes, AMN Healthcare v. Aya
  Healthcare Services), using different query substrings than the original
  authoring pass to avoid just re-confirming the same lucky match.
- A structural review against the 9-item checklist for every clause: classification,
  primary source, citation-matches-claim, corroboration, full-picture-not-just-the-
  fragment, jurisdiction scoping, informing vs. advising, staleness.

## Findings and fixes

1. **Capitalization altered without marking it** (item 5 — word-for-word fidelity).
   `whistleblower_dodd_frank_scope`'s Dodd-Frank definition quote started "the term
   'whistleblower'..." but the source reads "**The** term..." (it's the start of a
   sentence in the source; my quote begins mid-document after a "Whistleblower"
   subheading). Fixed by applying the bracket convention the corpus already uses
   elsewhere (`work_auth`'s "[c]omplete [S]ection 2"): `[t]he term`.

2. **Incomplete picture of the accommodation duty** (item 6 — full picture, not just
   the fragment). `pwfa_accommodation_duty` quoted 42 U.S.C. §2000gg-1 paragraphs
   (1), (2), and (4), skipping (3) and (5) with an unmarked ellipsis. Reading the
   full five-paragraph list turned up two more prohibited practices this clause's
   body never disclosed: (3) denying employment opportunities because of the need to
   accommodate, and (5) taking adverse action against someone for requesting or
   using an accommodation — a real anti-retaliation protection specific to PWFA
   requests. Fixed by rewriting the body to state all five prohibited practices and
   extending the citation to quote the full (1)-(5) list.

3. **Thin corroboration** (item 4 — two independent sources).
   `nonsolicit_customer_distinction` rested on a single citation (AMN Healthcare
   quoting Galante). Loral's own opinion — already in this project's source set —
   separately quotes *Muggill v. Reuben H. Donnelley Corp.*, 62 Cal. 2d 239, 242
   (1965) making essentially the same point (a §16600 restraint is invalid "unless
   they are necessary to protect the employer's trade secrets"). Added as a second,
   independent citation.

4. **Filing deadlines existed but weren't disclosed** (item 6, judgment call). SOX
   and Dodd-Frank whistleblower claims run on very different clocks — 180 days for
   SOX, up to 6 years (or 3 from discovery, 10-year outer limit) for Dodd-Frank — and
   `whistleblower_remedies`' gap discussed the remedies difference between the two
   statutes without mentioning this second, equally real difference. This is a
   policy document, not a how-to-file guide, so a full procedural walkthrough would
   be scope creep — but the corpus already states comparably concrete deadlines
   elsewhere as plain fact (the Severance Agreement's OWBPA 21/45-day review and
   7-day revocation windows), so leaving this one out was an inconsistency, not a
   deliberate scope boundary. Added both deadlines to the gap with their citations.

## Confirmed correct, no change needed

- All remaining statutory and case-law quotes across all nine clauses matched their
  freshly re-fetched sources exactly.
- A CourtListener search-index quirk was surfaced but is not a citation error on this
  project's side: `search_document`'s indexed copy of *Loral v. Moyes* renders
  "Business **arid** Professions Code" (an OCR artifact) at the exact spot this
  project's citation reads "Business **and** Professions Code." The project's quote
  matches the authoritative Lawbox-sourced opinion text pulled earlier this session
  via `call_endpoint`, which reads "and" correctly — "Business and Professions Code"
  is an unambiguous, well-known California code title, and "arid" isn't a real
  reading. Noted here as a data-quality observation about the search tool's index,
  not a correction to any clause.
- Classification (authority vs. drafting) was correct for all nine clauses and the
  six sibling drafting clauses in the same three documents — no legal claim was
  found hiding in a `drafting`-kind clause, and no pure template text was found
  wrongly marked `authority`.
- Jurisdiction scoping: the five whistleblower and two PWFA clauses are federal law,
  correctly scoped as such with no jurisdictional ambiguity. The two non-solicitation
  clauses are explicitly, honestly scoped as one state's real split rather than a
  general rule — consistent with how the existing Non-Compete Agreement document
  already handles the same California-specific sourcing.
- Informing vs. advising: re-read all nine clauses' body and gap text against the
  line. None instruct the specific reader what to do about their situation; all
  state the legal test or rule and, where real uncertainty exists, name it as
  uncertainty rather than resolving it.
- Staleness: all nine clauses carry `checkedDate: "2026-08-30"` — current as of this
  audit.

## Verification

- Every statutory quote (17 across the affected clauses) re-verified against fresh
  source text programmatically; all pass after the fixes above.
- Every case-law quote re-verified via a fresh CourtListener search with new query
  terms; all pass.
- Every edited `gap`/`title` field grepped for `{{` leakage — clean.
- Headless Playwright walkthrough of the three affected documents: badge counts
  correct (PWFA: 2, Whistleblower: 5, Employee Non-Solicitation: 2 — up from 1
  after the Muggill addition), zero leftover placeholders, zero console errors.
  Screenshots confirm the expanded PWFA duty clause and the new whistleblower
  filing-deadline citations render correctly.
- Full 32-document regression run clean after all edits.

## Net changes

- `data/clauses.json`: no new clauses — four existing clauses edited
  (`whistleblower_dodd_frank_scope`, `pwfa_accommodation_duty`,
  `nonsolicit_customer_distinction`, `whistleblower_remedies`). Corpus remains 112
  clauses, but with 4 additional citations across those four clauses (one on
  `nonsolicit_customer_distinction`, two on `whistleblower_remedies`, one expanded
  in place on `pwfa_accommodation_duty`).
