import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Criminal Record Check Services in Sri Lanka';
const DESCRIPTION = 'Criminal record checks for employers in Sri Lanka. Ontriq screens police and court records, explains police clearance certificates, and reports findings confidentially.';
const URL = 'https://www.ontriq.com/services/bgv/criminal-record-check';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['criminal record check Sri Lanka', 'police clearance Sri Lanka employer', 'criminal background check Sri Lanka', 'court record check Sri Lanka', 'employee criminal screening'],
  openGraph: {
    title: TITLE,
    description: 'Police and court record screening for employers, reported confidentially.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Criminal Record Check' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Police and court record screening for employers, reported confidentially.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'Is a criminal record check the same as a police clearance certificate?',
    answer: 'No. A Police Clearance Certificate is an official document that Sri Lanka Police issue to the individual, who applies for it personally. A criminal record check is an employer-commissioned screening of police and court records, run with the candidate\'s consent. Some employers ask for both; many rely on the professional check because it is faster and fits into the wider verification case.',
  },
  {
    question: 'Can an employer apply for a police clearance certificate for a candidate?',
    answer: 'No. The application is made by the individual, online through the Sri Lanka Police e-services or at Police Headquarters, so an employer can only ask the candidate to obtain one. Our guide to police clearance certificates explains the process step by step.',
  },
  {
    question: 'How long does a criminal record check take?',
    answer: 'Typically 5 to 7 working days. It runs in parallel with the other checks in a case, so the complete background verification report is still delivered within 7 working days.',
  },
  {
    question: 'Should I reject a candidate who has a criminal record?',
    answer: 'Not automatically. Consider how serious the offence was, how long ago it happened, and whether it is relevant to the role. A conviction for fraud matters for a finance role in a way that an old, unrelated minor offence may not. Give the candidate a chance to explain before making a final decision.',
  },
];

export default function CriminalRecordCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Criminal Record & Legal Checks",
    "serviceType": "Criminal Background Check",
    "url": URL,
    "provider": { "@type": "Organization", "@id": "https://www.ontriq.com/#organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "isRelatedTo": { "@id": "https://www.ontriq.com/services/bgv#service" },
    "description": DESCRIPTION,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Criminal Record Check", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-C"
        title="Criminal Record Checks"
        subtitle="in Sri Lanka"
        description="Criminal record checks are essential for creating a safe and secure workplace. Our screening examines police and court records to identify past convictions or ongoing legal proceedings that are relevant to the role."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Criminal Record Check' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Are Criminal Record Checks?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Criminal record checks involve searching law enforcement and court records to determine whether a candidate has any history of criminal activity, pending legal proceedings, or past convictions. In Sri Lanka, this typically includes records maintained by the Sri Lanka Police and the relevant Magistrate&apos;s, District and High Court systems.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            These checks are particularly important for roles that involve access to sensitive information, financial assets, vulnerable populations, or positions of authority.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Screen For</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Criminal convictions and sentences', 'Pending criminal cases and charges', 'Court orders and injunctions', 'Fraud and financial crime records', 'Drug-related offenses', 'Violent crime history', 'Traffic violations (where relevant)', 'International sanction and watchlist hits'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Police Clearance Certificates vs. Criminal Record Checks</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Employers in Sri Lanka often ask for a &ldquo;police report&rdquo;, but there are three different documents in practice, and they answer different questions:
          </p>
          <div className="space-y-4 mb-12">
            {[
              { title: 'Police Clearance Certificate', desc: 'Issued by Sri Lanka Police to the individual after a police background report. The candidate applies personally, online through the police e-services or at Police Headquarters in Colombo, and it is widely used for overseas employment and visas.' },
              { title: 'Grama Niladhari character certificate', desc: 'Issued by the Grama Niladhari of the candidate\'s local division. It confirms residence and local standing, but it is not a search of police or court records.' },
              { title: 'Employer criminal record check', desc: 'Commissioned by the employer with the candidate\'s consent and run by a verification provider as part of the hiring process, with findings delivered in a confidential report alongside the other checks.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            For the full application process, documents and timelines, read our <Link href="/resources/police-clearance-certificate-sri-lanka-employer-guide" className="text-[#0098F3] font-semibold hover:underline">police clearance certificate guide for employers</Link>.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Why Criminal Checks Are Essential</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Hiring an individual with an undisclosed criminal history can expose your organization to workplace violence, theft, fraud, regulatory penalties, and legal liability. Industries such as banking, healthcare, education, and government often have statutory requirements for criminal screening. At Ontriq, we conduct all checks with proper candidate consent and in line with the Personal Data Protection Act, No. 9 of 2022.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Using the Results Fairly</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A record is information, not an automatic decision. Weigh the nature and seriousness of the offence, how long ago it occurred, and whether it is relevant to the responsibilities of the role. Give the candidate an opportunity to explain before you decide, and keep the findings confidential, shared only with the people involved in the hiring decision. Our guide to <Link href="/resources/background-check-red-flags-employers-guide" className="text-[#0098F3] font-semibold hover:underline">background check red flags</Link> covers how to handle adverse findings.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Screening Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Data Collection', desc: 'We collect identification details and signed consent authorizing the criminal background check.' },
              { step: '02', title: 'Record Searches', desc: 'Our team searches police and court records relevant to the candidate\'s identity and places of residence.' },
              { step: '03', title: 'Court Record Verification', desc: 'For flagged cases, we verify details directly with the relevant courts.' },
              { step: '04', title: 'International Screening', desc: 'Where required, we screen against global sanction lists and international watchlists.' },
              { step: '05', title: 'Confidential Reporting', desc: 'Results pass dual-analyst quality control and are delivered through encrypted channels.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <BgvSubpageFaq heading="Criminal Record Check FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Criminal record checks are one part of our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>, delivered with employment, education and identity checks in a single report within 7 working days.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="criminal-record-check"
            guides={[
              { href: '/resources/police-clearance-certificate-sri-lanka-employer-guide', title: 'Police Clearance Certificates in Sri Lanka: An Employer\'s Guide' },
              { href: '/resources/background-check-red-flags-employers-guide', title: 'Background Check Red Flags: An Employer\'s Guide' },
            ]}
          />
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
