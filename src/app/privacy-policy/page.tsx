import type { Metadata } from "next";
import PrivacyPolicy from "../../site-pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - Greexa PrimeTech",
  description:
    "Read how Greexa PrimeTech, also known as Greexa, collects, uses, protects, and manages information shared through our website, enquiries, and software development services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
