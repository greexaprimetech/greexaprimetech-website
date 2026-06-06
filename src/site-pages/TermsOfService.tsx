"use client";

import { LegalPage } from "../components/LegalPage";
import { PageLayout } from "../components/PageLayout";

import { SEO } from "../components/SEO";

const sections = [
  {
    title: "Use of Our Website",
    text: "You may use the Greexa PrimeTech website for lawful business and informational purposes only. You must not attempt to disrupt the website, copy restricted content, submit harmful material, or gain unauthorized access to any related systems.",
  },
  {
    title: "Project Enquiries",
    text: "Submitting a form, sending an email, calling us, or messaging us on WhatsApp does not create a binding project agreement. We use enquiry details to understand your needs and decide whether we can provide a suitable proposal.",
  },
  {
    title: "Proposals and Quotations",
    text: "Any proposal, estimate, timeline, or quotation is based on the information available at that time. It may change if requirements, integrations, content, technical complexity, third-party costs, or business priorities change before approval.",
  },
  {
    title: "Project Scope and Deliverables",
    text: "Project scope, deliverables, revisions, responsibilities, and timelines should be confirmed in writing before work begins. Additional features, design changes, integrations, or revisions outside the agreed scope may require extra time and cost.",
  },
  {
    title: "Payments and Milestones",
    text: "Payment terms, milestone amounts, due dates, and refund conditions are handled according to the accepted proposal or written agreement. Delayed payments may pause work, delivery, deployment, or support until the account is updated.",
  },
  {
    title: "Client Responsibilities",
    text: "Clients are responsible for providing accurate requirements, timely feedback, approved content, brand assets, access credentials, and decisions needed for delivery. Delays in these inputs can affect project timelines and launch dates.",
  },
  {
    title: "Third-Party Services",
    text: "Some projects may depend on third-party services such as hosting, domains, payment gateways, email tools, APIs, analytics, or cloud platforms. Their pricing, availability, policies, and technical limits are controlled by those providers.",
  },
  {
    title: "Intellectual Property",
    text: "Greexa PrimeTech retains ownership of its pre-existing tools, reusable code, templates, processes, and know-how. Ownership of client-specific deliverables is handled according to the accepted proposal or written project agreement.",
  },
  {
    title: "Support and Maintenance",
    text: "Support, bug fixes, updates, monitoring, and maintenance are provided only when included in the project scope or covered by a separate support arrangement. New features or major changes are treated as additional work.",
  },
  {
    title: "Limitation of Liability",
    text: "Our website content is provided for general information. To the fullest extent permitted by law, Greexa PrimeTech is not responsible for indirect, incidental, or consequential losses arising from website use, delays, third-party failures, or reliance on general information.",
  },
  {
    title: "Changes to These Terms",
    text: "We may update these Terms of Service when our website, services, business practices, or legal requirements change. The latest version will be available on this page with the updated date.",
  },
];

export default function TermsOfService() {
  return (
    <PageLayout>
      <SEO
        title="Terms of Service | Greexa PrimeTech"
        description="Read the Greexa PrimeTech terms of service covering website use, project enquiries, proposals, payments, deliverables, support, and client responsibilities."
        canonical="https://www.greexaprimetech.com/terms-of-service"
      />

      <LegalPage
        eyebrow="Terms of Service"
        title="Clear terms for using our website and working with us"
        intro="These Terms of Service explain the basic conditions for using the Greexa PrimeTech website, contacting us for project enquiries, and working with us for software development services."
        updatedDate="June 1, 2026"
        sections={sections}
      />
    </PageLayout>
  );
}
