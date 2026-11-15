-- CA Wedge Plan Step 17: review-capture email. Tracks whether this
-- entitlement has already had a "would you leave a review" email
-- sent for it, so the scheduled send-review-requests function never
-- emails the same subscriber twice. Nullable: unset means "not sent
-- yet" for every existing and future row, not "sent at the epoch".
alter table public.entitlements
  add column if not exists review_requested_at timestamptz;

comment on column public.entitlements.review_requested_at is
  'Set once by the send-review-requests edge function when a review-request email has actually been sent for this entitlement. Never set by client code.';
