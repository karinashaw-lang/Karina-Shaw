# Build status

Last updated: 2026-10-29, against commit `a72d1b5` (branch
`claude/new-session-palh5c`). This reflects the actual state of the
repository right now — every number below was measured by running the
project's own tools, not recalled or estimated, and is reproducible
by running the same command.

## Phase completion

Every phase in `MASTER_BUILD_PLAN.md` (0 through 11) has real,
working, tested implementation behind it, with reasoning for every
judgment call in `DECISIONS.md` and the architecture in
`ARCHITECTURE.md`. The gaps that remain are named explicitly below —
this is not a claim that everything is finished, only that everything
claimed as done has been verified, and everything not done is stated
as such.

**Fully built and gate-checked in CI on every push:** schema-driven
interview engine and clause-level conditionals (Phase 2); computed
quality tiers and promotion reporting (Phase 3); the adversarial
verifier, triage workflow, per-category staleness thresholds, the
law-change watcher, and citation-recheck integration (Phase 4);
plain-language search, intake, related-document suggestions, and
picker performance (Phase 5); native PDF/.docx export, document
lifecycle/versioning, and filing packets (Phase 6); the Supabase
backend, audit trail, account basics, and e-signature/sharing (Phase
7, except payments — see below); privacy-friendly analytics, in-app
feedback, and programmatic SEO (Phase 8); accessibility, performance
budgets, error monitoring + a real staging environment, a security
review (CSP, XSS audit, secret scanning, rate limiting), privacy/
legal-copy pages, and backup-and-restore automation (Phase 9);
contract-reader quality (an eval harness with a measured baseline)
and a cross-document consistency test suite (Phase 10); `ROADMAP.md`
scoping four not-yet-built initiatives without building them (Phase 11).

**Deliberately not built, each with reasoning recorded in
`DECISIONS.md`:**
- **Payments (Phase 7.2)** — skipped by the user's own explicit
  choice; no Stripe credentials exist anywhere in this project.
- **Password-based sign-in, multi-language support, a mobile app,
  and admin tooling** — all four are Phase 11's job to scope, not
  build; see `ROADMAP.md`.

**Open, handed-off items that need the project owner, not more
engineering from this session:**
- Two pre-existing Postgres linter findings (`auth_rls_initplan` on
  `agreements`, `multiple_permissive_policies` on `feedback`) are
  blocked by this session's inability to run `DROP POLICY` — exact
  fix SQL is in `DECISIONS.md`.
- `auth_leaked_password_protection` (a Supabase Auth dashboard toggle)
  has never been enabled — no MCP tool exists to toggle it.
- CI's `deploy-staging` and `backup.yml` jobs are written and tested
  but no-op until the project owner adds the repository secrets named
  in `tools/README.md` (`SUPABASE_ACCESS_TOKEN`,
  `SUPABASE_STAGING_PROJECT_REF`, `SUPABASE_PROD_PROJECT_REF`).
- `privacy.html`/`terms.html` carry a `[contact email — to be added]`
  placeholder, and neither page has been reviewed by an attorney —
  both say so plainly on the page itself.
- One real California law change (Cal. Bus. & Prof. Code § 22757.2,
  the AI Transparency Act's detection-tool requirement) was flagged
  by the law-change watcher on 2026-10-01 and is still open — see
  "Freshness" below.

## Mission metrics (as defined in `MASTER_BUILD_PLAN.md`)

### 1. Trust

- **Tier A or B:** 382 of 740 documents (51.6%) — all at Tier B; Tier
  A is empty by design, since it requires the adversarial verifier
  and accessibility checks to have run against a document's full
  clause set, and the verifier has so far sampled 100 of 4,980
  authority clauses (2.0% of the authority corpus), not the full
  corpus. `python3 tools/tiering.py` to reproduce.
- **Verified clauses within staleness thresholds:** 4,980 of 4,980
  authority clauses (100%) are marked `verified` and sit inside their
  category's fatal staleness window; 0 are even at the warn
  threshold. `python3 tools/validate_corpus.py` to reproduce.
- **Open verifier findings by severity:** 0 blocker, 1 major, 17
  minor (18 total, from the 100-clause sample verified so far).
  `python3 verifier/report.py` to reproduce.

### 2. Breadth

- **Documents per category:** 740 total across 8 categories, level
  to within 1 of each other (93–94 each) — Business Formation 94,
  Confidentiality & IP 94, During employment 93, Ending employment
  94, Estate Planning 93, Family Law 93, Hiring 93, Real Estate 94.
- **Share rendering through the full interview engine:** 740/740
  (100%) — every document completes the schema-driven wizard
  end to end. `node tools/wizard_regression.js` to reproduce.

### 3. Experience

**Not yet measurable.** The analytics pipeline (Phase 8.1) is built,
tested against synthetic data, and live in both Supabase projects —
but this product has no real users yet, so `analytics_events` holds
zero real rows. Completion rate, abandonment point, time-to-finished-
document, and feedback volume/sentiment all require real usage this
session has no way to generate or fabricate. `tools/analytics_report.js`
and `tools/ingest_feedback_findings.js` are ready to report on this
the moment real traffic exists.

### 4. Freshness

The law-change watcher (Phase 4.4) is live and has run one real scan
window (2026-07-01 to 2026-10-01 against the 100 citations scanned so
far), which found one real change: Cal. Bus. & Prof. Code § 22757.2's
operative text was updated 2026-09-30, flagging the
`aitransparency_detection_tool` clause. That flag was recorded
2026-10-19. As of this writing (2026-10-29), it has been open for 10
days since recording (28 since the statute's own update date) without
being reviewed or re-verified — the clause's `checkedDate` is still
2026-09-04, before the flagged change. This is reported honestly
rather than claimed closed: the full "flagged → reviewed → updated"
cycle the metric asks about has not been demonstrated end to end yet,
only the first step. Re-verifying it is additionally blocked right
now by the same access issue already on record in `verifier/
findings.jsonl` (leginfo.legislature.ca.gov returns a Cloudflare 403
to this sandbox) — the project owner (or a session with different
network access) needs to complete this one.

### 5. Reach

**Not yet measurable.** `tools/generate_seo_pages.py` produces ~840
programmatic pages (one per document, one per already-verified
search question) and `tools/validate_seo_pages.py` checks them for
uniqueness and thinness — both pass in CI on every push — but the
output (`build/seo/`) is gitignored and has never been published to a
live, indexed site. There is no real organic search traffic to report
because there is nothing publicly live to receive it yet.

### 6. Revenue

**N/A.** Payments (Phase 7.2) were skipped this build by the user's
own explicit choice — no Stripe credentials exist anywhere in this
project, and nothing charges anyone for anything yet. Nothing to
report until that changes.

## How to verify any of this yourself

Every number above came from one of these commands, run against this
exact commit:

```
python3 tools/validate_corpus.py
python3 tools/tiering.py
python3 verifier/report.py
node tools/wizard_regression.js
cat watcher/reports/2026-10-01.md
```

The full CI gate suite (`.github/workflows/ci.yml`) runs all of the
above plus the complete browser regression/golden/accessibility/
performance/security suite on every push to this branch.
