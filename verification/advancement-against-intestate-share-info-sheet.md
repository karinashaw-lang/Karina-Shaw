# Estate Planning, new document: Advancements Against an Intestate Share (Prob. Code § 6409) — Information Sheet

## Why this document

Wave 147 (Estate Planning slot; wave 145 covered Hiring, During
employment, Estate Planning, and Family Law, wave 146 covered the
other four categories, wave 147 returns to this group — one document
per isolated worktree, no coordination needed). Before drafting,
`data/documents.json` was read in full and every one of the
category's existing 76 titles was checked. The category already has
an "Ademption and Abatement of Testamentary Gifts" information sheet
(covering, among other things, ademption *by satisfaction* —
Prob. Code § 21135 — a testate-estate doctrine: a lifetime gift
credited against a gift made in a will) and a "California Intestate
Succession Distribution Shares" information sheet (Prob. Code
§§ 6400-6402: who inherits and how much when there is no will).
Neither, nor any other existing document, addresses the parallel
*intestate*-estate rule: when a lifetime gift is credited against an
heir's statutory intestate share. A grep of `data/documents.json` and
`data/clauses.json` for "advancement", "6409", "per stirpes", and
"per capita" turned up only an unrelated coincidental match (Family
Code-context text containing the digits "6409" in a different
statute's quoted material) — confirmed by opening every match and
reading it in context, not by treating a keyword hit alone as
evidence of coverage. No existing document, in Estate Planning or any
other category, cites or quotes Prob. Code § 6409.

Other candidate topics considered and rejected as already covered
somewhere in the corpus (checked by grep, then by reading the hit in
context before ruling it out): Heggstad petitions / Prob. Code § 850
(quoted at length in the existing Living Trust Funding information
sheet's `trustfunding_heggstad_petition` clause), holographic wills /
§ 6111 (quoted in the existing Last Will and Testament document's
`will_holographic_alternative` clause), the durable power of
attorney's incapacity-survival rule (quoted in the existing Financial
Power of Attorney document), probate bond requirements / §§ 8480-8481
(quoted in the existing Petition for Probate information sheet), and
the lost/destroyed-will presumption / § 6124 (quoted in the existing
Codicil document). Proposition 19's parent-child property-tax
reassessment exclusion and the post-mortem right of publicity
(Civ. Code § 3344.1) are both already documents in this corpus, but
filed under Real Estate and Confidentiality & IP respectively rather
than Estate Planning — noted, but not used, since the wave's aim is a
document that is itself new to this category's own topic list, not
merely uncategorized-here.

## What this document covers

6 clauses (`advancement_*`): 2 drafting (`advancement_declaration`,
`advancement_certification`) and 4 authority clauses, all citing a
single statutory section, Cal. Prob. Code § 6409, subdivision by
subdivision:

- **`advancement_writing_requirement`** (§ 6409(a), with its two
  numbered conditions (a)(1)-(2)) — the core rule: a lifetime gift to
  an heir is treated as an advancement against that heir's intestate
  share only if the decedent declared so in a contemporaneous
  writing, or the heir acknowledged so in writing. The gift alone,
  without one of those two writings, is not enough.
- **`advancement_valuation_timing`** (§ 6409(b)) — the default rule
  for when advanced property is valued: at the heir's possession or
  enjoyment of it, or at the decedent's death, whichever comes first.
- **`advancement_conclusive_written_valuation`** (§ 6409(c)) — a
  value stated in the decedent's or heir's contemporaneous writing
  itself displaces the default timing rule and controls instead.
- **`advancement_recipient_predeceases`** (§ 6409(d)) — the default
  rule (and its own express override) for what happens to the
  advancement's effect on shares if the heir who received it
  predeceases the decedent: normally disregarded in computing the
  predeceased heir's issue's share, unless the governing writing says
  otherwise.

## Method

Cal. Prob. Code § 6409 was fetched directly from
`leginfo.legislature.ca.gov` via `curl` (through the sandboxed egress
proxy; direct WebFetch to that host returned an `EGRESS_BLOCKED`
error from this session's network policy, so curl was used instead,
consistent with prior agents' experience in this effort), fetched
**twice**, using two distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
   GroundtruthResearch/1.0`
2. `Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/128.0`

Both fetches returned HTTP 200 and the identical byte count
(164,555 bytes). A line-level diff of the two saved HTML files showed
exactly two differing lines: the page's client-side debug-URL
timestamp (`facelets.ui.DebugOutput=...`) and the JSF ViewState
hidden-field token — both dynamic, per-request artifacts of the
page's server-rendering framework, not content differences. The
statutory text itself — every character of § 6409(a) through (d) and
its 2002 amendment note — was confirmed identical between the two
fetches.

The statute's own HTML wraps each subdivision in its own `<p>` tag
with no separating whitespace between adjacent tags, so a naive
strip-all-tags extraction joins "...is satisfied:(1) The decedent..."
with no space. This is exactly the kind of benign source-formatting
artifact this pipeline is meant to normalize rather than treat as a
defect: the extraction script inserts a single space at each
`</p><p...>` boundary (matching how the subdivisions actually read
as separate paragraphs on the rendered page) before substring-testing
each quote. No non-breaking-space or line-wrap artifacts were found
in this particular section's text.

All four citation quotes across the four authority clauses were then
programmatically re-verified — after merging into `data/clauses.json`,
not merely at drafting time — as exact substrings of both
independently-fetched, byte-identical copies of the statute's text
following only that whitespace normalization. No genuine defect
(a character present in a quote but absent from the source) was
found; no `gap`-field correction disclosure was needed for any quote.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge.
- No duplicate clause ids and no duplicate document ids in the full
  corpus (4,885 clauses; 605 documents).
- Every clause id in the new document's `clauseOrder`
  (`advancement_declaration`, `advancement_writing_requirement`,
  `advancement_valuation_timing`, `advancement_conclusive_written_valuation`,
  `advancement_recipient_predeceases`, `advancement_certification`)
  exists in `data/clauses.json`.
- Every authority clause has exactly the required keys
  (`id`, `title`, `kind`, `status`, `checkedDate`, `body`, `gap`,
  `citations`); every drafting clause has exactly `id`, `title`,
  `kind`, `body`; every citation object has exactly `case`, `cite`,
  `url`, `quote` — checked programmatically, no extra or missing keys.
- Every `{{...}}` placeholder used in a clause body
  (`decedentName`, `heirName`, `dateSigned`, `cityState`) matches a
  field declared in the new document's `fields` array; no unresolved
  or stray placeholders in any `title`, `gap`, or citation field.
- All four citation quotes independently confirmed as exact
  substrings (after the single documented whitespace normalization)
  of the statute's text in both independently-fetched copies.
- `heirName` is a new field id for this corpus (a `recipientName`
  field already exists elsewhere but describes a different concept in
  other documents); `decedentName`, `dateSigned`, and `cityState`
  reuse this corpus's established field-id and label conventions.

## Net changes

- New document: Advancements Against an Intestate Share (Prob. Code
  § 6409) — Information Sheet
  (`advancement_against_intestate_share_info_sheet`), 6 clauses (4
  authority + 2 drafting), in the Estate Planning category.
  One new field id (`heirName`); three reused field ids
  (`decedentName`, `dateSigned`, `cityState`).
- Corpus: 4,879 → 4,885 clauses; 604 → 605 documents.
- Part of wave 147 (Estate Planning slot of the four parallel,
  isolated-worktree additions restoring exact category balance).
