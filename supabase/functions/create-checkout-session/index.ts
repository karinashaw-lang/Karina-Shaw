// Per-document one-time purchase (PRICING_OPTIONS.md Option A,
// restored 2026-11-19 over the 2026-11-10 subscription decision --
// MVP_SPEC.md's own exclusion list puts a subscription tier in Phase
// 5+, which conflicted with the stack this project had built; see
// DECISIONS.md). Test mode only (Global Rule 9) -- whether this runs
// in test or live mode is entirely a property of which Stripe secret
// key is configured as this function's STRIPE_SECRET_KEY secret,
// never a flag in this code.
//
// Reads the price from a Stripe Price id (STRIPE_PRICE_ID secret),
// never a dollar amount written into this file -- config/pricing.json's
// perDocument.priceUsd is still a null placeholder (the owner's
// decision to make), and this function has no number to fall back to:
// it 500s with a plain "pricing not configured yet" message rather
// than inventing one. The owner creates that Stripe Price as a
// one-time (not recurring) Price object once a real amount is picked
// -- this code only references its id, never its type.
//
// Requires a documentId in the request body -- every checkout is now
// for one specific document, not a blanket subscription. The
// document id is carried through Stripe's own checkout flow two ways:
// client_reference_id on the session (echoed back on
// checkout.session.completed) and metadata on the resulting
// PaymentIntent (payment_intent_data.metadata), so a later
// charge.refunded/charge.dispute.created event -- which carries a
// charge/payment_intent, not the original checkout session -- can
// still be correlated back to the right user+document without a
// second lookup.
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

  let body: { documentId?: string; successUrl?: string; cancelUrl?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const documentId = (body.documentId || '').trim();
  if (!documentId) {
    return new Response(JSON.stringify({ error: 'documentId is required' }), { status: 400 });
  }

  const secretKey = Deno.env.get('STRIPE_SECRET_KEY');
  const priceId = Deno.env.get('STRIPE_PRICE_ID');
  if (!secretKey || !priceId) {
    return new Response(
      JSON.stringify({ error: 'Pricing is not configured yet. Nothing to purchase.' }),
      { status: 500 }
    );
  }
  const stripe = new Stripe(secretKey, { apiVersion: '2026-09-30.clover' });

  const origin = req.headers.get('origin') || '';
  const successUrl = body.successUrl || `${origin}/index.html?checkout=success`;
  const cancelUrl = body.cancelUrl || `${origin}/index.html?checkout=cancelled`;

  // A returning buyer whose last purchase already lapsed still has a
  // real Stripe customer from last time -- reuse it instead of
  // creating a duplicate, so their receipts/billing history stay in
  // one place in the Stripe dashboard.
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
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      client_reference_id: userData.user.id,
      metadata: { user_id: userData.user.id, document_id: documentId },
      payment_intent_data: { metadata: { user_id: userData.user.id, document_id: documentId } },
      customer: existing?.stripe_customer_id || undefined,
      customer_email: existing?.stripe_customer_id ? undefined : userData.user.email,
      success_url: successUrl,
      cancel_url: cancelUrl,
      // A one-time purchase isn't a recurring charge, so the
      // Automatic Renewal Law's affirmative-consent requirement
      // doesn't apply the way it would to a subscription -- kept
      // here anyway as plain terms-of-service acceptance, which is
      // good practice for any purchase, not a renewal-law-specific
      // measure.
      consent_collection: { terms_of_service: 'required' },
    });
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
