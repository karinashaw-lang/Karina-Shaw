#!/usr/bin/env python3
"""Phase 2.2b: draft whyWeAsk text for every entry in the shared field
library (schema/fields/*.json) and write it in.

Scope note: the master plan says "for every field lacking whyWeAsk... not
per document, wherever possible." This pass covers the 172 ids in the
shared library — which, by construction (Phase 2.2), already covers 80%
of all field instances in the corpus, deduplicated to one definition per
id instead of one per document occurrence. The remaining ~650 field ids
outside the library (mostly used in a single document each) still lack
whyWeAsk; writing real, non-generic text for each of those individually
is real further work, deliberately out of scope for this pass and
recorded as such in DECISIONS.md rather than silently left looking done.

Every string below is plain, factual, and written to avoid the banned
advisory phrases in lint/advisory_phrases.json by construction (each one
says what the field is or represents, never what the person filling it
out should do) — the lint check in validate_corpus.py is what actually
enforces that, not this file's intent.

Dry run (default) — prints what would change, writes nothing:
    python3 tools/add_why_we_ask.py

Apply:
    python3 tools/add_why_we_ask.py --write
"""
import json
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FIELDS_DIR = os.path.join(REPO_ROOT, 'schema', 'fields')
KEY_ORDER = ['id', 'label', 'type', 'sensitive', 'whyWeAsk', 'helpText', 'validation']

WHY_WE_ASK = {
    # -- people.json --------------------------------------------------
    'additionalBeneficiaryName': "This field names another person who will receive something under this document, in addition to the main beneficiary already named.",
    'adversePartyName': "This field names the other party or opposing party in this matter, so the document is clear about who it involves.",
    'agentName': "This field names the person being given authority to act on someone else's behalf.",
    'alternateAgentName': "This field names a backup person who can act as agent if the first-choice agent is unable or unwilling to serve.",
    'applicantName': "This field names the person applying for whatever this document is requesting or establishing.",
    'artistName': "This field names the artist whose work this document describes or refers to.",
    'authorizedSignerName': "This field names the person authorized to sign on behalf of a company, trust, or other entity.",
    'beneficiaryName': "This field names the person who will receive property, money, or a benefit under this document.",
    'buyerName': "This field names the person buying the property or asset described in this document.",
    'buyerTenantName': "This field names the person who is both buying and currently renting the property described in this document.",
    'childName': "This field names the child this document concerns.",
    'claimantName': "This field names the person making the claim described in this document.",
    'contractorName': "This field names the independent contractor who is a party to this document.",
    'courtName': "This field names the court where this matter is or will be filed.",
    'decedentName': "This field names the person who has died, since this document concerns their estate or affairs.",
    'directorName': "This field names a director of the company or organization named in this document.",
    'employeeName': "This field names the employee who is a party to this document.",
    'employerName': "This field names the employer who is a party to this document.",
    'executorName': "This field names the person responsible for carrying out the terms of a will.",
    'generalPartnerName': "This field names the general partner responsible for managing the partnership described in this document.",
    'granteeName': "This field names the person receiving the property or rights described in this document.",
    'grantorName': "This field names the person giving or transferring the property or rights described in this document.",
    'homeownerName': "This field names the person who owns the home or property described in this document.",
    'incorporatorName': "This field names the person forming the corporation described in this document.",
    'issuingCourtName': "This field names the court that issued the order, judgment, or case this document refers to.",
    'jobseekerName': "This field names the person seeking employment under this document.",
    'landlordName': "This field names the landlord who is a party to this document.",
    'licenseeName': "This field names the person or company receiving the license described in this document.",
    'licensorName': "This field names the person or company granting the license described in this document.",
    'memberName': "This field names a member of the LLC or organization described in this document.",
    'officerName': "This field names an officer of the company described in this document.",
    'otherParentName': "This field names the child's other parent.",
    'ownerName': "This field names the owner of the property or asset described in this document.",
    'parent1Name': "This field names one of the child's parents.",
    'parent2Name': "This field names the other of the child's parents.",
    'parentGuardianName': "This field names the child's parent or legal guardian.",
    'parentName': "This field names the child's parent.",
    'partner1Name': "This field names one of the partners described in this document.",
    'partner2Name': "This field names the other partner described in this document.",
    'party1Name': "This field names one of the parties entering into this document.",
    'party2Name': "This field names the other party entering into this document.",
    'partyName': "This field names a party to this document.",
    'partyOneName': "This field names one of the parties entering into this document.",
    'partyTwoName': "This field names the other party entering into this document.",
    'patientName': "This field names the patient this document concerns.",
    'personName': "This field names the person this document concerns.",
    'personalRepresentativeName': "This field names the person responsible for managing the decedent's estate.",
    'petitionerName': "This field names the person filing the petition described in this document.",
    'planAdministratorName': "This field names the person or entity responsible for administering the plan described in this document.",
    'preparerName': "This field names the person who filled out or prepared this document.",
    'principalName': "This field names the person granting authority to an agent under this document.",
    'programAdministratorName': "This field names the person or entity responsible for administering the program described in this document.",
    'proposedGuardianName': "This field names the person being proposed to serve as the child's guardian.",
    'recipientName': "This field names the person receiving whatever this document provides.",
    'recordOwnerName': "This field names the person who is the owner of record for the property described in this document.",
    'requestingPartyName': "This field names the party making the request described in this document.",
    'respondentName': "This field names the person responding to the petition or claim described in this document.",
    'sellerLandlordName': "This field names the person who is both selling and currently the landlord of the property described in this document.",
    'sellerName': "This field names the person selling the property or asset described in this document.",
    'settlorName': "This field names the person who created the trust described in this document.",
    'shareholderName': "This field names a shareholder of the corporation described in this document.",
    'successorTrusteeName': "This field names the person who will take over as trustee if the current trustee can no longer serve.",
    'supervisorName': "This field names the employee's supervisor.",
    'survivingSpouseName': "This field names the spouse who survived the decedent.",
    'tenantName': "This field names the tenant who is a party to this document.",
    'testatorName': "This field names the person making the will described in this document.",
    'transferorName': "This field names the person transferring the property or rights described in this document.",
    'trusteeName': "This field names the person responsible for managing the trust described in this document.",
    'trustorName': "This field names the person who created the trust described in this document.",

    # -- entities.json --------------------------------------------------
    'businessName': "This is the legal name of the business this document concerns.",
    'companyName': "This is the legal name of the company this document concerns.",
    'entityName': "This is the legal name of the entity this document concerns.",
    'financialInstitutionName': "This is the name of the bank or financial institution this document refers to.",
    'hoaName': "This is the name of the homeowners association this document concerns.",
    'insurerName': "This is the name of the insurance company this document refers to.",
    'partnershipName': "This is the legal name of the partnership this document concerns.",
    'planName': "This is the name of the plan this document describes.",
    'publicEntityName': "This is the name of the government or public entity this document concerns.",
    'sellerAgentName': "This is the name of the real estate agent representing the seller.",
    'serviceProviderName': "This is the name of the business or person providing the service described in this document.",
    'trustName': "This is the name of the trust this document concerns.",

    # -- dates.json --------------------------------------------------
    'agreementDate': "This is the date the parties are entering into this agreement.",
    'childDOB': "This is the child's date of birth.",
    'closingDate': "This is the date the transaction described in this document is expected to close.",
    'dateOfDeath': "This is the date the decedent died.",
    'dateSigned': "This is the date this document is signed.",
    'demandDate': "This is the date the demand described in this document is being made.",
    'determinationDate': "This is the date a decision or determination described in this document was made.",
    'dissolutionDate': "This is the date the dissolution described in this document took effect or is expected to take effect.",
    'effectiveDate': "This is the date this document's terms begin to apply.",
    'endDate': "This is the date the period or arrangement described in this document ends.",
    'filingDate': "This is the date this document is being filed.",
    'firstUseDate': "This is the date the trademark or work described in this document was first used.",
    'incidentDate': "This is the date the incident described in this document occurred.",
    'leaseEndDate': "This is the date the lease described in this document ends.",
    'leaseStartDate': "This is the date the lease described in this document begins.",
    'marriageDate': "This is the date of the marriage this document concerns.",
    'moveOutDate': "This is the date the tenant is expected to move out.",
    'noticeDate': "This is the date this notice is being given.",
    'originalTrustDate': "This is the date the trust was originally created.",
    'qualifyingEventDate': "This is the date the qualifying event described in this document occurred.",
    'requestDate': "This is the date the request described in this document is being made.",
    'separationDate': "This is the date employment ended.",
    'serviceEndDate': "This is the date the period of service described in this document ends.",
    'serviceStartDate': "This is the date the period of service described in this document begins.",
    'signatureDate': "This is the date this document is signed.",
    'startDate': "This is the date the arrangement described in this document begins.",
    'terminationDate': "This is the date employment or the agreement described in this document ends.",

    # -- addresses.json --------------------------------------------------
    'agentAddress': "This is the address where the agent can be reached or served.",
    'employeeAddress': "This is the employee's address.",
    'party1PropertyAddress': "This is the address of the property belonging to the first party.",
    'party2PropertyAddress': "This is the address of the property belonging to the second party.",
    'planAdministratorAddress': "This is the address of the person or entity administering the plan described in this document.",
    'principalOfficeAddress': "This is the address of the entity's principal office.",
    'propertyAddress': "This is the address of the property this document concerns.",

    # -- locations.json --------------------------------------------------
    'county': "This is the California county this document applies to or where it will be filed.",
    'countyName': "This is the California county this document applies to.",
    'countyOfFiling': "This is the county where this document will be filed.",
    'issuingState': "This is the state that issued the document or license this document refers to.",
    'recordingCounty': "This is the county where this document will be recorded.",
    'settlorCounty': "This is the county where the person who created the trust lives.",
    'stateOfFormation': "This is the state where the entity described in this document was formed.",
    'testatorCounty': "This is the county where the person making the will lives.",

    # -- money.json --------------------------------------------------
    'applicableMinimumWage': "This is the minimum hourly wage that applies to this situation.",
    'estimatedEstateValue': "This is the approximate total value of the property in the estate.",
    'monthlyRent': "This is the monthly rent amount for the property described in this document.",
    'purchasePrice': "This is the price being paid for the property or asset described in this document.",
    'salary': "This is the salary amount described in this document.",
    'unpaidWagesAmount': "This is the amount of wages that have not been paid.",

    # -- text.json --------------------------------------------------
    'additionalIncidents': "This describes any other incidents relevant to this document, beyond the main one already described.",
    'additionalPurposeDescription': "This describes any additional purpose for this document, beyond what's already stated.",
    'affectedEmployeeCount': "This is the number of employees affected by what this document describes.",
    'allegedProtectedActivity': "This describes the protected activity the employee says they engaged in.",
    'authorizedShares': "This is the number of shares the corporation is authorized to issue.",
    'authorizedSignerTitle': "This is the title or position of the person authorized to sign on behalf of the company, trust, or other entity.",
    'businessActivityDescription': "This describes what the business does.",
    'categoriesCollected': "This describes the categories of information collected, as this document requires.",
    'cityOfExecution': "This is the city where this document is being signed.",
    'cityState': "This is the city and state where this document is being signed.",
    'commissionStructure': "This describes how commission is calculated under this document.",
    'contactMethod': "This describes how the parties will contact each other under this document.",
    'courtCaseNumber': "This is the case number assigned by the court.",
    'dissolutionReason': "This describes the reason for the dissolution described in this document.",
    'educationalInstitution': "This is the name of the school or educational institution this document refers to.",
    'employeeCount': "This is the number of employees this document refers to.",
    'entityType': "This is the type of legal entity this document concerns, such as an LLC or corporation.",
    'goodsServicesDescription': "This describes the goods or services this document covers.",
    'hoursPerWeek': "This is the number of hours per week this document refers to.",
    'incidentDescription': "This describes what happened in the incident this document concerns.",
    'incidentLocation': "This is the location where the incident described in this document occurred.",
    'issuingCaseNumber': "This is the case number of the order or judgment this document refers to.",
    'jobTitle': "This is the employee's job title.",
    'legalDescription': "This is the formal legal description of the property, as it appears in county records.",
    'officerTitle': "This is the title of the officer named in this document.",
    'ownershipPercentage': "This is the percentage of ownership this document refers to.",
    'parcelNumber': "This is the county assessor's parcel number for the property.",
    'patentDescription': "This describes the invention or patent this document concerns.",
    'policyNumber': "This is the policy number this document refers to.",
    'positionTitle': "This is the job title or position this document refers to.",
    'professionType': "This is the profession or occupation this document refers to.",
    'propertyDescription': "This describes the property this document concerns.",
    'relationshipToChild': "This describes how this person is related to the child.",
    'relationshipToDecedent': "This describes how this person is related to the person who died.",
    'restrictionPeriod': "This is the length of time the restriction described in this document lasts.",
    'signatureCity': "This is the city where this document is being signed.",
    'tradeSecretDescription': "This describes the trade secret this document concerns.",
    'trademarkDescription': "This describes the trademark this document concerns.",
    'transactionDescription': "This describes the transaction this document concerns.",
    'wageClaimBasis': "This describes the basis for the wage claim described in this document.",
    'websiteURL': "This is the web address this document refers to.",
    'workDescription': "This describes the work this document concerns.",
    'workTitle': "This is the title of the work this document concerns.",
}


def load_entries():
    entries_by_file = {}
    for filename in sorted(os.listdir(FIELDS_DIR)):
        if not filename.endswith('.json'):
            continue
        path = os.path.join(FIELDS_DIR, filename)
        with open(path, encoding='utf-8') as f:
            entries_by_file[filename] = json.load(f)
    return entries_by_file


def round_trip_is_noop(filename, entries):
    path = os.path.join(FIELDS_DIR, filename)
    with open(path, encoding='utf-8') as f:
        original = f.read()
    dumped = json.dumps(entries, indent=2, ensure_ascii=False) + '\n'
    return dumped == original


def main():
    write = '--write' in sys.argv
    entries_by_file = load_entries()

    all_ids = {e['id'] for entries in entries_by_file.values() for e in entries}
    missing_text = all_ids - set(WHY_WE_ASK)
    extra_text = set(WHY_WE_ASK) - all_ids
    if missing_text:
        raise SystemExit(f'ABORT: no whyWeAsk drafted for library ids: {sorted(missing_text)}')
    if extra_text:
        raise SystemExit(f'ABORT: WHY_WE_ASK has entries for ids not in the library: {sorted(extra_text)}')

    for filename, entries in entries_by_file.items():
        if not round_trip_is_noop(filename, entries):
            raise SystemExit(
                f'ABORT: {filename} does not round-trip byte-identically before any '
                f'change is made. Refusing to write.'
            )

    print(f'{len(all_ids)} library ids, all with drafted whyWeAsk text.')
    if not write:
        print('Dry run — pass --write to apply.')
        return

    for filename, entries in entries_by_file.items():
        for entry in entries:
            entry['whyWeAsk'] = WHY_WE_ASK[entry['id']]
        reordered = [{k: e[k] for k in KEY_ORDER if k in e} for e in entries]
        path = os.path.join(FIELDS_DIR, filename)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(reordered, f, indent=2, ensure_ascii=False)
            f.write('\n')
    print(f'Wrote whyWeAsk into {sum(len(v) for v in entries_by_file.values())} entries across {len(entries_by_file)} files.')


if __name__ == '__main__':
    main()
