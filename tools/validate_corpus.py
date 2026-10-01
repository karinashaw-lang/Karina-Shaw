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

# The app has no other declaration of this list — renderCategoryFilter() in
# app.js just derives categories live from documents.json. A category name
# here that no longer matches any document's categories[] means a category
# was renamed or dropped and this list went stale; a document carrying a
# category not in this list means a typo or an undeclared 9th category, both
# silent in the UI (the picker's filter just grows or shrinks a chip) and
# both worth a deliberate decision rather than a silent commit.
CATEGORIES = {
    'Business Formation', 'Confidentiality & IP', 'During employment',
    'Ending employment', 'Estate Planning', 'Family Law', 'Hiring',
    'Real Estate',
}

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

    # A document's categories[] drives both the picker's category filter and
    # every "N documents across M categories" count anyone quotes about this
    # project. Three things have to hold for those counts to mean what they
    # say: every document is filed under at least one category (an empty
    # list makes it unreachable from the filtered picker), under at most two
    # (a guard against a data-entry slip, not a product decision — raise
    # this deliberately, in this file, if a document ever needs three), and
    # every category it names is one of the ones declared above.
    check(not [d['id'] for d in docs if not d.get('categories')],
          f'documents with no category: {[d["id"] for d in docs if not d.get("categories")][:5]}')
    check(not [d['id'] for d in docs if len(d.get('categories', [])) > 2],
          f'documents in more than two categories: {[d["id"] for d in docs if len(d.get("categories", [])) > 2][:5]}')
    unknown_cats = {cat for d in docs for cat in d['categories']} - CATEGORIES
    check(not unknown_cats, f'categories not in the declared list: {sorted(unknown_cats)}')

    cats = collections.Counter(cat for d in docs for cat in d['categories'])
    multi = [d['id'] for d in docs if len(d.get('categories', [])) > 1]
    print(f'{len(docs)} documents / {len(clauses)} clauses '
          f'({len(auth)} authority, {len(clauses) - len(auth)} drafting), '
          f'{sum(len(c["citations"]) for c in auth)} citations')
    print(dict(sorted(cats.items())))
    # The per-category counts above sum to more than len(docs) whenever a
    # document carries two categories (handbook-style documents that are
    # genuinely both "Hiring" and "During employment", for example) — that's
    # expected, not a discrepancy, but it reads as one unless the gap is
    # spelled out every time these numbers get quoted, so spell it out here.
    check(sum(cats.values()) - len(docs) == len(multi),
          'category-tag sum does not reconcile with document count + multi-category documents '
          '(the two checks above should have already caught why)')
    if multi:
        print(f'({sum(cats.values())} category tags across {len(docs)} documents: '
              f'{len(multi)} documents carry two categories — {", ".join(sorted(multi))})')

    # verification/*.md holds free-form build notes, most but not all one
    # per document, written over months of renames and batch/process audits
    # (a "granularity-pass-*" or "checklist-audit-*" note isn't about any
    # single document, and isn't meant to be). Its file count has never been
    # a document-count proxy and asserting it against len(docs) would be
    # asserting something false — so this reports coverage instead of
    # failing the build: which current documents have no note under any
    # normalization of their id, so a real gap stays visible without
    # pretending the folder is 1:1 with documents.json.
    import os
    vdir = 'verification'
    if os.path.isdir(vdir):
        def norm(s):
            return re.sub(r'[-_]', '', s.lower())
        notes = {norm(f[:-3]) for f in os.listdir(vdir) if f.endswith('.md')}
        uncovered = [d['id'] for d in docs if norm(d['id']) not in notes
                     and norm(d['id'] + '_info_sheet') not in notes]
        print(f'{len(notes)} files in {vdir}/ (not 1:1 with documents — see tools/README.md); '
              f'{len(docs) - len(uncovered)}/{len(docs)} documents have a matching note by id')
        if uncovered:
            print(f'  documents with no matching note: {uncovered[:10]}'
                  + (f' (+{len(uncovered) - 10} more)' if len(uncovered) > 10 else ''))

    if fails:
        print('\nFAILED:', file=sys.stderr)
        for f in fails:
            print('  -', f, file=sys.stderr)
        return 1
    print('\nvalidation passed')
    return 0

if __name__ == '__main__':
    sys.exit(main())
