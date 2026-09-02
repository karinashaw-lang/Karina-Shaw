# Estate Planning, new document: Life Insurance Beneficiary Designation — Information Sheet

## Why this document

The corpus already covers wills, revocable living trusts, POD
accounts, and TOD deeds as nonprobate/probate transfer mechanisms, but
none of them covers naming a beneficiary on a life insurance policy —
confirmed by grep for "life insurance beneficiary" across the corpus
(zero hits).

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses:

- **`lifeinsbene_nonprobate_transfer`** (Prob. Code § 5000(a)) — life
  insurance is one of the statute's own named examples of a
  California-recognized nonprobate transfer by written instrument.
- **`lifeinsbene_designation_source_revocability`** (Ins. Code
  § 10170(e)) — the beneficiary-designation mechanism and its
  revocability are governed by the policy itself, with the Insurance
  Code supplying the default rule on when a beneficiary's consent is
  required to change it.
- **`lifeinsbene_community_property`** (Fam. Code § 1100(b); Prob.
  Code § 5011) — the community-property issue when premiums were paid
  with community funds and a non-spouse is named, honestly flagged
  rather than resolved.
- **`lifeinsbene_simultaneous_death`** (Prob. Code § 224; § 221(b)) —
  the life-insurance-specific simultaneous-death default rule,
  distinct from the wills/intestate 120-hour rule.
- **`lifeinsbene_slayer_statute`** (Prob. Code § 252; § 250(a)(4)) —
  the slayer statute's disqualification of a beneficiary who
  feloniously and intentionally kills the insured.

## Genuine corrections and findings

- **A correction to the original citation framing**: the general
  nonprobate-transfer-by-written-instrument statute is Prob. Code
  § 5000, not § 5010 (§ 5010 instead concerns written consent to a
  nonprobate transfer of community property). Confirmed by direct
  fetch that § 5000(a) explicitly names "an insurance policy" as one
  of its enumerated covered instruments.
- **A genuine finding that revocability is not purely contractual**:
  Ins. Code § 10170(e) states the default rule in the statute itself
  — revocation terms are whatever the insurer and policyholder agreed
  to in writing, and any such agreement (including revocation terms)
  may be rescinded or amended without the beneficiary's consent unless
  the beneficiary's rights were expressly made irrevocable. So it is a
  hybrid: the Insurance Code supplies the default legal rule, and the
  specific terms live in the contract.
- For the community-property issue, the agent found a fully
  verifiable statutory hook rather than relying on case law: Fam.
  Code § 1100(b) (a spouse may not gift community personal property
  without the other spouse's written consent) plus Prob. Code § 5011
  (rights of parties in a nonprobate transfer of community property on
  death are subject to the instrument's terms, contrary statute, or
  written consent).
- **A genuine finding**: Prob. Code § 224 is a dedicated,
  life-insurance-specific simultaneous-death provision, distinct from
  the wills/intestate 120-hour rule at § 6403, and even has its own
  community-property carve-out. Section 221(b) confirms this default
  chapter yields entirely to a policy's own explicit survivorship
  language.
- **A genuine finding**: Prob. Code § 252 is a dedicated,
  life-insurance-specific slayer provision, separate from the general
  slayer statute at § 250; § 250(a)(4) independently confirms the
  general rule also reaches Division 5 (nonprobate transfers,
  including insurance) — doubly confirming the point rather than
  relying on a single citation.

## Honest gap disclosed

California case law bearing specifically on a non-owner spouse's
interest in a life insurance policy naming a third party could not be
verified this session — CourtListener returned a rate-limit error
(daily quota exhausted) before any case could be retrieved and
confirmed. That gap is disclosed in the community-property clause's
`gap` field rather than filled with an unverified case citation; the
clause is built entirely on the verified Family Code/Probate Code
statutory framework instead.

## Method

Fetched Prob. Code §§ 5000, 5011, 224, 221, 252, 250, and Ins. Code
§ 10170, and Fam. Code § 1100, directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-
identical. All 9 citation quotes programmatically confirmed as exact
substrings of the fetched text.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean. Caught and
  fixed 5 real leaks in `gap` fields during the agent's own self-check
  (mistaken `{{policyOwnerName}}`-style placeholders in prose,
  corrected to generic phrasing) before delivery.
- Checked source-independence disclosure logic — Fam. Code § 1100(b)
  and Prob. Code § 5011 correctly disclosed as independent (different
  codes); Prob. Code § 224 and § 221(b) correctly disclosed as
  independent sections within the same chapter; Prob. Code § 252,
  § 250(a)(4), and § 254 correctly disclosed as independent sections;
  correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  title match ("Signature and Acknowledgment") confirmed as the
  corpus's established, accepted generic drafting-title-reuse pattern.
- Field names (`beneficiaryName`, `additionalBeneficiaryName`)
  independently confirmed to match existing corpus convention
  (POD Account, TOD Deed documents). New fields: `policyOwnerName`,
  `insurerName`, `policyNumber`, `contingentBeneficiaryName`,
  `designationStatus`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Life Insurance Beneficiary Designation — Information
  Sheet (`life_insurance_beneficiary_designation_info_sheet`), 7
  clauses (5 authority + 2 drafting), in the Estate Planning category.
  New fields: `policyOwnerName`, `insurerName`, `policyNumber`,
  `contingentBeneficiaryName`, `designationStatus`.
- Corpus: 1,459 → 1,466 clauses; 183 → 184 documents.
