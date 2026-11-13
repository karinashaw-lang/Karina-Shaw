// CA Wedge Plan Step 9: the only place public.entitlements is ever
// written (its own RLS has no insert/update policy for anyone else --
// see supabase/migrations/20261113000000_entitlements.sql). Test mode
// only (Global Rule 9) -- the STRIPE_SECRET_KEY/STRIPE_WEBHOOK_SECRET
// secrets configured for this function are what decide that, never a
// flag in this code.
//
// Acts only on customer.subscription.* events, never
// checkout.session.completed -- a subscription object carries
// status/current_period_end/cancel_at_period_end/customer id
// directly, and (via subscription_data.metadata set in
// create-checkout-session) this app's own user id, so there's no
// need to separately correlate a checkout session with the
// subscription it created.
//
// Signature verification uses constructEventAsync with Stripe's own
// SubtleCrypto provider -- Deno's runtime has WebCrypto, not Node's
// crypto module, which is what the synchronous constructEvent needs.
// Skipping verification would let anyone who found this URL grant
// themselves a subscription by POSTing a forged event -- this is the
// one check this whole paywall design rests on not being bypassable.
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

function mapStripeStatus(stripeStatus: string): 'active' | 'past_due' | 'canceled' | 'expired' {
  switch (stripeStatus) {
    case 'active':
    case 'trialing':
      return 'active';
    case 'past_due':
    case 'unpaid':
      return 'past_due';
    case 'canceled':
      return 'canceled';
    default:
      // incomplete, incomplete_expired, paused, or any future Stripe
      // status this project hasn't seen yet -- fails to the status
      // that denies paid access rather than one that grants it.
      return 'expired';
  }
}

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

  if (!event.type.startsWith('customer.subscription.')) {
    // Acknowledged, not acted on -- every other subscribed event
    // (invoices, payment methods, etc.) is a 200 no-op rather than a
    // webhook Stripe keeps retrying for nothing.
    return new Response(JSON.stringify({ received: true, ignored: event.type }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const subscription = event.data.object as Stripe.Subscription;
  const userId = subscription.metadata?.user_id;
  if (!userId) {
    // Shouldn't happen for a subscription this function's own
    // checkout flow created, but a subscription created by hand in
    // the Stripe Dashboard (e.g. while testing) would have no
    // metadata at all -- log and acknowledge rather than 500, since
    // retrying won't produce a user id that doesn't exist.
    console.error('customer.subscription event with no user_id metadata:', subscription.id);
    return new Response(JSON.stringify({ received: true, ignored: 'no user_id metadata' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const status = event.type === 'customer.subscription.deleted' ? 'canceled' : mapStripeStatus(subscription.status);
  const currentPeriodEnd = subscription.items.data[0]?.current_period_end;
  const customerId = typeof subscription.customer === 'string' ? subscription.customer : subscription.customer.id;
  const periodEndIso = currentPeriodEnd ? new Date(currentPeriodEnd * 1000).toISOString() : null;

  // A direct Postgres connection, not the supabase-js client, because
  // the upsert target is entitlements_stripe_subscription_id_idx -- a
  // PARTIAL unique index (where stripe_subscription_id is not null),
  // which PostgREST's upsert helper cannot be told to target; raw SQL
  // can state that predicate exactly. Bypasses RLS the same way every
  // other service-role write in this project does.
  const sql = postgres(Deno.env.get('SUPABASE_DB_URL')!);
  try {
    await sql`
      insert into public.entitlements
        (user_id, type, status, stripe_customer_id, stripe_subscription_id, current_period_end, cancel_at_period_end)
      values
        (${userId}, 'subscription', ${status}, ${customerId}, ${subscription.id}, ${periodEndIso}, ${subscription.cancel_at_period_end})
      on conflict (stripe_subscription_id) where stripe_subscription_id is not null
      do update set
        status = excluded.status,
        stripe_customer_id = excluded.stripe_customer_id,
        current_period_end = excluded.current_period_end,
        cancel_at_period_end = excluded.cancel_at_period_end,
        updated_at = now()
    `;
  } catch (err) {
    console.error('Failed to upsert entitlement:', err);
    return new Response('Database error', { status: 500 });
  } finally {
    await sql.end();
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
