# Confidentiality & IP, new document: Semiconductor Chip Mask Work Protection — Information Sheet

## Why this document

First processed item of wave 132 (Confidentiality & IP slot, 1×4
pattern). The agent ruled out four candidates via specific
section-number/term greps before landing here: DTSA whistleblower
immunity (18 U.S.C. §1833(b)), the CPRA trade-secret exemption (Gov.
Code §7923.600/Civ. Code §3426.7(c)), general CUTSA definitions, and
the Architectural Works Copyright Protection Act (17 U.S.C. §120,
judged too likely to overlap existing copyright-subject-matter
coverage) were all confirmed already substantively covered or a
weaker fit. The chosen topic — the federal Semiconductor Chip
Protection Act of 1984 (17 U.S.C. §§901-914), a sui generis IP right
protecting semiconductor "mask works" separately from copyright,
patent, and trade secret law — was confirmed genuinely open: the only
prior corpus mention was a single incidental item inside an unrelated
Bankruptcy Code definitions-list clause (`ipbankr_ip_definition_scope`,
citing 11 U.S.C. §101(35A)'s six-category "intellectual property"
list), not substantive coverage of Chapter 9's own framework.

## What this document covers

11 clauses: 2 drafting (intro/declaration, signature) and 9 authority
clauses, citing 17 U.S.C. §901(a)(1), (a)(2), §902(b), (c), §903(a),
(b), §904(a), (b), (c), §905, §906(a), §908(a), §909(a), (b), §912(c):

- **`maskwork_definition`** — the "semiconductor chip product" and
  "mask work" statutory definitions.
- **`maskwork_protection_limits`** — the non-original/staple-design
  and idea/process exclusions.
- **`maskwork_ownership`** — ownership and transfer/licensing.
- **`maskwork_duration`** — the 10-year term running from registration
  or first commercial exploitation.
- **`maskwork_exclusive_rights`** — the three exclusive rights
  (reproduce, import/distribute, induce).
- **`maskwork_reverse_engineering`** — the teaching/analysis/evaluation
  reverse-engineering limitation.
- **`maskwork_registration_deadline`** — the 2-year registration
  deadline, after which protection terminates.
- **`maskwork_notice`** — the optional notice form and its evidentiary
  effect.
- **`maskwork_preemption`** — preemption of equivalent state-law
  protection.

## Genuine findings

- **A disclosed, deliberate distinction to prevent a plausible
  misreading**: the preemption clause's gap explicitly states that
  §912(c)'s preemption of equivalent state-law rights does not extend
  to California trade secret law, because trade secret protection
  (unpublished designs/processes) and mask work protection (a design
  already embodied in a distributed product) address different
  subject matter — a genuinely useful clarification given this
  corpus's extensive existing trade-secret coverage.
- **A disclosed, deliberate scope trade-off**: §907 (innocent-
  purchaser remedy limitation), §910 (civil remedies), and §914
  (international transitional provisions) were all read during
  research but deliberately omitted to keep the document to a focused
  9 authority clauses, an honest choice rather than an oversight.
- **A disclosed sourcing limitation consistent with existing corpus
  practice**: every clause's gap discloses that the Cornell LII text
  was not independently cross-checked against the official GPO U.S.
  Code database, explicitly noting this matches how an existing
  clause in this corpus already treats Cornell LII as a federal-statute
  source.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not address §901(a)'s remaining defined terms
("fixed," "owner," "innocent purchaser," "infringing semiconductor
chip product"), §902(a)'s nationality/treaty eligibility requirements,
§903(c)'s recordation procedure or §903(d)'s government-employee rule,
§906(b)'s first-sale-style limitation (paraphrased but not
independently quoted), §907's innocent-purchaser remedy limitation,
§908's remaining administrative-procedure subsections, §909's
prescribed affixation regulations, §910's infringement remedies, and
§912(a)'s copyright/patent non-affected-rights rule or §912(d)'s
pre-1983 saving clause.

## Method

Fetched 17 U.S.C. §§901-906, 908, 909, and 912 from Cornell Law
School's Legal Information Institute, each fetched twice by the
research agent with two distinct User-Agent strings, confirmed
byte-identical. CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. All 15 citation instances programmatically confirmed by
the research agent as exact, contiguous substrings, after the agent
caught and fixed its own extraction-artifact bug (spurious spaces
around Cornell's glossary-linked terms) before finalizing.

Independently re-verified during integration review via a
one-hundred-and-ninetieth fetch (a new distinct curl User-Agent
string, "Groundtruth-190thVerify-MaskWork/1.0") of all nine sections
— all 15 citation instances confirmed clean on direct normalized-
whitespace substring match, with no fallback needed. Both statutory
definitions, the non-original/staple-design and idea/process
exclusions, ownership and transfer, the 10-year term, the three
exclusive rights, the reverse-engineering limitation, the 2-year
registration deadline, the notice provisions, and the preemption
clause were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All nine Cornell LII sections fetched twice independently by the
  research agent with distinct User-Agent strings, plus a
  one-hundred-and-ninetieth independent fetch during integration
  review; all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `maskwork_` prefix has zero collisions. Ran
  section-number-specific and term-based greps ("17 U.S.C. § 901"
  through "§ 912," "mask work," "Semiconductor Chip Protection")
  across the full corpus; the sole hit was the previously-identified
  single-item Bankruptcy Code definitions-list mention, confirmed by
  direct reading as incidental, not substantive coverage.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- No new fields required — all seven fields (`workDescription`,
  `ownerName`, `firstUseDate`, `preparerName`, `companyName`,
  `cityState`, `dateSigned`) reused from the existing corpus, several
  relabeled for this document's context consistent with the corpus's
  established pattern of reusing field ids across different labels.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: Semiconductor Chip Mask Work Protection — Information
  Sheet (`semiconductor_mask_work_protection_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Confidentiality & IP category. No
  new fields.
- Corpus: 4,289 → 4,300 clauses; 544 → 545 documents. First processed
  item of wave 132.
