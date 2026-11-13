#!/usr/bin/env python3
"""CA Wedge Plan Step 11: one public, permanent verification page per
document, at build/verify/<id>.html (served at /verify/<id> once
deployed — see config/seo.json's baseUrl, same empty-until-decided
placeholder tools/generate_seo_pages.py already uses). This is the
page a "verification stamp" link embedded in an exported document
(app.js's buildPlainText()/buildPdfDocDefinition()/buildDocxDocument(),
and the on-screen output screen) points to: proof a reader can check
independently of this product, after a document has already left the
browser, of exactly what's claimed about that document's sourcing.

For each document: its tier, a plain-language count of its
legal-authority clauses by verification level (the same figure
renderOutputTierSummary() in app.js shows on-screen — see
DECISIONS.md, CA Wedge Plan Step 10), and every one of those clauses
with its level, citation, quote, and a live link to the primary
source, so the claim is checkable against the government's own text,
not just this product's say-so.

Deterministic, like generate_seo_pages.py: a pure function of
data/documents.json, data/clauses.json, tiers.json,
verification_levels.json, config/seo.json — no timestamps, no
randomness. Shares tools/clause_levels.py with tools/tiering.py and
tools/build_verification_levels.py rather than re-deriving a level
from scratch a fourth time — see that module's own docstring for why
that matters.

    python3 tools/generate_verify_pages.py
    python3 tools/generate_verify_pages.py --out /tmp/some/dir
"""
import html
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_OUT_DIR = os.path.join(ROOT, 'build', 'verify')

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from clause_levels import load_verifier_state, clause_level

LEVEL_LABEL = {
    'adversarially_checked': 'Adversarially checked',
    'verified': 'Verified',
    'cited': 'Cited',
}
TIER_LABEL = {'A': 'Tier A', 'B': 'Tier B', 'C': 'Tier C'}
TIER_EXPLANATION = {
    'A': 'Has at least one legal-authority clause, meets every Tier B check, and every one of those clauses has passed an independent adversarial review and an automated accessibility check, both with no open issues of any severity.',
    'B': 'Every field explains why it is asked, every citation has been checked against a primary source (not a secondhand copy) and is still current, and a sample has been generated and reviewed.',
    'C': 'Passed the corpus’s structural and citation checks. Some fields may not yet explain why they are asked, or a citation check may be incomplete.',
}


def load_json(relpath):
    with open(os.path.join(ROOT, relpath), encoding='utf-8') as f:
        return json.load(f)


def load_tiers():
    try:
        return load_json('tiers.json').get('documents', {})
    except FileNotFoundError:
        return {}


def load_seo_config():
    try:
        return load_json('config/seo.json')
    except FileNotFoundError:
        return {}


def esc(s):
    return html.escape(str(s), quote=True)


def clause_entry_id(entry):
    return entry if isinstance(entry, str) else entry.get('id')


def doc_clauses(doc, clauses_by_id):
    out = []
    for entry in doc['clauseOrder']:
        clause = clauses_by_id.get(clause_entry_id(entry))
        if clause:
            out.append(clause)
    return out


def page_url(base_url, rel_path):
    return f"{base_url.rstrip('/')}/{rel_path}" if base_url else f"/{rel_path}"


def schema_script_json(schema):
    # Same reasoning as generate_seo_pages.py's own helper: escape "<"
    # so a literal "</script" substring from the corpus's own text
    # (a case name, a document title) can't close the tag early.
    return json.dumps(schema, sort_keys=True).replace('<', '\\u003c')


def page_shell(title, description, url, schema, body_html):
    return (
        '<!doctype html>\n<html lang="en">\n<head>\n'
        '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
        f'<title>{esc(title)}</title>\n'
        f'<meta name="description" content="{esc(description)}">\n'
        f'<link rel="canonical" href="{esc(url)}">\n'
        f'<script type="application/ld+json">{schema_script_json(schema)}</script>\n'
        '</head>\n<body>\n' + body_html + '\n</body>\n</html>\n'
    )


def render_verify_page(doc, clauses_by_id, checked_ids, unclean_ids, base_url):
    title = f"Verification record — {doc['title']} | Groundtruth"
    description = f"What's actually been checked about {doc['title']}'s legal sourcing, and against what."
    url = page_url(base_url, f"{doc['id']}.html")

    tier_info = load_tiers().get(doc['id'], {})
    tier = tier_info.get('tier', 'C')
    drafting_only = bool(tier_info.get('draftingOnly'))

    clauses = doc_clauses(doc, clauses_by_id)
    authority_clauses = [c for c in clauses if c.get('kind') == 'authority']

    counts = {'adversarially_checked': 0, 'verified': 0, 'cited': 0}
    clause_items = []
    for clause in authority_clauses:
        level = clause_level(clause, checked_ids, unclean_ids) or 'cited'
        counts[level] += 1
        cite_items = ''.join(
            f'<li>{esc(c.get("case", ""))}, {esc(c.get("cite", ""))} — '
            f'<a href="{esc(c.get("url", ""))}">{esc(c.get("url", ""))}</a><br>'
            f'“{esc(c.get("quote", ""))}”</li>'
            for c in (clause.get('citations') or [])
        )
        gap_html = f'<p class="gap">Known gap: {esc(clause["gap"])}</p>' if clause.get('gap') else ''
        checked_date_suffix = f" (checked {esc(clause['checkedDate'])})" if clause.get('checkedDate') else ''
        clause_items.append(
            f'<li><strong>{esc(clause["title"])}</strong> — {esc(LEVEL_LABEL[level])}'
            f'{checked_date_suffix}'
            f'<ul>{cite_items}</ul>{gap_html}</li>'
        )

    total = len(authority_clauses)
    count_parts = []
    if counts['adversarially_checked']:
        count_parts.append(f"{counts['adversarially_checked']} adversarially checked")
    if counts['verified']:
        count_parts.append(f"{counts['verified']} verified")
    if counts['cited']:
        count_parts.append(f"{counts['cited']} cited only")
    count_line = (
        f"{total} legal-authority {'clause' if total == 1 else 'clauses'}: {', '.join(count_parts)}."
        if total else 'This document makes no legal-authority claim — it is built entirely from drafting language.'
    )

    drafting_note = (
        '<p>This document is built entirely from drafting language. It makes no legal-authority claim for an '
        'adversarial verifier or a citation check to confirm, so it can never reach Tier A regardless of its '
        'tier badge above.</p>' if drafting_only else ''
    )

    schema = {
        '@context': 'https://schema.org',
        '@type': 'ClaimReview',
        'url': url,
        'claimReviewed': f"{doc['title']}'s legal sourcing",
        'itemReviewed': {'@type': 'CreativeWork', 'name': doc['title']},
    }

    body = f"""<h1>Verification record: {esc(doc['title'])}</h1>
<p><strong>{esc(TIER_LABEL[tier])}</strong> — {esc(TIER_EXPLANATION[tier])}</p>
{drafting_note}
<p>{esc(count_line)}</p>
<h2>Every legal-authority clause in this document</h2>
<ul>{''.join(clause_items)}</ul>
<p>“Cited”, “Verified”, and “Adversarially checked” are three different, honest levels of
scrutiny — see <a href="{esc(page_url(base_url, 'methodology.html'))}">methodology</a> for exactly what each one
requires. This page is generated directly from the same corpus data the document itself is built from — nothing
on it is typed by hand.</p>
<p><a href="{esc(page_url(base_url, ''))}">Build this document with Groundtruth</a></p>"""

    return {
        'title': title, 'description': description, 'url': url,
        'path': f"{doc['id']}.html",
        'html': page_shell(title, description, url, schema, body),
    }


def generate(out_dir=DEFAULT_OUT_DIR):
    docs = load_json('data/documents.json')
    clauses_by_id = {c['id']: c for c in load_json('data/clauses.json')['clauses']}
    seo_config = load_seo_config()
    base_url = seo_config.get('baseUrl', '')
    checked_ids, unclean_ids = load_verifier_state()

    pages = [render_verify_page(doc, clauses_by_id, checked_ids, unclean_ids, base_url) for doc in docs]

    for page in pages:
        full_path = os.path.join(out_dir, page['path'])
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(page['html'])

    return pages


def main():
    out_dir = DEFAULT_OUT_DIR
    args = sys.argv[1:]
    if '--out' in args:
        out_dir = args[args.index('--out') + 1]
    pages = generate(out_dir)
    print(f"Wrote {len(pages)} verification page(s) to {out_dir}.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
