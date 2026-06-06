"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "../utils/analytics";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname + window.location.search);
  }, [pathname]);

  return null;
}
