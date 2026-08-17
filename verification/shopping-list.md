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
| 1 | `Cal. Lab. Code §925` | 2 | 5 | 3 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 2 | `Cal. Health & Safety Code §25249.6` | 2 | 6 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 3 | `Cal. Lab. Code §§1030–1034` | 2 | 4 | 2 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 4 | `Cal. Gov. Code §12952` | 1 | 4 | 4 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 5 | `IWC Wage Order (industry-specific)` | 5 | 0 | 4 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 6 | `NY LLC Law §206` | 2 | 3 | 2 | that state's legislature site |
| 7 | `Cal. Corp. Code §17702.09` | 1 | 4 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 8 | `Cal. Corp. Code §1502` | 1 | 4 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 9 | `Cal. Civ. Code §1542` | 2 | 4 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 10 | `Cal. Lab. Code §§1400–1408` | 1 | 3 | 3 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 11 | `8 C.C.R. §3395` | 1 | 3 | 1 | the issuing body |
| 12 | `Cal. Corp. Code §§1502, 17702.09` | 1 | 3 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 13 | `Cal. Lab. Code §2870` | 1 | 3 | 1 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 14 | `Cal. Lab. Code §§201-203` | 1 | 2 | 3 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |
| 15 | `Cal. Civ. Code §1646.5` | 1 | 2 | 2 | leginfo.legislature.ca.gov  (Codes → the code named in the citation → the section number) |

## What the first 5 unlock

- **Cal. Lab. Code §925** — 2 clause(s): msa_ca_925, ea_ca_925
- **Cal. Health & Safety Code §25249.6** — 2 clause(s): msa_ca_prop65, cal_ca_prop65_ops
- **Cal. Lab. Code §§1030–1034** — 2 clause(s): can_lactation, hb_ca_lactation_break
- **Cal. Gov. Code §12952** — 1 clause(s): can_fair_chance
- **IWC Wage Order (industry-specific)** — 5 clause(s): ea_ca_exempt, hb_ca_oncall_travel, emp_meal, emp_rest, hb_meal_rest

## What this does not change

Obtaining the text moves a clause to `corroborated` at best. `primary-verified` still
requires a named human reviewer, and the release gate still refuses to draft anything
below `corroborated`. The texts remove the need to take my word for what the source says;
they do not remove the reviewer.
