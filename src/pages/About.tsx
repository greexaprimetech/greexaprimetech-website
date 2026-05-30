import { Link } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import {
  ArrowRight,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { SEO } from "../components/SEO";

const values = [
  {
    icon: <Target className="w-7 h-7" />,
    title: "Client-Focused",
    description:
      "We start with your business goals, then design software that supports real growth and daily operations.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Quality First",
    description:
      "Clean architecture, strong performance, responsive layouts, and reliable delivery guide every build.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Innovation",
    description:
      "We use modern tools thoughtfully, choosing technology that makes your product faster and easier to scale.",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Transparency",
    description:
      "Clear communication, honest planning, and visible progress keep every project aligned from start to launch.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Agility",
    description:
      "We move quickly, adapt to feedback, and keep the product direction sharp as requirements evolve.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Partnership",
    description:
      "We build long-term relationships with practical support, improvements, and technical guidance after launch.",
  },
];

export default function About() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    const targetValues = { projects: 150, clients: 80, years: 5 };
    const duration = 1500;
    const steps = 45;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        projects: Math.floor(targetValues.projects * progress),
        clients: Math.floor(targetValues.clients * progress),
        years: Math.floor(targetValues.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="About Greexa PrimeTech | Software Development Company"
        description="Greexa PrimeTech is a software development and consulting company helping businesses build websites, SaaS products, automation tools, and custom digital platforms."
        keywords="about Greexa PrimeTech, software company, web development company, custom software company, technology consulting"
        canonical="https://www.greexaprimetech.com/about"
      />
      <section style={heroSectionStyle}>
        <div style={ambientGridStyle} />
        <div style={heroGlowLeftStyle} />
        <div style={heroGlowRightStyle} />

        <div style={heroShellStyle}>
          <div style={heroCopyStyle}>
            <span style={eyebrowStyle}>About Greexa Primetech</span>
            <h1 style={heroTitleStyle}>About Greexa Primetech</h1>
            <p style={heroTextStyle}>
              We are a premium web application development agency based in
              Hyderabad, India. We turn ideas into reliable websites,
              dashboards, APIs, and automation systems that feel polished from
              the first screen.
            </p>

            <div style={heroActionsStyle}>
              <Link to="/portfolio" style={secondaryButtonStyle}>
                View Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section withDivider>
        <div style={storyGridStyle}>
          <div>
            <span style={eyebrowStyle}>Our story</span>
            <h2 style={sectionTitleStyle}>
              From focused development to dependable digital partnership.
            </h2>
          </div>

          <div style={storyCardStyle}>
            <p>
              Greexa Primetech was founded with a simple belief: every growing
              business deserves software that is clean, dependable, and built
              with care.
            </p>
            <p>
              We work with startups, SMEs, and teams that need practical
              technology: custom web applications, e-commerce platforms, admin
              panels, backend APIs, and cloud-ready systems.
            </p>
            <p>
              What makes our approach different is the balance of design,
              engineering, and business thinking. We focus on the product you
              need now while building foundations that can grow with you.
            </p>
          </div>
        </div>
      </Section>

      <Section tinted withDivider>
        <SectionHeading
          label="Core values"
          title="The principles behind every delivery"
          subtitle="A premium product is not only how it looks. It is how reliably it works, scales, and supports your goals."
        />

        <div style={cardGridStyle}>
          {values.map((value) => (
            <PremiumCard key={value.title}>
              <div style={iconBoxStyle}>{value.icon}</div>
              <h3 style={cardTitleStyle}>{value.title}</h3>
              <p style={cardTextStyle}>{value.description}</p>
            </PremiumCard>
          ))}
        </div>
      </Section>

      <section style={{ padding: "0 16px clamp(4.5rem, 7vw, 6rem)" }}>
        <div style={ctaCardStyle}>
          <div>
            <span style={eyebrowStyle}>Ready to build?</span>
            <h2 style={ctaTitleStyle}>
              Let us plan your next digital product.
            </h2>
            <p style={ctaTextStyle}>
              Share your idea, workflow, or product requirement and we will help
              you shape a clear development path.
            </p>
          </div>
          <Link to="/contact" style={primaryButtonStyle}>
            Contact Greexa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function Section({
  children,
  tinted = false,
  withDivider = false,
}: {
  children: ReactNode;
  tinted?: boolean;
  withDivider?: boolean;
}) {
  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(3.75rem, 7vw, 6rem) 16px",
        background: tinted
          ? "linear-gradient(180deg, rgba(255,255,255,0), rgba(238,246,255,0.72), rgba(255,255,255,0))"
          : "transparent",
      }}
    >
      {withDivider && <div style={dividerStyle} />}
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={sectionHeadingStyle}>
      <span style={eyebrowStyle}>{label}</span>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={sectionSubtitleStyle}>{subtitle}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div style={statCardStyle}>
      <div style={statValueStyle}>{value}</div>
      <div style={statLabelStyle}>{label}</div>
    </div>
  );
}

function PremiumCard({ children }: { children: ReactNode }) {
  return (
    <article
      style={premiumCardStyle}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-7px)";
        event.currentTarget.style.borderColor = "rgba(20,184,166,0.36)";
        event.currentTarget.style.boxShadow = "0 30px 70px rgba(15,23,42,0.14)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.borderColor = "rgba(148,163,184,0.24)";
        event.currentTarget.style.boxShadow = "0 18px 44px rgba(15,23,42,0.08)";
      }}
    >
      <div style={cardShapeStyle} />
      {children}
    </article>
  );
}

const heroSectionStyle = {
  position: "relative",
  overflow: "hidden",
  padding: "clamp(4.75rem, 8vw, 7.25rem) 16px clamp(3rem, 6vw, 5rem)",
} as const;

const ambientGridStyle = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage:
    "linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
} as const;

const heroGlowLeftStyle = {
  position: "absolute",
  left: -120,
  top: 70,
  width: 420,
  height: 420,
  borderRadius: 999,
  background: "rgba(20,184,166,0.12)",
  filter: "blur(58px)",
} as const;

const heroGlowRightStyle = {
  position: "absolute",
  right: -120,
  bottom: 20,
  width: 420,
  height: 420,
  borderRadius: 999,
  background: "rgba(14,165,233,0.12)",
  filter: "blur(58px)",
} as const;

const heroShellStyle = {
  position: "relative",
  maxWidth: 960,
  margin: "0 auto",
  textAlign: "center",
} as const;

const heroCopyStyle = {
  maxWidth: 840,
  margin: "0 auto",
} as const;

const eyebrowStyle = {
  display: "inline-flex",
  border: "1px solid rgba(20,184,166,0.24)",
  borderRadius: 12,
  background: "rgba(240,253,250,0.82)",
  color: "#0f766e",
  padding: "9px 13px",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
} as const;

const heroTitleStyle = {
  marginTop: 18,
  color: "#0f172a",
  fontSize: "clamp(2.35rem, 6vw, 5rem)",
  fontWeight: 950,
  lineHeight: 1.02,
  letterSpacing: "-0.02em",
} as const;

const heroTextStyle = {
  marginTop: 18,
  color: "#475569",
  fontSize: "clamp(1rem, 2vw, 1.18rem)",
  lineHeight: 1.78,
} as const;

const heroActionsStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 12,
  marginTop: 26,
} as const;

const primaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  borderRadius: 12,
  background: "#0f172a",
  color: "#ffffff",
  padding: "14px 18px",
  fontSize: 14,
  fontWeight: 950,
  boxShadow: "0 16px 30px rgba(15,23,42,0.16)",
} as const;

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  background: "#ffffff",
  color: "#0f172a",
  border: "1px solid rgba(148,163,184,0.24)",
  boxShadow: "0 14px 30px rgba(15,23,42,0.08)",
} as const;

const focusPillStyle = {
  display: "inline-flex",
  border: "1px solid rgba(20,184,166,0.18)",
  borderRadius: 999,
  background: "rgba(240,253,250,0.76)",
  color: "#0f766e",
  padding: "8px 12px",
  fontSize: 12,
  fontWeight: 850,
  lineHeight: 1.1,
} as const;

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
  gap: 18,
} as const;

const statCardStyle = {
  border: "1px solid rgba(148,163,184,0.22)",
  borderRadius: 16,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 18px 44px rgba(15,23,42,0.08)",
  padding: "28px 20px",
  textAlign: "center",
} as const;

const statValueStyle = {
  color: "#0f766e",
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: 950,
  lineHeight: 1,
} as const;

const statLabelStyle = {
  marginTop: 10,
  color: "#475569",
  fontSize: 15,
  fontWeight: 800,
} as const;

const storyGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
  gap: 28,
  alignItems: "start",
} as const;

const storyCardStyle = {
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: 16,
  background: "rgba(255,255,255,0.92)",
  boxShadow: "0 18px 44px rgba(15,23,42,0.08)",
  padding: "clamp(22px, 3vw, 34px)",
  color: "#334155",
  lineHeight: 1.82,
  display: "grid",
  gap: 16,
} as const;

const dividerStyle = {
  position: "absolute",
  top: 0,
  left: "50%",
  width: "min(1120px, calc(100% - 32px))",
  height: 1,
  transform: "translateX(-50%)",
  background:
    "linear-gradient(90deg, transparent, rgba(20,184,166,0.38), rgba(14,165,233,0.26), transparent)",
} as const;

const sectionHeadingStyle = {
  maxWidth: 780,
  margin: "0 auto clamp(2rem, 5vw, 3.5rem)",
  textAlign: "center",
} as const;

const sectionTitleStyle = {
  marginTop: 16,
  color: "#0f172a",
  fontSize: "clamp(2rem, 5vw, 4rem)",
  fontWeight: 950,
  lineHeight: 1.06,
  letterSpacing: "-0.02em",
} as const;

const sectionSubtitleStyle = {
  marginTop: 14,
  color: "#64748b",
  fontSize: "clamp(1rem, 2vw, 1.12rem)",
  lineHeight: 1.7,
} as const;

const cardGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
  gap: 22,
} as const;

const premiumCardStyle = {
  position: "relative",
  overflow: "hidden",
  minHeight: 250,
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: 16,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,251,255,0.94))",
  boxShadow: "0 18px 44px rgba(15,23,42,0.08)",
  padding: "clamp(20px, 2.5vw, 28px)",
  transition:
    "transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease",
} as const;

const cardShapeStyle = {
  position: "absolute",
  right: -60,
  bottom: -64,
  width: 160,
  height: 160,
  borderRadius: "46% 54% 40% 60%",
  background:
    "linear-gradient(135deg, rgba(20,184,166,0.16), rgba(14,165,233,0.1))",
} as const;

const iconBoxStyle = {
  display: "grid",
  placeItems: "center",
  width: 58,
  height: 58,
  border: "1px solid rgba(20,184,166,0.22)",
  borderRadius: 14,
  background: "#f0fdfa",
  color: "#0f766e",
  boxShadow: "0 16px 30px rgba(20,184,166,0.12)",
} as const;

const cardTitleStyle = {
  position: "relative",
  marginTop: 20,
  color: "#0f172a",
  fontSize: "1.25rem",
  fontWeight: 950,
} as const;

const cardTextStyle = {
  position: "relative",
  marginTop: 10,
  color: "#475569",
  fontSize: 14,
  lineHeight: 1.72,
} as const;

const ctaCardStyle = {
  maxWidth: 1120,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: 24,
  alignItems: "center",
  border: "1px solid rgba(20,184,166,0.26)",
  borderRadius: 18,
  background:
    "radial-gradient(circle at 12% 0%, rgba(20,184,166,0.14), transparent 34%), linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,251,255,0.94))",
  boxShadow: "0 28px 72px rgba(15,23,42,0.13)",
  padding: "clamp(24px, 4vw, 42px)",
} as const;

const ctaTitleStyle = {
  marginTop: 14,
  color: "#0f172a",
  fontSize: "clamp(1.8rem, 4vw, 3rem)",
  fontWeight: 950,
  lineHeight: 1.08,
} as const;

const ctaTextStyle = {
  marginTop: 10,
  color: "#64748b",
  lineHeight: 1.7,
} as const;
