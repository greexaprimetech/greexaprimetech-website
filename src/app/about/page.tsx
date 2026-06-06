import type { Metadata } from "next";
import About from "../../site-pages/About";

export const metadata: Metadata = {
  title: "About Greexa PrimeTech - The Company Behind Greexa",
  description:
    "Learn about Greexa PrimeTech, also known as Greexa, a software development company helping startups, local businesses, societies, and growing brands build websites, custom software, SaaS platforms, and automation solutions.",
  keywords:
    "about Greexa, about Greexa PrimeTech, Greexa company, Greexa software company, software development company, website development company, software consulting, custom software company",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "About Greexa PrimeTech - The Company Behind Greexa",
    description:
      "Learn about Greexa PrimeTech, also known as Greexa, and how the company builds websites, custom software, SaaS platforms, dashboards, and automation systems.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <About />;
}
