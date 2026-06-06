import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Business Website",
    price: "Starts from ₹15,000",
    summary:
      "For businesses that need a clean online presence, enquiry flow, and fast launch.",
    points: ["Responsive pages", "Contact and WhatsApp CTA", "Basic SEO setup"],
  },
  {
    name: "Dashboard or Admin Panel",
    price: "Starts from ₹35,000",
    summary:
      "For teams managing enquiries, users, orders, records, reports, or internal work.",
    points: ["Role-based access", "Data management", "Reports and workflows"],
  },
  {
    name: "Custom Software",
    price: "Scoped after discovery",
    summary:
      "For businesses replacing manual work with a system built around their process.",
    points: ["Workflow planning", "Frontend and backend", "Deployment support"],
  },
];

export function PricingPreviewSection() {
  return (
    <section className="gx-pricing-preview">
      <div className="gx-pricing-shell">
        <div className="gx-pricing-heading">
          <span>Project clarity</span>
          <h2>Know the starting point before you contact us.</h2>
          <p>
            Every project is different, but clients should not have to guess the
            budget range. These starting points help us talk clearly from the
            first conversation.
          </p>
        </div>

        <div className="gx-pricing-grid">
          {packages.map((item) => (
            <article key={item.name} className="gx-pricing-card">
              <div>
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
                <p>{item.summary}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={17} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="gx-pricing-note">
          <p>
            You can share your idea even if the scope is not final. We will help
            separate must-have features from future improvements.
          </p>
          <Link href="/contact">
            Get project estimate
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
