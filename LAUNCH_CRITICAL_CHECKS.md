# Launch-critical product checks — CA Wedge Plan Step 21

A real, end-to-end Playwright pass through the wedge-cluster user journey and the
site's own cross-navigation — not a reimplementation of the existing CI gates
(`regression.js`, `wizard_regression.js`, `golden.js`, `axe_check.js`, which already
run against all 741 documents on every push), but the specific, product-level
question those don't ask: *does the actual path a paying user takes — picker →
wedge document → wizard → output → export → save → reload — work end to end,
and does every link on the site actually go somewhere real?* Run as a throwaway
script against this exact commit, not committed itself (same convention as every
other one-off verification script in this project's history — see DECISIONS.md).

**45/45 checks passed, 0 failures.**

## What was checked

1. **Every topbar nav item reaches a real screen or page with no new console
   error**: Inbox, Relationships, My Documents, Which document do I need?,
   Account (in-app screens); Methodology, Trust, Changelog, Privacy Policy,
   Terms of Service, Cookie/Storage notice (standalone pages — each confirmed
   to return HTTP 200, not just "a page loaded").
2. **All 7 wedge-cluster documents** (`llc_articles_of_organization`,
   `ein_info_sheet`, `llc_operating_agreement_single_member`,
   `llc_default_operating_rules_info_sheet`,
   `agent_for_service_of_process_info_sheet`, `statement_of_information`,
   `llc_annual_fee_info_sheet`) complete the wizard → output path with at
   least one rendered clause block and zero raw `{{field}}` placeholders left
   unsubstituted, and raise no new console error.
3. **The filing/next-steps section actually shows** for the two wedge
   documents that have a real entry in `filing/next_steps.json`
   (`llc_articles_of_organization`, `statement_of_information`) — confirms
   Steps 12/15's work is reachable from the wedge flow itself, not just
   covered in isolation by `tests/filing/next_steps.js`.
4. **All four export formats** (plain text, PDF document definition, .docx,
   JSON) build without throwing for a real wedge document.
5. **Library persistence survives a real page reload**: saved a document,
   reloaded the page from scratch, confirmed the entry is still there by id
   (not just that `localStorage` was written, but that a fresh page load
   reads it back correctly).
6. **Referral section degrades safely with nothing configured**: with
   `config/referrals.json`'s real, as-shipped (both-disabled) state, the
   output screen's referral section stays hidden rather than rendering
   broken or partial content.

## What this does not cover, and why

- **The actual Stripe checkout flow and server-side entitlement gating.**
  Same sandbox-egress limitation already disclosed for every edge function
  in this project (`stripe-webhook`, `create-checkout-session`, `send-review-requests`,
  etc. — see DECISIONS.md) and for `tests/auth_roundtrip.js`: this sandbox
  cannot reach the live Supabase project, and no real Stripe keys exist yet
  regardless (test-mode keys are still an open `OWNER_TODO.md` item). The
  RLS policies that actually enforce the paywall were verified at the
  database level when they were written (Step 8's `get_advisors` checks),
  not re-verified here.
- **A second human's judgment on copy, pricing, or design** — this is a
  mechanical pass (does it run, does it render, does it persist), not a
  substitute for Step 23's user test or the owner's own review.

## Result

No bugs found; no code changes made as a result of this step. Recorded here
so "launch-critical checks" has a real, reproducible answer on file, not an
unstated assumption that everything built in Steps 1–20 actually holds
together as one user journey.
