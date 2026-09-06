# Business Formation, new document: California State Trademark Registration (Model State Trademark Law) — Information Sheet

## Why this document

Fourth and final processed item of wave 132 (Business Formation slot,
1×4 pattern, closing the wave). The agent ruled out nonprofit voluntary
dissolution (Corp. Code §§ 6610/6614/6710/6716, 8610/8611/8615, 9680 —
confirmed already substantively covered across three existing
nonprofit-formation documents) and nearly every other Business
Formation facet by scanning the 69 existing documents in the category
before landing here. The chosen topic — California's own state-level
trademark and service mark registration system, the Model State
Trademark Law (Cal. Bus. & Prof. Code §§ 14200-14272), administered by
the California Secretary of State and separate from federal USPTO
registration — was confirmed genuinely open: the existing corpus's
`trademark_registration_info_sheet` document covers only the federal
system, under the Confidentiality & IP category, and no document
anywhere covered this parallel state-registration procedure.

A section-number-specific duplication check found two apparent hits
requiring inspection, both confirmed as either a false-positive
collision or a legitimate non-duplicative cross-reference: "14200"
matched `tod_creditor_medical_recovery`, traced directly to a quoted
citation of Welfare and Institutions Code § 14200 (Medi-Cal recovery),
an entirely different code section sharing only the bare number; and
"14259" matched three existing clauses (`trademarkcd_ca_common_law_rights`,
`tmassign_ca_state_law`, `tradedress_registration_optional`), each
already citing or cross-referencing this chapter's common-law-rights
preservation provision from a prior document. Because of this, the new
document's `castmreg_relation_to_federal_law` clause deliberately omits
restating § 14259 and instead cross-references the existing
`trademarkcd_ca_common_law_rights` clause by id in its own gap field —
confirmed, on inspection, to be exactly the disclosed, non-duplicative
pattern the agent reported rather than a defect.

## What this document covers

11 clauses: 2 drafting (declaration/scope, closing signature) and 9
authority clauses, citing Cal. Bus. & Prof. Code § 14200, § 14202(a),
(h), § 14205(f), § 14207(a)(3), (d), § 14209(f), (g), § 14215(a), (b),
§ 14217(a)-(b), § 14230(b), (c)(6), § 14272:

- **`castmreg_short_title_and_mark_definition`** — the chapter's short
  title and the statutory "trademark"/"service mark" definitions.
- **`castmreg_use_requirement`** — the statutory "use" definition
  underlying registration, including the in-state-use framing.
- **`castmreg_refusal_grounds`** — the six statutory refusal grounds,
  quoting the likelihood-of-confusion ground verbatim.
- **`castmreg_application_contents`** — required application contents,
  including the dual first-use-date requirement and the $10,000
  false-declaration penalty.
- **`castmreg_examination_priority_and_mandamus`** — the examination
  cycle, filing-order priority between concurrent applications, and
  the mandamus remedy for a final refusal.
- **`castmreg_certificate_contents_and_evidentiary_effect`** — what a
  certificate of registration shows and its evidentiary effect in a
  California court.
- **`castmreg_term_and_renewal`** — the five-year renewable term.
- **`castmreg_cancellation_grounds`** — statutory cancellation grounds,
  including the concurrent-federal-registration area carve-out.
- **`castmreg_relation_to_federal_law`** — the chapter's own declared
  legislative intent of consistency with the federal Lanham Act.

## Genuine findings

- **A disclosed constitutional flag, not a resolved holding**: the
  refusal-grounds clause's gap flags that § 14205(a)-(b)'s
  "immoral/deceptive/scandalous" and "disparaging" refusal grounds
  track federal Lanham Act language the U.S. Supreme Court held
  unconstitutional in *Matal v. Tam* (2017) and *Iancu v. Brunetti*
  (2019) — named as an open, unverified question (CourtListener
  quota-exhausted) rather than fabricated as a resolved citation.
- **A disclosed, deliberate non-duplication choice**: the
  relation-to-federal-law clause cross-references, rather than
  re-quotes, this project's existing common-law-rights clause citing
  the same chapter's § 14259 — confirmed correct and non-duplicative
  on inspection.
- **A disclosed statutory silence**: the term-and-renewal clause's gap
  notes the chapter's text does not appear to provide any grace period
  or reinstatement procedure for a registration that lapses without a
  timely renewal filing.
- **A disclosed geographic-scope limitation in the quoted text**: the
  cancellation-grounds clause's gap notes the concurrent-federal-
  registration proviso protects a registrant only for "that area of
  the state" covered by the federal registration — not statewide on
  its own quoted terms — and does not explain how "area" is determined.
- **A disclosed, deliberate choice not to cite unverified case law**:
  CourtListener's daily quota was exhausted on the agent's test call;
  every authority clause proceeds on statute text alone.

## Honest gap(s) disclosed

This document does not restate thirteen of Section 14202's fifteen
lettered definitions, does not determine whether any specific
described mark or use in fact meets the statutory "trademark"/"service
mark"/"use" definitions, does not verify current Secretary of State
administrative practice, fee schedule, or filing forms beyond the
2007/2008-enacted statutory text, does not resolve the constitutional
status of § 14205(a)-(b)'s refusal grounds, does not state any
mandamus-petition filing deadline, and does not restate the federal
Lanham Act's own evidentiary presumptions (15 U.S.C. § 1057(b)), which
this state-law certificate provision does not extend to state
registration.

## Method

Fetched Cal. Bus. & Prof. Code §§ 14200, 14202, 14205, 14207, 14209,
14215, 14217, 14230, 14259, 14270, and 14272 from
leginfo.legislature.ca.gov, each fetched twice by the research agent
with two distinct User-Agent strings via raw curl through the
pre-configured proxy (the WebFetch tool itself returned
`EGRESS_BLOCKED` for this domain), confirmed byte-identical in the
`single_law_section` content div. One transient connection reset
occurred on two of the twenty-two fetches, both resolved via
retry-with-backoff. CourtListener's daily quota was already exhausted
(HTTP 429) on the agent's test call; no case law was used or
fabricated. Every citation's quote field was programmatically confirmed
by the research agent as an exact, contiguous substring of the fetched
plain-text section content, with quotes deliberately chosen to stay
within single paragraphs and avoid leginfo's `<p>`-tag abutment
artifact (noted, not encountered as a defect, since this document
avoided it by design).

Independently re-verified during integration review via a
one-hundred-and-ninety-third fetch (a new distinct curl User-Agent
string, "Groundtruth-193rdVerify-CAStateTrademark/1.0") of all eleven
sections — all fetched cleanly on the first attempt with no retry
needed. All 15 citation instances in the delivered clauses (the
agent's own final report described "16," a minor reporting
discrepancy with no effect on content — the delivered `new_clauses.json`
in fact contains 15 citations across its 9 authority clauses, and all
15 were counted and verified) confirmed clean on direct
normalized-whitespace substring match, with no fallback needed. The
short-title and definitional provisions, the use requirement, the
refusal grounds, the application contents, the examination/priority/
mandamus procedure, the certificate's contents and evidentiary effect,
the five-year renewable term, the cancellation grounds, and the
federal-relationship provision were all independently reconfirmed
present in the freshly fetched text.

## Verification

- All eleven Business and Professions Code sections fetched twice
  independently by the research agent with distinct User-Agent
  strings, plus a one-hundred-and-ninety-third independent fetch during
  integration review; all 15 citation instances confirmed clean.
- Checked for `{{` leakage and ellipsis-stitched quotes in every
  clause's `title`/`gap` and every citation's `case`/`cite`/`quote`/
  `url` field — clean.
- Checked source-independence disclosure logic — clauses citing
  multiple subdivisions of the same section correctly disclose they
  are not independent sources of each other; correct as delivered.
- Checked for duplicate clause IDs against the full corpus (none), and
  confirmed the `castmreg_` prefix has zero collisions. Ran
  section-number-specific greps for §§ 14200, 14202, 14205, 14207,
  14209, 14215, 14217, 14230, 14259, 14270, 14272 across the full
  corpus — two apparent hits inspected and confirmed a false-positive
  Welfare and Institutions Code § 14200 collision and three legitimate,
  already-existing cross-references to § 14259's common-law-rights
  point (correctly not re-cited by the new clause, per its own gap
  disclosure); zero other hits.
- Checked every citation's `case` field for emptiness — all 15
  populated with proper citation identifier strings.
- One new field id confirmed genuinely necessary and non-duplicative:
  `firstUseInCaliforniaDate` — did not exist previously in the corpus
  under any name, needed because the state statute requires a distinct
  in-California first-use date alongside the existing `firstUseDate`
  field's single, federal-style date. Eight other fields
  (`applicantName`, `principalOfficeAddress`, `trademarkDescription`,
  `goodsServicesDescription`, `firstUseDate`, `authorizedSignerName`,
  `dateSigned`, `cityState`) reused from the existing corpus.
- Corpus-wide validation (dup clause ids, dup doc ids, missing
  clause-order references, `{{}}` leaks, empty-case-field check,
  placeholder-to-field resolution check) run across the full updated
  corpus — clean.

## Net changes

- New document: California State Trademark Registration (Model State
  Trademark Law) — Information Sheet
  (`california_state_trademark_registration_info_sheet`), 11 clauses
  (9 authority + 2 drafting), in the Business Formation category. One
  new field: `firstUseInCaliforniaDate`.
- Corpus: 4,321 → 4,332 clauses; 547 → 548 documents. Fourth and final
  processed item of wave 132.

## Wave 132 summary

Wave 132 used a 1×4 rotation pattern (one document each in
Confidentiality & IP, Real Estate, Ending employment, and Business
Formation), closing out this session's category-balance rotation for
these four categories:

1. **Semiconductor Chip Mask Work Protection — Information Sheet**
   (Confidentiality & IP) — 11 clauses, 17 U.S.C. §§ 901-914.
2. **Disposition of Personal Property Remaining on the Premises After
   Tenancy — Information Sheet** (Real Estate) — 10 clauses, Civ. Code
   §§ 1980-1991.
3. **Shared Work (Work Sharing) Unemployment Insurance Program —
   Information Sheet** (Ending employment) — 11 clauses, UIC §§ 1279.5,
   1279.7. Required resolving leginfo's multi-version disambiguation
   AJAX mechanism during independent re-verification.
4. **California State Trademark Registration (Model State Trademark
   Law) — Information Sheet** (Business Formation) — 11 clauses, Cal.
   Bus. & Prof. Code §§ 14200-14272.

Corpus totals across the wave: 4,289 → 4,332 clauses (+43); 544 → 548
documents (+4). No genuine duplication findings required excluding any
delivered clause this wave — every apparent grep hit across all four
documents was confirmed, on direct inspection, to be either a
false-positive cross-code collision or a legitimate, already-disclosed
non-duplicative cross-reference to existing corpus coverage.
