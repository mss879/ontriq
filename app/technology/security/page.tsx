import { TechHero } from '@/components/technology/tech-hero';
import { TechContent } from '@/components/technology/tech-content';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Information Security Policy & ISO 27001 compliance | Ontriq',
  description: 'Ontriq is committed to high-grade information security. We operate under a robust ISMS framework aligned with ISO 27001:2013 standards to protect your data.',
  keywords: ['information security', 'ISO 27001:2013', 'data safety', 'ISMS framework', 'cybersecurity protocols', 'confidential client data'],
  openGraph: {
    title: 'Information Security Policy & ISO 27001 compliance | Ontriq',
    description: 'Ontriq is committed to high-grade information security. We operate under a robust ISMS framework aligned with ISO 27001:2013 standards to protect your data.',
    url: 'https://www.ontriq.com/technology/security',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Information Security Policy & ISO 27001 compliance | Ontriq' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Information Security Policy & ISO 27001 compliance | Ontriq',
    description: 'Ontriq is committed to high-grade information security. We operate under a robust ISMS framework aligned with ISO 27001:2013 standards to protect your data.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/technology/security',
  },
};

const securityPoints = [
  'Leveraging advanced IT innovations to support efficient, secure, and compliant service delivery in today\u0027s evolving business landscape.',
  'Implementing comprehensive security measures tailored to protect critical processes and data assets across all service lines, ensuring our security objectives are met.',
  'Continuously assessing and improving our information security practices to enhance our ISMS and uphold industry best practices.',
  'Managing information assets with strict adherence to contractual obligations, regulatory requirements, privacy laws, and ethical standards, aligned with ISO 27001:2013.',
  'Providing clients with ongoing improvements in process efficiency, accuracy, and quality through a combination of domain expertise and technology-driven solutions.'
];

export default function SecurityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Technology", "item": "https://www.ontriq.com/technology" },
      { "@type": "ListItem", "position": 3, "name": "Security", "item": "https://www.ontriq.com/technology/security" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TechHero 
        pageNumber="03"
        title="Information Security"
        subtitle="Management System"
        description={`At Ontriq, we are dedicated to delivering exceptional services in Background Verification (BGV), Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup, while maintaining the highest standards of information security.

We conduct all operations under a robust Information Security Management System (ISMS) framework to safeguard the confidentiality, integrity, and availability of sensitive client and company information.`}
      />
      <TechContent 
        title="Our Commitment"
        points={securityPoints}
        footerText="Every team member at Ontriq is accountable for upholding this policy and protecting information assets from unauthorized access, alteration, disclosure, or destruction, whether accidental or deliberate."
      />
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Technology Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/technology/infrastructure" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Infrastructure</h3>
              <p className="text-xs text-slate-500">Systems & platforms</p>
            </Link>
            <Link href="/technology/specifications" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Specifications</h3>
              <p className="text-xs text-slate-500">Tools we use</p>
            </Link>
            <Link href="/technology/continuity" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Continuity</h3>
              <p className="text-xs text-slate-500">Recovery plans</p>
            </Link>
            <Link href="/technology/confidentiality" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Confidentiality</h3>
              <p className="text-xs text-slate-500">Data protection</p>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">View our full <Link href="/technology" className="text-[#0098F3] font-semibold hover:underline">technology overview</Link>.</p>
        </div>
      </section>
      <CTASection />
    </main>
  );
}

