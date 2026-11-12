#!/usr/bin/env python3
"""CA Wedge Plan Step 3: add a `state` field (every record "CA" today)
to documents, clauses, and citations, so a future state expansion is a
data load against an already-existing field, not a schema migration
across the whole corpus a second time.

One-time migration, in the same style as the other tools/backfill_*.py
and migrate_*.py scripts: dry-run by default, --write applies it.

Key order matters here more than in a typical backfill, because some
authority clauses already carry a trailing `effectiveCycleChecked` key
(Phase 4.3) after `citations`. `state` goes right after `citations` and
before `effectiveCycleChecked` where that key exists -- appending it
naively would put it last, after effectiveCycleChecked, which is the
wrong key order for tools/validate_corpus.py's AUTH_WITH_CYCLE check.
This script rebuilds each clause dict in the exact order
tools/validate_corpus.py expects, rather than relying on dict append
order to happen to match.

filing/next_steps.json (the filing-instruction data this step also
names) does not exist yet -- CA Wedge Plan Step 12 builds it later, and
it will carry `state` itself when it's created, not here.
"""
import json
import sys

STATE_VALUE = 'CA'


def with_state_after(d, after_key):
    """Returns a new dict with every key of d in order, inserting
    state="CA" immediately after after_key (or at the end if
    after_key isn't present, which never happens for a real clause)."""
    out = {}
    for k, v in d.items():
        out[k] = v
        if k == after_key:
            out['state'] = STATE_VALUE
    if 'state' not in out:
        out['state'] = STATE_VALUE
    return out


def backfill_citation(ct):
    ct = dict(ct)
    ct['state'] = STATE_VALUE
    return ct


def backfill_clause(c):
    c = dict(c)
    if 'citations' in c:
        c['citations'] = [backfill_citation(ct) for ct in c['citations']]
    return with_state_after(c, 'citations')


def backfill_document(d):
    d = dict(d)
    d['state'] = STATE_VALUE
    return d


def main():
    write = '--write' in sys.argv

    clauses_data = json.load(open('data/clauses.json', encoding='utf-8'))
    docs_data = json.load(open('data/documents.json', encoding='utf-8'))

    already_clauses = sum(1 for c in clauses_data['clauses'] if 'state' in c)
    already_docs = sum(1 for d in docs_data if 'state' in d)
    already_citations = sum(
        1 for c in clauses_data['clauses'] for ct in c.get('citations', []) if 'state' in ct
    )

    new_clauses = [backfill_clause(c) for c in clauses_data['clauses']]
    new_docs = [backfill_document(d) for d in docs_data]
    total_citations = sum(len(c.get('citations', [])) for c in clauses_data['clauses'])

    print(f'{len(new_clauses)} clauses to backfill ({already_clauses} already had state)')
    print(f'{total_citations} citations to backfill ({already_citations} already had state)')
    print(f'{len(new_docs)} documents to backfill ({already_docs} already had state)')
    print(f'Value: "{STATE_VALUE}" (every record in this corpus is California content today)')

    if not write:
        print('\nDry run only. Re-run with --write to apply.')
        return

    with open('data/clauses.json', 'w', encoding='utf-8') as f:
        json.dump({'clauses': new_clauses}, f, indent=2, ensure_ascii=False)
        f.write('\n')
    with open('data/documents.json', 'w', encoding='utf-8') as f:
        json.dump(new_docs, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print('\nWrote state into data/clauses.json and data/documents.json.')


if __name__ == '__main__':
    main()
