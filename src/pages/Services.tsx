import { PageLayout } from "../components/PageLayout";
import { GlassCard } from "../components/GlassCard";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  ShoppingCart,
  Layout,
  Boxes,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { SEO } from "../components/SEO";

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Refs to scroll to detail section
  const detailRefs = useRef<Array<HTMLDivElement | null>>([]);

  // ✅ Auto-scroll when a service expands
  useEffect(() => {
    if (expandedService === null) return;

    const node = detailRefs.current[expandedService];
    if (!node) return;

    // adjust if your navbar height differs
    const NAVBAR_OFFSET = 90;

    const y = node.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, [expandedService]);

  const services = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Web Application Development",
      label: "Product builds",
      shortDesc:
        "Custom web applications built with modern frameworks and best practices.",
      features: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "Real-time applications",
        "Responsive design",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      details:
        "We build scalable, high-performance web applications using cutting-edge technologies. Our development process focuses on creating intuitive user experiences, clean code architecture, and robust functionality that grows with your business.",
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Admin Panel Development",
      label: "Operations",
      shortDesc:
        "Powerful admin dashboards with advanced data management capabilities.",
      features: [
        "User & role management",
        "Data visualization",
        "Content management systems",
        "Analytics dashboards",
        "CRUD operations",
        "Custom reporting tools",
      ],
      technologies: ["React Admin", "Material UI", "Chart.js", "REST APIs"],
      details:
        "Our admin panels provide comprehensive control over your application with intuitive interfaces. We create feature-rich dashboards that make complex data management simple and efficient.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-commerce Solutions",
      label: "Revenue systems",
      shortDesc:
        "Full-featured online stores with seamless payment integration.",
      features: [
        "Product catalog management",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Order management",
        "Inventory tracking",
        "Customer accounts",
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      details:
        "We develop complete e-commerce platforms that drive sales and provide excellent shopping experiences. From product browsing to secure checkout, we handle every aspect of your online store.",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "API Development",
      label: "Backend",
      shortDesc: "Robust RESTful and GraphQL APIs for scalable applications.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Authentication & authorization",
        "Rate limiting & caching",
        "Third-party integrations",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      details:
        "We design and develop secure, scalable APIs that serve as the backbone of your applications. Our APIs are well-documented, follow best practices, and are built for performance.",
    },
    {
      icon: <Boxes className="w-10 h-10" />,
      title: "Cloud Solutions",
      label: "Scale ready",
      shortDesc:
        "Cloud infrastructure setup and optimization for maximum performance.",
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "Auto-scaling setup",
        "Load balancing",
        "CDN configuration",
        "Backup & disaster recovery",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      details:
        "We help you leverage cloud technologies to build resilient, scalable infrastructure. From initial setup to ongoing optimization, we ensure your applications run smoothly in the cloud.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Technical Consulting",
      label: "Strategy",
      shortDesc:
        "Expert guidance on architecture, tech stack, and best practices.",
      features: [
        "Technology stack selection",
        "Architecture design",
        "Code review",
        "Performance audits",
        "Security assessments",
        "Team training",
      ],
      technologies: ["Various based on needs"],
      details:
        "Our experienced consultants provide strategic guidance to help you make informed technical decisions. We review your current setup, identify improvements, and create roadmaps for success.",
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService((prev) => (prev === index ? null : index));
  };

  return (
    <PageLayout>
      <SEO
        title="Software Development Services | Websites, SaaS, CRM & AI Automation"
        description="Explore Greexa PrimeTech services including website development, custom software development, SaaS platforms, CRM systems, dashboards, APIs, and business automation solutions."
        keywords="software development services, website development services, custom software development, SaaS development, CRM development, dashboard development, API development, AI automation"
        canonical="https://www.greexaprimetech.com/services"
      />
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(4.5rem, 8vw, 7rem) 16px 2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 18% 18%, rgba(20,184,166,0.13), transparent 34%), radial-gradient(circle at 82% 24%, rgba(14,165,233,0.12), transparent 35%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>Premium delivery capabilities</span>
          <h1
            style={{
              marginTop: 18,
              color: "#0f172a",
              fontSize: "clamp(2.4rem, 6vw, 5.25rem)",
              fontWeight: 950,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              maxWidth: 760,
              margin: "18px auto 0",
              color: "#475569",
              fontSize: "clamp(1rem, 2vw, 1.22rem)",
              lineHeight: 1.75,
            }}
          >
            We design and develop premium web products, dashboards, APIs, and
            scalable systems that help businesses move faster with confidence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "2rem 16px clamp(1.25rem, 3vw, 2rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
              gap: 24,
              marginBottom: expandedService === null ? 18 : 16,
            }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isOpen={expandedService === index}
                onToggle={() => toggleService(index)}
              />
            ))}
          </div>

          {/* Detailed Service Sections */}
          <div style={{ display: "grid", gap: 12 }}>
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  detailRefs.current[index] = el;
                }}
              >
                {expandedService === index && (
                  <div className="animate-slide-in" style={detailCardStyle}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 18,
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div style={detailIconStyle}>{service.icon}</div>
                        <div>
                          <span style={smallPillStyle}>{service.label}</span>
                          <h3 style={detailTitleStyle}>{service.title}</h3>
                          <p style={detailSubtitleStyle}>{service.shortDesc}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setExpandedService(null)}
                        style={closeButtonStyle}
                        aria-label="Close details"
                      >
                        <ChevronUp className="w-5 h-5" />
                      </button>
                    </div>

                    <p style={detailCopyStyle}>{service.details}</p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                        gap: 22,
                        marginTop: 28,
                      }}
                    >
                      <div style={innerPanelStyle}>
                        <h4 style={panelHeadingStyle}>
                          <CheckCircle2 className="w-5 h-5" />
                          Key Features
                        </h4>

                        <ul style={{ display: "grid", gap: 12, marginTop: 18 }}>
                          {service.features.map((feature) => (
                            <li key={feature} style={featureRowStyle}>
                              <span style={featureDotStyle} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div style={innerPanelStyle}>
                        <h4 style={panelHeadingStyle}>
                          <Boxes className="w-5 h-5" />
                          Technologies Used
                        </h4>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.technologies.map((tech) => (
                            <span key={tech} style={techPillStyle}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={detailFooterStyle}>
                      <Link to="/contact" style={primaryCtaStyle}>
                        Start this service
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section
        className="px-4 sm:px-6 lg:px-8"
        style={{
          position: "relative",
          paddingTop: "clamp(1.75rem, 4vw, 3rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6.5rem)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: "min(1120px, calc(100% - 32px))",
            height: 1,
            transform: "translateX(-50%)",
            background:
              "linear-gradient(90deg, transparent, rgba(20,184,166,0.38), rgba(14,165,233,0.26), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            width: 360,
            height: 180,
            transform: "translateX(-50%)",
            borderRadius: 999,
            background: "rgba(20,184,166,0.08)",
            filter: "blur(44px)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-7xl mx-auto">
          {/* Title + Subtitle */}
          <div className="mb-15 sm:mb-16 flex flex-col items-center text-center gap-3 sm:gap-4">
            <h2 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Why Choose Greexa Primetech?
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              We combine technical expertise with business understanding
            </p>
          </div>

          <div className="py-12 sm:py-16 lg:py-20">
            <div className="premium-card-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Seasoned developers with years of experience in modern web technologies.",
                  icon: <Sparkles className="w-6 h-6" />,
                },
                {
                  title: "Quality Code",
                  description:
                    "Clean, maintainable, and well-documented code following industry best practices.",
                  icon: <Code2 className="w-6 h-6" />,
                },
                {
                  title: "Agile Process",
                  description:
                    "Flexible development methodology with regular updates and feedback loops.",
                  icon: <CheckCircle2 className="w-6 h-6" />,
                },
                {
                  title: "Timely Delivery",
                  description:
                    "We respect deadlines and ensure projects are delivered on time.",
                  icon: <CheckCircle2 className="w-6 h-6" />,
                },
                {
                  title: "Scalable Solutions",
                  description:
                    "Architecture designed to grow with your business needs.",
                  icon: <Boxes className="w-6 h-6" />,
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Comprehensive maintenance and support to keep your application running smoothly.",
                  icon: <CheckCircle2 className="w-6 h-6" />,
                },
              ].map((item, index) => (
                <GlassCard key={index} hover>
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00d9ff]/10 to-[#0084ff]/10 flex items-center justify-center text-[#00d9ff] border border-[#00d9ff]/20">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ServiceCard({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: {
    icon: ReactNode;
    title: string;
    label: string;
    shortDesc: string;
    features: string[];
  };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const previewFeatures = service.features.slice(0, 3);

  return (
    <article
      style={{
        ...serviceCardStyle,
        borderColor: isOpen
          ? "rgba(20,184,166,0.42)"
          : "rgba(148,163,184,0.24)",
        boxShadow: isOpen
          ? "0 30px 70px rgba(15,23,42,0.16), 0 0 0 1px rgba(20,184,166,0.08)"
          : serviceCardStyle.boxShadow,
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-8px)";
        event.currentTarget.style.borderColor = "rgba(20,184,166,0.4)";
        event.currentTarget.style.boxShadow =
          "0 30px 70px rgba(15,23,42,0.16), 0 0 0 1px rgba(20,184,166,0.08)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.borderColor = isOpen
          ? "rgba(20,184,166,0.42)"
          : "rgba(148,163,184,0.24)";
        event.currentTarget.style.boxShadow = isOpen
          ? "0 30px 70px rgba(15,23,42,0.16), 0 0 0 1px rgba(20,184,166,0.08)"
          : serviceCardStyle.boxShadow;
      }}
    >
      <div style={serviceShapeStyle} />

      <div style={cardTopStyle}>
        <div style={serviceIconStyle}>{service.icon}</div>
        <span style={serviceLabelStyle}>{service.label}</span>
      </div>

      <h3 style={serviceTitleStyle}>{service.title}</h3>
      <p style={serviceDescStyle}>{service.shortDesc}</p>

      <div style={previewPillsStyle}>
        {previewFeatures.map((feature) => (
          <span key={feature} style={previewPillStyle}>
            {feature}
          </span>
        ))}
      </div>

      <button onClick={onToggle} style={learnButtonStyle}>
        {isOpen ? "Hide Details" : "Learn More"}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
    </article>
  );
}

const eyebrowStyle = {
  display: "inline-flex",
  border: "1px solid rgba(20,184,166,0.24)",
  borderRadius: 12,
  background: "rgba(240,253,250,0.82)",
  color: "#0f766e",
  padding: "10px 14px",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
} as const;

const serviceCardStyle = {
  position: "relative",
  isolation: "isolate",
  overflow: "hidden",
  minHeight: 390,
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: 14,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,251,255,0.94))",
  boxShadow:
    "0 18px 44px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
  padding: "clamp(22px, 2.5vw, 30px)",
  transition:
    "transform 240ms ease, border-color 240ms ease, box-shadow 240ms ease",
} as const;

const serviceShapeStyle = {
  position: "absolute",
  right: -58,
  bottom: -60,
  zIndex: -1,
  width: 170,
  height: 170,
  borderRadius: "46% 54% 40% 60%",
  background:
    "linear-gradient(135deg, rgba(20,184,166,0.18), rgba(14,165,233,0.12))",
  opacity: 0.85,
} as const;

const cardTopStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 26,
} as const;

const serviceIconStyle = {
  display: "grid",
  placeItems: "center",
  width: 64,
  height: 64,
  border: "1px solid rgba(20,184,166,0.22)",
  borderRadius: 14,
  background: "#f0fdfa",
  color: "#0f766e",
  boxShadow: "0 16px 30px rgba(20,184,166,0.13)",
} as const;

const serviceLabelStyle = {
  border: "1px solid rgba(148,163,184,0.22)",
  borderRadius: 999,
  background: "#ffffff",
  color: "#475569",
  padding: "8px 12px",
  fontSize: 11,
  fontWeight: 900,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textAlign: "center",
  lineHeight: 1.2,
} as const;

const serviceTitleStyle = {
  maxWidth: 390,
  color: "#0f172a",
  fontSize: "clamp(1.45rem, 2.6vw, 2rem)",
  fontWeight: 950,
  lineHeight: 1.08,
  letterSpacing: "-0.01em",
} as const;

const serviceDescStyle = {
  marginTop: 14,
  color: "#475569",
  fontSize: 15,
  lineHeight: 1.75,
} as const;

const previewPillsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 22,
} as const;

const previewPillStyle = {
  border: "1px solid rgba(20,184,166,0.16)",
  borderRadius: 999,
  background: "rgba(240,253,250,0.72)",
  color: "#1e293b",
  padding: "8px 11px",
  fontSize: 12,
  fontWeight: 800,
  lineHeight: 1.1,
} as const;

const learnButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 9,
  width: "100%",
  marginTop: 26,
  border: "1px solid rgba(20,184,166,0.22)",
  borderRadius: 12,
  background: "#0f172a",
  color: "#ffffff",
  padding: "13px 16px",
  fontSize: 14,
  fontWeight: 900,
  boxShadow: "0 16px 30px rgba(15,23,42,0.16)",
  cursor: "pointer",
} as const;

const detailCardStyle = {
  overflow: "hidden",
  border: "1px solid rgba(20,184,166,0.26)",
  borderRadius: 16,
  background:
    "radial-gradient(circle at 10% 0%, rgba(20,184,166,0.11), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.99), rgba(248,251,255,0.95))",
  boxShadow: "0 28px 72px rgba(15,23,42,0.14)",
  padding: "clamp(22px, 3vw, 34px)",
} as const;

const detailIconStyle = {
  display: "grid",
  placeItems: "center",
  width: 62,
  height: 62,
  border: "1px solid rgba(20,184,166,0.22)",
  borderRadius: 14,
  background: "#f0fdfa",
  color: "#0f766e",
} as const;

const smallPillStyle = {
  display: "inline-flex",
  border: "1px solid rgba(20,184,166,0.2)",
  borderRadius: 999,
  background: "rgba(240,253,250,0.78)",
  color: "#0f766e",
  padding: "6px 10px",
  fontSize: 11,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
} as const;

const detailTitleStyle = {
  marginTop: 8,
  color: "#0f172a",
  fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
  fontWeight: 950,
  lineHeight: 1.08,
} as const;

const detailSubtitleStyle = {
  marginTop: 7,
  color: "#64748b",
  fontSize: 15,
  lineHeight: 1.6,
} as const;

const closeButtonStyle = {
  display: "grid",
  placeItems: "center",
  width: 42,
  height: 42,
  border: "1px solid rgba(148,163,184,0.24)",
  borderRadius: 12,
  background: "#ffffff",
  color: "#334155",
  cursor: "pointer",
} as const;

const detailCopyStyle = {
  marginTop: 24,
  color: "#334155",
  fontSize: 16,
  lineHeight: 1.8,
} as const;

const innerPanelStyle = {
  border: "1px solid rgba(148,163,184,0.2)",
  borderRadius: 14,
  background: "rgba(255,255,255,0.76)",
  padding: "20px",
} as const;

const panelHeadingStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "#0f172a",
  fontSize: 15,
  fontWeight: 950,
} as const;

const featureRowStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  color: "#475569",
  fontSize: 14,
  lineHeight: 1.55,
} as const;

const featureDotStyle = {
  flex: "0 0 auto",
  width: 7,
  height: 7,
  borderRadius: 999,
  background: "#14b8a6",
  marginTop: 8,
} as const;

const techPillStyle = {
  border: "1px solid rgba(20,184,166,0.18)",
  borderRadius: 999,
  background: "#f0fdfa",
  color: "#0f766e",
  padding: "8px 12px",
  fontSize: 13,
  fontWeight: 850,
} as const;

const detailFooterStyle = {
  marginTop: 28,
  borderTop: "1px solid rgba(226,232,240,0.95)",
  paddingTop: 22,
} as const;

const primaryCtaStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  borderRadius: 12,
  background: "#0f172a",
  color: "#ffffff",
  padding: "13px 18px",
  fontSize: 14,
  fontWeight: 950,
  boxShadow: "0 16px 30px rgba(15,23,42,0.16)",
} as const;
