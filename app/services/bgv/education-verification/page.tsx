import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Education Verification Services in Sri Lanka';
const DESCRIPTION = 'Education verification in Sri Lanka. Ontriq confirms degrees, diplomas, O/L and A/L results and professional qualifications directly with the issuing institution.';
const URL = 'https://www.ontriq.com/services/bgv/education-verification';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['education verification Sri Lanka', 'degree verification Sri Lanka', 'academic credential verification', 'certificate verification Sri Lanka', 'O/L A/L certificate verification'],
  openGraph: {
    title: TITLE,
    description: 'Degrees, diplomas and exam results confirmed directly with the issuing institution.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Education Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Degrees, diplomas and exam results confirmed directly with the issuing institution.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'How do you verify a degree from a Sri Lankan university?',
    answer: 'We contact the registrar or examinations division of the awarding university to confirm the degree, class, field of study and year of award against the certificate the candidate supplied. We also confirm that the institution is one of the state universities under the University Grants Commission or a recognised degree-awarding institute.',
  },
  {
    question: 'Can you verify G.C.E. O/L and A/L results?',
    answer: 'Yes. O/L and A/L results are issued by the Department of Examinations. For certificates issued from 2001 onwards, candidates can generate an official certificate through the Department\'s online certificate service, which we then check. For older results we work from the candidate\'s certificate and the Department\'s records.',
  },
  {
    question: 'What about foreign degrees taught at a local campus?',
    answer: 'Many Sri Lankan private campuses deliver degrees awarded by universities in the UK, Australia and elsewhere. In those cases the awarding body is the foreign university, so we verify the award with that university (or its official verification service) and confirm the candidate attended the local partner campus.',
  },
  {
    question: 'How long does education verification take?',
    answer: 'Typically 4 to 7 working days, depending on how quickly the institution responds. It runs in parallel with the other checks in a case, so a complete background verification is still delivered within 7 working days.',
  },
];

export default function EducationVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Educational Background Verification",
    "serviceType": "Education Verification",
    "url": URL,
    "provider": { "@type": "Organization", "@id": "https://www.ontriq.com/#organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "isRelatedTo": { "@id": "https://www.ontriq.com/services/bgv#service" },
    "description": DESCRIPTION,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Education Verification", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-B"
        title="Education Verification"
        subtitle="Services in Sri Lanka"
        description="Academic credential fraud is a growing concern for employers. Our education verification services confirm that the qualifications a candidate claims are genuine, accurate, and awarded by a recognised institution."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Education Verification' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Educational Background Verification?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Educational background verification is the process of confirming a candidate&apos;s academic qualifications by contacting the educational institutions they claim to have attended. This includes verifying degrees, diplomas, professional certifications, dates of attendance, and the accreditation status of the institutions themselves.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In Sri Lanka, academic credential fraud can range from falsified degree certificates to misrepresented grades and fabricated institutional affiliations. Our verification team directly contacts universities, technical colleges, professional certification bodies, and training institutes to validate every claim made by a candidate.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What We Verify
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Degree or diploma earned',
              'Field of study and specialization',
              'Dates of enrollment and graduation',
              'Grades or classifications achieved',
              'Recognition of the awarding institution',
              'Authenticity of certificates provided',
              'G.C.E. O/L and A/L examination results',
              'Professional qualifications and memberships',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Sri Lankan Qualifications and Where We Verify Them
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Each kind of qualification has a different issuing authority, and genuine verification means going back to that authority rather than relying on the certificate alone:
          </p>
          <div className="space-y-4 mb-12">
            {[
              { title: 'State university degrees', desc: 'Confirmed with the registrar or examinations division of the university. State universities operate under the University Grants Commission (UGC), which maintains the list of universities and recognised degree-awarding institutes.' },
              { title: 'G.C.E. O/L and A/L results', desc: 'Issued by the Department of Examinations. Certificates from 2001 onwards can be generated officially through the Department\'s online certificate service, so a photocopy is never the only evidence.' },
              { title: 'Private campuses and foreign-awarded degrees', desc: 'Where a local campus delivers a degree awarded by an overseas university, we confirm the award with the awarding university and the candidate\'s enrolment with the local campus.' },
              { title: 'Professional qualifications', desc: 'Accounting, marketing, HR, IT and other professional qualifications are confirmed with the body that awarded them, including membership status where the role requires it.' },
              { title: 'Vocational and technical qualifications', desc: 'National Vocational Qualifications (NVQ) and technical college certificates are checked with the issuing institute or training authority.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Common Education Discrepancies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The most frequent issues we see are degrees listed as completed when the candidate did not graduate, upgraded classes (a pass presented as a second class upper), qualifications from institutions that are not authorised to award degrees, and certificates that have been edited or entirely fabricated. A candidate who is still completing a degree is not necessarily being dishonest, but the CV should say so, and our report makes the difference clear. For a step-by-step method you can follow in-house, see our guide on <Link href="/resources/how-to-verify-educational-certificates-in-sri-lanka" className="text-[#0098F3] font-semibold hover:underline">how to verify educational certificates in Sri Lanka</Link>.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Why Educational Verification Matters
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Hiring a candidate with fabricated academic credentials can have serious consequences for your organization &mdash; from reduced work quality and compliance violations to legal liability and reputational damage. In regulated industries such as healthcare, finance, and education, credential fraud can pose direct safety risks.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Educational verification ensures that every member of your workforce genuinely possesses the knowledge and qualifications required for their role, protecting your organization and maintaining the integrity of your team.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Verification Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Document Collection', desc: 'The candidate gives written consent and uploads certificates, transcripts, and institution details through our secure portal.' },
              { step: '02', title: 'Institutional Contact', desc: 'Our analysts contact the registrar or examination department of each institution to verify the details provided by the candidate.' },
              { step: '03', title: 'Recognition Check', desc: 'We confirm that the institution is recognised by the relevant authority in Sri Lanka or, for overseas awards, in the awarding country.' },
              { step: '04', title: 'Certificate Authentication', desc: 'Physical or digital certificates are cross-referenced with institutional records to confirm their authenticity.' },
              { step: '05', title: 'Report Compilation', desc: 'Verified results are compiled and delivered as part of the comprehensive background verification report.' },
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

          <BgvSubpageFaq heading="Education Verification FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Education verification is one check within our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>. Add employment, identity and criminal record checks and receive one consolidated report within 7 working days.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="education-verification"
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
