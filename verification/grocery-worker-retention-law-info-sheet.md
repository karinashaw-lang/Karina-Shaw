# Ending employment, new document: California Grocery Worker Retention Law — Information Sheet

## Why this document

Confirmed by grep that "grocery" had zero hits anywhere in the
corpus. Read the Displaced Janitor Opportunity Act document in full —
confirmed it covers only Lab. Code §§ 1060-1065 (janitorial-services
CONTRACT changes), never grocery establishments or ownership/asset-
sale changes. Confirmed non-duplicative. Fourth of wave 74's four
documents (1×4: Hiring, During employment, Confidentiality & IP,
Ending employment).

## What this document covers

7 clauses: 2 drafting (transition record, certification) and 5
authority clauses, citing Cal. Labor Code §§ 2502(a), (b), (d), (h),
2504(a)-(b), 2506(a)-(d), 2508(a)-(c), 2509, 2510(a), (b), (e), 2512,
and 2517(a):

- **`groceryworker_definitions`** (§ 2502(a), (b), (d), (h)) — the
  statute's own defined terms: a covered "grocery establishment"
  (>15,000 sq ft, primarily household foodstuffs, with a distinct
  distribution-center rule), the ownership-level "change in control"
  trigger (NOT a management change), and "eligible grocery worker"
  (6+ months' tenure, excluding managerial/supervisory/confidential
  staff).
- **`groceryworker_notice_and_posting`** (§§ 2504(a), 2508(a)-(c)) —
  the 15-day employee-information transfer duty and the 5-business-day
  posted public notice requirement.
- **`groceryworker_retention_and_hiring_list`** (§§ 2504(b),
  2506(a)-(b)) — **a key finding**: the 90-day retention period,
  verified as materially different from the Displaced Janitor
  Opportunity Act's 60-day period — plus the preferential hiring list
  and seniority-based retention when downsizing.
- **`groceryworker_discharge_protection_and_antiretaliation`**
  (§§ 2506(c)-(d), 2509) — **the central finding**: no discharge
  without cause during the 90 days, but only a "consider offering"
  duty at the end of the period — verified as lacking the Displaced
  Janitor Opportunity Act's explicit at-will-conversion language
  (Lab. Code § 1061(f)), rather than assumed to work the same way.
  Also the statute's separate anti-retaliation provision.
- **`groceryworker_scope_exemptions_and_enforcement`** (§§ 2510(a),
  (b), (e), 2512, 2517(a)) — the under-300-combined-headcount small-
  employer exemption, the collective-bargaining-agreement supersession
  mechanism, and the enforcement scheme (private right of action with
  a mandatory 33-day pre-suit cure period, plus Labor Commissioner
  authority and a $100/employee civil penalty with liquidated damages
  capped at $1,000/employee).

## Genuine corrections and findings

- **The central finding**: confirmed the statute contains no
  at-will-conversion language comparable to the Displaced Janitor
  Opportunity Act's § 1061(f) — the grocery worker law requires only
  that the successor employer "consider offering" continued employment
  after a satisfactory 90-day evaluation, a materially weaker
  post-period guarantee than assumed by analogy to the janitor law.
- Confirmed the 90-day retention period (distinct from the janitor
  law's 60 days) directly from the statute's text, rather than
  assumed to match the already-shipped janitor-law document.
- Confirmed the "change in control" trigger is an ownership/asset-
  level event (sale, transfer, merger, consolidation), not a
  day-to-day management change — a precise, easy-to-overclaim
  distinction verified from the statute's own definition.
- Confirmed the small-employer exemption threshold counts nationwide
  headcount, not just California headcount, verified from the
  statute's own text rather than assumed.
- Confirmed the exact enforcement remedy structure (33-day pre-suit
  cure period, $100/employee penalty, liquidated damages capped at
  $1,000/employee) — a materially different structure from the
  janitor law's back-pay formula, verified rather than assumed similar.

## Honest gap disclosed

§ 2510(c)-(d) (Labor Commissioner's parallel administrative remedies)
and § 2510(f)-(j) (citation procedure, injunctive relief, interest,
cumulative-remedies language) are not separately quoted. §§ 2516
(food-desert exemption), 2518 (preserved wrongful-termination claims),
and 2520 (no local-ordinance preemption) are noted as existing but not
quoted or detailed. § 2502's definitions of "employment commencement
date," "job classification," "person," and "transfer document" are not
separately quoted.

## Method

Fetched Cal. Labor Code §§ 2500-2522 from `leginfo.legislature.ca.gov`
via curl (through the sandboxed proxy), each existing section fetched
twice with distinct User-Agent strings, confirmed byte-identical after
whitespace normalization (several section numbers in the range are
unused/reserved, confirmed via empty section pages rather than treated
as fetch failures). All 17 citation quotes across the 5 authority
clauses programmatically confirmed as exact substrings of the
confirmed text. Independently re-verified during integration review
via a third fetch (Chrome/Windows User-Agent) of all 8 cited sections,
spot-checking 14 of the 17 quoted passages — confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a third independent fetch of
  all cited sections during integration review; all spot-checked
  quotes confirmed clean.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — same-section
  citations (§ 2502's four subsections, § 2504(a)'s two paragraphs,
  § 2508(a)/(b)-(c), § 2506's four subsections, § 2510(a)/(b)) each
  correctly disclosed as not independent of one another; § 2504 vs.
  § 2506, § 2510 vs. § 2512 vs. § 2517, and all other cross-section
  citations correctly disclosed as independent; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- Three new fields required (`incumbentEmployerName`,
  `establishmentDescription`, `transferDocumentDate`) — checked
  against the full corpus's existing field ids first (including
  superficially similar fields like `closingDate` and the janitor
  law's compound `retainedEmployeeStatement`, both confirmed to be
  distinct concepts) to confirm no equivalent field already existed.
  Five other fields (`companyName`, `affectedEmployeeCount`,
  `authorizedSignerName`, `authorizedSignerTitle`, `signatureDate`)
  reused from the existing corpus, with a document-specific label
  defined for `companyName` ("Successor grocery employer name").
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check)
  run across the full updated corpus — clean.

## Net changes

- New document: California Grocery Worker Retention Law — Information
  Sheet (`grocery_worker_retention_law_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Ending employment category. 3 new
  fields.
- Corpus: 2,635 → 2,642 clauses; 344 → 345 documents. Fourth document
  of wave 74 (three of four shipped; During employment and
  Confidentiality & IP documents remain in progress).
