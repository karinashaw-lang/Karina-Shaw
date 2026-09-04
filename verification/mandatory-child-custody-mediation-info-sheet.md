# Family Law, new document: Mandatory Child Custody Mediation — Information Sheet

## Why this document

Third document of wave 89 (second Family Law slot in the 2×2 pattern).
Read the existing "Domestic Violence Custody Presumption" document in full,
including its clause citing Family Code § 3044(h)'s duty to inform parties
of the § 3044 presumption before custody mediation — confirmed this is only
a narrow cross-reference to mediation in the domestic-violence context, not
a freestanding explanation of the mandatory mediation process itself. Found
one existing clause, `parenting_mediation` (in the Parenting Plan document),
that cites § 3170(a) alone as a single sentence — confirmed this covers only
the mediation trigger, not the five other dimensions (purpose, mediator
role, confidentiality, recommending-vs-confidential distinction, and
domestic-violence-specific procedure) this document adds, so proceeded to
draft with a distinct `custodymediation_` prefix rather than treating it as
duplicative. Confirmed a real, substantially non-duplicative gap.

## What this document covers

8 clauses: 2 drafting (scope declaration, acknowledgment) and 6 authority
clauses, citing Fam. Code §§ 3160, 3161, 3164, 3170(a), 3170(b), 3175,
3176(c), 3177, 3180, 3181, 3183(a), 3188(a)(1), 3188(b)-(c):

- **`custodymediation_trigger`** (§ 3170(a), § 3175) — the mandatory
  mediation trigger on a contested custody/visitation pleading, and the
  requirement that mediation be set before or concurrent with the hearing.
- **`custodymediation_purpose`** (§ 3161) — the statute's own three stated
  purposes for mediation.
- **`custodymediation_confidentiality`** (§ 3177, § 3176(c)) — the general
  confidentiality rule for mediation communications and the related notice
  requirement under the confidential mediation program.
- **`custodymediation_mediator_role`** (§ 3160, § 3164, § 3180) — the
  mediator-availability requirement, who may serve and minimum
  qualifications, and the mediator's duty to assess the child and use best
  efforts toward settlement.
- **`custodymediation_recommending_vs_confidential`** (§ 3183(a),
  § 3188(a)(1), (b)-(c)) — the default recommending-mediation model tied to
  local court rules, and the separate, funding-conditioned, narrowly
  applicable confidential mediation program.
- **`custodymediation_domestic_violence_safeguards`** (§ 3181, § 3170(b)) —
  the separate-meeting procedure on request in domestic-violence cases and
  the Judicial-Council-approved protocol/services-guidelines requirement,
  explicitly distinguished from the § 3044(h) notice requirement.

## Genuine corrections and findings

- **A genuine correction to the task's own research brief**: the brief
  assumed the mediation chapter's range was §§ 3170-3186. The agent
  independently confirmed the actual current range is §§ 3160-3188 (three
  articles), and drew citations from provisions outside the assumed range
  (§§ 3160, 3161, 3164, 3177) accordingly.
- **A genuine terminology finding**: the statute itself does not use the
  practitioner shorthand "recommending county" / "non-recommending county."
  The underlying mechanism is real — § 3183(a) permits "child custody
  recommending counseling" under local court rules, while § 3188 creates a
  separate, opt-in, funding-conditioned "confidential mediation program"
  applicable only to a Judicial-Council-selected subset of courts with more
  than 1,000 annual family law filings. Disclosed as narrower and more
  conditional than the popular terminology suggests, not overstated as a
  universal statutory dichotomy.
- Correctly distinguished this document's § 3170(b)/§ 3181
  domestic-violence-specific mediation procedure from the existing Domestic
  Violence Custody Presumption document's § 3044(h) notice-of-presumption
  clause — disclosed explicitly as two different statutory sections
  addressed to two different notices, not a repetition.
- Correctly disclosed that § 3188's funding-appropriation condition and the
  identity of any courts currently operating under it were not
  independently researched, since neither is stated in the text itself.

## Honest gap(s) disclosed

Section 3170(a)'s domestic-violence protocol content, § 3171's parallel
stepparent/grandparent-visitation mediation trigger, § 3172's paternity-
contest rule, § 3173's modification-mediation procedure, § 3162's Judicial
Council uniform standards of practice, § 3182's exclusion-of-counsel
authority, § 3183(b)-(c)'s further-investigation and TRO recommendation
authority, § 3184's child-counsel recommendation authority, and Evidence
Code § 1040's "official information" privilege itself (including any
exceptions) are named but not covered. This document does not determine
that a specific dispute is "contested" within the meaning of § 3170, does
not determine which mediation model applies in any specific county, and
does not modify any existing custody or visitation order.

## Method

Fetched Fam. Code §§ 3160, 3161, 3164, 3170, 3175, 3176, 3177, 3180, 3181,
3183, and 3188 from `leginfo.legislature.ca.gov`, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical after whitespace normalization. All 13 citation quotes
across the 6 authority clauses programmatically confirmed as exact
contiguous substrings (no ellipsis-joined quotes). Independently
re-verified during integration review via a forty-sixth fetch (a distinct
curl User-Agent string, "Groundtruth-46thVerify-CustodyMediation/1.0") of
all 11 sections — all 13 quotes confirmed clean on direct substring match,
no extraction artifacts encountered.

## Verification

- All 11 statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a forty-sixth independent
  fetch during integration review; all 13 quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every clause's
  `title`/`gap` and every citation's `case`/`cite`/`quote`/`url` field —
  clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same statutory
  section versus genuinely independent sections within the chapter; correct
  as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none of either).
- Checked every citation's `case` field for emptiness — all 13 populated
  with proper citation identifier strings.
- No new fields required — all five fields (`childName`, `parent1Name`,
  `parent2Name`, `countyOfFiling`, `dateSigned`) reused from the existing
  corpus.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Mandatory Child Custody Mediation — Information Sheet
  (`mandatory_child_custody_mediation_info_sheet`), 8 clauses (6 authority
  + 2 drafting), in the Family Law category. No new fields.
- Corpus: 3,042 → 3,050 clauses; 401 → 402 documents. Third addition of
  wave 89.
