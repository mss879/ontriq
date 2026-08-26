import { TechHero } from '@/components/technology/tech-hero';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Infrastructure & Automated HR Platforms | Ontriq',
  description: 'Discover Ontriq\'s robust technology infrastructure. We leverage advanced ATS, automated BGV platforms, and secure systems for premium business operations.',
  keywords: ['technology infrastructure', 'applicant tracking systems', 'ATS software', 'automated BGV platform', 'secure HR database', 'system scaling'],
  openGraph: {
    title: 'Technology Infrastructure & Automated HR Platforms | Ontriq',
    description: 'Discover Ontriq\'s robust technology infrastructure. We leverage advanced ATS, automated BGV platforms, and secure systems for premium business operations.',
    url: 'https://www.ontriq.com/technology/infrastructure',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Technology Infrastructure & Automated HR Platforms | Ontriq' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Infrastructure & Automated HR Platforms | Ontriq',
    description: 'Discover Ontriq\'s robust technology infrastructure. We leverage advanced ATS, automated BGV platforms, and secure systems for premium business operations.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/technology/infrastructure',
  },
};

export default function InfrastructurePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Technology", "item": "https://www.ontriq.com/technology" },
      { "@type": "ListItem", "position": 3, "name": "Infrastructure", "item": "https://www.ontriq.com/technology/infrastructure" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TechHero 
        pageNumber="01"
        title="Technology &"
        subtitle="Infrastructure"
        description={`At Ontriq, our investment in cutting-edge technology and robust infrastructure is central to delivering excellence across all our service verticals, including Background Verification (BGV), Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation and Regulatory Setup.

In today's fast-moving business environment, organizations require speed, precision, flexibility, and compliance, all of which are enabled by technology. Our advanced systems streamline complex processes, ensure data accuracy, enhance security, and support real-time reporting. Whether it's automating payroll, securely managing employee data, verifying candidate backgrounds, or navigating regulatory frameworks, our tech-enabled solutions are designed to meet your business objectives efficiently and reliably.

With deep domain expertise and state-of-the-art tools, we ensure your operational processes are not only optimized but aligned with your long-term strategic goals.`}
      />
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Technology Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/technology/specifications" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Specifications</h3>
              <p className="text-xs text-slate-500">Tools we use</p>
            </Link>
            <Link href="/technology/security" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Security</h3>
              <p className="text-xs text-slate-500">ISMS framework</p>
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

