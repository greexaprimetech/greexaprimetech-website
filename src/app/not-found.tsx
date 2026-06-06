import type { Metadata } from "next";
import { ErrorScreen } from "../components/ErrorScreen";
import { PageLayout } from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested Greexa PrimeTech page could not be found. Return to the homepage or contact us for support.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageLayout>
      <ErrorScreen
        status="404"
        eyebrow="Page not found"
        title="This page is not available."
        message="The link may be old, moved, or typed incorrectly. You can return home or contact Greexa PrimeTech if you were looking for a specific service."
      />
    </PageLayout>
  );
}
