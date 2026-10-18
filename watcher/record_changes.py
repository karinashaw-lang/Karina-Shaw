#!/usr/bin/env python3
"""Phase 4.4: records a watcher worker's results for one scanned batch.
Takes the batch watcher/scan_batch.py produced (every citation actually
checked, finding or not) and the worker's JSON array of real findings
(see watcher/prompt.md's "Output format") and:
  - appends one line per scanned citation to watcher/scanned.jsonl
    (resume tracking, mirroring verifier/checked.jsonl), so a later
    `scan_batch.py --remaining` doesn't hand it out again;
  - looks up each finding's url against index/citation_to_clauses.json
    and appends one line per finding, with its matched clause ids
    attached, to watcher/changes.jsonl.

Deliberately the only place either file is written, same reasoning as
verifier/record_result.py: a worker's raw output goes through
validation once here, not trusted to every caller. A finding whose url
isn't one of the citations actually in the batch is refused outright --
that's either a fabricated result or a result recorded against the
wrong batch, not something to paper over.

    python3 watcher/record_changes.py batch.json results.json
"""
import json
import sys
from datetime import datetime

SCANNED_PATH = 'watcher/scanned.jsonl'
CHANGES_PATH = 'watcher/changes.jsonl'
INDEX_PATH = 'index/citation_to_clauses.json'
VALID_SOURCE_TYPES = {'statute', 'case'}
REQUIRED_KEYS = {'url', 'sourceType', 'whatChanged', 'evidenceQuote', 'sourceChecked', 'discoveredAt'}


def scan_key(entry):
    return f"{entry['url']}|{entry.get('case')}|{entry.get('cite')}"


def already_scanned():
    try:
        with open(SCANNED_PATH, encoding='utf-8') as f:
            return {json.loads(line)['key'] for line in f if line.strip()}
    except FileNotFoundError:
        return set()


def validate_finding(finding):
    missing = REQUIRED_KEYS - set(finding.keys())
    if missing:
        raise ValueError(f'finding missing keys {sorted(missing)}: {finding}')
    if finding['sourceType'] not in VALID_SOURCE_TYPES:
        raise ValueError(f"invalid sourceType {finding['sourceType']!r}: {finding}")


def clause_ids_for_url(url, index):
    ids = set()
    for entry in index['byUrl'].get(url, []):
        ids.update(entry['clauseIds'])
    return sorted(ids)


def main():
    if len(sys.argv) != 3:
        print('usage: record_changes.py <batch.json> <results.json>', file=sys.stderr)
        return 1
    batch = json.load(open(sys.argv[1], encoding='utf-8'))
    results = json.loads(open(sys.argv[2], encoding='utf-8').read())
    if not isinstance(results, list):
        raise SystemExit('ABORT: expected a JSON array of findings (see watcher/prompt.md)')

    for finding in results:
        validate_finding(finding)

    scanned_entries = batch.get('statuteCitations', []) + batch.get('caseCitations', [])
    already = already_scanned()
    duplicate_keys = [e for e in scanned_entries if scan_key(e) in already]
    if duplicate_keys:
        raise SystemExit(f'ABORT: already recorded as scanned, refusing to re-record: {duplicate_keys[:5]}')

    batch_urls = {e['url'] for e in scanned_entries}
    unmatched = sorted({f['url'] for f in results} - batch_urls)
    if unmatched:
        raise SystemExit(f'ABORT: finding url(s) not in the scanned batch: {unmatched}')

    index = json.load(open(INDEX_PATH, encoding='utf-8'))
    now = datetime.now().isoformat(timespec='seconds')

    with open(SCANNED_PATH, 'a', encoding='utf-8') as scanned_f:
        for e in scanned_entries:
            scanned_f.write(json.dumps({
                'key': scan_key(e), 'url': e['url'], 'case': e.get('case'), 'cite': e.get('cite'),
                'scannedAt': now, 'sinceDate': batch.get('sinceDate'), 'throughDate': batch.get('throughDate'),
            }, ensure_ascii=False) + '\n')

    with open(CHANGES_PATH, 'a', encoding='utf-8') as changes_f:
        for finding in results:
            changes_f.write(json.dumps({
                **finding, 'recordedAt': now,
                'affectedClauseIds': clause_ids_for_url(finding['url'], index),
            }, ensure_ascii=False) + '\n')

    print(f'Recorded {len(scanned_entries)} scanned citations, {len(results)} findings '
          f'to {SCANNED_PATH} / {CHANGES_PATH}.', file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
