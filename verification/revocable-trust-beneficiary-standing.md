# Verification — Beneficiary Rights and Standing Under a Revocable Trust (Estate Planning)

Document id: `revocable_trust_beneficiary_standing_info_sheet`
Clause id prefix: `revbenst_`
Checked: 2026-09-14

15 clauses (1 drafting, 14 authority), 41 citation quotes. Every quote below was confirmed to be a
verbatim substring of **two independent fetches** of its source, and then re-confirmed by reading the
quotes back out of the written `data/clauses.json` (41 pass / 0 fail).

---

## 1. Coverage check before drafting (greps at HEAD = 3aa917d)

Counted with `grep -oF` over `data/documents.json` and `data/clauses.json`:

| term | documents.json | clauses.json | inspected? |
|---|---|---|---|
| `Barefoot` | 0 | 0 | — |
| `Giraldin` | 0 | 0 | — |
| `Drake v. Pinkham` | 0 | 0 | — |
| `Evangelho` | 0 | 0 | — |
| `Johnson v. Kotyck` | 0 | 0 | — |
| `Steinhart` | 0 | 0 | — |
| `15802` | 0 | 0 | — |
| `15801` | 0 | 2 | yes — both in `trust_settlor_interest_revocable` / `brtrust_*`, one-sentence statements of the consent rule; no case law |
| `15800` | 0 | 10 | yes — 5 clauses, each citing the section in passing inside documents about trust funding, accountings, trustee compensation and breach-of-trust directions |
| `16069` | 1 | 13 | yes — mostly the accounting-duty sheet (`benacct_*`) and the trust-notification sheet; none discusses the section's cross-reference to § 15800(a) or Giraldin's reading of it |
| `17200, subdivision (a)` | 0 | 1 | yes — a single passing reference; not about standing |

Conclusion: the *statutes* are touched in passing by a handful of existing clauses, but **no case
construing them appears anywhere in the corpus**, and no document is about beneficiary standing under a
revocable trust. The first candidate considered — a § 850/§ 859 "Heggstad petition" sheet — was
discounted because `Heggstad` already returns 2 hits (`trustfunding_heggstad_petition` and the Living
Trust Funding document).

---

## 2. Sources and fetch paths

### Statutes — Probate Code §§ 15800, 15801, 15802, 16069, 17200, 24

* **Fetch A:** `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PROB&sectionNum=<n>.`
  with a Chrome User-Agent and a JSF session cookie seeded from `/faces/codes.xhtml` (without the cookie
  the section body comes back empty). Body extracted from the `codeLawSectionNoHead` block.
* **Fetch B:** `california.public.law/codes/ca_prob_code_section_<n>` with a Safari User-Agent
  (requires `-L`; the bare URL answers 301).
* **Comparison:** the two texts agree in substance for all six sections. The only systematic difference
  is presentational: **california.public.law prints subdivision markers with no following space**
  (`(1)The person holding…` vs leginfo's `(1) The person holding…`). Every quote therefore begins after
  the marker. leginfo additionally inserts hard line breaks mid-sentence (e.g. between
  "the trust instrument" and "otherwise provides" in § 15800(b), and between "If the interest of" and
  "a beneficiary fails" in § 15800(b)(4)).
* **Normalization applied and disclosed in the clause gaps:** runs of whitespace collapsed to single
  spaces; non-breaking spaces replaced with ordinary spaces. Nothing else.
* Amendment notes agree on both hosts: § 15800 — Stats. 2022, Ch. 420, Sec. 42 (AB 2960), eff. Jan. 1,
  2023; § 16069 — Stats. 2021, Ch. 749, Sec. 2 (AB 1079), eff. Jan. 1, 2022; § 17200 — Stats. 2010,
  Ch. 621, Sec. 11 (SB 202); §§ 15801, 15802, 24 — unamended since enactment.

### Estate of Giraldin (2012) 55 Cal.4th 1058

* **Fetch A:** `https://www.courtlistener.com/opinion/821516/giraldin-v-giraldin/`, Chrome User-Agent,
  `Referer: https://www.courtlistener.com/`, `Accept: text/html…`.
* **Fetch B:** the citation redirect `https://www.courtlistener.com/c/Cal.%204th/55/1058/`, Safari
  User-Agent, `Accept-Language: en-GB`.
* **Comparison:** the two extractions are **character-for-character identical** (58,962 chars each after
  whitespace normalization).
* **No independent second host was reachable.** Probed and rejected: `casetext.com` (HTTP 410 for this
  case), `www.courts.ca.gov/opinions/archive/S197694.PDF` (404 — the archive does not keep 2012
  opinions), `casemine.com`, `cite.case.law`, `static.case.law`, `vlex.com`, `opinions.courts.ca.gov`
  (all connection failures). Justia / FindLaw / Scholar / archive.org are egress-blocked per the brief
  and were not attempted.
* **Pin cites** were taken from the star pagination carried in this copy (`*1061`–`*1082`) by locating
  each quote between consecutive star markers, not from memory. Results: duty-solely sentence → 1066;
  "powerless to act" → 1067; no-retroactivity and the standing sentence → 1071; § 16069 reading,
  "Nothing in section 15800 limits…", "no statute, judicial decision, or other authority", contingent
  beneficiary → 1069; "We merely hold…", "We express no view…", the laches passage → 1076; § 15802
  quotation → 1067; § 15800 quotation → 1066.

### Barefoot v. Jennings (2020) 8 Cal.5th 822

CourtListener holds **two distinct copies**, which served as the two independent texts, and each was
additionally fetched twice under different header sets:

* **Cluster 4714805** — bears the reporter citations 8 Cal.5th 822, 456 P.3d 447, 257 Cal.Rptr.3d 629.
  Fetched with a Chrome UA and again with a Safari UA / `Accept-Language: en-GB`; the two fetches are
  identical (17,527 chars normalized).
* **Cluster 4722741** — headed **"Reposted corrected version"**, no reporter citation in the metadata.
  Fetched under the same two header sets; identical to itself (17,554 chars normalized). The second
  fetch first returned an empty HTTP 202 and succeeded on the in-turn retry.
* **No pin cites are given.** Both copies are slip-format text paginated 1–9 with no star pagination to
  the Official Reports, so no page of 8 Cal.5th could be checked. The `cite` field says so explicitly.
* Whitespace-run collapsing was required (slip text has hard wraps mid-sentence) and is disclosed in the
  clause gaps.

### Drake v. Pinkham (2013) 217 Cal.App.4th 400

* Fetched once from `https://www.courtlistener.com/opinion/1037269/drake-v-pinkham/` (Chrome UA) and
  **read only to confirm the accuracy of the Supreme Court's characterization of it**. Nothing is quoted
  from this copy: it is an intermediate-court decision, so the only language quoted is the parenthetical
  description **as Barefoot reproduces it**, which is stated in that clause's `gap`.
* The copy is a slip with no star pagination and a damaged text layer that renders apostrophes as
  U+201F (`Gina‟s`), a further reason no language was taken from it.

---

## 3. Defects found and disclosed rather than corrected

### (a) Two published copies of Barefoot v. Jennings give the settlor's death two different years

This is the principal find and has its own clause, `revbenst_barefoot_two_versions`.

* Cluster **4714805** (the copy bearing the Official Reports citation):
  "After Maynord's death on **August 20, 2013**, plaintiff filed a petition in probate court…"
* Cluster **4722741** ("Reposted corrected version"):
  "After Maynord's death on **August 20, 2016**, plaintiff filed a petition in probate court…"

Both copies recite, two paragraphs earlier, that "In or around August 2013 and continuing through 2016,
Maynord executed a series of eight amendments… The 24th amendment was the final amendment prior to
Maynord's death." The 2013 date is therefore internally impossible; the reposted version is the
consistent one.

Independently confirmed through CourtListener's phrase index (quota-free search JSON):

| query | count |
|---|---|
| `cluster_id:4714805 AND "death on August 20, 2013"` | 1 |
| `cluster_id:4722741 AND "death on August 20, 2016"` | 1 |
| `cluster_id:4714805 AND "death on August 20, 2016"` | 0 |
| `cluster_id:4722741 AND "Reposted corrected version"` | 1 |

(The third query first returned a non-JSON body under rate limiting; it was re-run after a pause and
returned count 0.)

A whole-document diff of the two normalized texts shows **exactly two differences**: the
"Reposted corrected version" header line and this year. The clause quotes each sentence from the copy it
actually appears in and says so; it does **not** assert which year is printed in the bound Official
Reports, because no copy of the bound report was reachable.

### (b) The CourtListener text layer of Estate of Giraldin is OCR-damaged

Disclosed in `revbenst_giraldin_duty_runs_to_settlor`'s `gap`; none of these strings appears in any
quote taken:

| as printed | should read | occurrences |
|---|---|---|
| `tmst` | trust | 4 |
| `trastee` | trustee | 1 |
| `foil. §` | foll. § | 9 |
| `fh. 35` | fn. 35 | 1 |
| `54A pt.l` | 54A pt. 1 | 1 |
| `Werdegar, 1, concurred` | Werdegar, J., concurred | 1 |

**And a citation error of substance:** the opinion first cites *Evangelho v. Presoto* correctly as
`67 Cal.App.4th 615` (2 occurrences), then prints `61 Cal.App.4th` three times for the same case.
CourtListener's own citation index independently records Evangelho v. Presoto (1998) as
**67 Cal. App. 4th 615** (cluster 2301716), so the three later instances are wrong. Because both fetch
paths return the same text and no second publisher was reachable, **it could not be determined whether
the error is in the Official Reports or only in this transcription**, and the gap says exactly that
rather than picking one. Given the digit/letter confusions listed above (`1` for `J.`, `l` for `1`), an
OCR origin is the more likely explanation, but that is not asserted as fact in the clause.

### (c) Estate of Giraldin quotes § 15802 without marking an omission

Disclosed in `revbenst_consent_and_notice`'s `gap`. At 55 Cal.4th at p. 1067 the court writes
'Section 15802 provides that "during the time that a trust is revocable…"', beginning the quoted matter
after the statute's opening clause "Notwithstanding any other statute," with no ellipsis. The clause
reproduces the court's sentence as it stands and quotes the complete statutory text separately from the
two statutory sources.

### (d) The § 15800 the Supreme Court quoted is not the § 15800 in force

Disclosed as its own clause, `revbenst_statute_rewritten_after_giraldin`. Giraldin (2012) quotes the
section as applying "during the time that a trust is revocable and **the** person holding the power to
revoke the trust is competent", with the two operative rules as subdivisions **(a)** and **(b)** — which
is why the opinion says "section 15800, subdivision (b)" for the trustee's-duties rule. The section in
force reaches the case where "**at least one** person holding the power to revoke the trust, **in whole
or in part**, is competent"; the two rules are now paragraphs (1) and (2) of subdivision **(a)**; and a
new subdivision (b) governs the opposite case. The current subdivision (b) is a different provision from
the one the Supreme Court cited. No claim is made in the clause about what effect the amendment has on
the holding.

### (e) Pin-cite discipline

* Barefoot: **no pin cites given**, both copies being slip-only.
* Drake v. Pinkham: **no pin cite of our own**; Barefoot's pin cite (pp. 407-409) is recorded in the
  `gap` rather than in a `cite` field, because in both Barefoot copies that range is broken across a line
  as `407-` / `409` and quoting it would require normalizing a line-wrapped page range.
* Giraldin: the sentence "We do not read section 16069…" occurs **twice** in the opinion — at p. 1069 in
  the majority and at p. 1080 where the dissent quotes the majority. The pin cite given is 1069, the
  majority's own statement; this is noted in the clause gap.

### (f) Negative results recorded in gaps

* Neither Giraldin nor Barefoot construes § 15800(b): both predate that text. No California Supreme
  Court decision construing the 60-day notice duty was found, so `revbenst_incapacity_notice` rests on
  the statute alone and says so.
* Giraldin expressly declined to decide the merits and expressly declined to decide whether the action
  was time-barred by limitations or laches (`revbenst_giraldin_left_open`).
* Barefoot expressly reserved (i) whether an heir who was never a beneficiary has standing (fn. 2) and
  (ii) the interpretation of § 850 (`revbenst_barefoot_limits`).
* Giraldin recorded its own negative survey: "we are aware of no statute, judicial decision, or other
  authority, from this or any other state, denying such standing."
* CourtListener labels the Giraldin cluster "Giraldin v. Giraldin"; the case name in the opinion's own
  headmatter is "Estate of WILLIAM A. GIRALDIN, Deceased…", and the clauses use *Estate of Giraldin*.

---

## 4. Per-citation verification result

All 41 citation quotes were re-read out of the committed `data/clauses.json`, whitespace-normalized, and
tested as substrings of the normalized fetched texts:

| source | fetches tested against | quotes | result |
|---|---|---|---|
| Prob. Code § 15800 | leginfo + california.public.law | 6 | 6/6 pass |
| Prob. Code § 15801 | leginfo + california.public.law | 1 | 1/1 pass |
| Prob. Code § 15802 | leginfo + california.public.law | 1 | 1/1 pass |
| Prob. Code § 16069 | leginfo + california.public.law | 2 | 2/2 pass |
| Prob. Code § 17200 | leginfo + california.public.law | 2 | 2/2 pass |
| Prob. Code § 24 | leginfo + california.public.law | 1 | 1/1 pass |
| Estate of Giraldin | opinion page + `/c/` redirect (2 UAs) | 13 | 13/13 pass |
| Barefoot v. Jennings (both copies) | clusters 4714805 + 4722741, 2 UAs each = 4 fetches | 13 | 13/13 pass |
| Barefoot — the 2013 sentence | cluster 4714805, both fetches only | 1 | 1/1 pass (absent from 4722741 by design) |
| Barefoot — the 2016 sentence | cluster 4722741, both fetches only | 1 | 1/1 pass (absent from 4714805 by design) |

**Total: 41 pass / 0 fail.**

## 5. Post-merge corpus validation

Asserted and passed: both files parse; clause ids unique; document ids unique; document titles unique;
every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and ≥1 citation; no orphan
clauses; no undeclared `{{placeholder}}`; canonical key order for clauses
(`id,title,kind,status,checkedDate,body,gap,citations`), citations (`case,cite,url,quote`), documents
(`id,title,description,categories,clauseOrder,fields`) and field objects
(`id,label,placeholder,required`).

Corpus after merge: **717 documents, 6,269 clauses.**
