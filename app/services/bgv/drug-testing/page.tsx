import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pre-Employment Drug Testing Services in Sri Lanka',
  description: 'Pre-employment drug testing in Sri Lanka through certified laboratories. Ontriq manages consent, sample collection, chain of custody, and confidential reports.',
  keywords: ['drug testing Sri Lanka', 'pre-employment drug test', 'workplace drug testing', 'employee drug screening', 'certified laboratory drug testing'],
  openGraph: {
    title: 'Pre-Employment Drug Testing Services in Sri Lanka',
    description: 'Workplace drug testing coordinated through certified laboratories.',
    url: 'https://www.ontriq.com/services/bgv/drug-testing',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Drug Testing Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-Employment Drug Testing Services in Sri Lanka',
    description: 'Workplace drug testing coordinated through certified laboratories.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/bgv/drug-testing' },
};

export default function DrugTestingPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Pre-Employment Drug Testing", "serviceType": "Drug Testing",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Pre-employment and random drug testing services in Sri Lanka, coordinated through certified laboratories with documented chain of custody and confidential reporting.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification Services", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Drug Testing", "item": "https://www.ontriq.com/services/bgv/drug-testing" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-F"
        title="Pre-Employment Drug Testing"
        subtitle="Services in Sri Lanka"
        description="Substance misuse in the workplace puts safety, productivity, and reputation at risk. Our drug testing services, coordinated through certified laboratories, help Sri Lankan employers confirm that candidates are ready for safety-critical and trust-sensitive roles."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Pre-Employment Drug Testing?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Pre-employment drug testing screens a candidate for recent use of controlled substances before their appointment is confirmed. The candidate provides a sample at a certified laboratory, the laboratory analyzes it under controlled conditions, and the result is reported confidentially to the employer. Many organizations also adopt random or periodic testing for existing staff in safety-critical positions, where their internal policies provide for it.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Ontriq manages the entire exercise on your behalf. We coordinate authorization and scheduling, direct candidates to certified laboratories, maintain a documented chain of custody for every sample, and deliver results through a confidential report. You receive a clear outcome without having to negotiate with laboratories or handle sensitive samples and paperwork yourself.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Pre-Employment vs. Random Testing
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Pre-employment testing happens once, at the point of hiring, and gives you a clear result before a candidate joins your payroll. Random or periodic testing is a separate program: it applies to existing employees, usually in safety-critical roles, and only works when it is written into policy, communicated in advance, and applied consistently and fairly across the team. We support both. For ongoing programs, we help you set a schedule, coordinate laboratory visits, and keep records organized, so testing remains routine rather than disruptive.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Industries That Rely on Drug Testing
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Any employer can include drug testing in its screening program, but it is most common where impairment on the job could endanger people, equipment, or customers:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Manufacturing and machine operation',
              'Logistics, warehousing, and freight handling',
              'Healthcare and patient-facing roles',
              'Passenger and goods transport',
              'Safety-critical technical positions',
              'Hospitality, hotels, and food service',
              'Roles that involve driving company vehicles',
              'Positions subject to client or regulatory requirements',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            How Drug Testing Fits into a Full Background Check
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Drug testing is rarely ordered on its own. Most of our clients include it as one check within a wider background verification case that also covers employment history, education, and identity. Laboratory results are typically available within 2 to 3 working days, and because every check in a case runs in parallel, adding a drug test does not extend our overall commitment: complete multi-check cases are delivered within 7 working days. You can follow the status of each check through our real-time case tracking portal.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Employers commonly pair drug testing with a <Link href="/services/bgv/criminal-record-check" className="text-[#0098F3] font-semibold hover:underline">criminal record and legal check</Link> and <Link href="/services/bgv/identity-address-verification" className="text-[#0098F3] font-semibold hover:underline">identity and address verification</Link>. A laboratory result answers one narrow question; the combined case tells you who the candidate is, where they have lived, and whether anything in their legal history is relevant to the role. With a bad hire potentially costing up to 30% of the employee&apos;s first-year potential earnings, that fuller picture is worth having before the contract is signed.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Consent, Dignity, and Privacy
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Drug testing involves sensitive personal information, so we hold it to the same standards as every other check we run. Candidate consent is mandatory before any testing takes place, and the handling of personal data in Sri Lanka is governed primarily by the Personal Data Protection Act (No. 9 of 2022). Candidates submit their authorization and documents through our secure candidate document portal, samples are collected respectfully by trained laboratory staff, and results are shared only with the personnel your organization has authorized to receive them.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A well-run testing program should never feel punitive. Clear communication with candidates about what is being tested, why, and how their information will be used protects their dignity &mdash; and protects your employer brand at the same time.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Drug Testing Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Authorization & Consent', desc: 'We collect the candidate\'s written consent and testing authorization through our secure candidate document portal before anything is scheduled.' },
              { step: '02', title: 'Sample Collection', desc: 'The candidate attends a certified laboratory, where trained staff collect the sample under controlled and respectful conditions.' },
              { step: '03', title: 'Chain of Custody', desc: 'Every sample is logged and tracked from collection through analysis, so the result is reliably attributable to the right candidate.' },
              { step: '04', title: 'Laboratory Analysis', desc: 'The certified laboratory screens the sample, with results typically available within 2 to 3 working days.' },
              { step: '05', title: 'Confidential Reporting', desc: 'Results pass through our dual-analyst quality control and are delivered securely as part of the comprehensive BGV report.' },
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
              Drug testing is one component of our comprehensive <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>. Whether you need a single test or a full multi-check screening program for every new hire, our team will help you design the right approach for your roles and your industry.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/bgv/criminal-record-check" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Criminal Record Check</h3>
                <p className="text-xs text-slate-500">Police & court record screening</p>
              </Link>
              <Link href="/services/bgv/identity-address-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Identity & Address Verification</h3>
                <p className="text-xs text-slate-500">Authenticate IDs & addresses</p>
              </Link>
              <Link href="/services/bgv/employment-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Employment Verification</h3>
                <p className="text-xs text-slate-500">Verify past job roles & tenure</p>
              </Link>
              <Link href="/services/bgv/reference-checks" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
