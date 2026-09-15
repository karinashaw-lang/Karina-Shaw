"""Compare a pre-merge snapshot of the data files against the working tree.

Union resolution appends new ids and keeps ours for everything else, so it
carries additions correctly but can silently revert edits to clauses that
already existed on both sides. This reports any pre-existing clause or
document whose content changed, so an unintended revert is visible.
"""
import json, sys, subprocess

def load(ref, path):
    out = subprocess.run(['git','show',f'{ref}:{path}'], capture_output=True, text=True)
    return json.loads(out.stdout)

base = sys.argv[1] if len(sys.argv) > 1 else 'HEAD'
old_c = {x['id']: x for x in load(base,'data/clauses.json')['clauses']}
old_d = {x['id']: x for x in load(base,'data/documents.json')}
new_c = {x['id']: x for x in json.load(open('data/clauses.json'))['clauses']}
new_d = {x['id']: x for x in json.load(open('data/documents.json'))}

def diff(old, new, label):
    changed = [k for k in old if k in new and json.dumps(old[k],sort_keys=True) != json.dumps(new[k],sort_keys=True)]
    dropped = [k for k in old if k not in new]
    print(f'{label}: {len(new)-len(old):+d} net, {len(dropped)} dropped, {len(changed)} pre-existing modified')
    for k in dropped[:10]: print(f'  DROPPED  {k}')
    for k in changed[:10]: print(f'  MODIFIED {k}')
    return dropped, changed

dc, mc = diff(old_c, new_c, 'clauses')
dd, md = diff(old_d, new_d, 'documents')
if dc or dd or mc or md:
    print('\nReview the above: a merge should normally only ADD.')
    sys.exit(1)
print('\nclean: additions only')
