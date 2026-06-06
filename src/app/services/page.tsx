import type { Metadata } from "next";
import Services from "../../site-pages/Services";

export const metadata: Metadata = {
  title: "Greexa Services - Websites, Custom Software, SaaS, CRM & AI Automation",
  description:
    "Explore Greexa PrimeTech services from Greexa, including website development, custom software development, SaaS platforms, CRM systems, ERP solutions, dashboards, APIs, and business automation.",
  keywords:
    "Greexa services, Greexa PrimeTech services, Greexa website development, Greexa software development, software development services, website development services, custom software development, SaaS development, CRM development, ERP development, dashboard development, API development, AI automation",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title:
      "Greexa Services - Websites, Custom Software, SaaS, CRM & AI Automation",
    description:
      "Greexa PrimeTech provides website development, custom software, SaaS, CRM, ERP, dashboards, APIs, AI automation, and business automation services.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <Services />;
}
