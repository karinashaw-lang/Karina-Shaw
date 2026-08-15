# Source texts to obtain, in priority order

Ranked by how much of the corpus depends on each provision, weighted by clause severity,
whether the clause is drafted automatically, and whether it already has a confirmed defect
or a detector flag. The first few buy the most verification per document pulled.

109 distinct provisions are cited by the 169 clauses that assert law.
Drafting clauses need none of these — they assert no statute.

## How to hand them over

Save each as plain text — the section text itself, no commentary, no summary — and drop it
in Google Drive. That connector is live and tested. Name the file after the citation, e.g.
`Cal Lab Code 925.txt`. I will read it, store the bytes verbatim, hash it, record who
supplied it and from where, and pin each affected clause assertion to an exact quoted span.

A screenshot or a PDF is fine too, but plain text is what gets hashed cleanly.

## The list

| # | Provision | Clauses | Known defects | Flags | Where |
|---:|---|---:|---:|---:|---|
| 1 | `Cal. Lab. Code §925` | 2 | 3 | 3 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 2 | `IWC Wage Order (industry-specific)` | 5 | 0 | 4 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 3 | `Cal. Lab. Code §§1400–1408` | 1 | 3 | 3 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 4 | `NY LLC Law §206` | 2 | 2 | 2 | that state's legislature site |
| 5 | `Cal. Lab. Code §2870` | 1 | 3 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 6 | `Cal. Bus. & Prof. Code §18100 (SB 988)` | 1 | 2 | 2 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 7 | `Treas. Reg. §1.83-2(c)` | 2 | 1 | 2 | ecfr.gov (26 CFR) or irs.gov |
| 8 | `Cal. Lab. Code §§1030–1034` | 2 | 0 | 2 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 9 | `Cal. Lab. Code §2802` | 3 | 0 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 10 | `Cal. Lab. Code §512` | 2 | 0 | 2 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 11 | `Cal. Gov. Code §12950.1` | 1 | 1 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 12 | `Cal. Gov. Code §12952` | 1 | 0 | 4 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |

## What the first 5 unlock

- **Cal. Lab. Code §925** — 2 clause(s): msa_ca_925, ea_ca_925
- **IWC Wage Order (industry-specific)** — 5 clause(s): ea_ca_exempt, hb_ca_oncall_travel, emp_meal, emp_rest, hb_meal_rest
- **Cal. Lab. Code §§1400–1408** — 1 clause(s): can_calwarn
- **NY LLC Law §206** — 2 clause(s): charter_ny_publication, cal_ny
- **Cal. Lab. Code §2870** — 1 clause(s): ipa_state_carveout

## What this does not change

Obtaining the text moves a clause to `corroborated` at best. `primary-verified` still
requires a named human reviewer, and the release gate still refuses to draft anything
below `corroborated`. The texts remove the need to take my word for what the source says;
they do not remove the reviewer.
