#!/usr/bin/env python3
"""tools/build_release_bundle.py should be deterministic -- re-running
it with no real data change should produce byte-identical output.
Written after a real non-determinism was found and fixed (2026-11-23):
the `levels` dict used to be built by iterating a set comprehension
(`found_ids`), whose iteration order depends on Python's per-process
string hash seed, so the committed file's key order changed on every
run with no real content change -- a spurious diff, not a bug in the
data itself, but real noise this test exists to catch a return of.

    python3 tests/tools/test_build_release_bundle.py
"""
import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'tools'))
import build_release_bundle as bundle  # noqa: E402


class TestBuildReleaseBundleDeterminism(unittest.TestCase):
    def test_levels_output_is_byte_stable_across_runs(self):
        import json
        _, _, levels_out_a, _ = bundle.build()
        _, _, levels_out_b, _ = bundle.build()
        self.assertEqual(
            json.dumps(levels_out_a, sort_keys=False),
            json.dumps(levels_out_b, sort_keys=False),
            'levels dict key order changed between two runs with no real data change -- '
            'likely built from a set comprehension again instead of a stable-ordered list.',
        )

    def test_docs_and_clauses_output_is_stable_across_runs(self):
        docs_a, clauses_a, _, meta_a = bundle.build()
        docs_b, clauses_b, _, meta_b = bundle.build()
        self.assertEqual(docs_a, docs_b)
        self.assertEqual(clauses_a, clauses_b)
        self.assertEqual(meta_a, meta_b)


if __name__ == '__main__':
    unittest.main()
