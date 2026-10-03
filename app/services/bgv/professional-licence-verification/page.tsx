import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Professional Licence Verification in Sri Lanka';
const DESCRIPTION = 'Professional licence and registration verification in Sri Lanka. Ontriq confirms that doctors, accountants, engineers, lawyers and other professionals are registered and in good standing.';
const URL = 'https://www.ontriq.com/services/bgv/professional-licence-verification';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['professional licence verification Sri Lanka', 'SLMC registration check', 'professional registration verification', 'license verification employer', 'credential verification healthcare Sri Lanka'],
  openGraph: {
    title: TITLE,
    description: 'Registration and good standing confirmed with the professional body.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Professional Licence Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Registration and good standing confirmed with the professional body.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'How do you verify that a doctor is registered in Sri Lanka?',
    answer: 'Medical practitioners, dental surgeons and several allied professions must be registered with the Sri Lanka Medical Council (SLMC), which publishes its registers online. We confirm the registration number, name, category of registration and current status against the register, and check that it matches the candidate\'s identity documents.',
  },
  {
    question: 'Is a membership certificate enough to prove good standing?',
    answer: 'No. A certificate shows that someone was admitted at a point in time; it does not show that their membership or registration is still current, or that they have not been suspended. We confirm the current status with the professional body, and where the body offers it, obtain a letter of good standing.',
  },
  {
    question: 'Can you verify licences issued outside Sri Lanka?',
    answer: 'Yes, where the overseas regulator publishes a register or responds to verification requests. This is common for doctors, nurses and engineers who trained or practised abroad, and we advise at the start of the case if an overseas body is likely to take longer.',
  },
  {
    question: 'Is licence verification different from education verification?',
    answer: 'Yes. Education verification confirms that a qualification was awarded. Licence verification confirms that the person is currently authorised to practise. Regulated roles need both, because a valid degree does not guarantee a current registration.',
  },
];

export default function ProfessionalLicenceVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Licence Verification",
    "serviceType": "Professional License Verification",
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
      { "@type": "ListItem", "position": 4, "name": "Professional Licence Verification", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-I"
        title="Professional Licence"
        subtitle="Verification in Sri Lanka"
        description="For doctors, accountants, engineers, lawyers and other regulated professionals, a qualification is not enough. They must also hold a current registration. We confirm registration and good standing directly with the professional body before you appoint."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Professional Licence Verification' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Professional Licence Verification?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Professional licence verification confirms that a candidate holds a current registration, licence or membership with the body that regulates their profession, and that the registration is in good standing. It answers a different question from <Link href="/services/bgv/education-verification" className="text-[#0098F3] font-semibold hover:underline">education verification</Link>: a degree shows that someone qualified, but only the regulator can confirm that they are authorised to practise today.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Registrations lapse, are suspended, or are restricted to particular categories of practice. A certificate framed on a wall reveals none of that, so we always confirm the current position with the issuing body.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What We Verify
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Registration or membership number',
              'Name match with identity documents',
              'Category or class of registration',
              'Current status (active, lapsed, suspended)',
              'Date of first registration',
              'Restrictions or conditions on practice',
              'Letters of good standing, where issued',
              'Overseas registrations for foreign-trained staff',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Professions and Regulators We Verify With
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { title: 'Healthcare', desc: 'Medical practitioners, dental surgeons, pharmacists and other categories registered with the Sri Lanka Medical Council (SLMC), whose registers are published online, plus overseas medical regulators for foreign-trained staff.' },
              { title: 'Accounting and finance', desc: 'Membership of the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) and other professional accounting bodies, confirmed with the body itself, including letters of good standing where available.' },
              { title: 'Engineering', desc: 'Registration with the Engineering Council Sri Lanka and membership of professional engineering institutions, confirmed against their records.' },
              { title: 'Legal', desc: 'Enrolment as an Attorney-at-Law of the Supreme Court of Sri Lanka, confirmed for in-house counsel and legal roles.' },
              { title: 'Other regulated roles', desc: 'Any profession with a licensing or membership body, from surveyors to insurance professionals, confirmed with the relevant authority.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Why Licence Verification Matters
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In healthcare, an unregistered practitioner is a direct risk to patients and a serious liability for the hospital or clinic. In finance and engineering, signing off accounts or designs without a valid registration can invalidate the work itself. Employers in these sectors are also frequently required by clients, insurers or regulators to show that professional staff have been checked, so a documented verification protects you as well as the people you serve.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Licence checks are most valuable at the point of hire and again at renewal, because registrations can lapse after appointment. Our <Link href="/resources/pre-employment-screening-checklist-sri-lanka" className="text-[#0098F3] font-semibold hover:underline">pre-employment screening checklist</Link> shows which checks to combine for regulated roles.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Verification Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Details', desc: 'The candidate gives written consent and provides registration numbers and certificates through our secure portal.' },
              { step: '02', title: 'Register Check', desc: 'We search the regulator\'s published register or contact the body directly to confirm the registration.' },
              { step: '03', title: 'Identity Match', desc: 'We confirm the register entry belongs to the candidate by matching name and identifying details to the identity documents in the case.' },
              { step: '04', title: 'Status & Standing', desc: 'We record the current status, any conditions, and obtain good-standing confirmation where the body provides it.' },
              { step: '05', title: 'Report Delivery', desc: 'Findings pass dual-analyst quality control and are delivered within the full background verification report.' },
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

          <BgvSubpageFaq heading="Professional Licence Verification FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Professional licence verification is part of our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link> and is usually combined with education, employment and <Link href="/services/bgv/drug-testing" className="text-[#0098F3] font-semibold hover:underline">drug testing</Link> for healthcare roles.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="professional-licence-verification"
            guides={[
              { href: '/resources/how-to-verify-educational-certificates-in-sri-lanka', title: 'How to Verify Educational Certificates in Sri Lanka' },
              { href: '/resources/pre-employment-screening-checklist-sri-lanka', title: 'Pre-Employment Screening Checklist for Sri Lankan Employers' },
            ]}
          />
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
