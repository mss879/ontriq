import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tax Registration Services Sri Lanka | TIN, VAT, SVAT | Ontriq',
  description: 'Expert tax registration services in Sri Lanka. TIN registration, VAT/SVAT registration, EPF/ETF employer registration, and Inland Revenue compliance with Ontriq.',
  keywords: ['tax registration Sri Lanka', 'TIN registration', 'VAT registration Sri Lanka', 'SVAT registration', 'EPF ETF registration', 'Inland Revenue Sri Lanka'],
  openGraph: {
    title: 'Tax Registration Services Sri Lanka | Ontriq',
    description: 'Complete tax registration and Inland Revenue compliance in Sri Lanka.',
    url: 'https://www.ontriq.com/services/company-formation/tax-registration',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Tax Registration Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image', title: 'Tax Registration Services Sri Lanka | Ontriq', description: 'Complete tax registration and Inland Revenue compliance in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation/tax-registration' },
};

export default function TaxRegistrationPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": "Tax Registration Services", "serviceType": "Tax Registration", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" }, "areaServed": { "@type": "Country", "name": "Sri Lanka" } };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    { "@type": "ListItem", "position": 4, "name": "Tax Registration", "item": "https://www.ontriq.com/services/company-formation/tax-registration" },
  ]};

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="005-C" title="Tax Registration" subtitle="Services" description="After company incorporation, tax registration is mandatory. Ontriq handles TIN registration, VAT/SVAT registration, EPF/ETF employer registration, and all filings with the Inland Revenue Department." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Tax Registration in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Every company registered in Sri Lanka must obtain a Taxpayer Identification Number (TIN) from the Inland Revenue Department. Depending on your business activities and turnover, you may also need to register for Value Added Tax (VAT), Simplified VAT (SVAT), and employer contributions including EPF and ETF.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq handles all tax registration requirements as part of our post-incorporation services, ensuring your business is fully compliant and operational from the start.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Registrations We Handle</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['TIN (Taxpayer Identification Number)', 'VAT registration (turnover-based)', 'SVAT registration', 'EPF employer registration', 'ETF employer registration', 'PAYE (Pay As You Earn) setup', 'Withholding tax compliance', 'Industry-specific levies and taxes'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Proper Tax Registration Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Operating without proper tax registration can result in penalties, fines, and legal action from the Inland Revenue Department. For businesses hiring employees, failure to register for EPF/ETF can lead to personal liability for directors. Proper registration also enables your business to issue tax invoices, claim input tax credits, and comply with government tender requirements.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Assessment', desc: 'Determining which tax registrations are required based on your business activities and projected turnover.' },
              { step: '02', title: 'Document Preparation', desc: 'Preparing all application forms and supporting documents for each registration.' },
              { step: '03', title: 'Filing & Registration', desc: 'Submitting applications to the Inland Revenue Department and statutory bodies.' },
              { step: '04', title: 'Confirmation & Setup', desc: 'Obtaining registration numbers and setting up your accounting systems for compliance.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Tax registration is part of our <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation services</Link>. We also offer <Link href="/services/payroll-processing-services" className="text-[#0098F3] font-semibold hover:underline">payroll processing</Link> for ongoing EPF/ETF compliance.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
