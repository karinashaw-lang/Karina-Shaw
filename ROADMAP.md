# Roadmap — scoped, not built

Phase 11 of the master build plan: a one-page scoping note for each
item below. None of these are built. Each note covers what it would
take, the real dependencies, and — where the master plan asks for
one — an explicit recommendation with reasoning, not just a neutral
effort estimate.

## Mobile app (PWA first)

**Recommendation: a Progressive Web App, not a native app, and not
yet even that without a real request for it.**

This is already most of the way to PWA-ready by accident of how it
was built: zero backend dependency for its core features, every
vendored library (`lib/pdfmake.min.js`, `lib/vfs_fonts.js`,
`lib/docx.iife.js`) bundled rather than CDN-loaded specifically so
"zero-config must keep working" offline, and a real
`prefers-color-scheme` dark mode already in `styles.css`. What's
actually missing for a installable, offline-capable PWA:

- A `manifest.json` (name, icons at a few sizes, `display: standalone`,
  theme color) and a `<link rel="manifest">` tag.
- A service worker caching `index.html`, `app.js`, `account.js`,
  `styles.css`, the vendored libraries, and the corpus JSON
  (`data/clauses.json`/`data/documents.json`, together ~5.6MB per
  `tests/performance/performance_budget.js`'s own measurement) for
  offline use — with a real cache-invalidation story tied to this
  project's own versioning concepts (a corpus update needs the service
  worker to fetch fresh data, not serve a stale corpus forever; the
  existing `corpusVersion` content-hash concept from Phase 6.3 is the
  natural cache key to build this against).
- The CSP `<meta>` tags on `index.html`/`sign.html` would need a
  `worker-src` review (a service worker is a same-origin registration,
  so this is likely a non-issue, but needs verifying the same way
  every other CSP claim in this project was — empirically, not assumed).
- Google Fonts is loaded via `@import` in `styles.css`; a fully
  offline-capable PWA would eventually want to self-host those fonts
  too, though this is a smaller, separable piece.

A native app (via Capacitor/React Native, or a store-reviewed
WebView wrapper) adds app-store review overhead, native build
pipelines, and per-platform testing — real cost that buys nothing
this product's actual feature set needs today (no push notifications,
no camera/contacts access, no background sync). The master plan's
own instruction to "evaluate PWA first" matches the architecture:
PWA gets installability and offline access, the two things "mobile
app" usually means for a tool like this, at a fraction of native's cost.

**Effort**: roughly 1–2 weeks for a careful PWA conversion (manifest,
service worker, cache-invalidation tied to `corpusVersion`, icons,
cross-browser install-prompt testing) if someone picks this up.
**Dependencies**: none blocking — fits entirely inside the existing
zero-backend, no-build-step architecture. A native wrapper, if ever
pursued later, would be a separate, larger estimate gated on a real
reason (store distribution, deeper OS integration) that doesn't
exist yet.

## Multi-language support (start with Spanish)

**This is not a feature to estimate lightly — the UI chrome is cheap,
the corpus is the real cost, and the corpus is almost all of it.**

What needs translation, split by actual risk:

- **UI chrome** (`index.html`, `sign.html`, `app.js`, `account.js`,
  `sign.js`, the three Phase 9.5 legal pages): a few hundred short,
  non-legal strings. Low risk if lightly mistranslated; a normal i18n
  pass (extract strings into a locale file, add a language switcher,
  translate, light review) is genuinely a 1–2 week job.
- **The corpus** (740 documents' titles/descriptions, 6,610 clauses'
  titles/bodies/gaps, ~4,000 field `whyWeAsk`/`helpText` instances,
  search copy, `filing/next_steps.json`): this is the overwhelming
  majority of the translation surface, and it is *legal* text — the
  one category of content where an approximate or machine-only
  translation is actively dangerous, not just imperfect. A
  mistranslated clause can change what it actually says a reader is
  agreeing to or entitled to.
- **How translations get verified** (the master plan explicitly asks
  this): machine-translating the UI chrome and having a fluent
  speaker review it is fine. Machine-translating *clause content*
  without a bilingual, legally-literate review step would contradict
  this project's own verification standard (every clause already
  carries a checked-date and a human-verifiable citation) — a Spanish
  clause with no equivalent verification would be a second-class,
  unverified copy of a verified document, in a way the project's own
  "inform, never advise, verify everything" posture doesn't tolerate
  for the English corpus either.
- **Staying in sync**: the biggest *ongoing* cost, not a one-time
  one. Every future English clause edit would need a matching Spanish
  review-or-update, or the two corpora silently diverge — a Spanish
  clause accurate on day one but stale after the next California
  statute change is worse than no Spanish version at all, since a
  reader has no way to tell. This needs a staleness mechanism
  analogous to `tools/validate_corpus.py`'s existing
  checked-date/statute-change gate, applied per-language.

**Recommendation**: start with UI chrome plus a *small, pilot* set of
the 10–20 highest-traffic documents, each with a real bilingual
legal review — not the full 740-document corpus at once. This
mirrors how this project already grew the English corpus itself, in
verified waves rather than all at once, and lets the staleness/review
mechanism get proven on a small set before scaling the ongoing
maintenance burden to the whole library.

**Effort**: UI-only, ~1–2 weeks. The pilot corpus translation is
dominated by the cost of real bilingual legal review per document,
not engineering time, and scales with how many documents are in the
pilot — this is a budget/staffing question as much as an engineering
one. Full-corpus translation, done responsibly, is a multi-month
undertaking that roughly doubles the project's ongoing content-
maintenance burden going forward.
**Dependencies**: an i18n architecture decision (how per-language
corpus data is structured and loaded); a per-language staleness
tracker; and, non-negotiably, a real bilingual legal reviewer — a
people/budget dependency this document can name but not supply.

## Password-based sign-in

**Recommendation: no, don't add it — with reasoning, not just a
scope note, since the master plan asks for a decision.**

The product already has passwordless magic-link sign-in. The case
for adding passwords is mostly "some users expect it"; the case
against is concrete and specific to this product:

- A password reset flow needs its own email-based recovery channel
  regardless — there's no other channel to recover into. That means
  adding passwords doesn't *remove* the email dependency this app
  already has; it adds a second credential on top of it.
- Passwords add a real, ongoing security-maintenance surface this
  project would have to actually keep up with: Supabase's own
  recommended safeguard for its password feature
  (`auth_leaked_password_protection`) is *already* sitting disabled
  in this project (a flagged-but-not-yet-actioned finding, see
  `DECISIONS.md`'s earliest entries) — adding a feature whose own
  vendor-recommended protection isn't even turned on for the feature
  this project *already* has would be adding risk before closing an
  existing gap.
- This product's actual usage pattern — infrequent, task-based visits
  to generate or revisit a document, not a daily-use app — is exactly
  the case passwordless sign-in suits best. Password friction (forgotten
  passwords, reused/weak passwords, support burden) is a cost that
  mainly pays off for frequent-use products, which this isn't.

Revisit this only if real user feedback specifically asks for it,
with a concrete reason (e.g., a user base segment with unreliable
email access) — not as a default "most apps have passwords" addition.

**Effort if ever revisited anyway**: small from a pure feature
standpoint — Supabase Auth supports password sign-in natively (a
toggle, a password field on the sign-in form, a "forgot password"
flow reusing the existing email-link mechanism). The real cost is the
standing commitment that comes with it: keeping leaked-password
protection enabled and monitored, handling password-reuse-related
support cases, going forward, indefinitely — not a cost that shows
up in a one-time estimate.
**Dependencies**: none technical; this is a product/security
judgment call, made explicitly above.

## Admin and moderation tooling

What an internal admin actually needs, and what each piece requires:

- **Tier dashboard** — a web view of `tiers.json`/
  `tools/promotion_report.py`'s already-computed output. Lowest
  effort of the four: the data already exists, this is "write a page
  that reads it," nothing more.
- **Feedback inbox** — a web view over the `feedback` table. Needs an
  admin-role concept first (see below) — today's RLS policies only
  support "the submitter" or "anonymous," not "any authorized admin."
- **Findings queue** — a web view over `verifier/findings.jsonl`.
  Bigger than it looks: that file is git-tracked, not a live database
  table, so a *live* admin queue (as opposed to a dashboard that
  re-reads a build artifact) implies moving findings into the
  database first — a real architectural shift, not just a new page.
- **Takedown of a bad clause** — today this means editing
  `data/clauses.json` directly, reviewed through the existing CI
  gates (`tools/validate_corpus.py` and friends) the normal way. A
  genuine self-service "takedown button" for a non-engineer admin
  would need a fast-path suppression flag (e.g. `suppressed: true`)
  that `assembleDocument()`/`validate_corpus.py` both respect — a
  real, scoped, buildable feature, but a materially bigger commitment
  than "add a button," since it means a second path into the corpus
  that bypasses the normal git-reviewed one and needs its own
  safeguards against misuse.

**The real, blocking dependency underneath all four**: an admin-role
mechanism. There is currently no concept of "this authenticated user
is an admin" anywhere in this project — every signed-in user is just
"a user," governed by the same owner-only RLS policies. Building any
of the four screens above means building this foundation first
(a Supabase custom claim or a dedicated `admin_users` table, plus new,
carefully-reviewed RLS policies granting admin-scoped read access to
tables that currently have none), since getting this wrong is exactly
the kind of RLS mistake this project has otherwise been careful
about avoiding.

**Effort**: the admin-role/RLS foundation alone, done carefully with
real tests (the same adversarial-RLS-testing discipline this project
already applies elsewhere) — roughly 1–2 weeks on its own. On top of
that: the tier dashboard is days: the feedback inbox is small once
the foundation exists; the findings queue is the second-biggest piece
here, since it requires deciding whether findings move into the
database at all; the takedown flag is small to build but carries
real ongoing responsibility for the suppression mechanism once it exists.
**Dependencies**: the admin-role foundation (blocks everything else);
a decision on whether `verifier/findings.jsonl` moves into the
database; and a real human to actually hold the admin role, which is
not something to fabricate here.
