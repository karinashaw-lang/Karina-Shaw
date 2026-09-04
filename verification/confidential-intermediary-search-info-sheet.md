# Family Law, new document: Confidential Intermediary Search — Information Sheet

## Why this document

Third document of wave 81. Read the existing Independent Adoption and
Stepparent Adoption documents in full — confirmed both cover only the
pre-decree adoption process (investigation, consent, revocation,
effect of adoption), not post-adoption sealed-record search
mechanisms. Confirmed by grep that "confidential intermediary" and
"9200" had zero substantive prior hits. Confirmed non-duplicative.

**A significant citation and scope correction**: the research brief
assumed a general Family Code §§ 9200-9241 "Confidential Intermediary
Program" covering both adult-adoptee/birth-parent AND sibling
searches. Independent verification against leginfo's own table of
contents confirmed no such broad range exists — Division 13, Part 2
ends at § 9212, and the actual confidential-intermediary petition
mechanism is codified narrowly within § 9205(g)-(h), scoped
specifically to adoptee/sibling searches (§ 9205(h) defines "sibling"
as a biological, half-, or step-sibling). The separate adult-adoptee/
birth-parent pathway (§§ 9203-9204) is a structurally different,
non-petition, mutual-consent disclosure/contact mechanism — not a
court-petition, court-appointed-intermediary search. The document was
scoped to state this distinction accurately rather than force the
original broader framing onto a statute that doesn't support it.

## What this document covers

7 clauses: 2 drafting (declaration, signature block) and 5 authority
clauses, citing Cal. Fam. Code §§ 9200(a), 9203(a)(1), 9204(a), and
9205(g)-(h):

- **`confintermediary_who_may_petition`** (§ 9205(g)-(h)) — **the
  central finding**: only an adoptee or a sibling (statutorily
  defined) with no waiver already on file may petition; the court
  must grant the petition unless it would be detrimental to the
  adoptee or sibling sought.
- **`confintermediary_who_may_serve`** (§ 9205(g)) — the intermediary
  is assigned by statute (the agency that provided adoption services),
  not chosen by the petitioner, with an economic-hardship fallback to
  an alternate court-appointed intermediary.
- **`confintermediary_search_and_consent_process`** (§ 9205(g)) — the
  intermediary's statutory access to sealed records for search
  purposes, and the requirement to notify the located person that
  consent is optional and to stop all further attempts if consent is
  denied.
- **`confintermediary_confidentiality_protection`** (§ 9200(a),
  § 9205(g)) — the general record-sealing baseline (records are closed
  even to the parties themselves absent judicial authorization), and
  the intermediary's own duty not to disclose information found beyond
  authorized purposes.
- **`confintermediary_distinction_from_mutual_consent_registry`**
  (§ 9203(a)(1), § 9204(a)) — **the corrective clause**: explicitly
  distinguishes the § 9205(g) court-petition sibling-search mechanism
  from the structurally different, non-petition mutual-consent
  disclosure/contact procedure for adult adoptees and birth parents.

## Genuine corrections and findings

- **The central finding and citation correction**: confirmed via
  leginfo's own table of contents that no general "Confidential
  Intermediary Program" spanning §§ 9200-9241 exists — the actual
  mechanism is § 9205(g)-(h)'s narrower sibling-search petition, a
  materially different scope than commonly assumed. This document
  states that distinction explicitly rather than glossing over it.
- Confirmed the intermediary is statutorily assigned (not
  petitioner-selected), with a specific economic-hardship fallback
  provision — a real procedural detail easy to omit.
- Confirmed the mandatory-stop rule once consent is denied: the
  statute requires the intermediary to cease all further attempts, not
  merely to report the refusal.
- Correctly declined to draft any clause asserting a general adult-
  adoptee/birth-parent "confidential intermediary" mechanism, since,
  after verification, none exists — only the sibling-search petition
  and the separate mutual-consent registry exist, and the document
  says so explicitly.

## Honest gap(s) disclosed

§ 9205(g)'s sub-rules for a sought sibling under 18, a sought sibling
under juvenile court jurisdiction, and foreign-born/intercountry
adoptees are not restated as separate clauses — each is a distinct
conditional rule that would need its own careful treatment. § 9200(c)
(the certificate-of-adoption exception) and § 9200(b) (redaction on
inspection) are referenced but not quoted. § 9203's remaining
subdivisions (adoptive-parent-initiated requests, fees, the January 1,
1984 applicability cutoff) are not restated.

## Method

Fetched Cal. Fam. Code §§ 9200, 9203, 9204, and 9205 from
`leginfo.legislature.ca.gov`, each fetched twice by the research agent
with two distinct User-Agent strings, confirmed byte-identical after
whitespace normalization. All 11 citation quotes across the 5
authority clauses programmatically confirmed as exact contiguous
substrings (no ellipsis-joined quotes). Independently re-verified
during integration review via a fourteenth fetch (a distinct curl
User-Agent string, "Groundtruth-FourteenthVerify-ConfInt/1.0") of all
four sections — all 11 quotes confirmed clean.

## Verification

- Statutory sections fetched twice independently by the research agent
  with distinct User-Agent strings, plus a fourteenth independent
  fetch during integration review; all quotes confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — each clause correctly
  discloses which of its citations are subdivisions of the same
  statutory section (§ 9205(g)/(h)); the § 9200(a)/§ 9205(g) pairing
  and the § 9203(a)(1)/§ 9204(a) pairing each correctly disclosed as
  independent, separately-numbered sections; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
- One new field required (`siblingSoughtName`) — checked against the
  full corpus's existing field ids first, confirmed no equivalent
  field already existed. Four fields (`petitionerName`,
  `countyOfFiling`, `dateSigned`, `cityState`) reused from the existing
  corpus (18, 34, 154, and 133 prior documents respectively).
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks, schema check,
  empty-case-field check) run across the full updated corpus — clean.

## Net changes

- New document: Confidential Intermediary Search — Information Sheet
  (`confidential_intermediary_search_info_sheet`), 7 clauses (5
  authority + 2 drafting), in the Family Law category. 1 new field.
- Corpus: 2,826 → 2,833 clauses; 371 → 372 documents. Third addition of
  wave 81.
