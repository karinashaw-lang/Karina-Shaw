# Family Law, gap fix: Genetic testing procedure added to Paternity Action Information Sheet

## Why this fix

A research agent assigned to draft a standalone document on Family
Code genetic-testing procedure (Chapter 2, §§ 7550-7562) correctly
found substantial pre-existing overlap: the existing
`paternity_action_petition` document's `paternity_genetic_testing`
clause already covers who may be ordered to submit to testing (§
7551(a)) and the 99%/100-to-1 probability standard for identification
(§ 7555(a)) — exactly two of the five sub-topics the original research
brief described as the gap. The agent honestly flagged this rather
than restating already-shipped statutory text a second time, and
identified four genuinely new, unaddressed sub-topics within the same
chapter. A narrower follow-up agent researched and drafted clauses for
those four sub-topics only, for insertion into the existing document.

## What changed

Added four new authority clauses to the existing
`paternity_action_petition` document, inserted into its `clauseOrder`
immediately after the existing `paternity_genetic_testing` clause and
before `paternity_competing_presumptions` — the genuinely new content
the flagged gap called for:

- **`gentestproc_methodology_standard`** (Fam. Code § 7552(a)-(b)) —
  the accredited-laboratory/expert-reliability standard testing must
  meet, and the permissible specimen types (which need not be uniform
  across the persons tested).
- **`gentestproc_rebuttal`** (Fam. Code § 7555(b)-(c)) — **the central
  finding**: a person identified as a genetic parent may rebut that
  identification ONLY through further qualifying genetic testing that
  excludes them or identifies someone else — not through other kinds
  of evidence — plus the mechanism for resolving further testing that
  identifies multiple possible parents.
- **`gentestproc_refusal_consequence`** (Fam. Code § 7554(a),
  (a)(3)) — the consequence of declining a court-ordered test: the
  court may find the person a parent even if they deny a genetic
  relationship — honestly scoped to the statute's own conditional
  framework (applicable only where the birth parent is the only other
  person with a parentage claim).
- **`gentestproc_cost_allocation`** (Fam. Code § 7553(a)-(b)) — how a
  court-appointed expert's compensation is fixed and allocated among
  the parties or county, distinguished from an expert appointed for
  the court's own needs, whose cost the court itself bears.

The document's description was updated to mention this addition. No
new fields — all four clauses reuse the document's existing
`childName` field (three of the four use no placeholder at all,
consistent with the document's other purely-informational authority
clauses).

## Genuine corrections and findings

- **The central finding**: confirmed the rebuttal mechanism is
  EXCLUSIVE to further qualifying genetic testing — a person cannot
  challenge a genetic-parent identification through other kinds of
  evidence — verified precisely from the statute's own "may challenge
  ... only by other genetic testing" language.
- Confirmed the refusal consequence sits within a specific statutory
  conditional framework (§ 7554(a)'s own trigger: the birth parent is
  the only other person with a parentage claim) rather than presenting
  it as a freestanding, unconditional rule.
- Confirmed the accredited-laboratory standard names specific
  accrediting bodies (AABB or an HHS-Secretary-designated body) rather
  than a generic "reliable lab" standard.
- Confirmed the cost-allocation rule's own carve-out: a court-appointed
  expert's cost is generally allocable among parties/county, but an
  expert appointed for the court's own needs is paid by the court —
  two genuinely different rules within the same section, not one.

## Honest gap disclosed

§ 7552(c)-(d)'s separate ethnic/racial-database-objection procedure
is noted as existing but not covered. § 7555(a)'s identification
standard is not restated (already covered by the companion
`paternity_genetic_testing` clause). § 7554(a)'s other four bases for
finding parentage (identification, admission, default, other evidence)
are not restated — only the refusal basis is addressed here.

## Method

Fetched Cal. Fam. Code §§ 7552, 7553, 7554, and 7555 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 8 citation quotes
across the 4 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a third fetch (Chrome/
Windows User-Agent) of all four sections — all 8 quotes confirmed
clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause's two
  same-section citations (§ 7552(a)/(b), § 7553(a)/(b), § 7554(a)
  intro/(a)(3), § 7555(b)/(c)) correctly disclosed as not independent
  of one another; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- No new fields; all four clauses use the document's existing
  `childName` field.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- `paternity_action_petition` document: added 4 new authority clauses
  to its `clauseOrder`, filling the genuinely new portion of a gap the
  original research brief described. No new document; no new fields.
- Corpus: 2,726 → 2,730 clauses; documents unchanged at 358. Third
  addition of wave 77 (a gap-fix, not a new document — the fourth
  document slot for Family Law remains open).
