import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Credit History Checks for Employers in Sri Lanka';
const DESCRIPTION = 'Pre-employment credit history checks in Sri Lanka for finance-sensitive roles. Ontriq coordinates the candidate\'s CRIB credit report with consent and reviews it against the role.';
const URL = 'https://www.ontriq.com/services/bgv/credit-history-check';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['credit check Sri Lanka employment', 'CRIB report employer', 'pre-employment credit check', 'credit history check Sri Lanka', 'employee financial background check'],
  openGraph: {
    title: TITLE,
    description: 'CRIB credit reports for finance-sensitive roles, coordinated with candidate consent.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Credit History Check' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'CRIB credit reports for finance-sensitive roles, coordinated with candidate consent.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'Can an employer get a candidate\'s CRIB report directly?',
    answer: 'No. CRIB shares credit information with lending institutions for credit purposes. For employment, the candidate obtains their own self-inquiry credit report from CRIB and shares it with the employer, with written consent. We coordinate that process and review the report on your behalf.',
  },
  {
    question: 'Which roles should include a credit check?',
    answer: 'Roles with real financial exposure: cashiers and tellers, accounts and treasury staff, staff who approve payments or handle procurement, and senior managers with signing authority. For most other roles a credit check is not proportionate and should not be requested.',
  },
  {
    question: 'Does a poor credit history mean the candidate should be rejected?',
    answer: 'No. Missed payments often reflect illness, a family emergency or wider economic pressure rather than dishonesty. A credit report is one input for finance-sensitive roles, and the candidate should have the chance to explain anything material before a decision is made.',
  },
  {
    question: 'How long does a credit history check take?',
    answer: 'It depends mainly on how quickly the candidate obtains their self-inquiry report. Once the report is shared, the review runs alongside the other checks, so the case is still delivered within our 7-working-day turnaround.',
  },
];

export default function CreditHistoryCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Credit History Check",
    "serviceType": "Pre-Employment Credit Check",
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
      { "@type": "ListItem", "position": 4, "name": "Credit History Check", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-H"
        title="Credit History Checks"
        subtitle="for Employers in Sri Lanka"
        description="For roles that handle cash, accounts or payment approvals, a candidate's credit history is a legitimate part of the risk picture. We coordinate the candidate's credit report with their consent and review it against the responsibilities of the role."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Credit History Check' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is a Pre-Employment Credit Check?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A pre-employment credit check reviews a candidate&apos;s credit record (the loans, leases and credit cards they hold, and how reliably they have been repaid) before they are appointed to a financially sensitive role. It is not a judgement on a person&apos;s wealth. It helps an employer understand whether the role could place someone under financial pressure that the organisation should be aware of, and whether the candidate&apos;s account of their circumstances is accurate.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Credit checks are a targeted check, not a routine one. We recommend them only where the role&apos;s responsibilities justify it, which keeps the screening proportionate and respectful of candidate privacy.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            How Credit Information Works in Sri Lanka
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Credit records in Sri Lanka are held by the <strong>Credit Information Bureau of Sri Lanka (CRIB)</strong>, established under the Credit Information Bureau of Sri Lanka Act, No. 18 of 1990. Banks and other lending institutions report to CRIB and use its reports when deciding whether to extend credit.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Employers are not lenders, so they do not request a candidate&apos;s report from CRIB directly. Instead, the candidate requests their own <strong>self-inquiry credit report</strong> from{' '}
            <a href="https://www.crib.lk/" target="_blank" rel="noopener noreferrer" className="text-[#0098F3] font-semibold hover:underline">CRIB</a>{' '}
            and shares it with the employer under a written consent. Ontriq manages this step: we explain to the candidate what is needed, collect the report through our secure portal, and review it so your hiring team receives a clear summary rather than raw financial data.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What We Review
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Current credit facilities and their status',
              'Repayment history and arrears',
              'Facilities classified as non-performing',
              'Guarantees given for others\' borrowings',
              'Consistency with information the candidate disclosed',
              'Relevance of findings to the role\'s responsibilities',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Roles Where a Credit Check Is Appropriate
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'Cashiers, tellers and cash-handling staff',
              'Accounts, finance and treasury teams',
              'Procurement and payment-approval roles',
              'Senior managers with signing authority',
              'Staff in banks and finance companies',
              'Roles with access to client funds or assets',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Consent and Fair Use
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Credit information is among the most sensitive personal data an employer can see. Every credit check we run starts with the candidate&apos;s written consent, collects only what the role requires, and is shared only with the people making the hiring decision, in line with the Personal Data Protection Act, No. 9 of 2022. Our <Link href="/resources/personal-data-protection-act-guide-for-employers" className="text-[#0098F3] font-semibold hover:underline">PDPA guide for employers</Link> explains the principles.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Findings should be weighed, not used as an automatic filter. A single missed payment years ago says little about someone&apos;s integrity. Large undisclosed debts, or facilities in default for a candidate who will control payments, are the kind of findings worth discussing with the candidate before an offer is confirmed.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Our Credit Check Process
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Role Assessment', desc: 'We confirm with you that the role\'s financial responsibilities justify a credit check.' },
              { step: '02', title: 'Consent', desc: 'The candidate gives written consent through our secure portal, with a clear explanation of what will be reviewed and why.' },
              { step: '03', title: 'Report Coordination', desc: 'We guide the candidate to obtain their CRIB self-inquiry report and collect it securely.' },
              { step: '04', title: 'Analyst Review', desc: 'Our analysts review the report against the role and the candidate\'s own disclosures, with dual-analyst quality control.' },
              { step: '05', title: 'Confidential Summary', desc: 'You receive a concise summary of material findings within the full background verification report.' },
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

          <BgvSubpageFaq heading="Credit History Check FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Credit history checks are an optional addition to our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>, usually paired with a <Link href="/services/bgv/criminal-record-check" className="text-[#0098F3] font-semibold hover:underline">criminal record check</Link> and <Link href="/services/bgv/global-sanction-screening" className="text-[#0098F3] font-semibold hover:underline">sanction screening</Link> for finance roles.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="credit-history-check"
            guides={[
              { href: '/resources/personal-data-protection-act-guide-for-employers', title: 'Sri Lanka\'s Personal Data Protection Act: A Guide for Employers' },
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
