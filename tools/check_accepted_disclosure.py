#!/usr/bin/env python3
"""MVP_FINISH_VERIFY_SHARPEN.md item 1.4: an accepted-and-disclosed
verifier finding is only actually disclosed if the clause's own `gap`
field says something. A one-time manual check (DECISIONS.md,
2026-11-22 entry) found this held for all 108 accepted-finding
clauses at the time; this is the standing gate so a future accepted
finding can't quietly land with no visible disclosure, the way the
mechanism was built to prevent in the first place.

Reuses verifier/triage.py's own load_findings()/load_triage() (same
<clauseId>#<n> findingId scheme) rather than a second implementation
that could compute a different id for the same finding and silently
talk past triage.py's own records.

    python3 tools/check_accepted_disclosure.py
"""
import json
import os
import sys

# Resolved relative to this file, not the caller's cwd, so this still
# finds the real verifier/triage.py when run (or tested) from a
# different working directory -- the FINDINGS_PATH/TRIAGE_PATH
# constants load_findings()/load_triage() use internally are still
# cwd-relative, same as every other tool here, so the caller's cwd is
# what decides *which* findings.jsonl/triage.jsonl get read.
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'verifier'))
from triage import load_findings, load_triage  # noqa: E402


def main():
    findings = load_findings()
    triage = load_triage()
    clauses = {c['id']: c for c in json.load(open('data/clauses.json', encoding='utf-8'))['clauses']}

    undisclosed = []
    for f in findings:
        t = triage.get(f['findingId'])
        if not t or t['status'] != 'accepted':
            continue
        clause = clauses.get(f['clauseId'])
        if clause is None:
            undisclosed.append((f['findingId'], 'clause no longer exists in data/clauses.json'))
            continue
        gap = (clause.get('gap') or '').strip()
        if not gap:
            undisclosed.append((f['findingId'], 'clause has an accepted finding but an empty/missing gap field'))

    if undisclosed:
        print(f'check_accepted_disclosure: {len(undisclosed)} accepted finding(s) with no visible disclosure:')
        for fid, reason in undisclosed:
            print(f'  - {fid}: {reason}')
        print('Every accepted finding needs a gap on its clause describing it -- see MVP_FINISH_VERIFY_SHARPEN.md item 1.4.')
        return 1

    accepted_count = sum(1 for f in findings if (triage.get(f['findingId']) or {}).get('status') == 'accepted')
    print(f'check_accepted_disclosure: {accepted_count} accepted finding(s), all with a visible gap disclosure on their clause.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
