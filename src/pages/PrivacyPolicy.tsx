import { LegalPage } from "../components/LegalPage";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/SEO";

const sections = [
  {
    title: "Information We Collect",
    text: "When you contact Greexa PrimeTech, we may collect details such as your name, email address, phone number, company name, service interest, budget range, project description, and any files or links you choose to share with us.",
  },
  {
    title: "How We Use Your Information",
    text: "We use the information you provide to respond to enquiries, understand project requirements, prepare proposals, communicate about possible work, deliver agreed services, and improve how our website and business processes operate.",
  },
  {
    title: "Project and Communication Records",
    text: "We may keep records of emails, form submissions, calls, WhatsApp conversations, meeting notes, proposals, and project-related decisions so we can manage communication clearly and refer back to agreed requirements.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell personal information. We may share limited information with trusted tools or service providers when needed for hosting, analytics, email delivery, project management, file storage, legal compliance, or delivery of services requested by you.",
  },
  {
    title: "Data Security",
    text: "We use reasonable technical and organizational steps to protect information from unauthorized access, misuse, loss, or disclosure. No online system can be guaranteed completely secure, but we handle client and enquiry data carefully.",
  },
  {
    title: "Cookies and Analytics",
    text: "Our website may use basic analytics or similar technologies to understand page visits, traffic sources, and website performance. This helps us improve the site experience and measure general interest in our services.",
  },
  {
    title: "Your Rights and Choices",
    text: "You may contact us to request access, correction, or deletion of personal information you have shared with us. Some information may be retained where required for legal, accounting, security, or legitimate business record purposes.",
  },
  {
    title: "Updates to This Policy",
    text: "We may update this Privacy Policy from time to time as our website, services, tools, or legal requirements change. The latest version will be posted on this page with the updated date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy | Greexa PrimeTech"
        description="Read how Greexa PrimeTech collects, uses, protects, and manages information shared through our website, enquiries, and software development services."
        canonical="https://www.greexaprimetech.com/privacy-policy"
      />

      <LegalPage
        eyebrow="Privacy Policy"
        title="How we handle and protect your information"
        intro="This Privacy Policy explains how Greexa PrimeTech collects, uses, stores, and protects information shared with us through our website, business enquiries, and software development communication."
        updatedDate="June 1, 2026"
        sections={sections}
      />
    </PageLayout>
  );
}
