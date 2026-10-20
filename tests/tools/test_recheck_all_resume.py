#!/usr/bin/env python3
"""Tests for tools/recheck_all.py's Phase 4.5 additions:

done_for_run() must only treat a url as "already done" when it was
checked in the SAME run (matching checkedAt), never any earlier run --
that's what lets a scheduled run re-check every url from scratch while
still letting a container-restart resume mid-run skip what today's run
already finished.

classify_status() is a regression test for two real false positives
found live while validating this phase against the real corpus: (1) a
PDF whose text extraction silently fails (an environment missing
pypdf/pdfminer, or any other extraction failure) must not be
indistinguishable from a real EMPTY if a caller passes no bodies at
all -- covered by the existing EMPTY case, not a new one; (2) leginfo's
billTextClient.xhtml (enrolled bill text) pages return a >500-byte
Cloudflare JS challenge page instead of real content, which used to
report a false MISMATCH against every single quote checked against it
-- now a distinct BLOCKED status, checked before MISMATCH ever gets a
chance to fire.

Imports tools/recheck_all.py directly by file path (not subprocess):
unlike every other tools/*.py test, exercising main() for real would
mean making live network requests, which isn't something a unit test
should depend on. Neither function below has any network dependency,
so both are tested directly instead of reimplemented.

Run directly: python3 tests/tools/test_recheck_all_resume.py
"""
import importlib.util
import json
import os
import shutil
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RECHECK_ALL_PATH = os.path.join(REPO_ROOT, 'tools', 'recheck_all.py')

spec = importlib.util.spec_from_file_location('recheck_all', RECHECK_ALL_PATH)
recheck_all = importlib.util.module_from_spec(spec)
spec.loader.exec_module(recheck_all)


class DoneForRunTests(unittest.TestCase):
    def setUp(self):
        self.d = tempfile.mkdtemp(prefix='recheck_all_resume_test_')
        self.path = os.path.join(self.d, 'history.jsonl')

    def tearDown(self):
        shutil.rmtree(self.d, ignore_errors=True)

    def write(self, records):
        with open(self.path, 'w') as f:
            for rec in records:
                f.write(json.dumps(rec) + '\n')

    def test_missing_file_is_empty(self):
        self.assertEqual(recheck_all.done_for_run(self.path, '2026-10-20'), set())

    def test_only_matching_run_date_counts_as_done(self):
        self.write([
            {'url': 'https://example.com/old', 'checkedAt': '2026-10-13'},
            {'url': 'https://example.com/today', 'checkedAt': '2026-10-20'},
        ])
        self.assertEqual(recheck_all.done_for_run(self.path, '2026-10-20'),
                          {'https://example.com/today'})
        self.assertEqual(recheck_all.done_for_run(self.path, '2026-10-13'),
                          {'https://example.com/old'})

    def test_a_new_scheduled_run_sees_nothing_done(self):
        self.write([{'url': 'https://example.com/old', 'checkedAt': '2026-10-13'}])
        self.assertEqual(recheck_all.done_for_run(self.path, '2026-10-27'), set())

    def test_malformed_line_is_skipped_not_fatal(self):
        with open(self.path, 'w') as f:
            f.write('not json\n')
            f.write(json.dumps({'url': 'https://example.com/today', 'checkedAt': '2026-10-20'}) + '\n')
        self.assertEqual(recheck_all.done_for_run(self.path, '2026-10-20'),
                          {'https://example.com/today'})


class ClassifyStatusTests(unittest.TestCase):
    def test_rate_limited_sentinel_wins_over_everything(self):
        status = recheck_all.classify_status(['__RATE_LIMITED__'], True, 'the quote')
        self.assertEqual(status, 'RATE_LIMITED')

    def test_short_body_is_empty(self):
        status = recheck_all.classify_status(['too short'], False, 'the quote')
        self.assertEqual(status, 'EMPTY')

    def test_no_bodies_at_all_is_empty(self):
        status = recheck_all.classify_status([], False, 'the quote')
        self.assertEqual(status, 'EMPTY')

    def test_unresolved_statute_list_page(self):
        body = 'Please Select from the List below' + ' padding' * 100
        status = recheck_all.classify_status([body], False, 'the quote')
        self.assertEqual(status, 'UNRESOLVED_URL')

    def test_cloudflare_challenge_page_is_blocked_not_mismatch(self):
        # The real page this was found against: a >500-byte "Just a
        # moment..." Cloudflare JS challenge, not the real statutory
        # text, from leginfo's billTextClient.xhtml.
        body = ('<!DOCTYPE html><html><head><title>Just a moment...</title>'
                '<meta http-equiv="content-security-policy" content="script-src '
                'https://challenges.cloudflare.com">') + ' padding' * 100
        status = recheck_all.classify_status([body], False, 'the quote text that is not in the page')
        self.assertEqual(status, 'BLOCKED')

    def test_quote_present_passes(self):
        body = 'some text before. the quote. some text after.' + ' padding' * 100
        status = recheck_all.classify_status([body], False, 'the quote')
        self.assertEqual(status, 'PASS')

    def test_quote_absent_is_mismatch(self):
        body = 'this page has real statutory text but not the cited quote.' + ' padding' * 100
        status = recheck_all.classify_status([body], False, 'a quote that is not present here')
        self.assertEqual(status, 'MISMATCH')


if __name__ == '__main__':
    unittest.main()
