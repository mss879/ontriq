import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

const companyFormationFaqItems = [
  { question: 'How do I register a company in Sri Lanka?', answer: 'To register a company in Sri Lanka, you need to reserve a company name with the Registrar of Companies, prepare Articles of Association, file incorporation documents through the eROC (electronic Registrar of Companies) portal, and obtain your certificate of incorporation. Ontriq handles the entire process end-to-end.' },
  { question: 'How long does company registration take in Sri Lanka?', answer: 'With Ontriq, standard company registration in Sri Lanka takes 3-5 working days from submission of complete documents. Name reservation typically takes 1-2 days, followed by incorporation filing which is processed within 2-3 days.' },
  { question: 'What types of companies can be registered in Sri Lanka?', answer: 'You can register a Private Limited Company (Pvt Ltd), Public Limited Company (PLC), Company Limited by Guarantee, Unlimited Company, or an Offshore Company. Partnerships and Sole Proprietorships can also be registered. Foreign companies can register a Branch Office or establish a subsidiary.' },
  { question: 'What documents are needed for company registration?', answer: 'Required documents include NIC/passport copies of directors and shareholders, proof of registered office address, Articles of Association, Form 1 (Application for Incorporation), Form 18 (Registered Office Address), and Form 19 (Consent of Directors). Ontriq prepares all documentation for you.' },
  { question: 'Can foreigners register a company in Sri Lanka?', answer: 'Yes, foreigners can register companies in Sri Lanka. A 100% foreign-owned company is permitted for most business activities. Companies with foreign investment over certain thresholds may need BOI (Board of Investment) approval. At least one director must be a resident of Sri Lanka.' },
  { question: 'What is the minimum capital requirement for company registration?', answer: 'There is no minimum capital requirement for private limited company registration in Sri Lanka. However, some regulated industries (banking, insurance, etc.) have specific capital requirements set by their respective regulatory authorities.' },
  { question: 'What ongoing compliance is required after registration?', answer: 'After registration, companies must file annual returns with the Registrar, maintain statutory registers, hold annual general meetings, file tax returns with the Inland Revenue Department, and make EPF/ETF contributions for employees. Ontriq provides ongoing compliance support.' },
  { question: 'Do you help with tax registration after company formation?', answer: 'Yes, we assist with all post-incorporation registrations including TIN (Taxpayer Identification Number), VAT registration, SVAT registration, EPF/ETF employer registration, and any industry-specific licensing requirements.' },
];

export const metadata: Metadata = {
  title: 'Company Registration & Formation Services Sri Lanka',
  description: 'Register your company in Sri Lanka with Ontriq. Business incorporation, tax registration, and regulatory compliance. Fast 3-5 day setup.',
  keywords: [
    'company registration Sri Lanka', 'company formation Sri Lanka', 'register company Sri Lanka',
    'business incorporation Sri Lanka', 'business registration Sri Lanka', 'incorporate company Sri Lanka',
    'private limited company Sri Lanka', 'foreign company registration Sri Lanka', 'BOI registration Sri Lanka',
    'company secretary Sri Lanka', 'annual returns filing Sri Lanka', 'tax registration Sri Lanka',
  ],
  openGraph: {
    title: 'Company Registration & Formation Services Sri Lanka',
    description: 'Expert company formation and business registration in Sri Lanka. Fast 3-5 day registration with full compliance support.',
    url: 'https://www.ontriq.com/services/company-formation',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Company Formation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Registration & Formation Services Sri Lanka',
    description: 'Expert company formation and business registration in Sri Lanka.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation' },
};

export default function CompanyFormationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Company Registration & Formation Services",
    "serviceType": "Company Formation",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "End-to-end company registration and formation services in Sri Lanka including private limited company incorporation, foreign company registration, tax registration, and ongoing compliance.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog", "name": "Company Formation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Limited Company Registration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Partnership Registration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foreign Company Registration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Returns Filing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Registration (TIN/VAT)" } },
      ]
    }
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": companyFormationFaqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    ],
  };

  const formationServices = [
    { title: 'Company Registration', description: 'Registration of private limited companies, public companies, partnerships, and sole proprietorships with the Registrar of Companies through the eROC portal.' },
    { title: 'Foreign Company Registration', description: 'Assistance with establishing foreign-owned companies, branch offices, and subsidiaries in Sri Lanka including BOI approval and regulatory compliance.' },
    { title: 'Tax Registration', description: 'TIN registration, VAT/SVAT registration, EPF/ETF employer registration, and all tax-related filings with the Inland Revenue Department.' },
    { title: 'Document Preparation', description: 'Drafting Articles of Association, shareholder agreements, board resolutions, statutory forms, and all incorporation documentation.' },
    { title: 'Regulatory Compliance', description: 'Ensuring your business meets all statutory requirements including industry-specific licensing, labor law compliance, and environmental regulations.' },
    { title: 'Annual Returns & Filing', description: 'Managing annual return submissions, statutory filings, register maintenance, and ongoing compliance with the Registrar of Companies.' },
    { title: 'Legal Structure Advisory', description: 'Guiding clients in choosing the most suitable legal and tax structure (Pvt Ltd, PLC, partnership, or branch office) based on their business model and goals.' },
  ];

  const processSteps = [
    { title: 'Consultation', description: 'Understanding your business model, goals, and advising on the best legal structure.' },
    { title: 'Name Reservation', description: 'Reserving your company name with the Registrar of Companies (1-2 days).' },
    { title: 'Document Preparation', description: 'Preparing all incorporation documents, Articles, and statutory forms.' },
    { title: 'Filing & Registration', description: 'Submitting to the eROC portal and obtaining your certificate of incorporation.' },
    { title: 'Post-Registration', description: 'Tax registration, bank account setup guidance, and ongoing compliance support.' },
  ];

  const whyChooseUsItems = [
    { title: 'Fast Registration', description: 'Company registration completed in 3-5 working days.' },
    { title: 'End-to-End Support', description: 'From name reservation to post-incorporation compliance.' },
    { title: 'Foreign Investment Expertise', description: 'Specialized experience with BOI and foreign company setup.' },
    { title: 'Ongoing Compliance', description: 'Annual returns, statutory filings, and continuous support.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="005" title="Company Registration" subtitle="& Formation Services"
        description={`At Ontriq, we provide end-to-end company registration and formation services for entrepreneurs, startups, and established companies looking to legally establish and operate their businesses in Sri Lanka.\n\nOur services simplify the incorporation process, ensure full legal compliance, and position your business for long-term success. Registration can be completed in as fast as 3-5 working days.`} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">Company Registration in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Starting a business in Sri Lanka requires proper legal registration with the Department of the Registrar of Companies. Whether you&apos;re a local entrepreneur launching a startup, a foreign investor establishing a subsidiary, or an existing business restructuring its legal entity, the registration process involves multiple steps: name reservation, document preparation, filing, and post-incorporation compliance.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq handles the entire company formation process, ensuring your business is registered correctly, compliant with Sri Lankan law, and set up for operational success from day one. Our team works directly with the Registrar of Companies, Inland Revenue Department, and other regulatory bodies to streamline every step.</p>
          <p className="text-lg text-slate-600 leading-relaxed">We also provide ongoing support after incorporation, including annual returns filing, statutory compliance monitoring, and <Link href="/services/director-services" className="text-[#0098F3] font-semibold hover:underline">director services</Link> for businesses requiring local board representation.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="01" title="Our Formation Services" subtitle="What We Offer" description="Comprehensive company registration and regulatory setup services." />
          <ServiceCardGrid items={formationServices} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="02" title="Registration Process" subtitle="How We Work" description="A streamlined process to get your business registered quickly." />
          <ServiceHorizontalList items={processSteps} />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="03" title="Why Choose Ontriq" subtitle="Our Advantage" description="What sets us apart for company formation in Sri Lanka." />
          <ServiceCardGrid items={whyChooseUsItems} columns={2} />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Detailed Formation Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/services/company-formation/private-limited-company" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Private Limited Company</h3>
              <p className="text-xs text-slate-500">Incorporate Pvt Ltd business</p>
            </Link>
            <Link href="/services/company-formation/partnership-registration" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Partnership Registration</h3>
              <p className="text-xs text-slate-500">Register business partnership</p>
            </Link>
            <Link href="/services/company-formation/foreign-company-registration" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Foreign Company Setup</h3>
              <p className="text-xs text-slate-500">Subsidiaries & branch offices</p>
            </Link>
            <Link href="/services/company-formation/annual-returns-filing" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Annual Returns Filing</h3>
              <p className="text-xs text-slate-500">Statutory return compliance</p>
            </Link>
            <Link href="/services/company-formation/tax-registration" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Tax Registration</h3>
              <p className="text-xs text-slate-500">TIN, VAT & SVAT registration</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/director-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Director Services</h3>
              <p className="text-sm text-slate-500">Nominee directors & governance</p>
            </Link>
            <Link href="/services/startup-support-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Startup Support</h3>
              <p className="text-sm text-slate-500">Launch & grow your business</p>
            </Link>
            <Link href="/services/payroll-processing-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Payroll Processing</h3>
              <p className="text-sm text-slate-500">Compliant payroll services</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader number="04" title="Frequently Asked Questions" subtitle="FAQ" description="Common questions about company registration in Sri Lanka." />
          <div className="space-y-6">
            {companyFormationFaqItems.map((faq, index) => (
              <details key={index} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-2xl text-slate-400 group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
