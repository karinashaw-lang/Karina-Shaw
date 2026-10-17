#!/usr/bin/env python3
"""Phase 4.1: records a verification worker's results. Takes the JSON
array a worker returns (see verifier/prompt.md's "Output format") and
appends one line per clause to verifier/checked.jsonl (resume tracking —
every clause that was checked, regardless of outcome) and one line per
finding to verifier/findings.jsonl (severity, evidence, suggested fix).

Deliberately the only place either file is written, so the schema is
enforced once rather than trusted to every caller: a worker's raw output
goes through this before anything is considered recorded. Refuses to
re-record a clause id already in checked.jsonl rather than silently
duplicating or overwriting it — a worker that's rerun on an already-done
clause is a sign something upstream (the resume logic) didn't work, not
something to paper over here.

    python3 verifier/record_result.py results.json
    cat results.json | python3 verifier/record_result.py -
"""
import json
import sys
from datetime import datetime

CHECKED_PATH = 'verifier/checked.jsonl'
FINDINGS_PATH = 'verifier/findings.jsonl'
VALID_SEVERITIES = {'blocker', 'major', 'minor'}
REQUIRED_FINDING_KEYS = {'severity', 'category', 'summary', 'evidence', 'sourceChecked', 'suggestedFix'}


def already_checked():
    try:
        with open(CHECKED_PATH, encoding='utf-8') as f:
            return {json.loads(line)['clauseId'] for line in f if line.strip()}
    except FileNotFoundError:
        return set()


def validate_entry(entry):
    if 'clauseId' not in entry or not isinstance(entry.get('findings'), list):
        raise ValueError(f'malformed entry (needs clauseId + findings[]): {entry}')
    for finding in entry['findings']:
        missing = REQUIRED_FINDING_KEYS - set(finding.keys())
        if missing:
            raise ValueError(f'{entry["clauseId"]}: finding missing keys {sorted(missing)}: {finding}')
        if finding['severity'] not in VALID_SEVERITIES:
            raise ValueError(f'{entry["clauseId"]}: invalid severity {finding["severity"]!r}')


def main():
    if len(sys.argv) != 2:
        print('usage: record_result.py <results.json | ->', file=sys.stderr)
        return 1
    raw = sys.stdin.read() if sys.argv[1] == '-' else open(sys.argv[1], encoding='utf-8').read()
    results = json.loads(raw)
    if not isinstance(results, list):
        raise SystemExit('ABORT: expected a JSON array of {clauseId, findings} objects')

    for entry in results:
        validate_entry(entry)

    already = already_checked()
    duplicates = [e['clauseId'] for e in results if e['clauseId'] in already]
    if duplicates:
        raise SystemExit(f'ABORT: already recorded, refusing to re-record: {duplicates}')

    now = datetime.now().isoformat(timespec='seconds')
    with open(CHECKED_PATH, 'a', encoding='utf-8') as checked_f, \
         open(FINDINGS_PATH, 'a', encoding='utf-8') as findings_f:
        for entry in results:
            checked_f.write(json.dumps({
                'clauseId': entry['clauseId'], 'checkedAt': now, 'findingCount': len(entry['findings']),
            }, ensure_ascii=False) + '\n')
            for finding in entry['findings']:
                findings_f.write(json.dumps({
                    'clauseId': entry['clauseId'], 'foundAt': now, **finding,
                }, ensure_ascii=False) + '\n')

    total_findings = sum(len(e['findings']) for e in results)
    print(f'Recorded {len(results)} clauses ({total_findings} findings) to {CHECKED_PATH} / {FINDINGS_PATH}.',
          file=sys.stderr)
    return 0


if __name__ == '__main__':
    sys.exit(main())
