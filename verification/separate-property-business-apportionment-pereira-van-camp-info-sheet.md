# Family Law, new document: Apportionment of a Separate-Property Business Grown by Community Effort (Pereira/Van Camp) — Information Sheet

Part of wave 155 (Family Law category; wave 155 continues the same
category set as waves 145/147/149/151/153: Hiring, During employment,
Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (80 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and named the already-covered topics
(premarital agreements, DVROs and renewal, civil harassment ROs,
paternity, cohabitation/Marvin, support factors, adoptions, community
property presumptions, stock-option apportionment, UCCJEA, attorney's
fees, §1101 fiduciary breach, Watts/Epstein, de facto parent, date of
separation). It suggested four candidate directions. Grepped both data
files for each before choosing:

- Child support modification / §3651 / Stanton: §3651 appears in 15
  clauses and the corpus already has
  `custody_support_modification_info_sheet`; not chosen.
- Imputed income / §4058(b) / Regnery: already substantially covered
  by `csincomedet_earning_capacity_imputation` in the
  `child_support_income_determination_info_sheet` document; not
  chosen.
- Retroactivity of support orders / §4009: §4009 appears in 37
  clauses; not chosen.
- Moore/Marsden: "Marsden" has zero hits corpus-wide and remains a
  viable future topic, but this session chose the closely related and
  equally uncovered business-apportionment doctrine instead, because
  Brandes (2015) expressly distinguishes the two and the corpus already
  has three companion documents on the property-characterization side
  (stock options, §2640 reimbursement, §2581 joint-title presumption).

Confirmed via `grep` that "Pereira", "Van Camp", "Dekker", "Brandes",
"Beam v. Bank of America", "equitable apportionment" (in the marital
sense), and "separate property business" appear nowhere in the
existing corpus. The only prior mention of the general concept is the
wave-149 stock-option verification file's note that "Pereira" and
"Van Camp" were absent from the corpus at that time. This is a
genuinely new, well-scoped, non-duplicative topic with a California
Supreme Court anchor (Beam) and a clean line of published Court of
Appeal decisions through 2019.

## What this document covers

17 clauses: 2 drafting (declaration, worksheet/signature) and 15
authority clauses, citing Cal. Fam. Code §§ 760 and 770(a), two
California Supreme Court decisions (Pereira v. Pereira (1909) 156 Cal.
1; Beam v. Bank of America (1971) 6 Cal.3d 12) and four published
Court of Appeal decisions (Van Camp v. Van Camp (1921) 53 Cal.App. 17;
In re Marriage of Dekker (1993) 17 Cal.App.4th 842; In re Marriage of
Brandes (2015) 239 Cal.App.4th 1461; In re Marriage of Brooks (2019)
33 Cal.App.5th 576):

- **`spbiz_community_property_baseline`** (§760) — property acquired
  during marriage is community property.
- **`spbiz_separate_property_rents_issues_profits`** (§770(a)) —
  property owned before marriage, and its rents, issues, and profits,
  are separate property; sets up the apportionment problem.
- **`spbiz_pereira_origin`** (Pereira, p. 7) — separate capital must be
  credited with a return (at least the usual interest on a long,
  well-secured investment); the balance attributable to the spouse's
  personal effort is community.
- **`spbiz_van_camp_origin`** (Van Camp, pp. 28-29) — where the
  spouse was paid an adequate salary for services another could have
  performed, the salary is the extent of the community's earnings and
  the remaining profits are attributed to separate capital.
- **`spbiz_beam_more_than_minimal_threshold`** (Beam p. 17; Dekker p.
  852; Brooks) — apportionment is triggered by more-than-minimal
  community effort devoted to separate property.
- **`spbiz_beam_two_alternative_approaches`** (Beam p. 18) — Beam's
  definitions of the two approaches.
- **`spbiz_beam_no_fixed_standard_substantial_justice`** (Beam p. 18)
  — no fixed standard; "chief contributing factor" guide; court may
  select whichever formula achieves substantial justice.
- **`spbiz_beam_legal_interest_as_fair_return`** (Beam p. 19) — the
  legal interest rate as the default Pereira rate of return absent
  other evidence.
- **`spbiz_beam_family_expense_presumption`** (Beam p. 21) —
  community living expenses are deducted from apportioned community
  income.
- **`spbiz_dekker_when_each_approach_applies`** (Dekker p. 853) —
  when Pereira vs. Van Camp is typically applied; Dekker's facts.
- **`spbiz_dekker_salary_not_dispositive`** (Dekker pp. 852, 854) —
  payment of a market salary does not by itself end the inquiry.
- **`spbiz_brandes_hybrid_approach_and_no_ownership_interest`**
  (Brandes) — hybrid Pereira/Van Camp permitted; the community's
  interest is an allocation, not ownership; Moore/Marsden inapplicable
  to personal efforts.
- **`spbiz_brandes_growth_does_not_change_character`** (Brandes,
  quoting Patrick v. Alacer Corp.) — growth alone does not transmute a
  separate business.
- **`spbiz_brooks_van_camp_application`** (Brooks) — Van Camp does
  not require a finding of zero contribution; the community's share is
  measured by compensation received.
- **`spbiz_standard_of_review`** (Dekker p. 849; Brandes) —
  substantial evidence for characterization, abuse of discretion for
  the choice of formula.

## Independent double-fetch

- **Case law** (CourtListener MCP): Located all six cases via one
  `search` (type "o") for `"Pereira v. Pereira" "Van Camp"
  apportionment separate property business community`, which returned
  Beam (cluster/opinion 1436884), Dekker (2256848), Brandes
  (cluster/opinion 2902098 — the September 9, 2015 modified published
  version; the unmodified August 14, 2015 slip is 2832311), Brooks
  (cluster 6240348 / opinion 6107290), and the frequently-cited
  Pereira (3302441, page URL `/opinion/3303139/`) and Van Camp
  (3287636). Fetched each opinion twice through two different MCP call
  paths — `get_endpoint_item` (endpoint "opinions") and
  `call_endpoint` (endpoint "opinions", `{"id": ..., "fields":
  [...]}`). For Beam, Dekker, Brandes, and Brooks, both fetches were
  persisted to disk by the harness and a script confirmed the stored
  text field (`html_with_citations` for Beam/Dekker/Brooks,
  `plain_text` for Brandes) was byte-identical between the two
  fetches (SHA-1 prefixes ed10eb40711c, 68062cf569ea, ee745f31abf0,
  9bb19043ca87). For Van Camp, the second fetch (which also requested
  CourtListener's older `html_columbia` variant) was persisted; both
  stored variants contain the two quoted passages verbatim, and the
  first, inline fetch was read directly. For Pereira, both fetches
  returned inline (the `html_with_citations` and `html_columbia`
  variants carry identical text for the quoted paragraph), so the two
  Pereira quotes were additionally verified with the MCP
  `search_document` tool (case-insensitive literal search within
  opinion 3302441), which returned exactly one match for each.
  Attempts to fetch the CourtListener opinion pages and the anonymous
  REST API by `curl` with two User-Agents returned an empty body (HTTP
  202 challenge page), a 401 (opinions endpoint requires a token), and
  a 429 (search endpoint), and Justia returned 403, so the MCP was the
  only working path for case law; the shared 5-calls/minute limit was
  hit several times and waited out inside the turn.
- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment's proxy, plus one WebFetch of §770): Cal. Fam. Code
  §§ 760 and 770 each fetched twice with two distinct User-Agent
  strings (`Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML,
  like Gecko) Chrome/124.0 Safari/537.36` and
  `GroundtruthVerifier/1.0 (+corpus-verification; wave155)`). The
  extracted `codeLawSectionNoHead` bodies were identical across the
  two fetches for both sections.

## Quote-by-quote verification

All 31 citation quotes across the 15 authority clauses were checked as
exact, contiguous substrings of the confirmed source texts by a Python
script that stripped HTML tags, unescaped entities, normalized curly
quotes/apostrophes to straight ones and non-breaking spaces to plain
spaces, and collapsed whitespace on both sides before comparing: 29
passed against the persisted source files, and the 2 Pereira quotes
passed the `search_document` literal check described above. All 31
passed on the final check.

Artifacts identified and handled rather than silently normalized:

- Beam's sentence on deducting living expenses contains a doubled
  comma in CourtListener's text ("approach,, it deducts"). The clause
  quotes only the clean portion of the sentence beginning after the
  artifact and discloses this in its `gap` field.
- Beam's sentence describing the Pereira test contains a line-break
  hyphen artifact ("separate- estate"); that sentence is paraphrased
  in the legal-interest clause's body rather than quoted.
- Van Camp is an OCR scan with a stray square glyph and a stray accent
  in passages not quoted; the clause's `gap` field notes this, and the
  quoted passages were confirmed clean in both stored variants.
- Brandes's CourtListener text is the slip opinion without Official
  Reports pagination, and Brooks's text carries Cal.Rptr.3d star
  pagination only; Official Reports pin cites are therefore omitted
  for those two decisions (disclosed in the affected `gap` fields),
  while pin cites for Pereira, Van Camp, Beam, and Dekker were derived
  from the star-pagination markers in the fetched text.

## Schema and corpus validation

- Confirmed the exact current schema by reading `data/clauses.json`
  and `data/documents.json` before writing: authority clauses use
  exactly `{id, title, kind:"authority", status:"verified",
  checkedDate, body, gap, citations:[{case, cite, url, quote}]}`;
  drafting clauses use exactly `{id, title, kind:"drafting", body}`;
  documents use `{id, title, description, categories, clauseOrder,
  fields}`. A script asserted exact key order on all 17 new clauses,
  their 31 citations, and the document.
- Checked all 17 new clause ids and the 1 new document id against the
  full existing corpus for collisions — none found.
- After merging, a corpus-wide validation script confirmed: both data
  files parse as valid JSON; no duplicate clause ids (5,216 clauses);
  no duplicate document ids (637 documents); every clause id in every
  document's `clauseOrder` resolves to an existing clause; and every
  `{{placeholder}}` in the new document's clauses resolves to a
  declared field (`party1Name`, `party2Name`, `marriageDate`,
  `separationDate`, `businessName`, `businessStartDate`).

## Net changes

- New document: Apportionment of a Separate-Property Business Grown by
  Community Effort (Pereira/Van Camp) — Information Sheet
  (`separate_property_business_apportionment_pereira_van_camp_info_sheet`),
  17 clauses (15 authority + 2 drafting), in the Family Law category.
- Corpus: 5,199 → 5,216 clauses; 636 → 637 documents. Wave 155,
  Family Law (81 Family Law documents).
