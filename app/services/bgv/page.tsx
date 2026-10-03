import dynamic from 'next/dynamic';
import { BgvHero } from '@/components/services/bgv/bgv-hero';
import { BgvTableOfContents } from '@/components/services/bgv/bgv-table-of-contents';
import { BgvIntro } from '@/components/services/bgv/bgv-intro';
import { BgvWhyMatters } from '@/components/services/bgv/bgv-why-matters';
import { BgvTypes } from '@/components/services/bgv/bgv-types';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { bgvFaqData } from '@/lib/bgv-faq-data';
import { bgvSubpages, BGV_BASE_URL } from '@/lib/bgv-subpages';
import Link from 'next/link';
import type { Metadata } from 'next';

// Below-fold sections are code-split (default SSR stays ON, so all content
// remains in the crawlable HTML — only the client JS is deferred).
const BgvFeatures = dynamic(
  () => import('@/components/services/bgv/bgv-features').then((mod) => ({ default: mod.BgvFeatures })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);
const BgvPackages = dynamic(
  () => import('@/components/services/bgv/bgv-packages').then((mod) => ({ default: mod.BgvPackages })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading packages..." /> }
);
const BgvProcess = dynamic(
  () => import('@/components/services/bgv/bgv-process').then((mod) => ({ default: mod.BgvProcess })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);
const BgvWorkflow = dynamic(
  () => import('@/components/services/bgv/bgv-workflow').then((mod) => ({ default: mod.BgvWorkflow })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading workflow..." /> }
);
const BgvIndustries = dynamic(
  () => import('@/components/services/bgv/bgv-industries').then((mod) => ({ default: mod.BgvIndustries })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading industries..." /> }
);
const BgvOverseas = dynamic(
  () => import('@/components/services/bgv/bgv-overseas').then((mod) => ({ default: mod.BgvOverseas })),
  { loading: () => <div className="min-h-[500px]" aria-label="Loading content..." /> }
);
const BgvLegal = dynamic(
  () => import('@/components/services/bgv/bgv-legal').then((mod) => ({ default: mod.BgvLegal })),
  { loading: () => <div className="min-h-[500px]" aria-label="Loading content..." /> }
);
const BgvCommitment = dynamic(
  () => import('@/components/services/bgv/bgv-commitment').then((mod) => ({ default: mod.BgvCommitment })),
  { loading: () => <div className="min-h-[500px]" aria-label="Loading content..." /> }
);
const BgvFaq = dynamic(
  () => import('@/components/services/bgv/bgv-faq').then((mod) => ({ default: mod.BgvFaq })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading FAQ..." /> }
);
const BgvQuote = dynamic(
  () => import('@/components/services/bgv/bgv-quote').then((mod) => ({ default: mod.BgvQuote })),
  { loading: () => <div className="min-h-[300px]" aria-label="Loading content..." /> }
);
const CTASection = dynamic(
  () => import('@/components/cta-section').then((mod) => ({ default: mod.CTASection })),
  { loading: () => <div className="min-h-[300px]" aria-label="Loading content..." /> }
);

export const metadata: Metadata = {
  title: 'Background Verification Services in Sri Lanka',
  description: 'Background verification & employee screening services in Sri Lanka. Employment, education, criminal & identity checks in 7 working days. Colombo-based, island-wide coverage.',
  keywords: [
    'background verification services',
    'background verification services Sri Lanka',
    'BGV services Sri Lanka',
    'employee background check Sri Lanka',
    'pre-employment screening Sri Lanka',
    'criminal record check Sri Lanka',
    'education verification Sri Lanka',
    'employment verification Sri Lanka',
    'background check company Sri Lanka',
    'BGV provider Colombo',
    'best background verification company Sri Lanka',
    'background check Sri Lanka',
    'employee screening services Sri Lanka',
  ],
  openGraph: {
    title: 'Background Verification Services in Sri Lanka',
    description: 'Sri Lanka\'s fastest BGV provider. Employment, education, criminal & identity checks in 7 working days.',
    url: 'https://www.ontriq.com/services/bgv',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Background Verification Services in Sri Lanka',
    description: 'Sri Lanka\'s fastest BGV provider. Employment, education, criminal & identity checks in 7 working days.',
  },
  alternates: {
    canonical: 'https://www.ontriq.com/services/bgv',
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Background Verification Services' },
];

// Last substantive content update; shown on the page and used as WebPage dateModified
const LAST_UPDATED = '2026-10-03';
const LAST_UPDATED_DISPLAY = '3 October 2026';

const resourceGuides = [
  {
    title: 'How to Do Background Checks on Employees',
    description: 'A step-by-step guide for Sri Lankan employers',
    href: '/resources/how-to-do-background-checks-on-employees-in-sri-lanka',
  },
  {
    title: 'Background Verification Cost Guide',
    description: 'What BGV costs in Sri Lanka and what drives pricing',
    href: '/resources/background-verification-cost-sri-lanka',
  },
  {
    title: 'How Long Does a Background Check Take?',
    description: 'Realistic turnaround times for each type of check',
    href: '/resources/how-long-does-a-background-check-take-in-sri-lanka',
  },
  {
    title: 'PDPA Guide for Employers',
    description: 'Screening under the Personal Data Protection Act',
    href: '/resources/personal-data-protection-act-guide-for-employers',
  },
  {
    title: 'Pre-Employment Screening Checklist',
    description: 'Which checks to run for each type of role',
    href: '/resources/pre-employment-screening-checklist-sri-lanka',
  },
  {
    title: 'Background Check Red Flags',
    description: 'Common discrepancies and what to do next',
    href: '/resources/background-check-red-flags-employers-guide',
  },
];

export default function BackgroundVerificationServicesPage() {
  // Service JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.ontriq.com/services/bgv#service",
    "name": "Background Verification Services in Sri Lanka",
    "alternateName": ["Employee Background Checks", "Pre-Employment Screening", "Employee Screening Services"],
    "serviceType": "Background Verification",
    "url": "https://www.ontriq.com/services/bgv",
    "image": "https://www.ontriq.com/bgv-service.jpg",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.ontriq.com/#organization",
      "name": "Ontriq",
      "url": "https://www.ontriq.com",
      "telephone": "+94-77-999-6940",
      "email": "info@ontriq.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "107 Colombo - Galle Main Rd",
        "addressLocality": "Dehiwala-Mount Lavinia",
        "addressCountry": "LK"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "description": "Background verification services in Sri Lanka including employment history, education, criminal record, identity and address, reference, sanction, drug testing, credit history and professional licence checks, with complete cases delivered within 7 working days.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Background Verification Checks",
      "itemListElement": bgvSubpages.map((page) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": page.name, "url": `${BGV_BASE_URL}/${page.slug}` },
      }))
    }
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.ontriq.com/services/bgv#webpage",
    "url": "https://www.ontriq.com/services/bgv",
    "name": "Background Verification Services in Sri Lanka",
    "inLanguage": "en-LK",
    "dateModified": LAST_UPDATED,
    "isPartOf": { "@id": "https://www.ontriq.com/#website" },
    "about": { "@id": "https://www.ontriq.com/services/bgv#service" },
    "primaryImageOfPage": "https://www.ontriq.com/bgv-service.jpg",
  };

  // FAQ JSON-LD — built from the same data module that renders the visible accordion
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bgvFaqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb JSON-LD — mirrors the visible <Breadcrumbs> trail below
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification Services", "item": "https://www.ontriq.com/services/bgv" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={breadcrumbItems}
        className="container mx-auto px-4 md:px-6 pt-28 md:pt-32"
      />
      <p className="container mx-auto px-4 md:px-6 mt-2 text-xs text-slate-500">
        Last updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_DISPLAY}</time>
      </p>
      <BgvHero
        serviceNumber="001"
        title="Background Verification"
        subtitle="Services in Sri Lanka"
        description={`At Ontriq, Background Verification (BGV) is at the core of our operations and remains our primary service. We take immense pride in being Sri Lanka's most trusted and fastest-growing BGV provider, known for our speed, accuracy, and reliability.\n\nWe are the only Background Verification company in Sri Lanka capable of completing full BGV cases within 7 working days—a benchmark unmatched in the local market. From employment verification and employee screening to criminal record checks, every case is managed end-to-end by our Colombo-based analyst team.`}
      />
      <BgvTableOfContents />
      <BgvIntro />
      <BgvWhyMatters />
      <BgvTypes />
      <BgvFeatures />
      <BgvPackages />
      <BgvProcess />
      <BgvWorkflow />
      <BgvIndustries />
      <BgvOverseas />
      <BgvLegal />
      <BgvCommitment />
      <BgvFaq />
      <BgvQuote />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/recruitment-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Recruitment</h3>
              <p className="text-sm text-slate-500">Find and hire top talent</p>
            </Link>
            <Link href="/services/hr-management-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">HR Management</h3>
              <p className="text-sm text-slate-500">End-to-end HR solutions</p>
            </Link>
            <Link href="/services/company-formation" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Company Formation</h3>
              <p className="text-sm text-slate-500">Register your business</p>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mb-6 mt-14">Background Check Guides for Sri Lankan Employers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-slate-500">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
