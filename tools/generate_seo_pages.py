#!/usr/bin/env python3
"""Phase 8.3: programmatic SEO page generator.

Builds two kinds of static page from the corpus, writing them to
build/seo/ (gitignored — see DECISIONS.md for why generated output
isn't committed):

  - One page per document (build/seo/documents/<id>.html): what it is,
    jurisdiction, the clauses it contains with their citations, what
    information it asks for, and links to related documents.
  - One page per real question the corpus can actually answer
    (build/seo/questions/<slug>.html), drawn from
    tests/search/golden_queries.json -- 100 real plain-language
    queries this project already verified map to a real document via
    the live search engine (Phase 5.1), not invented for this phase.
    A query whose matching document has no authority clause with a
    real citation is skipped outright: a "question" page with no
    supporting authority behind it is exactly the thin/unsupported
    content the master plan's own instruction says not to publish.

Deterministic: every byte of every page is a pure function of
data/documents.json, data/clauses.json, config/seo.json,
tests/search/golden_queries.json, tiers.json, verifier/findings.jsonl,
and verifier/triage.jsonl -- no timestamps, no randomness, no network
access. Running this twice on the same corpus produces byte-identical
output (tests/tools/test_generate_seo_pages.py checks this directly),
which is what makes tools/validate_seo_pages.py's "fails CI if a page
is thin or two pages are too similar" check mean anything: a flaky
generator would make that check unfalsifiable.

Phase 12 Step 8: a staged launch needs a way to generate every page
(for internal QA and so validate_seo_pages.py keeps checking the full
set) while only a subset is actually meant to be indexed by a search
engine if this output were ever deployed. `--stage N` (or `stage=N`
to generate()) does not remove any page -- every document still gets
exactly one page, so test_every_document_gets_a_page and the
determinism test are unaffected by the default (stage=None, meaning
"no restriction", identical to pre-Step-8 behavior). What changes:
- A page whose document doesn't qualify for stage N gets
  `<meta name="robots" content="noindex">` added to its <head>, so a
  search engine that somehow crawled it anyway would not index it.
- sitemap.xml lists only the in-stage, indexable pages -- a sitemap
  is an invitation to crawl, and a withheld page shouldn't be in it.
A document's own stage (see `compute_doc_stage()`) is purely a
function of its current Tier (tiers.json) and whether any of its
clauses carry an open verifier finding (verifier/findings.jsonl minus
whatever verifier/triage.jsonl has already closed) -- not a hardcoded
list, so it tracks the corpus's real, current quality signals instead
of going stale the moment another checkpoint wave runs.
See SEO_LAUNCH_PLAN.md for what each stage means and the actual
rollout recommendation; this module only computes the mechanism.

    python3 tools/generate_seo_pages.py
    python3 tools/generate_seo_pages.py --out /tmp/some/dir
    python3 tools/generate_seo_pages.py --stage 2
"""
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_OUT_DIR = os.path.join(ROOT, 'build', 'seo')

JURISDICTION_CA_RE = re.compile(r'\bCal\.|\bCalifornia\b', re.I)
JURISDICTION_CA_URL_RE = re.compile(r'leginfo\.legislature\.ca\.gov|courts\.ca\.gov', re.I)
JURISDICTION_FED_RE = re.compile(
    r'\bU\.S\.C\.|\bC\.F\.R\.|\bF\.\s*(?:2d|3d|4th|Supp)|\b\d+\s+U\.S\.\s+\d|\bCir\.\)|'
    r'\bS\.\s*Ct\.|U\.S\. Const|\bFed\.\s*R\.|\bPub\.\s*L\.\s*No', re.I)
JURISDICTION_FED_URL_RE = re.compile(r'law\.cornell\.edu|ecfr\.gov|govinfo\.gov|uscode\.house\.gov|supremecourt\.gov', re.I)

JURISDICTION_LABEL = {'CA': 'California', 'FED': 'Federal', 'MIXED': 'California & federal', 'OTHER': 'General — not state-specific'}
JURISDICTION_NOTICE = {
    'CA': "This document's legal clauses are sourced primarily to California law. Outside California, some of what it cites may not apply.",
    'FED': "This document's legal clauses are sourced to federal law, which applies the same way in every state.",
    'MIXED': "This document's legal clauses are sourced to a mix of California and federal law. Outside California, the California-specific parts may not apply.",
    'OTHER': "This document's legal clauses illustrate a general doctrine using out-of-state case law as examples, not a California-specific rule.",
}


def load_json(relpath):
    with open(os.path.join(ROOT, relpath), encoding='utf-8') as f:
        return json.load(f)


def load_seo_config():
    try:
        return load_json('config/seo.json')
    except FileNotFoundError:
        return {'baseUrl': ''}


def load_tiers():
    try:
        return load_json('tiers.json')['documents']
    except FileNotFoundError:
        return {}


# findingId is <clauseId>#<n>, n counting that clause's findings in
# the order they appear in findings.jsonl -- the same convention
# verifier/triage.py and verifier/record_result.py already use.
def load_open_severities_by_clause():
    triaged = set()
    try:
        with open(os.path.join(ROOT, 'verifier', 'triage.jsonl'), encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line:
                    triaged.add(json.loads(line)['findingId'])
    except FileNotFoundError:
        pass

    open_by_clause = {}
    seen_count = {}
    try:
        with open(os.path.join(ROOT, 'verifier', 'findings.jsonl'), encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                finding = json.loads(line)
                cid = finding['clauseId']
                idx = seen_count.get(cid, 0)
                seen_count[cid] = idx + 1
                if f"{cid}#{idx}" not in triaged:
                    open_by_clause.setdefault(cid, []).append(finding['severity'])
    except FileNotFoundError:
        pass
    return open_by_clause


# Stage 1: narrowest and safest -- Tier A, nothing open against it at
#   all (today's Tier A is almost entirely drafting-only forms with no
#   authority clause to get wrong, so this is close to zero-risk).
# Stage 2: adds Tier B documents with zero open findings of any
#   severity -- every authority clause checked clean, no lingering
#   advisory-tone/unverifiable-source minor either.
# Stage 3: all of today's Tier A + Tier B, including the ones that
#   still carry an open *minor* finding -- acceptable per this
#   project's own severity definitions (advisory-tone drift, an
#   unverifiable source, a stylistic overclaim a careful reader would
#   still read correctly), not a wrong statement of law.
# Stage 4: everything, including Tier C -- not a real recommendation
#   today (verifier coverage is only 22% of the corpus), but the
#   mechanism supports it once coverage grows.
def compute_doc_stage(doc, clauses_by_id, tier, open_by_clause):
    open_severities = set()
    for entry in doc['clauseOrder']:
        open_severities.update(open_by_clause.get(clause_entry_id(entry), []))
    has_blocker_or_major = bool(open_severities & {'blocker', 'major'})
    if tier == 'C' or has_blocker_or_major:
        return 4
    if not open_severities:
        return 1 if tier == 'A' else 2
    return 3


def esc(s):
    return html.escape(s or '', quote=True)


def slugify(text):
    slug = re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')
    return slug or 'question'


def clause_entry_id(entry):
    return entry if isinstance(entry, str) else entry['id']


def classify_citation_jurisdiction(cit):
    text = f"{cit.get('case', '')} {cit.get('cite', '')}"
    url = cit.get('url', '')
    is_ca = bool(JURISDICTION_CA_RE.search(text)) or bool(JURISDICTION_CA_URL_RE.search(url))
    is_fed = bool(JURISDICTION_FED_RE.search(text)) or bool(JURISDICTION_FED_URL_RE.search(url))
    if is_ca and not is_fed:
        return 'CA'
    if is_fed and not is_ca:
        return 'FED'
    if is_ca and is_fed:
        return 'BOTH'
    return 'OTHER'


# Mirrors app.js's classifyDocumentJurisdiction() exactly, independently
# reimplemented in Python the same way tools/tiering.py and
# tools/build_citation_index.py already analyze this same corpus data
# offline rather than importing the browser code. Kept in sync by eye,
# not by sharing source, since there's no realistic way to share a
# small pure function between a browser script and a Python one here --
# the same tradeoff this project already made for those two tools.
def classify_document_jurisdiction(doc, clauses_by_id):
    has_authority = has_ca = has_fed = has_other = False
    for entry in doc['clauseOrder']:
        clause = clauses_by_id.get(clause_entry_id(entry))
        if not clause or clause.get('kind') != 'authority':
            continue
        has_authority = True
        for cit in clause.get('citations') or []:
            k = classify_citation_jurisdiction(cit)
            if k == 'CA':
                has_ca = True
            elif k == 'FED':
                has_fed = True
            elif k == 'BOTH':
                has_ca = has_fed = True
            else:
                has_other = True
    if not has_authority:
        return 'NONE'
    if has_ca and has_fed:
        return 'MIXED'
    if has_ca:
        return 'CA'
    if has_fed:
        return 'FED'
    return 'OTHER' if has_other else 'NONE'


def page_url(base_url, rel_path):
    return f"{base_url.rstrip('/')}/{rel_path}" if base_url else f"/{rel_path}"


def doc_clauses(doc, clauses_by_id):
    out = []
    for entry in doc['clauseOrder']:
        clause = clauses_by_id.get(clause_entry_id(entry))
        if clause:
            out.append(clause)
    return out


def related_documents(doc, all_docs, limit=5):
    cats = set(doc.get('categories') or [])
    scored = []
    for other in all_docs:
        if other['id'] == doc['id']:
            continue
        overlap = len(cats & set(other.get('categories') or []))
        if overlap:
            scored.append((overlap, other))
    scored.sort(key=lambda t: (-t[0], t[1]['id']))
    return [d for _, d in scored[:limit]]


def schema_script_json(schema):
    # json.dumps() only escapes for JSON syntax, not for safely sitting
    # inside an HTML <script> tag -- a literal "</script" substring in
    # the corpus's own text (a document title, a case name) would
    # otherwise close the tag early and leak raw text into the
    # rendered page. Escaping "<" as < (valid inside a JSON
    # string, invisible to any JSON parser) is the standard fix and
    # cheaper than string-replacing "</script" specifically.
    return json.dumps(schema, sort_keys=True).replace('<', '\\u003c')


def page_shell(title, description, url, schema, body_html, noindex=False):
    robots_tag = '<meta name="robots" content="noindex">\n' if noindex else ''
    return (
        '<!doctype html>\n<html lang="en">\n<head>\n'
        '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
        f'<title>{esc(title)}</title>\n'
        f'<meta name="description" content="{esc(description)}">\n'
        f'<link rel="canonical" href="{esc(url)}">\n'
        + robots_tag +
        f'<script type="application/ld+json">{schema_script_json(schema)}</script>\n'
        '</head>\n<body>\n' + body_html + '\n</body>\n</html>\n'
    )


def render_document_page(doc, clauses_by_id, all_docs, base_url, noindex=False):
    jkey = classify_document_jurisdiction(doc, clauses_by_id)
    title = f"{doc['title']} — California | Groundtruth"
    description = doc['description'][:300]
    url = page_url(base_url, f"documents/{doc['id']}.html")
    clauses = doc_clauses(doc, clauses_by_id)

    clause_items = []
    for clause in clauses:
        cites_html = ''
        if clause.get('kind') == 'authority' and clause.get('citations'):
            cite_lis = ''.join(f"<li>{esc(c.get('case', ''))}, {esc(c.get('cite', ''))}</li>" for c in clause['citations'])
            cites_html = f"<ul>{cite_lis}</ul>"
        clause_items.append(f"<li><strong>{esc(clause['title'])}</strong>{cites_html}</li>")

    field_items = ''.join(f"<li>{esc(f.get('label', ''))}</li>" for f in doc.get('fields') or [])
    categories = doc.get('categories') or []
    related = related_documents(doc, all_docs)
    related_items = ''.join(
        f'<li><a href="{esc(page_url(base_url, "documents/" + r["id"] + ".html"))}">{esc(r["title"])}</a></li>'
        for r in related
    )

    jurisdiction_html = ''
    if jkey != 'NONE':
        jurisdiction_html = (
            f'<p>Jurisdiction: {esc(JURISDICTION_LABEL[jkey])} — {esc(JURISDICTION_NOTICE[jkey])}</p>'
        )

    schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': doc['title'],
        'description': description,
        'url': url,
        'about': {'@type': 'CreativeWork', 'name': doc['title']},
    }

    body = f"""<h1>{esc(doc['title'])}</h1>
<p>{esc(doc['description'])}</p>
<p>Typically used for: {esc(', '.join(categories)) if categories else 'general use'}.</p>
{jurisdiction_html}
<h2>What this document covers</h2>
<ul>{''.join(clause_items)}</ul>
<h2>Information this document asks for</h2>
<ul>{field_items}</ul>
<h2>Related documents</h2>
<ul>{related_items}</ul>
<p>This page describes what the document's sourced clauses say — it isn't legal advice about any particular situation.</p>
<p><a href="{esc(page_url(base_url, ''))}">Build this document with Groundtruth</a></p>"""

    return {
        'title': title, 'description': description, 'url': url,
        'path': f"documents/{doc['id']}.html", 'noindex': noindex,
        'html': page_shell(title, description, url, schema, body, noindex),
    }


def render_question_page(query_entry, doc, clauses_by_id, base_url, noindex=False):
    query = query_entry['query']
    supporting = [c for c in doc_clauses(doc, clauses_by_id) if c.get('kind') == 'authority' and c.get('citations')]
    if not supporting:
        return None  # no supporting authority -- don't publish a thin/unsupported question page

    display_query = query[0].upper() + query[1:] if query else query
    title = f"{display_query}? | Groundtruth"
    description = f"What the sourced clauses in {doc['title']} say about: {query}."
    url = page_url(base_url, f"questions/{slugify(query)}.html")

    clause_items = ''.join(f"<li>{esc(c['title'])}</li>" for c in supporting[:5])
    cite_items = ''.join(
        f"<li>{esc(c.get('case', ''))}, {esc(c.get('cite', ''))}</li>"
        for clause in supporting[:3] for c in clause['citations'][:2]
    )

    schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': {
            '@type': 'Question',
            'name': display_query,
            'acceptedAnswer': {'@type': 'Answer', 'text': description},
        },
    }

    body = f"""<h1>{esc(display_query)}?</h1>
<p>{esc(description)}</p>
<h2>Relevant clauses in {esc(doc['title'])}</h2>
<ul>{clause_items}</ul>
<h2>Sources cited</h2>
<ul>{cite_items}</ul>
<p>This describes what the sourced clauses say — it isn't legal advice about your situation.</p>
<p><a href="{esc(page_url(base_url, f"documents/{doc['id']}.html"))}">See the full {esc(doc['title'])}</a></p>"""

    return {
        'title': title, 'description': description, 'url': url,
        'path': f"questions/{slugify(query)}.html", 'noindex': noindex,
        'html': page_shell(title, description, url, schema, body, noindex),
    }


def build_sitemap(pages, base_url):
    indexable = [p for p in pages if not p.get('noindex')]
    urls = ''.join(f"<url><loc>{esc(p['url'])}</loc></url>\n" for p in indexable)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}</urlset>\n'


def generate(out_dir=DEFAULT_OUT_DIR, stage=None):
    docs = load_json('data/documents.json')
    clauses_by_id = {c['id']: c for c in load_json('data/clauses.json')['clauses']}
    seo_config = load_seo_config()
    base_url = seo_config.get('baseUrl', '')
    golden_queries = load_json('tests/search/golden_queries.json')
    docs_by_id = {d['id']: d for d in docs}

    doc_stage = {}
    if stage is not None:
        tiers = load_tiers()
        open_by_clause = load_open_severities_by_clause()
        for doc in docs:
            tier = (tiers.get(doc['id']) or {}).get('tier', 'C')
            doc_stage[doc['id']] = compute_doc_stage(doc, clauses_by_id, tier, open_by_clause)

    def is_noindex(doc_id):
        return stage is not None and doc_stage.get(doc_id, 4) > stage

    pages = []
    for doc in docs:
        pages.append(render_document_page(doc, clauses_by_id, docs, base_url, noindex=is_noindex(doc['id'])))

    # Dedupe by slug — two different queries can slugify to the same
    # string (e.g. punctuation-only differences), and the last one
    # would silently overwrite the first on disk otherwise.
    seen_slugs = set()
    for entry in golden_queries:
        doc = docs_by_id.get(entry['expectedDocId'])
        if not doc:
            continue
        page = render_question_page(entry, doc, clauses_by_id, base_url, noindex=is_noindex(doc['id']))
        if not page or page['path'] in seen_slugs:
            continue
        seen_slugs.add(page['path'])
        pages.append(page)

    for page in pages:
        full_path = os.path.join(out_dir, page['path'])
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(page['html'])

    sitemap_path = os.path.join(out_dir, 'sitemap.xml')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(build_sitemap(pages, base_url))

    return pages


def main():
    out_dir = DEFAULT_OUT_DIR
    if '--out' in sys.argv:
        out_dir = sys.argv[sys.argv.index('--out') + 1]
    stage = None
    if '--stage' in sys.argv:
        stage = int(sys.argv[sys.argv.index('--stage') + 1])
    pages = generate(out_dir, stage=stage)
    doc_count = sum(1 for p in pages if p['path'].startswith('documents/'))
    question_count = sum(1 for p in pages if p['path'].startswith('questions/'))
    noindex_count = sum(1 for p in pages if p.get('noindex'))
    stage_note = f' (stage {stage}: {len(pages) - noindex_count} indexable, {noindex_count} noindex)' if stage is not None else ''
    print(f'Generated {doc_count} document pages and {question_count} question pages to {out_dir}.{stage_note}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
