import type { MetadataRoute } from "next";
import { DOMAIN_NAME } from "@/constants";

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = `https://${DOMAIN_NAME}`;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
