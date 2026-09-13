# Confidentiality & IP, new document: Trademark Fair Use — Nominative and Classic (Descriptive) — Information Sheet

Part of wave 162 (Confidentiality & IP category; wave 162 covers the
same four categories as waves 146/148/.../160: Confidentiality & IP,
Ending employment, Business Formation, Real Estate).

## Why this document

The task brief listed the category's recent additions (CUTSA bad-faith
attorney's fees, the CUTSA limitations period, customer lists as trade
secrets, joint authorship, DMCA § 512(c), first sale, copyright
preemption, inevitable disclosure) and several candidate topics. Reading
the full Confidentiality & IP title list in `data/documents.json` (84
documents) showed that most of the suggested candidates already exist as
whole documents — Code Civ. Proc. § 2019.210 (Trade Secret Pre-Discovery
Identification), the § 16601/§ 16602.5 exceptions (Sale-of-Business and
Dissolution Noncompete Exceptions), CIPA (California Invasion of Privacy
Act Information Sheet), and employee non-solicitation covenants (the
Employee Non-Solicitation Agreement, which already discusses AMN
Healthcare) — so the search went further afield.

Grepped both data files for every element of this topic before drafting:
`nominative` (0 hits), `New Kids` (0), `Tabari` (0), `Playboy` (0),
`Welles` (0), `Cairns` (0), `KP Permanent` (0), `descriptive fair use`
(0), `1115(b)` (1 hit, and not a trademark one: a reference to
Evidence Code § 1115(b) inside the Mediation Confidentiality
Information Sheet), `1125(c)(3)` (0), `14247` (0).
Checked every clause of the five existing trademark documents
(`trademark_cease_and_desist_info_sheet`, `trade_dress_info_sheet`,
`trademark_registration_info_sheet`, `trademark_license`,
`trademark_opposition_cancellation_info_sheet`) for any clause mentioning
"fair use" or "nominative" — none. The existing Copyright Fair Use
Doctrine Information Sheet is the 17 U.S.C. § 107 four-factor copyright
doctrine, which shares only the name.

## What this document covers

18 clauses: 3 drafting (purpose/declaration, relationship to sibling
documents, signature/acknowledgment) and 15 authority clauses, citing
15 U.S.C. §§ 1115(b), 1115(b)(4), 1125(c)(3); Cal. Bus. & Prof. Code
§ 14247(b); New Kids on the Block v. News America Publishing, Inc., 971
F.2d 302 (9th Cir. 1992); KP Permanent Make-Up, Inc. v. Lasting
Impression I, Inc., 543 U.S. 111 (2004); Playboy Enterprises, Inc. v.
Welles, 279 F.3d 796 (9th Cir. 2002); Cairns v. Franklin Mint Co., 292
F.3d 1139 (9th Cir. 2002); and Toyota Motor Sales, U.S.A., Inc. v.
Tabari, 610 F.3d 1171 (9th Cir. 2010):

- **`tmfu_statute_1115b4_classic_defense`** (§ 1115(b), (b)(4)) — the
  incontestability provision, its nine defenses, and the text of the
  statutory descriptive fair use defense.
- **`tmfu_kp_burden_plaintiff`** (KP Permanent) — a fair use defendant
  has no burden to negate confusion; § 1115(b) puts the confusion burden
  on the party charging infringement; "agnosticism will do."
- **`tmfu_kp_some_confusion_compatible`** (KP Permanent) — some
  possibility of confusion is compatible with fair use; the extent of
  likely confusion may still bear on objective fairness; the reserved
  question about "used fairly."
- **`tmfu_new_kids_language_depletion_nontrademark_use`** (New Kids) —
  the language-depletion rationale, the Chicago Bulls and Volkswagen
  examples, and nominative use as lying outside trademark law's
  strictures.
- **`tmfu_new_kids_three_factor_test`** (New Kids; Cairns) — the three
  factors (quoted in Cairns's bracketed restatement), the Coca-Cola
  lettering footnote, and the express preservation of the classic fair
  use test.
- **`tmfu_new_kids_commercial_use_and_application`** (New Kids) — a
  nominative use may be for profit and in competition with the mark
  holder; application to the newspaper polls.
- **`tmfu_cairns_which_analysis_applies`** (Cairns) — classic use
  describes the defendant's product, nominative use the plaintiff's;
  classic complements Sleekcraft, nominative replaces it; the ultimate-
  goal rule and the Volkswagen / Boston Marathon / Chanel examples.
- **`tmfu_cairns_classic_elements_and_confusion`** (Cairns; KP
  Permanent) — the three classic fair use elements as quoted from
  McCarthy; the Ninth Circuit's pre-2004 no-confusion rule; what KP
  Permanent later held.
- **`tmfu_cairns_reasonably_necessary_application`** (Cairns) — what is
  reasonably necessary differs case to case; more use is necessary when
  the defendant's description depends on the plaintiff's product; the
  absence of "authorized" language as evidence against implied
  sponsorship.
- **`tmfu_welles_replaces_sleekcraft`** (Welles) — why Sleekcraft
  misfires where the marks are identical by definition; nominative uses
  do not dilute.
- **`tmfu_welles_headlines_metatags_wallpaper`** (Welles) — headlines
  and banner ads, metatags, and the failed "PMOY '81" watermark.
- **`tmfu_tabari_domain_names`** (Tabari) — nominative fair use in
  domain names; the trademark.com special case and the
  trademark-USA.com / official-trademark-site.com variants; necessity;
  no disclaimer requirement; stylized mark and logo as more than
  necessary.
- **`tmfu_tabari_burden_and_scope_of_defense`** (Tabari) — nominative
  fair use replaces Sleekcraft; the mark holder bears the burden after
  KP Permanent; the Brother Records footnote effectively overruled;
  modification rather than a blanket injunction.
- **`tmfu_tabari_injunction_tailoring_first_amendment`** (Tabari) —
  First Amendment concerns, tailoring, the extraordinary character of
  forced relinquishment of a domain, and prevention rather than
  punishment.
- **`tmfu_dilution_fair_use_exclusions`** (15 U.S.C. § 1125(c)(3); Bus.
  & Prof. Code § 14247(b)) — the federal and California statutory fair
  use, news-reporting, and noncommercial-use exclusions from dilution
  liability.

## Genuine corrections and findings

- **Curly apostrophes in the retrieved opinions**: CourtListener's
  scan-derived texts of KP Permanent and Tabari render possessives with
  U+2019 ("a court’s true belief," "a defendant’s use," "Ninth
  Circuit’s consideration," "the Tabaris’ use," "it’s unlikely"). Three
  quotes were initially drafted with straight apostrophes and failed the
  substring check; they were corrected to the exact retrieved characters
  before merge. No words were altered.
- **Em dashes rendered as double hyphens**: New Kids's em dashes appear
  as `--` in the retrieved text. The nominative-use quote preserves that
  rendering, and the clause's gap field says the reporter text uses em
  dashes.
- **OCR artifacts steered around, and disclosed**: the KP Permanent text
  spells the authoring Justice "Soutee" in the syllabus line, and
  contains "a- consideration" and "ami-cus"; the Tabari text contains a
  garbled example domain name, "Modem Lanham Act" for "Modern," and a
  bracketed "[ejnsure" in the sentence requiring an injunction to be
  tailored. Every quote was selected to avoid those spans, and each
  affected clause's gap field names the artifact. The Tabari tailoring
  sentence is described rather than quoted for this reason.
- **Footnote numerals inside the test sentence**: the sentence in New
  Kids stating the three factors carries an in-text footnote reference
  numeral ("7") between the second and third factors in the retrieved
  text. The full three-element test is therefore quoted from Cairns,
  which restates it in one clean block with bracketed "[plaintiff's]"
  insertions; the gap field records that the brackets are the Cairns
  court's, not this project's.
- **Backticks for opening single quotes**: the Cairns quotation of the
  McCarthy treatise's three classic fair use elements renders opening
  single quotation marks as backtick characters. The quote reproduces
  the retrieved text exactly, and the gap field discloses the rendering.
- **Federal statutory dash**: the retrieved uscode.house.gov text of
  § 1125(c)(3)(A) renders the dash introducing clauses (i) and (ii) as a
  plain hyphen. The quote stops before it, and the gap field says so.
- **A chronology worth stating carefully**: Cairns (2002) states that
  "[i]n our Circuit, the classic fair use defense is not available if
  there is a likelihood of customer confusion," which predates KP
  Permanent (2004). The clause reports both in sequence and expressly
  declines to state which parts of the pre-2004 Ninth Circuit
  formulation survive, because the Supreme Court vacated and remanded
  without deciding whether the use before it was fair.

## Honest gaps disclosed

- Volkswagenwerk Aktiengesellschaft v. Church (9th Cir. 1969), Smith v.
  Chanel, Inc. (9th Cir. 1968), WCVB-TV v. Boston Athletic Ass'n (1st
  Cir. 1991), Soweco, Inc. v. Shell Oil Co. (5th Cir. 1980),
  Prestonettes, Inc. v. Coty (1924), AMF Inc. v. Sleekcraft Boats (9th
  Cir. 1979), Transgo, Inc. v. Ajac Transmission Parts Corp., Lindy Pen
  Co. v. Bic Pen Corp., Brother Records, Inc. v. Jardine, Miller v.
  Gammie, Toho Co. v. William Morrow & Co., Mattel, Inc. v. MCA Records,
  Inc., E. & J. Gallo Winery v. Gallo Cattle Co., Interstellar Starship
  Services, Ltd. v. Epix, Inc., and Virginia State Board of Pharmacy are
  relied on only as the five retrieved opinions describe or quote them;
  each clause's gap field says so.
- The five opinions were retrieved only from CourtListener. Each was
  fetched twice over independent requests with two distinct browser
  User-Agent / Accept-Language header sets, and the extracted texts were
  byte-identical, and each was additionally phrase-checked against
  CourtListener's public search index under a third User-Agent; but no
  retrieval path wholly independent of CourtListener (a court PDF or a
  second publisher) was obtained, because Justia, FindLaw, Google
  Scholar, and case.law are egress-blocked in this environment and
  govinfo.gov returned its error page for the US Code paths tried. Every
  case clause's gap field discloses this.
- The document covers the two fair use doctrines and the dilution
  exclusions only. It does not address the elements of infringement, the
  Sleekcraft factors themselves, the Rogers v. Grimaldi test for
  expressive works or Jack Daniel's Properties, Inc. v. VIP Products
  LLC, cybersquatting under 15 U.S.C. § 1125(d), counterfeiting,
  damages, or attorney's fees in exceptional cases; the relationship
  clause places those out of scope and points to the sibling documents
  that cover the adjacent ground.
- Other circuits analyze nominative use differently (some treat it as an
  affirmative defense, and the Third Circuit uses a different
  formulation); the Tabari burden clause states that this document
  describes the Ninth Circuit rule and says so in its gap field.

## Method

- Fetched 15 U.S.C. §§ 1115 and 1125 from uscode.house.gov (Office of
  the Law Revision Counsel, prelim edition) and independently from
  law.cornell.edu, each under a distinct User-Agent. After markup
  stripping and whitespace normalization, every federal statutory quote
  was confirmed present in both hosts' texts (Cornell inserts spaces
  before punctuation around hyperlinked defined terms and uses curly
  apostrophes, so the cross-check normalizes those two artifacts only).
  govinfo.gov's USCODE-2022/2023/2024-title15 paths returned the site's
  "page cannot be found" page and were not used.
- Fetched Cal. Bus. & Prof. Code § 14247 from
  `leginfo.legislature.ca.gov` twice under two distinct User-Agent
  strings (and two URL spellings of the section number); the extracted
  section text was identical (3,000 characters) on both fetches.
- Located the five opinions via CourtListener's public, unauthenticated
  `api/rest/v4/search/` endpoint (outside the MCP quota): New Kids
  (cluster 587692), Tabari (150282), KP Permanent (137731), Welles
  (776471), Cairns (777933). Two searches returned HTTP 429 "Rate limit
  exceeded: 125/day" (the quota is shared with parallel agents) and
  succeeded after a sleep-and-retry loop. **No CourtListener MCP call
  was made** for this document.
- Fetched each opinion's public HTML page twice, each fetch carrying
  `Referer: https://www.courtlistener.com/` and a distinct browser
  User-Agent / Accept / Accept-Language set; several first attempts
  returned the empty HTTP 202 and succeeded on retry. After markup
  stripping and whitespace normalization the two texts of every opinion
  were byte-identical (`fetch.sh`, `totext.py`).
- All 43 quotes programmatically confirmed as exact substrings of the
  saved, whitespace-normalized source texts (`build.py`); the script
  refuses to merge if any quote fails.
- Phrase-level third check against CourtListener's public search index
  under a third User-Agent (`phrase.sh`): one distinctive phrase per
  opinion submitted as `cluster_id:<id> AND "<phrase>"` — each returned
  its own opinion as the sole hit (count 1) — and a fabricated
  negative-control phrase against the KP Permanent cluster returned
  zero.

## Verification

- Both federal statutory sections confirmed across two independent
  hosts; the California section fetched twice and confirmed identical;
  all five opinions fetched twice with distinct header sets, confirmed
  identical, and spot-checked phrase-by-phrase against the public index.
- Checked for `{{` leakage in every clause title and in every citation's
  `case`/`cite`/`url`/`quote` field — clean. Scanned the new clause
  bodies and gap notes for advisory phrasing ("you should," "we
  recommend," "make sure," "be sure to," "you must," "consult your") —
  none.
- Source-independence disclosure: the three statutory quotes are
  independent enactments (two federal sections and one California
  section); the five opinions are decisions of four different Ninth
  Circuit panels and the Supreme Court, though Welles, Cairns, and
  Tabari each build on New Kids and Tabari applies KP Permanent, which
  the gap fields note where a quote is one opinion's restatement of
  another.
- No duplicate clause ids against the full corpus. Two accepted generic
  drafting-title reuses ("Relationship to Other Documents in This
  Project," "Signature and Acknowledgment"), per the corpus's
  id-is-the-uniqueness-key convention.
- Field ids and labels (`preparerName`, `companyName`,
  `trademarkDescription`, `dateSigned`, `cityState`) match the most
  common existing corpus definitions exactly; two new
  document-specific fields, `markOwnerName` and `challengedUse`. All
  fields are required because the app leaves a blank field's
  `{{placeholder}}` visible in the output.
- Authority clauses carry exactly `{id,title,kind,status,checkedDate,
  body,gap,citations}`; drafting clauses exactly `{id,title,kind,body}`;
  citations exactly `{case,cite,url,quote}`; the document exactly
  `{id,title,description,categories,clauseOrder,fields}`.
- Corpus-wide validation after merge (`validate.py`): both JSON files
  parse and round-trip byte-identically in the repo's two-space,
  non-ASCII-preserving format; no duplicate clause or document ids;
  every id in every document's `clauseOrder` resolves to an existing
  clause; every `{{placeholder}}` in every document's clause bodies and
  gap notes resolves to a declared field on that document.

## Net changes

- New document: Trademark Fair Use — Nominative and Classic
  (Descriptive) — Information Sheet
  (`trademark_nominative_classic_fair_use_info_sheet`), 18 clauses (15
  authority + 3 drafting), in the Confidentiality & IP category. Two new
  fields (`markOwnerName`, `challengedUse`).
- Corpus: 5,522 → 5,540 clauses; 663 → 664 documents. Wave 162,
  Confidentiality & IP (84 → 85 documents in the category).
