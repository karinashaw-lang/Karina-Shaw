# Verification — Exclusive Implied Easements Over an Encroaching Driveway or Wall

Document id: `exclusive_implied_easement_encroachment_info_sheet`
Category: Real Estate (California law)
Clause id prefix: `implease_`
Checked: 2026-09-13
Clauses: 15 (13 authority, 2 drafting). Citations: 56.

## Coverage check before drafting

Greps run against `data/clauses.json` and `data/documents.json` at HEAD before any
topic was chosen (occurrence counts, not line counts):

| term | clauses.json | documents.json |
| --- | --- | --- |
| `Romero v. Shih` | 0 | 0 |
| `implied easement` | 1 | 0 |
| `easement by implication` | 0 | 0 |
| `exclusive easement` | 0 | 0 |
| `15 Cal. 5th` | 0 | 0 |
| `Hirshfield v. Schwartz` | 0 | 0 |
| `Shoen v. Zacarias` | 0 | 0 |
| `Christensen v. Tucker` | 0 | 0 |
| `equitable easement` | 0 | 0 |
| `relative hardship` | 0 | 0 |
| `balancing of conveniences` | 0 | 0 |
| `Mehdizadeh` | 0 | 0 |
| `Tashakori` | 0 | 0 |
| `Linthicum v. Butterfield` | 0 | 0 |
| `Nellie Gail` | 0 | 0 |
| `Civil Code section 1104` | 0 | 0 |
| `Field-Escandon` | 0 | 0 |
| `innocent improver` | 0 | 0 |

The single `implied easement` hit in `clauses.json` is a bare two-word phrase in an
unrelated clause, not a treatment of the doctrine. `Raab v. Casper` returned 1 hit in
`clauses.json` and `Silacci` returned 9, both inside adverse-possession material rather
than any easement-scope discussion; `Bryant v. Blevins` (1) and `agreed-boundary` (10)
belong to an existing agreed-boundary document, a different doctrine, which the new
sheet's closing clause expressly excludes. `encroach` returned 12 / 1 and `Warsaw v.
Chicago Metallic` 2 / 0, none of them a treatment of implied or equitable easements.

Two earlier candidates were checked and set aside: the equitable-easement doctrine alone
(covered here instead as a companion, since `Romero v. Shih` supplies a controlling
California Supreme Court case) and the good faith improver statutes, Code Civ. Proc.
§§ 871.1–871.7, which also grep to 0 and are noted in the closing clause as out of scope.

## Sources and fetch paths

### Romero v. Shih (2024) 15 Cal.5th 680 — California Supreme Court, S275023

* **Fetch A (host 1):** `https://www.courtlistener.com/opinion/9471224/romero-v-shih/`
  — HTTP 200, 118,104 bytes, sent with a desktop Chrome User-Agent plus
  `Referer: https://www.courtlistener.com/` (without the Referer the host returns an
  empty 202). Text extracted by converting `<br>` to newlines and stripping tags.
* **Fetch B (host 2):** `https://www.courts.ca.gov/opinions/archive/S275023.PDF`
  — HTTP 200, 239,238 bytes, the official slip opinion. `/opinions/documents/S275023.PDF`
  returns 404; the file lives under `/archive/`. Text extracted twice, once with `pypdf`
  and once with `pdfminer.six`; the pdfminer extraction was used for comparison because
  the pypdf extraction introduced spurious intra-word spaces ("th e 1986", "t he
  property") that pdfminer does not produce.
* **Fetch C (index):** CourtListener public search JSON,
  `?type=o&q=cluster_id:9471224 AND "<phrase>"`. Three phrases queried; each returned
  `count=1`.

**Comparison result:** every quoted span is a verbatim substring of both Fetch A and
Fetch B after whitespace normalization. The two fetches are *not* byte-identical, and
the difference is disclosed rather than repaired — see Defects below.

**Pin cites:** none given. CourtListener lists no reporter citation for cluster 9471224,
the search API returns no `Cal. 5th` citation for the opinion, and neither fetch carries
star pagination to the official reports. The volume-and-first-page citation
`15 Cal. 5th 680 (2024)` is used with no pinpoint page, per the rule that a slip-only
text gets no pin cite.

### Hirshfield v. Schwartz (2001) 91 Cal.App.4th 749

* **Fetch A:** `https://www.courtlistener.com/opinion/2261569/hirshfield-v-schwartz/`
  — HTTP 200, 138,400 bytes, desktop Chrome User-Agent + Referer.
* **Fetch B:** `https://www.courtlistener.com/c/Cal.%20App.%204th/91/749/` — HTTP 200,
  138,400 bytes, fetched under a *different* User-Agent (iPhone Safari) and a different
  `Accept-Language`.
* **Fetch C (index):** three cluster-scoped exact-phrase queries, each `count=1`.

**Comparison result:** Fetch A and Fetch B are identical after whitespace normalization
(54,849 normalized characters each). Every quote is a verbatim substring of both.

**Independence caveat, disclosed:** no text of this opinion was reachable outside
CourtListener. `courts.ca.gov` has no slip PDF for a 2001 Court of Appeal opinion (both
`/opinions/documents/` and `/opinions/archive/` 404 for the docket numbers tried), and
the other public mirrors are egress-blocked from this environment. Two paths on one host
plus the search index is weaker than two publishers, and the affected clause gaps say so.

**Pin cites:** taken from star pagination present in the fetched text (`*754` … `*772`).
Quotes were located and their page read off the nearest preceding star marker:
p. 759 (equitable balancing; "doubtful cases"; the three Christensen factors),
p. 768 (adverse-possession-integrity sentence), p. 769 (equity/justice sentence).

### Shoen v. Zacarias (2015) 237 Cal.App.4th 16

* **Fetch A:** `https://www.courtlistener.com/opinion/2803077/shoen-v-zacarias/` —
  first attempt returned an empty 202; retried after a pause with a Safari User-Agent,
  HTTP 200, 70,564 bytes.
* **Fetch B:** `https://www.courtlistener.com/c/Cal.%20App.%204th/237/16/` — first
  attempt 202; retried under an Android Chrome User-Agent, HTTP 200, 70,564 bytes.
* **Fetch C (index):** three cluster-scoped exact-phrase queries, each `count=1`.

**Comparison result:** identical after normalization (16,589 normalized characters each).
Same independence caveat as Hirshfield; `courts.ca.gov` has no slip PDF for B257363.

**Pin cites:** star markers `*17`, `*18`, `*19`, `*20`, `*21`, `*22` are present.
The "well over 75 years" passage, the all-three-prerequisites sentence and the
abuse-of-discretion sentence sit on p. 19; the misleading-labels, judicial-license,
legal-extortion and eminent-domain passages sit on p. 20.

### Pasadena v. California-Michigan etc. Co. (1941) 17 Cal.2d 576 — pin-cite check only

Fetched once from
`https://www.courtlistener.com/opinion/1424959/city-of-pasadena-v-california-michigan-land-water-co/`
(HTTP 200 after four 202s and a sleep-and-retry loop) and confirmed once through the
search index (`cluster_id:1424959 AND "in the absence of a clear indication of such an
intention"` → `count=1`). Used **only** to test the pin cite Romero gives. Not quoted
from directly; the clause quotes Romero's reproduction. See Defects.

### Statutes — two publishers each

| Section | leginfo.legislature.ca.gov | california.public.law | agree? |
| --- | --- | --- | --- |
| Civ. Code § 806 | HTTP 200 | `ca_civ_code_section_806`, HTTP 200 | yes, word for word |
| Civ. Code § 1069 | HTTP 200 | `ca_civ_code_section_1069`, HTTP 200 | yes |
| Civ. Code § 1104 | HTTP 200 | `ca_civ_code_section_1104`, HTTP 200 | yes |
| Code Civ. Proc. § 325 | HTTP 200 | `ca_civ_proc_code_section_325`, HTTP 200 | yes |

leginfo returns an empty section body unless a JSF session cookie is first seeded from
`/faces/codes.xhtml`; the cookie jar was seeded before each section fetch. On
california.public.law the Code of Civil Procedure uses the slug `ca_civ_proc_code`;
`ca_code_civ_proc_...` and `ca_ccp_...` both 404, and the *Civil* Code slug pattern
(`ca_civil_code_...`) 404s as well — the working pattern is `ca_civ_code_section_N`.
No disagreement of any kind was found between the two publishers for these four sections,
including on singular/plural and on the archaic "such property" construction in § 1104.

## Normalizations applied (all benign, all disclosed in clause gaps)

1. All runs of whitespace collapsed to a single space; newlines treated as spaces. Needed
   because the CourtListener HTML uses `<br>` per printed line and the slip PDF uses
   double spaces after sentences.
2. Non-breaking spaces (U+00A0) → ordinary spaces; soft hyphens (U+00AD) removed;
   the `fi`/`fl` ligatures → `fi`/`fl`; U+2010/U+2011 hyphens → ASCII hyphen.
3. A hyphenated compound broken across a printed line was rejoined: `quasi-` + newline +
   `dominant` → `quasi-dominant`. This affects exactly one quoted span (the Thorstrom
   elements quotation in `implease_elements`) and is stated in that clause's gap.

Nothing else was altered. Curly quotation marks, spaced em dashes, and the courts' own
nested `" ' … ' "` quotation styling are reproduced as printed.

## Defects and conflicts disclosed rather than corrected

1. **The official slip PDF's text layer repeats and reorders lines.** In the
   courts.ca.gov PDF for Romero — confirmed identically by both `pypdf` and
   `pdfminer.six`, so it is in the file, not in one extractor — several spans appear
   twice in succession: "conclude that it does not." , "of the easement area." ,
   "advantage of any remaining uses was 'remote.'" , and the parenthetical ".)". At one
   point the text is reordered: the Thorstrom block quotation renders as "at the time of
   conveyance **ions exist: (1) the owner of of property, the following conditions
   exist:** property conveys". The CourtListener text of the same opinion is clean at
   every one of these points. Consequence: the first element of the implied-easement test
   is **stated in prose and not quoted**, because it is not a contiguous substring of both
   fetches; the quotation runs from the second element onward. Disclosed in
   `implease_elements` and, in summary form, in every Romero clause's gap.
2. **A stray fragment inside a sentence in the same PDF.** "…given the ordinary rule that
   courts should **681.)** construe a reservation in any grant against the grantor…". The
   quote in `implease_not_favored` was shortened to begin after that point.
3. **CourtListener's Hirshfield text is OCR-damaged at the exact footnote Romero relies
   on.** Footnote 11 is carried as "Pasadena v. **Califonia**-Michigan etc. Co." — a
   misspelling of California — and the parallel citation is run together as
   "[110P.2d983, 133 A.L.R. 1186]". Romero spells the case correctly, so this is recorded
   as a probable mirror defect rather than an error by either court. The misspelling was
   not quoted. Disclosed in `implease_questions_left_open`.
4. **CourtListener's Shoen text misspells the case it is citing.** Shoen is carried as
   citing "**Hirschfield** v. Schwartz (2001) 91 Cal.App.4th 749" — with a `c` — in two
   places, and thereafter uses `(Hirschfield)` as its short form. The correct spelling,
   used in that opinion's own caption and by the Supreme Court in Romero, has no `c`.
   Whether the error originated with the Court of Appeal or with the mirror could not be
   determined, because no second publisher of Shoen is reachable from here. Recorded as
   found; the misspelling was not quoted. Nearby OCR damage in the same fetch:
   "U.S. Const., 5th Amend, [" for what should be a period, and "270 Cal.App.2d at 305"
   missing its "p." Disclosed in `implease_equitable_easement_elements`.
5. **CourtListener's Pasadena text is OCR-damaged**, rendering "grante^" for "granted",
   "Fits prior easement" for "its prior easement", and the star-paginated word as
   "com\*579**piete**" for "complete". This is why Pasadena is quoted only through
   Romero's reproduction. Disclosed in `implease_express_easement_comparators`.
6. **A pin cite checked against star pagination, and it holds.** Romero cites Pasadena at
   "17 Cal.2d 576, 578–579" for the "no intention to convey such a complete interest"
   sentence. In the fetched 1941 text the star marker for page 579 falls *inside* the word
   "complete", so the sentence genuinely straddles 578–579 and the pin cite is correct.
   Recorded because it was checked against pagination rather than against memory.
7. **Romero alters the Hirshfield footnote it quotes.** Romero's parenthetical prints
   "we believe the holdings **[of the cases]** may be overbroad." The words actually in
   Hirshfield are "we believe the holdings **of Silacci and Mehdizadeh** may be
   overbroad." The substitution is bracketed, so it is signalled rather than concealed,
   but both versions are quoted side by side in `implease_questions_left_open` so a reader
   can see it.
8. **A pin cite that could not be confirmed, and is labelled as such.** Romero cites
   Hirshfield footnote 11 at p. 769. CourtListener relocates all of Hirshfield's footnotes
   into a block at the end of the opinion text, where the star markers no longer track the
   body — the only marker inside that block is a stray `*764` belonging to footnote 9.
   The footnote's page therefore could not be read off pagination. The citation is given
   as `91 Cal. App. 4th 749, 769 & fn. 11 (2001)` with the `case` field stating on its
   face that the page is Romero's and is not confirmed against star pagination.
9. **Sentences that straddle slip-opinion page breaks.** In both Romero fetches a running
   header ("ROMERO v. SHIH / Opinion of the Court by Kruger, J.") and, at two places, a
   footnote block, interrupt sentences mid-clause. Four candidate quotes were shortened to
   stay within a single page rather than eliding the header; one ("Crucially, however,
   adverse possession requires claimants to prove…") was dropped and replaced with a
   different sentence making the same point, because its subject and verb sit on opposite
   sides of a page break.
10. **Phrase queries that were shortened.** No long phrase query returned 0; every
    cluster-scoped query listed above returned `count=1` on the first attempt, so no
    shorter re-run was necessary.

## Negative results recorded in the clauses

* Romero states that neither the parties nor the court found **any case** directly
  addressing whether an implied easement may effectively exclude the servient owner
  (`implease_express_easement_comparators`).
* Romero **expressly declines** to decide whether Otay Water Dist. v. Beckwith, Raab v.
  Casper "or any of the other so-called exclusive prescriptive easements were decided
  correctly" (`implease_questions_left_open`).
* Hirshfield **expressly reserves** whether Silacci and Mehdizadeh are overbroad, assuming
  arguendo that they state the law (`implease_questions_left_open`).
* Romero **does not decide** whether an implied easement existed on the facts; it remands
  that question (`implease_takings_and_disposition`).
* No later California decision applying Romero v. Shih was located in the sources
  consulted (`implease_takings_and_disposition`).
* Romero **neither approves nor disapproves** Shoen v. Zacarias; its only engagement with
  the equitable easement doctrine is descriptive (`implease_equitable_easement_limits`).
* No source consulted resolves how little retained use is enough before an easement stops
  being an easement (`implease_servient_owner_retained_rights`).

## Authority quoted only at one remove

These were not fetched and are quoted or described **only as a controlling opinion
reproduces them**, which each affected clause's gap states: Hansen v. Sandridge Partners,
L.P.; Mehdizadeh v. Mincer; Thorstrom v. Thorstrom; Fristoe v. Drapeau; Orr v. Kirk;
Scruby v. Vintage Grapevine, Inc.; Gray v. McCormick; Blackmore v. Powell; Raab v. Casper;
Silacci v. Abramson; Harrison v. Welch; Otay Water Dist. v. Beckwith; Christensen v.
Tucker; Linthicum v. Butterfield; Tashakori v. Lakis; Warsaw v. Chicago Metallic Ceilings,
Inc.; Pasadena v. California-Michigan etc. Co.; the Restatement Third of Property,
Servitudes § 1.2; the Miller & Starr treatise; Romero v. Shih (2022) 78 Cal.App.5th 326;
and Stop the Beach Renourishment, Inc. v. Florida Dept. of Environmental Protection, which
is federal and whose cited passage is from a plurality opinion.

## Final validation

Structural check (both files parse; clause ids unique; doc ids unique; doc titles unique;
every `clauseOrder` id resolves; every authority clause has a non-empty gap and at least
one citation; no orphan clauses; no undeclared `{{placeholder}}`; canonical key order for
clauses, citations and documents):

```
clauses: 6209   documents: 713
new-doc clauses: 15   authority: 13   citations: 56
ALL STRUCTURAL CHECKS PASS
```

Quote re-read: all 56 `citations[].quote` values were read back out of the written
`data/clauses.json` and re-tested as verbatim substrings of the stored fetches.

```
CORPUS RE-READ: 56 quotes, PASS 56, FAIL 0
```
