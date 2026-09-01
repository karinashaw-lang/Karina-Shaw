# Business Formation, second new document: Founders' Agreement

## Why this document

Continuing the "go as deep as humanely possible" build-out. A Founders'
Agreement is used by startup co-founders to document equity split,
vesting, IP assignment, and roles — distinct from the LLC operating
agreements, Corporate Bylaws, and General Partnership Agreement already
in the corpus, and raising real legal questions those documents don't
address (equity tax treatment, pre-incorporation IP, and which
fiduciary-duty statute governs founders depending on entity choice).
Sourced from 26 U.S.C. § 83 (federal), Treas. Reg. § 1.83-2, 17 U.S.C.
§ 201(b), Cal. Corp. Code §§ 309, 16404, 17704.09, Cal. Labor Code
§ 2922, and case law.

## What this document covers

10 clauses: 3 drafting (equity declaration, vesting schedule reference,
and signature block) and 7 authority clauses:

- **`founders_vesting_general_rule`** (26 U.S.C. § 83(a)) — the federal
  default: vesting equity isn't taxed at grant, but later, at vesting.
- **`founders_vesting_substantial_risk_of_forfeiture`** (26 U.S.C.
  § 83(c)(1)) — the statutory definition of what makes equity "subject
  to vesting" in the first place.
- **`founders_83b_election`** (26 U.S.C. § 83(b); Treas. Reg. § 1.83-2(b))
  — the 83(b) election and its strict, non-extendable 30-day filing
  deadline.
- **`founders_ip_workforhire_baseline`** (17 U.S.C. § 201(b); *Reid*;
  *Aymes*) — the work-for-hire baseline for founder-created IP, reusing
  already-verified quotes from this project's existing Invention
  Assignment & Confidentiality Agreement document.
- **`founders_ip_preincorporation_gap`** (*Access Cardiosystems, Inc. v.
  Fincke*, 340 B.R. 127 (Bankr. D. Mass. 2006)) — the real, distinct
  wrinkle that pre-incorporation founder work isn't automatically
  company property, illustrated with an honestly-flagged non-California,
  non-binding federal bankruptcy court decision rather than a false
  claim of California authority.
- **`founders_fiduciary_duties_by_entity`** (Cal. Corp. Code §§ 16404(a),
  309(a), 17704.09(f)) — the genuinely important, commonly-missed point
  that which fiduciary-duty statute applies to founders depends on
  which entity form they've chosen (partnership, corporation, or LLC),
  reusing already-verified partnership/LLC quotes and freshly verifying
  the corporate-director citation.
- **`founders_atwill_status`** (Cal. Labor Code § 2922; *Foley v.
  Interactive Data Corp.*, 47 Cal.3d 654 (1988)) — that a founder who
  also works as an employee is still at-will by default; founder status
  doesn't change that.

## Method

Fetched federal statutes/regulations from `law.cornell.edu` and
California statutes from `leginfo.legislature.ca.gov`, each verified
against a second, independent fetch with a distinct User-Agent. Case
law verified via two independent CourtListener lookup paths. Before
reusing citations from this project's existing `ip_assignment`,
`partnership_fiduciary_duties`, and `llc_mm_fiduciary_duties` clauses,
the main session independently confirmed each reused quote is byte-
identical to what's already in the shipped corpus, rather than trusting
the research report's claim of reuse at face value.

## Defect caught and fixed: recurring `{{}}`-in-gap-field leaks

Six of the seven authority clauses' `gap` fields initially contained
literal `{{companyName}}` placeholder syntax — the same defect class
caught three times earlier in this session (Domestic Partnership
Declaration, Small Estate Affidavit, and now here). Caught by the
standard automated `{{`-leak check before merging. Fixed by rewriting
each instance with generic phrasing ("a specific company's formation"
instead of "{{companyName}}'s formation"). Also added a missing
single-source disclosure sentence to `founders_ip_preincorporation_gap`,
which cites only one case.

## Verification

- All citations fetched twice independently with distinct User-Agents,
  or independently confirmed byte-identical against already-verified
  corpus entries where reused.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field, corpus-wide — clean
  after the fix described above.
- Checked source-independence disclosure logic across all 7 authority
  clauses — corrected on two, confirmed correct on the rest.
- Checked for duplicate clause IDs and titles against the full corpus
  (none, aside from the pre-existing "Signatures" pattern).
- Full-corpus regression run headless against all documents.

## Net changes

- New document: Founders' Agreement (`founders_agreement`), 10 clauses
  (7 authority + 3 drafting), in the Business Formation category.
- Corpus: 429 → 439 clauses; 60 → 61 documents.
