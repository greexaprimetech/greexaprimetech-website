import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Diwan",
    role: "CEO, SAS",
    content:
      "Greexa PrimeTech gave our animation studio website the visual quality we wanted. The pages feel polished, responsive, and clear for clients exploring our creative work.",
    initials: "RK",
    metric: "Studio website",
  },
  {
    name: "Vishwas Dornala",
    role: "Owner, Shiva Gold",
    content:
      "The billing system made our daily work much smoother. It is easier to prepare bills, manage records, and keep the shop process organized without confusion.",
    initials: "VS",
    metric: "Billing system",
  },
  {
    name: "Sharath Baradi",
    role: "Owner, Gopi & Son's Emporium",
    content:
      "Our inventory management is now much easier to track. The system helps us see stock clearly, reduce manual checking, and manage store operations with confidence.",
    initials: "SH",
    metric: "Inventory system",
  },
];

export function TestimonialsSection() {
  return (
    <section className="premium-section premium-testimonials-section relative overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-100/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="premium-heading premium-section-heading flex flex-col items-center gap-4 text-center">
          <span className="inline-flex rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-700">
            Client trust
          </span>
          <h2 className="gradient-text text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Clear communication, reliable delivery, and software that supports
            real business work.
          </p>
        </div>

        <div className="premium-card-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="premium-card premium-testimonial-card group flex min-h-[330px] flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition"
            >
              <div className="premium-testimonial-glow" />

              <div className="premium-testimonial-top">
                <div className="premium-testimonial-quote flex h-12 w-12 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-700">
                  <Quote className="h-6 w-6" />
                </div>
                <span className="premium-testimonial-index">0{index + 1}</span>
              </div>

              <p className="premium-testimonial-copy mt-7 leading-7 text-slate-600">
                "{testimonial.content}"
              </p>

              <div className="premium-testimonial-author mt-8 flex items-center gap-4 border-t border-slate-200 pt-7">
                <div className="premium-testimonial-avatar flex h-14 w-14 items-center justify-center rounded-full border-2 border-white p-2 text-sm font-extrabold">
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <h4 className="truncate font-extrabold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="truncate text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

                <span className="premium-testimonial-metric ml-auto hidden rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] sm:inline-flex">
                  {testimonial.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
