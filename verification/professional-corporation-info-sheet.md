# Business Formation, new document: Professional Corporation — Formation Information Sheet

## Why this document

The existing Articles of Incorporation, Nonprofit Public/Mutual
Benefit Corporation, and LLC Articles of Organization documents cover
ordinary and nonprofit entity formation. This document covers the
distinct statutory regime licensed professionals must use instead:
California's Moscone-Knox Professional Corporation Act.

## What this document covers

8 clauses: 2 drafting (articles declaration, incorporator signature)
and 6 authority clauses:

- **`profcorp_definition_and_framework`** (Corp. Code § 13401(a),
  (b)) — the general regulatory framework and its board-specific
  carve-out list.
- **`profcorp_ownership_restrictions`** (Corp. Code § 13406(a);
  § 13401.5) — share ownership restricted to same-profession licensed
  persons, and the narrow, non-universal minority exception.
- **`profcorp_naming_requirements`** (Corp. Code § 13409(a); § 201(b))
  — naming governed by profession-specific law, subject to the
  General Corporation Law's baseline.
- **`profcorp_liability_not_shielded`** (Bus. & Prof. Code § 6171(b);
  § 5157(b)) — why incorporation does not shield a professional from
  liability for their own malpractice, with an unusually prominent
  honesty caveat about the indirect nature of this evidence.
- **`profcorp_relationship_to_gcl`** (Corp. Code § 13403; § 13404) —
  the General Corporation Law's continuing application except where
  Moscone-Knox conflicts.
- **`profcorp_licensing_board_registration`** (Corp. Code § 13410(a);
  Bus. & Prof. Code § 6160) — the separate licensing board
  registration step, illustrated with the State Bar/law corporation
  example.

## Genuine corrections and findings

- **A significant correction to the original research framing**:
  Moscone-Knox does not itself enumerate covered professions the way
  the framing assumed. Direct review shows § 13401(a) defines
  "professional services" generically by cross-reference to any
  licensed profession under the Business and Professions Code (or the
  Chiropractic or Osteopathic Acts), while § 13401(b) then exempts a
  specific, named list of licensing boards (Medical, Podiatric,
  Osteopathic, Dental, Dental Hygiene, Pharmacy, Veterinary,
  Architects, Court Reporters, Behavioral Sciences, Speech-Language
  Pathology/Audiology, RN, Optometry, Occupational Therapy) from
  needing a Moscone-Knox certificate of registration at all — those
  professions run their own registration under their own
  profession-specific acts. Professions not on that list (confirmed:
  law, accountancy) go through the Moscone-Knox certificate-of-
  registration process itself. It is less "separate acts opt in" and
  more "one generic framework, with a carve-out list for boards that
  register independently."
- Confirmed the ownership restriction (§ 13406(a): shares only to
  same-profession licensed persons, void otherwise) and the minority
  exception (§ 13401.5: 49%), but found the exception is not
  universal — it lists roughly 19 mostly health-care corporation
  types by name and explicitly does not include law or accountancy
  corporations.
- Confirmed naming is governed by profession-specific law/regulation,
  not a fixed Moscone-Knox rule (§ 13409(a)), subject to the General
  Corporation Law's baseline requirement that a name not be misleading
  and be distinguishable (§ 201(b)).
- Confirmed the General Corporation Law's continuing application
  except where Moscone-Knox conflicts (§ 13403), and that professional
  corporations are formed under the GCL with articles that must state
  professional-corporation status (§ 13404).
- Confirmed licensing board registration as a separate step from
  filing articles (§ 13410(a)), illustrated concretely with the State
  Bar/law corporation registration requirement (Bus. & Prof. Code
  § 6160).

## Honest gaps disclosed

- No provision of Moscone-Knox itself states the "no shield for a
  professional's own malpractice" rule directly. No citable operative
  statute for this specific rule could be located in the Corporations
  Code; the clause states the rule as resting on general common-law/
  agency principles and cites the mandatory errors-and-omissions
  insurance requirements for law and accountancy corporations (Bus. &
  Prof. Code §§ 6171(b), 5157(b)) only as indirect statutory evidence
  — flagged explicitly and unusually prominently in that clause's
  `gap` field.
- The ownership, naming, and licensing-board-registration clauses do
  not individually verify every one of the dozens of profession-
  specific acts layered on top of Moscone-Knox — only the illustrative
  examples actually fetched (law and accountancy corporations).
- No case law was researched — CourtListener was not queried, per
  guidance that case law is optional here and to conserve its rate
  limit for other research.

## Method

Fetched Corp. Code §§ 13401, 13401.5, 13403, 13404, 13406, 13409,
13410, and 201, and Bus. & Prof. Code §§ 6160, 6171, and 5157,
directly from `leginfo.legislature.ca.gov`, each verified against a
second, independent fetch with a distinct User-Agent — confirmed
byte-identical apart from dynamic page-state tokens. All 12 citation
quotes programmatically confirmed as exact substrings of the verified
text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic across all 6 authority
  clauses — the framework clause correctly discloses its two § 13401
  citations as one source, not independent; every other clause's
  citations are genuinely independent sections/codes, correctly
  labeled; correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`companyName`, `principalOfficeAddress`, `agentName`,
  `agentAddress`, `incorporatorName`) independently confirmed to match
  the existing Nonprofit Articles of Incorporation and Mutual Benefit
  Corporation documents' fields exactly. New field: `professionType`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Professional Corporation — Formation Information
  Sheet (`professional_corporation_info_sheet`), 8 clauses (6
  authority + 2 drafting), in the Business Formation category. New
  field: `professionType`.
- Corpus: 1,254 → 1,262 clauses; 158 → 159 documents.
