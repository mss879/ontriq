import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Employment History Verification Services',
  description: 'Verify candidate employment history in Sri Lanka. Ontriq confirms past job roles, tenure, designations, and reasons for leaving with accuracy and speed.',
  keywords: ['employment verification Sri Lanka', 'employment history check', 'job verification services', 'work history verification', 'pre-employment screening'],
  openGraph: {
    title: 'Employment History Verification Services',
    description: 'Verify candidate employment history with accuracy and speed.',
    url: 'https://www.ontriq.com/services/background-verification-services/employment-verification',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Employment Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employment History Verification Services',
    description: 'Verify candidate employment history with accuracy and speed.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/services/background-verification-services/employment-verification',
  },
};

export default function EmploymentVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Employment History Verification",
    "serviceType": "Employment Verification",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Comprehensive employment history verification services in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/background-verification-services" },
      { "@type": "ListItem", "position": 4, "name": "Employment Verification", "item": "https://www.ontriq.com/services/background-verification-services/employment-verification" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-A"
        title="Employment History"
        subtitle="Verification"
        description="Verifying a candidate's employment history is one of the most critical steps in the background verification process. It confirms that the professional experience claimed by a candidate is accurate and truthful."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Employment History Verification?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Employment history verification is the process of confirming a candidate&apos;s past work experience by directly contacting previous employers. This includes validating job titles, dates of employment, reporting structures, roles and responsibilities, salary details (where permitted), and reasons for leaving.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At Ontriq, we contact HR departments, direct supervisors, and other authorized personnel at each listed employer to gather accurate and reliable information. Our verification analysts cross-reference the data provided by the candidate against what is confirmed by the employer, flagging any inconsistencies for your review.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What We Verify
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Job title and designation held',
              'Dates of employment (start and end)',
              'Reporting structure and department',
              'Roles and responsibilities performed',
              'Reason for leaving the organization',
              'Eligibility for rehire status',
              'Any disciplinary actions on record',
              'Consistency with candidate-provided data',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Why Employment Verification Matters
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Resume fraud and exaggeration of work experience are more common than most employers realize. Candidates may inflate job titles, extend dates of employment, or omit positions where performance was unsatisfactory. Without proper verification, organizations risk hiring individuals who lack the experience they claim.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Thorough employment verification protects your organization from the costs of a bad hire &mdash; including wasted training resources, reduced team productivity, potential legal liabilities, and damage to your company&apos;s reputation.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Verification Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Data Collection', desc: 'We collect the candidate\'s employment details including company names, job titles, and dates through our secure digital portal.' },
              { step: '02', title: 'Employer Contact', desc: 'Our analysts contact previous employers\' HR departments or authorized personnel to verify the information provided.' },
              { step: '03', title: 'Cross-Referencing', desc: 'We compare the candidate-provided data with the employer-confirmed data and identify any discrepancies.' },
              { step: '04', title: 'Quality Check', desc: 'Senior analysts review the findings for accuracy and completeness before including them in the final report.' },
              { step: '05', title: 'Report Delivery', desc: 'The verified employment history is compiled and delivered as part of the comprehensive BGV report.' },
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
              Employment history verification is part of our comprehensive <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link> package. Contact us to learn how we can help secure your hiring process.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/background-verification-services/education-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Education Verification</h3>
                <p className="text-xs text-slate-500">Validate academic credentials</p>
              </Link>
              <Link href="/services/background-verification-services/criminal-record-check" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Criminal Record Check</h3>
                <p className="text-xs text-slate-500">Police & court record screening</p>
              </Link>
              <Link href="/services/background-verification-services/identity-address-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Identity & Address Verification</h3>
                <p className="text-xs text-slate-500">Authenticate IDs & addresses</p>
              </Link>
              <Link href="/services/background-verification-services/reference-checks" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Reference Checks</h3>
                <p className="text-xs text-slate-500">Professional reference insights</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
