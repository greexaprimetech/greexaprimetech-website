import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Node.js, Next.js, TypeScript, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on complexity. A simple web application typically takes 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your application stays updated, secure, and performs optimally.",
  },
  {
    question: "Can you work with existing codebases?",
    answer:
      "Absolutely! We have extensive experience in working with existing applications, whether it is adding new features, refactoring code, or optimizing performance.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Contact us for a customized quote based on your specific needs.",
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
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to common questions before starting your project.
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
