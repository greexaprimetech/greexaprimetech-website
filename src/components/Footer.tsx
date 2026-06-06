"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Our Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const services = [
  "Web Application Development",
  "Admin & Dashboard Systems",
  "E-commerce Solutions",
  "API & Backend Development",
  "Technical Consulting",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/112116909/admin/dashboard/",
    label: "LinkedIn",
    icon: <Linkedin size={17} />,
  },
  {
    href: "https://www.instagram.com/greexaprimetech?igsh=MXV2Y2V3cGhhdjU4eA==",
    label: "Instagram",
    icon: <Instagram size={17} />,
  },
];

const GIcon = () => (
  <svg
    width="43"
    height="43"
    viewBox="-2 0 68 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="45" height="12" fill="#0f172a" />
    <rect x="0" y="0" width="12" height="62" fill="#0f172a" />
    <rect x="0" y="50" width="60" height="14" fill="#0f172a" />
    <rect x="48" y="27" width="12" height="33" fill="#0f172a" />
    <rect x="27" y="25" width="33" height="12" fill="#0f172a" />
    <rect x="48" y="0" width="12" height="12" fill="#14b8a6" />
  </svg>
);

const cardStyle = {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
  boxShadow: "0 20px 48px rgba(0,0,0,0.2)",
  padding: "clamp(20px, 2.4vw, 28px)",
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
        background:
          "radial-gradient(circle at 12% 20%, rgba(20,184,166,0.22), transparent 28%), radial-gradient(circle at 88% 80%, rgba(14,165,233,0.2), transparent 30%), #0f172a",
        color: "#fff",
        padding: "56px 16px 28px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.5,
        }}
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            ...cardStyle,
            marginBottom: 36,
            padding: "clamp(26px, 4vw, 44px)",
            background:
              "linear-gradient(135deg, rgba(20,184,166,0.18), rgba(255,255,255,0.055) 48%, rgba(14,165,233,0.1))",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: 860 }}>
              <span
                style={{
                  display: "inline-flex",
                  border: "1px solid rgba(45,212,191,0.3)",
                  borderRadius: 999,
                  background: "rgba(45,212,191,0.12)",
                  padding: "6px 12px",
                  color: "#99f6e4",
                  fontSize: 11,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                }}
              >
                Build with clarity
              </span>
              <h3
                style={{
                  marginTop: 14,
                  maxWidth: 820,
                  color: "#fff",
                  fontSize: "clamp(2rem, 4.5vw, 3.45rem)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                }}
              >
                Ready for a polished software product?
              </h3>
              <p
                style={{
                  marginTop: 10,
                  maxWidth: 680,
                  color: "#cbd5e1",
                  fontSize: 16,
                  lineHeight: 1.7,
                }}
              >
                Websites, dashboards, APIs, and automation systems designed for
                growing businesses.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "fit-content",
                  minWidth: 190,
                  borderRadius: 12,
                  background: "#fff",
                  color: "#0f172a",
                  padding: "16px 24px",
                  fontSize: 15,
                  fontWeight: 900,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.24)",
                  whiteSpace: "nowrap",
                  transition: "transform 220ms ease, background 220ms ease",
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.transform = "translateY(-3px)";
                  event.currentTarget.style.background = "#f0fdfa";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translateY(0)";
                  event.currentTarget.style.background = "#fff";
                }}
              >
                Start a Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 265px), 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <AnimatedCard>
            <Link href="/" className="flex items-center gap-3">
              <span
                style={{
                  display: "inline-flex",
                  borderRadius: 10,
                  background: "#fff",
                  padding: 8,
                }}
              >
                <GIcon />
              </span>
              <span className="flex flex-col">
                <span
                  style={{
                    color: "#fff",
                    fontSize: 28,
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  Gree<span style={{ color: "#5eead4" }}>x</span>a
                </span>
                <span
                  style={{
                    marginTop: 6,
                    color: "#94a3b8",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.24em",
                  }}
                >
                  PRIMETECH
                </span>
              </span>
            </Link>
            <p style={{ marginTop: 20, color: "#cbd5e1", lineHeight: 1.75 }}>
              Professional software development for growing businesses that need
              reliable websites, dashboards, APIs, and automation systems.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href === "#" ? undefined : "_blank"}
                  rel={item.href === "#" ? undefined : "noreferrer"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#cbd5e1",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </AnimatedCard>

          <FooterList title="Quick Links">
            {quickLinks.map((item) => (
              <Link key={item.to} href={item.to} style={footerLinkStyle}>
                {item.label}
              </Link>
            ))}
          </FooterList>

          <FooterList title="Services">
            {services.map((service) => (
              <span key={service} style={footerTextStyle}>
                {service}
              </span>
            ))}
          </FooterList>

          <AnimatedCard>
            <FooterHeading>Contact</FooterHeading>
            <div className="space-y-3">
              <ContactRow icon={<Mail size={20} />}>
                <a
                  href="mailto:greexaprimetech@gmail.com"
                  style={{ color: "#e2e8f0", wordBreak: "break-all" }}
                >
                  greexaprimetech@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin size={20} />}>
                Hyderabad, India
              </ContactRow>
              <ContactRow icon={<Phone size={20} />}>
                <a href="tel:+919561436105" style={{ color: "#e2e8f0" }}>
                  +91 9561436105
                </a>
                <a href="tel:+919325997861" style={{ color: "#e2e8f0" }}>
                  +91 9325997861
                </a>
              </ContactRow>
            </div>
          </AnimatedCard>
        </div>

        <div
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          style={{
            marginTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 22,
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          <p>&copy; {currentYear} Greexa PrimeTech. All rights reserved.</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem 1.25rem",
              whiteSpace: "nowrap",
            }}
          >
            <Link href="/privacy-policy" style={{ color: "#cbd5e1" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ color: "#cbd5e1" }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  display: "block",
  color: "#cbd5e1",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.5,
} as const;

const footerTextStyle = {
  display: "block",
  color: "#cbd5e1",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.55,
} as const;

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        marginBottom: 18,
        color: "#99f6e4",
        fontSize: 12,
        fontWeight: 900,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </h4>
  );
}

function FooterList({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatedCard>
      <FooterHeading>{title}</FooterHeading>
      <div className="space-y-3">{children}</div>
    </AnimatedCard>
  );
}

function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        ...cardStyle,
        minHeight: 260,
        transition:
          "transform 240ms ease, border-color 240ms ease, background 240ms ease, box-shadow 240ms ease",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-6px)";
        event.currentTarget.style.borderColor = "rgba(94,234,212,0.34)";
        event.currentTarget.style.background =
          "linear-gradient(145deg, rgba(255,255,255,0.105), rgba(255,255,255,0.045))";
        event.currentTarget.style.boxShadow = "0 28px 68px rgba(0,0,0,0.26)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        event.currentTarget.style.background =
          "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))";
        event.currentTarget.style.boxShadow = "0 20px 48px rgba(0,0,0,0.2)";
      }}
    >
      {children}
    </div>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex gap-3"
      style={{
        minWidth: 0,
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        background: "rgba(255,255,255,0.045)",
        color: "#e2e8f0",
        padding: 12,
      }}
    >
      <span style={{ flex: "0 0 auto", color: "#99f6e4", marginTop: 2 }}>
        {icon}
      </span>
      <div className="flex min-w-0 flex-col gap-1">{children}</div>
    </div>
  );
}
