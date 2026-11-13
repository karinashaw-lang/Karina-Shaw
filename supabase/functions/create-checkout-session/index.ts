// CA Wedge Plan Step 9: starts a subscription checkout. Test mode
// only (Global Rule 9) -- whether this runs in test or live mode is
// entirely a property of which Stripe secret key is configured as
// this function's STRIPE_SECRET_KEY secret, never a flag in this
// code; a sk_test_... key is what the owner must set before this is
// ever actually called.
//
// Deliberately reads the price from a Stripe Price id
// (STRIPE_PRICE_ID secret), never a dollar amount written into this
// file -- config/pricing.json's monthlyPriceUsd/annualPriceUsd are
// still null placeholders (the owner's decision to make, see
// DECISIONS.md), and this function has no number to fall back to:
// it 500s with a plain "pricing not configured yet" message rather
// than inventing one, the same discipline every other pricing file
// in this project already follows.
//
// client_reference_id carries this user's auth id through Stripe's
// own checkout flow so stripe-webhook can attribute the resulting
// subscription to the right entitlements row without a second
// lookup -- Stripe echoes it back verbatim on every event for this
// session/subscription.
//
// NOT invoked from this sandbox: no live Stripe secret exists here
// to call out to, and this sandbox's egress policy blocks the
// project's own Supabase domain regardless (same note as every other
// edge function in this project -- see DECISIONS.md).

import { createClient } from 'npm:@supabase/supabase-js@2';
import Stripe from 'npm:stripe@17';

Deno.serve(async req => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const authHeader = req.headers.get('Authorization') || '';
  const userClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: authHeader } } }
  );
  const { data: userData, error: userErr } = await userClient.auth.getUser();
  if (userErr || !userData.user) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
  }

  const secretKey = Deno.env.get('STRIPE_SECRET_KEY');
  const priceId = Deno.env.get('STRIPE_PRICE_ID');
  if (!secretKey || !priceId) {
    return new Response(
      JSON.stringify({ error: 'Pricing is not configured yet. Nothing to subscribe to.' }),
      { status: 500 }
    );
  }
  const stripe = new Stripe(secretKey, { apiVersion: '2026-09-30.clover' });

  let body: { successUrl?: string; cancelUrl?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const origin = req.headers.get('origin') || '';
  const successUrl = body.successUrl || `${origin}/index.html?checkout=success`;
  const cancelUrl = body.cancelUrl || `${origin}/index.html?checkout=cancelled`;

  // A returning subscriber whose entitlement lapsed still has a real
  // Stripe customer from last time -- reuse it instead of creating a
  // duplicate, so their billing history stays in one place in the
  // Stripe dashboard.
  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );
  const { data: existing } = await admin
    .from('entitlements')
    .select('stripe_customer_id')
    .eq('user_id', userData.user.id)
    .not('stripe_customer_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      client_reference_id: userData.user.id,
      // The webhook acts on customer.subscription.* events, which
      // carry a subscription object but not this checkout session's
      // client_reference_id -- so the same user id also goes here,
      // in the subscription's own metadata, which every one of those
      // events does carry.
      subscription_data: { metadata: { user_id: userData.user.id } },
      customer: existing?.stripe_customer_id || undefined,
      customer_email: existing?.stripe_customer_id ? undefined : userData.user.email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      // CA Automatic Renewal Law: the subscriber must affirmatively
      // consent to automatic renewal, not just to the purchase.
      // Stripe Checkout's own built-in terms-acceptance consent
      // collection covers the required checkbox; this project's
      // terms draft (Step 20) is what that link must point to once
      // written, via the Stripe Dashboard's Checkout branding
      // settings (not something this API call sets per-session).
      consent_collection: { terms_of_service: 'required' },
    });
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
