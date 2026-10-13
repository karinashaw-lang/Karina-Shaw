# GROUNDTRUTH: MASTER BUILD PLAN FOR CLAUDE CODE

## MISSION

### The problem
Ordinary people in California who need a legal document (a lease, an LLC, a will, a contractor agreement, a demand letter) have two bad options. They can pay an incumbent such as LegalZoom, which charges high prices with heavy upselling and delivers templated output whose legal basis the customer cannot see. Or they can use free templates of unknown quality, with no way to tell whether the language is current, whether it fits California, or whether it was ever checked against the law. In both cases the person cannot tell why a clause says what it says, whether it is still current, or what the source is. Trust is the missing ingredient, and nobody in the market earns it by showing their work.

### The solution
GroundTruth is a self-help legal document assembler built on one principle: **inform, never advise**. Every clause is classified as authority-based or drafting, is traced to primary sources (statutes, regulations, cases), is verified through a documented nine-item check, and carries a visible checked-date. The user sees what the law says, where it comes from, and when it was last confirmed. The product never tells the user what they should do legally. It runs California-first, with federal law added where the subject is federal. It is built to scale breadth (740 documents today) through systems rather than hand-polishing: a schema-driven interview engine, a shared field library, computed quality tiers, an adversarial verifier, and an automated law-change watcher that keeps every clause honest as the law moves.

### The goal
Beat LegalZoom for California users by being the most trustworthy, transparent, and current document platform, with comparable breadth, a better experience, and lower friction at lower or fairer prices. Expand to other states only after California is clearly won.

"Beat" must be measurable. Track these and report them in BUILD_STATUS:
1. **Trust:** percentage of documents at Tier A or B; percentage of clauses verified and within staleness thresholds; open verifier findings by severity.
2. **Breadth:** documents available per category, and the share that render through the full interview engine.
3. **Experience:** completion rate per document, abandonment point per step, time to a finished document, and feedback volume and sentiment.
4. **Freshness:** days from a California law change to the affected clauses being flagged, reviewed, and updated.
5. **Reach:** organic search traffic to programmatic pages for specific California questions.
6. **Revenue (once payments exist):** paid conversion rate and average order value.

### Decision rule
When a task is ambiguous, choose the option that most increases user trust and transparency while staying within inform-never-advise, and record the choice in DECISIONS.md. When trading breadth against correctness, correctness wins: demote or flag the content rather than ship something unverified.

---

## HOW TO USE THIS DOCUMENT
Work through the tasks in order unless a task says otherwise. For each task: read the "Inspect first" step, make the change, run the listed checks, commit with the suggested message, then update BUILD_STATUS. If a task is too large, split it into sub-commits. Do not skip the acceptance criteria. Confirm real file paths by inspecting the repo rather than guessing.

## GLOBAL RULES (apply to every task)
1. Inform, never advise. No new user-facing copy may tell a user what they should do legally, recommend a course of action, or assess the strength of their position. Describe what the law says and what a document does.
2. Zero-config must keep working. Every existing feature must still work in-browser with no account, no backend, and no config.js. New backend features must degrade gracefully when config is absent.
3. Never weaken the verification standard. Do not mark a clause "Verified" without the nine-item check on methodology.html. Do not edit checkedDate unless the clause was actually re-verified.
4. Run these before every commit and do not commit if any fail: `python validate_corpus.py`, `node regression.js`, `python merge_guard.py`.
5. Do not touch config.js contents or commit secrets. Confirm config.js stays gitignored and untracked.
6. Work on branch `claude/new-session-palh5c` or a child branch of it. Small commits, one concern each.
7. Before changing any file, read it. Before adding a file, check whether an equivalent already exists.
8. When a decision is ambiguous, pick the most conservative option, write the decision and reason in `DECISIONS.md`, and continue.
9. After each phase, update BUILD_STATUS (counts, open items) so it stays truthful. Remove items from "Open items" only when actually done and verified.

---

## PHASE 0: ORIENTATION (do first, no code changes)

### 0.1 Map the repo
- List all top-level files and directories. Identify: the corpus data files, the app entry HTML/JS, the picker, wizard, output, signature, My Documents/Inbox/Relationships, contract reader, account/sync code, scripts (validate_corpus.py, regression.js, recheck_citations.py, recheck_all.py, merge_guard.py), methodology.html, changelog.html.
- Write `ARCHITECTURE.md` describing: data flow from corpus to picker to wizard to output; where state lives (localStorage keys, Supabase table); how clauses reference documents; how template fields are declared; how jurisdiction badges are derived.
- Acceptance: ARCHITECTURE.md exists, names real file paths, and was verified by opening each referenced file.

### 0.2 Baseline
- Run all three gates and record the results and timings in `BASELINE.md`.
- Record the current schema of one document, one clause, and one citation as examples.
- Record counts: documents, clauses (authority/drafting), citations, per-category totals. Confirm they match BUILD_STATUS (740 / 6,610 / 11,661).
- Acceptance: BASELINE.md exists; any mismatch with BUILD_STATUS is flagged at the top.

---

## PHASE 1: FOUNDATION AND CLEANUP

### 1.1 Continuous integration
- Add `.github/workflows/ci.yml` triggered on push and pull_request.
- Jobs: (a) validate_corpus.py, (b) merge_guard.py (compare against base branch), (c) regression.js with a headless browser, installing browser dependencies in the workflow.
- Cache pip and npm dependencies. Fail the workflow on any nonzero exit. Upload regression screenshots/logs as artifacts on failure.
- Add a status badge to the README if one exists.
- Acceptance: a deliberately broken clause (missing citation) on a test branch fails CI; reverting it passes.
- Commit: "ci: run corpus validation, merge guard, and regression on every push"

### 1.2 Supabase cleanup
- Using the Supabase connector, list tables and confirm the single table and its four RLS policies still exist.
- Identify the two test rows and two test users by email pattern or created_at. Show them to me before deleting. Delete rows first, then users. If deletes hang, check for locks via `pg_stat_activity`, long transactions, or blocking foreign keys, and report the cause.
- Run `get_advisors` for security and performance and record the findings in `DECISIONS.md`.
- Acceptance: row and user counts confirmed via query; advisors output saved.

### 1.3 HTTP-level auth round trip test
- Write `tests/auth_roundtrip.js` that, given SUPABASE_URL and SUPABASE_ANON_KEY from environment variables, performs: request magic link for a throwaway address, then (where possible) verify token exchange, insert a row, read it back, confirm a second user cannot read, update, or delete it through the REST API.
- Make it skip cleanly with a clear message if env vars are absent.
- Document how to run it outside the restricted sandbox.
- Acceptance: script runs or skips cleanly; README section added; the "unverified HTTP round trip" open item is updated to reflect real status.

### 1.4 Golden-output test harness
- Create `tests/golden/` with one fixture per document: `{docId, inputs, expectedText, expectedJSON}`.
- Write `golden.js` that renders a document headlessly from fixture inputs and diffs against the expected output. Provide `--update` to regenerate a fixture, which must print a diff and require a flag to overwrite.
- Generate fixtures in bulk for all 740 documents using realistic sample inputs. Where a document has conditional fields, generate one fixture per major branch.
- Add a `golden-manifest.json` listing which documents have fixtures.
- Add golden.js to CI. Sample-review 25 random fixtures and list any with nonsensical inputs in `GOLDEN_REVIEW.md`.
- Acceptance: all 740 documents have at least one fixture; changing one clause's text makes exactly the documents using that clause fail.

### 1.5 Extend merge_guard
- Confirm merge_guard.py catches clause text, citation, and checkedDate reverts. Add tests for each case under `tests/merge_guard/`.

---

## PHASE 2: SCHEMA-DRIVEN INTERVIEW ENGINE

### 2.1 Define the field schema
- Inspect how template fields are currently declared. Design `schema/field.schema.json` covering: id, label, type (text, longtext, date, money, integer, percent, address, person-name, entity-name, county, state, phone, email, select, multiselect, boolean, signature), required, validation rules, default, `whyWeAsk` (plain-language explanation), `helpText`, `example`, `showIf` (conditions on other fields), `sensitive` (boolean), and `sharedFieldId` (link to the field library).
- Write a migration script that converts the existing template field declarations to the new schema automatically and reports any it cannot convert.
- Extend validate_corpus.py: every placeholder in clause text must map to a declared field, every declared field must be used, every showIf must reference an existing field, no cycles.
- Acceptance: all 740 documents validate against the schema with zero errors; the migration report lists any manual fixes needed and they are done.

### 2.2 Shared field library
- Create `schema/fields/` with canonical definitions for common fields: party names, addresses, dates, dollar amounts, county, entity type, employee/employer, landlord/tenant, effective date, governing law, and so on. Analyze the corpus to find the 40 most frequently reused fields and define them first.
- Documents reference these by sharedFieldId and may override label or help text only.
- Acceptance: at least 80 percent of all field instances across the corpus resolve to a shared definition; the report shows the percentage.

### 2.2b Plain-language help generation
- For every field lacking `whyWeAsk`, draft one in plain language (8th-grade reading level, no advice, no recommendations). Write them into the field library, not per document, wherever possible.
- Add a lint rule that rejects whyWeAsk text containing advisory phrases such as "you should", "we recommend", "make sure to", "it is best to". Put the banned-phrase list in `lint/advisory_phrases.json`.

### 2.3 Generic wizard renderer
- Build one renderer that reads a document's field schema and produces: sectioned steps, conditional visibility via showIf, inline validation with specific error messages, a progress indicator, a review screen listing all answers with edit links, and autosave to localStorage with resume.
- Preserve the existing jurisdiction notice, editable clause text, sourcing badges, and export options.
- Keep keyboard and screen-reader behavior at least as good as today (focus moves to new step heading, labeled inputs, error messages tied with aria-describedby).
- Mark `sensitive` fields so they are excluded from analytics and optionally never synced.
- Acceptance: all 740 documents render through the generic renderer; regression.js passes; golden tests pass unchanged.

### 2.4 Clause-level conditionals
- Allow clauses to be included or excluded based on field answers (`includeIf`), with the wizard showing which optional clauses were included and why, in plain language.
- Add validate_corpus.py checks that no includeIf references an undeclared field, and that every document renders at least one valid output across all branches (enumerate branches up to a cap; sample beyond it).

---

## PHASE 3: QUALITY TIERS AND PROMOTION PIPELINE

### 3.1 Tier definitions (computed, never hand-assigned)
- Tier A: complete field schema, at least one golden fixture per branch, passed adversarial verifier with no open findings, all clauses verified and within staleness thresholds, accessibility checks passed on its rendered output.
- Tier B: complete field schema, all clauses verified and fresh, at least one golden fixture.
- Tier C: everything else that passes validate_corpus.py.
- Write `tiering.py` that computes each document's tier from objective checks and writes `tiers.json`. Output a summary table by category.

### 3.2 Show tiers in the UI
- Add a tier indicator on each picker card next to the jurisdiction badge, with an accessible text label and a short explanation of what it means. Add a picker filter and sort by tier.
- Copy must describe what was checked, never imply legal sufficiency.

### 3.3 Promotion report
- Add `promotion_report.py` printing: counts per tier per category, the top 20 documents closest to the next tier with the exact missing gate for each, and week-over-week change using a stored history file.
- Run it in CI and post as a job summary.

---

## PHASE 4: VERIFICATION AT SCALE AND FRESHNESS

### 4.1 Adversarial verifier
- Create a verifier script and prompt in `verifier/` that, for each clause in a fresh context with no access to the author's reasoning, tries to find: citation not supporting this specific claim, quote drift versus the live source, silent overclaiming, wrong or undisclosed jurisdiction, advisory language, superseded law, and internal contradiction with other clauses in the same document.
- Use the CourtListener connector for case law, Lawstronaut for statutes and regulations, and web fetch for primary sources. Require direct source quotes for every finding.
- Output `verifier/findings.jsonl` with severity (blocker, major, minor), clause id, evidence, and suggested fix. Do not auto-edit clauses; write proposed fixes to separate patch files for human review.
- Run in parallel batches by category with a configurable concurrency and a resume file so interrupted runs continue.
- Run first on 100 randomly sampled clauses and report the finding rate before running the full corpus.
- Acceptance: sample report delivered with finding rate and examples; full run only after I approve.

### 4.2 Triage workflow
- Add `verifier/triage.py`: lists open findings by severity, lets me mark each as accepted, rejected (false positive, with reason), or fixed. Rejected reasons feed back into the verifier prompt as known false-positive patterns.
- Fixed findings get a changelog.html entry in the same format as the existing 14 defects.

### 4.3 Per-category staleness thresholds
- Replace the single 24-month limit with per-category fatal and warning thresholds in `config/staleness.json`. Suggested: Hiring, During employment, Ending employment, Real Estate: 12 fatal / 9 warn; Business Formation and Family Law: 18 / 12; Confidentiality & IP and Estate Planning: 24 / 18.
- Update validate_corpus.py to read it. Add an annual rule: every clause citing a California statute must be rechecked after each January 1 effective-date cycle, tracked via an `effectiveCycleChecked` field.
- Acceptance: current corpus is evaluated against the new thresholds and the number of clauses newly flagged is reported.

### 4.4 Law-change watcher
- Build a scheduled task (weekly, and a special run the first week of January) that: queries Lawstronaut horizon_scan for California and relevant federal changes, queries CourtListener for new decisions citing cases or statutes already in the corpus, maps each change to affected clause ids via the citation index, and writes `watcher/reports/YYYY-MM-DD.md`.
- Build the citation index (`index/citation_to_clauses.json`) from the corpus, rebuilt in CI.
- For each affected clause, open a draft branch or PR containing only a "needs review" flag and the evidence, never an automatic edit to legal text.
- Acceptance: a dry run against last quarter's changes produces a report; the index covers 100 percent of citations.

### 4.5 Citation recheck integration
- Extend recheck_all.py to run on a schedule, record results to `recheck/history.jsonl`, and open a finding when a URL dies or a quote no longer matches. Surface dead-link count in the promotion report.

---

## PHASE 5: DISCOVERY AT BREADTH

### 5.1 Plain-language search
- Build search over documents using the existing TF-IDF engine plus synonyms and lay-term mapping (for example "deposit back" maps to security deposit; "fired" maps to termination). Create `search/lay_terms.json` seeded by generating 5 to 10 lay phrasings per document with Claude, then spot-checking 50.
- Add typo tolerance and show matched terms. Add golden search tests: a list of 100 lay queries with expected top-3 documents, run in CI.

### 5.2 "Which document do I need?" intake
- Build a short question flow (situation category, then 2 to 4 narrowing questions) that routes to a ranked list of documents.
- It must present options and what each document is, never recommend one as the right choice. Use wording like "Documents that match what you described."

### 5.3 Related-document suggestions
- On each output screen, show related documents computed from shared clauses, shared fields, and category adjacency. Label them "Documents often used alongside" only if justified by data; otherwise "Related documents."

### 5.4 Picker performance
- Virtualize or paginate the picker so 740 cards stay fast on a mid-range phone. Add a performance budget test: first render under a threshold, and search response under 100 ms for the full corpus.

---

## PHASE 6: OUTPUT AND LIFECYCLE

### 6.1 Native PDF export
- Implement client-side PDF generation (no backend) with: title block, jurisdiction notice, document body, signature blocks, page numbers, and footer carrying a document id and generated-on date. Embed fonts; ensure text is selectable and accessible (tagged PDF if the library supports it).
- Add golden tests that extract text from generated PDFs and compare to the plain-text export.
- Test on a 1-page, a 10-page, and a very long document.

### 6.2 Export polish
- Add .docx export (client-side) so users can edit in Word. Keep plain text and JSON.
- Include a "sources and checked-dates" appendix option in every export.

### 6.3 Document lifecycle and versioning
- Store each saved document with: schemaVersion, corpusVersion (a content hash of the clauses used), clause ids and clause checkedDates at generation time, and the user's inputs.
- When the corpus changes a clause the document used, show a banner on My Documents: "A clause used in this document has changed since you created it," with a diff of what changed and a one-click regenerate that preserves inputs. State facts only. Do not say whether the user must act.
- Keep prior versions with timestamps and allow restore.

### 6.4 Filing and next-steps packets
- For documents with a real filing or follow-on step (business formation, estate planning, family law, some real estate), add a structured "What happens after this document" section sourced from official agency pages, with citations and checked-dates like any clause. Include California Secretary of State and Franchise Tax Board items, county recorder items, and court forms, as applicable.
- Add pre-filled official form output only where the form is public and the field mapping can be verified. Each mapped field must be covered by a test.
- Add date-based reminders (for example a Statement of Information due date) as calendar (.ics) exports, computed from the user's entered dates, with the rule's citation shown.

---

## PHASE 7: BACKEND, PAYMENTS, ACCOUNTS

### 7.1 Backend foundation
- Using Supabase migrations (not manual SQL), add tables: orders, order_items, audit_log, document_versions, feedback. Write RLS policies for each, scoped to auth.uid(), and write adversarial RLS tests for each table (second user cannot select, insert, update, or delete).
- Use edge functions for anything requiring secrets. Keep the app fully functional without them.
- Run get_advisors after each migration and fix findings.

### 7.2 Payments
- Integrate Stripe Checkout through an edge function. Store only Stripe ids, never card data. Handle webhooks with signature verification and idempotency. Define what is free versus paid (suggest: browsing and filling free; export, save, and sync paid or capped), configurable in `config/pricing.json`.
- Add refund handling, receipts, and order history in the account area.

### 7.3 Audit trail
- Log, per generated document: document id, corpus version, clause ids and checked-dates, timestamp, and a hash of the output. Never log the user's field values. Make the log viewable and exportable by the user.

### 7.4 Account basics
- Add: account recovery path appropriate for passwordless, session management (list and revoke sessions), data export (all user data as JSON), and full account deletion that removes rows, versions, and files, with a confirmation step and a written deletion receipt.
- Add optional end-to-end encryption for sensitive fields and documents (WebCrypto, key derived from a user passphrase, clear warning that a lost passphrase cannot be recovered). Encrypted blobs only server-side for those items.

### 7.5 E-signature and sharing
- Extend the existing local signature feature with: share a document by expiring link, signer view with typed or drawn signature, signed-by timestamps, a signing audit page, and a final sealed PDF with a certificate page (signer, timestamps, document hash).
- Copy must make no enforceability claim either way, consistent with the current approach.

---

## PHASE 8: LEARNING FROM USERS AND DISTRIBUTION

### 8.1 Privacy-friendly analytics
- Add first-party, cookieless event tracking (document opened, step reached, step abandoned, completed, exported, search query text with no field values) into a Supabase table, opt-out honored, no IP storage. Never record any field values or sensitive fields.
- Build a simple dashboard script: completion and abandonment per document and per step, top searches with no result, slowest screens.

### 8.2 In-app feedback
- Add a feedback control on every output screen: "Was anything unclear?" with a short text field and a category (confusing question, wrong or outdated information, missing document). Route "wrong or outdated information" directly into the verifier findings queue as a minor finding with the clause id.

### 8.3 Programmatic SEO
- Generate static pages from the corpus: one page per document (what it is, jurisdiction, what clauses it contains with citations, who typically uses it, fields it asks for) and one per specific California question where the corpus has supporting authority.
- Each page needs unique titles, meta descriptions, canonical URLs, schema.org markup, internal links, and a generated sitemap. Pages must follow inform-never-advise.
- Do not publish thin or duplicate pages. Add a validation rule: minimum unique content per page and no two pages with more than a set similarity.
- Add the page generation to CI and make output deterministic.

---

## PHASE 9: HARDENING, PRIVACY, QUALITY

### 9.1 Accessibility in CI
- Add axe-core checks to regression.js for every screen and for a sample of 50 rendered documents. Fail on serious or critical violations. Add a manual checklist for keyboard-only and screen-reader passes in `A11Y_CHECKLIST.md`.
- Re-verify the existing contrast fix with an automated contrast check across both themes if more than one exists.

### 9.2 Performance
- Add budgets: initial load size, time to interactive, contract-reader timing on a 20-page paste, picker render. Fail CI on regression beyond a threshold.
- Move heavy work (TF-IDF indexing, PDF generation) off the main thread with web workers if profiling shows jank.

### 9.3 Error monitoring and staging
- Add client error reporting (a lightweight self-hosted or privacy-respecting service, scrubbing field values), source maps, and alerting.
- Create a staging Supabase project or branch and a staging deploy path. CI deploys to staging on merge; production deploy is manual.

### 9.4 Security review
- Add Content-Security-Policy and other security headers. Audit for XSS in clause rendering and editable clause text. Confirm no secrets in git history (scan with a secret scanner and report). Add dependency vulnerability scanning in CI. Add rate limiting for edge functions and magic-link requests.

### 9.5 Privacy and legal-copy surfaces
- Write Privacy Policy, Terms of Service, and Cookie/Storage notice pages that accurately describe the real behavior of the product (what is stored locally, what is synced, what analytics exist, retention, deletion). Generate a "data inventory" doc from the code so the policy stays accurate. Include CCPA/CPRA rights handling: access, deletion, correction, opt-out. Mark these as drafts needing owner review.
- Add `lint/copy_lint.py` that scans all user-facing strings and corpus text for advisory phrases and enforcement-claim phrases, and fails CI on matches. Specifically audit the Read-a-contract and cross-document consistency features so their wording only describes resemblance and inconsistency, never an assessment of legal effect or what to do.

### 9.6 Backup and recovery
- Document and script a backup of the Supabase table(s), a restore test, and a corpus snapshot tagged per release.

---

## PHASE 10: CONTRACT READER AND CONSISTENCY IMPROVEMENTS

### 10.1 Contract reader quality
- Build an evaluation set of 50 real-style contract passages with expected matched clauses. Measure top-k match accuracy and false-positive rate for TF-IDF. Try improvements (bigrams, section-aware chunking, better stopwords, optional embedding re-rank loaded client-side) and keep a change only if it improves the eval.
- Always display match confidence honestly, and show "no close match found" when below the threshold rather than the least-bad result.
- Keep the output as "law this passage resembles" with citations and checked-dates, and never an evaluation of the passage.

### 10.2 Cross-document consistency
- Expand the checks (conflicting dates, mismatched party names, inconsistent amounts, conflicting governing law) with a test suite of seeded inconsistencies. Report facts ("these two documents list different effective dates") with no recommendation.

---

## PHASE 11: NOT YET BUILT ITEMS TO SCOPE

Create `ROADMAP.md` with a one-page scoping note for each of: mobile app (evaluate PWA first), multi-language support (start with Spanish; identify which strings and which corpus text need translation and how translations get verified), password-based sign-in (decide yes or no with reasoning), admin and moderation tooling (list what an internal admin needs: findings queue, tier dashboard, feedback inbox, takedown of a bad clause). Do not build these yet; estimate effort and dependencies.

---

## SUGGESTED EXECUTION ORDER
1. Phase 0 (orientation)
2. 1.1 CI, 1.2 Supabase cleanup, 1.3 auth round-trip test
3. 1.4 golden harness, 1.5 merge_guard tests
4. 2.1 field schema, 2.2 field library, 2.3 renderer, 2.4 conditionals
5. 4.1 verifier on a 100-clause sample, then triage and full run
6. 3.x tiering and promotion report
7. 4.3 staleness thresholds, 4.4 law-change watcher, 4.5 recheck schedule
8. 5.x discovery (search, intake, related, performance)
9. 6.1 PDF, 6.2 .docx, 6.3 lifecycle, 6.4 packets
10. 9.1 accessibility, 9.2 performance, 9.5 copy lint (pull forward if time allows)
11. 7.x backend, payments, accounts, e-signature
12. 8.x analytics, feedback, SEO
13. 9.3, 9.4, 9.6 monitoring, security, backup
14. 10.x contract reader and consistency
15. Phase 11 scoping

## DEFINITION OF DONE FOR THE WHOLE PLAN
- All three gates plus golden, accessibility, and performance checks run in CI and pass on every push.
- Every one of the 740 documents renders through the schema-driven wizard and has a computed tier.
- The verifier has run across the full corpus, all blocker and major findings are triaged, and fixes are logged in changelog.html.
- The law-change watcher runs on schedule and produces reports.
- Native PDF and .docx export work with golden tests.
- Backend tables have adversarial RLS tests passing, the HTTP auth round trip is verified, and the test rows are gone.
- Privacy, Terms, and storage notices exist and match the real behavior.
- BUILD_STATUS, ARCHITECTURE.md, DECISIONS.md, and ROADMAP.md reflect reality.
- The mission metrics (trust, breadth, experience, freshness, reach, revenue) are reported in BUILD_STATUS with current values.

## REPORTING FORMAT AFTER EACH TASK
Report: task id, what changed (files), checks run and results, anything skipped and why, and the next task. Keep it short.
