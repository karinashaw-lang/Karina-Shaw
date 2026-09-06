# Ending employment, new document: HIPAA & ACA Special Enrollment Rights — Information Sheet

## Why this document

Second and final processed item of wave 107 (Ending employment slot).
Extensive scoping across Cal-COBRA (already an 8-clause family), the
§ 203 waiting-time penalty, UI misconduct/voluntary-quit disqualification,
UI appeals, non-solicitation, blacklisting, personnel-file/record-retention
rights, vacation payout, the sick-leave no-payout rule, constructive
discharge, both WARN Acts, severance, and ISO post-termination exercise
windows all turned up existing coverage in this mature 3,569-clause
corpus. The agent found the genuinely open seam was HIPAA/ACA special
enrollment — a right to move onto a *different* plan (a spouse's group
plan, or a marketplace plan), distinct from COBRA/Cal-COBRA's right to
continue the *same* plan — confirmed via zero corpus hits for "special
enrollment," "qualifying life event," "1181(f)," or "155.420."

## What this document covers

11 clauses: 3 drafting (intro/scope, facts statement, acknowledgment/
signature) and 8 authority clauses, citing 29 U.S.C. § 1181(f)(1),
(f)(1)(B), (f)(1)(C), (f)(1)(D), and 45 C.F.R. § 155.420(c)(1), (c)(2),
(d)(1)(i):

- **`specialenroll_hipaa_core_right`** — HIPAA's core right to enroll
  in another group health plan outside its normal open-enrollment
  window.
- **`specialenroll_hipaa_qualifying_loss_events`** — what counts as a
  qualifying loss of coverage under HIPAA.
- **`specialenroll_hipaa_written_statement_precondition`** — a
  conditional precondition most summaries omit.
- **`specialenroll_hipaa_30day_deadline`** — the 30-day request
  deadline.
- **`specialenroll_aca_marketplace_trigger`** — the ACA marketplace's
  loss-of-coverage triggering event.
- **`specialenroll_aca_60day_general_window`** — the marketplace's
  general 60-day rule.
- **`specialenroll_aca_advance_60day_for_loss_of_coverage`** — the
  materially different "advanced availability" rule specific to
  loss-of-coverage events.
- **`specialenroll_two_tracks_distinguished`** — a synthesis clause
  distinguishing the two federal tracks' different deadlines and
  destinations.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the agent initially assumed the ACA marketplace special enrollment
  period for a coverage loss runs only 60 days forward from the loss
  date. Reading 45 C.F.R. § 155.420(c)(2) directly showed the actual
  rule gives "advanced availability" — 60 days *before* the triggering
  event in addition to 60 days after — specifically for loss-of-coverage
  events, materially different from the general 60-days-after default in
  (c)(1). A dedicated clause documents this correction explicitly.
- **A confirmed, easy-to-miss statutory precondition**: the agent found
  HIPAA's special enrollment right is gated by a written-statement
  precondition (29 U.S.C. § 1181(f)(1)(B)) that applies only if the
  plan itself had required such a statement and given notice of it —
  a conditional rule most lay summaries omit, captured in its own
  clause.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute/regulation text alone.

## Genuine extraction-artifact finding (integration review)

Independent re-verification initially found 5 of 9 citation instances
mismatched. Investigation traced all 5 to two related Cornell LII
defined-term-link stripping artifacts: (1) the established
space-before-punctuation pattern (e.g., the delivered quote reads
"A group health plan , and a health insurance issuer" with a space
before the comma, while the raw HTML has no such space once the
`<a>`-wrapped defined term "group health plan" is followed directly by
a comma); and (2) a related but distinct variant — a spurious space
before a possessive "'s" where a defined-term link abuts a trailing
suffix (e.g., "employee 's" in the delivered quote versus "employee's"
in the raw text, where `<a>employee</a>’s` was stripped with an
inserted space at the tag boundary). All 5 instances confirmed clean
after normalizing both patterns — this is a benign, already-documented
class of source-side rendering artifact, not a content defect.

## Honest gap(s) disclosed

This document does not determine that any particular plan is a "group
health plan" covered by ERISA Part 7 (certain church and governmental
plans are wholly or partly exempt), does not verify whether a specific
plan actually imposed and gave notice of the written-statement
precondition, does not independently verify the "minimum essential
coverage" cross-reference (26 C.F.R. § 1.5000A-1(b)), does not address
state-exchange-specific procedural add-ons (e.g., Covered California),
and does not address the exchange's option under § 155.420(c)(6) to
shorten the post-event window. It does not resolve how the two tracks'
overlapping deadlines interact procedurally, and does not calculate any
specific calendar deadline for a given employee's actual coverage loss.

## Method

Fetched 29 U.S.C. § 1181 and 45 C.F.R. § 155.420 from Cornell LII, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical (empty diff). CourtListener's daily
rate limit was already exhausted on the agent's test call; no case law
was used, a disclosed and legitimate choice. All 9 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-seventeenth fetch (a new distinct curl User-Agent
string, "Groundtruth-117thVerify-SpecialEnroll/1.0") of both sections —
initially 4 of 9 instances failed a normalized-whitespace check;
byte-level investigation traced the remaining 5 to the two related
Cornell LII defined-term-stripping artifacts described above, and all 9
confirmed clean once both patterns were normalized. The "advanced
availability" 60-days-before-and-after correction was independently
reconfirmed present in the freshly fetched text. A personal spot-check
searched the corpus for "special enrollment," "qualifying life event,"
"1181(f)," and "155.420" and confirmed zero prior coverage (the
"marketplace" hits found were unrelated trademark-registration
clauses).

## Verification

- Both sections fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-seventeenth
  independent fetch during integration review; all 9 citation instances
  confirmed clean, five after accounting for two confirmed genuine
  artifacts.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — the synthesis clause
  (`specialenroll_two_tracks_distinguished`) reuses citations already
  quoted in full elsewhere in this document and discloses this rather
  than presenting them as new independent sources; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Acknowledgment and Signature") collide with generic
  boilerplate titles already reused by 27 and 5 other drafting clauses
  respectively — confirmed as intentional generic-title reuse, not a
  content duplicate. Independently reconfirmed this document is
  distinct from the corpus's COBRA and Cal-COBRA documents.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- One new field required (`newCoverageSource`), confirmed genuinely new
  via a corpus-wide field-id lookup since existing fields like
  `planName` denote the lost plan, not the new destination coverage;
  the remaining seven fields (`employeeName`, `companyName`,
  `terminationDate`, `qualifyingEventDate`, `planName`, `requestDate`,
  `dateSigned`) confirmed already existing and reused.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: HIPAA & ACA Special Enrollment Rights — Information
  Sheet (`hipaa_aca_special_enrollment_rights_info_sheet`), 11 clauses
  (8 authority + 3 drafting), in the Ending employment category. One
  new field (`newCoverageSource`).
- Corpus: 3,569 → 3,580 clauses; 471 → 472 documents. Second and final
  processed item of wave 107.

## Wave 107 summary

Wave 107 followed the established 2×2 pattern, targeting During
employment and Ending employment — the two categories left lowest-tied
after wave 106. Both agents reported extensive near-miss pivots (roughly
ten candidates apiece) before landing on genuinely uncovered topics,
continuing the trend from wave 106 of an increasingly saturated corpus
requiring progressively more specific research. Both completed documents
were built with CourtListener's daily quota exhausted throughout. Each
surfaced a genuine finding through close primary-source reading: a
disclosed absence of any explicit penalty or enforcement provision
across an entire five-section statutory chapter (Employee Literacy
Education Assistance Act), and a corrected assumption that a federal
regulatory deadline ran only forward from a triggering event when it
actually also reaches backward (HIPAA/ACA Special Enrollment's
"advanced availability" rule). This wave also encountered a new variant
of the established Cornell LII defined-term-stripping artifact — a
spurious space before a possessive "'s" — structurally related to, but
distinct from, the previously documented space-before-punctuation
pattern. Per the established alternation, wave 108 should return to a
1×4 pattern.
