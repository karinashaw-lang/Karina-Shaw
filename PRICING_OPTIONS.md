# Pricing options for the paid launch

## Owner decision (2026-11-10)

**The owner chose Option B — subscription, unlimited documents —
overriding this document's recommendation of per-document purchase.**
The comparison and reasoning below stand as the record of what was
weighed, but Steps B onward now build the subscription model, not
per-document purchase. The practical differences this decision makes,
carried into `config/pricing.json` and the steps that follow:

- `config/pricing.json`'s `model` is `"subscription"`; `perDocument` is
  left in the file but `active: false`, in case a one-time option is
  ever added alongside the subscription later.
- Step B's entitlement rows are `type='subscription'`, `document_id`
  null, `ends_at` tracking the current billing period — not one row
  per document.
- Step B.5 (edit-after-purchase policy: how many re-exports a purchase
  includes) does not apply the same way under a subscription — access
  is continuous for as long as the subscription is active, so there is
  no re-export count to cap. The 3-re-exports/30-day default proposed
  below is dropped; what still needs an owner decision is the
  **grace period after a canceled or failed-payment subscription**
  before entitlement actually ends (see Step B/C work).
- Step C.7's California Automatic Renewal Law compliance (clear and
  conspicuous renewal terms, affirmative consent, an acknowledgment
  email, and a cancellation path as easy as sign-up) is now mandatory
  for every subscriber, not a conditional "if any subscription is
  offered" — this is the whole product now, not an add-on tier.
- A customer portal for subscription management (Step C.4) and full
  dunning handling for failed renewals are needed from the start, not
  deferred.

---

Written for the MVP amendment ("the MVP is not free; it launches with
payments"), Step A. This is a proposal, not a decision — no price has
been picked, and `config/pricing.json` ships with every price point as
a `null` placeholder for the owner to fill in. Nothing in this document
or in the config file enables any payment code; that's Steps B and C,
which wait on the decision this document asks for.

## What stays free under every option

Per the amendment's Global Rule 4, this is fixed and does not vary by
pricing model: browsing the picker, plain-language search, the guided
intake, filling out the full interview, and the live on-screen document
preview — with every sourcing badge, quote, checked-date, and
verification/tier indicator visible. A user can read their entire
finished document, see exactly what it's based on, and decide whether
to pay, before any payment prompt appears (this becomes Step D.1's
paywall-placement rule).

One honest caveat worth recording here rather than discovering later:
since the full text is visible on screen before payment, a determined
user can select-all and copy it out manually regardless of which model
is chosen. This is normal for "view free, export paid" products and
isn't something to engineer against — the paid actions below are about
structured export, an audit trail, e-signature, and continuity, not
about being the only way to ever see the words. Worth a sentence in the
"what you get" panel (Step D.2) so paying users understand what they're
actually buying beyond the words themselves.

## The paywalled actions, by model

The amendment lists eight candidate paywalled actions: final PDF,
.docx, plain text export, JSON export, the sources-and-checked-dates
appendix, cloud save, e-signature, and sharing. All eight sit on the
paid side of the line in every option below — the three options differ
in *how* access to them is sold, not in *which* of them are free.

### Option A — per-document, one-time purchase

| | |
|---|---|
| **How it works** | A user who has finished the interview for one document pays once and gets that document: all 8 actions unlocked for that document only. |
| **Pros** | Simplest entitlement model — one `entitlements` row per (user, document). Matches how most people actually use a self-help legal tool: one lease, one will, one demand letter, not an ongoing subscription. No recurring billing, so no California Automatic Renewal Law exposure at all (that law only reaches automatically-renewing offers) — meaningfully smaller legal-review surface for a first paid launch. Smallest Stripe integration: no subscription webhooks, no dunning, no customer-portal subscription management (a portal is still useful for receipts/payment methods, just lighter). Easiest "what you get" message: "pay once, keep this document." |
| **Cons** | No recurring revenue. A user who needs several documents (forming an LLC and also needing its operating agreement, a contractor agreement, and an NDA) pays several times, which can feel more expensive than a bundle even if the per-item price is fair. The ongoing value-adds the amendment names for the subscription tier — saved-document sync, version history, law-change alerts on saved documents — don't have a natural home here, since there's no ongoing relationship to attach them to; cloud save becomes a one-time add-on instead of a continuity feature. |
| **Technical needs** | `entitlements` row: `type='document'`, `document_id` set, `source` = the order id, no `ends_at` (or a long/no expiry). Webhooks: `checkout.session.completed`, `charge.refunded`, `charge.dispute.created` only. No subscription renewal-compliance copy needed. |

### Option B — subscription, unlimited documents

| | |
|---|---|
| **How it works** | A recurring monthly or annual charge unlocks all 8 actions for every document, for as long as the subscription is active. |
| **Pros** | Recurring revenue; much better economics for a user who needs multiple documents over time. The continuity features (sync, version history, law-change alerts) are a natural fit — they're exactly what a subscription is good at, an ongoing service rather than a one-off transaction. Simple mental model for a heavy user: one price, everything. |
| **Cons** | Triggers California's Automatic Renewal Law (Bus. & Prof. Code §§ 17600 et seq.) in full: clear-and-conspicuous renewal terms before purchase, affirmative consent, an acknowledgment email, and a cancellation path as easy as sign-up (the amendment's own Step C.7) — real engineering and copy-review work, and real legal exposure if gotten wrong, for every subscriber, not just the ones who actually want the continuity features. A poor fit for the single-document user this product's free tier is probably best at attracting first (someone who needs exactly one lease termination notice is unlikely to subscribe for it, and may feel pressured into a bigger commitment than the task needs). Full subscription webhook surface (`invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated`/`deleted`), dunning on failed renewal, and a real customer portal are needed from day one, not added later. Higher abuse-control burden (trial-and-cancel patterns). |
| **Technical needs** | `entitlements` row: `type='subscription'`, `document_id` null, `ends_at` tracking the current billing period, updated on every `customer.subscription.updated` event. Full renewal-compliance copy, acknowledgment email, and a cancellation flow "as easy as sign-up." |

### Option C — hybrid: per-document purchase + optional subscription add-on

| | |
|---|---|
| **How it works** | The default path is Option A (pay once per document). A separate, clearly optional subscription sells *only* the continuity features — saved-document sync across sessions/devices, version history, and law-change alerts on saved documents — not additional document access. A subscriber still pays per document for new exports; the subscription is sold as "keep your documents current and backed up," not "unlimited documents." |
| **Pros** | Matches actual usage shape better than either pure model: a one-document user pays once and is done, with no subscription pressure; a repeat or long-horizon user (someone managing an LLC, or a landlord with recurring tenancy paperwork) has a real reason to subscribe that has nothing to do with needing *more* documents — it's specifically the thing a subscription is naturally good at (an ongoing service), while the one-time purchase stays the thing a one-time purchase is naturally good at (a discrete transaction). Confines the Automatic Renewal Law compliance surface to the smaller subscriber population, not every paying user. Most consistent with this product's own transparency-first positioning: the subscription isn't gating access to the corpus, it's selling continuity on top of it. |
| **Cons** | The most to build and test: two coexisting entitlement types, two Stripe product/webhook paths, two "what you get" explanations, two things for a buyer to have to understand before purchasing. More surface area for a first paid launch to get wrong in. |
| **Technical needs** | Both of the above under one `entitlements` table — exactly the shape the amendment's own Step B.1 already specifies (`type`, `document_id` *nullable*, `source`, `status`, `starts_at`, `ends_at`): a document entitlement sets `document_id`, a subscription entitlement leaves it null. This isn't a coincidence worth over-reading, but it does mean building Option A first doesn't require redesigning the schema later if a subscription tier is added — the nullable `document_id` already makes room for it. |

## Recommendation

**Launch with Option A (per-document, one-time purchase) only.** Treat
Option C's subscription add-on as a near-term follow-up once there's
real usage data, not as part of this first paid launch.

Reasoning: this is the first time this product has ever taken a
payment. The conservative choice — per this amendment's own Global
Rule 2, treat every live-payment action as something to show and wait
for approval on, and per the master plan's long-standing decision rule
to pick the option that most increases trust while staying
inform-never-advise — is to prove the smallest real transaction works
end to end (checkout, entitlement, server-rendered export, refund)
before adding a second, legally heavier product type on top of it.
Option B's full subscription/renewal-compliance machinery is real
engineering and real legal-review cost that would be built and
reviewed before a single real document has ever been sold. Option C
is the better long-run fit for this product's actual usage pattern and
its transparency-first positioning, and the `entitlements` schema
Step B.1 specifies is already shaped to support it later without
rework — but "better long-run fit" is a reason to design for it, not a
reason to ship it on day one.

Concretely: build Step B and Step C for Option A only. Leave the
`entitlements` table's `type` and nullable `document_id` exactly as
specified (it already accommodates a future subscription row without
a schema change) and skip every subscription-specific webhook,
renewal-compliance, and customer-portal-for-subscriptions requirement
for now. If usage after launch shows real demand from repeat buyers,
come back and add Option C's subscription add-on as its own phase,
scoped the same way Phase 7.2 itself was originally scoped — reusing
this same document rather than starting over.

## What this leaves for the owner

Left as placeholders in `config/pricing.json`, not guessed at:

- The per-document price itself. (Not picked from memory of
  competitors, per the amendment's own instruction.)
- **The edit-after-purchase policy** — how many re-exports/edits one
  purchase includes. A concrete default to react to, not a
  recommendation of what's "right": **3 re-exports, or 30 days from
  purchase, whichever comes first**, chosen only because it is simple
  to explain and simple to enforce (a count plus a date check), not
  because of any pricing research. Change it freely in
  `config/pricing.json`.
- Whether to revisit the subscription add-on later, and on what
  trigger (e.g., a fixed time after launch, or a usage threshold such
  as "X% of buyers purchase a second document within 90 days").

Everything else from the amendment's Step E (Stripe account creation,
the refund policy itself, accountant input on sales tax, attorney
review, a linked business bank account) is unchanged by this
recommendation and will be added to `OWNER_TODO.md` in Step E, once
Step A is decided.
