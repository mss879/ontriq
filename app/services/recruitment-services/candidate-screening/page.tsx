import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Candidate Screening & Assessment Services Sri Lanka | Ontriq',
  description: 'Comprehensive candidate screening and pre-employment assessment in Sri Lanka. Psychometric testing, skills evaluation, reference checks, and background verification.',
  keywords: ['candidate screening Sri Lanka', 'pre-employment assessment', 'psychometric testing Sri Lanka', 'skills assessment', 'candidate evaluation'],
  openGraph: {
    title: 'Candidate Screening & Assessment Services Sri Lanka | Ontriq',
    description: 'Rigorous candidate screening and assessment for confident hiring decisions.',
    url: 'https://www.ontriq.com/services/recruitment-services/candidate-screening',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Candidate Screening' }],
  },
  twitter: { card: 'summary_large_image', title: 'Candidate Screening & Assessment Services Sri Lanka | Ontriq', description: 'Rigorous candidate screening and assessment for confident hiring decisions.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/candidate-screening' },
};

export default function CandidateScreeningPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Candidate Screening & Assessment", "serviceType": "Pre-Employment Screening",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "Candidate Screening", "item": "https://www.ontriq.com/services/recruitment-services/candidate-screening" },
    ],
  };

  const screeningMethods = [
    'Structured competency-based interviews', 'Psychometric and personality assessments',
    'Technical skills testing', 'Cognitive ability and aptitude tests',
    'Language proficiency assessments', 'Situational judgment tests',
    'Professional reference checks', 'Full background verification (BGV)',
  ];

  const processSteps = [
    { step: '01', title: 'Role Profiling', desc: 'We define competencies, skills, and attributes required for success in the role.' },
    { step: '02', title: 'Initial Screening', desc: 'CV review and phone screening to filter candidates on minimum qualifications.' },
    { step: '03', title: 'Assessment Battery', desc: 'Psychometric tests, skills evaluations, and situational judgment assessments.' },
    { step: '04', title: 'Structured Interviews', desc: 'In-depth competency-based interviews by trained recruitment consultants.' },
    { step: '05', title: 'Background Verification', desc: 'Full BGV including employment, education, criminal records, and references.' },
    { step: '06', title: 'Candidate Report', desc: 'Comprehensive report with scores, findings, and hiring recommendations.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="003-C" title="Candidate Screening" subtitle="& Assessment"
        description="Making the right hiring decision starts with rigorous screening. Our candidate assessment services combine structured interviews, skills testing, psychometric evaluation, and comprehensive background verification." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is Candidate Screening?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Candidate screening is the systematic evaluation of job applicants to determine their suitability for a role. It goes beyond reviewing CVs, involving structured interviews, competency assessments, personality profiling, and thorough verification of claimed qualifications and work history.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">At Ontriq, our screening integrates with our in-house <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link>. Every candidate undergoes employment history verification, educational checks, criminal record screening, and reference validation.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Screening Methods</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {screeningMethods.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Screening Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">A bad hire can cost up to 30% of the employee&apos;s annual salary. Proper screening reduces hiring risk, improves retention, ensures cultural alignment, and protects your organization from legal and reputational consequences.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Process</h2>
          <div className="space-y-6 mb-12">
            {processSteps.map((item, i) => (
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
            <p className="text-slate-600">Candidate screening is part of our <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us to improve your hiring quality.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
