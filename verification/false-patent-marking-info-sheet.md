# Confidentiality & IP, new document: False Patent Marking — Information Sheet

## Why this document

First processed item of wave 109 (Confidentiality & IP slot, 2×2
pattern). The agent's first candidate, patent marking under 35 U.S.C.
§ 287(a), turned out to be a genuine near-duplicate — the corpus
already has a verified clause (`patentinfringe_marking_notice`)
covering that statute's damages-limitation-for-failure-to-mark rule.
That clause's own gap field pointed to a distinct, uncovered statute:
35 U.S.C. § 292 (false marking), textually and functionally different
— it punishes false or deceptive marking claims rather than limiting a
patentee's own recovery for not marking. Confirmed zero prior coverage
of § 292, "qui tam," "competitive injury," and "false marking" via both
document-level and clause-level checks before committing to the topic.

## What this document covers

8 clauses: 2 drafting (intro, signature/certification) and 6 authority
clauses, citing 35 U.S.C. § 292(a) (three prohibited-conduct
categories, penalty and government-only standing), the statute's own
editorial notes on the pre-2011 subsection (b), current § 292(b)
(competitive-injury civil action), § 292(c) (expired-patent exception),
and the statute's title:

- **`falsemark_prohibited_conduct`** — the three separate categories of
  prohibited false marking, each with its own intent requirement.
- **`falsemark_criminal_penalty_government_only`** — the $500-per-
  offense fine and the 2011 amendment reserving suit to the United
  States alone.
- **`falsemark_pre_2011_qui_tam_history`** — the eliminated pre-2011
  qui tam mechanism that let any person sue and split the recovery.
- **`falsemark_competitive_injury_civil_action`** — the current private
  civil action, limited to a competitor with a competitive injury,
  recovering compensatory damages rather than the flat penalty.
- **`falsemark_expired_patent_safe_harbor`** — the exception for
  marking with a patent that covered the product but has since
  expired.
- **`falsemark_distinction_from_section_287`** — a comparative clause
  distinguishing this statute from § 287(a), already covered elsewhere
  in the corpus.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially expected § 292 to be a single straightforward
  prohibition. Reading the actual text showed three distinct "Whoever"
  prongs each with its own intent element, a 2011 America Invents Act
  amendment that reserved the criminal penalty exclusively to the
  United States, and a now-eliminated pre-2011 qui tam mechanism that
  had let any person sue and split the recovery — replaced by a
  narrower competitive-injury civil action for compensatory damages
  only, not the flat per-offense penalty.
- **A disclosed sourcing limitation on the historical text**: the
  pre-2011 subsection (b) text was pulled from Cornell LII's own
  editorial/amendment notes on the current page rather than an
  independently fetched contemporaneous pre-2011 source, disclosed
  explicitly in that clause's gap field.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification found 5 of 6 citation instances clean on
direct normalized-whitespace match; the remaining instance (the
three-category prohibited-conduct quote) matched only after further
normalizing a list-item boundary. Byte-level inspection confirmed the
raw Cornell LII HTML concatenates two adjacent clause paragraphs with
no separator at all ("...consent of the patentee; orWhoever marks..."),
while the delivered quote inserts a normal space at that same boundary
("...consent of the patentee; or Whoever marks..."). This is the same
general class of markup-stripping whitespace artifact documented
repeatedly elsewhere in this corpus, here manifesting at a paragraph/
list-item boundary rather than around an inline defined-term link.
Confirmed genuine and benign — no content correction needed.

## Honest gap(s) disclosed

This document does not resolve whether any specific marking meets the
statute's intent-to-deceive requirement, does not define "competitive
injury" or how a court calculates "damages adequate to compensate,"
does not address DOJ enforcement-discretion practice for the
government-only penalty, does not independently verify the pre-2011
text against a contemporaneous source, does not address how the 2011
amendment's retroactive application to then-pending cases was resolved
in specific disputes, and does not address whether continuing to use
an expired-patent marking could support liability under some other
legal theory (e.g., false advertising) outside this statute.

## Method

Fetched 35 U.S.C. § 292 from Cornell LII, fetched twice by the research
agent with two distinct User-Agent strings, confirmed byte-identical
(33,153 bytes each, empty diff). CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 6 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-twenty-second fetch (a new distinct curl User-Agent
string, "Groundtruth-122ndVerify-FalseMarking/1.0") of the section — 5
of 6 citation instances confirmed clean on direct normalized-whitespace
match; the remaining instance matched after normalizing a confirmed
genuine paragraph-boundary artifact via byte-level inspection. The
2011 amendment history and the pre-2011 qui tam mechanism were both
independently reconfirmed present in the freshly fetched text.

## Verification

- The section fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-twenty-second
  independent fetch during integration review; all 6 citation
  instances confirmed clean, one after accounting for a confirmed
  genuine artifact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each authority clause
  cites the same single statutory section but different, distinct
  subsections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("What This Information Sheet Covers,"
  "Signature and Certification") collide with generic boilerplate
  titles already reused by 1 and 19 other drafting clauses respectively
  — confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the existing Patent Infringement Information Sheet's § 287(a)
  marking-notice clause.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- Two new fields required (`markingDescription`,
  `competitiveInjuryDescription`), confirmed genuinely new via a
  corpus-wide field-id lookup since existing fields (`patentDescription`,
  `injuryDescription`) are scoped to different concepts; the remaining
  five fields (`preparerName`, `companyName`, `adversePartyName`,
  `dateSigned`, `cityState`) confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: False Patent Marking — Information Sheet
  (`false_patent_marking_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Confidentiality & IP category. Two new fields
  (`markingDescription`, `competitiveInjuryDescription`).
- Corpus: 3,623 → 3,631 clauses; 476 → 477 documents. First processed
  item of wave 109.
