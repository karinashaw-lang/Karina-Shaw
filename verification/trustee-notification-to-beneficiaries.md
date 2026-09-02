# Estate Planning, new document: Trustee's Notification to Beneficiaries — Information Sheet

## Why this document

The existing Revocable Living Trust and Trust Amendment documents
cover forming and amending a trust while the settlor is alive. This
document covers a genuinely distinct, later-stage topic: a real
statutory duty most people don't know exists — what a trustee must do
to notify beneficiaries and heirs after a trust becomes irrevocable.
Informational only, following the same non-dispositive pattern as the
Guardianship and Probate Petition documents.

## What this document covers

9 clauses: 2 drafting (declaration, signature block) and 7 authority
clauses:

- **`trustnotice_duty_and_triggers`** (Prob. Code § 16061.7(a)) — the
  three independent triggering events, correcting an assumption that
  only a settlor's death triggers the duty.
- **`trustnotice_who_must_be_served`** (Prob. Code § 16061.7(b), (c),
  (d)) — beneficiaries, heirs, and (for charitable trusts) the
  Attorney General; the heir-determination rule and the
  unknown/unlocatable-person exception.
- **`trustnotice_deadline_and_service`** (Prob. Code § 16061.7(e),
  (f)) — the 60-day deadline, confirmed exactly as assumed, plus its
  previously-unknown-person exception and trustee-vacancy tolling
  rule.
- **`trustnotice_required_contents`** (Prob. Code § 16061.7(g)) — the
  five required items, correcting an assumption that there were only
  four.
- **`trustnotice_confidentiality_on_request`** (Prob. Code
  § 16061.7(g)(5); § 16061) — trust terms are available on reasonable
  request, not automatically disclosed.
- **`trustnotice_warning_and_contest_period`** (Prob. Code
  § 16061.7(h); § 16061.8) — the mandatory boldface warning and the
  120-day contest limitations period, correcting a significant
  assumption about how early delivery of trust terms interacts with
  the deadline.
- **`trustnotice_no_waiver_optional_service`** (Prob. Code
  § 16061.7(i), (j)) — a settlor cannot waive this requirement.

## Genuine corrections caught during research

- The task brief assumed the notification duty is triggered by a
  settlor's death alone. Direct review of § 16061.7(a) shows three
  independent triggers — only one involves death at all; a change of
  trustee of an already-irrevocable trust, or the lapse of a retained
  power of appointment, each independently triggers the same duty.
- The task brief anticipated four required content items. Direct
  review of § 16061.7(g) shows five: beyond settlor identity/execution
  date, trustee name/address/phone, and the reasonable-request
  entitlement to a copy, the statute also requires the trust's
  principal-place-of-administration address and any additional
  information the trust instrument itself demands.
- The most consequential correction: the task brief assumed the
  120-day contest period can be "shortened to 60 days" if a copy of
  the trust's terms is delivered along with the notification. Direct
  review of § 16061.8 shows the statute takes the *later* of 120 days
  from service or 60 days from delivery during that window — so early
  delivery never cuts the period below 120 days; it can only extend it
  beyond 120 if delivery happens late in the window.
- Confirmed the confidentiality distinction: § 16061.7(g)(5) only
  requires notice that a copy is available on reasonable request —
  nothing obligates a trustee to proactively send the trust instrument
  with the notification itself.

## Honest gaps disclosed

- Whether § 16061.8's 120-day bar applies to a person never served the
  notification could not be confirmed with case law — the statute's
  own text limits the bar to "a person upon whom the notification...
  is served," suggesting it doesn't reach an unserved person, but
  CourtListener returned a rate-limit error on the one search
  attempted, and no case-law citation is offered on this point.
- § 16061.8's 120-day bar applies only to notifications served under
  the death-of-settlor trigger, not the change-of-trustee or
  power-of-appointment triggers — what limitations period (if any)
  applies to those is not addressed.
- § 16061.7(b)(1)'s cross-reference to § 15804 (virtual representation
  for notice purposes) is characterized but not deeply researched.

## Method

Fetched Prob. Code §§ 16061.7, 16061.8, 16061, and 15804 directly from
`leginfo.legislature.ca.gov`, each verified against a second,
independent fetch with a distinct User-Agent — confirmed byte-identical
apart from per-request ViewState tokens. All 13 citation quotes
programmatically re-verified against the fetched text, catching and
fixing two curly-quote/apostrophe mismatches before finalizing.

## Verification

- All citations fetched twice independently with distinct User-Agents;
  confirmed clean on integration.
- Checked for `{{` leakage in every clause's `title`/`gap` and every
  citation's `case`/`cite`/`quote`/`url` field — clean, no fix needed.
- Checked source-independence disclosure logic across all 7 authority
  clauses — the three same-section clauses
  (`trustnotice_who_must_be_served`, `trustnotice_deadline_and_service`,
  `trustnotice_no_waiver_optional_service`) each carry an explicit "no
  single subdivision is cited more than once" disclosure sentence —
  correct as delivered.
- Checked for duplicate clause IDs and titles against the full corpus
  (none).
- Field names (`trusteeName`, `trustName`, `decedentName`,
  `dateOfDeath`, `originalTrustDate`, `beneficiaryName`, `dateSigned`,
  `cityState`) confirmed to match the existing Revocable Living Trust,
  Trust Amendment, and Petition for Probate documents' conventions
  exactly. New field: `trusteeAddress`.
- Corpus-wide validation (placeholder resolution against document
  `fields`, dup ids/titles, `{{}}` leaks) run across the full updated
  corpus — clean.

## Net changes

- New document: Trustee's Notification to Beneficiaries — Information
  Sheet (`trustee_notification_to_beneficiaries`), 9 clauses (7
  authority + 2 drafting), in the Estate Planning category. New
  field: `trusteeAddress`.
- Corpus: 911 → 920 clauses; 120 → 121 documents.
