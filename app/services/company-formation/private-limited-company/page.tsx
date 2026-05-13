import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Register Private Limited Company in Sri Lanka | Ontriq',
  description: 'Register a Private Limited Company (Pvt Ltd) in Sri Lanka with Ontriq. Fast 3-5 day incorporation, full document preparation, and post-registration compliance support.',
  keywords: ['private limited company Sri Lanka', 'register Pvt Ltd Sri Lanka', 'company incorporation', 'start a company Sri Lanka'],
  openGraph: {
    title: 'Register Private Limited Company in Sri Lanka | Ontriq',
    description: 'Fast Pvt Ltd company registration in Sri Lanka with full compliance support.',
    url: 'https://www.ontriq.com/services/company-formation/private-limited-company',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Register Private Limited Company Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image', title: 'Register Private Limited Company in Sri Lanka | Ontriq', description: 'Fast Pvt Ltd company registration in Sri Lanka with full compliance support.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation/private-limited-company' },
};

export default function PrivateLimitedCompanyPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": "Private Limited Company Registration", "serviceType": "Company Incorporation", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" }, "areaServed": { "@type": "Country", "name": "Sri Lanka" } };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    { "@type": "ListItem", "position": 4, "name": "Private Limited Company", "item": "https://www.ontriq.com/services/company-formation/private-limited-company" },
  ]};

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="005-A" title="Private Limited" subtitle="Company Registration" description="The Private Limited Company (Pvt Ltd) is the most popular business structure in Sri Lanka, offering limited liability, separate legal identity, and credibility with banks, investors, and government agencies." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is a Private Limited Company?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">A Private Limited Company (Pvt Ltd) in Sri Lanka is a legal entity registered under the Companies Act No. 07 of 2007. It provides shareholders with limited liability protection, meaning personal assets are protected from business debts. It requires a minimum of one director and one shareholder, and shares cannot be publicly traded.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">This is the most recommended structure for startups, SMEs, and businesses seeking credibility, access to financing, and legal protection. Ontriq registers Pvt Ltd companies in as fast as 3-5 working days through the electronic Registrar of Companies (eROC) portal.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Minimum 1 director (resident of Sri Lanka)', 'Minimum 1 shareholder (individual or corporate)', 'Registered office address in Sri Lanka', 'No minimum share capital requirement', 'NIC/Passport copies of directors & shareholders', 'Proof of registered office address', 'Articles of Association', 'Form 1, Form 18, Form 19 (statutory forms)'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Registration Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Name Reservation', desc: 'We check name availability and reserve your company name with the Registrar (1-2 business days).' },
              { step: '02', title: 'Document Drafting', desc: 'We prepare Articles of Association, statutory forms, and all required incorporation documents.' },
              { step: '03', title: 'Filing with eROC', desc: 'All documents are submitted electronically to the Registrar of Companies via the eROC portal.' },
              { step: '04', title: 'Certificate of Incorporation', desc: 'Your company is officially registered and you receive the Certificate of Incorporation.' },
              { step: '05', title: 'Post-Registration Setup', desc: 'We assist with TIN registration, VAT registration, EPF/ETF setup, and bank account opening guidance.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Pvt Ltd registration is part of our <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation services</Link>. Contact us to start your registration today.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
