#!/usr/bin/env python3
"""Full-corpus completion review, WS0: builds review/queue.jsonl -- one
row per clause (6,621) and one row per document (741), each carrying a
priority score, so the clause-level (WS2) and document-level (WS3)
review workstreams have a real, computed order to work through instead
of an arbitrary one.

Every factor in the priority score is an objective signal already
present in the corpus or the verifier's own records -- never an
invented business or legal judgment:

  demand        1.0 if the document is in the CA Wedge Plan's 7-document
                wedge cluster (a real, already-made go-to-market
                decision -- see app.js's WEDGE_CLUSTER_DOC_IDS), else
                0.0. This is the ONLY real demand signal that exists
                today: analytics_events holds zero production rows
                (see BUILD_STATUS.md), so there is no usage data to
                weight by. Re-run this script once real usage exists
                and extend this factor rather than guessing at it now.
  legal_risk    Built only from reproducible structural signals, never
                a subjective "this category is riskier" judgment (that
                call belongs to WS3's human-reviewed research, or to an
                attorney under Level 2 -- not to this script):
                  - any citation on the clause is non-primary (mirror),
                    which is itself a known accuracy risk (Global Rule 4)
                  - the clause has ever carried a blocker- or
                    major-severity finding, fixed or not -- a clause
                    with that history is a clause that has been wrong
                    before
                  - citation count on the clause (more legal claims
                    packed into one clause is more that could be wrong)
  staleness     months_old / fatal_threshold for verified clauses (the
                same thresholds tools/validate_corpus.py already
                enforces); 0 for clauses with no checkedDate to be
                stale.
  finding_rate  total historical findings on the clause (any severity,
                any triage status), capped at 5, over 5.

Document rows reuse the same four factors, aggregated from the
document's own clauses (max staleness/finding_rate, any mirror
citation, any clause with a blocker/major history), plus the document's
own demand flag and whether it already has a verification/ note.

    python3 tools/build_review_queue.py                # write review/queue.jsonl
    python3 tools/build_review_queue.py --check         # exit 1 if the file on disk is stale
"""
import collections
import json
import os
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(__file__))
from clause_levels import load_verifier_state, clause_level, citations_are_all_primary  # noqa: E402

QUEUE_PATH = 'review/queue.jsonl'

# Mirrors app.js's WEDGE_CLUSTER_DOC_IDS (CA Wedge Plan Step 19) -- the
# one real, already-made demand signal. Kept as a literal list here
# rather than parsed out of app.js, same reasoning
# tools/generate_seo_pages.py's own WEDGE_CLUSTER_DOC_IDS gives for not
# scraping JS: a short, rarely-changing set is clearer copied once than
# parsed.
WEDGE_CLUSTER_DOC_IDS = {
    'llc_articles_of_organization',
    'ein_info_sheet',
    'llc_operating_agreement_single_member',
    'llc_default_operating_rules_info_sheet',
    'agent_for_service_of_process_info_sheet',
    'statement_of_information',
    'llc_annual_fee_info_sheet',
}


def months_old(checked_date):
    today = date.today()
    checked = date.fromisoformat(checked_date)
    months = (today.year - checked.year) * 12 + (today.month - checked.month)
    if today.day < checked.day:
        months -= 1
    return months


def load_corpus():
    docs = json.load(open('data/documents.json', encoding='utf-8'))
    clauses = json.load(open('data/clauses.json', encoding='utf-8'))['clauses']
    return docs, clauses


def load_findings_by_clause():
    by_clause = collections.defaultdict(list)
    try:
        with open('verifier/findings.jsonl', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                entry = json.loads(line)
                by_clause[entry['clauseId']].append(entry)
    except FileNotFoundError:
        pass
    return by_clause


def staleness_thresholds():
    cfg = json.load(open('config/staleness.json', encoding='utf-8'))
    return cfg['defaultFatalMonths'], cfg['categories']


def fatal_threshold_for(categories, default_fatal, category_cfg):
    if not categories:
        return default_fatal
    return min(category_cfg.get(c, {}).get('fatalMonths', default_fatal) for c in categories)


def clause_risk_factors(clause, findings_by_clause):
    citations = clause.get('citations') or []
    has_mirror = bool(citations) and not citations_are_all_primary(clause)
    findings = findings_by_clause.get(clause['id'], [])
    had_severe = any(f.get('severity') in ('blocker', 'major') for f in findings)
    finding_rate = min(len(findings), 5) / 5
    return has_mirror, had_severe, len(citations), finding_rate, len(findings)


def clause_priority(clause, doc_ids, has_mirror, had_severe, citation_count, finding_rate,
                     stale_fraction, wedge_doc_ids):
    demand = 1.0 if (set(doc_ids) & wedge_doc_ids) else 0.0
    legal_risk = (0.5 if has_mirror else 0.0) + (0.4 if had_severe else 0.0) + min(citation_count, 5) / 5 * 0.1
    return round(0.35 * demand + 0.35 * min(legal_risk, 1.0) + 0.2 * min(stale_fraction, 1.0)
                 + 0.1 * finding_rate, 4)


def build_rows():
    docs, clauses = load_corpus()
    clauses_by_id = {c['id']: c for c in clauses}
    findings_by_clause = load_findings_by_clause()
    checked_ids, unclean_ids = load_verifier_state()
    default_fatal, category_cfg = staleness_thresholds()

    doc_ids_by_clause = collections.defaultdict(list)
    categories_by_clause = collections.defaultdict(set)
    for d in docs:
        for cid in d.get('clauseOrder', []):
            doc_ids_by_clause[cid].append(d['id'])
            categories_by_clause[cid].update(d.get('categories', []))

    has_note = set()
    if os.path.isdir('verification'):
        has_note = {os.path.splitext(fn)[0].replace('-', '_') for fn in os.listdir('verification')}

    rows = []

    # ---- one row per clause ----
    for c in clauses:
        doc_ids = doc_ids_by_clause.get(c['id'], [])
        is_authority = c.get('kind') == 'authority'
        level = clause_level(c, checked_ids, unclean_ids) if is_authority else None

        stale_fraction = 0.0
        if c.get('checkedDate'):
            fatal = fatal_threshold_for(categories_by_clause.get(c['id']), default_fatal, category_cfg)
            try:
                stale_fraction = months_old(c['checkedDate']) / fatal if fatal else 0.0
            except ValueError:
                stale_fraction = 0.0

        has_mirror, had_severe, citation_count, finding_rate, finding_count = (
            clause_risk_factors(c, findings_by_clause) if is_authority else (False, False, 0, 0.0, 0)
        )

        rows.append({
            'type': 'clause',
            'id': c['id'],
            'kind': c.get('kind'),
            'documentIds': doc_ids,
            'verificationLevel': level,
            'hasNonPrimaryCitation': has_mirror,
            'citationCount': citation_count,
            'priorFindingCount': finding_count,
            'hadSevereFindingHistory': had_severe,
            'staleFraction': round(stale_fraction, 3),
            'reviewedUnderWS2': False,
            'priorityScore': clause_priority(
                c, doc_ids, has_mirror, had_severe, citation_count, finding_rate,
                stale_fraction, WEDGE_CLUSTER_DOC_IDS,
            ),
        })

    # ---- one row per document ----
    for d in docs:
        doc_clauses = [clauses_by_id[cid] for cid in d.get('clauseOrder', []) if cid in clauses_by_id]
        authority_clauses = [c for c in doc_clauses if c.get('kind') == 'authority']
        any_mirror = any(not citations_are_all_primary(c) for c in authority_clauses if c.get('citations'))
        any_severe = any(
            any(f.get('severity') in ('blocker', 'major') for f in findings_by_clause.get(c['id'], []))
            for c in authority_clauses
        )
        max_stale = 0.0
        for c in authority_clauses:
            if not c.get('checkedDate'):
                continue
            fatal = fatal_threshold_for(d.get('categories'), default_fatal, category_cfg)
            try:
                max_stale = max(max_stale, months_old(c['checkedDate']) / fatal if fatal else 0.0)
            except ValueError:
                pass
        total_findings = sum(len(findings_by_clause.get(c['id'], [])) for c in authority_clauses)
        finding_rate = min(total_findings, 5) / 5
        is_wedge = d['id'] in WEDGE_CLUSTER_DOC_IDS

        rows.append({
            'type': 'document',
            'id': d['id'],
            'categories': d.get('categories', []),
            'authorityClauseCount': len(authority_clauses),
            'draftingClauseCount': len(doc_clauses) - len(authority_clauses),
            'hasVerificationNote': d['id'] in has_note,
            'hasResearchFile': os.path.isfile(f'review/documents/{d["id"]}.md'),
            'isWedgeCluster': is_wedge,
            'reviewedUnderWS3': False,
            'priorityScore': clause_priority(
                None, [d['id']], any_mirror, any_severe, 0, finding_rate, max_stale, WEDGE_CLUSTER_DOC_IDS,
            ),
        })

    rows.sort(key=lambda r: (-r['priorityScore'], r['type'], r['id']))
    return rows


def main():
    check_only = '--check' in sys.argv
    rows = build_rows()
    rendered = '\n'.join(json.dumps(r, sort_keys=True) for r in rows) + '\n'

    if check_only:
        current = open(QUEUE_PATH, encoding='utf-8').read() if os.path.isfile(QUEUE_PATH) else None
        if current == rendered:
            print(f'{QUEUE_PATH} is up to date.')
            return
        print(f'{QUEUE_PATH} is stale -- run python3 tools/build_review_queue.py', file=sys.stderr)
        sys.exit(1)

    os.makedirs(os.path.dirname(QUEUE_PATH), exist_ok=True)
    with open(QUEUE_PATH, 'w', encoding='utf-8') as f:
        f.write(rendered)
    clause_rows = [r for r in rows if r['type'] == 'clause']
    doc_rows = [r for r in rows if r['type'] == 'document']
    print(f'Wrote {len(rows)} rows to {QUEUE_PATH} ({len(clause_rows)} clauses, {len(doc_rows)} documents).')


if __name__ == '__main__':
    main()
