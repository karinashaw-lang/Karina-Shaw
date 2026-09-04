# Family Law, new document: Notice to an Alleged Father in an Adoption Proceeding — Information Sheet

## Why this document

Fourth and final document of wave 81. Read the existing Paternity
Action, Stepparent Adoption, Sperm/Egg Donor Parentage, and
Independent Adoption documents in full — confirmed none substantively
addresses a putative-father registry or search-and-notice mechanism
(the only near-miss, `independentadoption_consent_procedure`, bare-
cites Family Code § 7662 as an unexplored exception without describing
its content). Confirmed by grep that "putative father" and "7660"-
"7666" had zero substantive prior hits. Confirmed non-duplicative.

**A major correction to the research brief's premise**: the task
assumed California maintains a centralized "Putative Father Registry"
administered by DOJ or CHHS, of the proactive self-registration kind
found in states like Texas, Ohio, and Illinois. Direct statutory
reading confirmed this is false — California is not a registry state.
Family Code §§ 7660-7671 instead impose the opposite structure: a
court-directed and agency-directed duty to search for and identify an
alleged father in connection with a specific, already-pending
proceeding, then serve him actual notice. The named administering
office is the State Department of Social Services (§ 7663(a)(1)), not
DOJ or CHHS as assumed. The document was built around this correction
rather than forcing a registry framework onto a statute that doesn't
have one.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Fam. Code §§ 7660 (chapter heading), 7662(a)(2)-
(3), (b), 7663(a), (a)(1), (b), (b)(5), (c), 7665, 7666(a), (b)(4),
and 7667(a), (c)(1):

- **`putfatherreg_no_formal_registry`** (§ 7660 heading, § 7663(a),
  (a)(1)) — **the central finding and correction**: California has no
  centralized self-registration registry; the chapter's own official
  heading is "Termination of Parental Rights in Adoption Proceedings,"
  a search-and-notice framework, and the court's duty runs to the
  State Department of Social Services, not DOJ or CHHS.
- **`putfatherreg_mandatory_inquiry`** (§ 7663(b), (b)(5), (c)) — the
  specific topics the inquiry must cover, and the requirement to file
  a written report of findings with the court.
- **`putfatherreg_notice_and_response_deadline`** (§ 7666(a), (b)(4),
  § 7662(a)(2)) — the notice mechanics (Code of Civil Procedure
  service, at least 10 days before the proceeding) and the 30-day
  statutory response clock, with a materially similar condition
  independently confirmed in a separate termination-petition context.
- **`putfatherreg_voluntary_waiver`** (§ 7662(a)(3), (b)) — the
  alleged father's own direct, voluntary written waiver/denial
  mechanism and its effect.
- **`putfatherreg_unidentified_father_and_hearing_timing`** (§ 7665,
  § 7667(a), (c)(1)) — what happens when no alleged father can be
  identified at all (termination of an unknown father's rights), the
  45-day hearing deadline for a termination petition, and the ex
  parte exception where the alleged father's identity or whereabouts
  are unknown.

## Genuine corrections and findings

- **The central finding and premise correction**: confirmed via direct
  statutory reading (and independently spot-checked) that California
  maintains no proactive putative-father self-registration database —
  a materially different structure from the research brief's
  assumption, and from several other states' actual registries. This
  document states the correction explicitly as its own subject rather
  than glossing over it.
- Confirmed the specific administering office named in the statute
  (State Department of Social Services) rather than assuming DOJ or
  CHHS, as the original brief's framing suggested.
- Confirmed the 30-day response window is measured from "service of
  the notice or the birth of the child, whichever is later" — a real,
  non-obvious timing detail.
- Confirmed the notice-service exception for a minor alleged father's
  parent/guardian, and that publication or posting of notice is not
  required — precise statutory mechanics that avoid overstating the
  service requirement.

## Honest gap(s) disclosed

§ 7663(b)(1)-(4) (the other inquiry topics: marital status,
cohabitation, support payments) and § 7666(b)(1)-(3) (other
notice-dispensing grounds) are referenced but not independently
re-quoted. § 7664 (the court's best-interest determination once a
claiming father appears) is not covered — a substantively different
custody/best-interest topic flagged as a candidate for a future
companion document. § 7663(a)(2)-(4) (alternative agencies that may
conduct the inquiry in place of the department) are not detailed. The
general parentage action under § 7630(c) is cross-referenced to the
corpus's existing Paternity Action document rather than restated.

## Method

Fetched Cal. Fam. Code §§ 7660, 7662, 7663, 7665, 7666, and 7667 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 14 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a fifteenth fetch (a distinct curl
User-Agent string, "Groundtruth-FifteenthVerify-PutFather/1.0") of all
six sections (one transient connection reset, resolved on retry) —
all 14 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fifteenth independent fetch
  during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section versus genuinely separate, independently-numbered
  sections (e.g., § 7666 vs. § 7662, § 7665 vs. § 7667); correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- No new fields required — all seven fields (`childName`, `childDOB`,
  `allegedParentName`, `birthParentName`, `countyOfFiling`,
  `dateSigned`, `cityState`) reused from the existing corpus (18, 12,
  1, 1, 35, 155, and 134 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Notice to an Alleged Father in an Adoption Proceeding
  — Information Sheet (`notice_to_alleged_father_adoption_info_sheet`),
  7 clauses (5 authority + 2 drafting), in the Family Law category. No
  new fields.
- Corpus: 2,833 → 2,840 clauses; 372 → 373 documents. Fourth and final
  addition of wave 81.

**Wave 81 complete**: 2,812 → 2,840 clauses (28 new); 369 → 373
documents (4 new: Registered LLP Registration and Liability Shield,
California Limited Partnership Formation, Confidential Intermediary
Search, and Notice to an Alleged Father in an Adoption Proceeding).
Business Formation + Family Law, per the established strict-
alternation pattern (wave 80 was 1×4; wave 82 should return to 1×4
across Hiring, During Employment, Confidentiality & IP, and Ending
Employment).
