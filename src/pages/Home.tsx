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
        title="Greexa PrimeTech | Software Development Company, Website Development & AI Automation"
        description="Greexa PrimeTech is a software development company building websites, web applications, SaaS platforms, CRM systems, dashboards, APIs, and AI automation solutions for businesses."
        keywords="Greexa PrimeTech, software development company, website development company, custom software development, web application development, SaaS development, CRM software, AI automation"
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
