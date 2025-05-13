import { DOMAIN_NAME } from "@/constants";
import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
  },
  sitemap: `https://${DOMAIN_NAME}/sitemap.xml`,
});

export default robots;
