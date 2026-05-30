import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Volume Hiring & Mass Recruitment Services Sri Lanka | Ontriq',
  description: 'Need to hire at scale? Ontriq delivers volume hiring and mass recruitment services in Sri Lanka for BPOs, factories, retail chains, and rapidly growing businesses.',
  keywords: ['volume hiring Sri Lanka', 'mass recruitment Sri Lanka', 'bulk hiring services', 'large scale recruitment', 'BPO recruitment Sri Lanka'],
  openGraph: {
    title: 'Volume Hiring & Mass Recruitment Services Sri Lanka | Ontriq',
    description: 'Scalable mass recruitment solutions for businesses hiring at volume in Sri Lanka.',
    url: 'https://www.ontriq.com/services/recruitment-services/volume-hiring',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Volume Hiring' }],
  },
  twitter: { card: 'summary_large_image', title: 'Volume Hiring & Mass Recruitment Services Sri Lanka | Ontriq', description: 'Scalable mass recruitment solutions for businesses hiring at volume in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/volume-hiring' },
};

export default function VolumeHiringPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Volume Hiring & Mass Recruitment", "serviceType": "Volume Recruitment",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Scalable volume hiring and mass recruitment services for businesses in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "Volume Hiring", "item": "https://www.ontriq.com/services/recruitment-services/volume-hiring" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="003-B" title="Volume Hiring" subtitle="& Mass Recruitment"
        description="When your business needs to scale fast, whether launching a new operation, expanding to new markets, or staffing seasonal demand, Ontriq's volume hiring services deliver qualified candidates at speed and scale." />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Volume Hiring?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Volume hiring, also known as mass recruitment or bulk hiring, is the process of recruiting a large number of employees within a defined timeframe. This approach is essential for businesses in Sri Lanka experiencing rapid growth, launching new operations, or managing seasonal workforce demands.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Ontriq&apos;s volume hiring service combines efficient sourcing methodologies, streamlined screening processes, and scalable onboarding support to help businesses fill dozens or even hundreds of positions without compromising on candidate quality.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Industries We Serve
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'BPO and contact centers',
              'Apparel and manufacturing',
              'Retail and e-commerce',
              'Hospitality and tourism',
              'Logistics and warehousing',
              'Construction and infrastructure',
              'Agriculture and plantations',
              'Healthcare and nursing',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Why Choose Ontriq for Volume Hiring
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Mass recruitment brings unique challenges: maintaining quality across hundreds of hires, managing logistics, ensuring compliance with Sri Lankan labor laws, and verifying each candidate&apos;s background efficiently. Ontriq&apos;s integrated approach, combining recruitment with our in-house background verification team, ensures every candidate is properly vetted even at scale.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Volume Hiring Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Workforce Planning', desc: 'We analyze your hiring volume, timeline, role specifications, and budget to design a scalable recruitment plan.' },
              { step: '02', title: 'Multi-Channel Sourcing', desc: 'We activate job boards, social media, community outreach, walk-in drives, and our existing candidate database simultaneously.' },
              { step: '03', title: 'Batch Screening', desc: 'Candidates are screened through group assessments, structured interviews, and skills tests designed for high-volume efficiency.' },
              { step: '04', title: 'Background Verification', desc: 'All candidates are verified through our in-house BGV services. Even in high-volume scenarios, no shortcuts are taken.' },
              { step: '05', title: 'Coordinated Onboarding', desc: 'We coordinate batch onboarding sessions, documentation, and orientation to ensure a smooth start for all new hires.' },
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

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">
              Volume hiring is part of our comprehensive <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us for a customized volume recruitment plan.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Recruitment Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/services/recruitment-services/executive-search" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Executive Search</h3>
                <p className="text-xs text-slate-500">C-suite & leadership hiring</p>
              </Link>
              <Link href="/services/recruitment-services/candidate-screening" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Candidate Screening</h3>
                <p className="text-xs text-slate-500">Skills & culture assessment</p>
              </Link>
              <Link href="/services/recruitment-services/contract-staffing" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Contract Staffing</h3>
                <p className="text-xs text-slate-500">Flexible workforce solutions</p>
              </Link>
              <Link href="/services/recruitment-services/it-recruitment" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">IT Recruitment</h3>
                <p className="text-xs text-slate-500">Tech talent sourcing</p>
              </Link>
              <Link href="/services/recruitment-services/employer-branding" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Employer Branding</h3>
                <p className="text-xs text-slate-500">Attract top talent</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
