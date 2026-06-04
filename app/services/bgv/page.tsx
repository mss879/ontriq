import { BgvHero } from '@/components/services/bgv/bgv-hero';
import { BgvIntro } from '@/components/services/bgv/bgv-intro';
import { BgvWhyMatters } from '@/components/services/bgv/bgv-why-matters';
import { BgvTypes } from '@/components/services/bgv/bgv-types';
import { BgvFeatures } from '@/components/services/bgv/bgv-features';
import { BgvPackages } from '@/components/services/bgv/bgv-packages';
import { BgvProcess } from '@/components/services/bgv/bgv-process';
import { BgvWorkflow } from '@/components/services/bgv/bgv-workflow';
import { BgvIndustries } from '@/components/services/bgv/bgv-industries';
import { BgvLegal } from '@/components/services/bgv/bgv-legal';
import { BgvFaq } from '@/components/services/bgv/bgv-faq';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvCommitment } from '@/components/services/bgv/bgv-commitment';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

// FAQ data inlined for server-side JSON-LD generation
const bgvFaqItems = [
  { question: 'What are background verification services?', answer: 'Background verification services are a systematic process of validating a candidate\'s personal, educational, professional, and legal history before employment. This includes checks on employment records, educational qualifications, criminal history, identity documents, and professional references to ensure the information provided is accurate and truthful.' },
  { question: 'How long does a background check take in Sri Lanka?', answer: 'At Ontriq, we complete comprehensive background verification cases within 7 working days\u2014the fastest turnaround in Sri Lanka. The exact duration may vary based on the complexity of checks, the number of verifications required, and the responsiveness of third-party sources such as previous employers and educational institutions.' },
  { question: 'What documents are needed for background verification?', answer: 'Candidates typically need to provide government-issued identification (NIC/passport), educational certificates and transcripts, employment letters or appointment letters from previous employers, current and previous address proof, and signed consent forms. Our secure digital portal guides candidates through the document submission process.' },
  { question: 'Is background verification legal in Sri Lanka?', answer: 'Yes, background verification is a lawful and widely accepted practice in Sri Lanka. The process is governed by the Personal Data Protection Act and other relevant employment regulations. Candidate consent must be obtained before initiating any checks, and data must be handled in compliance with privacy requirements.' },
  { question: 'What happens if a discrepancy is found during verification?', answer: 'When a discrepancy is identified, our team documents it in the verification report with supporting details. The employer is notified of the discrepancy, and the candidate may be given an opportunity to clarify or provide additional documentation. The final decision on how to proceed rests with the employer.' },
  { question: 'Do you verify candidates with international backgrounds?', answer: 'Yes, we conduct international verifications depending on the country and available data sources. For candidates with overseas employment or education history, we leverage our network of verification partners and international databases to validate credentials across borders.' },
  { question: 'How is candidate data protected during the verification process?', answer: 'We follow strict data privacy and security protocols throughout the verification process. All candidate data is transmitted via encrypted channels, stored in access-controlled systems, and handled only by authorized verification analysts. We comply with the Sri Lanka Data Protection Act and maintain strict confidentiality at every stage.' },
  { question: 'What is included in a standard background verification package?', answer: 'A standard BGV package at Ontriq includes employment history verification, educational qualification checks, criminal record screening, identity and address verification, and professional reference checks. We also offer customized packages that can include global sanction screening, drug testing, and industry-specific checks based on your requirements.' },
  { question: 'Can we customize BGV packages for different roles?', answer: 'Yes, Ontriq offers customizable background verification packages. We understand that entry-level, mid-management, and executive roles require different levels of screening. You can select specific checks—such as adding global sanction screening, drug testing, or reference checks—to create a tailored package that aligns with your regulatory framework and budget.' },
  { question: 'How does Ontriq ensure the accuracy of background check reports?', answer: 'We maintain a 98%+ accuracy rate by implementing a strict, multi-level Quality Control (QC) process. Every verification undergoes primary-source validation and is checked by at least two senior compliance analysts before a final report is compiled. This ensures all findings are accurate, verifiable, and compliant with audit standards.' },
];

export const metadata: Metadata = {
  title: 'Background Verification Services in Sri Lanka',
  description: 'Background verification services in Sri Lanka. Ontriq delivers employment, education, criminal and identity checks in just 7 working days.',
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
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq Background Verification Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Background Verification Services in Sri Lanka',
    description: 'Sri Lanka\'s fastest BGV provider. Employment, education, criminal & identity checks in 7 working days.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/services/bgv',
  },
};

export default function BackgroundVerificationServicesPage() {
  // Service JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Background Verification Services",
    "serviceType": "Background Verification",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq",
      "url": "https://www.ontriq.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "description": "Comprehensive background verification services in Sri Lanka including employment history, education, criminal record, identity, address verification, and reference checks with a 7-day turnaround.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Background Verification Checks",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employment History Verification" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Educational Background Verification" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criminal Record & Legal Checks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Identity & Address Verification" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Reference Checks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global Sanction Screening" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drug Testing" } },
      ]
    }
  };

  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": bgvFaqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb JSON-LD
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BgvHero 
        serviceNumber="001"
        title="Background Verification"
        subtitle="Services in Sri Lanka"
        description={`At Ontriq, Background Verification (BGV) is at the core of our operations and remains our primary service. We take immense pride in being Sri Lanka's most trusted and fastest-growing BGV provider, known for our speed, accuracy, and reliability.\n\nWe are the only Background Verification company in Sri Lanka capable of completing full BGV cases within 7 working days\u2014a benchmark unmatched in the local market.`}
      />
      <BgvIntro />
      <BgvWhyMatters />
      <BgvTypes />
      <BgvFeatures />
      <BgvPackages />
      <BgvProcess />
      <BgvWorkflow />
      <BgvIndustries />
      <BgvLegal />
      <BgvCommitment />
      <BgvFaq />
      <BgvQuote />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
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
        </div>
      </section>

      <CTASection />
    </main>
  );
}
