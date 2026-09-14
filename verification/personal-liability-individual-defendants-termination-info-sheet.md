# Ending employment, new document: Personal Liability of Supervisors, Officers and Public Officials for a Termination — Information Sheet

Document id: `personal_liability_individual_defendants_termination_info_sheet`
Clause id prefix: `perslia_`
Checked date on every authority clause: 2026-09-14

## Why this topic

The corpus already carries 91 "Ending employment" documents, including several
on wrongful termination (public policy, mixed motive, whistleblower burden
framework, constructive discharge, workers' compensation exclusivity,
arbitration, good cause, judicial exhaustion). None of them answers the
question **who, besides the employing entity, can be made to answer in damages
for a termination** — the defendant-identity question.

Grep counts run against `data/clauses.json` and `data/documents.json` before
drafting (clause-level counts are per-clause hit counts from a JSON-aware
grep, not raw line counts):

| term | clause hits | notes |
|---|---|---|
| `Reno v. Baird` | 0 | |
| `Torrey Pines` | 0 | |
| `Janken` | 0 | |
| `Reynolds v. Bement` | 0 | |
| `Voris` / `Lampert` | 0 / 0 | |
| `Caldwell v. Montoya` | 0 | |
| `820.2` | 0 | |
| `Jennings v. Marralle` | 0 | |
| `Walrath` | 0 | |
| `aid, abet` | 0 | |
| `12940(j)(3)` | 0 | literal form absent |
| `LaPaille` / `Seviour` | 0 / 0 | |
| `558.1` | 2 | inspected — see below |
| `individual liab` | 4 | inspected — see below |
| `Miklosy` | 4 | inspected — see below |
| `Martinez v. Combs` | 5 | inspected — see below |
| `Raines` / `Healthworks` | 2 / 2 | inspected — see below |

### False positives and near-hits inspected and discounted

- **`558.1` (2 hits)** — both in `right_to_day_of_rest_info_sheet`
  (`dayofrest_purpose_statement`, `dayofrest_employer_prohibition_six_of_seven`),
  where § 558.1 appears only in a list of enforcement provisions. Neither
  quotes or construes the section. Not coverage.
- **`individual liab` (4 hits)** — `clientemployer2810_special_carveouts`
  (labor-contractor liability), `unincorpassoc_member_liability` (nonprofit
  associations), `dirtort_status_alone_neither_liability_nor_immunity`
  (corporate officer tort liability, Business Formation), and
  `milstatusdiscrim_employer_not_individual_liability` (Military & Veterans
  Code § 394 only). None concerns FEHA, Tameny, or wage liability.
- **`Miklosy` (4 hits)** — all in
  `workers_comp_exclusivity_emotional_distress_termination_info_sheet`, all
  four quoting Miklosy at 44 Cal.4th 902-903 on the *workers' compensation
  exclusivity* holding. The individual-defendant holding at 44 Cal.4th 900-901
  is absent from the corpus; this sheet quotes those two pages and no page
  already quoted elsewhere.
- **`Martinez v. Combs` (5 hits)** — four in `joint_employer_status_info_sheet`
  on the three alternative definitions of "employ," one passing reference in
  `commissioned_employee_overtime_exemption_info_sheet`. None quotes the
  passage at 49 Cal.4th 66 confirming and confining Reynolds. That passage is
  what this sheet quotes.
- **`Raines` / `Healthworks`** — `jointemp_feha_agent_liability` covers Raines
  v. U.S. Healthworks Medical Group (2023) 15 Cal.5th 268 (business-entity
  agents). Deliberately **not** re-covered here; it is named in the scope-note
  clause and in the gap of `perslia_feha_employer_definition` as out of scope.
- **`personal liability of` (9 hits)** — the only employment one is
  `harassliab_personal_liability_of_harasser`, which quotes Gov. Code
  § 12940(j)(3) verbatim. This sheet therefore **describes** (j)(3) in prose
  and does not re-quote it, to avoid a duplicate citation.
- Earlier candidates checked and abandoned as already covered: after-acquired
  evidence / Salas v. Sierra Chemical (29 clause hits); fixed-term contracts
  and Lab. Code § 2924 (`fixed_term_employment_contract_info_sheet`, though
  note Civil Code § 2924 foreclosure supplies most of the 179 raw `2924` line
  hits — a numeric false positive); UI voluntary quit / misconduct
  (`uimisconduct_case_law_standard` quotes Amador).

## Sources and how each was fetched

### Case law — single publisher, disclosed

**No second publisher of California case law was reachable from this
environment.** Probed and refused/failed: `law.justia.com`, `caselaw.findlaw.com`
(403), `casetext.com`, `cite.case.law`, `static.case.law`, `api.case.law`,
`law.resource.org`, `www.descrybe.ai`, `www.ecases.us`, `www.lexisnexis.com`,
plus the hosts the brief lists as egress-blocked. The California courts' own
opinion archive at `courts.ca.gov/opinions/archive/<DOCKET>.PDF` **does** serve
recent slip opinions (S275848 returned a 400 KB PDF) but returns 404 for
S057578, S151022, S139133 and S115823 — the dockets for Reno, Jones, Miklosy
and Reynolds.

So every opinion below was fetched **once from CourtListener**, and each quoted
span was then confirmed by an **exact-phrase query against CourtListener's
search index** scoped to that opinion's cluster
(`q=cluster_id:<id> AND "<phrase>"`, count=1 in every case). That index query
is a **second path to the same publisher, not a second publisher**, and it is
described that way in every affected clause's `gap`. It confirms that the text
this sheet quotes is the text CourtListener serves; it does **not**
independently corroborate the text against the official reports.

| case | CourtListener cluster | index-confirmation phrase | count |
|---|---|---|---|
| Reno v. Baird (1998) 18 Cal.4th 640 | 1275413 | "individuals who do not themselves qualify as employers may not be sued" | 1 |
| Jones v. Lodge at Torrey Pines Partnership (2008) 42 Cal.4th 1158 | 2561876 | "nonemployer individuals are not personally liable for their role in that retaliation" | 1 |
| Miklosy v. Regents (2008) 44 Cal.4th 876 | 5608068 | "lies only against an employer" | 1 |
| Caldwell v. Montoya (1995) 10 Cal.4th 972 | 1213723 | "enjoy personal immunity under section 820.2" | 1 |
| Reynolds v. Bement (2005) 36 Cal.4th 1075 | 2567023 | "corporate agents acting within the scope of their agency are not personally liable" | 1 |
| Martinez v. Combs (2010) 49 Cal.4th 35 | 2630272 | "The opinion should not be read more broadly than that" | 1 |
| Voris v. Lampert (2019) 7 Cal.5th 1141 | 4648695 | (reached via `/c/Cal. 5th/7/1141/` redirect) | — |

Cluster ids for Jones, Caldwell, Martinez and Voris were obtained through the
quota-free citation-redirect path `/c/<Reporter>/<vol>/<page>/`, because the
public search JSON was repeatedly rate-limited (125/day, shared). The phrase
script rode out two throttles with in-turn sleeps of 23 s and 322 s.

### Statutes — two genuinely independent publishers

| section | fetch 1 | fetch 2 | fetch 3 | result |
|---|---|---|---|---|
| Gov. Code § 12926(d) | leginfo.legislature.ca.gov (Legislative Counsel, official) | california.public.law (Public.Law) | — | character-identical |
| Gov. Code § 12940(a), (h), (i) | leginfo | california.public.law | law.onecle.com (older snapshot) | character-identical on every quoted span |
| Gov. Code § 820.2 | leginfo | california.public.law | — | character-identical |
| Lab. Code § 558.1(a), (b) | leginfo | california.public.law | leginfo bill-text service (chaptered SB 588, § 10) | **(a) diverges — see findings** |
| Lab. Code § 1102.5(b) | leginfo | california.public.law | — | character-identical |

leginfo was fetched with a JSF session cookie seeded from `/faces/codes.xhtml`.

## Genuine defects found — disclosed, not silently corrected

### 1. Two publishers of Labor Code § 558.1 disagree on one character

- **leginfo (Legislative Counsel, official)**: "…or violates, or causes to be
  violated, **Sections** 203, 226, 226.7, 1193.6, 1194, or 2802…"
- **california.public.law**: "…or violates, or causes to be
  violated, **Section** 203, 226, 226.7, 1193.6, 1194, or 2802…"

Confirmed in the **raw HTML of both fetches**, not merely in extracted text
(Public.Law wraps each cited section number in an `<a>` tag; the singular
"Section " sits immediately before the first anchor).

Resolved against Public.Law by two further records, both of which read
**"Sections"**:

1. the chaptered text of Senate Bill No. 588 (2015-2016 Reg. Sess.), § 10, as
   displayed on the Legislature's bill-text service; and
2. the California Supreme Court's own quotation of the subdivision in
   **Voris v. Lampert**, which prints "Sections 203, 226, 226.7, 1193.6, 1194,
   or 2802."

Both the official form and the Supreme Court's quotation are cited in
`perslia_labor_code_558_1_and_voris`; the Public.Law variant is reported in
that clause's `gap`. The § 558.1 citations in the written file were therefore
re-verified against leginfo **and** the chaptered SB 588 text rather than
against Public.Law.

### 2. Reno v. Baird: the Act's name transposed in a bracketed editorial insertion

In the separate opinion at 18 Cal.4th 664, the bracketed expansion of the
acronym reads **"[Fair Housing and Employment Act]"** — the two halves of the
statute's name reversed — while the same paragraph elsewhere spells it
correctly as the Fair Employment and Housing Act. Exact-phrase query
`cluster_id:1275413 AND "Fair Housing and Employment Act"` returned count=1,
so the transposed form is in the copy the publisher serves. Whether it
originates in the official report or in the scan **could not be determined
from a single publisher** and is reported rather than repaired, in the gap of
`perslia_reno_no_individual_discrimination`.

### 3. OCR damage in the CourtListener scans — located, confirmed in the record, and avoided

Each confirmed by an exact-phrase index query returning count=1, so the
corruption is in the retrieved record and not in this agent's extraction:

- **Reno**, 18 Cal.4th 646: "n**é**cessary personnel management duties".
- **Reno**, 18 Cal.4th 647: "**Mating** personnel decisions" for "Making"
  (query `"Mating personnel decisions"` → 1).
- **Reno**, 18 Cal.4th 664 (disposition): "remand the matter **for'**further
  proceedings".
- **Jones**, 42 Cal.4th 1161: "subdivision (j)(**l**)" — lowercase L for the
  numeral 1; 1164: "unlawful **.**employment practice"; 1167: "**incongmous**"
  for "incongruous" (query `"incongmous"` → 1).
- **Reynolds**, 36 Cal.4th 1089: "the **ELSA** (29 U.S.C. § 201 et seq.)" where
  the FLSA is meant (query `"under the ELSA"` → 1).
- **Caldwell**, 10 Cal.4th 976: a declarative sentence ends "…is such a
  determination**!**".
- **Martinez**: brace-for-parenthesis "{Reynolds, at p. 1086.)"; "Black's Law
  **Diet.**" for "Dict."

**No damaged passage is quoted anywhere in this document.** Quotations were
selected from spans free of such damage; where a damaged sentence was the
natural quotation (e.g. Janken's list of "commonly necessary personnel
management actions" at 18 Cal.4th 647), the content is described in the clause
body instead and the reason is given in the gap.

### 4. A quotation variance in Reno that could not be resolved

Reno, reproducing Janken, sets out the FEHA's aiding-and-abetting provision
(then subdivision (g)) as forbidding a person "to aid, abet, incite, **compel
or coerce**" — without the serial comma after "compel" that the current text of
subdivision (i) carries. The current text with the comma was confirmed from
three publishers (leginfo, Public.Law, law.onecle.com). No publisher of the
**1996** text of former subdivision (g) was reachable, so this sheet could not
determine whether the 1996 statute lacked the comma or whether the comma was
dropped in quotation. The opinion's comma-free form is quoted exactly as
served (index query `"aid, abet, incite, compel or coerce"` → count 1) and the
unresolved question is stated in the gap of `perslia_reno_aiding_abetting`.

## Pin cites: how each was derived, and where none is given

Pinpoint pages were read off star-pagination markers in the retrieved text, not
from memory:

- **Reno** 643 (opening statement, after the `*643` marker opening the counsel
  block), 646, 656, 658, 663, 664. The 663 reading is independently
  corroborated inside the same document: the separate opinion cites the holding
  sentence as "Maj. opn., ante, at p. 663."
- **Jones** 1160 (after `*1160`, before `*1161`), 1164, 1173 (before `*1174`).
- **Miklosy** 900 (between `*900` and `*901`) and 901 (after `*901`, before
  `*902`) — offsets checked programmatically.
- **Caldwell** 976 (after `*976`).
- **Reynolds** 1087 (between `*1087` and `*1088`).
- **Martinez** 66 (after `*66`).

**No pin cite is given** for three citations, and each says so in its `cite`
field with the reason in the gap:

1. **Reno footnote 2** and 2. **Caldwell footnote 3** — the publisher's
   rendering relocates footnotes into a block at the end of the opinion where
   the star markers stop tracking. For Caldwell fn. 3, Reno's own citation
   (18 Cal.4th 657, citing "Caldwell…, supra, 10 Cal.4th at pages 978-979,
   footnote 3") is reported as a cross-reference rather than asserted as a
   pinpoint this agent read.
3. **Voris v. Lampert (all three quotations)** — that opinion's rendering
   interleaves star markers from three reporters (`*1144`/`*1161` official,
   `*782`/`*796` Cal.Rptr.3d, `**287`/`**298` P.3d) without distinguishing
   them, so no marker adjacent to a quoted sentence can be attributed to a
   reporter with confidence.

## Intermediate-court authority

Janken v. GM Hughes Electronics (1996) 46 Cal.App.4th 55 is quoted **only as
the California Supreme Court reproduces it in Reno**, and each such citation's
`cite` field and the clause's gap say so. Janken itself was not retrieved.
Usher v. White (2021) 64 Cal.App.5th 883 and Seviour-Iloff v. LaPaille (2022)
74 Cal.App.5th 621 are **named but not quoted**, for the same reason.

## Negative results recorded in the document

- An exact-phrase search of CourtListener for California Supreme Court opinions
  containing "Labor Code section 558.1" returned **exactly one** decision,
  Voris v. Lampert — which describes the section while surveying remedies
  rather than construing its terms.
- An exact-phrase search for California Supreme Court opinions containing
  "any person acting on behalf of the employer" returned **four** decisions
  (People ex rel. Garcia-Brower v. Kolla's, Inc.; Brown v. City of Inglewood;
  Voris v. Lampert; Chavez v. Sargent). None was retrieved for this sheet and
  none is represented as deciding whether Lab. Code § 1102.5 imposes personal
  liability on a natural person. The clause states that the question is
  undecided by anything retrieved, and does not predict an answer.
- Reno expressly reserved (a) individuals' liability for **harassment**
  (fn. 2), (b) the scope of **employer** liability for discrimination or
  harassment, and (c) whether the "agent" language of Gov. Code § 12926(d)
  merely incorporates respondeat superior. Reservations (a) and (b) are quoted;
  (c) is recorded as an open question in the gap.
- Reno also expressly declined to decide whether discrimination based on
  medical condition supports a Tameny action at all — noted in the body of
  `perslia_reno_tameny_extension`.
- Caldwell (1995) reached its immunity holding by **assuming without deciding**
  that the FEHA imposes individual liability — the assumption Reno rejected
  three years later. That footnote is quoted.
- **Amendment postdating the opinions quoted**: Gov. Code § 12940(a)'s list of
  protected characteristics as published today is not the list in force when
  Caldwell (1995), Reno (1998) or Jones (2008) were decided; stated in the gap
  of `perslia_feha_employer_definition`.
- Lab. Code § 558.1 was enacted in 2015, effective 2016 — after Reynolds (2005)
  and Martinez (2010), both of which construe Lab. Code § 1194 and the wage
  orders rather than the waiting-time penalty statute. Stated in the gap of
  `perslia_wage_nonpayment_reynolds_martinez`.

## Normalization

Only benign retrieval artifacts were normalized before substring comparison,
and every affected clause's gap says so: runs of whitespace introduced by line
wrapping and HTML block structure collapsed to single spaces; non-breaking
spaces treated as ordinary spaces; soft hyphens dropped; the `fi`/`fl`
ligatures expanded. No wording, punctuation or capitalization was altered in
any quote.

## Clauses

15 clauses — **12 authority, 3 drafting**, **31 citations** (counts read back
out of the written `data/clauses.json`, not from the draft).

Drafting: `perslia_intro`, `perslia_scope_note`, `perslia_ack`.

Authority:

1. `perslia_feha_employer_definition` — Gov. Code §§ 12926(d), 12940(a).
2. `perslia_reno_no_individual_discrimination` — Reno at 643, 663.
3. `perslia_reno_personnel_management_rationale` — Reno at 646 (quoting
   Janken), 663.
4. `perslia_reno_aiding_abetting` — Gov. Code § 12940(i); Reno at 655, 656
   (quoting Janken).
5. `perslia_reno_tameny_extension` — Reno at 663, 664.
6. `perslia_miklosy_tameny_employer_only` — Miklosy at 900, 901.
7. `perslia_jones_retaliation` — Gov. Code § 12940(h); Jones at 1160, 1173.
8. `perslia_harassment_contrast_and_reserved_questions` — Reno fn. 2 (no pin
   cite), Reno at 658, Jones at 1164.
9. `perslia_caldwell_public_employee_immunity` — Gov. Code § 820.2; Caldwell
   at 976 and fn. 3 (no pin cite).
10. `perslia_wage_nonpayment_reynolds_martinez` — Reynolds at 1087; Martinez
    at 66 (two passages).
11. `perslia_labor_code_558_1_and_voris` — Lab. Code § 558.1(a), (b); Voris
    (three passages, no pin cites).
12. `perslia_whistleblower_1102_5_person` — Lab. Code § 1102.5(b).

## Validation run

```
docs 721 clauses 6328
structural checks OK
quote re-verification: PASS 31 FAIL 0
new clauses: authority 12 drafting 3 citations 31
```

Structural checks asserted: both files parse and have the expected shapes;
clause ids unique; document ids unique; document titles unique corpus-wide;
every `clauseOrder` id resolves; every authority clause has a non-empty `gap`
and at least one citation; no orphan clauses; no undeclared `{{field}}`
placeholders in any body or gap; canonical key order for clauses, citations
and documents. The quote re-verification re-reads all 31 quotes **out of the
written `data/clauses.json`** and confirms each is still a verbatim substring
of every fetched source mapped to its URL.
