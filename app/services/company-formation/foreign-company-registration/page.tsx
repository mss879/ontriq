import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Foreign Company Registration in Sri Lanka | BOI Setup | Ontriq',
  description: 'Register a foreign company in Sri Lanka with Ontriq. Branch office, subsidiary setup, BOI registration, and full compliance for international businesses entering the Sri Lankan market.',
  keywords: ['foreign company registration Sri Lanka', 'BOI registration Sri Lanka', 'branch office Sri Lanka', 'subsidiary registration', 'foreign investment Sri Lanka'],
  openGraph: {
    title: 'Foreign Company Registration in Sri Lanka | BOI Setup | Ontriq',
    description: 'Expert foreign company registration and BOI setup in Sri Lanka.',
    url: 'https://www.ontriq.com/services/company-formation/foreign-company-registration',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Foreign Company Registration Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image', title: 'Foreign Company Registration in Sri Lanka | BOI Setup | Ontriq', description: 'Expert foreign company registration and BOI setup in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation/foreign-company-registration' },
};

export default function ForeignCompanyRegistrationPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": "Foreign Company Registration", "serviceType": "Foreign Company Setup", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" }, "areaServed": { "@type": "Country", "name": "Sri Lanka" } };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    { "@type": "ListItem", "position": 4, "name": "Foreign Company Registration", "item": "https://www.ontriq.com/services/company-formation/foreign-company-registration" },
  ]};

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="005-B" title="Foreign Company" subtitle="Registration in Sri Lanka" description="Sri Lanka welcomes foreign investment across multiple sectors. Ontriq helps international businesses establish their presence through subsidiary formation, branch office registration, and BOI-approved company setup." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Setting Up a Foreign Company in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Foreign investors have several options for establishing a business presence in Sri Lanka. You can register a wholly-owned subsidiary (Private Limited Company), open a branch office of your parent company, or set up a BOI-approved enterprise for investment incentives including tax holidays and customs duty exemptions.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq guides foreign investors through every step, from choosing the right legal structure and meeting BOI investment thresholds to securing local director appointments through our <Link href="/services/director-services" className="text-[#0098F3] font-semibold hover:underline">director services</Link> and completing all regulatory registrations.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Options for Foreign Companies</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['100% foreign-owned subsidiary (Pvt Ltd)', 'Branch office of parent company', 'BOI-registered enterprise (Section 17)', 'Joint venture with local partner', 'Offshore company registration', 'Representative office', 'Special purpose vehicle (SPV)', 'Free trade zone establishment'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">BOI Registration Benefits</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Companies approved under Section 17 of the BOI Act may qualify for tax holidays of up to 12 years, customs duty exemptions on imported equipment, simplified foreign exchange regulations, and expedited visa processing for expatriate employees. The minimum investment threshold varies by sector.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Structure Advisory', desc: 'Advising on the best legal structure based on your investment size, sector, and operational needs.' },
              { step: '02', title: 'BOI Application', desc: 'Preparing and submitting BOI applications where applicable, including investment proposals and financial projections.' },
              { step: '03', title: 'Company Registration', desc: 'Registering the entity with the Registrar of Companies, including appointment of local directors.' },
              { step: '04', title: 'Regulatory Compliance', desc: 'Tax registration, banking setup, work permit coordination, and industry-specific licensing.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#F75834] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Foreign company registration is part of our <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation services</Link>. Contact us to discuss your investment plans.</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Formation Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/company-formation/private-limited-company" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Private Limited Company</h3>
                <p className="text-xs text-slate-500">Pvt Ltd registration in Sri Lanka</p>
              </Link>
              <Link href="/services/company-formation/partnership-registration" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Partnership Registration</h3>
                <p className="text-xs text-slate-500">General & limited partnerships</p>
              </Link>
              <Link href="/services/company-formation/tax-registration" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Tax Registration</h3>
                <p className="text-xs text-slate-500">TIN, VAT, SVAT & EPF/ETF</p>
              </Link>
              <Link href="/services/company-formation/annual-returns-filing" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Annual Returns Filing</h3>
                <p className="text-xs text-slate-500">ROC compliance & statutory filings</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
