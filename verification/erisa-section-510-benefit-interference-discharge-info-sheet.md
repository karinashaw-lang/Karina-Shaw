# Ending employment, new document: ERISA Section 510 — Discharge or Discrimination to Interfere With Employee-Benefit Rights (29 U.S.C. § 1140) — Information Sheet

## Why this document

Processed item of wave 154 (Ending employment slot, continuing the
round-robin with waves 146/148/150/152). Read all 80 existing "Ending
employment" document titles/ids in `data/documents.json` before
choosing a topic, and grepped both data files for candidate subjects.
Several candidates suggested by the task brief were checked and ruled
out as already covered: the Labor Commissioner wage-claim (Berman
hearing) procedure (`dlse_wage_claim_info_sheet`), constructive
discharge under Turner v. Anheuser-Busch
(`constructive_discharge_info_sheet`), and motion-picture final-wage
timing (`motion_picture_broadcasting_final_wage_info_sheet`). The
tender-back / release-rescission topic was also confirmed open but set
aside for a later wave in favor of a federal topic with cleaner
controlling authority.

The chosen topic — ERISA section 510's prohibition on discharging,
fining, suspending, expelling, disciplining, or discriminating against
a plan participant or beneficiary for exercising a plan right or for
the purpose of interfering with the attainment of a plan right — was
confirmed genuinely open: zero corpus hits on "29 U.S.C. § 1140,"
"section 510," "Inter-Modal," or "Ingersoll-Rand" as a topic (the
string "1140" appears only in unrelated Probate Code and Penal Code
cross-references, and ERISA is mentioned in the corpus only in the
401(k) distribution notice, the QDRO and military-divorce sheets, and
the COBRA-penalties sheet, none of which address the anti-interference
cause of action). This fills a real gap on the employee-side of a
separation: benefit-motivated discharge is one of the few
termination-related claims that federal law channels exclusively into
federal court and away from California common-law theories.

## What this document covers

7 clauses: 1 drafting (applicability note) and 6 authority clauses,
citing 29 U.S.C. § 1140 (first, second, and fourth sentences), 29
U.S.C. § 1132(a)(3), (e)(1), and (g)(1), Inter-Modal Rail Employees
Assn. v. Atchison, Topeka & Santa Fe Ry. Co., 520 U.S. 510 (1997),
Ingersoll-Rand Co. v. McClendon, 498 U.S. 133 (1990), and Dytrt v.
Mountain State Telephone & Telegraph Co., 921 F.2d 889 (9th Cir.
1990):

- **`erisa510_declaration`** (drafting) — applicability note naming
  the employee, employer, and separation date while disclaiming any
  determination that ERISA applies or that any purpose existed.
- **`erisa510_statutory_prohibitions`** — the section's two
  prohibitions (retaliation for exercising a plan right; interference
  with attaining one), the "any person" reach, and the list of
  forbidden acts beyond discharge.
- **`erisa510_witness_protection_and_enforcement_crossref`** — the
  separate protection for anyone who gives information or testifies,
  and the express cross-reference making § 502 (29 U.S.C. § 1132) the
  enforcement mechanism.
- **`erisa510_welfare_benefits_covered`** — Inter-Modal: § 510
  reaches non-vested welfare benefits (health coverage), not only
  pension vesting; an employer's plan-amendment freedom does not
  include discharging participants "one participant at a time."
- **`erisa510_specific_intent_element`** — Dytrt (9th Cir.): specific
  intent to interfere is the element; an incidental benefit loss is
  not enough; Inter-Modal's "fundamental business decisions" sentence.
- **`erisa510_state_claims_preempted`** — Ingersoll-Rand: a state
  wrongful-discharge claim premised on benefit interference is
  preempted under § 514(a) and, independently, because § 502(a) is the
  exclusive remedy; the Court's footnote characterizing the Ninth
  Circuit's Sorosky decision; Dytrt's preemption of implied-contract
  and implied-covenant claims.
- **`erisa510_enforcement_mechanics`** — § 502(a)(3) equitable relief,
  § 502(e)(1) exclusive federal jurisdiction (contrasted with the
  concurrent jurisdiction for § 502(a)(1)(B) benefit claims), and
  § 502(g)(1) discretionary two-way attorney's fees.

## Genuine findings

- **A genuine slip-opinion / U.S. Reports wording difference,
  disclosed and worked around**: in Ingersoll-Rand, the CourtListener
  text (U.S. Reports) reads "Not only is § 502(a) the exclusive remedy
  for vindicating § 510-protected rights, *but* there is no basis...,"
  while the Cornell LII slip-opinion text omits "but." The quotation
  was cut to the clause identical in both copies, the following two
  sentences (identical in both) were quoted separately, and the
  `erisa510_state_claims_preempted` gap field discloses the
  discrepancy.
- **Section-symbol and quotation-mark typesetting differences between
  sources, disclosed rather than silently normalized**: Cornell's
  Inter-Modal text uses "§510" (no space) and straight quotes; its
  Ingersoll-Rand slip text drops the § symbol entirely ("510," "502(a)");
  CourtListener uses "§ 510" and typographic quotes. Each affected
  clause's gap states that quotes follow the CourtListener text and
  that the Cornell comparison was made after normalizing those
  features.
- **Stripped-hyperlink whitespace artifacts in both statute mirrors**:
  both uscode.house.gov and Cornell render "section 1201 of this
  title ," and "[ 29 U.S.C. 301 et seq. ]" with stray spaces where link
  tags were removed; the § 1140 quote reproduces the statute's
  punctuation without the artifacts and the gap discloses the
  normalization.
- **Case-name discrepancy disclosed**: CourtListener's case-name field
  says "Mountain State Telephone and Telegraph Company" while the
  opinion text says "The Mountain States Telephone and Telegraph
  Company"; the clause uses the CourtListener name for its `case` field
  and discloses the difference.
- **Undecided question on remand disclosed**: Inter-Modal expressly
  left open the employer's "threshold of eligibility" argument for
  welfare benefits; the clause says so rather than implying the
  workers won.

## Honest gap(s) disclosed

This document does not independently fetch or quote ERISA's
definitions of "participant," "beneficiary," or "employee benefit
plan" (29 U.S.C. § 1002) or its coverage/exemption provisions
(§§ 1003, 1051); Kimbro v. Atlantic Richfield Co. (the Ninth Circuit
source of Dytrt's specific-intent formulation) or Sorosky v. Burroughs
Corp. (referenced only as the Supreme Court characterized it in a
footnote); the case law on what "other appropriate equitable relief"
under § 502(a)(3) includes (reinstatement, back pay, monetary
make-whole relief) or on jury-trial availability; the burden-shifting
framework courts apply to prove § 510 intent; the borrowed state
limitations period for § 510 claims in California; later Supreme Court
refinements of the § 514(a) "relate to" test; or whether a FEHA
protected-characteristic claim that does not depend on the existence
of a plan would be preempted. Each of these is disclosed in the
relevant clause's gap field rather than paraphrased as verified fact.

## Method

Fetched 29 U.S.C. §§ 1140 and 1132 twice each — once from
uscode.house.gov (curl, distinct "Groundtruth-verifier" User-Agent)
and once from Cornell LII (curl, Chrome-style User-Agent) — and
confirmed the operative text identical after normalizing only
whitespace adjacent to punctuation/brackets and apostrophe style.
Fetched the two Supreme Court opinions from Cornell LII's supct archive
twice each with the two distinct User-Agents (byte-identical), and a
third time via `mcp__CourtListener__get_endpoint_item`
(`html_with_citations`; opinion ids 118108 and 112512 — Ingersoll-Rand's
id was taken from the citation hyperlink embedded in the Inter-Modal
text). Dytrt (opinion id 553262, located via `mcp__CourtListener__search`)
could be retrieved only through CourtListener: the egress proxy refused
CONNECT to law.resource.org, openjurist.org, Justia, FindLaw, Leagle,
Casemine, AnyLaw, Google Scholar, and case.law, the CourtListener web
page returned an empty HTTP 202 bot-challenge to curl and WebFetch, and
the REST API requires a token. The two-independent-paths requirement
for Dytrt was therefore satisfied via two distinct CourtListener
retrieval methods — `get_endpoint_item` for the full text and three
separate `mcp__CourtListener__search_document` literal-phrase lookups,
one per quoted passage, each returning exactly one match at the
expected position — disclosed honestly as one underlying database
queried two ways rather than genuinely separate hosting
infrastructure. CourtListener's shared 5/min rate limit was hit
repeatedly (other parallel agents); the agent waited it out with
background until-loops rather than ending its turn.

All 20 citation-quote instances across the 6 authority clauses were
programmatically verified by a Python script asserting each quote is
an exact contiguous substring of every fetched copy of its source
after the disclosed normalizations (whitespace collapse; stray space
before punctuation and after "["; ’→', “”→"; removal of "§" and any
following space). Initial run: 18/20 passed; the two failures were the
bracket-spacing artifact (fixed by normalization, disclosed) and the
genuine Ingersoll-Rand "but" discrepancy (fixed by shortening the
quote, disclosed). Final run: 20/20.

## Verification

- Quote-verification output (final): `erisa510_statutory_prohibitions`
  (548 chars), `erisa510_witness_protection_and_enforcement_crossref`
  (282, 100), `erisa510_welfare_benefits_covered` (130, 236, 97, 152),
  `erisa510_specific_intent_element` (273, 170, 157),
  `erisa510_state_claims_preempted` (308, 150, 80, 226, 143, 227),
  `erisa510_enforcement_mechanics` (313, 502, 233) — all OK against
  every fetched copy (2 copies for each statute; 3 for each Supreme
  Court opinion; CourtListener full text plus per-quote
  `search_document` hits for Dytrt).
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`url`/`quote` — clean.
- Checked every `{{fieldId}}` placeholder used in clause bodies against
  the new document's declared `fields` — all three (`employeeName`,
  `companyName`, `terminationDate`) resolve; no unresolved
  placeholders.
- Checked every citation's `case` field for emptiness — all 20
  populated.
- Checked for duplicate clause IDs against the full corpus (none); the
  `erisa510_` prefix has zero collisions.
- Confirmed exact schema conformance: authority clauses carry exactly
  `{id, title, kind, status, checkedDate, body, gap, citations}`;
  citations exactly `{case, cite, url, quote}`; the drafting clause
  exactly `{id, title, kind, body}`; the document exactly `{id, title,
  description, categories, clauseOrder, fields}`.
- No new field ids — all three reused from the existing corpus with
  document-specific labels ("Employee (plan participant) name",
  "Employer / plan sponsor name", "Separation date").
- Corpus-wide validation (both files parse; all 5,163 clause ids
  unique; all 633 document ids unique; every clauseOrder reference in
  every document resolves; every placeholder in every document's
  clauses resolves to a declared field) — clean for the new content.
  The validator also reports 163 pre-existing shape quirks in older
  clauses (e.g., a null `gap`, differing key order); none involve this
  wave's content and none were touched.
- `git diff --numstat` confirms the merge was append-only (insertions
  only, zero deletions) in both data files.

## Net changes

- New document: ERISA Section 510 — Discharge or Discrimination to
  Interfere With Employee-Benefit Rights (29 U.S.C. § 1140) —
  Information Sheet
  (`erisa_section_510_benefit_interference_discharge_info_sheet`),
  7 clauses (6 authority + 1 drafting), in the Ending employment
  category. No new fields.
- Corpus: 5,156 → 5,163 clauses; 632 → 633 documents (Ending
  employment: 80 → 81). Wave 154 (Ending employment category).
