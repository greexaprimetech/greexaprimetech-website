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
        title="Greexa PrimeTech | Software Development Company, Web Development, SaaS & AI Automation"
        description="Greexa PrimeTech is a software development company building websites, web applications, dashboards, APIs, SaaS platforms, CRM systems, and AI automation solutions for startups, local businesses, societies, and growing brands."
        keywords="Greexa PrimeTech, software development company, web development company, custom software development, website development, web application development, SaaS development, AI automation, business automation, CRM development, dashboard development, API development, React development, MERN stack development, Java Spring Boot development, software consulting"
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
