#!/usr/bin/env python3
"""Phase 9.6: "a corpus snapshot tagged per release."

Unlike tiers.json/the citation index/the SEO pages (one current,
--check-verified file that's always regenerated in place), a release
snapshot is deliberately an *archive*: one file per release, under
corpus_snapshots/, that is never overwritten by a later run. It exists
so that if a bad corpus edit ships, there's an exact, independently
verifiable record of what the corpus looked like at each past release
-- its content hashes, not just "check out that git commit and hope
nothing outside git (like an applied migration) also needs rolling
back."

This only covers the corpus itself (documents, clauses, schema,
search/filing data, the citation index, tiers.json) -- the separate,
credentials-gated half of Phase 9.6 (backing up/restoring the
Supabase tables) is tools/backup_supabase.sh and tools/restore_test.sh.

Usage:
  python3 tools/corpus_snapshot.py                 # print the manifest, write nothing
  python3 tools/corpus_snapshot.py --tag v1         # write corpus_snapshots/v1.json
"""
import glob
import hashlib
import json
import os
import subprocess
import sys
from datetime import datetime, timezone

CORPUS_FILES = sorted([
    'data/clauses.json',
    'data/documents.json',
    'schema/field.schema.json',
    'schema/shared_field.schema.json',
    'config/staleness.json',
    'config/seo.json',
    'search/lay_terms.json',
    'search/intake_flow.json',
    'filing/next_steps.json',
    'index/citation_to_clauses.json',
    'tiers.json',
] + glob.glob('schema/fields/*.json'))

SNAPSHOT_DIR = 'corpus_snapshots'


def sha256_of(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        h.update(f.read())
    return h.hexdigest()


def git_commit():
    try:
        return subprocess.run(
            ['git', 'rev-parse', 'HEAD'], capture_output=True, text=True, check=True,
        ).stdout.strip()
    except Exception:
        return None


def counts():
    clauses = json.load(open('data/clauses.json'))['clauses']
    docs = json.load(open('data/documents.json'))
    citations = sum(len(c.get('citations', [])) for c in clauses)
    return {'documents': len(docs), 'clauses': len(clauses), 'citations': citations}


def build_manifest(tag):
    file_hashes = {}
    for path in CORPUS_FILES:
        if os.path.exists(path):
            file_hashes[path] = sha256_of(path)
    return {
        'tag': tag,
        'generated_at': datetime.now(timezone.utc).isoformat(timespec='seconds'),
        'git_commit': git_commit(),
        'counts': counts(),
        'file_hashes': file_hashes,
    }


def main():
    tag = None
    if '--tag' in sys.argv:
        i = sys.argv.index('--tag')
        if i + 1 >= len(sys.argv):
            print('--tag requires a value, e.g. --tag v1', file=sys.stderr)
            return 1
        tag = sys.argv[i + 1]

    manifest = build_manifest(tag)

    if not tag:
        print(json.dumps(manifest, indent=2))
        print('\n(no --tag given — nothing written. Pass --tag <name> to save this to corpus_snapshots/.)', file=sys.stderr)
        return 0

    os.makedirs(SNAPSHOT_DIR, exist_ok=True)
    out_path = os.path.join(SNAPSHOT_DIR, f'{tag}.json')
    if os.path.exists(out_path):
        print(f'{out_path} already exists — a snapshot is a permanent record of one release and is never overwritten. Pick a different --tag.', file=sys.stderr)
        return 1
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
        f.write('\n')
    print(f'Wrote {out_path}: {manifest["counts"]}, {len(manifest["file_hashes"])} file(s) hashed.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
