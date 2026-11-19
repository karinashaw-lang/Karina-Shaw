// MVP_SPEC.md Section 3's "admin refund action." No admin-role system
// exists anywhere in this project yet (confirmed by MVP_SPEC_STATUS.md's
// audit) -- building one is its own real scope, so this is
// deliberately the smallest thing that actually works: gated by a
// shared secret (ADMIN_API_SECRET) the owner sets and keeps private,
// not a signed-in "admin user" concept. Callable today via curl/
// Postman/a request client, not from any public page -- there is no
// UI for this, by design, until a real admin surface exists.
//
// Deliberately does NOT write to public.entitlements itself: this
// function's only job is to ask Stripe to refund a charge. The actual
// entitlement revocation happens the same way every other
// entitlement write does -- stripe-webhook's own charge.refunded
// handler, once Stripe's real refund event comes back signed. Two
// code paths writing the same row from different triggers is exactly
// the kind of duplicated logic this project's own clause_levels.py
// docstring warns against; keeping the webhook as the single writer
// avoids a second, different source of truth for "is this
// entitlement active."
//
// Test mode only (Global Rule 9) -- the STRIPE_SECRET_KEY configured
// for this function decides that, never a flag in this code.
//
// NOT invoked from this sandbox, for the same reasons as every other
// edge function here -- see DECISIONS.md.

import { createClient } from 'npm:@supabase/supabase-js@2';
import Stripe from 'npm:stripe@17';

Deno.serve(async req => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const adminSecret = Deno.env.get('ADMIN_API_SECRET');
  const providedSecret = req.headers.get('x-admin-secret');
  if (!adminSecret) {
    return new Response(JSON.stringify({ error: 'Admin actions are not configured yet.' }), { status: 500 });
  }
  if (!providedSecret || providedSecret !== adminSecret) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 401 });
  }

  let body: { entitlementId?: string; reason?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const entitlementId = (body.entitlementId || '').trim();
  if (!entitlementId) {
    return new Response(JSON.stringify({ error: 'entitlementId is required' }), { status: 400 });
  }

  const secretKey = Deno.env.get('STRIPE_SECRET_KEY');
  if (!secretKey) {
    return new Response(JSON.stringify({ error: 'Billing is not configured yet.' }), { status: 500 });
  }
  const stripe = new Stripe(secretKey, { apiVersion: '2026-09-30.clover' });

  const admin = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );
  const { data: row, error: lookupErr } = await admin
    .from('entitlements')
    .select('id, status, stripe_payment_intent_id')
    .eq('id', entitlementId)
    .maybeSingle();

  if (lookupErr || !row) {
    return new Response(JSON.stringify({ error: 'No entitlement found with that id' }), { status: 404 });
  }
  if (!row.stripe_payment_intent_id) {
    return new Response(
      JSON.stringify({ error: 'This entitlement has no payment_intent on file -- nothing to refund through Stripe' }),
      { status: 400 }
    );
  }
  if (row.status === 'refunded') {
    return new Response(JSON.stringify({ error: 'Already refunded' }), { status: 409 });
  }

  try {
    const refund = await stripe.refunds.create({
      payment_intent: row.stripe_payment_intent_id,
      reason: 'requested_by_customer',
      metadata: { entitlement_id: row.id, admin_initiated: 'true', ...(body.reason ? { note: body.reason } : {}) },
    });
    // The webhook's own charge.refunded handler will flip this row's
    // status once Stripe's real event arrives -- this response
    // reports what Stripe accepted, not a status this function set
    // itself.
    return new Response(JSON.stringify({ refundId: refund.id, refundStatus: refund.status }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
