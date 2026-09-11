# Estate Planning, new document: Lapsed Gifts and the Anti-Lapse Statute (Prob. Code §§ 21109-21111; In re Tung Trust; Estate of Stockird) — Information Sheet

## Why this document

Wave 157 (Estate Planning slot; waves 145, 147, 149, 151, 153, and 155
covered Hiring, During employment, Estate Planning, and Family Law, and
wave 157 continues that even round-robin — one document per isolated
worktree, no coordination needed). Before drafting, `data/documents.json`
was read in full and every one of the category's existing 81 titles was
checked. Most of the task prompt's example topics turned out to already
be covered: the § 21380 presumption
(`disqualified_transferee_donative_transfer_presumption_info_sheet`),
trust modification/termination by consent
(`trust_modification_termination_beneficiary_consent_info_sheet`), the
omitted spouse and child (`omitted_spouse_child_info_sheet`), the slayer
rule (`slayer_statute_disqualification_info_sheet`), simultaneous death
(`california_uniform_simultaneous_death_act_info_sheet`), and
testamentary capacity (a clause of the Grounds to Contest sheet).

A grep of `data/clauses.json` and `data/documents.json` for "antilapse",
"anti-lapse", "lapse", "21109", "21110", "21111", "21112", "kindred",
"Tung", "Stockird", "Mooney", "Burkett", "no residue of a residue", and
related terms was run and every hit opened and read in context. That
check found: (1) "antilapse" has **zero** hits and "anti-lapse" appears
in only four clauses, each in passing; (2) § 21110 is quoted or
referenced in exactly three existing clauses — the Transfer-on-Death
Deed's `tod_beneficiary_predecease`, the slayer sheet's
`slayerstatute_predecease_effect`, and the disclaimer sheet's
`disclaimer_effect` — each for the bare proposition that a person
treated as having predeceased triggers the substitute-gift mechanism,
and none explains the statute, its kindred limitation, the
contrary-intention/survival-requirement rule, or § 21111; (3) § 21109,
§ 21111, and § 21112 have no substantive coverage anywhere; (4) neither
In re Tung Trust (2026) nor Estate of Stockird (2018) is cited anywhere
in the corpus. No existing document in any category is dedicated to
lapse or the anti-lapse statute. The topic is therefore genuinely new,
well-scoped, statutorily anchored, and supported by a published Court of
Appeal decision issued three months before this sheet was prepared.

## What this document covers

12 clauses (`antilapse_*`): 2 drafting (`antilapse_declaration`,
`antilapse_signature_block`) and 10 authority clauses:

- **`antilapse_survival_default_rule`** (§ 21109(a)-(b); Tung) — a
  transferee who fails to survive the transferor or an
  instrument-required future time takes nothing; the
  clear-and-convincing-evidence rule; Tung's observation that the
  120-hour rules for intestacy and statutory wills have no counterpart
  for trusts and non-statutory wills.
- **`antilapse_applies_to_wills_trusts_all_instruments`** (§§ 21101,
  21102; Tung fn. 10) — Part 1 of Division 11 applies to wills, trusts,
  deeds, and other instruments; the transferor's expressed intention
  controls; the anti-lapse statute applies the same way to wills and
  trusts.
- **`antilapse_substitute_gift_to_issue`** (§ 21110(a); Tung quoting
  Mooney) — the substitute gift to issue by representation under § 240;
  class gifts; the statute's purpose.
- **`antilapse_kindred_limitation`** (§ 21110(c); Stockird) — only
  kindred of the transferor or of a surviving, deceased, or former
  spouse, never the spouse; "kindred" means blood relatives and those in
  § 21115; an aunt by marriage was not kindred.
- **`antilapse_contrary_intention_and_survival_requirement`**
  (§ 21110(b); Tung quoting Salisbury and Burkett) — contrary intention,
  substitute disposition, and the two statutory survival requirements
  that constitute a contrary intention; the "sufficient clarity" /
  "reasonable degree of certainty" standard; Burkett's sixty-day clause.
- **`antilapse_tung_predecease_definition_not_survival_requirement`**
  (Tung) — the 2026 holding that a clause merely defining who is deemed
  to have predeceased the settlor is not a survival requirement and
  does not displace the statute.
- **`antilapse_whole_instrument_and_presumed_knowledge`** (Tung, quoting
  §§ 21120-21121 and Salisbury) — holistic reading, preference against
  intestacy, the transferor's presumed knowledge of the statute, other
  provisions as evidence of overall intent, de novo review.
- **`antilapse_failed_transfer_destinations`** (§ 21111(a), (c), (d);
  Stockird; Tung) — alternative disposition, then residue, then the
  estate; "all my estate" is residuary.
- **`antilapse_residue_of_residue_rule`** (§ 21111(b); Stockird) — a
  failed share of a residuary gift to several persons passes to the
  other residuary beneficiaries; the kindred definition of § 21110(c)
  does not govern § 21111(b); abolition of the no-residue-of-a-residue
  rule.
- **`antilapse_words_with_or_without_issue`** (§ 21112) — construction
  of a condition referring to death with or without issue.

Additional authorities were considered and deliberately not fetched.
Estate of Mooney (2008) 169 Cal.App.4th 654, Burkett v. Capovilla (2003)
112 Cal.App.4th 1444, Estate of Salisbury (1978) 76 Cal.App.3d 635, and
Estate of Friedman (1961) 198 Cal.App.2d 434 are described only as the
Tung court quoted or characterized them, and the relevant `gap` fields
say so. Estate of Dye (2001) 92 Cal.App.4th 966, Estate of Tolman (2010)
181 Cal.App.4th 299, and Estate of Lensch (2009) 177 Cal.App.4th 667
were located by the CourtListener search feed but not fetched and are
not cited. The reason in every case is the same: the CourtListener API
daily quota (125 calls/day, shared across the parallel agents in this
wave) was already exhausted when this task began — the first `search`
call and every `read_document` call returned HTTP 429 with roughly
72 minutes remaining before reset — and the anonymous-index second
channel described below is a phrase-verification tool, not a source of
full opinion text.

## Method

Cal. Prob. Code §§ 21101, 21102, 21109, 21110, 21111, and 21112 were
each fetched directly from `leginfo.legislature.ca.gov` via `curl`
through the environment proxy, **twice**, independently, using two
distinct User-Agent strings:

1. `Mozilla/5.0 (X11; Linux x86_64) Groundtruth-verifier/1.0`
2. `curl/8.5.0 (second-path fetch; wave157)`

All twelve statute fetches returned HTTP 200. For each section the
statutory text was extracted from both HTML files by isolating the
`id="codeLawSectionNoHead"` container, stripping tags, HTML-unescaping
entities, and collapsing `&nbsp;`/whitespace runs to single spaces. For
every section the two independently-fetched, independently-extracted
texts were compared programmatically and found **identical**. The
§ 21110 text carries the 2018 amendment (Stats. 2018, ch. 71 (AB 1960),
eff. Jan. 1, 2019); §§ 21101, 21102, 21109, 21111, and 21112 carry the
2002 amendments (Stats. 2002, ch. 138).

Case law was located with CourtListener's public Atom search feed
(`/feed/search/?q="21110" AND (antilapse OR "anti-lapse")&type=o`,
California Supreme Court and Court of Appeal, published only), which is
reachable by `curl` and not subject to the API quota. It returned eleven
entries (Tung Trust 2026; Stockird 2019 and 2018, plus a CAP duplicate;
Tolman/Tomlinson 2010; Lensch 2009; Mooney/Scully 2008; Burkett 2003;
Dye 2001). The two opinions cited were then obtained by two independent
full-text paths each:

- **In re Tung Trust** (CourtListener cluster 10872732; Cal. Ct. App.,
  2d Dist., Div. 7, No. B343197, filed June 9, 2026, certified for
  publication): path A, CourtListener's static storage bucket
  (`storage.courtlistener.com/pdf/2026/06/09/in_re_tung_trust.pdf`,
  185,186 bytes); path B, the California Courts published-opinion site
  (`courts.ca.gov/opinions/documents/B343197.PDF`, 185,186 bytes), found
  via the site's "Published/Citable Opinions" listing (page 3). Both
  PDFs were text-extracted with pdfplumber and compared after whitespace
  normalization: **identical** (32,662 normalized characters, 21 pages).
- **Estate of Stockird** (CourtListener cluster 4581008; Cal. Ct. App.,
  1st Dist., Div. 1, No. A152538, opinion filed Dec. 19, 2018, modified
  Jan. 11, 2019, no change in judgment): path A, the storage bucket
  (`pdf/2019/01/11/estate_of_stockird.pdf`, 128,825 bytes — the
  modification order with the unmodified opinion attached — and
  `pdf/2018/12/20/estate_of_stockird.pdf`, 166,994 bytes, the original);
  path B, the California Courts opinion archive
  (`courts.ca.gov/opinions/archive/A152538M.PDF` and `A152538.PDF`).
  Each pair was text-extracted and compared after normalization:
  **identical** (23,411 and 20,982 normalized characters respectively).

The direct CourtListener opinion HTML pages return an AWS WAF challenge
(HTTP 202, empty body, `x-amzn-waf-action: challenge`) to `curl`; the
REST `clusters`/`opinions` endpoints return HTTP 401 without a token;
Justia returns 403 and Leagle, AnyLaw, and Casemine fail at the egress
proxy — so the storage bucket and the state courts' own PDFs were the
two paths used. (The bucket's S3 listing ignores `prefix` behind
CloudFront, so keys were constructed from CourtListener's
`pdf/YYYY/MM/DD/<case_name_slug>.pdf` convention and fetched directly;
Tolman, Lensch, and Mooney have no PDF under that convention, which is
consistent with their pre-scraper Harvard/Lawbox provenance.)

Reporter citations were confirmed through the CourtListener
**anonymous v4 search API** (`/api/rest/v4/search/?type=o`), reachable by
`curl` without a token and served from the separate Elasticsearch
index, paced at 13 seconds with a 60-second back-off on HTTP 429 (one
429 was encountered and retried successfully). `cluster_id:6240139` (the
CAP record of Stockird, listed there under the caption "Estate v.
Aguirre" and mis-labelled `calctapp5d`; the opinion itself is First
District, Division One) returned citations `30 Cal. App. 5th 558` and
`241 Cal. Rptr. 3d 713`; the `calctapp` records 4575813 and 4581008
carry no citation. A from-memory draft citation of "30 Cal.App.5th 796"
was **wrong** and was corrected to 558 before the merge. `cluster_id:
10872732` confirmed Tung carries no reporter citation yet, so it is
cited by docket number and filing date. `cluster_id:2248307` and
`2266004` confirmed Mooney at 169 Cal.App.4th 654 and Burkett at 112
Cal.App.4th 1444.

The same index was used, as a third channel, to confirm that the two
Mooney phrases and the one Burkett phrase this sheet quotes *through*
Tung are verbatim in those opinions: a cluster-restricted exact-phrase
query for each returned exactly one result — the cited opinion — with
the phrase highlighted (`anon_mooney_phrase.json`,
`anon_mooney_phrase2.json`, `anon_burkett_phrase.json` in the working
scratch directory). The Salisbury and Friedman quotations relayed by
Tung were not so checked and are disclosed in the `gap` fields as
described only as Tung quotes them.

## Quote verification

All 47 citation quotes across the 10 authority clauses were taken
directly from the fetched source text and verified programmatically —
first at drafting time (`build.py`) and again, after merging, by
re-reading `data/clauses.json` (`merge_and_validate.py`) — as exact
substrings of the normalized text of **both** independent fetches of
the cited section or opinion. Result: **47 of 47 verified in both
fetches, no failures.** Normalization collapses whitespace runs and
non-breaking spaces and joins a word broken at a line end after a
hyphen (the PDF text renders "non-\nstatutory" and "Lin-\nChuan"); no
other transformation is applied, and every such join is disclosed in
the clause's `gap` field.

Quote-text decisions made to keep every quote character-exact against
the source, each disclosed in the clause's `gap` field:

- `antilapse_residue_of_residue_rule`: Stockird's concluding sentence is
  interrupted in the reported text by the page marker "9" between "we"
  and "conclude"; the quote begins at "the 35 percent lapsed gift" so
  that it is a contiguous substring.
- `antilapse_kindred_limitation` and `antilapse_residue_of_residue_rule`:
  two Stockird passages are quoted in the form fixed by the January 11,
  2019 modification order ("issue" in place of "heirs"); the order's
  text is part of the fetched file, and the `gap` fields say which
  reading is quoted.
- `antilapse_tung_predecease_definition_not_survival_requirement`: the
  trust's survivor clause is paraphrased rather than quoted because the
  opinion's own rendering spells "settler"; the `gap` also notes the
  opinion's inconsistent "112"/"122 Cal.App.4th" pin cites for Burkett
  and that the decision was under four months old with no subsequent
  history checked.
- Two Tung quotations are parenthetical case descriptions and one is a
  bracketed parenthetical; the brackets and internal quotation marks are
  the opinion's own, as the `gap` fields state.

No character of any quote was altered from the source text; no
`gap`-field correction of a quote's text was needed. Several `gap`
fields disclose scope limits (§§ 240, 6211, 6403, 81.5, 21114, 21115,
21120, and 21121 described or quoted only as the opinions describe
them; Mooney, Burkett, Salisbury, and Friedman described only as Tung
quotes them), which are scope disclosures, not quote corrections.

## Verification

- Both `data/clauses.json` and `data/documents.json` parse as valid
  JSON after the merge; the diff is additions only (482 insertions, 0
  deletions: 404 in `clauses.json`, 78 in `documents.json`).
- No duplicate clause ids and no duplicate document ids in the full
  corpus (5,297 clauses; 644 documents).
- Every clause id in the new document's `clauseOrder` (all 12
  `antilapse_*` ids, in order) exists in `data/clauses.json`, checked
  both for this document and by re-checking every `clauseOrder`
  reference in every document in the corpus (0 missing refs).
- Every authority clause has exactly the required keys (`id`, `title`,
  `kind`, `status`, `checkedDate`, `body`, `gap`, `citations`); every
  drafting clause has exactly `id`, `title`, `kind`, `body`; every
  citation object has exactly `case`, `cite`, `url`, `quote`; the
  document has exactly `id`, `title`, `description`, `categories`,
  `clauseOrder`, `fields` — checked programmatically.
- Every `{{...}}` placeholder used in any clause, corpus-wide, matches
  a field id declared in its document's `fields` array (0 unresolved).
- Field ids used: `decedentName`, `petitionerName`, `dateSigned`, and
  `cityState` reuse this corpus's established Estate Planning
  conventions. Five field ids are specific to this sheet's subject —
  `instrumentDescription` (type and date of the will or trust),
  `predeceasedBeneficiaryName`, `relationshipToDecedent`,
  `beneficiaryDateOfDeath`, and `decedentDateOfDeath` — because the
  topic turns on the identity and relationship of the beneficiary who
  died first and on the order of the two deaths.
- Inform-never-advise: every clause states what the statutes and the
  Tung and Stockird opinions provide; none instructs the reader what to
  do about a particular instrument or lapsed gift. The declaration
  clause says so expressly.

## Net changes

- New document: Lapsed Gifts and the Anti-Lapse Statute (Prob. Code
  §§ 21109-21111; In re Tung Trust; Estate of Stockird) — Information
  Sheet (`antilapse_statute_lapsed_gifts_info_sheet`), 12 clauses (10
  authority + 2 drafting), in the Estate Planning category.
- Five new field ids (`instrumentDescription`,
  `predeceasedBeneficiaryName`, `relationshipToDecedent`,
  `beneficiaryDateOfDeath`, `decedentDateOfDeath`).
- Corpus: 5,285 → 5,297 clauses; 643 → 644 documents; Estate Planning
  category: 81 → 82 documents.
- Part of wave 157 (Estate Planning slot of the four parallel,
  isolated-worktree additions continuing the even round-robin begun in
  waves 145/147/149/151/153/155).
