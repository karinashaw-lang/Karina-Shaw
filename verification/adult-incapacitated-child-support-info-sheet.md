# Family Law, new document: Support for an Adult Child Incapacitated from Earning a Living — Information Sheet

## Why this document

Second processed item of wave 133 (Family Law slot, 2×2 pattern). The
agent ruled out roughly two dozen candidates via specific section-
number greps before landing here — transmutation, putative-spouse
doctrine, earnings assignment, custody preference, DVRO firearm
relinquishment, health-insurance notice on bifurcation, Voluntary
Declaration of Parentage, guideline income rules, long-marriage
jurisdiction, emergency protective orders, modification retroactivity,
and attorney's fees were all confirmed already substantively covered.
The chosen topic — Family Code § 3910, a distinct statutory duty
requiring each parent to support a child "of whatever age" who is
incapacitated from earning a living and without sufficient means,
including the court's option to direct payment to a special needs
trust — was confirmed genuinely open: § 3910 appeared only twice in
the prior corpus, both as incidental cross-references embedded inside
quotes of a different section (§ 3600, temporary support pendente
lite) without ever substantively explaining the provision itself.

## What this document covers

10 clauses: 6 drafting (declaration, two explanatory notes, an
information-to-gather checklist, and signature) and 4 authority
clauses, citing Fam. Code § 3910(a)-(c) and the Article 2 heading and
amendment-history note:

- **`incapchildsupport_core_duty`** — the equal, ability-based support
  duty toward a child of any age who is incapacitated and without
  sufficient means.
- **`incapchildsupport_distinct_from_minor_support_duty`** — the
  statute's own disclaimer that this duty does not limit the separate
  minor/high-school-student support duty (§§ 3900-3901).
- **`incapchildsupport_special_needs_trust_option`** — the court's
  option to direct a support payment to a special needs trust, and the
  statute's cross-referenced federal/state definition of that term.
- **`incapchildsupport_statutory_placement_and_recency`** — the
  statute's placement as its own single-section article, and its most
  recent amendment (effective January 1, 2025, AB 2397).

## Genuine findings

- **A disclosed, deliberate non-verification of a cross-referenced
  definition**: the special-needs-trust clause's gap discloses that
  the statute's own cross-reference to 42 U.S.C. § 1396p(d)(4)(A), (C)
  and 22 Cal. Code Regs. § 50489.9(a)(3)-(4) was quoted but not
  independently fetched or verified — the document reports only that
  § 3910(b) cites those provisions by this description.
- **A disclosed textual observation left uninterpreted**: a dedicated
  explanatory clause notes that, unlike the separate minor-child
  provision (which by its own terms applies only to an "unmarried"
  child), the quoted text of § 3910 states no such marital-status
  condition — flagged as a textual point, not resolved as a legal
  conclusion.
- **A disclosed scope boundary against an adjacent, better-covered
  topic**: a separate explanatory clause states this document does not
  restate or assert the applicability of California's statewide
  guideline child-support formula (already covered elsewhere in the
  corpus) to a § 3910 determination.
- **A disclosed, unfetched historical gap**: the statutory-placement
  clause's gap discloses that the pre-2025-amendment version of § 3910
  was not fetched or reviewed, so the document does not describe what
  the special-needs-trust option looked like, or whether it existed,
  before the AB 2397 amendment.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "incapacitated from earning a living" or
"sufficient means," does not verify the federal Medicaid-trust
provisions or the California regulation the statute cross-references
for its special-needs-trust definition, does not describe the
pre-2025-amendment version of the statute, does not interpret the
significance of the provision's silence on marital status, does not
address public-benefits eligibility or conservatorship law despite
noting their possible relevance, and does not determine that any named
child is or is not incapacitated from earning a living.

## Method

Fetched Fam. Code § 3910 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings via
raw curl, confirmed textually identical, including two disclosed raw-
HTML rendering artifacts (a non-breaking space between "(a)" and
"Each," and a line-break-and-tab artifact between "3900" and "and
3901") verified against both fetches and rendered as single regular
spaces in the quotes. CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. All 5 citation instances were programmatically confirmed
by the research agent as exact, contiguous substrings after whitespace
normalization.

Independently re-verified during integration review via a
one-hundred-and-ninety-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-195thVerify-IncapChildSupport/1.0"), which
required one retry after a transient connection reset before
succeeding. All 5 citation instances — including the core duty, the
minor-support-duty disclaimer, the special-needs-trust option and its
cross-referenced definition, the Article 2 heading, and the amendment-
history note — confirmed clean on direct normalized-whitespace
substring match against the freshly fetched text, with no fallback
needed.

## Verification

- Fam. Code § 3910 fetched twice independently by the research agent
  with distinct User-Agent strings, plus a one-hundred-and-ninety-fifth
  independent fetch during integration review; all 5 citation instances
  confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `incapchildsupport_` prefix has zero collisions. Ran
  section-number-specific greps for "3910," "1396p," and "50489.9"
  across the full corpus — "3910" returned two hits, both traced
  directly to incidental cross-references inside § 3600 pendente-lite
  clauses; "1396p" returned five hits, all traced to the existing,
  unrelated Estate Planning special-needs-trust drafting document,
  addressing different subject matter (trust drafting/payback
  mechanics rather than a family court's support-order option) and
  already explicitly distinguished in the new clause's own gap; "50489.9"
  returned zero hits.
- Checked every citation's `case` field for emptiness — all 5
  populated with proper citation identifier strings.
- No new field ids required — `trustName` (previously used in
  estate-planning trust documents) was correctly reused with a
  document-specific relabeling rather than inventing a duplicate. Six
  other fields (`parent1Name`, `parent2Name`, `childName`,
  `countyOfFiling`, `dateSigned`, `cityState`) reused from the existing
  corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Support for an Adult Child Incapacitated from Earning
  a Living — Information Sheet
  (`adult_incapacitated_child_support_info_sheet`), 10 clauses
  (4 authority + 6 drafting), in the Family Law category. No new
  fields.
- Corpus: 4,344 → 4,354 clauses; 549 → 550 documents. Second processed
  item of wave 133.
