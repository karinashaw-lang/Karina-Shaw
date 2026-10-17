#!/usr/bin/env python3
"""Phase 4.3: one-time migration adding `effectiveCycleChecked` to every
verified authority clause that cites a California statute (a citation
whose url is leginfo.legislature.ca.gov — this project's own convention
for a primary-source statute citation; case law cites courtlistener.com
or courts.ca.gov instead, never leginfo).

Backfills the value from the year of the clause's own `checkedDate`,
which is always correct as a starting point: checking a clause in, say,
September 2026 inherently happens after January 1, 2026, so that check
already reflects anything that took effect on this year's cycle. A
clause re-verified after a later January 1 gets a later checkedDate
too, so this backfill never needs special-casing for "was this checked
before or after Jan 1 of its own year" — a checkedDate's own year is
always on or after its own January 1 by definition.

    python3 tools/add_effective_cycle_checked.py          # dry run, prints a report
    python3 tools/add_effective_cycle_checked.py --write   # applies it
"""
import json
import re
import sys

CLAUSES_PATH = 'data/clauses.json'
CA_STATUTE_URL_RE = re.compile(r'leginfo\.legislature\.ca\.gov', re.IGNORECASE)


def main():
    write = '--write' in sys.argv

    with open(CLAUSES_PATH, encoding='utf-8') as f:
        original = f.read()
    data = json.loads(original)

    dumped = json.dumps(data, indent=2, ensure_ascii=False) + '\n'
    if dumped != original:
        raise SystemExit(
            'ABORT: json.dump(..., indent=2, ensure_ascii=False) + "\\n" is not '
            'byte-identical to the file on disk before any change is made. Refusing to write.'
        )

    eligible = 0
    already_has = 0
    for clause in data['clauses']:
        if clause['kind'] != 'authority' or clause.get('status') != 'verified':
            continue
        cites_ca_statute = any(
            CA_STATUTE_URL_RE.search(ct.get('url') or '') for ct in clause.get('citations', [])
        )
        if not cites_ca_statute:
            continue
        eligible += 1
        if 'effectiveCycleChecked' in clause:
            already_has += 1
            continue
        if write:
            clause['effectiveCycleChecked'] = int(clause['checkedDate'][:4])

    print(f'{eligible} verified authority clauses cite a CA statute '
          f'({already_has} already have effectiveCycleChecked).')

    if not write:
        print('Dry run — pass --write to apply.')
        return

    dumped = json.dumps(data, indent=2, ensure_ascii=False) + '\n'
    with open(CLAUSES_PATH, 'w', encoding='utf-8') as f:
        f.write(dumped)
    print(f'Wrote effectiveCycleChecked to {eligible - already_has} clauses.')


if __name__ == '__main__':
    main()
