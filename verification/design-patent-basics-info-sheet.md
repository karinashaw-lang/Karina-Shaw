# Confidentiality & IP, new document: Design Patent Basics — Information Sheet

## Why this document

First processed item of wave 118 (Confidentiality & IP slot, 1×4
pattern). The agent's duplication check ruled out several candidates
with substantive existing coverage (CDAFA/Penal Code §502 — same
statute, already covered; federal CFAA, trademark dilution,
incontestability, Civ. Code §3344, and UTSA §3426.1 all had non-
incidental clause-level hits). "Design patent" and 35 U.S.C. §173
appeared only once in the corpus, incidentally, inside the existing
Patent Term Adjustment document's scope-boundary clause — solely to
distinguish PTA from design patent term, without describing design
patent's own statutory framework. Zero hits for §171, §172, §289,
"ordinary observer," or "design patent infringement." No pivot was
needed.

## Genuine finding during integration: a clause-id collision

The delivered clause set used the id prefix `dp_` (for "design patent"),
but `dp_signature_block` collided with an existing, wholly unrelated
clause — the Domestic Partnership Declaration document's own
`dp_signature_block` ("dp" there meaning "domestic partnership"). This
was caught by the standard corpus-wide id-collision check before
merging. Rather than patch only the one colliding id, all nine clause
ids were renamed from the `dp_` prefix to `designpat_` to eliminate the
ambiguous two-letter prefix entirely and prevent a similar collision in
a future wave. No content was altered — titles, bodies, gaps, and
citations are unchanged from the delivered set; only the `id` field
values were rewritten.

## What this document covers

9 clauses: 2 drafting (declaration, signature block) and 7 authority
clauses, citing 35 U.S.C. §§ 171(a), 171(b), 171(c), 172, 173, 154(a)(2),
289 (two passages):

- **`designpat_statutory_subject_matter`** — the "new, original and
  ornamental design" subject-matter requirement.
- **`designpat_general_title_35_applies`** — general Title 35 patent
  provisions apply except as otherwise provided.
- **`designpat_filing_date_rule`** — the filing-date rule tied to
  specification and drawings.
- **`designpat_term_fifteen_years_from_grant`** — the 15-year-from-
  grant term, contrasted with a utility patent's 20-year-from-filing
  term.
- **`designpat_priority_six_months`** — the shortened 6-month foreign
  priority period.
- **`designpat_infringement_remedy_total_profit`** — the design-specific
  total-profit infringement remedy with its $250 statutory floor.
- **`designpat_no_double_recovery`** — the cumulative-remedies rule and
  bar on double recovery.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed §171 was a single undivided sentence.
  Reading the full fetched text showed it is divided into three labeled
  subsections — (a) In General, (b) Applicability of This Title, (c)
  Filing Date, added by a 2012 amendment — and the agent restructured
  the clauses around these three subsections.
- **A self-correction to avoid asserting unsourced doctrine**: the
  agent initially planned a clause asserting the ornamental-vs-
  functional case-law distinction as settled doctrine; after confirming
  no successful case-law fetch, it narrowed the clause to state only
  the bare statutory text and disclosed the case-law gap honestly.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call
  (attempted for *Egyptian Goddess*); every authority clause proceeds on
  statute text alone.

## Honest gap(s) disclosed

This document does not define "new," "original," or "ornamental," or
describe the case law working out the ornamental/functional line, does
not catalog which utility-patent provisions apply differently to design
applications, does not describe PTO drawing-standard regulations, does
not address maintenance fees or the pre-2013 14-year transitional term,
does not describe the separate Hague Agreement international-design
priority period (35 U.S.C. §386), and does not describe how "total
profit" is calculated or apportioned where an infringing article
combines patented and unpatented features.

## Method

Fetched 35 U.S.C. §§ 171, 172, 173, 289, and 154 from Cornell LII, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical via diff. CourtListener's daily rate
limit was already exhausted on the agent's test call; no case law was
used, a disclosed and legitimate choice. The agent self-reported 9
citation instances programmatically confirmed as exact, contiguous
substrings; an independent recount during integration review found 8
citations actually present across the 7 authority clauses (a minor
self-report discrepancy, not a data defect, consistent with a pattern
observed elsewhere this session).

Independently re-verified during integration review via a
one-hundred-and-forty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-148thVerify-DesignPatent/1.0") of all five sources
— all 8 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
three-subsection structure of §171, the 15-year term, and the total-
profit remedy were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All five federal sources fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  forty-eighth independent fetch during integration review; all 8
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the two §289 citations
  (first and second paragraph of the same section) and the §173/§154
  contrast pairing are correctly disclosed as delivered.
- **Caught and fixed a genuine clause-id collision** (`dp_signature_block`
  colliding with the unrelated Domestic Partnership Declaration
  document's clause of the same id) — resolved by renaming the entire
  `dp_` prefix to `designpat_` across all nine clauses before merging;
  see dedicated section above.
- Checked every citation's `case` field for emptiness — all 8 populated
  with proper citation identifier strings.
- No new fields required — all seven fields (`patentDescription`,
  `patentHolderName`, `filingDate`, `preparerName`, `companyName`,
  `cityState`, `dateSigned`) reused from sibling patent documents.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Design Patent Basics — Information Sheet
  (`design_patent_basics_info_sheet`), 9 clauses (7 authority + 2
  drafting), in the Confidentiality & IP category. No new fields.
- Corpus: 3,865 → 3,874 clauses; 502 → 503 documents. First processed
  item of wave 118.
