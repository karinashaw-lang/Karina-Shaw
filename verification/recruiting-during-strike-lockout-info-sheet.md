# Verification — Advertising and Recruiting for Workers During a Strike or Lockout

- Document id: `recruiting_during_strike_lockout_info_sheet`
- Category: `["Hiring"]`
- Clause prefix: `strikehire_`
- Clauses: 15 (13 authority, 2 drafting); 26 citation entries
- `checkedDate`: 2026-09-15
- All counts read from the written `data/clauses.json`, not from drafting notes.

## 1. Why this topic was uncovered (structural gap)

The Hiring category's 92 pre-existing documents all posit hiring under ordinary
conditions. The one document that touches a labor dispute,
`fraudulent_inducement_to_relocate_info_sheet`, takes Labor Code §§ 970–972 — the
half of the chapter "Solicitation of Employees by Misrepresentation" that forbids
**false statements** made to induce a move — and its own gap note expressly records
what it leaves behind:

> "This clause does not address the neighboring sections of the same chapter (Labor
> Code §§ 973, 974, 976, 977) that impose separate, related disclosure obligations
> on advertisements for work during a labor dispute …"

That is a recorded negative, not coverage. The corpus had taken the
*misrepresentation* half of the chapter and left the *affirmative disclosure* half
untouched. Separately, `trade_dispute_ui_disqualification_info_sheet` is filed under
**Ending employment** and treats a strike only from the striker's side (Unemp. Ins.
Code § 1262); nothing in the corpus asked about the position of the person being
**recruited into** the struck establishment, or about the employer doing the
recruiting.

### Grep counts and discounted false positives

Run over `data/clauses.json` + `data/documents.json` before the append:

| Pattern | Raw hits | After inspection |
|---|---|---|
| `strike` (case-insensitive) | 26 + 2 | All discounted: 18 are anti-SLAPP "special motion to **strike**", "**strike**out" formatting, "preemptive **strike**", "**strike**-and-insert markup", restraining-order "**strike**, stalk". Only `reloinduce_core_prohibition` (quoting § 970(d)) and the trade-dispute UI sheet are genuine. |
| `lockout` | 9 + 5 | 6 genuine-topic hits are § 970(d), the § 1262 UI sheet, a WARN carve-out mention, and self-help **eviction** lockouts (landlord/tenant — discounted). |
| `labor dispute` | 5 + 2 | Only § 970(d) and the § 1262 UI sheet. |
| `strikebreak` | **0** | — |
| `replacement worker` | **0** | — |
| `Belknap` | **0** | — |
| `Mackay` | **0** | — |
| `Machinists` / `Garmon` | **0** / **0** | — |
| `\b973\b` | 2 | Both discounted as coverage: one is the **gap note quoted above** (a recorded negative), the other is the pin cite `218 F.3d 973` (Fielder v. UAL). |
| `\b974\b` | 7 | All pin cites / case cites: `42 Cal.4th 974` (Marathon Entertainment ×4), `63 Cal.App.5th 958, 974-975` (Martinez ×2), plus the same gap note. |
| `\b1259\b` | 3 | All pin cites: `121 Cal.App.4th 1238, 1259` (Jara ×2), `1 Cal.App.5th 1252, 1259` (Yhudai). **No** hit was Unemp. Ins. Code § 1259. |
| `\b1231\b` | 2 | Both `202 F.3d 1227, 1231` (Aalmuhammed v. Lee). **No** hit was 18 U.S.C. § 1231. |
| `\b1132\.6\b` | 0 | — |
| `463 U.S. 491` | 0 | — |

Every numeric hit was a reporter pin cite or the recorded negative. Nothing in the
corpus covered Labor Code § 973, § 974, Unemp. Ins. Code § 1259, *People v. Smith*,
*Belknap v. Hale*, or 18 U.S.C. § 1231.

## 2. Per-citation verification

Comparison method for every quote: both fetches were reduced to plain text, then
normalized by (a) collapsing runs of whitespace including `&nbsp;`, and (b) folding
typographic curly quotes/apostrophes and figure/non-breaking hyphens to their ASCII
forms. Ligatures were folded but none occurred. **No word, punctuation mark or
ordering was altered.** The stored quote was then asserted to be a substring of each
normalized fetch by script (`cmp.py`, then re-run from the written corpus by
`reverify.py`). Result: **26/26 pass, 0 failures.**

### Labor Code § 973 (quotes: disclosure sentence; identification + prima facie sentences)

| Path | Publisher | Result |
|---|---|---|
| `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=973.` | CA Legislative Counsel (official) | substring ✓ |
| `law.onecle.com/california/labor/973.html` | onecle | substring ✓ |

**Genuinely independent publishers.** onecle is a 2017 snapshot; both fetches carry
`(Amended by Stats. 1947, Ch. 281.)` and leginfo shows no later amendment, so the
snapshot is current and **no chaptered-bill corroboration was needed**.
`california.public.law` was deliberately **not** used — it prints a "Source:" line
naming leginfo and is a third copy of one publisher, not independent verification.

### Labor Code § 974; § 970(d); Unemp. Ins. Code § 1259(a), (c)

Same two-publisher pair (leginfo + onecle), all substring ✓. History lines:
§ 974 `(Amended by Stats. 1943, Ch. 1024.)`; § 970 `(Enacted by Stats. 1937, Ch. 90.)`
— never amended; § 1259 `(Amended by Stats. 1977, Ch. 1252.)`. All predate the 2017
onecle snapshot. onecle's UIC path is
`law.onecle.com/california/unemployment-insurance/1259.html` (the shorter
`/california/unemployment/` path 404s).

### 18 U.S.C. § 1231

| Path | Publisher | Result |
|---|---|---|
| `uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title18-section1231…` | Office of the Law Revision Counsel | substring ✓ |
| `law.cornell.edu/uscode/text/18/1231` | Cornell LII | substring ✓ |

**Genuinely independent publishers.** OLRC fetch labelled "Text contains those laws
in effect on September 13, 2026"; both carry the same history ending
Pub. L. 103-322 § 330016(1)(K).

### *Belknap, Inc. v. Hale*, 463 U.S. 491 (1983)

| Path | Publisher | Result |
|---|---|---|
| `courtlistener.com/opinion/111006/belknap-inc-v-hale/` | CourtListener | substring ✓ |
| `law.cornell.edu/supremecourt/text/463/491` | Cornell LII | substring ✓ |

**Genuinely independent publishers.** The reporter redirect
`courtlistener.com/c/U.S./463/491/` was followed (302 → 200) and resolves to the same
cluster **111006** — the majority opinion, not a separate-opinion cluster.

### *People v. Smith* (1955) 133 Cal.App.2d Supp. 777

| Path | Publisher | Result |
|---|---|---|
| `courtlistener.com/opinion/1409956/people-v-smith/` | CourtListener | substring ✓ |
| `courtlistener.com/c/Cal.%20App.%20Supp.%202d/133/777/` | CourtListener (second **path**, same publisher) | resolves to cluster 1409956 ✓ |
| exact-phrase search index queries | CourtListener (second **path**, same publisher) | count = 1 ✓ |

**ONE PUBLISHER ONLY — stated plainly in every affected gap.** No second free
publication of this 1955 opinion was reachable: it predates the courts.ca.gov
opinion archive, and Justia, Google Scholar, casetext, leagle, anylaw, case.law and
archive.org are egress-blocked. A redirect and a phrase index are two *paths* to one
publisher, not a second publisher.

## 3. Defects disclosed rather than silently corrected

### (a) *Belknap* — the two publishers disagree on the concluding sentence, and neither is clean

- CourtListener: "…is pre-empted under **Gannon** or Machinists…"
- Cornell LII: "…is preempted under **the Garmon** or **the Machinists**…"

"Gannon" appears nowhere else in the opinion; the case is *San Diego Building Trades
Council v. **Garmon***, which the opinion names correctly ~6 times elsewhere. An
`rm`→`nn` substitution is a classic OCR confusion. LII's version has the case names
right but carries stray definite articles and drops the hyphen.

Confirmed **in the record, not in my extraction**: the exact-phrase index query
`cluster_id:111006 AND "under Gannon or Machinists"` returned **count = 1**. The raw
LII HTML reads `under the <em>Garmon</em> or the <em>Machinists,</em>`.

**Tie not broken.** No third primary publication of volume 463 of the U.S. Reports
was reachable: `tile.loc.gov` and `www.loc.gov` were refused by the proxy (CONNECT
403), the GovInfo search API returned `OVER_RATE_LIMIT` (429), and
`supremecourt.gov/opinions/boundvolumes/463bv.pdf` 404s (that archive starts later).
Accordingly **that sentence is quoted nowhere in this sheet and no clause depends on
it**; the divergence is recorded in the gap of both Belknap clauses.

### (b) *People v. Smith* — CourtListener's rendered HTML and its own search index disagree

Confirmed by paired exact-phrase queries on `cluster_id:1409956`:

| Phrase | Index count |
|---|---|
| `"Bach of these terms"` (as the **rendered HTML** prints it) | **0** |
| `"Each of these terms, when so used"` | **1** |

So the same publisher's two paths do not agree on that word. Verified that "Bach" is
genuinely in the fetched HTML (`grep` on the raw file), so this is not an extraction
artifact. Other OCR damage found in the rendered text and disclosed in the gaps:
`Prom the decisions in these eases` (for "From … cases"), `the statue next to be
cited` (for "statute"), and `at any shop, plant', or establishment` — a stray
apostrophe inside the court's **own block quotation of § 973**, i.e. the opinion's
rendering of the statute differs in punctuation from the statute as both statutory
publishers print it. **None of the seven passages quoted in this sheet falls inside a
damaged span**, and each was confirmed present in the search index by exact-phrase
query before use.

### (c) *People v. Smith* — CourtListener's court metadata contradicts the opinion's own caption

CourtListener assigns `court_id: "calctapp"` and labels the case "California Court of
Appeal". The opinion's caption reads "Court of Appeals of California, **Appellate
Department, Superior Court, Los Angeles**", and the citation is to the Appellate
Department supplement (`133 Cal.App.2d Supp. 777`). The sheet reports the court as
the opinion states it, cites it `(Cal. App. Dep't Super. Ct. 1955)`, and records the
metadata mismatch. No clause asserts what precedential weight the decision carries.

### (d) Labor Code § 973 — three different phrases for one condition, in the enacted text

- § 970(d): "any strike, lockout, or other **labor dispute**"
- § 973 trigger: "a strike, lockout, or other **trade dispute** is still in active progress"
- § 973 disclosure: "a strike, lockout, or other **labor disturbance** exists"

The two § 973 phrases sit in **one sentence**. This is in the enacted statute, not a
publisher artifact — both independent publishers render it identically. *People v.
Smith* addressed it and resolved it by context, then **expressly reserved** whether
pleading one phrase for the other suffices. Given its own clause
(`strikehire_terminology_divergence`) rather than being smoothed over.

### (e) Labor Code § 975 does not exist, on two publishers' evidence

leginfo's chapter heading reads `CHAPTER 2. Solicitation of Employees by
Misrepresentation [970 - 977]`, but a leginfo request for § 975 returns a page with
**no section text**, and onecle's own chapter navigation lists 970, 971, 972, 973,
974, 976, 977 — skipping 975. Recorded as a negative in the § 973 gap; the sheet does
not assert when or how § 975 left the chapter, because that was not researched.

### (f) 18 U.S.C. § 1231 — dash rendering differs between publishers

At the end of the second "Whoever" paragraph, uscode.house.gov prints a hyphen-minus
where Cornell LII prints an em dash. The stored quote **stops before the dash** rather
than adopting either form; disclosed in the gap. Both publishers also preserve the
same grammatically incomplete two-"Whoever"-clauses-then-"Shall be fined"
construction, which is reproduced, not repaired.

## 4. Pin cites

- *Belknap*: located programmatically from CourtListener's U.S. Reports star markers
  (last marker before the quote, first after). `QBEL1` → **493**; `QBEL2`, `QBEL3` →
  **500**. **Cornell LII's rendering carries zero star markers** (it is
  paragraph-numbered), so LII citations are given with **no pin cite and the reason
  stated in the `cite` field**.
- *People v. Smith*: `*Supp. NNN` markers, located programmatically. Supp. 780
  (vagueness/common-use passage), Supp. 782 (purpose; "no doubt true"; § 1262 link),
  Supp. 783 ("In all of these cases"; reserved question; disposition). The Supp. 783
  passages fall after the **last** marker in the rendering; the page therefore rests
  on the preceding marker and that is noted in the gap.

## 5. Negative results recorded

- Exact-phrase search of CourtListener for `"Labor Code section 973"` /
  `"Labor Code, section 973"` / `"Labor Code § 973"` → **count 0**.
- Broader search (`"sections 970 to 977"` etc.) → **16 hits**; fifteen were probate /
  trust decisions matching unrelated section numbers (Estate of Neider, Estate of
  Armstrong, Wells Fargo v. Kirkwood, etc.) and were inspected and discounted. The
  sixteenth was *People v. Smith*. On this evidence *Smith* is the only reported
  decision construing § 973; **no decision at all** was located construing § 974 or
  the identification requirement in § 973's second sentence.
- The question *Smith* expressly reserved (pleading "trade dispute" where the statute
  says "labor disturbance") — no later decision resolving it was located.
- No case law construing 18 U.S.C. § 1231 was fetched or relied on.
- No regulation or decision construing "vacant due directly to" in Unemp. Ins. Code
  § 1259(a) was fetched or relied on.
- Labor Code §§ 976–977 (misleading advertisements for salesman/broker/agent
  compensation) were fetched and read, found to concern a different subject, and are
  **not** covered by this sheet — still an open gap in the corpus.

## 6. Validation

`python3 tools/validate_corpus.py`:

```
733 documents / 6506 clauses (4892 authority, 1614 drafting), 11232 citations
{'Business Formation': 93, 'Confidentiality & IP': 93, 'During employment': 92,
 'Ending employment': 93, 'Estate Planning': 92, 'Family Law': 92,
 'Hiring': 93, 'Real Estate': 93}

validation passed
```

Post-write re-verification (`reverify.py`, reading quotes back out of
`data/clauses.json`): **26 citations checked, 0 failures**; placeholders used
`{cityState, companyName, dateSigned, establishmentLocation, preparerName}` — none
undeclared, none declared-unused; 13 authority / 2 drafting; no empty gaps;
`clauseOrder` fully resolves; canonical key order holds.

`git diff --stat`: 368 insertions, **0 deletions** — append-only confirmed. A
byte-level round-trip test was run on both data files before writing to confirm that
`json.dumps(obj, indent=2, ensure_ascii=False)` reproduces the existing files exactly,
so no pre-existing entry was reformatted.
