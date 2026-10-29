#!/usr/bin/env python3
"""Tests for tools/generate_data_inventory.py (Phase 9.5): table/column/
policy facts come from parsing real SQL, not from retyping them, and a
table or storage key with no hand-written annotation is a hard error
rather than a silently incomplete doc. --check detects staleness the
same way tools/tiering.py's --check does for tiers.json.

Builds a minimal, throwaway schema + app-code directory and runs the
real tools/generate_data_inventory.py against it as a subprocess.

Run directly: python3 tests/tools/test_generate_data_inventory.py
"""
import os
import shutil
import subprocess
import sys
import tempfile
import unittest

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
GENERATE = os.path.join(REPO_ROOT, 'tools', 'generate_data_inventory.py')

KNOWN_TABLE_SQL = """create table public.agreements (
  id text primary key,
  user_id uuid not null,
  title text not null
);
create policy "Users can view their own agreements" on public.agreements for select using (true);
"""

UNKNOWN_TABLE_SQL = """create table public.widgets (
  id uuid primary key,
  name text not null
);
"""


def build_dir(schema_sql, app_js='', account_js=''):
    d = tempfile.mkdtemp(prefix='data_inventory_test_')
    os.makedirs(os.path.join(d, 'supabase', 'migrations'))
    with open(os.path.join(d, 'supabase', 'schema.sql'), 'w') as f:
        f.write(schema_sql)
    with open(os.path.join(d, 'app.js'), 'w') as f:
        f.write(app_js)
    with open(os.path.join(d, 'account.js'), 'w') as f:
        f.write(account_js)
    with open(os.path.join(d, 'sign.js'), 'w') as f:
        f.write('')
    return d


def run_generate(dirpath, *args):
    return subprocess.run(
        [sys.executable, GENERATE, *args],
        cwd=dirpath, capture_output=True, text=True,
    )


class GenerateDataInventoryTests(unittest.TestCase):
    def setUp(self):
        self._dirs = []

    def tearDown(self):
        for d in self._dirs:
            shutil.rmtree(d, ignore_errors=True)

    def mkdir(self, *a, **kw):
        d = build_dir(*a, **kw)
        self._dirs.append(d)
        return d

    def test_known_table_generates_cleanly(self):
        d = self.mkdir(KNOWN_TABLE_SQL)
        r = run_generate(d)
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        with open(os.path.join(d, 'PRIVACY_DATA_INVENTORY.md')) as f:
            out = f.read()
        self.assertIn('`agreements`', out)
        self.assertIn('`id` (text)', out)
        self.assertIn('`user_id` (uuid)', out)
        self.assertIn('select: "Users can view their own agreements"', out)

    def test_unknown_table_is_a_hard_error(self):
        d = self.mkdir(UNKNOWN_TABLE_SQL)
        r = run_generate(d)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('widgets', r.stderr)
        self.assertIn('TABLE_NOTES', r.stderr)

    def test_unknown_local_storage_key_is_a_hard_error(self):
        d = self.mkdir(KNOWN_TABLE_SQL, app_js="const FOO_KEY = 'groundtruth-made-up-key';\nlocalStorage.setItem(FOO_KEY, '1');")
        r = run_generate(d)
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('groundtruth-made-up-key', r.stderr)
        self.assertIn('LOCAL_KEY_NOTES', r.stderr)

    def test_check_detects_a_missing_file(self):
        d = self.mkdir(KNOWN_TABLE_SQL)
        r = run_generate(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('does not exist', r.stderr)

    def test_check_passes_when_up_to_date(self):
        d = self.mkdir(KNOWN_TABLE_SQL)
        run_generate(d)
        r = run_generate(d, '--check')
        self.assertEqual(r.returncode, 0, r.stdout + r.stderr)
        self.assertIn('up to date', r.stdout)

    def test_check_detects_a_stale_file(self):
        d = self.mkdir(KNOWN_TABLE_SQL)
        run_generate(d)
        with open(os.path.join(d, 'supabase', 'schema.sql'), 'a') as f:
            f.write('\ncreate policy "Users can delete their own agreements" on public.agreements for delete using (true);\n')
        r = run_generate(d, '--check')
        self.assertEqual(r.returncode, 1, r.stdout + r.stderr)
        self.assertIn('stale', r.stderr)


if __name__ == '__main__':
    unittest.main()
