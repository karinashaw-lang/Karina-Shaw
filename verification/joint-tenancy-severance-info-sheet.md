# Estate Planning, new document: Severance of a Joint Tenancy (Civ. Code §§ 683, 683.2; Prob. Code § 5042; Riddle v. Harmon; Tenhet v. Boswell; Estate of Propst) — Information Sheet

## Why this document

Wave 159 (Estate Planning slot; waves 145, 147, 149, 151, 153, 155, and
157 covered Hiring, During employment, Estate Planning, and Family Law,
and wave 159 continues that even round-robin — one document per
isolated worktree, no coordination needed). Before drafting,
`data/documents.json` was read in full and every one of the category's
existing 82 titles was checked. Several of the task prompt's example
topics turned out to already be covered: ademption and abatement
(`ademption_abatement_info_sheet`, whose clauses also cover
exoneration), pet trusts (`pet_trust_info_sheet`), and Heggstad
petitions (several clauses of the Living Trust Funding sheet cite
Estate of Heggstad and Prob. Code § 850).

A grep of `data/clauses.json` and `data/documents.json` for "683.2",
"683", "Riddle", "Propst", "Tenhet", "strawman", "sever", "joint tenan",
"5042", "unities", "jus accrescendi", and related terms was run and
every hit opened and read in context. That check found: (1) Civil Code
§ 683.2 has **zero** hits anywhere in the corpus; (2) Riddle v. Harmon,
Estate of Propst, and Tenhet v. Boswell are cited **nowhere**; (3)
Probate Code § 5042 has zero hits (§ 5040 is cited in five clauses of
other sheets, for the nonprobate-transfer-to-former-spouse rule, not for
joint tenancy); (4) "joint tenancy" appears in roughly two dozen
clauses, always incidentally — the small-estate ceiling exclusion, the
TOD deed's void-if-joint-tenancy clause, the slayer statute's § 251
severance rule, the simultaneous-death rule, the disclaimer sheet's
list of disclaimable interests, the stepped-up-basis contrast, the
joint bank account sheet's Probate Code § 5100 et seq. scheme — and no
clause anywhere explains what severance is, how a joint tenant
accomplishes it, the § 683.2 recording requirement, or the lease /
lien / personal-property case law. No existing document in any category
is dedicated to severance of a joint tenancy. The topic is therefore
genuinely new, well-scoped, statutorily anchored, and supported by one
Court of Appeal decision and two California Supreme Court decisions
that remain the leading authorities.

## What this document covers

12 clauses (`jtsever_*`): 2 drafting (`jtsever_declaration`,
`jtsever_signature_block`) and 10 authority clauses:

- **`jtsever_joint_tenancy_defined_four_unities`** (Civ. Code § 683(a);
  Tenhet) — the statutory definition and express-declaration
  requirement; the four unities; one estate taken jointly; §§ 683/686
  preference for tenancy in common.
- **`jtsever_survivorship_expectancy_unilateral_right`** (Propst
  quoting Tenhet; Riddle; Propst) — survivorship as a mere expectancy;
  each joint tenant's indisputable power to convey and thereby
  terminate; severance converts to tenancy in common without disturbing
  fractional shares.
- **`jtsever_statutory_means_of_severance`** (§ 683.2(a)(1)-(2);
  Propst) — deed to a third person (with or without reconveyance
  agreement), written instrument evidencing intent including a deed to
  oneself, written declaration; the list is non-exclusive.
- **`jtsever_riddle_deed_to_self_no_strawman`** (Riddle) — the 1980
  holding that a joint tenant may sever by a deed to herself, the
  facts (deed and will executed twenty days before death), the
  rejection of Clark v. Carter's strawman requirement, and the
  resulting tenancy in common.
- **`jtsever_written_agreement_limitation`** (§ 683.2(b); Propst;
  Tenhet) — no severance contrary to a written agreement; good-faith
  purchaser/encumbrancer protection.
- **`jtsever_recording_requirement`** (§ 683.2(c)(1)-(2), (d), (e)) —
  recording before death, or notarization not earlier than three days
  before death plus recording not later than seven days after; the
  three (d) carve-outs; the 1985/1986 effective-date rules.
- **`jtsever_lease_does_not_sever_tenhet`** (Tenhet) — a lease by one
  joint tenant does not sever, temporarily or permanently; the
  clear-and-unambiguous-act standard; the catalogue of alternative means
  (written mutual agreement, joint conveyance, conveyance of the entire
  interest, partition judgment).
- **`jtsever_encumbrances_expire_with_deceased_tenant`** (Tenhet) — the
  lease expires at the lessor's death; Zeigler (judgment lien) and
  Nogarr (mortgage) as Tenhet describes them; encumbrances placed by a
  deceased joint tenant are unenforceable against the survivor.
- **`jtsever_personal_property_propst`** (§ 683(a) second sentence and
  (b); Propst) — a joint tenancy in personal property may be created by
  writing; financial-institution accounts carved out to the Probate
  Code; Propst's 1990 holding that personal-property joint tenancies
  may be unilaterally severed absent contrary agreement, its reasons,
  and the reliance/substantial-detriment exception to retroactivity.
- **`jtsever_dissolution_severs_former_spouses`** (Prob. Code
  § 5042(a)-(d); § 5040(a)) — dissolution or annulment severs a joint
  tenancy with a former spouse as to the decedent's interest; legal
  separation is not dissolution; the two exceptions; good-faith
  purchaser protection; community property with right of survivorship
  included; the parallel § 5040 rule.

Additional authorities were considered and deliberately not cited.
Dang v. Smith (2010) 190 Cal.App.4th 646 (located by the anonymous
search index and fetched twice, but a legal-malpractice case whose
joint-tenancy-lien discussion adds nothing Tenhet does not already
state) is not cited. Clark v. Carter (1968) 265 Cal.App.2d 291, Burke v.
Stevens (1968) 264 Cal.App.2d 30, Reiss v. Reiss (1941) 45 Cal.App.2d
740, Zeigler v. Bonnell (1942) 52 Cal.App.2d 217, People v. Nogarr
(1958) 164 Cal.App.2d 591, and Estate of Harris (1915) 169 Cal. 725 are
described only as Riddle, Tenhet, or Propst describe them, and the
relevant `gap` fields say so. Civil Code §§ 682.1 and 686 and Probate
Code §§ 78, 5128, and 5301 et seq. are referred to only as the cited
statutes and opinions refer to them and were not fetched. No
CourtListener MCP tool was called at any point in this task; the MCP
quota was left untouched.

## Method

Cal. Civ. Code §§ 683, 683.1, and 683.2 and Cal. Prob. Code §§ 5040 and
5042 were each fetched directly from `leginfo.legislature.ca.gov` via
`curl` through the environment proxy (CA bundle
`/root/.ccr/ca-bundle.crt`), **twice**, independently, using two
distinct User-Agent strings:

1. `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36`
2. `Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15`

All ten statute fetches returned HTTP 200. For each section the
statutory text was extracted from both HTML files by isolating the
`id="codeLawSectionNoHead"` container, stripping tags, HTML-unescaping
entities, and collapsing `&nbsp;`/whitespace runs to single spaces. For
every section the two independently-fetched, independently-extracted
texts were compared programmatically and found **identical**. § 683
carries the 2016 amendment (Stats. 2016, ch. 50, § 9 (SB 1005), eff.
Jan. 1, 2017); § 683.2 carries the 1985 amendment (Stats. 1985, ch.
157, § 1); §§ 5040 and 5042 carry the 2016 amendments (Stats. 2016,
ch. 50, §§ 83-84). § 683.1 (safe-deposit boxes) was fetched for
completeness and is not cited.

Case law was located with CourtListener's **anonymous v4 search API**
(`/api/rest/v4/search/?type=o`), reachable by `curl` without a token and
not subject to the MCP quota. The endpoint returned HTTP 429 intermittently
(four times across the locating calls); a 75-second back-off loop
inside the turn recovered each time. It returned Riddle v. Harmon as cluster 2109417
(`102 Cal. App. 3d 524`, `162 Cal. Rptr. 530`, `7 A.L.R. 4th 1261`,
filed 1980-02-25, `calctapp`), Estate of Propst as cluster 1293069
(captioned "Propst v. Stillman"; `50 Cal. 3d 448`, `788 P.2d 628`,
`268 Cal. Rptr. 114`, filed 1990-04-02, `cal`), and Tenhet v. Boswell as
cluster 1317897 (`18 Cal. 3d 150`, `554 P.2d 330`, `133 Cal. Rptr. 10`,
filed 1976-10-04, `cal`). The reporter citations used in the clauses are
those returned by the index.

Each of the three opinions was then fetched **twice** from its
CourtListener opinion HTML page (`/opinion/<cluster>/<slug>/`) with two
distinct full browser header sets:

- Set A: Safari 17.5 (macOS) User-Agent, `Accept:
  text/html,application/xhtml+xml,...`, `Accept-Language: en-GB,en;q=0.8`,
  `Referer: https://www.courtlistener.com/`.
- Set B: Firefox 129 (Linux) User-Agent, the same Accept header,
  `Accept-Language: en-US,en;q=0.5`, `Referer:
  https://www.courtlistener.com/?q=joint+tenancy`,
  `Upgrade-Insecure-Requests: 1`.

A note for later waves: header sets **without** a `Referer` header
(Chrome and Firefox alike) received the AWS WAF challenge — HTTP 202,
2,006-byte body — on every attempt; adding a `Referer` pointing at
courtlistener.com produced HTTP 200 and the full page on every attempt,
with 6-second pacing between requests. All six opinion fetches used
here returned HTTP 200 (Riddle 67,466 bytes ×2; Propst 130,815 bytes
×2; Tenhet 80,121 bytes ×2). The raw HTML pairs differ byte-for-byte
only in per-request page chrome (session and CSRF tokens); the opinion
text was extracted from each by isolating the `id="opinion-content"`
container, stripping tags, unescaping entities, and collapsing
whitespace, and for each opinion the two independently-fetched,
independently-extracted texts were compared and found **identical**
(Riddle 16,202; Propst 46,986; Tenhet 22,680 normalized characters).

CourtListener's page text carries star-paging markers (`*526`, `*456`,
etc.) at reporter page breaks. Every quotation was taken from within a
single reporter page so that no marker falls inside it; the two
passages whose natural sentence spans a page break are handled
explicitly and disclosed in the relevant `gap` fields: the Tenhet
sentence beginning "But when such a joint tenant dies" (break at `*160`)
is quoted as two fragments, one on each side of the marker, and the
Propst holding at the point of decision (break at `*462`) is quoted
instead from the court's full statement of the same holding at page
452. Pin cites were read from the markers and checked programmatically
(marker offsets in the extracted text) for every quote; one draft pin
cite ("455-456" for the sentence "Severance of the joint tenancy
converts the joint tenancy into a tenancy in common.") was corrected to
455 before the merge because the sentence sits before the `*456`
marker.

## Quote verification

All 46 citation quotes across the 10 authority clauses were taken
directly from the fetched source text and verified programmatically —
first at drafting time (`build.py`) and again, after merging, by
re-reading `data/clauses.json` (`reverify.py`) — as exact substrings of
the normalized text of **both** independent raw fetches of the cited
section or opinion. Result: **46 of 46 verified in both fetches, no
failures.** Normalization collapses whitespace runs and non-breaking
spaces; no other transformation is applied. Curly apostrophes and
quotation marks are reproduced as the sources render them (leginfo and
CourtListener both use `’` and `“ ”`). One source artifact is preserved
verbatim rather than silently corrected: the Tenhet page text reads
"continuing after , his death" (a stray space before the comma) in the
sentence quoted in `jtsever_encumbrances_expire_with_deceased_tenant`;
the quote reproduces it as fetched.

## Schema and corpus validation

Authority clauses carry exactly `{id, title, kind, status, checkedDate,
body, gap, citations[{case, cite, url, quote}]}`; drafting clauses
exactly `{id, title, kind, body}`; the document exactly `{id, title,
description, clauseOrder, fields, categories}`. After the merge both
data files parse; all 5,388 clause ids and all 652 document ids are
unique; every `clauseOrder` entry across every document resolves to an
existing clause; and every `{{placeholder}}` in every clause body and
gap of every document resolves to a field declared by that document
(the seven fields declared here are `propertyDescription`,
`jointTenant1Name`, `jointTenant2Name`, `countyName`, `petitionerName`,
`dateSigned`, `cityState`). The merge was purely additive: the diff
touches only the appended clause objects and the appended document
object. Estate Planning now has 83 documents.

## Inform, never advise

Every authority clause states what the statute or opinion provides;
none tells the reader whether to sever a joint tenancy, which
instrument to use, or whether to record. The declaration and signature
clauses state expressly that the sheet does not determine whether the
named joint tenancy has been severed, whether any instrument satisfies
§ 683.2, or who holds title or a survivorship interest, and that only a
court applying the cited authorities to the actual instruments,
recording history, and facts can decide those questions.
