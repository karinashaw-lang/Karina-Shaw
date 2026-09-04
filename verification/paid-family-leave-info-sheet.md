# During employment, new document: Paid Family Leave (PFL) — Information Sheet

## Why this document

Confirmed by grep that "paid family leave"/"PFL"/"§ 3300" had zero
substantive hits anywhere in the corpus — a single incidental "PFL"
acronym inside an unrelated EDD-notices clause did not count as
coverage. Read the existing CFRA document in full — confirmed this is
a genuine, non-duplicative companion: CFRA is unpaid, job-protected
leave under the Government Code; PFL is a separate wage-replacement
benefit program under the Unemployment Insurance Code, administered
by the EDD, that a worker may draw on whether or not the underlying
absence is CFRA-protected. Fourth and last document of wave 68.

## What this document covers

7 clauses: 2 drafting (purpose, acknowledgment) and 5 authority
clauses, citing Cal. Unemp. Ins. Code §§ 3300(b), (d), (e), (g),
3301(a)(1), (a)(2), (b)(2)(A)-(C), (c), (d), and 301:

- **`pfl_program_overview`** (§ 3300(b), (g), § 301) — what PFL is
  (Family Temporary Disability Insurance), SDI funding, and EDD
  administration.
- **`pfl_qualifying_reasons`** (§ 3301(a)(1)) — the three statutory
  qualifying reasons. **A key finding**: correctly identified that
  Unemployment Insurance Code §§ 3300-3308 (not the originally-guessed
  § 2708) is the actual PFL chapter.
- **`pfl_benefit_duration`** (§ 3301(c)-(d)) — the 8-week cap within
  any 12-month period and the maximum-payable formula.
- **`pfl_wage_replacement_formula`** (§ 3301(b)(2)(A)-(C)) — the
  current tiered wage-replacement formula ($50 flat floor; 90% middle
  tier; 70%/63% top tier), verified against the text operative as of
  this document's preparation date.
- **`pfl_relationship_to_job_protected_leave`** (§ 3300(d)-(e),
  § 3301(a)(2)) — the statute's own legislative findings distinguishing
  wage replacement from job protection, and the non-abridgment clause
  preserving CFRA/pregnancy-disability-leave rights.

## Genuine corrections and findings

- **The central finding**: § 3301 currently exists in leginfo as two
  statutory versions — one operative January 1, 2026 through July 1,
  2028 (Stats. 2025, Ch. 772, Sec. 1), and a second, not-yet-operative
  version taking effect July 1, 2028 that adds a fourth "designated
  person" qualifying-reason category. The agent used only the
  currently-operative text and explicitly flagged the future version
  in `gap` rather than conflating the two — this document reflects
  current law only.
- Confirmed the current tiered wage-replacement formula precisely
  (exact dollar figures and percentages), rather than approximating a
  figure known to be periodically amended.
- Confirmed PFL is a wage-replacement benefit, not a leave-granting
  law, grounded in the statute's own legislative findings distinguishing
  it from FMLA/CFRA job protection — not simply asserted from general
  public understanding.
- Confirmed the "state average quarterly/weekly wage" figures and the
  DIR's Labor Code § 4453 temporary disability indemnity cap
  referenced in the formula are set elsewhere and were not
  independently fetched — disclosed rather than guessed at.

## Honest gap disclosed

The pre-2025 wage-replacement formula (cross-referenced in current
text as "the amount provided in Section 2655") was not independently
verified. The current dollar values for "state average weekly wage,"
"state average quarterly wage," and the DIR's Labor Code § 4453 cap
were not fetched. Whether CFRA or FMLA job protection attaches to any
specific PFL-covered absence is left to this corpus's separate CFRA
document rather than addressed here. The specific claim-filing
procedure with EDD is not covered.

## Method

Fetched Cal. Unemp. Ins. Code §§ 3300, 3301 (using a POST-based
version-selector flow to disambiguate the currently-operative text
from the not-yet-operative 2028 version), and § 301, from
`leginfo.legislature.ca.gov` via curl (WebFetch returned
EGRESS_BLOCKED as expected, disclosed rather than silently worked
around), each section fetched twice with distinct User-Agent strings,
confirmed byte-identical after whitespace normalization. All 9
citation quotes across the 5 authority clauses programmatically
confirmed as exact substrings of the confirmed text.

## Verification

- All three statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the § 3300(b)/(g)
  pair, § 3301(c)/(d) pair, § 3300(d)/(e) pair, and the three
  § 3301(b)(2) tiers each correctly disclosed as one statutory
  section; § 301 and § 3301(a)(2) correctly disclosed as
  independent, separately-numbered sections from their companion
  citations; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none);
  the reused generic drafting titles "About This Information Sheet"
  and "Acknowledgment" match this corpus's established cross-document
  pattern, not substantive duplicates.
- Field names (`companyName`, `employeeName`) independently confirmed
  to match existing corpus field definitions exactly. No new fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: Paid Family Leave (PFL) — Information Sheet
  (`paid_family_leave_info_sheet`), 7 clauses (5 authority + 2
  drafting), in the During employment category. No new fields.
- Corpus: 2,491 → 2,498 clauses; 322 → 323 documents. Fourth and last
  document of wave 68.
- **Wave 68 complete**: 2,477 → 2,498 clauses (21 new); 319 → 323
  documents (4 new), across Confidentiality & IP (Social Media
  Password Protection), Hiring (Workers' Compensation Insurance
  Duty), Ending employment (Deceased Employee Wages), and During
  employment (Paid Family Leave) — the standard "1×4" alternation
  pattern.
