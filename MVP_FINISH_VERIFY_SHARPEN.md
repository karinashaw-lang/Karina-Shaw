# GROUNDTRUTH MVP: FINISH, VERIFY, AND SHARPEN (instructions for Claude Code)

Saved verbatim from the owner's paste, 2026-11-22. This is the fifth
planning document this session has received, and the most execution-
focused: it takes the current real state (confirmed accurate against
the repo at save time -- 741 documents, 6,621 clauses, 29 Tier A, the
128-document approved launch set with 0 open blockers/majors, the
7-document LLC wedge fully checked, the free tier deployable, per-
document entitlements, the 4 Stripe edge functions, the untested
release-document paywall, SEO pages built but unpublished) and gives
a direct, numbered task list rather than asking for another audit.
Treated as the current work order; execution proceeds against it
directly, prioritized and triaged in DECISIONS.md rather than
attempted as one undifferentiated pass, since several items are
genuinely blocked on the owner (Stripe keys, a domain, attorney
review, price) and several are large enough (128 research files, a
full adversarial RLS suite) to need their own scoping.

---

(Full text as pasted by the owner follows, unedited.)

State as of 2026-11-21 (from the owner's snapshot; confirm against the repo): 741 documents, 6,621 clauses, 29 Tier A, 128-document owner-approved launch set with 0 open blockers or majors, 7 LLC wedge documents (40 authority clauses) CA-primary-sourced and adversarially checked, free tier built and deployable via tools/build_site.py and GitHub Pages, per-document one-time entitlements (30-day window, 3 re-exports, both placeholders), 4 Stripe edge functions, release-document paywall (untested against real Stripe or real rendered files), SEO pages built but unpublished.

## GLOBAL RULES (every task)
1. Inform, never advise. No copy recommends a legal course of action, assesses a user's position or document, or claims sufficiency, enforceability or outcomes.
2. "Verified" means checked against a primary source. Never mark a clause Verified or change a checkedDate unless actually re-verified. Never infer a verification.
3. No automated edits to legal text. Every change is a patch file, owner-approved, re-verified, logged in the public changelog.
4. Before every commit run all gates (corpus validation, golden fixtures, accessibility, wizard, search, versioning, performance, secret scan, branch discipline). Do not commit on failure. Child branches only.
5. No secrets committed. No card data stored; Stripe ids only. Stripe stays in test mode until the owner switches it.
6. No destructive or irreversible action (DROP, DELETE, force-push, deploy, publish, live Stripe, real charges) without showing the exact action and waiting for the owner's yes.
7. Paywall enforcement is server-side only.
8. Every number or claim on a public page is generated from corpus, verifier or CI data, never typed by hand.
9. Any filing obligation, fee, deadline or penalty in copy comes from the agency's own site with a recorded check date. Never from memory.
10. Any claim about a competitor must be verified from their public site, dated and sourced, or not made. Default to claims about our own product only.
11. Ambiguity: pick the most conservative option and log it in DECISIONS.md.
12. After every task report: task id, files changed, checks and results, skipped items and why, next task.

---

## PART 1: CLOSE THE GAPS IN WHAT EXISTS (blocking; do before anything public)

1.1 Money path, test mode. Run a complete test-mode purchase: checkout, webhook, entitlement, release-document, download. Open the downloaded PDF and DOCX in a real viewer (render pages to images and inspect them) and compare each against the on-screen preview for the same inputs. Check text parity, page breaks, signature blocks, footer, document id, QR and verify link, jurisdiction notice and "what this is and isn't" notice. Test refund, failed payment, duplicate webhook replay, dispute and unauthorized release. If PDF or DOCX libraries cannot be installed locally, run in CI or the staging environment, and report exactly what could not be verified. Do not report this task complete on code review alone.

1.2 Entitlement RLS, adversarial retest. Write and run tests that prove: a second user cannot select, insert, update or delete another user's entitlement or order; an entitlement cannot be claimed twice; document scope cannot be widened; a refunded or disputed entitlement stops granting release; an expired window stops granting release; the re-export counter cannot be reset by a client. Run get_advisors afterwards. Report any policy that fails.

1.3 Reviewed-By audit. For the 13+ commits missing the trailer: list each, mark whether it touched legal text (clauses, citations, document content), and for every one that did, produce a diff review for the owner. Do not waive the rule. Recommend a policy and enforce it in CI going forward: any commit touching legal text fails without an approved patch id and Reviewed-By trailer. The owner decides the policy; implement what the owner chooses.

1.4 The 113 accepted-and-disclosed findings. Confirm each disclosure is visible on the clause the user sees (the source panel's known-gaps field), not only in the changelog. List any that sit in the 7 wedge documents or the launch set and report them to the owner. Re-attempt any that were accepted pending source access. Add a CI check that fails if an accepted finding has no visible disclosure.

1.5 Research files, wedge first. Write review/documents/<docId>.md for the 7 wedge documents first, then the other launch-set documents in order of expected traffic. Each file: governing California law (statutes, regulations, leading cases); elements or notices California requires or commonly attaches that the document omits (as sourced findings, never advice); provisions California restricts or voids; federal overlay; changes in the last 24 months and anything effective next January 1 or July 1; scope notes (entity types and situations the document does not fit); whether the interview captures the facts the clauses depend on. Any missing-element finding on a wedge document is a launch blocker: write a patch proposal with citations for owner approval. Do not publish a wedge page until its file is written and its blockers are resolved.

1.6 Verify page honesty. The verify page describes a document template, not a buyer's specific copy. Make the page and the export footer say so in plain words, and confirm every export carries a generated-on date and a corpus version so a buyer can compare their copy with the page. State facts only.

1.7 Structured data. Review the schema.org ClaimReview markup against Google's current structured-data guidelines. If ClaimReview is meant for fact-check articles about specific claims, replace it with a more accurate type (for example WebPage or Article with accurate properties) before publishing. Report what you found and what you changed.

1.8 Domain and publish readiness. Once the owner supplies a domain, set canonical URLs, sitemap and Pages configuration for it. Re-score the SEO pages for uniqueness and similarity. Wave 1 is the 7 wedge documents plus the strongest-authority formation documents (about 50 pages), and only pages whose research files pass. Do not publish until the owner says go. Obligation pages (annual report or Statement of Information, FTB minimum franchise tax, BOI) follow rule 9: confirm current status, fee and penalty amounts from the agency site and record the check date.

---

## PART 2: THE DISRUPTION LAYER (positioning and promises; no new product features)

The goal is that a stranger understands within one minute what is different, and believes it because the product proves it. Build only what is listed.

2.1 One flat, all-in price. Implement a CI check that the price shown on the home page, document pages, the "what you get" panel and the checkout total are identical, with nothing added at checkout (no add-ons, no pre-ticked boxes, no upsell screens, no fees beyond any tax the law requires, which is shown before payment). Add a plain "What you pay" line to every document page: the price, what it includes (formats, 30-day download window, 3 re-exports), and the refund policy. Price points remain the owner's decision; leave config/pricing.json placeholders until set. No paid reminder add-on at launch. Record that decision in DECISIONS.md.

2.2 Free proof before payment. Confirm the entire interview, the full live preview and every source panel are free and need no account. The paywall appears only at file export. Add an analytics event for the first source-panel expansion in a session (trust moment, no field values) so the owner can measure whether people look.

2.3 A written source promise, owner-approved and attorney-reviewed before publishing. Draft SOURCE_PROMISE.md for owner decision: if a cited source is shown not to support the clause it is attached to, the buyer is entitled to a refund for that document. Word it narrowly: it covers whether a citation supports its clause, not whether the document is legally sufficient for the buyer's situation or whether any outcome will follow. Include how a buyer reports a problem, the response time the owner commits to, and the evidence standard. Flag it for attorney review. Do not publish it, and do not reference it in any copy, until the owner approves the wording and the refund process is wired in the admin refund function.

2.4 Public corrections policy. Write the corrections page from existing data: how errors are found (verifier, citation recheck, feedback), the severity levels, the target time from a report to a flagged clause and to a fix (owner sets the numbers), how fixes are logged, and a link to the generated changelog and trust page. Every number on it comes from data. A "Report a problem with this clause" control already exists as in-app feedback; make sure it is reachable from every source panel and the verify page, and that reports of wrong or outdated information enter the verifier queue with the clause id.

2.5 Make the proof legible in one minute. On the home page and each wedge page, show above the fold one real clause opening to its source, with its check date and verification level, next to the price. Confirm the demo uses the live sourcing badge, not a mockup. Write three headline options in HEADLINES.md for the owner. None may imply advice, guaranteed outcomes or enforceability, and none may use "AI-powered," "smarter," or any competitor comparison that lacks a dated, sourced check (rule 10).

2.6 A neutral comparison page, only if it can be sourced. If the owner wants one, create COMPARISON_RESEARCH.md first: record, with URLs and capture dates, what comparable services publicly show about their sources, price and add-ons at checkout. Write the page only from what is documented there, describe our own product more than theirs, and flag it for attorney review. If the research cannot support a claim, drop the claim. Do not publish anything that names a competitor without the owner's explicit approval.

2.7 "For advisors" page. A short, plain page for accountants, bookkeepers and startup advisors explaining how to audit a clause: open the source panel, read the quote, follow the citation, check the date, see the changelog. Include how to report a problem. No marketing claims about outcomes. This is positioning and distribution, not a new feature.

2.8 Measure the claim. Add three launch metrics to the internal report, computed from analytics with no field values: time from landing to a finished preview; share of sessions that open at least one source panel; share of paywall views that reach checkout. Present them to the owner weekly. Do not publish these numbers publicly until they are real.

---

## PART 3: LAUNCH SEQUENCE
1. Part 1 tasks 1.1 to 1.7, and owner decisions (price, refund text, domain).
2. Merge to main only after the owner approves; enable Pages on the real domain; publish Wave 1 (task 1.8) before any payment prompt is enabled in production.
3. Run the user test (below) while Wave 1 indexes.
4. Owner sets the price, approves refund and source-promise wording after attorney review, supplies live Stripe keys, and gives the final go. Claude Code never switches Stripe to live mode.

USER_TEST_PLAN.md: 5 to 10 people about to form a California LLC, plus 2 accountants or bookkeepers. Each completes one document in test mode unaided. Record: where they stall; whether they open the source panel and what they say about it; whether they would pay the proposed price; whether the verify page and corrections page change their trust; what they would have expected to be included. If you ran any competitor side by side, record the sessions in a table. Use only what people say and do; do not invent conclusions.

## OWNER TASKS (write these into OWNER_TODO.md; do not attempt them)
1. Price per document; refund-policy text; confirm no paid reminder add-on at launch.
2. Decide the Reviewed-By trailer policy after seeing the 1.3 audit.
3. Approve patches for any wedge missing-element findings and any blocker or major.
4. Domain, hosting, DNS, Search Console. Stripe account, business verification, bank account, test keys now, live keys at launch only.
5. Contact email and receipt email provider. Accountant input on sales tax and the receiving entity.
6. Attorney review: legal pages, checkout and refund copy, the "what this is and isn't" notice, verify, trust and corrections page wording, the source promise, the comparison page if any, and a spot audit of about 150 clauses (stratified toward high-risk and prior-finding clauses) with the agreement rate recorded. Until the audit is done, public copy says checks are automated and source-based and does not mention attorney review.
7. Choose the headline; approve or drop the comparison page; approve the source promise and its response-time commitment.
8. Run or recruit the user test.
9. Final go to publish and final go to switch Stripe to live.

## DEFINITION OF DONE
- A real test-mode purchase delivers a PDF and DOCX that match the preview, opened and inspected.
- Entitlement policies pass the adversarial suite; every commit touching legal text carries an approved patch id and trailer.
- Every accepted finding is visibly disclosed on its clause; the 7 wedge documents have research files with no unresolved launch blockers.
- The price shown everywhere is identical and nothing is added at checkout; the corrections page and report control are live; the "For advisors" page exists.
- Wave 1 is published and indexed before payment is enabled in production; the user test has run; the owner has set price and approved the source promise and refund wording.

## DO NOT BUILD (out of MVP scope)
Subscriptions and the reminder add-on, law-change email alerts, compliance calendar, attorney referral, verify API, freshness badges, guest checkout, Spanish, other states, documents beyond the launch set, server-side full-document checking, admin console, mobile app.
