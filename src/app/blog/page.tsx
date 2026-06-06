import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Newspaper } from "lucide-react";
import { PageLayout } from "../../components/PageLayout";
import { blogPosts } from "../../content/blog";

export const metadata: Metadata = {
  title: "Greexa Blog - Practical Website, Software & Automation Guides",
  description:
    "Read practical Greexa PrimeTech blog articles about website planning, custom software, dashboards, APIs, and business automation for growing companies.",
  keywords:
    "Greexa blog, Greexa PrimeTech blog, website development blog, custom software blog, business automation blog, dashboard development guide",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    title: "Greexa Blog - Practical Website, Software & Automation Guides",
    description:
      "Practical software, website, dashboard, and automation guides from Greexa PrimeTech.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="gx-blog-hero">
        <div className="gx-blog-shell">
          <div className="gx-blog-kicker">
            <Newspaper size={16} />
            Greexa insights
          </div>
          <h1>Practical notes on websites, software, and automation.</h1>
          <p>
            Clear, field-tested thinking for business owners planning a website,
            dashboard, custom software system, or automation workflow.
          </p>
        </div>
      </section>

      <section className="gx-blog-list-section">
        <div className="gx-blog-shell">
          <div className="gx-blog-grid">
            {blogPosts.map((post, index) => (
              <article
                className={`gx-blog-card ${index === 0 ? "gx-blog-card-featured" : ""}`}
                key={post.slug}
              >
                <div className="gx-blog-card-top">
                  <span>{post.category}</span>
                  <small>
                    <Clock size={14} />
                    {post.readTime}
                  </small>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  Read article
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
