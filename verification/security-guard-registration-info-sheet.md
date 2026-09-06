# Hiring, new document: Security Guard / Proprietary Security Officer Registration (BSIS) — Information Sheet

## Why this document

Fourth and final processed item of wave 120 (Hiring slot, 1×4
pattern). The agent's first two candidates were confirmed already
covered: cannabis/off-duty drug-test protection at hiring (existing
`drugtest_cannabis_off_duty_protection` and related clauses) and social
media password protection at hiring (existing
`social_media_password_protection_info_sheet`). The agent's first
duplication check on the BSIS/security-guard topic produced a false
positive (a naive substring match on "bsis" hit inside "subsists" in an
unrelated copyright clause), caught and corrected with a word-boundary
regex check. Personally re-ran the duplication check independently:
the only hit for "security guard" in the corpus is a passing reference
inside an unrelated temp-services final-pay clause
(`tempsvcfinal_general_weekly_rule`, "a narrower provision applies to a
security guard employed by a temporary services employer..."), not
BSIS-registration coverage — confirmed as a genuine false positive, not
a duplicate.

## What this document covers

10 clauses: 2 drafting (intro, acknowledgment) and 8 authority clauses,
citing Bus. & Prof. Code §§ 7574.01(f)-(g), 7574.11(b)(1)(A), (c), (d),
7574.12, 7574.14(a), 7583.6(a)-(b), 7583.9(a), 7583.19:

- **`secguardreg_two_categories_defined`** — the two parallel statutory
  categories: contract security guards (Private Security Services Act)
  and in-house "proprietary" officers (Proprietary Security Services
  Act), and their unarmed-only definitional limit.
- **`secguardreg_proprietary_employer_registration_required`** — the
  employer's own registration requirement under Chapter 11.4.
- **`secguardreg_proprietary_officer_registration_process`** — the
  fingerprint-based DOJ background check and two-year registration
  card for proprietary officers.
- **`secguardreg_provisional_work_pending_card`** — provisional work
  authorization while a proprietary officer's card is pending.
- **`secguardreg_contract_guard_training_condition`** — the
  power-to-arrest/use-of-force training condition and 32-hour skills
  training deadline for contract guards.
- **`secguardreg_contract_guard_background_check`** — the
  fingerprint/DOJ/FBI background check for contract guard registration.
- **`secguardreg_licensee_duty_verify_current`** — a private patrol
  operator's ongoing duty to verify its guards' registration is
  current.
- **`secguardreg_exemptions_limit`** — one of eight statutory exemption
  categories from the Proprietary Security Services Act's registration
  requirement.

## Genuine findings

- **A self-caught and corrected research error**: a naive substring
  duplication check produced a false-positive match ("bsis" inside
  "subsists"), caught and fixed with a word-boundary regex before the
  topic was finalized.
- **A self-caught and corrected citation error**: an initial draft
  mislabeled the Proprietary Security Services Act as "Chapter 11.6"
  instead of the correct "Chapter 11.4," caught and corrected before
  delivery.
- **A disclosed structural gap**: the agent could not locate, and did
  not cite, a single "no person shall act as a security guard without
  registration" provision for the contract-guard (Chapter 11.5) side
  directly comparable to § 7574.12 on the proprietary side; the
  contract-guard registration requirement is established more
  indirectly through the training/background-check sections and the
  licensee's duty to verify current registration, disclosed honestly
  in the relevant gap fields rather than papered over.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not address armed in-house security personnel
(outside the unarmed-only "proprietary private security officer"
definition), does not restate seven of the eight subdivisions of the
Chapter 11.4 exemption list, does not restate subdivisions (c) through
(j) of § 7583.6 (recordkeeping, the annual eight-hour continuing-
training requirement, and peace-officer/armored-guard exemptions) or
subdivisions (b) through (j) of § 7583.9 (fee-withholding, electronic
fingerprinting, and peace-officer exemptions), does not report current
dollar fee amounts (subject to periodic statutory adjustment), does not
confirm whether an equivalent provisional-work provision exists for
contract guards, and does not address the disciplinary or civil
consequences to a licensee for violating its duty to verify current
registration.

## Method

Fetched Bus. & Prof. Code §§ 7574.01, 7574.11, 7574.12, 7574.14,
7583.6, 7583.9, and 7583.19 from leginfo.legislature.ca.gov, each
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical. CourtListener's daily rate limit was
already exhausted on the agent's test call; no case law was used, a
disclosed and legitimate choice. All 11 citation instances
programmatically confirmed by the research agent as exact, contiguous
substrings.

Independently re-verified during integration review via a
one-hundred-and-fifty-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-157thVerify-SecurityGuardReg/1.0") of all seven
sections — all 11 citation instances confirmed clean on
normalized-whitespace substring match; 1 of the 11 required the
standard whitespace-stripped fallback check (the familiar
subdivision-marker-spacing artifact around labels like "(1)" and
"(2)"), confirmed benign. The two-category definitional split, the
employer- and individual-level registration requirements, the training
and background-check conditions, and the licensee's verification duty
were all independently reconfirmed present in the freshly fetched
text.

## Verification

- All seven Business and Professions Code sections fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-fifty-seventh independent fetch
  during integration review; all 11 citation instances confirmed
  clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `secguardreg_` prefix has zero collisions.
  Independently reconfirmed the single "security guard" corpus hit
  outside this document is a false-positive passing reference in an
  unrelated temp-services final-pay clause, not genuine coverage.
- Checked every citation's `case` field for emptiness — all 11
  populated with proper citation identifier strings.
- No new fields required — all four fields (`companyName`, `jobTitle`,
  `applicantName`, `dateSigned`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Security Guard / Proprietary Security Officer
  Registration (BSIS) — Information Sheet
  (`security_guard_registration_info_sheet`), 10 clauses (8 authority +
  2 drafting), in the Hiring category. No new fields.
- Corpus: 3,953 → 3,963 clauses; 511 → 512 documents. Fourth and final
  processed item of wave 120.

## Wave 120 summary

Wave 120 followed the established 1×4 pattern, targeting Hiring,
During employment, Ending employment, and Estate Planning — the four
categories tied lowest after wave 119's rotation. All four agents ran
duplication-check passes before landing on genuinely open topics:
COVID-19 Right of Recall for Hospitality Workers (Lab. Code § 2810.8,
after ruling out two already-covered candidates), Cash Shortage,
Breakage, and Equipment Loss Wage Deductions (after a significant
integration-review catch: most of the delivered "Permissible and
Prohibited Wage Deductions" document substantially duplicated the
existing Wage Repayment / Clawback document's coverage of Lab. Code
§§ 221-224 under a different framing, and was salvaged down to its two
genuinely novel clauses), Petition to Determine Succession to Real
Property (Prob. Code §§ 13150-13157, after ruling out three
already-covered or weaker candidates), and Security Guard / Proprietary
Security Officer Registration (BSIS) (after ruling out two
already-covered candidates and a self-caught false-positive duplication
check). Each surfaced a genuine correction through close primary-source
reading: the statute's own January 1, 2027 sunset date (Right of
Recall); the significant document-level duplication catch, the most
substantial integration-time finding of this wave (Wage Deductions);
the chapter's substantial 2025 rewrite restricting the procedure to a
primary residence and introducing a four-tier dollar schedule
(Determine Succession to Real Property); and two self-caught research
errors, a false-positive duplication match and a mislabeled chapter
number (Security Guard Registration). Per the established alternation,
wave 121 should return to a 2×2 pattern.
