# Verification — Presenting a Claim to a Public-Entity Employer Before Suing Over a Termination

Document id: `public_entity_employer_claim_presentation_info_sheet`
Category: Ending employment
Clause id prefix: `gcapres_`
Checked date on every authority clause: 2026-09-15

---

## 1. Why this topic was treated as uncovered

The gap is **structural, not lexical**. Of the 91 pre-existing `Ending employment` documents, several concern public employment specifically — POBR termination appeals, state civil service discipline, certificated teacher dismissal, classified school employee layoff, judicial exhaustion of administrative remedies, personal liability of individual defendants. Every one of them assumes that once the substantive and exhaustion questions are answered the employee may simply sue. None asks the threshold procedural question the Government Claims Act poses in front of any suit for money against a public entity: **must a written claim be presented to the employer first, and what happens if it is not?**

### Grep counts run against `data/clauses.json` and `data/documents.json` (pre-append)

| Term | Hits | Disposition |
|---|---|---|
| `Government Claims Act` | 2 | **Both are recorded negatives, inspected.** `nh_limitations_ccp_335_1` (negligent hiring) gap note: "…does not restate … the claim-presentation requirements of the Government Claims Act that apply before suing a public entity…". `recltr_related_materials` (misleading employment recommendation): "It does not address public entity immunities under the Government Claims Act, which were not the basis of the rulings described here." Neither is coverage. |
| `945.4` | 21 | **All false positives.** Every hit is Civil Code **§ 2945.4** (mortgage foreclosure consultants) in `mortgage_foreclosure_consultants_info_sheet`; confirmed by printing context (`"California Civil Code § 2945.4 opens by declaring…"`, `sectionNum=2945.6.&lawCode=CIV`). |
| `945.6` | 58 | **All false positives** — Civil Code § 2945.6, same document. |
| `911.2` | 1 | **Recorded negative.** A gap note in `private_nuisance_between_neighbors_info_sheet`: "…entities under Government Code Section 911.2 and federal constra…" — a disclaimer, not coverage. |
| `Le Mere` | 9 | **All false positives** — case-insensitive substring of ordinary prose ("enforceab**le mere**ly", "whi**le mere**ly", "availab**le mere**ly"). Context printed and inspected. |
| `City of Stockton` | 3 | **False positive** — a different *City of Stockton* case cited in `constructive_eviction_quiet_enjoyment_info_sheet`, not the 2007 Government Claims Act decision. |
| `905(c)`, `905.2`, `claim presentation`, `Tort Claims Act`, `946.6`, `Snipes`, `Garcia v. Los Banos`, `911.4`, `912.4`, `950.2`, `Bodde`, `DiCampli`, `Horvath`, `Gov. Code § 905` | 0 each | Genuinely absent. |

### Candidates considered and discarded because already covered

Greps for the alternative structural angles I first considered showed them taken, and I inspected where:

- `after-acquired` (69), `Sierra Chemical` (32), `McKennon` (35), `1171.5` (40) → `after_acquired_evidence_applicant_misrepresentation_info_sheet` and `immigration_status_labor_rights_info_sheet`. Discarded.
- `successor liabilit` (43) → `successor_liability_asset_purchase_info_sheet`. Discarded.
- `377.34` (2) → `elder_financial_abuse_info_sheet` (survival-action damages in an elder abuse context). Survival of the employee's own claim was set aside as more naturally a civil-litigation topic.
- `507(a)` (16) → Copyright Act § 507(a) in `copyright_statute_of_limitations_damages_lookback_info_sheet` and others — a textbook false positive, and not pursued.

The task note that "who can be named personally as a defendant" is already taken was respected: clause `gcapres_reaches_individual_public_employees_950_2` addresses only the *claim-presentation* consequence of naming an individual (Gov. Code § 950.2), and its gap expressly points to the existing `personal_liability_individual_defendants_termination_info_sheet` for the liability question.

### Clause inventory (15: 13 authority + 2 drafting)

`gcapres_scope_and_use` (drafting) · `gcapres_prerequisite_to_suit_945_4` · `gcapres_which_claims_must_be_presented_905_905_2` · `gcapres_contents_of_the_claim_910` · `gcapres_deadlines_911_2` · `gcapres_delivery_915_and_registry_wording` · `gcapres_late_claim_relief_911_4_946_6` · `gcapres_rejection_notice_and_suit_deadline_913_945_6` · `gcapres_reaches_individual_public_employees_950_2` · `gcapres_local_charter_procedures_935` · `gcapres_element_of_the_cause_of_action_bodde` · `gcapres_contract_claims_city_of_stockton` · `gcapres_designated_recipient_dicampli_mintz` · `gcapres_federal_civil_rights_claims_williams` · `gcapres_limits_and_no_advice` (drafting)

Declared fields: `employeeName`, `publicEntityName`, `separationDate`.

---

## 2. Source paths, per citation

### 2.1 Statutes — leginfo + onecle (two genuinely independent publishers)

Fetch path A (all sections): `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=GOV&sectionNum=<N>.` with a JSF cookie jar seeded from `/faces/codes.xhtml` (HTTP 200 each).
Fetch path B: `https://law.onecle.com/california/government/<N>.html` (HTTP 200 each).

`california.public.law` was **not used**. It prints a "Source:" line naming leginfo and is a third copy of the same text rather than an independent publisher; this is stated in each affected gap.

Whole-section diff of the two publishers (normalized for whitespace only):

| § | Identical? | Notes |
|---|---|---|
| 910 | **yes** (1172 = 1172 chars) | last amended Stats. 1998, ch. 931 |
| 911.2 | **yes** (1074) | Stats. 2016, ch. 31 (SB 836) |
| 911.4 | **yes** (2375) | Stats. 2003, ch. 847 |
| 913 | **yes** (1155) | Stats. 2010, ch. 636 (SB 1046) |
| 945.4 | **yes** (540) | Stats. 1965, ch. 653 |
| 945.6 | **yes** (1805) | Stats. 1971, ch. 438 |
| 950.2 | **yes** (523) | Stats. 1965, ch. 653 |
| 905 | no | differs only in subds. (a), (m) and the current subd. (p) — **all quoted passages (opening paragraph, subds. (c), (d), (f)) byte-identical**. Amended Stats. 2019, ch. 861 (AB 218). |
| 905.2 | no | differs in subd. (c) and the fee-waiver paragraphs — **quoted subds. (a) and (b) byte-identical**. Amended Stats. 2023, ch. 478 (AB 1756). |
| 946.6 | no | differs in subd. (c) — **quoted subds. (a), (b) byte-identical**. Amended Stats. 2021, ch. 218 (SB 501). |
| 915 | no | amended Stats. 2020, ch. 371 (SB 1473), after the onecle snapshot |
| 935 | no | amended Stats. 2018, ch. 153 (SB 1053), after the onecle snapshot |

### 2.2 Sections amended after the onecle 2017 snapshot — chaptered bill text

For §§ 915 and 935, onecle is **not** an independent check on the current text. Corroboration used Legislative Counsel's chaptered bill text:

- `https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201920200SB1473` (Stats. 2020, ch. 371, § 7 — amends § 915)
- `https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1053` (Stats. 2018, ch. 153, § 1 — amends § 935)

**This is disclosed in the clause gaps as the same publisher (leginfo) in a different document, not as two-publisher verification.** The bill-text renderer inserts line breaks inside amended passages as an artifact of its strike-and-insert markup; collapsing runs of whitespace was the only normalization applied, and this is stated in the gaps.

Exact § 935 differences between the 2017 snapshot and the current text (all disclosed in the clause gap): "ordinance or regulation" → "ordinance, or regulation"; "If such requirement" → "If such a requirement"; "subject to the provisions of Section 945.6 and Section 946" → "subject to Sections 945.6 and 946"; "may not require"/"may not provide" → "shall not require"/"shall not provide"; new subd. (f) added.

### 2.3 Case law — CourtListener, plus a slip PDF for one case

A second genuinely independent free publisher of California case law **could not be reached** from this environment (Justia, FindLaw, Google Scholar, case.law, casetext, leagle, anylaw, casemine, vlex, scocal, archive.org and law.resource.org are egress-blocked). **This is stated plainly in every affected clause gap** rather than letting "fetched twice" imply more than it does.

CourtListener's REST `opinions` endpoint returns `{"detail":"Authentication credentials were not provided."}`, so opinion text was taken from the HTML pages with a browser UA, `Referer: https://www.courtlistener.com/` and an HTML `Accept` header; three fetches returned HTTP 202 with a 2,446-byte body and were retried in-turn until 200.

**Citation-redirect check (the "wrong cluster" trap).** `https://www.courtlistener.com/c/<Reporter>/<vol>/<page>/`:

| Citation | Result |
|---|---|
| `cal-3d/16/834` (Williams) | 302 → single cluster 1351866 |
| `cal-4th/55/983` (DiCampli-Mintz) | 302 → single cluster 821520 |
| `cal-4th/32/1234` (Bodde) | **HTTP 300** — two clusters, 2634703 and 5608008 |
| `cal-4th/42/730` (City of Stockton) | **HTTP 300** — two clusters, 2637100 and 5608057 |

Both clusters were fetched in each 300 case and diffed word by word after stripping star markers and punctuation:

- Bodde: SequenceMatcher ratio 0.9787 over 4,692 / 4,518 words; 22 diff blocks, **all** either headmatter/counsel text present in one rendering only, the assigned-justice line, or whether a footnote marker is separated from the preceding word by a space (`action. 7` vs `action.7`). The opinion body is identical. Neither cluster is a concurrence-only cluster; both carry the majority.
- City of Stockton: ratio 0.9947 over 7,017 / 6,965 words; 26 diff blocks of the same two kinds.

All four opinions are unanimous — `dissent` count 0 in each, and no `X, J., concurring/dissenting` lines; Williams closes "Wright, C. J., McComb, J., Tobriner, J., Sullivan, J., Clark, J., and Richardson, J., concurred."

**Harvard Official Reports scans.** `https://storage.courtlistener.com/harvard_pdf/<cluster>.pdf` was fetched for Bodde (2634703), City of Stockton (2637100), Williams (1351866) and DiCampli-Mintz (821520) and extracted with **both pypdf and pdfminer.six**. Their embedded text layers **scramble reading order** (e.g. Bodde reads "we consider whether failure to allege facts or demonstrating excusing with this claim compliance presentation subjects a to a requirement complaint general demurrer"). They are therefore usable to corroborate **word presence only, never verbatim word order**, and no quote rests on them. This limitation is disclosed in the clause gaps that rely on them.

**Slip opinion.** `courts.ca.gov/opinions/archive/S194501.PDF` returns 404 (the archive does not reach back to 2012). CourtListener's mirror of the court's own slip PDF, `https://storage.courtlistener.com/pdf/2012/12/06/dicampli-mintz_v._county_of_santa_clara.pdf`, was fetched and extracted with **both pypdf and pdfminer.six**; the two extractions agree on every quoted sentence. This is a different *document* from the HTML rendering but the same *host*, and the clause gap says so.

### 2.4 Pin cites

Page numbers were read from inline star-pagination markers. Marker inventories: DiCampli-Mintz *986–*993 (then a relocated *989 inside appended footnotes); Bodde *1236–*1245 (then a relocated *1240 inside appended footnote 7); City of Stockton *734–*748; Williams *835–*848. **Footnote material in all four renderings is appended past the last body star marker**, so nothing quoted here is drawn from a footnote and the Bodde gap records that the court's jurisdictional holding and its disapproval of two Court of Appeal decisions are noted without pin cite for that reason.

---

## 3. Defects and anomalies disclosed rather than silently corrected

### 3.1 Gov. Code § 915(f) — "Roster of Public Agencies" defined as "Registry of Public Agencies" (statutory defect, four-source proof)

The currently codified § 915(f) reads:

> …in conformity with the information contained in the statement in the **Roster** of Public Agencies pertaining to that public agency … As used in this subdivision, "statement in the **Registry** of Public Agencies" means the statement or amended statement in the **Registry** of Public Agencies in the office of the Secretary of State…

The subdivision defines a phrase it never uses and uses a phrase it never defines. Proof that this is in the record and not an extraction artifact:

1. **leginfo (current code):** "Roster" once, "Registry" twice, exactly as above.
2. **onecle (2017 snapshot, independent publisher):** "Roster" in **all three** places — so the mismatch was introduced by an amendment, not by a publisher.
3. **Legislative Counsel chaptered text of SB 1473 (Stats. 2020, ch. 371, § 7):** carries the same mismatch — the amendment changed the two definitional occurrences to "Registry" and left the operative occurrence as "Roster."
4. **Third piece of primary evidence, used to avoid deferring to either of the first two:** Gov. Code § 53051, as amended by Stats. 2019, ch. 329 (SB 780), names the body "Registry of Public Agencies" in subds. (b) and (c) — and subd. (c) itself retains a trailing "**which roster** is hereby declared to be a public record," showing the leftover is not confined to § 915. Fetched from leginfo.

The clause quotes both halves verbatim and states the inference (that the operative occurrence was missed when the register was renamed) as an inference, recording that **no court decision resolving the point was located**.

### 3.2 DiCampli-Mintz, 55 Cal.4th at p. 987 — stray word "language" (opinion defect)

> "We reject this judicial expansion of the statutory requirements and affirm that a claim must satisfy the express delivery provisions **language** of the statute."

Confirmed as in the record, not extraction:

- present in the CourtListener HTML rendering;
- present in the **slip-opinion PDF** under **both** pypdf and pdfminer.six (independent extractors, agreeing);
- exact-phrase index query `cluster_id:821520 AND "express delivery provisions language of the statute"` → **count 1**; the same query without "language" → **count 0**;
- the Harvard Official Reports scan of 55 Cal.4th contains both "language" and "provisions" in that sentence (word presence only — its reading order is scrambled, as noted above).

Quoted as printed. Disclosed in the clause gap.

### 3.3 DiCampli-Mintz — two anomalies traced to one rendering and therefore *not* quoted

- CourtListener's HTML prints "If an appropriate public employee or board **never, receives** the claim" (stray comma). Both extractions of the slip PDF read "never receives." The phrase index cannot distinguish punctuation — it returned **1 for both spellings** — so the comma is treated as an artifact of that rendering and **the sentence is not quoted**.
- The same rendering prints an unclosed bracket in its quotation of § 915(a): `"[delivering it to the clerk, secretary or auditor,"` (the official text is `"[d]elivering…"`). **Not quoted.**

Both are recorded in the clause gap.

### 3.4 Bodde misquotes Williams/Illerbrun by one letter (disagreement between two official opinions)

Bodde, 32 Cal.4th at p. 1240, quoting Williams v. Horvath, 16 Cal.3d at p. 842:

> "…a condition precedent to plaintiff's maintaining an action against **defendant**, in short, an integral part of plaintiff's cause of action."

Williams itself — and Bodde's **own footnote 10**, quoting the underlying decision *Illerbrun v. Conrad* (1963) 216 Cal.App.2d 521, 524 — both read "against **defendants**."

Evidence:

| Check | Result |
|---|---|
| Bodde cluster 2634703 (Harvard-derived HTML) | `maintaining an action against defendant,` |
| Bodde cluster 5608008 (other rendering) | `maintaining an action against defendant,` |
| Williams cluster 1351866 | `maintaining an action against defendants,` |
| `cluster_id:2634703 AND "maintaining an action against defendant, in short"` | **1** |
| `cluster_id:2634703 AND "maintaining an action against defendants, in short"` | **0** |
| `cluster_id:1351866 AND "against defendants"` | **1** |
| `cluster_id:1351866 AND "against defendant"` | **0** |
| Bodde Harvard scan token census | one `defendant,` alongside `defendants,` / `defendants.` |
| Williams Harvard scan token census | `defendants,` only |

**Query-failure record, as required:** the long queries `cluster_id:1351866 AND "maintaining an action against defendant(s), in short"` and `... AND "action against defendant(s), in short"` **errored rather than returning a count**; they were **re-run shorter** (`"against defendants"` / `"against defendant"`, `"in short, an integral part"`) and the shorter forms returned the counts tabulated above. This is stated in both affected clause gaps.

Disposition: the disputed passage is **not quoted from Bodde**; it is quoted from **Williams**, the earlier opinion and the one closer to the source. The discrepancy is described in the Bodde clause gap and cross-referenced in the Williams clause gap.

---

## 4. Benign normalizations applied (all disclosed in gaps)

- Runs of whitespace and non-breaking spaces collapsed before every substring comparison.
- The slip PDF's text layer encodes the right single quotation mark as **U+201F** and the left as **U+201E** (a font-encoding artifact; counts match the HTML rendering exactly — 56 and 15). These were mapped to ordinary quotation marks for comparison only; quotes are stored with the ordinary curly forms.
- Curly/straight quotation-mark variants folded for comparison only.
- Line-wrap hyphenation rejoined in PDF extraction.

No other normalization. No quote was reconstructed from memory.

---

## 5. Negative results recorded in the clauses

- **No California Supreme Court decision construing Gov. Code § 905(c)** (the public-employee wage exception) was located. A full-text search of `court=cal` for the exact phrase `"fees, salaries, wages, mileage, or other expenses and allowances"` returned **count 1**, in *Voris v. Lampert* (2019) 7 Cal.5th 1141, which is not a construction of § 905(c).
- **No California Supreme Court decision** was located on whether FEHA or Labor Code causes of action are exempt from claim presentation. Searches `"Government Claims Act" AND "Fair Employment and Housing Act" AND "claim presentation"` and `"claim presentation requirement" AND "Fair Employment and Housing Act"` (court=cal) each returned **count 0**. The Court of Appeal authority on the point is **not relied on**, consistent with the rule against quoting intermediate-court authority except as a controlling opinion reproduces it. The sheet says so instead of asserting an answer.
- **Question expressly reserved:** City of Stockton, 42 Cal.4th at p. 746, states the court expressed no view on whether the Government Claims Act applies to particular affirmative defenses such as setoff. Recorded in that clause's gap.
- **Amendments postdating quoted opinions:** Williams construes the former 100-day claim period; § 911.2 now sets six-month and one-year periods. DiCampli-Mintz construes § 915 before the 2020 amendment that added electronic submission at subd. (a)(3). Both disclosed.
- **Out-of-state / intermediate authority:** *Illerbrun v. Conrad* (Cal.App.) is quoted **only as the controlling Williams opinion reproduces it**, and the clause says so in the citation `case` field.

---

## 6. Validation

Script assertions: both files parse; clause ids unique; document ids unique; document titles unique; every `clauseOrder` id resolves; every authority clause has a non-empty `gap` and ≥ 1 citation; no orphan clauses; no undeclared `{{placeholder}}` in any body or gap; canonical key order for clauses (`id,title,kind,status,checkedDate,body,gap,citations` / `id,title,kind,body`), citations (`case,cite,url,quote`) and documents (`id,title,description,categories,clauseOrder,fields`).

```
clauses 6446  documents 729
new clauses 15  authority 13  drafting 2  citations 39
Ending employment docs 92
VALIDATION PASS
```

Every one of the **39** citation quotes was then re-read **out of the written `data/clauses.json`** and re-tested as a verbatim substring of the fetched sources: **39 checked, 0 failures.**
