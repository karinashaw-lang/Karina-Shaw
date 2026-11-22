#!/usr/bin/env python3
"""Tests for tools/check_accepted_disclosure.py (MVP_FINISH_VERIFY_SHARPEN.md
item 1.4): an accepted finding on a clause with no gap text fails the
check; an accepted finding on a clause that does have gap text passes;
an open or rejected finding's clause is never checked at all, since
only an *accepted* finding is the case this item is about (an open
finding isn't disclosed as settled fact yet, and a rejected one was
never a real issue).

Builds a throwaway verifier/findings.jsonl + verifier/triage.jsonl +
data/clauses.json in a temp directory and runs the real script
against it as a subprocess, same pattern as tests/verifier/test_triage.py.

Run directly: python3 tests/tools/test_check_accepted_disclosure.py
"""
import json
import os
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CHECK_PY = os.path.join(REPO_ROOT, 'tools', 'check_accepted_disclosure.py')


def finding(clause_id, summary='s'):
    return {'clauseId': clause_id, 'foundAt': 'x', 'severity': 'minor', 'category': 'other',
            'summary': summary, 'evidence': 'e', 'sourceChecked': 'https://example.com', 'suggestedFix': 'f'}


def triage_decision(finding_id, status):
    return {'findingId': finding_id, 'clauseId': finding_id.split('#')[0], 'status': status, 'decidedAt': '2026-01-01T00:00:00'}


def clause(cid, gap):
    return {'id': cid, 'title': cid, 'kind': 'authority', 'status': 'verified',
            'checkedDate': '2026-01-01', 'body': f'Body of {cid}.', 'gap': gap,
            'citations': [{'case': 'x', 'cite': 'y', 'url': 'https://example.com', 'quote': 'q'}]}


def build_dir(findings, triage_decisions, clauses):
    d = tempfile.mkdtemp(prefix='accepted_disclosure_test_')
    os.makedirs(os.path.join(d, 'verifier'))
    os.makedirs(os.path.join(d, 'data'))
    with open(os.path.join(d, 'verifier', 'findings.jsonl'), 'w') as f:
        for entry in findings:
            f.write(json.dumps(entry) + '\n')
    with open(os.path.join(d, 'verifier', 'triage.jsonl'), 'w') as f:
        for entry in triage_decisions:
            f.write(json.dumps(entry) + '\n')
    with open(os.path.join(d, 'data', 'clauses.json'), 'w') as f:
        json.dump({'clauses': clauses}, f)
    return d


def run(dirpath):
    return subprocess.run([sys.executable, CHECK_PY], cwd=dirpath, capture_output=True, text=True)


class AcceptedDisclosureTests(unittest.TestCase):
    def test_accepted_finding_with_no_gap_fails(self):
        d = build_dir(
            findings=[finding('clause_a')],
            triage_decisions=[triage_decision('clause_a#0', 'accepted')],
            clauses=[clause('clause_a', gap=None)],
        )
        result = run(d)
        self.assertEqual(result.returncode, 1, result.stdout)
        self.assertIn('clause_a#0', result.stdout)
        self.assertIn('no visible disclosure', result.stdout)

    def test_accepted_finding_with_empty_string_gap_fails(self):
        d = build_dir(
            findings=[finding('clause_a')],
            triage_decisions=[triage_decision('clause_a#0', 'accepted')],
            clauses=[clause('clause_a', gap='   ')],
        )
        result = run(d)
        self.assertEqual(result.returncode, 1, result.stdout)

    def test_accepted_finding_with_real_gap_passes(self):
        d = build_dir(
            findings=[finding('clause_a')],
            triage_decisions=[triage_decision('clause_a#0', 'accepted')],
            clauses=[clause('clause_a', gap='This is a real, disclosed gap.')],
        )
        result = run(d)
        self.assertEqual(result.returncode, 0, result.stdout)
        self.assertIn('1 accepted finding(s)', result.stdout)

    def test_open_finding_with_no_gap_is_not_flagged(self):
        # No triage decision at all -- status defaults to 'open', which
        # this check doesn't cover (an open finding isn't disclosed as
        # settled fact yet; that's what the badge's level already
        # signals by not being the highest tier).
        d = build_dir(
            findings=[finding('clause_a')],
            triage_decisions=[],
            clauses=[clause('clause_a', gap=None)],
        )
        result = run(d)
        self.assertEqual(result.returncode, 0, result.stdout)

    def test_rejected_finding_with_no_gap_is_not_flagged(self):
        d = build_dir(
            findings=[finding('clause_a')],
            triage_decisions=[triage_decision('clause_a#0', 'rejected')],
            clauses=[clause('clause_a', gap=None)],
        )
        result = run(d)
        self.assertEqual(result.returncode, 0, result.stdout)

    def test_second_finding_on_same_clause_gets_distinct_id(self):
        # Two findings on the same clause -- #0 and #1 -- only the
        # second is accepted; confirms this check reuses triage.py's
        # own id scheme correctly rather than colliding on clause id.
        d = build_dir(
            findings=[finding('clause_a', 's1'), finding('clause_a', 's2')],
            triage_decisions=[
                triage_decision('clause_a#0', 'rejected'),
                triage_decision('clause_a#1', 'accepted'),
            ],
            clauses=[clause('clause_a', gap='Discloses the #1 issue.')],
        )
        result = run(d)
        self.assertEqual(result.returncode, 0, result.stdout)


if __name__ == '__main__':
    unittest.main()
