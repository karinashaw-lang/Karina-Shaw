# Real Estate, new document: Constructive Eviction and the Covenant of Quiet Enjoyment — Information Sheet

## Why this document

Real Estate slot of wave 170 (the round-robin's Confidentiality & IP /
Ending employment / Business Formation / Real Estate rotation). The
corpus already held 88 Real Estate documents, and most of the obvious
landlord-tenant angles were taken: the statewide just-cause and
rent-cap rules (AB 1482), Costa-Hawkins, the Ellis Act, the self-help
eviction and lockout ban (Civ. Code § 789.3), a landlord's right of
entry (Civ. Code § 1954), habitability remedies (repair-and-deduct and
retaliation), the landlord's duty to mitigate on abandonment,
disposition of personal property left behind, late fees as liquidated
damages, screening fees, mobilehome park tenancies, and the 3-day
notices to pay rent or to perform a covenant.

What was open was **the covenant of quiet enjoyment itself and the
constructive eviction doctrine built on it** — the body of law those
statutes repeatedly point at without stating. Pre-merge greps of both
data files returned: zero hits for "relief from forfeiture" and
"Horiike"; one clause hit for "constructive eviction" (a passing
reference in `mobilehome_termination_grounds` quoting Civ. Code
§ 798.55's phrase "actual or constructive eviction"); one clause hit
for "quiet enjoyment" as a doctrine (`selfhelp_related_1940_2`,
describing Civ. Code § 1940.2's penalty); and three hits for "1927,"
all bare cross-references (`selfhelp_related_1940_2`,
`landlordentry_remedy`, and a documentary-transfer-tax clause citing a
different code). No existing clause quotes Civ. Code § 1927, states the
substantial-interference threshold, states the surrender-of-possession
requirement, or addresses the damages measures. Other candidates
floated for this wave were ruled out by grep as already covered: the
homestead exemption (an Estate Planning document on Code Civ. Proc.
§ 704.710 et seq.), agency disclosure in residential sales
(`real_estate_agency_disclosure_info_sheet`), mechanics lien procedure
(preliminary notice and waiver/release documents), easement by
necessity (`prescriptive_easement_necessity_info_sheet`), the
agreed-boundary area (`boundary_line_agreement_info_sheet`), and the
contents of a 3-day notice to pay rent or quit
(`notice_to_pay_rent_or_quit`).

Document id: `constructive_eviction_quiet_enjoyment_info_sheet`.

## What this document covers

12 clauses: 2 drafting (purpose/parties, factual record) and 10
authority clauses, with 30 verified citations drawn from 5 Civil Code
sections and 6 published California opinions (3 of them California
Supreme Court decisions).

- **`consevic_statutory_covenant`** — Civ. Code § 1927's one-sentence
  statutory covenant, *Andrews v. Mobile Aire Estates* (2005) 125
  Cal.App.4th 578 on the covenant being only "partially codified" there
  and on the landlord's duty to refrain from interrupting beneficial
  enjoyment, *Erlach v. Sierra Asset Servicing, LLC* (2014) 226
  Cal.App.4th 1281 on breach occurring upon actual or constructive
  eviction, and *Nativi v. Deutsche Bank National Trust Co.* (2014) 223
  Cal.App.4th 261 on the covenant's original, physical-interference-only
  scope.
- **`consevic_substantial_interference`** — *Andrews* on minor
  inconveniences versus substantial interference with use "for the
  purposes contemplated by the tenancy."
- **`consevic_intent_not_required`** — *Nativi* on subjective intent
  not being an element.
- **`consevic_who_can_interfere`** — *Andrews* on interference by a
  neighbor or tenant claiming under the landlord, *Andrews* footnote 9
  on conduct originating on premises the landlord neither owns nor
  controls, and *Nativi*'s quotations of *Playter v. Cunningham* (1862)
  21 Cal. 229 (no liability for a mere trespasser) and *Brown Derby
  Hollywood Corp. v. Hatton* (1964) 61 Cal.2d 855 (a landowner may not
  interfere by allowing others onto the land).
- **`consevic_vacating_requirement`** — *Kulawitz v. Pacific Woodenware
  & Paper Co.* (1944) 25 Cal.2d 664 on surrender of possession, and the
  ending of liability for later rent; *Standard Livestock Co. v. Pentz*
  (1928) 204 Cal. 618 on no breach until an actual or constructive
  eviction; *Green v. Superior Court* (1974) 10 Cal.3d 616, footnote 10,
  on the doctrine's practical limit for a tenant who cannot leave.
- **`consevic_effect_and_remedies`** — *Andrews* on the rent
  consequence of surrender, damages, and pleading damages by way of
  offset.
- **`consevic_damages_measures`** — Civ. Code §§ 3300 and 3304, plus
  the divergence among the authorities about whether § 3304 reaches
  leases at all.
- **`consevic_statutory_termination_right`** — Civ. Code § 1932's
  statutory termination right, and *Green* on the constructive eviction
  doctrine having evolved independently of Civ. Code §§ 1941-1942.
- **`consevic_good_faith_legal_process`** — *Nativi* on the malice
  requirement where the landlord merely serves a wrongful notice to
  quit, and on a good-faith threat to resort to legal process
  (*Lindenberg v. MacDonald* (1950) 34 Cal.2d 678).
- **`consevic_related_penalty_statute`** — Civ. Code § 1940.2(a)(3),
  (b), (c), (d): the penalty statute that expressly requires no actual
  or constructive eviction.

## Genuine findings

- **A real conflict in the authorities, reported rather than
  smoothed over.** The California Supreme Court in *Standard Livestock
  Co. v. Pentz* (1928) 204 Cal. 618, 638, concluded that Civ. Code
  § 3304 "was never intended to have reference to leases of real estate
  or to the detriment caused by breaches of covenants for the peaceable
  possession of leased premises," and *Nativi* (at p. 293) says
  § 3300 supplies the measure for breach of the covenant implied in a
  lease, citing *Standard Livestock*. *Andrews* (at p. 591) states in
  its text that "Civil Code section 3304 prescribes the measure of
  damages for breach of the covenant of quiet enjoyment" and reproduces
  § 3304 in its footnote 10 without discussing *Standard Livestock*.
  The `consevic_damages_measures` clause quotes all three and says in
  its gap that this sheet does not resolve which statement governs.
- **A second divergence, also disclosed.** *Standard Livestock* says
  the covenant "is not breached until there has been an actual or
  constructive eviction," while *Nativi* notes that some authorities
  allow a tenant to sue on the covenant while remaining in possession,
  and *Andrews* describes exactly such an election. The
  `consevic_vacating_requirement` gap states the divergence instead of
  picking a side.
- **Page markers and nested quotations avoided rather than edited.**
  CourtListener's text of these opinions is scan-derived and carries
  inline star-page markers (e.g. `*1300` inside the *Erlach* sentence
  stating the vacate-within-a-reasonable-time rule) and occasional OCR
  noise in the older reports (*Standard Livestock* shows "section 1927
  Of the Civil Code" and "Civil .Code" in unrelated passages). Every
  quotation used was taken from a passage with no marker and no
  artifact inside it; no quote was repaired by deleting a page marker.
  Where the proposition a clause needed lived only in a nested
  quotation (Pierce v. Nash's "within a reasonable time" formulation,
  the *Guntert* paramount-title paraphrase, the presumption language
  from *Pierce*), the body paraphrases and attributes it, and the
  verbatim `quote` comes from a sentence the fetched opinion states in
  its own voice.
- **Body quotations tightened to match source punctuation.** During
  review, eleven quoted fragments in clause bodies ended with a comma
  where the source has a period, semicolon, or "; or,". Each was
  rewritten so the quoted words reproduce the source exactly (in two
  places by quoting the source's full two-sentence passage, in one by
  placing the sentence period outside the closing quotation mark). A
  scripted check now confirms every quoted fragment of six words or
  more in the new bodies appears verbatim in a fetched source.
- **A correct case name recovered.** The "mere trespasser" quotation
  *Nativi* uses is from *Playter v. Cunningham* (1862) 21 Cal. 229,
  233 — not *McDowell v. Hyman*, which *Nativi* quotes two lines
  earlier for a different proposition. The gap names *Playter*.

## Honest gap(s) disclosed

This document does not define "a reasonable time" for vacating in days
or weeks (no authority quoted supplies a figure), does not state which
damages measure governs any particular case, does not resolve whether a
tenant who stays in possession may sue on the covenant, does not
address partial eviction, the implied warranty of habitability, the
unlawful detainer procedure, the litigation privilege, local harassment
ordinances, or the tort of wrongful eviction beyond what *Nativi* says
about malice, and does not evaluate any actual tenancy, condition, or
claim. Nine opinions quoted or described by the clauses were not
separately fetched (*Guntert v. City of Stockton*, *Petroleum
Collections Inc. v. Swords*, *Pierce v. Nash*, *Sierad v. Lilly*,
*Playter v. Cunningham*, *Brown Derby Hollywood Corp. v. Hatton*,
*Lindenberg v. MacDonald*, *Asell v. Rodrigues*, *Johnson v. Snyder*); each is attributed in
the relevant gap to the fetched opinion in which its language was read
and verified, and none is treated as independently corroborated.
Civ. Code §§ 1927, 1932, 3300, and 3304 retain their 1872
gender-specific wording ("his obligations," "his possession"), quoted
as written.

## Method

**Statutes.** Civ. Code §§ 1927, 1932, 1940.2, 3300, and 3304 were each
fetched twice by curl through the environment proxy, by two independent
paths: the individual section page
(`codes_displaySection.xhtml?lawCode=CIV&sectionNum=…`) with a
Chrome/Windows User-Agent, and the page for the whole chapter or
article containing the section (`codes_displayText.xhtml` for Civil
Code Title 5, Chapter 1 [1925-1938]; Title 5, Chapter 2 [1940-1954.071];
and Division 4, Part 1, Title 2, Chapter 2, Article 1 [3300-3322]) with
a Firefox/Linux User-Agent. The extracted text of each section was
identical across the two paths after nbsp conversion and whitespace
collapsing.

**Case law.** No CourtListener MCP tool was used; the shared quota was
left untouched. Opinions were located through the public unauthenticated
search API (`/api/rest/v4/search/?type=o&q=…`), then each opinion page
was fetched twice from `www.courtlistener.com` with two distinct header
sets (Chrome/Windows and Firefox/Linux User-Agents, different Accept
and Accept-Language headers, `Referer: https://www.courtlistener.com/`
on both). Clusters used: `2248922` (*Andrews*), `2650742` (*Nativi*),
`2677838` (*Erlach*), `1164210` (*Kulawitz*), `3306923` (*Standard
Livestock*), `1182285` (*Green*). The authenticated
`/api/rest/v4/opinions/<id>/` endpoint was tried and returned HTTP 401,
so it was not used. The *Green* page returned an empty HTTP 202 on two
retry attempts before returning 200 on a third; the extracted text of
that successful second fetch matches the first.

**Phrase-level third check.** Seven load-bearing quotations were
additionally confirmed through CourtListener's public search feed with
`cluster_id:<id> AND "<exact phrase>"` queries — both *Green* quotes,
the *Kulawitz* rule, both *Standard Livestock* sentences, the *Andrews*
substantial-interference sentence, the *Nativi* intent sentence, and
the *Erlach* covenant sentence. Each returned exactly one hit, the
expected cluster. Three of those queries first returned HTTP 429 and
succeeded after a 90-second sleep-and-retry loop.

**Quote verification.** A script re-extracted all eight statutory pages
and both fetches of all six opinions and checked every one of the
document's 30 `citations[].quote` values, whitespace- and
nbsp-normalized, against both fetches of its source. All 30 matched
verbatim in both. A second script checked every quoted fragment of six
words or more appearing in the new clause bodies (24 fragments) against
the same sources; all 24 matched.

**Corpus validation.** Both data files parse; all clause ids and
document ids are unique; every `clauseOrder` entry across all 697
documents resolves to an existing clause; every `{{placeholder}}` in
the new clauses' bodies and gaps resolves to a declared field. Authority
clauses use the exact key order `id, title, kind, status, checkedDate,
body, gap, citations` with non-empty gaps, drafting clauses use exactly
`id, title, kind, body`, and the document uses `id, title, description,
categories, clauseOrder, fields`. The diff against both data files is
purely additive (380 inserted lines, 0 deleted). Corpus after merge:
697 documents, 5,973 clauses, 89 Real Estate documents.
