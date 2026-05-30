import { Outlet } from "react-router-dom";
import { AnalyticsTracker } from "./AnalyticsTracker";

export function AppLayout() {
  return (
    <>
      <AnalyticsTracker />
      <Outlet />
    </>
  );
}
