# Groundtruth — data inventory

Generated from the actual schema and app code by `tools/generate_data_inventory.py` -- run that script (and commit the result) any time a table, column, policy, or storage key changes. This is the factual source the Privacy Policy is written against; it does not replace that page and is not itself legal advice.

## Stored only in your browser (no account required)

### `groundtruth-analytics-opt-out` (localStorage)

Whether you've turned analytics off from the Account screen (a plain "true"/absent flag).

**Deletion:** Removed by turning analytics back on, or by clearing your browser's site data.

### `groundtruth-analytics-session` (sessionStorage)

A random id grouping this browser tab's own analytics events together (see the `analytics_events` table above) -- not a persistent identifier.

**Deletion:** Gone automatically when the tab is closed; sessionStorage never survives that.

### `groundtruth-draft` (localStorage)

Your in-progress answers for whichever document you're currently filling out, so closing the tab mid-wizard doesn't lose them. One slot -- starting a new document replaces it.

**Deletion:** Cleared automatically once you finish and save the document, or you can clear it by leaving the wizard without finishing. Never leaves your browser.

### `groundtruth-library` (localStorage)

Every document you've saved: its answers, which clauses it used, and its version history. This is the actual "library" feature -- an account only mirrors it to the cloud, it does not replace it.

**Deletion:** Deleted entry-by-entry from the library screen, or entirely by clearing your browser's site data. Never leaves your browser unless you sign in and sync (see the `agreements` table above).

### `groundtruth-promises` (localStorage)

The free-text list of commitments you've typed into the "Promises" tracker.

**Deletion:** Deleted entry-by-entry from that screen, or entirely by clearing your browser's site data. Never sent anywhere.

Signing in additionally stores your Supabase session under a key the `@supabase/supabase-js` library names itself (`sb-<project-ref>-auth-token`, in `localStorage`) -- it holds nothing but your current login session, and is removed automatically when you sign out or clear your browser's site data.

## Stored in Supabase (only if you create an account)

### `agreements`

A cloud copy of one saved document (the same thing the local "library" already keeps in your browser) so it can sync across devices once you sign in.

**Columns:** `id` (text), `user_id` (uuid), `document_id` (text), `title` (text), `answers` (jsonb), `generated_at` (timestamptz), `updated_at` (timestamptz)

**Who can read/write it (database policy):** delete: "Users can delete their own agreements"; insert: "Users can insert their own agreements"; select: "Users can view their own agreements"; update: "Users can update their own agreements"

**Retention and deletion:** Kept until you delete the document (from the Account/library screen) or delete your account.

### `analytics_events`

A single event (a wizard step reached, a document opened or exported, a search run) with no name, email, or account link of any kind, and no IP address column at all. A random, non-persistent per-visit id groups one session's own events together; it resets every time you close the tab and cannot be used to recognize you on a later visit. Off by default from the Account screen's analytics toggle.

**Columns:** `id` (uuid), `event_type` (text), `document_id` (text), `step_id` (text), `export_format` (text), `search_query` (text), `search_result_count` (integer), `created_at` (timestamptz), `client_session_id` (uuid)

**Who can read/write it (database policy):** insert: "Anyone can record an analytics event"

**Retention and deletion:** There is no identifier connecting a row back to a person, so a deletion request has nothing to locate or delete here; rows are kept indefinitely for aggregate reporting (tools/analytics_report.js) and are never read individually.

### `audit_log`

One entry per document you generate while signed in: which clauses went into it, their checked-dates, and a content fingerprint -- never your answers themselves (the table has no column for them).

**Columns:** `id` (uuid), `user_id` (uuid), `document_id` (text), `corpus_version` (text), `clause_ids` (jsonb), `clause_checked_dates` (jsonb), `output_hash` (text), `created_at` (timestamptz)

**Who can read/write it (database policy):** insert: "Users can insert their own audit log entries"; select: "Users can view their own audit log"

**Retention and deletion:** Append-only by design (no delete policy for you to remove a single entry); the whole history is removed only by deleting your account.

### `document_shares`

The record behind an expiring "share for signature" link: which document, a random access token, and an expiration time.

**Columns:** `id` (uuid), `owner_id` (uuid), `token` (text), `document_id` (text), `title` (text), `answers` (jsonb), `clause_snapshots` (jsonb), `schema_version` (integer), `corpus_version` (text), `expires_at` (timestamptz), `created_at` (timestamptz)

**Who can read/write it (database policy):** delete: "Owners can delete their own shares"; insert: "Owners can create their own shares"; select: "Owners can view their own shares"

**Retention and deletion:** You can delete a share yourself from the Account screen; any remaining ones go when you delete your account.

### `document_signatures`

The signature a signer enters on a shared document: their typed name or drawn signature image, which signature method, and the IP address they signed from (kept only to help you show who signed, from where, if that is ever in question).

**Columns:** `id` (uuid), `share_id` (uuid), `owner_id` (uuid), `signer_name` (text), `signature_type` (text), `signature_data` (text), `signer_ip` (text), `signed_at` (timestamptz)

**Who can read/write it (database policy):** select: "Owners can view signatures on their own shares"

**Retention and deletion:** Deleted automatically when the share it belongs to is deleted (or when you delete your account).

### `document_versions`

Keeps the previous version of a saved document on hand when you regenerate it, so you can see what changed or restore it.

**Columns:** `id` (uuid), `user_id` (uuid), `agreement_id` (text), `schema_version` (integer), `corpus_version` (text), `clause_snapshots` (jsonb), `generated_at` (timestamptz), `replaced_at` (timestamptz), `created_at` (timestamptz)

**Who can read/write it (database policy):** delete: "Users can delete their own document versions"; insert: "Users can insert their own document versions"; select: "Users can view their own document versions"

**Retention and deletion:** You can delete a specific saved version yourself; the rest goes when you delete your account.

### `error_reports`

A JavaScript error or stack trace, scrubbed client-side before it is ever sent (account.js's scrubErrorText()/parseStackFrames() strip anything email-shaped, any long quoted text, and every source line except the bare function/file/line/column). No user_id, no field values, ever.

**Columns:** `id` (uuid), `error_name` (text), `message` (text), `source_file` (text), `line_number` (integer), `column_number` (integer), `stack_frames` (jsonb), `user_agent` (text), `page` (text), `client_session_id` (uuid), `created_at` (timestamptz)

**Who can read/write it (database policy):** insert: "Anyone can record an error report"

**Retention and deletion:** Same as analytics_events: nothing here identifies a person, so there is nothing to locate by request; kept indefinitely for debugging (tools/error_report_summary.js).

### `feedback`

What you typed into the in-app feedback form (a free-text message, an optional 1-5 rating, and which document/clause it was about). Usable anonymously -- it never requires an account.

**Columns:** `id` (uuid), `user_id` (uuid), `category` (text), `message` (text), `rating` (integer), `document_id` (text), `clause_id` (text), `routed_at` (timestamptz), `created_at` (timestamptz)

**Who can read/write it (database policy):** insert: "Anyone can submit anonymous feedback"; insert: "Users can insert their own feedback"; select: "Users can view their own feedback"

**Retention and deletion:** If submitted anonymously, there is no account link at all, so there is nothing to find or delete by request -- it was never tied to you in the first place. If submitted while signed in, it is removed when you delete your account.

### `order_items`

Line items for an order, same not-yet-in-use status as orders.

**Columns:** `id` (uuid), `order_id` (uuid), `user_id` (uuid), `document_id` (text), `description` (text), `amount_cents` (integer), `created_at` (timestamptz)

**Who can read/write it (database policy):** select: "Users can view their own order items"

**Retention and deletion:** Same as orders.

### `orders`

A record of a payment (not yet in use -- see DECISIONS.md, Phase 7.2: Stripe was skipped for lack of credentials, so this table exists but nothing writes to it yet).

**Columns:** `id` (uuid), `user_id` (uuid), `stripe_checkout_session_id` (text), `stripe_payment_intent_id` (text), `amount_cents` (integer), `currency` (text), `status` (text), `created_at` (timestamptz), `updated_at` (timestamptz)

**Who can read/write it (database policy):** select: "Users can view their own orders"

**Retention and deletion:** Would be kept until account deletion once payments exist; no retention policy needed yet, since nothing populates it.

### `rate_limits`

An internal counter (a key string, a time window, a count) used only to throttle abusive request bursts against the share-view/share-sign functions. Not reachable through the public API in any direction -- see supabase/migrations/20261029000000_rate_limits.sql.

**Columns:** `key` (text), `window_start` (timestamptz), `count` (integer)

**Who can read/write it (database policy):** nobody, through the public API -- reached only by server-side code holding the service role key.

**Retention and deletion:** Not personal data about any identifiable person (the key is an IP address, never an account); rows are overwritten in place every minute and never accumulate.

## What this project deliberately does not collect

- No cookies of any kind -- every mechanism above is `localStorage`/`sessionStorage` or a database row, not a cookie.
- No IP address is stored anywhere except `document_signatures.signer_ip` (recorded only for a document you specifically ask someone to sign) and the short-lived `rate_limits` counters above, which hold an IP only as a throttling key, never as a profile.
- No third-party analytics, advertising, or tracking script of any kind is loaded by this app.
- No wizard field value is ever stored outside the two places you put it yourself: `localStorage` on your own device, and the `agreements`/`document_versions` tables above if you choose to sign in and sync.

