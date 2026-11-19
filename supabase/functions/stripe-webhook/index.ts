// Per-document one-time purchase (PRICING_OPTIONS.md Option A,
// restored 2026-11-19 -- see DECISIONS.md and the entitlements
// migration's own comment). The only place public.entitlements is
// ever written (its own RLS has no insert/update policy for anyone
// else). Test mode only (Global Rule 9) -- the STRIPE_SECRET_KEY/
// STRIPE_WEBHOOK_SECRET secrets configured for this function are what
// decide that, never a flag in this code.
//
// Acts on three event types:
//   checkout.session.completed -- grants the entitlement. Fires once
//     per successful one-time-payment Checkout Session (mode:
//     'payment'); this project no longer creates subscriptions, so
//     there is no separate invoice.paid/customer.subscription.*
//     lifecycle to track the way the old subscription model needed.
//     invoice.paid and invoice.payment_failed are NOT handled here:
//     Stripe does not generate an Invoice object for a plain one-time
//     Checkout Session in payment mode (invoices are a
//     subscription/Invoicing-API concept), so there is nothing for
//     this project's purchase flow to listen for under those event
//     names -- noted here rather than built as dead code for an event
//     that structurally cannot fire for this flow.
//   charge.refunded -- revokes the entitlement (status -> 'refunded').
//   charge.dispute.created -- revokes the entitlement immediately
//     (status -> 'disputed'), per MVP_SPEC.md's dispute-handling
//     requirement: cut off access as soon as a dispute opens, not
//     only once it resolves against the business.
//
// Signature verification uses constructEventAsync with Stripe's own
// SubtleCrypto provider -- Deno's runtime has WebCrypto, not Node's
// crypto module, which is what the synchronous constructEvent needs.
// Skipping verification would let anyone who found this URL grant
// themselves a document by POSTing a forged event -- this is the one
// check this whole paywall design rests on not being bypassable.
//
// NOT invoked from this sandbox: no live Stripe webhook secret or
// Stripe CLI exists here to send a real signed event, and this
// sandbox's egress policy blocks the project's own Supabase domain
// regardless (same note as every other edge function in this
// project -- see DECISIONS.md). Logic was traced by hand against
// Stripe's documented event shapes, not run against a live webhook.

import Stripe from 'npm:stripe@17';
import postgres from 'npm:postgres@3';

const cryptoProvider = Stripe.createSubtleCryptoProvider();

// PRICING_OPTIONS.md's own stated default: 30 days of access from
// purchase. A concrete default to react to, not research-backed --
// change it here (and in config/pricing.json's own note, which this
// value must be kept in sync with by eye, same tradeoff this project
// already accepts elsewhere between a JS/Python/TS reimplementation
// of one small fact) if the owner picks a different window.
const ACCESS_WINDOW_DAYS = 30;

Deno.serve(async req => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const secretKey = Deno.env.get('STRIPE_SECRET_KEY');
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
  if (!secretKey || !webhookSecret) {
    console.error('STRIPE_SECRET_KEY/STRIPE_WEBHOOK_SECRET not configured');
    return new Response('Not configured', { status: 500 });
  }
  const stripe = new Stripe(secretKey, { apiVersion: '2026-09-30.clover' });

  const signature = req.headers.get('stripe-signature');
  const rawBody = await req.text();
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret, undefined, cryptoProvider);
  } catch (err) {
    console.error('Webhook signature verification failed:', (err as Error).message);
    return new Response('Invalid signature', { status: 400 });
  }

  const sql = postgres(Deno.env.get('SUPABASE_DB_URL')!);
  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode !== 'payment') {
        // This project no longer creates subscription-mode sessions;
        // a stray one (created by hand in the Stripe Dashboard while
        // testing, say) is acknowledged and ignored rather than
        // acted on incorrectly.
        return ack({ ignored: 'non-payment-mode session' });
      }
      const userId = session.metadata?.user_id || session.client_reference_id;
      const documentId = session.metadata?.document_id;
      if (!userId || !documentId) {
        console.error('checkout.session.completed with no user_id/document_id metadata:', session.id);
        return ack({ ignored: 'no user_id/document_id metadata' });
      }
      const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id ?? null;
      const paymentIntentId =
        typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id ?? null;
      const startsAt = new Date();
      const endsAt = new Date(startsAt.getTime() + ACCESS_WINDOW_DAYS * 24 * 60 * 60 * 1000);

      await sql`
        insert into public.entitlements
          (user_id, document_id, status, source, stripe_customer_id,
           stripe_checkout_session_id, stripe_payment_intent_id, starts_at, ends_at)
        values
          (${userId}, ${documentId}, 'active', 'stripe', ${customerId},
           ${session.id}, ${paymentIntentId}, ${startsAt.toISOString()}, ${endsAt.toISOString()})
        on conflict (stripe_checkout_session_id) where stripe_checkout_session_id is not null
        do update set
          status = 'active',
          stripe_customer_id = excluded.stripe_customer_id,
          stripe_payment_intent_id = excluded.stripe_payment_intent_id,
          updated_at = now()
      `;
      return ack({ granted: true });
    }

    if (event.type === 'charge.refunded' || event.type === 'charge.dispute.created') {
      const charge =
        event.type === 'charge.dispute.created'
          ? ((event.data.object as Stripe.Dispute).charge as Stripe.Charge | string)
          : (event.data.object as Stripe.Charge);
      const paymentIntentId =
        typeof charge === 'string'
          ? null
          : typeof charge.payment_intent === 'string'
            ? charge.payment_intent
            : (charge.payment_intent?.id ?? null);
      if (!paymentIntentId) {
        console.error(`${event.type} with no resolvable payment_intent id`);
        return ack({ ignored: 'no payment_intent id' });
      }
      const newStatus = event.type === 'charge.refunded' ? 'refunded' : 'disputed';
      const result = await sql`
        update public.entitlements
        set status = ${newStatus}, updated_at = now()
        where stripe_payment_intent_id = ${paymentIntentId}
      `;
      if (result.count === 0) {
        // Not an error -- a refund/dispute on a charge this project
        // never granted an entitlement for (a test charge created by
        // hand, a charge that failed before checkout.session.completed
        // ever fired) has nothing to revoke. Logged, not retried.
        console.error(`${event.type}: no entitlement row found for payment_intent`, paymentIntentId);
      }
      return ack({ revoked: result.count > 0 });
    }

    // Every other subscribed event type (payment_intent.*, customer.*,
    // the no-longer-relevant customer.subscription.*, etc.) is a 200
    // no-op rather than a webhook Stripe keeps retrying for nothing.
    return ack({ ignored: event.type });
  } catch (err) {
    console.error('stripe-webhook: database error handling', event.type, err);
    return new Response('Database error', { status: 500 });
  } finally {
    await sql.end();
  }
});

function ack(extra: Record<string, unknown>) {
  return new Response(JSON.stringify({ received: true, ...extra }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
