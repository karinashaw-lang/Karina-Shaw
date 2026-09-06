# Confidentiality & IP, new document: Mediation Confidentiality (Evid. Code §§ 1115-1129, 703.5) — Information Sheet and Statutory Disclosure Notice

## Why this document

Second processed item of wave 134 (Confidentiality & IP slot, 1×4
pattern). The agent ruled out the Silenced No More Act, the trade-
secret attorney-fee provision, and the CPRA/Public Records Act trade-
secret exemption as already covered or a weaker fit. The chosen topic
— California's general civil mediation confidentiality statute,
Evidence Code §§ 1115-1129, plus the related witness-competency rule
in § 703.5 — was confirmed genuinely open and distinct from this
corpus's existing Mandatory Child Custody Mediation document (a
different, Family Code-specific scheme) and Trade Secret Evidentiary
Privilege document (a separate privilege, not mediation-specific).
Section-number-specific greps found numerous apparent hits across
sections 1115-1129, all traced on inspection to false-positive
collisions: 15 U.S.C. §§ 1121/1127 (Lanham Act trademark-statute
citations sharing bare numbers with the Evidence Code), coincidental
substring matches inside CourtListener cluster IDs and an Industrial
Welfare Commission wage-order number, and Corp. Code § 31121
(California's securities-law franchise registration statute). Zero
genuine substantive overlap found.

During integration review, a repeated citation-formatting typo was
found and fixed before merging: six citations (in `medconf_1120_
limits_and_carveouts`, `medconf_1122_consent_exceptions`,
`medconf_1125_when_mediation_ends`, and `medconf_1129_attorney_
disclosure_duty`) rendered nested subdivisions as "§ 1120(b(3))"
instead of "§ 1120(b)(3)" — a missing closing parenthesis before the
nested numeral, appearing twice each (in both the `case` and `cite`
fields) for 12 total occurrences. This was a cosmetic citation-format
defect, not a quote-accuracy defect — the underlying `quote` fields
were unaffected and independently verified exact — corrected before
merging.

## What this document covers

16 clauses: 3 drafting (intro/scope, the § 1129(d) statutory
safe-harbor disclosure form, closing signature) and 13 authority
clauses, citing Evid. Code § 1115(a), (c), § 1118(a), (c), § 1119(a),
(c), § 1120(a), (b)(3), (b)(4), § 1121, § 1122(a)(1), (a)(3), § 1123,
(b), (d), § 1124(b), § 1125(a), (a)(5), § 1126, § 1127, § 1128,
§ 1129(a), (c)(2), (e), and § 703.5:

- **`medconf_1119_general_confidentiality_rule`** — the core
  inadmissible/non-discoverable/confidential rule.
- **`medconf_1120_limits_and_carveouts`** — the otherwise-admissible-
  evidence rule and four specific statutory carve-outs.
- **`medconf_1121_mediator_reports_restricted`** — the bar on a
  mediator's report reaching a court or adjudicative body.
- **`medconf_1122_consent_exceptions`** — the three consent-based
  disclosure exceptions.
- **`medconf_1123_written_settlement_exception`** /
  **`medconf_1118_1124_oral_agreement_exception`** — when written and
  oral settlement agreements are not confidential.
- **`medconf_1125_when_mediation_ends`** / **`medconf_1126_
  confidentiality_survives_end`** — the five statutory end-triggers and
  post-mediation continuation of confidentiality.
- **`medconf_1127_feeshifting_for_improper_subpoena`** — mandatory fee
  award against a party who improperly subpoenas a mediator.
- **`medconf_1128_reference_at_trial_consequences`** — consequences of
  improperly referencing a mediation in a later proceeding.
- **`medconf_703_5_mediator_testimonial_incompetence`** — the separate
  witness-competency rule and its four exceptions.
- **`medconf_1129_attorney_disclosure_duty`** — an attorney's duty to
  give clients a printed § 1119 disclosure.

## Genuine findings

- **A disclosed statutory silence on an evidentiary standard**: the
  limits-and-carveouts clause's gap notes § 1120(a)'s "otherwise
  admissible outside of a mediation" test supplies a rule but not a
  method for applying it to contested evidence.
- **A disclosed, unresolved interaction between provisions**: the
  survives-the-end clause's gap notes the statute does not address
  whether a post-mediation § 1122 consent waiver can still lift
  confidentiality for material covered by § 1126's continuation rule.
- **A disclosed scope limitation on a mandatory rule**: the fee-
  shifting clause's gap notes § 1127's mandatory "shall" leaves no
  discretion once the inadmissibility determination is made, but the
  statute sets no fee amount, procedure, or reasonableness standard.
- **A disclosed, deliberate distinction between two carve-outs**: the
  mediator-testimonial-incompetence clause's gap notes § 703.5's
  Family Code mediation carve-out is a testimonial-competence carve-out
  only and does not, by its own text, alter the separate §§ 1115-1129
  confidentiality rules.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "work of improvement"-style boundary
questions specific to mediation (e.g., whether an evaluative
settlement conference qualifies as "mediation"), does not resolve who
bears the burden of proving evidence was independently discoverable
apart from a mediation, does not address a mediator's report shared
only with the parties outside an adjudicative proceeding, does not
define the "materially affected substantial rights" standard for
§ 1128 relief, and does not independently fetch or verify Family Code
§§ 2104/2105 or Code Civ. Proc. § 657, which are only cross-referenced.

## Method

Fetched Evid. Code §§ 1115, 1118-1129, and § 703.5 (14 sections) from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via raw curl, confirmed
byte-identical after whitespace normalization. CourtListener's daily
quota was already exhausted (HTTP 429) on the agent's test call; no
case law was used or fabricated. All 27 citation instances were
programmatically confirmed by the research agent as exact, contiguous
substrings — after the agent caught and fixed two initial quote
candidates (from §§ 1118 and 1124) that had spanned a non-breaking-
space artifact after list markers, before finalizing.

Independently re-verified during integration review via a
one-hundred-and-ninety-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-199thVerify-MediationConfidentiality/1.0") of all
14 sections — all fetched cleanly on the first attempt. All 27
citation instances confirmed clean on direct normalized-whitespace
substring match, with no fallback needed. The definitions, the core
confidentiality rule, the carve-outs, the mediator-report restriction,
the consent exceptions, the written and oral settlement-agreement
exceptions, the end-of-mediation triggers, the post-end continuation
rule, the fee-shifting and trial-reference-consequence provisions, the
mediator testimonial-incompetence rule, and the attorney disclosure
duty were all independently reconfirmed present in the freshly fetched
text.

## Verification

- All 14 cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a one-hundred-and-
  ninety-ninth independent fetch during integration review; all 27
  citation instances confirmed clean.
- Found and fixed a repeated citation-formatting typo (missing
  parenthesis in nested-subdivision citations, e.g. "§ 1120(b(3))"
  instead of "§ 1120(b)(3)") across 6 distinct citations (12 field
  occurrences) before merging — a cosmetic defect, not a quote-accuracy
  defect; all underlying quotes were unaffected and independently
  verified exact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `medconf_` prefix has zero collisions. Ran section-
  number-specific greps for "1115" through "1129" and "703.5" across
  the full corpus — all apparent hits traced to false-positive
  collisions with federal Lanham Act sections (15 U.S.C. §§ 1121,
  1127), coincidental substring matches inside CourtListener cluster
  IDs and a wage-order number, and an unrelated Corp. Code § 31121
  citation; zero genuine overlap.
- Checked every citation's `case` field for emptiness — all 27
  populated with proper citation identifier strings.
- Four new field ids confirmed genuinely necessary and non-
  duplicative: `clientName`, `attorneyName`, `mediatorName`,
  `disputeDescription` — none existed previously in the corpus under
  any name that fit this exact semantic purpose. Five other fields
  (`preparerName`, `courtCaseNumber`, `courtName`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Mediation Confidentiality (Evid. Code §§ 1115-1129,
  703.5) — Information Sheet and Statutory Disclosure Notice
  (`mediation_confidentiality_info_sheet`), 16 clauses (13 authority +
  3 drafting), in the Confidentiality & IP category. Four new fields:
  `clientName`, `attorneyName`, `mediatorName`, `disputeDescription`.
- Corpus: 4,388 → 4,404 clauses; 553 → 554 documents. Second processed
  item of wave 134.
