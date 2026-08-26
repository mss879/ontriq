import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContactSection } from "@/components/contact-section";

// Dynamic imports for below-fold sections
const FaqSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="min-h-[400px]" aria-label="Loading FAQ section" />
});
const CTASection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[300px]" aria-label="Loading CTA section" />
});

export const metadata: Metadata = {
  title: 'Contact Ontriq | HR, Recruitment & BGV Services Sri Lanka',
  description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions. Contact us via email, phone, or our online form.',
  keywords: ['contact Ontriq', 'background verification inquiry', 'HR services contact', 'payroll services contact', 'recruitment inquiry', 'BGV services Sri Lanka'],
  openGraph: {
    title: 'Contact Ontriq | HR, Recruitment & BGV Services Sri Lanka',
    description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
    url: 'https://www.ontriq.com/contact',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Contact Ontriq',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ontriq | HR, Recruitment & BGV Services Sri Lanka',
    description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/contact',
  },
};

// JSON-LD structured data for Contact Page
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ontriq',
  description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
  url: 'https://www.ontriq.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Ontriq',
    email: 'info@ontriq.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '107 Colombo - Galle Main Rd',
      addressLocality: 'Dehiwala-Mount Lavinia',
      addressCountry: 'Sri Lanka',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'VP Operations / Director',
        name: 'Abdul Rahuman',
        telephone: '+94-77-999-6940',
        email: 'abdul@ontriq.com',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Director Operations',
        name: 'Arafath Dawood',
        telephone: '+94-77-774-0041',
        email: 'arafath@ontriq.com',
      },
    ],
  },
};

// JSON-LD breadcrumb structured data for Contact page
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ontriq.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.ontriq.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-white" id="main-content">
        <ContactSection />
        <FaqSection />
        <CTASection />
      </main>
    </>
  );
}
