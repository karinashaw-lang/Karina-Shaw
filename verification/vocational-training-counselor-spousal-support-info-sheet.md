# Family Law, new document: Vocational Training Counselor Evaluations in Spousal Support Proceedings — Information Sheet

## Why this document

Third processed item of wave 130 (Family Law slot, 1×4 pattern). The
agent ruled out sixteen candidates via specific section-number greps
before landing here — transmutation (Fam. Code §§850-853),
interspousal fiduciary duty (§721), the putative spouse doctrine
(§2251), the §4336 long-duration-marriage jurisdiction (already
covered — deliberately excluded from this new document and only
cross-referenced), the §4320 spousal-support factors, the earnings
assignment order (§5230), date of separation (§70), child custody
child's-wishes (§3042), sibling visitation (§3100), incarcerated-
parent support adjustment (§4007.5), mandatory add-on expenses
(§4062), DVRO firearm relinquishment (§6389), the guideline child
support formula, the mutual-consent adoption registry (§§9203-9204),
and revocation of nonprobate transfers on divorce were all confirmed
already substantively covered. The chosen topic — Family Code Chapter
3's spousal-support provisions (§§4330-4339, excluding §4336) — was
confirmed genuinely open: zero prior corpus hits on §§4330-4339 before
drafting (one apparent hit on "4339" traced to an unrelated
CourtListener opinion URL fragment, confirmed a false positive).

## What this document covers

11 clauses: 2 drafting (declaration, signature) and 9 authority
clauses, citing Fam. Code §4330(a), (b), §4331(a)-(c), (d)-(f), §4332,
§4333, §4334(a)-(b), §4337, §4338:

- **`vocsupport_order_authority_standard_of_living`** — the court's
  general post-judgment order-making authority based on marital
  standard of living.
- **`vocsupport_self_sufficiency_advisement`** — the discretionary
  self-sufficiency advisement, with the long-duration-marriage
  exception cross-referenced (not re-quoted).
- **`vocsupport_vocational_exam_authority_and_procedure`** — the
  court's authority to order a vocational training counselor
  examination, the motion/notice prerequisites, and the noncompliance
  consequence.
- **`vocsupport_counselor_qualifications_and_cost`** — the counselor's
  statutory definition, minimum qualifications, and cost-allocation
  authority.
- **`vocsupport_mandatory_standard_of_living_findings`** — the
  mandatory factual findings requirement.
- **`vocsupport_retroactivity_of_support_order`** — retroactivity of a
  support order to the filing date or later.
- **`vocsupport_contingent_termination_and_refund`** — termination of
  contingent support and the refund obligation for payments accepted
  after the contingency.
- **`vocsupport_termination_on_death_or_remarriage`** — automatic
  termination absent a contrary written agreement.
- **`vocsupport_enforcement_order_of_resort_to_property`** — the
  statutory order of resort to property when enforcing a support
  order.

## Genuine findings

- **A disclosed, deliberate exclusion to avoid duplication**: §4336
  (long-duration marriage) was deliberately excluded from new clauses
  since it already has a verified, quoted clause elsewhere in this
  corpus; the self-sufficiency-advisement clause only cross-references
  it by number.
- **A disclosed, deliberate scope trade-off, not a duplication issue**:
  §4335 (non-extension of a fixed-term order) and §4339 (security for
  payment) were read and confirmed uncovered but intentionally not
  included, to stay within the requested clause-count range — an
  honest, disclosed choice rather than an oversight.
- **A disclosed refusal to assert an unverified case-law term of art**:
  the self-sufficiency-advisement clause's gap explicitly notes the
  statutory text itself never uses the term "Gavron warning" — that is
  judicial usage from case law the agent could not fetch or verify
  given CourtListener's exhausted quota, so the document states only
  what the statute itself says.
- **A disclosed, deliberate choice not to independently fetch several
  cross-referenced provisions**: Evidence Code §720, CCP §§2032.010 et
  seq., and Fam. Code §70 were each named specifically as
  cross-referenced but not independently fetched or verified.

## Honest gap(s) disclosed

This document does not restate the §4320 multi-factor list the general
support-authority statute cross-references, does not specify any
required form or timing for the self-sufficiency advisement, does not
independently verify the CCP noncompliance-consequence provisions or
the Evidence Code §720 expert-qualification standard, does not define
what qualifies as a "contingency" for contingent-support termination,
does not address the effect of a registered domestic partnership on
the death/remarriage termination rule, and does not address §4335's
non-extension rule or §4339's security-for-payment provision.

## Method

Fetched Fam. Code §§4330, 4331, 4332, 4333, 4334, 4337, and 4338 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace/entity normalization (9/9 sections matched). CourtListener's
daily quota was already exhausted (HTTP 429) on the agent's test call;
no case law was used or fabricated. All 9 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-eighty-sixth fetch (a new distinct curl User-Agent
string, "Groundtruth-186thVerify-VocSupport/1.0") of all seven
sections — one transient connection-reset failure on §4337 was
resolved with a backoff retry, the same known transient-relay issue
independently encountered and resolved elsewhere in this project. All
9 citation instances confirmed clean; 4 of the 9 required the standard
whitespace-stripped fallback check (the familiar subdivision-marker-
spacing artifact, present in the longer multi-subdivision quotes for
§§4331, 4334, and 4338), confirmed benign via direct context
inspection of the raw fetched text. The general order-making
authority, the self-sufficiency advisement, the vocational-exam
authority and procedure, the counselor qualifications and cost
allocation, the mandatory findings requirement, retroactivity, the
contingent-termination/refund rule, the death/remarriage termination
rule, and the order-of-resort-to-property rule were all independently
reconfirmed present in the freshly fetched text.

## Verification

- All seven Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-eighty-sixth independent fetch (with backoff retry)
  during integration review; all 9 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean; confirmed each multi-subdivision quote is a
  single contiguous block from the fetched text, not stitched from
  non-adjacent passages.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `vocsupport_` prefix has zero collisions. Ran
  section-number-specific greps for §§4330-4334, 4337, and 4338 across
  the full corpus — zero hits outside the new clauses, confirming no
  disguised overlap.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`party1Name`,
  `party2Name`, `marriageDate`, `separationDate`, `countyOfFiling`,
  `dateSigned`, `cityState`) reused from the existing corpus, matching
  the house style of the closely analogous existing Temporary
  (Pendente Lite) Spousal Support document.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Vocational Training Counselor Evaluations in Spousal
  Support Proceedings — Information Sheet
  (`vocational_training_counselor_spousal_support_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 4,248 → 4,259 clauses; 540 → 541 documents. Third processed
  item of wave 130.
