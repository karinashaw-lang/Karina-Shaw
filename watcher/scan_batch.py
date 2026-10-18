#!/usr/bin/env python3
"""Phase 4.4: prepares one batch of corpus citations for the law-change
watcher to check against Lawstronaut/CourtListener (see
watcher/prompt.md). Reads index/citation_to_clauses.json, splits each
distinct citation into "statute" (a statute/regulation/agency-guidance
publisher) or "case" (a CourtListener opinion) by url host, and prints
a JSON packet of up to `--batch-size` of them.

Agency-guidance hosts (e.g. dir.ca.gov, irs.gov) are grouped with
"statute" rather than given a third bucket: Lawstronaut's horizon_scan
covers regulations and agency documents the same way it covers
statutes, and none of them are CourtListener case law, so the only
real split that matters for which tool a worker reaches for is
case-law-or-not.

Like verifier/sample.py, a batch isn't drawn fresh each call -- the
full, deterministic list of every distinct citation in the index is
always the same (barring a corpus change), so "the next batch" just
means "the next slice of it a worker hasn't scanned yet" --
`watcher/record_changes.py` is what actually marks a citation scanned.

    python3 watcher/scan_batch.py --since 2026-07-01 --through 2026-10-01 --batch-size 50
    python3 watcher/scan_batch.py --since ... --through ... --batch-size 50 --remaining
    python3 watcher/scan_batch.py --since ... --through ... --status
"""
import json
import sys
from urllib.parse import urlparse

INDEX_PATH = 'index/citation_to_clauses.json'
SCANNED_PATH = 'watcher/scanned.jsonl'
CASE_HOSTS = ('courtlistener.com',)


def classify(url):
    host = urlparse(url).netloc.lower()
    return 'case' if any(h in host for h in CASE_HOSTS) else 'statute'


def load_index():
    with open(INDEX_PATH, encoding='utf-8') as f:
        return json.load(f)


def flatten(index):
    """One entry per distinct (url, case, cite) triple -- the same
    granularity build_citation_index.py groups citations at."""
    entries = []
    for url, citations in index['byUrl'].items():
        for c in citations:
            entries.append({'url': url, 'case': c['case'], 'cite': c['cite']})
    return entries


def scan_key(entry):
    return f"{entry['url']}|{entry.get('case')}|{entry.get('cite')}"


def already_scanned():
    try:
        with open(SCANNED_PATH, encoding='utf-8') as f:
            return {json.loads(line)['key'] for line in f if line.strip()}
    except FileNotFoundError:
        return set()


def main():
    args = sys.argv[1:]
    if '--since' not in args or '--through' not in args:
        print('usage: scan_batch.py --since YYYY-MM-DD --through YYYY-MM-DD '
              '[--batch-size N] [--remaining] [--status]', file=sys.stderr)
        return 1
    since = args[args.index('--since') + 1]
    through = args[args.index('--through') + 1]
    batch_size = 50
    if '--batch-size' in args:
        batch_size = int(args[args.index('--batch-size') + 1])

    entries = flatten(load_index())
    done = already_scanned()
    remaining = [e for e in entries if scan_key(e) not in done]

    if '--status' in args:
        print(f'Total distinct citations: {len(entries)}')
        print(f'Already scanned: {len(entries) - len(remaining)}')
        print(f'Remaining: {len(remaining)}')
        return 0

    pool = remaining if '--remaining' in args else entries
    batch = pool[:batch_size]
    statute = [e for e in batch if classify(e['url']) == 'statute']
    case = [e for e in batch if classify(e['url']) == 'case']

    print(json.dumps({
        'sinceDate': since, 'throughDate': through,
        'statuteCitations': statute, 'caseCitations': case,
    }, indent=2, ensure_ascii=False))
    print(f'Batch of {len(batch)} ({len(statute)} statute, {len(case)} case); '
          f'{len(pool) - len(batch)} remaining in this pool after this batch.', file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
