#!/usr/bin/env python3
"""Tests for verifier/triage.py (Phase 4.2): finding ids are stable and
unique even when one clause has several findings, --list only shows
undecided findings and respects a severity filter, --decide refuses an
unknown id, a double-decide, and a rejection with no reason, a rejected
decision appends a known-false-positive bullet to prompt.md, and a
fixed decision appends a real changelog.html entry in the project's
existing format (and refuses if the required changelog fields are
missing).

Builds a throwaway verifier/ + changelog.html in a temp directory and
runs the real script against it as a subprocess.

Run directly: python3 tests/verifier/test_triage.py
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TRIAGE_PY = os.path.join(REPO_ROOT, 'verifier', 'triage.py')
REAL_PROMPT = os.path.join(REPO_ROOT, 'verifier', 'prompt.md')

MINIMAL_CHANGELOG = '''<!doctype html>
<html>
<body>
  <div class="app">
    <div id="entries">

      <div class="entry">
        <div class="entry-meta">
          <span class="entry-date">2026-01-01</span>
          <span class="entry-clause">Existing · Doc</span>
        </div>
        <h3>An existing entry</h3>
        <div class="entry-block">
          <b>What we found</b>
          Something.
        </div>
        <div class="entry-block fixed">
          <b>What changed</b>
          Something else.
        </div>
        <div class="entry-sources">
          <a href="https://example.com/old" target="_blank" rel="noopener noreferrer">https://example.com/old</a>
        </div>
      </div>

    </div>

    <footer class="hint">Footer text.</footer>
  </div>
</body>
</html>
'''


def finding(clause_id, severity='minor', category='other', summary='s', evidence='e',
            source='https://example.com', fix='f'):
    return {'clauseId': clause_id, 'foundAt': 'x', 'severity': severity, 'category': category,
            'summary': summary, 'evidence': evidence, 'sourceChecked': source, 'suggestedFix': fix}


def build_dir(findings):
    d = tempfile.mkdtemp(prefix='triage_test_')
    os.makedirs(os.path.join(d, 'verifier'))
    with open(os.path.join(d, 'verifier', 'findings.jsonl'), 'w') as f:
        for entry in findings:
            f.write(json.dumps(entry) + '\n')
    shutil.copy(REAL_PROMPT, os.path.join(d, 'verifier', 'prompt.md'))
    with open(os.path.join(d, 'changelog.html'), 'w') as f:
        f.write(MINIMAL_CHANGELOG)
    return d


def run(dirpath, *args):
    return subprocess.run([sys.executable, TRIAGE_PY, *args], cwd=dirpath, capture_output=True, text=True)


class TriageTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def make_dir(self, findings):
        d = build_dir(findings)
        self._dirs.append(d)
        return d

    def test_finding_ids_stable_and_unique_within_one_clause(self):
        d = self.make_dir([finding('c1'), finding('c1'), finding('c2')])
        r = run(d, '--list')
        self.assertIn('c1#0', r.stdout)
        self.assertIn('c1#1', r.stdout)
        self.assertIn('c2#0', r.stdout)

    def test_list_severity_filter(self):
        d = self.make_dir([finding('c1', severity='major'), finding('c2', severity='minor')])
        r = run(d, '--list', '--severity', 'major')
        self.assertIn('c1#0', r.stdout)
        self.assertNotIn('c2#0', r.stdout)

    def test_decided_finding_drops_out_of_list(self):
        d = self.make_dir([finding('c1')])
        run(d, '--decide', 'c1#0', '--status', 'accepted', '--reason', 'fine as is')
        r = run(d, '--list')
        self.assertIn('0 open finding', r.stdout)

    def test_unknown_finding_id_rejected(self):
        d = self.make_dir([finding('c1')])
        r = run(d, '--decide', 'nope#0', '--status', 'accepted', '--reason', 'x')
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('no such finding', r.stderr)

    def test_double_decide_rejected(self):
        d = self.make_dir([finding('c1')])
        run(d, '--decide', 'c1#0', '--status', 'accepted', '--reason', 'x')
        r = run(d, '--decide', 'c1#0', '--status', 'accepted', '--reason', 'x')
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('already triaged', r.stderr)

    def test_rejected_without_reason_refused(self):
        d = self.make_dir([finding('c1')])
        r = run(d, '--decide', 'c1#0', '--status', 'rejected')
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('requires --reason', r.stderr)

    def test_rejected_appends_known_false_positive_to_prompt(self):
        d = self.make_dir([finding('c1', category='overclaiming')])
        run(d, '--decide', 'c1#0', '--status', 'rejected', '--reason', 'the citation does support it after all')
        with open(os.path.join(d, 'verifier', 'prompt.md')) as f:
            content = f.read()
        self.assertIn('Known false positives', content)
        self.assertIn('the citation does support it after all', content)

    def test_fixed_requires_changelog_fields(self):
        d = self.make_dir([finding('c1')])
        r = run(d, '--decide', 'c1#0', '--status', 'fixed')
        self.assertNotEqual(r.returncode, 0)
        self.assertIn('requires', r.stderr)

    def test_fixed_appends_real_changelog_entry(self):
        d = self.make_dir([finding('c1')])
        r = run(d, '--decide', 'c1#0', '--status', 'fixed',
                '--changelog-date', '2026-10-17', '--changelog-clause', 'Test Clause · Test Doc',
                '--changelog-title', 'A test defect was fixed',
                '--changelog-found', 'We found a test problem.',
                '--changelog-fix', 'We fixed the test problem.',
                '--changelog-source', 'https://example.com/source1',
                '--changelog-source', 'https://example.com/source2')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        with open(os.path.join(d, 'changelog.html')) as f:
            content = f.read()
        self.assertIn('A test defect was fixed', content)
        self.assertIn('We found a test problem.', content)
        self.assertIn('https://example.com/source1', content)
        self.assertIn('https://example.com/source2', content)
        # The existing entry must still be present, untouched.
        self.assertIn('An existing entry', content)
        # New entry must be inside #entries, before the footer.
        entries_idx = content.index('id="entries"')
        new_entry_idx = content.index('A test defect was fixed')
        footer_idx = content.index('class="hint"')
        self.assertLess(entries_idx, new_entry_idx)
        self.assertLess(new_entry_idx, footer_idx)

    def test_summary_counts(self):
        d = self.make_dir([finding('c1'), finding('c2'), finding('c3')])
        run(d, '--decide', 'c1#0', '--status', 'accepted', '--reason', 'x')
        run(d, '--decide', 'c2#0', '--status', 'rejected', '--reason', 'x')
        r = run(d, '--summary')
        self.assertIn('open       1', r.stdout)
        self.assertIn('accepted   1', r.stdout)
        self.assertIn('rejected   1', r.stdout)


if __name__ == '__main__':
    unittest.main()
