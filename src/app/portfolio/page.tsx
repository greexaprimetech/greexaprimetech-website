import type { Metadata } from "next";
import Portfolio from "../../site-pages/Portfolio";

export const metadata: Metadata = {
  title: "Greexa Portfolio - Greexa PrimeTech Software Development Projects",
  description:
    "View Greexa PrimeTech portfolio projects from Greexa, including websites, web applications, dashboards, SaaS platforms, CRM systems, ERP systems, and business automation software.",
  keywords:
    "Greexa portfolio, Greexa PrimeTech portfolio, Greexa projects, software development portfolio, website development portfolio, web application projects, SaaS projects, CRM software projects",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    url: "/portfolio",
    title: "Greexa Portfolio - Greexa PrimeTech Software Development Projects",
    description:
      "Explore Greexa PrimeTech projects across websites, web applications, dashboards, SaaS platforms, CRM systems, ERP systems, and automation software.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <Portfolio />;
}
