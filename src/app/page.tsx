import type { Metadata } from "next";
import Home from "../site-pages/Home";

export const metadata: Metadata = {
  title:
    "Greexa - Official Greexa PrimeTech Website | Software Development Company",
  description:
    "Greexa is the official website of Greexa PrimeTech, a software development and website development company building professional websites, custom software, SaaS platforms, CRM systems, dashboards, APIs, and AI automation solutions.",
  keywords:
    "Greexa, Greexa official website, Greexa PrimeTech, Greexa Prime Tech, Greexa software company, Greexa website development, Greexa web development company, Greexa custom software development, Greexa SaaS development, Greexa CRM development, Greexa ERP development, Greexa AI automation, Greexa business automation, PrimeTech, software development company, website development company, custom software development, SaaS development, CRM software development, dashboard development, API development, AI automation, business automation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title:
      "Greexa - Official Greexa PrimeTech Website | Software Development Company",
    description:
      "Greexa is the official website of Greexa PrimeTech, a software development and website development company for websites, custom software, SaaS, CRM, ERP, dashboards, APIs, and AI automation.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greexa - Official Greexa PrimeTech Website",
    description:
      "Greexa PrimeTech builds websites, custom software, SaaS, CRM, ERP, dashboards, APIs, and AI automation systems.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <Home />;
}
