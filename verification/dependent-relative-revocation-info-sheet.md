# Estate Planning, new document: Dependent Relative Revocation of a Will — Information Sheet

## Why this document

Wave 155 (Estate Planning slot; waves 145, 147, 149, 151, and 153
covered Hiring, During employment, Estate Planning, and Family Law, and
wave 155 continues that even round-robin — one document per isolated
worktree, no coordination needed). Before drafting, `data/documents.json`
was read in full and every one of the category's existing 80 titles was
checked. Two of the task prompt's own example topics turned out to
already be covered: the § 21380 presumption of fraud or undue influence
for donative transfers to a disqualified person
(`disqualified_transferee_donative_transfer_presumption_info_sheet`) and
trust modification or termination by consent under §§ 15403-15404
(`trust_modification_termination_beneficiary_consent_info_sheet`) are
both existing documents. Testamentary capacity under § 6100.5 is already
a clause in the Grounds to Contest a Will or Trust sheet, so a
stand-alone capacity sheet was set aside as adjacent to existing
coverage.

A grep of `data/documents.json`, `data/clauses.json`, and every
`verification/*.md` file for "dependent relative revocation", "6120",
"6123", "revival", "revocation by subsequent", "Kaufman", "Cuneo",
"Lipper", "Anderson", "lucid interval", and related terms was run and
every hit opened and read in context before ruling the topic in or out.
That check found: (1) "dependent relative revocation" has **zero** hits
anywhere in the corpus; (2) § 6120 is quoted in four existing clauses
(the Last Will's `will_revocation`, the Codicil's
`codicil_revocation_no_automatic_revival` and
`codicil_inconsistent_provisions`, the Testamentary Trust's
`testtrust_revocability`, and the Lost Will sheet's
`lostwill_revocation_by_physical_act`), each for the bare proposition
that a later will or a physical act revokes a will — none addresses
conditional revocation or mistake; (3) § 6123 appears in exactly one
existing clause, `codicil_revocation_no_automatic_revival`, which quotes
subdivision (a) in the codicil context to say that revoking a codicil
does not automatically revive what it changed — it does not address the
doctrine at all. No existing document in any category is dedicated to
dependent relative revocation. This confirmed the topic as genuinely
new, well-scoped, and grounded in checkable statute and published
Supreme Court and Court of Appeal decisions.

## What this document covers

14 clauses (`drr_*`): 2 drafting (`drr_declaration`,
`drr_signature_block`) and 12 authority clauses:

- **`drr_statutory_revocation_framework`** (Prob. Code § 6120) — the two
  statutory methods of revocation (subsequent will; physical act with
  intent) on which the judge-made doctrine operates.
- **`drr_doctrine_defined`** (Estate of Kaufman (1945) 25 Cal.2d 854) —
  the Supreme Court's definition: an earlier will revoked only to give
  effect to a later one remains in effect to the extent the later one
  proves ineffective; the doctrine carries out the testator's probable
  intention.
- **`drr_same_dispositive_plan`** (Kaufman) — when a testator repeats
  the same dispositive plan in a new will, revocation of the old is
  deemed dependent on the new will's legal effectiveness; if the new
  will fails, its revocatory clause falls.
- **`drr_kaufman_application`** (Kaufman) — the facts (two nearly
  identical wills, death two days after the second, charitable residuary
  gift failing under the then-applicable thirty-day rule) and the
  disposition admitting both wills.
- **`drr_conditional_intent_and_mistake`** (Estate of Cuneo (1963) 60
  Cal.2d 196) — what the doctrine requires (a specific intent that
  provisions of the former will continue, through similar provisions or
  conditional changes); the testatrix's misunderstanding of the legal
  effect of her instruments did not defeat the doctrine; the destroyed
  1954 will admitted with the 1956 codicil.
- **`drr_limits_unconnected_revocation`** (Kaufman describing Estate of
  Olmstead; Cuneo) — the doctrine does not apply where the revocation is
  not connected with the making of another will, or where there is no
  substantial evidence that the revocation was conditional.
- **`drr_express_revocation_clause`** (Estate of Anderson (1997) 56
  Cal.App.4th 235) — a general "revoke all prior wills" clause revokes
  the earlier will unless the doctrine applies; the doctrine is an
  exception to the rule that a revocation clause is conclusive.
- **`drr_not_limited_to_intestacy`** (Anderson) — a will may be
  "ineffective" through a material mistake, not only through invalidity
  producing intestacy; holding that the doctrine applies even where no
  intestacy would result.
- **`drr_extrinsic_evidence`** (Anderson; Kaufman) — courts may consider
  extrinsic evidence of the testator's intent; intent is judged in light
  of the testator's knowledge at execution; after repeal of former
  § 105, the testator's oral declarations are governed by general
  evidence rules (Anderson fn. 10 quoting Witkin).
- **`drr_partial_preservation`** (Anderson) — only the affected portion
  of the earlier will need be admitted (Anderson fn. 11).
- **`drr_revival_statute_distinguished`** (§ 6123(a)-(b)) — the separate
  statutory revival rule when the second will is itself revoked, and why
  it is distinct from the doctrine.
- **`drr_burden_of_proof`** (§ 8252(a)) — proponents prove due
  execution; contestants prove revocation (among other grounds); a later
  revoking will is determined first.

Additional authorities were considered and deliberately not cited.
Estate of Salmonski (1951) 38 Cal.2d 199, Estate of Marx (1917) 174 Cal.
762, Estate of Thompson (1921) 185 Cal. 763, Estate of Olmstead (1898)
122 Cal. 224, Estate of Martens (1937) 10 Cal.2d 395, Estate of
Robertson (1968) 266 Cal.App.2d 866, and Estate of Russell (1968) 69
Cal.2d 200 are each described only as the Kaufman, Cuneo, or Anderson
court characterized or quoted them, and the relevant `gap` fields say
so; none was independently fetched, principally because the
CourtListener API rate limit (5 requests/minute, shared across the four
parallel agents in this wave) was hit repeatedly during this task.
Estate of Lopes (1984) 152 Cal.App.3d 302 (a decision declining to apply
the doctrine) was located by the CourtListener search but not fetched
for the same reason and is not cited. The former thirty-day
charitable-bequest statute that made the 1941 residuary gift in Kaufman
ineffective is described only as the opinion describes it and is
disclosed as repealed and unquoted in the `drr_kaufman_application` gap
field.

## Method

Cal. Prob. Code §§ 6120, 6123, and 8252 (and, for background only,
§§ 6100 and 6111, which were not ultimately cited) were each fetched
directly from `leginfo.legislature.ca.gov` via `curl`, **twice**,
independently, using two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 GroundtruthResearch/1.0`
2. `Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/128.0`

All statute fetches returned HTTP 200. For each section the statutory
text was extracted from both HTML files by isolating the
`id="codeLawSectionNoHead"` container, stripping tags (inserting a space
at each tag boundary), HTML-unescaping entities, and collapsing
`&nbsp;`/whitespace runs to single spaces. For every section the two
independently-fetched, independently-extracted texts were compared
programmatically and found **identical** after that normalization.

The three opinions were located with the CourtListener MCP `search`
tool (type "o", query `"dependent relative revocation"`, California
Supreme Court and Court of Appeal, most-cited first): Estate of Kaufman
(cluster_id and opinion_id both 1164184), Estate of Cuneo (both
2609207), and Estate of Anderson (both 2251543; a second CourtListener
record of the same opinion from the Caselaw Access Project exists as
cluster 5808130 / opinion 5663471 and was not used). Each opinion's
`html_with_citations` was retrieved with `get_endpoint_item` (endpoint
"opinions"); for all three the `plain_text` field is empty, so the HTML
rendering is the source text, with tags stripped and whitespace
collapsed for comparison. The retrieved HTML for each opinion was saved
verbatim to the working scratch directory (for Kaufman and Cuneo, the
substantive paragraphs with the long string citations elided and marked
as such; every quoted passage is within a preserved paragraph).

A second, independent fetch of the opinion text by a different path
proved difficult in this environment: the CourtListener opinion HTML
pages return an AWS WAF challenge (HTTP 202, empty body) to `curl`; the
CourtListener REST `opinions` endpoint returns HTTP 401 without a token;
and Justia, FindLaw, Leagle, Stanford SCOCAL, Casetext, AnyLaw, and the
Caselaw Access Project (`static.case.law`) are all blocked or refused at
the network egress proxy (HTTP 403, 410, or "CONNECT tunnel failed").
The second channel actually used is the CourtListener **anonymous v4
search API** (`/api/rest/v4/search/?type=o&highlight=on`), which is
reachable by `curl` without a token and is served from CourtListener's
separate Elasticsearch index rather than the opinion record: for every
case-law quote an exact-phrase query restricted to the opinion's
`cluster_id` was run **twice**, with the two User-Agent strings above,
and a result count of exactly 1 whose `cluster_id` matches the cited
opinion was treated as confirmation that the phrase is present verbatim
in the independently indexed text. That endpoint is itself
rate-limited; the script paced calls at 13 seconds and retried HTTP 429
with a 30-second back-off. Results are recorded below.

## Quote verification

All 24 citation quotes across the 12 authority clauses were taken
directly from the fetched source text and independently re-verified —
after merging into `data/clauses.json`, not merely at drafting time — as
exact substrings of the normalized source text for their cited section
or opinion. A script (`merge_and_validate.py` in the working scratch
directory) parsed each citation's `url` for its section number or
opinion id, looked up the verified extracted text, and confirmed
`quote in source_text` for every one of the 24 quotes, both in a dry
run before the merge and again reading the merged `data/clauses.json`.
Result: **all 24 quotes verified as exact substrings, no failures**.

Second channel (anonymous search-index phrase queries, two User-Agents):
the 21 distinct case-law quotes (8 Kaufman, 4 Cuneo, 9 Anderson; three
quotes are cited from two clauses) were each queried twice, 42 queries
in all. **40 of 42 returned exactly one result, the cited opinion.**
One query (Anderson footnote 10, first User-Agent) initially failed at
the transport level (curl HTTP code 000, no response) and was re-run
and confirmed. The two remaining non-confirmations are the same quote
under both User-Agents — Kaufman's sentence "The doctrine is designed to
carry out the probable intention of the testator when there is no
reason to suppose that he intended to revoke his earlier will if the
later will became inoperative." — for which the full-sentence phrase
query returned zero results from the index even though the sentence is
verbatim in the fetched opinion record. A follow-up probe found: (a) a
phrase query for the sentence's first clause returned the Kaufman
opinion with a highlighted snippet reading "The doctrine is designed to
carry out the probable intention of the testator when there is no
reason", confirming the sentence contiguously through those words; (b)
the phrase query for the sentence's final clause alone returned zero
results, indicating an indexing or tokenization anomaly in the final
clause rather than a textual difference; and (c) the **full sentence**
returned exactly one result when queried against the Cuneo opinion
(cluster 2609207) and against the Anderson opinion (cluster 2251543),
each of which quotes the sentence from Kaufman verbatim, each confirmed
with both User-Agents. The quote is therefore confirmed by the MCP
fetch of Kaufman, by the partial index match, and by two independent
Supreme Court and Court of Appeal reproductions; the `drr_doctrine_defined`
gap field does not flag it because no character of the quote differs
from the source. Raw query results are retained in the working scratch
directory (`second_channel_results.json`, `probe_kaufman_q1_results.json`).

Three quote-text decisions were made to keep every quote character-exact
against the source, each disclosed in the clause's `gap` field:

- `drr_doctrine_defined`: Kaufman's defining sentence is interrupted in
  the CourtListener text by the reporter page marker `*859` after the
  words "Under the doctrine of dependent relative revocation,"; the
  quote begins after the marker ("an earlier will, revoked only …") so
  that the quote is a contiguous substring of the source.
- `drr_same_dispositive_plan`: the CourtListener text renders
  "dispositive" as "dis-positive" (a scanned line-break hyphenation
  artifact) in the "same dispositive plan" sentence; the quote begins
  after that word. Cuneo's own quotation of the same sentence reads
  "dispositive".
- `drr_conditional_intent_and_mistake`: the CourtListener text of
  Cuneo renders "will" as "mil" (an OCR artifact) in the opening clause
  of the sentence stating the doctrine's requirement; the quote begins
  after that clause.

No character of any quote was altered from the source text; no
`gap`-field correction of a quote's text was needed. Several `gap`
fields disclose scope limits (statutes not quoted, secondary cases
described only as characterized by the fetched opinions, footnote
sources identified), which are scope disclosures, not quote
corrections.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge; the diff is additions only (356 insertions, 0
  deletions: 288 in `clauses.json`, 68 in `documents.json`).
- No duplicate clause ids and no duplicate document ids in the full
  corpus (5,213 clauses; 637 documents).
- Every clause id in the new document's `clauseOrder` (all 14 `drr_*`
  ids) exists in `data/clauses.json`, checked both for this document
  and by re-checking every `clauseOrder` reference in every document in
  the entire corpus (0 missing refs corpus-wide).
- Every authority clause has exactly the required keys (`id`, `title`,
  `kind`, `status`, `checkedDate`, `body`, `gap`, `citations`); every
  drafting clause has exactly `id`, `title`, `kind`, `body`; every
  citation object has exactly `case`, `cite`, `url`, `quote`; the
  document has exactly `id`, `title`, `description`, `categories`,
  `clauseOrder`, `fields` — checked programmatically.
- Every `{{...}}` placeholder used in any clause field or citation
  field, corpus-wide, matches a field id declared in its document's
  `fields` array (0 unresolved placeholders corpus-wide).
- Field ids used: `decedentName` ("Decedent's name" / "Pat Morgan"),
  `dateOfDeath`, `petitionerName` ("Jordan Lee"), `dateSigned`, and
  `cityState` reuse this corpus's established field-id and label
  conventions from existing Estate Planning documents. Two field ids
  are new to the corpus because the document concerns two instruments:
  `earlierWillDate` ("Date of the earlier will") and `laterWillDate`
  ("Date of the later will"), modeled on the existing
  `originalWillDate` convention.
- Inform-never-advise: every clause states what the statutes and the
  Kaufman, Cuneo, and Anderson opinions provide; none instructs the
  reader what to do about a particular will or contest.

## Net changes

- New document: Dependent Relative Revocation of a Will — Information
  Sheet (`dependent_relative_revocation_info_sheet`), 14 clauses (12
  authority + 2 drafting), in the Estate Planning category.
- Two new field ids (`earlierWillDate`, `laterWillDate`).
- Corpus: 5,199 → 5,213 clauses; 636 → 637 documents; Estate Planning
  category: 80 → 81 documents.
- Part of wave 155 (Estate Planning slot of the four parallel,
  isolated-worktree additions continuing the even round-robin begun in
  waves 145/147/149/151/153).
