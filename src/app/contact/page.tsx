import type { Metadata } from "next";
import type { ContactPage as ContactPageSchema, WithContext } from "schema-dts";
import { StructuredData } from "@/components/structured-data";
import { BRAND_NAME, DOMAIN_NAME } from "@/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the IsLeapYear team. Questions about our API? Need support? We're here to help with your leap year detection needs.",
  openGraph: {
    title: `Contact Us | ${BRAND_NAME}`,
    description:
      "Get in touch with the IsLeapYear team. Questions about our API? Need support? We're here to help.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${BRAND_NAME}`,
    description:
      "Get in touch with the IsLeapYear team. Questions about our API? Need support? We're here to help.",
  },
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  const structuredData: WithContext<ContactPageSchema> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    description:
      "Get in touch with the IsLeapYear team for support and inquiries.",
    url: `https://${DOMAIN_NAME}/contact`,
    isPartOf: {
      "@type": "WebSite",
      name: BRAND_NAME,
      url: `https://${DOMAIN_NAME}`,
    },
  };

  return (
    <div>
      <StructuredData data={structuredData} />
    </div>
  );
};

export default ContactPage;
