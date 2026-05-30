import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contract Staffing & Temporary Workforce Solutions Sri Lanka | Ontriq',
  description: 'Flexible contract staffing and temporary workforce solutions in Sri Lanka. Project-based hiring, seasonal staffing, and interim management from Ontriq.',
  keywords: ['contract staffing Sri Lanka', 'temporary staffing', 'contract employees', 'project-based hiring', 'interim management Sri Lanka'],
  openGraph: {
    title: 'Contract Staffing & Temporary Workforce Solutions Sri Lanka | Ontriq',
    description: 'Flexible contract staffing solutions for businesses in Sri Lanka.',
    url: 'https://www.ontriq.com/services/recruitment-services/contract-staffing',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Contract Staffing' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contract Staffing & Temporary Workforce Solutions Sri Lanka | Ontriq', description: 'Flexible contract staffing solutions for businesses in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/contract-staffing' },
};

export default function ContractStaffingPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Contract Staffing & Temporary Workforce", "serviceType": "Contract Staffing",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "Contract Staffing", "item": "https://www.ontriq.com/services/recruitment-services/contract-staffing" },
    ],
  };

  const staffingTypes = [
    'Project-based contract positions', 'Seasonal and peak-demand staffing',
    'Maternity and parental leave cover', 'Interim management placements',
    'Fixed-term contract employees', 'Outsourced team augmentation',
    'Temporary administrative staff', 'On-demand specialized talent',
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="003-D" title="Contract Staffing" subtitle="& Temporary Workforce"
        description="Not every role requires a permanent hire. Ontriq's contract staffing services provide flexible workforce solutions for project-based, seasonal, and interim needs across all industries in Sri Lanka." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is Contract Staffing?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Contract staffing involves hiring employees on a fixed-term or project-based basis rather than permanent employment. This model provides businesses with the flexibility to scale their workforce up or down based on demand, without the long-term commitment and overhead costs of permanent hiring.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq manages the full contract staffing lifecycle, from sourcing and screening to payroll administration and compliance management. All contract staff are background verified through our in-house BGV team and managed in compliance with Sri Lankan labor laws.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Types of Contract Staffing</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {staffingTypes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Benefits of Contract Staffing</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Contract staffing reduces fixed labour costs, provides workforce flexibility, accelerates time-to-hire, and allows companies to access specialized skills for specific projects without long-term commitment. For growing businesses in Sri Lanka, it&apos;s an efficient way to manage workforce fluctuations while maintaining compliance with EPF, ETF, and other statutory requirements.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Requirement Briefing', desc: 'Understanding your project scope, duration, required skills, and budget for contract positions.' },
              { step: '02', title: 'Talent Sourcing', desc: 'Identifying qualified candidates from our database and active sourcing channels.' },
              { step: '03', title: 'Screening & BGV', desc: 'Full candidate assessment and background verification before deployment.' },
              { step: '04', title: 'Contract & Deployment', desc: 'Managing employment contracts, onboarding, and deployment to your team.' },
              { step: '05', title: 'Payroll & Compliance', desc: 'Handling payroll, EPF/ETF contributions, and statutory compliance for contract staff.' },
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
            <p className="text-slate-600">Contract staffing is part of our <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us for flexible workforce solutions.</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Recruitment Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/services/recruitment-services/executive-search" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Executive Search</h3>
                <p className="text-xs text-slate-500">C-suite & leadership hiring</p>
              </Link>
              <Link href="/services/recruitment-services/volume-hiring" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Volume Hiring</h3>
                <p className="text-xs text-slate-500">Large-scale recruitment drives</p>
              </Link>
              <Link href="/services/recruitment-services/candidate-screening" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Candidate Screening</h3>
                <p className="text-xs text-slate-500">Skills & culture assessment</p>
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
