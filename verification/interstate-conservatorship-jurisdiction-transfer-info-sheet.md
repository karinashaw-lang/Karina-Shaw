# Estate Planning, new document: Interstate Transfer and Jurisdiction of Adult Conservatorships (California Conservatorship Jurisdiction Act) — Information Sheet

## Why this document

Third processed item of wave 103 (Estate Planning slot). A scoping pass
and clause-level duplication check confirmed zero prior coverage of
California's UAGPPJA enactment anywhere in the corpus, distinct from
the existing in-state Conservatorship of an Adult petition document,
which addresses establishing a brand-new California conservatorship
rather than interstate jurisdiction or transfer of an existing one.

## What this document covers

8 clauses: 2 drafting (intro, acknowledgment/signature) and 6 authority
clauses, citing Probate Code §§ 1980(a)-(b), 1981(a)(1), 1991(a)(2)-(3),
1992, 1993(a)-(b), 2001(a), (d)(1)-(2), 2002(a)(1)-(2), 2011, and
2016(c):

- **`uagppja_enactment_and_scope`** — California's own modified-version
  enactment (the "California Conservatorship Jurisdiction Act") and its
  scope exclusions.
- **`uagppja_key_definitions`** — the "home state" and "significant-
  connection state" threshold definitions.
- **`uagppja_jurisdiction_basis`** — the exclusive statutory priority
  order for which state's courts may appoint a conservator.
- **`uagppja_transfer_from_california`** — the outbound petition process
  for transferring an existing California conservatorship elsewhere.
- **`uagppja_transfer_to_california`** — the mirror-image inbound
  acceptance process.
- **`uagppja_registration_not_full_transfer`** — the narrower
  registration mechanism letting an out-of-state conservator act in
  California without transferring the case, distinguished from full
  transfer.

## Genuine findings

- **A significant correction to the research brief's assumed section
  range**: the brief guessed §§ 1980-2110; the agent found the actual
  chapter is §§ 1980-2033, and that California enacted a *modified*
  version of the uniform act — cited under its own name, the "California
  Conservatorship Jurisdiction Act" — not a verbatim adoption, and
  doesn't use "UAGPPJA" as its own citation name.
- **A corrected structural assumption**: the brief implied a single
  "transfer TO/FROM" split. The agent found the actual structure is more
  nuanced: Article 3 (§§ 2001-2003) governs full bidirectional transfer,
  while Article 4 (§§ 2011-2019) is a wholly separate, narrower
  "registration" mechanism valid only while the conservatee resides
  outside California — built into a dedicated clause distinguishing the
  two tools.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's first
  lightweight test call; every authority clause proceeds on the
  statute's own text alone, disclosed explicitly.

## Honest gap(s) disclosed

This document does not attempt to identify every respect in which
California's "modified" enactment departs from the uniform act as
originally drafted or as enacted in other states. It does not quote the
lower-priority jurisdictional bases in § 1993(c)-(f), the forum-
appropriateness factors in § 1996, or §§ 1994-1999 generally. It does
not quote the parallel-but-not-identical findings for a conservatorship
of the estate under § 2001(e) or § 2002's notice, objection, hearing,
and conformity-review provisions in full. It does not quote the
parallel registration provisions for a conservator of the estate
(§ 2012) or person-and-estate (§ 2013), or §§ 2014-2019 generally. It
does not address § 1981(c)'s developmental-disability exclusion or
§ 2003's tribal-court transfer rule.

## Method

Fetched Probate Code Division 4, Part 3, Chapter 8, Articles 1-4
(§§ 1980-1986, 1991-1999, 2001-2003, 2011-2019) from
`leginfo.legislature.ca.gov`, each article fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
after whitespace normalization. CourtListener's daily rate limit was
already exhausted on the agent's first lightweight test call; no case
law was used, a disclosed and legitimate choice. All 15 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-second fetch (a new distinct curl User-Agent string,
"Groundtruth-102ndVerify-UAGPPJA/1.0") of all nine cited sections — all
15 citation instances confirmed clean on direct substring match, no
extraction artifacts encountered.

## Verification

- All nine cited Probate Code sections fetched twice independently by
  the research agent with distinct User-Agent strings, plus a
  one-hundred-and-second independent fetch during integration review;
  all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — clauses citing multiple
  subdivisions of the same statutory section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either), and independently reconfirmed this document is
  genuinely distinct from the existing in-state conservatorship petition
  document.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- Two new fields required: `conserveeName` and `conservatorName`
  (confirmed genuinely new via a corpus-wide field-id lookup — the
  existing corpus only has `proposedConserveeName`/
  `proposedConservatorName`, appropriate for an unresolved petition
  rather than an already-appointed conservatorship, confirming the
  agent's stated reasoning for inventing distinct field ids); the other
  six fields (`issuingState`, `issuingCourtName`, `issuingCaseNumber`,
  `otherState`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Interstate Transfer and Jurisdiction of Adult
  Conservatorships (California Conservatorship Jurisdiction Act) —
  Information Sheet
  (`interstate_conservatorship_jurisdiction_transfer_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Estate Planning category.
  Two new fields: `conserveeName`, `conservatorName`.
- Corpus: 3,441 → 3,449 clauses; 456 → 457 documents. Third processed
  item of wave 103.
