# Real Estate, new document: Quiet Title Action — Information Sheet

## Why this document

The recently-added Boundary Line Agreement document covers the
private, out-of-court, common-law agreed-boundary doctrine — a
narrower topic. This document covers the statutory, court-adjudicated
quiet title action, which reaches any adverse claim to title, not
limited to boundary uncertainty. The scope clause explicitly
distinguishes the two.

## What this document covers

8 clauses: 2 drafting (complaint declaration, verification signature)
and 6 authority clauses:

- **`quiettitle_action_and_scope`** (Code Civ. Proc. § 760.020(a)) —
  the statutory action's scope, covering real or personal property.
- **`quiettitle_complaint_required_content`** (Code Civ. Proc.
  § 761.020) — the five required complaint elements and the
  verified-pleading requirement, both in the same section.
- **`quiettitle_commencement_and_lis_pendens`** (Code Civ. Proc.
  § 761.010(a), (b)) — commencing the action and the lis pendens
  recording requirement.
- **`quiettitle_judgment_no_default_and_binding_effect`** (Code Civ.
  Proc. §§ 764.010, 764.030) — the no-default-without-evidence rule
  and the judgment's binding effect, as two independently enacted
  sections.
- **`quiettitle_no_uniform_limitations_period`** (Code Civ. Proc.
  §§ 318, 319, 325(b)) — the honest finding that no single statute of
  limitations governs a quiet title action.
- **`quiettitle_verification_mechanics`** (Code Civ. Proc. § 446(a);
  § 2015.5) — how a pleading is verified, including the
  declaration-under-penalty-of-perjury alternative to a sworn
  affidavit.

## Genuine corrections and findings

- Corrected the scope: § 760.020(a) covers "real or personal
  property," not just real property — broader than the original
  framing, and confirms the action is not boundary-specific.
- Corrected a mis-citation: the verified-pleading requirement is not
  in § 761.010 — it is the opening clause of § 761.020, the same
  section as the five required complaint elements ("The complaint
  shall be verified and shall include all of the following..."). By
  contrast, § 761.010 covers commencement (filing the complaint) and
  the lis pendens requirement (§ 761.010(b)). Merged the content-list
  and verification facts into one clause since they are literally one
  sentence of one section.
- Confirmed the five-element required-content list as accurately
  framed and correctly ordered.
- Corrected an attribution: the "no default judgment without evidence
  of title" rule is in § 764.010 as framed, but the "binding and
  conclusive" language is actually in a separate section, § 764.030 —
  cited as two independent sources in one clause, with a disclosure
  that the binding effect is itself qualified by §§ 764.045 and
  764.060 (not independently verified/quoted).
- Confirmed no uniform quiet title statute of limitations exists:
  Chapter 4 (§§ 760.010-765.060) contains no limitations provision.
  Cited the same general §§ 318/319 (five-year real-property recovery)
  already used in the corpus's Boundary Line Agreement document,
  re-verified independently this session, plus § 325(b) (adverse
  possession's five-year/tax-payment requirement) as illustrative
  underlying-theory examples.
- A genuine additional finding not in the original research brief:
  Code Civ. Proc. § 446(a) and § 2015.5 establish how a quiet title
  complaint is verified — a signed declaration under penalty of
  perjury suffices in place of a sworn affidavit — directly grounding
  the verification/signature drafting clause.
- Confirmed § 761.020(b) itself lets adverse possession serve as a
  title basis within a quiet title action, tying this document to the
  corpus's existing Boundary Line Agreement document's adverse-
  possession-distinction clause.

## Honest gap disclosed

CourtListener was rate-limited (125/day exhausted) on the one query
attempted (*Muktarian v. Barmby*, on quiet title limitations
doctrine). No case law is cited anywhere in this document — disclosed
honestly in the limitations clause's `gap` field rather than
fabricated.

## Method

Fetched Code Civ. Proc. §§ 760.020, 761.010, 761.020, 764.010,
764.030, 318, 319, 325, 446, and 2015.5 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed
byte-identical after tag-stripping. All 11 citation quotes
programmatically confirmed as exact substrings of the normalized
fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — correct as delivered,
  distinguishing same-section citations (761.010(a)/(b); 761.020
  alone) from genuinely separate sections (760.020 alone;
  764.010+764.030; 318+319+325(b); 446+2015.5).
- Checked for duplicate clause IDs and titles against the full corpus
  (none). One working title ("Verification and Signature") was caught
  by the agent's own self-check as colliding with the existing Civil
  Harassment Restraining Order document's
  `harassment_verification_signature` and renamed to "Plaintiff's
  Verification of the Quiet Title Complaint" — independently confirmed
  clean against the full corpus.
- Field names (`propertyAddress`, `legalDescription`, `parcelNumber`
  reused from the Grant Deed/Transfer-on-Death Deed documents;
  `recordingCounty` reused from the Boundary Line Agreement document)
  independently confirmed to match existing corpus convention. New
  fields: `plaintiffName`, `titleBasis`, `adverseClaimantNames`,
  `adverseClaimDescription`. `determinationDate` reuses an existing
  field id with a document-specific label, consistent with corpus
  practice.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Quiet Title Action — Information Sheet
  (`quiet_title_action_info_sheet`), 8 clauses (6 authority + 2
  drafting), in the Real Estate category. New fields: `plaintiffName`,
  `titleBasis`, `adverseClaimantNames`, `adverseClaimDescription`.
- Corpus: 1,347 → 1,355 clauses; 169 → 170 documents. First document
  of wave 30.
