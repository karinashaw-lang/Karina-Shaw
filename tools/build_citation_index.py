#!/usr/bin/env python3
"""Phase 4.4: builds index/citation_to_clauses.json, a reverse index from
every citation in the corpus to the authority clause id(s) that cite it.

The watcher (watcher/prompt.md) needs this to turn "this source changed"
into "these clauses need review" without re-scanning all 6,610 clauses on
every run. Grouped by `url` first, since that's the one thing a real-world
change (a statute amendment, a case being overruled) is actually matched
against -- a changed leginfo URL or a CourtListener opinion URL. Under
each url, citations are kept distinct by their own (case, cite) pair, not
collapsed into the url alone: the same statute page is often pin-cited at
many different subsections across different clauses (see DECISIONS.md),
each a legally distinct proposition that can be affected independently,
so each keeps its own clauseIds list rather than being merged into one
undifferentiated bucket per url.

    python3 tools/build_citation_index.py          # recompute, write index/citation_to_clauses.json, print summary
    python3 tools/build_citation_index.py --check   # recompute in memory, exit 1 if the file on disk doesn't match (CI staleness gate)
"""
import collections
import json
import os
import sys
from datetime import date


def build_index():
    clauses = json.load(open('data/clauses.json'))['clauses']
    auth = [c for c in clauses if c['kind'] == 'authority']

    by_url = collections.defaultdict(lambda: collections.defaultdict(set))
    total_citations = 0
    for c in auth:
        for ct in c.get('citations', []):
            total_citations += 1
            key = (ct.get('case'), ct.get('cite'))
            by_url[ct['url']][key].add(c['id'])

    index = {}
    for url, entries in by_url.items():
        index[url] = [
            {'case': case, 'cite': cite, 'clauseIds': sorted(clause_ids)}
            for (case, cite), clause_ids in sorted(entries.items(), key=lambda kv: (kv[0][0] or '', kv[0][1] or ''))
        ]

    return {
        'generatedAt': date.today().isoformat(),
        'citationCount': total_citations,
        'uniqueUrls': len(index),
        'byUrl': dict(sorted(index.items())),
    }


def main():
    check = '--check' in sys.argv
    result = build_index()
    path = os.path.join('index', 'citation_to_clauses.json')

    if check:
        if not os.path.exists(path):
            print(f'{path} does not exist — run `python3 tools/build_citation_index.py` and commit it.',
                  file=sys.stderr)
            return 1
        on_disk = json.load(open(path))
        # generatedAt legitimately differs on every real re-run without the
        # underlying data having changed, so it's excluded from the
        # staleness comparison -- only byUrl/citationCount/uniqueUrls have
        # to match exactly.
        fresh = {k: v for k, v in result.items() if k != 'generatedAt'}
        stale = {k: v for k, v in on_disk.items() if k != 'generatedAt'}
        if fresh != stale:
            print(f'{path} is stale — the corpus has changed since it was last generated.', file=sys.stderr)
            print('Run `python3 tools/build_citation_index.py` and commit the result.', file=sys.stderr)
            return 1
        print(f'{path} is up to date.')
        return 0

    os.makedirs('index', exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print(f"{result['citationCount']} citations indexed across {result['uniqueUrls']} unique urls "
          f"(100% coverage by construction — every citation in data/clauses.json produces one entry).")
    return 0


if __name__ == '__main__':
    sys.exit(main())
