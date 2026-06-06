import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, LayoutDashboard, Users } from "lucide-react";

const industries = [
  {
    icon: <GraduationCap size={24} />,
    title: "Coaching institutes",
    text: "Student enquiries, batches, fees, attendance, reports, and parent communication.",
  },
  {
    icon: <Users size={24} />,
    title: "Societies and local operations",
    text: "Member records, complaints, payments, notices, documents, and daily management.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Service businesses",
    text: "Lead capture, follow-ups, project tracking, invoices, customer history, and dashboards.",
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "Internal teams",
    text: "Admin panels, approval flows, role access, reporting, and process automation.",
  },
];

export function IndustryFocusSection() {
  return (
    <section className="gx-industry-section">
      <div className="gx-industry-shell">
        <div className="gx-industry-copy">
          <span>Where we help</span>
          <h2>Built for real business workflows, not just screens.</h2>
          <p>
            The best software feels close to how the business already works. We
            study the daily process first, then design the website, dashboard,
            or software around it.
          </p>
          <Link href="/contact">
            Discuss your workflow
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="gx-industry-grid">
          {industries.map((item) => (
            <article key={item.title} className="gx-industry-card">
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
