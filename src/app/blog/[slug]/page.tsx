import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { PageLayout } from "../../../components/PageLayout";
import { blogPosts, getBlogPost } from "../../../content/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://www.greexaprimetech.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Greexa Blog`,
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Greexa PrimeTech",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: `${siteUrl}/og-image.png`,
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="gx-article">
        <div className="gx-article-shell">
          <Link href="/blog" className="gx-article-back">
            <ArrowLeft size={17} />
            Back to blog
          </Link>

          <header className="gx-article-header">
            <span>{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="gx-article-meta">
              <strong>{post.author}</strong>
              <span>{new Date(post.publishedAt).toLocaleDateString("en-IN")}</span>
              <span>
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="gx-article-layout">
            <div className="gx-article-body">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="gx-article-closing">
                {post.closing.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            </div>

            <aside className="gx-article-aside" aria-label="Article summary">
              <div className="gx-article-note">
                <span>Quick view</span>
                <h2>{post.category}</h2>
                <p>{post.excerpt}</p>
                <div className="gx-article-note-meta">
                  <Clock size={15} />
                  {post.readTime}
                </div>
                <Link href="/contact">Discuss your project</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
