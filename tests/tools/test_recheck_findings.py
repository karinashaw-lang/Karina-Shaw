#!/usr/bin/env python3
"""Tests for tools/recheck_findings.py: only the latest run's bad
statuses (EMPTY, UNRESOLVED_URL, MISMATCH) become findings --
RATE_LIMITED is untested, not failed, and an older run's entries don't
leak into the current findings file. recheck/findings.json is a single
JSON object (not JSONL) specifically so a fully clean run still records
that a run happened, rather than looking identical to "never run."

Run directly: python3 tests/tools/test_recheck_findings.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RECHECK_FINDINGS = os.path.join(REPO_ROOT, 'tools', 'recheck_findings.py')


def write_history(dirpath, records):
    os.makedirs(os.path.join(dirpath, 'recheck'), exist_ok=True)
    with open(os.path.join(dirpath, 'recheck', 'history.jsonl'), 'w') as f:
        for rec in records:
            f.write(json.dumps(rec) + '\n')


def run_findings(dirpath, *args):
    return subprocess.run(
        [sys.executable, RECHECK_FINDINGS, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


def rec(clause, url, status, checked_at, cite='x', quote='q', n_bytes=900):
    return {'clause': clause, 'url': url, 'cite': cite, 'status': status,
            'bytes': n_bytes, 'quote': quote, 'checkedAt': checked_at}


class RecheckFindingsTests(unittest.TestCase):
    def setUp(self):
        self.d = tempfile.mkdtemp(prefix='recheck_findings_test_')

    def tearDown(self):
        shutil.rmtree(self.d, ignore_errors=True)

    def load_findings(self):
        with open(os.path.join(self.d, 'recheck', 'findings.json')) as f:
            return json.load(f)

    def test_no_history_is_a_clean_noop(self):
        r = run_findings(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertFalse(os.path.exists(os.path.join(self.d, 'recheck', 'findings.json')))

    def test_bad_statuses_become_findings(self):
        write_history(self.d, [
            rec('c1', 'https://example.com/1', 'PASS', '2026-10-20'),
            rec('c2', 'https://example.com/2', 'EMPTY', '2026-10-20'),
            rec('c3', 'https://example.com/3', 'UNRESOLVED_URL', '2026-10-20'),
            rec('c4', 'https://example.com/4', 'MISMATCH', '2026-10-20'),
            rec('c5', 'https://example.com/5', 'RATE_LIMITED', '2026-10-20'),
        ])
        r = run_findings(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        data = self.load_findings()
        self.assertEqual(data['runDate'], '2026-10-20')
        self.assertEqual(data['totalChecked'], 5)
        statuses = sorted(f['status'] for f in data['findings'])
        self.assertEqual(statuses, ['EMPTY', 'MISMATCH', 'UNRESOLVED_URL'])

    def test_clean_run_still_records_that_it_ran(self):
        write_history(self.d, [rec('c1', 'https://example.com/1', 'PASS', '2026-10-20')])
        r = run_findings(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        data = self.load_findings()
        self.assertEqual(data['runDate'], '2026-10-20')
        self.assertEqual(data['totalChecked'], 1)
        self.assertEqual(data['findings'], [])

    def test_only_latest_run_date_used_by_default(self):
        write_history(self.d, [
            rec('c1', 'https://example.com/1', 'MISMATCH', '2026-10-13'),  # older run, broken
            rec('c1', 'https://example.com/1', 'PASS', '2026-10-20'),      # latest run, fixed
        ])
        r = run_findings(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        data = self.load_findings()
        self.assertEqual(data['runDate'], '2026-10-20')
        self.assertEqual(data['findings'], [])  # the older MISMATCH must not leak in

    def test_explicit_run_date_selects_that_run(self):
        write_history(self.d, [
            rec('c1', 'https://example.com/1', 'MISMATCH', '2026-10-13'),
            rec('c1', 'https://example.com/1', 'PASS', '2026-10-20'),
        ])
        r = run_findings(self.d, '--run-date', '2026-10-13')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        data = self.load_findings()
        self.assertEqual(data['runDate'], '2026-10-13')
        self.assertEqual(len(data['findings']), 1)
        self.assertEqual(data['findings'][0]['status'], 'MISMATCH')

    def test_overwrites_previous_findings_file(self):
        write_history(self.d, [rec('c1', 'https://example.com/1', 'MISMATCH', '2026-10-13')])
        run_findings(self.d, '--run-date', '2026-10-13')
        self.assertEqual(len(self.load_findings()['findings']), 1)
        write_history(self.d, [
            rec('c1', 'https://example.com/1', 'MISMATCH', '2026-10-13'),
            rec('c1', 'https://example.com/1', 'PASS', '2026-10-20'),
        ])
        run_findings(self.d)
        self.assertEqual(self.load_findings()['findings'], [])


if __name__ == '__main__':
    unittest.main()
