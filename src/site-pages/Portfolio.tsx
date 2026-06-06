"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties } from "react";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, ExternalLink, X } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import SAS from "../Images/SAS.png";
import AnalyticsAdminImage from "../Images/portfolio/Analytics Admin.webp";
import EnterpriseERPImage from "../Images/portfolio/EnterpriseERPSystem.webp";
import FoodDeliveryImage from "../Images/portfolio/Food Delivery.webp";
import GraphQLGatewayImage from "../Images/portfolio/GraphQL API Gateway.webp";
import HealthcareImage from "../Images/portfolio/Healthcare.webp";
import InventoryManagementImage from "../Images/portfolio/Inventory Management.webp";
import LuxuryFashionImage from "../Images/portfolio/Luxury Fashion.webp";
import RESTfulAPIImage from "../Images/portfolio/RESTful API.webp";
import SubscriptionImage from "../Images/portfolio/Subscription.webp";
import { SEO } from "../components/SEO";

type ProjectCategory = "All" | "Web" | "Admin" | "Ecommerce" | "API";

interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  shortDesc: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const categories: ProjectCategory[] = [
  "All",
  "Web",
  "Admin",
  "Ecommerce",
  "API",
];

// const projects: Project[] = [
//   {
//     id: 10,
//     title: "Start Animation Studio Website",
//     category: "Web",
//     shortDesc:
//       "Responsive animation studio website with immersive visuals, polished motion, and enquiry handling",
//     image: SAS,
//     tags: ["React", "Tailwind CSS", "Redux", "TypeScript"],
//     challenge:
//       "An animation studio needed a premium website that could present visual work clearly, feel cinematic, and make it easy for clients to send project enquiries.",
//     solution:
//       "We built a responsive studio website with React and TypeScript, Tailwind CSS styling, animation-focused UI details, Redux state handling, and EmailJS-powered contact flows.",
//     results: [
//       "Polished visual-first presentation for studio services",
//       "Responsive layout across desktop, tablet, and mobile",
//       "Smooth animated sections for stronger brand storytelling",
//       "Direct enquiry flow powered by EmailJS",
//     ],
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "HTML",
//       "CSS",
//       "Animation",
//       "Redux",
//       "EmailJS",
//     ],
//   },
//   {
//     id: 1,
//     title: "Enterprise ERP System",
//     category: "Web",
//     shortDesc:
//       "Comprehensive ERP solution for manufacturing with real-time analytics",
//     image: EnterpriseERPImage,
//     tags: ["React", "Node.js", "PostgreSQL", "Redis"],
//     challenge:
//       "A large manufacturing company needed a custom ERP system to manage inventory, production, sales, and accounting in real-time across multiple locations.",
//     solution:
//       "We developed a comprehensive web-based ERP system with modules for inventory management, production planning, sales tracking, and financial reporting. The system features real-time data synchronization, role-based access control, and advanced analytics dashboards.",
//     results: [
//       "40% reduction in inventory management time",
//       "Real-time visibility across 5 manufacturing facilities",
//       "99.9% system uptime",
//       "Seamless integration with existing accounting software",
//     ],
//     technologies: [
//       "React",
//       "TypeScript",
//       "Node.js",
//       "Express",
//       "PostgreSQL",
//       "Redis",
//       "Socket.io",
//       "AWS",
//     ],
//   },
//   {
//     id: 2,
//     title: "Luxury Fashion E-commerce",
//     category: "Ecommerce",
//     shortDesc:
//       "High-end fashion marketplace with advanced filtering and premium checkout",
//     image: LuxuryFashionImage,
//     tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
//     challenge:
//       "A luxury fashion brand wanted to create an exclusive online shopping experience with advanced product visualization and seamless checkout.",
//     solution:
//       "We built a premium e-commerce platform featuring advanced product filtering, high-resolution image galleries, size recommendation engine, secure payment processing with multiple gateways, and an intuitive admin panel for inventory management.",
//     results: [
//       "200% increase in online sales within 6 months",
//       "Average order value increased by 35%",
//       "4.8/5 customer satisfaction rating",
//       "Mobile conversion rate of 3.2%",
//     ],
//     technologies: [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "MongoDB",
//       "Stripe API",
//       "PayPal",
//       "AWS S3",
//       "CloudFront",
//     ],
//   },
//   {
//     id: 3,
//     title: "Analytics Admin Dashboard",
//     category: "Admin",
//     shortDesc: "Feature-rich admin panel with data visualization and reporting",
//     image: AnalyticsAdminImage,
//     tags: ["React", "Chart.js", "Material UI", "REST API"],
//     challenge:
//       "A SaaS company needed a comprehensive admin dashboard to manage users, monitor system health, and generate detailed analytics reports.",
//     solution:
//       "We created a powerful admin panel with interactive data visualizations, user management, role-based permissions, real-time monitoring, and customizable report generation. The dashboard includes advanced filtering, export capabilities, and automated alerts.",
//     results: [
//       "Reduced admin task time by 60%",
//       "Real-time monitoring of 10,000+ active users",
//       "Automated weekly reports saving 15 hours/week",
//       "Custom dashboard widgets for different roles",
//     ],
//     technologies: [
//       "React",
//       "Material UI",
//       "Chart.js",
//       "Recharts",
//       "Node.js",
//       "PostgreSQL",
//       "Redis",
//     ],
//   },
//   {
//     id: 4,
//     title: "Food Delivery Platform",
//     category: "Web",
//     shortDesc: "Multi-vendor food ordering system with real-time tracking",
//     image: FoodDeliveryImage,
//     tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
//     challenge:
//       "A startup wanted to create a food delivery platform connecting restaurants, delivery partners, and customers with real-time order tracking.",
//     solution:
//       "We developed a comprehensive food delivery ecosystem with separate interfaces for customers, restaurants, and delivery partners. Features include real-time order tracking, intelligent routing, payment integration, review system, and analytics for all stakeholders.",
//     results: [
//       "50+ restaurants onboarded in first 3 months",
//       "5,000+ orders processed monthly",
//       "Average delivery time of 32 minutes",
//       "4.6/5 average customer rating",
//     ],
//     technologies: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "Socket.io",
//       "Stripe",
//       "Google Maps API",
//       "AWS",
//     ],
//   },
//   {
//     id: 5,
//     title: "RESTful API for Mobile App",
//     category: "API",
//     shortDesc: "Scalable backend API serving 100K+ daily requests",
//     image: RESTfulAPIImage,
//     tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
//     challenge:
//       "A mobile app startup needed a robust, scalable API to handle user authentication, data management, and third-party integrations.",
//     solution:
//       "We designed and implemented a RESTful API with comprehensive documentation, JWT-based authentication, rate limiting, caching strategies, and automated testing. The API is containerized with Docker and deployed on AWS with auto-scaling capabilities.",
//     results: [
//       "Handles 100,000+ daily API requests",
//       "Average response time of 120ms",
//       "99.95% uptime",
//       "Scales automatically based on load",
//     ],
//     technologies: [
//       "Node.js",
//       "Express",
//       "PostgreSQL",
//       "Redis",
//       "Docker",
//       "Kubernetes",
//       "AWS ECS",
//       "Swagger",
//     ],
//   },
//   {
//     id: 6,
//     title: "Healthcare Portal",
//     category: "Web",
//     shortDesc: "Patient management system with telemedicine capabilities",
//     image: HealthcareImage,
//     tags: ["React", "Node.js", "PostgreSQL", "WebRTC"],
//     challenge:
//       "A healthcare provider needed a HIPAA-compliant portal for patient management, appointment scheduling, and telemedicine consultations.",
//     solution:
//       "We built a secure healthcare portal with patient records management, appointment booking, video consultations, prescription management, and billing integration. The system ensures data encryption, audit trails, and compliance with healthcare regulations.",
//     results: [
//       "2,000+ patients registered",
//       "500+ telemedicine consultations monthly",
//       "HIPAA compliant with regular audits",
//       "30% reduction in no-show appointments",
//     ],
//     technologies: [
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "WebRTC",
//       "AWS",
//       "Twilio",
//       "Stripe",
//     ],
//   },
//   {
//     id: 7,
//     title: "Inventory Management System",
//     category: "Admin",
//     shortDesc: "Multi-location inventory tracking with barcode scanning",
//     image: InventoryManagementImage,
//     tags: ["React", "Python", "MySQL", "Barcode"],
//     challenge:
//       "A retail chain needed to track inventory across multiple locations with real-time updates and automated reordering.",
//     solution:
//       "We developed a comprehensive inventory management system with barcode scanning, multi-location tracking, automated reorder points, supplier management, and detailed reporting. The system integrates with existing POS systems and accounting software.",
//     results: [
//       "Tracking 50,000+ SKUs across 15 locations",
//       "25% reduction in stock-outs",
//       "Automated reordering saving 10 hours/week",
//       "Real-time inventory visibility",
//     ],
//     technologies: [
//       "React",
//       "Python",
//       "Django",
//       "MySQL",
//       "Redis",
//       "Barcode Scanner API",
//     ],
//   },
//   {
//     id: 8,
//     title: "GraphQL API Gateway",
//     category: "API",
//     shortDesc: "Unified API gateway for microservices architecture",
//     image: GraphQLGatewayImage,
//     tags: ["GraphQL", "Node.js", "Microservices", "Docker"],
//     challenge:
//       "An enterprise needed to unify multiple microservices behind a single GraphQL API gateway with authentication and caching.",
//     solution:
//       "We implemented a GraphQL API gateway that aggregates data from multiple microservices, provides schema stitching, implements authentication and authorization, and includes intelligent caching strategies. The gateway is containerized and deployed on Kubernetes.",
//     results: [
//       "Unified access to 12 microservices",
//       "50% reduction in API calls",
//       "Improved developer experience",
//       "Consistent error handling across services",
//     ],
//     technologies: [
//       "GraphQL",
//       "Apollo Server",
//       "Node.js",
//       "Redis",
//       "Docker",
//       "Kubernetes",
//       "AWS",
//     ],
//   },
//   {
//     id: 9,
//     title: "Subscription Management Platform",
//     category: "Ecommerce",
//     shortDesc: "Recurring billing system for subscription-based business",
//     image: SubscriptionImage,
//     tags: ["Next.js", "Stripe", "PostgreSQL", "Webhooks"],
//     challenge:
//       "A SaaS company needed a robust subscription management system with multiple pricing tiers, trial periods, and automated billing.",
//     solution:
//       "We built a complete subscription platform with plan management, automated billing, proration handling, dunning management, usage tracking, and a customer portal. The system integrates with Stripe for payment processing and includes comprehensive analytics.",
//     results: [
//       "5,000+ active subscriptions",
//       "98% payment success rate",
//       "Automated dunning recovering $50K annually",
//       "Customer self-service reducing support by 40%",
//     ],
//     technologies: [
//       "Next.js",
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "Stripe API",
//       "Webhooks",
//       "AWS Lambda",
//     ],
//   },
// ];

const projects: Project[] = [
  {
    id: 10,
    title: "Start Animation Studio Website",
    category: "Web",
    shortDesc:
      "Professional website for an animation studio with service showcase and enquiry flow",
    image: SAS.src,
    tags: ["React", "Tailwind CSS", "TypeScript", "EmailJS"],
    challenge:
      "The studio needed a clean and professional website to present its services, creative work, and contact details in a way that looks trustworthy to potential clients.",
    solution:
      "We developed a responsive website with a modern layout, service sections, project showcase, contact form, and smooth navigation across desktop and mobile devices.",
    results: [
      "Professional online presence for the studio",
      "Clear service and portfolio presentation",
      "Mobile-friendly experience for visitors",
      "Easy enquiry flow through the contact form",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "EmailJS",
    ],
  },
  {
    id: 1,
    title: "Business Management Dashboard",
    category: "Admin",
    shortDesc:
      "Custom dashboard concept for managing business operations and reports",
    image: EnterpriseERPImage.src,
    tags: ["React", "Node.js", "PostgreSQL", "Dashboard"],
    challenge:
      "Small and growing businesses often manage data through Excel sheets, WhatsApp messages, and manual records, which makes tracking work slow and confusing.",
    solution:
      "We designed a centralized web dashboard where business users can manage records, view summaries, track activities, and access important reports from one place.",
    results: [
      "Centralized business data management",
      "Cleaner workflow compared to manual tracking",
      "Role-based access for different users",
      "Report-ready structure for daily operations",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST API",
    ],
  },
  {
    id: 2,
    title: "E-commerce Storefront",
    category: "Ecommerce",
    shortDesc:
      "Responsive online store design with product listing and checkout-ready flow",
    image: LuxuryFashionImage.src,
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    challenge:
      "A retail business needed a professional online storefront to display products, categories, pricing, and customer enquiry or order options.",
    solution:
      "We created an e-commerce website structure with product listing, category filtering, product detail pages, cart flow, and payment gateway-ready architecture.",
    results: [
      "Professional product presentation",
      "Mobile-friendly shopping experience",
      "Organized product categories and details",
      "Scalable base for future payment integration",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST API",
      "Payment Gateway",
    ],
  },
  {
    id: 3,
    title: "Analytics Admin Panel",
    category: "Admin",
    shortDesc:
      "Admin dashboard for viewing users, reports, charts, and business activity",
    image: AnalyticsAdminImage.src,
    tags: ["React", "Charts", "Admin Panel", "REST API"],
    challenge:
      "The client needed a simple way to view business records, user activity, and key reports without checking multiple files or manual records.",
    solution:
      "We built an admin panel layout with dashboard cards, tables, filters, charts, and report sections to make business data easier to understand.",
    results: [
      "Quick overview of important business data",
      "Searchable and filterable records",
      "Chart-based reporting interface",
      "Admin-friendly layout for daily use",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "Node.js",
      "REST API",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "Food Ordering Website",
    category: "Web",
    shortDesc:
      "Restaurant ordering website concept with menu, cart, and order flow",
    image: FoodDeliveryImage.src,
    tags: ["React", "Node.js", "MongoDB", "Orders"],
    challenge:
      "Restaurants and cafes need a simple digital ordering system where customers can view the menu and place enquiries or orders online.",
    solution:
      "We created a responsive food ordering website structure with menu categories, item details, cart flow, order summary, and admin-ready order management.",
    results: [
      "Digital menu experience for customers",
      "Mobile-friendly ordering flow",
      "Clear item and pricing presentation",
      "Expandable structure for delivery features",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
  },
  {
    id: 5,
    title: "Backend API Development",
    category: "API",
    shortDesc: "Secure backend API structure for web and mobile applications",
    image: RESTfulAPIImage.src,
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    challenge:
      "A web or mobile application needs a reliable backend to manage users, authentication, database records, and communication between frontend and server.",
    solution:
      "We developed a backend API structure with authentication, database models, validation, protected routes, and clean API endpoints for frontend integration.",
    results: [
      "Structured backend foundation",
      "Secure login and protected API routes",
      "Database-ready architecture",
      "Easy integration with frontend applications",
    ],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "REST API",
      "Postman",
    ],
  },
  {
    id: 6,
    title: "Healthcare Appointment Portal",
    category: "Web",
    shortDesc:
      "Clinic website concept with appointment booking and patient enquiry flow",
    image: HealthcareImage.src,
    tags: ["React", "Node.js", "PostgreSQL", "Appointments"],
    challenge:
      "Clinics need an easy way for patients to check services, doctor availability, and send appointment requests without calling repeatedly.",
    solution:
      "We designed a healthcare portal structure with service pages, appointment request form, patient enquiry flow, and admin-ready appointment management.",
    results: [
      "Clear presentation of clinic services",
      "Simple appointment request flow",
      "Mobile-friendly patient experience",
      "Expandable base for future admin panel",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST API"],
  },
  {
    id: 7,
    title: "Inventory Management System",
    category: "Admin",
    shortDesc:
      "Inventory dashboard concept for stock tracking and product management",
    image: InventoryManagementImage.src,
    tags: ["React", "Node.js", "MySQL", "Inventory"],
    challenge:
      "Businesses that manage products manually often face stock mismatch, delayed updates, and difficulty tracking available quantities.",
    solution:
      "We built an inventory management dashboard concept with product records, stock updates, category management, supplier details, and report-ready views.",
    results: [
      "Organized product and stock records",
      "Simple stock update workflow",
      "Category-wise inventory management",
      "Useful reporting structure for admins",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "REST API"],
  },
  {
    id: 8,
    title: "API Gateway Structure",
    category: "API",
    shortDesc:
      "Backend gateway concept for connecting multiple services through one API layer",
    image: GraphQLGatewayImage.src,
    tags: ["Node.js", "GraphQL", "Microservices", "API"],
    challenge:
      "Growing applications may have multiple backend services, making frontend integration difficult when each service has separate endpoints.",
    solution:
      "We created an API gateway approach that organizes service communication through a single backend layer with authentication, validation, and clean response handling.",
    results: [
      "Cleaner frontend-to-backend communication",
      "Centralized API handling",
      "Better structure for future microservices",
      "Simplified integration approach",
    ],
    technologies: [
      "Node.js",
      "GraphQL",
      "Express",
      "REST API",
      "Authentication",
    ],
  },
  {
    id: 9,
    title: "Subscription Billing Platform",
    category: "Ecommerce",
    shortDesc:
      "Subscription-based platform concept with plans, billing, and user access",
    image: SubscriptionImage.src,
    tags: ["React", "Node.js", "PostgreSQL", "Billing"],
    challenge:
      "Subscription-based businesses need a system to manage plans, users, billing status, renewals, and access control in one place.",
    solution:
      "We designed a subscription management platform structure with plan selection, customer records, billing status, renewal tracking, and payment gateway-ready flow.",
    results: [
      "Organized subscription plan management",
      "Customer and billing status tracking",
      "Payment gateway-ready architecture",
      "Scalable base for SaaS-style products",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Payment Gateway",
      "REST API",
    ],
  },
];
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory],
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const onChange = () => setIsCompact(query.matches);

    onChange();
    query.addEventListener?.("change", onChange);
    return () => query.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <PageLayout>
      <SEO
        title="Software Development Portfolio | Greexa PrimeTech Projects"
        description="View Greexa PrimeTech projects including websites, web applications, dashboards, SaaS platforms, CRM systems, and business automation software."
        keywords="software development portfolio, website development portfolio, web application projects, SaaS projects, CRM software projects, Greexa PrimeTech portfolio"
        canonical="https://www.greexaprimetech.com/portfolio"
      />
      <style>
        {`
          @supports not (height: 100dvh) {
            .portfolio-modal-backdrop {
              height: 100svh !important;
            }
          }

          .portfolio-hidden-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .portfolio-hidden-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <section style={styles.heroSection}>
        <div style={styles.shell}>
          <div style={styles.heroCard}>
            <div style={styles.heroGlowOne} />
            <div style={styles.heroGlowTwo} />
            <span style={styles.eyebrow}>Selected work</span>
            <h1 style={styles.heroTitle}>Our Work</h1>
            <p style={styles.heroText}>
              Clean, scalable web products built for teams that need polished
              interfaces, reliable systems, and measurable business outcomes.
            </p>

            <div style={styles.heroStats}>
              <Stat value="09" label="Featured builds" />
              <Stat value="4" label="Service categories" />
              <Stat value="99%" label="Quality focus" />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.filterSection}>
        <div style={styles.shell}>
          <div style={styles.filterBar} aria-label="Portfolio filters">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.filterButton,
                    ...(isActive ? styles.filterButtonActive : {}),
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section style={styles.projectsSection}>
        <div style={styles.shell}>
          <div style={styles.sectionHeader}>
            <span style={styles.eyebrow}>Case studies</span>
            <h2 style={styles.sectionTitle}>Built with clarity and craft</h2>
            <p style={styles.sectionText}>
              Each project is shaped around business workflow, clean UI, and a
              technical foundation that can grow after launch.
            </p>
          </div>

          <div style={styles.projectGrid}>
            {filteredProjects.map((project) => {
              const isHovered = hoveredProject === project.id;
              return (
                <article
                  key={project.id}
                  style={{
                    ...styles.projectCard,
                    ...(isHovered ? styles.projectCardHover : {}),
                  }}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <div style={styles.imageWrap}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        ...styles.projectImage,
                        transform: isHovered ? "scale(1.06)" : "scale(1)",
                      }}
                    />
                    <div style={styles.imageOverlay} />
                    <span style={styles.categoryPill}>{project.category}</span>
                  </div>

                  <div style={styles.cardBody}>
                    <div>
                      <h3 style={styles.cardTitle}>{project.title}</h3>
                      <p style={styles.cardText}>{project.shortDesc}</p>
                    </div>

                    <div style={styles.tags}>
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} style={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span style={styles.cardLink}>
                      View case study <ExternalLink size={17} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isCompact={isCompact}
        />
      )}
    </PageLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={styles.statBox}>
      <strong style={styles.statValue}>{value}</strong>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  isCompact,
}: {
  project: Project;
  onClose: () => void;
  isCompact: boolean;
}) {
  return createPortal(
    <div
      className="portfolio-modal-backdrop"
      style={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="portfolio-hidden-scrollbar"
        style={{
          ...styles.modalPanel,
          ...(isCompact ? styles.modalPanelCompact : {}),
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close portfolio case study"
          onClick={onClose}
          style={styles.closeButton}
        >
          <X size={22} />
        </button>

        <div
          style={{
            ...styles.modalImageWrap,
            ...(isCompact ? styles.modalImageWrapCompact : {}),
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={styles.modalImage}
          />
          <div style={styles.modalImageShade} />
          <div style={styles.modalImageContent}>
            <span style={styles.modalCategory}>{project.category}</span>
            <h2 style={styles.modalImageTitle}>{project.title}</h2>
          </div>
        </div>

        <div className="portfolio-hidden-scrollbar" style={styles.modalContent}>
          <div>
            <span style={styles.modalContentPill}>Case study</span>
            <h2 style={styles.modalTitle}>{project.title}</h2>
            <p style={styles.modalIntro}>{project.shortDesc}</p>
          </div>

          <div style={styles.modalGrid}>
            <CaseBlock title="The Challenge" text={project.challenge} />
            <CaseBlock title="Our Solution" text={project.solution} />
          </div>

          <div style={styles.resultsCard}>
            <h3 style={styles.blockTitle}>Results delivered</h3>
            <div style={styles.resultsGrid}>
              {project.results.map((result) => (
                <div key={result} style={styles.resultItem}>
                  <CheckCircle2 size={19} color="#0f766e" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.techCard}>
            <h3 style={styles.techTitle}>
              <Code2 size={21} /> Technologies used
            </h3>
            <div style={styles.tags}>
              {project.technologies.map((tech) => (
                <span key={tech} style={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={styles.modalFooter}>
            <Link href="/contact" style={styles.darkButton} onClick={onClose}>
              Start a similar project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.caseBlock}>
      <h3 style={styles.blockTitle}>{title}</h3>
      <p style={styles.blockText}>{text}</p>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  shell: {
    width: "min(100% - 32px, 1280px)",
    margin: "0 auto",
  },
  heroSection: {
    padding: "56px 0 24px",
  },
  heroCard: {
    position: "relative",
    overflow: "hidden",
    minHeight: 360,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid rgba(20, 184, 166, 0.24)",
    borderRadius: 28,
    padding: "clamp(38px, 6vw, 78px) 24px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(239,253,252,0.78) 48%, rgba(239,246,255,0.9))",
    boxShadow:
      "0 30px 90px rgba(15, 23, 42, 0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
  },
  heroGlowOne: {
    position: "absolute",
    width: 420,
    height: 420,
    left: -130,
    top: -160,
    borderRadius: "50%",
    background: "rgba(20, 184, 166, 0.16)",
    filter: "blur(22px)",
  },
  heroGlowTwo: {
    position: "absolute",
    width: 460,
    height: 460,
    right: -170,
    bottom: -220,
    borderRadius: "50%",
    background: "rgba(14, 165, 233, 0.15)",
    filter: "blur(24px)",
  },
  eyebrow: {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    marginBottom: 18,
    padding: "10px 18px",
    border: "1px solid rgba(20, 184, 166, 0.24)",
    borderRadius: 999,
    background: "rgba(236, 253, 245, 0.72)",
    color: "#0f766e",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 2.2,
    textTransform: "uppercase",
  },
  heroTitle: {
    position: "relative",
    zIndex: 1,
    margin: 0,
    color: "#0f172a",
    fontSize: "clamp(54px, 8vw, 112px)",
    lineHeight: 0.9,
    fontWeight: 950,
    letterSpacing: "-0.04em",
  },
  heroText: {
    position: "relative",
    zIndex: 1,
    width: "min(760px, 100%)",
    margin: "26px auto 0",
    color: "#475569",
    fontSize: "clamp(18px, 2vw, 24px)",
    lineHeight: 1.55,
  },
  heroStats: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: 14,
    width: "min(680px, 100%)",
    marginTop: 34,
  },
  statBox: {
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 18,
    padding: "18px 16px",
    background: "rgba(255,255,255,0.66)",
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.07)",
  },
  statValue: {
    display: "block",
    color: "#0f766e",
    fontSize: 28,
    lineHeight: 1,
    fontWeight: 950,
  },
  statLabel: {
    display: "block",
    marginTop: 7,
    color: "#64748b",
    fontSize: 14,
    fontWeight: 800,
  },
  filterSection: {
    padding: "20px 0 26px",
  },
  filterBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    padding: 10,
    width: "fit-content",
    maxWidth: "100%",
    margin: "0 auto",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 999,
    background: "rgba(255,255,255,0.82)",
    boxShadow: "0 18px 55px rgba(15, 23, 42, 0.08)",
  },
  filterButton: {
    border: "1px solid transparent",
    borderRadius: 999,
    padding: "13px 20px",
    background: "transparent",
    color: "#334155",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 900,
    transition: "all 220ms ease",
  },
  filterButtonActive: {
    color: "#ffffff",
    background: "linear-gradient(135deg, #0f172a, #115e59)",
    boxShadow: "0 16px 34px rgba(15, 23, 42, 0.18)",
  },
  projectsSection: {
    padding: "28px 0 96px",
  },
  sectionHeader: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 34,
  },
  sectionTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: "clamp(34px, 5vw, 64px)",
    lineHeight: 1,
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },
  sectionText: {
    maxWidth: 720,
    margin: "18px auto 0",
    color: "#64748b",
    fontSize: 19,
    lineHeight: 1.55,
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
    justifyContent: "center",
    gap: 26,
    alignItems: "stretch",
  },
  projectCard: {
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(15, 23, 42, 0.08)",
    borderRadius: 26,
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.09)",
    cursor: "pointer",
    transition:
      "transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease",
    outline: "none",
  },
  projectCardHover: {
    transform: "translateY(-8px)",
    borderColor: "rgba(20, 184, 166, 0.34)",
    boxShadow: "0 34px 95px rgba(15, 23, 42, 0.14)",
  },
  imageWrap: {
    position: "relative",
    height: 245,
    overflow: "hidden",
    background: "#0f172a",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 500ms ease",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.42))",
  },
  categoryPill: {
    position: "absolute",
    top: 18,
    left: 18,
    padding: "9px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.9)",
    color: "#0f766e",
    border: "1px solid rgba(20, 184, 166, 0.24)",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  cardBody: {
    minHeight: 270,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    padding: 26,
  },
  cardTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: 27,
    lineHeight: 1.08,
    fontWeight: 950,
    letterSpacing: "-0.025em",
  },
  cardText: {
    margin: "12px 0 0",
    color: "#64748b",
    fontSize: 16,
    lineHeight: 1.58,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 9,
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    border: "1px solid rgba(20, 184, 166, 0.2)",
    borderRadius: 999,
    padding: "8px 12px",
    background: "rgba(240, 253, 250, 0.72)",
    color: "#1f2937",
    fontSize: 13,
    fontWeight: 850,
  },
  cardLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    width: "fit-content",
    color: "#0f766e",
    fontSize: 16,
    fontWeight: 950,
  },
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100svh",
    height: "100dvh",
    padding:
      "max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left))",
    background: "rgba(15, 23, 42, 0.72)",
    backdropFilter: "blur(14px)",
    overflowY: "auto",
    overscrollBehavior: "contain",
  },
  modalPanel: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "minmax(300px, 0.82fr) minmax(0, 1.18fr)",
    width: "min(100%, 1180px)",
    maxHeight: "calc(100dvh - 24px)",
    overflowY: "auto",
    overflowX: "hidden",
    border: "1px solid rgba(255,255,255,0.42)",
    borderRadius: 28,
    background: "#f8fbff",
    boxShadow: "0 38px 110px rgba(0,0,0,0.36)",
  },
  modalPanelCompact: {
    display: "block",
    maxHeight: "calc(100dvh - 24px)",
  },
  closeButton: {
    position: "absolute",
    top: 18,
    right: 18,
    zIndex: 3,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    border: "1px solid rgba(255,255,255,0.48)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.9)",
    color: "#0f172a",
    cursor: "pointer",
    boxShadow: "0 12px 34px rgba(15,23,42,0.18)",
  },
  modalImageWrap: {
    position: "relative",
    minHeight: 0,
    height: "auto",
    alignSelf: "stretch",
    overflow: "hidden",
    background: "#0f172a",
  },
  modalImageWrapCompact: {
    height: "clamp(230px, 48vw, 340px)",
  },
  modalImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  modalImageShade: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.72))",
  },
  modalCategory: {
    display: "inline-flex",
    width: "fit-content",
    padding: "10px 15px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.9)",
    color: "#0f766e",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  modalImageContent: {
    position: "absolute",
    left: 30,
    right: 30,
    bottom: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
  },
  modalImageTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: "clamp(30px, 4vw, 52px)",
    lineHeight: 1.02,
    fontWeight: 950,
    letterSpacing: "-0.035em",
    textShadow: "0 16px 45px rgba(0,0,0,0.35)",
  },
  modalContent: {
    overflow: "visible",
    padding: "clamp(24px, 3.6vw, 42px)",
  },
  modalContentPill: {
    display: "inline-flex",
    width: "fit-content",
    marginBottom: 14,
    padding: "9px 13px",
    borderRadius: 999,
    border: "1px solid rgba(20, 184, 166, 0.22)",
    background: "rgba(240, 253, 250, 0.75)",
    color: "#0f766e",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  modalTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: "clamp(30px, 4.4vw, 50px)",
    lineHeight: 1.03,
    fontWeight: 950,
    letterSpacing: "-0.035em",
  },
  modalIntro: {
    maxWidth: 760,
    margin: "16px 0 0",
    color: "#64748b",
    fontSize: 19,
    lineHeight: 1.55,
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
    gap: 18,
    marginTop: 28,
  },
  caseBlock: {
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 22,
    padding: 24,
    background: "#ffffff",
    boxShadow: "0 20px 55px rgba(15, 23, 42, 0.07)",
  },
  blockTitle: {
    margin: 0,
    color: "#0f172a",
    fontSize: 21,
    fontWeight: 950,
    letterSpacing: "-0.02em",
  },
  blockText: {
    margin: "12px 0 0",
    color: "#475569",
    fontSize: 16,
    lineHeight: 1.7,
  },
  resultsCard: {
    marginTop: 18,
    border: "1px solid rgba(20, 184, 166, 0.22)",
    borderRadius: 22,
    padding: 24,
    background:
      "linear-gradient(135deg, rgba(240,253,250,0.88), rgba(255,255,255,0.96))",
  },
  resultsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: 12,
    marginTop: 18,
  },
  resultItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    color: "#334155",
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 750,
  },
  techCard: {
    marginTop: 18,
    border: "1px solid rgba(15, 23, 42, 0.08)",
    borderRadius: 22,
    padding: 24,
    background: "#ffffff",
  },
  techTitle: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "0 0 16px",
    color: "#0f172a",
    fontSize: 21,
    fontWeight: 950,
  },
  modalFooter: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 24,
    paddingTop: 22,
    borderTop: "1px solid rgba(15, 23, 42, 0.08)",
  },
  darkButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    minHeight: 54,
    padding: "0 24px",
    borderRadius: 15,
    background: "#0f172a",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 950,
    boxShadow: "0 18px 42px rgba(15, 23, 42, 0.22)",
  },
};
