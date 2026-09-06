# Family Law, new document: Deployed Parent Custody and Visitation — Information Sheet

## Why this document

Second and final processed item of wave 111 (Family Law slot). The
agent's first candidate held up on the first check: a broad sweep of
document-level and clause-level greps across move-away, UIFSA, DVRO,
putative spouse, grandparent visitation, stepparent adoption,
premarital agreements, marriage of a minor, and roughly 20 other
Family Law keywords confirmed no prior coverage of Fam. Code § 3047,
the Deployed Parent Custody and Visitation statute. The existing
Military Divorce/USFSPA and SCRA Lease Termination documents were
confirmed to address retirement division and lease termination
respectively, not custody — a genuine gap.

## What this document covers

9 clauses: 2 drafting (intro, signature/acknowledgment) and 7 authority
clauses, citing Fam. Code § 3047(a), (b)(1), (b)(2), (b)(3), (b)(3)(C)-(D),
(c), (d), (e)-(f), and (g), (h):

- **`deployedparent_absence_not_sole_basis_for_modification`** — the
  rule that military absence alone cannot justify modifying an
  existing custody order.
- **`deployedparent_temporary_order_and_reversion_presumption`** — the
  temporary, without-prejudice nature of deployment-related
  modifications and the reversion presumption on return.
- **`deployedparent_family_member_visitation_during_deployment`** —
  the stepparent/grandparent/family-member visitation right the
  deploying party may seek, with its three required findings.
- **`deployedparent_expedited_hearing_and_remote_participation`** —
  the expedited-hearing and electronic-participation options before
  departure.
- **`deployedparent_uccjea_jurisdiction_retention`** — the statute's
  effect on continuing UCCJEA jurisdiction and the inconvenient-forum
  bar.
- **`deployedparent_definitions`** — the statutory definitions of
  "deployment," "mobilization," and "temporary duty."
- **`deployedparent_legislative_intent`** — the statute's own
  statement of legislative intent on case prioritization.

## Genuine findings

- **A significant correction to the agent's own initial structural
  assumption**: the agent initially assumed this was a standalone
  "Act" with its own multi-section chapter, by analogy to other named
  acts in the code. Reading the actual text showed it is in fact a
  single, dense section — Family Code § 3047, sitting inside the
  existing Chapter 2 ("Matters to Be Considered in Granting Custody,"
  §§ 3040-3049) — not a separate chapter. The clause set was built
  around § 3047's eight lettered subdivisions rather than an assumed
  multi-section structure.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on the statute's own text alone.

## Genuine editorial correction (integration review)

The delivered intro clause's closing sentence read as an imperative
instruction directed at the reader ("Read the full text of Family Code
section 3047 and consult the court or a lawyer before acting"),
inconsistent with this corpus's established "inform, never advise"
architecture and its established disclaimer convention (documented
across 35+ other drafting clauses as "is not a substitute for
consulting a licensed attorney" — a passive disclosure, not a command).
Corrected during integration review to match that established pattern:
"This sheet is not a substitute for reading the full text of Family
Code section 3047 or for consulting the court or a licensed attorney
about a specific case." No other clause in this document exhibited
this issue.

## Honest gap(s) disclosed

This document does not define "substantial distance" or how a court
determines a "material" effect on custody/visitation ability, does not
describe how courts apply the three required findings for family-
member visitation in practice, does not define "reasonably available"
technology for remote participation, does not resolve jurisdiction
disputes involving other states' or countries' courts, and does not
address how the statute's definitions carry over (or not) to other
statutes such as the Servicemembers Civil Relief Act.

## Method

Fetched Fam. Code § 3047 from leginfo.legislature.ca.gov, fetched
twice by the research agent with two distinct User-Agent strings,
confirmed identical after isolating and normalizing the statute-text
block (also fetched § 3048 to scope it out as a non-duplicate,
out-of-scope neighbor already covered by the corpus's Child Abduction
Prevention Orders document). CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 10 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-twenty-ninth fetch (a new distinct curl User-Agent
string, "Groundtruth-129thVerify-DeployedParent/1.0") of the section —
all 10 citation instances confirmed clean on direct normalized-
whitespace substring match, no extraction artifacts encountered. The
single-section (not multi-chapter) structure was independently
reconfirmed present in the freshly fetched text. A personal spot-check
confirmed the one "deployment" hit elsewhere in the corpus
(`scralease_notice_declaration`) was unrelated SCRA lease-termination
content, not genuine prior coverage of this custody statute.

## Verification

- The section fetched twice independently by the research agent with
  distinct User-Agent strings, plus a one-hundred-and-twenty-ninth
  independent fetch during integration review; all 10 citation
  instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked the intro clause's advisory language specifically and
  corrected one imperative instruction to match the corpus's
  established passive-disclaimer convention (see above).
- Checked for duplicate clause IDs against the full corpus (none); two
  drafting-clause titles ("About This Information Sheet," "Signature
  and Acknowledgment") collide with generic boilerplate titles already
  reused by dozens of other drafting clauses across the corpus —
  confirmed as intentional generic-title reuse, not a content
  duplicate. Independently reconfirmed this document is distinct from
  the existing Military Divorce/USFSPA and SCRA Lease Termination
  documents.
- Checked every citation's `case` field for emptiness — all 10
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`parent1Name`,
  `parent2Name`, `childName`, `countyOfFiling`, `courtName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Deployed Parent Custody and Visitation — Information
  Sheet (`deployed_parent_custody_visitation_info_sheet`), 9 clauses
  (7 authority + 2 drafting), in the Family Law category. No new
  fields.
- Corpus: 3,675 → 3,684 clauses; 483 → 484 documents. Second and final
  processed item of wave 111.

## Wave 111 summary

Wave 111 followed the established 2×2 pattern, targeting Estate
Planning and Family Law — the two categories not touched in either of
the two immediately preceding waves (wave 109: Hiring, Confidentiality
& IP; wave 110: During employment, Ending employment, Business
Formation, Real Estate). Both agents' first-choice topics held up
without needing a pivot, a notable change from several recent waves'
extensive near-miss cycling — though both still ran the full
duplication-check discipline before committing. Both completed
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine structural correction through close
primary-source reading: a corrected assumption that a settlor-consent
requirement was optional rather than mandatory for a specific trust-
termination route (Trust Modification and Termination by Consent), and
a corrected assumption that a named statute was a multi-section act
rather than a single dense section within an existing chapter
(Deployed Parent Custody and Visitation). This wave also produced the
window's first editorial correction of advisory language during
integration review — an imperative "consult a lawyer" instruction
rewritten to match the corpus's established passive-disclaimer
convention, a reminder that the "inform, never advise" architectural
rule is actively checked, not merely assumed, at every integration
step. Per the established alternation, wave 112 should return to a
1×4 pattern.
