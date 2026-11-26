# GROUNDTRUTH_MASTER_BUILD_PLAN.md — Parts 2-13 audit against repo state

Written 2026-11-26, task "Master plan: audit Parts 2-13 against current
repo state." Read-only investigation: 5 parallel passes over Steps 7-58,
each checking the real repo (code, migrations, config, docs, git
history) rather than assuming from the plan's own "CURRENT STATE"
framing or this session's memory. No code changed by this audit itself.

Legend: **DONE** (built, cite evidence) · **PARTIAL** (some of it real,
rest named below) · **MISSING** (not built) · **WAIT** (owner decision
gate in the plan's own text; correctly not acted on past the proposal).

## PART 2 — Payments and server-side delivery

| Step | Title | Status | Evidence |
|---|---|---|---|
| 7 | Pricing decision | **WAIT** | `PRICING_OPTIONS.md`, `config/pricing.json` exist; `priceUsd` still `null`. Owner already flipped the model once (subscription → per-document, `MVP_SPEC.md` 2026-11-19); refund-policy copy still unwritten. Genuinely waiting, not stalled. |
| 8 | Entitlements / server-side release | **DONE** | `supabase/migrations/20261113000000_entitlements.sql` + 3 follow-ups; `supabase/functions/release-document/index.ts` (jurisdiction/footer/verify-link fixed this session). |
| 9 | Stripe (test mode) | **DONE** | `stripe-webhook`, `create-checkout-session`, `create-portal-session`, `admin-refund` edge functions all exist. Webhook event coverage and CA auto-renewal copy not re-verified line-by-line. |

## PART 3 — Differentiators

| Step | Title | Status | Evidence |
|---|---|---|---|
| 10 | Show-your-work document view | **MISSING** | No sources side-panel in the live preview UI. |
| 11 | Verification stamp / verify page | **DONE** | `build/verify/*.html`, `tools/generate_verify_pages.py`, `document_engine.mjs` footer/verify-link (this session's WebPage-schema fix). |
| 12 | Filing instruction sheets | **MISSING** | `filing/next_steps.json` is reminder data only, not the full fee/payment-method/county-variation sheet the step describes. |
| 13 | Free contract reader | **PARTIAL** | `app.js`, `tools/eval_contract_reader.js` + `tools/regression.js` exist; eval not re-run, home-page reachability not reconfirmed. |
| 14 | Law-change alert emails | **MISSING** | Drift *detection* exists (`document_engine.mjs`); no email-sending function. |
| 15 | Statement of Information reminder | **MISSING** | No dedicated collection/computation/two-stage-email feature; only launch-set data references. |
| 16 | Referral link (registered agent) | **MISSING** | `config/partners.json` does not exist. |
| 17 | Review capture email | **DONE** | `supabase/functions/send-review-requests/index.ts`. Exact cadence/incentive rules not re-verified. |
| 18 | Live public trust page | **DONE** | `trust.html` (CA Wedge Plan Step 18). |
| 19 | Paid experience / home page | **PARTIAL** | `HEADLINES.md`, wedge callout in `index.html`; no money-back-guarantee copy or paywall funnel analytics events found. |

## PART 4 — Relation map

| Step | Title | Status | Evidence |
|---|---|---|---|
| 20 | `document_relations` corpus data | **MISSING** | No relation-map file/field anywhere; no reviewed relation_type/reason schema. |
| 21 | Recommendation surfaces | **PARTIAL** | `app.js:2423-2519` has a live automatic idf-weighted related-doc scorer (Phase 5.3), rendered only in the document-page sidebar (`app.js:2876`) — not built on Step 20's reviewed-relations data, no reason lines, no dashboard/post-purchase surface. |

## PART 5 — Tone personalization

| Step | Title | Status | Evidence |
|---|---|---|---|
| 22 | Tone system design | **WAIT** | `TONE_OPTIONS.md` does not exist yet — this is the one piece Claude Code can write now (a proposal) without waiting; nothing past that. |
| 23 | Clause tone variants | **MISSING** | No `variants` schema field; blocked on Step 22 anyway. |
| 24 | Tone UI + saved preference | **MISSING** | No "tone" string anywhere in `app.js`/`index.html`. Blocked on Step 22. |

## PART 6 — Drafts, templates, saved preferences

| Step | Title | Status | Evidence |
|---|---|---|---|
| 25 | Named drafts (multiple per doc type) | **MISSING** | Only the existing single auto-resume draft. |
| 26 | Templates (save-as-template) | **MISSING** | No `template_id`/save-as-template anywhere. |
| 27 | Saved preferences profile | **MISSING** | No preferences/business-profile table or screen. |

## PART 7 — Retention hub and lifecycle engine

| Step | Title | Status | Evidence |
|---|---|---|---|
| 28 | Dashboard | **MISSING** | No `/dashboard` route; only the existing static pages. |
| 29 | Lifecycle engine | **MISSING** | No general event→milestone system; only Step-15-scale narrow logic. |
| 30 | Retention analytics | **MISSING** | None of the plan's named events (`dashboard_viewed`, `suggestion_shown`, etc.) exist. |

## PART 8 — Catalog access model and stickiness loops

| Step | Title | Status | Evidence |
|---|---|---|---|
| 31 | Search-first catalog | **PARTIAL** | SEO side is real (`tools/generate_seo_pages.py` noindexes non-launch-set pages); the live app UI (`app.js:1051`, `renderCategoryFilter()`) still bulk-loads and browses the *entire* catalog — the opposite of what this step asks. |
| 32 | Progressive catalog reveal | **MISSING** | Depends on Step 20 (relation map), which doesn't exist. |
| 33 | Unfinished-draft pull-back | **MISSING** | No idle-draft email code; only the day-7 review-request email exists. |
| 34 | Post-purchase sequence + email cap | **MISSING** | No scheduler, preference center, or cap logic. |
| 35 | Stored-value profile | **MISSING** | Depends on Step 27, also missing. |

## PART 9 — Subscription value stack

| Step | Title | Status | Evidence |
|---|---|---|---|
| 36 | Monitoring bundle | **PARTIAL** | Drift detection is real and substantial (`app.js:189-398`) — the free/subscriber split, dashboard deadline calendar, and annual report on top of it are not built. |
| 37 | Economic hooks | **MISSING** | No credit/metering entitlement type found. |
| 38 | Business setup roadmap | **MISSING** | Depends on the relation map + a dashboard, neither built. |
| 39 | Document updates (central subscription mechanic) | **PARTIAL** | Version history is real (`app.js:592-593`); the one-click re-render-preserving-answers update action and server-side update gating are not built — the hardest, most central piece is missing. |

## PART 10 — UPL and legal-risk shield

| Step | Title | Status | Evidence |
|---|---|---|---|
| 40 | Advisory-language hard gates | **PARTIAL** | `lint/copy_lint.py` covers 2 of the plan's categories, 6 files; missing outcome-claim/urgency categories and most surfaces (which don't exist as code yet). |
| 41 | Tone feature reframing | **N/A** | Correctly blocked upstream on Step 22. |
| 42 | Recommendation neutrality audit | **MISSING** | Depends on Step 20. |
| 43 | Interview steering ban | **PARTIAL** | `search/intake_flow.json` already runs through the advisory-phrase lint (`validate_corpus.py:504-510`); clean today, but by content, not by a dedicated steering-phrase check/test. |
| 44 | Disclaimer placement | **PARTIAL** | Disclaimer wording exists independently in 7 different files with no single canonical string or CI parity test — real drift risk. |
| 45 | Contract reader guardrails | **PARTIAL/DONE** | `contract_matcher.js` already asserts no least-bad guess on weak input (`tests/contract_matcher/test_contract_matcher.js:54-55`); guarantee-copy-specific lint coverage not confirmed. |
| 46 | Legal pages & entity protections | **DONE** | `terms.html`, `privacy.html`, `trust.html` (CA Wedge Plan Step 20). |
| 47 | UPL incident runbook | **MISSING** | `RUNBOOK_UPL.md` does not exist. |
| 48 | Records as the defense | **PARTIAL** | `audit_log` table exists and is used; no append-only-property test found. |
| 49 | Accepted-risk log | **PARTIAL** | `tools/check_accepted_disclosure.py` + `verifier/triage.jsonl`'s `"accepted"` status already function as this for *corpus* findings — reusable, not duplicate-worthy, but no equivalent exists for *product*-level risks (no attorney review, no E&O insurance, renewal/e-sign formalities). |

## PART 11 — Tests, CI gates, lint extensions

| Step | Title | Status | Evidence |
|---|---|---|---|
| 50 | Copy lint extension | **MISSING** (follows from 40) | Nothing to extend to yet — the surfaces it would cover don't exist. |
| 51 | Tests/CI additions | **MOSTLY MISSING** | All sub-items depend on Parts 4-9 features that don't exist yet. |

## PART 12 — Launch readiness

| Step | Title | Status | Evidence |
|---|---|---|---|
| 52 | Legal pages (drafts) | **PARTIAL** | Core subprocessor disclosures present; not line-by-line confirmed against the plan's full list (error-monitoring/email provider, referral disclosure, review-platform disclosure, renewal terms). |
| 53 | Launch-critical product checks | **PARTIAL** | `LAUNCH_CRITICAL_CHECKS.md` (45/45, wedge-cluster scope), `.github/workflows/backup.yml` exist. No uptime/status-page alerting, no incident runbooks anywhere (overlaps Step 47). |
| 54 | Publishable SEO pages (wedge first) | **WAIT — confirmed held** | `SEO_LAUNCH_PLAN.md` explicit "nothing published"; `build/seo/` gitignored; `tools/build_site.py` excludes it; `deploy-pages.yml` only fires on `main`/manual dispatch, and GitHub Pages isn't even switched to "Source: GitHub Actions" yet. Verified, not assumed. |
| 55 | User test and instrumentation | **PARTIAL** | `USER_TEST_PLAN.md` exists but is the old 3-5-person wedge-cluster version; the new plan's 10-15-person test, trust-signal questions, and weekly internal report script are a real, unbuilt expansion. |
| 56 | Launch-readiness review | **PARTIAL** | `LAUNCH_READINESS.md` exists (wedge-cluster scope, 2026-11-16); the new plan's pass/fail table spans systems (subscription stack, UPL shield, catalog, tone, relation map) that mostly don't exist yet, so this file needs a full rewrite once those parts are built, not just a refresh. |
| 57 | Minimal business profile (optional) | **N/A** | Correctly gated on "Steps 1-56 done," which they aren't. |
| 58 | Pilot program | **NOT STARTED** | Correctly — Part 13 is explicitly after launch readiness. |

## Bottom line

**Real, substantial infrastructure already exists** for payments/entitlements
(Step 8-9), the verify page (11), review-request emails (17), the trust/legal
pages (18, 46, 52 partial), drift detection and version history (the
substrate for 36/39), the contract reader (13, 45), and the corpus-side
advisory/steering lint (40, 43 partial). None of that needs rebuilding.

**The large majority of Parts 4-9 — the relation map, tone personalization,
drafts/templates, the retention dashboard, the catalog access model, and
most of the subscription value stack — is genuinely new product surface
that doesn't exist yet.** This is not a mislabeling or an old-plan-covered-it
situation like Part 1 and much of Part 12 turned out to be; it's real,
unbuilt work, and it's large: a dashboard, a general lifecycle/email
engine, a relation-map data model with its own review workflow, a save-as-
template feature, and a one-click document-update pipeline are each
multi-step builds in their own right.

Three owner decisions are correctly still open and held, not worked
around: **Step 7** (pricing), **Step 22** (tone system — proposal not yet
even written), **Step 54** (publish gate — confirmed nothing has leaked
live).
