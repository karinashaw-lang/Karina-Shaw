# Confidentiality & IP, new document: Inevitable Disclosure Doctrine in California — Information Sheet

## Wave

Wave 146 (Confidentiality & IP slot). One of four parallel, isolated
per-category additions in this wave (Confidentiality & IP, Ending
employment, Business Formation, Real Estate), each running in its own
git worktree.

## Why this document

Scoped a Confidentiality & IP topic not already covered by the
category's existing ~76 documents. Printed the full list of existing
Confidentiality & IP document titles/ids from `data/documents.json` and
grepped `data/documents.json` / `data/clauses.json` for candidate terms
before settling on a topic:

- California's own state-level trademark registration statute (Model
  State Trademark Law) turned out to already exist in the corpus —
  confirmed via grep, but filed under the **Business Formation**
  category (`california_state_trademark_registration_info_sheet`), not
  Confidentiality & IP, so it was not available as this wave's topic.
- Right of publicity (Civ. Code §§ 3344, 3344.1), Labor Code § 2870
  employee-invention/shop-right limits, copyright work-for-hire,
  trademark dilution, and reverse-engineering's exclusion from
  "improper means" were all confirmed already covered by existing
  documents (`right_of_publicity_info_sheet`,
  `employee_invention_statutory_limits_shop_right_info_sheet`,
  `work_made_for_hire_agreement`, within
  `trademark_cease_and_desist`'s dilution clause, and within a DTSA
  misappropriation clause, respectively).
- Grepped for "inevitable disclosure" and "Whyte" across both data
  files: zero hits. Confirmed non-duplicative.

The inevitable disclosure doctrine — whether a former employee's new,
competing job can itself be enjoined based on an inference that the
employee will inevitably use the former employer's trade secrets,
without proof of actual or threatened misappropriation — is a
genuinely distinct, well-scoped, case-law-driven topic with real,
checkable primary authority (two published California Courts of
Appeal decisions plus two backbone statutes), and is analytically
different from this project's existing
`trade_secret_injunctive_relief_standards_info_sheet` (which describes
the general statutory standards for injunctive relief, not this
specific doctrine) and its existing noncompete-focused documents
(`noncompete`, `noncompete_void_notification_info_sheet`,
`employee_nonsolicit`, `sale_of_business_dissolution_noncompete_exceptions_info_sheet`),
none of which address whether a court can enjoin employment itself
based on an inevitability inference alone.

## What this document covers

8 clauses (id prefix `inevdisc_`): 2 drafting (purpose, signature) and
6 authority clauses, citing Cal. Civ. Code § 3426.2(a) (CUTSA), Cal.
Bus. & Prof. Code § 16600(a), Whyte v. Schlage Lock Co. (2002) 101
Cal.App.4th 1443, and Central Valley General Hospital v. Smith (2008)
162 Cal.App.4th 501:

- **`inevdisc_purpose`** — scope/purpose, and disclosure distinguishing
  this document from the corpus's existing trade-secret-injunction and
  noncompete/nonsolicitation documents.
- **`inevdisc_doctrine_definition_and_no_precedent`** — the doctrine's
  own definition, quoted from Whyte's opening summary paragraph, and
  its unsettled status in California immediately before that decision.
- **`inevdisc_ca_threatened_misappropriation_statute`** — the CUTSA
  actual-or-threatened-misappropriation statutory standard (§ 3426.2(a))
  that the inevitable disclosure doctrine was argued as an *alternative*
  to, not an interpretation of.
- **`inevdisc_whyte_rejection_holding`** — Whyte's core holding
  rejecting the doctrine as a matter of California law and policy.
- **`inevdisc_bpc16600_and_policy_rationale`** — the statutory
  rationale tying the rejection to Bus. & Prof. Code § 16600's general
  voiding of restraints on lawful employment.
- **`inevdisc_scope_limits`** — the two things Whyte's rejection does
  *not* change: ordinary noncompete/nonsolicitation law where a
  covenant already exists, and the continued availability of an
  injunction on ordinary proof of actual or threatened misappropriation.
- **`inevdisc_central_valley_threatened_misappropriation_survives`** —
  Central Valley General Hospital v. Smith's clarification that
  rejecting the inevitable disclosure doctrine is not the same as
  rejecting threatened misappropriation as an independent basis for an
  injunction.

## Genuine findings

- **The central finding**: California does not recognize the
  inevitable disclosure doctrine — Whyte v. Schlage Lock Co. rejected
  it outright, reasoning that it would create a de facto,
  after-the-fact covenant not to compete in tension with Business and
  Professions Code § 16600.
- **A correctly scoped follow-on finding**: that rejection is narrower
  than it might first appear. Whyte itself limited its holding — it
  does not affect the enforceability of an actual noncompete/
  nonsolicitation covenant already in an agreement (measured by
  ordinary noncompete law, not this doctrine), and it does not bar an
  injunction based on ordinary proof of actual or threatened
  misappropriation. Central Valley General Hospital v. Smith (2008)
  later confirmed this distinction directly, holding that rejecting
  inevitable disclosure is not the same as rejecting threatened
  misappropriation as a basis for an injunction.
- **An honest procedural-posture disclosure**: Central Valley General
  Hospital v. Smith's own injunction under review was in fact reversed
  and remanded — but for reasons unrelated to this legal point (referee
  errors on anticipatory breach/repudiation), not because the
  threatened-misappropriation holding was wrong. The
  `inevdisc_central_valley_threatened_misappropriation_survives` clause's
  `gap` field states this explicitly so the quoted holding is not
  mistaken for an affirmance of that specific injunction. That case
  also did not itself involve an employee-mobility fact pattern (it
  arose from a hospital acquisition/due-diligence dispute) — disclosed
  in the same clause.
- **A quote-fidelity defect caught and worked around, not silently
  fixed**: Whyte's opinion text (as retrieved via CourtListener) reads
  "‘creates a de facto covenant not to compete’ and ‘run**s**[s] counter
  to the strong public policy...’" — the bracketed word renders as
  "runs[s]" rather than the grammatically expected "run[s]," an
  apparent extra-letter transcription artifact in the retrieved text
  that this document's preparer could not independently confirm one
  way or the other against a second, independent copy of the opinion.
  Rather than quote a string whose fidelity to the original opinion
  could not be confirmed, the `inevdisc_bpc16600_and_policy_rationale`
  clause quotes only the clean, unambiguous first half of that
  sentence ("creates a de facto covenant not to compete") and discloses
  the omission and the reason for it in its `gap` field.

## Honest gap(s) disclosed

- This document's research was limited to the two Court of Appeal
  decisions it cites; it did not exhaustively search for every
  published or unpublished California decision touching the doctrine,
  and did not find (but did not exhaustively search for) any
  California Supreme Court decision addressing it.
- This document's characterization of PepsiCo, Inc. v. Redmond and the
  two federal district court decisions Whyte itself surveyed
  (Globespan v. O'Neill; Bayer Corp. v. Roche Molecular Systems) is
  drawn entirely from how the Whyte opinion describes them; none of
  those three decisions was independently retrieved, and no quotation
  from any of them appears in this document.
- The "runs[s] counter" phrase (see above) is not quoted anywhere in
  this document.
- The CourtListener citation URLs for both cases use CourtListener's
  standard case-name slug convention but were not independently
  re-confirmed by a live fetch: this session's shared CourtListener API
  rate limit (125 requests/day) was reached after both opinions' full
  text had already been retrieved and every quote verified against it,
  and direct web access to courtlistener.com to check the link is
  blocked in this environment. The opinion id and cluster id for each
  case (2260458 for Whyte; 2291194 for Central Valley General Hospital)
  were confirmed via the successful full-text retrieval itself (id
  equals cluster_id in both cases — no mismatch). Every clause citing
  one of these two cases discloses this specific limitation in its own
  `gap` field.
- This document does not address the federal Defend Trade Secrets Act's
  own, separate employment-mobility limits on injunctive relief (18
  U.S.C. § 1836(b)(3)(A)(i)(I)) — that is addressed by this project's
  existing Trade Secret Injunctive Relief Standards Information Sheet
  document instead, and is not restated here.

## Method

**Case law** — Located via the CourtListener MCP `search` tool (type
"o"), then retrieved in full via `get_endpoint_item` (endpoint
"opinions", fields `["id","cluster_id","html_with_citations","plain_text"]`)
for both Whyte v. Schlage Lock Co. (opinion id 2260458, cluster id
2260458 — no mismatch) and Central Valley General Hospital v. Smith
(opinion id 2291194, cluster id 2291194 — no mismatch). `plain_text`
was empty for both opinions; all text was extracted from
`html_with_citations` (each opinion's html was saved to a local file
for reuse). Each of the 8 case-law citation quotes in this document was
confirmed programmatically as an exact, contiguous substring of the
retrieved `html_with_citations` text (script run against the final,
merged `data/clauses.json`, not just a draft copy) — see the Honest
gap(s) section above for the one place a quote was deliberately
shortened rather than risk a possible transcription defect.

**Statutes** — Cal. Civ. Code § 3426.2 and Cal. Bus. & Prof. Code §
16600 each fetched directly from `leginfo.legislature.ca.gov`, twice
independently, using two distinct `curl` User-Agent strings (a Windows
Chrome UA and a macOS Safari UA). Both statutory sections' retrieved
text was byte-identical between the two fetches for each section. Both
statutory quotes confirmed programmatically as exact substrings of the
fetched HTML.

## Verification

- Cal. Civ. Code § 3426.2 and Cal. Bus. & Prof. Code § 16600 each
  fetched twice independently with distinct User-Agent strings; both
  pairs of fetches byte-identical; both statutory quotes confirmed
  clean.
- Whyte v. Schlage Lock Co. and Central Valley General Hospital v.
  Smith each retrieved in full via the CourtListener MCP tool, with an
  explicit opinion-id/cluster-id match check for each (no mismatch in
  either case); all 8 case-law citation quotes across the 6 authority
  clauses programmatically confirmed as exact, contiguous substrings
  of the retrieved opinion text — re-run against the final merged
  `data/clauses.json` after gap-field edits, not just the draft.
- Checked for `{{` leakage: every `{{fieldId}}` placeholder in this
  document's clause bodies resolves to a field actually declared on
  the document (`preparerName`, `companyName`, `tradeSecretDescription`,
  `employeeName`, `newEmployerName`, `dateSigned`, `cityState`).
- Checked for duplicate clause IDs and duplicate document IDs against
  the full corpus (8,530-clause / 601-document corpus checked
  programmatically after merge): none.
- Checked every new clause against the exact schema read from
  `data/clauses.json` first: authority clauses have exactly
  `{id,title,kind,status,checkedDate,body,gap,citations}` with each
  citation exactly `{case,cite,url,quote}`; drafting clauses have
  exactly `{id,title,kind,body}`. Confirmed programmatically — no extra
  or missing keys on any of the 8 new clauses.
- Checked the new document's `clauseOrder` — all 8 ids resolve to
  clauses that exist in `data/clauses.json`; checked programmatically
  across all 601 documents in the corpus (not just this one), with
  zero broken references corpus-wide.
- Confirmed reused statutory quotes (Civ. Code § 3426.2(a); Bus. &
  Prof. Code § 16600(a)) are disclosed in each citing clause's `gap`
  field as text already quoted elsewhere in the corpus (in
  `trade_secret_injunctive_relief_standards_info_sheet` and in
  `nc_enforceability` / `salenoncompete_general_ban_context` /
  `nopoach_bpc16600_general_rule`, respectively), consistent with this
  corpus's established citation-reuse disclosure convention.
- Both `data/clauses.json` and `data/documents.json` re-parsed as JSON
  after every edit (including the post-merge gap-field edits) to
  confirm no corruption.

## Net changes

- New document: Inevitable Disclosure Doctrine in California —
  Information Sheet (`inevitable_disclosure_doctrine_info_sheet`), 8
  clauses (6 authority + 2 drafting), in the Confidentiality & IP
  category. 7 fields, all reused from existing corpus field-id
  conventions (`preparerName`, `companyName`, `tradeSecretDescription`,
  `employeeName`, `newEmployerName`, `dateSigned`, `cityState`).
- Corpus: 4,845 → 4,853 clauses; 600 → 601 documents. Confidentiality &
  IP category: 76 → 77 documents (all seven other categories unchanged
  at 76 apiece, consistent with this being one isolated slot of wave
  146).
