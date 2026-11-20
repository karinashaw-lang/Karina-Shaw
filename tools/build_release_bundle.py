#!/usr/bin/env python3
"""MVP_BUILD_INSTRUCTIONS.md item 2.3: builds the document/clause data
bundle the `release-document` edge function ships with, so it can
render a document server-side without a live fetch back into this
repo's own `data/` files at request time.

Scoped to the approved launch set (`LAUNCH_SET_PROPOSAL.md`), not the
full 741-document corpus, for two independent reasons, not just one:
only launch-set documents are "published, promoted and sold" per the
owner's own approved launch-set proposal (Global Rule -- 0.3 in
MVP_BUILD_INSTRUCTIONS.md), and the full corpus's data/clauses.json is
~21MB, large enough to be a real concern for an edge function's
deploy-bundle size, where the filtered launch set is ~2.7MB. A
document outside the launch set is correctly refused by
release-document at request time (see its own code) rather than
silently rendered from stale or missing bundled data.

    python3 tools/build_release_bundle.py          # recompute, write the bundle, print summary
    python3 tools/build_release_bundle.py --check   # recompute in memory, exit 1 if the files on disk don't match (CI staleness gate)
"""
import json
import re
import sys
from datetime import date

OUT_DOCS = 'supabase/functions/release-document/data/launch_set_documents.json'
OUT_CLAUSES = 'supabase/functions/release-document/data/launch_set_clauses.json'
OUT_LEVELS = 'supabase/functions/release-document/data/launch_set_verification_levels.json'


def launch_set_ids():
    text = open('LAUNCH_SET_PROPOSAL.md', encoding='utf-8').read()
    return re.findall(r'^- `([a-z0-9_]+)`', text, re.MULTILINE)


def clause_entry_id(entry):
    return entry if isinstance(entry, str) else entry['id']


def build():
    ids = launch_set_ids()
    docs = json.load(open('data/documents.json', encoding='utf-8'))
    docs_by_id = {d['id']: d for d in docs}
    missing = [i for i in ids if i not in docs_by_id]
    if missing:
        sys.exit(f'build_release_bundle: launch-set id(s) not in data/documents.json: {missing}')
    sel_docs = [docs_by_id[i] for i in ids]

    clause_ids = set()
    for d in sel_docs:
        clause_ids.update(clause_entry_id(e) for e in d.get('clauseOrder', []))

    all_clauses = json.load(open('data/clauses.json', encoding='utf-8'))['clauses']
    sel_clauses = [c for c in all_clauses if c['id'] in clause_ids]
    found_ids = {c['id'] for c in sel_clauses}
    dangling = clause_ids - found_ids
    if dangling:
        # Matches assembleDocument()'s own behavior in app.js: a
        # clauseOrder entry with no matching clause is dropped, not
        # fatal -- but still worth a loud warning here, since a
        # document silently missing a clause server-side is exactly
        # the kind of drift a CI --check gate exists to catch.
        print(f'build_release_bundle: warning -- {len(dangling)} clauseOrder id(s) with no matching clause: '
              f'{sorted(dangling)[:5]}{"..." if len(dangling) > 5 else ""}', file=sys.stderr)

    docs_out = {'generated_at': str(date.today()), 'documents': sel_docs}
    clauses_out = {'generated_at': str(date.today()), 'clauses': sel_clauses}

    all_levels = json.load(open('verification_levels.json', encoding='utf-8'))['levels']
    sel_levels = {cid: all_levels[cid] for cid in found_ids if cid in all_levels}
    levels_out = {'generated_at': str(date.today()), 'levels': sel_levels}

    return docs_out, clauses_out, levels_out


def write_stable(path, payload):
    # generated_at is excluded from the staleness comparison (below)
    # the same way tools/tiering.py excludes it from its own --check,
    # so a same-day re-run that changes nothing real doesn't report
    # stale just because the date string differs from a run made
    # earlier the same day with --check against yesterday's file.
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, indent=2, sort_keys=False)
        f.write('\n')


def strip_date(payload):
    return {k: v for k, v in payload.items() if k != 'generated_at'}


def main():
    docs_out, clauses_out, levels_out = build()
    outputs = [(OUT_DOCS, docs_out), (OUT_CLAUSES, clauses_out), (OUT_LEVELS, levels_out)]
    if '--check' in sys.argv[1:]:
        for path, expected in outputs:
            try:
                on_disk = json.load(open(path, encoding='utf-8'))
            except FileNotFoundError:
                print(f'{path} does not exist yet.')
                print('Run `python3 tools/build_release_bundle.py` and commit the result.')
                return 1
            if strip_date(on_disk) != strip_date(expected):
                print(f'{path} is stale -- the launch set, corpus, or verification levels changed since it was last generated.')
                print('Run `python3 tools/build_release_bundle.py` and commit the result.')
                return 1
        print('release-document data bundle is up to date.')
        return 0

    for path, payload in outputs:
        write_stable(path, payload)
    print(f'Wrote {OUT_DOCS}: {len(docs_out["documents"])} documents.')
    print(f'Wrote {OUT_CLAUSES}: {len(clauses_out["clauses"])} clauses.')
    print(f'Wrote {OUT_LEVELS}: {len(levels_out["levels"])} verification levels.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
