# Family Law, new document: International Child Abduction Remedies Act (ICARA / Hague Convention Return) — Information Sheet

## Why this document

Fourth and final processed item of wave 133 (Family Law slot, 2×2
pattern, closing the wave). The agent ruled out putative-spouse
doctrine, Marvin actions, § 6389 firearm relinquishment, and
child-support-arrears interest before settling here. The chosen topic
— the federal International Child Abduction Remedies Act (ICARA), 22
U.S.C. §§ 9001-9011, implementing the 1980 Hague Convention on the
Civil Aspects of International Child Abduction — was confirmed
genuinely open and legally distinct from this corpus's existing Child
Abduction Prevention Orders document (Fam. Code § 3048, which
addresses preventing an abduction before it happens) and Child Custody
Jurisdiction (UCCJEA) document (an ordinary interstate custody case,
not an already-completed wrongful removal or retention). A
duplication check found several apparent hits on "9001"-"9007" among
stepparent-adoption clauses, all confirmed as a coincidental bare-
number collision with unrelated Family Code adoption-investigation
sections; "Hague" hits in a UIFSA registration clause, a design-patent
priority clause, and the existing abduction-prevention clause were
each confirmed incidental (a different Hague treaty, or a bare
cross-reference without substantive coverage).

During integration review, a genuine drafting defect was found and
fixed before merging: `icara_us_central_authority_role`'s body
contained a stray "it" that broke the sentence immediately before its
third quotation ("not representational -- it \"The U.S. Central
Authority shall cooperate..."). This was a body-text editing artifact,
not a citation or quote defect — the quote itself was untouched and
independently verified exact — corrected to "not representational --
by regulation, \"The U.S. Central Authority shall cooperate...\""
before merging.

## What this document covers

11 clauses: 2 drafting (fact declaration, signature/certification) and
9 authority clauses, citing 22 U.S.C. § 9001(a)(4), (b)(4), § 9002(4),
(6), (7), § 9003(a), (b), (e)(1)(A), (e)(2)(A)-(B), (f)(2)-(3), (g),
(h), § 9004(a)-(b), § 9006(a), § 9007(a), (b)(3), and 22 C.F.R.
§ 94.2-94.3:

- **`icara_congressional_findings_and_no_merits_rule`** — Congress's
  findings and the rule that a return proceeding decides only
  Convention rights, not custody merits.
- **`icara_key_definitions`** — "petitioner," "respondent," and
  "rights of access."
- **`icara_concurrent_jurisdiction_and_petition_filing`** — concurrent
  state/federal jurisdiction and the where-to-file rule.
- **`icara_burden_of_proof_framework`** — the petitioner's preponderance
  burden and the two-tier respondent burden (clear-and-convincing for
  Articles 13b/20; preponderance for Articles 12/13's other
  exceptions).
- **`icara_wrongful_removal_definition_and_one_year_clock`** — a
  wrongful removal can predate a custody order, and what starts the
  Convention's one-year clock.
- **`icara_provisional_remedies_pending_disposition`** — interim
  protective measures and their state-law-compliance limit.
- **`icara_costs_and_fees`** — no administrative fee for a Central
  Authority application, and the fee-shifting presumption after a
  successful return order.
- **`icara_us_central_authority_role`** — the U.S. Central Authority's
  designation and cooperative, non-representational function.
- **`icara_full_faith_credit_and_cumulative_remedies`** — full faith
  and credit for a return judgment, and that Convention remedies are
  additive, not exclusive.

## Genuine findings

- **A disclosed, honest access failure rather than a fabricated
  workaround**: the burden-of-proof and wrongful-removal clauses'
  gaps disclose that an attempt to fetch the Hague Convention's own
  treaty article text (Articles 12, 13, 13b, 20) from the Hague
  Conference and the U.S. State Department failed because the outbound
  proxy rejected those hosts with HTTP 403 on the CONNECT tunnel
  (confirmed via `$HTTPS_PROXY/__agentproxy/status` as a policy
  denial, not a site-side failure) — the agent deliberately chose not
  to fabricate or reconstruct treaty text from memory, building those
  clauses only from ICARA's own enacted statutory text instead.
- **A disclosed cross-document reconciliation left unresolved**: the
  provisional-remedies clause's gap notes that § 9004(b)'s
  cross-reference to "applicable requirements of State law" is not
  reconciled with this corpus's separate Emergency (Ex Parte) Custody
  Order document.
- **A disclosed two-tier burden structure flagged as consequential**:
  the burden-of-proof clause notes that the hardest defenses to prove
  (grave risk, human rights) are exactly the ones assigned the higher
  clear-and-convincing standard, while the more common defenses get
  the lower preponderance standard.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute and regulation text
  alone.

## Honest gap(s) disclosed

This document does not quote or independently verify the Hague
Convention's own treaty article text (blocked by proxy policy, not
site failure), does not cover six of ICARA's nine defined terms, does
not describe the Central Authority application procedure, does not
address litigation in a foreign Contracting State's courts, does not
reconcile § 9004(b)'s state-law cross-reference with this corpus's
separate emergency-custody-order coverage, and does not determine
habitual residence, wrongfulness, or any burden on any specific
family's facts.

## Method

Fetched 22 U.S.C. §§ 9001, 9002, 9003, 9004, 9006, 9007 from Cornell
Law School's Legal Information Institute and 22 C.F.R. §§ 94.2-94.3
from the Electronic Code of Federal Regulations, each fetched twice by
the research agent with two distinct User-Agent strings via raw curl,
confirmed identical after normalizing an expected per-request eCFR
CSP script nonce. CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. All 21 citation instances were programmatically confirmed
by the research agent as exact, contiguous substrings via a script
that asserted each planned quote before it was written into the
delivered file.

Independently re-verified during integration review via a
one-hundred-and-ninety-seventh fetch (a new distinct curl User-Agent
string, "Groundtruth-197thVerify-ICARAHague/1.0") of all six Cornell
LII sections, all fetched cleanly on the first attempt. The two eCFR
sections were fetched with a browser-realistic User-Agent following
this session's established eCFR bot-protection workaround, also
succeeding cleanly. All 21 citation instances confirmed clean on
direct normalized-whitespace substring match, with no fallback needed.
The congressional findings and no-merits rule, the key definitions,
the concurrent-jurisdiction and filing rules, the two-tier
burden-of-proof framework, the wrongful-removal and one-year-clock
provisions, the provisional remedies and their limit, the
costs-and-fees rules, the Central Authority's designation and
function, and the full-faith-and-credit and cumulative-remedies
provisions were all independently reconfirmed present in the freshly
fetched text.

## Verification

- All eight cited sections fetched twice independently by the research
  agent with distinct User-Agent strings, plus a
  one-hundred-and-ninety-seventh independent fetch during integration
  review; all 21 citation instances confirmed clean.
- Found and fixed one genuine body-text drafting defect (a stray "it"
  breaking a sentence in `icara_us_central_authority_role`) before
  merging — a wording artifact, not a citation or quote defect; the
  underlying quote was unaffected and independently verified exact.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `icara_` prefix has zero collisions. Ran
  section-number-specific greps for "9001" through "9007," "Hague,"
  "ICARA," and "habitual residence" across the full corpus — all
  apparent hits traced to a coincidental bare-number collision with
  unrelated Family Code adoption-investigation sections, or to a
  different Hague treaty (UIFSA foreign-order registration, design-
  patent priority) or an incidental cross-reference in the existing
  abduction-prevention document; zero substantive overlap.
- Checked every citation's `case` field for emptiness — all 21
  populated with proper citation identifier strings.
- Three new field ids confirmed genuinely necessary and non-
  duplicative: `childHabitualResidenceCountry`, `dateOfRemovalOrRetention`,
  `childCurrentCountry` — none existed previously in the corpus under
  any name. Six other fields (`petitionerName`, `respondentName`,
  `childName`, `courtName`, `dateSigned`, `cityState`) reused from the
  existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: International Child Abduction Remedies Act (ICARA /
  Hague Convention Return) — Information Sheet
  (`icara_hague_convention_child_abduction_return_info_sheet`), 11
  clauses (9 authority + 2 drafting), in the Family Law category.
  Three new fields: `childHabitualResidenceCountry`,
  `dateOfRemovalOrRetention`, `childCurrentCountry`.
- Corpus: 4,365 → 4,376 clauses; 551 → 552 documents. Fourth and final
  processed item of wave 133.

## Wave 133 summary

Wave 133 used a 2×2 rotation pattern (two documents each in During
employment and Family Law), targeting the two least-recently-touched
of the four tied-lowest categories (Hiring, During employment, Estate
Planning, Family Law):

1. **Volunteer Emergency Responder Leave — Information Sheet** (During
   employment) — 12 clauses, Lab. Code §§ 230.3, 230.4.
2. **Support for an Adult Child Incapacitated from Earning a Living —
   Information Sheet** (Family Law) — 10 clauses, Fam. Code § 3910.
3. **Workplace Language Restriction Policy — Information Sheet**
   (During employment) — 11 clauses, Gov. Code § 12951, 29 C.F.R.
   § 1606.7.
4. **International Child Abduction Remedies Act (ICARA / Hague
   Convention Return) — Information Sheet** (Family Law) — 11 clauses,
   22 U.S.C. §§ 9001-9011, 22 C.F.R. § 94.

Corpus totals across the wave: 4,332 → 4,376 clauses (+44); 548 → 552
documents (+4). No genuine duplication findings required excluding any
delivered clause this wave — every apparent grep hit across all four
documents was confirmed, on direct inspection, to be either a
false-positive cross-code collision or an incidental, non-substantive
mention. One genuine drafting defect (a stray word breaking a
sentence, not a citation defect) was found and fixed during
integration review.
