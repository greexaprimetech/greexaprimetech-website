import type { Metadata } from "next";
import TermsOfService from "../../site-pages/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service - Greexa PrimeTech",
  description:
    "Read the Greexa PrimeTech terms of service for Greexa website use, project enquiries, proposals, payments, deliverables, support, and client responsibilities.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Page() {
  return <TermsOfService />;
}
