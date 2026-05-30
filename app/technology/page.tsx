import type { Metadata } from 'next';
import { TechnologyContent } from './technology-content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technology & Infrastructure | Ontriq',
  description: 'Ontriq\'s technology stack: ATS, automated verification platforms, and secure HR systems aligned with ISO 27001:2013 standards.',
  keywords: [
    'technology infrastructure',
    'background verification technology',
    'HR management systems',
    'ATS',
    'applicant tracking system',
    'data security',
    'ISO 27001:2013',
    'business continuity',
    'confidentiality policy'
  ],
  openGraph: {
    title: 'Technology & Infrastructure | Ontriq',
    description: 'Discover Ontriq\'s advanced technology infrastructure, including ATS, automated verification platforms, and secure HR management systems.',
    url: 'https://www.ontriq.com/technology',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq Technology & Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology & Infrastructure | Ontriq',
    description: 'Discover Ontriq\'s advanced technology infrastructure, including ATS, automated verification platforms, and secure HR management systems.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/technology',
  },
};

export default function TechnologyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Technology & Infrastructure at Ontriq',
    description: 'Ontriq leverages cutting-edge technology for background verification, HR management, and payroll services.',
    author: {
      '@type': 'Organization',
      name: 'Ontriq'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ontriq',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ontriq.com/ontriq-logo.png'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologyContent />
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Explore Our Technology</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/technology/infrastructure" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Infrastructure</h3>
              <p className="text-xs text-slate-500">Robust systems & platforms</p>
            </Link>
            <Link href="/technology/specifications" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Specifications</h3>
              <p className="text-xs text-slate-500">Tools we use for each service</p>
            </Link>
            <Link href="/technology/security" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Information Security</h3>
              <p className="text-xs text-slate-500">ISO 27001 ISMS framework</p>
            </Link>
            <Link href="/technology/continuity" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Business Continuity</h3>
              <p className="text-xs text-slate-500">Resilience & recovery plans</p>
            </Link>
            <Link href="/technology/confidentiality" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Confidentiality</h3>
              <p className="text-xs text-slate-500">Data protection & privacy</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


