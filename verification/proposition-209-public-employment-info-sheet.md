# Hiring, new document: Proposition 209 — Constitutional Bar on Preferences in Public Employment — Information Sheet

## Why this document

Second processed item of wave 138 (Hiring slot, 1×4 pattern). The
agent ruled out several candidates confirmed already covered
(off-duty cannabis, Lab. Code § 925 forum/choice-of-law, blacklisting
§ 1050, noncompete-void notice, Displaced Janitor Opportunity Act,
Grocery Worker Retention Law, no-rehire clauses, Civ. Code § 47(c)
reference-check privilege, Social Media Password Protection Act,
Immigrant Worker Protection Act, pre-offer medical/disability inquiry
restriction) — all confirmed via direct grep hits. The chosen topic —
California Constitution Art. I, § 31, added by Proposition 209
(1996), barring the state and its political subdivisions from
discriminating against or granting preferential treatment based on
race, sex, color, ethnicity, or national origin in public employment
— was confirmed genuinely open and distinct from this corpus's
existing FEHA-based private-employer hiring restrictions: zero prior
corpus hits on "Proposition 209," "Prop. 209," "Article I, Section
31," "Article I, § 31," or "preferential treatment."

## What this document covers

8 clauses: 2 drafting (declaration/scope, acknowledgment) and 6
authority clauses, citing Cal. Const. art. I, § 31(a), (f), (c), (d),
(e), (g), (b), (h) plus history note:

- **`propnine_core_prohibition`** — the core anti-discrimination/
  anti-preference rule in subdivision (a).
- **`propnine_covered_entities`** — the broad, illustrative-not-
  exhaustive definition of "State" in subdivision (f).
- **`propnine_bona_fide_sex_qualifications_exception`** — the
  sex-only bona fide qualifications exception in subdivision (c).
- **`propnine_court_order_and_federal_funding_exceptions`** — the
  pre-existing court order/consent decree exception and the federal-
  program-eligibility exception in subdivisions (d) and (e).
- **`propnine_remedies`** — the cross-referenced remedies provision
  in subdivision (g).
- **`propnine_effective_date_self_executing_severability`** — the
  prospective-only application, self-executing nature, and
  severability language in subdivisions (b) and (h).

## Genuine findings

- **A disclosed scope boundary distinguishing this document from the
  corpus's existing FEHA coverage**: the declaration clause explicitly
  states this document addresses only the distinct constitutional
  rule applying to public employers, not the corpus's existing
  FEHA-based private-employer documents (Fair Chance Act, Fair Pay
  Act, etc.).
- **A disclosed limited-exception asymmetry**: the bona-fide-sex-
  qualifications clause's gap notes the constitutional exception as
  written applies only to sex, with no parallel exception for race,
  color, ethnicity, or national origin.
- **A disclosed undefined-term limitation on "governmental
  instrumentality"**: the covered-entities clause's gap notes the
  subdivision does not define that term, so the document cannot state
  with precision where coverage ends for an entity not on the named
  list (e.g., a joint powers authority).
- **A disclosed negative CourtListener result, not a rate-limit
  workaround presented as absence of law**: CourtListener returned a
  429 rate-limit error on every attempt; the core-prohibition clause's
  gap explicitly warns a reader not to assume the absence of case
  citations here means no relevant case law exists.
- **Two disclosed mid-sentence line-wrap artifacts**, confirmed
  directly in the raw fetched HTML (a literal newline in the source
  text node, not a rendering artifact) and preserved rather than
  silently normalized, in subdivisions (f) and (c).

## Honest gap(s) disclosed

This document does not define "discriminate," "preferential
treatment," or "the operation of public employment," does not
summarize any case law interpreting those terms or subdivision (h)'s
federal-conflict language (CourtListener quota exhausted), does not
state the calendar effective date as distinct from the November 5,
1996 election date, does not identify which specific antidiscrimination
statutes subdivision (g)'s remedies cross-reference points to, and
does not address Section 31's separate application to public
education or public contracting.

## Method

Fetched Cal. Const. art. I, § 31 from leginfo.legislature.ca.gov,
fetched twice by the research agent with two distinct User-Agent
strings via curl, confirmed byte-identical statutory text. A
CourtListener search returned a 429 rate-limit error on every
attempt — disclosed honestly, with an explicit reader warning not to
infer an absence of case law from that gap. All 8 citation instances
were programmatically confirmed by the research agent as exact,
contiguous substrings via a Python script checking schema, `{{`
leaks, non-empty gaps, and quote-in-source matching against both
independently fetched copies.

Independently re-verified during integration review via a two-
hundred-and-fifteenth fetch (a new distinct curl User-Agent string,
"Groundtruth-215thVerify-Prop209PublicEmployment/1.0") of the section
— fetched cleanly on the first attempt. All 8 citation instances
confirmed clean on direct normalized-whitespace substring match,
including the two disclosed line-wrap artifacts. The core prohibition,
the covered-entities definition, both stated exceptions, the remedies
provision, and the effective-date/self-executing/severability
language were all independently reconfirmed present in the freshly
fetched text.

## Verification

- The cited constitutional section fetched twice independently by the
  research agent with distinct User-Agent strings, plus a two-
  hundred-and-fifteenth independent fetch during integration review;
  all 8 citation instances confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions correctly disclose the scope of each quoted
  provision; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `propnine_` prefix has zero collisions. Ran term-
  specific greps for "Proposition 209," "Prop. 209," "Article I,
  Section 31," "Article I, § 31," and "preferential treatment" —
  zero hits on all, confirming genuine novelty.
- Checked every citation's `case` field for emptiness — all 8
  populated with proper citation identifier strings.
- No new field ids required — all three fields (`publicEntityName`,
  `jobTitle`, `applicantName`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Proposition 209 — Constitutional Bar on Preferences in
  Public Employment — Information Sheet
  (`proposition_209_public_employment_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Hiring category. No new fields.
- Corpus: 4,567 → 4,575 clauses; 569 → 570 documents. Second processed
  item of wave 138.
