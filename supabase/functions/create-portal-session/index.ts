// CA Wedge Plan Step 9 / Step 7's California Automatic Renewal Law
// requirement: "at least as easy a path to cancel as it was to sign
// up." Stripe's own Billing Portal is that self-service path --
// change payment method, view invoices, and cancel, with no email or
// phone call to anyone at this company required. Test mode only
// (Global Rule 9), same as create-checkout-session.
//
// NOT invoked from this sandbox, for the same reasons as every other
// edge function here -- see DECISIONS.md.

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
  if (!secretKey) {
    return new Response(JSON.stringify({ error: 'Billing is not configured yet.' }), { status: 500 });
  }
  const stripe = new Stripe(secretKey, { apiVersion: '2026-09-30.clover' });

  // The user's own RLS-scoped select, not the service-role key: this
  // function needs no elevated access to look up a customer id
  // belonging to the caller themselves.
  const { data: row, error: lookupErr } = await userClient
    .from('entitlements')
    .select('stripe_customer_id')
    .eq('user_id', userData.user.id)
    .not('stripe_customer_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (lookupErr || !row?.stripe_customer_id) {
    return new Response(JSON.stringify({ error: "You don't have a subscription to manage yet." }), { status: 404 });
  }

  let body: { returnUrl?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const origin = req.headers.get('origin') || '';
  const returnUrl = body.returnUrl || `${origin}/index.html`;

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: row.stripe_customer_id,
      return_url: returnUrl,
    });
    return new Response(JSON.stringify({ url: session.url }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
