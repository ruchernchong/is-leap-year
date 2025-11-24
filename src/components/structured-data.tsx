import Script from "next/script";
import type { Thing, WithContext } from "schema-dts";

interface Props<T extends Thing> {
  data: WithContext<T>;
}

export const StructuredData = <T extends Thing>({ data }: Props<T>) => (
  <Script
    id="structured-data"
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data, safe because we use JSON.stringify
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
