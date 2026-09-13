# Verification — Support of Parents by an Adult Child (Family Code Sections 4400-4414)

Document id: `support_of_parents_info_sheet`
Category: Family Law (California)
Checked date: 2026-09-13
Clause id prefix: `parentsupp_`
Clauses: 16 (13 authority, 3 drafting). Citations: 29.

## Coverage check (grep at HEAD, before any edit)

Run against `data/documents.json` and `data/clauses.json` as they stood at HEAD:

| term | hits in documents.json | hits in clauses.json |
|---|---|---|
| `Swoap` | 0 | 0 |
| `4400` | 0 | 0 |
| `4403` | 0 | 0 |
| `filial` | 0 | 0 |
| `Duffy v. Yordi` | 0 | 0 |
| `270c` | 0 | 0 |
| `12350` | 0 | 0 |
| `Heitzman` | 0 | 0 |
| `Chavez v. Carpenter` | 0 | 0 |
| `Leni` | 0 | 0 |
| `Cady` | 0 | 0 |

Candidates considered and rejected as already covered:

* **Putative spouse doctrine (Fam. Code § 2251; Ceja)** — `putative spouse` already appears in 4 clauses, including a dedicated clause `nullity_putative_spouse_doctrine` inside `nullity_of_marriage_info_sheet`. Rejected as substantially covered.
* **Date of separation (Fam. Code § 70; Marriage of Davis)** — `Marriage of Davis` and `Family Code section 70` already appear in the clause `msa_date_of_separation`. Rejected as partly covered.
* **Filial responsibility / support of parents** — every distinctive term returned zero. Selected.

## Source paths

Two independent fetch paths were used for every quote.

**Statutes.** Path A: `leginfo.legislature.ca.gov`, `codes_displaySection.xhtml`, fetched with a cookie jar seeded from `/faces/codes.xhtml` (the section body is not returned without a JSF session cookie) and a Chrome User-Agent. Path B: a different host, `california.public.law`, same section, fetched with a Firefox User-Agent.

**Opinions.** Path A: `courtlistener.com/opinion/<cluster>/` with a Chrome User-Agent + `Referer: https://www.courtlistener.com/` (without the Referer the host returns an empty 202). Path B: the same page with a Firefox User-Agent and a different Accept header. The two extracted texts were byte-for-byte identical for all six opinions. Path C (a genuinely separate pipeline): CourtListener's public unauthenticated search JSON, queried as `type=o&q=cluster_id:<id> AND "<exact phrase>"` — a count of exactly 1 confirms the phrase is indexed in that opinion and no other.

Blocked/avoided per instructions: Justia, FindLaw, Google Scholar, case.law, bulk.resource.org. `appellatecases.courtinfo.ca.gov` returned HTTP 403 and was not used.

## Per-citation record

All 29 quotes were compared as normalized strings (non-breaking spaces and the markup-inserted line breaks/indentation between lettered subdivisions collapsed to single ordinary spaces) and confirmed to be verbatim substrings of both fetches, except where noted.

### Statutes (leginfo vs. california.public.law)

| clause | citation | result |
|---|---|---|
| `parentsupp_statutory_duty` | Fam. Code § 4400 | identical on both paths |
| `parentsupp_statutory_duty` | Fam. Code § 4401 | identical on both paths |
| `parentsupp_statutory_duty` | Fam. Code § 4402 | identical on both paths |
| `parentsupp_who_may_sue` | Fam. Code § 4403(a)(1) | identical on both paths |
| `parentsupp_who_may_sue` | Fam. Code § 4403(b)-(c) | identical on both paths |
| `parentsupp_amount_and_jurisdiction` | Fam. Code § 4404 | identical on both paths |
| `parentsupp_amount_and_jurisdiction` | Fam. Code § 4405 | identical on both paths |
| `parentsupp_criminal_counterpart` | Pen. Code § 270c | identical on both paths |
| `parentsupp_public_benefits_carveout` | Welf. & Inst. Code § 12350, ¶ 1 | identical on both paths |
| `parentsupp_public_benefits_carveout` | Welf. & Inst. Code § 12350, ¶ 2 | **DIVERGED — see Disclosure 1** |
| `parentsupp_abandonment_relief` | Fam. Code § 4410 | identical on both paths |
| `parentsupp_abandonment_relief` | Fam. Code § 4411 | identical on both paths |
| `parentsupp_abandonment_relief` | Fam. Code § 4414 | identical on both paths |
| `parentsupp_abandonment_procedure` | Fam. Code § 4412 | identical on both paths |
| `parentsupp_abandonment_procedure` | Fam. Code § 4413 | identical on both paths |

### Opinions (CourtListener path A vs. path B, plus search-index phrase check)

| clause | citation | page pin source | phrase-check count |
|---|---|---|---|
| `parentsupp_no_common_law_duty` | Duffy v. Yordi (1906) 149 Cal. 140, 141 | star pagination `*141`/`*142` | 1 |
| `parentsupp_no_common_law_duty` | Duffy v. Yordi (1906) 149 Cal. 140, 142 | star pagination | 1 |
| `parentsupp_public_charge_purpose` | People v. Heitzman (1994) 9 Cal.4th 189, 210 | star pagination `*210`/`*211` | 1 |
| `parentsupp_public_charge_purpose` | Heitzman, 9 Cal.4th at 210 (nested quotation) | star pagination | 1 |
| `parentsupp_public_charge_purpose` | Heitzman, fn. 18 | footnote (no page asserted) | 1 |
| `parentsupp_constitutional_challenge` | Swoap v. Superior Court (1973) 10 Cal.3d 490, 506 | star pagination `*506`/`*507` | 1 |
| `parentsupp_constitutional_challenge` | Swoap, 10 Cal.3d at 507 | star pagination `*507`/`*508` | 1 |
| `parentsupp_community_obligation` | Leni v. Leni (2006) 144 Cal.App.4th 1087, 1097 | star pagination `*1097`/`*1098` | 1 |
| `parentsupp_community_obligation` | Leni, 144 Cal.App.4th at 1098 | star pagination `*1098`/`*1099` | 1 |
| `parentsupp_community_obligation` | Leni, 144 Cal.App.4th at 1098 | star pagination | 1 |
| `parentsupp_wrongful_death_distinction` | Chavez v. Carpenter (2001) 91 Cal.App.4th 1433, fn. 8 | **no page pin asserted — see Disclosure 4** | 1 |
| `parentsupp_wrongful_death_distinction` | Chavez, fn. 8 | same | 1 |
| `parentsupp_cady_construction` | Marriage of Cady & Gamick (2024, No. B326716) | slip text, no reporter pin | 1 |
| `parentsupp_cady_construction` | Cady & Gamick | slip text, no reporter pin | 1 |

Cluster ids used: Duffy 3306532; Heitzman 1393440; Swoap 1273343; Leni 5809424; Chavez 2261617; Cady & Gamick 10124865.

## Disclosures — defects found and reported rather than corrected

**1. Mirror transcription error in Welf. & Inst. Code § 12350.** The two fetch paths disagree. Official leginfo text: `Notwithstanding Sections 3910, 4400, and 4401 of the Family Code`. The california.public.law mirror renders the same passage as `Notwithstanding Section 3910, 4400 , and 4401 of the Family Code` — singular "Section" and a stray space before a comma. The leginfo reading is corroborated by *Marriage of Cady & Gamick*, which reproduces it as "[s]ections 3910, 4400, and 4401." The clause quotes the leginfo text and the gap states the divergence expressly; the quote is therefore verified against one fetch path only, and that is said in the gap.

**2. A word dropped in a chain of quotations, confirmed on an independent index.** *Duffy v. Yordi* (1906) 149 Cal. 140, 142 reads: "The main purpose of the statutes seems to be to protect the public from the burden of supporting **poor** people who have children able to support them." *People v. Heitzman* (1994) 9 Cal.4th 189, 210, quoting *In re Jerald C.* (1984) 36 Cal.3d 1, 9-10, quoting *Duffy*, renders it without "poor." This was confirmed independently through the CourtListener search index rather than by eye:

* `cluster_id:3306532 AND "burden of supporting poor people who have children able to support them"` → count 1
* `cluster_id:3306532 AND "burden of supporting people who have children able to support them"` → count 0
* `cluster_id:1393440 AND "burden of supporting people who have children able to support them"` → count 1

Both opinions are quoted as they actually read, in separate citations, and the `parentsupp_public_charge_purpose` gap states the discrepancy and that this research did not fetch *In re Jerald C.* to determine at which step the word was lost.

**3. OCR damage in the CourtListener reporter-derived texts.** Observed in the fetched pages and disclosed in the gaps of the clauses that cite them: `mled` for "ruled" and `[H` for the paragraph symbol (Leni); `annotmced` for "announced", `pubhc` for "public", `[ejnforcing` for "[e]nforcing", stray hyphenation such as `with- his parents` (Swoap); `[ejxcept` for "[e]xcept" and `Jan. 1,1994` (Heitzman); `oí` for "of", `a legal .contract`, `supply-necessaries` (Duffy). No quoted sentence contains any of this damage — each was compared character by character across two fetches — but the surrounding text is not clean and the gaps say so. Two passages that would otherwise have been quoted (Leni's sentence about § 910, Heitzman's quotation of the pre-2019 § 4400) were **described instead of quoted** precisely because the rendering around them is damaged.

**4. Footnote page pins not asserted.** CourtListener's rendering collects footnote text after the body of the opinion rather than at the foot of the page where it was printed, so star pagination cannot fix the printed page of a footnote. For *Chavez v. Carpenter* (both quotes come from footnote 8) and for *Heitzman* footnote 18, the citation names the footnote and no page pin is asserted. The `parentsupp_wrongful_death_distinction` gap explains this.

**5. Superseded statutory text quoted by older opinions.** Fam. Code § 4400 was amended by Stats. 2019, ch. 115, § 54 (AB 1817), effective January 1, 2020, to gender-neutral wording ("to the extent of the adult child's ability … unable to self-maintain by work"). *Leni* (2006), *Chavez* (2001) and *Heitzman* (1994) all quote the older text ("to the extent of his or her ability … unable to maintain himself or herself by work"). The clauses say so and do not assert whether the 2019 change was substantive.

**6. The statutes Swoap upheld no longer exist in the form reviewed.** *Swoap* sustained Welf. & Inst. Code §§ 12100 and 12101 as they then read. Verified during this research: the chapter was repealed and re-added by Stats. 1973, ch. 1216, and the **current** § 12101 governs the cost of a medical examination to determine blindness or disability — an unrelated subject. Article 8 (§§ 12350-12351), headed "Relatives' Responsibility," was repealed and added by Stats. 1975, ch. 1136, and § 12350 today forbids the very demand *Swoap* had upheld. The `parentsupp_constitutional_challenge` gap states this rather than presenting *Swoap* as describing law currently in force.

**7. Citability of Marriage of Cady & Gamick not established.** CourtListener records the opinion as "Published," filed September 25, 2024, Second Appellate District, docket No. B326716, but its record reads "Citations: None known." No official reporter citation was confirmed, and the California Supreme Court's docket was not checked for a later grant of review or depublication (`appellatecases.courtinfo.ca.gov` returned HTTP 403 to this environment). The clause cites the case by date and docket number only and the gap tells the reader to confirm its current status. The CourtListener text is extracted from a slip PDF and carries hyphenation artifacts — its own quotation of § 4400 appears as `self- maintain` with an inserted space, and its quotation of Pen. Code § 270c adds bracketed lower-casing (`[c]hapter`, `[s]ection`, `[p]art`, `[d]ivision`) that is not in the statute. Neither damaged passage is quoted.

**8. Editorial insertion inside a quotation.** *Leni*, footnote 6, quotes Pen. Code § 270c but inserts an explanatory bracket — "[providing for relief from duty to support a parent who abandoned a child]" — inside the quotation marks. That text is not in the statute. The statute is therefore quoted from leginfo, not from *Leni*.

**9. Negative case-law results, recorded.** CourtListener full-text searches on the checked date:

* `"Family Code section 4403"` → 0 opinions
* `"Family Code section 4411"` → 0 opinions
* `"Family Code section 4414"` → 0 opinions
* `"section 4404" AND "earning capacity"` → 0 opinions
* `"Penal Code section 270c"` → 2 opinions, both civil family-law appeals (*Leni*; *Cady & Gamick*) quoting the section in passing — no reviewed prosecution located
* `"Family Code section 4400"` → 4 opinions (*Chavez*, *Cady & Gamick*, *Freitas v. County of Contra Costa*, *Heitzman*)

So §§ 4403, 4404, 4405, 4410-4414 rest on statutory text alone, and the relevant clause gaps say so.

## Normalization applied

Only benign artifacts were normalized, and each affected clause's `gap` says so:

* non-breaking spaces (U+00A0) → ordinary spaces;
* the line breaks and indentation the official leginfo page's markup inserts between lettered subdivisions → single ordinary spaces (so a quote running "(a) … (b) … (c) …" appears on the official page as separate indented paragraphs);
* HTML entity unescaping.

Curly apostrophes and quotation marks in the sources were **preserved**, not converted. No word, punctuation mark, or bracket was added, removed, or reordered inside any quote.

## Post-merge validation

Run against the merged `data/` files:

* both files parse as JSON;
* clause ids unique (6150 clauses); document ids unique (709 documents); document titles unique;
* every `clauseOrder` id resolves; no orphan clauses;
* every authority clause in this document has a non-empty `gap` and at least one citation;
* no undeclared `{{field}}` placeholders in any body or gap;
* key order canonical for the new document, its 13 authority clauses, its 3 drafting clauses, and all 29 citation objects. (103 pre-existing legacy documents in the corpus place `categories` last rather than fourth; those are untouched and are reported separately, not as errors introduced here.)
* Every quote was re-read **out of the written `data/clauses.json`** and re-checked against the fetched source text: **29 of 29 pass** (28 verbatim in both fetch paths; 1 — Welf. & Inst. Code § 12350 ¶ 2 — verbatim in the official leginfo fetch only, with the mirror's divergence disclosed in the clause gap per Disclosure 1).
