-- CA Wedge Plan Step 23: two new analytics event types so the wedge
-- callout and referral links (Steps 16/19) are measurable, not just
-- document-level funnel events. No new columns -- document_id and
-- step_id (already free-text, already used this way for step_reached's
-- step index) are enough: wedge_link_clicked carries document_id (which
-- wedge document), referral_link_clicked carries document_id (the
-- document it appeared on) and step_id (the referral slot key,
-- 'registeredAgent' or 'attorneyReview').
alter table public.analytics_events drop constraint analytics_events_event_type_check;
alter table public.analytics_events add constraint analytics_events_event_type_check
  check (event_type = any (array['opened', 'step_reached', 'completed', 'exported', 'search', 'wedge_link_clicked', 'referral_link_clicked']));
