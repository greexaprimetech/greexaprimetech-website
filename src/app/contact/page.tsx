import type { Metadata } from "next";
import Contact from "../../site-pages/Contact";

export const metadata: Metadata = {
  title: "Contact Greexa - Greexa PrimeTech Software Development Company",
  description:
    "Contact Greexa PrimeTech, also known as Greexa, to discuss website development, custom software, SaaS platforms, CRM systems, dashboards, APIs, and AI automation solutions.",
  keywords:
    "contact Greexa, contact Greexa PrimeTech, Greexa contact, software development enquiry, website development company contact, custom software consultation",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Greexa - Greexa PrimeTech Software Development Company",
    description:
      "Contact Greexa PrimeTech for website development, custom software, SaaS, CRM, ERP, dashboards, APIs, and AI automation solutions.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <Contact />;
}
