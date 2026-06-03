import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { AboutHero } from '@/components/about/about-hero';

// Dynamically import below-fold components for better performance
const BgvExplanation = dynamic(
  () => import('@/components/about/bgv-explanation').then((mod) => ({ default: mod.BgvExplanation })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);

const WhatWeCheck = dynamic(
  () => import('@/components/about/what-we-check').then((mod) => ({ default: mod.WhatWeCheck })),
  { loading: () => <div className="min-h-[600px]" aria-label="Loading content..." /> }
);

const VisionMission = dynamic(
  () => import('@/components/about/vision-mission').then((mod) => ({ default: mod.VisionMission })),
  { loading: () => <div className="min-h-[400px]" aria-label="Loading content..." /> }
);

const ValuesSection = dynamic(
  () => import('@/components/about/values-section').then((mod) => ({ default: mod.ValuesSection })),
  { loading: () => <div className="min-h-[400px]" aria-label="Loading content..." /> }
);

export const metadata: Metadata = {
  title: 'About Ontriq | Sri Lanka\'s Trusted Workforce Solutions Partner',
  description: 'Ontriq is a division of Konnect BPO Technologies delivering verification, HR, recruitment, payroll, and business formation solutions across Sri Lanka.',
  keywords: [
    'about Ontriq',
    'Ontriq company',
    'workforce solutions Sri Lanka',
    'Ontriq Sri Lanka',
    'business solutions provider',
  ],
  openGraph: {
    title: 'About Ontriq | Sri Lanka\'s Trusted Workforce Solutions Partner',
    description: 'Ontriq delivers expert workforce solutions including verification, HR, recruitment, and business formation across Sri Lanka.',
    url: 'https://www.ontriq.com/about',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ontriq | Workforce Solutions Partner',
    description: 'Sri Lanka\'s trusted workforce solutions partner delivering verification, HR, recruitment, and business formation services.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/about',
  },
};

// JSON-LD structured data for About page
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Ontriq',
  description: 'Learn about Ontriq - Sri Lanka\'s trusted workforce and business solutions provider',
  url: 'https://www.ontriq.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Ontriq',
    description: 'Ontriq is a trusted workforce solutions provider in Sri Lanka offering verification, HR, recruitment, payroll, and business formation services. Part of Konnect BPO Technologies (Pvt) Ltd.',
    foundingDate: '2025',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Konnect BPO Technologies (Pvt) Ltd',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    knowsAbout: [
      'Workforce Solutions',
      'HR Management',
      'Recruitment',
      'Payroll Processing',
      'Company Formation',
      'Verification Services',
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <main id="main-content" className="min-h-screen bg-white" role="main">
        <AboutHero />
        <BgvExplanation />
        <VisionMission />
        <WhatWeCheck />
        <ValuesSection />
      </main>
    </>
  );
}
