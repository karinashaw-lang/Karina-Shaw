-- MVP_BUILD_INSTRUCTIONS.md item 2.3: a private Storage bucket for
-- release-document's rendered PDF/DOCX output, so the function can
-- return "a short-lived signed URL" (the spec's own wording) rather
-- than streaming bytes back inline on every request.
--
-- Deliberately carries NO storage.objects RLS policy for anon or
-- authenticated roles, the same choice this project already made for
-- document_shares/document_signatures (see supabase/schema.sql's own
-- comment on that): every read of an object in this bucket happens
-- through a signed URL the release-document function mints with the
-- service-role key, which is itself the capability -- there is no
-- intended direct-table-read (or direct-storage-read) path in for any
-- caller, so no policy is the correct policy, not a gap to fill in
-- later.
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

-- No RLS policy follows for this bucket's objects, for any role --
-- that absence is the design (see the comment above), not an omission
-- to fill in later. storage.objects is shared across every bucket in
-- the project, so a table-level comment here would misleadingly imply
-- this reasoning covers buckets other than "documents" too; this plain
-- comment is deliberately not attached to the live schema for that
-- reason.
