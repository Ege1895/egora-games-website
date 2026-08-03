// Tek bir <script type="application/ld+json"> üretir. Birden fazla şema
// gereken sayfalarda aynı bileşen birden çok kez render edilir (schema.org
// birden fazla ayrı JSON-LD script bloğunu resmi olarak destekler).
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
