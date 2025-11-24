import type { MetadataRoute } from "next";
import { DOMAIN_NAME } from "@/constants";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/"],
  },
  sitemap: `https://${DOMAIN_NAME}/sitemap.xml`,
});

export default robots;
