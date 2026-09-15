# Business Formation, new document: Liability of a Purported Partner (Corp. Code § 16308)

Document id: `purported_partner_liability_info_sheet`
Clause prefix: `purpart_`
Checked date on every authority clause: 2026-09-15

## Why this document — the structural gap

The 93 existing Business Formation documents treat partnership as
something people *form*: by agreement (General Partnership Agreement,
Founders' Agreement, Joint Ventures), by operation of law among actual
co-owners (Corp. Code § 16202, in `partnership_formation_default` and
`jv_partnership_law_no_dedicated_statute`), or by filing (Statement of
Partnership Authority, Registered LLP, Limited Partnership Formation).
Liability of an owner is reached, in the existing corpus, either
*through* an entity (alter ego, successor liability, responsible-person
tax liability) or *as* an owner (§ 16306, § 17703.04).

Nothing in the category asks the inverse question: when does the law
impose partner-like liability on a person who is **not a partner at
all**, and where there is no entity to pierce — because a
representation of partnership was made or consented to and someone
relied on it. That is Corp. Code § 16308, the purported-partner /
partnership-by-estoppel section, and it sits in the same article
(Article 3, "Relations of Partners to Persons Dealing with
Partnership") as § 16306, which the corpus already quotes 28 times.
The corpus took the actual-partner half of the article and left the
purported-partner half.

### Grep counts, and the hits inspected and discounted

Run against `data/clauses.json` (6,550 clauses) and
`data/documents.json` (736 documents) at base commit `95dab4b`:

| token | clauses.json | documents.json | verdict |
|---|---|---|---|
| `16308` | 0 | 0 | true zero |
| `16307` | 0 | 0 | true zero |
| `16306` | 28 | 1 | real coverage of the *actual-partner* section only |
| `partnership by estoppel` | 0 | 0 | true zero |
| `purported partner` | 0 | 0 | true zero |
| `ostensible partner` | 0 | 0 | true zero |
| `Holmes v. Lerner` | 0 | 0 | true zero |
| `estoppel` | 77 | 8 | **inspected** |
| `ostensible` | 14 | 2 | **inspected** |
| `purported` | 20 | 0 | **inspected** |
| `held out` / `holding out` | 6 / 3 | 0 | **inspected** |

The 77 + 14 + 20 + 9 hits on the four generic tokens were re-run
through a script that kept only hits whose ±90-character context also
contained the string `partner` (case-insensitive). That returned
exactly **one** hit, in `antidef_short_sale_bar_580e`:

> "Subdivision (e) provides that any purported waiver of subdivision
> (a) or (b) shall be void and against public policy."

That is a *purported waiver* in an anti-deficiency clause, in the Real
Estate category — a false positive, discounted. Every other hit on
`estoppel`, `ostensible`, `purported`, `held out` and `holding out` is
in a context with no partnership sense (judicial estoppel, ostensible
agency in employment/medical contexts, ostensible authority, purported
waivers/assignments).

Also checked and discounted as candidate topics because they turned out
to be covered: Corp. Code § 2011 (post-dissolution claims — covered by
`corpdiss_continued_existence_and_claims`, whose own gap note records
what it left behind) and Corp. Code § 2000 (buyout in lieu of
involuntary dissolution — `§ 2000` greps 0 because the corpus writes it
without the section symbol; `involdissolution_buyout_alternative`
quotes § 2000(c) in full, and `appraiser` greps 21 hits including it).
That is exactly the "never trust the counts" trap: a bare `§ 2000`
count of 0 would have been a false gap.

## What this document covers

15 clauses: **12 authority + 3 drafting**, 40 citations.

| clause id | kind | subject |
|---|---|---|
| `purpart_purpose_declaration` | drafting | scope; how this differs from the existing partnership documents |
| `purpart_statutory_rule` | authority | § 16308 opening LLP carve-out + subd. (a) sentence 1 (representation / reliance / transaction) |
| `purpart_public_manner` | authority | § 16308(a) sentence 2 — public representations and the unaware purported partner |
| `purpart_measure_of_liability` | authority | § 16308(a) sentences 3–4 — two different measures |
| `purpart_agency_effect` | authority | § 16308(b) — purported partner as agent of those who consented; all vs. fewer than all |
| `purpart_filings_do_not_create_liability` | authority | § 16308(c), (d); Armato's characterization of Wattenbarger |
| `purpart_negative_rule_and_enactment` | authority | § 16308(e); the "Added by Stats. 1996, Ch. 1003" line on both publishers |
| `purpart_neighbouring_sections` | authority | § 16306(a); § 16307(e) and (c) |
| `purpart_armato_the_one_case` | authority | Armato v. Baden; the negative search result |
| `purpart_armato_holding` | authority | Armato's holding; the trial court's ruling as reported |
| `purpart_the_test_and_a_misquotation` | authority | Wattenbarger's test and reliance element; **disclosed defect #1** |
| `purpart_names_listed_insufficient` | authority | Armato on names on a door; **disclosed defect #2**; Inglewood |
| `purpart_equitable_estoppel_roots` | authority | Moen on equitable estoppel and pleading; Armato fn. 2 terminology |
| `purpart_worksheet` | drafting | element-by-element fact worksheet |
| `purpart_closing_note` | drafting | closing note and signature block |

Fields declared: `personName`, `businessName`, `representationDescribed`,
`claimantName`, `preparedDate`. All five are used in clause bodies and
all are declared in the document's `fields`.

## Verification, per source

### Statutes — two genuinely independent publishers

| section | publisher A | publisher B | comparison |
|---|---|---|---|
| Corp. Code § 16308 | `leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CORP&sectionNum=16308` (JSF cookie seeded from `/faces/codes.xhtml`; 166,177 bytes) | `law.onecle.com/california/corporations/16308.html` (10,527 bytes) | **identical** section text, including curly apostrophes, subdivision lettering and the enactment line |
| Corp. Code § 16307 | leginfo, same path, `sectionNum=16307` (165,660 bytes) | `law.onecle.com/california/corporations/16307.html` (9,816 bytes) | **identical** |
| Corp. Code § 16306 | leginfo, same path, `sectionNum=16306` (167,340 bytes) | `law.onecle.com/california/corporations/16306.html` (11,627 bytes) | **identical** |

These two are genuinely independent publishers. `california.public.law`
was **not** used: it prints a "Source:" line naming leginfo and is not
an independent publication.

**onecle is a 2017 snapshot**, so the snapshot's currency had to be
established rather than assumed. Both publishers print the same
enactment credit for all three sections — "(Added by Stats. 1996, Ch.
1003, Sec. 2. Effective January 1, 1997.)" — with **no amendment note**
on either. Because no amendment postdates the snapshot, no corroboration
against the Legislative Counsel's chaptered bill text was needed, and
none was fetched; that limitation is stated in the
`purpart_negative_rule_and_enactment` gap. (By contrast, § 16309, also
fetched while surveying the article, shows "Amended by Stats. 2022, Ch.
617" — so the leginfo display does surface amendments where they exist,
which is what makes the absence of one on §§ 16306–16308 meaningful.)

Every statutory quote was confirmed to be a verbatim substring of
**both** fetches.

### Case law — one publisher each, disclosed

A second free publisher was not reachable for any of the four opinions.

| opinion | fetch path | second path attempted | result |
|---|---|---|---|
| Armato v. Baden (1999) 71 Cal.App.4th 885 | `courtlistener.com/opinion/2262841/armato-v-baden/` (HTTP 200, 89,278 bytes, with `Referer: https://www.courtlistener.com/` and a browser UA) | `courts.ca.gov/opinions/archive/B121946.PDF` | **HTTP 404** — that archive does not reach back to 1999 |
| | | `courtlistener.com/c/Cal. App. 4th/71/885/` | 302 → cluster **2262841** |
| | | `courtlistener.com/c/Cal. Rptr. 2d/84/294/` | 302 → cluster **2262841** — the *same* cluster, so two URL paths to one publisher, not two publishers |
| J. C. Wattenbarger & Sons v. Sanders (1963) 216 Cal.App.2d 495 | `/c/Cal. App. 2d/216/495/` → `courtlistener.com/opinion/2215461/j-c-wattenbarger-sons-v-sanders/` (200, 78,506 bytes) | none reachable | single publisher |
| Moen v. Art's Cafe (1950) 95 Cal.App.2d 577 | `/c/Cal. App. 2d/95/577/` → `courtlistener.com/opinion/1162905/moen-v-arts-cafe/` (200, 51,499 bytes) | none reachable | single publisher |
| Inglewood Teachers Assn. v. PERB (1991) 227 Cal.App.3d 767 | `/c/Cal. App. 3d/227/767/` → `courtlistener.com/opinion/2142468/…` (200, 88,188 bytes) | none reachable | single publisher |

No `/c/` redirect returned HTTP 300, so no wrong-cluster diff was
required; both Armato reporter citations resolving to one cluster was
verified by following each redirect to its effective URL.

Every case quote was confirmed to be a verbatim substring of its single
fetch, and each was additionally confirmed against CourtListener's
**search index** with a `cluster_id:<id> AND "<exact phrase>"` query
where a defect was at issue (below). A phrase-index hit is treated here
as a second *path*, not a second publisher.

### Normalization applied, and disclosed in every gap

Only benign artifacts were normalized before the substring comparison:
non-breaking spaces, and the line/paragraph breaks each publisher's
markup inserts, collapsed to single spaces. **No word, punctuation mark
or curly apostrophe was altered** in any quote. Each authority clause's
gap says so.

## Defects disclosed rather than corrected

### Defect 1 — Armato misquotes Wattenbarger ("for such" / "as such")

Armato quotes Wattenbarger's ostensible-partner formulation and prints
it as ending "…and assumed responsibility **for** such." Wattenbarger's
own text ends "…and assumed responsibility **as** such."

Confirmed in the record, not in extraction, by exact-phrase index query:

- `cluster_id:2262841 AND "assumed responsibility for such"` → **count 1**
- `cluster_id:2215461 AND "assumed responsibility as such"` → **count 1**
- `cluster_id:2215461 AND "assumed responsibility for such"` → **count 0**

Both texts are reproduced as printed in
`purpart_the_test_and_a_misquotation`, which quotes each opinion in its
own words and states the discrepancy in its gap. Because only one
publisher of either opinion was reachable, the sheet does not say
whether the official reporter prints the same.

### Defect 2 — Armato prints "than" for "that" in a quoted presumption

Armato prints: "Generally, the law indulges in no presumption **than**
an agency exists but instead presumes that a person is acting for
himself and not as agent for another," citing Inglewood Teachers Assn.
v. PERB, 227 Cal.App.3d at p. 780. Inglewood itself prints "**that** an
agency exists."

Confirmed in the record by exact-phrase index query:

- `cluster_id:2262841 AND "indulges in no presumption than an agency exists"` → **count 1**
- `cluster_id:2262841 AND "indulges in no presumption that an agency exists"` → **count 0**
- `"indulges in no presumption that an agency exists"` across `court=cal calctapp` → **count 6**, including the Inglewood decision Armato cites (cluster 2142468), plus Flynn v. Ralph M. Parsons Co., Jackson v. AEG Live, K. King and G. Shuler Corp. v. King, Walsh v. American Trust Co., Hathaway v. Siskiyou Union High School Dist.

Armato is reproduced with "than" in
`purpart_names_listed_insufficient`, with Inglewood's own sentence
quoted alongside it and the discrepancy stated in the gap. Nothing was
silently corrected.

### Rendering artifacts disclosed (and never crossed by a quotation)

CourtListener's rendering of Armato carries visible OCR damage: the
part heading "III" prints as "Ill"; a footnote cross-reference prints
as "fh. 2"; the party name "Conwisar" prints hyphenated across a line
break as "Con-wisar"; and a block quotation of former Corp. Code
§ 15016 renders the paragraph symbol as "HD". The rendering of Moen
prints "Wilbur IT. Stone" for "Wilbur H. Stone" and "as- follows".
Wattenbarger's own reporter text splits "sufficient" across the page
break as "suffi" (p. 500) / "cient" (p. 501). **No quotation in this
document crosses any of those spans**, and each artifact is named in
the gap of the clause that quotes the affected opinion.

## Pin cites, checked against star pagination

| quote | star markers bracketing it | pin cite given |
|---|---|---|
| Armato, "first impression" framing | *889 … *890 | 71 Cal.App.4th at p. 889 |
| Armato, trial court's ruling as reported | *892 … *893 | at p. 892 |
| Armato, "Respondents point out… § 16308…" | *897 … *898 | at p. 897 |
| Armato, "Assuming without deciding…" | *898 … *899 | at p. 898 |
| Armato, Wattenbarger formulation ("for such") | *898 … *899 | at p. 898 |
| Armato, "The listing of respondents' names…" | *898 … *899 | at p. 898 |
| Armato, "Generally, the law indulges…but instead" | begins after *898; **the sentence is cut by *899** | at p. 898, with the quotation stopped at the star marker and the cut disclosed in both the `cite` field and the gap |
| Armato, "Thus, the mere listing…" | *899 … *900 | at p. 899 |
| Armato, "that a limited partner defendant…" | *899 … *900 | at p. 899 |
| Armato fn. 2, terminology | **after the last star marker (*900)** | **no pin cite** — footnotes are relocated past the last star marker in this rendering, so the reporter page cannot be fixed; the `cite` field says exactly that |
| Wattenbarger, "to lead another person…as such" | *501 … *502 | 216 Cal.App.2d at p. 501 |
| Wattenbarger, "Reliance upon an actual or apparent representation…" | *501 … *502 | at p. 501 |
| Moen, "founded upon the doctrine of equitable estoppel" | *579 … *580 | 95 Cal.App.2d at p. 579 |
| Moen, pleading rule | *579 … *580 | at p. 579 |
| Inglewood, "no presumption that an agency exists" | *780 … *781 | 227 Cal.App.3d at p. 780 |

## Negative results recorded

- **No published California appellate decision construes § 16308.**
  CourtListener case-law search restricted to `court=cal calctapp`:
  - `"Corp. Code, § 16308"` → 1 (Armato v. Baden)
  - `"section 16308"` → 0
  - `"Corporations Code section 16308"` → 0
  - bare `16308` → 4: Armato, plus **Estate of Hilker (1948)**, **Blos
    v. Bankers Life Co. (1955)** and **Galli v. State of California
    (1979)** — all three inspected and discounted as false positives,
    since each predates the section's 1996 enactment entirely and the
    token matches reporter/LEXIS numbering, not a statute.
  - `"purported partner"` → 1 (Armato)
  - `"ostensible partnership"` → 15; `"partnership by estoppel"` → 2
    (Foster v. Fisher (1941), Associated Piping & Engineering Co. v.
    Jones (1936)) — all pre-1996 and construing former Civ. Code
    § 2410 / former Corp. Code § 15016.
  This is stated in the `purpart_armato_the_one_case` gap as a recorded
  negative, not as a claim that no such authority exists.
- **Armato's § 16308 reference is a parenthetical mapping note, not a
  holding.** The case arose from 1994–95 events and was decided under
  former § 15016, "assuming without deciding" that section applied.
  Stated in the gap.
- **Wording changed between former § 15016 and § 16308.** The former
  required the claimant to have "given credit to the actual or apparent
  partnership"; § 16308(a) requires instead that the claimant "enters
  into a transaction with the actual or purported partnership." No
  verified decision says whether that changes any outcome; the
  `purpart_armato_holding` gap records the open question rather than
  answering it.
- **Throttling is not a zero.** Three CourtListener search queries
  returned HTTP 429 mid-run and were logged as `count None`
  (`"partner by estoppel"`, bare `16308`, `"purported partner"`). Each
  was **re-run** after a back-off and returned a real count (2, 4 and 1
  respectively). No query was recorded as zero on the strength of an
  error.
- Every authority clause's gap names the neighbouring provisions it
  leaves behind: § 16306(b)–(h), § 16307(d)(1)–(5), § 16301, § 16303,
  § 16202, and Nofsinger v. Goldman (1898) 122 Cal. 609 (cited by Moen,
  not independently fetched).

## Validation

`python3 tools/validate_corpus.py`:

```
737 documents / 6565 clauses (4941 authority, 1624 drafting), 11485 citations
{'Business Formation': 94, 'Confidentiality & IP': 93, 'During employment': 93,
 'Ending employment': 93, 'Estate Planning': 93, 'Family Law': 93, 'Hiring': 93,
 'Real Estate': 93}

validation passed
```

Independently of the validator, every one of the **40** citation quotes
was re-read **out of the written `data/clauses.json`** and re-confirmed
as a verbatim substring of the fetched source file(s) — both fetches for
each of the statutory quotes, the single fetch for each case quote.
40/40 passed, 0 failures. The 12 authority / 3 drafting split reported
above was counted from the written file, not from memory.

Append-only: no existing clause or document was modified or reordered.
