#!/usr/bin/env python3
"""Corpus-wide integrity check. Run after every merge, before committing.

Exits non-zero and names the first failure. Everything here has caught a
real defect at least once during corpus expansion.
"""
import json, re, sys, collections

AUTH = ['id', 'title', 'kind', 'status', 'checkedDate', 'body', 'gap', 'citations']
DRAFT = ['id', 'title', 'kind', 'body']
CIT = ['case', 'cite', 'url', 'quote']
DOC = ['id', 'title', 'description', 'categories', 'clauseOrder', 'fields']

def main():
    clauses = json.load(open('data/clauses.json'))['clauses']
    docs = json.load(open('data/documents.json'))
    fails = []

    def check(cond, msg):
        if not cond:
            fails.append(msg)

    ids = [c['id'] for c in clauses]
    check(len(ids) == len(set(ids)),
          f'duplicate clause ids: {[k for k, v in collections.Counter(ids).items() if v > 1][:5]}')
    dids = [d['id'] for d in docs]
    check(len(dids) == len(set(dids)),
          f'duplicate document ids: {[k for k, v in collections.Counter(dids).items() if v > 1][:5]}')
    titles = collections.Counter(d['title'] for d in docs)
    check(not [k for k, v in titles.items() if v > 1],
          f'duplicate document titles: {[k for k, v in titles.items() if v > 1][:3]}')

    cid = set(ids)
    dangling = [(d['id'], r) for d in docs for r in d['clauseOrder'] if r not in cid]
    check(not dangling, f'clauseOrder ids that resolve to nothing: {dangling[:5]}')

    used = {r for d in docs for r in d['clauseOrder']}
    check(not (cid - used), f'orphan clauses referenced by no document: {sorted(cid - used)[:5]}')

    auth = [c for c in clauses if c['kind'] == 'authority']
    check(not [c['id'] for c in auth if not (c.get('gap') or '').strip()],
          f'authority clauses with an empty gap: {[c["id"] for c in auth if not (c.get("gap") or "").strip()][:5]}')
    check(not [c['id'] for c in auth if not c.get('citations')],
          f'authority clauses with no citation: {[c["id"] for c in auth if not c.get("citations")][:5]}')

    # Key order is part of the documented schema, so drift is a defect.
    check(all(list(c.keys()) == AUTH for c in auth),
          f'authority clauses with non-canonical key order: {[c["id"] for c in auth if list(c.keys()) != AUTH][:5]}')
    check(all(list(c.keys()) == DRAFT for c in clauses if c['kind'] == 'drafting'),
          'drafting clauses with non-canonical key order')
    check(all(list(ct.keys()) == CIT for c in auth for ct in c['citations']),
          'citations with non-canonical key order')
    check(all(list(d.keys()) == DOC for d in docs),
          f'documents with non-canonical key order: {[d["id"] for d in docs if list(d.keys()) != DOC][:5]}')

    check(not [c['id'] for c in auth for ct in c['citations'] if not (ct.get('url') or '').strip()],
          'citations missing a url')
    check(not [c['id'] for c in auth for ct in c['citations'] if not (ct.get('quote') or '').strip()],
          'citations with an empty quote')

    # A {{field}} used in a body or gap must be declared by every document
    # that includes the clause, or it renders as raw braces to the reader.
    by_id = {c['id']: c for c in clauses}
    for d in docs:
        declared = {f['id'] for f in d.get('fields', [])}
        text = ' '.join((by_id[r].get('body', '') + ' ' + (by_id[r].get('gap') or ''))
                        for r in d['clauseOrder'] if r in by_id)
        undeclared = set(re.findall(r'\{\{(\w+)\}\}', text)) - declared
        check(not undeclared, f'{d["id"]} uses undeclared fields {sorted(undeclared)}')

    cats = collections.Counter(cat for d in docs for cat in d['categories'])
    print(f'{len(docs)} documents / {len(clauses)} clauses '
          f'({len(auth)} authority, {len(clauses) - len(auth)} drafting), '
          f'{sum(len(c["citations"]) for c in auth)} citations')
    print(dict(sorted(cats.items())))

    if fails:
        print('\nFAILED:', file=sys.stderr)
        for f in fails:
            print('  -', f, file=sys.stderr)
        return 1
    print('\nvalidation passed')
    return 0

if __name__ == '__main__':
    sys.exit(main())
