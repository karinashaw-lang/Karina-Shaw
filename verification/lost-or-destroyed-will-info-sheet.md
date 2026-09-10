# Estate Planning, new document: Lost or Destroyed Will — Presumption of Revocation and Proof — Information Sheet

## Why this document

Wave 153 (Estate Planning slot; waves 145, 147, 149, and 151 covered
Hiring, During employment, Estate Planning, and Family Law, and wave
153 continues that even round-robin — one document per isolated
worktree, no coordination needed). Before drafting, `data/documents.json`
was read in full and every one of the category's existing 79 titles
was checked. Several of the task prompt's own example topics turned
out to already be covered: the trustee's § 16061.7 notification and
120-day contest window (`trustee_notification_to_beneficiaries`),
trust protector / trust director provisions
(`california_directed_trust_act_info_sheet`), and decanting
(`trust_decanting_info_sheet`) are all existing documents.

A grep of `data/documents.json` and `data/clauses.json` for
"holograph", "6111", "6124", "6132", "8223", "lost will",
"duplicate will", "self-proving", "personal property memorandum",
"Trikha", and related terms was run and every hit opened and read in
context before ruling a topic in or out. That check found: (1)
"holographic" is already a clause in the Last Will and Testament
document (`will_holographic_alternative`) and a mention in the
Petition for Probate sheet, so a full holographic-will sheet was set
aside as adjacent to existing coverage; (2) § 6124 appears in exactly
one existing clause, `codicil_lost_codicil_presumption` in the Codicil
document, which quotes the statute in one sentence to say a lost
codicil is presumed revoked — it does not address the Evidence Code
effect of the presumption, how it is rebutted, the burden of proof in
a contest, or how a lost will is actually proved and probated; (3)
"lost will", "8223", "8224", and "Trikha" have zero hits anywhere in
the corpus. No existing document in any category is dedicated to the
missing-will presumption or the proof of a lost or destroyed will.
This confirmed the topic as genuinely new, well-scoped, and grounded
in checkable statute and published case law.

## What this document covers

12 clauses (`lostwill_*`): 2 drafting (`lostwill_declaration`,
`lostwill_signature_block`) and 10 authority clauses:

- **`lostwill_revocation_by_physical_act`** (Prob. Code § 6120(b)) —
  revocation by burning, tearing, canceling, obliterating, or
  destroying with intent to revoke, by the testator or another in the
  testator's presence and at the testator's direction.
- **`lostwill_duplicate_original_rule`** (§ 6121) — a will executed in
  duplicate is revoked by destroying one duplicate with that intent.
- **`lostwill_presumption_elements`** (§ 6124, first sentence) — the
  three elements (last in testator's possession; competent until
  death; neither will nor duplicate original found after death) that
  raise the presumption of destruction with intent to revoke.
- **`lostwill_presumption_effect_evidence_code`** (§ 6124, second
  sentence; Evid. Code § 604) — the presumption affects only the burden
  of producing evidence, and what that means under the Evidence Code.
- **`lostwill_rebuttal_substantial_evidence`** (Estate of Trikha (2013)
  219 Cal.App.4th 791) — the presumption is not evidence but an
  assumption; it is prima facie only and exists only until rebutted by
  substantial evidence (Trikha quoting Estate of Obernolte); the
  definition of substantial evidence; equal probability suffices.
- **`lostwill_burden_of_proof_on_contestant`** (§ 8252(a); Trikha) —
  proponents bear the burden of proving due execution; contestants
  bear the burden of proving revocation.
- **`lostwill_weighing_evidence_error`** (Trikha) — once contrary
  evidence is produced the presumption disappears and the case is
  decided under the burden of proof; weighing evidence at the
  presumption stage is reversible error.
- **`lostwill_petition_statement_of_terms`** (§ 8223) — the petition
  for probate of a lost or destroyed will must include a written
  statement of the testamentary words or their substance, and the
  proved provisions go into the order admitting the will.
- **`lostwill_proof_of_execution_photocopy`** (§ 8220(a)-(b)) — an
  uncontested will may be proved on one subscribing witness's
  evidence, including by affidavit with a photographic copy attached.
- **`lostwill_preserving_witness_testimony`** (§ 8224) — witness
  testimony may be reduced to a signed, filed writing and is admissible
  later if the witness becomes unavailable under Evid. Code § 240.

Two additional authorities were considered and deliberately not
cited. Estate of Obernolte (1979) 91 Cal.App.3d 124 (CourtListener
cluster 2134654) exists on CourtListener but its record has an empty
`plain_text` field, and the shared CourtListener API rate limit (5
requests/minute, shared across the parallel agents in this wave)
made a reliable independent double-fetch of its HTML rendering
impractical within this task; its holding is therefore stated only as
the Trikha court described and quoted it, and the
`lostwill_rebuttal_substantial_evidence` gap field says so. Lauermann
v. Superior Court (2005) 127 Cal.App.4th 1327 (concerning the § 8223
pleading requirement) could not be located on CourtListener by name
or citation before the rate limit was hit and was not cited; the
§ 8223 clause rests on the statutory text alone and its gap field
discloses that the statute does not itself specify the form of the
written statement.

## Method

Cal. Prob. Code §§ 6120, 6121, 6124, 8220, 8223, 8224, and 8252, and
Cal. Evid. Code § 604, were each fetched directly from
`leginfo.legislature.ca.gov` via `curl`, **twice**, independently,
using two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 GroundtruthResearch/1.0`
2. `Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/128.0`

All 16 statute fetches (8 sections × 2 User-Agents) returned HTTP 200.
For each section the statutory text was extracted from both HTML
files by isolating the `id="codeLawSectionNoHead"` container,
stripping tags (inserting a space at each tag boundary),
HTML-unescaping entities, and collapsing `&nbsp;`/whitespace runs to
single spaces. For every section the two independently-fetched,
independently-extracted texts were compared programmatically and
found **identical** after that normalization.

Estate of Trikha was located with the CourtListener MCP `search`
tool (type "o"; cluster_id and opinion_id both 1040802) and its
`plain_text` retrieved with `get_endpoint_item` (endpoint "opinions").
The CourtListener HTML opinion page itself is behind an AWS WAF
challenge (HTTP 202, `x-amzn-waf-action: challenge`, zero-byte body)
for both `curl` User-Agents and for WebFetch, and Justia returned
HTTP 403, so the second independent fetch used the court's original
opinion PDF hosted at
`https://storage.courtlistener.com/pdf/2013/09/13/estate_of_trikha.pdf`
(the `local_path` named in the CourtListener record), fetched
**twice** with the two User-Agent strings above. Both PDF fetches
returned HTTP 200 and 120,949 bytes, with sha1
`921c12ae46dd074d5dd04c046189c327d29027b0` — matching each other and
matching the `sha1` field of the CourtListener opinion record — and
text extracted from both PDFs with `pypdf` was byte-identical. Every
Trikha quote was confirmed as a substring of the API `plain_text` and
of both PDF-extracted texts. One benign artifact was normalized for
comparison only: the court PDF's font maps the apostrophe to U+201F
("‟") in words like "testator‟s"; no quote used in this document
contains an apostrophe, so no quote text was altered by that
normalization.

## Quote verification

All 16 citation quotes across the 10 authority clauses were taken
directly from the fetched source text and independently re-verified —
after merging into `data/clauses.json`, not merely at drafting time —
as exact substrings of the normalized source text for their cited
section or opinion. A script (`verify.py` in the working scratch
directory) parsed each citation's `url` for its section number (or
opinion), looked up the independently verified extracted text, and
confirmed `quote in source_text` for every one of the 16 quotes; a
second script re-ran the same check reading the merged
`data/clauses.json`. Result: **all 16 quotes verified as exact
substrings, no failures**, both before and after the merge.

No genuine defect (a character present in a quote but absent from the
source) was found in any quote; no `gap`-field correction disclosure
was needed for any quote's text. Several `gap` fields disclose scope
limits — § 6120(a) and § 8220(c) not separately quoted, § 8252(a)'s
later-will sentence and § 8252(b) not quoted, Evid. Code § 240 not
fetched, Obernolte not independently fetched — which are scope
disclosures, not quote corrections.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge; the diff is additions only (278 insertions, 0
  deletions).
- No duplicate clause ids and no duplicate document ids in the full
  corpus (5,116 clauses; 629 documents).
- Every clause id in the new document's `clauseOrder` (all 12
  `lostwill_*` ids) exists in `data/clauses.json`, checked both for
  this document and by re-checking every `clauseOrder` reference in
  every document in the entire corpus (0 missing refs corpus-wide).
- Every authority clause has exactly the required keys (`id`, `title`,
  `kind`, `status`, `checkedDate`, `body`, `gap`, `citations`); every
  drafting clause has exactly `id`, `title`, `kind`, `body`; every
  citation object has exactly `case`, `cite`, `url`, `quote` — checked
  programmatically.
- Every `{{...}}` placeholder used in any clause field or citation
  field, corpus-wide, matches a field id declared in its document's
  `fields` array (0 unresolved placeholders corpus-wide).
- Field ids used: `decedentName` ("Decedent's name" / "Pat Morgan"),
  `originalWillDate` ("Date of the original will" / "January 15,
  2024"), `dateOfDeath` ("Date of death" / "March 15, 2026"),
  `petitionerName` ("Petitioner's name" / "Jordan Lee"), `dateSigned`,
  and `cityState` all reuse this corpus's established field-id and
  label conventions from existing Estate Planning documents. No new
  field ids were introduced.
- Inform-never-advise: every clause states what the statutes and the
  Trikha opinion provide; none instructs the reader what to do about
  a particular missing will.

## Net changes

- New document: Lost or Destroyed Will — Presumption of Revocation and
  Proof — Information Sheet (`lost_or_destroyed_will_info_sheet`), 12
  clauses (10 authority + 2 drafting), in the Estate Planning category.
- No new field ids.
- Corpus: 5,104 → 5,116 clauses; 628 → 629 documents; Estate Planning
  category: 79 → 80 documents.
- Part of wave 153 (Estate Planning slot of the four parallel,
  isolated-worktree additions continuing the even round-robin begun in
  waves 145/147/149/151).
