import type { MetadataRoute } from "next";
import { DOMAIN_NAME } from "@/constants";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = `https://${DOMAIN_NAME}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
