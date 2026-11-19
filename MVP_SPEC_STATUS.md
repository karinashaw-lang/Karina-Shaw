# MVP_SPEC.md — status audit against real repo state

Run 2026-11-19, against branch `claude/new-session-palh5c`. Every
status below is backed by actually reading or running the file named,
not by trusting an earlier `DECISIONS.md` entry's own characterization
of itself — several real gaps below exist despite a `DECISIONS.md`
entry describing the adjacent feature as done, because "done" there
meant something narrower than this spec asks for now, or because the
spec itself (this is the third planning document this build has
received) changed what's in scope since that entry was written.

## 1. Wedge documents (the product core) — **DONE**

Confirmed this session (`review/A3_WEDGE_CONFIRMATION.md`,
`LAUNCH_SET_VERIFICATION_ESTIMATE.md` and this session's A5 work):
all 7 wedge documents' authority clauses are CA-primary-sourced with
federal sources only for federal pieces, 40/40 wedge authority clauses
at `verified` or `adversarially_checked`, 0 open blocker/major findings
touching the wedge, `sourceClass` backfilled on every citation
(`tools/clause_levels.py`'s `PRIMARY_SOURCE_CLASSES` enforces the
primary-official/court-opinion/agency/mirror/secondary taxonomy
corpus-wide), one research file per document (`verification/*.md`,
confirmed non-empty for all 7), and `tools/tiering.py`'s own rule
(`tools/tiering.py`, `compute_doc_stage`/tier logic) structurally
cannot promote a zero-authority-clause document to Tier A.

## 2. Interview & generation — **DONE**

`app.js`'s wizard (`renderWizard`/`renderWizardStep`, "why we ask"
text sourced from each field's own `whyWeAsk`, clause-level
conditionals via `clauseIncludeIf`/`includeIf`) is mature,
long-shipped functionality, re-confirmed working this session via a
live Playwright run against `index.html` (D1.2 entry,
`DECISIONS.md` 2026-11-19). `lint/copy_lint.py` (CI-enforced) scans
`index.html`, `app.js`, `account.js` for advisory phrasing and passes.
Preview-before-payment and price-before-interview: no paywall exists
yet in the UI at all (see Section 3) — free preview is trivially true
today, but "price visible before interview starts" has nothing to
show a price for yet, since no price has been set
(`config/pricing.json`: `monthlyPriceUsd`/`annualPriceUsd` both
`null`).

## 3. Payment & entitlements — **PARTIAL, and one real scope conflict with this spec**

Far more is built than a first look suggests, but it was built for a
**different pricing model than this spec allows**.

- **Real, working infrastructure exists:** `supabase/migrations/` has
  `orders`, `order_items` (`20261028000000_baseline.sql`), and
  `entitlements` (`20261113000000_entitlements.sql`) tables, RLS
  policies gating `agreements`/`document_versions`/`document_shares`
  inserts on `has_active_entitlement()`, and real edge functions:
  `create-checkout-session`, `stripe-webhook`, `create-portal-session`,
  `delete-account`, `share-sign`/`share-view`, plus a shared
  `rate_limit.ts`.
- **Scope conflict:** `config/pricing.json` and every one of these
  functions are built **subscription-only**
  (`create-checkout-session/index.ts` line 86: `mode: 'subscription'`;
  `stripe-webhook/index.ts` acts only on `customer.subscription.*`
  events) — the owner's 2026-11-10 decision, per `PRICING_OPTIONS.md`.
  **This spec's own exclusion list puts "subscription tier" in Phase
  5+.** The entitlements schema also doesn't match this spec's
  description (spec wants `entitlements(user_id, type, document_id,
  source, status, starts_at, ends_at)`; the real table has
  `stripe_customer_id`/`stripe_subscription_id`/`current_period_end`/
  `cancel_at_period_end` instead, and `document_id` is nullable,
  built around one row per subscriber not per document). **This needs
  an owner decision, not an engineering guess**: either the spec's
  "no subscription in MVP" instruction is stale relative to the
  2026-11-10 pricing decision, or the entitlements/Stripe layer needs
  rebuilding for per-document purchase before MVP.
- **Confirmed NOT built, regardless of pricing-model question:** no
  `invoice.paid`/`invoice.payment_failed` handling (webhook ignores
  everything except `customer.subscription.*`, acknowledging other
  event types as 200 no-ops); no `charge.refunded` or
  `charge.dispute.created` handling anywhere (`grep -rl "refund\|dispute" supabase/functions/`
  returns nothing); no admin refund action anywhere in the codebase;
  no server-side PDF/DOCX rendering at all — `DECISIONS.md`'s own
  entitlements migration comment states plainly: "The remaining
  paywalled actions (PDF/.docx/plain text/JSON export) render
  entirely client-side with no server round trip in this
  architecture... UI-gated... not a cryptographic one," which directly
  contradicts this spec's "server-side release only" requirement.
  No `audit_log` table exists. No golden text-parity test for
  server-rendered output exists (nothing to test — it isn't built).
  No automatic-renewal-law disclosure copy found at checkout (the
  migration/pricing-json comments *say* it's required and "built in
  Step C.7," but no checkout UI exists to carry it — `create-checkout-session`
  has a renewal-consent comment at line 99 but this wasn't verified
  against real checkout-page copy in the time available for this
  audit).
- Webhook signature verification and idempotency: **real** —
  `constructEventAsync` with Stripe's own crypto provider, and the
  `entitlements` write path is a partial-unique-index upsert
  (`on conflict (stripe_subscription_id)...do update`), which is
  naturally idempotent against a replayed event even without a
  separate dedup table. Never actually run against a live webhook —
  the function's own comment says so plainly ("NOT invoked from this
  sandbox... traced by hand, not run against a live webhook").

## 4. Trust surface — **PARTIAL**

- Source panel: **done**, long-shipped (`app.js`'s `renderBadge()`),
  phone-width tested as part of this project's accessibility suite.
- Verify page: **built, but doesn't meet this spec's security
  requirements as written.** `tools/generate_verify_pages.py` (CA
  Wedge Plan Step 11, confirmed working and wired into `app.js`'s
  `verifyPageUrl()` this session) generates `/verify/<id>.html` with
  title, generated-on date (from `verification_levels.json`'s
  `generated_at`), and every clause's level/citation/quote/checkedDate
  — real and correct. **But the id is the document's own id** (e.g.
  `llc_articles_of_organization`), not unguessable, and these are
  static files with no rate limiting at all (the shared
  `rate_limit.ts` only covers edge functions, not static file serving)
  — this spec's "unguessable ids... no id enumeration" requirement is
  not met, and may not even be the right design: the current page is
  document-level and identical for every viewer (no purchase-specific
  or user-specific data on it at all), so enumerating ids today
  exposes nothing sensitive — worth an owner decision on whether this
  spec means a different, per-purchase verify-record design (which
  would need the server-side export pipeline from Section 3 to exist
  first) or whether the static, per-document design is intentionally
  fine and this requirement should be dropped/reworded. "Whether any
  clause changed since generation" is not implemented (needs a
  corpus-version snapshot per export, which doesn't exist without
  server-side rendering). No QR code image exists in any export
  (confirmed this session, D1.2 entry) — exports link to the verify
  page as plain text only.
- Changelog page: **done** — `changelog.html` is real, dated, public,
  customer-facing, and non-empty (134KB, many real entries from this
  project's own defect-and-fix history going back to 2026-08-29).
- Home-page demo: **done** — built and tested this session (D1.2,
  `DECISIONS.md` 2026-11-19): `llc_liability_shield` rendered live
  with its real source panel, no signup needed, confirmed via a live
  Playwright run.
- Trust page: **done** — `trust.html`/`trust.js` compute every number
  live from `tiers.json`/`verification_levels.json`, matching this
  spec's "CI fails if page text and data disagree" intent structurally
  (the numbers are never typed by hand, so they cannot disagree with
  the data they're computed from) — not verified whether a literal CI
  *check* comparing rendered page output against the JSON exists as
  its own step (not found in `ci.yml`), only that the generation
  mechanism itself is incapable of drifting.

## 5. Verify-anything tool — **PARTIAL, real foundation, different shape than spec asks for**

The "Read a contract" feature (`index.html`'s `#screen-incoming`,
`contract_matcher.js`, `contract_worker.js`) is real, free, no-account,
reachable from the home page (`#front-door-incoming-link`), and has a
genuine eval harness (`tools/eval_contract_reader.js`, run in CI).
But it's **paste-only — no file upload** (`grep -n 'type="file"'
index.html` returns nothing), and it's a TF-IDF similarity matcher
against this corpus's own clause library, not the "checked against
current California statute, what holds / what's superseded / what's
missing" verification-report format this spec describes. The
underlying matching engine and "inform, never advise" framing are
directly reusable, but the output format and upload capability are a
real gap, not just a renaming of what v1 called the "free contract
reader."

## 6. SEO Wave 1 — **PARTIAL, mechanism done, not published**

`tools/generate_seo_pages.py --stage 1 --wedge-first` is real,
deterministic, CI-tested (`ci.yml`'s "Generate and validate SEO
pages" step), produces unique title/description/canonical/schema.org/
sitemap entries, and already implements the wedge-first staging this
spec asks for. **Not published or indexed** — `build/seo/` is
gitignored and has never been deployed (confirmed: no hosting/deploy
config found in this audit). The "obligation/penalty intent" page
category this spec names (e.g. "Franchise Tax Board minimum franchise
tax") was not verified against `tests/search/golden_queries.json`'s
actual query list in the time available — flagged as unconfirmed, not
assumed present or absent.

## 7. Legal & compliance minimum — **PARTIAL**

`terms.html`, `privacy.html`, `storage-notice.html`, and
`PRIVACY_DATA_INVENTORY.md` all exist and are real, substantive
documents (not stubs — `privacy.html` is 9KB, `PRIVACY_DATA_INVENTORY.md`
12KB). Not independently re-read line-by-line this audit to confirm
every spec bullet (retention, deletion, CCPA/CPRA rights, subprocessor
list) is present — the files exist and are non-trivial, but a full
content check against this spec's exact bullet list wasn't done given
time. Refund policy: **not found as a standalone document** (and
can't be real yet — no refund mechanism exists per Section 3).
"What this is and isn't" notice and jurisdiction notice on every
export: not independently re-verified this audit, though
`DECISIONS.md` has prior entries claiming both exist in the output
screen and exports — needs a direct re-check, not assumed.

## 8. Analytics — **PARTIAL**

Real events exist today: `opened`, `step_reached`, `completed`,
`search`, `exported`, `wedge_link_clicked`, `referral_link_clicked`,
and this session's three new ones (`demo_clause_viewed`,
`demo_source_panel_expanded`, `demo_to_interview_started`). **Missing
from this spec's list:** `verify-page scans` (no event fires when a
verify page itself loads — it's a static file with no script, by
design, per D1.1's "works even if JavaScript fails" reasoning, which
is in tension with wanting an analytics event from it), `verify-anything
tool uses` (no `trackEvent` call found in the incoming-contract-reader
code path), `paywall→checkout conversion` and `highest-abandonment
step` (no paywall or checkout UI exists yet to instrument, per Section
3). No field values in any event: confirmed true for every event
checked (`document_id`/`clause_id`/`search_query`/`export_format`
only, consistent with this project's own stated discipline).

## 9. Infrastructure & gates — **MOSTLY DONE, two real gaps**

- Hooks: **real** — `.githooks/commit-msg` and `.githooks/pre-push`,
  both calling `tools/check_commit_discipline.py`, installed via
  `tools/install_hooks.sh`.
- CI (`ci.yml`): **extensive and real** — corpus validation,
  `tiering.py --check`, citation-index check, data-inventory check,
  copy lint, tool self-tests, SEO page generation+validation, verify
  page generation, commit-discipline check on every pushed commit,
  `merge_guard.py`, `npm audit`, and a full browser-regression job
  that starts a real static server and runs `regression.js`,
  `golden.js`, `wizard_regression.js`, `wizard_unit.js`,
  `golden_search.js`, `intake_coverage.js`, `related_coverage.js`,
  `performance_budget.js`, `pdf_golden.js`, `docx_golden.js`,
  `versioning.js`, `consistency.js`, `filing/next_steps.js`,
  `sign_page.js`, `axe_check.js` (accessibility), `error_reporting.js`.
  (Note for future sessions: this session's own sandbox blocks
  starting a local HTTP server via its permission classifier —
  `regression.js` and friends could not be run directly in this
  session, but **they do run in real CI**, which is a sandbox
  limitation, not a project gap.)
- Backups: **real** — `.github/workflows/backup.yml`, daily cron,
  spins up a disposable Postgres and does a real restore test,
  gracefully no-ops if `SUPABASE_ACCESS_TOKEN`/`SUPABASE_PROD_PROJECT_REF`
  secrets aren't configured yet (an owner action, `OWNER_TODO.md`
  item 11).
- **Gap: freshness automation is not actually scheduled.** `watcher/`
  has real, working scripts (`scan_batch.py`, `record_changes.py`,
  `report.py`, a real `scanned.jsonl`/`changes.jsonl` with data) but
  **no GitHub Actions `schedule:` trigger exists for it** — only
  `backup.yml` has a cron. The weekly law-change watcher and
  January/July citation recheck this spec asks for are real tools
  that have to be run by hand today, not automation that runs itself.
- **Gap: no runbooks exist.** `find . -iname "*runbook*"` returns
  nothing. Legal-content-error, payment-incident, and data-incident
  runbooks are not written.
- Uptime/error alerting/status page: not independently verified this
  audit (no hosting is live yet per Section 6, so there's arguably
  nothing to monitor yet) — flagged as unconfirmed.

## 10. Launch-critical verification — **PARTIAL, prior work exists but is stale**

`LAUNCH_READINESS.md` and `LAUNCH_CRITICAL_CHECKS.md` both exist
(CA Wedge Plan Steps 21/24) and describe exactly this kind of
end-to-end check having been done once, with a pass/fail table and a
top-five-risks section — the right shape. **Not re-verified this
audit whether their content is current** against today's corpus state
(this session alone changed hundreds of clauses via A5 buckets 1-4) —
both files predate this session's A5 work (`LAUNCH_READINESS.md`
dated 2026-11-16, `LAUNCH_CRITICAL_CHECKS.md` 2026-11-15) and should
be treated as **STALE-NEEDS-RECHECK**, not current, until re-run
against the corpus as it stands now. The manual paywall-bypass
checklist exists in `LAUNCH_CRITICAL_CHECKS.md` per its own prior
`DECISIONS.md` entry, but was built against a paywall design that
Section 3's findings above suggest no longer matches what would need
to ship — needs re-doing alongside Section 3's resolution, not before.

---

## Summary: what's most urgent to build next

Ranked by how blocking each gap is to an actual shippable MVP per
this spec, most blocking first:

1. **The pricing-model conflict (Section 3) needs an owner decision
   before any further payment work happens.** Building toward "no
   subscription in MVP" while the real entitlements/Stripe/pricing.json
   stack is subscription-only wastes real engineering time in whichever
   direction turns out wrong. This blocks everything else in Section 3.
2. **Server-side document rendering doesn't exist at all** —
   `DECISIONS.md`'s own entitlements-migration comment admits paid
   exports are client-side only today. This spec's "server-side
   release only" requirement, the `audit_log` table, and the golden
   text-parity test all depend on this not existing yet being fixed
   first — the single largest piece of genuinely unbuilt
   infrastructure found in this audit.
3. **Refund/dispute webhook handling and an admin refund action are
   entirely absent** — a real, scoped, buildable gap once (1) is
   resolved, not blocked on anything else.
4. **SEO Wave 1 is built but never published** — low engineering risk,
   but needs the owner's Wave-1-list approval and a real publish
   target (domain/hosting), which doesn't appear to exist yet either.
5. **Verify-anything tool needs real scope work** — deciding whether
   to extend the existing contract-reader's matching engine into a
   true verification-report format, or scope Section 5 down to match
   what's realistic pre-launch.
6. **Freshness automation and runbooks are the cheapest fixes here** —
   the watcher tooling already exists and just needs a cron trigger;
   three runbook documents are writing work, not engineering work.
7. **Re-run `LAUNCH_READINESS.md`/`LAUNCH_CRITICAL_CHECKS.md`** once
   the above land, since both are stale relative to this session's own
   corpus changes and shouldn't be trusted as current without a
   fresh pass.
