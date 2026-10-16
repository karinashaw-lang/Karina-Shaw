#!/usr/bin/env python3
"""Phase 2.1: migrate every document's fields[] from the old flat
{id, label, placeholder, required} shape to schema/field.schema.json's
richer one — adding `type` (inferred) and `example` (derived from
`placeholder`), leaving `placeholder` itself untouched.

Usage:
    python3 tools/migrate_fields.py           # dry run, prints the report only
    python3 tools/migrate_fields.py --write   # writes data/documents.json

Confirmed safe to round-trip documents.json through json.load/json.dump
with indent=2, ensure_ascii=False — a zero-diff test against the
unmodified file is checked at the top of main() every run, not just
once, so a change to Python's json module or the file's own formatting
can't silently reintroduce the full-file-reformat bug an earlier,
by-hand fix in this same project hit once already.

Type inference is camelCase-word-based, not a lookup table: the id is
split into lowercase words (`tokenize`), and rules match against either
the full word set or specifically the *last* word (the head noun in a
"modifiers + noun" id like `monthlyRent` or `employeeName` — using the
last word rather than "any word" avoids real false positives this
corpus actually has, e.g. `payPeriodType` containing "pay" as a
*modifier*, not a payment amount). `--report` mode (the default) prints
every (id -> type) assignment grouped by type, specifically so a human
can scan for misclassifications before trusting the output — this was
written by generating output, reading it, and fixing what looked wrong,
not by getting the rules right on paper first.
"""
import json
import re
import sys
import collections

DOCS_PATH = 'data/documents.json'


def tokenize(field_id):
    """Split camelCase into lowercase words, keeping an all-caps run
    (an acronym like DOB, SSN, HOA) as one token rather than splitting
    it letter by letter."""
    words = re.findall(r'[A-Z]+(?=[A-Z][a-z]|\b|$)|[A-Z]?[a-z0-9]+', field_id)
    return [w.lower() for w in words if w]


# ---------- example derivation (ported from tests/golden/golden.js,
# which validated this exact logic against the real corpus — see
# GOLDEN_REVIEW.md. Keeping both in sync matters; after this migration
# lands, golden.js is updated to prefer the now-real `example` field
# over recomputing it, with this logic kept only as its fallback for
# any field a future document adds without running this migration.) ----------

INSTRUCTION_FIELD_OVERRIDES = {
    'incidentDescription': 'On March 3, 2026, the respondent appeared outside the petitioner’s home and yelled threats for several minutes before leaving.',
    'additionalIncidents': 'On March 10, 2026, the respondent sent several threatening text messages to the petitioner.',
    'supportingFacts': 'Employees were required to work through rest breaks without additional pay, and timekeeping records show no 10-minute break recorded on multiple shifts.',
    'legalTheories': 'Failure to provide rest breaks under Labor Code section 226.7, and failure to pay all wages owed under section 204.',
    'allegedAdverseAction': 'The employee was demoted and had their hours reduced within two weeks of filing a workers’ compensation claim.',
    'allegedIntolerableConditions': 'A manager repeatedly cut the employee’s hours and shifted them to overnight shifts after the employee raised a safety complaint.',
    'habitabilityDefectDescription': 'A persistent roof leak in the main bedroom that has caused visible mold growth.',
    'inspectionPurpose': 'To review financial records relevant to a potential breach of fiduciary duty by a director.',
    'donationType': 'Anonymous sperm donation through a licensed sperm bank.',
    'workDescription': 'A bronze sculpture titled ‘Pacific Light,’ installed in the plaza in 2015.',
}

EG_PREFIX_RE = re.compile(r'^e\.g\.?,?\s*', re.IGNORECASE)


def derive_example(field):
    if field['id'] in INSTRUCTION_FIELD_OVERRIDES:
        return INSTRUCTION_FIELD_OVERRIDES[field['id']]
    placeholder = (field.get('placeholder') or '').strip()
    if not placeholder:
        return 'Sample Value'
    return EG_PREFIX_RE.sub('', placeholder)


# ---------- type inference ----------

DATE_WORDS = {'date', 'dob', 'deadline'}
EMAIL_WORDS = {'email'}
PHONE_WORDS = {'phone'}
COUNTY_WORDS = {'county'}
PERCENT_WORDS = {'percent', 'percentage'}
ADDRESS_WORDS = {'address'}
SENSITIVE_WORDS = {'ssn', 'itin', 'taxpayerid'}

STATE_IDS = {
    'stateOfFormation', 'issuingState', 'domiciliaryState', 'otherState',
    'childCurrentState', 'homeState',
}

# Last-word (head-noun) trigger for money — deliberately last-word-only,
# not "any word", so a modifier like "pay" in payPeriodType (a category,
# not an amount) doesn't false-positive. Confirmed against every field
# id in the corpus containing these words before finalizing this list.
MONEY_LAST_WORDS = {
    'amount', 'fee', 'price', 'deposit', 'rent', 'salary', 'wage', 'wages',
    'premium', 'balance', 'cost', 'cap', 'threshold', 'contribution',
    'contributions', 'royalty', 'royalties', 'assessment', 'payment',
    'payments', 'overpayment', 'pay', 'draw', 'payout', 'value',
    'deduction', 'deductions', 'owed', 'delinquent',
}

INTEGER_LAST_WORDS = {'count', 'months', 'age'}
INTEGER_EXACT_IDS = {
    'maxShareholders', 'votesInFavor', 'votesOpposed', 'hoursPerWeek',
    'reportingYear', 'holdersOfRecordCount', 'affectedEmployeeCount',
    'employeeCount', 'yearsOfCreditableService',
}

LONGTEXT_LAST_WORDS = {
    'description', 'statement', 'theories', 'facts', 'purpose',
    'conditions', 'notes', 'wishes', 'terms', 'instructions', 'basis',
    'process', 'history', 'action', 'circumstance', 'circumstances',
    'activity', 'activities',
}

# *Name fields default to person-name (the common case, and the app's
# own existing conventions elsewhere — e.g. Relationships in app.js —
# already treat every *Name field uniformly with no person/entity
# distinction, so this default costs nothing new). This set overrides
# to entity-name only where the id makes an organization the sole
# sensible reading — built by reviewing all 822 field ids, not guessed.
ENTITY_NAME_IDS = {
    'companyName', 'businessName', 'secondBusinessName', 'secondCompanyName',
    'clientCompanyName', 'entityName', 'llcName', 'trustName',
    'secondTrustName', 'charityBeneficiaryName', 'partnershipName',
    'hoaName', 'associationName', 'parkName', 'financialInstitutionName',
    'insurerName', 'mortgageServicerName', 'titleCompanyName',
    'employmentAgencyName', 'licensingBoardName', 'registrantName',
    'employerOrProgramName', 'serviceProviderName', 'competitorName',
    'manufacturerName', 'incumbentEmployerName', 'newEmployerName',
    'convertedEntityName', 'survivingCorporationName', 'planName',
    'equityPlanName', 'projectName', 'buyerAgentName', 'sellerAgentName',
    'responsibleBrokerName', 'homeInspectorName', 'foreclosureConsultantName',
    'respondingAgencyName', 'agencyName', 'appointingAgency', 'fundingAgency',
    'publicEntityName', 'localAgencyName',
}


def infer_type(field):
    fid = field['id']
    words = tokenize(fid)
    wordset = set(words)
    last = words[-1] if words else ''

    if fid in STATE_IDS:
        return 'state'
    if wordset & EMAIL_WORDS:
        return 'email'
    if wordset & PHONE_WORDS:
        return 'phone'
    if wordset & DATE_WORDS:
        return 'date'
    if wordset & COUNTY_WORDS:
        return 'county'
    if wordset & ADDRESS_WORDS:
        return 'address'
    if last == 'rate':
        # The one genuinely ambiguous head noun in the corpus: a wage-
        # adjacent rate is money (dailyWageRate), an interest/discount
        # rate is a percent (interestRate, discountRate).
        return 'money' if (wordset & {'wage', 'piece', 'hourly', 'daily'}) else 'percent'
    if wordset & PERCENT_WORDS:
        return 'percent'
    if last in MONEY_LAST_WORDS:
        return 'money'
    if fid in INTEGER_EXACT_IDS or last in INTEGER_LAST_WORDS:
        return 'integer'
    if last == 'name':
        return 'entity-name' if fid in ENTITY_NAME_IDS else 'person-name'
    if last in LONGTEXT_LAST_WORDS:
        return 'longtext'
    return 'text'


def is_sensitive(field):
    return bool(set(tokenize(field['id'])) & SENSITIVE_WORDS)


def migrate_field(field):
    new_field = {
        'id': field['id'],
        'label': field['label'],
        'type': infer_type(field),
        'required': field['required'],
    }
    if field.get('placeholder'):
        new_field['placeholder'] = field['placeholder']
    new_field['example'] = derive_example(field)
    if is_sensitive(field):
        new_field['sensitive'] = True
    return new_field


def main():
    write = '--write' in sys.argv

    # Re-confirm, every run, that a bare load/dump round trip is a
    # perfect no-op before trusting it to carry real changes — see the
    # module docstring for why this isn't just a one-time check.
    original = open(DOCS_PATH, encoding='utf-8').read()
    roundtrip = json.dumps(json.loads(original), indent=2, ensure_ascii=False) + '\n'
    if roundtrip != original:
        print('ABORT: json.load/dump round trip is not a byte-exact no-op on '
              f'{DOCS_PATH} — something about the file or this Python version\'s '
              'json module changed. Fix that before trusting this script to '
              'rewrite the file.', file=sys.stderr)
        return 1

    docs = json.loads(original)
    type_counts = collections.Counter()
    type_examples = collections.defaultdict(list)
    sensitive_ids = []

    for doc in docs:
        new_fields = []
        for field in doc.get('fields', []):
            migrated = migrate_field(field)
            new_fields.append(migrated)
            type_counts[migrated['type']] += 1
            type_examples[migrated['type']].append(migrated['id'])
            if migrated.get('sensitive'):
                sensitive_ids.append((doc['id'], migrated['id']))
        doc['fields'] = new_fields

    print(f'{sum(type_counts.values())} fields migrated across {len(docs)} documents\n')
    print('Type assignment counts:')
    for t, n in type_counts.most_common():
        print(f'  {t:14s} {n:4d}')
    print()
    print('Sample ids per type (up to 8 each, for a sanity scan):')
    for t in sorted(type_examples):
        ids = sorted(set(type_examples[t]))
        print(f'  {t}: {", ".join(ids[:8])}{" ..." if len(ids) > 8 else ""}')
    print()
    print(f'Marked sensitive ({len(sensitive_ids)}): {sensitive_ids}')

    if write:
        with open(DOCS_PATH, 'w', encoding='utf-8') as f:
            json.dump(docs, f, indent=2, ensure_ascii=False)
            f.write('\n')
        print(f'\nWrote {DOCS_PATH}')
    else:
        print('\nDry run only (no --write) — data/documents.json not modified.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
