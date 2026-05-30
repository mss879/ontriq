import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Recruitment & Technology Hiring Services Sri Lanka | Ontriq',
  description: 'Specialized IT recruitment services in Sri Lanka. Hire software developers, DevOps engineers, data scientists, cybersecurity specialists, and tech talent with Ontriq.',
  keywords: ['IT recruitment Sri Lanka', 'tech hiring Sri Lanka', 'software developer recruitment', 'DevOps hiring', 'IT staffing Sri Lanka', 'technology recruitment'],
  openGraph: {
    title: 'IT Recruitment & Technology Hiring Services Sri Lanka | Ontriq',
    description: 'Specialized IT recruitment for the Sri Lankan tech sector.',
    url: 'https://www.ontriq.com/services/recruitment-services/it-recruitment',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq IT Recruitment' }],
  },
  twitter: { card: 'summary_large_image', title: 'IT Recruitment & Technology Hiring Services Sri Lanka | Ontriq', description: 'Specialized IT recruitment for the Sri Lankan tech sector.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/it-recruitment' },
};

export default function ItRecruitmentPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "IT Recruitment & Technology Hiring", "serviceType": "IT Recruitment",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "IT Recruitment", "item": "https://www.ontriq.com/services/recruitment-services/it-recruitment" },
    ],
  };

  const techRoles = [
    'Full-stack & frontend developers', 'Backend engineers (Node.js, Python, Java)',
    'DevOps & cloud engineers', 'Data scientists & analysts',
    'Cybersecurity specialists', 'QA & test automation engineers',
    'UI/UX designers', 'IT project managers',
    'Solutions architects', 'Mobile app developers (iOS/Android)',
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="003-E" title="IT Recruitment" subtitle="& Technology Hiring"
        description="Sri Lanka's tech sector is booming, and competition for skilled IT talent is fierce. Ontriq's specialized IT recruitment service connects you with the best software engineers, DevOps specialists, data scientists, and technology leaders." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">IT Recruitment in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Sri Lanka&apos;s IT industry has grown rapidly, with increasing demand for skilled developers, engineers, and technology professionals. However, finding qualified IT talent who match both technical requirements and cultural fit remains a significant challenge for employers.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq&apos;s IT recruitment team understands the technology landscape in Sri Lanka, from startup ecosystems in Colombo to established IT firms and BPO operations. We source both active and passive IT candidates through technical communities, developer networks, and targeted outreach.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Technology Roles We Recruit</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {techRoles.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why IT Recruitment Requires Specialization</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Technical roles demand specialized screening. You need recruiters who understand tech stacks, can evaluate code portfolios, assess system design capabilities, and differentiate between junior and senior-level competencies. Generic recruitment approaches fail in the tech space because they cannot evaluate technical depth.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Our IT recruitment process includes technical screening, coding assessments, and architecture discussions, combined with our standard background verification to ensure every candidate&apos;s credentials and experience are genuine.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our IT Hiring Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Technical Brief', desc: 'Defining tech stack, seniority level, team dynamics, and project context for the role.' },
              { step: '02', title: 'Targeted Sourcing', desc: 'Reaching passive candidates through developer communities, GitHub, LinkedIn, and tech meetups.' },
              { step: '03', title: 'Technical Assessment', desc: 'Code reviews, technical interviews, and system design evaluations by our tech-savvy team.' },
              { step: '04', title: 'Culture Fit Interview', desc: 'Evaluating communication, collaboration, and alignment with your engineering culture.' },
              { step: '05', title: 'BGV & Offer', desc: 'Background verification of credentials followed by offer management and onboarding support.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">IT recruitment is part of our <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us to hire top tech talent in Sri Lanka.</p>
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
              <Link href="/services/recruitment-services/contract-staffing" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Contract Staffing</h3>
                <p className="text-xs text-slate-500">Flexible workforce solutions</p>
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
