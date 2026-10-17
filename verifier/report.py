#!/usr/bin/env python3
"""Phase 4.1: the sample report — finding rate, severity breakdown, and
examples, read from verifier/checked.jsonl + findings.jsonl. This is the
deliverable the master plan asks for before any decision about running
the verifier at full-corpus scale: "sample report delivered with finding
rate and examples; full run only after [explicit] approve[al]."

    python3 verifier/report.py            # text report
    python3 verifier/report.py --examples 10   # show up to 10 example findings (default 5)
"""
import json
import sys
import collections

CHECKED_PATH = 'verifier/checked.jsonl'
FINDINGS_PATH = 'verifier/findings.jsonl'


def load_jsonl(path):
    try:
        with open(path, encoding='utf-8') as f:
            return [json.loads(line) for line in f if line.strip()]
    except FileNotFoundError:
        return []


def main():
    n_examples = 5
    if '--examples' in sys.argv:
        n_examples = int(sys.argv[sys.argv.index('--examples') + 1])

    checked = load_jsonl(CHECKED_PATH)
    findings = load_jsonl(FINDINGS_PATH)

    if not checked:
        print('No clauses checked yet — run the verifier against a sample first '
              '(see verifier/sample.py and verifier/prompt.md).')
        return 0

    clauses_with_findings = {c['clauseId'] for c in checked if c['findingCount'] > 0}
    print(f'Clauses checked: {len(checked)}')
    print(f'Clauses with at least one finding: {len(clauses_with_findings)} '
          f'({len(clauses_with_findings) / len(checked):.1%})')
    print(f'Total findings: {len(findings)} ({len(findings) / len(checked):.2f} per clause checked)')
    print()

    by_severity = collections.Counter(f['severity'] for f in findings)
    print('By severity:')
    for sev in ('blocker', 'major', 'minor'):
        print(f'  {sev:<8} {by_severity.get(sev, 0)}')
    print()

    by_category = collections.Counter(f['category'] for f in findings)
    print('By category:')
    for cat, n in by_category.most_common():
        print(f'  {cat:<22} {n}')
    print()

    if findings:
        print(f'Example findings (up to {n_examples}, blockers and majors first):')
        severity_rank = {'blocker': 0, 'major': 1, 'minor': 2}
        ordered = sorted(findings, key=lambda f: severity_rank.get(f['severity'], 3))
        for f in ordered[:n_examples]:
            print(f"\n  [{f['severity']}/{f['category']}] {f['clauseId']}")
            print(f"    {f['summary']}")
            print(f"    Evidence: {f['evidence'][:300]}")
            print(f"    Source: {f['sourceChecked']}")
    return 0


if __name__ == '__main__':
    sys.exit(main())
