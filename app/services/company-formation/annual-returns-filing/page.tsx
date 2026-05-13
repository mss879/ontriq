import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Annual Returns Filing Services Sri Lanka | ROC Compliance | Ontriq',
  description: 'Annual returns filing and ROC compliance services in Sri Lanka. Ontriq manages statutory filings, register maintenance, and Registrar of Companies compliance for your business.',
  keywords: ['annual returns filing Sri Lanka', 'ROC compliance', 'statutory filing', 'company annual returns', 'registrar of companies Sri Lanka'],
  openGraph: {
    title: 'Annual Returns Filing Services Sri Lanka | Ontriq',
    description: 'Stay compliant with annual returns filing and ROC requirements.',
    url: 'https://www.ontriq.com/services/company-formation/annual-returns-filing',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Annual Returns Filing Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image', title: 'Annual Returns Filing Services Sri Lanka | Ontriq', description: 'Stay compliant with annual returns filing and ROC requirements.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation/annual-returns-filing' },
};

export default function AnnualReturnsFilingPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": "Annual Returns Filing", "serviceType": "Corporate Compliance", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" }, "areaServed": { "@type": "Country", "name": "Sri Lanka" } };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    { "@type": "ListItem", "position": 4, "name": "Annual Returns Filing", "item": "https://www.ontriq.com/services/company-formation/annual-returns-filing" },
  ]};

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="005-E" title="Annual Returns" subtitle="Filing & Compliance" description="Every registered company in Sri Lanka must file annual returns with the Registrar of Companies. Ontriq ensures your business stays compliant with all statutory filing deadlines and regulatory requirements." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Annual Returns in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Under the Companies Act No. 07 of 2007, all registered companies in Sri Lanka must file an annual return with the Registrar of Companies within 20 months of incorporation and annually thereafter. Failure to file can result in penalties, director disqualification, and even company strike-off.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq manages the entire annual compliance cycle for your business. This includes preparing annual returns, maintaining statutory registers, and filing changes in directors, shareholders, and registered office address.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Handle</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Annual return preparation and filing', 'Statutory register maintenance', 'Director and shareholder change filings', 'Registered office address changes', 'Share allotment and transfer filings', 'Special resolution filings', 'AGM documentation and minutes', 'Compliance calendar management'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Compliance Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Non-compliance with annual filing requirements can lead to monetary penalties, loss of good standing status, difficulty obtaining bank facilities, ineligibility for government contracts, and in extreme cases, company deregistration. Maintaining compliance is essential for business continuity and credibility.</p>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Annual returns filing is part of our <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation services</Link>. For board-level compliance, see our <Link href="/services/director-services" className="text-[#0098F3] font-semibold hover:underline">director services</Link>.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
