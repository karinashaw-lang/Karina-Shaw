# Build status

Last updated: 2026-11-20, against branch `claude/new-session-palh5c`
(CA Wedge Plan Steps 1-25 complete; the A0-A5/B0-B1 full-corpus
completion tasks, the per-document entitlements/Stripe rebuild, and
the `MVP_BUILD_INSTRUCTIONS.md` audit all complete or in progress on
top of that — see `DECISIONS.md` and `MVP_INSTRUCTIONS_STATUS.md`).
This reflects the actual state of the repository right now — every
number below was measured by running the project's own tools today,
not recalled or estimated from an earlier phase, and is reproducible
by running the same command. The Tier A and open-findings numbers in
this section were specifically corrected today (2026-11-20) after
`MVP_INSTRUCTIONS_STATUS.md`'s re-baseline pass caught them stale
against the 2026-11-16 version of this file; everything else below
this point in the file has not been independently re-checked in this
pass and may still reflect that date — treat any claim not updated
above as needing its own re-verification before being relied on.

**Why this file needed a full rewrite, not an incremental edit:** the
previous version (dated 2026-11-03) predated the entire CA Wedge Plan
(California single-member LLC formation as the go-to-market wedge —
7 documents, no e-filing, no filing-on-behalf, no registered-agent
service, no attorney marketplace). Several of its claims had gone
stale without anyone updating them as Steps 12-23 landed — most
visibly, it still said "Payments... skipped, no Stripe credentials
exist," which stopped being true once Steps 7-9 (an earlier part of
this same plan) built real Stripe test-mode checkout, webhook
handling, and entitlement gating. Rather than patch that one line,
this file is rewritten end to end so every claim in it is checked
against today's code and tools, the same discipline the rest of this
project holds its legal content to.

## Phase completion

Every phase in `MASTER_BUILD_PLAN.md` (0 through 11) has real,
working, tested implementation behind it; the CA Wedge Plan (Steps
1-23) builds the paid, single-wedge launch on top of that foundation.
Reasoning for every judgment call is in `DECISIONS.md`, architecture
in `ARCHITECTURE.md`.

**Fully built and gate-checked in CI on every push:** schema-driven
interview engine and clause-level conditionals; computed quality
tiers and promotion reporting; the adversarial verifier, triage
workflow, per-category staleness thresholds, the law-change watcher,
and citation-recheck integration; plain-language search, intake,
related-document suggestions, and picker performance; native
PDF/.docx export, document lifecycle/versioning, and filing packets;
the Supabase backend, audit trail, account basics, e-signature/
sharing, **and real Stripe test-mode subscription checkout, webhook
handling, and entitlement gating** (see Revenue, below, for exactly
what's still owner-gated); privacy-friendly analytics (now including
Step 23's wedge-callout and referral-link click events), in-app
feedback, and programmatic SEO; accessibility, performance budgets,
error monitoring, a real staging environment, a security review,
privacy/legal-copy pages (Steps 18/20), and backup-and-restore
automation; contract-reader quality and a cross-document consistency
test suite. CA Wedge Plan additions: a live public `/trust` page
(Step 18); a wedge-focused home-page callout and front-door routing
(Steps 13/19); registered-agent/attorney-review referral links with a
plain disclosure (Step 16); filing next-steps reminders for Articles
of Incorporation and the Statement of Information (Steps 12/15);
wedge-first SEO staging (Step 22); and the user-test plan plus the two
new analytics event types above (Step 23).

**Deliberately not built, each with reasoning recorded in
`DECISIONS.md`:**
- Password-based sign-in, multi-language support, a mobile app, and
  admin tooling — `ROADMAP.md`'s job to scope, not build.
- A registered-agent filing service, e-filing, filing-on-behalf, or an
  attorney marketplace — explicitly out of scope for this wedge by the
  plan's own scope lock, not a gap.
- Step 25 (optional minimal business profile) — not started; see its
  own section below.

**Open, handed-off items that need the project owner, not more
engineering from this session** (the authoritative, current list is
`OWNER_TODO.md`; summarized here):
1. Three CI repository secrets (`SUPABASE_ACCESS_TOKEN`,
   `SUPABASE_STAGING_PROJECT_REF`, `SUPABASE_PROD_PROJECT_REF`) so
   `deploy-staging`/`backup.yml` stop being no-ops.
2. Enable Supabase's "leaked password protection" toggle (dashboard-
   only; confirmed still off via `get_advisors(type:"security")` today
   — see Security, below).
3. Two RLS/performance SQL fixes, blocked by a destructive-SQL
   confirmation gate this session never receives; exact SQL is in
   `OWNER_TODO.md`.
4. A real contact email, replacing the placeholder in
   `privacy.html`/`terms.html`.
5. Attorney review of the privacy/terms/storage-notice pages, the
   contract-reader wording, the filing next-steps copy, and the
   referral-disclosure/review-email sections.
6. Real referral partners for `config/referrals.json` (both slots
   still `enabled: false`).
7. Six Supabase edge function secrets plus a cron schedule, so
   `send-review-requests` (Step 17) can actually send anything.
8. Approval (or amendment) of `PRICING_STEP7_GUARANTEE_PROPOSAL.md`'s
   30-day guarantee / Automatic Renewal Law copy — `config/
   pricing.json`'s prices and refund policy are still `null`
   placeholders until this happens, by design (Global Rule 13: never
   hand-type a number a tool should generate, and a price is exactly
   that kind of number here — a business decision, not a computed
   fact).

Two WAIT gates from earlier in the plan remain correctly un-crossed,
not forgotten: Step 7's guarantee copy (item 8 above) and Step 22's
"do not publish" gate — `build/seo/` stays gitignored and
`config/seo.json`'s `baseUrl` is still `""`, confirmed again today.

## Mission metrics (as defined in `MASTER_BUILD_PLAN.md`)

### 1. Trust

- **Tier A or B:** 351 of 741 documents (47.4%) — **29** at Tier A, 322
  at Tier B (9 drafting-only, correctly never Tier A).
  `python3 tools/tiering.py` to reproduce (regenerated 2026-11-20).
  Tier A requires a real per-document adversarial-verifier signal
  (every authority clause checked, no open finding of any severity)
  and a real per-document accessibility signal (0 serious/critical
  axe-core violations, both themes) on top of everything Tier B
  requires. **This is a correction, not a new measurement:** the
  prior version of this file (dated 2026-11-16) still said "15 at
  Tier A" — stale since the A5 bucket-verification work completed
  2026-11-18/19 (re-sourcing 207 mirror citations to primary/agency
  sources, fixing 15+9 real content findings, verifying the corpus's
  last 2 fully-unverified clauses), which is exactly the kind of
  mismatch `MVP_BASELINE.md`/`MVP_INSTRUCTIONS_STATUS.md`'s 2026-11-20
  re-baseline pass exists to catch. All 7 of the wedge-cluster
  documents are Tier A or B, unchanged by this correction.
- **Verified clauses within staleness thresholds:** confirmed again
  today via `python3 tools/validate_corpus.py` — 0 clauses newly flagged
  fatal or warn by the per-category staleness thresholds.
- **Open verifier findings by severity:** 0 blocker, **2 major**, 126
  minor open (329 total findings; 88 fixed, 113 accepted as real but
  not auto-edited, 0 rejected). `python3 verifier/triage.py --summary`
  to reproduce. **Both open majors are outside the approved 128-
  document launch set** (`compsoftexempt_current_rate` and
  `licprofexempt_physician_current_published_rate`, on two standalone
  employment-exemption info sheets not in `LAUNCH_SET_PROPOSAL.md`) —
  stale California DIR-published pay-rate thresholds (2025/2026
  figures that DIR has since adjusted), a real, legitimate, non-
  launch-blocking gap logged for a future corpus-wide pass, not
  silently dropped from this count the way the prior version of this
  file's "0 major" line had been. Within the launch set itself, A3/A5
  confirmed 0 open blocker or major — unchanged. The verifier
  checkpoint has not yet reached every authority clause in the full
  741-document corpus — this is why most Tier B documents outside the
  launch set are still blocked from Tier A by "not every authority
  clause is adversarially checked," not by any structural blocker.
- **A real, pre-existing accessibility bug fixed today while verifying
  Step 23:** `tier-A` pill text failed WCAG color contrast in both
  themes (a hardcoded hex color never made theme-aware, unlike the
  other two tier pills) — fixed by reusing the existing
  `--accent-strong`/`--accent-strong-ink` tokens; `node tests/
  accessibility/axe_check.js` now reports 0 serious/critical
  violations across every screen and the 50-document sample, both
  themes. See `DECISIONS.md`'s Step 23 entry.

### 2. Breadth

- **Documents per category:** 741 total across 9 categories — 8 of
  them level at 93-94 each, plus a 9th, "Consumer & Civil Court," at 2
  (added since the last count; not yet built out to match the others
  in depth — a known, honest gap, not a defect).
- **Share rendering through the full interview engine:** 741/741
  (100%). `node tools/wizard_regression.js` to reproduce.
- **Golden-fixture match:** 741/741 documents match their golden
  fixture exactly. `node tests/golden/golden.js` to reproduce.

### 3. Experience

The analytics (8.1) and feedback (8.2) pipelines are built, live in
both Supabase projects, and wired into the real app — `account.js`
wraps the wizard/output/search/export functions to fire real
`trackEvent` calls, and Step 23 added two more event types
(`wedge_link_clicked`, `referral_link_clicked`) wired into the wedge
callout and referral links specifically. `tools/analytics_report.js`
now reports on all of: completion/abandonment per document and step,
top no-result searches, slowest screens, and the two new click
events. This product still has no real users, so `analytics_events`
still holds zero real rows in production — completion rate,
abandonment point, and the wedge-callout/referral click-through rates
all still require real usage this session has no way to generate.
`USER_TEST_PLAN.md` (Step 23) is a concrete 6-task script for the
project owner to run with 3-5 real people in the meantime, centered
on the wedge cluster specifically.

### 4. Freshness

The law-change watcher has run one real scan window (2026-07-01 to
2026-10-01 against the 100 citations scanned so far; see
`watcher/reports/2026-10-01.md`), which found and the project already
resolved one real change (the AI Transparency Act's detection-tool
requirement, Cal. Bus. & Prof. Code § 22757.2 — see `DECISIONS.md`'s
2026-11-03 entry). No new scan window has run since; this remains
honestly reported as the current state rather than re-asserted as
ongoing.

### 5. Reach

**Not yet measurable; nothing is published.** `tools/
generate_seo_pages.py` produces up to 840 programmatic pages (741
documents + 99 already-verified search questions); `tools/
validate_seo_pages.py` checks them for uniqueness and thinness — both
pass in CI on every push. The output (`build/seo/`) is gitignored and
has never been published to a live, indexed site, per Step 22's WAIT
gate. `SEO_LAUNCH_PLAN.md` (rewritten in Step 22) lays out a 4-stage
rollout keyed to tier and open-finding severity, with a **wedge-first**
override added in Step 22 so the 7-document wedge cluster can launch
at stage 1 regardless of the plain tier split:

| Stage | Docs indexable | Question pages | Total |
| --- | --- | --- | --- |
| 1 (plain) | 15 | 0 | 15 |
| 1 (`--wedge-first`) | 19 | 1 | 20 |
| 2 | 275 | 38 | 313 |
| 3 | 329 | 48 | 377 |
| 4 (everything) | 741 | 99 | 840 |

`SEO_LAUNCH_PLAN.md`'s rollout recommendation leads with
`--stage 1 --wedge-first`. None of this is published — the plan also
lists exactly what the project owner still needs to decide (domain,
hosting, deploy path, Search Console) before any stage could go live.

### 6. Revenue

**Built, but not yet live.** Steps 7-9 built real Stripe test-mode
subscription checkout (`supabase/functions/` includes a checkout-
session function and `stripe-webhook`), webhook-driven entitlement
updates (`has_active_entitlement()`, gating exports/cloud-save/
e-signature/sharing — Global Rule 10, all server-side), and the
client-side wiring in `account.js` (test mode only, per Global Rule
9 — no card data is ever stored by this project). What's still
missing is entirely an owner decision, not engineering: every price
field in `config/pricing.json` is still `null` (the owner chose the
subscription model on 2026-11-10 but hasn't set a number), and the
30-day guarantee / Automatic Renewal Law copy
(`PRICING_STEP7_GUARANTEE_PROPOSAL.md`) is still unapproved — see
`OWNER_TODO.md` item 8. Nothing charges a real person anything yet.

## Security and performance, checked live today

`get_advisors(type:"security")` and `get_advisors(type:"performance")`
against the production project (`impurvwwjdgurbjbnydu`) show no
finding beyond what's already documented and either accepted by
design or already tracked as an owner action:
- `rate_limits` has RLS enabled with zero policies **by design** (see
  `DECISIONS.md` around its migration) — not a gap.
- `has_active_entitlement()` being callable via RPC by signed-in users
  as `SECURITY DEFINER` is the intended, already-reasoned-through
  design (see `DECISIONS.md`) — it's the one function that needs to
  check entitlement status across row-level-security boundaries.
- Leaked-password protection is still disabled (`OWNER_TODO.md` item
  2) and the two `agreements`/`feedback` RLS/performance findings are
  still open (`OWNER_TODO.md` item 3) — both already tracked, neither
  new.
- The lone unaddressed item not yet in `OWNER_TODO.md`: a leftover
  `public._scratch_probe` table with RLS enabled and no policy —
  already noted as a parenthetical in `OWNER_TODO.md` item 3's "drop
  whenever convenient" aside, not a live risk (2 rows, no real data).

`node tests/performance/performance_budget.js` passes today with
headroom on every budget: 6.0MB initial transfer (budget 20MB), 1.9s
time-to-interactive (budget 8s), 2.5ms first render for the default
60-card page (budget 50ms), max 1.1ms search across 10 queries (budget
100ms), 1.2s for a 20-page contract-reader paste (budget 5s).

## How to verify any of this yourself

Every number above came from one of these commands, run against this
exact commit:

```
python3 tools/validate_corpus.py
python3 tools/tiering.py
python3 verifier/triage.py --summary
node tools/wizard_regression.js
node tests/golden/golden.js
node tests/accessibility/axe_check.js
node tests/performance/performance_budget.js
cat watcher/reports/2026-10-01.md
cat SEO_LAUNCH_PLAN.md
```

The full CI gate suite (`.github/workflows/ci.yml`) runs all of the
above plus the complete browser regression/golden/accessibility/
performance/security suite on every push to this branch.
