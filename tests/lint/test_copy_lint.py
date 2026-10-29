#!/usr/bin/env python3
"""Tests for lint/copy_lint.py (Phase 9.5): the app's own UI copy
(index.html, sign.html, app.js, account.js, sign.js) must not contain
a banned advisory or enforcement-claim phrase. Builds a disposable
directory with synthetic stand-ins for the 5 scanned files plus a real
copy of both phrase lists, rather than mutating the real app files.

Run directly: python3 tests/lint/test_copy_lint.py
"""
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
COPY_LINT = os.path.join(REPO_ROOT, 'lint', 'copy_lint.py')
REAL_ADVISORY = os.path.join(REPO_ROOT, 'lint', 'advisory_phrases.json')
REAL_ENFORCEMENT = os.path.join(REPO_ROOT, 'lint', 'enforcement_phrases.json')

SCAN_FILES = ['index.html', 'sign.html', 'app.js', 'account.js', 'sign.js']


def build_dir(contents_by_file):
    d = tempfile.mkdtemp(prefix='copy_lint_test_')
    os.makedirs(os.path.join(d, 'lint'))
    shutil.copy(REAL_ADVISORY, os.path.join(d, 'lint', 'advisory_phrases.json'))
    shutil.copy(REAL_ENFORCEMENT, os.path.join(d, 'lint', 'enforcement_phrases.json'))
    for name in SCAN_FILES:
        with open(os.path.join(d, name), 'w', encoding='utf-8') as f:
            f.write(contents_by_file.get(name, '<p>Plain, descriptive copy.</p>'))
    return d


def run_lint(dirpath):
    return subprocess.run(
        [sys.executable, COPY_LINT],
        cwd=dirpath, capture_output=True, text=True,
    )


class CopyLintTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def run_with(self, contents_by_file):
        d = build_dir(contents_by_file)
        self._dirs.append(d)
        return run_lint(d)

    def test_clean_copy_passes(self):
        r = self.run_with({})
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('OK', r.stdout)

    def test_advisory_phrase_caught(self):
        r = self.run_with({'app.js': "label.textContent = 'You should review this carefully.';"})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('advisory phrase', r.stderr)
        self.assertIn('app.js', r.stderr)

    def test_enforcement_claim_phrase_caught(self):
        r = self.run_with({'index.html': '<p>This document is enforceable in court.</p>'})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('enforcement-claim phrase', r.stderr)

    def test_phrase_in_a_comment_is_still_caught(self):
        # Deliberate: see copy_lint.py's own module docstring for why
        # this is scanned on purpose, not a gap to close.
        r = self.run_with({'sign.js': "// TODO: we recommend tightening this wording later\nconst x = 1;"})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('sign.js', r.stderr)

    def test_reports_the_correct_line_number(self):
        r = self.run_with({'account.js': "const a = 1;\nconst b = 2;\nconst c = 'we advise waiting';"})
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('account.js:3:', r.stderr)

    def test_privacy_and_terms_pages_are_not_scanned(self):
        # Scope decision recorded in copy_lint.py's docstring and
        # DECISIONS.md: ordinary legal-document language ("you must",
        # "you agree") in privacy.html/terms.html isn't in scope, so a
        # banned phrase placed there (not one of the 5 scanned files)
        # must not fail the build.
        d = build_dir({})
        self._dirs.append(d)
        with open(os.path.join(d, 'privacy.html'), 'w', encoding='utf-8') as f:
            f.write('<p>You must be at least 18 years old to use this Service.</p>')
        r = run_lint(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)


if __name__ == '__main__':
    unittest.main()
