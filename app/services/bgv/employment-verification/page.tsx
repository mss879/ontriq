import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Employment Verification Services in Sri Lanka';
const DESCRIPTION = 'Employment history verification in Sri Lanka. Ontriq confirms past job titles, dates, reporting lines and reasons for leaving directly with previous employers.';
const URL = 'https://www.ontriq.com/services/bgv/employment-verification';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['employment verification Sri Lanka', 'employment history check Sri Lanka', 'work history verification', 'service letter verification', 'pre-employment screening Sri Lanka'],
  openGraph: {
    title: TITLE,
    description: 'Past job titles, dates and reasons for leaving, confirmed directly with previous employers.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Employment Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Past job titles, dates and reasons for leaving, confirmed directly with previous employers.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'Is a service letter enough to prove employment in Sri Lanka?',
    answer: 'No. A service letter or certificate of service is a useful starting point, but it is supplied by the candidate and can be altered or fabricated. Verification means confirming the details directly with the issuing employer, so the letter is treated as a claim to check rather than as proof.',
  },
  {
    question: 'What happens if a previous employer has closed down?',
    answer: 'We record that the company is no longer operating and look for other evidence, such as a former manager we can reach independently, company registration records, or the candidate\'s Employees\' Provident Fund (EPF) member statement, which lists contributions by employer. The report states exactly what could and could not be confirmed.',
  },
  {
    question: 'Can you verify overseas employment?',
    answer: 'Yes, where the overseas employer or a verification partner in that country can be reached. Overseas checks can take longer than local ones because they depend on response times abroad, and we tell you at the start of the case if that is likely.',
  },
  {
    question: 'Will the candidate\'s current employer be contacted?',
    answer: 'Not without the candidate\'s explicit agreement. Contacting a current employer can put the candidate\'s job at risk, so by default we verify previous employers only and confirm the current role after an offer is accepted, or with the candidate\'s permission.',
  },
];

export default function EmploymentVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Employment History Verification",
    "serviceType": "Employment Verification",
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
      { "@type": "ListItem", "position": 4, "name": "Employment Verification", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-A"
        title="Employment Verification"
        subtitle="Services in Sri Lanka"
        description="Verifying a candidate's employment history is one of the most important steps in background verification. It confirms that the experience on a CV is real: the right employer, the right job title, the right dates, and an honest reason for leaving."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Employment Verification' },
        ]}
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
            How Employment Is Verified in Sri Lanka
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Most Sri Lankan candidates support their work history with a <strong>service letter</strong> (also called a certificate of service or experience letter) from each previous employer. These letters are a helpful map of the candidate&apos;s career, but they are not proof on their own: letterheads are easy to reproduce, and a genuine letter can still carry an edited date or title.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            We treat every letter as a claim to confirm. Our analysts find the employer&apos;s contact details independently, rather than using the phone numbers printed on the letter, and confirm the details with the HR function or an authorised manager. For companies that have closed, merged or stopped responding, we look for corroborating evidence, such as the candidate&apos;s Employees&apos; Provident Fund (EPF) member statement, which lists contributions by employer, and record in the report exactly what could be confirmed.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Common Discrepancies We Find
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Extended dates', desc: 'Start or end dates stretched to hide a gap between jobs or a short, unsuccessful role.' },
              { title: 'Inflated titles', desc: 'An executive listed as a manager, or a team member presented as the team lead.' },
              { title: 'Undisclosed exits', desc: 'A resignation that was in fact a termination, or a role left during a disciplinary process.' },
              { title: 'Unverifiable employers', desc: 'Companies that cannot be traced, or contact details that lead back to the candidate\'s acquaintances.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Not every mismatch is dishonest. A date that is a few weeks out, or a title that changed after a restructure, is usually explained by the candidate in a short conversation. Our reports separate minor inconsistencies from material ones so you can decide proportionately. Our guide to <Link href="/resources/background-check-red-flags-employers-guide" className="text-[#0098F3] font-semibold hover:underline">background check red flags</Link> explains how to handle each kind.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
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
              { step: '01', title: 'Consent & Data Collection', desc: 'The candidate gives written consent and submits employment details and service letters through our secure digital portal.' },
              { step: '02', title: 'Employer Contact', desc: 'Our analysts contact each previous employer\'s HR department or authorized personnel, using independently sourced contact details.' },
              { step: '03', title: 'Cross-Referencing', desc: 'We compare the candidate-provided data with the employer-confirmed data and identify any discrepancies.' },
              { step: '04', title: 'Quality Check', desc: 'Senior analysts review the findings for accuracy and completeness before including them in the final report.' },
              { step: '05', title: 'Report Delivery', desc: 'Confirmed employment history is delivered within the full background verification case, typically 3 to 5 working days for this check.' },
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

          <BgvSubpageFaq heading="Employment Verification FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Employment history verification is one check within our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>. Combine it with education, identity and criminal record checks in a single case delivered within 7 working days.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="employment-verification"
            guides={[
              { href: '/resources/how-to-do-background-checks-on-employees-in-sri-lanka', title: 'How to Do Background Checks on Employees in Sri Lanka' },
              { href: '/resources/how-long-does-a-background-check-take-in-sri-lanka', title: 'How Long Does a Background Check Take in Sri Lanka?' },
            ]}
          />
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
