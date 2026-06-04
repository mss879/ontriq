import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { FaqSection } from '@/components/faq-section';

// Dynamic import for below-fold CTA section
const CTASection = dynamic(() => import('@/components/cta-section').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[300px]" aria-label="Loading CTA section" />
});

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Ontriq',
  description: 'Answers to common questions about Ontriq services including verification, HR management, recruitment, payroll, and company formation in Sri Lanka.',
  keywords: ['FAQ', 'Ontriq FAQ', 'Ontriq questions', 'workforce solutions FAQ', 'verification FAQ', 'HR services FAQ'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Ontriq',
    description: 'Find answers to frequently asked questions about Ontriq services — verification, HR, recruitment, payroll, and company formation.',
    url: 'https://www.ontriq.com/faq',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Frequently Asked Questions | Ontriq',
    description: 'Find answers to frequently asked questions about Ontriq services — verification, HR, recruitment, payroll, and company formation.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/faq',
  },
};

// FAQ items for JSON-LD structured data (diversified across all services)
const faqItems = [
  // Verification Services
  { question: "What verification services does Ontriq offer?", answer: "We offer comprehensive pre-employment checks including employment, education, criminal record, identity, address, and reference checks. For detailed information, see our Background Verification Services page (https://www.ontriq.com/services/bgv)." },
  { question: "How long does a verification take?", answer: "We complete comprehensive background checks within 7 working days — the fastest turnaround in Sri Lanka. Learn more about our timeline and process on our BGV services page (https://www.ontriq.com/services/bgv)." },
  { question: "Do you verify candidates with international backgrounds?", answer: "Yes, we conduct global verifications using international networks and databases. Find out more about our global verification scope on our BGV services page (https://www.ontriq.com/services/bgv)." },
  // HR Management
  { question: "What HR management services do you provide?", answer: "We offer end-to-end HR solutions including employee onboarding and offboarding, HR policy development, performance management systems, employee relations, leave and attendance management, and HR compliance advisory." },
  { question: "Can you manage HR for a small or mid-sized company?", answer: "Absolutely. Our HR solutions are designed to scale — from startups needing foundational HR support to large enterprises requiring full-cycle HR operations management." },
  { question: "Do you handle employee grievances and disciplinary processes?", answer: "Yes, we support organisations with structured grievance handling, disciplinary procedures, and workplace investigations in compliance with Sri Lankan employment law." },
  // Recruitment
  { question: "What types of recruitment does Ontriq handle?", answer: "We provide executive search, volume hiring, contract staffing, IT recruitment, candidate screening and assessment, and employer branding services across all industries." },
  { question: "How is Ontriq different from other recruitment agencies?", answer: "Our recruitment process integrates seamlessly with our in-house verification services, meaning every hire is both talent-matched and fully verified — reducing risk and time-to-hire significantly." },
  { question: "Do you recruit for international positions?", answer: "Our primary focus is the Sri Lankan market, but we can support international hiring needs through our partner network depending on the role and region." },
  // Payroll & Company Formation
  { question: "What payroll services do you offer?", answer: "We handle full payroll processing including salary computation, statutory deductions (EPF/ETF), payslip generation, tax filing support, and compliance reporting for businesses of any size." },
  { question: "Can you help register a new company in Sri Lanka?", answer: "Yes, we provide end-to-end company formation services including private limited company registration, partnership registration, foreign company registration, tax registration, and ongoing annual returns filing." },
  { question: "Do you offer director services for foreign companies?", answer: "Yes, we provide nominee director and corporate secretary services to help foreign-owned entities meet Sri Lankan legal requirements." },
  // Process & Compliance
  { question: "Is candidate consent required before verification?", answer: "Yes, candidate consent is legally required under the Personal Data Protection Act. See how we handle compliance and data privacy on our BGV services page (https://www.ontriq.com/services/bgv)." },
  { question: "Are your services compliant with Sri Lankan law?", answer: "Yes, all services are delivered in full compliance with the Sri Lanka Data Protection Act and relevant employment regulations." },
  { question: "What happens if a discrepancy is found during verification?", answer: "Discrepancies are documented in detail and shared securely with the employer. For a step-by-step breakdown of how we manage findings, visit our BGV services page (https://www.ontriq.com/services/bgv)." },
  // Getting Started
  { question: "How can I get a quote from Ontriq?", answer: "Visit our contact page or reach us at info@ontriq.com. We'll understand your requirements and provide a tailored proposal within 24 hours." },
  { question: "Do you offer customised service packages?", answer: "Yes, we tailor all our services — verification, HR, recruitment, and payroll — according to your industry, company size, and specific requirements." },
  { question: "How can I track the status of ongoing work?", answer: "Clients can track verification reports and project status via our secure online portal or by contacting their dedicated account manager." },
];

// JSON-LD structured data for FAQ Page
const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about Ontriq workforce and business solutions.',
  url: 'https://www.ontriq.com/faq',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Ontriq',
    url: 'https://www.ontriq.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ontriq.com' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.ontriq.com/faq' },
    ],
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-20" id="main-content">
        <FaqSection titleAs="h1" />
        <CTASection />
      </main>
    </>
  );
}
