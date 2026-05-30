import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Film, MonitorCog } from "lucide-react";
import SAS from "../Images/SAS.png";
const projects = [
  {
    icon: <Film className="h-6 w-6" />,
    title: "Start Animation Studio Website",
    category: "Creative Studio Website",
    description:
      "A polished portfolio website for an animation studio, built to showcase services, projects, and brand storytelling.",
    tags: [
      "React",
      "Tailwind CSS",
      "Animation",
      "HTML",
      "CSS",
      "Redux",
      "TypeScript",
      "EmailJS",
    ],
    accent: "teal",
    image: SAS,
  },
  {
    icon: <MonitorCog className="h-6 w-6" />,
    title: "Enterprise ERP System",
    category: "Web",
    description:
      "Comprehensive ERP solution for manufacturing with real-time analytics.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    accent: "sky",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics Admin Dashboard",
    category: "Admin",
    description:
      "Feature-rich admin panel with data visualization and reporting.",
    tags: ["React", "Chart.js", "Material UI", "REST API"],
    accent: "indigo",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="featured-projects-section premium-section relative overflow-hidden bg-[#f8fbff] px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="premium-heading premium-section-heading mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-700">
            Selected builds
          </span>
          <h2 className="gradient-text mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A focused look at the kinds of websites, dashboards, and business
            systems Greexa Primetech can build.
          </p>
        </div>

        <div className="premium-card-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`premium-card premium-project-card premium-project-card-${project.accent} group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition`}
            >
              <div className="premium-project-preview relative min-h-[310px] p-6">
                <div className="premium-project-orbit" />
                <div className="premium-project-icon absolute z-10 flex h-12 w-12 items-center justify-center rounded-lg border bg-white shadow-sm">
                  {project.icon}
                </div>

                <div className="premium-project-browser relative h-full overflow-hidden rounded-lg border bg-white/95 p-4 shadow-sm">
                  <div className="premium-project-browser-bar mb-3 flex items-center gap-1.5 border-b border-slate-100 pb-3">
                    <span className="premium-project-dot h-2 w-2 rounded-full" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="ml-auto h-2 w-16 rounded-full bg-slate-100" />
                  </div>

                  <div className="featured-project-image-frame relative overflow-hidden rounded-lg border border-slate-100 bg-slate-100 shadow-sm">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-4 grid gap-2 opacity-80">
                    <span className="h-2.5 w-full rounded-full bg-slate-200" />
                    <span className="h-2.5 w-3/4 rounded-full bg-slate-200" />
                    <span className="premium-project-line h-2.5 w-1/2 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="premium-project-content flex flex-1 flex-col p-6 pt-5">
                <span className="premium-project-category w-fit rounded-full border px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em]">
                  {project.category}
                </span>
                <h3 className="premium-project-title text-xl font-extrabold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="premium-project-tags mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/portfolio"
                  className="premium-project-link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-extrabold"
                >
                  View project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .featured-projects-section .premium-project-preview {
          height: auto !important;
          min-height: 310px;
          padding: 1.5rem !important;
        }

        .featured-projects-section .premium-project-browser {
          display: flex;
          flex-direction: column;
          padding: 1rem !important;
        }

        .featured-projects-section .featured-project-image-frame {
          height: 176px;
          width: 100%;
          flex: 0 0 176px;
        }

        .featured-projects-section .featured-project-image-frame img {
          object-position: top center;
        }

        .featured-projects-section .premium-project-icon {
          left: 1.5rem;
          top: 1.5rem;
        }

        .featured-projects-section .premium-project-browser-bar {
          padding-left: 3.5rem;
        }

        .featured-projects-section .premium-project-title {
          max-width: 100%;
          line-height: 1.08;
        }

        @media (max-width: 640px) {
          .featured-projects-section .premium-project-preview {
            min-height: 260px;
            padding: 1rem !important;
          }

          .featured-projects-section .premium-project-browser {
            padding: 0.85rem !important;
          }

          .featured-projects-section .featured-project-image-frame {
            height: 154px;
            flex-basis: 154px;
          }

          .featured-projects-section .premium-project-icon {
            left: 1rem !important;
            top: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
