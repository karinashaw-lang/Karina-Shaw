#!/usr/bin/env python3
"""Phase 4.4: the watcher's dated report for one scan window -- what
changed, for which cited source, and which clause ids are affected --
read from watcher/scanned.jsonl + changes.jsonl and written to
watcher/reports/<throughDate>.md. This is the master plan's literal
4.4 deliverable: "a dry run against last quarter's changes produces a
report."

    python3 watcher/report.py --since 2026-07-01 --through 2026-10-01
"""
import collections
import json
import os
import sys

SCANNED_PATH = 'watcher/scanned.jsonl'
CHANGES_PATH = 'watcher/changes.jsonl'
REPORTS_DIR = 'watcher/reports'


def load_jsonl(path):
    try:
        with open(path, encoding='utf-8') as f:
            return [json.loads(line) for line in f if line.strip()]
    except FileNotFoundError:
        return []


def main():
    args = sys.argv[1:]
    if '--since' not in args or '--through' not in args:
        print('usage: report.py --since YYYY-MM-DD --through YYYY-MM-DD', file=sys.stderr)
        return 1
    since = args[args.index('--since') + 1]
    through = args[args.index('--through') + 1]

    scanned = [s for s in load_jsonl(SCANNED_PATH)
               if s.get('sinceDate') == since and s.get('throughDate') == through]
    changes = [c for c in load_jsonl(CHANGES_PATH) if c.get('discoveredAt') == through]

    if not scanned:
        print(f'No scan recorded for {since}..{through} -- run watcher/scan_batch.py and '
              f'watcher/record_changes.py first.', file=sys.stderr)
        return 0

    lines = [
        f'# Law-change watch: {since} to {through}',
        '',
        f'Citations scanned: {len(scanned)}',
        f'Changes found: {len(changes)}',
        '',
    ]
    if changes:
        by_type = collections.Counter(c.get('sourceType') for c in changes)
        lines.append('By source type:')
        for t, n in by_type.most_common():
            lines.append(f'- {t}: {n}')
        lines.append('')
        for c in changes:
            affected = c.get('affectedClauseIds', [])
            lines += [
                f"## {c['url']}", '',
                f"**What changed:** {c['whatChanged']}", '',
                f"**Evidence:** {c['evidenceQuote']}", '',
                f"**Source checked:** {c['sourceChecked']}", '',
                f"**Affected clauses ({len(affected)}):** {', '.join(affected) if affected else 'none'}", '',
            ]
    else:
        lines.append('No changes found affecting any cited source in this window.')

    os.makedirs(REPORTS_DIR, exist_ok=True)
    path = os.path.join(REPORTS_DIR, f'{through}.md')
    with open(path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines) + '\n')
    print(f'Wrote {path} ({len(changes)} changes across {len(scanned)} scanned citations).')
    return 0


if __name__ == '__main__':
    sys.exit(main())
