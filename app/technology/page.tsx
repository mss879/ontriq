import type { Metadata } from 'next';
import { TechnologyContent } from './technology-content';

export const metadata: Metadata = {
  title: 'Technology & Infrastructure | Ontriq',
  description: 'Discover Ontriq\'s advanced technology infrastructure, including ATS, automated verification platforms, and secure HR management systems aligned with ISO 27001:2013.',
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
        url: 'https://www.ontriq.com/ontriq%20favicon.png',
        width: 512,
        height: 512,
        alt: 'Ontriq',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology & Infrastructure | Ontriq',
    description: 'Discover Ontriq\'s advanced technology infrastructure, including ATS, automated verification platforms, and secure HR management systems.',
    images: ['https://www.ontriq.com/ontriq%20favicon.png'],
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
        url: 'https://www.ontriq.com/ontriq%20favicon.png'
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
    </>
  );
}

