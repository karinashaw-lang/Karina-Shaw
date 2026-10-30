#!/usr/bin/env python3
"""Phase 4.1: samples authority clauses for the adversarial verifier and
builds each one's review packet (clause + the document(s) that use it +
sibling authority clauses in the same document, for internal-contradiction
checking) — deliberately WITHOUT verification/*.md, since the whole point
of an adversarial pass is to reach an independent conclusion rather than
read the original justification first (verifier/prompt.md tells the
worker not to go looking for it either).

Only `kind: "authority"` clauses are sampled — a drafting clause has no
citation, so findings 1-4 and 6 in the rubric don't apply to it, and
nothing in the plan asks for a dedicated drafting-clause review pass.

The sample is drawn once per run and written to verifier/sample.json so
a resumed or re-batched run keeps checking the SAME clauses rather than
silently redrawing a new set — resuming an interrupted run has to mean
"finish checking what we started," not "roll new dice."

    python3 verifier/sample.py --n 100              # draw (or reuse) the sample, print packets
    python3 verifier/sample.py --n 100 --remaining   # same, but only the clauses not yet
                                                      # in verifier/checked.jsonl (resume)
    python3 verifier/sample.py --status              # how many of the current sample are done

Phase 12 Step 3 checkpoint: a second (or later) call needs its own,
disjoint sample rather than reusing or re-drawing from the original
100-clause population — `--sample-path <file>` points a draw at a new
file instead of the default `verifier/sample.json`, so the original
Phase 4.1 sample stays an untouched historical record. A fresh draw
(no file yet at that path) now also excludes every clause id already
in `verifier/checked.jsonl`, regardless of which sample file it came
from, so a second checkpoint can never redraw a clause the first one
already covered:

    python3 verifier/sample.py --n 500 --sample-path verifier/sample_checkpoint500.json
"""
import json
import random
import sys
from datetime import date

SAMPLE_PATH = 'verifier/sample.json'
CHECKED_PATH = 'verifier/checked.jsonl'


def load_clauses():
    return json.load(open('data/clauses.json'))['clauses']


def load_documents():
    return json.load(open('data/documents.json'))


def entry_id(entry):
    return entry if isinstance(entry, str) else entry.get('id')


def checked_clause_ids():
    try:
        with open(CHECKED_PATH, encoding='utf-8') as f:
            return {json.loads(line)['clauseId'] for line in f if line.strip()}
    except FileNotFoundError:
        return set()


def draw_or_load_sample(n, sample_path=SAMPLE_PATH):
    try:
        with open(sample_path, encoding='utf-8') as f:
            saved = json.load(f)
        print(f"Reusing existing sample from {saved['drawnAt']} "
              f"({len(saved['clauseIds'])} clauses, seed {saved['seed']}).", file=sys.stderr)
        return saved['clauseIds']
    except FileNotFoundError:
        pass

    clauses = load_clauses()
    already_checked = checked_clause_ids()
    authority_ids = [c['id'] for c in clauses if c['kind'] == 'authority' and c['id'] not in already_checked]
    seed = random.randrange(2**31)
    rng = random.Random(seed)
    sample = rng.sample(authority_ids, min(n, len(authority_ids)))
    with open(sample_path, 'w', encoding='utf-8') as f:
        json.dump({'drawnAt': date.today().isoformat(), 'seed': seed,
                    'populationSize': len(authority_ids), 'excludedAlreadyChecked': len(already_checked),
                    'clauseIds': sample}, f, indent=2)
        f.write('\n')
    print(f"Drew a new sample of {len(sample)} authority clauses "
          f"(population {len(authority_ids)} after excluding {len(already_checked)} already-checked, "
          f"seed {seed}). Saved to {sample_path}.", file=sys.stderr)
    return sample


def build_packets(clause_ids):
    clauses = load_clauses()
    docs = load_documents()
    clauses_by_id = {c['id']: c for c in clauses}

    # Which document(s) use each clause id, and what its siblings are —
    # built once over the whole corpus rather than re-scanning per clause.
    docs_using = {}
    siblings_of = {}
    for doc in docs:
        clause_ids_in_doc = [entry_id(e) for e in doc['clauseOrder']]
        for cid in clause_ids_in_doc:
            docs_using.setdefault(cid, []).append(doc)
            siblings_of.setdefault(cid, set()).update(
                oid for oid in clause_ids_in_doc if oid != cid
            )

    packets = []
    for cid in clause_ids:
        clause = clauses_by_id.get(cid)
        if clause is None:
            continue
        using_docs = docs_using.get(cid, [])
        sibling_ids = siblings_of.get(cid, set())
        siblings = [
            {'id': s['id'], 'title': s['title'], 'kind': s['kind'], 'body': s['body'],
             'gap': s.get('gap')}
            for sid in sibling_ids
            if (s := clauses_by_id.get(sid)) and s['kind'] == 'authority'
        ]
        packets.append({
            'clause': clause,
            'usedByDocuments': [
                {'id': d['id'], 'title': d['title'], 'categories': d.get('categories', [])}
                for d in using_docs
            ],
            'siblingAuthorityClauses': siblings,
        })
    return packets


def print_status(clause_ids):
    done = checked_clause_ids()
    remaining = [c for c in clause_ids if c not in done]
    print(f"Sample size: {len(clause_ids)}")
    print(f"Checked so far: {len(clause_ids) - len(remaining)}")
    print(f"Remaining: {len(remaining)}")
    if remaining:
        print(f"Remaining clause ids: {remaining}")


def main():
    args = sys.argv[1:]
    n = 100
    if '--n' in args:
        n = int(args[args.index('--n') + 1])
    sample_path = SAMPLE_PATH
    if '--sample-path' in args:
        sample_path = args[args.index('--sample-path') + 1]

    clause_ids = draw_or_load_sample(n, sample_path)

    if '--status' in args:
        print_status(clause_ids)
        return 0

    if '--remaining' in args:
        done = checked_clause_ids()
        clause_ids = [c for c in clause_ids if c not in done]
        print(f"{len(clause_ids)} clauses remaining to check.", file=sys.stderr)

    packets = build_packets(clause_ids)
    print(json.dumps(packets, indent=2, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    sys.exit(main())
