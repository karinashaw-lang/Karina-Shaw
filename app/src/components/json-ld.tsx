/**
 * Renders a single JSON-LD structured-data block. Just a `<script>` tag —
 * no library needed for something this small, and schema.org's shape
 * varies enough per page (VideoObject, Person, QAPage) that a shared
 * builder would just be indirection.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
