# Real Estate, new document: California Recording Act and Priority of Interests — Information Sheet

## Why this document

Confirmed the research assignment's premise: "bona fide purchaser"
and "recording act" as dedicated topics had only incidental hits (an
analogy inside the Patent Assignment document). But the deeper check
found genuine, substantive embedded coverage in two existing
documents: `qcd_recording_effect` (Grant Deed/Quitclaim Deed) covers
§§ 1213-1214 as a "race-notice" rule, and `trustfunding_recording_effect`
(Living Trust Funding) covers §§ 1217 and 1214. Rather than treating
this as blocking overlap, the agent correctly assessed that these are
single supporting clauses serving each document's narrower purpose
(deed validity; trust funding), not a dedicated explainer of the
recording system itself — and built genuinely new depth beyond both
(the indexing requirement, and case-law construction of "good faith"
and "notice"). Second of wave 71's four documents.

## What this document covers

6 clauses: 2 drafting (purpose/scope, declarant acknowledgment) and 4
authority clauses, citing Cal. Civ. Code §§ 1213, 1214, 1217, *First
Bank v. East West Bank* (2011) 199 Cal.App.4th 1309, *Gregg v. Cloney*
(2001) 91 Cal.App.4th 429, and *Gates Rubber Co. v. Ulman* (1989) 214
Cal.App.3d 356 (as quoted within *First Bank*):

- **`recordingact_priority_rule_1214`** (§ 1214 + *First Bank*) — the
  core race-notice priority rule and its three-part structure.
- **`recordingact_constructive_notice_and_indexing_1213`** (§ 1213 +
  *First Bank*) — **a key finding beyond the existing embedded
  clauses**: recording alone doesn't trigger constructive notice —
  California case law holds the operative event is indexing, not
  the physical act of recording.
- **`recordingact_unrecorded_instrument_validity_1217`** (§ 1217) —
  an unrecorded instrument's continued validity between the original
  parties, explicitly disclosed as restating § 1214's rule from the
  opposite direction rather than an independent point.
- **`recordingact_good_faith_and_notice_case_law`** (*First Bank* +
  *Gregg v. Cloney*) — **the central new-depth finding**: how
  California courts define "good faith" and "notice" (actual vs.
  constructive, the reasonable-inquiry standard) — content neither
  existing embedded clause addressed at all.

## Genuine corrections and findings

- **The central finding**: confirmed via directly-read case law that
  recording a document does not itself impart constructive notice —
  indexing is the operative event — a real, non-obvious refinement of
  § 1213's bare text that neither existing embedded clause in this
  corpus addressed.
- Confirmed the precise elements of "bona fide purchase" (payment of
  value, good faith, absence of actual or constructive notice) via
  *First Bank*, quoting *Gates Rubber Co. v. Ulman* — verified rather
  than assumed from the statute's bare "good faith" language.
- Confirmed the actual-vs-constructive notice distinction and the
  reasonable-inquiry standard via *Gregg v. Cloney*, directly read and
  confirmed.
- Honestly disclosed § 1217's function as substantially restating
  § 1214's rule from the opposite direction — not treated as an
  independent corroborating source for that shared point, even though
  separately quoted.

## Honest gap disclosed

Civil Code §§ 18-19 (statutory notice definitions) were not
independently fetched as primary text — the agent relied on *Gregg v.
Cloney*'s own characterization of them, which was directly read and
confirmed, rather than separately verifying the statutory text given
the clause-count scope target. How indexing errors or agent-imputed
knowledge (e.g., an escrow officer's knowledge imputed to a purchaser)
are handled was not researched. Neither case cited is a California
Supreme Court decision, so neither binds every California court —
disclosed explicitly.

## Method

Fetched Cal. Civ. Code §§ 1213, 1214, and 1217 from
`leginfo.legislature.ca.gov` via curl (through the sandboxed proxy),
each section fetched twice with distinct User-Agent strings, confirmed
byte-identical after whitespace normalization (and matched against
the already-verified quotes in the two existing embedded clauses).
Read and verified *First Bank v. East West Bank* and *Gregg v.
Cloney* directly via CourtListener. All 7 citation quotes across the
4 authority clauses programmatically confirmed as exact substrings/
quotes of the confirmed sources.

## Verification

- All three statutory sections fetched twice independently with
  distinct User-Agent strings; confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean.
- Checked source-independence disclosure logic — the statute and case
  law within each clause correctly disclosed as independent of each
  other; *First Bank*'s three separate citations across different
  clauses correctly disclosed as not counted as independent
  corroboration of each other within any single clause; § 1214 and
  § 1217 correctly disclosed as substantially restating one shared
  rule despite being separately numbered; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none); the
  reused title "Purpose and Scope of This Information Sheet" matches
  this corpus's established cross-document pattern, not a substantive
  duplicate.
- All 8 fields used (`requestingPartyName`, `adverseClaimantNames`,
  `propertyAddress`, `legalDescription`, `parcelNumber`,
  `recordingCounty`, `signatureDate`, `signatureCity`) independently
  confirmed to already exist in the corpus with matching definitions,
  despite the agent's self-report suggesting two were new. No new
  fields.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup clause ids, dup doc ids, `{{}}` leaks) run across the
  full updated corpus — clean.

## Net changes

- New document: California Recording Act and Priority of Interests —
  Information Sheet (`recording_act_priority_info_sheet`), 6 clauses
  (4 authority + 2 drafting), in the Real Estate category. No new
  fields.
- Corpus: 2,553 → 2,559 clauses; 332 → 333 documents. Second document
  of wave 71.
