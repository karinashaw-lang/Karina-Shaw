# Real Estate, new document: Rental Application Screening Fees and Reusable Tenant Screening Reports (Civ. Code §§ 1950.6, 1950.1) — Information Sheet

Wave 160 (Real Estate). Continues the even round-robin of waves 146,
148, 150, 152, 154, 156, and 158.

## Why this document

Before this document, the corpus's 83 Real Estate documents had no
clause on California's rental application screening fee statute. A
grep of both data files for `1950.6`, `screening fee`, `1950.1`,
`reusable`, `1785.20`, `1786.16`, `1681m`, and `Kraus v. Trinity`
returned a single passing mention of `1950.6` in an unrelated clause
and nothing else. The existing FEHA Housing Discrimination sheet
covers Gov. Code § 12955's general prohibitions and the source-of-
income definition; this document quotes only the distinct
screening-specific subdivision (o) added by SB 267 and cross-references
that sheet rather than repeating its material. The Security Deposit
Itemization document covers § 1950.5; this document quotes § 1950.6's
"notwithstanding § 1950.5" authorization and the Supreme Court's
account of how nonrefundable application charges were treated before
§ 1950.6 existed.

## What this document covers

11 clauses: 2 drafting (purpose declaration, acknowledgment) and 9
authority clauses:

- **`screenfee_authorization_and_cap`** (§ 1950.6(a), (b)) — the
  authorization notwithstanding § 1950.5; actual out-of-pocket cost
  plus reasonable value of time; the $30 base cap and the annual CPI
  adjustment since January 1, 1998.
- **`screenfee_vacancy_and_process_conditions`** (§ 1950.6(c)(1),
  (c)(2)(A)(i)-(iii), (c)(2)(B)) — no fee when no unit is or will
  reasonably be available; the two permitted process structures
  (first-qualified-in-order with written criteria, or full refund to
  every non-selected applicant within 7 days of selection / 30 days
  of submission).
- **`screenfee_receipt_refund_and_report_copy`** (§ 1950.6(d), (e),
  (f)) — itemized receipt; return of unused fee; copy of the credit
  report within seven days.
- **`screenfee_definitions_and_character`** (§ 1950.6(i), (j),
  (k)-(l)) — definitions of "application screening fee" and
  "applicant" (including guarantors and cosignors); not an "advance
  fee" or "security"; no preemption of housing-assistance rules.
- **`screenfee_reusable_tenant_screening_report`** (§ 1950.1(c)-(d),
  (e)(6)(A)-(C), (g)-(h)) — reusable report definition and contents;
  no access or screening fee when a landlord that accepts such reports
  receives one; more-protective local policies control; no landlord is
  required to accept them.
- **`screenfee_kraus_pre_statute_history`** (*Kraus v. Trinity
  Management Services, Inc.* (2000) 23 Cal.4th 116, two quotes) — the
  pre-statute nonrefundable "TIER" fee treated under § 1950.5; the
  court's observation that § 1950.6, enacted in 1996, now expressly
  permits a screening fee.
- **`screenfee_credit_report_adverse_action_notice`** (Civ. Code
  § 1785.20(a)(1)-(3); 15 U.S.C. § 1681m(a) chapeau and (1);
  15 U.S.C. § 1681a(k)(1)(B)(iv)) — state and federal adverse-action
  notice duties and the federal "adverse action" definition.
- **`screenfee_investigative_consumer_report_dwelling`** (Civ. Code
  § 1786.16(a)(3), (b)(1)-(2)) — three-day written notice when an
  investigative consumer report is sought for a dwelling; check-box
  copy request; three-business-day delivery.
- **`screenfee_rent_subsidy_credit_history`** (Gov. Code
  § 12955(o)(1), (o)(2), (p)(2)) — income standard based on the
  tenant's portion; alternative evidence in lieu of credit history;
  employment/reference/identity verification preserved; income
  inquiry not itself discrimination.

## Genuine corrections and findings

- Civ. Code § 1950.6 as fetched is the text amended by Stats. 2025,
  Ch. 67, Sec. 29 (AB 1170), effective January 1, 2026. The clauses
  quote that current text and say so; neither the bill nor the prior
  version was fetched, and the process-conditions clause's `gap`
  discloses that this document does not attribute particular language
  in subdivision (c) to AB 1170 versus an earlier amendment.
- The *Kraus* passage on § 1950.6 appears in the CourtListener text as
  `“[Notwithstanding Section 1950.5.”` with an unmatched opening
  bracket. It is reproduced verbatim and the bracket is disclosed in
  the clause `gap` as a transcription artifact.
- The two FCRA quotes are taken from the House Office of the Law
  Revision Counsel text (`uscode.house.gov`). The second source
  (Cornell LII) renders the same words with an em dash where OLRC uses
  a hyphen and with spaces padding hyperlinked defined terms
  (`consumer ,`); the LII copy matches only after those typographic
  variants are normalized. Disclosed in that clause's `gap`.
- Civ. Code § 1785.20.5 was fetched and found to be employment-only;
  it is not cited. Civ. Code § 1785.20(a), which applies to "any
  person" taking adverse action on a consumer credit report, is cited
  instead, with the `gap` noting the "credit grantor" wording in
  paragraph (3).
- A guarantor or cosignor being a separate "applicant" for the
  per-applicant cap is flagged in the definitions clause's `gap` as
  this document's reading of subdivisions (b) and (j), with no case
  located applying it that way.

## Honest gaps disclosed

- No current CPI-adjusted dollar ceiling is stated; the statute does
  not publish one or name a CPI series.
- Civ. Code §§ 1785.3, 1785.16, 1786.2, 1786.12(d), 1786.22, 1786.40,
  1940(c); Bus. & Prof. Code § 10026; Cal. Code Regs., tit. 2,
  § 12264 et seq.; 15 U.S.C. §§ 1681n, 1681o, 1681t; and Gov. Code
  §§ 12980 et seq. are cross-referenced but not fetched; each clause
  that leans on one says so.
- *Kraus* is cited for history only; its holding (UCL fluid-recovery
  disgorgement) is outside the document's subject and the clause says
  the court did not construe § 1950.6.
- No remedy or penalty provision for § 1950.6 violations is stated,
  because the statute contains none; the clauses say so.

## Method

Fetched Civ. Code §§ 1950.6, 1950.1, 1785.20, 1786.16 and Gov. Code
§ 12955 from `leginfo.legislature.ca.gov` twice each with two distinct
User-Agent strings (a browser-style UA and a
`groundtruth-corpus-verifier` UA), via curl through the environment
proxy; each pair confirmed byte-identical after whitespace/nbsp
normalization. WebFetch was also run on each section as a third read
(its output is a model summary, so it was used only as a sanity check,
not as a quote source). Civ. Code § 1785.20.5 was fetched once and
discarded as employment-only.

15 U.S.C. §§ 1681m and 1681a fetched from `uscode.house.gov` (OLRC
current edition, quote source) and `law.cornell.edu` (second copy);
match after typographic normalization as described above.

Case law: the CourtListener public unauthenticated v4 search API
(no MCP quota) located *Kraus* (cluster 1159700) as the only
California appellate opinion containing both "application screening
fee" and "1950.6". The opinion HTML was fetched twice with two distinct
browser header sets (Referer + Chrome/Windows UA; Referer +
Safari/macOS UA), both 200 with identical extracted text. Each of the
two *Kraus* quotes was then confirmed by a phrase-level public search
(`cluster_id:1159700 AND "<exact phrase>"`, count 1 for each). No
CourtListener MCP calls were made. The official reporter was not
independently consulted; Justia, FindLaw, Google Scholar, and case.law
are egress-blocked. Disclosed in the *Kraus* clause `gap`.

## Verification

- All 24 citation quotes programmatically confirmed as exact
  substrings of the fetched primary-source text after benign
  normalization (whitespace, nbsp) against the quote-source copy; 22
  also exact against the second copy, and the 2 FCRA quotes exact
  against the LII copy after dash/spacing normalization.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Drafting clauses carry exactly `{id,title,kind,body}`; authority
  clauses exactly `{id,title,kind,status,checkedDate,body,gap,
  citations}`; citations exactly `{case,cite,url,quote}`; every
  authority clause has a non-empty `gap`.
- Checked for duplicate clause ids against the full corpus (none) and
  duplicate document id (none). The only title collisions are the two
  standard drafting titles shared by every information sheet; all
  nine authority-clause titles are unique.
- Field names (`propertyAddress`, `landlordName`, `applicantName`)
  match existing corpus convention; no new field names introduced.
- Corpus-wide validation (both files parse, ids unique, every
  `clauseOrder` id exists, every `{{placeholder}}` resolves to a
  declared field, every authority clause has a gap) run across the
  full updated corpus — clean.
- Inform-never-advise check: every clause states what the statute or
  court says and what it does not say; no clause tells a reader what
  to do.

## Net changes

- New document: Rental Application Screening Fees and Reusable Tenant
  Screening Reports (Civ. Code §§ 1950.6, 1950.1) — Information Sheet
  (`rental_application_screening_fee_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Real Estate category. Fields:
  `propertyAddress`, `landlordName`, `applicantName`.
- Corpus: 5,413 → 5,424 clauses; 654 → 655 documents; Real Estate
  83 → 84.
