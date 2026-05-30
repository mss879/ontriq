import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executive Search & Headhunting Services Sri Lanka | Ontriq',
  description: 'Find senior leaders and C-suite executives in Sri Lanka with Ontriq\'s executive search service. Confidential headhunting for board-level, director, and specialist roles.',
  keywords: ['executive search Sri Lanka', 'headhunting Sri Lanka', 'C-suite recruitment', 'senior executive hiring', 'leadership recruitment Sri Lanka'],
  openGraph: {
    title: 'Executive Search & Headhunting Services Sri Lanka | Ontriq',
    description: 'Confidential executive search and headhunting for senior leadership roles in Sri Lanka.',
    url: 'https://www.ontriq.com/services/recruitment-services/executive-search',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Executive Search' }],
  },
  twitter: { card: 'summary_large_image', title: 'Executive Search & Headhunting Services Sri Lanka | Ontriq', description: 'Confidential executive search and headhunting for senior leadership roles in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/executive-search' },
};

export default function ExecutiveSearchPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Executive Search & Headhunting", "serviceType": "Executive Search",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Confidential executive search and headhunting services for senior leadership positions in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "Executive Search", "item": "https://www.ontriq.com/services/recruitment-services/executive-search" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="003-A" title="Executive Search" subtitle="& Headhunting"
        description="When you need to fill critical leadership positions, you need a recruitment partner who can identify, approach, and secure the best executive talent in Sri Lanka, confidentially and efficiently." />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Executive Search?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Executive search, also known as headhunting, is a specialized recruitment service focused on identifying and attracting senior-level candidates for leadership and strategic positions. Unlike standard recruitment, executive search is a proactive, research-driven process where our consultants directly approach high-caliber professionals who may not be actively seeking new opportunities.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In Sri Lanka&apos;s competitive executive talent market, the best leaders are rarely found through job boards or advertisements. Ontriq&apos;s executive search team leverages deep industry connections, confidential networking, and rigorous assessment methodologies to identify candidates who match not only the technical requirements of the role but also the cultural and strategic vision of your organization.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Roles We Recruit For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Chief Executive Officer (CEO)',
              'Chief Financial Officer (CFO)',
              'Chief Technology Officer (CTO)',
              'Chief Operating Officer (COO)',
              'Managing Director',
              'General Manager',
              'Vice President & Director roles',
              'Country Manager & Regional heads',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Why Executive Search Matters
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A poor leadership hire can cost an organization significantly, not just in direct compensation, but in lost productivity, team morale, strategic misdirection, and reputational damage. Executive search minimizes this risk by ensuring a thorough, evidence-based approach to identifying and evaluating leadership candidates.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Our executive search process includes comprehensive background verification through our in-house BGV team, ensuring that every leadership candidate&apos;s credentials, employment history, and professional reputation are validated before they join your organization.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Executive Search Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Briefing & Specification', desc: 'We work closely with your board or leadership team to define the role requirements, candidate profile, and cultural fit criteria.' },
              { step: '02', title: 'Market Mapping', desc: 'Our research team maps the target talent landscape, identifying potential candidates across relevant industries and geographies.' },
              { step: '03', title: 'Confidential Approach', desc: 'We discreetly approach shortlisted candidates, presenting the opportunity while maintaining full confidentiality for both parties.' },
              { step: '04', title: 'Assessment & Shortlist', desc: 'Candidates undergo structured interviews, leadership assessments, and reference checks before being presented to your team.' },
              { step: '05', title: 'Offer & Transition', desc: 'We manage offer negotiation, resignation support, and onboarding planning to ensure a smooth leadership transition.' },
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
            <p className="text-slate-600 mb-4">
              Executive search is part of our comprehensive <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us to discuss your leadership hiring needs.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Recruitment Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
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
