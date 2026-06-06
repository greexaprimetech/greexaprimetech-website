import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  "Custom software",
  "Business websites",
  "SaaS dashboards",
  "AI automation",
];

const deliverySteps = [
  {
    icon: <Layers3 className="gx-step-icon" />,
    title: "Plan the workflow",
    text: "We map your business process before designing the product.",
  },
  {
    icon: <Code2 className="gx-step-icon" />,
    title: "Build clean systems",
    text: "Frontend, backend, database, and dashboard work together clearly.",
  },
  {
    icon: <ShieldCheck className="gx-step-icon" />,
    title: "Launch with confidence",
    text: "Reliable handover, deployment support, and practical guidance.",
  },
];

const dashboardStats = [
  { label: "Project clarity", value: "High" },
  { label: "Manual work", value: "-42%" },
  { label: "Delivery focus", value: "Weekly" },
];

export function HeroSection() {
  return (
    <section className="gx-hero">
      <div className="gx-hero-bg" aria-hidden="true">
        <span className="gx-soft-grid" />
        <span className="gx-accent-shape gx-accent-a" />
        <span className="gx-accent-shape gx-accent-b" />
      </div>

      <div className="gx-shell">
        <div className="gx-content">
          <div className="gx-eyebrow gx-rise-1">
            <CheckCircle2 size={16} />
            Software development and automation partner
          </div>

          <h1 className="gx-headline gx-rise-2">
            Build a sharper digital foundation with Greexa PrimeTech.
          </h1>

          <p className="gx-subtitle gx-rise-3">
            Greexa helps growing businesses launch polished websites, custom
            software, SaaS dashboards, secure APIs, and automation systems that
            are clear, scalable, and ready for real operations.
          </p>

          <div className="gx-capabilities gx-rise-4" aria-label="Core services">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="gx-actions gx-rise-5">
            <Link href="/contact" className="gx-primary-cta">
              Discuss a Project
              <ArrowRight size={19} />
            </Link>
            <Link href="/services" className="gx-secondary-cta">
              View Services
            </Link>
          </div>

          <p className="gx-note gx-rise-6">
            Strategy, UI, engineering, deployment, and practical support from
            one focused team.
          </p>
        </div>

        <div
          className="gx-product-card gx-rise-4"
          aria-label="Software preview"
        >
          <div className="gx-card-toolbar">
            <span>Operations Dashboard</span>
            <strong>Live ready</strong>
          </div>

          <div className="gx-dashboard">
            <div className="gx-dashboard-main">
              <div>
                <span className="gx-mini-label">System health</span>
                <strong>Stable product foundation</strong>
              </div>
              <BarChart3 size={34} />
            </div>

            <div className="gx-stat-grid">
              {dashboardStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="gx-timeline">
              {deliverySteps.map((step) => (
                <article key={step.title}>
                  <div className="gx-step-icon-wrap">{step.icon}</div>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="gx-integration-row">
              <span>
                <Database size={15} />
                Database
              </span>
              <span>
                <Code2 size={15} />
                API
              </span>
              <span>
                <ShieldCheck size={15} />
                Auth
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gx-hero {
          position: relative;
          min-height: calc(100svh - 80px);
          display: flex;
          align-items: flex-start;
          overflow: hidden;
          padding: 42px clamp(18px, 5vw, 80px) 72px;
          background:
            linear-gradient(135deg, #f8fbff 0%, #eef6ff 48%, #ffffff 100%);
          isolation: isolate;
        }

        .gx-hero-bg,
        .gx-hero-bg span {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .gx-soft-grid {
          background-image:
            linear-gradient(to right, rgba(17, 24, 39, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17, 24, 39, 0.045) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(90deg, transparent, black 14%, black 86%, transparent);
        }

        .gx-accent-shape {
          inset: auto;
          border-radius: 999px;
          filter: blur(18px);
          opacity: 0.72;
        }

        .gx-accent-a {
          width: min(48vw, 680px);
          height: min(48vw, 680px);
          right: -14%;
          top: -10%;
          background: rgba(14, 165, 233, 0.18);
        }

        .gx-accent-b {
          width: min(38vw, 520px);
          height: min(38vw, 520px);
          left: -14%;
          bottom: -18%;
          background: rgba(20, 184, 166, 0.14);
        }

        .gx-shell {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 520px);
          gap: clamp(36px, 6vw, 84px);
          width: min(100%, 1240px);
          margin: 0 auto;
          align-items: start;
        }

        .gx-content {
          max-width: 770px;
          color: #0f172a;
        }

        .gx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 24px;
          padding: 9px 13px;
          border: 1px solid rgba(20, 184, 166, 0.26);
          border-radius: 8px;
          background: rgba(240, 253, 250, 0.86);
          color: #0f766e;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .gx-headline {
          margin: 0 0 24px;
          font-family: Inter, system-ui, sans-serif;
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 900;
          line-height: 1.04;
          letter-spacing: 0;
          color: #0f172a;
          text-wrap: balance;
        }

        .gx-subtitle {
          max-width: 670px;
          margin: 0;
          color: #475569;
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.68;
          text-wrap: pretty;
        }

        .gx-capabilities {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .gx-capabilities span {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border: 1px solid #dbe7f3;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.82);
          color: #1e293b;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
        }

        .gx-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .gx-primary-cta,
        .gx-secondary-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 900;
          text-decoration: none;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .gx-primary-cta {
          gap: 10px;
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.18);
        }

        .gx-secondary-cta {
          border: 1px solid #cbd5e1;
          background: rgba(255, 255, 255, 0.82);
          color: #0f172a;
        }

        .gx-primary-cta:hover,
        .gx-secondary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 42px rgba(15, 23, 42, 0.14);
        }

        .gx-note {
          max-width: 620px;
          margin: 20px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.65;
        }

        .gx-product-card {
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.92);
          box-shadow:
            0 30px 80px rgba(15, 23, 42, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .gx-card-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 15px 18px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .gx-card-toolbar span {
          min-width: 0;
          color: #334155;
          font-size: 13px;
          font-weight: 850;
          line-height: 1.35;
        }

        .gx-card-toolbar strong {
          flex: 0 0 auto;
          padding: 6px 10px;
          border-radius: 999px;
          background: #dcfce7;
          color: #166534;
          font-size: 11px;
          line-height: 1.15;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .gx-dashboard {
          display: grid;
          gap: 16px;
          padding: 20px;
        }

        .gx-dashboard-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 132px;
          padding: 22px;
          border-radius: 10px;
          background:
            linear-gradient(135deg, #0f172a, #1e293b);
          color: #ffffff;
        }

        .gx-mini-label {
          display: block;
          margin-bottom: 10px;
          color: #5eead4;
          font-size: 12px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .gx-dashboard-main strong {
          display: block;
          max-width: 280px;
          font-size: 25px;
          line-height: 1.16;
        }

        .gx-dashboard-main svg {
          color: #5eead4;
        }

        .gx-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .gx-stat-grid div {
          padding: 15px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: #ffffff;
        }

        .gx-stat-grid strong {
          display: block;
          color: #0f172a;
          font-size: 20px;
          line-height: 1;
        }

        .gx-stat-grid span {
          display: block;
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.35;
        }

        .gx-timeline {
          display: grid;
          gap: 10px;
        }

        .gx-timeline article {
          display: flex;
          gap: 12px;
          padding: 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: #f8fafc;
        }

        .gx-step-icon-wrap {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 8px;
          background: #ccfbf1;
          color: #0f766e;
        }

        .gx-step-icon {
          width: 18px;
          height: 18px;
        }

        .gx-timeline strong {
          display: block;
          margin-bottom: 4px;
          color: #0f172a;
          font-size: 14px;
          font-weight: 850;
        }

        .gx-timeline span {
          display: block;
          color: #64748b;
          font-size: 12px;
          line-height: 1.45;
        }

        .gx-integration-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gx-integration-row span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 11px;
          border-radius: 8px;
          background: #eef6ff;
          color: #1e3a8a;
          font-size: 12px;
          font-weight: 850;
        }

        .gx-rise-1 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .gx-rise-2 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both; }
        .gx-rise-3 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; }
        .gx-rise-4 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both; }
        .gx-rise-5 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both; }
        .gx-rise-6 { animation: gx-rise 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both; }

        @keyframes gx-rise {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 980px) {
          .gx-hero {
            padding-top: 36px;
          }

          .gx-shell {
            grid-template-columns: 1fr;
          }

          .gx-product-card {
            max-width: 620px;
          }
        }

        @media (max-width: 560px) {
          .gx-hero {
            padding: 32px 16px 64px;
          }

          .gx-eyebrow {
            align-items: flex-start;
            font-size: 12px;
            line-height: 1.45;
          }

          .gx-headline {
            max-width: 21rem;
            font-size: clamp(32px, 10.4vw, 44px);
            line-height: 1.08;
          }

          .gx-subtitle {
            max-width: 22rem;
            font-size: 15.5px;
            line-height: 1.62;
          }

          .gx-capabilities span {
            flex: 1 1 145px;
            justify-content: center;
            text-align: center;
          }

          .gx-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .gx-primary-cta,
          .gx-secondary-cta {
            width: 100%;
          }

          .gx-dashboard {
            padding: 16px;
          }

          .gx-card-toolbar {
            gap: 10px;
            padding: 12px 13px;
          }

          .gx-card-toolbar span {
            font-size: 12.5px;
          }

          .gx-card-toolbar strong {
            padding: 6px 9px;
            font-size: 10px;
            letter-spacing: 0.06em;
          }

          .gx-stat-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 380px) {
          .gx-card-toolbar {
            align-items: flex-start;
          }

          .gx-card-toolbar strong {
            max-width: 5.6rem;
            white-space: normal;
            text-align: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gx-hero *,
          .gx-hero *::before,
          .gx-hero *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}
