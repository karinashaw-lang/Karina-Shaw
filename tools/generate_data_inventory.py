#!/usr/bin/env python3
"""Phase 9.5: "Generate a 'data inventory' doc from the code so the
policy stays accurate."

The table/column/policy facts below come from parsing the real schema
sources (supabase/schema.sql, every file in supabase/migrations/) and
the real localStorage/sessionStorage key constants in app.js/account.js
-- not retyped independently of the code, which is exactly the kind of
drift this script exists to rule out. The one thing that can't be
extracted mechanically -- what a table or key is actually FOR, and its
retention/deletion story -- is a small hand-written ANNOTATIONS entry
per table/key below. A table or key with no annotation is a hard
error, not a silently incomplete doc: the whole point is that nothing
touching user data can go live without a human having written down,
in plain language, what it is and how it's deleted.

Usage:
  python3 tools/generate_data_inventory.py          # (re)writes PRIVACY_DATA_INVENTORY.md
  python3 tools/generate_data_inventory.py --check  # exit 1 if the committed file is stale
"""
import os
import re
import sys

SQL_FILES = ['supabase/schema.sql'] + sorted(
    f'supabase/migrations/{name}' for name in os.listdir('supabase/migrations')
) if os.path.isdir('supabase/migrations') else ['supabase/schema.sql']

OUT_PATH = 'PRIVACY_DATA_INVENTORY.md'

TABLE_RE = re.compile(r'create table(?: if not exists)? public\.(\w+)\s*\(\n([\s\S]*?)\n\);')
POLICY_RE = re.compile(r'create policy\s+"([^"]+)"\s+on\s+public\.(\w+)\s+for\s+(select|insert|update|delete)', re.IGNORECASE)
SKIP_LINE_PREFIXES = ('constraint ', 'check ', 'check(', 'unique ', 'unique(', 'primary key (', 'foreign key')

# What each table is for, in plain language, and how it's actually
# removed -- not what would be convenient to claim, but what the real
# policies above actually do. Every table ever created by the SQL
# files above must have an entry here, checked by main() below.
TABLE_NOTES = {
    'agreements': (
        'A cloud copy of one saved document (the same thing the local "library" '
        'already keeps in your browser) so it can sync across devices once you sign in.',
        'Kept until you delete the document (from the Account/library screen) or delete your account.',
    ),
    'orders': (
        'A record of a payment (not yet in use -- see DECISIONS.md, Phase 7.2: Stripe was '
        'skipped for lack of credentials, so this table exists but nothing writes to it yet).',
        'Would be kept until account deletion once payments exist; no retention policy needed yet, since nothing populates it.',
    ),
    'order_items': (
        'Line items for an order, same not-yet-in-use status as orders.',
        'Same as orders.',
    ),
    'audit_log': (
        'One entry per document you generate while signed in: which clauses went into it, their '
        'checked-dates, and a content fingerprint -- never your answers themselves (the table has '
        'no column for them).',
        'Append-only by design (no delete policy for you to remove a single entry); the whole '
        'history is removed only by deleting your account.',
    ),
    'document_versions': (
        'Keeps the previous version of a saved document on hand when you regenerate it, so you '
        'can see what changed or restore it.',
        'You can delete a specific saved version yourself; the rest goes when you delete your account.',
    ),
    'feedback': (
        'What you typed into the in-app feedback form (a free-text message, an optional 1-5 '
        'rating, and which document/clause it was about). Usable anonymously -- it never requires '
        'an account.',
        'If submitted anonymously, there is no account link at all, so there is nothing to find or '
        'delete by request -- it was never tied to you in the first place. If submitted while '
        'signed in, it is removed when you delete your account.',
    ),
    'document_shares': (
        'The record behind an expiring "share for signature" link: which document, a random '
        'access token, and an expiration time.',
        'You can delete a share yourself from the Account screen; any remaining ones go when you delete your account.',
    ),
    'document_signatures': (
        'The signature a signer enters on a shared document: their typed name or drawn signature '
        'image, which signature method, and the IP address they signed from (kept only to help you '
        'show who signed, from where, if that is ever in question).',
        'Deleted automatically when the share it belongs to is deleted (or when you delete your account).',
    ),
    'analytics_events': (
        'A single event (a wizard step reached, a document opened or exported, a search run) with '
        'no name, email, or account link of any kind, and no IP address column at all. A random, '
        'non-persistent per-visit id groups one session\'s own events together; it resets every '
        'time you close the tab and cannot be used to recognize you on a later visit. Off by '
        'default from the Account screen\'s analytics toggle.',
        'There is no identifier connecting a row back to a person, so a deletion request has '
        'nothing to locate or delete here; rows are kept indefinitely for aggregate reporting '
        '(tools/analytics_report.js) and are never read individually.',
    ),
    'error_reports': (
        'A JavaScript error or stack trace, scrubbed client-side before it is ever sent '
        '(account.js\'s scrubErrorText()/parseStackFrames() strip anything email-shaped, any '
        'long quoted text, and every source line except the bare function/file/line/column). No '
        'user_id, no field values, ever.',
        'Same as analytics_events: nothing here identifies a person, so there is nothing to locate '
        'by request; kept indefinitely for debugging (tools/error_report_summary.js).',
    ),
    'rate_limits': (
        'An internal counter (a key string, a time window, a count) used only to throttle abusive '
        'request bursts against the share-view/share-sign functions. Not reachable through the '
        'public API in any direction -- see supabase/migrations/20261029000000_rate_limits.sql.',
        'Not personal data about any identifiable person (the key is an IP address, never an '
        'account); rows are overwritten in place every minute and never accumulate.',
    ),
}

# localStorage/sessionStorage keys this app's own code writes, and
# what's actually in them. Supabase's own client library additionally
# keeps your signed-in session in a key it names itself (sb-<project
# ref>-auth-token) once you sign in -- that key isn't written by this
# project's code, so it can't be extracted mechanically the way the
# keys below are, but it holds nothing more than your current login
# session and is documented here for completeness.
LOCAL_KEY_NOTES = {
    'groundtruth-draft': (
        'localStorage',
        'Your in-progress answers for whichever document you\'re currently filling out, so closing '
        'the tab mid-wizard doesn\'t lose them. One slot -- starting a new document replaces it.',
        'Cleared automatically once you finish and save the document, or you can clear it by '
        'leaving the wizard without finishing. Never leaves your browser.',
    ),
    'groundtruth-library': (
        'localStorage',
        'Every document you\'ve saved: its answers, which clauses it used, and its version history. '
        'This is the actual "library" feature -- an account only mirrors it to the cloud, it does '
        'not replace it.',
        'Deleted entry-by-entry from the library screen, or entirely by clearing your browser\'s '
        'site data. Never leaves your browser unless you sign in and sync (see the `agreements` table above).',
    ),
    'groundtruth-promises': (
        'localStorage',
        'The free-text list of commitments you\'ve typed into the "Promises" tracker.',
        'Deleted entry-by-entry from that screen, or entirely by clearing your browser\'s site data. '
        'Never sent anywhere.',
    ),
    'groundtruth-analytics-opt-out': (
        'localStorage',
        'Whether you\'ve turned analytics off from the Account screen (a plain "true"/absent flag).',
        'Removed by turning analytics back on, or by clearing your browser\'s site data.',
    ),
    'groundtruth-analytics-session': (
        'sessionStorage',
        'A random id grouping this browser tab\'s own analytics events together (see the '
        '`analytics_events` table above) -- not a persistent identifier.',
        'Gone automatically when the tab is closed; sessionStorage never survives that.',
    ),
}


def extract_tables():
    tables = {}
    for path in SQL_FILES:
        if not os.path.exists(path):
            continue
        text = open(path, encoding='utf-8').read()
        for m in TABLE_RE.finditer(text):
            name, body = m.group(1), m.group(2)
            columns = []
            for line in body.split('\n'):
                stripped = line.strip().rstrip(',')
                if not stripped or stripped.lower().startswith(SKIP_LINE_PREFIXES):
                    continue
                tokens = stripped.split()
                if len(tokens) >= 2:
                    columns.append((tokens[0], tokens[1]))
            tables[name] = {'columns': columns, 'policies': [], 'source': path}
        for m in POLICY_RE.finditer(text):
            policy_name, table, cmd = m.group(1), m.group(2), m.group(3).lower()
            if table in tables:
                tables[table]['policies'].append((cmd, policy_name))
    return tables


def extract_local_keys():
    # Most calls go through a named constant (localStorage.setItem(DRAFT_KEY,
    # ...)), not a literal string at the call site -- so the real source of
    # truth is each `const X_KEY = '...'` declaration, not the call sites
    # themselves. A literal string passed directly (no constant) is also
    # picked up, so either style is covered.
    keys = set()
    for path in ('app.js', 'account.js', 'sign.js'):
        if not os.path.exists(path):
            continue
        text = open(path, encoding='utf-8').read()
        for m in re.finditer(r"(?:localStorage|sessionStorage)\.(?:setItem|getItem|removeItem)\('([^']+)'", text):
            keys.add(m.group(1))
        for m in re.finditer(r"const \w+_KEY = '([^']+)';", text):
            keys.add(m.group(1))
    return keys


def render(tables, keys):
    lines = []
    lines.append('# Groundtruth — data inventory')
    lines.append('')
    lines.append('Generated from the actual schema and app code by `tools/generate_data_inventory.py` '
                  '-- run that script (and commit the result) any time a table, column, policy, or '
                  'storage key changes. This is the factual source the Privacy Policy is written '
                  'against; it does not replace that page and is not itself legal advice.')
    lines.append('')
    lines.append('## Stored only in your browser (no account required)')
    lines.append('')
    for key in sorted(keys):
        if key not in LOCAL_KEY_NOTES:
            raise SystemExit(f'generate_data_inventory.py: no annotation for local storage key "{key}" -- add one to LOCAL_KEY_NOTES before regenerating.')
        storage, purpose, deletion = LOCAL_KEY_NOTES[key]
        lines.append(f'### `{key}` ({storage})')
        lines.append('')
        lines.append(purpose)
        lines.append('')
        lines.append(f'**Deletion:** {deletion}')
        lines.append('')
    lines.append('Signing in additionally stores your Supabase session under a key the '
                  '`@supabase/supabase-js` library names itself (`sb-<project-ref>-auth-token`, '
                  'in `localStorage`) -- it holds nothing but your current login session, and is '
                  'removed automatically when you sign out or clear your browser\'s site data.')
    lines.append('')
    lines.append('## Stored in Supabase (only if you create an account)')
    lines.append('')
    for name in sorted(tables):
        if name not in TABLE_NOTES:
            raise SystemExit(f'generate_data_inventory.py: no annotation for table "{name}" -- add one to TABLE_NOTES before regenerating.')
        purpose, retention = TABLE_NOTES[name]
        info = tables[name]
        lines.append(f'### `{name}`')
        lines.append('')
        lines.append(purpose)
        lines.append('')
        cols = ', '.join(f'`{c}` ({t})' for c, t in info['columns'])
        lines.append(f'**Columns:** {cols}')
        lines.append('')
        if info['policies']:
            pol = '; '.join(f'{cmd}: "{pname}"' for cmd, pname in sorted(info['policies']))
            lines.append(f'**Who can read/write it (database policy):** {pol}')
        else:
            lines.append('**Who can read/write it (database policy):** nobody, through the public API -- '
                          'reached only by server-side code holding the service role key.')
        lines.append('')
        lines.append(f'**Retention and deletion:** {retention}')
        lines.append('')
    lines.append('## What this project deliberately does not collect')
    lines.append('')
    lines.append('- No cookies of any kind -- every mechanism above is `localStorage`/`sessionStorage` '
                  'or a database row, not a cookie.')
    lines.append('- No IP address is stored anywhere except `document_signatures.signer_ip` (recorded '
                  'only for a document you specifically ask someone to sign) and the short-lived '
                  '`rate_limits` counters above, which hold an IP only as a throttling key, never as a profile.')
    lines.append('- No third-party analytics, advertising, or tracking script of any kind is loaded by this app.')
    lines.append('- No wizard field value is ever stored outside the two places you put it yourself: '
                  '`localStorage` on your own device, and the `agreements`/`document_versions` tables '
                  'above if you choose to sign in and sync.')
    lines.append('')
    return '\n'.join(lines) + '\n'


def main():
    check = '--check' in sys.argv
    tables = extract_tables()
    keys = extract_local_keys()
    fresh = render(tables, keys)

    if check:
        if not os.path.exists(OUT_PATH):
            print(f'{OUT_PATH} does not exist — run `python3 tools/generate_data_inventory.py` and commit it.', file=sys.stderr)
            return 1
        on_disk = open(OUT_PATH, encoding='utf-8').read()
        if on_disk != fresh:
            print(f'{OUT_PATH} is stale — the schema or app code changed since it was last generated.', file=sys.stderr)
            print('Run `python3 tools/generate_data_inventory.py` and commit the result.', file=sys.stderr)
            return 1
        print(f'{OUT_PATH} is up to date.')
        return 0

    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        f.write(fresh)
    print(f'Wrote {OUT_PATH}: {len(tables)} table(s), {len(keys)} local storage key(s).')
    return 0


if __name__ == '__main__':
    sys.exit(main())
