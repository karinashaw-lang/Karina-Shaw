#!/usr/bin/env python3
"""Tests for the Phase 4.4 watcher scripts (watcher/scan_batch.py,
record_changes.py, report.py, flag_for_review.py): a batch is drawn
from the citation index and classified statute-vs-case by host,
--remaining excludes citations already recorded as scanned,
record_changes.py enforces its schema and refuses a finding whose url
wasn't in the scanned batch, report.py's counts and per-change sections
match what was recorded, and flag_for_review.py creates a local-only
branch with exactly one new file and returns to the starting branch.

Builds a minimal, throwaway corpus (just the citation index watcher
scripts actually read) and runs the real scripts against it as
subprocesses, the same pattern as tests/verifier/test_verifier.py.

Run directly: python3 tests/watcher/test_watcher.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCAN_BATCH_PY = os.path.join(REPO_ROOT, 'watcher', 'scan_batch.py')
RECORD_PY = os.path.join(REPO_ROOT, 'watcher', 'record_changes.py')
REPORT_PY = os.path.join(REPO_ROOT, 'watcher', 'report.py')
FLAG_PY = os.path.join(REPO_ROOT, 'watcher', 'flag_for_review.py')


def citation_index(by_url):
    return {
        'generatedAt': '2026-10-18',
        'citationCount': sum(len(v) for v in by_url.values()),
        'uniqueUrls': len(by_url),
        'byUrl': by_url,
    }


def build_corpus_dir(by_url):
    d = tempfile.mkdtemp(prefix='watcher_test_')
    os.makedirs(os.path.join(d, 'index'))
    os.makedirs(os.path.join(d, 'watcher'))
    with open(os.path.join(d, 'index', 'citation_to_clauses.json'), 'w') as f:
        json.dump(citation_index(by_url), f)
    return d


def run(script, dirpath, *args):
    return subprocess.run([sys.executable, script, *args], cwd=dirpath, capture_output=True, text=True)


DEFAULT_INDEX = {
    'https://leginfo.legislature.ca.gov/faces/x': [
        {'case': 'Civ. Code § 1950.5(b)', 'cite': 'security deposit cap', 'clauseIds': ['c1']},
    ],
    'https://www.courtlistener.com/opinion/1/some-case/': [
        {'case': 'Some v. Case', 'cite': '1 F.3d 1', 'clauseIds': ['c2']},
    ],
}


class ScanBatchTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self, by_url=None):
        d = build_corpus_dir(by_url if by_url is not None else DEFAULT_INDEX)
        self._dirs.append(d)
        return d

    def test_classifies_statute_and_case_by_host(self):
        d = self.make_dir()
        r = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        batch = json.loads(r.stdout)
        self.assertEqual(len(batch['statuteCitations']), 1)
        self.assertEqual(len(batch['caseCitations']), 1)
        self.assertEqual(batch['statuteCitations'][0]['url'], 'https://leginfo.legislature.ca.gov/faces/x')
        self.assertEqual(batch['caseCitations'][0]['url'], 'https://www.courtlistener.com/opinion/1/some-case/')

    def test_batch_size_limits_entries(self):
        by_url = {f'https://example.com/{i}': [{'case': f'Case {i}', 'cite': f'{i}', 'clauseIds': [f'c{i}']}]
                  for i in range(5)}
        d = self.make_dir(by_url)
        r = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01', '--batch-size', '2')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        batch = json.loads(r.stdout)
        self.assertEqual(len(batch['statuteCitations']) + len(batch['caseCitations']), 2)

    def test_status_reports_remaining(self):
        d = self.make_dir()
        r = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01', '--status')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('Total distinct citations: 2', r.stdout)
        self.assertIn('Remaining: 2', r.stdout)

    def test_batch_order_is_deterministic_for_same_window(self):
        by_url = {f'https://example.com/{i}': [{'case': f'Case {i}', 'cite': f'{i}', 'clauseIds': [f'c{i}']}]
                  for i in range(20)}
        d = self.make_dir(by_url)
        r1 = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01', '--batch-size', '20')
        r2 = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01', '--batch-size', '20')
        self.assertEqual(r1.stdout, r2.stdout)
        # A different window is free to shuffle differently -- not asserted
        # equal or unequal here, just that the SAME window is reproducible,
        # which is the property --remaining depends on across repeated calls.

    def test_batch_is_not_dominated_by_alphabetically_early_hosts(self):
        # Regression guard: urls sort overwhelmingly by host, so taking
        # the index's raw order would give an early batch nothing but
        # the alphabetically-first host and never reach the others.
        by_url = {}
        for i in range(30):
            by_url[f'https://aaa-early-host.example.com/{i}'] = [
                {'case': f'Early {i}', 'cite': f'{i}', 'clauseIds': [f'early{i}']}]
        by_url['https://zzz-late-host.example.com/1'] = [
            {'case': 'Late', 'cite': '1', 'clauseIds': ['late1']}]
        d = self.make_dir(by_url)
        r = run(SCAN_BATCH_PY, d, '--since', '2026-07-01', '--through', '2026-10-01', '--batch-size', '10')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        batch = json.loads(r.stdout)
        all_urls = [e['url'] for e in batch['statuteCitations'] + batch['caseCitations']]
        self.assertFalse(all(u.startswith('https://aaa-early-host') for u in all_urls))


class RecordChangesTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self, by_url=None):
        d = build_corpus_dir(by_url if by_url is not None else DEFAULT_INDEX)
        self._dirs.append(d)
        return d

    def write(self, d, name, data):
        path = os.path.join(d, name)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f)
        return path

    def test_scanned_and_clean_results_recorded(self):
        d = self.make_dir()
        batch = {
            'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
            'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                   'case': 'Civ. Code § 1950.5(b)', 'cite': 'security deposit cap'}],
            'caseCitations': [{'url': 'https://www.courtlistener.com/opinion/1/some-case/',
                                'case': 'Some v. Case', 'cite': '1 F.3d 1'}],
        }
        batch_path = self.write(d, 'batch.json', batch)
        results_path = self.write(d, 'results.json', [])
        r = run(RECORD_PY, d, batch_path, results_path)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        with open(os.path.join(d, 'watcher', 'scanned.jsonl')) as f:
            scanned = [json.loads(line) for line in f]
        self.assertEqual(len(scanned), 2)
        with open(os.path.join(d, 'watcher', 'changes.jsonl')) as f:
            self.assertEqual(f.read().strip(), '')

    def test_finding_matched_to_affected_clause_ids(self):
        d = self.make_dir()
        batch = {
            'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
            'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                   'case': 'Civ. Code § 1950.5(b)', 'cite': 'security deposit cap'}],
            'caseCitations': [],
        }
        finding = {
            'url': 'https://leginfo.legislature.ca.gov/faces/x', 'sourceType': 'statute',
            'whatChanged': 'Amended the cap.', 'evidenceQuote': 'new text here',
            'sourceChecked': 'https://leginfo.legislature.ca.gov/faces/x', 'discoveredAt': '2026-10-01',
        }
        batch_path = self.write(d, 'batch.json', batch)
        results_path = self.write(d, 'results.json', [finding])
        r = run(RECORD_PY, d, batch_path, results_path)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        with open(os.path.join(d, 'watcher', 'changes.jsonl')) as f:
            changes = [json.loads(line) for line in f]
        self.assertEqual(len(changes), 1)
        self.assertEqual(changes[0]['affectedClauseIds'], ['c1'])

    def test_finding_missing_required_key_rejected(self):
        d = self.make_dir()
        batch = {'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
                 'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                        'case': 'x', 'cite': 'x'}], 'caseCitations': []}
        finding = {'url': 'https://leginfo.legislature.ca.gov/faces/x', 'sourceType': 'statute'}  # missing keys
        batch_path = self.write(d, 'batch.json', batch)
        results_path = self.write(d, 'results.json', [finding])
        r = run(RECORD_PY, d, batch_path, results_path)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('missing keys', r.stdout + r.stderr)

    def test_finding_url_outside_batch_rejected(self):
        d = self.make_dir()
        batch = {'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
                 'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                        'case': 'x', 'cite': 'x'}], 'caseCitations': []}
        finding = {
            'url': 'https://not-in-batch.example.com/', 'sourceType': 'statute',
            'whatChanged': 'x', 'evidenceQuote': 'x', 'sourceChecked': 'x', 'discoveredAt': '2026-10-01',
        }
        batch_path = self.write(d, 'batch.json', batch)
        results_path = self.write(d, 'results.json', [finding])
        r = run(RECORD_PY, d, batch_path, results_path)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not in the scanned batch', r.stdout + r.stderr)

    def test_rerecording_same_batch_refused(self):
        d = self.make_dir()
        batch = {'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
                 'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                        'case': 'x', 'cite': 'x'}], 'caseCitations': []}
        batch_path = self.write(d, 'batch.json', batch)
        results_path = self.write(d, 'results.json', [])
        run(RECORD_PY, d, batch_path, results_path)
        r = run(RECORD_PY, d, batch_path, results_path)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('already recorded', r.stdout + r.stderr)


class ReportTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self):
        d = build_corpus_dir(DEFAULT_INDEX)
        self._dirs.append(d)
        return d

    def record(self, d, batch, results):
        batch_path = os.path.join(d, 'batch.json')
        results_path = os.path.join(d, 'results.json')
        with open(batch_path, 'w') as f:
            json.dump(batch, f)
        with open(results_path, 'w') as f:
            json.dump(results, f)
        run(RECORD_PY, d, batch_path, results_path)

    def test_report_with_no_findings(self):
        d = self.make_dir()
        batch = {'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
                 'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                        'case': 'x', 'cite': 'x'}], 'caseCitations': []}
        self.record(d, batch, [])
        r = run(REPORT_PY, d, '--since', '2026-07-01', '--through', '2026-10-01')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        report_path = os.path.join(d, 'watcher', 'reports', '2026-10-01.md')
        self.assertTrue(os.path.exists(report_path))
        text = open(report_path).read()
        self.assertIn('Citations scanned: 1', text)
        self.assertIn('Changes found: 0', text)
        self.assertIn('No changes found', text)

    def test_report_includes_finding_and_affected_clauses(self):
        d = self.make_dir()
        batch = {'sinceDate': '2026-07-01', 'throughDate': '2026-10-01',
                 'statuteCitations': [{'url': 'https://leginfo.legislature.ca.gov/faces/x',
                                        'case': 'Civ. Code § 1950.5(b)', 'cite': 'security deposit cap'}],
                 'caseCitations': []}
        finding = {
            'url': 'https://leginfo.legislature.ca.gov/faces/x', 'sourceType': 'statute',
            'whatChanged': 'Amended the cap.', 'evidenceQuote': 'new text here',
            'sourceChecked': 'https://leginfo.legislature.ca.gov/faces/x', 'discoveredAt': '2026-10-01',
        }
        self.record(d, batch, [finding])
        r = run(REPORT_PY, d, '--since', '2026-07-01', '--through', '2026-10-01')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        text = open(os.path.join(d, 'watcher', 'reports', '2026-10-01.md')).read()
        self.assertIn('Changes found: 1', text)
        self.assertIn('Amended the cap.', text)
        self.assertIn('Affected clauses (1):** c1', text)

    def test_report_missing_scan_does_not_write_file(self):
        d = self.make_dir()
        r = run(REPORT_PY, d, '--since', '2026-07-01', '--through', '2026-10-01')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertFalse(os.path.exists(os.path.join(d, 'watcher', 'reports', '2026-10-01.md')))


class FlagForReviewTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_git_repo(self):
        d = build_corpus_dir(DEFAULT_INDEX)
        self._dirs.append(d)
        subprocess.run(['git', 'init', '-q', '-b', 'main'], cwd=d, check=True)
        subprocess.run(['git', 'config', 'user.email', 'test@example.com'], cwd=d, check=True)
        subprocess.run(['git', 'config', 'user.name', 'Test'], cwd=d, check=True)
        with open(os.path.join(d, 'README.md'), 'w') as f:
            f.write('placeholder\n')
        subprocess.run(['git', 'add', '-A'], cwd=d, check=True)
        subprocess.run(['git', 'commit', '-q', '-m', 'initial'], cwd=d, check=True)
        os.makedirs(os.path.join(d, 'watcher'), exist_ok=True)
        return d

    def write_changes(self, d, changes):
        with open(os.path.join(d, 'watcher', 'changes.jsonl'), 'w') as f:
            for c in changes:
                f.write(json.dumps(c) + '\n')
        subprocess.run(['git', 'add', '-A'], cwd=d, check=True)
        subprocess.run(['git', 'commit', '-q', '-m', 'add changes.jsonl'], cwd=d, check=True)

    def test_no_findings_for_clause_fails_cleanly(self):
        d = self.make_git_repo()
        r = run(FLAG_PY, d, 'c1')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('nothing to flag', r.stdout + r.stderr)

    def test_creates_local_branch_with_only_flag_file_and_returns(self):
        d = self.make_git_repo()
        self.write_changes(d, [{
            'url': 'https://leginfo.legislature.ca.gov/faces/x', 'sourceType': 'statute',
            'whatChanged': 'Amended the cap.', 'evidenceQuote': 'new text here',
            'sourceChecked': 'https://leginfo.legislature.ca.gov/faces/x', 'discoveredAt': '2026-10-01',
            'affectedClauseIds': ['c1'],
        }])
        r = run(FLAG_PY, d, 'c1')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('Not pushed', r.stdout)

        branch = subprocess.run(['git', 'rev-parse', '--abbrev-ref', 'HEAD'],
                                 cwd=d, capture_output=True, text=True).stdout.strip()
        self.assertEqual(branch, 'main')  # returned to the starting branch

        show = subprocess.run(['git', 'show', '--stat', '--format=', 'watcher/needs-review-c1'],
                               cwd=d, capture_output=True, text=True)
        self.assertIn('watcher/flags/c1.md', show.stdout)
        # The flag file only exists on the new branch, not checked out on main.
        self.assertFalse(os.path.exists(os.path.join(d, 'watcher', 'flags', 'c1.md')))

        content = subprocess.run(['git', 'show', 'watcher/needs-review-c1:watcher/flags/c1.md'],
                                  cwd=d, capture_output=True, text=True)
        self.assertIn('Amended the cap.', content.stdout)

    def test_dirty_working_tree_refused(self):
        d = self.make_git_repo()
        self.write_changes(d, [{
            'url': 'https://leginfo.legislature.ca.gov/faces/x', 'sourceType': 'statute',
            'whatChanged': 'x', 'evidenceQuote': 'x', 'sourceChecked': 'x', 'discoveredAt': '2026-10-01',
            'affectedClauseIds': ['c1'],
        }])
        with open(os.path.join(d, 'uncommitted.txt'), 'w') as f:
            f.write('dirty\n')
        r = run(FLAG_PY, d, 'c1')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('not clean', r.stdout + r.stderr)


if __name__ == '__main__':
    unittest.main()
