/**
 * Renders a JSON-LD <script> tag. Server component — safe to drop anywhere
 * in a page tree. `data` is already a plain object/array from lib/structured-data.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe inside a JSON-LD script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
