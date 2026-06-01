import { ReactNode } from "react";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-[100svh] overflow-x-hidden bg-[#f8fbff]">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(15, 23, 42, 0.045) 1px, transparent 1px), linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(180deg, black 0%, transparent 72%)",
          }}
        />

        <div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "rgba(20, 184, 166, 0.12)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 h-[560px] w-[560px] rounded-full blur-3xl"
          style={{ background: "rgba(14, 165, 233, 0.12)" }}
        />
      </div>

      <main className="flex-1 pt-20 sm:pt-24 w-full">{children}</main>

      <Footer />
    </div>
  );
}
