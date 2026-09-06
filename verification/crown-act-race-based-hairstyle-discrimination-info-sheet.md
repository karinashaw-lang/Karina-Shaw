# Hiring, new document: CROWN Act — Race-Based Hairstyle Discrimination Information Sheet

## Why this document

First processed item of wave 106 (Hiring slot, 1×4 pattern targeting
four of the six then-tied-lowest categories, rotating away from
Hiring/During employment/Confidentiality & IP/Ending employment's wave
104 coverage where a genuinely uncovered alternative existed). Extensive
scoping across the Fair Chance Act, salary history/pay scale, ICRAA
background checks, pre-offer medical exams, cannabis/off-duty use,
noncompete notice, wage theft notice, new hire reporting, polygraph,
genetic information, and IWPA all turned up existing coverage. The
agent confirmed zero prior coverage of the CROWN Act's race-based hair
definition, distinct from the existing `religacc_dress_grooming_definitions`
clause, which covers FEHA's separate *religious* dress/grooming
accommodation duty (Gov. Code § 12926(q)) — a different legal theory
than race.

## What this document covers

6 clauses: 2 drafting (intro, signature/acknowledgment) and 4 authority
clauses, citing Gov. Code §§ 12926(w), (x), (d), and 12940(a):

- **`crownact_race_includes_hair_traits`** — FEHA's definition of "race"
  as inclusive of traits associated with race, including hair texture
  and protective hairstyles.
- **`crownact_protective_hairstyles_defined`** — the non-exhaustive
  statutory list of protective hairstyles (braids, locs, twists).
- **`crownact_hiring_prohibition`** — FEHA's refusal-to-hire prohibition
  as applied to race so defined, with its BFOQ and security-regulation
  exceptions.
- **`crownact_covered_employers`** — FEHA's "employer" definition and
  five-or-more-employee threshold, plus the religious-association
  exclusion.

## Genuine findings

- **A correction to a common paraphrase versus the actual statutory
  text**: the agent expected the commonly-repeated CROWN Act phrasing
  "traits historically associated with race." The actual Gov. Code
  § 12926(w) text reads "traits associated with race" — no
  "historically." The clause body and quote were corrected to track
  the actual statutory language rather than the common paraphrase.
- **A disclosed textual gap on what qualifies as "protective"**: the
  agent found the statute's list of example hairstyles is expressly
  non-exhaustive ("includes, but is not limited to") but supplies no
  general test for the term, disclosed rather than resolved by
  inference.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Honest gap(s) disclosed

This document does not resolve what other traits might be "associated
with race" beyond hair texture and protective hairstyles, does not
define what makes a hairstyle "protective" beyond the three named
examples, does not define "bona fide occupational qualification" or
state how any exception applies to a hairstyle-related job
qualification, does not define "refuse to hire," and does not state how
the five-or-more-employee threshold is counted (time period, location,
part-time/out-of-state personnel). It does not evaluate any specific
grooming policy, application, or hiring decision.

## Method

Fetched Gov. Code §§ 12926 and 12940 from leginfo.legislature.ca.gov,
each fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization (one
pass-2 connection reset was retried successfully). CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 6 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-twelfth fetch (a new distinct curl User-Agent string,
"Groundtruth-112thVerify-CrownAct/1.0") of both sections — all 6
citation instances confirmed clean on direct normalized-whitespace
substring match, no extraction artifacts encountered. The
"traits associated with race" (not "historically associated") wording
was independently reconfirmed present in the freshly fetched text.

## Verification

- Both Gov. Code sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-twelfth
  independent fetch during integration review; all 6 citation instances
  confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("Purpose of This Information Sheet,"
  "Signature and Acknowledgment") collide with generic boilerplate
  titles already reused by 44 and 18 other drafting clauses
  respectively — confirmed as intentional generic-title reuse, not a
  content duplicate. Independently reconfirmed this document is
  distinct from the existing FEHA religious dress/grooming
  accommodation clause.
- Checked every citation's `case` field for emptiness — all 6
  populated with proper citation identifier strings.
- No new fields required — all three fields (`companyName`,
  `employeeName`, `jobTitle`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: CROWN Act: Race-Based Hairstyle Discrimination in
  Hiring — Information Sheet
  (`crown_act_race_based_hairstyle_discrimination_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Hiring category. No new
  fields.
- Corpus: 3,525 → 3,531 clauses; 466 → 467 documents. First processed
  item of wave 106.
