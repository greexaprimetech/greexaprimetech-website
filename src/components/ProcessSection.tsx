import {
  ClipboardCheck,
  Code2,
  Layers3,
  Rocket,
  SearchCheck,
} from "lucide-react";
import type { CSSProperties } from "react";

const processSteps = [
  {
    icon: <SearchCheck className="h-5 w-5" />,
    title: "Discovery",
    description:
      "We map business goals, user needs, feature priorities, and technical risks before design starts.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Design",
    description:
      "We shape clean user flows, responsive screens, and polished interface details for the product.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Develop",
    description:
      "We build the frontend, backend, integrations, and admin workflows with maintainable code.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Test",
    description:
      "We review quality, responsiveness, performance, and core user journeys before launch.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Deploy",
    description:
      "We prepare launch, deployment, handoff, and post-launch refinements so the release feels smooth.",
  },
];

export function ProcessSection() {
  return (
    <section className="premium-section premium-process-section relative overflow-hidden bg-[#f8fbff] px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="premium-heading premium-section-heading flex flex-col items-center gap-4 text-center">
          <span className="inline-flex rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-teal-700">
            Delivery path
          </span>
          <h2 className="gradient-text text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A practical delivery system for moving from idea to launch with
            clarity, polish, and reliable execution.
          </p>
        </div>

        <div className="premium-process-timeline">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="premium-process-item"
              style={{ "--process-index": index } as CSSProperties}
            >
              <div className="premium-process-marker">
                <span>{index + 1}</span>
              </div>

              <div className="premium-card premium-process-card group">
                <div className="premium-process-card-glow" />
                <div className="premium-process-icon">{step.icon}</div>
                <div>
                  <span className="premium-process-kicker">
                    Step 0{index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
