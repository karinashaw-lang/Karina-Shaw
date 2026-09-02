# Ending employment, new document: Layoff / Reduction-in-Force Selection Criteria — Information Sheet

## Why this document

The existing WARN Act Layoff Notice document covers the notice
requirement for a mass layoff. "Reduction in force" appeared only
once elsewhere in this corpus, in passing, within that document's
coverage clause. This document covers a different topic entirely: the
legal risk in how employees are selected for a layoff.

## What this document covers

9 clauses: 2 drafting (selection-criteria documentation,
certification) and 7 authority clauses:

- **`rifselect_adea_disparate_impact`** (29 U.S.C. § 623(a)(2)) — the
  ADEA's disparate-impact theory, provable without proof of intent.
- **`rifselect_rfoa_defense`** (29 U.S.C. § 623(f)(1)) — the
  "reasonable factors other than age" defense.
- **`rifselect_rfoa_reasonableness_factors`** (29 C.F.R. § 1625.7(e))
  — the regulatory factors defining "reasonable" under the RFOA
  defense.
- **`rifselect_feha_disparate_impact`** (Cal. Gov't Code § 12941) —
  California's parallel statutory rule for age-based layoffs.
- **`rifselect_adverse_impact_statistical_practice`** — the common
  risk-management practice of statistical adverse-impact analysis.
- **`rifselect_objective_vs_subjective_criteria`** — the distinction
  between subjective and objective selection criteria.
- **`rifselect_owbpa_group_disclosure_crossref`** (29 U.S.C.
  § 626(f)(1)(H)) — the connection to the OWBPA group-termination
  disclosure rule already covered in the existing Severance Agreement
  document's `sev_owbpa` clause, cross-referenced rather than
  re-derived.

## Genuine corrections and findings

- Confirmed 29 U.S.C. § 623(a)(2) as the textual hook for ADEA
  disparate-impact theory and § 623(f)(1) as the RFOA defense.
- Confirmed the RFOA regulatory reasonableness factors (29 C.F.R.
  § 1625.7(e)(1)-(2)): the extent to which the factor is related to
  the employer's stated business purpose, the accuracy and
  comprehensiveness of any tool used, whether the employer limited
  subjective supervisor discretion (especially where criteria are
  "subject to negative age-based stereotypes"), whether the employer
  assessed adverse impact, and the degree of harm.
- **A genuine, significant finding not in the original research
  brief**: California's FEHA disparate-impact-for-age rule isn't
  judge-made — it's a direct legislative statement in Gov't Code
  § 12941, enacted specifically to overturn a Court of Appeal case
  (*Marks v. Loral Corp.*, 1997) that had held disparate-impact theory
  unavailable for age claims under FEHA. The statute's own "rejection
  of the court of appeal opinion" language was quoted directly.
  *Marks* itself could not be independently verified (CourtListener
  rate-limited), disclosed honestly.
- A genuine correction: the commonly-cited "four-fifths rule" for
  adverse-impact analysis comes from a different regulation (29
  C.F.R. § 1607.4(D), the Title VII-oriented Uniform Guidelines on
  Employee Selection Procedures), and its own text defines it by
  "race, sex, or ethnic group" — not age. No ADEA-specific (Part 1625)
  adoption of that numeric test was found, and this was stated
  explicitly rather than implying it applies to age by default.
- Confirmed § 1625.7(e)(2)(iii) (limiting subjective supervisor
  discretion) directly supports both the adverse-impact-analysis
  clause and the subjective-versus-objective-criteria clause.

## Honest gaps disclosed

- *Smith v. City of Jackson*, 544 U.S. 228 (2005) (the Supreme Court
  case recognizing ADEA disparate-impact claims) could not be
  verified — CourtListener returned a 429 (rate limit already
  exhausted). The case is described in the `gap` field without a
  fabricated quote or citation object, rather than inventing opinion
  text.
- No case law (federal or California) specific to layoff disparate-
  impact claims was independently verified, due to the same
  CourtListener exhaustion.

## Method

Fetched 29 U.S.C. §§ 623 and 626, 29 C.F.R. §§ 1625.7 and 1607.4
directly from `law.cornell.edu`, and Cal. Gov't Code § 12941 directly
from `leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed textually
identical. All citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — § 1625.7(e)(1)/(2)
  correctly disclosed as one source, not independent; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Certification") confirmed as the corpus's
  established, accepted generic drafting-title-reuse pattern.
- Independently confirmed the `sev_owbpa` clause referenced by the
  cross-reference clause actually exists in the corpus.
- Field names (`companyName`, `effectiveDate`, `authorizedSignerName`,
  `authorizedSignerTitle`, `signatureDate`) independently confirmed to
  match existing corpus convention. New fields:
  `selectionCriteriaDescription`, `adverseImpactAnalysisStatement`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Layoff / Reduction-in-Force Selection Criteria —
  Information Sheet (`layoff_selection_criteria_info_sheet`), 9
  clauses (7 authority + 2 drafting), in the Ending employment
  category. New fields: `selectionCriteriaDescription`,
  `adverseImpactAnalysisStatement`.
- Corpus: 1,394 → 1,403 clauses; 175 → 176 documents.
