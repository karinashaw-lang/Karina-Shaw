# CA Wedge Plan Step 7 — 30-Day Money-Back Guarantee: Proposed Copy

Status: **PROPOSED — WAITING FOR OWNER APPROVAL.** The pricing model
(subscription, unlimited documents) was already decided by the owner on
2026-11-10 (`PRICING_OPTIONS.md`). What remains for this step is the
30-day money-back guarantee the plan calls for, plus the California
Automatic Renewal Law (ARL, Bus. & Prof. Code §§ 17600 et seq.)
disclosures that a subscription-with-auto-renewal legally requires
regardless of the guarantee. Monthly/annual price points are **not** part
of this proposal and remain the owner's own call — nothing here guesses
a number from memory of competitors.

## 1. The guarantee itself

**Proposed policy:** Full refund within 30 days of the first charge on a
subscription, no reason required, self-service (no "retention" flow, no
required phone call). One refund per customer per 12-month period, to
deter buy-export-refund-repeat abuse of the "unlimited documents" model —
disclosed up front, not a hidden gotcha.

**Proposed public-facing copy** (for the pricing page and a `/refund-policy`
or `terms.html` section):

> **Try it risk-free for 30 days.** If Groundtruth isn't right for you,
> request a full refund within 30 days of your first charge — no reason
> needed, no retention call, just a form. One refund per customer per
> 12-month period. After that window, you can cancel anytime; you won't
> be charged again, and you keep access through the end of the period you
> already paid for.

This is intentionally plain, not a legal-style clause — Global Rule 1
("inform, never advise") plus the general "no advisory tone" house style
applies to every public page, not just the document corpus itself.

## 2. Why 30 days / unconditional, not a narrower "defect only" refund

Per Global Rule 15 (ambiguity → pick the most conservative option): a
plain, unconditional 30-day window is the most conservative choice
available between "refund only if something was broken" (harder on the
customer, more likely to generate disputes about what counts as
"broken") and an open-ended refund (undermines the subscription model's
own economics without owner sign-off on that tradeoff). 30 days matches
the plan's own instruction, so that part isn't an open question —
"unconditional, no reason required, self-service" is the proposed detail
within it.

## 3. California Automatic Renewal Law (ARL) — mandatory, not optional

`config/pricing.json` already flags this ("Triggers California's
Automatic Renewal Law in full... mandatory for this model, built in Step
C.7, not optional"). The refund guarantee does not substitute for ARL
compliance — a subscription-with-auto-renewal must independently satisfy
all of the following, whatever the refund window is:

1. **Clear and conspicuous pre-purchase disclosure**, in immediate
   proximity to the request for consent, stating: the subscription will
   continue until cancelled; the recurring charge amount and frequency;
   the length of the term; cancellation instructions; and **the refund
   policy itself** (this guarantee).
2. **Affirmative consent** — a checkbox or equivalent the customer
   actively ticks, not a pre-checked box or a buried "by continuing you
   agree" line.
3. **Acknowledgment email** sent immediately after purchase, restating
   the offer terms, the cancellation instructions, and the refund policy
   — in a form the customer can keep (not just a transactional receipt
   that omits terms).
4. **Easy cancellation** — "at least as easy" a path to cancel as it was
   to sign up. For an online signup, this means online self-service
   cancellation is required, not "call us" or "email support."
5. A **renewal notice** before the first automatic renewal following any
   free trial or promotional period, if one exists (none is proposed at
   launch under this subscription-only model, but the requirement is
   worth stating here so it isn't forgotten if that changes later).

**Proposed acknowledgment-email copy** (sent immediately on signup):

> Subject: Your Groundtruth subscription is active
>
> You're subscribed to Groundtruth's unlimited-documents plan at
> {{monthlyOrAnnualPrice}} per {{billingPeriod}}, billed automatically
> until you cancel. Your subscription will renew on {{nextBillingDate}}
> unless you cancel before then.
>
> **30-day guarantee:** if this isn't right for you, request a full
> refund within 30 days of today at {{refundRequestUrl}} — no reason
> needed.
>
> **Cancel anytime:** manage or cancel your subscription at
> {{accountSettingsUrl}}. Cancelling stops future charges; you keep
> access through the end of the period you already paid for.

`{{monthlyOrAnnualPrice}}`, `{{billingPeriod}}`, and `{{nextBillingDate}}`
are template fields — this document proposes the copy, not a specific
price, consistent with `config/pricing.json`'s own "no price picked from
memory" rule.

## 4. What this step does NOT decide

- **Price.** `monthlyPriceUsd` / `annualPriceUsd` stay `null` in
  `config/pricing.json`. That's a separate owner decision this proposal
  doesn't make or imply a number for.
- **Implementation.** The actual checkbox, acknowledgment-email sending,
  and self-service cancellation flow are Step 8/9 work (entitlements,
  Stripe) — this step only proposes the copy and the policy parameters
  (30 days, unconditional, one-per-customer-per-year) those steps will
  build against.

## 5. On approval

If approved (as written or amended), `config/pricing.json`'s
`refundPolicy` will be set to `{"windowDays": 30, "summary": "<final
approved copy>"}`, and this guarantee's terms will be referenced in
Step 20's legal-page drafts (terms of service) and Step 9's Stripe
checkout copy. Nothing is wired into the actual checkout flow until
Step 8/9.
