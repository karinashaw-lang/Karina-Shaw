# Confidentiality & IP, new document: Computer Fraud and Abuse Act Civil Remedy — Information Sheet

## Why this document

First processed item of wave 124 (Confidentiality & IP slot, 1×4
pattern). The agent ruled out four candidates via specific
section-number greps before landing here: DTSA whistleblower immunity
(18 U.S.C. §1833(b)), UTSA exemplary damages (Civ. Code §§3426.3/
3426.4), Lanham Act dilution (15 U.S.C. §1125(c)), and false patent
marking (35 U.S.C. §292) were all confirmed already covered. The
chosen topic — the CFAA's private civil remedy (18 U.S.C. §1030(g)) —
was confirmed genuinely open via section-number greps against
§§1030(g), 1030(e)(6), 1030(e)(8), 1030(e)(11), and 1030(c)(4)(A)(i);
the only existing CFAA-adjacent clause (`compfraud_distinct_from_cfaa`,
in the corpus's California Penal Code §502 document) explicitly
disclaims addressing "the CFAA's own jurisdictional requirements,
damage thresholds, or remedies." Personally reconfirmed via corpus
search: zero prior substantive mentions of §1030(g) or its
subdivisions anywhere in the corpus.

## What this document covers

11 clauses: 2 drafting (intro/scope, signature/certification) and 9
authority clauses, citing 18 U.S.C. §§ 1030(g), 1030(c)(4)(A)(i)(I),
1030(e)(6), 1030(e)(8), 1030(e)(11):

- **`cfaacivil_private_right_of_action`** — the compensatory-damages-
  and-injunctive-relief cause of action.
- **`cfaacivil_qualifying_factors`** — the requirement that conduct
  involve one of five statutory qualifying factors.
- **`cfaacivil_five_thousand_dollar_loss_factor`** — the $5,000
  aggregate-loss factor most often relied on by businesses.
- **`cfaacivil_economic_damages_limit`** — the economic-damages-only
  limit for loss-only claims.
- **`cfaacivil_two_year_limitations_period`** — the two-year
  limitations period.
- **`cfaacivil_no_negligent_design_claim`** — the carve-out barring
  claims for negligent design or manufacture of computer products.
- **`cfaacivil_damage_defined`** — the statutory definition of
  "damage."
- **`cfaacivil_loss_defined`** — the statutory definition of "loss."
- **`cfaacivil_exceeds_authorized_access_defined`** — the statutory
  definition of "exceeds authorized access."

## Genuine findings

- **A disclosed source-formatting artifact, carefully explained and
  excluded rather than mid-sentence quoted**: the qualifying-factors
  clause splits its citation into two fragments around a bracketed
  editorial footnote marker ("[5]") that the Office of the Law
  Revision Counsel inserted into the official text between "subclauses"
  and "(I)"; the gap field explains this is a non-substantive editorial
  annotation (with an accompanying "So in original" note), confirmed
  present in the same location in both Cornell LII and uscode.house.gov
  renderings, and excluded from both quoted fragments rather than
  quoted through.
- **A disclosed cross-document limitations-period comparison**: the
  two-year clause's gap notes this federal period is shorter than the
  three-year period the corpus's existing California Penal Code §502
  document describes, and that a claim time-barred under one statute
  is not necessarily time-barred under the other.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call
  for Van Buren v. United States (2021); the "exceeds authorized
  access" clause's gap explicitly discloses this rather than
  characterizing that decision's holding without independent
  verification.

## Honest gap(s) disclosed

This document does not determine whether any specific conduct violates
§1030, does not restate the four qualifying factors beyond the $5,000
loss factor in full text, does not address how a private plaintiff may
aggregate losses across multiple incidents (the related-course-of-
conduct aggregation applies only to U.S.-government-brought
proceedings), does not define "economic damages," does not define
"negligent design or manufacture," does not further define "integrity,"
"availability," or "impairment" within the damage definition, and does
not describe any court's construction of "exceeds authorized access"
or the separately undefined term "without authorization."

## Method

Fetched 18 U.S.C. §1030 from Cornell's Legal Information Institute and
cross-verified against uscode.house.gov, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical on the Cornell source and substantively identical
(differing only in curly-vs-straight-quote typography) against the
official U.S. Code source. CourtListener's daily rate limit was already
exhausted on the agent's test call; no case law was used, a disclosed
and legitimate choice. All 10 citation instances programmatically
confirmed by the research agent as exact, contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-sixty-eighth fetch (a new distinct curl User-Agent
string, "Groundtruth-168thVerify-CFAACivilRemedy/1.0") of the Cornell
LII source — all 10 citation instances confirmed clean on direct
normalized-whitespace substring match, zero extraction artifacts
encountered beyond the disclosed footnote-marker exclusion, which was
independently inspected in context and confirmed to be exactly the
"[5]" bracketed annotation described. The private right of action, the
$5,000 loss factor, the economic-damages limit, the two-year period,
the negligent-design carve-out, and all three statutory definitions
were independently reconfirmed present in the freshly fetched text.

## Verification

- The primary source fetched twice independently by the research agent
  with distinct User-Agent strings (plus a cross-source check against
  uscode.house.gov), plus a one-hundred-and-sixty-eighth independent
  fetch during integration review; all 10 citation instances confirmed
  clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. The split
  qualifying-factors citation was specifically inspected and confirmed
  to correctly exclude only the non-substantive footnote marker.
- Checked source-independence disclosure logic — every clause correctly
  attributes each citation to its specific statutory subdivision;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `cfaacivil_` prefix has zero collisions. Independently
  reconfirmed zero prior substantive corpus mentions of §1030(g) or its
  subdivisions, and reconfirmed the agent's four pivot rationales
  against the corpus.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `lossOrDamageDescription` — did not exist previously in the corpus
  under any name. Seven other fields (`preparerName`, `companyName`,
  `adversePartyName`, `computerSystemDescription`,
  `incidentDescription`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Computer Fraud and Abuse Act Civil Remedy —
  Information Sheet (`cfaa_civil_remedy_info_sheet`), 11 clauses (9
  authority + 2 drafting), in the Confidentiality & IP category. One
  new field: `lossOrDamageDescription`.
- Corpus: 4,065 → 4,076 clauses; 522 → 523 documents. First processed
  item of wave 124.
