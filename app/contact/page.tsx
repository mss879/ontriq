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
  title: 'Contact Us - Ontriq',
  description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions. Contact us via email, phone, or our online form.',
  keywords: ['contact Ontriq', 'background verification inquiry', 'HR services contact', 'payroll services contact', 'recruitment inquiry', 'BGV services Sri Lanka'],
  openGraph: {
    title: 'Contact Us - Ontriq',
    description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
    url: 'https://ontriq.com/contact',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ontriq.com/ontriq%20favicon.png',
        width: 512,
        height: 512,
        alt: 'Ontriq',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Ontriq',
    description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
    images: ['https://ontriq.com/ontriq%20favicon.png'],
  },
  alternates: {
    canonical: 'https://ontriq.com/contact',
  },
};

// JSON-LD structured data for Contact Page
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Ontriq',
  description: 'Get in touch with Ontriq for background verification, HR services, payroll, and recruitment solutions.',
  url: 'https://ontriq.com/contact',
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <main className="min-h-screen bg-white" id="main-content">
        <ContactSection />
        <FaqSection />
        <CTASection />
      </main>
    </>
  );
}
