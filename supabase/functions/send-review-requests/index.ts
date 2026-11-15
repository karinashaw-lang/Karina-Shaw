// CA Wedge Plan Step 17: review-capture email. Sends one honest,
// one-time "would you leave a review" email per subscriber, 14 days
// after their subscription became active -- long enough that they've
// actually used the product, never repeated for the same entitlement
// (public.entitlements.review_requested_at, set once this function
// actually sends one -- see
// supabase/migrations/20261114000000_entitlements_review_requested_at.sql).
//
// Not reachable by any end user: this is meant to be invoked by a
// scheduler the OWNER sets up (Supabase's own dashboard Cron UI, or
// any external cron service that can send an HTTP request with a
// header) -- verify_jwt is off because there is no user session here
// at all, but the X-Cron-Secret check below takes its place. Nobody
// with just the function's URL and no secret can trigger a send.
//
// Deliberately gated on FIVE separate secrets, not just an API key:
// RESEND_API_KEY / RESEND_FROM_ADDRESS (the email provider),
// REVIEW_EMAIL_CRON_SECRET (who may trigger this),
// OWNER_MAILING_ADDRESS (CAN-SPAM 15 U.S.C. SS 7704 requires a valid
// physical postal address in every commercial email -- this project
// has no real address to put there, so rather than omit it and ship
// a non-compliant email, or invent one, this function simply refuses
// to send anything until the owner provides a real one), and
// REVIEW_LINK_URL (nowhere to actually leave a review otherwise, same
// "don't invent a destination" discipline as config/referrals.json
// and config/seo.json's baseUrl). All five are owner-supplied
// Supabase edge function secrets, not repo config -- see
// OWNER_TODO.md.
//
// The email contains no incentive, discount, or anything conditioned
// on leaving a positive review (the FTC's Consumer Review Fairness
// Act and California's own consumer-review protections both forbid
// exactly that) -- it asks once, plainly, and says so.
//
// NOT invoked from this sandbox, for the same egress-policy reason as
// every other edge function in this project -- see DECISIONS.md.
// Logic was traced by hand against Resend's documented API shape and
// a direct Postgres query against this project's own schema, not run
// against a live database or a live Resend account.

import postgres from 'npm:postgres@3';

interface Candidate {
  id: string;
  user_id: string;
  email: string;
}

function buildEmail(replyTo: string, mailingAddress: string, reviewLinkUrl: string) {
  const subject = "How's Groundtruth working for you?";
  const text = `Hi,

You've had a Groundtruth subscription for a couple of weeks now. If you have a minute, we'd appreciate hearing what you think -- good or bad:

${reviewLinkUrl}

This is the only email like this you'll get for this subscription. There's nothing to win or unlock by leaving one, and a critical review is just as useful to us as a positive one.

Questions or feedback instead? Just reply to this email -- ${replyTo}.

-- Groundtruth

${mailingAddress}`;
  return { subject, text };
}

async function sendOne(apiKey: string, from: string, to: string, subject: string, text: string): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, text }),
  });
  if (!res.ok) {
    console.error(`Resend send failed for recipient (status ${res.status}):`, await res.text());
    return false;
  }
  return true;
}

Deno.serve(async req => {
  const cronSecret = Deno.env.get('REVIEW_EMAIL_CRON_SECRET');
  if (!cronSecret || req.headers.get('x-cron-secret') !== cronSecret) {
    return new Response(JSON.stringify({ error: 'Not authorized' }), { status: 401 });
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const resendFrom = Deno.env.get('RESEND_FROM_ADDRESS');
  const replyTo = Deno.env.get('OWNER_REPLY_TO_EMAIL');
  const mailingAddress = Deno.env.get('OWNER_MAILING_ADDRESS');
  const reviewLinkUrl = Deno.env.get('REVIEW_LINK_URL');
  if (!resendApiKey || !resendFrom || !replyTo || !mailingAddress || !reviewLinkUrl) {
    console.error('send-review-requests: one or more required secrets are not configured');
    return new Response(JSON.stringify({ error: 'Not configured' }), { status: 500 });
  }

  const sql = postgres(Deno.env.get('SUPABASE_DB_URL')!);
  let candidates: Candidate[];
  try {
    candidates = await sql<Candidate[]>`
      select e.id, e.user_id, u.email
      from public.entitlements e
      join auth.users u on u.id = e.user_id
      where e.status = 'active'
        and e.review_requested_at is null
        and e.created_at <= now() - interval '14 days'
      limit 500
    `;
  } catch (err) {
    console.error('Failed to query candidates:', err);
    await sql.end();
    return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 });
  }

  const { subject, text } = buildEmail(replyTo, mailingAddress, reviewLinkUrl);
  let sent = 0;
  const failed: string[] = [];

  for (const candidate of candidates) {
    if (!candidate.email) {
      failed.push(candidate.id);
      continue;
    }
    const ok = await sendOne(resendApiKey, resendFrom, candidate.email, subject, text);
    if (!ok) {
      failed.push(candidate.id);
      continue;
    }
    try {
      await sql`update public.entitlements set review_requested_at = now() where id = ${candidate.id}`;
      sent++;
    } catch (err) {
      // Sent but failed to record -- logged loudly rather than silently
      // risking a duplicate send next run. A human should check this
      // specific id rather than this function guessing what to do.
      console.error(`Sent to ${candidate.id} but failed to mark review_requested_at:`, err);
      failed.push(candidate.id);
    }
  }
  await sql.end();

  return new Response(JSON.stringify({ attempted: candidates.length, sent, failed }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
