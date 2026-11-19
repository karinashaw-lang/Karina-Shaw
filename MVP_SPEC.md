# GROUNDTRUTH — MVP SPEC

Received verbatim from the owner, 2026-11-19. Saved as a durable
reference file (not just conversation text that could be lost to
context compaction) so every future session can check real repo state
against it directly, the way `MVP_SPEC_STATUS.md` (companion file)
does, rather than relying on anyone's memory of what it said.

This is the third planning document this build has received (after
the original v1 handoff and the v2 revised build plan) and reads as
the authoritative, consolidated scope for what "MVP done" means —
narrower than v2 in places (compliance calendar and the subscription
tier are explicitly deferred to Phase 5+ here, where v2 made them
Phase 2's centerpiece) and renames/reframes v1's "free contract
reader" as a more fully-specified "Verify-anything tool" (Section 5).
Where this spec conflicts with v1 or v2, treat this one as current
unless the owner says otherwise.

---

## 1. Wedge documents (the product core)

- 7 documents: the California single-member LLC formation set (operating agreement, formation filing, EIN guidance, etc.)
- Every authority clause verified against California primary sources (leginfo, CA SoS, FTB); federal sources only for federal pieces
- Every authority clause adversarially checked — zero open blockers, zero open majors
- Three-tier labels on every clause: Cited / Verified / Adversarially checked, each with source URL, verbatim quote, check date
- sourceClass on every citation (primary-official / court-opinion / agency / mirror / secondary)
- One research file per document
- Tier A/B only; no document with zero authority clauses promoted to Tier A

## 2. Interview & generation

- Free interview flow that captures the facts clauses depend on
- Document generated from clause set, with conditionals including/excluding the right clauses
- "Why we ask" text on every question — no advisory language anywhere
- Preview free before any payment prompt; price visible before interview starts

## 3. Payment & entitlements

- Stripe, test mode until owner switches
- Edge-function checkout; products generated from config/pricing.json
- Supabase tables: orders, order_items, entitlements (user_id, type, document_id, source, status, starts_at, ends_at) — created via migrations, RLS on auth.uid(), adversarial RLS tests
- Server-side release only: session + entitlement check → PDF and DOCX rendered server-side from the same clause set as the client → short-lived signed URL → audit_log (document id, corpus version, clause ids + check dates, timestamp, output hash — never field values)
- Golden text-parity tests on server output; client-side print/JSON/text paths removed or watermarked for paid docs
- Webhooks with signature verification + idempotency: checkout.session.completed, invoice.paid/payment_failed, subscription updated/deleted, charge.refunded, charge.dispute.created
- Written refund policy, admin refund action, automatic entitlement revocation, dispute handling, customer portal, receipts, order history
- California Automatic Renewal Law disclosures if any subscription copy exists at checkout (cite statute in DECISIONS.md, flag for attorney review)
- End-to-end test-mode tests: purchase, failed payment, refund, cancel, duplicate webhook replay, unauthorized release

## 4. Trust surface (the differentiators)

- Source panel on every clause: source, verbatim quote, sourceClass, check date, level, known gaps — expandable inline, works on phones
- Verify page (`/verify/<id>`): every export carries document id + QR + footer link; page shows title, generated-on date, corpus version, each clause id with level and check date, and whether any clause changed since generation. Unguessable ids, rate limits, adversarial test proving no user data exposed and no id enumeration
- Changelog page (public, customer-facing): every correction dated, what changed, why. Exists at launch even with zero entries
- Home page demo: one real wedge clause rendered live with its source panel open beside it — no signup needed to watch the trust mechanism work
- Trust page (`/trust`), CI-generated: launch-set counts, share at each verification level, last law-change check, defects found/fixed with changelog links — CI fails if page text and data disagree

## 5. Verify-anything tool

- Public, no account, reachable from home page and SEO pages
- Upload or paste any legal document → verification report: claims checked against current California statute, what holds, what's superseded, what's missing
- "Inform, never advise" — describes what the law says, never what to do
- Free; this is the top-of-funnel acquisition asset

## 6. SEO Wave 1 (publishing with the wedge, not after)

- ~50 pages: 7 wedge documents + strongest-authority formation documents
- Each: unique title/description, canonical URL, schema.org markup, sitemap entry, visible check date, jurisdiction notice, price or start-free CTA, zero advisory copy
- Intent mix: document intent ("California single member LLC operating agreement") + obligation/penalty intent ("California LLC annual report deadline penalty", "Franchise Tax Board minimum franchise tax", "BOI report deadline")
- Published and indexed before the paid switch

## 7. Legal & compliance minimum

- Terms of Service (draft), Privacy Policy (draft), refund policy, storage notice, data inventory (payments, subprocessors: Stripe, Supabase, hosting, error monitoring, email provider), retention, deletion, CCPA/CPRA rights
- "What this is and isn't" notice on every export and checkout
- Jurisdiction notice on every export
- Every public number/claim generated from corpus or verifier data — nothing typed by hand
- All marked as drafts pending attorney review; contact email placeholder

## 8. Analytics (trust metrics)

- Demo-clause opens, source-panel expansions, verify-page scans (incl. from printed exports), verify-anything tool uses, demo→interview conversion, paywall→checkout conversion, highest-abandonment step
- No field values in any analytics event

## 9. Infrastructure & gates

- Pre-commit/pre-push hooks + CI: no agent commits to main branch; no legal-text change without an approved patch id in the commit message
- Before every commit: validate_corpus.py, regression.js, merge_guard.py, golden tests — green or no commit
- Accessibility: 0 serious/critical issues; performance budgets green
- Staging mirrors production; backups running with a successful restore drill; uptime + error alerting; status page
- Freshness automation: weekly law-change watcher (flags only, never edits), January/July citation rechecks scheduled
- Runbooks: legal-content error (takedown + banner + changelog), payment incident, data incident

## 10. Launch-critical verification

- Every launch-set document end-to-end in a real browser (desktop + phone): interview → test-mode purchase → PDF/DOCX export → verify page
- Manual paywall-bypass checklist recorded
- LAUNCH_READINESS.md pass/fail table + top five risks with mitigations

## Explicitly NOT in the MVP (Phase 5+)

Law-change email alerts; compliance calendar; handbook maintenance;
subscription tier; attorney referral; error bounty; verify API;
freshness badges; contract-reader accuracy gates beyond baseline;
guest checkout; Spanish; other states; any document beyond the launch
set.
