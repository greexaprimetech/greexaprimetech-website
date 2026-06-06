import Link from "next/link";
import { AlertTriangle, ArrowRight, Home, RotateCcw } from "lucide-react";
import type { CSSProperties } from "react";

type ErrorScreenProps = {
  eyebrow?: string;
  title: string;
  message: string;
  status?: string;
  onRetry?: () => void;
};

export function ErrorScreen({
  eyebrow = "Something needs attention",
  title,
  message,
  status,
  onRetry,
}: ErrorScreenProps) {
  return (
    <section style={sectionStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>
          <AlertTriangle size={24} />
        </div>
        {status ? <span style={statusStyle}>{status}</span> : null}
        <p style={eyebrowStyle}>{eyebrow}</p>
        <h1 style={titleStyle}>{title}</h1>
        <p style={messageStyle}>{message}</p>

        <div style={actionRowStyle}>
          <Link href="/" style={primaryLinkStyle}>
            <Home size={17} />
            Go home
          </Link>
          <Link href="/contact" style={secondaryLinkStyle}>
            Contact us
            <ArrowRight size={17} />
          </Link>
          {onRetry ? (
            <button type="button" onClick={onRetry} style={retryButtonStyle}>
              <RotateCcw size={17} />
              Try again
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: CSSProperties = {
  display: "grid",
  minHeight: "min(72svh, 760px)",
  placeItems: "center",
  padding: "clamp(2rem, 6vw, 5rem) 1rem",
};

const cardStyle: CSSProperties = {
  width: "min(100%, 760px)",
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: "1.35rem",
  background:
    "radial-gradient(circle at 12% 0%, rgba(20,184,166,0.16), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.97), rgba(240,249,255,0.82))",
  boxShadow:
    "0 30px 90px rgba(15,23,42,0.12), inset 0 1px 0 rgba(255,255,255,0.92)",
  padding: "clamp(1.4rem, 4vw, 3rem)",
  textAlign: "center",
};

const iconStyle: CSSProperties = {
  display: "inline-grid",
  placeItems: "center",
  width: "4rem",
  height: "4rem",
  border: "1px solid rgba(20,184,166,0.28)",
  borderRadius: "1rem",
  background: "rgba(240,253,250,0.9)",
  color: "#0f766e",
};

const statusStyle: CSSProperties = {
  display: "block",
  marginTop: "1.1rem",
  color: "#64748b",
  fontSize: "0.82rem",
  fontWeight: 900,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const eyebrowStyle: CSSProperties = {
  marginTop: "1.1rem",
  color: "#0f766e",
  fontSize: "0.82rem",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
};

const titleStyle: CSSProperties = {
  maxWidth: "42rem",
  margin: "0.8rem auto 0",
  color: "#0f172a",
  fontSize: "clamp(2rem, 6vw, 4rem)",
  fontWeight: 950,
  lineHeight: 1.06,
};

const messageStyle: CSSProperties = {
  maxWidth: "38rem",
  margin: "1rem auto 0",
  color: "#475569",
  fontSize: "clamp(1rem, 2vw, 1.12rem)",
  lineHeight: 1.72,
};

const actionRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.75rem",
  marginTop: "1.6rem",
};

const baseActionStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  minHeight: "3rem",
  borderRadius: "999px",
  padding: "0 1rem",
  fontSize: "0.92rem",
  fontWeight: 950,
};

const primaryLinkStyle: CSSProperties = {
  ...baseActionStyle,
  background: "#0f172a",
  color: "#ffffff",
  boxShadow: "0 16px 34px rgba(15,23,42,0.16)",
};

const secondaryLinkStyle: CSSProperties = {
  ...baseActionStyle,
  border: "1px solid rgba(20,184,166,0.24)",
  background: "rgba(240,253,250,0.78)",
  color: "#0f766e",
};

const retryButtonStyle: CSSProperties = {
  ...secondaryLinkStyle,
  cursor: "pointer",
};
