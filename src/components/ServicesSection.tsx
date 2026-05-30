import {
  Boxes,
  Code2,
  Database,
  Layout,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "Web Application Development",
    label: "Product builds",
    description:
      "React and full-stack applications built around real business workflows.",
    points: ["SaaS platforms", "Dashboard flows", "Responsive UI"],
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: "Admin Panel Development",
    label: "Operations",
    description:
      "Internal dashboards for managing data, users, orders, reports, and teams.",
    points: ["Role-based access", "Analytics views", "Workflow management"],
  },
  {
    icon: <ShoppingCart className="h-7 w-7" />,
    title: "E-commerce Solutions",
    label: "Revenue systems",
    description:
      "Online stores and ordering systems with product pages, checkout, and automation.",
    points: ["Catalog systems", "Payments", "Order dashboards"],
  },
  {
    icon: <Database className="h-7 w-7" />,
    title: "API Development",
    label: "Backend",
    description:
      "Secure APIs and database architecture that connect your product and tools.",
    points: ["REST APIs", "Database design", "Auth and security"],
  },
  {
    icon: <Boxes className="h-7 w-7" />,
    title: "Cloud Solutions",
    label: "Scale ready",
    description:
      "Deployment setup, cloud configuration, and performance-minded foundations.",
    points: ["Hosting setup", "CI/CD basics", "Monitoring ready"],
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Technical Consulting",
    label: "Clarity",
    description:
      "The right plan before building: features, architecture, tech stack, and launch path.",
    points: ["Scope planning", "System design", "Build roadmap"],
  },
];

export function ServicesSection() {
  return (
    <section className="premium-section relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="premium-heading premium-section-heading mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">
            What we build
          </span>
          <h2 className="gradient-text mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Practical software services for businesses that need a polished web
            product, a smarter dashboard, or a stronger backend system.
          </p>
        </div>

        <div className="premium-card-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="premium-card premium-service-card group flex min-h-[340px] flex-col rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition"
            >
              <div className="premium-service-shape" />
              <div className="premium-service-top mb-6 flex items-center justify-between gap-4">
                <div className="premium-service-icon flex h-14 w-14 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-700">
                  {service.icon}
                </div>
                <span className="premium-service-label rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                  {service.label}
                </span>
              </div>

              <div className="premium-service-body">
                <h3 className="premium-service-title text-xl font-extrabold leading-tight text-slate-900">
                  {service.title}
                </h3>
                <p className="premium-service-description mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="premium-service-points mt-5">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
