#!/usr/bin/env python3
"""CA Wedge Plan Step 2.1/2.4: computes every authority clause's honest
verification level (tools/clause_levels.py — the single source of truth
tiering.py also uses) and writes verification_levels.json, a flat
clauseId -> level map the client loads alongside data/clauses.json so
the sourcing badge (app.js's renderBadge()) can show one of the three
real levels instead of re-deriving anything itself or just reading the
old binary status field.

Kept as a separate build artifact, not baked into data/clauses.json,
for the same reason tiers.json is separate: it's computed from
verifier/ state that changes on its own schedule (every checkpoint),
not from a clause edit, so it has its own freshness story and its own
--check staleness gate, exactly parallel to tiering.py's.

    python3 tools/build_verification_levels.py          # recompute and write
    python3 tools/build_verification_levels.py --check  # exit 1 if stale
"""
import json
import os
import sys
from datetime import date

from clause_levels import load_verifier_state, clause_level

OUTPUT_PATH = 'verification_levels.json'


def compute_levels():
    clauses = json.load(open('data/clauses.json', encoding='utf-8'))['clauses']
    checked_ids, unclean_ids = load_verifier_state()

    levels = {}
    counts = {'cited': 0, 'verified': 0, 'adversarially_checked': 0}
    for c in clauses:
        level = clause_level(c, checked_ids, unclean_ids)
        if level is None:
            continue  # drafting clause -- not applicable, no badge to show
        levels[c['id']] = level
        counts[level] += 1

    return {
        'generated_at': date.today().isoformat(),
        'levels': dict(sorted(levels.items())),
        'counts': counts,
    }


def main():
    check = '--check' in sys.argv
    result = compute_levels()

    if check:
        if not os.path.exists(OUTPUT_PATH):
            print(f'{OUTPUT_PATH} does not exist — run `python3 tools/build_verification_levels.py` and commit it.',
                  file=sys.stderr)
            return 1
        on_disk = json.load(open(OUTPUT_PATH, encoding='utf-8'))
        fresh = {'levels': result['levels'], 'counts': result['counts']}
        stale = {'levels': on_disk.get('levels'), 'counts': on_disk.get('counts')}
        if fresh != stale:
            print(f'{OUTPUT_PATH} is stale — the corpus or verifier state has changed since it was last generated.',
                  file=sys.stderr)
            print('Run `python3 tools/build_verification_levels.py` and commit the result.', file=sys.stderr)
            return 1
        print(f'{OUTPUT_PATH} is up to date.')
        return 0

    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print(f"Verification levels computed {result['generated_at']}: {result['counts']}")
    return 0


if __name__ == '__main__':
    sys.exit(main())
