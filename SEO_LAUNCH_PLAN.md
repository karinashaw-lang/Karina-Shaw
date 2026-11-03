# SEO launch plan — staged, not yet published

**Nothing described in this document has been published anywhere.**
`build/seo/` is gitignored, has never been deployed, and this plan
does not change that. This document exists to decide, in advance,
*what* would go live *when* and *why* — so that when the project
owner is ready to actually launch, the decision is already made and
recorded, not improvised. Every number below was measured just now
against this exact commit by running the project's own tools.

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
- Both run in CI on every push. Right now: **839 pages generated (740
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
  `validate_seo_pages.py` keeps checking the full 839-page set no
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

## The four stages, and what's actually in each right now

Numbers below are real output from `python3 tools/generate_seo_pages.py --stage N`
against this commit (`documents` + `questions`, each counted
separately since a question page can exist for a document the stage
otherwise withholds — it can't, actually: a question page inherits
its underlying document's stage, so it's never indexable while its
document isn't).

| Stage | Who qualifies | Docs indexable | Question pages indexable | Total indexable |
| --- | --- | --- | --- | --- |
| 1 | Tier A, zero open findings of any severity | 8 | 0 | 8 |
| 2 | Stage 1 + Tier B, zero open findings of any severity | 320 | 49 | 369 |
| 3 | Stage 2 + Tier A/B carrying only an open *minor* finding (today's full Tier A+B) | 382 | 60 | 442 |
| 4 | Everything, including Tier C | 740 | 99 | 839 |

A document can't reach stage 1-3 at all while it has an open
**blocker or major** finding — `compute_doc_stage()` forces it to
stage 4 regardless of tier, the same floor `tools/tiering.py` already
enforces for Tier A/B eligibility. As of this commit, **0 documents
are held back by an open blocker/major** — checkpoint-B's triage
(Phase 12 Step 7) fixed every one that existed. The only thing
separating stage 2 from stage 3 is an **open minor finding** — by this
project's own severity definitions, an advisory-tone drift, an
unverifiable source, or a stylistic overclaim a careful reader would
likely still read correctly, not a wrong statement of law.

Stage 4 is **not a current recommendation** — the adversarial verifier
has only reached 1,100 of 4,980 authority clauses (22.1%) overall,
so most Tier C documents simply haven't been checked yet, not
confirmed clean. The mechanism supports stage 4 for later, once
verifier coverage grows closer to complete.

## Recommended rollout order

1. **Stage 1 first, held for at least one full analytics cycle** (a
   few weeks) before promoting further. It's a small, low-stakes set
   — 8 pages, all drafting-only forms with zero authority clauses, so
   there's nothing an adversarial pass could have gotten wrong about
   the law. This stage exists to validate the *mechanism* (does the
   sitemap behave, do the noindex tags work, does anything break in a
   real hosting environment) with the smallest possible blast radius,
   not because 8 pages alone would move the "Reach" mission metric.
2. **Stage 2 once stage 1 shows no problems.** This is the first stage
   with real reach — 369 pages, every one backed by a fully
   adversarial-verified, zero-open-finding document.
3. **Stage 3 after a further review of the 61 Tier B documents
   carrying only a minor finding** (listed in `verifier/findings.jsonl`,
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
with the new stage number and redeploying**, not by hand-editing which
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

- Mechanism: built, tested, committed (`tools/generate_seo_pages.py --stage N`).
- Content: 839 pages exist today, 442 of them (382 documents + 60
  question pages) already qualify for stage 3 — the honest ceiling of
  what's launch-ready right now given this corpus's actual verified
  state.
- Publication: **not done, and not something this session will do**
  — every item in "What's still needed" above requires the project
  owner, the same way the Supabase staging/production deploy already
  does.
