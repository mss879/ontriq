import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Identity & Address Verification Services',
  description: 'Verify candidate identity and residential address in Sri Lanka. Ontriq authenticates government IDs, NICs, passports, and confirms address details.',
  keywords: ['identity verification Sri Lanka', 'address verification', 'NIC verification', 'passport verification', 'identity authentication'],
  openGraph: {
    title: 'Identity & Address Verification Services',
    description: 'Authenticate government IDs and verify residential addresses.',
    url: 'https://www.ontriq.com/services/background-verification-services/identity-address-verification',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Identity Verification' }],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/background-verification-services/identity-address-verification' },
};

export default function IdentityAddressVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Identity & Address Verification", "serviceType": "Identity Verification",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Identity and address verification services in Sri Lanka.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/background-verification-services" },
      { "@type": "ListItem", "position": 4, "name": "Identity & Address Verification", "item": "https://www.ontriq.com/services/background-verification-services/identity-address-verification" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="001-D" title="Identity & Address" subtitle="Verification"
        description="Identity and address verification forms the foundation of any background check. We authenticate government-issued identification documents and confirm residential addresses to establish a candidate's true identity." />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is Identity & Address Verification?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Identity verification confirms that a candidate is who they claim to be by authenticating government-issued identification documents such as National Identity Cards (NICs), passports, driving licenses, and birth certificates. Address verification confirms current and past residential addresses through database checks and, where necessary, physical field visits.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In Sri Lanka, identity fraud can range from using another person&apos;s NIC to providing false address information. Our verification process uses multiple data sources and cross-referencing techniques to detect and flag such discrepancies.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Verify</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['National Identity Card (NIC) authenticity', 'Passport verification and validity', 'Driving license authentication', 'Current residential address', 'Previous residential addresses', 'Duration of residence at each address', 'Cross-referencing with utility records', 'Field visit verification (where required)'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Identity Verification Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Identity verification is the foundation of the entire background check process. If a candidate&apos;s identity cannot be confirmed, no other verification &mdash; employment, education, or criminal &mdash; can be considered reliable. Establishing a candidate&apos;s true identity protects your organization from fraud, impersonation, and the legal complications that arise from hiring someone under a false identity.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Verification Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Document Collection', desc: 'Candidates submit copies of government-issued IDs and address proof through our secure portal.' },
              { step: '02', title: 'Document Authentication', desc: 'Our analysts verify the authenticity of submitted documents using database checks and visual inspection.' },
              { step: '03', title: 'Address Verification', desc: 'Current and previous addresses are verified through database cross-referencing and field visits where necessary.' },
              { step: '04', title: 'Cross-Referencing', desc: 'All identity data is cross-referenced across multiple sources to detect inconsistencies.' },
              { step: '05', title: 'Report Integration', desc: 'Verified identity and address data is compiled into the comprehensive BGV report.' },
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
            <p className="text-slate-600">Identity verification is part of our <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link>.</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/background-verification-services/employment-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Employment Verification</h3>
                <p className="text-xs text-slate-500">Verify past job roles & tenure</p>
              </Link>
              <Link href="/services/background-verification-services/education-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Education Verification</h3>
                <p className="text-xs text-slate-500">Validate academic credentials</p>
              </Link>
              <Link href="/services/background-verification-services/criminal-record-check" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Criminal Record Check</h3>
                <p className="text-xs text-slate-500">Police & court record screening</p>
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
