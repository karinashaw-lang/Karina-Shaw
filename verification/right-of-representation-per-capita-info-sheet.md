# Estate Planning, new document: Right of Representation, Per Stirpes, and Per Capita at Each Generation (Prob. Code §§ 240, 245-246) — Information Sheet

## Why this document

Part of wave 149 (Estate Planning slot; wave 149 continues the same
even round-robin as waves 145/147 — Hiring, During employment, Estate
Planning, and Family Law — one document per isolated worktree, no
coordination needed). Before drafting, `data/documents.json` was read
in full and every one of the category's existing 77 titles was
checked (`python3 -c "..."` filtering documents whose `categories`
list contains `"Estate Planning"`). Recent additions the task
description flagged — Advancements Against an Intestate Share
(Prob. Code § 6409) and Joint Bank Accounts and Survivorship Rights —
are both already present, as are No-Contest Clause Enforceability,
Digital Assets and Online Account Access, and Rule Against
Perpetuities, all suggested as candidate topics in the task prompt but
already covered.

A further grep of both `data/documents.json` and `data/clauses.json`
for "stirpes", "representation", "per capita", "guardianship of the
person", and "guardian ad litem" was run and every hit read in
context before ruling a topic out. This turned up:

- "Guardianship of the Person (Petition Information Sheet)" and a
  "Guardianship of the Estate" document — both already exist, filed
  outside Estate Planning (their `categories` were checked directly).
- A "Guardian Ad Litem Appointment — Information Sheet" already
  exists as well.
- Holographic wills (§ 6111) and revocation of a will by divorce
  (§ 6122) are both already covered as clauses inside the existing
  "Last Will and Testament" document (`will_holographic_alternative`,
  `will_revocation_by_divorce`).
- No existing document or clause anywhere in the corpus quotes or
  cites Prob. Code §§ 240, 245, or 246, and no existing document
  addresses the mechanical *sub-division* method used when a will,
  trust, other instrument, or the intestate succession statute directs
  property to pass "by right of representation," "per stirpes," or
  "per capita at each generation." This is genuinely new ground: the
  existing "Advancements Against an Intestate Share" and "Ademption
  and Abatement of Testamentary Gifts" documents address whether and
  how much a gift is *reduced or credited*; the existing "California
  Intestate Succession Distribution Shares" document addresses *who*
  inherits and in *what fractional shares* among surviving relatives
  under §§ 6400-6402. None of them addresses *how a deceased
  beneficiary's own share is subdivided among that beneficiary's
  issue* — the question §§ 240, 245, and 246 answer, and a question
  that comes up constantly in real will and trust drafting (almost
  every will or trust that gives property "to my issue" or "per
  stirpes" is invoking these sections, most drafters and readers
  never realize it).

## What this document covers

6 clauses (`rop_*`): 2 drafting (`rop_purpose`, `rop_certification`)
and 4 authority clauses, citing three statutory sections in Probate
Code Division 2, Part 6 ("Distribution Among Heirs or Beneficiaries"):

- **`rop_per_capita_at_each_generation_method`** (§ 240, the entire,
  undivided section) — the core mechanical formula: divide into equal
  shares at the nearest living generation of issue, then re-divide a
  deceased member's share among that member's own then-living issue.
- **`rop_default_construction_issue_descendants`** (§ 245(a)-(b),
  including the two numbered examples in (b)) — the default that
  applies the § 240 method whenever an instrument calls for it by
  cross-reference, or is simply silent about method for a gift to
  "issue" or "descendants," plus which wording does *not* count as a
  contrary intention (bare "per capita" across generations,
  self-contradictory combinations like "per capita and per stirpes").
- **`rop_class_gift_children_formula`** (§ 246(a) only) — the related
  but distinct formula for a gift to a designated ancestor's children,
  which starts counting from that ancestor's children rather than
  from the nearest living generation of issue generally.
- **`rop_per_stirpes_language_triggers_246`** (§ 246(b)-(c)) — the
  rule that the words "per stirpes," "by representation," or "by
  right of representation" trigger the § 246(a) method, with a real,
  dated distinction in how strong that default is: an express
  contrary provision is required to displace it for instruments
  executed on or after January 1, 1986, versus a broader
  contrary-intent inquiry for instruments executed before that date.

## Method

Cal. Prob. Code §§ 240, 245, and 246 were each fetched directly from
`leginfo.legislature.ca.gov` **twice**, independently, using two
distinct User-Agent strings, via `curl` through the sandboxed egress
proxy (consistent with prior agents' experience in this effort; direct
`curl` to this host worked without needing to fall back to WebFetch,
though an initial WebFetch pass was also run as a sanity check — see
below):

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 GroundtruthResearch/1.0`
2. `Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/128.0`

(Cal. Prob. Code § 6402 was also fetched, both to confirm the
intestate-succession cross-reference to § 240 mentioned in
`rop_purpose`'s body, and as an extra check that this topic is
genuinely distinct from the existing "California Intestate Succession
Distribution Shares" document, which cites § 6402 directly. § 6402
is not itself quoted in any new clause's `citations`, so it did not
need to pass the same quote-verification step; the `rop_purpose`
clause's reference to "cross-reference…when a decedent's issue are of
unequal degree of kinship" was checked against § 6402(a)'s actual
text — "but if of unequal degree those of more remote degree take in
the manner provided in Section 240" — confirmed present in both
independently fetched copies, even though the clause does not present
it as a direct quotation.)

An earlier WebFetch pass (using the built-in `WebFetch` tool, which
summarizes fetched pages through a small model rather than returning
raw text) was run first on §§ 240, 245, and 246 as an orientation
step. It correctly identified the general content and structure of
each section but produced paraphrased, non-verbatim text (e.g.
reordering clauses, substituting "The statute specifies that..." for
actual statutory language) — exactly the kind of output this
pipeline's rules warn against trusting for `citations[].quote`. It was
used only to confirm which sections were relevant before the
verbatim, byte-level `curl` fetch; no text from the WebFetch pass was
used in any clause's `quote` field.

For each section, the two `curl`-fetched HTML files were each parsed
by extracting the content between `<BODY>` and `</BODY>`, stripping
all HTML tags, un-escaping HTML entities, and collapsing all
whitespace (including the smart-quote-adjacent non-breaking spaces
and a mid-sentence line-wrap tab+newline sequence found inside
§ 246(b), before the word "otherwise") to single spaces — the same
class of benign source-formatting artifact documented in this
corpus's other verification files. This normalized text was
byte-for-byte identical between the two independently fetched copies
of each of the three sections (240, 245, 246): confirmed
programmatically, not just by eye.

All four citation quotes were then verified programmatically as exact
substrings of the normalized text of *both* independently fetched
copies of their respective section, using the same normalization
function used to compare the two fetches against each other (not a
separate, looser check). No genuine defect (a character present in a
quote but absent from the source) was found in any of the four
quotes; no `gap`-field correction disclosure was needed.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge.
- No duplicate clause ids and no duplicate document ids in the full
  corpus (4,959 clauses; 613 documents).
- Every clause id in the new document's `clauseOrder`
  (`rop_purpose`, `rop_per_capita_at_each_generation_method`,
  `rop_default_construction_issue_descendants`,
  `rop_class_gift_children_formula`,
  `rop_per_stirpes_language_triggers_246`, `rop_certification`)
  exists in `data/clauses.json`.
- The new document object has exactly the required keys (`id`,
  `title`, `description`, `categories`, `clauseOrder`, `fields`); every
  new authority clause has exactly (`id`, `title`, `kind`, `status`,
  `checkedDate`, `body`, `gap`, `citations`); every new drafting
  clause has exactly (`id`, `title`, `kind`, `body`); every citation
  object has exactly (`case`, `cite`, `url`, `quote`) — checked
  programmatically against the literal key sets, no extra or missing
  keys.
- Every `{{...}}` placeholder used in a new clause's `title`, `body`,
  or `gap` (`testatorName`, `dateSigned`, `cityState`) matches a field
  declared in the new document's `fields` array; no unresolved or
  stray placeholders.
- All four citation quotes independently re-confirmed, after the
  merge (reading the on-disk `data/clauses.json`, not the in-memory
  draft), as exact substrings of both independently fetched copies of
  their respective section's text, following only the documented
  whitespace normalization.
- All three field ids (`testatorName`, `dateSigned`, `cityState`) are
  reused from existing corpus conventions — `testatorName`'s label
  ("Testator/settlor's name") matches the label already used in the
  existing "No-Contest Clause Enforceability" information sheet, since
  §§ 245-246 apply to both wills and trusts. No new field ids were
  introduced.

## Net changes

- New document: Right of Representation, Per Stirpes, and Per Capita
  at Each Generation (Prob. Code §§ 240, 245-246) — Information Sheet
  (`right_of_representation_per_capita_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Estate Planning category.
  Zero new field ids (all three reused).
- Corpus: 4,953 → 4,959 clauses; 612 → 613 documents.
- Part of wave 149 (Estate Planning slot of the four parallel,
  isolated-worktree additions continuing the round-robin from waves
  145/147).
