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
        title="Greexa PrimeTech | Web Development, SaaS Solutions, AI Automation & Software Consulting"
        description="Greexa PrimeTech builds modern websites, scalable SaaS platforms, AI-powered automation solutions, and custom business software for startups and growing businesses."
        keywords="Greexa PrimeTech, web development company, software development company, SaaS development, AI automation, custom software solutions, React development, business software"
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
