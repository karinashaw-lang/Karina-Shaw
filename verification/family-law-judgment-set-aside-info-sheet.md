# Family Law, new document: Relief From a Family Law Judgment After Six Months (Family Code Sections 2120-2129; Varner; Rubenstein; Brewer & Federici; Kieturakis; Georgiou & Leslie; Binette) — Information Sheet

Part of wave 161 (Family Law category; wave 161 continues the same
category set as waves 145/147/.../159: Hiring, During employment,
Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (83 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and suggested candidate directions. Grepped
both data files for each before choosing:

- Putative spouse (§ 2251; Ceja): 24 clause hits, carried inside
  `nullity_of_marriage_info_sheet`; not chosen.
- Nullity (§§ 2200-2210), move-away (LaMusga; § 7501), § 271
  sanctions, § 3910 adult-child support, § 7613 assisted
  reproduction, § 3042 child's preference (10 hits), mandatory
  custody mediation (§ 3170): each already its own document or
  carried inside one; not chosen.
- § 2107 / Feldman nondisclosure sanctions: 12 hits, carried by
  `preliminary_final_declarations_disclosure_info_sheet`; not
  chosen.
- Pension division / Gillmore: "Gillmore" had zero hits, but the
  corpus already has a QDRO/retirement-division document; judged a
  narrower angle than the one chosen.
- Relief from judgment under Family Code §§ 2120-2129: "Rosevear",
  "Varner", "Brewer", "Federici", "Kieturakis", "extrinsic fraud",
  "473(b)", "2124", and "2125" each had zero clause hits; "2122" and
  "2120" hits were all Unemployment Insurance Code / Probate Code
  section numbers or the disclosure document's cross-reference to
  § 2107(d). The wave-159 verification file did not consider this
  topic. Genuinely uncovered, well sourced (ten Family Code sections
  and six published Court of Appeal decisions), and a natural
  companion to the existing disclosure, § 2556, and § 1101
  documents. Chosen.

## What this document covers

13 clauses: 2 drafting (declaration, worksheet/signature) and 11
authority clauses, citing Cal. Fam. Code §§ 2120, 2121, 2122, 2123,
2124, 2125, 2126, 2127, 2128, and 2129 and six Court of Appeal
decisions (In re Marriage of Varner (1997) 55 Cal.App.4th 128;
Rubenstein v. Rubenstein (2000) 81 Cal.App.4th 1131; In re Marriage
of Brewer & Federici (2001) 93 Cal.App.4th 1334; In re Marriage of
Kieturakis (2006) 138 Cal.App.4th 56; In re Marriage of Georgiou &
Leslie (2013) 218 Cal.App.4th 561; In re Marriage of Binette (2018)
24 Cal.App.5th 1119):

- **`fljsa_section_2120_legislative_findings`** (§ 2120(a)-(d);
  Rubenstein) — full disclosure, finality balanced against proper
  division, the prior "considerable confusion"; the chapter as an
  exception to res judicata.
- **`fljsa_section_2121_relief_after_473_and_materiality`**
  (§§ 2121, 2129; Kieturakis) — relief after CCP § 473's six months;
  the two materiality findings; judgments entered on/after 1/1/1993;
  § 2122 as the exclusive grounds after six months.
- **`fljsa_section_2122_fraud_and_perjury_discovery_rule`**
  (§ 2122 preamble, (a), (b); Binette; Rubenstein; Brewer fn. 10) —
  six exclusive grounds; fraud and perjury within one year of
  discovery of the facts; abolition of the extrinsic/intrinsic
  distinction.
- **`fljsa_section_2122_duress_and_mental_incapacity`** (§ 2122(c),
  (d); Binette) — two years from entry; no construing decision
  fetched (disclosed).
- **`fljsa_section_2122e_mistake_varner_nondisclosure`** (§ 2122(e);
  Varner p. 144) — mistake in stipulated/uncontested judgments;
  nondisclosure of an asset's existence or value as a mistake.
- **`fljsa_brewer_federici_unilateral_mistake_unknown_valuation`**
  (Brewer pp. 1344-1349) — relief for mistake without wrongdoing;
  "unknown" valuation of a major asset insufficient; better-positioned
  spouse must obtain and disclose valuation information; unequal
  divisions remain permissible when informed.
- **`fljsa_section_2122f_disclosure_noncompliance_georgiou_binette`**
  (§ 2122(f); Georgiou; Binette) — the 2001 amendment; a defective
  waiver of final disclosure; Burkle's no-waiver rule as quoted in
  Binette.
- **`fljsa_section_2123_inequity_alone_not_a_ground`** (§ 2123;
  Rosevear as quoted in Brewer; Varner p. 145).
- **`fljsa_kieturakis_burden_of_proof_mediated_settlements`**
  (Kieturakis pp. 85-90) — moving party bears the burden; the
  undue-influence presumption yields for mediated settlements and
  judgments at least six months old; recitals in the MSA.
- **`fljsa_sections_2124_2127_scope_of_relief_mechanics`**
  (§§ 2124-2127; Rubenstein p. 1146; Brewer p. 1342) — attorney
  negligence not imputed; partial set-aside; valuation and equal
  division; statement of decision.
- **`fljsa_rubenstein_georgiou_exclusive_remedy_no_tort_section_2128`**
  (Rubenstein pp. 1146-1148; § 2128; Georgiou slip op. p. 18) — the
  remedy is a set-aside, not a tort action; remedies preserved by
  § 2128; a § 1101 action cannot bypass the § 2122 deadline.

Every clause states what the law is; none instructs the reader what
to do about a particular judgment. The drafting clauses say the
document is not a motion or pleading and does not state whether any
ground exists or any request would be timely.

## Independent double-fetch

- **CourtListener MCP quota**: zero MCP calls. Every source was
  reached with `curl` through the environment proxy.
- **Cluster identification** (public JSON search API,
  `/api/rest/v4/search/?type=o&q=…`): Varner 2302017; Brewer &
  Federici 2282618; Rubenstein 2246825; Kieturakis 2253489; Georgiou
  & Leslie 1037298 (local path
  `pdf/2013/07/31/marr._of_georgiou_and_leslie.pdf`); Binette
  4513113 (`pdf/2018/06/29/in_re_marriage_of_binette.pdf`) and its
  Cal.Rptr-cited twin 6239755. Rosevear (5808172 / opinion 5663514)
  and Heggie (5808865 / opinion 5664235) were also located, but their
  CourtListener HTML pages carry mis-linked Harvard-scan text (a New
  York insurance case and a New York brokerage case respectively), so
  neither was used; both are described only as later opinions
  characterize them, and that is disclosed in the relevant `gap`
  fields.
- **Opinion HTML pages** (Varner, Brewer, Rubenstein, Kieturakis,
  Georgiou second copy): each fetched twice from
  `https://www.courtlistener.com/opinion/<id>/<slug>/` with a
  `Referer: https://www.courtlistener.com/` header and two distinct
  full browser header sets (Chrome/Windows and Firefox/Linux User-
  Agents, different Accept/Sec-Fetch headers). A few first attempts
  returned the HTTP 202 challenge body (2,446 bytes) and were retried
  after a sleep inside the same turn until a 200 page arrived. The
  extracted opinion text was byte-identical across the two fetches
  for all four opinions (SHA-1 of extracted text: Varner
  f5770245e441, Brewer 8fd0fecddf41, Rubenstein 6f4e55e55176,
  Kieturakis 6fc0f147ce33). These are the Official Reports texts with
  star-page markers.
- **Binette**: slip-opinion PDF fetched from storage.courtlistener.com
  (145,502 bytes, SHA-1 d4d1de60…) and, as the independent second
  copy, from the California courts' archive
  (`https://www.courts.ca.gov/opinions/archive/E068010.PDF`, which
  301-redirects to `www4.courts.ca.gov`; 251,302 bytes,
  `application/pdf`, SHA-1 602991c7…) under a different User-Agent.
  Text extracted with pypdf (20 pages each). Every Binette quote was
  required to appear in both copies.
- **Georgiou & Leslie**: slip-opinion PDF from
  storage.courtlistener.com (54,089 bytes, SHA-1 9944c5e2…; the
  courts.ca.gov archive path `D061200.PDF` returned 404) and, as the
  independent second copy, CourtListener's HTML page for opinion
  1037298 (Official Reports scan with star pages, fetched with the
  Referer/browser headers described above). Every Georgiou quote was
  required to appear in both copies; two artifacts are noted below.
- **Statutes** (leginfo.legislature.ca.gov): Cal. Fam. Code §§ 2120,
  2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129 each fetched
  twice -- `codes_displaySection.xhtml` with a Chrome User-Agent and
  `printCodeSectionWindow.xhtml` with a Safari User-Agent. The
  extracted section text was identical across the two fetches for
  every section (SHA-1 prefixes: 2120 04b41207bc29, 2121
  34b3267e9aaa, 2122 c7fdb6c77a94, 2123 05f53c4df8d6, 2124
  165832763357, 2125 bc6d452c0d0a, 2126 8d1bc0c9e8b5, 2127
  e9928b1860ec, 2128 6a690d4e209f, 2129 2b96a4dc4d24). Two § 2128
  fetches were reset by the proxy on the first pass and succeeded on
  retry. Enactment notes: §§ 2120, 2121, 2123, 2126, 2128, 2129
  "Added by Stats. 1993, Ch. 219, Sec. 108. Effective January 1,
  1994."; § 2122 "Amended by Stats. 2001, Ch. 703, Sec. 7. Effective
  January 1, 2002."; § 2124 "Amended by Stats. 2019, Ch. 115, Sec. 21.
  (AB 1817)"; § 2125 and § 2127 amended by Stats. 1993, Ch. 1101
  before taking effect.

## Quote-by-quote verification

All 51 citation quotes across the 11 authority clauses were checked
by a Python script (`verify_quotes.py`) that normalized curly quotes
and apostrophes to straight ones, non-breaking spaces to plain
spaces, em/en dashes to hyphens, removed Official Reports star-page
markers, and collapsed whitespace on both sides before comparing.
Final run: ok=51, bad=0. The 19 statute quotes (both fetches), 7
Varner/Brewer/Rubenstein/Kieturakis quotes per opinion as applicable
(both fetches), 5 Binette quotes (both PDFs), and 4 Georgiou quotes
(PDF and HTML) all passed as exact contiguous substrings.

Artifacts identified and handled rather than silently normalized:

- **Binette page number inside a sentence**: the quote "Given the
  lack of compliance with the statutory requirements, the stipulation
  was insufficient…" spans the break between slip pages 19 and 20,
  and both PDFs' extracted text carries the running page number "20"
  on its own line between "statutory" and "requirements". The
  comparison removed digit-only lines from the PDF text; no word was
  changed. Disclosed in the `gap` of
  `fljsa_section_2122f_disclosure_noncompliance_georgiou_binette`.
- **Georgiou OCR artifact**: the Official Reports scan on the HTML
  page renders "[f]ailure" as "[f|ailure". The slip-opinion PDF (the
  cited copy) reads "[f]ailure"; the artifact was normalized for the
  second-copy comparison only. Disclosed in the same `gap`.
- **Georgiou slip/Official Reports punctuation difference**: the
  sentence "Rather, we conclude section 1101 does not authorize a
  postjudgment action in these circumstances, because the referral
  fee…" has a comma after "circumstances" in the slip opinion and no
  comma in the Official Reports text, and also spans a PDF page
  break. Rather than pick one, the clause quotes two fragments that
  are identical in both copies ("section 1101 does not authorize a
  postjudgment action in these circumstances" and "the referral fee
  cannot be disposed of without upsetting the judgment, or at least a
  portion of it."). Disclosed in the `gap` of
  `fljsa_rubenstein_georgiou_exclusive_remedy_no_tort_section_2128`.
- **Bracketed parallel cites with internal spaces**: the CourtListener
  texts render bracketed Cal.Rptr cites as "[ 76 Cal.Rptr.2d 691 ]"
  and put a space before some periods ("at p. 32 ."). Two quotes that
  originally ran through such a cite (Brewer's quotation of Rosevear;
  Kieturakis's "exclusive grounds and time limits" sentence) were
  trimmed to end before the bracketed cite, and the Kieturakis
  passage was split into two quotes; both `gap` fields say so. No
  quote text was altered.
- **Italic line breaks**: Rubenstein's accrual sentence and Brewer's
  Rosevear quotation have italicized words ("facts", "sole") set off
  by line breaks in the fetched text; whitespace collapse handled
  them and the `gap` fields disclose it.
- **Pin cites**: star-page scanning of the fetched texts corrected
  three draft pin cites before merge (Rubenstein "immune from
  subsequent attack" sentence 1151→1152; Kieturakis "First, we
  conclude" 84→85; Kieturakis § 2121 clause 87-88→87). Footnote pin
  cites (Rubenstein fn. 7 at p. 1144; Brewer fn. 10 at p. 1345) are
  taken from the page on which the footnote call appears in the body.
  Georgiou and Binette are slip opinions without Official Reports
  pagination; `cite` fields give slip-opinion pages.
- **Pre-2002 statutory text**: Varner, Rubenstein, Brewer, and
  Kieturakis quote the pre-2002 version of § 2122 (subdivision (a)
  then included "other than his or her own lack of care or
  attention"; there was no subdivision (f)). Every statute quote in
  this document is taken from the current leginfo text, and the
  `gap` fields of the § 2122 clauses disclose the difference.
- **OCR in Varner**: the Harvard-scan text has artifacts elsewhere in
  the opinion ("bom" for "born", "mling" for "ruling"); no quoted
  passage contains one, and the `gap` says so.
- Decisions described only as characterized by the fetched opinions
  -- Rosevear (1998), Heggie (2002), Dale (1998), Jones (1998),
  Stevenot (1984), Burkle (2006), Fell (1997), Haines (1995), Bonds
  (2000), Stanifer (Bankr. 9th Cir. 1999), Brookwood (1996), Thorne &
  Raccina (2012), Melton (1994) -- are flagged as not independently
  verified in the relevant `gap` fields.

## Schema and corpus validation

- Confirmed the exact current schema by reading `data/clauses.json`
  and `data/documents.json` before writing: authority clauses use
  exactly `{id, title, kind:"authority", status:"verified",
  checkedDate, body, gap, citations:[{case, cite, url, quote}]}`;
  drafting clauses use exactly `{id, title, kind:"drafting", body}`;
  documents use `{id, title, description, categories, clauseOrder,
  fields}`. `merge.py` asserted exact key order on all 13 new
  clauses, their 51 citations, and the document, and confirmed a
  byte-identical JSON round-trip of both data files (2-space indent,
  non-ASCII preserved, trailing newline) before writing.
- Checked all 13 new clause ids (`fljsa_` prefix) and the new
  document id against the full existing corpus for collisions -- none
  found.
- After merging, a corpus-wide validation confirmed: both data files
  parse as valid JSON; no duplicate clause ids (5,473 clauses); no
  duplicate document ids (659 documents); every clause id in every
  document's `clauseOrder` resolves to an existing clause; and every
  `{{placeholder}}` in every document's clauses (body and gap)
  resolves to a declared field -- for this document `party1Name`,
  `party2Name`, `proceedingType`, `judgmentDate`,
  `provisionsAtIssue`, `circumstanceDescription`.

## Net changes

- New document: Relief From a Family Law Judgment After Six Months
  (Family Code Sections 2120-2129; Varner; Rubenstein; Brewer &
  Federici; Kieturakis; Georgiou & Leslie; Binette) — Information
  Sheet (`family_law_judgment_set_aside_info_sheet`), 13 clauses
  (11 authority + 2 drafting), in the Family Law category.
- Corpus: 5,460 → 5,473 clauses; 658 → 659 documents. Wave 161,
  Family Law (84 Family Law documents).
