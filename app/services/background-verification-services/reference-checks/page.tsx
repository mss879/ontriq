import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Reference Check Services',
  description: 'Professional reference checks in Sri Lanka. Ontriq contacts previous supervisors and colleagues to verify work ethic, performance, and professional conduct.',
  keywords: ['reference check Sri Lanka', 'professional reference verification', 'employment reference check', 'character reference verification', 'supervisor reference check'],
  openGraph: {
    title: 'Professional Reference Check Services',
    description: 'Professional reference verification for informed hiring decisions.',
    url: 'https://www.ontriq.com/services/background-verification-services/reference-checks',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Reference Checks' }],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/background-verification-services/reference-checks' },
};

export default function ReferenceChecksPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Professional Reference Checks", "serviceType": "Reference Verification",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Professional reference check services in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/background-verification-services" },
      { "@type": "ListItem", "position": 4, "name": "Reference Checks", "item": "https://www.ontriq.com/services/background-verification-services/reference-checks" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="001-E" title="Professional Reference" subtitle="Checks"
        description="Professional reference checks provide invaluable insights into a candidate's work ethic, performance, and interpersonal skills that cannot be captured through documents alone." />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Are Professional Reference Checks?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Professional reference checks involve contacting previous supervisors, managers, colleagues, or other professional contacts provided by the candidate to gather qualitative feedback on their work performance, professional conduct, reliability, and suitability for the role. Unlike document-based verifications, reference checks provide subjective but highly valuable insights into how a candidate actually performs in a professional setting.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Assess</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Quality and consistency of work', 'Reliability and punctuality', 'Teamwork and collaboration skills', 'Communication and interpersonal abilities', 'Leadership and initiative', 'Response to feedback and challenges', 'Reason for leaving previous role', 'Overall recommendation for hire'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Reference Checks Matter</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A candidate may have strong credentials on paper but demonstrate poor teamwork, unreliable attendance, or a negative attitude in the workplace. Reference checks reveal these behavioral patterns that formal verifications cannot detect. They help employers make more complete, well-rounded hiring decisions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At Ontriq, our experienced analysts conduct structured reference interviews using a standardized framework that captures consistent, comparable data across all candidates while allowing referees to provide candid, open-ended feedback.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Reference Check Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Reference Collection', desc: 'We collect the names and contact details of 2-3 professional references from the candidate.' },
              { step: '02', title: 'Referee Validation', desc: 'We verify that each referee is a genuine professional contact who worked directly with the candidate.' },
              { step: '03', title: 'Structured Interview', desc: 'Our analysts conduct structured reference interviews covering performance, conduct, and suitability.' },
              { step: '04', title: 'Feedback Documentation', desc: 'All feedback is documented objectively and compiled into a structured reference report.' },
              { step: '05', title: 'Report Delivery', desc: 'The reference check findings are included in the comprehensive BGV report.' },
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

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Reference checks are part of our <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link>.</p>
          </div>
        </div>
      </section>
      <BgvQuote />
      <CTASection />
    </main>
  );
}
