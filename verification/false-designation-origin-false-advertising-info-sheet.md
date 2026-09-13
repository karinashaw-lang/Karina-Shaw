# Confidentiality & IP, new document: False Designation of Origin and False Advertising Under Lanham Act § 43(a) (15 U.S.C. § 1125(a)) — Information Sheet

Part of wave 172 (Confidentiality & IP category; wave 172 covers the
same four categories as waves 146/148/.../170: Confidentiality & IP,
Ending employment, Business Formation, Real Estate).

## Why this document

Read the full Confidentiality & IP title list in `data/documents.json`
(89 documents) before drafting. Every candidate named in the task brief
already exists in the corpus: Code Civ. Proc. § 2019.210
(`trade_secret_pre_discovery_identification_info_sheet`), the
§ 16601/§ 16602.5 exceptions
(`sale_of_business_dissolution_noncompete_exceptions_info_sheet`),
employee non-solicitation after AMN Healthcare (inside
`employee_nonsolicit`; "AMN Healthcare" 7 hits in `data/clauses.json`),
the CUTSA injunction and reasonable-royalty remedies
(`trade_secret_injunctive_relief_standards_info_sheet`; "3426.3" 10
hits), CIPA (`california_invasion_of_privacy_act_info_sheet`),
17 U.S.C. § 411(a)/Fourth Estate (inside
`copyright_registration_info_sheet`; "Fourth Estate" 5 hits), and
trademark abandonment/naked licensing (inside `trademark_license`,
clause `tmlicense_naked_licensing_abandonment`).

The gap chosen is the structure of Lanham Act § 43(a) itself. Grepped
both data files at `HEAD` before drafting (counts are occurrences in
`data/clauses.json` / `data/documents.json`): `passing off` 0 / 0,
`reverse passing off` 0 / 0, `Dastar` 0 / 0, `Lexmark` 0 / 0,
`Southland Sod` 0 / 0, `Montoro` 0 / 0, `puffery` 0 / 0, `zone of
interests` 0 / 0, `1125(a)(1)(B)` 0 / 0, `false advertising` 0 / 1 (the
one hit is in the employment agency document's description, about
referrals to nonexistent jobs, and is unrelated to the Lanham Act).

Two candidate-topic strings do appear at `HEAD`, and both were checked
by reading the clauses rather than counting hits. `Sybersound` 15 / 1 —
every hit is in `joint_authorship_copyright_coownership_info_sheet`,
which cites Sybersound Records, Inc. v. UAV Corp. for its **copyright
co-ownership** holdings (a single co-owner cannot grant an exclusive
license; the tenants-in-common legislative history), not for the Lanham
Act holding this document uses; the `fdo_ninth_circuit_dastar_application`
gap records the overlap of citation and the difference of holding.
`17500` 1 / 0 — that hit is inside the Bus. & Prof. Code § 17200 quote
in `tradedress_ca_state_law`, which quotes the UCL definition to show
that California has no trade-dress-specific statute; §§ 17204 and 17500
themselves are quoted nowhere in the corpus, and the
`fdo_california_parallel_statutes` gap records that the § 17200
definition is quoted in the trade dress document for a different
purpose. The existing
`1125` hits (103) are to § 1125(a)(1)(A) for unregistered marks and
trade dress, § 1125(c) for dilution, and § 1125(d) for cybersquatting,
in `trademark_registration_info_sheet`,
`trademark_cease_and_desist_info_sheet`, `trade_dress_info_sheet`,
`domain_name_dispute_info_sheet`, and
`trademark_nominative_classic_fair_use_info_sheet` — none of which
mentions the § 1125(a)(1)(B) commercial-advertising prong, passing off,
reverse passing off, the Dastar limit on attribution claims, the
elements of a false advertising claim, who may sue, or the § 1116/
§ 1117 remedies. `trademark_nominative_classic_fair_use_info_sheet`
expressly disclaims "comparative advertising claims under 15 U.S.C.
section 1125(a), counterfeiting, damages, or the availability of
attorney's fees in exceptional cases," naming part of this gap.

## What this document covers

14 clauses — 3 drafting (purpose/scope, relationship to the project's
other IP documents, preparation/acknowledgment) and 11 authority clauses
citing 15 U.S.C. §§ 1116(a), 1117(a), 1125(a)(1); Cal. Bus. & Prof. Code
§§ 17200, 17204, 17500; and five decisions: Dastar Corp. v. Twentieth
Century Fox Film Corp., 539 U.S. 23 (2003); Lexmark Int'l, Inc. v.
Static Control Components, Inc., 572 U.S. 118 (2014); Smith v. Montoro,
648 F.2d 602 (9th Cir. 1981); Southland Sod Farms v. Stover Seed Co.,
108 F.3d 1134 (9th Cir. 1997); and Sybersound Records, Inc. v. UAV
Corp., 517 F.3d 1137 (9th Cir. 2008). Document id
`false_designation_origin_false_advertising_info_sheet`; clause prefix
`fdo_`; fields `partyName`, `matterDescription`, `preparerName`,
`dateSigned`. 39 citation quotes in total.

- **`fdo_statutory_text_two_prongs`** (§ 1125(a)(1), (a)(1)(A),
  (a)(1)(B)) — the shared opening conduct language, the confusion prong,
  the commercial-advertising prong, and the closing liability sentence;
  names but does not reproduce § 1125(a)(2), (a)(3), (b), (c), (d).
- **`fdo_passing_off_reverse_passing_off`** (Smith v. Montoro) — the
  definition of reverse passing off, the express/implied distinction,
  and the two injuries the Ninth Circuit identified.
- **`fdo_dastar_origin_of_goods`** (Dastar) — the repackaging
  comparison, what "origin of goods" cannot connote, and the holding
  that the phrase means the producer of the tangible goods.
- **`fdo_dastar_copyright_boundary`** (Dastar) — what § 43(a)
  prohibits (the Coca-Cola/Pepsi illustration) and the
  perpetual-patent-and-copyright rationale.
- **`fdo_dastar_false_advertising_alternative`** (Dastar) — the
  § 43(a)(1)(B) misrepresentation claim the Court described as available
  on different facts, and the statement that merely calling itself the
  producer created no liability.
- **`fdo_ninth_circuit_dastar_application`** (Sybersound) — the Ninth
  Circuit's reading of Dastar and its holding that the "nature,
  characteristics, and qualities" of a recording mean characteristics of
  the good itself, not copyright licensing status.
- **`fdo_false_advertising_elements`** (Southland Sod Farms) — the
  five elements, the two ways of proving falsity, the full-context rule,
  and relief for advertisements that mislead without being literally
  false.
- **`fdo_puffery`** (Southland Sod Farms) — the puffing definition, the
  specific-and-measurable line, and how the court applied it to the two
  claims before it.
- **`fdo_who_may_sue`** (Lexmark) — the zone-of-interests requirement,
  the exclusion of deceived consumers and of misled business purchasers,
  the proximate-cause holding, and the rejection of the balancing and
  direct-competitor tests.
- **`fdo_remedies`** (§§ 1116(a), 1117(a)) — injunctions and the
  rebuttable presumption of irreparable harm; profits, damages, costs,
  the treble ceiling, and fees in exceptional cases.
- **`fdo_california_parallel_statutes`** (Bus. & Prof. Code §§ 17200,
  17204, 17500) — the UCL definition, the false advertising prohibition,
  and who may prosecute an action under the UCL chapter.

## Verification and findings

- **Every federal statute was fetched twice, from two publishers.** The
  Office of the Law Revision Counsel (`uscode.house.gov`, prelim
  edition) for 15 U.S.C. §§ 1116, 1117, 1125 and, independently, Cornell
  LII (`law.cornell.edu/uscode/text/15/1116`, `/1117`, `/1125`), each
  under a distinct User-Agent and header set. The two renderings of
  every quoted passage are word-for-word identical. Cornell inserts a
  space before the apostrophe in "another person's" in § 1125(a)(1)(B)
  as a markup artifact; both publishers pad internal cross-reference
  links with spaces (for example "of this title ,"), so the quoted spans
  were chosen to fall entirely outside those links. Quotes reproduce the
  Law Revision Counsel characters.
- **Each California section was fetched twice** from
  `leginfo.legislature.ca.gov` under two different browser header sets;
  the retrieved documents for §§ 17200 and 17500 were byte-identical in
  size and the extracted section bodies were identical for all three
  sections after markup stripping.
- **Both Supreme Court decisions were read in two independent
  renderings.** The CourtListener HTML opinion pages (clusters 130141
  and 2672209, HTTP 200 with a browser User-Agent and
  `Referer: https://www.courtlistener.com/`) and the Supreme Court's own
  bound volume PDFs, `supremecourt.gov/opinions/boundvolumes/539bv.pdf`
  (838 pages) and `572bv.pdf` (1,257 pages), text extracted with pypdf.
  Quotes follow the CourtListener rendering at the cited URL; each
  clause's `gap` says so and records the typographic differences.
- **The double-fetch caught real defects in the CourtListener text of
  Dastar.** That rendering carries scanning errors — "cáse" for "case,"
  "Bastar" for "Dastar," "un-copyrighted" for "uncopyrighted,"
  "discernable limits. ." for "discernible limits.", "thé line" for "the
  line," "Far-rar" for "Farrar." Candidate quotations covering the
  "serious practical problems" passage and the "mutant copyright law"
  passage were **dropped** for that reason rather than silently
  repaired; no quotation in the merged document comes from a passage
  containing one of those errors, and the
  `fdo_dastar_origin_of_goods` gap discloses the finding.
- **The bound volume PDFs lose ligatures.** The extracted text prints
  "fowing" for "flowing," "defne" for "define," "suffciently" for
  "sufficiently," "afﬁliate"-type words with the ligature dropped. The
  corroboration comparison therefore normalized "fl"/"fi" on both sides,
  along with line-break hyphenation, spaced versus unspaced em dashes,
  and spaced (". . .") versus unspaced ("...") ellipsis points. The
  `fdo_who_may_sue` gap states this.
- **Star-pagination markers were treated as text, not whitespace.** No
  quotation crosses a `*NNN` marker in the CourtListener rendering; the
  Lexmark zone-of-interests sentence is split across the 131/132 page
  break in both sources, so that quotation begins after the break and
  the pin cite is given as 131-132.
- **Southland Sod Farms was verified against two independent
  CourtListener renderings**, cluster 737494 (the resource.org-sourced
  official reporter text, the URL cited in the document) and cluster
  7041988 (a separate rendering with curly quotation marks). They differ
  in two places that mattered: the second hyphenates "misde-scriptions"
  across a line break, and the two cite the McCarthy treatise section
  differently ("§ 27.04[d]" versus "§ 27.04[4][d]"). No quotation in
  this document includes the treatise citation or the hyphenated word.
  Page numbers for the Southland Sod citations come from the star
  pagination in cluster 7041988; cluster 737494 carries none.
- **Sybersound was verified against two independent CourtListener
  renderings**, cluster 1462778 (official reporter text, the URL cited)
  and cluster 3051234 (the slip opinion). The reported-text page
  returned an empty HTTP 202 on two attempts and HTTP 200 on the third
  with a different header set; the gap records this.
- **Five phrase-level confirmations** were run through CourtListener's
  public, unauthenticated search index — `cluster_id:<id> AND
  "<exact phrase>"` for Dastar (130141), Smith v. Montoro (390271),
  Lexmark (2672209), Southland Sod Farms (737494), and Sybersound
  (1462778). Each returned `count=1` with the expected reporter
  citation.
- **All 39 `citations[].quote` values in the merged document were
  re-verified after the merge**, read back out of `data/clauses.json`
  (not out of the drafting notes): strict substring match after
  whitespace normalization against the primary fetched source, plus a
  normalized match against the independent second source. 0 failures.
- **Corpus-wide validation after the merge**: both data files parse;
  6,095 clauses and 705 documents; no duplicate clause or document ids;
  every `clauseOrder` id resolves; every `{{placeholder}}` in every
  document resolves to a declared field; every authority clause
  corpus-wide keeps the required key order and a non-empty `gap`.
  Confidentiality & IP is now 90 documents.
- **No CourtListener MCP tool call was made in this task.** Case
  location and all opinion text came from the public search API, the
  quota-free `/c/<reporter>/<volume>/<page>/` citation redirect (used to
  resolve 648 F.2d 602 to opinion 390271), the opinion HTML pages, and
  the Supreme Court's own PDFs. No HTTP 429 was encountered; requests
  were spaced with sleeps.

## Honest gaps disclosed

- **Smith v. Montoro has only one reachable publisher.**
  `bulk.resource.org` is refused by the egress proxy at CONNECT (403),
  and Justia, FindLaw, Google Scholar and case.law are blocked by the
  task rules; a 1981 Ninth Circuit opinion is not on `courts.ca.gov` or
  the court's own PDF server. The opinion page was therefore fetched
  twice from CourtListener under two different header sets (returning
  byte-identical documents) and the quoted language was confirmed
  through an exact-phrase query against the public search index. The
  `fdo_passing_off_reverse_passing_off` gap states this limitation in
  full.
- **Smith v. Montoro predates Dastar**, and its facts — a screen credit
  replaced with another actor's name — are of the attribution kind
  Dastar addressed. The clause states the express/implied definitions
  the Ninth Circuit gave, which courts still quote, and its gap says
  expressly that the clause does not assert that the result in that case
  survives Dastar.
- **The Dastar § 43(a)(1)(B) passage is the Court's observation about a
  claim not before it.** The clause reports it in conditional terms, its
  gap notes that the Ninth Circuit has described it as dicta, and the
  companion Sybersound clause states the limit that court placed on the
  same prong.
- **Two sources overlap with existing documents and are disclosed in
  the gaps**: Sybersound is already cited in
  `joint_authorship_copyright_coownership_info_sheet` for its copyright
  co-ownership holdings, and Bus. & Prof. Code § 17200 is already quoted
  in `trade_dress_info_sheet`. Neither existing clause states anything
  this document restates, and nothing in those documents is reproduced
  here beyond the § 17200 statutory definition itself.
- **Decisions cited inside the quoted opinions were not retrieved and
  are not quoted**: Sears, Roebuck & Co. v. Stiffel Co., Bonito Boats,
  TrafFix, Eldred v. Ashcroft, Two Pesos, Cook, Perkiss and Liehe,
  Castrol, and the Colligan/Serbin line in Lexmark. Each relevant gap
  says so.
- **McCarthy on Trademarks and Unfair Competition was not retrieved.**
  The puffing definition is quoted as the Southland Sod Farms opinion
  quotes it, beginning after the word "Puffing" so that the text is
  identical in both renderings of the opinion (which punctuate the
  nested quotation marks differently). The `fdo_puffery` gap says so.
- **The fourth false advertising element is described, not quoted.**
  The opinion prints a footnote reference inside that element, so the
  clause body states it and the quotations cover elements (1)-(3) and
  (5), which the `fdo_false_advertising_elements` gap discloses.
- **Questions the document does not answer, each named in the relevant
  gap**: what "in commerce" and "commercial advertising or promotion"
  mean in a contested case; how likelihood of confusion is measured;
  what makes a case "exceptional" for a fee award or when an award of
  profits is equitable; the limitations periods and procedural
  requirements for suit; the defenses available to an accused party; how
  California courts have construed the unlawful, unfair, and fraudulent
  prongs of Bus. & Prof. Code § 17200, what § 17203 and § 17535 provide,
  and whether damages are available under those statutes; and whether
  any contract or state statute can require attribution notwithstanding
  Dastar.
- **Scope note**: the document states federal law that applies
  nationwide plus three California statutes, and it identifies Ninth
  Circuit decisions as binding on the federal district courts in
  California only. It is informational: no clause tells the reader what
  to do, and every authority clause's gap says what the clause does not
  resolve about `{{matterDescription}}`.
