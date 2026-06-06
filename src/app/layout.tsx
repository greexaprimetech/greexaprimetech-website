import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "../index.css";
import { AnalyticsTracker } from "../components/AnalyticsTracker";
import { FloatingQuickContact } from "../components/FloatingQuickContact";
import { Navbar } from "../components/Navbar";
import { RouteTransition } from "../components/RouteTransition";
import { GA_MEASUREMENT_ID } from "../utils/analytics";

const siteUrl = "https://www.greexaprimetech.com";
const siteTitle =
  "Greexa - Official Greexa PrimeTech Website | Software Development Company";
const siteDescription =
  "Greexa is the official website of Greexa PrimeTech, a software development and website development company offering professional websites, custom software, SaaS platforms, CRM systems, ERP solutions, business automation, AI automation, and digital technology solutions.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Greexa PrimeTech",
  },
  description: siteDescription,
  keywords:
    "Greexa, Greexa official website, Greexa PrimeTech, Greexa Prime Tech, Greexa software company, Greexa website development, Greexa web development company, Greexa custom software development, Greexa SaaS development, Greexa CRM development, Greexa ERP development, Greexa AI automation, Greexa business automation, PrimeTech, software development company, website development company, web development company, custom software development company, SaaS development company, CRM software development, ERP software development, business automation company, AI automation company, React development, MERN stack development, Java Spring Boot development, mobile app development, startup software development, small business software solutions, coaching institute software, society management software, business technology solutions, software consulting company India",
  authors: [{ name: "Greexa PrimeTech" }],
  creator: "Greexa PrimeTech",
  publisher: "Greexa PrimeTech",
  category: "Software Development",
  applicationName: "Greexa PrimeTech",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Greexa PrimeTech",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        alt: "Greexa PrimeTech - Software Development and Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@greexaprimetech",
    title: "Greexa - Official Greexa PrimeTech Website",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Greexa PrimeTech",
    legalName: "Greexa PrimeTech",
    alternateName: [
      "Greexa",
      "Greexa Prime Tech",
      "PrimeTech",
      "Greexa Software Company",
      "Greexa Website Development",
    ],
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    email: "greexaprimetech@gmail.com",
    telephone: "+919561436105",
    description:
      "Greexa, officially Greexa PrimeTech, is a software development and website development company offering custom software, professional websites, SaaS platforms, CRM systems, ERP solutions, business automation, AI automation, and digital technology solutions.",
    slogan: "Building reliable digital solutions for modern businesses.",
    foundingDate: "2026",
    brand: {
      "@type": "Brand",
      name: "Greexa PrimeTech",
      alternateName: "Greexa",
    },
    knowsAbout: [
      "Software Development",
      "Website Development",
      "Web Development",
      "Custom Software Development",
      "SaaS Development",
      "CRM Development",
      "ERP Development",
      "AI Automation",
      "Business Automation",
      "React Development",
      "MERN Stack Development",
      "Java Spring Boot Development",
      "Mobile App Development",
      "Software Consulting",
      "Digital Solutions",
    ],
    areaServed: ["India", "Worldwide"],
    sameAs: [
      "https://www.linkedin.com/company/greexaprimetech",
      "https://www.instagram.com/greexaprimetech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business Enquiry",
      url: `${siteUrl}/contact`,
      telephone: "+919561436105",
      email: "greexaprimetech@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Greexa PrimeTech",
    alternateName: ["Greexa", "Greexa Prime Tech", "Greexa official website"],
    url: `${siteUrl}/`,
    description:
      "Official website of Greexa PrimeTech, also known as Greexa, a software development and website development company offering websites, custom software, SaaS products, CRM systems, ERP solutions, and AI automation solutions.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Greexa PrimeTech",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professional-service`,
    name: "Greexa PrimeTech",
    alternateName: "Greexa",
    url: `${siteUrl}/`,
    image: `${siteUrl}/og-image.png`,
    description:
      "Greexa PrimeTech provides website development, custom software development, SaaS development, CRM development, ERP development, AI automation, business automation, and software consulting services.",
    serviceType: [
      "Website Development",
      "Custom Software Development",
      "SaaS Development",
      "CRM Development",
      "ERP Development",
      "AI Automation",
      "Business Automation",
      "Software Consulting",
      "Business Technology Solutions",
    ],
    areaServed: ["India", "Worldwide"],
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Greexa PrimeTech",
      alternateName: "Greexa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Greexa PrimeTech software development services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS, CRM, ERP and Dashboard Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation and Business Automation",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#software-development-service`,
    name: "Greexa PrimeTech Software Development Services",
    alternateName: "Greexa Software Services",
    serviceType:
      "Software Development, Website Development, Custom Software, SaaS, CRM, ERP, AI Automation, Business Automation",
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Greexa PrimeTech",
      alternateName: "Greexa",
      url: `${siteUrl}/`,
    },
    areaServed: {
      "@type": "Place",
      name: "India and Worldwide",
    },
    description:
      "Greexa PrimeTech offers professional software development services including website development, custom business software, SaaS platforms, CRM systems, ERP solutions, AI automation, and business automation tools.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: `${siteUrl}/`,
    name: "Greexa - Official Greexa PrimeTech Website",
    alternateName: "Greexa official website",
    description: siteDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/og-image.png`,
    },
    inLanguage: "en",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <noscript>
          Greexa PrimeTech, also known as Greexa, is a software development and
          website development company offering professional websites, custom
          software, SaaS platforms, CRM systems, ERP solutions, business
          automation, AI automation, and digital solutions for businesses,
          startups, societies, coaching institutes, and growing brands.
        </noscript>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {schemas.map((schema, index) => (
          <Script
            id={`schema-${index}`}
            key={index}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <AnalyticsTracker />
        <RouteTransition />
        <Navbar />
        {children}
        <FloatingQuickContact />
      </body>
    </html>
  );
}
