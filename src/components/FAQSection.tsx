import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does a business website usually cost?",
    answer:
      "A clean business website usually starts from ₹15,000. The final cost depends on page count, content, form requirements, animations, SEO depth, and whether you need integrations like WhatsApp, email, payment, or admin access.",
  },
  {
    question: "How long does a website or software project take?",
    answer:
      "A focused website can often be completed in 1-3 weeks after content and scope are clear. Admin panels and custom software usually take longer because workflows, roles, data, testing, and deployment need careful planning.",
  },
  {
    question: "Can you help if I only have a rough idea?",
    answer:
      "Yes. Many clients start with a rough problem, not a full document. We help convert that into a clear first version: must-have features, optional features, user flow, budget range, and launch plan.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide practical support after launch for fixes, minor improvements, hosting guidance, performance checks, and feature planning. Larger ongoing work can be handled as a maintenance plan.",
  },
  {
    question: "Will I get source code and deployment help?",
    answer:
      "Yes, project handover can include source code, deployment details, basic documentation, and walkthrough support. The exact handover details are confirmed before development starts.",
  },
];

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="premium-section premium-faq-section relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute -left-28 top-32 h-72 w-72 rounded-full bg-teal-100/70 blur-3xl" />
        <div className="absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="premium-heading premium-section-heading text-center">
          <span className="inline-flex rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">
            Help center
          </span>
          <h2 className="gradient-text mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Questions clients ask before starting
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Clear answers about budget, timeline, support, and how we move from
            idea to launch.
          </p>
        </div>

        <div className="premium-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <article
                key={faq.question}
                className={`premium-card premium-faq-card ${
                  isOpen ? "is-open" : ""
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="premium-faq-button"
                  aria-expanded={isOpen}
                >
                  <span className="premium-faq-icon">
                    <HelpCircle className="h-5 w-5" />
                  </span>
                  <span className="premium-faq-question">{faq.question}</span>
                  <span className="premium-faq-toggle">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <div
                  className="premium-faq-answer"
                  aria-hidden={!isOpen}
                >
                  <div>
                    <p className="leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
