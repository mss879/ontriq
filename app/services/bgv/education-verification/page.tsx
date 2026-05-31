import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Educational Background Verification Services',
  description: 'Verify academic credentials in Sri Lanka. Ontriq confirms degrees, diplomas, certifications, and institutional authenticity for employers.',
  keywords: ['education verification Sri Lanka', 'academic credential check', 'degree verification', 'certificate verification', 'educational background check'],
  openGraph: {
    title: 'Educational Background Verification Services',
    description: 'Verify academic credentials with accuracy and speed.',
    url: 'https://www.ontriq.com/services/bgv/education-verification',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Education Verification' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Background Verification Services',
    description: 'Verify academic credentials with accuracy and speed.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/bgv/education-verification' },
};

export default function EducationVerificationPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Educational Background Verification", "serviceType": "Education Verification",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Educational background verification services in Sri Lanka &mdash; confirming degrees, diplomas, and certifications.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Education Verification", "item": "https://www.ontriq.com/services/bgv/education-verification" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-B"
        title="Educational Background"
        subtitle="Verification"
        description="Academic credential fraud is a growing concern for employers. Our educational background verification services confirm that the qualifications a candidate claims are genuine, accurate, and from accredited institutions."
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
              'Accreditation of the institution',
              'Authenticity of certificates provided',
              'Professional certifications and licenses',
              'Continuing education and training courses',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
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
              { step: '01', title: 'Document Collection', desc: 'We collect copies of educational certificates, transcripts, and the names of institutions from the candidate through our secure portal.' },
              { step: '02', title: 'Institutional Contact', desc: 'Our analysts contact the registrar or examination department of each institution to verify the details provided by the candidate.' },
              { step: '03', title: 'Accreditation Check', desc: 'We verify that the institution itself is accredited and recognized by the relevant educational authorities in Sri Lanka or internationally.' },
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

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Educational background verification is part of our comprehensive <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link> package. Contact us to learn more.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/bgv/employment-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Employment Verification</h3>
                <p className="text-xs text-slate-500">Verify past job roles & tenure</p>
              </Link>
              <Link href="/services/bgv/criminal-record-check" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Criminal Record Check</h3>
                <p className="text-xs text-slate-500">Police & court record screening</p>
              </Link>
              <Link href="/services/bgv/identity-address-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Identity & Address Verification</h3>
                <p className="text-xs text-slate-500">Authenticate IDs & addresses</p>
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
