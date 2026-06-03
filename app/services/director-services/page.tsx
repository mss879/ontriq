import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

const directorFaqItems = [
  { question: 'What are director services?', answer: 'Director services involve providing professional individuals to serve as directors on company boards. This includes nominee/statutory directors for legal compliance, corporate governance advisory, board meeting participation, and strategic business guidance. Ontriq provides experienced directors who fulfill legal requirements while adding real governance value.' },
  { question: 'Why would I need a nominee director in Sri Lanka?', answer: 'A nominee director is typically required when a foreign-owned company needs a Sri Lankan resident director to comply with the Companies Act. Additionally, startups and SMEs may need professional directors to strengthen governance, meet banking requirements, or provide strategic oversight.' },
  { question: 'What is the difference between a nominee director and an executive director?', answer: 'A nominee director serves primarily to fulfill statutory requirements and provide governance oversight, while an executive director is involved in day-to-day management. Ontriq provides nominee and non-executive directors. Our directors attend board meetings, ensure compliance, and provide strategic input, but do not manage daily operations.' },
  { question: 'Can a foreigner be a director of a Sri Lankan company?', answer: 'Yes, foreigners can serve as directors of Sri Lankan companies. However, at least one director must be a resident of Sri Lanka. Ontriq provides local resident director services for foreign-owned companies that need to meet this requirement.' },
  { question: 'What are the duties and liabilities of a company director in Sri Lanka?', answer: 'Under the Companies Act No. 07 of 2007, directors have fiduciary duties including acting in good faith, exercising due care, avoiding conflicts of interest, and ensuring compliance with statutory obligations. Directors can be personally liable for breaches of these duties, tax defaults, and certain regulatory violations.' },
];

export const metadata: Metadata = {
  title: 'Director Services & Nominee Director Sri Lanka | Ontriq',
  description: 'Director services in Sri Lanka. Nominee directors, corporate governance, board advisory, and company secretary for local and foreign businesses.',
  keywords: [
    'director services Sri Lanka', 'nominee director Sri Lanka', 'corporate governance Sri Lanka',
    'statutory director', 'board advisory Sri Lanka', 'company secretary Sri Lanka',
    'local director Sri Lanka', 'non-executive director', 'corporate compliance',
  ],
  openGraph: {
    title: 'Director Services & Nominee Director Sri Lanka | Ontriq',
    description: 'Professional director services for businesses in Sri Lanka.',
    url: 'https://www.ontriq.com/services/director-services',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Director Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Director Services & Nominee Director Sri Lanka | Ontriq',
    description: 'Professional director services for businesses in Sri Lanka. Nominee directors, corporate governance, and board advisory.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/director-services' },
};

export default function DirectorServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service", "name": "Director Services",
    "serviceType": "Corporate Governance", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Professional director services including nominee directors, corporate governance, and board advisory in Sri Lanka.",
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Director Services", "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nominee / Statutory Director" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Governance Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Board & Strategic Advisory" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Company Secretary Services" } },
    ]}
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": directorFaqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Director Services", "item": "https://www.ontriq.com/services/director-services" },
  ]};

  const services = [
    { title: 'Statutory / Nominee Director', description: 'Acting as a legally required local director for foreign-owned companies, ensuring compliance with company law and maintaining fiduciary responsibility.' },
    { title: 'Corporate Governance & Compliance', description: 'Guidance on directors\' duties, oversight of statutory filings, maintenance of corporate records, and risk and compliance monitoring.' },
    { title: 'Board & Strategic Advisory', description: 'Board meeting participation, business strategy input, financial oversight, and support with investor and stakeholder relations.' },
    { title: 'Company Setup & Structure', description: 'Assistance with company incorporation, board structure advice, constitutional document review, and coordination with legal and tax partners.' },
    { title: 'Representation & Liaison', description: 'Liaison with regulators, banks, and authorities. Support during audits, inspections, and due diligence processes.' },
    { title: 'Company Secretary Services', description: 'Maintaining statutory registers, filing annual returns, managing AGM documentation, and ensuring ongoing compliance with the Registrar.' },
  ];

  const whoIsItFor = [
    { title: 'Foreign-owned companies', description: 'International companies needing a Sri Lankan resident director for legal compliance.' },
    { title: 'Startups and SMEs', description: 'Growing businesses needing governance expertise and board-level guidance.' },
    { title: 'Companies expanding into Sri Lanka', description: 'Support for market entry including local director appointment and regulatory compliance.' },
    { title: 'Founders seeking board support', description: 'Experienced non-executive directors for strategic guidance and credibility.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="007" title="Director Services" subtitle="& Corporate Governance"
        description={`We provide professional Director Services to help businesses meet legal requirements, strengthen governance, and make confident strategic decisions.\n\nWhether you need a nominee director for foreign company compliance, board-level advisory, or company secretary services, Ontriq delivers experienced, reliable, and compliant director solutions in Sri Lanka.`} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">Director Services in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Under the Companies Act No. 07 of 2007, every company registered in Sri Lanka must have at least one director who is a resident of Sri Lanka. For foreign-owned companies, this requirement often necessitates appointing a local nominee director. Beyond legal compliance, effective board governance is essential for strategic decision-making, regulatory oversight, and business credibility.</p>
          <p className="text-lg text-slate-600 leading-relaxed">Ontriq provides professional director services that combine legal compliance with real governance value. Our directors bring industry experience, regulatory knowledge, and a commitment to confidentiality and fiduciary responsibility. We also offer <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation</Link> and <Link href="/services/company-formation/annual-returns-filing" className="text-[#0098F3] font-semibold hover:underline">annual returns filing</Link> as complementary services.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="01" title="What We Offer" subtitle="Our Services" description="Comprehensive director and governance services." />
          <ServiceCardGrid items={services} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="02" title="Who This Is For" subtitle="Our Clients" description="Tailored for diverse business structures and needs." />
          <ServiceHorizontalList items={whoIsItFor} />
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
            <Link href="/services/startup-support-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Startup Support</h3>
              <p className="text-sm text-slate-500">Launch your business</p>
            </Link>
            <Link href="/services/bgv" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Background Verification</h3>
              <p className="text-sm text-slate-500">Verify directors & staff</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader number="03" title="Frequently Asked Questions" subtitle="FAQ" description="Common questions about director services." />
          <div className="space-y-6">
            {directorFaqItems.map((faq, index) => (
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
