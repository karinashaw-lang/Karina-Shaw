# GROUNDTRUTH MVP: COMPLETE CLAUDE BUILD INSTRUCTIONS

Saved verbatim from the owner's paste, 2026-11-19. This is the fourth
planning document this session has received (after the v1 "COMPLETE
BUILD AND REVIEW HANDOFF," the v2 "REVISED BUILD PLAN," and
`MVP_SPEC.md`), and the most complete and explicit of the four —
numbered phases with explicit WAIT-for-approval gates, a full global
rules list, and an explicit owner-task list and "do not build" list.
Treated as the current authoritative build spec unless a later
owner message says otherwise. Cross-referenced against real repo
state in a follow-up audit (see DECISIONS.md's 2026-11-19 entry for
this document) rather than executed blind, since much of Phase 0 and
large parts of Phase 1, 3, 4 and 5 were already built under the prior
three plans' own task breakdowns (CA Wedge Plan Steps 1-25, the A0-A5/
B0-B1 handoff tasks, and the just-completed per-document entitlements
rebuild) — the open question per phase is which specific asks here are
genuinely new versus already satisfied, not whether to start over.

---

(Full text as pasted by the owner follows, unedited.)

You are the engineering agent for Groundtruth, a California legal document platform where every clause shows its source. Mission: launch a paid, California-only MVP built around the single-member LLC wedge. The product never advises; it informs. The summary these instructions were written from may be stale, so confirm the repo's real state before each phase.

## GLOBAL RULES (non-negotiable, every task)
1. Inform, never advise. No copy recommends a legal course of action, assesses a user's position or document, or claims sufficiency, enforceability or outcomes.
2. Browsing, search, the interview, the live preview, source panels, the verify page and the free reader are free and need no account. Paid export needs the backend.
3. "Verified" means checked against a primary source: leginfo.legislature.ca.gov, official California codes and regulations, eCFR, govinfo, uscode.house.gov, court opinions, or agency pages. Mirrors and secondary sources never count. Record sourceClass on every citation.
4. Never mark a clause Verified or change a checkedDate unless it was actually re-verified.
5. Never auto-edit legal text from verifier output. Every change is a patch file; the owner approves the diff; then apply, re-verify, update checkedDate, and log it in the public changelog.
6. Unreachable source: mark the clause unverified, list the exact URL and question in OWNER_TODO.md, exclude it from tier promotion. Never infer a verification.
7. Before every commit run validate_corpus.py, regression.js, merge_guard.py and golden tests. Do not commit on failure.
8. Work on child branches only. Never commit to main.
9. Never commit secrets or touch config.js contents. Never store card data; store Stripe ids only. Stripe stays in test mode.
10. No destructive or irreversible action (DROP, DELETE, force-push, deploy, publish, live Stripe, real charges) without showing the exact action and waiting for the owner's explicit yes.
11. All paywall enforcement is server-side. Client-side gating is cosmetic.
12. Every number or claim on a public page is generated from corpus or verifier data, never typed by hand.
13. Correctness beats breadth. Unverifiable content is labeled or removed, never shipped as Verified.
14. Where a filing obligation, deadline, fee or penalty appears in any copy or page (annual report, franchise tax, BOI, Statement of Information), take it from the agency's own site, record the check date, and confirm current status first. Never write these from memory.
15. Ambiguity: choose the most conservative option and log it in DECISIONS.md.
16. Report after every task: task id, files changed, checks run and results, skipped items and why, next task.

---

## PHASE 0: GROUND TRUTH BEFORE ANYTHING ELSE
0.1 Re-baseline. Re-measure documents, clauses, citations, tiers, verifier coverage (clauses adversarially checked out of authority clauses), open findings by severity, unverified clauses, and clauses on mirror or secondary sources. Write MVP_BASELINE.md and flag any mismatch with BUILD_STATUS.
0.2 Source-access check. For every cited domain, test whether your tools can fetch it; test official alternates for blocked primaries. Write review/SOURCE_BLOCKS.md with exact URLs and questions for the owner to check by hand.
0.3 Launch set. Propose the launch set: the 7 wedge documents plus the strongest-authority formation documents (about 50 total for Wave 1). Give reasoning. WAIT for owner approval. Only launch-set documents are published, promoted and sold.
0.4 Cost gate. Estimate cost, tool calls and wall-clock time for the verifier run on the launch set. WAIT for owner approval before running it.
0.5 Owner checklist. Write OWNER_TODO.md (Section: OWNER TASKS below) so the owner can start the slow items now.

## PHASE 1: CORPUS VERIFICATION (do first, thoroughly)
1.1 Wedge confirmation. For the 7 wedge documents (California single-member LLC formation): every authority clause verified against California primary sources (leginfo, Secretary of State, Franchise Tax Board), with federal sources used only for federal pieces; every authority clause adversarially checked; zero open blockers or majors; triage the open minors touching the wedge.
1.2 Three-level clause labels. Cited (citation, quote, check date), Verified (primary-source check passed), Adversarially checked (survived the verifier with no open findings). The badge shows the level, the check date and a one-line plain explanation. Update methodology.html.
1.3 sourceClass. Backfill on all citations by domain (primary-official, court-opinion, agency, mirror, secondary). List mirror and secondary clauses in verifier/NON_PRIMARY_SOURCES.md and queue them for primary-source re-verification.
1.4 Specific re-verifications from primary sources: the small-claims CCP sections, the small-claims judgment-enforcement clause, and the name-change SB 59 / AB 1084 clause. Resolve the AI Transparency Act item (section 22757.2 and SB 1000 changes) from leginfo; if unreachable, list the URLs for the owner and keep those clauses unverified.
1.5 Launch-set verification. After the cost gate is approved, run the adversarial verifier in a fresh context per clause on every launch-set authority clause. Test: citation supports this specific claim; quote matches the live source; no silent overclaiming; correct and disclosed jurisdiction; not superseded; thresholds, amounts and deadlines correct; no contradiction within the document; no advisory language. Also run drafting clauses for advisory language, contradiction, jurisdiction disclosure and embedded legal claims that should be authority clauses. Each finding needs a direct source quote, severity (blocker, major, minor), clause id, evidence and a patch file. Triage blockers, then majors, then minors; apply only owner-approved patches, then re-verify and log.
1.6 Research files. For each launch-set document write review/documents/<docId>.md: governing California law, required elements the document omits (as sourced findings, never advice), provisions California restricts or voids, federal overlay, changes in the last 24 months and anything effective next January 1 or July 1, scope notes (situations it does not fit), and whether interview questions capture the facts the clauses depend on.
1.7 Tiers. Tier A requires at least one authority clause, all adversarially checked, zero open findings, a golden fixture per branch, fresh check dates and an accessibility pass. Documents with no authority clauses are labeled "Drafting only (no legal authority claimed)" and are never Tier A. Recompute tiers and update tiering.py, validate_corpus.py and the picker.
1.8 Produce verifier/LAUNCH_SET_REPORT.md: finding rates by severity and failure type, unresolved items, clauses left unverified and why.

## PHASE 2: BUY FLOW
2.1 Pricing decision. Write PRICING_OPTIONS.md: one-time per-document price, with and without an optional paid reminder add-on, and what is paywalled versus free (final PDF, DOCX, plain text, JSON, sources appendix). Propose how many edits and re-exports a purchase includes. Leave prices as placeholders in config/pricing.json. WAIT for the owner's decision. Record the no-guest-checkout decision in DECISIONS.md.
2.2 Supabase migrations (not manual SQL): orders, order_items, entitlements (user_id, type, document_id, source id, status, starts_at, ends_at). RLS on auth.uid() with adversarial tests on every table (a second user cannot select, insert, update or delete). Run get_advisors after each migration.
2.3 Edge function release-document: verify session and entitlement, render PDF and DOCX server-side from the same clause set as the client, return a short-lived signed URL, write audit_log (document id, corpus version, clause ids with check dates, timestamp, output hash; never field values).
2.4 Golden text-parity tests on server output. Remove or watermark client-side print, JSON and text paths for paid documents. Run and record a manual client-bypass checklist.
2.5 Stripe, test mode only. Edge-function Checkout, products generated from config/pricing.json. Webhooks with signature verification and idempotency: checkout.session.completed, invoice.paid, invoice.payment_failed, customer.subscription.updated and deleted, charge.refunded, charge.dispute.created. Written refund policy, admin refund action, entitlement revocation, dispute handling, customer portal, receipts, order history. Rate limits, download limits, anomaly alerts. Evaluate Stripe Tax and log sales-tax questions for the owner's accountant in DECISIONS.md without asserting conclusions. End-to-end test-mode tests: purchase, failed payment, refund, cancel, duplicate webhook replay, dispute, unauthorized release.
2.6 California Automatic Renewal Law. If any subscription or recurring-charge copy exists anywhere (including a paid reminder add-on), implement: clear pre-purchase terms, affirmative consent, acknowledgment email, cancellation as easy as signup. Read the statute from leginfo, cite it in DECISIONS.md, flag the copy for attorney review.

## PHASE 3: TRUST SURFACE AND HOME
3.1 Source panel beside every clause: source, verbatim quote, sourceClass, check date, level, known gaps; expandable inline on phones. Optional plain-language "why this clause is here" line, shown only where one exists.
3.2 Verify page. Every paid export carries a document id, a QR code and a footer link to /verify/<id>. The page shows title, generated-on date, corpus version, each clause id with level and check date, and whether any clause has changed since generation (facts only, never whether the user must act). Store only id, document id, corpus hash, clause ids with check dates, timestamp and output hash; no user input. Use unguessable ids and rate limits, and add an adversarial test that no user data is exposed and ids cannot be enumerated.
3.3 Trust page. /trust generated and rebuilt in CI from corpus and verifier data (documents and clauses in the launch set, share at each verification level, defects found and fixed with changelog links, link to methodology.html). CI fails if page text and data disagree.
3.4 Home page. A short interactive demo (open one clause to its source), plain "what this is and isn't," price up front. Write three headline options in HEADLINES.md for the owner; none may imply advice, guaranteed outcomes or enforceability; avoid "AI-powered" claims.
3.5 Paid experience. The full preview and sources are free before any payment prompt; the prompt appears at export. A "what you get" panel: formats, edits included, download window, refund policy.

## PHASE 4: FREE VERIFY TOOL AND SEO (ship with the wedge)
4.1 Verify tool, v1. A free tool with no account, running in the browser: (a) the resemblance reader ("law this passage resembles," with sources and check dates, "no close match found" below threshold), and (b) a single-citation lookup showing the current statute text and its check date. It never says what a document "holds," "is missing" or "is superseded." Re-run the 55-case evaluation with no regression from 78% top-1 and 98% top-3. Pasted text stays in the browser unless the owner approves in writing. A server-side full-document checker is deferred until the owner's attorney approves its wording and a privacy design.
4.2 SEO Wave 1 (about 50 pages): the 7 wedge documents plus strongest-authority formation documents, ONLY after Phase 1 passes. Each page: unique title and description, canonical URL, schema.org markup, sitemap entry, visible check date, jurisdiction notice, price or start-free call to action, no advisory copy. Intent mix: document intent plus obligation intent (annual report or Statement of Information deadline, FTB minimum franchise tax, BOI). Obligation pages follow rule 14: confirm current status, fees and penalty amounts from the agency's own site and record the check date. Re-score pages for uniqueness and similarity before publishing.
4.3 Publish Wave 1 before the paid switch, because distribution is not optional. Write LAUNCH_PLAN.md with deploy steps, Search Console checks (indexing, thin content, crawl errors) and criteria for releasing further pages. Do NOT publish until the owner says go.

## PHASE 5: LEGAL MINIMUM AND LAUNCH GATES
5.1 Draft Terms, Privacy, refund policy, storage notice and data inventory covering Stripe, Supabase, hosting, error monitoring and the email provider, plus retention, deletion, the verify page and CCPA/CPRA rights. Mark every page a draft for attorney review; leave the contact email as a clearly marked placeholder.
5.2 A "what this is and isn't" notice and a jurisdiction notice on every export and at checkout. Run the copy lint over all new text.
5.3 Analytics on trust moments only: demo-clause opens, source-panel expansions, verify-page scans, verify-tool uses, demo-to-interview conversion, paywall-to-checkout conversion, highest-abandonment step. No field values. Opt-out honored.
5.4 Pre-commit and pre-push hooks plus CI: block commits to main; fail any legal-text change lacking an approved patch id in the commit message. Test with a deliberately violating commit.
5.5 Launch-critical checks. Run every launch-set document end to end in a real browser (desktop and phone): interview, test-mode purchase, PDF and DOCX, verify page. Accessibility: 0 serious or critical. Performance budgets green. Staging mirrors production; backups verified with a restore drill; uptime and error alerting; status page. Freshness schedule running: weekly law-change watcher (flags only, never edits) and January and July citation rechecks. Write runbooks for a legal-content error (takedown, banner on affected documents, changelog entry), a payment incident and a data incident.
5.6 User test plan. Write USER_TEST_PLAN.md for 5 to 10 people about to form an LLC, each completing one document in test mode, recording where they stall and what they say about the sources panel and verify page, plus willingness to pay. Build an internal report script (starts, completions, abandonment step, paywall-to-checkout rate, verify-page opens).
5.7 LAUNCH_READINESS.md: pass/fail table for verifier coverage and open findings, honest labels, CI, staging and backups, all test-mode payment flows, no card data stored, paywall bypass checks, verify and trust page checks, legal pages and renewal copy approved, accessibility, performance, monitoring, owner items, and the live-mode switch procedure with a rollback. List the top five launch risks with mitigations. Update BUILD_STATUS.

---

## OWNER TASKS (write these into OWNER_TODO.md; do not attempt them)
1. Approve the launch set (0.3), the verifier cost estimate (0.4) and every blocker and major patch.
2. Choose the price, the one-time versus add-on model and the refund policy (2.1); approve any renewal copy.
3. Create a Stripe account, complete business verification, link a business bank account and supply test-mode keys. Live keys only at launch, set by the owner.
4. Accountant input on sales tax and the entity receiving payments.
5. Domain, hosting, DNS and Search Console.
6. A real contact email and an email provider for receipts.
7. Three CI secrets: SUPABASE_ACCESS_TOKEN, SUPABASE_STAGING_PROJECT_REF, SUPABASE_PROD_PROJECT_REF.
8. Turn on Supabase leaked-password protection; approve the two RLS performance fixes and the scratch-table drop (exact SQL provided, run only on approval).
9. Check SOURCE_BLOCKS items by hand or grant access.
10. Attorney review of the legal pages, checkout and renewal copy, the "what this is and isn't" notice, verify and trust page wording, and the verify tool wording; and a spot audit of about 150 clauses (stratified toward high-risk categories and prior findings), with the agreement rate recorded. Until the audit is done, public copy says checks are automated and source-based and does not mention attorney review.
11. Choose the home page headline.
12. Final go for publishing Wave 1 and final go for switching Stripe to live mode.

## DEFINITION OF DONE
- Every launch-set authority clause has a recorded adversarial result; every launch document has a research file; zero open blockers or majors; honest labels on every clause; CI enforces freshness and the label rule.
- A stranger can: find a Wave 1 page, open the home demo, complete the interview free, see sources beside every clause, buy in test mode, receive a stamped export, scan the QR, and audit it.
- Wave 1 is live and indexed before any payment prompt is enabled in production.
- All test-mode payment flows pass; live mode is switched on only by the owner.
- LAUNCH_READINESS.md shows all pass, or accepted risks recorded.

## DO NOT BUILD (out of MVP scope)
Law-change email alerts, compliance calendar, subscriptions beyond the optional add-on decision, handbook maintenance, attorney referral, bug bounty, verify API, freshness badges, guest checkout, Spanish, other states, documents beyond the launch set, server-side full-document checking, admin console, mobile app.
