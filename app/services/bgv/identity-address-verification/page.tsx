import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Identity & Address Verification in Sri Lanka';
const DESCRIPTION = 'Identity and address verification in Sri Lanka. Ontriq authenticates NICs, passports and driving licences and confirms residential addresses, including island-wide field visits.';
const URL = 'https://www.ontriq.com/services/bgv/identity-address-verification';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['identity verification Sri Lanka', 'address verification Sri Lanka', 'NIC verification', 'employee address check', 'field address verification Sri Lanka'],
  openGraph: {
    title: TITLE,
    description: 'NIC, passport and address checks with island-wide field visits.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Identity and Address Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'NIC, passport and address checks with island-wide field visits.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'How do you check that a Sri Lankan NIC is genuine?',
    answer: 'We inspect the card\'s format and security features and check that the NIC number is consistent with the details on it. Sri Lankan NIC numbers encode the holder\'s year and day of birth in both the older 9-digit-plus-letter format and the 12-digit format used since 2016, so a number that does not match the stated date of birth is an immediate flag. We then cross-reference the identity across the passport, certificates and other documents in the case.',
  },
  {
    question: 'Do you physically visit the candidate\'s address?',
    answer: 'Where the role requires it, yes. Field visits are carried out island-wide to confirm that the candidate lives at the stated address and for how long. For other roles, we verify the address through documents such as utility bills, bank statements and a Grama Niladhari certificate.',
  },
  {
    question: 'What documents are accepted as proof of address?',
    answer: 'Commonly a recent utility bill, a bank statement, a lease or deed, or a Grama Niladhari character and residence certificate. Documents in a family member\'s name are acceptable when the relationship is explained, which is common in Sri Lanka where many candidates live in the family home.',
  },
  {
    question: 'How long does identity and address verification take?',
    answer: 'Typically 2 to 4 working days, with field visits scheduled within that window. It runs alongside the other checks, so the full background verification report is delivered within 7 working days.',
  },
];

export default function IdentityAddressVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Identity & Address Verification",
    "serviceType": "Identity Verification",
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
      { "@type": "ListItem", "position": 4, "name": "Identity & Address Verification", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-D"
        title="Identity & Address"
        subtitle="Verification in Sri Lanka"
        description="Identity and address verification forms the foundation of any background check. We authenticate government-issued identification documents and confirm residential addresses to establish a candidate's true identity."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Identity & Address Verification' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is Identity &amp; Address Verification?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Identity verification confirms that a candidate is who they claim to be by authenticating government-issued identification documents such as National Identity Cards (NICs), passports, driving licenses, and birth certificates. Address verification confirms current and past residential addresses through document checks and, where necessary, physical field visits.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In Sri Lanka, identity fraud can range from using another person&apos;s NIC to providing false address information. Our verification process uses multiple data sources and cross-referencing techniques to detect and flag such discrepancies.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Verify</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['National Identity Card (NIC) authenticity', 'Passport verification and validity', 'Driving license authentication', 'Current residential address', 'Previous residential addresses', 'Duration of residence at each address', 'Consistency across all submitted documents', 'Field visit verification (where required)'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Sri Lankan Identity Documents</h2>
          <div className="space-y-4 mb-12">
            {[
              { title: 'National Identity Card (NIC)', desc: 'Issued by the Department for Registration of Persons. Older cards carry a 9-digit number followed by a letter (usually V or X); cards issued from 1 January 2016 carry a 12-digit number. Both formats encode the holder\'s year and day of birth, which lets us test the number against the candidate\'s stated date of birth.' },
              { title: 'Passport', desc: 'Checked for validity, consistency with the NIC, and name changes. Where names differ between documents, we ask for the supporting record, such as a marriage certificate or affidavit.' },
              { title: 'Driving licence', desc: 'Issued by the Department of Motor Traffic and especially relevant for roles that involve driving company vehicles.' },
              { title: 'Grama Niladhari certificate', desc: 'A character and residence certificate from the Grama Niladhari of the candidate\'s division. It supports address verification but does not replace a check of police or court records.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Identity Verification Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Identity verification is the foundation of the entire background check process. If a candidate&apos;s identity cannot be confirmed, no other verification &mdash; employment, education, or criminal &mdash; can be considered reliable. Establishing a candidate&apos;s true identity protects your organization from fraud, impersonation, and the legal complications that arise from hiring someone under a false identity.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Address verification matters most for roles with access to cash, stock, customer homes or sensitive data, where knowing where an employee actually lives is part of managing risk. It is also the check that makes a <Link href="/services/bgv/criminal-record-check" className="text-[#0098F3] font-semibold hover:underline">criminal record check</Link> meaningful, because records are searched against a confirmed identity and residence history.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Verification Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Document Collection', desc: 'Candidates give written consent and submit copies of government-issued IDs and address proof through our secure portal.' },
              { step: '02', title: 'Document Authentication', desc: 'Our analysts check each document\'s format, security features and internal consistency, including the NIC number against the date of birth.' },
              { step: '03', title: 'Address Verification', desc: 'Current and previous addresses are verified through documents and, where the role requires it, an island-wide field visit.' },
              { step: '04', title: 'Cross-Referencing', desc: 'All identity data is cross-referenced across every document in the case to detect inconsistencies.' },
              { step: '05', title: 'Report Integration', desc: 'Verified identity and address data is compiled into the comprehensive BGV report.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <BgvSubpageFaq heading="Identity &amp; Address Verification FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Identity and address verification is part of our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>, combined with employment, education and criminal checks in one report within 7 working days.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="identity-address-verification"
            guides={[
              { href: '/resources/how-to-do-background-checks-on-employees-in-sri-lanka', title: 'How to Do Background Checks on Employees in Sri Lanka' },
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
