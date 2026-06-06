"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
};

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Greexa global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={bodyStyle}>
        <main style={mainStyle}>
          <section style={cardStyle}>
            <img
              src="/logo.png"
              alt="Greexa PrimeTech"
              width={68}
              height={68}
              style={logoStyle}
            />
            <p style={eyebrowStyle}>Unexpected issue</p>
            <h1 style={titleStyle}>The website could not load properly.</h1>
            <p style={messageStyle}>
              Please refresh the page. If the issue continues, contact Greexa
              PrimeTech and we will help you directly.
            </p>
            <div style={actionRowStyle}>
              <a href="/" style={primaryActionStyle}>
                Go home
              </a>
              <a href="/contact" style={secondaryActionStyle}>
                Contact us
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}

const bodyStyle = {
  margin: 0,
  background:
    "linear-gradient(90deg, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), #f8fbff",
  backgroundSize: "64px 64px",
  color: "#0f172a",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const mainStyle = {
  display: "grid",
  minHeight: "100svh",
  placeItems: "center",
  padding: "1rem",
};

const cardStyle = {
  width: "min(100%, 720px)",
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: "22px",
  background:
    "radial-gradient(circle at 12% 0%, rgba(20,184,166,0.16), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.97), rgba(240,249,255,0.82))",
  boxShadow: "0 30px 90px rgba(15,23,42,0.12)",
  padding: "clamp(1.5rem, 5vw, 3rem)",
  textAlign: "center" as const,
};

const logoStyle = {
  objectFit: "contain" as const,
};

const eyebrowStyle = {
  marginTop: "1.2rem",
  color: "#0f766e",
  fontSize: "0.82rem",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const titleStyle = {
  margin: "0.8rem auto 0",
  maxWidth: "40rem",
  color: "#0f172a",
  fontSize: "clamp(2rem, 6vw, 3.8rem)",
  fontWeight: 950,
  lineHeight: 1.06,
};

const messageStyle = {
  maxWidth: "36rem",
  margin: "1rem auto 0",
  color: "#475569",
  fontSize: "clamp(1rem, 2vw, 1.12rem)",
  lineHeight: 1.72,
};

const actionRowStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  justifyContent: "center",
  gap: "0.75rem",
  marginTop: "1.6rem",
};

const primaryActionStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "3rem",
  borderRadius: "999px",
  background: "#0f172a",
  color: "#ffffff",
  padding: "0 1rem",
  fontSize: "0.92rem",
  fontWeight: 950,
  textDecoration: "none",
};

const secondaryActionStyle = {
  ...primaryActionStyle,
  border: "1px solid rgba(20,184,166,0.24)",
  background: "rgba(240,253,250,0.78)",
  color: "#0f766e",
};
