# Launch readiness — CA Wedge Plan Step 24

A status report, not a recommendation to launch or not — consistent
with this project's own first rule ("inform, never advise"), that
applies to the project's own operators as much as to its users. Every
claim below is checked against today's code and live tools
(2026-11-16), the same way `BUILD_STATUS.md` (refreshed alongside
this file) is. Where something is unverified or owner-gated, it says
so plainly rather than assuming it will get done.

**Scope of "launch" here:** the single wedge this plan committed to —
California single-member LLC formation, the 7-document wedge cluster,
paid via subscription, no e-filing, no filing-on-behalf, no
registered-agent service, no attorney marketplace. This is not a
review of the whole 741-document corpus being launch-ready at once;
the wedge is what Steps 12-23 were built around, and it's the only
part of the product this review treats as a near-term launch
candidate.

## 1. The wedge cluster itself: ready

All 7 wedge documents are Tier A or B (none Tier C) as of Step 22's
work — verified again today via `python3 tools/tiering.py`. The 5 that
were Tier C as recently as the start of Step 19 were promoted through
real fixes (missing `whyWeAsk` text; primary-source re-verification of
mirror-sourced citations against eCFR.gov/govinfo.gov), not a
loosened bar. The wedge cluster renders end to end
(`node tools/wizard_regression.js`, `node tests/golden/golden.js`:
741/741 including all 7 wedge documents), and the home-page wedge
callout (Step 19) and filing next-steps reminders (Steps 12/15) are
both live in `index.html`/`app.js`.

**Accessibility:** `node tests/accessibility/axe_check.js` passes
clean today — 0 serious/critical violations across every screen
(including the picker screen the wedge callout lives on) and a
50-document sample, both themes. One real, pre-existing contrast bug
on the Tier A pill was found and fixed during this review's own gate
run (see `DECISIONS.md`'s Step 23 entry) — not a wedge-specific issue,
but it sat on the same screen the wedge callout is on, so it's worth
naming here specifically.

**Performance:** `node tests/performance/performance_budget.js`
passes with comfortable headroom on every budget (see `BUILD_STATUS.md`
for the exact numbers).

## 2. What's genuinely blocking a real, paid launch (owner-only)

Everything in this section needs a human decision or credential this
session cannot supply — not more engineering. All are tracked in full
detail in `OWNER_TODO.md`; this is the subset that specifically blocks
*charging anyone money* for the wedge:

- **No price exists.** `config/pricing.json`'s `monthlyPriceUsd`/
  `annualPriceUsd` are still `null`. The Stripe integration itself
  (checkout session creation, webhook, entitlement gating) is real and
  working in test mode — see `BUILD_STATUS.md`'s Revenue section —
  but there is nothing to check out *for* yet.
- **No approved guarantee/renewal copy.**
  `PRICING_STEP7_GUARANTEE_PROPOSAL.md` (the 30-day refund window plus
  California's Automatic Renewal Law disclosure/acknowledgment
  language) is still sitting unapproved. `terms.html`'s "Payments"
  section says plainly that this is pending rather than inventing
  numbers. Charging a real subscription without this in place would
  be a real legal-compliance gap, not just an unfinished page.
- **No real contact email.** `privacy.html`/`terms.html` still carry
  a literal `[... to be added before this page is published]`
  placeholder.
- **No attorney has reviewed anything.** Not the privacy/terms/
  storage-notice pages, not the contract-reader wording, not the
  filing next-steps copy, not the two Step 16/17 sections (referral
  disclosure, review-request emails) that touch advertising and
  consumer-protection law this project hasn't needed legal eyes on
  before. None of this is blocked on more engineering — it's ready
  for a reviewer exactly as it stands.
- **Leaked-password protection is still off** in Supabase Auth
  (dashboard-only toggle, confirmed still disabled via
  `get_advisors(type:"security")` today). Low real-world exposure
  today (this product uses passwordless magic-link sign-in, not
  passwords), but it's a one-click fix sitting open.
- **Two RLS/performance SQL fixes are still open** (`OWNER_TODO.md`
  item 3) — no behavior change once applied, blocked only by a
  destructive-SQL confirmation gate this session never receives.

None of these six are "almost done" from an engineering standpoint —
they are, by design, waiting on the one person who can actually make
each call.

## 3. What's built but intentionally inert until the owner acts

Two more pieces are fully built and tested, but deliberately produce
no real-world effect yet, by the same "never invent a business fact"
discipline as pricing:

- **Referral links** (Step 16) — `config/referrals.json`'s two slots
  (`registeredAgent`, `attorneyReview`) are both `enabled: false`.
  Nothing shows on screen until the owner picks a real partner and
  flips the flag (`OWNER_TODO.md` item 6).
- **Review-request emails** (Step 17) — the `send-review-requests`
  edge function is deployed and correct, but refuses to send anything
  until all six of its required secrets exist, including the
  CAN-SPAM-mandated mailing address (`OWNER_TODO.md` item 7).

Neither blocks a launch on its own — the wedge works fully without
either — but both are worth flipping on relatively early, since the
referral links and review emails are part of the business model this
plan was built around, not an afterthought.

## 4. Reach: deliberately not live yet

`build/seo/` stays gitignored and `config/seo.json`'s `baseUrl` is
still `""` — Step 22's "do not publish" WAIT gate, confirmed still
uncrossed today. `SEO_LAUNCH_PLAN.md` recommends `--stage 1
--wedge-first` (20 pages: the wedge cluster plus 15 unrelated Tier A
documents) as the first real publish, once the owner has a domain,
hosting, and Search Console set up — none of which exists yet. This
is not a launch blocker for the product itself (the app works and is
reachable by anyone with the URL today); it only blocks organic
search traffic, which this plan always treated as a later step than
the product being usable.

## 5. Measurement: ready to observe a real launch

Step 23 wired up `wedge_link_clicked` and `referral_link_clicked`
analytics events specifically so the two open questions above (does
the wedge callout get used, do referral links get clicked once
enabled) become measurable the moment there's real traffic, not just
observable in a small user-test session. `tools/analytics_report.js`
already reports on both. `USER_TEST_PLAN.md` is ready to run with 3-5
real people today, independent of any of the owner-gated items above
— it doesn't need a live price or a signed-off guarantee to be useful,
and running it now (rather than waiting for every item above to clear)
would surface product-level problems earlier.

## 6. Step 25 (optional minimal business profile) — not started

This step is explicitly marked optional in the plan, and the exact
scope text for it isn't recoverable in this session's local copy of
the plan (a prior-context detail, not a repository file). Per Global
Rule 15 (pick the most conservative option on ambiguity, log it, keep
going): this session is treating "optional" as license to leave it
undone rather than guess at unspecified scope and build something the
owner didn't ask for. If the owner wants this step, it needs either
the original plan text or a fresh, explicit scope from the owner —
logged here rather than silently skipped.

## Bottom line

The wedge cluster — the actual product — is done: correct, accessible,
performant, and instrumented. What stands between this and a real,
paid launch is six owner-only items (list in section 2), none of
which need more code. The two inert-but-built pieces (referrals,
review emails) and the SEO publish are each independently switchable
whenever the owner is ready for them, in any order, without touching
the wedge cluster itself.
