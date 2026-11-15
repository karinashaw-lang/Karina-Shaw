# SEO launch plan — staged, wedge-first, not yet published

**Nothing described in this document has been published anywhere.**
`build/seo/` is gitignored, has never been deployed, and this plan
does not change that. This document exists to decide, in advance,
*what* would go live *when* and *why* — so that when the project
owner is ready to actually launch, the decision is already made and
recorded, not improvised. Every number below was measured just now
against this exact commit by running the project's own tools.

**CA Wedge Plan Step 22 update:** the recommended rollout is now
**wedge-first** — Wave 1 is the 7-document California single-member
LLC formation cluster (`LAUNCH_SET_PROPOSAL.md`'s own wedge table and
`app.js`'s `WEDGE_CLUSTER_DOC_IDS`), not simply "whichever documents
happen to be Tier A corpus-wide." As of this commit, every one of
those 7 documents has reached Tier A or B with no open finding of any
severity — see "Wedge cluster status" below for exactly how each one
got there and what changed to make that true.

## What already exists (Phase 8.3, built before this phase)

- `tools/generate_seo_pages.py` — generates one static page per
  document (what it is, jurisdiction, clauses, citations, fields) and
  one per real plain-language question the corpus can actually answer
  (drawn from `tests/search/golden_queries.json`, the same 100 queries
  Phase 5.1's live search engine was tested against — not invented
  for SEO). A question with no supporting authority behind it is
  skipped outright.
- `tools/validate_seo_pages.py` — fails if any page has fewer than 60
  words of real content, if any two pages in the same category (or
  among the question pages) exceed 0.8 Jaccard similarity, or if any
  title/description collides with another page's.
- Both run in CI on every push. Right now: **840 pages generated (741
  document pages + 99 question pages), all pass validation.**
- `config/seo.json` holds a single `baseUrl` field, currently empty —
  pages render with root-relative URLs (`/documents/x.html`) until a
  real domain is decided.

None of this has ever produced output that reached a public URL. That
is the gap this phase's Step 8 exists to plan for, not to close.

## What this step adds: a staging mechanism

The generator and validator already existed; what didn't exist was
any way to launch gradually. `tools/generate_seo_pages.py` now takes
an optional `--stage N` (or `stage=N` to `generate()`):

- Every document **still gets exactly one page** regardless of stage —
  staging controls indexability, not existence, so
  `validate_seo_pages.py` keeps checking the full 840-page set no
  matter what stage is eventually launched.
- A page whose document doesn't qualify for stage `N` gets
  `<meta name="robots" content="noindex">` added to its `<head>`.
- `sitemap.xml` lists only the in-stage, indexable pages — a sitemap
  is an invitation to crawl, and a withheld page shouldn't be in it.

A document's stage is computed fresh every run from `tiers.json` and
`verifier/findings.jsonl`/`verifier/triage.jsonl` (see
`compute_doc_stage()`) — not a hardcoded list, so it tracks the
corpus's real, current quality signals and the right documents move
up automatically as the verifier checkpoint grows, with no separate
"stage list" file to keep in sync by hand.

**CA Wedge Plan Step 22 adds `--wedge-first`** (or `wedge_first=True`):
the 7-document wedge cluster counts as stage 1 regardless of its own
Tier A/B split, as long as it has no open blocker/major finding. Tier
C still excludes a wedge document outright — wedge membership
overrides tier *ranking*, never a correctness gate. See
`WEDGE_CLUSTER_DOC_IDS` in `tools/generate_seo_pages.py`.

## Wedge cluster status (Step 22)

All 7 wedge documents reached Tier A or B as of this commit — **0 are
Tier C.** That wasn't already true when this step started: 5 of the 7
were Tier C, including `llc_articles_of_organization` itself (the
actual formation filing). Investigating exactly why turned up two
different, genuinely fixable gaps, not a reason to leave them out of
Wave 1:

- **3 documents were blocked only by missing field-schema text**
  (`llc_articles_of_organization`, `agent_for_service_of_process_info_sheet`,
  `statement_of_information`) — a field lacked a `whyWeAsk` explanation,
  which `tools/tiering.py` requires for Tier B. Fixed by writing
  grounded `whyWeAsk` text for the 8 affected fields across these
  documents (plus 2 more on `ein_info_sheet`, below), each tied to the
  document's own already-verified clause content — no new legal
  research needed for this part, just explaining fields the corpus
  already asks for correctly.
- **2 documents were blocked by genuinely unverified citations**
  (`llc_operating_agreement_single_member`'s two federal tax-election
  clauses, and all six of `ein_info_sheet`'s authority clauses) —
  sourced from `law.cornell.edu`'s LII mirror rather than a primary
  source. Re-verified all 10 affected citations directly against the
  official U.S. Government Publishing Office text: the live
  **eCFR** (ecfr.gov) for the Treasury Regulations (26 C.F.R.
  §§ 301.7701-3, 301.6109-1), and **govinfo.gov**'s permanent U.S.
  Code link for 26 U.S.C. § 6109(a)(1). Every quote already in the
  corpus matched the primary source's text exactly, word for word —
  confirming the mirror had been accurately copied, not that it could
  be assumed accurate without checking. Citations upgraded from
  `sourceClass: "mirror"` to `"primary-official"`, `checkedDate`
  updated, and each clause's own `gap` note rewritten to say so
  plainly rather than silently dropping the old "not separately
  checked against govinfo.gov" caveat. `ein_info_sheet` additionally
  needed two more `whyWeAsk` fixes (`responsiblePartyName`,
  `ssnOrItin`) once its citation blocker cleared.

This is real, sourced verification work (See DECISIONS.md's own entry
for this step for the full before/after per document), not a
relaxation of what Tier A/B require — the same adversarial-verification
bar every other Tier A promotion in this project has gone through
still applies for these documents to reach Tier A specifically; Tier B
was the realistic, honest target for this step.

## The four stages, and what's actually in each right now

Numbers below are real output from `python3 tools/generate_seo_pages.py --stage N`
against this commit (`documents` + `questions`, each counted
separately since a question page can exist for a document the stage
otherwise withholds — it can't, actually: a question page inherits
its underlying document's stage, so it's never indexable while its
document isn't).

| Stage | Who qualifies | Docs indexable | Question pages indexable | Total indexable |
| --- | --- | --- | --- | --- |
| 1 (plain) | Tier A, zero open findings of any severity | 15 | 0 | 15 |
| 1 (`--wedge-first`) | Stage 1 (plain) + the full wedge cluster | 19 | 1 | 20 |
| 2 | Stage 1 (plain) + Tier B, zero open findings of any severity | 275 | 38 | 313 |
| 3 | Stage 2 + Tier A/B carrying only an open *minor* finding | 329 | 48 | 377 |
| 4 | Everything, including Tier C | 741 | 99 | 840 |

(`--wedge-first` only changes stage 1's membership — by stage 2 the
wedge cluster's own Tier B documents are already included under the
plain tier-based rule, so stages 2-4 are identical with or without the
flag.)

A document can't reach stage 1-3 at all while it has an open
**blocker or major** finding — `compute_doc_stage()` forces it to
stage 4 regardless of tier or wedge membership, the same floor
`tools/tiering.py` already enforces for Tier A/B eligibility. As of
this commit, **0 documents are held back by an open blocker/major**.
The only thing separating stage 2 from stage 3 is an **open minor
finding** — by this project's own severity definitions, an
advisory-tone drift, an unverifiable source, or a stylistic overclaim
a careful reader would likely still read correctly, not a wrong
statement of law.

Stage 4 is **not a current recommendation** — the adversarial verifier
has not reached every authority clause in the corpus, so most Tier C
documents simply haven't been checked yet, not confirmed clean. The
mechanism supports stage 4 for later, once verifier coverage grows
closer to complete.

## Recommended rollout order

1. **`--stage 1 --wedge-first` first**, held for at least one full
   analytics cycle (a few weeks) before promoting further — 20 pages:
   the entire 7-document wedge cluster (the actual go-to-market
   priority) plus 12 other Tier A documents elsewhere in the corpus
   that happen to qualify too. This is both the mechanism-validation
   step the old plain-stage-1 rollout was meant to be (small blast
   radius, confirms the sitemap/noindex/hosting mechanics work) *and*
   real reach for the one cluster that actually matters for this
   launch's go-to-market wedge — not an either/or the way the old,
   tier-only stage 1 (15 unrelated Tier A pages, 0 of them the wedge's
   own money document) was.
2. **Stage 2 once stage 1 shows no problems.** The first stage with
   broad reach — 313 pages, every one backed by a fully
   adversarial-verified-or-better, zero-open-finding document. (The
   wedge cluster is already fully included here regardless of the
   `--wedge-first` flag, since every wedge document is now Tier A or
   B.)
3. **Stage 3 after a further review of the Tier B documents carrying
   only a minor finding** (listed in `verifier/findings.jsonl`,
   filterable by severity and cross-referenced against
   `verifier/triage.jsonl` for which are still open) — a quick human
   skim to confirm none of those specific minors reads as misleading
   in the context of a search-indexed page, even though none of them
   rises to the "wrong statement of law" bar that would have kept the
   document out of Tier B at all.
4. **Stage 4 only after verifier coverage of Tier C's authority
   clauses grows substantially** — not a near-term step, and not
   blocked on anything but the verifier checkpoint's own ongoing
   progress.

Promotion between stages should happen by **re-running the generator
with the new stage number (and `--wedge-first`, if still wanted once
later waves subsume it) and redeploying**, not by hand-editing which
pages are indexable — the whole point of computing stage from live
tier/verifier data is that a document's eligibility updates itself
whenever those improve.

## What's still needed before Stage 1 can actually go live

None of this exists yet. All of it is the project owner's job, not
something this session can do:

1. **A real domain and hosting decision**, and `config/seo.json`'s
   `baseUrl` set to it (currently empty, so every generated URL is
   root-relative — fine for `build/seo/` served at its own path, wrong
   if these pages are meant to live under the main app's domain at a
   different path).
2. **A deploy path for `build/seo/`.** Nothing currently builds or
   ships this output anywhere; it's generated into a gitignored
   directory and stops there. This is a different pipeline from the
   `deploy-staging`/`backup.yml` CI jobs already written for the
   Supabase backend (those move application data; this would move
   static marketing pages) and doesn't exist yet in any form.
3. **Search Console (or equivalent) verification for the chosen
   domain**, so `sitemap.xml` can actually be submitted and so the
   "Reach" mission metric (organic search traffic) has something to
   measure against — right now there is no way to observe this
   metric even after a hypothetical launch.
4. **A decision on analytics tagging for these pages** specifically —
   the existing first-party analytics (Phase 8.1) instruments the app
   itself, not a static marketing page a visitor might never click
   into the app from.
5. **A quick legal-copy check**: should these pages link to
   `privacy.html`/`terms.html` the way the main app does? They
   currently don't (see the generated page's body) — simplest fix is
   adding that link in the next review pass, flagged here rather than
   silently decided.

## Rollback and the limits of "rollback" here

Pulling a document back out of the live set is mechanically simple:
regenerate at a lower stage number (or exclude the specific document
id if an individual page needs pulling outside of a stage change) and
redeploy — the noindex tag and sitemap removal take effect on the next
crawl. **This is not instant and not retroactive.** A page a search
engine already indexed stays indexed until it's re-crawled and
re-evaluates `noindex`, which can take days to weeks outside of an
explicit removal request through Search Console. If a factual error
is ever discovered in an already-indexed page, the real fix is the
same one this project already uses for the underlying clause data —
a verifier finding, triage, and a corrected `data/clauses.json` — not
a hope that removing the page from the sitemap erases it from where
it was already seen. This limitation is disclosed here rather than
implied away.

## Summary

- Mechanism: built, tested, committed (`tools/generate_seo_pages.py
  --stage N [--wedge-first]`).
- Content: 840 pages exist today, 377 of them (329 documents + 48
  question pages) already qualify for stage 3 — the honest ceiling of
  what's launch-ready right now given this corpus's actual verified
  state. All 7 wedge-cluster documents are Tier A or B and indexable
  from `--stage 1 --wedge-first` onward.
- Publication: **not done, and not something this session will do**
  — every item in "What's still needed" above requires the project
  owner, the same way the Supabase staging/production deploy already
  does.
