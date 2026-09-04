# Business Formation, new document: Registered Limited Liability Partnership — Registration Procedure and Liability Shield Information Sheet

## Why this document

First document of wave 81. Read the existing Professional LLC
Prohibition in California document's `profllc_rllp_narrower_
professions` clause in full — confirmed it covers only WHICH
professions may use the RLLP form (eligibility), not the registration
procedure or the substantive extent of the liability shield. Also read
the existing General Partnership Agreement document's `partnership_
personal_liability` clause — confirmed it cites Corp. Code § 16306(a)-
(b) for the default general-partnership liability rule and explicitly
flags subdivisions (c)-(h) (the RLLP-specific regime) as a distinct
topic it does not cover. This document fills exactly that
self-disclosed gap. Confirmed genuinely additive to both existing
clauses, cross-referenced rather than restated.

## What this document covers

6 clauses: 2 drafting (declaration, certification) and 4 authority
clauses, citing Cal. Corp. Code §§ 16953(a)-(c), (e), (g), and
16306(c), (e)-(f):

- **`rllpreg_secstate_filing_requirements`** (§ 16953(a)-(c)) — the
  required content of the Secretary of State registration filing, the
  fee requirement, and the Secretary of State's duty to register any
  partnership that submits a completed registration with the fee.
- **`rllpreg_registration_effective_continuing`** (§ 16953(e), (g)) —
  when registration takes effect and how long it continues (until an
  affirmative withdrawal notice or dissolution, not a periodic
  renewal), and the statute's own characterization of one requirement
  as "optional."
- **`rllpreg_liability_shield_core`** (§ 16306(c)) — the core shield
  against vicarious liability for the partnership's debts and other
  partners' acts, expressly made "subject to subdivisions (d), (e),
  (f), and (h)" — not an absolute rule.
- **`rllpreg_liability_shield_limits`** (§ 16306(e)-(f)) — **the
  central finding**: the shield does not extend to a partner's own
  tortious conduct, and for law-practice RLLPs specifically, the
  shield doesn't apply at all to professional-service claims absent a
  current State Bar certificate of registration.

## Genuine corrections and findings

- **The central finding and a genuine research-brief correction**: the
  task's framing assumed § 16306 preserves liability using a
  "negligence... of a person under direct supervision or control"
  formulation found in some other states' LLP statutes. The agent
  checked the actual fetched text (including a full-text search for
  "supervis") and confirmed no such language exists anywhere in
  current § 16306 — the actual carve-out is broader and simpler:
  liability for "that partner's tortious conduct" generally, without
  a supervision/control qualifier. This negative claim was
  independently re-verified during integration review against a
  twelfth fetch, confirmed true.
- Confirmed § 16953 imposes no periodic re-registration requirement —
  registration continues until an affirmative withdrawal notice is
  filed or the partnership dissolves, correcting an assumption that
  RLLP status might require annual renewal (the only annual obligation
  found is a Franchise Tax Board tax filing, a separate consequence of
  registering, not a re-registration requirement).
- Confirmed the § 16953(g) "optional security requirement" is
  characterized as optional by the statute's own text, rather than a
  universal registration precondition.
- Confirmed the law-practice-specific limit in § 16306(f) is a
  complete carve-out from the shield (not merely an added condition)
  for claims arising from professional legal services absent a current
  State Bar certificate.

## Honest gap(s) disclosed

Corp. Code § 16953(d) (fee-cancellation process) and § 16953(h)
(profession-specific state-board filing requirements) are not
covered. § 16956(c) (the substance of the "optional security
requirement") and § 16954(b) (the notice-of-withdrawal section) are
cross-referenced but not independently fetched or verified. § 16306(d)
(a partner's ability to agree in writing to assume specified
liabilities) and § 16306(h) (a partner's ability to act as guarantor or
surety) are named but not covered. Which professions may use the RLLP
form at all is not addressed — covered by the existing Professional LLC
Prohibition document, cross-referenced rather than restated.

## Method

Fetched Cal. Corp. Code §§ 16953 and 16306 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization (§ 16953: 8,563 chars; § 16306: 4,707 chars).
All 7 citation quotes across the 4 authority clauses programmatically
confirmed as exact contiguous substrings (no ellipsis-joined quotes).
Independently re-verified during integration review via a twelfth fetch
(a distinct curl User-Agent string, "Groundtruth-TwelfthVerify-
RLLP/1.0") of both sections — all 7 quotes confirmed clean, and the
"no supervision/control language" negative claim independently
re-checked and confirmed true against the twelfth fetch.

## Verification

- Both statutory sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a twelfth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). Two
  drafting-clause titles ("Purpose and Scope of This Information
  Sheet," "Signature and Certification") match titles used elsewhere
  in the corpus — confirmed as the established boilerplate-title reuse
  pattern, not a genuine collision.
- No new fields required — all four fields (`preparerName`,
  `partnershipName`, `dateSigned`, `cityState`) reused from the
  existing corpus (25, 1, 152, and 131 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Registered Limited Liability Partnership — Registration
  Procedure and Liability Shield Information Sheet
  (`registered_llp_registration_liability_shield_info_sheet`), 6
  clauses (4 authority + 2 drafting), in the Business Formation
  category. No new fields.
- Corpus: 2,812 → 2,818 clauses; 369 → 370 documents. First addition of
  wave 81.
