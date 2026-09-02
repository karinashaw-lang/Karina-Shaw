# Ending employment, new document: Non-Disparagement Agreement — Information Sheet

## Why this document

The existing Severance Agreement document covers a full severance
package. This document covers the non-disparagement provision
specifically and in more depth — a provision that carries its own,
non-obvious statutory limits distinct from the severance document's
general treatment.

## What this document covers

10 clauses: 2 drafting (mutual non-disparagement provision,
acknowledgment) and 8 authority clauses:

- **`nondisparagement_ccp_1001_scope`** (Code Civ. Proc. § 1001) —
  California's ban on restricting disclosure of factual information in
  a settlement agreement resolving an already-filed sexual assault,
  sexual harassment, workplace harassment/discrimination, or
  retaliation claim.
- **`nondisparagement_ccp_1001_carveouts`** (Code Civ. Proc. § 1001) —
  the statute's own carve-outs: settlement-amount confidentiality and
  claimant identity-shielding.
- **`nondisparagement_gov_12964_5_prohibition`** (Gov. Code
  § 12964.5) — the broader Silenced No More Act, reaching ordinary
  separation/severance agreements generally, not just litigated
  settlements.
- **`nondisparagement_gov_12964_5_carveouts`** (Gov. Code § 12964.5) —
  its carve-outs and boundaries, including trade-secret protection.
- **`nondisparagement_nlra_section7`** (29 U.S.C. §§ 157, 158(a)(1)) —
  federal Section 7 rights and the NLRB's McLaren Macomb holding that
  merely offering an overbroad non-disparagement clause can itself be
  an unfair labor practice.
- **`nondisparagement_nlra_supervisor_scope`** (29 U.S.C. § 152(3)) —
  the NLRA's supervisor exclusion, which generally puts supervisors
  outside Section 7's protection.
- **`nondisparagement_general_enforceability`** (Civ. Code §§ 1667,
  1668) — the general contract-law backdrop for non-disparagement
  clauses outside the statutory contexts above.
- **`nondisparagement_vs_confidentiality`** (Code Civ. Proc. § 1001) —
  the factual distinction between non-disparagement and confidentiality
  clauses, and the open question of whether a truthful statement can
  still be "disparaging" as a matter of contract law.

## Genuine corrections and findings

- **A significant correction to the original research framing**: Cal.
  Civil Code § 1670.8 is not the relevant statute. Direct review shows
  it is an unrelated consumer-protection law barring gag clauses in
  consumer sale/lease contracts — it has nothing to do with employment
  or settlement agreements. The two real statutes are Code Civ. Proc.
  § 1001 (added by the 2018 STAND Act, amended by 2021 SB 331) and
  Gov. Code § 12964.5 (the Silenced No More Act, also amended by SB
  331) — confirmed as two separate code titles, not subsections of one
  section.
- Confirmed § 1001 bars restricting disclosure of factual information
  in a settlement agreement resolving an already-filed claim of sexual
  assault, sexual harassment, workplace harassment/discrimination
  (via Gov't Code § 12940(a),(h),(i),(j),(k)), retaliation, or housing
  discrimination/retaliation — void as a matter of law for post-
  January 1, 2019 agreements, with carve-outs preserving claimant
  identity-shielding on request and settlement-amount confidentiality.
- Confirmed § 12964.5 is broader in scope than § 1001: it reaches
  ordinary separation/severance agreements generally, not just
  litigated settlements, requires specific statutory notice language
  in any nondisparagement provision, and gives a 5-business-day
  attorney-consultation right — while preserving severance-amount
  confidentiality and trade-secret protection, and yielding to § 1001
  where a claim has already been filed and is being settled.
- Confirmed 29 U.S.C. § 157 (Section 7 concerted-activity rights) and
  § 158(a)(1) (the resulting unfair labor practice) as the basis for
  the NLRB's McLaren Macomb holding, and confirmed § 152(3) as the
  statutory basis for the supervisor exclusion that generally limits
  McLaren Macomb's reach.
- A genuine, current finding: the NLRB General Counsel's explanatory
  memorandum on McLaren Macomb (GC 23-05) was rescinded by an Acting
  General Counsel in February 2025, but the underlying Board decision
  itself remains precedent — a prosecutorial guidance memo's rescission
  does not by itself overrule the Board's decision.

## Honest gap disclosed

The McLaren Macomb decision itself was not independently read or
quote-verified against primary NLRB text. CourtListener's rate limit
(125 requests/day) was already exhausted, and every attempted direct
fetch of nlrb.gov was blocked by this environment's network egress
controls. The case's citation, date, and holding are drawn from
secondary reporting (law-firm client alerts), not from an
independently read primary opinion — disclosed explicitly in the
`nondisparagement_nlra_section7` clause's `gap` field, with no
quotation from the opinion itself included; only the two directly
fetched and verified federal statutory sections are quoted.

## Method

Fetched Code Civ. Proc. § 1001 and Gov. Code § 12964.5 directly from
`leginfo.legislature.ca.gov`, and 29 U.S.C. §§ 157, 158, and 152 from
`law.cornell.edu`, each verified against a second, independent fetch
with a distinct User-Agent — confirmed byte-identical. All 17 citation
quotes programmatically confirmed as exact substrings of the fetched
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 8 authority
  clauses — correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Acknowledgment") confirmed as the corpus's
  established, accepted generic drafting-title-reuse pattern.
- Field names (`companyName`, `employeeName`, `dateSigned`)
  independently confirmed to match existing corpus convention exactly;
  no new fields needed.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Non-Disparagement Agreement — Information Sheet
  (`non_disparagement_agreement_info_sheet`), 10 clauses (8 authority
  + 2 drafting), in the Ending employment category. No new fields.
- Corpus: 1,201 → 1,211 clauses; 152 → 153 documents. This completes
  wave 25 (4 documents: New Hire Reporting, Domestic Partnership
  Dissolution, Community Property Agreement, and this document).
