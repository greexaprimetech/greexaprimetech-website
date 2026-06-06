"use client";

import { useEffect } from "react";
import { ErrorScreen } from "../components/ErrorScreen";
import { PageLayout } from "../components/PageLayout";

type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function AppError({ error, reset }: AppErrorProps) {
  useEffect(() => {
    console.error("Greexa route error:", error);
  }, [error]);

  return (
    <PageLayout>
      <ErrorScreen
        eyebrow="Unexpected issue"
        title="We could not load this page properly."
        message="Please try again. If the issue continues, contact us and we will help you directly."
        status={error.digest ? `Error ${error.digest}` : "Error"}
        onRetry={reset}
      />
    </PageLayout>
  );
}
