import { TechHero } from '@/components/technology/tech-hero';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Continuity Plan & Operational Resilience | Ontriq',
  description: 'Discover Ontriq\'s robust business continuity plan. Learn how we guarantee uninterrupted HR, payroll, BGV, and recruitment services during any disruption.',
  keywords: ['business continuity', 'operational resilience', 'disaster recovery', 'service redundancy', 'workforce contingency plan', 'risk mitigation'],
  openGraph: {
    title: 'Business Continuity Plan & Operational Resilience | Ontriq',
    description: 'Discover Ontriq\'s robust business continuity plan. Learn how we guarantee uninterrupted HR, payroll, BGV, and recruitment services during any disruption.',
    url: 'https://www.ontriq.com/technology/continuity',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Business Continuity Plan & Operational Resilience | Ontriq' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Continuity Plan & Operational Resilience | Ontriq',
    description: 'Discover Ontriq\'s robust business continuity plan. Learn how we guarantee uninterrupted HR, payroll, BGV, and recruitment services during any disruption.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/technology/continuity',
  },
};

export default function ContinuityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Technology", "item": "https://www.ontriq.com/technology" },
      { "@type": "ListItem", "position": 3, "name": "Continuity", "item": "https://www.ontriq.com/technology/continuity" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TechHero 
        pageNumber="04"
        title="Our Continuity"
        subtitle="Plan"
        description={`At Ontriq, we understand the importance of uninterrupted service delivery across our core offerings, including Background Verification, Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup.

To ensure continuous operations during disruptions, we have implemented several Business Continuity options designed for resilience, flexibility, and rapid recovery.`}
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
            <Link href="/technology/security" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Security</h3>
              <p className="text-xs text-slate-500">ISMS framework</p>
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

