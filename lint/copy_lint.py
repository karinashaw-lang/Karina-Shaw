#!/usr/bin/env python3
"""Phase 9.5: "scans all user-facing strings ... for advisory phrases
and enforcement-claim phrases, and fails CI on matches."

Corpus text (whyWeAsk/helpText, search copy, filing/next_steps.json)
already has its own check against lint/advisory_phrases.json, in
tools/validate_corpus.py. This script is the other half: Groundtruth's
own voice in its UI chrome, which that check never touched.

Scope deliberately excludes privacy.html/terms.html/storage-notice.html
(Phase 9.5's new legal-notice pages): those are conventional legal
documents that correctly say things like "you must" and "you agree" as
ordinary contract language describing what using the service requires
-- not Groundtruth personally advising a reader about their situation,
which is what "inform, never advise" actually governs. Mixing the two
would either force those pages into unnatural legal English or make
this lint useless by forcing the phrase lists down to nothing.

Scans raw file text, comments included, not just string literals --
deliberately conservative. A comment describing the real UI wording
tends to echo it (this script exists because exactly that happened:
see DECISIONS.md), so a same-phrase hit in a comment is a cheap,
real signal worth a one-line reword, not a false alarm worth
suppressing with a real JS/HTML parser this project has no other need
for.

Usage: python3 lint/copy_lint.py
"""
import json
import re
import sys

# Relative to the current working directory, not this script's own
# location -- the same convention tools/validate_corpus.py uses, and
# for the same reason: it's what lets tests/lint/test_copy_lint.py run
# this against a disposable tmp directory via cwd=, instead of always
# scanning the real repo regardless of what's being tested.
SCAN_FILES = ['index.html', 'sign.html', 'app.js', 'account.js', 'sign.js']


def load_phrases():
    advisory = json.load(open('lint/advisory_phrases.json', encoding='utf-8'))
    enforcement = json.load(open('lint/enforcement_phrases.json', encoding='utf-8'))
    return [(p, 'advisory') for p in advisory] + [(p, 'enforcement-claim') for p in enforcement]


def scan():
    hits = []
    phrases = load_phrases()
    for name in SCAN_FILES:
        text = open(name, encoding='utf-8').read()
        lower = text.lower()
        for phrase, kind in phrases:
            for m in re.finditer(re.escape(phrase.lower()), lower):
                line = text.count('\n', 0, m.start()) + 1
                hits.append(f'{name}:{line}: {kind} phrase "{phrase}"')
    return hits


def main():
    hits = scan()
    if hits:
        print('copy_lint found advisory or enforcement-claim phrasing in user-facing app copy:', file=sys.stderr)
        for h in hits[:30]:
            print(f'  {h}', file=sys.stderr)
        if len(hits) > 30:
            print(f'  ... and {len(hits) - 30} more', file=sys.stderr)
        print(file=sys.stderr)
        print('Groundtruth informs, it never advises -- reword to describe what', file=sys.stderr)
        print('something is or resembles, never what the reader should do or', file=sys.stderr)
        print('whether it will hold up legally. See lint/advisory_phrases.json', file=sys.stderr)
        print('and lint/enforcement_phrases.json for the full banned lists.', file=sys.stderr)
        return 1
    print(f'copy_lint: OK -- no advisory/enforcement-claim phrasing in {", ".join(SCAN_FILES)}.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
