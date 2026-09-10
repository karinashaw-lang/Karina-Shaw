# Real Estate, new document: Self-Help Eviction and Lockout Prohibition (Civ. Code § 789.3) — Information Sheet

Wave 154 (Real Estate). Continues the even round-robin of waves 146,
148, 150, and 152.

## Why this document

Before this document, the corpus's 80 Real Estate documents had no
clause on California's statutory prohibition of residential
"self-help" eviction. A grep of both data files for `789.3`,
`lockout` (in a landlord-tenant sense), `forcible entry`, `1159`,
`self-help`, `Kinney`, and `Otanez` returned no landlord-tenant hits
(the only `lockout` hits are labor-dispute clauses; the only `1159`
hits are unrelated numbers). The closest existing material is the
Landlord's Right of Entry sheet, which quotes Civ. Code § 1940.2(a)(4)
(the entry-violation category) and § 1940.2(b) (the $2,000 penalty);
this document quotes the distinct § 1940.2(a)(3) force-or-menacing-
conduct category and cross-references that sheet rather than
repeating its material.

## What this document covers

10 clauses: 2 drafting (purpose declaration, acknowledgment) and 8
authority clauses:

- **`selfhelp_utility_interruption_prohibition`** (§ 789.3(a);
  *Kinney v. Vaccari* (1980) 27 Cal.3d 348) — the utility-shutoff
  prohibition and the Supreme Court's two-element summary (willful
  interruption plus intent to terminate occupancy).
- **`selfhelp_lockout_doors_property_prohibition`** (§ 789.3(b)(1)-(3)
  and closing proviso; *Spinks v. Equity Residential Briarwood
  Apartments* (2009) 171 Cal.App.4th 1004) — lock changes/bootlocks,
  removal of outside doors or windows, removal of the tenant's
  belongings without prior written consent (except under the § 1980
  procedure), and the lawful-eviction and § 1940(b) carve-outs.
- **`selfhelp_who_is_protected`** (*Otanez v. Blue Skies Mobile Home
  Park* (1991) 1 Cal.App.4th 1521; *Spinks*) — residential use, not
  full-time or physical occupancy; a person in peaceful possession
  need not be a formal "tenant."
- **`selfhelp_who_is_liable`** (*Otanez*; *Kinney* fn. 2) — property
  managers not liable in their own right; owner liable for managing
  agent's acts under respondeat superior.
- **`selfhelp_civil_remedies`** (§ 789.3(c)(1)-(2), (d); *Spinks*) —
  actual damages, up-to-$100/day with $250 minimum per cause of
  action, mandatory fees to the prevailing party (two-way), injunctive
  relief, non-exclusivity.
- **`selfhelp_penalty_construction`** (*Kinney*, four quotes incl.
  fn. 6) — "tenant" in the penalty formula means all occupants of a
  rental unit; *Hale v. Morgan* constitutional limits as described in
  *Kinney*; the 1979 rewrite.
- **`selfhelp_forcible_entry_and_penal`** (Code Civ. Proc. § 1159(a),
  (b); Penal Code § 418) — forcible entry definitions and the
  misdemeanor.
- **`selfhelp_related_1940_2`** (Civ. Code § 1940.2(a) chapeau,
  (a)(3), (b), (c)) — force/threats/menacing conduct to influence a
  tenant to vacate, the $2,000 civil penalty, and the good-faith
  warning safe harbor.

## Genuine corrections and findings

- *Kinney* and *Hale v. Morgan* construed the **pre-1980** text of
  § 789.3, under which the $100/day penalty was mandatory. The current
  text (Stats. 1979, Ch. 333) makes it a ceiling with a $250 minimum
  per cause of action. Every clause that relies on *Kinney* says so in
  its `gap`, and the penalty-construction clause quotes *Kinney*'s own
  footnote describing the rewrite and declining to decide its effect.
- The *Spinks* "peaceful possession" sentence is interrupted in the
  CourtListener text by an official-reporter page-break marker
  (`*1049`) between "relevant" and "statutes." The marker is omitted
  from the quote as a non-textual artifact and the omission is
  disclosed in that clause's `gap`. No other quote required any
  change.
- The *Kinney* Hale-description quote contains an odd space before a
  closing quotation mark (`unconstitutional. ”`) in the CourtListener
  text; it is reproduced as-is (benign artifact, verbatim).
- *Spinks* independently quotes both the *Kinney* per-unit sentence
  and the *Otanez* "manifest purpose" sentence verbatim, corroborating
  those two quotes from a third opinion.

## Honest gaps disclosed

- *Hale v. Morgan* (1978) 22 Cal.3d 388 was not fetched; its holding
  is reported only as *Kinney* describes and quotes it.
- Civ. Code § 1940(a)-(b), § 1927, § 1980 et seq., Penal Code §§ 484
  and 518, and Code Civ. Proc. §§ 1160-1179a are cross-referenced but
  not fetched; each clause that leans on one says so.
- *Otanez* and *Spinks* both reversed summary judgments; the clauses
  state that neither decided the underlying facts.
- Whether the *Hale* proportionality analysis retains force under the
  amended discretionary penalty is flagged as unresolved.

## Method

Fetched Civ. Code § 789.3, Code Civ. Proc. § 1159, Civ. Code § 1940.2,
and Penal Code § 418 from `leginfo.legislature.ca.gov` twice each with
two distinct User-Agent strings (a browser-style UA and a
`groundtruth-corpus-verifier` UA), via curl through the environment
proxy; confirmed byte-identical after whitespace/nbsp normalization.
WebFetch was also run on each section as a third read (its output is a
model summary, so it was used only as a sanity check, not as a quote
source).

Case law via CourtListener: `search` (type "o") located *Spinks*;
website search pages (curl) located cluster ids for *Kinney* (1270067)
and *Otanez* (2275170). Each opinion's text was fetched twice through
two distinct API paths — `get_endpoint_item` (`html_with_citations`;
`plain_text` is empty for all three) and `read_document` — and every
*Kinney*/*Otanez* quote was then confirmed by a literal
`search_document` match (`match_count: 1` for each of the ten
quotes). *Spinks* (190 KB) was saved to a local file and its three
quotes confirmed as substrings programmatically. Attempts to obtain a
non-CourtListener second copy failed: courtlistener.com HTML returns a
202 bot-challenge with an empty body; Justia returns 403; Google
Scholar, AnyLaw, Leagle, and static.case.law are blocked at the egress
proxy; casetext is gone (410). Disclosed here rather than worked
around.

CourtListener's shared 5/min rate limit was hit repeatedly (four
parallel agents); waited out with in-turn sleeps.

## Verification

- All 17 statute/*Spinks* citation quotes programmatically confirmed
  as exact substrings of the fetched text after benign normalization
  (whitespace, nbsp, star-pagination markers); all 10 *Kinney*/*Otanez*
  quotes confirmed by CourtListener literal search.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Drafting clauses carry exactly `{id,title,kind,body}`; authority
  clauses exactly `{id,title,kind,status,checkedDate,body,gap,
  citations}`; citations exactly `{case,cite,url,quote}`.
- Checked for duplicate clause ids against the full corpus (none) and
  duplicate document id (none). The only title collisions are the two
  standard drafting titles ("Purpose of This Information Sheet" and
  "Acknowledgment") shared by every information sheet in the corpus;
  all eight authority-clause titles are unique.
- Field names (`propertyAddress`, `landlordName`, `tenantName`) match
  existing corpus convention; no new field names introduced.
- Corpus-wide validation (both files parse, ids unique, every
  `clauseOrder` id exists, every `{{placeholder}}` resolves to a
  declared field) run across the full updated corpus — clean.
- Inform-never-advise check: every clause states what the statute or
  court says and what it did not decide; no clause tells a reader what
  to do.

## Net changes

- New document: Self-Help Eviction and Lockout Prohibition (Civ. Code
  § 789.3) — Information Sheet
  (`self_help_eviction_lockout_prohibition_info_sheet`), 10 clauses
  (8 authority + 2 drafting), in the Real Estate category. Fields:
  `propertyAddress`, `landlordName`, `tenantName`.
- Corpus: 5,156 → 5,166 clauses; 632 → 633 documents; Real Estate
  80 → 81.
