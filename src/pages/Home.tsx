import { PageLayout } from "../components/PageLayout";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { FeaturedProjectsSection } from "../components/FeaturedProjectsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ProcessSection } from "../components/ProcessSection";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";
import { SEO } from "../components/SEO";

export default function Home() {
  return (
    <PageLayout>
      <SEO
        title="Greexa | Greexa PrimeTech - Software Development & Website Development Company"
        description="Greexa PrimeTech, also known as Greexa, is a software development and website development company building professional websites, custom software, web applications, SaaS platforms, CRM systems, dashboards, APIs, and AI automation solutions for businesses, startups, societies, coaching institutes, and growing brands."
        keywords="Greexa, Greexa PrimeTech, Greexa Prime Tech, PrimeTech, Greexa software company, Greexa website development, Greexa web development company, Greexa custom software development, software development company, website development company, web development company, custom software development, web application development, SaaS development, CRM software development, dashboard development, API development, AI automation, business automation, coaching institute software, society management software, startup software development, business technology solutions"
        canonical="https://www.greexaprimetech.com/"
      />
      <HeroSection />

      <ServicesSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      {/* <CTASection /> */}
    </PageLayout>
  );
}
