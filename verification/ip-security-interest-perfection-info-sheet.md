# Verification — Security Interests in Intellectual Property — Where a Lien on a Patent or Copyright Is Perfected — Information Sheet

Document id: `ip_security_interest_perfection_info_sheet`
Category: `Confidentiality & IP`
Clause id prefix: `ipsec_`
Checked date on every authority clause: 2026-09-15

---

## 1. Why this topic was treated as uncovered

The gap is structural, not lexical. The category held 92 documents before this one. Every
one of them treats intellectual property as something to be **created, owned, licensed,
transferred, or defended against a copier**. None asks what happens when intellectual
property is **pledged as collateral** — whether a lender perfects by filing a UCC-1 with the
California Secretary of State or by recording in the United States Copyright Office or the
USPTO, and who wins in the owner's bankruptcy. The category assumes the IP holder is facing
an infringer; it never poses the question of the IP holder facing a lender.

The corpus does contain one Article 9 document, `ucc1_financing_statement_info_sheet`
("UCC-1 Financing Statement — Information and Filing Worksheet"), but it sits in
**Business Formation**, and its six clauses cover only generic filing mechanics:
§ 9502(a)/(d) sufficiency, § 9203(a)/§ 9308(a) attachment vs. perfection, § 9509(a)/(b)
authorization, § 9515 duration and lapse, § 9322(a) priority. It never reaches § 9109(c)'s
federal-preemption carve-out or § 9311's substitute-compliance rule — the two provisions
that decide the intellectual-property question.

### Grep counts and which hits were inspected and discounted

Run over `data/clauses.json` and `data/documents.json` at base commit `e123a0c`
(6,431 clauses / 728 documents).

| Probe | clauses.json | documents.json | Verdict |
|---|---|---|---|
| `World Auxiliary` | 0 | 0 | genuinely absent |
| `Cybernetic` | 0 | 0 | genuinely absent |
| `Peregrine` | 0 | 0 | genuinely absent |
| `Aerocon` | 0 | 0 | genuinely absent |
| `general intangible` | 0 | 0 | genuinely absent |
| `9109` | 0 | 0 | genuinely absent |
| `9408` | 0 | 0 | genuinely absent |
| `9406` | 0 | 0 | genuinely absent |
| `subsequent transferee` | 0 | 0 | genuinely absent |
| `record the assignment` | 0 | 0 | genuinely absent |
| `strong-arm` | 0 | 0 | genuinely absent |
| `Recordation` | 3 | 0 | patent/trademark assignment clauses — different question |
| `§ 205` (literal `grep -F`) | 47 | 2 | **FALSE POSITIVE.** A word-boundary regex `§ 205\b` matched **0** clauses. The 47 were `§ 2050`, `§ 2051`, `§ 2056`… — longer section numbers with `§ 205` as a prefix. 17 U.S.C. § 205 is genuinely absent from the corpus. |
| `35 U.S.C. § 261` (literal) | 11 | 0 | **PARTIALLY DISCOUNTED.** Regex `35 U\.S\.C\. § 261` matched 0 because of the non-breaking-space encoding; inspecting the 11 hits showed `patentassign_writing_requirement` and `patentassign_recording` (patent assignment document) and three `patentlicense_*` clauses. So § 261's writing requirement and its "void as against a subsequent purchaser or mortgagee" sentence **are** already used for outright assignments. **This document therefore quotes a different sentence of § 261 (the PTO "register of interests" sentence, not used anywhere in the corpus) as its primary patent citation, and discloses the overlap on the voiding sentence in the gap.** |
| `1060(a)` | 12 | 0 | **REAL COVERAGE, TOPIC NARROWED.** Six clauses of the trademark-assignment info sheet, including `tmassign_recording`, already quote 15 U.S.C. § 1060(a)(3) and (a)(4) and explain the three-month recording window for marks. **Trademark recordation was therefore dropped from this document's scope** and is named as excluded in the closing clause. |
| `9310` | 2 | 0 | one is `ucc1_attachment_vs_perfection` (a cross-reference to "§§ 9310 through 9316", not a quotation of § 9310(a)); the other is a NAICS code `493110` inside `warehousequota_scope`. Both discounted. |
| `9102` | 4 | 0 | **ALL FALSE POSITIVES.** Education Code `§ 49102`/`§ 49104` in `minorwork_exemption_graduates`; Probate Code `§ 19102` in `trustcred_time_to_file`. No Commercial Code § 9102. |
| `9301` | 6 | 0 | **ALL FALSE POSITIVES.** Probate Code `§ 19301`/`§ 19302` in `trustcred_judgments`. No Commercial Code § 9301. |
| `9311` | 1 | 0 | **FALSE POSITIVE.** NAICS code `493110` in `warehousequota_scope`. |
| `544(a)` | 2 | 0 | **FALSE POSITIVES.** Probate Code `§ 8544(a)` in `specialadmin_powers_scope`. No 11 U.S.C. § 544. |
| `hypothecation` | 1 | 0 | **REAL.** `swlicense_exclusive_license_writing` already quotes the 17 U.S.C. § 101 definition of "transfer of copyright ownership" for the *exclusive-license writing* point. This document quotes the same definition for the *mortgage/hypothecation* point and **discloses in the gap that it is one source, not two.** |
| `17 U.S.C. § 204` / `204(a)` | 7 / 34 | 0 / 2 | copyright assignment and work-made-for-hire documents; the § 204(a) signed-writing rule, a different question from recordation. Discounted. |
| `financing statement` | 39 | 3 | `ucc1_financing_statement_info_sheet` (Business Formation) plus two business documents. Inspected — no IP collateral treatment. |
| `anti-assignment` | 2 | 0 | inspected; neither concerns Com. Code § 9408. |

---

## 2. Per-citation verification

All comparisons were made on whitespace-collapsed text. **Normalizations applied, and
disclosed in the affected clause gaps:** non-breaking space → space; curly quotation marks
and apostrophes → straight; en/em dashes → ASCII; soft hyphens removed; line-wrap
hyphenation joined. Nothing else was altered. No quote was reconstructed from memory;
every one was taken out of a fetched file and then, after writing, read back out of
`data/clauses.json` and re-matched against the same fetched files.

### 2A. California Commercial Code — leginfo + onecle (genuinely independent pair)

`law.onecle.com` publishes a 2017 snapshot. For sections amended after 2017 the Legislative
Counsel's **chaptered text of SB 95 (Stats. 2023, ch. 210)** was fetched as a third document
— **this is the same publisher as leginfo in a different document, and is recorded below as
corroboration of currency, not as an independent publisher.**

| § | leginfo fetch | onecle fetch | 3rd | Amendment histories | Result |
|---|---|---|---|---|---|
| 9102(a)(42) | `codes_displaySection.xhtml?lawCode=COM&sectionNum=9102.` (200, 206,323 B) | `law.onecle.com/california/commercial/9102.html` (200, 40,559 B) | SB 95 chaptered (200, 456,806 B) | leginfo: Stats. 2023, ch. 210 (SB 95). onecle: Stats. 2013, ch. 531. **Divergent** — onecle is stale for the section as a whole. | Quote **byte-identical in all three**, so the (a)(42) sentence is one the 2023 amendment left alone. leginfo + onecle is a genuinely independent pair for this sentence. |
| 9109(c)(1) | 200, 168,400 B | 200, 13,032 B | n/a | **Both** Stats. 2014, ch. 482 (SB 936) — match | Genuinely independent two-publisher confirmation. |
| 9301(1) | 200, 165,159 B | 200, 9,861 B | SB 95 chaptered | leginfo: Stats. 2023, ch. 210. onecle: Stats. 2006, ch. 254. **Divergent** — and the divergence is visible in the text: current opening words read "Sections 9303 to 9306.2" where onecle reads "Sections 9303 to 9306." | The **paragraph (1) sentence quoted** is identical in all three. Disclosed in the gap. |
| 9310(a) | 200, 166,248 B | 200, 10,560 B | SB 95 chaptered | leginfo: Stats. 2023, ch. 210. onecle: Stats. 2006, ch. 254. **Divergent.** | Subdivision (a) sentence identical in all three. Disclosed. |
| 9311(a)(1), (b) | 200, 166,562 B | 200, 11,320 B | n/a | **Both** Stats. 2013, ch. 531 (AB 502) — match | Genuinely independent two-publisher confirmation. |
| 9408(a), (d)(5), (d)(6) | 200, 167,908 B | 200, 12,813 B | SB 95 chaptered | leginfo: Stats. 2023, ch. 210. onecle: Stats. 2013, ch. 531. **Divergent.** | All three quotes identical in all three fetches. Disclosed. |

`california.public.law` was **not used**, per the standing instruction that it prints a
"Source:" line naming leginfo and is not independent of it.

**Benign artifact disclosed rather than corrected:** the leginfo rendering of § 9408(d)(1)
breaks "the promissory note" across a line, producing a double space in extracted text. It
was collapsed by whitespace normalization and the fact is stated in
`ipsec_anti_assignment_terms_and_confidential_information`'s gap.

### 2B. United States Code — uscode.house.gov + Cornell LII (genuinely independent)

| Section | uscode.house.gov | Cornell LII | Result |
|---|---|---|---|
| 17 U.S.C. § 101 (transfer of copyright ownership) | 200, 276,983 B | 200, 189,125 B | identical |
| 17 U.S.C. § 205(a), (c), (d), (e) | 200, 153,023 B | 200, 38,920 B | identical |
| 35 U.S.C. § 261 (register sentence; voiding sentence) | 200, 149,592 B | 200, 33,194 B | identical |
| 11 U.S.C. § 544(a), (a)(1) | 200, 152,399 B | 200, 37,172 B | identical |

**Publisher rendering differences found and worked around rather than papered over —
each stated in the affected gap:**

1. **Cornell sets defined terms off with spaces inside the quotation marks.** It prints
   `“ transfer of copyright ownership ”` where uscode.house.gov prints
   `"transfer of copyright ownership"`. A quote spanning the closing quotation mark would
   not match both. The § 101 quote therefore **begins after it**, at "is an assignment,".
2. **Subdivision headings.** uscode.house.gov renders 17 U.S.C. § 205's headings as
   `Conditions for Recordation .-`; Cornell renders `Conditions for Recordation.—`. All
   § 205 quotes begin **after** the heading.
3. **List introductions.** § 205(c) and (e) and § 544(a) each introduce a numbered list
   with a dash the two publishers render differently, and lay the list items out
   differently. Those three quotes stop at "but only if", "and if", and "voidable by"
   respectively; the list items are described in clause bodies rather than quoted.
4. **Apostrophe.** uscode.house.gov prints a straight apostrophe in § 205(e)'s "owner's";
   Cornell prints a curly one. Normalized, and disclosed as the only difference found in
   that section.

### 2C. Ninth Circuit case law — **no second publisher was reachable**

This is stated plainly here and in **both** affected clause gaps.

Every free second publisher for a Federal Reporter opinion is egress-blocked from this
session — Justia, FindLaw, Google Scholar, case.law, casetext, leagle, openjurist,
anylaw, casemine, vlex, archive.org, law.resource.org, and the Ninth Circuit's own server.
F.3d is not in govinfo. **These quotes were therefore not confirmed against two independent
publishers.** What was done instead:

CourtListener hosts **two separate clusters for each opinion, built from two different
underlying texts**. Both were fetched and diffed word by word with
`difflib.SequenceMatcher`:

| Opinion | Cluster A (unpaginated render) | Cluster B (star-paginated render) |
|---|---|---|
| *In re Cybernetic Services* (9th Cir. 2001) 252 F.3d 1039 | 773591 — 9,383 words, straight quotes, numbered paragraphs, **no star pagination** | 7093613 — 9,296 words, curly quotes, star markers `*1045`–`*1059` |
| *In re World Auxiliary Power Co.* (9th Cir. 2002) 303 F.3d 1120 | 779159 — 5,753 words, straight quotes, numbered paragraphs, **no star pagination** | 7107960 — 5,619 words, curly quotes, star markers `*1123`–`*1132` |

The CourtListener `/api/rest/v4/clusters/` endpoint returned **HTTP 401** (auth required);
the public `/api/rest/v4/search/` endpoint and the `/opinion/<id>/<slug>/` HTML pages were
used instead. Two HTTP 429s and one block of 403s were ridden out with in-turn `sleep 300`
loops and the URLs then returned 200.

**This is two renderings by one publisher, not two publishers, and every affected gap says so.**

---

## 3. Defects found in the record, disclosed rather than corrected

### 3.1 *World Auxiliary Power* contains a sentence that contradicts both of its neighbours

At 303 F.3d 1128 the opinion prints:

> Thus, under these step-back provisions, if a borrower's collateral is a registered
> copyright, the secured party **cannot perfect** by filing a financing statement under the
> U.C.C. in the appropriate state office, **or alternatively by recording a transfer in the
> Copyright Office.**

The sentence immediately before it reads "…a security interest can be perfected **only by
recording the transfer in the Copyright Office**," and the sentence immediately after reads
"**For registered copyrights, the only proper place to file is the Copyright Office.**" The
trailing clause, governed by "cannot perfect," therefore states the opposite of its own
neighbours on both sides.

**Confirmed to be in the record, not in this session's extraction:**

- It appears **identically** in both independently built CourtListener renderings
  (7107960 and 779159).
- Exact-phrase index query
  `q="or alternatively by recording a transfer in the Copyright Office"` → **count 2**,
  which is those two renderings and nothing else — so no later opinion in that database
  has quoted the sentence, and the defect has not propagated.
- A **first, longer phrase query returned HTTP 429 rather than a count.** It was **re-run
  shorter** as `q="cannot perfect by filing a financing statement under the U.C.C."` after
  an in-turn 300-second wait → **count 2**. This re-run is recorded because a query that
  errors rather than returning a count proves nothing.

**Handling:** the defective sentence is **quoted in full in the gap** of
`ipsec_registered_and_unregistered_copyrights` and is **excluded from the citations**. The
substantive proposition is carried by the two clean neighbouring sentences, which are cited.
Nothing was rewritten.

### 3.2 Cluster 773591 doubles every section symbol in *Cybernetic Services*

It prints `35 U.S.C. §§ 261`, `11 U.S.C. §§ 544 (a)(1)`, `Cal. Com. Code §§ 9106`,
`Grant Gilmore, Security Interests in Personal Property §§ 10.1`, and
`4 White & Summers §§ 30-12` where cluster 7093613 prints single symbols throughout.
This is an auto-linking artifact in that rendering. **Every quote taken from this opinion
was chosen to contain no section symbol**, and the artifact is disclosed in
`ipsec_patent_security_interest_not_an_assignment`'s gap. It was not corrected.

### 3.3 Cluster 773591 drops a space before an opening quotation mark

It prints `…rights of ownership is a"mere license"…` where 7093613 prints
`…is a “mere license”…`. The "In summary" sentence is consequently **split into two
citation fragments straddling the damaged point** — one ending at "…is a", one resuming at
"and is not an “assignment, grant or conveyance” within the meaning of" — rather than
quoted across it. Disclosed in the same gap.

### 3.4 Cluster 7093613 carries OCR damage

`Cal. ConxCode § 9106` for "Cal. Com. Code § 9106"; `regardless of the- horizontal line`;
unbalanced quotation marks in footnote 6 (`"the attributes of personal property’`). The
`ConxCode` corruption sits immediately after the "general intangibles" sentence, which is
why that quote **stops before the citation**. Disclosed in
`ipsec_general_intangible_category`'s gap. **This session did not resolve which spelling
the printed Federal Reporter carries** — neither rendering was assumed correct.

### 3.5 Cluster 7107960 carries OCR damage

`World Aer-otechnology`, `Petalu-ma`, `Peregrine.,` — line-wrap hyphenation and stray
punctuation from the scan. None falls inside a quoted span. Disclosed.

---

## 4. Pin cites and star pagination

Only the **B** cluster of each pair carries star pagination; the A clusters carry none.
Pin cites are therefore taken from the B renderings, and this is stated in the gaps.

- *Cybernetic*: star sequence `*1045 *1046 … *1059`, strictly monotonic. Pin cites given:
  1045, 1052 (×2), 1054, 1059.
- **No pin cite is given for two *Cybernetic* quotes** — the question-presented sentence and
  the "neither the Patent Act nor Article 9 so requires" holding sentence. Both sit in the
  opinion's introduction, **before the first star marker the paginated rendering carries**,
  so the page cannot be fixed from what was fetched. The `cite` field says exactly that.
- *World Auxiliary*: star sequence `*1123 … *1132`, then a **second, out-of-order `*1131`**.
  That trailing marker is in the relocated footnote block. **Footnote text in both B
  renderings is moved to the end of the document, past the last body star marker**, so
  nothing from a footnote is quoted or pin cited. Pin cites given: 1126, 1128 (×2), 1132.
- This matters for one negative result: *Cybernetic* footnote 6 states "Although no circuit
  court has yet resolved the issue that we face…". That sentence was verified present in
  **both** renderings but is **paraphrased in the gap without a pin cite**, because it is
  footnote text.

---

## 5. Negative results recorded in the clauses

- **No second free publisher** was reachable for either Ninth Circuit opinion (§ 2C above);
  stated in both affected gaps.
- **No California appellate decision** construing Com. Code § 9109(c)(1) as applied to
  intellectual property collateral was located; the governing authority is federal.
- **No California appellate decision** applying Com. Code § 9408 to an intellectual
  property licence was located.
- Both opinions are **Ninth Circuit** — binding on federal courts in that circuit, **not on
  California state courts**. Stated in both gaps.
- Both opinions construe the **pre-2001 California numbering** (former §§ 9104(a), 9302(3),
  9106), not the renumbered §§ 9109(c)(1), 9311 and 9102(a)(42) quoted in this document.
  **Neither court addresses the renumbering.** Stated in three gaps and in the closing clause.
- *Cybernetic* **expressly reserved** two questions, each in a footnote: whether the trustee
  was a subsequent "purchaser" (not argued below) and the validity of the PTO's regulations
  (not challenged). Recorded in the gap.
- 35 U.S.C. § 261 was **amended after** *Cybernetic* was decided, by Pub. L. 112-211 (2012),
  which added apostille language. The two sentences quoted were not touched, but **the text
  of that amendment was not separately verified** — disclosed.
- 17 U.S.C. § 205 carries credits showing amendments by Pub. L. 100-568 (1988) and
  Pub. L. 111-295 (2010); **the content of those amendments was not separately verified**
  beyond the section as it now stands — disclosed.
- **Trademark security interests, foreclosure, attachment, and collateral description are
  named as outside scope** in the closing drafting clause rather than left to be inferred.

---

## 6. Validation run

Python check asserting: both files parse; clause ids unique; document ids unique; document
titles unique corpus-wide; every `clauseOrder` id resolves; every authority clause has a
non-empty `gap` and ≥ 1 citation; no orphan clauses; no undeclared `{{placeholder}}` in any
body or gap; canonical key order for clauses (`id, title, kind, status, checkedDate, body,
gap, citations` / `id, title, kind, body`), for citations (`case, cite, url, quote`), for
documents (`id, title, description, categories, clauseOrder, fields`) and for fields
(`id, label, placeholder, required`).

```
clauses 6446 docs 729
authority 4840 drafting 1606
NEW clauses 15 authority 13 drafting 2 citations 29
STRUCTURE PASS
```

Then every quote was **read back out of the written `data/clauses.json`** and re-matched as
a substring of each fetched source file:

```
citations checked: 29 failed source-matches: 0
QUOTE RECHECK PASS
```

Counts above are read from the written file, not from memory.

---

## 7. Clause manifest

| # | id | kind | citations |
|---|---|---|---|
| 1 | `ipsec_scope_and_limits` | drafting | — |
| 2 | `ipsec_general_intangible_category` | authority | Com. Code § 9102(a)(42); *Cybernetic* 252 F.3d at 1045 |
| 3 | `ipsec_default_rule_file_a_financing_statement` | authority | Com. Code § 9310(a) |
| 4 | `ipsec_federal_preemption_stepback` | authority | Com. Code § 9109(c)(1) |
| 5 | `ipsec_compliance_with_federal_statute_substitutes` | authority | Com. Code § 9311(a)(1), (b) |
| 6 | `ipsec_copyright_security_interest_is_a_transfer` | authority | 17 U.S.C. § 101 |
| 7 | `ipsec_copyright_recordation_constructive_notice` | authority | 17 U.S.C. § 205(a), (c) |
| 8 | `ipsec_copyright_conflicting_transfers_priority` | authority | 17 U.S.C. § 205(d), (e) |
| 9 | `ipsec_registered_and_unregistered_copyrights` | authority | *World Auxiliary* 303 F.3d at 1126, 1128 ×2, 1132 |
| 10 | `ipsec_patent_register_and_recording_clause` | authority | 35 U.S.C. § 261 ×2 |
| 11 | `ipsec_patent_security_interest_not_an_assignment` | authority | *Cybernetic* ×6 (two with no pin cite) |
| 12 | `ipsec_where_to_file_debtor_location` | authority | Com. Code § 9301(1) |
| 13 | `ipsec_anti_assignment_terms_and_confidential_information` | authority | Com. Code § 9408(a), (d)(5), (d)(6) |
| 14 | `ipsec_bankruptcy_hypothetical_lien_creditor` | authority | 11 U.S.C. § 544(a), (a)(1) |
| 15 | `ipsec_not_covered_and_acknowledgment` | drafting | — |

Fields declared: `debtorName`, `securedPartyName`, `ipDescription`, `preparerName`,
`dateSigned`. Every `{{field}}` used in any body or gap is declared.
