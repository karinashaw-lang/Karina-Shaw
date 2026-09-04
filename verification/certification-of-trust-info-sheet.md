# Estate Planning, new document: Certification of Trust — Information Sheet and Form

## Why this document

Fourth and final document of wave 86. Read the existing "Digital
Assets" document and its trustee-disclosure clause in full — confirmed
certification of trust appears only as one acceptable document a
trustee may hand a fiduciary-access custodian under the RUFADAA
(Prob. Code §§ 876-879), never independently explained. Grepped the
corpus for "certification of trust," "18100.5," and "certificate of
trust" and confirmed this is the only prior mention, and it is a
passing citation to the statute's existence, not freestanding
treatment of what a certification must contain, the reliance
protection, the excerpt right, or the liability provision. Confirmed a
real, non-duplicative, high-value gap.

## What this document covers

8 clauses: 3 drafting (declaration, fillable certification content,
signature/notarization) and 5 authority clauses, citing Cal. Prob.
Code § 18100.5(a)-(h):

- **`certoftrust_definition_and_purpose`** (§ 18100.5(a)) — what a
  certification of trust is and that it may be presented in lieu of
  the complete trust instrument.
- **`certoftrust_permitted_and_required_contents`** (§ 18100.5(b), (c))
  — the eight facts/items of information the certification may
  confirm or contain, and the two statements it must make plus its
  acknowledged-declaration/signature formalities.
- **`certoftrust_excerpts_optional_and_third_party_right`**
  (§ 18100.5(d), (e)) — the trustee's discretion to include (or not)
  excerpts from the trust documents, the rule that dispositive
  provisions are never required, and a third party's right to require
  excerpts evidencing succession or authority.
- **`certoftrust_third_party_reliance_protection`** (§ 18100.5(f)) —
  the no-liability protection for a person who relies in good faith,
  the no-duty-of-inquiry rule, and the enforceability of a
  reliance-based transaction against trust assets.
- **`certoftrust_liability_for_bad_faith_refusal`** (§ 18100.5(g), (h))
  — the no-inference rule tied to a failure to demand a certification,
  and the liability provision (damages, including attorney's fees) for
  a bad-faith demand for the complete trust documents beyond the
  certification.

The drafting clauses include an actual fillable certification
instrument (trust name, date, settlor, trustee(s), powers,
revocability, signature authority, taxpayer ID, title-vesting manner)
that a trustee can complete and sign — appropriate given the statute
itself defines this as a document meant to be executed and handed to a
third party.

## Genuine corrections and findings

- Confirmed the statute's current subdivision lettering runs (a)
  through (i), with subdivision (i) (2004 amendment, effective January
  1, 2005) being the most recent — no more recent amendment exists.
- Correctly disclosed that subdivision (b)'s eight-item list is phrased
  as what a certification "may" confirm or contain (optional), while
  only subdivision (c)'s two statements are phrased as required — the
  document does not conflate the two.
- Correctly declined to independently verify Probate Code § 18100
  (cross-referenced by § 18100.5(g)) — the document states only what
  § 18100.5(g) itself says about § 18100's protection, not an
  independent claim about § 18100's own content.
- Correctly identified subdivision (i) (recording with the county
  recorder) as fetched and verified but outside the scope of the
  clauses drafted, disclosing this explicitly rather than silently
  omitting it.

## Honest gap(s) disclosed

Probate Code § 18100's own text is not independently fetched or
verified. Subdivision (i)'s recording mechanics and recorder's fee are
not covered by any clause. The statute's own undefined term "bad
faith" (subdivision (h)) is not further defined by this document. This
document does not determine whether a specific certification's
contents are accurate, whether a specific refusal to accept a
certification was made in bad faith, or whether a specific person's
reliance was in fact without actual knowledge of incorrect
representations.

## Method

Fetched Cal. Prob. Code § 18100.5 from `leginfo.legislature.ca.gov`,
fetched twice by the research agent with two distinct User-Agent
strings, confirmed byte-identical after whitespace normalization (one
non-substantive `&nbsp;` rendering difference after numbered
subdivisions was normalized before comparison). All 9 citation quotes
across the 5 authority clauses checked against the fetched text; 8
confirmed as exact contiguous substrings immediately, and one (the
§ 18100.5(b) eight-item-list quote) initially mismatched due to
missing spaces the research agent's own transcription had dropped
after "information:" and after each numbered item's closing period.
Confirmed via independent re-fetch that the source text has proper
spacing throughout ("information: (1)... instrument. (2)..."),
corrected the delivered quote to match exactly, and re-confirmed the
corrected quote as an exact substring. No ellipsis-joined quotes were
used anywhere. Independently re-verified during integration review via
a thirty-fifth fetch (a distinct curl User-Agent string,
"Groundtruth-35thVerify-CertOfTrust/1.0") — all 9 quotes (including
the corrected one) confirmed clean.

## Verification

- Statutory section fetched twice independently by the research agent
  with distinct User-Agent strings, plus a thirty-fifth independent
  fetch during integration review; all 9 quotes confirmed clean after
  correcting one delivered-quote spacing defect.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — every clause correctly
  discloses that its citations are subdivisions of the same statutory
  section, with no independent corroborating source; correct as
  delivered.
- Checked for duplicate clause IDs against the full corpus (none). One
  drafting-clause title ("Signature and Acknowledgment") matches the
  established boilerplate-title reuse pattern.
- Checked every citation's `case` field for emptiness — all 9
  populated with proper case/citation identifier strings.
- Seven fields reused (`trusteeName`, 12 prior documents;
  `trustName`, 11; `recipientName`, 5; `settlorName`, 7;
  `originalTrustDate`, 5; `signatureDate`, 21; `successorTrusteeName`,
  3). Four new fields required (`trustTaxpayerId`,
  `titleVestingManner`, `trusteePowers`, `trustRevocability`) —
  grepped the corpus and confirmed no existing field fit this
  certification's specific content requirements.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Certification of Trust — Information Sheet and Form
  (`certification_of_trust_info_sheet`), 8 clauses (5 authority + 3
  drafting), in the Estate Planning category. Four new fields
  (`trustTaxpayerId`, `titleVestingManner`, `trusteePowers`,
  `trustRevocability`).
- Corpus: 2,961 → 2,969 clauses; 390 → 391 documents. Fourth and final
  addition of wave 86.

## Wave 86 summary

Wave 86 closes at 2,969 clauses / 391 documents (from 2,946/388 at
this document's first sibling addition): HOA Board Open Meeting
Requirements (Real Estate), California Franchise Investment Law and
Franchise Relations Act (Business Formation), Need-Based Attorney's
Fees in Family Law Proceedings (Family Law), and Certification of
Trust (Estate Planning) — one document in each of the four target
categories, following the established 1×4 strict-alternation pattern.
One genuine `{{}}` leak bug (in the HOA document's gap fields) and one
missing-space delivered-quote defect (in this document's § 18100.5(b)
quote) were caught and corrected during integration review this wave.
Wave 87 should return to a 2×2 pattern across two of the
less-recently-touched categories.
