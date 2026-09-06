# Family Law, new document: Family Law Facilitator Act — Information Sheet

## Why this document

Second processed item of wave 114 (Family Law slot). The agent's own
duplication-check process pivoted away from two initial candidates:
"Putative Spouse Doctrine" was found fully covered by the existing
`nullity_putative_spouse_doctrine` clause, and "Presumption of Parentage
§7611" was found substantively covered across existing
paternity/parentage clauses. "Family Law Facilitator/Self-Help Center,"
"Vexatious Litigant," "Settlement Conference/MSC," and "Trial
Setting/Case Management" all returned zero hits at both document and
clause level. Personally reconfirmed via corpus search: the four
existing hits for "family law facilitator"/"10001"/"putative spouse"
(`nullity_putative_spouse_doctrine`, `nullity_property_support_custody_consequences`,
`partition_who_may_bring_and_scope`, `calsavers_penalty_noncompliance`)
are all unrelated to the Family Law Facilitator Act's substance.

## What this document covers

11 clauses: 2 drafting (intro, signature/acknowledgment) and 9 authority
clauses, citing Fam. Code §§ 10001(a)(1), 10001(a)(4)-(b), 10002, 10003,
10004, 10005(a), 10005(a)(6), 10012(a), 10012(b), 10006, 10007, 10008,
10013:

- **`famfacilitator_legislative_purpose`** — the Legislature's stated
  findings and intent behind the Act.
- **`famfacilitator_office_and_staffing`** — the required office and
  attorney-staffing qualification.
- **`famfacilitator_scope_of_matters`** — the categories of support,
  custody, and visitation proceedings the division reaches.
- **`famfacilitator_core_services`** — the non-exhaustive list of core
  services every facilitator's office must provide.
- **`famfacilitator_additional_local_rule_duties`** — the optional
  duties (including mediation and special-master service) a court may
  add by local rule.
- **`famfacilitator_dv_mediation_safeguard`** — the domestic-violence
  separate-meeting safeguard tied to facilitator-conducted mediation.
- **`famfacilitator_no_cost_and_hearing_access`** — the no-cost-to-
  parties and ultimate-hearing-access requirements.
- **`famfacilitator_ivd_agency_interaction`** — how the Act interacts
  with Title IV-D local child support agency cases.
- **`famfacilitator_no_attorney_client_relationship`** — the
  no-representation, no-privilege limits on the facilitator's role.

## Genuine findings

- **A significant correction to the agent's own initial framing**: the
  task's own suggested framing assumed "Family Law Facilitator/Self-Help
  Center" was one combined program. Reading the full text showed the
  statute never uses the term "self-help center" — it refers instead to
  a "family law information center" (§10004) as a related-but-distinct
  concept, with general self-help centers being a separate
  administrative program outside this division. The document was scoped
  strictly to the Family Law Facilitator Act itself, disclosing the
  self-help-center distinction only as an honest boundary rather than
  folding it in as verified.
- **A caught and corrected quote error**: the agent's own programmatic
  verification pass caught a dropped "and spousal" in an initial
  §10001(a)(1) quote before delivery, corrected prior to final output.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not restate the Uniform Parentage Act's or the
Domestic Violence Prevention Act's own substantive rules referenced by
§10003's scope provision, does not survey any specific county's actual
local-rule practice for the optional duties under §10005, does not
address what happens if a facilitator's office lacks staffing for
genuinely separate DV mediation sessions, does not state the standard a
local child support agency uses to grant or deny written authorization
under §10008, and does not independently verify §10015's Judicial
Council notice-form requirement referenced by the no-attorney-client-
relationship clause.

## Method

Fetched Fam. Code §§ 10001-10008, 10012, and 10013 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
normalization (some sections required 1-2 retries due to transient
connection resets, consistent with this session's known proxy
flakiness for this host; retries succeeded cleanly). CourtListener's
daily rate limit was already exhausted on the agent's test call; no
case law was used, a disclosed and legitimate choice. All 13 citation
instances programmatically confirmed by the research agent as exact,
contiguous substrings.

Independently re-verified during integration review via a
one-hundred-and-thirty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-137thVerify-FamLawFacilitator/1.0") of all ten
sections — all 13 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The DV mediation safeguard, the Title IV-D interaction
rule, and the no-attorney-client-relationship provision were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All ten Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-thirty-seventh independent fetch during integration review; all
  13 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section (§§10001, 10005, 10012)
  correctly disclose they are not independent sources of each other,
  while the §10006/§10007 pairing is correctly disclosed as
  independent (separate sections); correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the four existing "family law
  facilitator"/"10001"/"putative spouse" corpus hits are all unrelated
  to this document's substance, and reconfirmed the existing "Trustee's
  Notification to Beneficiaries" analogy does not apply here (that
  document is Estate Planning, unrelated).
- Checked every citation's `case` field for emptiness — all 13
  populated with proper citation identifier strings.
- No new fields required — all six fields (`petitionerName`,
  `respondentName`, `courtCaseNumber`, `countyOfFiling`, `dateSigned`,
  `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Family Law Facilitator Act — Information Sheet
  (`family_law_facilitator_act_info_sheet`), 11 clauses (9 authority +
  2 drafting), in the Family Law category. No new fields.
- Corpus: 3,749 → 3,760 clauses; 491 → 492 documents. Second processed
  item of wave 114.
