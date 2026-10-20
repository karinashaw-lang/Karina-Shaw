#!/usr/bin/env python3
"""Phase 4.5: turns the most recent recheck_all.py run's bad statuses
into recheck/findings.json -- a dead link (EMPTY, UNRESOLVED_URL) or a
quote that no longer matches (MISMATCH) is a finding; RATE_LIMITED and
BLOCKED are not (both are "untested," not "failed" -- recheck_all.py's
own reasoning: a 429 that survived backoff, or a leginfo page that came
back as a Cloudflare JS challenge instead of real content, says nothing
about whether the citation itself is still good).

Unlike recheck/history.jsonl (an append-only log across every run this
has ever done), recheck/findings.json is fully OVERWRITTEN each time
this runs: it always reflects what's currently broken as of the latest
run, not an accumulating list that would otherwise keep flagging a URL
long after it started working again.

A single JSON object, not JSONL, specifically so a clean run (zero
findings) still records that a run happened and when -- a bare empty
findings list would be indistinguishable from "never run," which is a
different, more concerning state for the promotion report to conflate.

    python3 tools/recheck_findings.py               # use the latest run date in history.jsonl
    python3 tools/recheck_findings.py --run-date 2026-10-20
"""
import json
import os
import sys

HISTORY_PATH = os.path.join('recheck', 'history.jsonl')
FINDINGS_PATH = os.path.join('recheck', 'findings.json')
BAD_STATUSES = {'EMPTY', 'UNRESOLVED_URL', 'MISMATCH'}


def load_history():
    if not os.path.exists(HISTORY_PATH):
        return []
    with open(HISTORY_PATH, encoding='utf-8') as f:
        return [json.loads(line) for line in f if line.strip()]


def main():
    args = sys.argv[1:]
    run_date = None
    if '--run-date' in args:
        run_date = args[args.index('--run-date') + 1]

    history = load_history()
    if not history:
        print(f'{HISTORY_PATH} does not exist or is empty -- run tools/recheck_all.py first.',
              file=sys.stderr)
        return 0

    if run_date is None:
        run_date = max(rec['checkedAt'] for rec in history)

    this_run = [rec for rec in history if rec['checkedAt'] == run_date]
    findings = [rec for rec in this_run if rec['status'] in BAD_STATUSES]

    os.makedirs(os.path.dirname(FINDINGS_PATH) or '.', exist_ok=True)
    with open(FINDINGS_PATH, 'w', encoding='utf-8') as f:
        json.dump({'runDate': run_date, 'totalChecked': len(this_run), 'findings': findings},
                   f, indent=2, ensure_ascii=False)
        f.write('\n')

    print(f'{len(this_run)} citations checked on {run_date}; {len(findings)} findings '
          f'written to {FINDINGS_PATH}.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
