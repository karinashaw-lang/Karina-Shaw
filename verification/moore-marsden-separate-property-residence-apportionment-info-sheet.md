# Family Law, new document: Apportionment of a Separate-Property Residence Paid Down with Community Funds (Moore/Marsden) — Information Sheet

Part of wave 157 (Family Law category; wave 157 continues the same
category set as waves 145/147/149/151/153/155: Hiring, During
employment, Estate Planning, Family Law).

## Why this document

The task brief flagged Family Law as heavily saturated (81 existing
documents, confirmed by listing every Family Law title in
`data/documents.json`) and suggested several candidate directions.
Grepped both data files for each before choosing:

- Section 2640 reimbursement: already its own document
  (`family_code_2640_reimbursement_info_sheet`); not chosen.
- Summary dissolution (Fam. Code § 2400 et seq.): already its own
  document (`marital_summary_dissolution_info_sheet`); not chosen.
- Bifurcation of status / six-month waiting period: already its own
  document (`bifurcation_of_marital_status_info_sheet`); not chosen.
- Transmutation formalities (§ 852 / Valli / Benson): § 852 appears in
  114 clause hits and the postnuptial-agreement document already
  carries a transmutation-writing clause; not chosen as a standalone.
- Moore/Marsden: "Marsden" had exactly two corpus hits, both inside a
  single Pereira/Van Camp clause (wave 155) noting that Brandes
  distinguishes Moore/Marsden from business apportionment. "pro
  tanto" had one hit (same clause); "Mohler", "Bonvino", "Frick",
  "Branco", and "Aufmuth" had none. The wave-155 verification file
  expressly left Moore/Marsden as "a viable future topic." Chosen.

This is a genuinely new, well-scoped, non-duplicative topic with a
California Supreme Court anchor (Moore) and a clean line of published
Court of Appeal decisions through 2020.

## What this document covers

13 clauses: 2 drafting (declaration, worksheet/signature) and 11
authority clauses, citing Cal. Fam. Code §§ 760, 770(a), and 2550,
one California Supreme Court decision (In re Marriage of Moore (1980)
28 Cal.3d 366) and three published Court of Appeal decisions (In re
Marriage of Marsden (1982) 130 Cal.App.3d 426; In re Marriage of
Bonvino (2015) 241 Cal.App.4th 1411; In re Marriage of Mohler (2020)
47 Cal.App.5th 788):

- **`mmapp_separate_property_owned_before_marriage`** (§ 770(a)) —
  property owned before marriage is separate property.
- **`mmapp_community_property_baseline`** (§ 760) — property acquired
  during marriage is community property.
- **`mmapp_equal_division_of_community_estate`** (§ 2550) — the
  community estate is divided equally.
- **`mmapp_moore_pro_tanto_community_interest`** (Moore pp. 371-372
  and p. 371 fn. 1; Mohler) — community loan payments on a
  pre-marriage residence create a pro tanto community property
  interest, not merely an equitable charge.
- **`mmapp_moore_formula_and_exclusion_of_interest_taxes_insurance`**
  (Moore pp. 372, 374; Mohler) — community percentage = community
  principal reduction ÷ purchase price; interest, taxes, and
  insurance do not count.
- **`mmapp_marsden_prenuptial_appreciation_to_separate_estate`**
  (Marsden pp. 438-439; Mohler) — pre-marital appreciation is
  credited to the separate estate; the formula stays tied to the
  purchase price.
- **`mmapp_mohler_summary_of_the_rule`** (Mohler) — the denominator
  and numerator of the calculation; the community's share is its
  share of marital appreciation plus its principal payments.
- **`mmapp_mohler_post_separation_payments`** (Mohler) — the
  community's percentage stops growing at separation (§ 771(a)), but
  the property is valued at trial and the fixed percentage shares in
  appreciation through trial.
- **`mmapp_mohler_watts_charges_partial_interest`** (Mohler) — Watts
  charges may be levied for post-separation occupancy, discounted to
  the community's partial interest.
- **`mmapp_mohler_refinance_and_improvements`** (Mohler) — Mohler's
  one-sentence summary of Branco (refinance) and Allen
  (improvements), flagged as not independently verified.
- **`mmapp_bonvino_property_acquired_during_marriage_mixed_funds`**
  (Bonvino) — property bought during marriage with a separate down
  payment and community loan proceeds takes proportionate interests
  absent a § 852 transmutation; § 2640 applies only to community
  property; lender-intent presumption for loan proceeds.

Every clause states what the law is; none instructs the reader what
to do about a particular residence.

## Independent double-fetch

- **CourtListener MCP quota**: the shared 125-calls/day quota was
  already exhausted when this session began (every `search`,
  `read_document`, and `search_document` call returned HTTP 429,
  "Expected available in 4409 seconds"). The session waited the
  window out in-turn (about 75 minutes) and re-probed, but the
  window had slid to 1,539 seconds and, after a second wait, to 7,951
  seconds because parallel agents kept consuming it. No MCP call
  succeeded during this session. CourtListener's opinion HTML pages
  (`/opinion/<id>/…`) returned an empty HTTP 202 bot-challenge body
  to both `curl` (two User-Agents) and WebFetch; the anonymous REST
  API returned 401; Justia, FindLaw, casetext, Google Scholar,
  case.law, leagle, casemine, vlex, and scocal.stanford.edu were all
  blocked or gone.
- **Cluster identification** (CourtListener public Atom search feed,
  `curl` through the environment proxy — not subject to the MCP
  quota): `citation:"28 Cal.3d 366"` → Moore, cluster/opinion
  1391694; `citation:"130 Cal.App.3d 426"` → Marsden, 2108735;
  `"Marriage of Branco"` and `"Marriage of Sherman" Moore Marsden`
  surfaced Mohler (4744571) and Bonvino (3153709), both of which
  discuss the rule at length.
- **Mohler and Bonvino** (slip-opinion PDFs on
  storage.courtlistener.com, reachable via `curl`): fetched
  `pdf/2020/04/13/marriage_of_mohler.pdf` (172,929 bytes) and
  `pdf/2015/11/10/marriage_of_bonvino.pdf` (243,333 bytes) twice each
  with two distinct User-Agent strings (`Mozilla/5.0
  groundtruth-research` and `GroundtruthVerifier/1.0
  (+corpus-verification; wave157)`); SHA-1 of the two Mohler fetches
  identical (ef1f78765586…) and of the two Bonvino fetches identical
  (f586d75df17f…). Text extracted with pypdf (15 and 29 pages). No
  Sherman (2005) PDF exists in storage (two path guesses returned
  404), so Sherman was not used.
- **Moore and Marsden** (1980/1982; no PDFs exist in storage and the
  full text was unreachable for the reasons above): each quoted
  passage was verified two ways. (1) An exact-phrase query against
  the public search feed restricted to the opinion's cluster
  (`cluster_id:1391694 "<quote>"` / `cluster_id:2108735 "<quote>"`)
  returned the opinion; for four of the six quotes the feed's
  highlight fragment reproduced the quoted text verbatim, and for
  the remaining two (Moore's "Amounts paid for interest, taxes and
  insurance…" sentence and Marsden's "The Moore/Lucas/Aufmuth
  formula makes no provision…" sentence) the full sentence was
  reconstructed from two overlapping verbatim feed fragments
  ("Amounts paid for interest, taxes and insurance do not contribute
  to the capital investment and are not considered" / "taxes and
  insurance do not contribute to the capital investment and are not
  considered part of it."; "find none. The Moore/Lucas/Aufmuth
  formula makes no provision for prenuptial appreciation on property
  and" / "prenuptial appreciation on property and therefore offers
  no guidance. In Moore, however"). (2) Three of the four Moore
  quotes also appear verbatim, attributed to Moore, in Mohler's
  double-fetched slip opinion. The feed results are logged in the
  session scratchpad (`feed_log.json`). This is disclosed in the
  `gap` field of each Moore and Marsden clause, and those clauses
  describe the surrounding reasoning only as characterized by Mohler
  and Bonvino and by the feed fragments, not from a complete read of
  the 1980/1982 opinions. Pin cites for Moore are taken from
  Mohler's and Bonvino's citations; the Marsden pin (pp. 438-439) is
  derived from a "*439" star-pagination marker in the fragment
  immediately following the quoted holding.
- **Statutes** (leginfo.legislature.ca.gov, via `curl` through the
  environment's proxy): Cal. Fam. Code §§ 760, 770, and 2550 each
  fetched twice with the two User-Agent strings above (one § 760
  fetch was reset mid-transfer by the proxy and retried). The
  extracted section text was identical across the two fetches for
  all three sections (SHA-1 prefixes 29b2fe6ae519, bed08b0930dc,
  0dd837d6a310).

## Quote-by-quote verification

All 30 citation quotes across the 11 authority clauses were checked
by a Python script that normalized curly quotes/apostrophes to
straight ones, non-breaking spaces to plain spaces, em/en dashes,
stripped standalone PDF page-number lines, and collapsed whitespace
on both sides before comparing: 24 passed as exact contiguous
substrings of the persisted source texts (3 statutes, 16 Mohler, 5
Bonvino), and the 6 Moore/Marsden quotes passed the
cluster-restricted exact-phrase feed check described above (3 of
them additionally as substrings of the Mohler text). Final run:
ok=30, bad=0, skipped=0.

Artifacts identified and handled rather than silently normalized:

- One Mohler quote ("The concept is precisely the same as Watts
  charges…") spans a PDF page break, so the extracted text carries
  the page number "14" mid-sentence; the comparison strips lines
  consisting only of a page number. No words were changed.
- Mohler's slip text cites "Fam. Code § 2252, subd. (b)" for the
  alternate-valuation-date procedure, which appears to be a
  typographical reference to § 2552(b); the affected clause's `gap`
  notes this and the document does not rely on that passage.
- Mohler and Bonvino are slip opinions without Official Reports
  pagination; pin cites to 47 Cal.App.5th and 241 Cal.App.4th are
  omitted and this is disclosed in the affected `gap` fields.
- Branco (1996), Allen (2002), Frick (1986), Nelson (2006), Grinius
  (1985), Aufmuth (1979), Watts (1985), and Epstein (1979) are cited
  only as characterized by Mohler or Bonvino and are flagged as not
  independently verified in the relevant `gap` fields.

## Schema and corpus validation

- Confirmed the exact current schema by reading `data/clauses.json`
  and `data/documents.json` before writing: authority clauses use
  exactly `{id, title, kind:"authority", status:"verified",
  checkedDate, body, gap, citations:[{case, cite, url, quote}]}`;
  drafting clauses use exactly `{id, title, kind:"drafting", body}`;
  documents use `{id, title, description, categories, clauseOrder,
  fields}`. A script asserted exact key order on all 13 new clauses,
  their 30 citations, and the document.
- Checked all 13 new clause ids and the 1 new document id against the
  full existing corpus for collisions — none found.
- After merging (2-space indent, non-ASCII preserved, trailing
  newline, as in the existing files; `git diff` shows no removed
  lines), a corpus-wide validation script confirmed: both data files
  parse as valid JSON; no duplicate clause ids (5,298 clauses); no
  duplicate document ids (644 documents); every clause id in every
  document's `clauseOrder` resolves to an existing clause; and every
  `{{placeholder}}` in the new document's clauses resolves to a
  declared field (`party1Name`, `party2Name`, `marriageDate`,
  `separationDate`, `propertyAddress`, `purchaseDate`,
  `purchasePrice`).

## Net changes

- New document: Apportionment of a Separate-Property Residence Paid
  Down with Community Funds (Moore/Marsden) — Information Sheet
  (`moore_marsden_separate_property_residence_apportionment_info_sheet`),
  13 clauses (11 authority + 2 drafting), in the Family Law category.
- Corpus: 5,285 → 5,298 clauses; 643 → 644 documents. Wave 157,
  Family Law (82 Family Law documents).
