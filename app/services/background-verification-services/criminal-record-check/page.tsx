import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Criminal Record Check Services Sri Lanka',
  description: 'Comprehensive criminal record checks and legal screening in Sri Lanka. Ontriq examines police databases, court records, and legal registries for safe hiring.',
  keywords: ['criminal record check Sri Lanka', 'criminal background check', 'police clearance certificate', 'legal screening', 'criminal history verification'],
  openGraph: {
    title: 'Criminal Record Check Services Sri Lanka',
    description: 'Comprehensive criminal record checks and legal screening.',
    url: 'https://www.ontriq.com/services/background-verification-services/criminal-record-check',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Criminal Record Check' }],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/background-verification-services/criminal-record-check' },
};

export default function CriminalRecordCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Criminal Record Check Services", "serviceType": "Criminal Background Check",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Criminal record check and legal screening services in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/background-verification-services" },
      { "@type": "ListItem", "position": 4, "name": "Criminal Record Check", "item": "https://www.ontriq.com/services/background-verification-services/criminal-record-check" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="001-C" title="Criminal Record" subtitle="& Legal Checks"
        description="Criminal record checks are essential for creating a safe and secure workplace. Our screening services examine police databases, court records, and legal registries to identify any past criminal activity or ongoing legal issues." />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Are Criminal Record Checks?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Criminal record checks involve searching law enforcement databases, court records, and legal registries to determine whether a candidate has any history of criminal activity, pending legal proceedings, or past convictions. In Sri Lanka, this typically includes searching records maintained by the Sri Lanka Police and relevant magistrate and district court systems.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            These checks are particularly important for roles that involve access to sensitive information, financial assets, vulnerable populations, or positions of authority.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Screen For</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Criminal convictions and sentences', 'Pending criminal cases and charges', 'Court orders and injunctions', 'Fraud and financial crime records', 'Drug-related offenses', 'Violent crime history', 'Traffic violations (where relevant)', 'International criminal databases'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Criminal Checks Are Essential</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Hiring an individual with an undisclosed criminal history can expose your organization to workplace violence, theft, fraud, regulatory penalties, and legal liability. Industries such as banking, healthcare, education, and government often have statutory requirements for criminal screening. At Ontriq, we conduct all checks with proper candidate consent and in compliance with Sri Lankan law.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Screening Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Data Collection', desc: 'We collect identification details and signed consent authorizing the criminal background check.' },
              { step: '02', title: 'Database Searches', desc: 'Our team searches police records, court databases, and legal registries.' },
              { step: '03', title: 'Court Record Verification', desc: 'For flagged cases, we verify details directly with the relevant courts.' },
              { step: '04', title: 'International Screening', desc: 'We screen against global sanction lists and international watchlists.' },
              { step: '05', title: 'Confidential Reporting', desc: 'Results are compiled and delivered through encrypted channels.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#F75834] shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Criminal record checks are part of our <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link>.</p>
          </div>
        </div>
      </section>
      <BgvQuote />
      <CTASection />
    </main>
  );
}
