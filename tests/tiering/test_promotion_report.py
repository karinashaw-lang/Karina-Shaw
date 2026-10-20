#!/usr/bin/env python3
"""Tests for tools/promotion_report.py: the per-category tier table
reads straight from tiers.json, the "closest to Tier B" ranking orders
Tier C documents by how few gates block them (not alphabetically, not
by Tier B documents which have no actionable path to A yet), and
week-over-week comparison only activates once a history entry is 7+
days old — never against yesterday's entry, and never fabricated when
no history exists.

Run directly: python3 tests/tiering/test_promotion_report.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest
from datetime import date, timedelta

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PROMOTION_REPORT = os.path.join(REPO_ROOT, 'tools', 'promotion_report.py')


def write_tiers(dirpath, documents, summary):
    with open(os.path.join(dirpath, 'tiers.json'), 'w') as f:
        json.dump({'generated_at': date.today().isoformat(), 'documents': documents, 'summary': summary}, f)


def run_report(dirpath, *args):
    return subprocess.run(
        [sys.executable, PROMOTION_REPORT, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


class PromotionReportTests(unittest.TestCase):
    def setUp(self):
        self.d = tempfile.mkdtemp(prefix='promotion_report_test_')

    def tearDown(self):
        shutil.rmtree(self.d, ignore_errors=True)

    def test_fails_without_tiers_json(self):
        r = run_report(self.d)
        self.assertNotEqual(r.returncode, 0)

    def test_closest_to_b_ranks_by_fewest_blocking_gates(self):
        documents = {
            'two_gates': {'tier': 'C', 'blockingB': ['gate1', 'gate2'], 'blockingA': ['gate1', 'gate2', 'verifier', 'a11y']},
            'one_gate': {'tier': 'C', 'blockingB': ['gate1'], 'blockingA': ['gate1', 'verifier', 'a11y']},
            'already_b': {'tier': 'B', 'blockingB': [], 'blockingA': ['verifier', 'a11y']},
        }
        summary = {'ALL': {'A': 0, 'B': 1, 'C': 2, 'total': 3}}
        write_tiers(self.d, documents, summary)
        r = run_report(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        one_pos = r.stdout.find('one_gate')
        two_pos = r.stdout.find('two_gates')
        self.assertGreater(one_pos, 0)
        self.assertGreater(two_pos, one_pos)  # fewer gates ranks first
        self.assertNotIn('already_b', r.stdout)  # Tier B docs aren't in the "closest to B" list

    def test_no_history_reports_no_baseline(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 0, 'C': 0, 'total': 0}})
        r = run_report(self.d)
        self.assertIn('no history entry', r.stdout)

    def test_history_younger_than_a_week_is_not_used_as_baseline(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 5, 'C': 5, 'total': 10}})
        yesterday = (date.today() - timedelta(days=1)).isoformat()
        with open(os.path.join(self.d, 'tiers_history.jsonl'), 'w') as f:
            f.write(json.dumps({'date': yesterday, 'summary': {'ALL': {'A': 0, 'B': 0, 'C': 10, 'total': 10}}}) + '\n')
        r = run_report(self.d)
        self.assertIn('no history entry', r.stdout)

    def test_history_a_week_old_is_used_and_deltas_are_correct(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 7, 'C': 3, 'total': 10}})
        week_ago = (date.today() - timedelta(days=7)).isoformat()
        with open(os.path.join(self.d, 'tiers_history.jsonl'), 'w') as f:
            f.write(json.dumps({'date': week_ago, 'summary': {'ALL': {'A': 0, 'B': 4, 'C': 6, 'total': 10}}}) + '\n')
        r = run_report(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn(f'vs {week_ago}', r.stdout)
        self.assertIn('B +3', r.stdout)
        self.assertIn('C -3', r.stdout)

    def test_write_history_is_idempotent_same_day(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 1, 'C': 1, 'total': 2}})
        r1 = run_report(self.d, '--write-history')
        self.assertIn('Recorded', r1.stderr)
        r2 = run_report(self.d, '--write-history')
        self.assertIn('Already recorded', r2.stderr)
        with open(os.path.join(self.d, 'tiers_history.jsonl')) as f:
            lines = [l for l in f if l.strip()]
        self.assertEqual(len(lines), 1)

    def test_markdown_output_is_well_formed_table(self):
        documents = {'doc1': {'tier': 'C', 'blockingB': ['x'], 'blockingA': ['x', 'verifier', 'a11y']}}
        write_tiers(self.d, documents, {'ALL': {'A': 0, 'B': 0, 'C': 1, 'total': 1}})
        r = run_report(self.d, '--markdown')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('| Category | A | B | C | Total |', r.stdout)
        self.assertIn('## Promotion report', r.stdout)

    def test_no_recheck_findings_file_reports_never_run(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 0, 'C': 0, 'total': 0}})
        r = run_report(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('No recheck has been run yet', r.stdout)

    def test_recheck_findings_counts_surfaced(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 0, 'C': 0, 'total': 0}})
        os.makedirs(os.path.join(self.d, 'recheck'))
        findings = {
            'runDate': '2026-10-20', 'totalChecked': 4,
            'findings': [
                {'clause': 'c1', 'url': 'https://example.com/1', 'cite': 'x', 'status': 'EMPTY', 'bytes': 0, 'quote': 'q', 'checkedAt': '2026-10-20'},
                {'clause': 'c2', 'url': 'https://example.com/2', 'cite': 'x', 'status': 'UNRESOLVED_URL', 'bytes': 900, 'quote': 'q', 'checkedAt': '2026-10-20'},
                {'clause': 'c3', 'url': 'https://example.com/3', 'cite': 'x', 'status': 'MISMATCH', 'bytes': 900, 'quote': 'q', 'checkedAt': '2026-10-20'},
            ],
        }
        with open(os.path.join(self.d, 'recheck', 'findings.json'), 'w') as f:
            json.dump(findings, f)
        r = run_report(self.d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('2 dead link(s), 1 quote mismatch(es)', r.stdout)
        self.assertIn('4 citations checked', r.stdout)
        self.assertIn('run 2026-10-20', r.stdout)

    def test_recheck_findings_in_markdown(self):
        write_tiers(self.d, {}, {'ALL': {'A': 0, 'B': 0, 'C': 0, 'total': 0}})
        os.makedirs(os.path.join(self.d, 'recheck'))
        findings = {'runDate': '2026-10-20', 'totalChecked': 1,
                     'findings': [{'clause': 'c1', 'url': 'https://example.com/1', 'cite': 'x',
                                   'status': 'MISMATCH', 'bytes': 900, 'quote': 'q', 'checkedAt': '2026-10-20'}]}
        with open(os.path.join(self.d, 'recheck', 'findings.json'), 'w') as f:
            json.dump(findings, f)
        r = run_report(self.d, '--markdown')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('### Citation recheck (Phase 4.5)', r.stdout)
        self.assertIn('**0** dead link(s), **1** quote mismatch(es)', r.stdout)


if __name__ == '__main__':
    unittest.main()
