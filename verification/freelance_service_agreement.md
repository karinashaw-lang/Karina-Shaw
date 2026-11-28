# Hiring, new document: Freelance Service Agreement

## Why this document

The corpus already has `freelance_worker_protection_act_agreement` (8
clauses: `fwpa_purpose`, `fwpa_coverage_definitions`,
`fwpa_written_contract_required`, `fwpa_contract_contents`,
`fwpa_timely_payment`, `fwpa_antiretaliation`,
`fwpa_enforcement_remedies`, `fwpa_ack`), which is a compliance-focused
document built entirely around California's Freelance Worker
Protection Act (Business & Professions Code § 18100 et seq.). It does
not cover scope of work/deliverables beyond a one-line description,
a negotiated payment schedule beyond the statute's own timing floor,
work-product/IP ownership, term/termination, or confidentiality — the
terms an actual freelance services contract needs beyond what the
statute itself requires. The corpus also already has
`independent_contractor` (4 clauses: `ic_scope`, `ic_payment`,
`ic_classification`, `ic_ack`), a short generic contractor agreement
whose own misclassification clause (`ic_classification`) is scoped to
*federal* common-law agency factors (*CCNV v. Reid*, *Nationwide
Mutual v. Darden*) and explicitly discloses that it does not resolve
any state-specific wage-and-hour test. Neither existing document
states California's own statutory ABC test (Labor Code § 2775) or the
point that a contract's own "independent contractor" label does not
control that test.

This document fills that gap: a fuller freelance/independent-contractor
service agreement that reuses the FWPA document's own compliance
clauses verbatim (via `clauseOrder`, not by copying their text), adds
drafting clauses for scope, payment schedule, IP ownership, term/
termination, and confidentiality, and adds two new authority clauses
disclosing California's ABC test and its exceptions/fallback test.

## What this document covers

15 `clauseOrder` entries: 8 reused from
`freelance_worker_protection_act_agreement` (unmodified — see below)
plus 7 new clauses (2 authority + 5 drafting) added to `data/clauses.json`
in this change:

### Reused, not re-researched

`fwpa_purpose`, `fwpa_coverage_definitions`,
`fwpa_written_contract_required`, `fwpa_contract_contents`,
`fwpa_timely_payment`, `fwpa_antiretaliation`,
`fwpa_enforcement_remedies`, `fwpa_ack` — all eight referenced by id in
this document's `clauseOrder`, in their original relative order,
exactly as they already exist in the corpus. None of their text,
citations, or gap fields were edited. Their `{{field}}` placeholders
(`hiringPartyName`, `contractorName`, `workDescription`,
`contractPrice`, `dateSigned`) were confirmed from the existing
document and are redeclared in this document's own `fields` array so
they render correctly; see the parent document's own verification note
(`verification/freelance-worker-protection-act-agreement.md`) for how
those eight clauses and their 14 citations to Bus. & Prof. Code
§§ 18101–18107 and Labor Code § 2778(b)(2) were originally verified.
That verification was not redone here.

### New clauses (this change)

Drafting (5):

- **`fsa_scope_of_work`** — manner-of-performance and a written-
  change-order requirement for the scope described in `fwpa_purpose`.
- **`fsa_payment_schedule`** — the parties' own negotiated payment
  schedule (new `paymentSchedule` field) on top of the FWPA's
  statutory payment-timing floor, plus the standard non-withholding/
  self-reporting tax statement.
- **`fsa_work_product_ownership`** — work product created under the
  agreement transfers on payment in full; pre-existing tools,
  materials, and know-how do not transfer.
- **`fsa_term_termination`** — start date, termination for any reason
  on notice (new `terminationNoticeDays` field), and payment for
  pre-termination work.
- **`fsa_confidentiality`** — a one-directional confidentiality
  obligation (contractor toward hiring party's information) with the
  standard public/prior-knowledge/independent-development carve-outs,
  mirroring `nda_obligations`/`nda_carveouts`'s structure but scoped to
  this engagement.

Authority (2):

- **`fsa_abc_test_classification`** — states Labor Code § 2775's
  three-part "ABC" test, that the hiring entity bears the burden of
  establishing all three elements, that a worker is presumed an
  employee until that burden is met, and that this holds regardless of
  the contract's own label for the relationship. Two independent
  citations: the statute's own operative sentence and *Dynamex
  Operations West, Inc. v. Superior Court* (2018) 4 Cal.5th 903, the
  California Supreme Court decision § 2775 codifies.
- **`fsa_abc_test_exceptions_scope`** — discloses that the ABC test is
  not universal: § 2775(b)(2) preserves other statutory exceptions to
  "employee"/"independent contractor" status, and § 2775(b)(3) directs
  that the *Borello* multi-factor test governs wherever a court finds
  the ABC test cannot be applied for a reason other than an express
  exception. Two citations, both subdivisions of § 2775 (disclosed in
  the gap as not independent of each other).

## The genuine open question researched

**Does a written contract satisfying the FWPA's own contract-content
requirements do anything to resolve misclassification risk under
California's ABC test?** Verified against the actual statutory text:
no. Labor Code § 2775(b)(1) makes a worker an employee *by default*
"unless the hiring entity demonstrates" all three ABC conditions — the
statute itself frames classification as something the hiring entity
must affirmatively establish from the facts, not something the parties
establish by what they call each other in a contract. *Dynamex*, the
decision § 2775 codifies, independently confirms the same framing: it
"plac[es] the burden on the hiring entity to establish that the worker
is an independent contractor," with the hiring entity required to
"establish each of the three factors embodied in the ABC test." Nothing
in either source makes the contract's own label, or the fact that a
contract satisfies the FWPA's separate written-contract requirements,
relevant to that showing. This document discloses that point factually
(`fsa_abc_test_classification`'s body) rather than advising the user
on how to structure the relationship to pass the test — consistent
with the corpus's "inform, never advise" rule, and with the existing
`ic_classification` clause's identical approach to the federal
common-law test.

A second, related finding worth disclosing: the ABC test is not the
whole picture. § 2775(b)(2)-(3) preserve other express statutory
exceptions and, outside those, fall back to the pre-2019 *Borello*
multi-factor test whenever a court finds the ABC test cannot be
applied to a given context. `fsa_abc_test_exceptions_scope` discloses
this without resolving which test would apply to any specific
engagement — that determination is fact- and occupation-specific and
not made here.

## Sources actually reachable vs. fallback

- **`leginfo.legislature.ca.gov` (Labor Code § 2775): blocked.** A
  direct `curl` fetch (and a `WebFetch` attempt) both returned HTTP 403
  with a Cloudflare "challenge" response (`cf-mitigated: challenge`),
  confirmed via verbose output to be the site's own bot-mitigation, not
  the sandbox's egress proxy (no `[agent-proxy]` refusal lines; the
  TLS handshake and HTTP response came from Cloudflare at
  `legislature.ca.gov` itself). `law.justia.com` and
  `codes.findlaw.com` were also tried and hit the identical Cloudflare
  challenge.
- **`law.onecle.com` (the task's suggested fallback): reachable, but
  stale and does not contain this section.** The site resolves and
  serves pages (confirmed HTTP 200 on its Labor Code index and
  Division 3 chapter pages), but its own index page is marked "Last
  modified: October 22, 2018" and its Article 1 page (the article that
  would hold § 2775 today) only lists sections through § 2754 — this
  mirror predates AB 5 (effective January 1, 2020) and its 2020
  renumbering into §§ 2775–2787, so it cannot serve this statute at
  all, not just an outdated version of it.
- **`california.public.law` (used instead, disclosed as `mirror`):
  reachable** — fetched `https://california.public.law/codes/ca_lab_code_section_2775`
  directly (HTTP 200), confirmed to carry current text (page title
  "California Labor Code section 2775 (2025)"; its own footer cites
  back to `leginfo.legislature.ca.gov` and states "accessed Nov. 23,
  2026"). This mirror is already an established source in this corpus
  (40 existing citations across Probate Code clauses use it, all
  tagged `sourceClass: "mirror"`), so this document follows the same,
  already-reviewed convention rather than introducing a new one.
- **`courtlistener.com` (*Dynamex*, 4 Cal.5th 903): reached via the
  CourtListener research tool**, not raw `curl` (a direct `curl`/
  `WebFetch` to the opinion's public page returned an empty HTTP 202,
  evidently an async-challenge response); the CourtListener API/tool
  path used throughout this corpus's existing case-law citations (see
  `ic_classification`'s *Reid*/*Darden* citations) worked normally and
  returned the opinion's full HTML-with-citations text.

Every `citations[].quote` in the two new authority clauses was checked
programmatically as an exact, contiguous substring of the actually
fetched page content before being written into `data/clauses.json`
(the statute quotes against the saved `california.public.law` HTML
fetch; the *Dynamex* quote against the CourtListener tool's returned
opinion text) — not reconstructed from memory.

## Honest gap(s) disclosed

- `fsa_abc_test_classification`'s gap: does not resolve whether this
  agreement's own facts would in fact satisfy each ABC-test element;
  does not address the statutory exceptions or the *Borello* fallback
  (covered separately); does not address a non-California test.
- `fsa_abc_test_exceptions_scope`'s gap: its two citations are
  subdivisions of the same statutory section, not independent of each
  other; does not identify which specific exception in Labor Code
  §§ 2776–2787 might apply to a given engagement, and does not
  independently verify the text of those sections or of *Borello*
  itself beyond § 2775's own cross-reference to it.
- This document does not restate or re-verify any of the eight reused
  `fwpa_*` clauses' own citations or gaps — those stand as previously
  verified in the parent document.

## New fields

Five fields (`hiringPartyName`, `contractorName`, `workDescription`,
`contractPrice`, `dateSigned`) are reused from the existing corpus with
the same ids the `fwpa_*` clauses already substitute, so those clauses
render correctly without being edited; `contractorName`, `workDescription`,
and `dateSigned` carry the same `sharedFieldId` links the parent
document already uses. Two new fields were added for the new drafting
clauses: `paymentSchedule` (longtext — the parties' own payment
schedule, beyond the FWPA's statutory timing floor) and
`terminationNoticeDays` (integer — the notice period either party must
give to end the agreement). Both are substituted into a clause body in
this document's own `clauseOrder` (`fsa_payment_schedule` and
`fsa_term_termination` respectively), so neither is a dead field.

## Verification

- `python3 tools/validate_corpus.py` passes against the full corpus
  with this document and its 7 new clauses added (742 documents / 6628
  clauses / 11,692 citations after this change) — schema key order,
  duplicate id, dangling/orphan clause reference, empty-gap,
  empty-citation, advisory-phrase (drafting-body lint), contradiction-
  pair, field-declaration/field-use, and shared-field-library checks
  all clean.
- Both new `quote` fields sourced from `california.public.law` and the
  one sourced from `courtlistener.com` were each independently
  confirmed as an exact substring of the fetched text (see above),
  programmatically, not by eye.
- `node tests/golden/golden.js --update` generated a new fixture for
  `freelance_service_agreement` (the only fixture created or changed);
  `node tests/golden/golden.js` (check mode, against a fresh
  `python3 -m http.server 8933`) reports 742/742 documents matching
  their golden fixture, including this one.
- Confirmed no duplicate clause ids or document id/title against the
  full corpus before appending.
- Confirmed the document renders with no unresolved `{{...}}`
  placeholders and no leaked raw field names in the golden fixture's
  `expectedText`.
- Confirmed the mirror-sourced citations correctly trigger this
  corpus's own "not independently confirmed against the government's
  own primary text" disclosure banner in the rendered output (the same
  behavior already present for this corpus's other `california.public.law`
  citations), rather than being presented as if independently
  confirmed against a primary government source.

## Net changes

- New document: Freelance Service Agreement
  (`freelance_service_agreement`), 15 `clauseOrder` entries (8 reused
  `fwpa_*` clauses + 7 new clauses: 2 authority + 5 drafting), in the
  Hiring category. Two new fields (`paymentSchedule`,
  `terminationNoticeDays`); five existing field ids reused.
- `search/lay_terms.json`: added a `freelance_service_agreement` entry
  (required by `tools/validate_corpus.py`'s lay-terms coverage check).
- Corpus: 6,621 → 6,628 clauses; 741 → 742 documents.
