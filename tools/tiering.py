#!/usr/bin/env python3
"""Phase 3.1: computes each document's quality tier from objective
signals that already exist — never assigned by hand, and never assumed
true for a signal that has no real implementation yet.

Tier B requires all three of:
  - field schema complete: every field has a `type` (all 3,975 already
    do, Phase 2.1) AND a resolvable `whyWeAsk` — either set directly on
    the field, or via `sharedFieldId` into schema/fields/*.json (Phase
    2.2/2.2b). A document with any field outside the 172-id shared
    library and no whyWeAsk of its own fails this today.
  - every authority clause it uses is `status: "verified"` and within
    the same per-category fatal staleness threshold (Phase 4.3,
    config/staleness.json) validate_corpus.py already enforces
    corpus-wide (mirrored here, not re-derived differently).
  - at least one golden fixture exists (tests/golden/fixtures/<id>.json).

Tier A requires everything Tier B does, plus a clean adversarial-verifier
run (master plan Phase 4.1) and a passed per-document accessibility check
(Phase 9.1). Neither of those systems is built yet, so neither signal
exists to check — and an absent signal is treated as "not met," not
"assumed met." That makes Tier A correctly, honestly empty right now:
not a bug, and exactly what "computed, never hand-assigned" requires.
When Phase 4.1 and 9.1 exist and produce real per-document results, this
script is where they plug in (see the two `False` constants below) —
nothing about the rest of the tiering logic should need to change.

Tier C is everything else that passes validate_corpus.py (true for the
whole corpus by the time this runs, since CI runs that gate first).

Writes tiers.json: {generated_at, documents: {id: {tier, blockingB,
blockingA}}, summary: {category: {A,B,C,total}, ALL: {...}}}.

    python3 tools/tiering.py            # recompute, write tiers.json, print summary
    python3 tools/tiering.py --check    # recompute in memory, exit 1 if tiers.json
                                         # on disk doesn't match (CI staleness gate)
"""
import glob
import collections
import json
import os
import sys
from datetime import date

# Phase 4.1 (adversarial verifier) and Phase 9.1 (accessibility checks)
# don't exist yet. These are the two places their real per-document
# results plug in once they do.
ADVERSARIAL_VERIFIER_EXISTS = False
ACCESSIBILITY_CHECK_EXISTS = False


def entry_id(entry):
    return entry if isinstance(entry, str) else entry.get('id')


def months_old(checked_date):
    today = date.today()
    checked = date.fromisoformat(checked_date)
    months = (today.year - checked.year) * 12 + (today.month - checked.month)
    if today.day < checked.day:
        months -= 1
    return months


def load_shared_fields():
    shared = {}
    for path in sorted(glob.glob('schema/fields/*.json')):
        for entry in json.load(open(path)):
            shared[entry['id']] = entry
    return shared


def field_has_why_we_ask(field, shared_fields):
    if field.get('whyWeAsk'):
        return True
    shared_id = field.get('sharedFieldId')
    return bool(shared_id and shared_fields.get(shared_id, {}).get('whyWeAsk'))


def field_schema_complete(doc, shared_fields):
    fields = doc.get('fields', [])
    if not fields:
        return True  # an empty schema has nothing incomplete about it
    return all(f.get('type') and field_has_why_we_ask(f, shared_fields) for f in fields)


def fatal_threshold_for(clause_id, clause_categories, default_fatal, category_thresholds):
    cats = clause_categories.get(clause_id)
    if not cats:
        return default_fatal
    return min(category_thresholds.get(c, {}).get('fatalMonths', default_fatal) for c in cats)


def clauses_verified_and_fresh(doc, clauses_by_id, clause_categories, default_fatal, category_thresholds):
    for entry in doc['clauseOrder']:
        clause = clauses_by_id.get(entry_id(entry))
        if clause is None:
            continue  # a dangling reference is validate_corpus.py's gate, not ours to re-check
        if clause['kind'] != 'authority':
            continue
        if clause.get('status') != 'verified':
            return False
        fatal = fatal_threshold_for(clause['id'], clause_categories, default_fatal, category_thresholds)
        try:
            if months_old((clause.get('checkedDate') or '').strip()) >= fatal:
                return False
        except ValueError:
            return False
    return True


def has_golden_fixture(doc_id):
    return os.path.exists(os.path.join('tests', 'golden', 'fixtures', f'{doc_id}.json'))


def compute_tier(doc, clauses_by_id, shared_fields, clause_categories, default_fatal, category_thresholds):
    blocking_b = []
    if not field_schema_complete(doc, shared_fields):
        blocking_b.append('incomplete field schema (a field is missing type or whyWeAsk)')
    if not clauses_verified_and_fresh(doc, clauses_by_id, clause_categories, default_fatal, category_thresholds):
        blocking_b.append('not every authority clause is verified and within the staleness window')
    if not has_golden_fixture(doc['id']):
        blocking_b.append('no golden fixture')

    blocking_a = list(blocking_b)
    if not ADVERSARIAL_VERIFIER_EXISTS:
        blocking_a.append('no adversarial-verifier run exists yet (Phase 4.1)')
    if not ACCESSIBILITY_CHECK_EXISTS:
        blocking_a.append('no per-document accessibility check exists yet (Phase 9.1)')

    if not blocking_a:
        tier = 'A'
    elif not blocking_b:
        tier = 'B'
    else:
        tier = 'C'
    return tier, blocking_b, blocking_a


def compute_tiers():
    docs = json.load(open('data/documents.json'))
    clauses_by_id = {c['id']: c for c in json.load(open('data/clauses.json'))['clauses']}
    shared_fields = load_shared_fields()

    staleness_config = json.load(open('config/staleness.json'))
    default_fatal = staleness_config['defaultFatalMonths']
    category_thresholds = staleness_config['categories']
    clause_categories = collections.defaultdict(set)
    for d in docs:
        for r in d['clauseOrder']:
            clause_categories[entry_id(r)].update(d.get('categories', []))

    documents = {}
    summary = {}
    for doc in docs:
        tier, blocking_b, blocking_a = compute_tier(
            doc, clauses_by_id, shared_fields, clause_categories, default_fatal, category_thresholds)
        documents[doc['id']] = {'tier': tier, 'blockingB': blocking_b, 'blockingA': blocking_a}
        for cat in doc.get('categories', []):
            bucket = summary.setdefault(cat, {'A': 0, 'B': 0, 'C': 0, 'total': 0})
            bucket[tier] += 1
            bucket['total'] += 1
        allb = summary.setdefault('ALL', {'A': 0, 'B': 0, 'C': 0, 'total': 0})
        allb[tier] += 1
        allb['total'] += 1

    return {
        'generated_at': date.today().isoformat(),
        'documents': dict(sorted(documents.items())),
        'summary': dict(sorted(summary.items())),
    }


def print_summary(result):
    print(f"Tiers computed {result['generated_at']}")
    print(f"{'Category':<24} {'A':>5} {'B':>5} {'C':>5} {'Total':>7}")
    for cat, counts in result['summary'].items():
        if cat == 'ALL':
            continue
        print(f"{cat:<24} {counts['A']:>5} {counts['B']:>5} {counts['C']:>5} {counts['total']:>7}")
    allb = result['summary']['ALL']
    print(f"{'ALL':<24} {allb['A']:>5} {allb['B']:>5} {allb['C']:>5} {allb['total']:>7}")


def main():
    check = '--check' in sys.argv
    result = compute_tiers()

    if check:
        if not os.path.exists('tiers.json'):
            print('tiers.json does not exist — run `python3 tools/tiering.py` and commit it.', file=sys.stderr)
            return 1
        on_disk = json.load(open('tiers.json'))
        # generated_at legitimately differs on every real re-run without the
        # underlying data having changed, so it's excluded from the staleness
        # comparison — only documents/summary have to match exactly.
        fresh = {'documents': result['documents'], 'summary': result['summary']}
        stale = {'documents': on_disk.get('documents'), 'summary': on_disk.get('summary')}
        if fresh != stale:
            print('tiers.json is stale — the corpus has changed since it was last generated.', file=sys.stderr)
            print('Run `python3 tools/tiering.py` and commit the result.', file=sys.stderr)
            return 1
        print('tiers.json is up to date.')
        return 0

    with open('tiers.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print_summary(result)
    return 0


if __name__ == '__main__':
    sys.exit(main())
