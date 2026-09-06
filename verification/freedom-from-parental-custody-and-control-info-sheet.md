# Family Law, new document: Termination of Parental Rights (Freedom from Parental Custody and Control) — Information Sheet

## Why this document

Fourth and final processed item of wave 116 (Family Law slot). Four
candidates were checked and confirmed already covered before the agent
settled on this topic: Fam. Code §4320 long-term spousal support
(already fully covered — `msa_spousal_support_factors` quotes the full
factor list), §2107 disclosure sanctions (already covered by
`disclosure_noncompliance_consequences`), §6389 firearm relinquishment
(already covered by `dvro_firearm_relinquishment`), and §3011
best-interest factors (already covered by
`parenting_best_interest_factors`). Document- and clause-level greps for
"freedom from parental custody," "7822," "7825," "7827" returned zero
substantive hits — the only two tangential clause-level hits
(`guardianpet_not_parental_rights_termination`,
`stepparentadopt_dispensing_with_consent`) were personally confirmed to
address different topics (a guardianship/parental-rights distinction and
adoption-consent dispensation) without stating the Part 4 grounds,
standing, or counsel provisions this document covers.

## What this document covers

11 clauses: 2 drafting (intro, acknowledgment) and 9 authority clauses,
citing Fam. Code §§ 7802, 7803, 7821, 7822(a), 7822(b), 7823(a),
7825(a), 7825(b), 7827(a), 7827(c), 7827(e), 7841(a), 7841(b), 7860,
7862, 7891(a), 7892(a), 7892(c):

- **`tpr_purpose_and_effect`** — the proceeding's purpose and a
  resulting judgment's effect of terminating all parental rights and
  responsibilities.
- **`tpr_standard_of_proof`** — the clear-and-convincing evidence
  standard governing Chapter 2 findings.
- **`tpr_ground_abandonment`** — the abandonment ground, its
  presumptive-evidence rule, and the "token efforts" standard.
- **`tpr_ground_neglect_or_dependency`** — the neglect/cruel-treatment
  ground and the one-year juvenile-dependency-based ground.
- **`tpr_ground_felony_or_rape_conception`** — the felony-conviction
  unfitness ground and the conclusive presumption for a child conceived
  by rape.
- **`tpr_ground_mental_disability`** — the mental-disability ground, its
  two-expert evidentiary requirement, and mandatory counsel appointment.
- **`tpr_who_may_petition`** — the "interested person" standing
  definition, illustrative not exhaustive.
- **`tpr_right_to_counsel`** — mandatory counsel appointment for the
  parent and the child, and the conflict-of-interest bar.
- **`tpr_child_participation`** — the child's right to be heard at age
  10+ and the separate in-chambers testimony mechanism.

## Genuine findings

- **A significant correction to the agent's own initial assumption**:
  the task's own framing suggested §7800 itself might state something
  substantive. Fetching it directly revealed §7800 (and §7824, §7828)
  are blank/repealed section slots in the current code — confirmed by
  fetching the "missing" numbers directly rather than assuming
  continuity, and excluded from the clause set.
- **A disclosed structural distinction**: the agent explicitly
  distinguished this Family Code Part 4 interested-person action from
  the juvenile dependency system's parallel termination process under
  Welf. & Inst. Code §366.26, which involves a different petitioning
  party, procedural posture, and governing standards — noted as outside
  this document's scope rather than conflated with it.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's search call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not define "token efforts" numerically, does not
state the Welf. & Inst. Code §300 dependency-jurisdiction criteria
incorporated by the neglect/dependency ground, does not catalog every
qualification or restriction on expert witnesses under the
mental-disability ground, does not resolve the outer boundary of
"interested person" standing beyond the statute's illustrative examples,
does not define what makes a waiver of counsel "knowing and
intelligent" or state the applicable indigency standard, and does not
address the juvenile dependency system's parallel termination process.

## Method

Fetched Fam. Code §§ 7802, 7803, 7821, 7822, 7823, 7825, 7827, 7841,
7860, 7862, 7891, and 7892 from leginfo.legislature.ca.gov, each fetched
twice by the research agent with two distinct User-Agent strings,
confirmed byte-identical after normalization (raw HTML differed only in
JSF-framework auto-generated element IDs that change per server-side
request). CourtListener's daily rate limit was already exhausted on the
agent's test call; no case law was used, a disclosed and legitimate
choice. All 18 citation instances programmatically confirmed by the
research agent as exact, contiguous substrings, extracted via Python
`str.find`-based slicing directly from cleaned source text rather than
hand-retyped.

Independently re-verified during integration review via a
one-hundred-and-forty-fifth fetch (a new distinct curl User-Agent
string, "Groundtruth-145thVerify-TerminationParentalRights/1.0") of all
twelve sections — all 18 citation instances confirmed clean on direct
normalized-whitespace substring match, no extraction artifacts
encountered. The four statutory grounds, the mandatory-counsel
provisions, and the child-participation mechanisms were all
independently reconfirmed present in the freshly fetched text.

## Verification

- All twelve Family Code sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a one-hundred-
  and-forty-fifth independent fetch during integration review; all 18
  citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they are
  not independent sources of each other, while §7802/§7803 (separate
  sections) are correctly treated as independent; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none).
  Independently reconfirmed the two tangential existing "parental
  rights"/"custody" hits are unrelated to this document's Part 4
  coverage.
- Checked every citation's `case` field for emptiness — all 18
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`petitionerName`,
  `respondentName`, `childName`, `childDOB`, `countyOfFiling`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Termination of Parental Rights (Freedom from Parental
  Custody and Control) — Information Sheet
  (`freedom_from_parental_custody_and_control_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Family Law category. No new
  fields.
- Corpus: 3,833 → 3,844 clauses; 499 → 500 documents. Fourth and final
  processed item of wave 116.

## Wave 116 summary

Wave 116 followed the established 1×4 pattern, targeting Business
Formation, Real Estate, Confidentiality & IP, and Family Law — the four
categories tied lowest after wave 115's rotation. All four agents ran
extensive duplication-check pivots before landing on genuinely open
topics, continuing the saturation trend from recent waves: Certificate
of Revivor/Reinstatement (after ruling out RULLCA fiduciary defaults and
LLLP as too thin), Mortgage Foreclosure Consultants (after ruling out
right of first refusal and trustee's-sale mechanics as already
covered), DTSA Civil Seizure Remedy (filling a gap explicitly disclosed
in an existing clause), and Termination of Parental Rights (after ruling
out four other Family Law candidates as already covered). All four
documents were built with CourtListener's daily quota exhausted
throughout. Each surfaced a genuine correction through close
primary-source reading: a corrected identification of which section
actually holds the relief-from-voidability mechanism (Certificate of
Revivor), a corrected structural assumption about where the no-advance-
fee rule lives in the statute (Mortgage Foreclosure Consultants), a
richer-than-expected eight-finding/six-element structure requiring 8
distinct clauses instead of one omnibus clause (DTSA Civil Seizure
Remedy), and the discovery that three section numbers in the expected
range are blank/repealed slots, confirmed by direct fetch rather than
assumed continuity (Termination of Parental Rights). This wave also
crossed the 500-document milestone. Per the established alternation,
wave 117 should return to a 2×2 pattern.
