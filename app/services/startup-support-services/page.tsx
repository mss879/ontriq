import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

const startupFaqItems = [
  { question: 'What startup support services does Ontriq provide?', answer: 'Ontriq provides end-to-end startup support including business idea validation, market research, business plan development, company registration, financial planning, branding and marketing strategy, operational setup, and ongoing advisory and mentorship for founders in Sri Lanka.' },
  { question: 'Who are your startup services designed for?', answer: 'Our services are designed for first-time founders, early-stage entrepreneurs, small business startups, and anyone at the idea, launch, or early growth stage. We work with digital, service-based, and product businesses across all industries.' },
  { question: 'Do you help with business plan writing?', answer: 'Yes, we develop professional business plans including market analysis, competitive positioning, financial projections, revenue models, and go-to-market strategies. These plans are suitable for internal planning, bank loan applications, and investor presentations.' },
  { question: 'Can you help with company registration for startups?', answer: 'Absolutely. We handle the full company registration process through our company formation services, from name reservation and incorporation to tax registration and compliance setup. We advise on the best legal structure for your startup.' },
  { question: 'Do you provide investor pitch deck support?', answer: 'Yes, we help founders prepare investor-ready materials including pitch deck design, financial models, valuation frameworks, and presentation coaching. We help you articulate your value proposition clearly and compellingly.' },
];

export const metadata: Metadata = {
  title: 'Startup Support & Business Launch Services Sri Lanka | Ontriq',
  description: 'Launch your startup in Sri Lanka with Ontriq. Business planning, company registration, market research, and end-to-end consulting.',
  keywords: [
    'startup support Sri Lanka', 'startup consulting', 'business launch services',
    'business plan Sri Lanka', 'startup advisory', 'entrepreneur support Sri Lanka',
    'market research Sri Lanka', 'business consulting Sri Lanka',
  ],
  openGraph: {
    title: 'Startup Support Services Sri Lanka | Ontriq',
    description: 'Launch, grow, and scale your business with Ontriq.',
    url: 'https://www.ontriq.com/services/startup-support-services',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Startup Support' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Support & Business Launch Services Sri Lanka | Ontriq',
    description: 'Launch your startup in Sri Lanka with Ontriq. Business planning, company registration, and end-to-end startup consulting.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/startup-support-services' },
};

export default function StartupSupportServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service", "name": "Startup Support Services",
    "serviceType": "Startup Consulting", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "End-to-end startup support services in Sri Lanka from idea validation to post-launch growth.",
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Startup Support Services", "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Idea Validation & Strategy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Planning" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal & Company Setup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Financial & Funding Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding & Marketing" } },
    ]}
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": startupFaqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Startup Support", "item": "https://www.ontriq.com/services/startup-support-services" },
  ]};

  const services = [
    { title: 'Idea Validation & Strategy', description: 'Business idea assessment, feasibility analysis, market research, competitor insights, and value proposition development.' },
    { title: 'Business Planning', description: 'Professional business plan development, go-to-market strategy, pricing and revenue model design, and growth planning.' },
    { title: 'Legal & Company Setup', description: 'Business registration, entity structure selection, licensing, compliance support, and intellectual property guidance.' },
    { title: 'Financial & Funding Support', description: 'Financial projections, budgeting, cash flow planning, accounting setup, and investor readiness with pitch deck support.' },
    { title: 'Branding & Marketing', description: 'Brand identity development, website setup, marketing launch strategy, and customer acquisition planning.' },
    { title: 'Operations & Systems', description: 'Workflow design, tools and CRM setup, payment systems, invoicing, and operational efficiency optimization.' },
    { title: 'Launch & Ongoing Support', description: 'Business launch planning, KPI tracking, performance review, ongoing advisory, and scaling support.' },
  ];

  const whoWeServeItems = [
    { title: 'First-time founders', description: 'Guidance for those new to entrepreneurship in Sri Lanka.' },
    { title: 'Small business startups', description: 'Support for small scale business launches and operations.' },
    { title: 'Digital & service businesses', description: 'Tailored strategies for online and service-based models.' },
    { title: 'Entrepreneurs at any stage', description: 'From idea validation through launch to early growth.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="006" title="Startup Support" subtitle="Services"
        description={`We help entrepreneurs and early-stage founders launch, grow, and scale their businesses with confidence. From idea validation to post-launch growth, we provide end-to-end startup support tailored to your goals.\n\nOntriq combines practical business guidance with hands-on support to help you navigate the complexities of starting a business in Sri Lanka.`} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">Startup Consulting in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Starting a business involves far more than just a great idea. You need market validation, a viable business model, proper legal registration, financial planning, and a clear go-to-market strategy. Many first-time founders in Sri Lanka struggle with these foundational elements, leading to costly mistakes and missed opportunities.</p>
          <p className="text-lg text-slate-600 leading-relaxed">Ontriq&apos;s startup support services provide practical, hands-on guidance through every stage of your entrepreneurial journey. We combine our expertise in <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation</Link>, <Link href="/services/hr-management-services" className="text-[#0098F3] font-semibold hover:underline">HR management</Link>, and <Link href="/services/payroll-processing-services" className="text-[#0098F3] font-semibold hover:underline">payroll processing</Link> to give startups a complete operational foundation.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="01" title="What We Do" subtitle="Our Services" description="Comprehensive support tailored to your startup journey." />
          <ServiceCardGrid items={services} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="02" title="Who We Serve" subtitle="Our Clients" description="Tailored solutions for every stage of entrepreneurship." />
          <ServiceHorizontalList items={whoWeServeItems} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/company-formation" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Company Formation</h3>
              <p className="text-sm text-slate-500">Register your business</p>
            </Link>
            <Link href="/services/director-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Director Services</h3>
              <p className="text-sm text-slate-500">Board & governance support</p>
            </Link>
            <Link href="/services/recruitment-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Recruitment</h3>
              <p className="text-sm text-slate-500">Build your team</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader number="03" title="Frequently Asked Questions" subtitle="FAQ" description="Questions about startup support services." />
          <div className="space-y-6">
            {startupFaqItems.map((faq, index) => (
              <details key={index} className="group border border-slate-200 rounded-2xl overflow-hidden">
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
