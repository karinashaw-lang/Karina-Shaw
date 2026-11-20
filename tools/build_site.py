#!/usr/bin/env python3
"""The simple static build this project has never had: assembles
exactly what the free, no-backend tier of the app needs into
build/site/, ready to upload to any static host as-is.

This is deliberately the *simple* build, not the full launch: it
ships the main app (browsing, search, interview, live preview, source
panels, verify pages, the free contract reader) and the standalone
legal/trust pages, with no config.js -- so the deployed site runs in
exactly the same "cloud accounts aren't turned on for this deployment
yet" mode this sandbox runs in today (account.js's own header
comment). Paid export, Stripe, and Supabase are unaffected either
way: Global Rule 2's free list works with no backend at all, and
nothing here changes that. Explicitly NOT included: anything under
config/seo.json's wave pages (build/seo/, SEO_LAUNCH_PLAN.md's own
separate, owner-gated publish decision) and every internal planning/
review document (DECISIONS.md, OWNER_TODO.md, review/, verifier/,
etc.) -- those aren't meant for a public host.

Pure copy + one generator call, no bundler, no minification, no step
this app didn't already need -- "simple" is the point, matching how
this app has run all along (plain scripts, no build step, see
package.json's own description).

    python3 tools/build_site.py          # build into build/site/
    python3 tools/build_site.py --out DIR   # build into a different directory
"""
import argparse
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_OUT = ROOT / 'build' / 'site'

# Every file/directory the free tier's own fetch() calls and <script>/
# <link> tags actually reference -- enumerated by grepping app.js,
# account.js, and every *.html page's src/href attributes, not guessed.
# config.js and config.example.js are deliberately excluded: shipping
# either would mean this "simple build" is either someone else's real
# secret (never) or a non-functional placeholder masquerading as one,
# neither of which is better than the plain, honest "not configured"
# state account.js already shows with no config.js present at all.
STATIC_FILES = [
    'index.html', 'sign.html', 'trust.html', 'terms.html', 'privacy.html',
    'storage-notice.html', 'methodology.html', 'changelog.html',
    'app.js', 'account.js', 'sign.js', 'trust.js',
    'contract_matcher.js', 'contract_worker.js', 'styles.css',
    'tiers.json', 'verification_levels.json',
]
STATIC_DIRS = ['lib', 'data', 'schema', 'search', 'filing', 'config']
EXCLUDE_FROM_CONFIG_DIR = {'pricing.json'}  # see note below


def copy_tree(src: Path, dst: Path):
    dst.mkdir(parents=True, exist_ok=True)
    for item in src.iterdir():
        if item.name.startswith('.'):
            continue
        target = dst / item.name
        if item.is_dir():
            copy_tree(item, target)
        else:
            shutil.copy2(item, target)


def build(out_dir: Path):
    if out_dir.exists():
        shutil.rmtree(out_dir)
    out_dir.mkdir(parents=True)

    missing = []
    for name in STATIC_FILES:
        src = ROOT / name
        if not src.exists():
            missing.append(name)
            continue
        shutil.copy2(src, out_dir / name)

    for name in STATIC_DIRS:
        src = ROOT / name
        if not src.exists():
            missing.append(name + '/')
            continue
        copy_tree(src, out_dir / name)

    # config/pricing.json is real pricing-strategy content (today: null
    # placeholders and an internal note about the per-document-vs-
    # subscription reversal) that nothing in the free tier's own code
    # fetches -- app.js never reads it. Left out of a simple public
    # build rather than published by accident; add it back explicitly
    # once there's an actual price and a reason to show it.
    for name in EXCLUDE_FROM_CONFIG_DIR:
        stale = out_dir / 'config' / name
        if stale.exists():
            stale.unlink()

    if missing:
        sys.exit(f'build_site: missing expected source path(s), aborting: {missing}')

    # Verify pages are generated, not committed (build/ is gitignored) --
    # regenerate them straight into this build's own verify/ subpath so
    # verifyPageUrl(doc)'s relative 'verify/<id>.html' links resolve
    # correctly wherever this directory ends up served from.
    verify_out = out_dir / 'verify'
    result = subprocess.run(
        [sys.executable, str(ROOT / 'tools' / 'generate_verify_pages.py'), '--out', str(verify_out)],
        cwd=ROOT,
    )
    if result.returncode != 0:
        sys.exit('build_site: generate_verify_pages.py failed')

    file_count = sum(1 for _ in out_dir.rglob('*') if _.is_file())
    print(f'Built {out_dir} ({file_count} files). No config.js included -- '
          f'runs free-tier-only, same as this sandbox today.')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--out', default=str(DEFAULT_OUT))
    args = parser.parse_args()
    build(Path(args.out).resolve())


if __name__ == '__main__':
    main()
