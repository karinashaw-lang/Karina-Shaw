#!/usr/bin/env python3
"""Phase 3.1, redefined by CA Wedge Plan Step 2.3: computes each
document's quality tier from objective signals that already exist —
never assigned by hand, and never assumed true for a signal that has no
real implementation yet.

Tier B requires all of:
  - field schema complete: every field has a `type` (all 3,975 already
    do, Phase 2.1) AND a resolvable `whyWeAsk` — either set directly on
    the field, or via `sharedFieldId` into schema/fields/*.json (Phase
    2.2/2.2b). A document with any field outside the 172-id shared
    library and no whyWeAsk of its own fails this today.
  - every authority clause it uses is at least at the `verified` level —
    `tools/clause_levels.py`'s honest meaning: `status: "verified"` AND
    every citation's `sourceClass` is primary-official/court-opinion/
    agency, never `mirror` or `secondary` (Global Rule 4: "A mirror is
    not primary") — and within the same per-category fatal staleness
    threshold (Phase 4.3, config/staleness.json) validate_corpus.py
    already enforces corpus-wide (mirrored here, not re-derived
    differently). This is stricter than the pre-Wedge-Plan check, which
    only read the old single-value `status` field and had no way to
    tell a mirror-sourced "verified" clause from a leginfo-sourced one.
  - at least one golden fixture exists (tests/golden/fixtures/<id>.json).

Tier A requires everything Tier B does, plus three more things CA Wedge
Plan Step 2.3 adds:

  - at least one authority clause. A document built entirely from
    drafting clauses has no legal-authority claim to adversarially check
    or verify in the first place, so it can never be Tier A under the
    new definition — see has_authority_clause() and
    drafting_only_label() below. (Every one of this corpus's 9
    pre-Wedge-Plan Tier A documents was exactly this case; none of them
    stay Tier A under the redefinition.)
  - every authority clause the document uses is at the
    `adversarially_checked` level — `tools/clause_levels.py` again: the
    clause has actually been checked (appears in verifier/checked.jsonl,
    the Phase 12 Step 3/7 checkpoints — not just "status: verified",
    which is a drafting-time self-assessment the adversarial pass exists
    to stress-test) AND carries no finding of ANY severity whose triage
    disposition isn't "fixed". This is stricter than the pre-Wedge-Plan
    gate, which only blocked on an open blocker/major — Step 2's own
    wording ("adversarially checked ... with no open findings") carries
    no severity qualifier, so a single open minor finding now blocks
    Tier A too, same as an open blocker would. A clause the checkpoint
    hasn't reached at all blocks Tier A the same way an unchecked clause
    always has — "not yet known to be clean" is not "clean."
  - accessibility check: the document's rendered output screen passed
    tools/accessibility_scan.js (accessibility.json) — a real, per-
    document, both-themes axe-core scan, not the 50-document sample
    tests/accessibility/axe_check.js runs as a CI regression gate.

An absent signal (a clause the checkpoint hasn't reached yet, or a
document accessibility.json has no entry for) is treated as "not met,"
never "assumed met" — see the two `_EXISTS` constants below, and
DECISIONS.md's Phase 12 Step 6 entry for why Tier A can come out
honestly empty, or near-empty, given how little of the corpus the
checkpoint has reached, rather than a sign something is broken.

Tier C is everything else that passes validate_corpus.py (true for the
whole corpus by the time this runs, since CI runs that gate first).

A document with zero authority clauses also carries
`"draftingOnly": true` and the label "Drafting only (no legal authority
claimed)" regardless of which tier (B or C) it lands in on the other
gates — Step 2.3's label, not a tier of its own.

Writes tiers.json: {generated_at, documents: {id: {tier, draftingOnly,
blockingB, blockingA}}, summary: {category: {A,B,C,total}, ALL: {...}}}.

    python3 tools/tiering.py            # recompute, write tiers.json, print summary
    python3 tools/tiering.py --check    # recompute in memory, exit 1 if tiers.json
                                         # on disk doesn't match (CI staleness gate)
"""
import glob
import collections
import json
import os
import sys
from datetime import date

from clause_levels import load_verifier_state, clause_level

# Phase 4.1 (adversarial verifier) and Phase 9.1 (accessibility checks)
# now both exist and produce real per-document results (Phase 12 Steps
# 3-4 and 6); see adversarial_verifier_clean() and
# accessibility_check_passed() for what each actually checks.
ADVERSARIAL_VERIFIER_EXISTS = True
ACCESSIBILITY_CHECK_EXISTS = True

ACCESSIBILITY_PATH = 'accessibility.json'


def entry_id(entry):
    return entry if isinstance(entry, str) else entry.get('id')


def months_old(checked_date):
    today = date.today()
    checked = date.fromisoformat(checked_date)
    months = (today.year - checked.year) * 12 + (today.month - checked.month)
    if today.day < checked.day:
        months -= 1
    return months


def load_shared_fields():
    shared = {}
    for path in sorted(glob.glob('schema/fields/*.json')):
        for entry in json.load(open(path)):
            shared[entry['id']] = entry
    return shared


def field_has_why_we_ask(field, shared_fields):
    if field.get('whyWeAsk'):
        return True
    shared_id = field.get('sharedFieldId')
    return bool(shared_id and shared_fields.get(shared_id, {}).get('whyWeAsk'))


def field_schema_complete(doc, shared_fields):
    fields = doc.get('fields', [])
    if not fields:
        return True  # an empty schema has nothing incomplete about it
    return all(f.get('type') and field_has_why_we_ask(f, shared_fields) for f in fields)


def fatal_threshold_for(clause_id, clause_categories, default_fatal, category_thresholds):
    cats = clause_categories.get(clause_id)
    if not cats:
        return default_fatal
    return min(category_thresholds.get(c, {}).get('fatalMonths', default_fatal) for c in cats)


def authority_clauses_of(doc, clauses_by_id):
    out = []
    for entry in doc['clauseOrder']:
        clause = clauses_by_id.get(entry_id(entry))
        if clause is None:
            continue  # a dangling reference is validate_corpus.py's gate, not ours to re-check
        if clause['kind'] == 'authority':
            out.append(clause)
    return out


def has_authority_clause(doc, clauses_by_id):
    return bool(authority_clauses_of(doc, clauses_by_id))


def clauses_verified_and_fresh(doc, clauses_by_id, clause_categories, default_fatal, category_thresholds,
                                checked_ids, unclean_ids):
    for clause in authority_clauses_of(doc, clauses_by_id):
        if clause_level(clause, checked_ids, unclean_ids) not in ('verified', 'adversarially_checked'):
            return False
        fatal = fatal_threshold_for(clause['id'], clause_categories, default_fatal, category_thresholds)
        try:
            if months_old((clause.get('checkedDate') or '').strip()) >= fatal:
                return False
        except ValueError:
            return False
    return True


def has_golden_fixture(doc_id):
    return os.path.exists(os.path.join('tests', 'golden', 'fixtures', f'{doc_id}.json'))


def adversarial_verifier_clean(doc, clauses_by_id, checked_ids, unclean_ids):
    for clause in authority_clauses_of(doc, clauses_by_id):
        if clause_level(clause, checked_ids, unclean_ids) != 'adversarially_checked':
            return False
    return True


def load_accessibility_results():
    try:
        with open(ACCESSIBILITY_PATH, encoding='utf-8') as f:
            return json.load(f).get('documents', {})
    except FileNotFoundError:
        return {}


def accessibility_check_passed(doc_id, accessibility_results):
    result = accessibility_results.get(doc_id)
    return bool(result) and result.get('passed') is True


DRAFTING_ONLY_LABEL = 'Drafting only (no legal authority claimed)'


def compute_tier(doc, clauses_by_id, shared_fields, clause_categories, default_fatal, category_thresholds,
                  checked_ids, unclean_ids, accessibility_results):
    drafting_only = not has_authority_clause(doc, clauses_by_id)

    blocking_b = []
    if not field_schema_complete(doc, shared_fields):
        blocking_b.append('incomplete field schema (a field is missing type or whyWeAsk)')
    if not clauses_verified_and_fresh(doc, clauses_by_id, clause_categories, default_fatal, category_thresholds,
                                       checked_ids, unclean_ids):
        blocking_b.append('not every authority clause is verified (primary-sourced, not a mirror) '
                           'and within the staleness window')
    if not has_golden_fixture(doc['id']):
        blocking_b.append('no golden fixture')

    blocking_a = list(blocking_b)
    if drafting_only:
        blocking_a.append('no authority clause at all -- "' + DRAFTING_ONLY_LABEL + '" can never be Tier A')
    elif not adversarial_verifier_clean(doc, clauses_by_id, checked_ids, unclean_ids):
        blocking_a.append('not every authority clause is adversarially checked '
                           '(unchecked, or a finding of any severity not yet fixed)')
    if not accessibility_check_passed(doc['id'], accessibility_results):
        blocking_a.append('no passed per-document accessibility check on record (accessibility.json)')

    if not blocking_a:
        tier = 'A'
    elif not blocking_b:
        tier = 'B'
    else:
        tier = 'C'
    return tier, drafting_only, blocking_b, blocking_a


def compute_tiers():
    docs = json.load(open('data/documents.json'))
    clauses_by_id = {c['id']: c for c in json.load(open('data/clauses.json'))['clauses']}
    shared_fields = load_shared_fields()
    checked_ids, unclean_ids = load_verifier_state() if ADVERSARIAL_VERIFIER_EXISTS else (set(), set())
    accessibility_results = load_accessibility_results() if ACCESSIBILITY_CHECK_EXISTS else {}

    staleness_config = json.load(open('config/staleness.json'))
    default_fatal = staleness_config['defaultFatalMonths']
    category_thresholds = staleness_config['categories']
    clause_categories = collections.defaultdict(set)
    for d in docs:
        for r in d['clauseOrder']:
            clause_categories[entry_id(r)].update(d.get('categories', []))

    documents = {}
    summary = {}
    for doc in docs:
        tier, drafting_only, blocking_b, blocking_a = compute_tier(
            doc, clauses_by_id, shared_fields, clause_categories, default_fatal, category_thresholds,
            checked_ids, unclean_ids, accessibility_results)
        documents[doc['id']] = {
            'tier': tier,
            'draftingOnly': drafting_only,
            'blockingB': blocking_b,
            'blockingA': blocking_a,
        }
        for cat in doc.get('categories', []):
            bucket = summary.setdefault(cat, {'A': 0, 'B': 0, 'C': 0, 'total': 0, 'draftingOnly': 0})
            bucket[tier] += 1
            bucket['total'] += 1
            bucket['draftingOnly'] += drafting_only
        allb = summary.setdefault('ALL', {'A': 0, 'B': 0, 'C': 0, 'total': 0, 'draftingOnly': 0})
        allb[tier] += 1
        allb['total'] += 1
        allb['draftingOnly'] += drafting_only

    return {
        'generated_at': date.today().isoformat(),
        'documents': dict(sorted(documents.items())),
        'summary': dict(sorted(summary.items())),
    }


def print_summary(result):
    print(f"Tiers computed {result['generated_at']}")
    print(f"{'Category':<24} {'A':>5} {'B':>5} {'C':>5} {'Total':>7} {'DraftOnly':>10}")
    for cat, counts in result['summary'].items():
        if cat == 'ALL':
            continue
        print(f"{cat:<24} {counts['A']:>5} {counts['B']:>5} {counts['C']:>5} {counts['total']:>7} {counts['draftingOnly']:>10}")
    allb = result['summary']['ALL']
    print(f"{'ALL':<24} {allb['A']:>5} {allb['B']:>5} {allb['C']:>5} {allb['total']:>7} {allb['draftingOnly']:>10}")


def main():
    check = '--check' in sys.argv
    result = compute_tiers()

    if check:
        if not os.path.exists('tiers.json'):
            print('tiers.json does not exist — run `python3 tools/tiering.py` and commit it.', file=sys.stderr)
            return 1
        on_disk = json.load(open('tiers.json'))
        # generated_at legitimately differs on every real re-run without the
        # underlying data having changed, so it's excluded from the staleness
        # comparison — only documents/summary have to match exactly.
        fresh = {'documents': result['documents'], 'summary': result['summary']}
        stale = {'documents': on_disk.get('documents'), 'summary': on_disk.get('summary')}
        if fresh != stale:
            print('tiers.json is stale — the corpus has changed since it was last generated.', file=sys.stderr)
            print('Run `python3 tools/tiering.py` and commit the result.', file=sys.stderr)
            return 1
        print('tiers.json is up to date.')
        return 0

    with open('tiers.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        f.write('\n')
    print_summary(result)
    return 0


if __name__ == '__main__':
    sys.exit(main())
