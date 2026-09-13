# Hiring, new document: Liability for Misleading Employment Recommendations (Randi W. v. Muroc Joint Unified School Dist.) — Information Sheet

Document id: `misleading_employment_recommendation_info_sheet`
Clause id prefix: `recltr_`
Checked date on every authority clause: 2026-09-13

## Why this topic

Greps of `data/documents.json` and `data/clauses.json` at HEAD (before this
change):

| search string | hits in documents.json | hits in clauses.json |
| --- | --- | --- |
| `Randi W` | 0 | 0 |
| `Muroc` | 0 | 0 |
| `14 Cal.4th 1066` / `14 Cal. 4th 1066` | 0 | 0 |
| `letter of recommendation` | 0 | 0 |
| `San Bernardino City Unified` | 0 | 0 |
| `174 Cal. App. 4th 953` | 0 | 0 |
| `Garcia v. Superior Court` | 0 | 0 |
| `Rest.2d Torts, § 311` | 0 | 0 |
| `Restatement Second of Torts sections 310` | 0 | 0 |
| `negligent misrepresentation` | 0 | 5 |

The corpus already has two sheets touching employer references
(`employer_reference_immunity_info_sheet` and `neutral_reference_policy`), but
both are categorized **Ending employment** and both address Civil Code
section 47, subdivision (c) as a *defamation* privilege asserted against the
former employee. Neither mentions Randi W., the third-party tort duty, the
Restatement sections, or the half-truth rule. `47(c)` returns 32 clause hits
across those sheets; the new sheet cites the subdivision only to record how
Randi W. treated it, and the related-materials clause cross-references the
existing sheets instead of restating them.

Rejected as already covered, in order of consideration: Labor Code §§ 970–972
(`fraudulent_inducement_to_relocate_info_sheet`), Gov. Code § 12952 Fair Chance
Act, Lab. Code § 432.3 salary history, ICRAA (9 docs), Bus. & Prof. Code
§ 16600.1, cannabis/Gov. Code § 12954, Lab. Code § 2810.8 recall, Gov. Code
§ 12951 English-only, peace officer hiring standards, Talent Agencies Act,
minor work permits, Coogan trusts.

## Sources and fetch paths

### 1. Randi W. v. Muroc Joint Unified School Dist. (1997) 14 Cal.4th 1066

- **Fetch A** — `https://www.courtlistener.com/opinion/1801833/randi-w-v-muroc-joint-unified-school-district/`
  with `User-Agent: Mozilla/5.0 (X11; Linux x86_64) ... Chrome/126.0`,
  `Accept: text/html,application/xhtml+xml`, `Referer: https://www.courtlistener.com/`.
  HTTP 200, 119 747 bytes.
- **Fetch B** — same URL, `User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ...
  Version/17.4 Safari/605.1.15`, `Accept-Language: en-US,en;q=0.9`, same Referer.
  HTTP 200, 119 747 bytes.
- **Comparison** — the `id="opinion"` article was extracted from each fetch,
  tags stripped, whitespace collapsed: 53 307 characters each, **byte-identical**.
- **Third, index-level check** — the CourtListener public search feed
  (`/api/rest/v4/search/?type=o&q=cluster_id:1801833 AND "<phrase>"`) was queried
  for nine of the quoted phrases. Each returned `count=1`. One query
  (`"no California case has yet held that one who intentionally or negligently
  provides false information to another owes a duty of care to a third person"`)
  first returned a null count from a transient API response; a shortened re-query
  of the same phrase returned `count=1`.
- Justia, FindLaw, casetext, Google Scholar, case.law, leagle, openjurist,
  anylaw, casemine and scocal.stanford.edu were all probed as would-be second
  hosts and are egress-blocked (403/410/connection reset), so the second fetch is
  the same host under a different header set, as the brief permits.

### 2. P.S. v. San Bernardino City Unified School Dist. (2009) 174 Cal.App.4th 953

- **Fetch A** — `https://www.courtlistener.com/opinion/2267139/ps-v-san-bernardino-city-unified-school-dist/`,
  Chrome UA header set. HTTP 200, 83 372 bytes.
- **Fetch B** — same URL, Safari UA header set. HTTP 200, 83 248 bytes (the
  byte difference is in page chrome outside the opinion article).
- **Comparison** — extracted opinion article, whitespace collapsed: 30 006
  characters each, **byte-identical**.
- **Index-level check** — search feed with `cluster_id:2267139` for two quoted
  phrases: `count=1` each.

### 3. Civil Code §§ 47, 1709, 1710, 1714

- **Fetch A** — `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=<N>.`
  The first attempt on §§ 47 and 1714 died with an egress-proxy
  `ws_closed_mid_exchange` reset; a retry loop recovered both on the next
  attempt (HTTP 200).
- **Fetch B** — `https://california.public.law/codes/ca_civ_code_section_<N>`
  (a different host), Windows Chrome UA.
- **Comparison** — every quoted string is a verbatim substring of both the
  leginfo extraction and the california.public.law extraction after whitespace
  collapsing. leginfo's display attributes the current § 47 to Stats. 2023,
  ch. 131, § 9 (AB 1754), eff. Jan. 1, 2024; california.public.law labels its
  copy "(2025)" and cites leginfo as its own source, so it is a mirror rather
  than a fully independent codification — recorded here rather than presented as
  two unrelated authorities.

## Quote verification result

39 citation quotes across 12 authority clauses. Every quote was re-read out of
the written `data/clauses.json` after the append and re-tested as a verbatim
substring of **both** fetches of its source: **39 pass, 0 fail.**

Normalization applied before comparison, and disclosed in the affected clause
gaps: non-breaking spaces converted to ordinary spaces, and runs of whitespace
(including the line breaks leginfo injects mid-sentence through `<br>` markup,
and the per-subdivision line breaks california.public.law prints) collapsed to
single spaces. No character was added, removed or substituted in any quote.

## Defects disclosed rather than corrected

1. **The CourtListener text of Randi W. is scan-derived and OCR-damaged.** The
   page itself warns that the document "was obtained by analyzing a scanned
   document and may have typos." Specific damage found and disclosed in the
   clause gaps:
   - In the two block quotations of Restatement Second of Torts §§ 310 and 311,
     the paragraph symbols separating the lettered clauses are rendered as
     garbage: `[H`, `[<][]`, `[^Q`, `[1`, `[<JQ`, `[*]0`, `[^`. The recorded
     quotes stop before the first garbled marker in each block; the lettered
     clauses that follow are summarized in the clause body instead of quoted
     (`recltr_restatement_310_311`).
   - In the Civil Code § 47(c) discussion, `"upon request of'` carries a closing
     **single** quotation mark where a double belongs, and the next sentence
     reads `Livingston" s request`. The recorded quote stops before both
     (`recltr_civ_47c_privilege`).
   - `Tarasoffv. Regents` — case name run into the following word
     (disclosed in `recltr_duty_first_impression`; not quoted).
   - In the policy discussion, a quotation from a defamation treatise runs
     without a closing quotation mark straight into a citation to Labor Code
     §§ 1050 and 1054, with text apparently dropped (disclosed in
     `recltr_alternative_conduct`; not quoted).
   - In P.S., a possessive is printed without its apostrophe ("the plaintiff s
     damage") and a comma stands where a period belongs after the Rowland
     citation (disclosed in `recltr_ps_san_bernardino`; not quoted).
2. **Randi W.'s parenthetical description of Civil Code § 1710, subd. 3 does not
   track the statute.** The opinion says "deceit is the suppression of a
   material fact by one who gives misleading information of other facts." The
   enacted text is "The suppression of a fact, by one who is bound to disclose
   it, or who gives information of other facts which are likely to mislead for
   want of communication of that fact." The opinion's paraphrase adds
   "material," which is not in the statute, and drops the "bound to disclose it"
   branch entirely. Both the opinion's parenthetical and the statutory text are
   recorded as separate citation quotes in `recltr_half_truth_vs_nondisclosure`
   so a reader can compare them; neither was silently conformed to the other.
3. **The statute Randi W. construed has since been amended.** The opinion quotes
   the 1994 version of § 47(c) as reaching a communication "to, and upon request
   of, the prospective employer." The text now in force reads "to, and upon
   request of, one whom the employer reasonably believes is a prospective
   employer of the applicant." Both are recorded as citation quotes in
   `recltr_civ_47c_privilege`. leginfo's credit line for the section as a whole
   is Stats. 2023, ch. 131, § 9 (AB 1754); this write-up did **not** trace which
   amendment introduced this particular wording, and says so rather than
   guessing.
4. **§ 1710's cross-reference is relative, not numeric.** It defines "a deceit,
   within the meaning of the last section." In the current codification the
   preceding section is 1709, so it resolves — but the statute names no number.
   Recorded in `recltr_statutory_backdrop`.
5. **One quote was left spanning-free by paraphrase.** The Randi W. sentence
   calling the chain of causation "somewhat attenuated" straddles the star-page
   break between 1077 and 1078 (the inline `*1078` marker falls inside the
   sentence). Rather than splice across the marker, the sentence is paraphrased
   in `recltr_foreseeability` and not recorded as a quote.
6. **One quote begins mid-sentence for the same reason.** The Reporting Act
   passage begins "need not decide…" because the sentence opens with "We"
   immediately after the `*1087` marker. Disclosed in
   `recltr_negligence_per_se_rejected`.
7. **P.S.'s "no express provisions" sentence is unattributed inside quotation
   marks.** The Court of Appeal prints it in quotation marks with no
   attributing clause; the surrounding paragraphs quote the trial court's ruling
   at length. It is recorded as a quotation the Court of Appeal adopted, not as
   its own original phrasing, and is not offered as a holding.
8. **P.S. restates Randi W. imprecisely.** P.S. renders the risk as one of
   "physical harm" where Randi W. itself wrote "physical injury." Both are
   quoted; the difference is flagged rather than harmonized.

## Negative results recorded

- Searching the CourtListener California case law index (Cal. Supreme Court +
  Court of Appeal) for opinions citing "Randi W." together with "letter of
  recommendation" returns, besides Randi W. and P.S., only pharmaceutical
  labeling duty cases invoking it by analogy — Friedman v. Merck & Co. (2003)
  107 Cal.App.4th 454, Conte v. Wyeth, Inc. (2008) 168 Cal.App.4th 89 and T.H.
  v. Novartis Pharmaceuticals Corp. (2017) 4 Cal.5th 145. No published
  California decision applying the recommendation-letter duty to another set of
  employment reference facts was found. Those three cases were not fetched and
  are named only to report what the search returned; the clause gap says so.
- Randi W. itself records that the duty question was one of first impression and
  that no California case had then held a false-information provider owes a duty
  to a non-recipient third person.

## Pin cites

Pin pages come from the star pagination printed inline in the scanned text
(`*1069` … `*1089` for Randi W.; `*956` … `*966` for P.S.), not from memory. A
script located each quote in the flattened text and reported the last star
marker before the quote's start and before its end; every recorded quote lies
wholly between two consecutive markers (no quote is attributed to a page it
does not begin and end on). The two star markers in Randi W.'s headmatter that
CourtListener tags with real `star-pagination` spans (*1069, *1070) agree with
the Harvard block ids (`b1107`, `b1108`, offset 38), which is what confirmed the
inline plain-text markers are genuine reporter pages.

## Post-merge corpus validation

- Both JSON files parse. Clause count 6 134 → **6 149** (+15). Document count
  708 → **709** (+1).
- All clause ids unique; all document ids unique; all document titles unique.
- Every `clauseOrder` id resolves; no orphan clauses anywhere in the corpus.
- Every authority clause in the new document has a non-empty `gap` and at least
  one citation; key order is canonical (`id, title, kind, status, checkedDate,
  body, gap, citations`; citations `case, cite, url, quote`; drafting `id,
  title, kind, body`).
- New document key order is canonical (`id, title, description, categories,
  clauseOrder, fields`). 103 pre-existing documents in the corpus use the older
  order with `categories` last; they were not touched by this change.
- No undeclared `{{placeholder}}` in any clause body or gap, corpus-wide.
- `categories` is exactly `["Hiring"]`.
- Quote re-read from the written file and re-verified against both fetches:
  **39/39 pass**.

## Clause inventory (15)

Drafting (3): `recltr_declaration`, `recltr_related_materials`,
`recltr_signature_block`.

Authority (12):

| clause | authorities |
| --- | --- |
| `recltr_statutory_backdrop` | Civ. Code §§ 1714(a), 1709, 1710(2), 1710(3) |
| `recltr_question_presented` | Randi W. at 1070, 1089 |
| `recltr_restatement_310_311` | Randi W. at 1075 (Rest.2d Torts §§ 310, 311 as reproduced) |
| `recltr_duty_first_impression` | Randi W. at 1077 |
| `recltr_foreseeability` | Randi W. at 1077, 1078 |
| `recltr_alternative_conduct` | Randi W. at 1078 |
| `recltr_holding_physical_injury` | Randi W. at 1081 |
| `recltr_half_truth_vs_nondisclosure` | Randi W. at 1082, 1084; Civ. Code § 1710(3) |
| `recltr_reliance` | Randi W. at 1085 |
| `recltr_civ_47c_privilege` | Civ. Code § 47(c); Randi W. at 1080, 1081 |
| `recltr_negligence_per_se_rejected` | Randi W. at 1087, 1088 (incl. Kennard, J., conc. & dis.) |
| `recltr_ps_san_bernardino` | P.S. at 961, 965, 966 |

Fields declared: `preparerName`, `employerName`, `formerEmployeeName`,
`dateSigned`, `cityState`.
