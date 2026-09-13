# Family Law, new document: Deferred Sale of Home Order ("Duke Order") — Information Sheet

Part of wave 163 (Family Law category; wave 163 continues the same
category set as waves 145/147/.../161: Hiring, During employment,
Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (84 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and offered candidate directions. Each
suggested candidate was grepped against both data files before any
was chosen:

- Putative spouse (§ 2251; Ceja): 12 clause hits / 1 document hit,
  carried inside `nullity_of_marriage_info_sheet`; not chosen.
- Nullity (§§ 2200-2210): `nullity_of_marriage_info_sheet` already
  exists; not chosen.
- Move-away custody (LaMusga; § 7501): `move_away_custody_info_sheet`
  already exists; not chosen.
- § 271 sanctions: `family_code_271_sanctions_info_sheet` already
  exists; not chosen.
- § 3910 adult incapacitated child support:
  `adult_incapacitated_child_support_info_sheet` already exists; not
  chosen.
- § 7613 assisted reproduction: `sperm_egg_donor_parentage_info_sheet`
  already exists (45 clause hits on "7613"); not chosen.
- Pension division / Gillmore election (§ 2610; Brown; Gillmore):
  "Gillmore" had zero hits, but
  `retirement_benefits_division_qdro_info_sheet` already covers
  § 2610 (48 clause hits) and QDRO mechanics; judged too adjacent to
  an existing document.
- Child's preference (§ 3042): 10 clause hits, carried inside other
  custody documents alongside `appointment_of_minors_counsel_info_sheet`
  and `court_appointed_child_custody_evaluation_info_sheet`; not
  chosen.
- Mandatory custody mediation (§ 3170):
  `mandatory_child_custody_mediation_info_sheet` already exists; not
  chosen.
- Earnings assignment (§ 5230): 3 clause hits / 1 document hit
  already present; judged partly covered.

A second round of candidate grepping was then run on topics of the
agent's own choosing: `4325`, `4324`, `3651`, `291`, `supervised
visitation`, `3200`, `hardship`, `4071`, `contempt`, `1209`,
`joinder`, `2060`, `7575`, `17400`, `Smith/Ostler`, `Ostler`. Several
had partial coverage. The topic finally chosen — the **deferred sale
of home order** under Family Code sections 3800-3810 — returned
**zero hits in both data files** on each of "deferred sale", "Duke
order", "Gillmore", "Braud", and "Stallworth"; the two stray hits on
the bare string "3800" were a cross-reference inside the child
support guideline statute (Fam. Code § 4057's reference to "Chapter 8
(commencing with Section 3800)") and an unrelated Vehicle Code
"38000". The 41 clause hits on "family home" were all Revenue and
Taxation Code § 63.2 parent-child exclusion text, Code Civ. Proc.
§ 704.730 homestead text, or "single-family home" in landlord-tenant
and pool-safety documents — none about deferring a sale in a
dissolution. Genuinely uncovered, entirely statutory in its core, and
supported by two published Court of Appeal decisions. Chosen.

## What this document covers

12 clauses: 2 drafting (declaration, signature block) and 10
authority clauses, citing Cal. Fam. Code §§ 3800, 3801, 3802, 3803,
3804, 3806, 3807, 3808, 3809, and 3810, plus *In re Marriage of Duke*
(1980) 101 Cal.App.3d 152 and *In re Marriage of Braud* (1996) 45
Cal.App.4th 797. Twenty-two citation quotes in all.

- **`deferredsalehome_definitions`** (§ 3800(a), (b), (c)) — the
  three defined terms; the order is about timing and temporary use
  and possession, not about ownership; the § 3900/3901/3910
  cross-references for which children count.
- **`deferredsalehome_economic_feasibility`** (§ 3801(a), (b), (c)) —
  the threshold determination the court makes "first"; the three
  items it must consider; the Legislature's four stated purposes.
- **`deferredsalehome_discretionary_factors`** (§ 3802(a), (b)) — the
  permissive "may grant," the necessity finding, and the ten factors
  the court "shall consider."
- **`deferredsalehome_order_contents_recording_maintenance`**
  (§§ 3803, 3804, 3806) — duration as mandatory content, the legal
  description and APN as optional content, permissive recording, and
  orders allocating routine maintenance and capital improvements.
- **`deferredsalehome_reserved_jurisdiction`** (§ 3809) — the
  mandatory reservation of jurisdiction, with maintenance and tax
  consequences named as non-exhaustive examples.
- **`deferredsalehome_modification_termination`** (§ 3807) —
  modification or termination at any time in the court's discretion,
  subject to the parties' contrary written agreement.
- **`deferredsalehome_remarriage_change_presumption`** (§ 3808;
  *Braud* p. 817) — the rebuttable presumption on remarriage or a
  qualifying change in circumstances, and *Braud*'s statement that
  the Legislature decided cohabitation by itself does not trigger it.
- **`deferredsalehome_chapter_applicability`** (§ 3810) — the
  before/after January 1, 1989 applicability rule, plus the
  structural observation that no section 3805 appears in the
  chapter's current published text.
- **`deferredsalehome_judicial_origin_duke`** (*Duke* pp. 154, 157,
  158) — the pre-statutory origin of the "Duke order," the failure to
  balance impacts as an abuse of discretion, the noneconomic impact
  on the family unit, and the "undue hardship" limit.
- **`deferredsalehome_statutory_scope_braud`** (*Braud* pp. 809, 813,
  814) — the scheme nowhere defines "family home"; §§ 3800 et seq.
  read with § 4008 can reach an out-spouse's separate property
  interest where that spouse is a child-support obligor; the order is
  never mandatory and the trial court has broad discretion once
  economic feasibility is met.

Every clause states what the law is; none instructs the reader what
to do about a particular home or proceeding. The drafting clauses say
in terms that the document does not request, grant, modify, or
terminate any order, and does not determine feasibility, necessity,
factor weight, or whether a change in circumstances has occurred.

## Independent double-fetch

- **CourtListener MCP quota: zero MCP tool calls.** Every source was
  reached with `curl` through the environment proxy.
- **Statutes** (leginfo.legislature.ca.gov), two independent paths:
  - Pass A: the individual section page
    `codes_displaySection.xhtml?lawCode=FAM&sectionNum=<n>.` fetched
    once per section for 3800, 3801, 3802, 3803, 3804, 3805, 3806,
    3807, 3808, 3809, 3810 with a Chrome/Windows User-Agent.
  - Pass B: the whole-chapter page
    `codes_displayText.xhtml?lawCode=FAM&division=9.&part=1.&chapter=8.`
    (140,374 bytes) fetched with a different, Chrome/Linux
    User-Agent.
  - Every quoted statutory sentence was required to appear in both,
    compared with all whitespace removed. Result: 15/15 statutory
    quote strings present in both passes.
  - Enactment note on every section of the chapter: "(Enacted by
    Stats. 1992, Ch. 162, Sec. 10. Operative January 1, 1994.)"
- **Section 3805**: confirmed absent by the same two paths. The pass-A
  section page for 3805 returned a full page whose Code Text region
  contained no code text (the page renders, the section body is
  empty); the pass-B chapter page lists the chapter's sections in
  order and runs directly from 3804 to 3806. The document reports
  only that absence as published and expressly declines to assert a
  repeal, a repealing measure, or a renumbering, because neither
  fetched page states one.
- **Cluster identification** (public JSON search API,
  `/api/rest/v4/search/?type=o&q=…`, no MCP): *In re Marriage of
  Duke* cluster 2134149 (101 Cal. App. 3d 152; 161 Cal. Rptr. 444;
  filed 1980-01-17); *In re Marriage of Braud* cluster 2257388 (45
  Cal. App. 4th 797; 53 Cal. Rptr. 2d 179; filed 1996-05-21). A
  narrowing search for `"deferred sale of home order"` restricted to
  `cal calctapp` returned only three published hits (Schenck 1991,
  Braud 1996, and an unrelated commercial case), which is why Braud
  was selected as the construing decision.
- **Opinion HTML pages**, each fetched twice from
  `https://www.courtlistener.com/opinion/<id>/<slug>/` with a
  `Referer: https://www.courtlistener.com/` header and two distinct
  full browser header sets:
  - Duke: pass A Chrome/Windows UA + `Accept-Language: en-US,en;q=0.9`
    (HTTP 200, 63,334 bytes); pass B Safari/macOS UA +
    `Accept-Language: en-GB,en;q=0.8` (HTTP 200, 63,210 bytes).
  - Braud: pass A Chrome/Windows UA (HTTP 200, 151,171 bytes); the
    first pass-B attempt with the Safari/macOS UA returned the HTTP
    202 challenge body (2,446 bytes) and was retried inside the same
    turn, after a sleep, with a third distinct header set
    (Firefox/Linux UA, `Accept-Language: en-US,en;q=0.5`, self
    Referer), which returned HTTP 200 at 151,171 bytes. This retry is
    disclosed in the `gap` of
    `deferredsalehome_statutory_scope_braud`.
  - Both pages are the Official Reports texts with star-page markers,
    which is how the pinpoint pages in the `cite` fields were derived
    (each quote's position was located relative to the surrounding
    `*NNN` markers by script).

## Quote-by-quote verification

All 22 citation quotes across the 10 authority clauses were re-checked
**after** the merge, reading them back out of `data/clauses.json` and
comparing each against both the pass-A and the pass-B raw HTML of its
own source (tags stripped, entities unescaped, all whitespace
removed). Final run: `citations checked 22 failures 0`.

Artifacts identified and disclosed rather than silently normalized:

- **leginfo line wraps inside two statutory sentences.** On both
  leginfo paths, § 3801(c)(1) is broken between "Avoid the likelihood"
  and "of possible defaults," and § 3802(b)(4) is broken between
  "adapted or modified to" and "accommodate any physical
  disabilities." Both breaks are benign line wraps in the rendered
  page, not text differences; the quotes close each wrap to a single
  space and change nothing else. Disclosed in the `gap` fields of
  `deferredsalehome_economic_feasibility` and
  `deferredsalehome_discretionary_factors`.
- **A genuine discrepancy inside *Braud*'s own quotation of § 3808.**
  At 45 Cal.App.4th at p. 817 the opinion, as published on
  CourtListener, quotes § 3808 as reaching a change in circumstances
  "affecting the economic **circumstances** of the parties or the
  children," while the codified text fetched from leginfo (both
  passes) reads "affecting the economic **status** of the parties or
  the children." Because the discrepancy sits inside the court's own
  internal quotation, that sentence was **not** quoted; the clause
  instead quotes *Braud*'s own statement about cohabitation, and the
  discrepancy is disclosed in the `gap` of
  `deferredsalehome_remarriage_change_presumption` rather than
  repaired.
- **OCR defects in the 1980 *Duke* scan.** The CourtListener text of
  *Duke* contains visible OCR damage elsewhere in the opinion (e.g.
  "aboye" for "above"; "do" rendered with a stray accent; "CaLRptr."
  for "Cal.Rptr."). The three quoted sentences were deliberately
  selected from passages free of such damage and were confirmed
  present in both fetches. No non-CourtListener copy of this 1980
  opinion was obtained; that limitation is disclosed in the `gap` of
  `deferredsalehome_judicial_origin_duke`.
- **One deliberate mid-sentence excerpt.** The *Braud* quote at p. 813
  begins after "Thus, when read together," and stops before the two
  statutory conditions the court attached in the same sentence
  (economic feasibility and necessity under § 3802(a), and a "just"
  allocation under § 4008). The `gap` of
  `deferredsalehome_statutory_scope_braud` states what the omitted
  remainder of the sentence says, so the excerpt cannot mislead.
- **Family Code § 4008** is quoted only inside the *Braud* opinion; it
  was not separately fetched, and the `gap` says so.

## Corpus-wide validation after merge

- Both `data/clauses.json` and `data/documents.json` parse as JSON.
- Totals: 5,598 clauses (up from 5,586) and 669 documents (up from
  668). Family Law now has 85 documents.
- All clause ids unique; all document ids unique.
- Every id in every document's `clauseOrder` resolves to an existing
  clause.
- Every `{{placeholder}}` appearing in any clause body or gap resolves
  to a field declared by every document that orders that clause. The
  five fields declared here are `party1Name`, `party2Name`,
  `countyOfFiling`, `dateSigned`, `cityState`, matching the
  convention of the other Family Law information sheets.
- Key order checked programmatically: authority clauses are exactly
  `id, title, kind, status, checkedDate, body, gap, citations`;
  drafting clauses are exactly `id, title, kind, body`; each citation
  is exactly `case, cite, url, quote`; every authority clause has a
  non-empty `gap`; every `status` is `"verified"`.
- The validator also reports 103 documents whose top-level keys are in
  the legacy order (`…, clauseOrder, fields, categories`). All 103
  pre-date this change — the identical count was measured against the
  pre-merge backup of `data/documents.json` — and none of them was
  touched. The new document uses the current order
  (`id, title, description, categories, clauseOrder, fields`).
- `checkedDate` on every new authority clause: `2026-09-13`.
